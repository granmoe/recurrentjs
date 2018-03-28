// NOTE: In progress...will clean this all up and probably rewrite most of it later
function assert(condition, message = 'Assertion failed') {
  if (!condition) {
    throw new Error(message)
  }
}

// Random numbers utils
var returnV = false
var vVal = 0.0

var gaussRandom = function() {
  if (returnV) {
    returnV = false
    return vVal
  }
  var u = 2 * Math.random() - 1
  var v = 2 * Math.random() - 1
  var r = u * u + v * v
  if (r == 0 || r > 1) return gaussRandom()
  var c = Math.sqrt(-2 * Math.log(r) / r)
  vVal = v * c // cache this
  returnV = true
  return u * c
}
var randf = function(a, b) {
  return Math.random() * (b - a) + a
}
var randi = function(a, b) {
  return Math.floor(Math.random() * (b - a) + a)
}
// var randn = function(mu, std) {
// return mu + gaussRandom() * std
// }

// helper function returns array of zeros of length n
// and uses typed arrays if available
var zeros = function(n) {
  if (typeof n === 'undefined' || isNaN(n)) {
    return []
  }
  if (typeof ArrayBuffer === 'undefined') {
    // lacking browser support
    var arr = new Array(n)
    for (var i = 0; i < n; i++) {
      arr[i] = 0
    }
    return arr
  } else {
    return new Float64Array(n)
  }
}

// TODO: class
// Mat holds a matrix
var Mat = function(n, d) {
  // n is number of rows d is number of columns
  this.n = n
  this.d = d
  this.w = zeros(n * d)
  this.dw = zeros(n * d)
}
Mat.prototype = {
  get: function(row, col) {
    // slow but careful accessor function
    // we want row-major order
    var ix = this.d * row + col
    assert(ix >= 0 && ix < this.w.length)
    return this.w[ix]
  },
  set: function(row, col, v) {
    // slow but careful accessor function
    var ix = this.d * row + col
    assert(ix >= 0 && ix < this.w.length)
    this.w[ix] = v
  },
  toJSON: function() {
    var json = {}
    json['n'] = this.n
    json['d'] = this.d
    json['w'] = this.w
    return json
  },
  fromJSON: function(json) {
    this.n = json.n
    this.d = json.d
    this.w = zeros(this.n * this.d)
    this.dw = zeros(this.n * this.d)
    for (var i = 0, n = this.n * this.d; i < n; i++) {
      this.w[i] = json.w[i] // copy over weights
    }
  },
}

// return Mat but filled with random numbers from gaussian
var RandMat = function(n, d, mu, std) {
  var m = new Mat(n, d)
  // fillRandn(m,mu,std);
  fillRand(m, -std, std) // kind of :P
  return m
}

// Mat utils
// fill matrix with random gaussian numbers
// var fillRandn = function(m, mu, std) {
// for (var i = 0, n = m.w.length; i < n; i++) {
// m.w[i] = randn(mu, std)
// }
// }
var fillRand = function(m, lo, hi) {
  for (var i = 0, n = m.w.length; i < n; i++) {
    m.w[i] = randf(lo, hi)
  }
}

