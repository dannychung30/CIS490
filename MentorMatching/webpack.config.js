const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = [
  {
    page: 'index',
    script: 'index',
  },
  {
    page: 'question-pairing',
    script: 'questionPairing',
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
  mode: 'development',
  entry: {
    index: './src/scripts/index.js',
    questionPairing: './src/scripts/questionPairing.js',
    questionSelection: './src/scripts/questionSelection.js',
    results: './src/results/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public'),
  },
  plugins: [...entryHtmlPlugins],
  devServer: {
    static: './src',
  },
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
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '/src/images/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,

        type: 'asset/resource',
      },
    ],
  },
  // pass all js files through Babel
  resolve: {
    extensions: ['*', '.js', '.jsx'], // <-- added `.jsx` here
  },
};
