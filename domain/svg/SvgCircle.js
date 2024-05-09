import Element from './helpers/Element.js'
import Attribute from './helpers/Attribute.js'
import Figure from './helpers/Figure.js'

class SvgCircle extends Figure {
  constructor(Coordinate, Radius, Fill, Stroke) {
    super(new Element('circle'), [
      new Attribute('cx', Coordinate.calculate().x),
      new Attribute('cy', Coordinate.calculate().y),
      new Attribute('r', Radius.calculate().width),
      new Attribute('fill', Fill.calculate()),
      new Attribute('stroke', Stroke.calculate().color),
      new Attribute('stroke-width', Stroke.calculate().width),
      new Attribute('stroke-linecap', Stroke.calculate().linecap),
      new Attribute('stroke-dasharray', Stroke.calculate().dasharray),
    ])
  }
}

export default SvgCircle
