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

/***/ "./components/box/Box.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/home/abhinav/LEARNING_FILES/food_ordering_system/front/components/box/Box.js";



var Box = function Box(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-1409188970"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "outer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-1409188970"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-1409188970"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: props.url,
    height: "200px",
    width: "200px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-1409188970"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    id: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-1409188970"
  }, props.name), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: "jsx-1409188970"
  }, props.category), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    className: "jsx-1409188970"
  }, props.price))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1409188970",
    css: "#main.jsx-1409188970{display:inline-block;padding-top:5px;margin-left:5px;}#inner.jsx-1409188970{border:1px solid black;padding-top:2px;width:210px;border-radius:10px;text-align:center;cursor:pointer;-webkit-transition=transform:1s;-webkit-transition=transform:1s;transition=transform:1s;}#inner.jsx-1409188970:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}#inner.jsx-1409188970:active{-webkit-transform:scale(0.9);-ms-transform:scale(0.9);transform:scale(0.9);}#name.jsx-1409188970{font:sans-serif;font-size:1.5em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYm94L0JveC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhb0IsQUFJcUMsQUFLRSxBQVNGLEFBS3pCLEFBRW9CLGdCQUNDLEtBckJELEVBS0MsU0FpQnBCLEtBckJtQixFQUtILFlBQ08sRUFMdkIsaUJBTXNCLEtBT3RCLEFBR0EsYUFUbUIsZUFDUSx3RkFDM0IiLCJmaWxlIjoiY29tcG9uZW50cy9ib3gvQm94LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2FiaGluYXYvTEVBUk5JTkdfRklMRVMvZm9vZF9vcmRlcmluZ19zeXN0ZW0vZnJvbnQiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuY29uc3QgQm94PShwcm9wcyk9PntcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgaWQ9J21haW4nPlxuICAgICAgICA8ZGl2IGlkPSdvdXRlcic+XG4gICAgICAgIDxkaXYgaWQ9J2lubmVyJz5cbiAgICAgICAgPGltZyBzcmM9e3Byb3BzLnVybH0gaGVpZ2h0PVwiMjAwcHhcIiB3aWR0aD0nMjAwcHgnLz5cbiAgICAgICA8cCBpZD0nbmFtZSc+e3Byb3BzLm5hbWV9PC9wPlxuICAgICAgIDxwPntwcm9wcy5jYXRlZ29yeX08L3A+XG4gICAgICAgIDxwPntwcm9wcy5wcmljZX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgICAgICAjbWFpbntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDo1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6NXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI2lubmVye1xuICAgICAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDJweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjEwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249dHJhbnNmb3JtIDFzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI2lubmVyOmhvdmVye1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpzY2FsZSgxLjEpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI2lubmVyOmFjdGl2ZXtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMC45KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI25hbWV7XG4gICAgICAgICAgICAgICAgZm9udDpzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgQm94Il19 */\n/*@ sourceURL=components/box/Box.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Box);

/***/ }),

/***/ "./components/boxlist/Boxlist.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__box_Box__ = __webpack_require__("./components/box/Box.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/home/abhinav/LEARNING_FILES/food_ordering_system/front/components/boxlist/Boxlist.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Boxlist =
/*#__PURE__*/
function (_Component) {
  _inherits(Boxlist, _Component);

  function Boxlist() {
    var _this;

    _classCallCheck(this, Boxlist);

    _this = _possibleConstructorReturn(this, (Boxlist.__proto__ || Object.getPrototypeOf(Boxlist)).call(this));
    _this.items = [{
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }, {
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }, {
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }, {
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }, {
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }, {
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }, {
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }, {
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }, {
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }, {
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }, {
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }, {
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }, {
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }, {
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }, {
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }, {
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }, {
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }, {
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }, {
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }, {
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }, {
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }, {
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }, {
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }];
    return _this;
  }

  _createClass(Boxlist, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var boxes = this.items.map(function (item) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__box_Box__["a" /* default */], {
          name: item.name,
          price: _this2.items.Price,
          url: 'sd',
          category: _this2.items.category,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        });
      });
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, boxes);
    }
  }]);

  return Boxlist;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Boxlist);

