(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
// 面向过程;

/*
var dom = document.getElementById('root');
var header = document.createElement('div');
header.innerText = 'header';
dom.append(header);

var sidebar = document.createElement('div');
sidebar.innerText = 'sidebar';
dom.append(sidebar);

var content = document.createElement('div');
content.innerText = 'content';
dom.append(content);
*/
// es 6 module
// import Header from './header';
// import Sidebar from './sidebar';
// import Content from './content';
// const Header = require('./header');
// const Sidebar = require('./sidebar');
// const Content = require('./content');
// const avatar = require('./baidu.png');
// import createAvatar from './createAvatar';
// createAvatar();
// console.log(avatar);
// new Header();
// new Sidebar();
// new Content();
// import './index.scss';
// var root = document.getElementById('root');
// root.innerHTML = '<div class="iconfont iconqianbi"></div>';
// console.log('hello world!!');

/*
import './style.css';

var btn = document.createElement('button');
btn.innerHTML = 'add';
document.body.appendChild(btn);

btn.onclick = function() {
  var div = document.createElement('div');
  div.innerHTML = 'item';
  document.body.appendChild(div);
};

import counter from './counter';
import number from './number';

counter();
number();

// 热更新
if (module.hot) {
  module.hot.accept('./number', () => {
    document.body.removeChild(document.getElementById('number'));
    number();
  });
}

*/
// import '@babel/polyfill'; // 处理es6的具体语法, 如果用了useBuiltIns，就不需要
// const arr = [new Promise(() => {}), new Promise(() => {})];
// arr.map(item => {
//   console.log(item);
// });

/*
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return <div>Hello world</div>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));


*/
// import { add, minus } from './math';
// add(1, 7);
// import _ from 'lodash';
// console.log(_.join(['a', 'b', 'c'], '-'));
// function getComponent() {
//   // magic comments
//   return import(/*webpackChunkName:"lodash"*/ 'lodash').then(
//     ({ default: _ }) => {
//       var element = document.createElement('div');
//       element.innerHTML = _.join(['rick', 'huang'], '-');
//       return element;
//     }
//   );
// }
// getComponent().then(element => {
//   document.body.appendChild(element);
// });
// import test from './test';
// console.log(test.name);
// import _ from 'lodash';
// async function getComponent() {
//   const { default: _ } = await import(/*webpackChunkName: "lodash"*/ 'lodash');
//   const ele = document.createElement('div');
//   ele.innerHTML = _.join(['rick', 'huang'], '-');
//   return ele;
//   // return import(/*webpackChunkName: "lodash"*/ 'lodash').then(() => {
//   //   var ele = document.createElement('div');
//   //   ele.innerHTML = _.join(['rick', 'huang'], '-');
//   //   return ele;
//   // });
// }
// document.addEventListener('click', () => {
//   getComponent().then(ele => {
//     document.body.appendChild(ele);
//   });
// });
// document.addEventListener('click', () => {
//   import(/*webpackPrefetch: true*/ './click').then(({ default: func }) => {
//     func();
//   });
// });
// import './style.css';
// import './style1.css';
// console.log('hello');


const dom = jquery__WEBPACK_IMPORTED_MODULE_1___default()('<div>');
dom.html(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.join(['rick', 'huang'], '--- '));
jquery__WEBPACK_IMPORTED_MODULE_1___default()('body').append(dom);

/***/ })

},[[2,1,2]]]);