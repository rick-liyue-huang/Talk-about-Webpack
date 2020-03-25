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

import './index.scss';
var root = document.getElementById('root');
root.innerHTML = '<div class="iconfont iconqianbi"></div>';
