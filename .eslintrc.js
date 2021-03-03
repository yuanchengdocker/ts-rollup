const override = require('./eslint/override')
const error = require('./eslint/error')
const bestPractices = require('./eslint/best-practices')
const variables = require('./eslint/variables')
const style = require('./eslint/style')
const es6 = require('./eslint/es6')

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    ...override,
    ...error,
    ...bestPractices,
    ...variables,
    ...style,
    ...es6,
    // "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-async-promise-executor': 'off',
    'no-param-reassign': 'off',
    'no-console': 0,
    'no-undef': 0,
    'no-unused-vars': 0,
    camelcase: 0,
    'no-nested-ternary': 0,
    'no-underscore-dangle': 0,
    'no-plusplus': 0,
    'no-lonely-if': 0,
    'func-names': 0,
    'no-loop-func': 0,
    'vars-on-top': 0, // 加no-var
    'default-case': 0,
    'consistent-return': 0,
    complexity: 0, // complexity: ['warn', 10],
    'vue/no-unused-vars': 0,
    'vue/require-prop-type-constructor': 0,
    'vue/valid-v-model': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  },
  globals: {
    mnb: true,
    WebViewJavascriptBridge: true
  }
}
