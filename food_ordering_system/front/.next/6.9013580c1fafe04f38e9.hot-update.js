webpackHotUpdate(6,{

/***/ "./components/cart/Cart.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__box_Box__ = __webpack_require__("./components/box/Box.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
var _jsxFileName = "/home/abhinav/LEARNING_FILES/food_ordering_system/front/components/cart/Cart.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var Cart =
/*#__PURE__*/
function (_Component) {
  _inherits(Cart, _Component);

  function Cart(props) {
    var _this;

    _classCallCheck(this, Cart);

    _this = _possibleConstructorReturn(this, (Cart.__proto__ || Object.getPrototypeOf(Cart)).call(this, props));
    _this.state = {
      data: ['a', 'b']
    };
    _this.set = _this.set.bind(_assertThisInitialized(_this));
    __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get('http://localhost:3002/cookie').then(function (response) {
      __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get("http://localhost:3002/cart/cart_food/".concat(response.data)).then(function (response) {
        _this.set(response.data);
      });
    });
    return _this;
  }

  _createClass(Cart, [{
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
      var box = [];
      var box = this.state.data.map(function (item) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__box_Box__["a" /* default */], {
          name: item.name,
          price: item.price,
          url: item.url,
          category: item.category,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        });
      });
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        className: "jsx-2734597671"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        id: "main2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        className: "jsx-2734597671"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        id: "bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        className: "jsx-2734597671"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        id: "remove",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        className: "jsx-2734597671"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        className: "jsx-2734597671"
      }, "ClICK TO REMOVE ITEMS")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        id: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        className: "jsx-2734597671"
      }, "SUAB FOOD CENTER")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        id: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        className: "jsx-2734597671"
      }, box)), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        id: "main2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        className: "jsx-2734597671"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
        href: "/Order_placed",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        className: "jsx-2734597671"
      }, "Place Order"))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2734597671",
        css: "#bar.jsx-2734597671{background-color:rgba(230,0,0,0.1);padding-top:1px;text-align:center;height:150px;width:100%;position:fixed;display:inline-block;}#text.jsx-2734597671{padding-top:10px;font-size:3em;font-style:bold;color:rgba(0,230,0,0.9);}#main.jsx-2734597671{margin-right:5em;padding-top:15em;padding-left:10em;}#remove.jsx-2734597671{font-size:1em;color:black;}#main2.jsx-2734597671{position:absolute;}button.jsx-2734597671{position:fixed;margin-left:70em;margin-top:4em;font-size:1.5em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2FydC9DYXJ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDd0IsQUFHbUQsQUFTbEIsQUFNQSxBQU1ILEFBR00sQUFHTCxjQUpuQixDQUtxQixFQWxCRixBQU1FLENBUUksUUFEeEIsS0Fab0IsQ0FrQkYsRUFaRyxDQWhCRCxZQVlyQixBQWlCb0IsSUE1QkcsQ0FnQnRCLFdBYUEsTUE1QmlCLEVBVWpCLFdBVGUsV0FDRyxlQUNNLHFCQUNwQiIsImZpbGUiOiJjb21wb25lbnRzL2NhcnQvQ2FydC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9hYmhpbmF2L0xFQVJOSU5HX0ZJTEVTL2Zvb2Rfb3JkZXJpbmdfc3lzdGVtL2Zyb250Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJveCBmcm9tICcuLi9ib3gvQm94J1xuaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5cblxuXG5jbGFzcyBDYXJ0IGV4dGVuZHMgQ29tcG9uZW50e1xuICAgXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZT17ZGF0YTpbJ2EnLCdiJ119XG4gICAgICAgIHRoaXMuc2V0PXRoaXMuc2V0LmJpbmQodGhpcylcbiAgICAgICAgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDIvY29va2llJykudGhlbihyZXNwb25zZT0+e1xuICAgICAgICBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMi9jYXJ0L2NhcnRfZm9vZC8ke3Jlc3BvbnNlLmRhdGF9YClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2U9Pnt0aGlzLnNldChyZXNwb25zZS5kYXRhKX0pXG4gICAgICAgIFxuICAgIH0pXG59XG5zZXQoZGF0YSl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YTpkYXRhfSlcbn1cblxucmVuZGVyKCl7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5kYXRhKVxuICAgIHZhciBib3g9W11cbiAgICAgICBjb25zdCBib3g9dGhpcy5zdGF0ZS5kYXRhLm1hcChpdGVtPT57XG4gICAgICAgICAgICByZXR1cm4oPEJveCBuYW1lPXtpdGVtLm5hbWV9IHByaWNlPXtpdGVtLnByaWNlfSB1cmw9e2l0ZW0udXJsfSBjYXRlZ29yeT17aXRlbS5jYXRlZ29yeX0vPil9KVxuICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGlkPSdtYWluMic+XG4gICAgICAgIDxkaXYgaWQ9J2Jhcic+XG4gICAgICAgIDxkaXYgaWQ9J3JlbW92ZSc+PHA+Q2xJQ0sgVE8gUkVNT1ZFIElURU1TPC9wPjwvZGl2PlxuXHRcdDxwIGlkPSd0ZXh0Jz5TVUFCIEZPT0QgQ0VOVEVSPC9wPlxuXHQgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPSdtYWluJz57Ym94fTwvZGl2PjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD0nbWFpbjInPjxMaW5rIGhyZWY9Jy9PcmRlcl9wbGFjZWQnPjxidXR0b24gPlBsYWNlIE9yZGVyPC9idXR0b24+PC9MaW5rPjwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAjYmFye1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyMzAsMCwwLDAuMSk7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDFweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAjdGV4dHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDoxMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGJvbGQ7XG4gICAgICAgICAgICAgICAgY29sb3I6cmdiYSgwLDIzMCwwLDAuOSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNtYWlue1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDo1ZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6MTVlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MTBlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgI3JlbW92ZXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MWVtO1xuICAgICAgICAgICAgICAgIGNvbG9yOmJsYWNrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjbWFpbjJ7cG9zaXRpb246YWJzb2x1dGU7fVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBidXR0b257XG4gICAgICAgICAgICAgICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6NzBlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjRlbTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MS41ZW07XG4gICAgICAgICAgICB9IFxuICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxufVxuZXhwb3J0IGRlZmF1bHQgQ2FydFxuXG4iXX0= */\n/*@ sourceURL=components/cart/Cart.js */"
      }));
    }
  }]);

  return Cart;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Cart);

/***/ }),

/***/ "./components/cart_box/Box.js":
false

})
//# sourceMappingURL=6.9013580c1fafe04f38e9.hot-update.js.map