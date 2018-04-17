import { assert, randf } from './utils'

export default class Mat {
  constructor(n, d) {
    // n is number of rows d is number of columns
    this.n = n
    this.d = d
    this.w = zeros(n * d)
    this.dw = zeros(n * d)

    return this
  }

  get(row, col) {
    // we want row-major order
    let ix = this.d * row + col
    assert(ix >= 0 && ix < this.w.length)
    return this.w[ix]
  }

  set(row, col, v) {
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

  clone({ withDw = false } = {}) {
    const copy = new Mat(this.n, this.d) // maybe just allow Mat constructor to take optional weights?
    copy.w = new Float64Array(this.w)
    if (withDw) {
      copy.dw = new Float64Array(this.dw)
    }
    return copy
  }

  fillRand(lo, hi) {
    return this.updateW(_ => randf(lo, hi))
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
export function RandMat(n, d, std) {
  return new Mat(n, d).fillRand(-std, std) // kind of :P
}

const zeros = n => new Float64Array(n)
