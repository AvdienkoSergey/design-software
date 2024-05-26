'use-strict'

class Attribute {
  #name
  #value

  constructor(name, value) {
    this.#name = name
    this.#value = value
  }

  calculate() {
    return { name: this.#name, value: this.#value }
  }
}

export { Attribute }
