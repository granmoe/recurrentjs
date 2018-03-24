import { Button, Input } from 'antd'
import R from '../recurrent'
import Rvis from '../recurrent/vis'
import inputSentences from '../config/input-sentences'

let ppl_list = []
let tick_iter = 0

// model parameters
const generator = 'lstm' // can be 'rnn' or 'lstm'
const hidden_sizes = [20, 20] // list of sizes of hidden layers
const letter_size = 5 // size of letter embeddings

// optimization
const regc = 0.000001 // L2 regularization strength
const learning_rate = 0.01 // learning rate
const clipval = 5.0 // clip gradients at this value
// prediction params
let sample_softmax_temperature = 1.0 // how peaky model predictions should be
let max_chars_gen = 100 // max length of generated sentences

// various global var inits
let epoch_size = -1
let input_size = -1
let output_size = -1
let letterToIndex = {}
let indexToLetter = {}
let vocab = []
let data_sents = []
let solver = new R.Solver() // should be class because it needs memory for step caches
let pplGraph = new Rvis()

let model = {}

var initVocab = function(sents, count_threshold) {
  // go over all characters and keep track of all unique ones seen
  const charCounts = Array.from(sents.join('')).reduce((counts, char) => {
    counts[char] = counts[char] ? counts[char] + 1 : (counts[char] = 1)
    return result
  }, {})

  // NOTE: start at nextIndex at 1 because we will have START and END tokens!
  // that is, START token will be index 0 in model letter vectors
  // and END token will be index 0 in the next character softmax
  const { letterToIndex: l, indexToLetter: i, vocab: v } = Object.entries(
    charCounts,
  ).reduce(
    (result, [char, count]) => {
      if (count >= count_threshold) {
        result.vocab.push(char)
        result.letterToIndex[char] = result.nextIndex
        result.indexToLetter[result.nextIndex]
        result.nextIndex += 1
      }
      return result
    },
    {
      letterToIndex: {},
      indexToLetter: {},
      vocab: [],
      nextIndex: 1,
    },
  )

  letterToIndex = l
  indexToLetter = i
  vocab = v

  // globals written: indexToLetter, letterToIndex, vocab (list), and:
  input_size = vocab.length + 1
  output_size = vocab.length + 1
  epoch_size = sents.length
  // TODO
  // $('#prepro_status').text(
  // 'found ' + vocab.length + ' distinct characters: ' + vocab.join(''),
  // )
}

var initModel = function() {
  // letter embedding vectors
  let model = {}
  model['Wil'] = new R.RandMat(input_size, letter_size, 0, 0.08)

  if (generator === 'rnn') {
    var rnn = R.initRNN(letter_size, hidden_sizes, output_size)
    model = {
      ...model,
      ...rnn,
    }
  } else {
    var lstm = R.initLSTM(letter_size, hidden_sizes, output_size)
    model = {
      ...model,
      ...lstm,
    }
  }

  return model
}

var reinit = function() {
  // note: reinit writes global vars

  // eval options to set some globals
  // GLOBALS
  // TODO
  // eval($('#newnet').val())

  reinit_learning_rate_slider()

  solver = new R.Solver() // GLOBAL
  pplGraph = new Rvis() // GLOBAL

  ppl_list = [] // GLOBAL
  tick_iter = 0 // GLOBAL

  // process the input, filter out blanks
  // TODO
  // data_sents = $('#ti')
  //   .val() // GLOBAL
  //   .split('\n')
  //   .map(str => str.trim())

  initVocab(data_sents, 1) // takes count threshold for characters
  model = initModel()
}

const forwardIndex = (G, model, ix, prev) => {
  const x = G.rowPluck(model['Wil'], ix)
  // forward prop the sequence learner
  return generator === 'rnn'
    ? R.forwardRNN(G, model, hidden_sizes, x, prev)
    : R.forwardLSTM(G, model, hidden_sizes, x, prev)
}

