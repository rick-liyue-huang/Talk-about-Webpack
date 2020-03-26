// 配置webpack 打包
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const devConfig = require('./webpack.dev.config');
const prodConfig = require('./webpack.prod.config');

const baseConfig = {
  entry: {
    // 打包多个文件配置
    main: './src/index.js'
    // sub: './src/index.js'
  },
  output: {
    // filename: '[name].js', // name 对应 entry key值 main
    path: path.resolve(__dirname, '../', 'dist')
    // 静态资源放到cdn上面
    // publicPath: 'http://cdn.com.cn',
    // publicPath: '/'
    // chunkFilename: '[name].chunk.js' // 异步加载的间接文件 例如 lodash.js
  },
  module: {
    rules: [
      {
        // 测试 es6语法，这只是做了webpack 和 babel的打通，具体的执行需要.babelrc
        test: /\.js$/,
        exclude: /node_modules/, //忽略第三方模块的es6语法
        use: [
          {
            loader: 'babel-loader'
          }
          // {
          //   loader: 'imports-loader?this=>window'
          // }
        ]
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
    new webpack.HotModuleReplacementPlugin(), // 开启HMR
    new webpack.ProvidePlugin({
      $: 'jquery', // 如果一个模块中使用了$,就帮助引入jquery模块
      _: 'lodash'
    })
  ],
  optimization: {
    // 在 处理code splitting,处理
    // 处理 tree shaking
    usedExports: true, // 对所有的导出文件都做tree shaking, 但是通过sideEffects .css除外
    splitChunks: {
      chunks: 'all',
      minSize: 30000, // 对要打包的源代码进行一次分割的界限
      maxSize: 0, // 对分离出来的代码进行二次分割的界限
      minChunks: 1, // 当一个模块被1个以上打包后的模块引用了才进行代码分割
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
    // 针对老版本webpack
    // runtimeChunk: {
    //   name: 'runtime'
    // }
  },
  performance: false // 取消打包警告
};

module.exports = env => {
  if (env && env.production) {
    return merge(baseConfig, prodConfig);
  } else {
    return merge(baseConfig, devConfig);
  }
};
