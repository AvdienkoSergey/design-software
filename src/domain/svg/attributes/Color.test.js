import { Color } from './Color.js'

describe('Testing the Color class', () => {
  test('It is possible to create an instance of the class', () => {
    const newColor = new Color('')
    expect(newColor instanceof Color).toBe(true)
  })
  test('should create an instance with a valid color name', () => {
    const redColor = new Color('red')
    expect(redColor.hex()).toBe('#FF0000')
  })
  test('should throw an error for an invalid color name', () => {
    const invalidColor = new Color('blue')
    expect(() => invalidColor.hex()).toThrow(
      'Check the color scheme in the Color class'
    )
  })
  test('should return the correct hex value for grey', () => {
    const greyColor = new Color('grey')
    expect(greyColor.hex()).toBe('#808080')
  })
})
