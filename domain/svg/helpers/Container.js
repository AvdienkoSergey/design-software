import Attrbute from "./Attribute.js"
import Figure from "./Figure.js"

class Container {
  #container;

  constructor(HElement, HElementAttributeArray, text) {
    this.#container = HElement.create(HElementAttributeArray, text);
  }

  it() {
    return this.#container;
  }

  draw(figure, textContent) {
    if (!figure instanceof Figure) {
      throw new Error("Please use an instance of the SvgFigure class");
    }
    if (!figure.create() instanceof Container) {
      throw new Error("Please use an instance of the Container class");
    }
    
    this.#container.append(figure.create(textContent).it());
  }

  updateAttribute(Attrbute) {
    const { name, value } = Attrbute.calculate();
    const id = this.#container.getAttribute("id");
    if (!id) {
      throw new Error("The id attribute cannot be found when updating attributes")
    }
    const element = document.getElementById(`${id}`);
    element.setAttribute(name, value);
  }
}

export default Container;