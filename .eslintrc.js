module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'next',
    'airbnb',
    'plugin:react/recommended',
    'plugin:storybook/recommended',
    'plugin:testing-library/react',
    'eslint-config-prettier',
    'plugin:import/recommended',
    // 'plugin:react/jsx-runtime',
    // 'plugin:jest/all',
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
  plugins: ['react', 'prettier', 'babel', 'import'],
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
    'import/no-unresolved': [
      2,
      {
        commonjs: true,
        amd: true,
        caseSensitiveStrict: true,
        caseSensitive: true,
      },
    ],
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
    'linebreak-style': 0,
    'react/react-in-jsx-scope': 'off',
    '@next/next/no-img-element': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.stories.*',
          '**/.storybook/**/*.*',
          '**/webpack.*.js',
        ],
        peerDependencies: true,
      },
    ],
    // 'prefer-destructuring': ['error', { object: false, array: false }],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './']],
      },
    },
  },
};
