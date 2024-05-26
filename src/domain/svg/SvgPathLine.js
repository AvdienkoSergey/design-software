'use-strict'

import { Element } from './helpers/Element.js'
import { Attribute } from './helpers/Attribute.js'
import { Figure } from './helpers/Figure.js'

class SvgPathLine extends Figure {
  constructor(CoordinateFrom, coordinatesTo, Fill, Stroke) {
    super(new Element('path'), [
      new Attribute(
        'd',
        `M ${CoordinateFrom.calculate().x} ${
          CoordinateFrom.calculate().y
        } L${coordinatesTo.reduce(
          (acc, Coordinate) =>
            {return `${acc} ${Coordinate.calculate().x} ${Coordinate.calculate().y}`},
          ''
        )}`
      ),
      new Attribute('fill', Fill.calculate()),
      new Attribute('stroke', Stroke.calculate().color),
      new Attribute('stroke-width', Stroke.calculate().width),
      new Attribute('stroke-linecap', Stroke.calculate().linecap),
      new Attribute('stroke-dasharray', Stroke.calculate().dasharray),
    ])
  }
}

export { SvgPathLine }
