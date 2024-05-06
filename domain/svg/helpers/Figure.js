import Attribute from "./Attribute.js"
import Container from "./Container.js"

class Figure {
  #element;
  #attributes;

  constructor(element, attributes) {
    this.#element = element;
    this.#attributes = attributes.concat(new Attribute("id", Math.round(Date.now() / (Math.random() * 100))));
  }

  create(textContent = "") {
    return new Container(this.#element, this.#attributes, textContent);
  }
}

export default Figure;