// Transformer definitions
var Graph = function(needsBackprop) {
  if (typeof needsBackprop === 'undefined') {
    needsBackprop = true
  }
  this.needsBackprop = needsBackprop

  // this will store a list of functions that perform backprop,
  // in their forward pass order. So in backprop we will go
  // backwards and evoke each one
  this.backprop = []
}
Graph.prototype = {
  backward: function() {
    for (var i = this.backprop.length - 1; i >= 0; i--) {
      this.backprop[i]() // tick!
    }
  },
  rowPluck: function(m, ix) {
    // pluck a row of m with index ix and return it as col vector
    assert(ix >= 0 && ix < m.n)
    var d = m.d
    var out = new Mat(d, 1)
    for (var i = 0, n = d; i < n; i++) {
      out.w[i] = m.w[d * ix + i]
    } // copy over the data

    if (this.needsBackprop) {
      var backward = function() {
        for (var i = 0, n = d; i < n; i++) {
          m.dw[d * ix + i] += out.dw[i]
        }
      }
      this.backprop.push(backward)
    }
    return out
  },
  tanh: function(m) {
    // tanh nonlinearity
    var out = new Mat(m.n, m.d)
    var n = m.w.length
    for (var i = 0; i < n; i++) {
      out.w[i] = Math.tanh(m.w[i])
    }

    if (this.needsBackprop) {
      var backward = function() {
        for (var i = 0; i < n; i++) {
          // grad for z = tanh(x) is (1 - z^2)
          var mwi = out.w[i]
          m.dw[i] += (1.0 - mwi * mwi) * out.dw[i]
        }
      }
      this.backprop.push(backward)
    }
    return out
  },
  sigmoid: function(m) {
    // sigmoid nonlinearity
    var out = new Mat(m.n, m.d)
    var n = m.w.length
    for (var i = 0; i < n; i++) {
      out.w[i] = sig(m.w[i])
    }

    if (this.needsBackprop) {
      var backward = function() {
        for (var i = 0; i < n; i++) {
          // grad for z = tanh(x) is (1 - z^2)
          var mwi = out.w[i]
          m.dw[i] += mwi * (1.0 - mwi) * out.dw[i]
        }
      }
      this.backprop.push(backward)
    }
    return out
  },
  relu: function(m) {
    var out = new Mat(m.n, m.d)
    var n = m.w.length
    for (var i = 0; i < n; i++) {
      out.w[i] = Math.max(0, m.w[i]) // relu
    }
    if (this.needsBackprop) {
      var backward = function() {
        for (var i = 0; i < n; i++) {
          m.dw[i] += m.w[i] > 0 ? out.dw[i] : 0.0
        }
      }
      this.backprop.push(backward)
    }
    return out
  },
  mul: function(m1, m2) {
    // multiply matrices m1 * m2
    assert(m1.d === m2.n, 'matmul dimensions misaligned')

    var n = m1.n
    var d = m2.d
    var out = new Mat(n, d)
    for (var i = 0; i < m1.n; i++) {
      // loop over rows of m1
      for (var j = 0; j < m2.d; j++) {
        // loop over cols of m2
        var dot = 0.0
        for (var k = 0; k < m1.d; k++) {
          // dot product loop
          dot += m1.w[m1.d * i + k] * m2.w[m2.d * k + j]
        }
        out.w[d * i + j] = dot
      }
    }

    if (this.needsBackprop) {
      var backward = function() {
        for (var i = 0; i < m1.n; i++) {
          // loop over rows of m1
          for (var j = 0; j < m2.d; j++) {
            // loop over cols of m2
            for (var k = 0; k < m1.d; k++) {
              // dot product loop
              var b = out.dw[d * i + j]
              m1.dw[m1.d * i + k] += m2.w[m2.d * k + j] * b
              m2.dw[m2.d * k + j] += m1.w[m1.d * i + k] * b
            }
          }
        }
      }
      this.backprop.push(backward)
    }
    return out
  },
  add: function(m1, m2) {
    assert(m1.w.length === m2.w.length)

    var out = new Mat(m1.n, m1.d)
    for (var i = 0, n = m1.w.length; i < n; i++) {
      out.w[i] = m1.w[i] + m2.w[i]
    }
    if (this.needsBackprop) {
      var backward = function() {
        for (var i = 0, n = m1.w.length; i < n; i++) {
          m1.dw[i] += out.dw[i]
          m2.dw[i] += out.dw[i]
        }
      }
      this.backprop.push(backward)
    }
    return out
  },
  eltmul: function(m1, m2) {
    assert(m1.w.length === m2.w.length)

    var out = new Mat(m1.n, m1.d)
    for (var i = 0, n = m1.w.length; i < n; i++) {
      out.w[i] = m1.w[i] * m2.w[i]
    }
    if (this.needsBackprop) {
      var backward = function() {
        for (var i = 0, n = m1.w.length; i < n; i++) {
          m1.dw[i] += m2.w[i] * out.dw[i]
          m2.dw[i] += m1.w[i] * out.dw[i]
        }
      }
      this.backprop.push(backward)
    }
    return out
  },
}

