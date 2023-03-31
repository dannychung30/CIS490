const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './scripts/index.js',
    questionPairing: './scripts/questionPairing.js',
    questionSelection: './scripts/questionSelection.js',
    results: './results/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, 'public', 'index.html'),
      template: path.join(__dirname, 'pages', 'index.html'),
    }),
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, 'public', 'question-pairing.html'),
      template: path.join(__dirname, 'pages', 'question-pairing.html'),
    }),
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, 'public', 'question-selection.html'),
      template: path.join(__dirname, 'pages', 'question-selection.html'),
    }),
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, 'public', 'results.html'),
      template: path.join(__dirname, 'pages', 'results.html'),
    }),
  ],
  devServer: {
    static: './pages',
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
