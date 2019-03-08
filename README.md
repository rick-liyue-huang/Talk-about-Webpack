
## Talk about Webpack

webpack is one static module bundler for modern JavaScript applications.

`npm i webpack webpack-cli --save-dev` install webpack in local environment

run `npx webpack XXX.js` to run webpack in local environment

after create 'webpack.config.js'
when run `npx webpack`, the project will defaultly get 'webpack.config.js', or run `npx webpack --config webpack.config.js`.

also input `"bundle": "npx webpack --config webpack.config.js"` in  "script" tag in 'package.json' file.
so we can run `npm run bundle` directly.

additionaly, create src directory.

when complete bundle,

'Hash: 527fd0e63f63915d9169
Version: webpack 4.29.6
Time: 80ms
Built at: 03/08/2019 10:11:18 AM
    Asset      Size  Chunks             Chunk Names
bundle.js  1.05 KiB       0  [emitted]  main
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

对于loader，它就是一个转换器，将A文件进行编译形成B文件，这里操作的是文件，比如将A.scss或A.less转变为B.css，单纯的文件转换过程；

对于plugin，它就是一个扩展器，它丰富了wepack本身，针对是loader结束后，webpack打包的整个过程，它并不直接操作文件，而是基于事件机制工作，会监听webpack打包过程中的某些节点

source-map:
is one mapping tool, can match source index.js to dist main.js

remember that:

mode: 'development' - devtool: 'cheap-module-eval-source-map'

mode: 'production' - devtool: 'cheap-module-source-map'

















