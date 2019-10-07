const path = require("path");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    "browser-action/script": "./src/browser-action/script.js",
    "page-action/script": "./src/page-action/script.js",
    "options/script": "./src/options/script.js",
    "content-scripts/content-1": "./src/content-scripts/content-1/script.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CopyPlugin([
      { from: "src/manifest.json", to: "manifest.json" },
      { from: "src/icons/", to: "icons/" },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
        ],
      },
    ],
  },
};
