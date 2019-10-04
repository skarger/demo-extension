const path = require("path");


module.exports = {
  entry: {
    "browser-action/script": "./src/browser-action/script.js",
    "page-action/script": "./src/page-action/script.js",
    "options/script": "./src/options/script.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ],
      },
    ],
  },
};
