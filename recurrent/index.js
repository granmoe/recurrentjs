function assert(condition, message = 'Assertion failed') {
  if (!condition) {
    throw new Error(message)
  }
}

const randf = (a, b) => Math.random() * (b - a) + a

const randi = (a, b) => Math.floor(Math.random() * (b - a) + a)

const zeros = n => new Float64Array(n)

// Mat holds a matrix
class Mat {
  constructor(n, d) {
    // n is number of rows d is number of columns
    this.n = n
    this.d = d
    this.w = zeros(n * d)
    this.dw = zeros(n * d)

    return this
  }

  get(row, col) {
    // slow but careful accessor function
    // we want row-major order
    let ix = this.d * row + col
    assert(ix >= 0 && ix < this.w.length)
    return this.w[ix]
  }

  set(row, col, v) {
    // slow but careful accessor function
    let ix = this.d * row + col
    assert(ix >= 0 && ix < this.w.length)
    this.w[ix] = v
  }

  updateW(func) {
    this.w = this.w.map(func)
    return this
  }

  updateDw(func) {
    this.dw = this.dw.map(func)
    return this
  }

  clearDw() {
    this.dw = zeros(this.n * this.d)
    return this
  }

  clone({ withDw = false }) {
    const copy = new Mat(this.n, this.d) // maybe just allow Mat constructor to take optional weights?
    copy.w = new Float64Array(this.w)
    if (withDw) {
      copy.dw = new Float64Array(this.dw)
    }
    return copy
  }

  toJSON() {
    let json = {}
    json['n'] = this.n
    json['d'] = this.d
    json['w'] = this.w
    return json
  }

  fromJSON(json) {
    this.n = json.n
    this.d = json.d
    this.dw = zeros(this.n * this.d)
    this.w = new Float64Array(json.w)
    return this
  }
}

// return Mat but filled with random numbers from gaussian
function RandMat(n, d, mu, std) {
  let m = new Mat(n, d)
  // fillRandn(m,mu,std);
  fillRand(m, -std, std) // kind of :P
  return m
}

// Mat utils
function fillRand(m, lo, hi) {
  m.w = m.w.map(_ => randf(lo, hi)) // TODO: Make this pure
}

// Transformer definitions
class Graph {
  constructor(needsBackprop = true) {
    this.needsBackprop = needsBackprop

    // this will store a list of functions that perform backprop,
    // in their forward pass order. So in backprop we will go
    // backwards and evoke each one
    this.backprop = []
  }

  backward() {
    for (let i = this.backprop.length - 1; i >= 0; i--) {
      this.backprop[i]() // tick! <- What does this mean?
    }
  }

  rowPluck(m, ix) {
    function backward() {
      for (let i = 0, n = d; i < n; i++) {
        m.dw[d * ix + i] += out.dw[i]
      }
    }

    // pluck a row of m with index ix and return it as col vector
    assert(ix >= 0 && ix < m.n)
    let d = m.d
    let out = new Mat(d, 1)
    for (let i = 0, n = d; i < n; i++) {
      out.w[i] = m.w[d * ix + i]
    } // copy over the data

    if (this.needsBackprop) {
      this.backprop.push(backward)
    }
    return out
  }

  tanh(m) {
    const backward = () => {
      m.updateDw((dw, i) => dw + (1 - out.w[i] * out.w[i]) * out.dw[i])
    }

    const out = m.clone({ withDw: false }).updateW(Math.tanh) // tanh nonlinearity

    if (this.needsBackprop) {
      this.backprop.push(backward)
    }

    return out
  }

  sigmoid(m) {
    function backward() {
      for (let i = 0; i < n; i++) {
        // grad for z = tanh(x) is (1 - z^2)
        let mwi = out.w[i]
        m.dw[i] += mwi * (1.0 - mwi) * out.dw[i]
      }
    }

    // sigmoid nonlinearity
    let out = new Mat(m.n, m.d)
    let n = m.w.length
    for (let i = 0; i < n; i++) {
      out.w[i] = sig(m.w[i])
    }

    if (this.needsBackprop) {
      this.backprop.push(backward)
    }
    return out
  }

