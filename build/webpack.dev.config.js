
const merge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./webpack.common.config.js');

const devConfig = {

	mode: 'development',
	
	devtool: 'cheap-module-eval-source-map',

	devServer: {
		contentBase: './dist',
		open: true,
		hot: true,
	},

	module: {
		rules: [
			// deal with .css file
			{
				test: /\.css$/,
				use: [
				// secondly, mount combined .css file with .html file
					'style-loader',
				// firstly, combine different .css files.
					'css-loader',
					'postcss-loader'
				]
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							// deal with nested .scss files in .scss file
							importLoaders: 2,
							// open css modules, to deal with .css on different file
							// modules: true
						}
					},
					// need to install 'sass-loader' and 'node-sass' to deal with .scss file
					'sass-loader',
					// need to create 'postcss.config.js' and require 'autoprefixer'
					'postcss-loader'
				]
			},
		]
	}

	plugins: [
		// use Hot module replacement to keep the original style
		new webpack.HotModuleReplacementPlugin()
	]
}

module.exports = merge(commonConfig, devConfig);










