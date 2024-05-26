import globals from 'globals'
import js from '@eslint/js'
import jestPlugin from 'eslint-plugin-jest'

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest, // Добавление глобальных переменных Jest
      },
    },
    plugins: {
      jest: jestPlugin.configs.recommended, // Добавление плагина Jest
    },
    rules: {
      'arrow-body-style': ['error', 'always'],
      camelcase: ['error'],
    },
  },
  // jestPlugin.configs.recommended, // Рекомендуемые правила для Jest
]
