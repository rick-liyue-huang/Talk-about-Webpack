## Talk about Webpack

webpack is one static module bundler for modern JavaScript applications.

`npm i webpack webpack-cli --save-dev` install webpack in local environment

run `npx webpack XXX.js` to run webpack in local environment

after create 'webpack.config.js'
when run `npx webpack`, the project will defaultly get 'webpack.config.js', or run `npx webpack --config webpack.config.js`.

also input `"bundle": "npx webpack --config webpack.config.js"` in "script" tag in 'package.json' file.
so we can run `npm run bundle` directly.

additionaly, create src directory.

when complete bundle,

'Hash: 527fd0e63f63915d9169
Version: webpack 4.29.6
Time: 80ms
Built at: 03/08/2019 10:11:18 AM
Asset Size Chunks Chunk Names
bundle.js 1.05 KiB 0 [emitted] main
'

"mode: 'production'" defaultly, or "mode: 'development'".

### Modules

used to deal with different files by loaders

```module: {
	rules: [{
		test: /\.(jpg|png)$/,
		loader: 'file-loader',
		options: {
			name: '[name]_[hash].[ext]',
			outputPath: 'images/'
		}
	}]
}
```

use 'url-loader' to replace 'file-loader' to deal with picture.

'css-loader' deal with different .css files, and combine them.

'style-loader' used to mount combined .css file on html/js.

run `npm install sass-loader node-sass --save-dev` to deal with .scss file

run `npm i --save-dev postcss-loader autoprefixer` to deal with the 'webkit' and create 'postcss.config.js' file and add 'autoprefixer'

deal with fonts file by 'file-loader'

对于 loader，它就是一个转换器，将 A 文件进行编译形成 B 文件，这里操作的是文件，比如将 A.scss 或 A.less 转变为 B.css，单纯的文件转换过程；

对于 plugin，它就是一个扩展器，它丰富了 wepack 本身，针对是 loader 结束后，webpack 打包的整个过程，它并不直接操作文件，而是基于事件机制工作，会监听 webpack 打包过程中的某些节点

source-map:
is one mapping tool, can match source index.js to dist main.js

remember that:

mode: 'development' - devtool: 'cheap-module-eval-source-map'

mode: 'production' - devtool: 'cheap-module-source-map'

let the webpack watch the source code changes.
method 1: "watch": "npx webpack --config webpack.config.js --watch"

method 2:
run `"start": "webpack-dev-server"` in 'package.json',
and add
`devServer: { contentBase: './dist', open: true }` in 'webpack.config.js'

method 3:
run `"server": "node ./first-glance/src/server.js"` in 'package.json',

and create 'server.js' file.

hot module replacement:

add `new webpack.HotModuleReplacementPlugin()` and add `hot: true, hotOnly: true` in devSever

HMR also can deal with js, but need add some codes.

```
if(module.hot) {
	module.hot.accept('xxx.js', () => {

		})
}
```

'babel-loader' is the bridge between babel and webpack. and '@babel/preset-env' deal with transfering from es6 to es5.

'tree shaking' only support ES module, and only support mode of 'development'

decompse to 'webpack.dev.config.js', 'webpack.prod.config.js', 'webpack.common.config.js'

code splitting

for asynthic code

'babel-plugin-dynamic-import-webpack' in .babelrc file

splitchunks talk about

lazy load -> import

打包分析： preloading prefetching

'"prod-analyze": "webpack --profile --json > stats.json"' in package.json

and get 'stats.json' use
http://webpack.github.com/analyse to check.

or use https://alexkuz.github.io/webpack-chart/ to upload stats.json

npm install --save-dev webpack-bundle-analyzer to use as well

command+shift+p to get coverage
看代码使用率, so use lazy loading
webpack hope to write async code

import(/_ webpackPrefetch: true _/ 'LoginModal');

import(/_ webpackPreload: true _/ 'ChartingLibrary');

run `npm install --save-dev mini-css-extract-plugin` to seperate css file use in production environment
so put css and scss module in different file.

'OptimizeCSSAssetsPlugin' for minimize css

[contenthash] deal with browser catching

<<<<<<< HEAD
webpack restart
=======
deal with shimming
new webpack.providePlugin

imports-loader used to let 'this' point to window

change env

webpack 究竟是什么
可以开始认为 js 的翻译器
webpack is a module bundler 模块打包工具
进一步明白 webpack 是模块打包工具
最早的时候，webpack 是 js 的打包工具

应用特定的配置文件打包
`npx webpack --config webpack.config.js`
加入 `"bundle": "webpack --config webpack.config.js"`

`mode: "production"` 得到压缩的打包文件

file-loader 可以处理更多的文件类型

loader 就是打包方案，webpack 求助 loader 来处理不同的文件打包方法
只要看到引入的文件末尾不是.js 就需要 loader

plugin 可以在 webpack 在运行到一定时候可以做一些事情

sourcemap: 可以处理源文件的报错
sourcemap 是映射关系 的处理，

最佳实践：
在开发环境：
`devtool: 'cheap-module-eval-source-map',`
在线上环境:
`devtool: 'cheap-module-source-map'`

三种方法直接自动监视源代码变化

1. `webpack --config webpack.config.js --watch`,
2. webpack-dev-server 但是 dist 里面就没有内容了
3. 自己创建一个 server

HMR: Hot module replacement
改变样式，页面布局，浏览器不会重新刷新，不会更改 js 之前的内容
当引入不同的 js 文件，需要对引入的文件进行 HMR 代码处理
css 不需要写这种代码，是因为 css-loader 已经内置

```
if (module.hot) {
  module.hot.accept('./number', () => {
    document.body.removeChild(document.getElementById('number'));
    number();
  });
}
```

<!-- import '@babel/polyfill';  -->是在window上面引入全局变量

tree shaking : 把一个模块里面没用的东西都摇晃掉
只支持 es module,因为底层是静态模块引入
加入`"sideEffects": "false",` in package.json，这样引入的文件就不会去掉， 对所有的模块都进行 tree shaking
如果碰到 css 文件也不使用 tree shaking

production 模式下 代码一般是压缩的
并且 source-map 也是不同的
