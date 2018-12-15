var webpack = require('webpack');

var webpackConfig = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    })
  ],
  devtool: '#inline-source-map'
};

module.exports = {
  frameworks: ['jasmine'],
  files: ['./index.js'],
  preprocessors: {
    './index.js': ['webpack', 'sourcemap']
  },
  webpack: webpackConfig,
  plugins: [
    'karma-jasmine',
    'karma-mocha-reporter',
    'karma-sourcemap-loader',
    'karma-webpack'
  ]
};