const predictSentence = (model, samplei, temperature) => {
  if (typeof samplei === 'undefined') {
    samplei = false
  }
  if (typeof temperature === 'undefined') {
    temperature = 1.0
  }

  var G = new R.Graph(false)
  var s = ''
  var prev = {}
  while (true) {
    // RNN tick
    var ix = s.length === 0 ? 0 : letterToIndex[s[s.length - 1]]
    var lh = forwardIndex(G, model, ix, prev)
    prev = lh

    // sample predicted letter
    logprobs = lh.o
    if (temperature !== 1.0 && samplei) {
      // scale log probabilities by temperature and renormalize
      // if temperature is high, logprobs will go towards zero
      // and the softmax outputs will be more diffuse. if temperature is
      // very low, the softmax outputs will be more peaky
      for (var q = 0, nq = logprobs.w.length; q < nq; q++) {
        logprobs.w[q] /= temperature
      }
    }

    probs = R.softmax(logprobs)
    if (samplei) {
      var ix = R.samplei(probs.w)
    } else {
      var ix = R.maxi(probs.w)
    }

    if (ix === 0) break // END token predicted, break out
    if (s.length > max_chars_gen) {
      break
    } // something is wrong

    var letter = indexToLetter[ix]
    s += letter
  }
  return s
}

var costfun = function(model, sent) {
  // takes a model and a sentence and
  // calculates the loss. Also returns the Graph
  // object which can be used to do backprop
  let n = sent.length
  let G = new R.Graph()
  let log2ppl = 0.0
  let cost = 0.0
  let prev = {}
  for (var i = -1; i < n; i++) {
    // start and end tokens are zeros
    var ix_source = i === -1 ? 0 : letterToIndex[sent[i]] // first step: start with START token
    var ix_target = i === n - 1 ? 0 : letterToIndex[sent[i + 1]] // last step: end with END token

    lh = forwardIndex(G, model, ix_source, prev)
    prev = lh

    // set gradients into logprobabilities
    logprobs = lh.o // interpret output as logprobs
    probs = R.softmax(logprobs) // compute the softmax probabilities

    log2ppl += -Math.log2(probs.w[ix_target]) // accumulate base 2 log prob and do smoothing
    cost += -Math.log(probs.w[ix_target])

    // write gradients into log probabilities
    logprobs.dw = probs.w
    logprobs.dw[ix_target] -= 1
  }
  var ppl = Math.pow(2, log2ppl / (n - 1))
  return { G: G, ppl: ppl, cost: cost }
}

function median(values) {
  values.sort((a, b) => a - b) // TODO: Isn't this the default sort?
  const half = Math.floor(values.length / 2)
  return values.length % 2
    ? values[half]
    : (values[half - 1] + values[half]) / 2.0
}

function tick() {
  // sample sentence fromd data
  let sentix = R.randi(0, data_sents.length)
  let sent = data_sents[sentix]

  let t0 = +new Date() // log start timestamp

  // evaluate cost function on a sentence
  let cost_struct = costfun(model, sent)

  // use built up graph to compute backprop (set .dw fields in mats)
  cost_struct.G.backward()
  // perform param update
  let solver_stats = solver.step(model, learning_rate, regc, clipval)
  //$("#gradclip").text('grad clipped ratio: ' + solver_stats.ratio_clipped)

  let t1 = +new Date()
  let tick_time = t1 - t0

  ppl_list.push(cost_struct.ppl) // keep track of perplexity

  // evaluate now and then
  tick_iter += 1
  if (tick_iter % 50 === 0) {
    // draw samples
    // $('#samples').html('') // TODO
    for (var q = 0; q < 5; q++) {
      var pred = predictSentence(model, true, sample_softmax_temperature)
      var pred_div = '<div class="apred">' + pred + '</div>'
      // $('#samples').append(pred_div) // TODO
    }
  }
  if (tick_iter % 10 === 0) {
    // draw argmax prediction
    // TODO
    // $('#argmax').html('')
    // var pred = predictSentence(model, false)
    // var pred_div = '<div class="apred">' + pred + '</div>'
    // $('#argmax').append(pred_div)

    // // keep track of perplexity
    // $('#epoch').text('epoch: ' + (tick_iter / epoch_size).toFixed(2))
    // $('#ppl').text('perplexity: ' + cost_struct.ppl.toFixed(2))
    // $('#ticktime').text(
    //   'forw/bwd time per example: ' + tick_time.toFixed(1) + 'ms',
    // )

    if (tick_iter % 100 === 0) {
      var median_ppl = median(ppl_list)
      ppl_list = []
      pplGraph.add(tick_iter, median_ppl)
      pplGraph.drawSelf(document.getElementById('pplgraph'))
    }
  }
}

// var iid = null
// $('#learn').click(function() {
//   reinit()
//   if (iid !== null) {
//     clearInterval(iid)
//   }
//   iid = setInterval(tick, 0)

// This was commented out in his code...perhaps an unfinished idea?
//$('#gradcheck').click(gradCheck);

export default () => (
  <main>
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
