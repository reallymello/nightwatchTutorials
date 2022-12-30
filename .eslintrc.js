module.exports = {
    env: {
      browser: true,
      commonjs: true,
      es2021: true,
      mocha: true,
    },
    extends: ['airbnb-base', 'prettier'],
    overrides: [],
    plugins: ['prettier'],
    parserOptions: {
      ecmaVersion: 'latest',
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
    },
  };
  