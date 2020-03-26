const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const devConfig = {
  mode: 'development', // production
  devtool: 'cheap-module-eval-source-map', // 开发环境
  plugins: [
    new webpack.HotModuleReplacementPlugin() // 开启HMR
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        // 从右向左打包顺序,
        // css-loader 用来分析有几个css文件，并且合并成一个文件
        // style-loader 用来加载样式
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        // 用 node-sass sass-loader来处理scss文件,
        // 如果需要加入厂商标记 需要 postcss-loader,并且引入配置文件
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2 // 要求scss文件之间互相的引用也要走一遍全部的loader
              // modules: true // 开启css模块化打包
            }
          },
          'sass-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  // 开通server
  devServer: {
    contentBase: './dist', // 在哪个目录下启动这个服务器
    open: true, // 自动回打开一个浏览器，并访问地址8080
    port: '8000',
    hot: true // 开启 HMR
  },
  output: {
    // 在开发环境不需要考浏览器虑缓存的问题，可以直接自己手动刷新浏览器就可以
    filename: '[name].js'
    // chunkFilename: '[name].chunk.js'
  }
};

module.exports = merge(baseConfig, devConfig);