var softmax = function(m) {
  var out = new Mat(m.n, m.d) // probability volume
  var maxval = -999999
  for (var i = 0, n = m.w.length; i < n; i++) {
    if (m.w[i] > maxval) maxval = m.w[i]
  }

  var s = 0.0
  for (var i = 0, n = m.w.length; i < n; i++) {
    out.w[i] = Math.exp(m.w[i] - maxval)
    s += out.w[i]
  }
  for (var i = 0, n = m.w.length; i < n; i++) {
    out.w[i] /= s
  }

  // no backward pass here needed
  // since we will use the computed probabilities outside
  // to set gradients directly on m
  return out
}

// TODO: Convert to class
var Solver = function() {
  this.decay_rate = 0.999
  this.smooth_eps = 1e-8
  this.step_cache = {}
}

Solver.prototype = {
  step: function(model, stepSize, regc, clipval) {
    // perform parameter update
    var solverStats = {}
    var numClipped = 0
    var numTot = 0
    for (var k in model) {
      if (model.hasOwnProperty(k)) {
        var m = model[k] // mat ref
        if (!(k in this.step_cache)) {
          this.step_cache[k] = new Mat(m.n, m.d)
        }
        var s = this.step_cache[k]
        for (var i = 0, n = m.w.length; i < n; i++) {
          // rmsprop adaptive learning rate
          var mdwi = m.dw[i]
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
  },
}

var initLSTM = function(inputSize, hiddenSizes, outputSize) {
  // hidden size should be a list

  // TODO: declare model as reduce of hiddenSizes
  var model = {}
  for (var d = 0; d < hiddenSizes.length; d++) {
    // loop over depths
    var prevSize = d === 0 ? inputSize : hiddenSizes[d - 1]
    var hiddenSize = hiddenSizes[d]

    // gates parameters
    model['Wix' + d] = new RandMat(hiddenSize, prevSize, 0, 0.08)
    model['Wih' + d] = new RandMat(hiddenSize, hiddenSize, 0, 0.08)
    model['bi' + d] = new Mat(hiddenSize, 1)
    model['Wfx' + d] = new RandMat(hiddenSize, prevSize, 0, 0.08)
    model['Wfh' + d] = new RandMat(hiddenSize, hiddenSize, 0, 0.08)
    model['bf' + d] = new Mat(hiddenSize, 1)
    model['Wox' + d] = new RandMat(hiddenSize, prevSize, 0, 0.08)
    model['Woh' + d] = new RandMat(hiddenSize, hiddenSize, 0, 0.08)
    model['bo' + d] = new Mat(hiddenSize, 1)
    // cell write params
    model['Wcx' + d] = new RandMat(hiddenSize, prevSize, 0, 0.08)
    model['Wch' + d] = new RandMat(hiddenSize, hiddenSize, 0, 0.08)
    model['bc' + d] = new Mat(hiddenSize, 1)
  }
  // decoder params
  model['Whd'] = new RandMat(outputSize, hiddenSize, 0, 0.08)
  model['bd'] = new Mat(outputSize, 1)
  return model
}

var forwardLSTM = function(G, model, hiddenSizes, x, prev) {
  // forward prop for a single tick of LSTM
  // G is graph to append ops to
  // model contains LSTM parameters
  // x is 1D column vector with observation
  // prev is a struct containing hidden and cell
  // from previous iteration

  if (typeof prev.h === 'undefined') {
    // TODO: declare these as map of hiddenSizes
    var hiddenPrevs = []
    var cellPrevs = []
    for (var d = 0; d < hiddenSizes.length; d++) {
      hiddenPrevs.push(new Mat(hiddenSizes[d], 1))
      cellPrevs.push(new Mat(hiddenSizes[d], 1))
    }
  } else {
    var hiddenPrevs = prev.h
    var cellPrevs = prev.c
  }

  var hidden = []
  var cell = []
  // TODO: declare [hidden, cell] as reduce of hiddenSizes
  for (var d = 0; d < hiddenSizes.length; d++) {
    var inputVector = d === 0 ? x : hidden[d - 1]
    var hiddenPrev = hiddenPrevs[d]
    var cellPrev = cellPrevs[d]

    // input gate
    var h0 = G.mul(model['Wix' + d], inputVector)
    var h1 = G.mul(model['Wih' + d], hiddenPrev)
    var inputGate = G.sigmoid(G.add(G.add(h0, h1), model['bi' + d]))

    // forget gate
    var h2 = G.mul(model['Wfx' + d], inputVector)
    var h3 = G.mul(model['Wfh' + d], hiddenPrev)
    var forgetGate = G.sigmoid(G.add(G.add(h2, h3), model['bf' + d]))

    // output gate
    var h4 = G.mul(model['Wox' + d], inputVector)
    var h5 = G.mul(model['Woh' + d], hiddenPrev)
    var outputGate = G.sigmoid(G.add(G.add(h4, h5), model['bo' + d]))

    // write operation on cells
    var h6 = G.mul(model['Wcx' + d], inputVector)
    var h7 = G.mul(model['Wch' + d], hiddenPrev)
    var cellWrite = G.tanh(G.add(G.add(h6, h7), model['bc' + d]))

    // compute new cell activation
    var retainCell = G.eltmul(forgetGate, cellPrev) // what do we keep from cell
    var writeCell = G.eltmul(inputGate, cellWrite) // what do we write to cell
    var cellD = G.add(retainCell, writeCell) // new cell contents

    // compute hidden state as gated, saturated cell activations
    var hiddenD = G.eltmul(outputGate, G.tanh(cellD))

    hidden.push(hiddenD)
    cell.push(cellD)
    // return [[...hidden, hiddenD], [...cell, cellD]]
  }

  // one decoder to outputs at end
  var output = G.add(
    G.mul(model['Whd'], hidden[hidden.length - 1]),
    model['bd'],
  )

  // return cell memory, hidden representation and output
  return { h: hidden, c: cell, o: output }
}

var initRNN = function(inputSize, hiddenSizes, outputSize) {
  // hidden size should be a list

  // TODO: declare model as reduce of hiddenSizes
  var model = {}
  for (var d = 0; d < hiddenSizes.length; d++) {
    // loop over depths
    var prevSize = d === 0 ? inputSize : hiddenSizes[d - 1]
    var hiddenSize = hiddenSizes[d]
    model['Wxh' + d] = new RandMat(hiddenSize, prevSize, 0, 0.08)
    model['Whh' + d] = new RandMat(hiddenSize, hiddenSize, 0, 0.08)
    model['bhh' + d] = new Mat(hiddenSize, 1)
  }
  // decoder params
  model['Whd'] = new RandMat(outputSize, hiddenSize, 0, 0.08)
  model['bd'] = new Mat(outputSize, 1)
  return model
}

var forwardRNN = function(G, model, hiddenSizes, x, prev) {
  // forward prop for a single tick of RNN
  // G is graph to append ops to
  // model contains RNN parameters
  // x is 1D column vector with observation
  // prev is a struct containing hidden activations from last step

  if (typeof prev.h === 'undefined') {
    // TODO: declare as map of hiddenSizes
    var hiddenPrevs = []
    for (var d = 0; d < hiddenSizes.length; d++) {
      hiddenPrevs.push(new Mat(hiddenSizes[d], 1))
    }
  } else {
    var hiddenPrevs = prev.h
  }

  // todo: declare hidden as map of hiddenSizes
  var hidden = []
  for (var d = 0; d < hiddenSizes.length; d++) {
    var inputVector = d === 0 ? x : hidden[d - 1]
    var hiddenPrev = hiddenPrevs[d]

    var h0 = G.mul(model['Wxh' + d], inputVector)
    var h1 = G.mul(model['Whh' + d], hiddenPrev)
    var hiddenD = G.relu(G.add(G.add(h0, h1), model['bhh' + d]))

    hidden.push(hiddenD)
  }

  // one decoder to outputs at end
  var output = G.add(
    G.mul(model['Whd'], hidden[hidden.length - 1]),
    model['bd'],
  )

  // return cell memory, hidden representation and output
  return { h: hidden, o: output }
}

var sig = function(x) {
  // helper function for computing sigmoid
  return 1.0 / (1 + Math.exp(-x))
}

var maxi = function(w) {
  // argmax of array w
  var maxv = w[0]
  var maxix = 0
  for (var i = 1, n = w.length; i < n; i++) {
    var v = w[i]
    if (v > maxv) {
      maxix = i
      maxv = v
    }
  }
  return maxix
}

var samplei = function(w) {
  // sample argmax from w, assuming w are
  // probabilities that sum to one
  var r = randf(0, 1)
  var x = 0.0
  var i = 0
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
