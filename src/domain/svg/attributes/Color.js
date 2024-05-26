'use strict'

/**
 * Represents a color with its hex value.
 * @example
 * var redColor = new Color('red')
 */
class Color {
  /**
   * @private
   * @type {Object.<string, {hex: string}>}
   * @description The color schema mapping color names to their hex values.
   */
  #schema = {
    red: { hex: '#FF0000' },
    yellow: { hex: '#FFFF00' },
    black: { hex: '#000000' },
    grey: { hex: '#808080' },
  }

  /**
   * @private
   * @type {string}
   * @description The name of the color.
   */
  #name

  /**
   * Creates an instance of Color.
   * @param {string} name - The name of the color.
   */
  constructor(name) {
    this.#name = name
  }

  /**
   * Gets the hex value of the color.
   * @returns {string} The hex value of the color.
   * @throws {Error} If the color name is not found in the schema.
   */
  hex() {
    try {
      return this.#schema[this.#name].hex
    } catch (error) {
      throw new Error(
        `Check the color scheme in the Color class: ${error.message}`
      )
    }
  }
}

export { Color }
