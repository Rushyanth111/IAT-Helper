const path = require("path");
const nodeExternals = require("webpack-node-externals");
module.exports = {
  entry: "./index.js",
  module: {
    rules: [
      {
        test: /\.(ts)?/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: [".ts", ".js"],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  target: "node",
  mode: "production",
};
