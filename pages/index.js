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
import createRNN, { loadFromJSON } from 'rnn'
import inputSentences from '../config/haikus-no-blank-lines'

ReactChartkick.addAdapter(Chart)

export default class App extends Component {
  state = {
    intervalId: null,
    rnnModel: null,
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
  }

  trainModel = () => {
    const { rnnModel, temperature, learningRate } = this.state
    const {
      samples,
      argMaxPrediction,
      iterations,
      perplexity,
    } = rnnModel.train({
      temperature,
      learningRate,
    })

    let nextState = {}
    if (iterations % 10 === 0) {
      nextState.perplexityList = [...this.state.perplexityList, perplexity]
    }

    if (iterations % 50 === 0) {
      nextState = {
        ...nextState,
        argMaxPrediction,
        samples,
        iterations,
        perplexityList: [...this.state.perplexityList, perplexity],
      }
    }

    if (iterations % 250 === 0) {
      const pplList = [...this.state.perplexityList].sort((a, b) => a - b)
      const medianPerplexity = pplList[13] // TODO: should create a little helper function to calc median

      nextState.perplexityData = [
        ...this.state.perplexityData,
        [iterations, medianPerplexity],
      ]
      nextState.perplexityList = []
    }

    if (Object.keys(nextState).length) {
      this.setState(nextState)
    }

    if (iterations % 10000 === 0) {
      if (this.state.saveCheckpoints && this.state.localStorageKey) {
        window.localStorage.setItem(
          this.state.localStorageKey,
          this.state.rnnModel.toJSON(),
        )
      }
    }
  }

  init = () => {
    this.state.rnnModel = createRNN({
      type: 'lstm',
      input: inputSentences,
      letterSize: 20,
      hiddenSizes: [40, 40],
    })

    let intervalId = setInterval(() => {
      this.trainModel()
    }, 0)
    this.setState({ hasRun: true, intervalId })
  }

  pauseOrResume = () => {
    if (!this.state.rnnModel) {
      this.init()
      return
    }

    if (this.state.intervalId) {
      clearInterval(this.state.intervalId)
      this.setState({ intervalId: null })
    } else {
      let intervalId = setInterval(() => {
        this.trainModel()
      }, 0)
      this.setState({ intervalId })
    }
  }

  loadFromJSON = () => {
    this.setState({
      rnnModel: loadFromJSON(this.state.savedModelJson),
      savedModelJson: '',
    })
  }

  render() {
    return (
      <Provider>
        <StyledContainer>
          <Heading>Experiment with RNN models in the browser</Heading>
          <Button onClick={this.pauseOrResume}>
            {!this.state.rnnModel
              ? 'Start Training'
              : this.state.intervalId
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
          <StyledText>
            <div>Samples:</div>
            <div>
              {this.state.samples.map((sample, i) => (
                <div key={i}>{sample}</div>
              ))}
            </div>
            <div>Argmax Prediction:</div>
            <div>{this.state.argMaxPrediction}</div>
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
