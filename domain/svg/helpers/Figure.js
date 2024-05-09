import Attribute from './Attribute.js'
import Transition from '../attributes/Transition.js'

class Figure {
  #element
  #attributes
  #mark
  #html

  constructor(element, attributes) {
    this.#element = element
    this.#attributes = attributes
    this.#mark = new Attribute(
      'data-mark',
      (() => {
        const timestamp = Date.now().toString(36)
        const randomString = Math.random().toString(36).substr(2, 5)
        return `${timestamp}-${randomString}`
      })()
    )
    this.#html = this.#element.create(this.#attributes.concat(this.#mark))
  }

  #updateAttribute(Attrbute) {
    const { name, value } = Attrbute.calculate()
    this.#html.setAttribute(name, value)
  }

  toExtractHTML() {
    return this.#html
  }

  move(dx, dy) {
    this.#updateAttribute(
      new Attribute('transform', new Transition(dx, dy).calculate())
    )
  }

  copy() {
    return new Figure(this.#element, this.#attributes)
  }

  append(figure) {
    if (!figure instanceof Figure) {
      throw new Error('Please use an instance of the SvgFigure class')
    }
    const parent = this.toExtractHTML()
    const child = figure.toExtractHTML()
    parent.appendChild(child)
  }
}

export default Figure
