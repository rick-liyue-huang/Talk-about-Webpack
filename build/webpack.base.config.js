// 配置webpack 打包
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    // 打包多个文件配置
    main: './src/index.js'
    // sub: './src/index.js'
  },
  output: {
    filename: '[name].js', // name 对应 entry key值 main
    path: path.resolve(__dirname, '../', 'dist')
    // 静态资源放到cdn上面
    // publicPath: 'http://cdn.com.cn',
    // publicPath: '/'
  },
  module: {
    rules: [
      // {
      //   test: /\.(png|jpg|gif)$/,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       name: '[name]_[hash].[ext]',
      //       // 生成到dist下面的images文件夹里
      //       outputPath: 'images/'
      //     }
      //   }
      // },
      {
        // 测试 es6语法，这只是做了webpack 和 babel的打通，具体的执行需要.babelrc
        test: /\.js$/,
        exclude: /node_modules/, //忽略第三方模块的es6语法
        loader: 'babel-loader',
        options: {
          // 在 .babelrc文件中
          // 只是业务代码就用presents, 但是会污染全局环境
          // "presets": [
          //   [
          //     "@babel/preset-env",
          //     {
          //       "targets": {
          //         "chrome": "67" // 设定一些目标浏览器，如果浏览支持es6就不需要babel转换
          //       },
          //       "useBuiltIns": "usage" // 用到什么加载什么，不是全部加载
          //     }
          //   ]
          // ]
          // 如果开发包文件，就用plugins
          // "plugins": [
          //   [
          //     "@babel/plugin-transform-runtime",
          //     {
          //       "corejs": 2, // 记住必须配置，同时需要安装包corejs2
          //       "helpers": true,
          //       "regenerator": true,
          //       "useESModules": false
          //     }
          //   ]
          // ]
        }
      },
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
    contentBase: './dist', // 在哪个目录下启动这个服务器
    open: true, // 自动回打开一个浏览器，并访问地址8080
    port: '8000',
    // proxy: {
    //   '/api': 'http://localhost:3000'
    // }
    hot: true, // 开启 HMR
    hotOnly: true // 既是HMR不生效，也不更新浏览器
  },
  // 在 处理code splitting,处理
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000, // 对要打包的源代码进行一次分割的界限
      maxSize: 0, // 对分离出来的代码进行二次分割的界限
      minChunks: 1, // 当一个模块被引用了多少次后才进行代码分割
      maxAsyncRequests: 6, //对代码最多加载6个请求，超过的就不做代码分割
      maxInitialRequests: 4, // 入口文件引入的库做代码分割最多是4个,多的就不分割了
      automaticNameDelimiter: '~',
      automaticNameMaxLength: 30,
      name: true,
      // 缓存组，将打包的文件件先缓存放到这里，然后最后根据规则在处理
      cacheGroups: {
        // 只有打包同步代码走这里
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10, // 这个优先级高，所以首先打包成vendor.js文件
          filename: 'vendors.js'
        },
        default: {
          // 对应 entry 入口
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true, // 对于嵌入式的包文件已经引入的就复用，不会再重复打包
          filename: 'common.js'
        }
      }
    }
  }
};
