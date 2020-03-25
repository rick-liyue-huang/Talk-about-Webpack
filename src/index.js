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

import '@babel/polyfill'; // 处理es6的具体语法

// const arr = [new Promise(() => {}), new Promise(() => {})];
// arr.map(item => {
//   console.log(item);
// });

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return <div>Hello world</div>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
