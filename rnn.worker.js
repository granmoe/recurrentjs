import registerPromiseWorker from 'promise-worker/register'
import createRNN, { lstmModel } from 'rnn'
import inputSentences from './data/haikus-no-blank-lines'

let rnnModel

registerPromiseWorker(options => {
  if (!rnnModel) {
    try {
      rnnModel = createRNN({
        modelFunc: lstmModel,
        type: 'lstm',
        input: inputSentences,
        letterSize: 20,
        hiddenSizes: [40, 40],
      })
    } catch (error) {
      console.log({ error })
    }
  }

  if (options.getLayers) {
    return rnnModel.models.model.layers.map(layer => layer.weights)
  }

  return rnnModel.train(options)
})

// registerPromiseWorker(message => {
//   console.log({ message })
//   return 'asfd'
// })

// THIS IS THE CODE THAT SEEMS TO BE BREAKING DEVTOOLS...or at least logging it out was
// TODO: Figure out how to get around chrome choking on this...maybe do data prep outside of rnn
// const sentences = inputSentences.split('\n').map(str => str.trim())
// const charCounts = [...sentences.join('')].reduce((counts, char) => {
//   counts[char] = counts[char] ? counts[char] + 1 : (counts[char] = 1)
//   return counts
// }, {})
