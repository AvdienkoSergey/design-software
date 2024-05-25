'use-strict'

import { SvgGroup } from '../svg/SvgGroup.js'
import { SvgCircle } from '../svg/SvgCircle.js'
import { SvgText } from '../svg/SvgText.js'
import { SvgLine } from '../svg/SvgLine.js'
import { Coordinate } from '../svg/attributes/Coordinate.js'
import { Radius } from '../svg/attributes/Radius.js'
import { Fill } from '../svg/attributes/Fill.js'
import { Stroke } from '../svg/attributes/Stroke.js'
import { Font } from '../svg/attributes/Font.js'
import { Color } from '../svg/attributes/Color.js'

class DisplayFileSystemElement {
  #x
  #y
  #step
  #ratio
  #color = 'black'
  #directory
  #clickListener

  constructor(coordinate, displayOptions, fileSystemElement, clickListener) {
    this.#ratio = displayOptions.calculate().ratio
    this.#step = displayOptions.calculate().step
    this.#x = coordinate.calculate().x
    this.#y = coordinate.calculate().y
    this.#directory = fileSystemElement
    if (clickListener) {
      this.#clickListener = clickListener.getListener()
    }
  }

  toSvgGroup() {
    const circleRadius = 3 * this.#ratio
    const fontSize = 12 * this.#ratio
    const textOffsetX = this.#x + this.#step / 2
    const textOffsetY = this.#y + this.#step / 6
    const group = new SvgGroup()
    // const joinLine = new SvgLine(
    //   new Coordinate(this.#x - this.#step, this.#y),
    //   new Coordinate(this.#x - this.#step, this.#y - this.#step),
    //   new Stroke(new Color(this.#color))
    // )
    // const line = new SvgLine(
    //   new Coordinate(this.#x - this.#step, this.#y),
    //   new Coordinate(this.#x, this.#y),
    //   new Stroke(new Color(this.#color))
    // )
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
    text.write(this.#directory.getName())
    // group.append(joinLine)
    // group.append(line)
    group.append(circle)
    group.append(text)
    if (this.#clickListener) {
      group.addListenerClick(this.#clickListener.key, () =>
        this.#clickListener.callback(this.#directory)
      )
    }
    return group
  }
}

export { DisplayFileSystemElement }
