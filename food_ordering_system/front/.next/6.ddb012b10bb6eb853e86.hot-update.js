webpackHotUpdate(6,{

/***/ "./components/cart/Cart.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart_box_Box__ = __webpack_require__("./components/cart_box/Box.js");
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
      data: []
    };
    _this.remove = _this.remove.bind(_assertThisInitialized(_this));
    _this.set = _this.set.bind(_assertThisInitialized(_this));
    _this.componentDidMount = _this.componentDidMount.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Cart, [{
    key: "remove",
    value: function remove(name) {
      console.log(name);
      __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get('http://localhost:3002/cookie').then(function (response) {
        __WEBPACK_IMPORTED_MODULE_4_axios___default.a.delete("http://localhost:3002/cart/remove/".concat(response.data, "/").concat(name));
      });
      componentDidMount();
    }
  }, {
    key: "set",
    value: function set(data) {
      this.setState({
        data: data
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      console.log('in');
      __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get('http://localhost:3002/cookie').then(function (response) {
        __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get("http://localhost:3002/cart/cart_food/".concat(response.data)).then(function (response) {
          _this2.set(response.data);
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var boxes = this.state.data;
      console.log(boxes);
      var box = boxes.map(function (item) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__cart_box_Box__["a" /* default */], {
          id: item._id,
          remove: _this3.remove,
          name: item.name,
          price: item.price,
          url: item.url,
          category: item.category,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        });
      });
      console.log(box);
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        className: "jsx-2734597671"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        id: "main2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        className: "jsx-2734597671"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        id: "bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        className: "jsx-2734597671"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        id: "remove",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        className: "jsx-2734597671"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        className: "jsx-2734597671"
      }, "ClICK TO REMOVE ITEMS")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        id: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        className: "jsx-2734597671"
      }, "SUAB FOOD CENTER")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        id: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        className: "jsx-2734597671"
      }, box)), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        id: "main2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        className: "jsx-2734597671"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
        href: "/Order_placed",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        className: "jsx-2734597671"
      }, "Place Order"))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2734597671",
        css: "#bar.jsx-2734597671{background-color:rgba(230,0,0,0.1);padding-top:1px;text-align:center;height:150px;width:100%;position:fixed;display:inline-block;}#text.jsx-2734597671{padding-top:10px;font-size:3em;font-style:bold;color:rgba(0,230,0,0.9);}#main.jsx-2734597671{margin-right:5em;padding-top:15em;padding-left:10em;}#remove.jsx-2734597671{font-size:1em;color:black;}#main2.jsx-2734597671{position:absolute;}button.jsx-2734597671{position:fixed;margin-left:70em;margin-top:4em;font-size:1.5em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2FydC9DYXJ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Ed0IsQUFHbUQsQUFTbEIsQUFNQSxBQU1ILEFBR00sQUFHTCxjQUpuQixDQUtxQixFQWxCRixBQU1FLENBUUksUUFEeEIsS0Fab0IsQ0FrQkYsRUFaRyxDQWhCRCxZQVlyQixBQWlCb0IsSUE1QkcsQ0FnQnRCLFdBYUEsTUE1QmlCLEVBVWpCLFdBVGUsV0FDRyxlQUNNLHFCQUNwQiIsImZpbGUiOiJjb21wb25lbnRzL2NhcnQvQ2FydC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9hYmhpbmF2L0xFQVJOSU5HX0ZJTEVTL2Zvb2Rfb3JkZXJpbmdfc3lzdGVtL2Zyb250Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJveCBmcm9tICcuLi9jYXJ0X2JveC9Cb3gnXG5pbXBvcnQgUmVhY3Qse0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmNsYXNzIENhcnQgZXh0ZW5kcyBDb21wb25lbnR7XG4gICBcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlPXtkYXRhOltdfVxuICAgICAgICB0aGlzLnJlbW92ZT10aGlzLnJlbW92ZS5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuc2V0PXRoaXMuc2V0LmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5jb21wb25lbnREaWRNb3VudD10aGlzLmNvbXBvbmVudERpZE1vdW50LmJpbmQodGhpcylcbn1cblxucmVtb3ZlKG5hbWUpe1xuICAgIGNvbnNvbGUubG9nKG5hbWUpXG4gICAgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDIvY29va2llJykudGhlbihyZXNwb25zZT0+e1xuICAgICAgICBheGlvcy5kZWxldGUoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMi9jYXJ0L3JlbW92ZS8ke3Jlc3BvbnNlLmRhdGF9LyR7bmFtZX1gKVxuICAgIH0pXG4gICAgY29tcG9uZW50RGlkTW91bnQoKVxufVxuXG5zZXQoZGF0YSl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YTpkYXRhfSlcbn1cblxuY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICBjb25zb2xlLmxvZygnaW4nKVxuICAgIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAyL2Nvb2tpZScpLnRoZW4ocmVzcG9uc2U9PntcbiAgICAgICAgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMwMDIvY2FydC9jYXJ0X2Zvb2QvJHtyZXNwb25zZS5kYXRhfWApXG4gICAgICAgIC50aGVuKHJlc3BvbnNlPT57dGhpcy5zZXQocmVzcG9uc2UuZGF0YSl9KVxuICAgIH0pXG59XG5cbnJlbmRlcigpe1xuICAgIGNvbnN0IGJveGVzPXRoaXMuc3RhdGUuZGF0YVxuICAgIGNvbnNvbGUubG9nKGJveGVzKVxuICAgICAgICBjb25zdCBib3g9Ym94ZXMubWFwKGl0ZW09PntcbiAgICAgICAgICAgIHJldHVybig8Qm94IGlkPXtpdGVtLl9pZH0gcmVtb3ZlPXt0aGlzLnJlbW92ZX0gbmFtZT17aXRlbS5uYW1lfSBwcmljZT17aXRlbS5wcmljZX0gdXJsPXtpdGVtLnVybH0gY2F0ZWdvcnk9e2l0ZW0uY2F0ZWdvcnl9Lz4pXG4gICAgICAgIH0pXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhib3gpXG4gICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgaWQ9J21haW4yJz5cbiAgICAgICAgPGRpdiBpZD0nYmFyJz5cbiAgICAgICAgPGRpdiBpZD0ncmVtb3ZlJz48cD5DbElDSyBUTyBSRU1PVkUgSVRFTVM8L3A+PC9kaXY+XG5cdFx0PHAgaWQ9J3RleHQnPlNVQUIgRk9PRCBDRU5URVI8L3A+XG5cdCAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9J21haW4nPntib3h9PC9kaXY+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPSdtYWluMic+PExpbmsgaHJlZj0nL09yZGVyX3BsYWNlZCc+PGJ1dHRvbiA+UGxhY2UgT3JkZXI8L2J1dHRvbj48L0xpbms+PC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICNiYXJ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIzMCwwLDAsMC4xKTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMXB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOmZpeGVkO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICN0ZXh0e1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOjEwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzZW07XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogYm9sZDtcbiAgICAgICAgICAgICAgICBjb2xvcjpyZ2JhKDAsMjMwLDAsMC45KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI21haW57XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjVlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDoxNWVtO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDoxMGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAjcmVtb3Zle1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxZW07XG4gICAgICAgICAgICAgICAgY29sb3I6YmxhY2tcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNtYWluMntwb3NpdGlvbjphYnNvbHV0ZTt9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDo3MGVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NGVtO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxLjVlbTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG59XG5leHBvcnQgZGVmYXVsdCBDYXJ0XG5cbiJdfQ== */\n/*@ sourceURL=components/cart/Cart.js */"
      }));
    }
  }]);

  return Cart;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Cart);

/***/ })

})
//# sourceMappingURL=6.ddb012b10bb6eb853e86.hot-update.js.map