# TODO

## Inbox

- add to RNN lib a way to force update layers, call from worker with averaged layers
- show last three samples (buffer)
- ability to configure model via UI?

## Website

- Label chart axes...maybe make it look a bit nicer?
- Click to get one new sample at a time while paused
- Might be nice to show total unique chars as max of y-axis in chart
- Just show the experiment and nothing else, maybe link to info about RNNs in a footnote kind of way
- Better names for ppl list / data...final pass through for code quality

## Perf

using letter size of 20, hidden sizes of [40, 40]:

average 55 ms for one iteration
average 32 ms per iter when doing 100 at a time
30 - 300
30 - 1000
30 seconds per 1000
50 minutes for 100,000 iterations

### More RNN Features

- Change hidden sizes
- Change between RNN and LSTM
- All other args that can be passed to create
- All other args that can be passed to train

## Publish

- Deploy to somewhere
- Write blog
