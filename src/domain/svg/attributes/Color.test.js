import { Color } from './Color.js'

describe('Testing the Color class', () => {
  test('It is possible to create an instance of the class', () => {
    const redColor = new Color('red')
    expect(redColor instanceof Color).toBe(true)
  })
})
