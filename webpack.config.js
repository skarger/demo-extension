const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "source-map",
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
    new CleanWebpackPlugin(),
    new CopyPlugin(
      [
        { from: "src/manifest.json", to: "manifest.json" },
        { from: "src/icons/", to: "icons/" },
      ],
      { copyUnmodified: true },
    ),
    new HtmlWebpackPlugin({
      filename: "browser-action/index.html",
      template: "src/browser-action/index.html",
      chunks: ["browser-action/script"],
    }),
    new HtmlWebpackPlugin({
      filename: "options/index.html",
      template: "src/options/index.html",
      chunks: ["options/script"],
    }),
    new HtmlWebpackPlugin({
      filename: "page-action/index.html",
      template: "src/page-action/index.html",
      chunks: ["page-action/script"],
    }),
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
