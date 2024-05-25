'use-strict'

class Radius {
  #radius

  constructor(r) {
    this.#radius = r
  }

  calculate() {
    return {
      width: this.#radius,
    }
  }
}

export { Radius }
