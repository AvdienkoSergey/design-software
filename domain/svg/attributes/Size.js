class Size {
  #width;
  #height;

  constructor(w, h) {
    this.#width = w;
    this.#height = h;
  }

  calculate() {
    return {
      width: this.#width,
      height: this.#height,
    };
  }
}

export default Size;