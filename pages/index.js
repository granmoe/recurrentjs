import { Component } from 'react'
// import 'semantic-ui-css/semantic.min.css'
// import { Container, Header } from 'semantic-ui-react'

import createModel from 'rnn'
import inputSentences from '../config/input-sentences'

export default class App extends Component {
  state = {
    intervalId: null,
    hasRun: false,
  }

  train = null

  trainModel = () => {
    this.train(({ samples, argMaxPrediction, iterations }) => {
      console.log('argMaxPrediction: ', argMaxPrediction)
      console.log('samples: ', samples)
      console.log('iterations: ', iterations)
    })
  }

  init = () => {
    this.train = createModel({
      type: 'lstm',
      input: inputSentences,
      letterSize: 5,
      hiddenSizes: [20, 20],
    })
    const intervalId = setInterval(this.trainModel, 0)
    this.setState({ intervalId, hasRun: true })
  }

  pause = () => {
    if (!this.state.hasRun) {
      this.init()
      return
    }

    if (this.state.intervalId) {
      clearInterval(this.state.intervalId)
      this.setState({ intervalId: null })
    } else {
      const intervalId = setInterval(this.trainModel, 0)
      this.setState({ intervalId })
    }
  }

  render() {
    return (
      <main>
        <button type="primary" onClick={this.pause}>
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