/***/ }),

/***/ "./components/navbar/Navbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/home/abhinav/LEARNING_FILES/food_ordering_system/front/components/navbar/Navbar.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Navbar =
/*#__PURE__*/
function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar(props) {
    _classCallCheck(this, Navbar);

    return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, props));
  }

  _createClass(Navbar, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        className: "jsx-3333871556"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        className: "jsx-3333871556"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        id: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        className: "jsx-3333871556"
      }, "SUAB FOOD CENTER")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3333871556",
        css: "#bar.jsx-3333871556{background-color:rgba(230,0,0,0.2);padding-top:1px;text-align:center;border:transparent;height:150px;position:fixed width:100%;}#text.jsx-3333871556{padding-top:10px;font-size:3em;font-style:bold;color:rgba(0,230,0,0.9);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2YmFyL05hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZd0IsQUFHbUQsQUFXbEIsaUJBQ0YsY0FDRSxJQVpBLFlBY3JCLElBYnVCLGtCQUNDLEVBWXZCLGlCQVhpQixhQUVGLDBCQUdYIiwiZmlsZSI6ImNvbXBvbmVudHMvbmF2YmFyL05hdmJhci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9hYmhpbmF2L0xFQVJOSU5HX0ZJTEVTL2Zvb2Rfb3JkZXJpbmdfc3lzdGVtL2Zyb250Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuXG4gY2xhc3MgTmF2YmFyIGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD0nYmFyJz5cblx0XHQgICAgPHAgaWQ9J3RleHQnPlNVQUIgRk9PRCBDRU5URVI8L3A+XG5cdCAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAjYmFye1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyMzAsMCwwLDAuMik7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDFweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOmZpeGVkXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgI3RleHR7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6MTBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBib2xkO1xuICAgICAgICAgICAgICAgIGNvbG9yOnJnYmEoMCwyMzAsMCwwLjkpXG4gICAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBOYXZiYXJcbiJdfQ== */\n/*@ sourceURL=components/navbar/Navbar.js */"
      }));
    }
  }]);

  return Navbar;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Navbar);

/***/ }),

