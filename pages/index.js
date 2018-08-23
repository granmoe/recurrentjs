import { Component } from 'react'
import ReactChartkick, { LineChart } from 'react-chartkick'
import Chart from 'chart.js'
import {
  Provider,
  Container,
  Text,
  Button,
  Slider,
  Heading,
  Input,
  Checkbox,
  Switch,
  Label,
} from 'rebass'
import RnnWorker from '../rnn.worker.js'

ReactChartkick.addAdapter(Chart)

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
    showChart: false,
    sample: false,
  }

  trainModel = () => {
    const { temperature, learningRate } = this.state

    this.rnnWorker.postMessage({
      temperature,
      learningRate,
      sampleFrequency: 100, // this.state.sample ? 100 : null,
      numIterations: 100,
    })

    this.rnnWorker.onmessage = ({
      data: { samples = [], argMaxPrediction = '', iterations, perplexity },
    }) => {
      let nextState = {}
      if (iterations % 50 === 0) {
        nextState.perplexityList = [...this.state.perplexityList, perplexity]
      }

      if (iterations % 100 === 0) {
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
          [iterations, medianPerplexity],
        ]
        nextState.perplexityList = []
      }

      if (iterations % 10000 === 0) {
        const rawAnnealedLearningRate = this.state.learningRate * 0.9
        const [leftOfDec, rightOfDec] = String(rawAnnealedLearningRate).split(
          '.',
        )
        const annealedLearningRate = Number(
          [leftOfDec, rightOfDec.slice(0, 6)].join('.'),
        )
        const nextLearningRate = Math.max(annealedLearningRate, 0.000001)
        nextState.learningRate = nextLearningRate
      }

      if (Object.keys(nextState).length) {
        this.setState(nextState)
      }

      if (iterations % 10000 === 0) {
        // TODO IO
        // if (this.state.saveCheckpoints && this.state.localStorageKey) {
        //   window.localStorage.setItem(
        //     this.state.localStorageKey,
        //     this.state.rnnModel.toJSON(),
        //   )
        // }
      }

      if (this.state.isRunning) {
        this.trainModel()
      }
    }
  }

  init = () => {
    this.rnnWorker = new RnnWorker()
    this.trainModel()
    this.setState({ hasRun: true, isRunning: true })
  }

  pauseOrResume = () => {
    if (!this.state.hasRun) {
      this.init()
      return
    }

    if (this.state.isRunning) {
      this.setState({
        isRunning: false,
      })
    } else {
      this.setState({
        isRunning: true,
      })
      this.trainModel()
    }
  }

  // TODO IO
  // loadFromJSON = () => {
  //   this.setState({
  //     rnnModel: loadFromJSON(this.state.savedModelJson),
  //     savedModelJson: '',
  //   })
  // }

  render() {
    return (
      <Provider>
        <StyledContainer>
          <Heading>Experiment with RNN models in the browser</Heading>
          <Button onClick={this.pauseOrResume}>
            {!this.state.hasRun
              ? 'Start Training'
              : this.state.isRunning
                ? 'Pause Training'
                : 'Resume Training'}
          </Button>
          <Label>
            <Checkbox
              value={this.state.saveCheckpoints}
              onChange={() => {
                this.setState(({ saveCheckpoints }) => ({
                  saveCheckpoints: !saveCheckpoints,
                }))
              }}
            />
            Save Checkpoints?
          </Label>
          <div>
            <InputWrapper>
              Local storage key for checkpoints:{' '}
              <StyledInput
                value={this.state.localStorageKey}
                onChange={e => {
                  this.setState({ localStorageKey: e.target.value })
                }}
              />
            </InputWrapper>
          </div>
          <div>
            <InputWrapper>
              Saved model JSON
              <StyledInput
                value={this.state.savedModelJson}
                onChange={e => {
                  this.setState({ savedModelJson: e.target.value })
                }}
              />
            </InputWrapper>
          </div>
          <Button onClick={this.loadFromJSON}>Load saved model</Button>
          <Label>Sample temperature: {this.state.temperature}</Label>
          <Slider
            value={this.state.temperature}
            min="0.1"
            max="9"
            step="0.1"
            onChange={e => {
              this.setState({ temperature: Number(e.target.value) })
            }}
          />
          <Label>Learning rate: {this.state.learningRate}</Label>
          <Slider
            value={this.state.learningRate}
            min="0.00001"
            max="0.01"
            step="0.00001"
            onChange={e => {
              this.setState({ learningRate: Number(e.target.value) })
            }}
          />
          <Label>
            {this.state.showChart ? 'Hide' : 'Show'} Chart&nbsp;&nbsp;
            <Switch
              checked={this.state.showChart}
              onClick={() =>
                this.setState(({ showChart }) => ({
                  showChart: !showChart,
                }))
              }
            />
          </Label>
          {this.state.showChart && (
            <LineChart data={this.state.perplexityData} />
          )}
          <Label>
            Sample&nbsp;&nbsp;
            <Switch
              checked={this.state.sample}
              onClick={() =>
                this.setState(({ sample }) => ({
                  sample: !sample,
                }))
              }
            />
          </Label>{' '}
          {this.state.sample && (
            <StyledText>
              <div>Samples:</div>
              <div>
                {this.state.samples.map((sample, i) => (
                  <div key={i}>{sample}</div>
                ))}
              </div>
              <div>Argmax Prediction:</div>
              <div>{this.state.argMaxPrediction}</div>
            </StyledText>
          )}
          <StyledText>
            <div>Iterations: {this.state.iterations}</div>
          </StyledText>
        </StyledContainer>
      </Provider>
    )
  }
}

const InputWrapper = Label.extend`
  display: flex;
  justify-content: space-between;
`

const StyledInput = Input.extend`
  width: 200px;
`

const StyledContainer = Container.extend`
  > * {
    margin-bottom: 15px;
  }
`

const StyledText = Text.extend`
  > * {
    margin-bottom: 15px;
  }
`
