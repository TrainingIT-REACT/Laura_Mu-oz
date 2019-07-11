const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: [
      'whatwg-fetch',
      './src/index.js'
    ],
  output: {
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ],
  devtool: "hidden-source-map",
  devServer: {
    contentBase: './build',
    historyApiFallback: true
  },
  optimization: {
      runtimeChunk: "single",
      splitChunks: {
          cacheGroups: {
              vendor: {
                  test: "vendor",
                  name: "vendor",
                  enforce: true,
                  chunks: "all"
              }
          }
      }
  }
}