const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config');
const complier = webpack(config); //用webpack结合配置文件，返回编译器

const app = express();
app.use(
  webpackDevMiddleware(complier, {
    publicPath: config.output.publicPath // 对应webpack.config.js
  })
);

app.listen(3000, () => {
  console.log('server is running...');
});
