const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',

  devServer: {
    contentBase: './dist',
    port: '3000'
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.min.js'
  },

  module: {
    rules: [
      {
        test: /\.(ts)x?$/,
        use: {
          loader: "babel-loader"
        }
      },

      {
        test: /\.scss/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },

      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};