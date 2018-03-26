webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("./node_modules/antd/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recurrent__ = __webpack_require__("./recurrent/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recurrent_vis__ = __webpack_require__("./recurrent/vis.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_input_sentences__ = __webpack_require__("./config/input-sentences.js");
var _jsxFileName = '/mnt/c/Users/Matt/projects/ai/recurrentjs/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var ppl_list = [];
var tick_iter = 0;

// model parameters
var generator = 'lstm'; // can be 'rnn' or 'lstm'
var hidden_sizes = [20, 20]; // list of sizes of hidden layers
var letter_size = 5; // size of letter embeddings

// optimization
var regc = 0.000001; // L2 regularization strength
var learning_rate = 0.01; // learning rate
var clipval = 5.0; // clip gradients at this value
// prediction params
var sample_softmax_temperature = 1.0; // how peaky model predictions should be
var max_chars_gen = 100; // max length of generated sentences

// various global var inits
var epoch_size = -1;
var input_size = -1;
var output_size = -1;
var letterToIndex = {};
var indexToLetter = {};
var vocab = [];
var data_sents = [];
var solver = new __WEBPACK_IMPORTED_MODULE_2__recurrent__["a" /* default */].Solver(); // should be class because it needs memory for step caches
var pplGraph = new __WEBPACK_IMPORTED_MODULE_3__recurrent_vis__["a" /* default */]();

var lh = void 0,
    logprobs = void 0,
    probs = void 0;

var model = {};

var initVocab = function initVocab(sents, count_threshold) {
  // go over all characters and keep track of all unique ones seen
  var charCounts = Array.from(sents.join('')).reduce(function (counts, char) {
    counts[char] = counts[char] ? counts[char] + 1 : counts[char] = 1;
    return counts;
  }, {});

  // NOTE: start at nextIndex at 1 because we will have START and END tokens!
  // that is, START token will be index 0 in model letter vectors
  // and END token will be index 0 in the next character softmax

  var _Object$entries$reduc = Object.entries(charCounts).reduce(function (result, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        char = _ref2[0],
        count = _ref2[1];

    if (count >= count_threshold) {
      result.vocab.push(char);
      result.letterToIndex[char] = result.nextIndex;
      result.indexToLetter[result.nextIndex] = char;
      result.nextIndex += 1;
    }
    return result;
  }, {
    letterToIndex: {},
    indexToLetter: {},
    vocab: [],
    nextIndex: 1
  }),
      l = _Object$entries$reduc.letterToIndex,
      i = _Object$entries$reduc.indexToLetter,
      v = _Object$entries$reduc.vocab;

  letterToIndex = l;
  indexToLetter = i;
  vocab = v;

  // globals written: indexToLetter, letterToIndex, vocab (list), and:
  input_size = vocab.length + 1;
  output_size = vocab.length + 1;
  epoch_size = sents.length;
  // TODO: Show this in the UI
  // $('#prepro_status').text(
  // 'found ' + vocab.length + ' distinct characters: ' + vocab.join(''),
  // )
};

var initModel = function initModel() {
  // letter embedding vectors
  var model = {};
  model['Wil'] = new __WEBPACK_IMPORTED_MODULE_2__recurrent__["a" /* default */].RandMat(input_size, letter_size, 0, 0.08);

  if (generator === 'rnn') {
    var rnn = __WEBPACK_IMPORTED_MODULE_2__recurrent__["a" /* default */].initRNN(letter_size, hidden_sizes, output_size);
    model = _extends({}, model, rnn);
  } else {
    var lstm = __WEBPACK_IMPORTED_MODULE_2__recurrent__["a" /* default */].initLSTM(letter_size, hidden_sizes, output_size);
    model = _extends({}, model, lstm);
  }

  return model;
};

function reinit() {
  // note: reinit writes global vars by running
  // eval on a textarea
  // TODO: Allow user to set hyperparams in a safer way, via inputs

  solver = new __WEBPACK_IMPORTED_MODULE_2__recurrent__["a" /* default */].Solver(); // GLOBAL
  pplGraph = new __WEBPACK_IMPORTED_MODULE_3__recurrent_vis__["a" /* default */](); // GLOBAL

  ppl_list = []; // GLOBAL
  tick_iter = 0; // GLOBAL

  data_sents = __WEBPACK_IMPORTED_MODULE_4__config_input_sentences__["a" /* default */].split('\n').map(function (str) {
    return str.trim();
  });
  initVocab(data_sents, 1); // takes count threshold for characters
  model = initModel(); // pass in some of the stuff that will be returned from initVocab
}

var forwardIndex = function forwardIndex(G, model, ix, prev) {
  var x = G.rowPluck(model['Wil'], ix);
  // forward prop the sequence learner
  return generator === 'rnn' ? __WEBPACK_IMPORTED_MODULE_2__recurrent__["a" /* default */].forwardRNN(G, model, hidden_sizes, x, prev) : __WEBPACK_IMPORTED_MODULE_2__recurrent__["a" /* default */].forwardLSTM(G, model, hidden_sizes, x, prev);
};

var predictSentence = function predictSentence(model, samplei, temperature) {
  if (typeof samplei === 'undefined') {
    samplei = false;
  }
  if (typeof temperature === 'undefined') {
    temperature = 1.0;
  }

  var G = new __WEBPACK_IMPORTED_MODULE_2__recurrent__["a" /* default */].Graph(false);
  var s = '';
  var prev = {};
  while (true) {
    // RNN tick
    var ix = s.length === 0 ? 0 : letterToIndex[s[s.length - 1]];
    lh = forwardIndex(G, model, ix, prev);
    prev = lh;

    // sample predicted letter
    logprobs = lh.o;
    if (temperature !== 1.0 && samplei) {
      // scale log probabilities by temperature and renormalize
      // if temperature is high, logprobs will go towards zero
      // and the softmax outputs will be more diffuse. if temperature is
      // very low, the softmax outputs will be more peaky
      for (var q = 0, nq = logprobs.w.length; q < nq; q++) {
        logprobs.w[q] /= temperature;
      }
    }

    probs = __WEBPACK_IMPORTED_MODULE_2__recurrent__["a" /* default */].softmax(logprobs);
    if (samplei) {
      var ix = __WEBPACK_IMPORTED_MODULE_2__recurrent__["a" /* default */].samplei(probs.w);
    } else {
      var ix = __WEBPACK_IMPORTED_MODULE_2__recurrent__["a" /* default */].maxi(probs.w);
    }

    if (ix === 0) break; // END token predicted, break out
    if (s.length > max_chars_gen) {
      break;
    } // something is wrong

    var letter = indexToLetter[ix];
    s += letter;
  }
  return s;
};

var costfun = function costfun(model, sent) {
  // takes a model and a sentence and
  // calculates the loss. Also returns the Graph
  // object which can be used to do backprop
  var n = sent.length;
  var G = new __WEBPACK_IMPORTED_MODULE_2__recurrent__["a" /* default */].Graph();
  var log2ppl = 0.0;
  var cost = 0.0;
  var prev = {};
  for (var i = -1; i < n; i++) {
    // start and end tokens are zeros
    var ix_source = i === -1 ? 0 : letterToIndex[sent[i]]; // first step: start with START token
    var ix_target = i === n - 1 ? 0 : letterToIndex[sent[i + 1]]; // last step: end with END token

    lh = forwardIndex(G, model, ix_source, prev);
    prev = lh;

    // set gradients into logprobabilities
    logprobs = lh.o; // interpret output as logprobs
    probs = __WEBPACK_IMPORTED_MODULE_2__recurrent__["a" /* default */].softmax(logprobs); // compute the softmax probabilities

    log2ppl += -Math.log2(probs.w[ix_target]); // accumulate base 2 log prob and do smoothing
    cost += -Math.log(probs.w[ix_target]);

    // write gradients into log probabilities
    logprobs.dw = probs.w;
    logprobs.dw[ix_target] -= 1;
  }
  var ppl = Math.pow(2, log2ppl / (n - 1));
  return { G: G, ppl: ppl, cost: cost };
};

function median(values) {
  values.sort(function (a, b) {
    return a - b;
  }); // OPT: Isn't this the default sort?
  var half = Math.floor(values.length / 2);
  return values.length % 2 ? values[half] : (values[half - 1] + values[half]) / 2.0;
}

function tick() {
  // sample sentence fromd data
  var sentix = __WEBPACK_IMPORTED_MODULE_2__recurrent__["a" /* default */].randi(0, data_sents.length);
  var sent = data_sents[sentix];

  var t0 = new Date().valueOf(); // log start timestamp

  // evaluate cost function on a sentence
  var cost_struct = costfun(model, sent);

  // use built up graph to compute backprop (set .dw fields in mats)
  cost_struct.G.backward();
  // perform param update
  var solver_stats = solver.step(model, learning_rate, regc, clipval);
  //$("#gradclip").text('grad clipped ratio: ' + solver_stats.ratio_clipped)

  var t1 = new Date().valueOf();
  var tick_time = t1 - t0;

  ppl_list.push(cost_struct.ppl); // keep track of perplexity

  // evaluate now and then
  tick_iter += 1;
  if (tick_iter % 50 === 0) {
    // draw samples
    // $('#samples').html('') // TODO: Show samples in the UI...for now just log them out
    for (var q = 0; q < 5; q++) {
      console.log('NN output - sample:', predictSentence(model, true, sample_softmax_temperature));
      // var pred = predictSentence(model, true, sample_softmax_temperature)
      // var pred_div = '<div class="apred">' + pred + '</div>'
      // $('#samples').append(pred_div)
    }
  }

  if (tick_iter % 10 === 0) {
    // draw argmax prediction
    // TODO: Show this in the UI...for now just log it out
    console.log('NN output - argmax prediction:', predictSentence(model, false));
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

    // TODO: Different solution for graph...maybe victory or something...or maybe antd has something
    // if (tick_iter % 100 === 0) {
    // var median_ppl = median(ppl_list)
    // ppl_list = []
    // pplGraph.add(tick_iter, median_ppl)
    // pplGraph.drawSelf(document.getElementById('pplgraph'))
    // }
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

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _ref3;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref3, [this].concat(args))), _this), _this.state = {
      intervalId: null,
      hasRun: false
    }, _this.init = function () {
      reinit();
      var intervalId = setInterval(tick, 0);
      _this.setState({ intervalId: intervalId, hasRun: true });
    }, _this.pause = function () {
      if (!_this.state.hasRun) {
        _this.init();
        return;
      }

      if (_this.state.intervalId) {
        clearInterval(_this.state.intervalId);
        _this.setState({ intervalId: null });
      } else {
        var intervalId = setInterval(tick, 0);
        _this.setState({ intervalId: intervalId });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'main',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 318
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["a" /* Button */],
          { type: 'primary', onClick: this.pause, __source: {
              fileName: _jsxFileName,
              lineNumber: 319
            }
          },
          !this.state.hasRun ? 'Start' : this.state.intervalId ? 'Pause' : 'Resume'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'section',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 324
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h1',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 325
              }
            },
            'RNNs'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 326
              }
            },
            'Here is some info about RNNs'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'section',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 328
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h1',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 329
              }
            },
            'Experiment'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 330
              }
            },
            'All the controls will go here with brief explanations'
          )
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = App;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ppl_list, 'ppl_list', '/mnt/c/Users/Matt/projects/ai/recurrentjs/pages/index.js');
  reactHotLoader.register(tick_iter, 'tick_iter', '/mnt/c/Users/Matt/projects/ai/recurrentjs/pages/index.js');
  reactHotLoader.register(generator, 'generator', '/mnt/c/Users/Matt/projects/ai/recurrentjs/pages/index.js');
  reactHotLoader.register(hidden_sizes, 'hidden_sizes', '/mnt/c/Users/Matt/projects/ai/recurrentjs/pages/index.js');
  reactHotLoader.register(letter_size, 'letter_size', '/mnt/c/Users/Matt/projects/ai/recurrentjs/pages/index.js');
  reactHotLoader.register(regc, 'regc', '/mnt/c/Users/Matt/projects/ai/recurrentjs/pages/index.js');
  reactHotLoader.register(learning_rate, 'learning_rate', '/mnt/c/Users/Matt/projects/ai/recurrentjs/pages/index.js');
  reactHotLoader.register(clipval, 'clipval', '/mnt/c/Users/Matt/projects/ai/recurrentjs/pages/index.js');
  reactHotLoader.register(sample_softmax_temperature, 'sample_softmax_temperature', '/mnt/c/Users/Matt/projects/ai/recurrentjs/pages/index.js');
  reactHotLoader.register(max_chars_gen, 'max_chars_gen', '/mnt/c/Users/Matt/projects/ai/recurrentjs/pages/index.js');
  reactHotLoader.register(epoch_size, 'epoch_size', '/mnt/c/Users/Matt/projects/ai/recurrentjs/pages/index.js');
  reactHotLoader.register(input_size, 'input_size', '/mnt/c/Users/Matt/projects/ai/recurrentjs/pages/index.js');
  reactHotLoader.register(output_size, 'output_size', '/mnt/c/Users/Matt/projects/ai/recurrentjs/pages/index.js');
  reactHotLoader.register(letterToIndex, 'letterToIndex', '/mnt/c/Users/Matt/projects/ai/recurrentjs/pages/index.js');
  reactHotLoader.register(indexToLetter, 'indexToLetter', '/mnt/c/Users/Matt/projects/ai/recurrentjs/pages/index.js');
  reactHotLoader.register(vocab, 'vocab', '/mnt/c/Users/Matt/projects/ai/recurrentjs/pages/index.js');
  reactHotLoader.register(data_sents, 'data_sents', '/mnt/c/Users/Matt/projects/ai/recurrentjs/pages/index.js');
  reactHotLoader.register(solver, 'solver', '/mnt/c/Users/Matt/projects/ai/recurrentjs/pages/index.js');
  reactHotLoader.register(pplGraph, 'pplGraph', '/mnt/c/Users/Matt/projects/ai/recurrentjs/pages/index.js');
  reactHotLoader.register(lh, 'lh', '/mnt/c/Users/Matt/projects/ai/recurrentjs/pages/index.js');
  reactHotLoader.register(logprobs, 'logprobs', '/mnt/c/Users/Matt/projects/ai/recurrentjs/pages/index.js');
  reactHotLoader.register(probs, 'probs', '/mnt/c/Users/Matt/projects/ai/recurrentjs/pages/index.js');
  reactHotLoader.register(model, 'model', '/mnt/c/Users/Matt/projects/ai/recurrentjs/pages/index.js');
  reactHotLoader.register(initVocab, 'initVocab', '/mnt/c/Users/Matt/projects/ai/recurrentjs/pages/index.js');
  reactHotLoader.register(initModel, 'initModel', '/mnt/c/Users/Matt/projects/ai/recurrentjs/pages/index.js');
  reactHotLoader.register(reinit, 'reinit', '/mnt/c/Users/Matt/projects/ai/recurrentjs/pages/index.js');
  reactHotLoader.register(forwardIndex, 'forwardIndex', '/mnt/c/Users/Matt/projects/ai/recurrentjs/pages/index.js');
  reactHotLoader.register(predictSentence, 'predictSentence', '/mnt/c/Users/Matt/projects/ai/recurrentjs/pages/index.js');
  reactHotLoader.register(costfun, 'costfun', '/mnt/c/Users/Matt/projects/ai/recurrentjs/pages/index.js');
  reactHotLoader.register(median, 'median', '/mnt/c/Users/Matt/projects/ai/recurrentjs/pages/index.js');
  reactHotLoader.register(tick, 'tick', '/mnt/c/Users/Matt/projects/ai/recurrentjs/pages/index.js');
  reactHotLoader.register(App, 'App', '/mnt/c/Users/Matt/projects/ai/recurrentjs/pages/index.js');
  reactHotLoader.register(_default, 'default', '/mnt/c/Users/Matt/projects/ai/recurrentjs/pages/index.js');
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.78aef4979e4396827450.hot-update.js.map