const debug = process.env.NODE_ENV === 'development'
const webpack = require('webpack')
const path = require('path')
const TerserPlugin = require("terser-webpack-plugin")
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: {
    index: path.join(__dirname, 'src', 'index.js')
  },
  output: {
    path: path.join(__dirname, '../public'),
    filename: 'index.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-react',
            '@babel/preset-env',
            '@emotion/babel-preset-css-prop'
          ],
          retainLines: debug
        }
      }]
    }, {
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader']
    }, {
      test: /\.(sass|less|css)$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  optimization: debug ? {} : {
    minimize: true,
    minimizer: [new TerserPlugin()],
    moduleIds: 'named',
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new Dotenv({
      path: debug ? `.env.${process.env.NODE_ENV}` : '.env'
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, '../public'),
    },
    allowedHosts: 'all',
    historyApiFallback: {
      disableDotRule: true,
    },
    port: process.env.PORT ? process.env.PORT : 'auto',
  },
}
