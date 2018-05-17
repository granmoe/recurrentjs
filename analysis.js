// Mat data structure is like an "unrolled" matrix
// 1 2
// 3 4
// 5 6
// becomes
// 1 2 3 4 5 6
// rowPluck method takes an index and then iterates through and grabs iteratee index * given index to get a row (or is it column in this case?)

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
new Model(hyperparams) -> model
model(input) -> output

NEXT: Convert eval() of text area to separate controls in the top component
*/
