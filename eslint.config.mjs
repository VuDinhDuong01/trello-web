import { FlatCompat } from '@eslint/eslintrc'
const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
})
const eslintConfig = [
  ...compat.config({
    extends: ['next'],
    rules: {
      'react/no-unescaped-entities': 'error',
      '@next/next/no-page-custom-font': 'error',
      'react/jsx-uses-vars': 'error',
      'no-var': 'error',
      "no-unused-vars": "error" 
    },
  }),
]
export default eslintConfig
