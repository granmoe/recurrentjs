/* eslint-disable */

$('#learn').click(function() {
  reinit()
  if (iid !== null) {
    clearInterval(iid)
  }
  iid = setInterval(tick, 0)
})

const reinit = () => {
  // sets global variables from textarea contents :O
  eval($('#newnet').val())
  /*
    generator = 'lstm' // or 'rnn'
    hidden_sizes = [20, 20]
    letter_size = 5

    regc = 0.000001
    learning_rate = 0.01
    clipval = 5.0
  */

  solver = new R.Solver()

  pplGraph = new Rvis.Graph()
  ppl_list = []
  tick_iter = 0

  data_sents = sampleText.split('\n').map(x => x.trim())

  initVocab(data_sents, 1) // takes count threshold for characters
  model = initModel()
}

/*
initVocab(text, count_threshold)
  sets globals:
    indexToLetter, letterToIndex, vocab, input_size, output_size, and epoch_size
  based on (text, count_threshold)

initModel()
  returns a new model based on globals:
    input_size, letter_size, hidden_sizes, output_sizes, generator

  initModel should just call initVocab to get what it needs, then return a model
  pass current globals into initModel
  then none of these need globals

Things that use indexToLetter, letterToIndex, vocab, ppl_list, tick_iter
saveModel, loadModel, predictSentence

store these in component state...or in model or something (hyperparams?)
  iTL, lTI, vocab, input_size, output_size, epoch_size (all should be returned by initVocab)
  hidden_sizes and generator come from UI

new Model(hyperparams) -> model
model(input) -> output

NEXT: Convert eval() of text area to separate controls in the top component
*/

// Still need to understand Everything that gets called in tick()
