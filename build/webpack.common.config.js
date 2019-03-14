
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const merge = require('webpack-merge')
const devConfig = require('./webpack.dev.config.js');
const prodConfig = require('./webpack.prod.config.js');

const commonConfig = {
// module.exports = {
	entry: {
		main: './first-glance/src/index.js'
	},

	output: {
		path: path.resolve(__dirname, '../first-glance/dist')
	},

	module: {
		rules: [
			{
				test: /\.(jpg|png|gif)$/,
				use: {
					loader: 'url-loader',
					options: {
						// define the pictures size limit
						limit: 10240,
						// if bigger than 10k, put in 'distImages' directory
						outputPath: 'distImages/'
					}
				}
			},

			{
				test: /\.(eot|ttf|svg|woff)$/,
				use: {
					loader: 'file-loader'
				}
			},

			// deal with es6 by babel
			{ 
				test: /\.js$/, 
				exclude: /node_modules/, 
				use: [
					{
						loader: 'babel-loader'
					},
					{
						loader: 'imports-loader?this=>window'
					}
				] 
				
				
			}

		]
	},

	plugins: [
	// create automatically index.html by template 'index.html'
		new HtmlWebpackPlugin({
			template: './first-glance/src/index.html'
		}),

		// clean the dist (output) directory before bundle
		new CleanWebpackPlugin(),

		// shimming
		new webpack.ProvidePlugin({
			$: 'jquery',
			_: 'lodash'
		})
	],

	// 1. synchronous code splitting 
	// 2. asynchronous code splitting add 'babel-plugin-dynamic-import-webpack' in .babelrc file
	optimization: {
		// for old edtion webpack
		runtimeChunk: {
			name: 'runtime'
		},
		usedExports: true,
		splitChunks: {
      // chunks: 'async',
      chunks: 'all', // for sync
      chunks: 'initial', //for sync
      minSize: 30000, // if bigger than minsize, it will get seperated file
      maxSize: 0,
      minChunks: 1, // min use imported file
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        // vendors: false, // for async
        // default: false // for async
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          filename: 'vendors.js'
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
          filename: 'common.js'
        }
      }
    }
	},
	// 当两个三方文件导到一个文件中的时候，如果过大不用提示警告
	performance: false,

}

module.exports = (env) => {
	if(env && env.production) {
		// production environment
		return merge(commonConfig, prodConfig);
	} else {
		// development environment
		return merge(commonConfig, devConfig);
	}
}








