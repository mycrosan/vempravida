module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/no-unused-components': 'off',
    'vue/require-v-for-key': 'off',
    'vue/no-use-v-if-with-v-for': 'off',
    'vue/no-parsing-error': 'off'
  }
}
