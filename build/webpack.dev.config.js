const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const devConfig = {
  mode: 'development', // production
  devtool: 'cheap-module-eval-source-map', // 开发环境
  plugins: [
    new webpack.HotModuleReplacementPlugin() // 开启HMR
  ],
  // 开通server
  devServer: {
    contentBase: './dist', // 在哪个目录下启动这个服务器
    open: true, // 自动回打开一个浏览器，并访问地址8080
    port: '8000',
    hot: true // 开启 HMR
  },
  optimization: {
    usedExports: true
  }
};

module.exports = merge(baseConfig, devConfig);
