const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style_bundle.css'
    }
    )
  ],

  entry: './src/script/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/virtual',
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.s?css$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] },
      {  test: /\.(png|jp(e*)g|svg|otf)$/, use: [ { loader: 'file-loader', options: { name: '[name].[ext]' } } ] }
    ]
  },
  devServer: { 
    contentBase: path.resolve(__dirname,'dist'), 
    port: 7777,
    open: 'Chrome'
  }
};