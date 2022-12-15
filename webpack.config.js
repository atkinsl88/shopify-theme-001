const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css.liquid'
    })
  ],
  output: {
    filename: 'script.js.liquid',
    path: path.resolve(__dirname, 'assets'),
  },
};

// `npm run webpack` in theme folder.
// Run 'theme watch --allow-live' to sync.