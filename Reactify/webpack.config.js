const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: [
      'whatwg-fetch',
      './src/index.js'
    ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[chunkhash:8].js'
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
      },
      {
        test: /\.(jpg|png)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'images/[name].[hash:base64:5].[ext]',
            publicPath: '../',
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new WorkboxPlugin.InjectManifest({
      swSrc: './src/sw.js'
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