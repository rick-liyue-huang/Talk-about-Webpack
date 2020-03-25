// 配置webpack 打包
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development', // production
  // devtool: 'none', // 关闭source-map
  // inline-source-map 将 .map文件合并到目标文件
  // cheap-module-inline-source-map 也负责第三方的库文件映射

  // devtool: 'cheap-module-inline-source-map',
  // 通过eval来生成映射，也是最快的，
  devtool: 'cheap-module-eval-source-map', // 开发环境
  // devtool: 'cheap-module-source-map' // production 环境
  entry: {
    // 打包多个文件配置
    main: './src/index.js'
    // sub: './src/index.js'
  },
  output: {
    filename: '[name].js', // name 对应 entry key值
    path: path.resolve(__dirname, 'dist'),
    // 静态资源放到cdn上面
    // publicPath: 'http://cdn.com.cn',
    publicPath: '/'
  },
  module: {
    rules: [
      /*
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]_[hash].[ext]',
            // 生成到dist下面的images文件夹里
            outputPath: 'images/'
          }
        }
      },
      */
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          // 用url-loader打包图片文件,会将打包的文件变为64位文件直接放入到bundle.js里面
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'images/',
            limit: 2048
          }
        }
      },
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
      },
      {
        test: /\.(eot|ttf|svg|woff)$/,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  },
  // plugin 可以在 webpack 在运行到一定时候可以做一些事情
  plugins: [
    // 在目标文件夹中自动生成html文件并引入相关打包js文件
    // 为了保证一致，可以使用模板
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(), // 首先删除目标文件夹，在重新生成新的文件夹
    new webpack.HotModuleReplacementPlugin() // 开启HMR
  ],
  // 开通server
  devServer: {
    contentBase: './dist',
    open: true, // 自动回打开一个浏览器，并访问地址8080
    port: '8000',
    // proxy: {
    //   '/api': 'http://localhost:3000'
    // }
    hot: true, // 开启 HMR
    hotOnly: true // 既是HMR不生效，也不更新浏览器
  }
};
