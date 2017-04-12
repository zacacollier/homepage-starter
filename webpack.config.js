const { resolve } = require('path');
const webpack     = require('webpack');
const Nyan        = require('nyan-progress-webpack-plugin');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    // bundle the client for webpack-dev-server
    // connect it to the provided endpoint
    'webpack-dev-server/client?http://localhost:8080',
    // bundle the client for hot reloading
    // 'only-' means only hot reload for successful updates
    'webpack/hot/only-dev-server',
    // app entry point
    // rooted at './src'
    './index.js'
  ],

  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
    // HMR needs to know where to load hot update chunks
  },
  context: resolve(__dirname, 'src'),

  devtool: 'inline-source-map',

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'dist'),
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react']
        },
      },
      {
        test: /\.css$/,
        // Webpack uses loaders with right-to-left precedence,
        // therefore, everything here should be wrapped within postcss-loader
        use: [
          'style-loader',
          'css-loader?modules',
          'postcss-loader',
        ],
      },
      {
        test: /\.(jpg|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader?hash=sha512&digest=hex',
            query: {
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // for the lulz
    new Nyan({
      restoreCursorPosition: true,
      nyanCatSays: (progress, messages) => progress === 1 && "(☞  ͡° ͜ʖ ͡°)☞ ",
    }),
    // global HMR
    new webpack.HotModuleReplacementPlugin(),
    // print more readable module names in the browser console
    new webpack.NamedModulesPlugin(),
  ],
};
