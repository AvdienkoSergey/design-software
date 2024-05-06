import Attribute from "./Attribute.js"

class Element {
  #tag;

  constructor(tag) {
    this.#tag = tag;
  }

  #addAttributes(element, attribute) {
    if (attribute instanceof Attribute) {
      const { name, value } = attribute.calculate();
      element.setAttribute(name, value);
    } else {
      throw new Error("Please use an instance of the Attribute class");
    }
  }

  create(array, text = "") {
    const element = document.createElementNS(
      "http://www.w3.org/2000/svg",
      this.#tag
    );
    array.forEach((attribute) => {
      this.#addAttributes(element, attribute);
    });

    if (text) {
      element.textContent = text;
    }

    return element;
  }
}

export default Element;