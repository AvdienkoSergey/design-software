class File {
  constructor(name, type) {
      this.name = name;
      this.type = type;
      this.children = [];
  }

  addRelation(File) {
    this.children.push(childNode);
  }
}

export default Directory;