module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ["plugin:vue/essential", "@vue/prettier"],

  rules: {
    'quotes': [0, 'single'],
    'quote-props': [0, 'always'],
    'no-console': 'off',
    'no-debugger': 'off'
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  extends: ['plugin:vue/essential', '@vue/prettier']
};
