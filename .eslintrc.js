module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: ['@typescript-eslint'],
  extends: ['airbnb-typescript', 'prettier'],
  rules: {
    // React-specific
    'react/jsx-props-no-spreading': 0,
    // This disables the 'React' must be in scope when using JSX error for React 17+
    'react/jsx-uses-react': 0,
    'react/react-in-jsx-scope': 0,
  },
};
