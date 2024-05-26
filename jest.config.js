/** @type {import('jest').Config} */
const config = {
  verbose: true,
  transform: {
    '^.+\\.(js|mjs)$': 'babel-jest',
  },
}

module.exports = config
