'use-strict'

class FileSystemElement {
  #name
  #path
  #type
  #children = []
  #relation = []

  constructor(path) {
    this.#path = path
    this.#name = path.split('/').at(-1) || 'The root directory'
    this.#type = RegExp(/\.[0-9a-z]{1,5}$/i).test(path) ? 'File' : 'Directoty'
  }

  addChild(fileSystemElement) {
    if (!fileSystemElement instanceof FileSystemElement) {
      throw new Error('Please use an instance of the FileSystemElement class')
    }
    this.#children.push(fileSystemElement)
  }

  addRelation(file) {
    if (!fileSystemElement instanceof FileSystemElement) {
      throw new Error('Please use an instance of the FileSystemElement class')
    }
    if (!file.isFile()) {
      throw new Error(
        'The creation of links is possible only between the elements of the file system. Please use an instance of the FileSystemElement class with type === "File"'
      )
    }
    this.#relation.push(file)
  }

  isFile() {
    return this.#type === 'File'
  }

  getName() {
    return this.#name
  }
}

export { FileSystemElement }
