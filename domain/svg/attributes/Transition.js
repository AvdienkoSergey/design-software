class Transition {
  #dx
  #dy

  constructor(dx = 0, dy = 0) {
    this.#dx = dx
    this.#dy = dy
  }

  calculate() {
    return `translate(${this.#dx}, ${this.#dy})`
  }
}

export { Transition }
