import createRNN, { lstmModel } from 'rnn'
import inputSentences from './config/haikus-no-blank-lines'

const rnnModel = createRNN({
  modelFunc: lstmModel,
  type: 'lstm',
  input: inputSentences,
  letterSize: 20,
  hiddenSizes: [40, 40],
})

// let runningAverageMs = null

// const updateRunningAverageMs = newTime => {
//   if (runningAverageMs === null) {
//     runningAverageMs = Math.round(newTime)
//   } else {
//     Math.round((runningAverageMs = (runningAverageMs + newTime) / 2))
//   }
// }

onmessage = messageEvent => {
  const result = rnnModel.train(messageEvent.data)
  postMessage(result)
}
