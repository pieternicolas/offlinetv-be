const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const DIST_DIR = path.join(__dirname, 'dist');
const DEV_DIR = path.join(__dirname, 'src');

module.exports = {
  entry: './index.js',

  output: {
    path: DIST_DIR,
    filename: '[name].min.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  resolve: {
    alias: {
      Components: path.join(DEV_DIR, 'components/'),
      Containers: path.join(DEV_DIR, 'containers/'),
      Config: path.join(DEV_DIR, 'config/'),
      Middlewares: path.join(DEV_DIR, 'middlewares/')
    }
  },

  target: 'node',

  externals: [nodeExternals()],

  node: {
    fs: 'empty',
    net: 'empty',
    module: 'empty',
    tls: 'empty',
    vertx: 'empty'
  }
};