
import Header from './header';
import avatar from './avatar.jpg';
import txt from './test.txt';
// import './index.css';
import './index.scss';

new Header();
console.log(avatar);
console.log(txt);

var img = new Image();
img.src = avatar;
img.classList.add('avatar');

var root = document.getElementById('root');
root.append(img);










