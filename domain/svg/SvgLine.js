import Element from "./helpers/Element.js"
import Attribute from "./helpers/Attribute.js";
import Figure from "./helpers/Figure.js"

class SvgLine extends Figure {
  constructor(Coordinate1, Coordinate2, Stroke) {
    super(new Element("line"), [
      new Attribute("x1", Coordinate1.calculate().x),
      new Attribute("y1", Coordinate1.calculate().y),
      new Attribute("x2", Coordinate2.calculate().x),
      new Attribute("y2", Coordinate2.calculate().y),
      new Attribute("stroke", Stroke.calculate().color),
      new Attribute("stroke-width", Stroke.calculate().width),
      new Attribute("stroke-linecap", Stroke.calculate().linecap),
      new Attribute("stroke-dasharray", Stroke.calculate().dasharray),
    ]);
  }
}

export default SvgLine;