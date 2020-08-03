module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'operator-assignment': 'off',
    'no-underscore-dangle': 'off',
    'max-classes-per-file': ['error', 2],
    'consistent-return': 'off',
    'no-param-reassign': 'off',
  },
  ignorePatterns: ['*.config.js'],
};
