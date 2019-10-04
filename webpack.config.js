const path = require("path");


module.exports = {
  entry: {
    "browser-action/script": "./src/browser-action/script.js",
    "page-action/script": "./src/page-action/script.js",
    "options/script": "./src/options/script.js",
    "content-scripts/content-1": "./src/content-scripts/content-1/script.js",
    "global": "./src/global.js",
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
          "css-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "icons/[name].[ext]"
            },
          },
        ],
      },
    ],
  },
};
