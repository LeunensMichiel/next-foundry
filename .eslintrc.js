module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: ['@typescript-eslint'],
  extends: ['airbnb-typescript', 'prettier'],
  rules: {
    // Project-specific
    'import/prefer-default-export': 0,
    // React-specific
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 0,
    // This disables the 'React' must be in scope when using JSX error for React 17+
    'react/jsx-uses-react': 0,
    'react/react-in-jsx-scope': 0,
  },
};
