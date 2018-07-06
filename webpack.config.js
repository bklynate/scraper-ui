const path = require('path');
const nodeExclude = require('webpack-node-externals');

const config = {
  target: 'node',
  externals: [nodeExclude()],
  entry: './index.js',
  output: {
    // save a filename named 'bundle.js' in a folder called 'dist'
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/, // this takes a regex to determine what the loader gets applied to..
        exclude: /node_modules/
      },
    ]
  }
};

module.exports = config;