  relu(m) {
    function backward() {
      for (let i = 0; i < n; i++) {
        m.dw[i] += m.w[i] > 0 ? out.dw[i] : 0.0
      }
    }

    let out = new Mat(m.n, m.d)
    let n = m.w.length
    for (let i = 0; i < n; i++) {
      out.w[i] = Math.max(0, m.w[i]) // relu
    }
    if (this.needsBackprop) {
      this.backprop.push(backward)
    }
    return out
  }

  mul(m1, m2) {
    function backward() {
      for (let i = 0; i < m1.n; i++) {
        // loop over rows of m1
        for (let j = 0; j < m2.d; j++) {
          // loop over cols of m2
          for (let k = 0; k < m1.d; k++) {
            // dot product loop
            let b = out.dw[d * i + j]
            m1.dw[m1.d * i + k] += m2.w[m2.d * k + j] * b
            m2.dw[m2.d * k + j] += m1.w[m1.d * i + k] * b
          }
        }
      }
    }

    // multiply matrices m1 * m2
    assert(m1.d === m2.n, 'matmul dimensions misaligned')

    let n = m1.n
    let d = m2.d
    let out = new Mat(n, d)
    for (let i = 0; i < m1.n; i++) {
      // loop over rows of m1
      for (let j = 0; j < m2.d; j++) {
        // loop over cols of m2
        let dot = 0.0
        for (let k = 0; k < m1.d; k++) {
          // dot product loop
          dot += m1.w[m1.d * i + k] * m2.w[m2.d * k + j]
        }
        out.w[d * i + j] = dot
      }
    }

    if (this.needsBackprop) {
      this.backprop.push(backward)
    }
    return out
  }

  add(m1, m2) {
    function backward() {
      for (let i = 0, n = m1.w.length; i < n; i++) {
        m1.dw[i] += out.dw[i]
        m2.dw[i] += out.dw[i]
      }
    }

    assert(m1.w.length === m2.w.length)

    let out = new Mat(m1.n, m1.d)
    for (let i = 0, n = m1.w.length; i < n; i++) {
      out.w[i] = m1.w[i] + m2.w[i]
    }
    if (this.needsBackprop) {
      this.backprop.push(backward)
    }

    return out
  }

  eltmul(m1, m2) {
    assert(m1.w.length === m2.w.length)

    function backward() {
      for (let i = 0, n = m1.w.length; i < n; i++) {
        m1.dw[i] += m2.w[i] * out.dw[i]
        m2.dw[i] += m1.w[i] * out.dw[i]
      }
    }

    let out = new Mat(m1.n, m1.d)
    for (let i = 0, n = m1.w.length; i < n; i++) {
      out.w[i] = m1.w[i] * m2.w[i]
    }
    if (this.needsBackprop) {
      this.backprop.push(backward)
    }
    return out
  }
}

function softmax(m) {
  let out = new Mat(m.n, m.d) // probability volume
  let maxval = -999999
  for (let i = 0, n = m.w.length; i < n; i++) {
    if (m.w[i] > maxval) maxval = m.w[i]
  }

  let s = 0.0
  for (let i = 0, n = m.w.length; i < n; i++) {
    out.w[i] = Math.exp(m.w[i] - maxval)
    s += out.w[i]
  }
  for (let i = 0, n = m.w.length; i < n; i++) {
    out.w[i] /= s
  }

  // no backward pass here needed
  // since we will use the computed probabilities outside
  // to set gradients directly on m
  return out
}

class Solver {
  constructor() {
    this.decay_rate = 0.999
    this.smooth_eps = 1e-8
    this.step_cache = {}
  }

  step(model, stepSize, regc, clipval) {
    // perform parameter update
    let solverStats = {}
    let numClipped = 0
    let numTot = 0
    for (let k in model) {
      if (model.hasOwnProperty(k)) {
        let m = model[k] // mat ref
        if (!(k in this.step_cache)) {
          this.step_cache[k] = new Mat(m.n, m.d)
        }
        let s = this.step_cache[k]
        for (let i = 0, n = m.w.length; i < n; i++) {
          // rmsprop adaptive learning rate
          let mdwi = m.dw[i]
          s.w[i] =
            s.w[i] * this.decay_rate + (1.0 - this.decay_rate) * mdwi * mdwi

          // gradient clip
          if (mdwi > clipval) {
            mdwi = clipval
            numClipped++
          }
          if (mdwi < -clipval) {
            mdwi = -clipval
            numClipped++
          }
          numTot++

          // update (and regularize)
          m.w[i] +=
            -stepSize * mdwi / Math.sqrt(s.w[i] + this.smooth_eps) -
            regc * m.w[i]
          m.dw[i] = 0 // reset gradients for next iteration
        }
      }
    }
    solverStats['ratio_clipped'] = numClipped * 1.0 / numTot
    return solverStats
  }
}

