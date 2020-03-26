// 打包库文件配置
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../', 'dist'),
    filename: 'library.js',
    libraryTarget: 'umd', // 该库如何引入
    // 也可以添加 this, window, global 引入库的方式 包括 import, require
    library: 'root' // 支持 script tag src="library.js"
  },
  // 打包的过程中，如果有lodash，就忽略打包
  externals: {
    lodash: {
      commonjs: 'lodash', // 在 common 引用方式 const require
      amd: 'lodash', // zai amd 方式 import from
      root: '_' // indicates global variable,
    }
  }
};
