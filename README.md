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

代码分割和 webpack 无关，如有需要就加载 optimization
webpack code splitting
是将在打包文件中将 业务代码 和 引入的包文件 分开
并且业务逻辑是经常更改的，因此如果频繁的加载逻辑代码，需要将大量的引入包文件分开

code splitting: 通过对代码拆分，使得加载更快和取消没有必要的代码加载
当有公用的类库，会自动的和逻辑代码分开
webpack 在处理同步的引入库代码的时候，单独存放到 vender 文件
webpack 在处理异步的引入库代码的时候，单独的存放到 0.js 文件

```
function getComponent() {
  // magic comments
  return import(/*webpackChunkName:"lodash"*/ 'lodash').then(
    ({ default: _ }) => {
      var element = document.createElement('div');
      element.innerHTML = _.join(['rick', 'huang'], '-');
      return element;
    }
  );
}

getComponent().then(element => {
  document.body.appendChild(element);
});
```

对打包代码进行分析
`webpack --profile --json > stats.json`
在 splitcoding 有分析软件分析打包

通过查看 coverage 鼓励异步加载, 并且使用 webpackPrefetch: true
/_ webpackPreload: true _/

```
function handleClick() {
  const ele = document.createElement('div');
  ele.innerHTML = 'rick';
  document.body.appendChild(ele);
}
export default handleClick;

document.addEventListener('click', () => {
  import(/*webpackPrefetch: true*/'./click').then(({ default: func }) => {
    func();
  });
});

```

总之鼓励异步加载，并且加入 webpackPrefetch: true，使得代码利用率更高，也就是懒加载，懒加载会牺牲一些用户体验，所以用 webpackPrefetch: true 魔法注释， code coverage 代码覆盖率

css chunk
单独得到 css 打包文件用 `mini-css-extract-plugin`
如果对打包 css 文件进行压缩用 `optimize-css-assets-webpack-plugin`

浏览器缓存的问题：

因为打包好的文件名字没有发生变化，浏览器就默认内容没有更新，因此浏览器不会强制更新，因此需要做一些处理
需要对输出的文件加入[hash]来生成不同的文件
针对老版本

```
runtimeChunk: {
  name: 'runtime'
}
```

shimming:
处理代码兼容
打包兼容问题
当一些模块需要引用其他的模块例如 jquery
需要有垫片 shimming

```
new webpack.ProvidePlugin({
  $: 'jquery' // 如果一个模块中使用了$,就帮助引入jquery模块
})
```

为了将模块的 this 指向浏览器 window 需要

```
{
  loader: 'imports-loader?this=>window'
}
```

也可以通过环境变量来区分重写调整 webpack.config 文件的相互引用

如何将打包好的文件给别人使用, 在 package.json 里面加入
"main": "./dist/library.js"

在 注册 npmjs.org
npm adduser
npm publish

`--profile --json > stats.json`

PWA

处理 pwa,且 只有 线上代码
`workbox-webpack-plugin` google 提供的插件

```
new WorkboxPlugin.GenerateSW({
  clientsClaim: true,
  skipWaiting: true
}) // service work
```

```
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        console.log('Service work registered');
      })
      .catch(e => {
        console.log('service-worker err');
      });
  });
}
```

针对 typescript 文件进行打包
加载 ts-loader, 加入 tsconfig.json, 加载 @types/typescript

devserver 的代理 只在 开发环境下调试

```
devServer: {
  contentBase: './dist', // 在哪个目录下启动这个服务器
  open: true, // 自动回打开一个浏览器，并访问地址8080
  port: '8000',
  index: '', // 也可以代理  '/'
  proxy: {
    '/react/api': {
      target: 'http://www.dell-lee.com', // 代理到服务器
      secure: false, // 针对 https的代理转发
      bypass: function(req, res, proxyOptions) {
        // 如果是 html,就不用管
        if (req.headers.accept.indexOf('html') !== -1) {
          console.log('Skipping proxy for browser request.');
          return false;
        }
      },
      pathRewrite: {
        'header.json': 'demo.json' // 也可以取一些暂时的替代的端口
      },
      changeOrigin: true
    }
  },
  hot: true, // 开启 HMR
  hotOnly: true // 既是HMR不生效，也不更新浏览器
},
```

通过 devserver 配置处理 单页应用
`historyApiFallback: true,`

eslint
`npx eslint --init`
`npx eslint src`

```
test: /\.js$/,
exclude: /node_modules/, //忽略第三方模块的es6语法
use: ['babel-loader', 'eslint-loader'],
```

在生产环境， 在 git 提交代码的时候 使用
`git eslint src`
