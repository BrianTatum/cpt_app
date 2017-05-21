var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : false,
  entry: ["babel-polyfill", "./src/app.js"],
  //entry: "./src/app.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        }
      }
    ]
  },
  output: {
    path: __dirname + "/public/assets/js",
    filename: "bundle.min.js",
    publicPath: "/assets/js"
  },
  plugins: debug ? [] : [
    //new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false, minimize: true, compress: {warnings: false} }),
    new webpack.LoaderOptionsPlugin({minimize: true})    
  ],
};