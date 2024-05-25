class Coordinate {
  #x
  #y
  constructor(x, y) {
    this.#x = x
    this.#y = y
  }

  calculate() {
    return { x: this.#x, y: this.#y }
  }
}

export { Coordinate }
