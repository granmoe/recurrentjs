import React, { Component } from 'react'
import styled from 'styled-components'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts'
import PromiseWorker from 'promise-worker'
import rnnWorker from '../rnn.worker' // eslint-disable-line import-default

export default class App extends Component {
  state = {
    isRunning: false,
    hasRun: false,
    temperature: 1,
    learningRate: 0.01,
    samples: [],
    argMaxPrediction: null,
    iterations: 0,
    saveCheckpoints: false,
    localStorageKey: '',
    savedModelJson: '',
    perplexityData: [],
    perplexityList: [],
    showChart: true,
    sample: true,
  }

  componentDidMount() {
    this.workers = Array.from(
      { length: window.navigator.hardwareConcurrency },
      () => new PromiseWorker(rnnWorker()),
    )
  }

  train = async () => {
    const { temperature, learningRate } = this.state

    const results = await Promise.all(
      this.workers.map(worker =>
        worker.postMessage({
          temperature,
          learningRate,
          sampleFrequency: this.state.sample ? 100 : null,
          numIterations: 100,
        }),
      ),
    )

    const {
      samples = [],
      argMaxPrediction = '',
      iterations,
      perplexity,
    } = results[0]

    let nextState = {}
    if (iterations % 50 === 0) {
      nextState.perplexityList = [...this.state.perplexityList, perplexity]
    }

    if (iterations % 100 === 0) {
      await this.mergeModels()
      nextState = {
        ...nextState,
        argMaxPrediction,
        samples,
        iterations,
      }
    }

    if (iterations % 500 === 0) {
      const median = arr =>
        arr.length % 2 === 0
          ? (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2
          : arr[Math.floor(arr.length / 2)]
      const pplList = [...this.state.perplexityList, perplexity].sort(
        (a, b) => a - b,
      )
      // TODO: should create a little helper function to calc median
      // Maybe use a little math util lib (could use in rnn lib, too)
      const medianPerplexity = median(pplList)

      nextState.perplexityData = [
        ...this.state.perplexityData,
        { iterations, medianPerplexity },
      ]
      nextState.perplexityList = []
    }

    if (iterations % 10000 === 0) {
      // TODO: Call a function that merges models and updates workers[0] model with result
      const rawAnnealedLearningRate = this.state.learningRate * 0.9
      const [leftOfDec, rightOfDec] = String(rawAnnealedLearningRate).split('.')
      const annealedLearningRate = Number(
        [leftOfDec, rightOfDec.slice(0, 6)].join('.'),
      )
      const nextLearningRate = Math.max(annealedLearningRate, 0.000001)
      nextState.learningRate = nextLearningRate
    }

    if (Object.keys(nextState).length > 1) {
      this.setState(nextState)
    }

    if (this.state.isRunning) {
      this.train()
    }
  }

  mergeModels = async () => {
    // Average all layers
    // Set each layer to the average
    // They will be different each merge due to having run on different examples
    const allModels = await Promise.all(
      this.workers.map(worker => worker.postMessage({ getLayers: true })),
    )

    const [firstModelLayers] = allModels
    const averagedLayers = []

    // all models have layers of same dimensions
    for (
      let layerIndex = 0;
      layerIndex < firstModelLayers.length;
      layerIndex++
    ) {
      const layer = firstModelLayers[layerIndex]
      const averagedLayer = new Float64Array(layer.length)

      for (let weightIndex = 0; weightIndex < layer.length; weightIndex++) {
        let averagedWeight = 0
        for (let modelIndex = 0; modelIndex < allModels.length; modelIndex++) {
          averagedWeight += allModels[modelIndex][layerIndex][weightIndex]
        }
        averagedWeight /= allModels.length
        averagedLayer[weightIndex] = averagedWeight
      }

      averagedLayers.push(averagedLayer)
    }
  }

  pauseOrResume = () => {
    if (!this.state.hasRun) {
      this.setState({ hasRun: true })
    }

    if (this.state.isRunning) {
      this.setState({
        isRunning: false,
      })
    } else {
      this.setState({
        isRunning: true,
      })
      this.train()
    }
  }

  render() {
    return (
      <Wrapper>
        <Header>RNN Demo</Header>
        <Button
          value={
            this.state.hasRun
              ? this.state.isRunning
                ? 'Pause Training'
                : 'Resume Training'
              : 'Start Training'
          }
          onClick={this.pauseOrResume}
        />
        <Label>
          <input
            type="checkbox"
            defaultChecked={this.state.saveCheckpoints}
            onChange={() => {
              this.setState(({ saveCheckpoints }) => ({
                saveCheckpoints: !saveCheckpoints,
              }))
            }}
          />
          Save Checkpoints?
        </Label>
        <Label>
          Local storage key for checkpoints:{' '}
          <input
            value={this.state.localStorageKey}
            onChange={e => {
              this.setState({ localStorageKey: e.target.value })
            }}
          />
        </Label>
        <Label>
          Saved model JSON
          <input
            value={this.state.savedModelJson}
            onChange={e => {
              this.setState({ savedModelJson: e.target.value })
            }}
          />
        </Label>
        <Button value="Load saved model" onClick={this.loadFromJSON} />
        <Label>
          Sample temperature: {this.state.temperature}
          <input
            type="range"
            value={this.state.temperature}
            min="0.1"
            max="9"
            step="0.1"
            onChange={e => {
              this.setState({ temperature: Number(e.target.value) })
            }}
          />
        </Label>
        <Label>
          Learning rate: {this.state.learningRate}
          <input
            type="range"
            value={this.state.learningRate}
            min="0.00001"
            max="0.01"
            step="0.00001"
            onChange={e => {
              this.setState({ learningRate: Number(e.target.value) })
            }}
          />
        </Label>
        <Label>
          Show Chart{' '}
          <input
            type="checkbox"
            defaultChecked={this.state.showChart}
            onClick={() =>
              this.setState(({ showChart }) => ({
                showChart: !showChart,
              }))
            }
          />
        </Label>
        {this.state.showChart && this.state.perplexityData.length > 0 && (
          <LineChart
            width={600}
            height={300}
            data={this.state.perplexityData}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <Line type="monotone" dataKey="medianPerplexity" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="iterations" />
            <YAxis />
          </LineChart>
        )}
        <Label>
          Sample{' '}
          <input
            type="checkbox"
            defaultChecked={this.state.sample}
            onClick={() =>
              this.setState(({ sample }) => ({
                sample: !sample,
              }))
            }
          />
        </Label>{' '}
        {this.state.sample && (
          <React.Fragment>
            <SamplesWrapper>
              <SamplesHeading>Samples:</SamplesHeading>
              <div>
                {this.state.samples.map((sample, i) => {
                  /* eslint-disable react/no-array-index-key */
                  return <div key={i}>{sample}</div>
                  /* eslint-enable react/no-array-index-key */
                })}
              </div>
            </SamplesWrapper>
            <ArgmaxWrapper>
              <ArgmaxHeading>Argmax Prediction:</ArgmaxHeading>
              <div>{this.state.argMaxPrediction}</div>
            </ArgmaxWrapper>
          </React.Fragment>
        )}
        <div>Iterations: {this.state.iterations}</div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  margin: 15px;
  font-size: 16px;
  font-family: 'Verdana';
`

const Header = styled.div`
  margin: 10px 0 20px;
  font-size: 2.5em;
`

const Button = styled.input.attrs({ type: 'button' })`
  display: block;
  margin: 10px 0;
  cursor: pointer;
  font-weight: bold;
  color: white;
  background-color: #0099a0;
  border-radius: 5px;
  border: none;
  padding: 8px;

  :hover {
    background-color: #006b77;
  }
`

const Label = styled.label`
  display: block;
  margin: 10px 0;
`

const SamplesWrapper = styled.div`
  margin-bottom: 20px;
`

const SamplesHeading = styled.div`
  margin-bottom: 10px;
`

const ArgmaxWrapper = SamplesWrapper

const ArgmaxHeading = SamplesHeading
