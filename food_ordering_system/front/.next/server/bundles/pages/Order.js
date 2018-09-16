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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/order_item/Order_item.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/home/abhinav/LEARNING_FILES/food_ordering_system/front/components/order_item/Order_item.js";



var Order_item = function Order_item(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-1409188970"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "outer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-1409188970"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-1409188970"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: props.url,
    height: "200px",
    width: "200px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-1409188970"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    id: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-1409188970"
  }, props.name), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-1409188970"
  }, props.category), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: "jsx-1409188970"
  }, "$", props.price, "/-"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    className: "jsx-1409188970"
  }, "Ordered On:", props.date))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1409188970",
    css: "#main.jsx-1409188970{display:inline-block;padding-top:5px;margin-left:5px;}#inner.jsx-1409188970{border:1px solid black;padding-top:2px;width:210px;border-radius:10px;text-align:center;cursor:pointer;-webkit-transition=transform:1s;-webkit-transition=transform:1s;transition=transform:1s;}#inner.jsx-1409188970:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}#inner.jsx-1409188970:active{-webkit-transform:scale(0.9);-ms-transform:scale(0.9);transform:scale(0.9);}#name.jsx-1409188970{font:sans-serif;font-size:1.5em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvb3JkZXJfaXRlbS9PcmRlcl9pdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFvQixBQUlxQyxBQUtFLEFBU0YsQUFLekIsQUFFb0IsZ0JBQ0MsS0FyQkQsRUFLQyxTQWlCcEIsS0FyQm1CLEVBS0gsWUFDTyxFQUx2QixpQkFNc0IsS0FPdEIsQUFHQSxhQVRtQixlQUNRLHdGQUMzQiIsImZpbGUiOiJjb21wb25lbnRzL29yZGVyX2l0ZW0vT3JkZXJfaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9hYmhpbmF2L0xFQVJOSU5HX0ZJTEVTL2Zvb2Rfb3JkZXJpbmdfc3lzdGVtL2Zyb250Iiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgT3JkZXJfaXRlbT0ocHJvcHMpPT57XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgaWQ9J21haW4nPlxuICAgICAgICA8ZGl2IGlkPSdvdXRlcic+XG4gICAgICAgIDxkaXYgaWQ9J2lubmVyJz5cbiAgICAgICAgPGltZyBzcmM9e3Byb3BzLnVybH0gaGVpZ2h0PVwiMjAwcHhcIiB3aWR0aD0nMjAwcHgnLz5cbiAgICAgICA8cCBpZD0nbmFtZSc+e3Byb3BzLm5hbWV9PC9wPlxuICAgICAgIDxwPntwcm9wcy5jYXRlZ29yeX08L3A+XG4gICAgICAgIDxwPiR7cHJvcHMucHJpY2V9Ly08L3A+XG4gICAgICAgIDxwPk9yZGVyZWQgT246e3Byb3BzLmRhdGV9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICAgICAgI21haW57XG4gICAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6NXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNpbm5lcntcbiAgICAgICAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAycHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIxMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXRyYW5zZm9ybSAxcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNpbm5lcjpob3ZlcntcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMS4xKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNpbm5lcjphY3RpdmV7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDAuOSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNuYW1le1xuICAgICAgICAgICAgICAgIGZvbnQ6c2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IE9yZGVyX2l0ZW0iXX0= */\n/*@ sourceURL=components/order_item/Order_item.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Order_item);

/***/ }),

/***/ "./pages/Order.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_order_item_Order_item__ = __webpack_require__("./components/order_item/Order_item.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_link__);
var _jsxFileName = "/home/abhinav/LEARNING_FILES/food_ordering_system/front/pages/Order.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



__WEBPACK_IMPORTED_MODULE_2_axios___default.a.defaults.withCredentials = true;



