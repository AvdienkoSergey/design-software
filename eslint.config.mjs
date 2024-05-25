'use-strict'

import globals from 'globals'
import js from '@eslint/js'

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      'arrow-body-style': ['error', 'always'],
      camelcase: ['error'],
    },
  },
]
