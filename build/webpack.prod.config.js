const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const prodConfig = {
  mode: 'production', // production
  devtool: 'cheap-module-source-map'
};

module.exports = merge(baseConfig, prodConfig);
