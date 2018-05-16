import { Component } from 'react'
// import 'semantic-ui-css/semantic.min.css'
// import { Container, Header } from 'semantic-ui-react'

import createRNN from 'rnn'
import inputSentences from '../config/input-sentences'

export default class App extends Component {
  state = {
    intervalId: null,
    hasRun: false,
  }

  rnnModel = null

  trainModel = () => {
    const { samples, argMaxPrediction, iterations } = this.rnnModel.train() // eslint-disable-line
    console.log(
      // `argMaxPrediction: ${argMaxPrediction} samples: ${samples} iterations: ${iterations}`,
      `argMaxPrediction: ${argMaxPrediction}`,
    )
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
      <main>
        <button type="primary" onClick={this.pauseOrResume}>
          {!this.state.hasRun
            ? 'Start'
            : this.state.intervalId
              ? 'Pause'
              : 'Resume'}
        </button>
        <section>
          <h1>RNNs</h1>
          <p>Here is some info about RNNs</p>
        </section>
        <section>
          <h1>Experiment</h1>
          <p>All the controls will go here with brief explanations</p>
        </section>
      </main>
    )
  }
}
