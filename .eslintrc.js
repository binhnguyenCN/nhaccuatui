module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: [
    'next',
    'airbnb',
    'plugin:react/recommended',
    // 'plugin:react/jsx-runtime',
    'plugin:storybook/recommended',
    'eslint-config-prettier',
    'plugin:import/recommended',
    'plugin:testing-library/react',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:jest/all',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  plugins: ['react', 'prettier', 'babel', 'import', 'jest'],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 0,
    'react/function-component-definition': 0,
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'prettier/prettier': ['error'],
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
    'import/no-unresolved': [
      2,
      {
        commonjs: true,
        amd: true,
        caseSensitiveStrict: true,
        caseSensitive: true,
      },
    ],
    '@next/next/no-img-element': 'off',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'jest/prefer-expect-assertions': [
      'warn',
      { onlyFunctionsWithAsyncKeyword: true },
    ],
    'eol-last': 1,
    'operator-linebreak': [2, 'after'],
    'no-bitwise': [2, { allow: ['&', '|', '>>', '<<'] }],
    'implicit-arrow-linebreak': 0,
    'linebreak-style': 0,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './']],
      },
    },
  },
};
