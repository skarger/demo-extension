const path = require("path");


module.exports = {
  entry: "./src/browser-action/script.js",
  output: {
    filename: "script.js",
    path: path.resolve(__dirname, "dist/browser-action"),
  },
};
