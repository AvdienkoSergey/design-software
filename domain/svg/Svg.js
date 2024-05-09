import Element from './helpers/Element.js'
import Attribute from './helpers/Attribute.js'
import Figure from './helpers/Figure.js'

class Svg extends Figure {
  constructor(Size) {
    super(new Element('svg'), [
      new Attribute('width', Size.calculate().width),
      new Attribute('height', Size.calculate().height),
    ])
  }
}

export default Svg
