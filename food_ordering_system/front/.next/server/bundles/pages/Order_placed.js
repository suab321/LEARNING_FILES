module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/Order_placed.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = "/home/abhinav/LEARNING_FILES/food_ordering_system/front/pages/Order_placed.js";




var Order_placed = function Order_placed(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/index",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Click to go Back!"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-977295524"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-977295524"
  }, "Congrats Order Placed"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "https://thetechyhub.com/wp-content/uploads/2016/01/eating-food-gif.gif",
    height: "400px",
    width: "400px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: "jsx-977295524"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "977295524",
    css: "#main.jsx-977295524{font-size:3em;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL09yZGVyX3BsYWNlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZUyxBQUV5QixjQUNLLGtCQUNyQiIsImZpbGUiOiJwYWdlcy9PcmRlcl9wbGFjZWQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYWJoaW5hdi9MRUFSTklOR19GSUxFUy9mb29kX29yZGVyaW5nX3N5c3RlbS9mcm9udCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmNvbnN0IE9yZGVyX3BsYWNlZD0ocHJvcHMpPT57XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICA8TGluayBocmVmPScvaW5kZXgnPjxidXR0b24+Q2xpY2sgdG8gZ28gQmFjayE8L2J1dHRvbj48L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD0nbWFpbic+XG4gICAgICAgICAgICA8aDE+Q29uZ3JhdHMgT3JkZXIgUGxhY2VkPC9oMT5cbiAgICAgICAgPGltZyBzcmM9J2h0dHBzOi8vdGhldGVjaHlodWIuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzAxL2VhdGluZy1mb29kLWdpZi5naWYnXG4gICAgICAgIGhlaWdodD0nNDAwcHgnIHdpZHRoPVwiNDAwcHhcIi8+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgI21haW57XG4gICAgICAgICAgIGZvbnQtc2l6ZTozZW07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgfWB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5leHBvcnQgZGVmYXVsdCBPcmRlcl9wbGFjZWQiXX0= */\n/*@ sourceURL=pages/Order_placed.js */"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Order_placed);

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/Order_placed.js");


/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=Order_placed.js.map