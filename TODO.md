# TODO

## Restructure

* check all for loops
* Mat API:
  * Method for updating weights can either take new weights array or a map function?
  * Constructor can optionally take weights?
* Move some of the simple util funcs into a separate utils file
* Maybe move each class into its own file
* pages/index: better data structure...hyper params, input etc need a home
* functions instead of classes
  * generators
* optimize...maybe bring in a math lib (math.js? http://mathjs.org/docs/datatypes/matrices.html)

## Tests

* Jest

## Website

* get antd working (CSS problem?) or some other UI component lib
* output stuff to UI
* Use victory or something instead of vis and delete vis
* Redesign
  * Responsive
  * Showcase the experiment more...visible on load
  * Grab any images used in original (deleted the external/ dir just to clean things up for now)
  * Put in text of original

## Publish

* Split demo and lib into different folders...or repos? (recurrent should be agnostic of UI and any other lib)
* Make lib an npm package?
* Deploy to somewhere
* Write blog

## Next

* Convert to tensorflow.js

## Random Ideas
// maybe "rowPluck" could be a method on Mat, then can just do
// out = new Mat({ weights: m.rowPluck(index) }) or something