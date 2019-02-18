module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ['plugin:vue/essential', '@vue/prettier'],

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    quotes: 'off', // 强制使用一致的反勾号、双引号或单引号
    semi: 'off' // 要求或禁止使用分号而不是 ASI
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  extends: ['plugin:vue/recommended', '@vue/prettier']
}
