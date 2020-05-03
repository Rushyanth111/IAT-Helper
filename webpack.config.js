const path = require('path');
const nodeExternals = require('webpack-node-externals');
module.exports = {
  entry: path.resolve('./src/index.ts'),
  module: {
    rules: [
      {
        test: /\.ts?/,
        use: 'babel-loader',
        exclude: /node_modules/,
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
  watchOptions: {
    poll: 1000,
    ignored: [/node_modules/, 'src/test/**/*.ts'],
    aggregateTimeout: 1000,
  },
};
