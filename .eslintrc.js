module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'jest/globals': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
    'process': true,
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    'jest',
  ],
  'rules': {
    'indent': [
      'error',
      2, {
        'ignoredNodes': [
          'JSXAttribute',
          'JSXSpreadAttribute',
        ],
      },
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'quotes': [
      'error',
      'single',
    ],
    'semi': [
      'error',
      'always',
    ],
    'react/prop-types': 0,
  },
  'settings': {
    'react': {
      'version': 'detect',
    },
  },
  "parser": "babel-eslint",
};
