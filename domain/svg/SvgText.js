import Element from "./helpers/Element.js"
import Attribute from "./helpers/Attribute.js";
import Figure from "./helpers/Figure.js"

class SvgText extends Figure {
  constructor(Coordinate, Font, Fill) {
    super(new Element("text"), [
      new Attribute("x", Coordinate.calculate().x),
      new Attribute("y", Coordinate.calculate().y),
      new Attribute("font-size", Font.calculate().size),
      new Attribute("fill", Fill.calculate()),
    ]);
  }
}

export default SvgText;