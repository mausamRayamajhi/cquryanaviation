const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('dist/assets/style/styles.css');
  return {
    entry: './src/App.js',
    output: {
      path: path.join(__dirname, 'build'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          use: ['html-loader']
        }, {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        }, {
          test: /\.s?css$/,
          use: CSSExtract.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'sass-loader', 
                options: {
                  sourceMap: true
                }
              }
            ]
          })
        }, {
          test: /\.(jpeg|jpg|png|gif)(\?.*$|$)/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'dist/assets/img/',
                publicPath: 'dist/assets/img/'
              }
            }
          ]
        }, {
          test: /\.woff$/,
          use: [
            {
              loader: "url-loader?limit=10000&mimetype=application/font-woff",
              options: {
                name: '[name].[ext]',
                outputPath: 'dist/assets/font/',
                publicPath: 'dist/assets/font/'
              }
            }
          ]
        }, {
          test: /\.ttf$/,
          use: [
            {
              loader: "url-loader?limit=10000&mimetype=application/octet-stream",
              options: {
                name: '[name].[ext]',
                outputPath: 'dist/assets/font/',
                publicPath: 'dist/assets/font/'
              }
            }
          ]
        }, {
          test: /\.eot$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: '[name].[ext]',
                outputPath: 'dist/assets/font/',
                publicPath: 'dist/assets/font/'
              }
            }
          ]
        }, {
          test: /\.svg$/,
          use: [
            {
              loader: "url-loader?limit=10000&mimetype=image/svg+xml",
              options: {
                name: '[name].[ext]',
                outputPath: 'dist/assets/font/',
                publicPath: 'dist/assets/font/'
              }
            }
          ]
        }
      ]
    },
    plugins: [
      CSSExtract,
      new HtmlWebpackPlugin({title: 'Custom template', template: 'public/index.html'}),
      new CleanWebpackPlugin(['build'])
    ],
    devtool: isProduction
      ? 'nosources-source-map'
      : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'build'),
      historyApiFallback: true
    }
  }
};