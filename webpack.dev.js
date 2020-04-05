const path = require("path");
const nodeExternals = require("webpack-node-externals");
module.exports = {
  entry: "./Tests.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
  },
  target: "node",
  mode: "development",
  externals: [nodeExternals()],
};
