module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['airbnb-typescript', 'prettier'],
};