function initLSTM(inputSize, hiddenSizes, outputSize) {
  return hiddenSizes.reduce((model, hiddenSize, index, hiddenSizes) => {
    const prevSize = index === 0 ? inputSize : hiddenSizes[index - 1]

    // gates parameters
    model['Wix' + index] = new RandMat(hiddenSize, prevSize, 0, 0.08)
    model['Wih' + index] = new RandMat(hiddenSize, hiddenSize, 0, 0.08)
    model['bi' + index] = new Mat(hiddenSize, 1)
    model['Wfx' + index] = new RandMat(hiddenSize, prevSize, 0, 0.08)
    model['Wfh' + index] = new RandMat(hiddenSize, hiddenSize, 0, 0.08)
    model['bf' + index] = new Mat(hiddenSize, 1)
    model['Wox' + index] = new RandMat(hiddenSize, prevSize, 0, 0.08)
    model['Woh' + index] = new RandMat(hiddenSize, hiddenSize, 0, 0.08)
    model['bo' + index] = new Mat(hiddenSize, 1)

    // cell write params
    model['Wcx' + index] = new RandMat(hiddenSize, prevSize, 0, 0.08)
    model['Wch' + index] = new RandMat(hiddenSize, hiddenSize, 0, 0.08)
    model['bc' + index] = new Mat(hiddenSize, 1)

    // decoder params
    model['Whd'] = new RandMat(outputSize, hiddenSize, 0, 0.08)
    model['bd'] = new Mat(outputSize, 1)

    return model
  }, {})
}

function forwardLSTM(G, model, hiddenSizes, x, prev) {
  // forward prop for a single tick of LSTM
  // G is graph to append ops to
  // model contains LSTM parameters
  // x is 1D column vector with observation
  // prev is a struct containing hidden and cell
  // from previous iteration

  let hiddenPrevs, cellPrevs
  if (typeof prev.h === 'undefined') {
    hiddenPrevs = hiddenSizes.map(hiddenSize => new Mat(hiddenSize, 1))
    cellPrevs = [...hiddenPrevs]
  } else {
    hiddenPrevs = prev.h
    cellPrevs = prev.c
  }

  const { hidden, cell } = hiddenSizes.reduce(
    (result, hiddenSize, index, hiddenSizes) => {
      let inputVector = index === 0 ? x : result.hidden[index - 1]
      let hiddenPrev = hiddenPrevs[index]
      let cellPrev = cellPrevs[index]

      // input gate
      let h0 = G.mul(model['Wix' + index], inputVector)
      let h1 = G.mul(model['Wih' + index], hiddenPrev)
      let inputGate = G.sigmoid(G.add(G.add(h0, h1), model['bi' + index]))

      // forget gate
      let h2 = G.mul(model['Wfx' + index], inputVector)
      let h3 = G.mul(model['Wfh' + index], hiddenPrev)
      let forgetGate = G.sigmoid(G.add(G.add(h2, h3), model['bf' + index]))

      // output gate
      let h4 = G.mul(model['Wox' + index], inputVector)
      let h5 = G.mul(model['Woh' + index], hiddenPrev)
      let outputGate = G.sigmoid(G.add(G.add(h4, h5), model['bo' + index]))

      // write operation on cells
      let h6 = G.mul(model['Wcx' + index], inputVector)
      let h7 = G.mul(model['Wch' + index], hiddenPrev)
      let cellWrite = G.tanh(G.add(G.add(h6, h7), model['bc' + index]))

      // compute new cell activation
      let retainCell = G.eltmul(forgetGate, cellPrev) // what do we keep from cell
      let writeCell = G.eltmul(inputGate, cellWrite) // what do we write to cell
      let cellD = G.add(retainCell, writeCell) // new cell contents

      // compute hidden state as gated, saturated cell activations
      let hiddenD = G.eltmul(outputGate, G.tanh(cellD))

      result.hidden.push(hiddenD)
      result.cell.push(cellD)
      // return [[...hidden, hiddenD], [...cell, cellD]]
      return result
    },
    { hidden: [], cell: [] },
  )

  // one decoder to outputs at end
  let output = G.add(
    G.mul(model['Whd'], hidden[hidden.length - 1]),
    model['bd'],
  )

  // return cell memory, hidden representation and output
  return { h: hidden, c: cell, o: output }
}

