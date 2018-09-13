import registerPromiseWorker from 'promise-worker/register'
import createRNN, { lstmModel } from 'rnn'
import inputSentences from './config/haikus-no-blank-lines'

const rnnModel = createRNN({
  modelFunc: lstmModel,
  type: 'lstm',
  input: inputSentences,
  letterSize: 20,
  hiddenSizes: [40, 40],
})

registerPromiseWorker(options => {
  if (options.getLayers) {
    return rnnModel.models.model.layers.map(layer => layer.weights)
  } else {
    return rnnModel.train(options)
  }
})
