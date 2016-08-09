var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: [
    "./src/main.js"
  ],
  output: {
    path: __dirname + "/built",
    filename: "bundle.[chunkhash].js",
    publicPath: "/built"
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
    }),
    new HtmlWebpackPlugin( {
      template: './src/index.html',
      filename: './index.html',
      minify: {
        html5: true,
        removeComments: true,
        caseSensitive :true,
        preserveLineBreaks: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        collapseBooleanAttributes: true,
        removeEmptyAttributes: true
      }
    })
  ]
};
