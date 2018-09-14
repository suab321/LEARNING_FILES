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
    _this.place_order = _this.place_order.bind(_assertThisInitialized(_this));
    _this.componentDidMount = _this.componentDidMount.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Cart, [{
    key: "remove",
    value: function remove(id) {
      console.log(id);
      __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get('http://localhost:3002/cookie').then(function (response) {
        __WEBPACK_IMPORTED_MODULE_4_axios___default.a.delete("http://localhost:3002/cart/remove/".concat(response.data, "/").concat(id));
      });
      this.componentDidMount();
    }
  }, {
    key: "set",
    value: function set(data) {
      this.setState({
        data: data
      });
    }
  }, {
    key: "place_order",
    value: function place_order() {
      var _this2 = this;

      __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get('http://localhost:3002/cookie').then(function (response) {
        _this2.state.data.map(function (item) {
          __WEBPACK_IMPORTED_MODULE_4_axios___default.a.put("http://localhost:3002/cart/order_placed/".concat(response.data), {
            name: item.name,
            price: item.price,
            category: item.category,
            url: item.url
          });
        });
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      console.log('in');
      __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get('http://localhost:3002/cookie').then(function (response) {
        __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get("http://localhost:3002/cart/cart_food/".concat(response.data)).then(function (response) {
          _this3.set(response.data);
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var boxes = this.state.data;
      console.log(boxes);
      var box = boxes.map(function (item) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__cart_box_Box__["a" /* default */], {
          id: item._id,
          remove: _this4.remove,
          name: item.name,
          price: item.price,
          url: item.url,
          category: item.category,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        });
      });
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        className: "jsx-2734597671"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        id: "main2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        className: "jsx-2734597671"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        id: "bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        className: "jsx-2734597671"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        id: "remove",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        className: "jsx-2734597671"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        className: "jsx-2734597671"
      }, "ClICK TO REMOVE ITEMS")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        id: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        className: "jsx-2734597671"
      }, "SUAB FOOD CENTER")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        id: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        className: "jsx-2734597671"
      }, box)), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        id: "main2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        className: "jsx-2734597671"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("button", {
        onClick: this.place_order,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        className: "jsx-2734597671"
      }, "Place Order")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2734597671",
        css: "#bar.jsx-2734597671{background-color:rgba(230,0,0,0.1);padding-top:1px;text-align:center;height:150px;width:100%;position:fixed;display:inline-block;}#text.jsx-2734597671{padding-top:10px;font-size:3em;font-style:bold;color:rgba(0,230,0,0.9);}#main.jsx-2734597671{margin-right:5em;padding-top:15em;padding-left:10em;}#remove.jsx-2734597671{font-size:1em;color:black;}#main2.jsx-2734597671{position:absolute;}button.jsx-2734597671{position:fixed;margin-left:70em;margin-top:4em;font-size:1.5em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2FydC9DYXJ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTREd0IsQUFHbUQsQUFTbEIsQUFNQSxBQU1ILEFBR00sQUFHTCxjQUpuQixDQUtxQixFQWxCRixBQU1FLENBUUksUUFEeEIsS0Fab0IsQ0FrQkYsRUFaRyxDQWhCRCxZQVlyQixBQWlCb0IsSUE1QkcsQ0FnQnRCLFdBYUEsTUE1QmlCLEVBVWpCLFdBVGUsV0FDRyxlQUNNLHFCQUNwQiIsImZpbGUiOiJjb21wb25lbnRzL2NhcnQvQ2FydC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9hYmhpbmF2L0xFQVJOSU5HX0ZJTEVTL2Zvb2Rfb3JkZXJpbmdfc3lzdGVtL2Zyb250Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJveCBmcm9tICcuLi9jYXJ0X2JveC9Cb3gnXG5pbXBvcnQgUmVhY3Qse0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmNsYXNzIENhcnQgZXh0ZW5kcyBDb21wb25lbnR7XG4gICBcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlPXtkYXRhOltdfVxuICAgICAgICB0aGlzLnJlbW92ZT10aGlzLnJlbW92ZS5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuc2V0PXRoaXMuc2V0LmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5wbGFjZV9vcmRlcj10aGlzLnBsYWNlX29yZGVyLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5jb21wb25lbnREaWRNb3VudD10aGlzLmNvbXBvbmVudERpZE1vdW50LmJpbmQodGhpcylcbn1cblxucmVtb3ZlKGlkKXtcbiAgICBjb25zb2xlLmxvZyhpZClcbiAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMi9jb29raWUnKS50aGVuKHJlc3BvbnNlPT57XG4gICAgICAgIGF4aW9zLmRlbGV0ZShgaHR0cDovL2xvY2FsaG9zdDozMDAyL2NhcnQvcmVtb3ZlLyR7cmVzcG9uc2UuZGF0YX0vJHtpZH1gKVxuICAgIH0pXG4gICAgdGhpcy5jb21wb25lbnREaWRNb3VudCgpXG59XG5cbnNldChkYXRhKXtcbiAgICB0aGlzLnNldFN0YXRlKHtkYXRhOmRhdGF9KVxufVxuXG5wbGFjZV9vcmRlcigpe1xuICAgIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAyL2Nvb2tpZScpLnRoZW4ocmVzcG9uc2U9PntcbiAgICAgICAgdGhpcy5zdGF0ZS5kYXRhLm1hcChpdGVtPT57YXhpb3MucHV0KGBodHRwOi8vbG9jYWxob3N0OjMwMDIvY2FydC9vcmRlcl9wbGFjZWQvJHtyZXNwb25zZS5kYXRhfWAsXG4gICAgICAgIHtuYW1lOml0ZW0ubmFtZSxwcmljZTppdGVtLnByaWNlLGNhdGVnb3J5Oml0ZW0uY2F0ZWdvcnksdXJsOml0ZW0udXJsfSl9KVxuICAgIH0pXG59XG5cbmNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgY29uc29sZS5sb2coJ2luJylcbiAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMi9jb29raWUnKS50aGVuKHJlc3BvbnNlPT57XG4gICAgICAgIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDozMDAyL2NhcnQvY2FydF9mb29kLyR7cmVzcG9uc2UuZGF0YX1gKVxuICAgICAgICAudGhlbihyZXNwb25zZT0+e3RoaXMuc2V0KHJlc3BvbnNlLmRhdGEpfSlcbiAgICB9KVxufVxuXG5yZW5kZXIoKXtcbiAgICBjb25zdCBib3hlcz10aGlzLnN0YXRlLmRhdGFcbiAgICBjb25zb2xlLmxvZyhib3hlcylcbiAgICAgICAgY29uc3QgYm94PWJveGVzLm1hcChpdGVtPT57XG4gICAgICAgICAgICByZXR1cm4oPEJveCBpZD17aXRlbS5faWR9IHJlbW92ZT17dGhpcy5yZW1vdmV9IG5hbWU9e2l0ZW0ubmFtZX0gcHJpY2U9e2l0ZW0ucHJpY2V9IHVybD17aXRlbS51cmx9IGNhdGVnb3J5PXtpdGVtLmNhdGVnb3J5fS8+KVxuICAgICAgICB9KVxuXG4gICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgaWQ9J21haW4yJz5cbiAgICAgICAgPGRpdiBpZD0nYmFyJz5cbiAgICAgICAgPGRpdiBpZD0ncmVtb3ZlJz48cD5DbElDSyBUTyBSRU1PVkUgSVRFTVM8L3A+PC9kaXY+XG5cdFx0PHAgaWQ9J3RleHQnPlNVQUIgRk9PRCBDRU5URVI8L3A+XG5cdCAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9J21haW4nPntib3h9PC9kaXY+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPSdtYWluMic+PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnBsYWNlX29yZGVyfT5QbGFjZSBPcmRlcjwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAjYmFye1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyMzAsMCwwLDAuMSk7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDFweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAjdGV4dHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDoxMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGJvbGQ7XG4gICAgICAgICAgICAgICAgY29sb3I6cmdiYSgwLDIzMCwwLDAuOSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNtYWlue1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDo1ZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6MTVlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MTBlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgI3JlbW92ZXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MWVtO1xuICAgICAgICAgICAgICAgIGNvbG9yOmJsYWNrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjbWFpbjJ7cG9zaXRpb246YWJzb2x1dGU7fVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBidXR0b257XG4gICAgICAgICAgICAgICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6NzBlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjRlbTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MS41ZW07XG4gICAgICAgICAgICB9IFxuICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxufVxuZXhwb3J0IGRlZmF1bHQgQ2FydFxuXG4iXX0= */\n/*@ sourceURL=components/cart/Cart.js */"
      }));
    }
  }]);

  return Cart;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Cart);

/***/ })

})
//# sourceMappingURL=6.ad86ca7bfb3641c33771.hot-update.js.map