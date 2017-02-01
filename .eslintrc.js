module.exports = {
  extends: 'eslint:recommended',
  env: {
    es6: true,
    node: true,
    browser: false,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: [
    'flowtype',
  ],
  rules: {
    'array-bracket-spacing': ['error', 'never'],
    'brace-style': ['error', '1tbs'],
    'camelcase': 'error',
    'comma-dangle': 'off',
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'consistent-return': 'error',
    'consistent-this': ['error', 'self'],
    'curly': ['error', 'multi-line'],
    'dot-notation': 'error',
    'eol-last': 'error',
    'eqeqeq': ['error', 'smart'],
    'guard-for-in': 'error',
    'indent': ['error', 2, { SwitchCase: 1, VariableDeclarator: { var: 2, let: 2, const: 3 } }],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'keyword-spacing': 'error',
    'max-len': ['warn', 120],
    'no-alert': 'error',
    'no-caller': 'error',
    'no-catch-shadow': 'error',
    'no-console': 'warn',
    'no-else-return': 'error',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-parens': 'warn',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-implied-eval': 'error',
    'no-inner-declarations': ['error', 'both'],
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': ['error', { max: 2 }],
    'no-param-reassign': 'warn',
    'no-redeclare': 'error',
    'no-return-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow': ['error', { builtinGlobals: true }],
    'no-shadow-restricted-names': 'error',
    'no-spaced-func': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': 'error',
    'no-undefined': 'error',
    'no-underscore-dangle': 'off',
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used' }],
    'no-use-before-define': ['error', 'nofunc'],
    'no-useless-call': 'error',
    'no-useless-escape': 'error',
    'no-var': 'error',
    'no-warning-comments': 'off',
    'no-with': 'error',
    'object-curly-spacing': ['error', 'always'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'semi-spacing': ['error', { before: false, after: true }],
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never' }],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': ['warn', 'always', { block: { markers: ['!'], exceptions: ['*'] } }],
    'strict': 'off',
    'valid-jsdoc': 'warn',
    'wrap-iife': ['error', 'outside'],
    'yoda': ['error', 'never'],
  },
};

