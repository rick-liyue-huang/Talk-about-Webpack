// 配置webpack 打包
const path = require('path');

module.exports = {
  mode: 'development', // production
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
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
        use: ['style-loader', 'css-loader']
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
  }
};
