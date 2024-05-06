class Stroke {
  #color;
  #width;
  #linecap;
  #dasharray;

  constructor(Color, width = 1, linecap = "", dasharray = "") {
    this.#color = Color.hex();
    this.#width = width;
    this.#linecap = linecap;
    this.#dasharray = dasharray;
  }

  calculate() {
    return {
      color: this.#color,
      width: this.#width,
      linecap: this.#linecap,
      dasharray: this.#dasharray,
    };
  }
}

export default Stroke;