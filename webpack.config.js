
/*
	config the webpack
*/

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {

	entry: {
		// bundle two entry files
		main: './first-glance/src/index.js',
		// sub: './first-glance/src/index.js'
	},

	output: {
		// [name]: main or [name]: sub
		filename: '[name].js',
		path: path.resolve(__dirname, './first-glance/dist'),
// when put the static files in cdn, we need to config this 
// <script type="text/javascript" src="http://cdn.com.cn/main.js">
		// publicPath: 'http://cdn.com.cn'
		// publicPath: '/'
	},

// remember the mode and devtool(source-map)
	mode: 'development',
	// tree shaking only for development environment
	// "sideEffects": false, in package.json
	// "sideEffects": ["@babel/polyfill"],
	// for development only
	optimization: {
		usedExports: true
	},
	// source-map
	devtool: 'cheap-module-eval-source-map',

	/*mode: 'production',
	devtool: 'cheap-module-source-map'*/

	// use 'webpack-dev-server', and the produced 'dist' directory is in catch
	devServer: {
		contentBase: './dist',
		// automatically open browsers
		open: true,

		// hot module replace func
		hot: true,
		hotOnly: true

		/*proxy: {
			'/api': 'http://localhost:3000/'
		}*/
	},


	module: {
		rules: [
		// deal with pictures with 'file-loader'
			/*{
				test: /\.(jpg|png|gif|txt)$/,
				use: {
					loader: 'file-loader'
				}
			},*/
			// deal with pictures with url-loader
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

			// deal with .css file
			{
				test: /\.css$/,
				use: [
				// secondly, mount combined .css file with .html file
					'style-loader',
				// firstly, combine different .css files.
					'css-loader'
				]
			},

			// deal with .scss file
			// postcss-loader -> sass-loader -> css-loader -> style-loader
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

			// deal with fonts file such as .eot, .ttf and .svg
			// file-loader can deal with almost all kinds of files
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
				use: {
					loader: 'babel-loader',
					options: {
						// put contents in .babelrc
					}
				}
				
			}

		]
	},

	// used to let webpack become more flexible,
	// plugin can be acted as hooks, which will be effected on webpack bundling some time.
	plugins: [
	// create automatically index.html by template 'index.html'
		new HtmlWebpackPlugin({
			template: './first-glance/src/index.html'
		}),

		// clean the dist (output) directory before bundle
		new CleanWebpackPlugin(),
		// use Hot module replacement to keep the original style
		new webpack.HotModuleReplacementPlugin()
	]
}


	// // for application
	// presets: [['@babel/preset-env', {
	// 	targets: {
	// 		chrome: '67'
	// 	},
	// 	// decrease target code.
	// 	useBuiltIns: 'usage'
	// }]]
	// // for framework
	// /*"plugins": [["@babel/plugin-transform-runtime", {
	// 	"corejs": 2,
	// 	"helpers": true,
	// 	"regenerator": true,
	// 	"useESModules": false
	// }]]*/















