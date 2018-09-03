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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/Price.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
var _jsxFileName = "/home/abhinav/LEARNING_FILES/crypto_pricing/pages/Price.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Price =
/*#__PURE__*/
function (_Component) {
  _inherits(Price, _Component);

  function Price(props) {
    var _this;

    _classCallCheck(this, Price);

    _this = _possibleConstructorReturn(this, (Price.__proto__ || Object.getPrototypeOf(Price)).call(this, props));
    _this.state = {
      cry: 'bit',
      value: 'usd'
    };
    return _this;
  }

  _createClass(Price, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          textAlign: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select", {
        style: {
          margin: '2em'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/usd.jsx",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "usd",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, "USD")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "eu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, "EURO"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "inr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, "INR"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/usd",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, "ada"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "bit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, "Bitcoin"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "eth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, "Etherum"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "lit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, "Liteocincoin"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
        value: "xrp",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, "Xrp")));
    }
  }]);

  return Price;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Price);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/Price.jsx");


/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=Price.js.map