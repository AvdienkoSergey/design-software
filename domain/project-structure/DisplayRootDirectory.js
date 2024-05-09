import SvgGroup from '../svg/SvgGroup.js'
import SvgCircle from '../svg/SvgCircle.js'
import SvgText from '../svg/SvgText.js'
import Coordinate from '../svg/attributes/Coordinate.js'
import Radius from '../svg/attributes/Radius.js'
import Fill from '../svg/attributes/Fill.js'
import Stroke from '../svg/attributes/Stroke.js'
import Font from '../svg/attributes/Font.js'
import Color from '../svg/attributes/Color.js'

class DisplayRootDirectory {
  #x
  #y
  #step
  #ratio
  #color = 'red'
  #directory

  constructor(coordinate, displayOptions, fileSystemElement) {
    this.#ratio = displayOptions.calculate().ratio
    this.#step = displayOptions.calculate().step * this.#ratio
    this.#x = coordinate.calculate().x * this.#ratio
    this.#y = coordinate.calculate().y * this.#ratio
    this.#directory = fileSystemElement
  }

  toSvgGroup(callback = () => {}) {
    const circleRadius = 3 * this.#ratio
    const fontSize = 12 * this.#ratio
    const textOffsetX = this.#x + this.#step / 2
    const textOffsetY = this.#y + this.#step / 6
    const name = this.#directory.getName()
    const group = new SvgGroup()
    const circle = new SvgCircle(
      new Coordinate(this.#x, this.#y),
      new Radius(circleRadius),
      new Fill(new Color(this.#color)),
      new Stroke(new Color(this.#color))
    )
    const text = new SvgText(
      new Coordinate(textOffsetX, textOffsetY),
      new Font(fontSize),
      new Fill(new Color(this.#color))
    )
    text.write(name)
    group.append(circle)
    group.append(text)
    callback(new Coordinate(this.#x, this.#y), name.length)
    return group
  }
}

export default DisplayRootDirectory
