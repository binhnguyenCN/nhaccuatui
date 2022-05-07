module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:storybook/recommended',
  ],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  plugins: ['react', 'eslint-plugin-prettier'],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'prettier/prettier': ['error'],
    'react/prop-types': 0,
    'eol-last': 1,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/function-component-definition': 0,
    'operator-linebreak': [2, 'after'],
    'no-bitwise': [2, { allow: ['&', '|', '>>', '<<'] }],
    'implicit-arrow-linebreak': 0,
  },
};
