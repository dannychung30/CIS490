const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './results/src/index.js',
  output: {
    filename: 'results.js',
    path: path.resolve(__dirname, 'results', 'public'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'results', 'src', 'results.html'),
    }),
  ],
  devServer: {
    static: './results/public',
  },
  module: {
    // exclude node_modules
    rules: [
      {
        test: /\.(js|jsx)$/, // <-- added `|jsx` here
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  // pass all js files through Babel
  resolve: {
    extensions: ['*', '.js', '.jsx'], // <-- added `.jsx` here
  },
};
