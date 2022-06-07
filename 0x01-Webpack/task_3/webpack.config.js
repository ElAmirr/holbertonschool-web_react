const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    header: './js/header.js',
    body: './js/body.js',
    footer: './js/footer.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },

  optimization: {
    runtimeChunk: 'single',
  },

  plugins: [new HtmlWebpackPlugin()],
  
  module: {
    rules: [
			{
        test: /\.css$/i,
        use: ['style-loader','css-loader']
      },

      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  
  mode: "development",

  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
},

devServer: {
  static: {
    directory: path.join(__dirname, 'public'),
  },
  compress: true,
  port: 8564,
},

};