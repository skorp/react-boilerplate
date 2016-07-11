var webpack = require('webpack');
var path = require('path');
module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: [
    "./src/main.js"
  ],
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
    publicPath: "/dist"
  },
  module: {
    preLoaders: [
      {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
    ],
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['babel']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  ]
};
