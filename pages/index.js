import { Component } from 'react'
import {
  Provider,
  Container,
  Text,
  Divider,
  Button,
  Slider,
  Heading,
} from 'rebass'
import createRNN from 'rnn'
import inputSentences from '../config/input-sentences'

export default class App extends Component {
  state = {
    intervalId: null,
    hasRun: false,
    temperature: 1,
  }

  rnnModel = null
  iter = 0

  trainModel = () => {
    // prettier-ignore
    this.iter++
    const { samples, argMaxPrediction, iterations } = this.rnnModel.train({
      // eslint-disable-line
      temperature: this.state.temperature,
    })
    if (this.iter % 10 === 0) {
      console.log(`argMaxPrediction: ${argMaxPrediction}`)
      console.log(`sample: ${samples[0]}`)
      console.log(`iterations: ${iterations}`)
    }
  }

  init = () => {
    this.rnnModel = createRNN({
      type: 'lstm',
      input: inputSentences,
      letterSize: 5,
      hiddenSizes: [20, 20],
    })
    window.rnn = this.rnnModel // TODO: Delete me
    let intervalId = setInterval(() => {
      this.trainModel()
    }, 0)
    this.setState({ hasRun: true, intervalId })
  }

  pauseOrResume = () => {
    if (!this.state.hasRun) {
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

  render() {
    return (
      <Provider>
        <Container>
          <Heading>RNNs</Heading>
          <Text>Here is some info about RNNs</Text>
          <Divider w={1} color="blue" />
          <Heading>Experiment with RNN models in the browser</Heading>
          <Button onClick={this.pauseOrResume}>
            {!this.state.hasRun
              ? 'Start'
              : this.state.intervalId
                ? 'Pause'
                : 'Resume'}
          </Button>
          <Slider
            value={this.state.temperature}
            min="0.1"
            max="9"
            step="0.1"
            onChange={e => {
              this.setState({ temperature: e.target.value })
            }}
          />
        </Container>
      </Provider>
    )
  }
}
