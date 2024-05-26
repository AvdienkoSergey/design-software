'use-strict'

import { DisplayOptions } from './DisplayOptions.js'
import { DisplayFileSystemElement } from './DisplayFileSystemElement.js'
import { FileSystemElement } from './FileSystemElement.js'
import { Svg } from '../svg/Svg.js'
import { Coordinate } from '../svg/attributes/Coordinate.js'
import { Size } from '../svg/attributes/Size.js'
import { Matrix } from './Matrix.js'
import { ClickListener } from '../svg/attributes/ClickListener.js'

class DisplayFileSysytem {
  #tree
  #ratio = 1
  #step = 20

  constructor(path = './data/project.json') {
    this.#getFileTree(path)
  }

  #getFileTree(path) {
    if (!this.#tree) {
      fetch(path)
        .then((file) => {
          return file.json()
        })
        .then((json) => {
          this.#tree = json
          this.#createMatrix(this.#tree)
        })
        .catch((error) => {
          throw new Error(error.message)
        })
    } else {
      this.#createMatrix(this.#tree)
    }
  }

  #createMatrix(tree) {
    const matrix = new Matrix(tree)
    return this.#matrixToSvg(matrix.getMatrix())
  }

  #calculateContainerSize(matrix) {
    const width = matrix.length
    let height = 0
    for (const row of matrix) {
      if (height < row.length) {
        height = row.length
      }
    }
    return {
      width: width * this.#step * this.#ratio * 4,
      height: height * this.#step * this.#ratio,
    }
  }

  #matrixToSvg(matrix) {
    const { width, height } = this.#calculateContainerSize(matrix)
    const svgContainer = new Svg(
      new Size(width + this.#step * 1, height + this.#step * 1)
    )

    const pathToPoints = Array(matrix.length)
    for (let xi = 0; xi < matrix.length; xi++) {
      const column = matrix[xi]
      const pathToPoint = []
      pathToPoints[xi] = pathToPoint
      for (let yi = 0; yi < column.length; yi++) {
        const xiModify = xi * this.#step * this.#ratio + this.#step
        const yiModify = yi * this.#step * this.#ratio + this.#step
        if (matrix[xi][yi]) {
          const node = new DisplayFileSystemElement(
            new Coordinate(xiModify, yiModify),
            new DisplayOptions({
              step: this.#step,
              ratio: this.#ratio,
              color: 'grey',
            }),
            new FileSystemElement(matrix[xi][yi].path),
            new ClickListener((file) => {
              return console.log(file)
            })
          )
          svgContainer.append(node.toSvgGroup())
        } else {
          // console.log(new Coordinate(xiModify, yiModify))
          pathToPoint.push(new Coordinate(xiModify, yiModify))
        }
      }
    }
    console.log(pathToPoints)

    const container = document.getElementById('svg-container')
    container.innerHTML = ''
    container.append(svgContainer.toExtractHTML())
  }
}

export { DisplayFileSysytem }
