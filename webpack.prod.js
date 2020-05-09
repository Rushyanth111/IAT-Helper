const path = require("path");
const nodeExternals = require("webpack-node-externals");
module.exports = {
  entry: "./index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  target: "node",
  mode:"production"
};
