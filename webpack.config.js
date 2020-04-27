const path = require('path');
const nodeExternals = require('webpack-node-externals');
module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts?/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js/,
        use: ['source-map-loader'],
        enforce: 'pre',
      },
    ],
  },

  resolve: {extensions: ['.ts', '.js']},
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build'),
  },
  target: 'node',
  mode: 'development',
  externals: [nodeExternals()],
};
