'use-strict'

class Font {
  #size

  constructor(size) {
    this.#size = size
  }

  calculate() {
    return {
      size: this.#size,
    }
  }
}

export { Font }
