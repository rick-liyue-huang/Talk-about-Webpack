
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.config.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const prodConfig = {
	mode: 'production',
	devtool: 'cheap-module-source-map',
	module: {
		rules: [
			// deal with .css file
			{
				test: /\.css$/,
				use: [
				// secondly, mount combined .css file with .html file
					MiniCssExtractPlugin.loader,
				// firstly, combine different .css files.
					'css-loader',
					'postcss-loader'
				]
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
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
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[name].chunk.css'
		})
	],

	optimization: {
		minimizer: [new OptimizeCSSAssetsPlugin({})],
		splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
	}
};

module.exports = merge(commonConfig, prodConfig);















