const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const config = [
  {
    page: 'index',
    script: 'index',
  },
  {
    page: 'question-selection',
    script: 'questionSelection',
  },
  {
    page: 'results',
    script: 'results',
  },
];

const entryHtmlPlugins = config.map(({ page, script }) => {
  return new HtmlWebpackPlugin({
    filename: path.join(__dirname, 'public', `${page}.html`),
    template: path.join(__dirname, 'src', 'pages', `${page}.html`),
    chunks: [script],
  });
});

module.exports = {
  entry: {
    index: path.join(__dirname, 'src', 'scripts', 'index.ts'),
    questionSelection: path.join(
      __dirname,
      'src',
      'questionSelection',
      'index.js'
    ),
    results: path.join(__dirname, 'src', 'results', 'index.js'),
  },
  plugins: [
    ...entryHtmlPlugins,
    new CopyPlugin({
      patterns: [{ from: path.join(__dirname, 'src', 'images'), to: 'images' }],
    }),
  ],
  module: {
    // exclude node_modules
    rules: [
      {
        test: /\.(js|jsx)$/, // <-- added `|jsx` here
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|gif|pdf|ico)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,

        type: 'asset/resource',
      },
      { test: /\.svg$/, loader: 'svg-inline-loader' },
    ],
  },
  // pass all js files through Babel
  resolve: {
    extensions: ['*', '.js', '.jsx'], // <-- added `.jsx` here
  },
};
