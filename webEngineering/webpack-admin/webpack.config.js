const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development", // 开发环境
  entry: path.resolve(__dirname, "./src/main.js"), //入口
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
  },
  resolve: {
    alias: {
      "@": path.resolve("src"),
    },
    extensions: [".ts", ".tsx", ".js", ".jsx", ".vue"],
  },
  module: {
    // loader
  },
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin()],
  devServer: {
    // contentBase: path.resolve(__dirname, "./dist"),
    port: 8080,
    static: {
      directory: path.join(__dirname, "public"),
    },
  },
};
