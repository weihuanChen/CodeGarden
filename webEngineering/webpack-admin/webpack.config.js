const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
module.exports = {
  mode: "development", // 开发环境
  entry: path.resolve(__dirname, "./src/main.ts"), //入口
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
  },
  resolve: {
    alias: {
      "@": path.resolve("src"),
    },
    extensions: [".ts", ".tsx", ".js", ".jsx", ".vue", ".json"],
  },
  module: {
    // loader
    rules: [
      { test: /\.vue$/, use: ["vue-loader"] },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.tsx?$/, //ts或者tsx
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              appendTsSuffixTo: ["\\.vue$"], //用于编译.vue中的ts
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/, // 默认静态资源加载方式
        type: "asset",
        generator: { filename: "img/[contenthash:8][ext][query]" },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      templateContent: `
      <!DOCTYPE html>
      <html>
        <head>
        <meta charset="utf-8">
        <title> Admin Webpack </title> 
        </head>
        <body>
        <div id="app"/>
        </body>
      </html>
      `,
    }),
    new VueLoaderPlugin(),
  ],
  devServer: {
    // contentBase: path.resolve(__dirname, "./dist"),
    port: 8080,
    historyApiFallback: true, // 支持history模式
    static: {
      directory: path.join(__dirname, "public"),
    },
  },
};
