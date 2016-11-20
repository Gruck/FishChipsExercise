const HtmlWebpackPlugin =  require('html-webpack-plugin');

var path = require("path");
module.exports = {
  entry: {
    app: ["./app/main.js"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
    filename: "bundle.js"
  }
};