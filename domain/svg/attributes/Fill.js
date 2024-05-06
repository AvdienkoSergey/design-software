class Fill {
  #color;

  constructor(Color) {
    this.#color = Color.hex();
  }

  calculate() {
    return this.#color;
  }
}

export default Fill;