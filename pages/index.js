import { Component } from 'react'
import styled from 'styled-components'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts'
import Worker from '../rnn.worker'
import PromiseWorker from 'promise-worker'

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
    // this.workers = Array.from(
    //   { length: window.navigator.hardwareConcurrency },
    //   () => new PromiseWorker(new Worker()),
    // )
  }

  train = async () => {
    const { temperature, learningRate } = this.state
    debugger

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
      const medianPerplexity = median(pplList) // TODO: should create a little helper function to calc median

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

    if (Object.keys(nextState).length) {
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
    const allModelsLayers = await Promise.all(
      this.workers.map(worker => worker.postMessage({ getLayers: true })),
    )

    // for (let i = 0; i < slaveModelsLayers.length; i++) {
    //   for (let j = 0; j < slaveModelsLayers[i].length; j++) {
    //     driverModelLayers[i][j] =
    //   }
    // }
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
          onClick={this.pauseOrResume}
          value={
            !this.state.hasRun
              ? 'Start Training'
              : this.state.isRunning
              ? 'Pause Training'
              : 'Resume Training'
          }
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
        <Button onClick={this.loadFromJSON} value="Load saved model" />
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
          {this.state.showChart ? 'Hide' : 'Show'} Chart&nbsp;&nbsp;
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
        {this.state.showChart && this.state.perplexityData.length && (
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
          Sample&nbsp;&nbsp;
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
            <div>Samples:</div>
            <div>
              {this.state.samples.map((sample, i) => (
                <div key={i}>{sample}</div>
              ))}
            </div>
            <div>Argmax Prediction:</div>
            <div>{this.state.argMaxPrediction}</div>
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
