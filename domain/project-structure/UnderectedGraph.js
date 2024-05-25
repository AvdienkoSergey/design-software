'use-strict'

class UnderectedGraph {
  #vertices = 0
  #edges = 0
  #adjacency = []

  constructor(v = 0) {
    this.#vertices = v

    if (v < 0) throw new Error('Number of vertices is less than zero')

    for (let i = 0; i < v; i++) {
      this.#adjacency[i] = []
    }
  }

  #validate(v) {
    if (v < 0 || v >= this.#vertices) {
      throw new Error('Vertex is not valid')
    }
  }

  #degree(v) {
    this.#validate()
    return this.#adjacency[v].length
  }

  addEdge(from, to) {
    this.#validate(from)
    this.#validate(to)
    this.#edges++

    this.#adjacency[from].push(to)
    this.#adjacency[to].push(from)
  }

  adjecent(v) {
    this.#validate(v)
    return this.#adjacency[v]
  }
}
