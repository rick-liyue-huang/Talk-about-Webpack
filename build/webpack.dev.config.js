
const merge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./webpack.common.config.js');

const devConfig = {

	mode: 'development',
	optimization: {
		usedExports: true
	},
	devtool: 'cheap-module-eval-source-map',

	devServer: {
		contentBase: './dist',
		open: true,
		hot: true,
	},

	plugins: [
		// use Hot module replacement to keep the original style
		new webpack.HotModuleReplacementPlugin()
	]
}

module.exports = merge(commonConfig, devConfig);










