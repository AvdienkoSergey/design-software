class Matrix {
  #tree
  #matrix = []

  constructor(tree) {
    this.#tree = tree
  }

  #сalculateNestedArraysLength(arr) {
    let length = 0
    arr.forEach((element) => {
      if (Array.isArray(element.children) && element.children.length > 0) {
        length += this.#сalculateNestedArraysLength(element.children)
      }
      length++
    })
    return length
  }

  #transformTreeToMatrix(arr, offsetY = 0, offsetX = 0, currentColumn = []) {
    const moveY = (currentColumn, offsetY) => {
      return currentColumn.concat(
        Array.from(new Array(offsetY), (point) => null)
      )
    }
    const calculateMoveY = (point) => {
      return this.#сalculateNestedArraysLength(point.children)
    }
    for (let i = 0; i < arr.length; i++) {
      const point = arr[i]
      currentColumn = moveY(currentColumn, offsetY)
      currentColumn.push(point)
      if (point.children.length > 0) {
        this.#transformTreeToMatrix(
          point.children,
          currentColumn.indexOf(point) + 1,
          offsetX + 1
        )
      }
      offsetY = calculateMoveY(point)
    }
    if (this.#matrix.length < offsetX + 1) {
      const diff = offsetX + 1 - this.#matrix.length
      this.#matrix = this.#matrix.concat(Array.from(new Array(diff), (x) => []))
    }
    if (!this.#matrix[offsetX]) {
      throw new Error(offsetX + ' не может быть undefined')
    }
    if (this.#matrix[offsetX].length < currentColumn.length) {
      const diff = currentColumn.length - this.#matrix[offsetX].length
      this.#matrix[offsetX] = this.#matrix[offsetX].concat(
        Array.from(new Array(diff), (x) => null)
      )

      for (let i = 0; i < currentColumn.length; i++) {
        if (!this.#matrix[offsetX][i]) {
          this.#matrix[offsetX][i] = currentColumn[i]
        }
      }
    }
    return this.#matrix
  }

  getMatrix() {
    if (!this.#tree.hasOwnProperty('children')) {
      throw new Error(
        'The tree does not comply with the contract. The children field is required for the root element'
      )
    }
    return this.#transformTreeToMatrix(this.#tree.children)
  }
}

export default Matrix
