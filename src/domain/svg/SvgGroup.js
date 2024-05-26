'use-strict'

import { Element } from './helpers/Element.js'
import { Figure } from './helpers/Figure.js'

class SvgGroup extends Figure {
  constructor() {
    super(new Element('g'), [])
  }
}

export { SvgGroup }
