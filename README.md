
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

"mode: 'production'" defaultly, or "mode: 'development'"













