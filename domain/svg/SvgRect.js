import Element from "./helpers/Element.js"
import Attribute from "./helpers/Attribute.js";
import Figure from "./helpers/Figure.js"

class SvgRect extends Figure {
  constructor(Coordinate, Size, Fill, Stroke) {
    super(new Element("rect"), [
      new Attribute("x", Coordinate.calculate().x),
      new Attribute("y", Coordinate.calculate().y),
      new Attribute("width", Size.calculate().width),
      new Attribute("height", Size.calculate().height),
      new Attribute("fill", Fill.calculate()),
      new Attribute("stroke", Stroke.calculate().color),
      new Attribute("stroke-width", Stroke.calculate().width),
      new Attribute("stroke-linecap", Stroke.calculate().linecap),
      new Attribute("stroke-dasharray", Stroke.calculate().dasharray),
    ]);
  }
}

export default SvgRect;