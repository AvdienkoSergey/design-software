class Color {
  #schema = {
    none: { hex: "none" },
    red: { hex: "#FF0000" },
    yellow: { hex: "#FFFF00" },
  };
  #name;

  constructor(name) {
    this.#name = name;
  }

  hex() {
    try {
      return this.#schema[this.#name].hex;
    } catch (error) {
      throw new Error(
        `Check the color scheme in the Color class: ${error.message}`
      );
    }
  }
}

export default Color;