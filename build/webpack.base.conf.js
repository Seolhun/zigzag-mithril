let path = require('path')
let utils = require('./utils')
let config = require('../config')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
    alias: {
      '@': resolve('src'),
      'assets': path.resolve('src/assets'),
      'scss': path.resolve('src/assets/scss'),
      'ts': path.resolve('src/ts'),
      'components': path.resolve('src/ts/components'),
      'models': path.resolve('src/ts/models'),
      'router': path.resolve('src/ts/router'),
      'view': path.resolve('src/ts/view')
    },
  },

  module: {
    rules: [
      // {
      //   test: /\.(js)$/,
      //   loader: 'eslint-loader',
      //   enforce: 'pre',
      //   include: [resolve('src'), resolve('test')],
      //   options: {
      //     formatter: require('eslint-friendly-formatter')
      //   }
      // },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      }, {
        test: /\.(tsx|ts)?$/,
        loader: 'awesome-typescript-loader',
        include: [resolve('src'), resolve('test')],
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css-loader')
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
          options: {
            sourceMap: true
          }
        }, {
          loader: 'sass-loader', // compiles Sass to CSS
          options: {
            sourceMap: true,
            // includePaths: ["absolute/path/a", "absolute/path/b"]
          }
        }]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css'
    })
  ]
}
