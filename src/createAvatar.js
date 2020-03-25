import avatar from './baidu.png';
// 开启css文件模块化
import style from './index.scss'; // scss文件为影响其他文件的样式

function createAvatar() {
  var img = new Image();
  img.src = avatar;
  img.classList.add(style.avatar);

  const root = document.getElementById('root');
  root.append(img);
}

export default createAvatar;
