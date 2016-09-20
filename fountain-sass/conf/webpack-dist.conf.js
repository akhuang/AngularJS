const webpack = require('webpack');
const conf = require('./gulp.conf');
const path = require('path');

//generate html file
const HtmlWebpackPlugin = require('html-webpack-plugin');
//将CSS文件单独抽取
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const pkg = require('../package.json');
//增加CSS前缀
const autoprefixer = require('autoprefixer');

module.exports = {
  module: {
    // preLoaders: [
    //   {
    //     test: /\.js$/,
    //     exclude: /node_modules/,
    //     loader: 'eslint'
    //   }
    // ],

    loaders: [
      {
        test: /.json$/,
        loaders: [
          'json'
        ]
      },
      {
        test: /\.(css|scss)$/,
        loaders: ExtractTextPlugin.extract({
          fallbackLoader: 'style',
          loader: 'css?minimize!sass!postcss'
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'ng-annotate' //自动补全注入参数 http://www.jianshu.com/p/564c0d068d2c
          //.controller('testCtrl',  function ($scope) {});
          //.controller('testCtrl',  ["$scope", function ($scope) {}]);
        ]
      },
      {
        test: /.html$/,
        loaders: [
          'html'
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: conf.path.src('index.html'),
      inject: true
    }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: { unused: true, dead_code: true } // eslint-disable-line camelcase
    // }),
    new ExtractTextPlugin('index-[contenthash].css')
  ],
  postcss: () => [autoprefixer],
  output: {
    path: path.join(process.cwd(), conf.paths.dist),
    filename: '[name]-[hash].js'
  },
  entry: {
    app: `./${conf.path.src('index')}`,
    vendor: Object.keys(pkg.dependencies)
  }
};
