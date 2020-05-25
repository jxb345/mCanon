const path = require('path');

module.exports = {
  mode: 'development',
  // target: 'node',
  // node: {
  //   fs: 'empty',
  //   net: 'empty'
  // },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "public"),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [
          /node_modules/
        ],
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react']
        }
      }
    ]
  }
}