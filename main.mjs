import Attribute from './domain/svg/helpers/Attribute.js'
import Transition from './domain/svg/attributes/Transition.js'
import Size from './domain/svg/attributes/Size.js'
import Coordinate from './domain/svg/attributes/Coordinate.js'
import Fill from './domain/svg/attributes/Fill.js'
import Stroke from './domain/svg/attributes/Stroke.js'
import Radius from './domain/svg/attributes/Radius.js'
import Color from './domain/svg/attributes/Color.js'
import Font from './domain/svg/attributes/Font.js'

import Svg from './domain/svg/Svg.js'
import SvgRect from './domain/svg/SvgRect.js'
import SvgLine from './domain/svg/SvgLine.js'
import SvgCircle from './domain/svg/SvgCircle.js'
import SvgPathLine from './domain/svg/SvgPathLine.js'
import SvgPathBezier from './domain/svg/SvgPathBezier.js'
import SvgText from './domain/svg/SvgText.js'

import FileSystemElement from './domain/project-structure/FileSystemElement.js'
import DisplayFileSystemElement from './domain/project-structure/DisplayFileSystemElement.js'
import DisplayJoinLine from './domain/project-structure/DisplayJoinLine.js'
import DisplayOptions from './domain/project-structure/DisplayOptions.js'
import DisplayFileSysytem from './domain/project-structure/DisplayFileSystem.js'

const svg = new Svg(new Size(300, 900))

const rectangle = new SvgRect(
  new Coordinate(20, 20),
  new Size(80, 80),
  new Fill(new Color('yellow')),
  new Stroke(new Color('red'))
)
const line = new SvgLine(
  new Coordinate(20, 20),
  new Coordinate(100, 100),
  new Stroke(new Color('red'))
)
const circle = new SvgCircle(
  new Coordinate(20, 20),
  new Radius(5),
  new Fill(new Color('red')),
  new Stroke(new Color('red'))
)
const pathLine = new SvgPathLine(
  new Coordinate(30, 30),
  [new Coordinate(30, 50), new Coordinate(50, 30)],
  new Fill(new Color('red')),
  new Stroke(new Color('red'))
)
const pathBezier = new SvgPathBezier(
  new Coordinate(90, 70),
  [new Coordinate(100, 100), new Coordinate(70, 90)],
  new Fill(new Color('red')),
  new Stroke(new Color('red'))
)
const text = new SvgText(
  new Coordinate(70, 40),
  new Font(12),
  new Fill(new Color('red'))
)

const scale = 1.5

let dx = 0
let dy = 0

function moveToRectanglePerimeter() {
  return requestAnimationFrame(() => {
    if (dx < 80 && dy == 0) {
      dx++
    }
    if (dx == 80 && dy < 80) {
      dy++
    }
    if (dx > 0 && dy == 80) {
      dx--
    }
    if (dx == 0 && dy > 0) {
      dy--
    }
    circle.move(dx, dy)
    moveToRectanglePerimeter()
  })
}

moveToRectanglePerimeter()

new DisplayFileSysytem()