function initRNN(inputSize, hiddenSizes, outputSize) {
  const model = hiddenSizes.reduce((model, hiddenSize, index, hiddenSizes) => {
    const prevSize = index === 0 ? inputSize : hiddenSizes[index - 1]

    model['Wxh' + index] = new RandMat(hiddenSize, prevSize, 0, 0.08)
    model['Whh' + index] = new RandMat(hiddenSize, hiddenSize, 0, 0.08)
    model['bhh' + index] = new Mat(hiddenSize, 1)
  }, {})

  // decoder params
  model['Whd'] = new RandMat(
    outputSize,
    hiddenSizes[hiddenSizes.length - 1],
    0,
    0.08,
  )
  model['bd'] = new Mat(outputSize, 1)

  return model
}

function forwardRNN(G, model, hiddenSizes, x, prev) {
  // forward prop for a single tick of RNN
  // G is graph to append ops to
  // model contains RNN parameters
  // x is 1D column vector with observation
  // prev is a struct containing hidden activations from last step

  let hiddenPrevs
  if (typeof prev.h === 'undefined') {
    hiddenPrevs = hiddenSizes.map(hiddenSize => new Mat(hiddenSize, 1))
  } else {
    hiddenPrevs = prev.h
  }

  const h = hiddenSizes.reduce((result, hiddenSize, index) => {
    let inputVector = index === 0 ? x : result[index - 1]
    let hiddenPrev = hiddenPrevs[index]

    let h0 = G.mul(model['Wxh' + index], inputVector)
    let h1 = G.mul(model['Whh' + index], hiddenPrev)

    return G.relu(G.add(G.add(h0, h1), model['bhh' + index]))
  }, [])

  // one decoder to outputs at end
  const o = G.add(G.mul(model['Whd'], h[h.length - 1]), model['bd'])

  // return cell memory, hidden representation and output
  return { h, o }
}

function sig(x) {
  // helper function for computing sigmoid
  return 1.0 / (1 + Math.exp(-x))
}

function maxi(w) {
  // argmax of array w
  let maxv = w[0]
  let maxix = 0
  for (let i = 1, n = w.length; i < n; i++) {
    let v = w[i]
    if (v > maxv) {
      maxix = i
      maxv = v
    }
  }
  return maxix
}

function samplei(w) {
  // sample argmax from w, assuming w are
  // probabilities that sum to one
  let r = randf(0, 1)
  let x = 0.0
  let i = 0
  while (true) {
    x += w[i]
    if (x > r) {
      return i
    }
    i++
  }
}

export default {
  // utils
  maxi,
  samplei,
  randi,
  softmax,
  assert,

  // classes
  Mat,
  RandMat,

  // misc?
  forwardLSTM,
  initLSTM,
  forwardRNN,
  initRNN,

  // optimization
  Solver,
  Graph,
}

// Random numbers utils
// let returnV = false
// let vVal = 0.0

// function gaussRandom() {
//   if (returnV) {
//     returnV = false
//     return vVal
//   }
//   let u = 2 * Math.random() - 1
//   let v = 2 * Math.random() - 1
//   let r = u * u + v * v
//   if (r == 0 || r > 1) return gaussRandom()
//   let c = Math.sqrt(-2 * Math.log(r) / r)
//   vVal = v * c // cache this
//   returnV = true
//   return u * c
// }

// function randn(mu, std) {
// return mu + gaussRandom() * std
// }

// fill matrix with random gaussian numbers
// function fillRandn(m, mu, std) {
// for (let i = 0, n = m.w.length; i < n; i++) {
// m.w[i] = randn(mu, std)
// }
// }
