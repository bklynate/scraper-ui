module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['import', 'jsx-a11y', 'react', 'prettier'],
  parser: 'babel-eslint',
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-undef': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/forbid-prop-types': 2,
    'react/prop-types': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/no-array-index-key': 'off',
    'react/sort-comp': 'off',
    'react/jsx-uses-vars': 2,
    'no-underscore-dangle': 'off',
    'import/no-named-as-default': 'off',
    'jsx-a11y/no-autofocus': 'off'
  },

  globals: {
    __CLIENT__: true,
    __DEVTOOLS__: true
  }
};