/***/ "./components/sidebar/Side.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/home/abhinav/LEARNING_FILES/food_ordering_system/front/components/sidebar/Side.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Side =
/*#__PURE__*/
function (_Component) {
  _inherits(Side, _Component);

  function Side(props) {
    _classCallCheck(this, Side);

    return _possibleConstructorReturn(this, (Side.__proto__ || Object.getPrototypeOf(Side)).call(this, props));
  }

  _createClass(Side, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        className: "jsx-104821291"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        className: "jsx-104821291"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("select", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        className: "jsx-104821291"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        name: "mc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        className: "jsx-104821291"
      }, "Main Course"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        name: "sn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        className: "jsx-104821291"
      }, "Snacks"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        name: "des",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        className: "jsx-104821291"
      }, "Dessert")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        className: "jsx-104821291"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        className: "jsx-104821291"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        className: "jsx-104821291"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        className: "jsx-104821291"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        className: "jsx-104821291"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "checkbox",
        value: "veg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        className: "jsx-104821291"
      }), "Veg", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        className: "jsx-104821291"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "checkbox",
        value: "nonveg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        className: "jsx-104821291"
      }), "Non-Veg", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        className: "jsx-104821291"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        className: "jsx-104821291"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        className: "jsx-104821291"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        className: "jsx-104821291"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        className: "jsx-104821291"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        className: "jsx-104821291"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("select", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        className: "jsx-104821291"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        name: "ind",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: "jsx-104821291"
      }, "Indian"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        name: "chi",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        className: "jsx-104821291"
      }, "Chinese"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "104821291",
        css: "#main.jsx-104821291{background-color:rgba(230,187,98,0.5);width:10em;height:100%;margin-top:1em;padding-top:2px;margin-top:2px;padding-bottom:2px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2lkZWJhci9TaWRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCYSxBQUdzRCxzQ0FDM0IsV0FDQyxZQUNHLGVBQ0MsZ0JBQ0QsZUFDSSxtQkFDdEIiLCJmaWxlIjoiY29tcG9uZW50cy9zaWRlYmFyL1NpZGUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYWJoaW5hdi9MRUFSTklOR19GSUxFUy9mb29kX29yZGVyaW5nX3N5c3RlbS9mcm9udCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFNpZGUgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPSdtYWluJz5cbiAgICAgICAgICAgICAgICA8c2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIG5hbWU9J21jJz5NYWluIENvdXJzZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIG5hbWU9J3NuJz5TbmFja3M8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBuYW1lPSdkZXMnPkRlc3NlcnQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD48YnIvPjxici8+PGJyLz48YnIvPjxici8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyB2YWx1ZT0ndmVnJy8+VmVnPGJyLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIHZhbHVlPSdub252ZWcnLz5Ob24tVmVnPGJyLz48YnIvPjxici8+PGJyLz48YnIvPjxici8+XG4gICAgICAgICAgICAgICAgPHNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBuYW1lPSdpbmQnPkluZGlhbjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIG5hbWU9J2NoaSc+Q2hpbmVzZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICNtYWlue1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyMzAsMTg3LDk4LDAuNSk7XG4gICAgICAgICAgICAgICAgd2lkdGg6MTBlbTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjFlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDoycHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDoycHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206MnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFNpZGU7Il19 */\n/*@ sourceURL=components/sidebar/Side.js */"
      }));
    }
  }]);

  return Side;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Side);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_navbar_Navbar__ = __webpack_require__("./components/navbar/Navbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_boxlist_Boxlist__ = __webpack_require__("./components/boxlist/Boxlist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_sidebar_Side__ = __webpack_require__("./components/sidebar/Side.js");
var _jsxFileName = "/home/abhinav/LEARNING_FILES/food_ordering_system/front/pages/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Home =
/*#__PURE__*/
function (_Component) {
  _inherits(Home, _Component);

  function Home(props) {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        className: "jsx-3604987829"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        className: "jsx-3604987829"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_navbar_Navbar__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "side",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        className: "jsx-3604987829"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_sidebar_Side__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        className: "jsx-3604987829"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_boxlist_Boxlist__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3604987829",
        css: "#main.jsx-3604987829{display:inline-block;padding-left:10em;}#side.jsx-3604987829{position:fixed;}#nav.jsx-3604987829{positon:fixed;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CYSxBQUVxQyxBQUlOLEFBR0QsY0FDakIsQ0FIQSxNQUpxQixrQkFDckIiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYWJoaW5hdi9MRUFSTklOR19GSUxFUy9mb29kX29yZGVyaW5nX3N5c3RlbS9mcm9udCIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdmJhci9OYXZiYXInXG5pbXBvcnQgQm94bGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2JveGxpc3QvQm94bGlzdCdcbmltcG9ydCBTaWRlIGZyb20gJy4uL2NvbXBvbmVudHMvc2lkZWJhci9TaWRlJ1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgPGRpdiBpZD0nbmF2Jz48TmF2YmFyLz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPSdzaWRlJz48U2lkZS8+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPSdtYWluJz5cbiAgICAgICAgICAgPEJveGxpc3QvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2AjbWFpbntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MTBlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNzaWRle1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOmZpeGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI25hdntcbiAgICAgICAgICAgICAgICBwb3NpdG9uOmZpeGVkO1xuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il19 */\n/*@ sourceURL=pages/index.js */"
      }));
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


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
//# sourceMappingURL=index.js.map