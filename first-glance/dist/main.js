/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./first-glance/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./first-glance/src/index.js":
/*!***********************************!*\
  !*** ./first-glance/src/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n// import Header from './header';\n// import avatar from './avatar.jpg';\n// import txt from './test.txt';\n// import './index.css';\n// import createAvatar from './createAvatar';\n// import style from './index.scss';\n\n// new Header();\n\n// var img = new Image();\n// img.src = avatar;\n// img.classList.add(style.avatar);\n\n// var root = document.getElementById('root');\n// root.append(img);\n\n// createAvatar();\n// console.log(avatar);\n// console.log(txt);\n\n// import './iconfont.scss';\n\n// var root = document.getElementById('root');\n// root.innerHTML = '<div class=\"iconfont iconicon_add\">abc</div>';\n\nconsole.logs('ok');\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJzdC1nbGFuY2Uvc3JjL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZmlyc3QtZ2xhbmNlL3NyYy9pbmRleC5qcz8xMmY0Il0sInNvdXJjZXNDb250ZW50IjpbIlxuLy8gaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcic7XG4vLyBpbXBvcnQgYXZhdGFyIGZyb20gJy4vYXZhdGFyLmpwZyc7XG4vLyBpbXBvcnQgdHh0IGZyb20gJy4vdGVzdC50eHQnO1xuLy8gaW1wb3J0ICcuL2luZGV4LmNzcyc7XG4vLyBpbXBvcnQgY3JlYXRlQXZhdGFyIGZyb20gJy4vY3JlYXRlQXZhdGFyJztcbi8vIGltcG9ydCBzdHlsZSBmcm9tICcuL2luZGV4LnNjc3MnO1xuXG4vLyBuZXcgSGVhZGVyKCk7XG5cbi8vIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbi8vIGltZy5zcmMgPSBhdmF0YXI7XG4vLyBpbWcuY2xhc3NMaXN0LmFkZChzdHlsZS5hdmF0YXIpO1xuXG4vLyB2YXIgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG4vLyByb290LmFwcGVuZChpbWcpO1xuXG4vLyBjcmVhdGVBdmF0YXIoKTtcbi8vIGNvbnNvbGUubG9nKGF2YXRhcik7XG4vLyBjb25zb2xlLmxvZyh0eHQpO1xuXG4vLyBpbXBvcnQgJy4vaWNvbmZvbnQuc2Nzcyc7XG5cbi8vIHZhciByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcbi8vIHJvb3QuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJpY29uZm9udCBpY29uaWNvbl9hZGRcIj5hYmM8L2Rpdj4nO1xuXG5jb25zb2xlLmxvZ3MoJ29rJyk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./first-glance/src/index.js\n");

/***/ })

/******/ });