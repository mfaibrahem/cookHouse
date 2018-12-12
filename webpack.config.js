const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style_bundle.css'
    }
    ),
    new HtmlWebpackPlugin({
      template: './src/html/index.html',
      filename: 'index.html'
    })
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
      { test: /\.html$/, use: ['html-loader'] },
      {  
          test: /\.(png|jp(e*)g|svg|otf)$/, 
          use: [ 
                { loader: 'file-loader', 
                  options: { 
                    name: '[name].[ext]',
                    outputPath: 'img/'                  } 
                } 
          ] 
      }
    ]
  },
  devServer: { 
    contentBase: path.resolve(__dirname,'dist'), 
    port: 7777,
    open: 'Chrome',
    index: 'main.html'
  }
};