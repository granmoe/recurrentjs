export const updateMats = func => (...mats) => {
  // TODO: Assert that all mats have same length
  // I wonder if this whole loop and inner loop and everything could be one reduce?
  // prob would need vectorized ops like in numpy or R in order to decrease number of loops here
  for (let i = 0; i < mats[0].w.length; i++) {
    const weights = mats.reduce(
      (weights, mat) => [...weights, mat.w[i], mat.dw[i]],
      [],
    )

    const results = func(...weights)

    mats.forEach((mat, mIndex) => {
      const w = results[mIndex * 2]
      const dw = results[mIndex * 2 + 1]

      if (w !== undefined) {
        mat.w[i] = results[mIndex * 2]
      }
      if (dw !== undefined) {
        mat.dw[i] = results[mIndex * 2 + 1]
      }
    })
  }
}

export function assert(condition, message = 'Assertion failed') {
  if (!condition) {
    throw new Error(message)
  }
}

export const randf = (a, b) => Math.random() * (b - a) + a

export const randi = (a, b) => Math.floor(Math.random() * (b - a) + a)

export const zeros = n => new Float64Array(n)

