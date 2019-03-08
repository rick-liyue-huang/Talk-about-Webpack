
// import Header from './header';
// import avatar from './avatar.jpg';
// import txt from './test.txt';
// import './index.css';
// import createAvatar from './createAvatar';
// import style from './index.scss';

// new Header();

// var img = new Image();
// img.src = avatar;
// img.classList.add(style.avatar);

// var root = document.getElementById('root');
// root.append(img);

// createAvatar();
// console.log(avatar);
// console.log(txt);

// import './iconfont.scss';

// var root = document.getElementById('root');
// root.innerHTML = '<div class="iconfont iconicon_add">abc</div>';

// console.log('ok----++!!');

// import './style.css';

// var btn = document.createElement('button');
// btn.innerHTML = 'Add';
// document.body.appendChild(btn);

// btn.onclick = function() {
// 	var div = document.createElement('div');
// 	div.innerHTML = 'item';
// 	document.body.appendChild(div);
// }

// import counter from './counter';
// import number from './number';

// counter();
// number();

// if(module.hot) {
// 	module.hot.accept('./number', () => {
// 		document.body.removeChild(document.getElementById('number'));
// 		number()
// 	})
// }

// import "@babel/polyfill";

// const arr = [
// 	new Promise(() => {}),
// 	new Promise(() => {})
// ];

// arr.map((item) => {
// 	console.log(item);
// });

import "@babel/polyfill";

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
	render() {
		return(
			<div>hello</div>
		)
	}
} 

ReactDOM.render(<App />, document.getElementById('root'));































