'use-strict'

class ClickListener {
  #callback
  #key = Date.now()
  constructor(callback) {
    this.#callback = callback
  }

  getListener() {
    return {
      key: this.#key,
      callback: this.#callback,
    }
  }
}

export { ClickListener }