var Order =
/*#__PURE__*/
function (_Component) {
  _inherits(Order, _Component);

  function Order() {
    var _this;

    _classCallCheck(this, Order);

    _this = _possibleConstructorReturn(this, (Order.__proto__ || Object.getPrototypeOf(Order)).call(this));
    _this.state = {
      data: []
    };
    _this.set = _this.set.bind(_assertThisInitialized(_this));
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get('http://localhost:3002/cookie').then(function (response) {
      __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get("http://localhost:3002/cart/get_placed_order/".concat(response.data)).then(function (response) {
        _this.set(response.data);
      });
    });
    return _this;
  }

  _createClass(Order, [{
    key: "set",
    value: function set(data) {
      this.setState({
        data: data
      });
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.state.data);
      var boxe = this.state.data.map(function (item) {
        return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_order_item_Order_item__["a" /* default */], {
          date: item.date,
          name: item.orders.name,
          price: item.orders.price,
          url: item.orders.url,
          category: item.orders.category,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        });
      });
      console.log(boxe);
      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        className: "jsx-2792824239"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        id: "main2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        className: "jsx-2792824239"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        id: "bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        className: "jsx-2792824239"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("p", {
        id: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        className: "jsx-2792824239"
      }, "ORDERED ITEMS")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        id: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        className: "jsx-2792824239"
      }, boxe)), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2792824239",
        css: "#bar.jsx-2792824239{background-color:rgba(123,100,150,0.8);padding-top:1px;text-align:center;height:150px;width:100%;position:fixed;display:inline-block;}#text.jsx-2792824239{padding-top:10px;font-size:3em;font-style:bold;color:rgba(0,230,0,0.9);}#main.jsx-2792824239{margin-right:5em;padding-top:15em;padding-left:10em;}#remove.jsx-2792824239{font-size:1em;color:black;}#main2.jsx-2792824239{position:absolute;}button.jsx-2792824239{position:fixed;margin-left:70em;margin-top:4em;font-size:1.5em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL09yZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Dd0IsQUFHdUQsQUFTdEIsQUFNQSxBQU1ILEFBR00sQUFHTCxjQUpuQixDQUtxQixFQWxCRixBQU1FLENBUUksUUFEeEIsS0Fab0IsQ0FrQkYsRUFaRyxLQWhCRCxRQVlyQixBQWlCb0IsS0FabkIsR0FoQnNCLFFBNkJ0QixRQWxCQSxFQVZpQixhQUNGLFdBQ0csZUFDTSxxQkFDcEIiLCJmaWxlIjoicGFnZXMvT3JkZXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYWJoaW5hdi9MRUFSTklOR19GSUxFUy9mb29kX29yZGVyaW5nX3N5c3RlbS9mcm9udCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBPcmRlcl9pdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvb3JkZXJfaXRlbS9PcmRlcl9pdGVtJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzPXRydWU7XG5pbXBvcnQgUmVhY3Qse0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNsYXNzIE9yZGVyIGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5zdGF0ZT17ZGF0YTpbXX1cbiAgICAgICAgdGhpcy5zZXQ9dGhpcy5zZXQuYmluZCh0aGlzKVxuICAgICAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMi9jb29raWUnKS50aGVuKHJlc3BvbnNlPT57XG4gICAgICAgICAgICBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMi9jYXJ0L2dldF9wbGFjZWRfb3JkZXIvJHtyZXNwb25zZS5kYXRhfWApXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZT0+e1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbiAgICBzZXQoZGF0YSl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6ZGF0YX0pXG4gICAgfVxuXG4gICByZW5kZXIoKXtcbiAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmRhdGEpXG4gICAgICAgY29uc3QgYm94ZT10aGlzLnN0YXRlLmRhdGEubWFwKGl0ZW09PntcbiAgICAgICAgICAgcmV0dXJuKDxPcmRlcl9pdGVtIGRhdGU9e2l0ZW0uZGF0ZX1uYW1lPXtpdGVtLm9yZGVycy5uYW1lfSBwcmljZT17aXRlbS5vcmRlcnMucHJpY2V9IHVybD17aXRlbS5vcmRlcnMudXJsfSBjYXRlZ29yeT17aXRlbS5vcmRlcnMuY2F0ZWdvcnl9Lz4pXG4gICAgICAgfSlcbiAgICAgICBjb25zb2xlLmxvZyhib3hlKVxuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBpZD0nbWFpbjInPlxuICAgICAgICA8ZGl2IGlkPSdiYXInPlxuXHRcdDxwIGlkPSd0ZXh0Jz5PUkRFUkVEIElURU1TPC9wPlxuXHQgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPSdtYWluJz57Ym94ZX08L2Rpdj48L2Rpdj4gXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAjYmFye1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgxMjMsMTAwLDE1MCwwLjgpO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgI3RleHR7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6MTBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBib2xkO1xuICAgICAgICAgICAgICAgIGNvbG9yOnJnYmEoMCwyMzAsMCwwLjkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjbWFpbntcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6NWVtO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOjE1ZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjEwZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICNyZW1vdmV7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjFlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjpibGFja1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI21haW4ye3Bvc2l0aW9uOmFic29sdXRlO31cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYnV0dG9ue1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOmZpeGVkO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjcwZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo0ZW07XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjEuNWVtO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT3JkZXI7Il19 */\n/*@ sourceURL=pages/Order.js */"
      }));
    }
  }]);

  return Order;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Order);

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/Order.js");


/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

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
//# sourceMappingURL=Order.js.map