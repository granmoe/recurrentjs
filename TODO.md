# TODO

## Website

* Label chart axes...maybe make it look a bit nicer?
* Click to get one new sample at a time while paused
* Just show the experiment and nothing else, maybe link to info about RNNs in a footnote kind of way
* Better names for ppl list / data...final pass through for code quality

## Perf

average 55 ms for one iteration
average 32 ms per iter when doing 100 at a time
30 - 300
30 - 1000
30 seconds per 1000
50 minutes for 100,000 iterations

* Maybe a way to do many iters at a time...recursive setTimeout instead of setInterval?
* Web worker?
  worker = new Worker('worker.js')
  worker.onmessage = e => ...
  worker.js:
  onmessage = message => ...
  onmessage(), postMessage()
* worker-loader webpack loader:
  import Worker from "worker-loader!./worker";
  const worker = new Worker();

### More RNN Features

* Change hidden sizes
* Change between RNN and LSTM
* All other args that can be passed to create
* All other args that can be passed to train

## Publish

* Deploy to somewhere
* Write blog
