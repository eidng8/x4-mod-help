/*
 * GPLv3 https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Author: eidng8
 */

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'eqeqeq': 'off',
    'space-before-function-paren': [
      'error',
      {
        'anonymous': 'always',
        'named': 'never',
        'asyncArrow': 'always',
      },
    ],
    'object-curly-spacing': [
      'error',
      'never',
    ],
    'operator-linebreak': [
      'error',
      'before',
    ],
    'semi': [
      'error',
      'always',
    ],
    'yoda': [
      'error',
      'always',
      {
        'exceptRange': true,
        'onlyEquality': true,
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ]
};
