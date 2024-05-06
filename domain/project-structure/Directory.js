class Directory {
  #name;
  #path;
  #type = "Directory"
  #children = [];

  constructor(path) {
      this.#path = path;
      this.#name = path.split("/").at(-1);
      this.children = [];
  }

  addChild(childNode) {
    this.#children.push(childNode);
  }
  
}

export default Directory;