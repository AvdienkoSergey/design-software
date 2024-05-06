import Node from "./Directory.js"

class Tree {
  #root

  constructor(Node) {
    this.#root = Node.create()
  }

  add(Node, childrens) {
    childrens.push(Node);
  }
}