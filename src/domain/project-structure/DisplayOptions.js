'use-strict'

class DisplayOptions {
  #step
  #ratio
  #color
  #length

  constructor({ step, ratio, color, length }) {
    this.#step = step
    this.#ratio = ratio
    this.#color = color
    this.#length = length
  }

  calculate() {
    return {
      step: this.#step,
      ratio: this.#ratio,
      color: this.#color,
      length: this.#length,
    }
  }
}

export { DisplayOptions }
