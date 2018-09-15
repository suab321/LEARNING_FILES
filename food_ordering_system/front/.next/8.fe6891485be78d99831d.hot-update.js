webpackHotUpdate(8,{

/***/ "./pages/Order.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_order_item_Order_item__ = __webpack_require__("./components/order_item/Order_item.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link__ = __webpack_require__("./node_modules/next/link.js");
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
        className: "jsx-2734597671"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        id: "main2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        className: "jsx-2734597671"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        id: "bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        className: "jsx-2734597671"
      }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("p", {
        id: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        className: "jsx-2734597671"
      }, "ORDERED ITEMS")), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
        id: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        className: "jsx-2734597671"
      }, boxe)), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2734597671",
        css: "#bar.jsx-2734597671{background-color:rgba(230,0,0,0.1);padding-top:1px;text-align:center;height:150px;width:100%;position:fixed;display:inline-block;}#text.jsx-2734597671{padding-top:10px;font-size:3em;font-style:bold;color:rgba(0,230,0,0.9);}#main.jsx-2734597671{margin-right:5em;padding-top:15em;padding-left:10em;}#remove.jsx-2734597671{font-size:1em;color:black;}#main2.jsx-2734597671{position:absolute;}button.jsx-2734597671{position:fixed;margin-left:70em;margin-top:4em;font-size:1.5em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL09yZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Dd0IsQUFHbUQsQUFTbEIsQUFNQSxBQU1ILEFBR00sQUFHTCxjQUpuQixDQUtxQixFQWxCRixBQU1FLENBUUksUUFEeEIsS0Fab0IsQ0FrQkYsRUFaRyxDQWhCRCxZQVlyQixBQWlCb0IsSUE1QkcsQ0FnQnRCLFdBYUEsTUE1QmlCLEVBVWpCLFdBVGUsV0FDRyxlQUNNLHFCQUNwQiIsImZpbGUiOiJwYWdlcy9PcmRlci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9hYmhpbmF2L0xFQVJOSU5HX0ZJTEVTL2Zvb2Rfb3JkZXJpbmdfc3lzdGVtL2Zyb250Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE9yZGVyX2l0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9vcmRlcl9pdGVtL09yZGVyX2l0ZW0nXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5heGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHM9dHJ1ZTtcbmltcG9ydCBSZWFjdCx7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY2xhc3MgT3JkZXIgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLnN0YXRlPXtkYXRhOltdfVxuICAgICAgICB0aGlzLnNldD10aGlzLnNldC5iaW5kKHRoaXMpXG4gICAgICAgIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAyL2Nvb2tpZScpLnRoZW4ocmVzcG9uc2U9PntcbiAgICAgICAgICAgIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDozMDAyL2NhcnQvZ2V0X3BsYWNlZF9vcmRlci8ke3Jlc3BvbnNlLmRhdGF9YClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlPT57XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuICAgIHNldChkYXRhKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YTpkYXRhfSlcbiAgICB9XG5cbiAgIHJlbmRlcigpe1xuICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZGF0YSlcbiAgICAgICBjb25zdCBib3hlPXRoaXMuc3RhdGUuZGF0YS5tYXAoaXRlbT0+e1xuICAgICAgICAgICByZXR1cm4oPE9yZGVyX2l0ZW0gZGF0ZT17aXRlbS5kYXRlfW5hbWU9e2l0ZW0ub3JkZXJzLm5hbWV9IHByaWNlPXtpdGVtLm9yZGVycy5wcmljZX0gdXJsPXtpdGVtLm9yZGVycy51cmx9IGNhdGVnb3J5PXtpdGVtLm9yZGVycy5jYXRlZ29yeX0vPilcbiAgICAgICB9KVxuICAgICAgIGNvbnNvbGUubG9nKGJveGUpXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGlkPSdtYWluMic+XG4gICAgICAgIDxkaXYgaWQ9J2Jhcic+XG5cdFx0PHAgaWQ9J3RleHQnPk9SREVSRUQgSVRFTVM8L3A+XG5cdCAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9J21haW4nPntib3hlfTwvZGl2PjwvZGl2PiBcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICNiYXJ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIzMCwwLDAsMC4xKTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMXB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOmZpeGVkO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICN0ZXh0e1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOjEwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzZW07XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogYm9sZDtcbiAgICAgICAgICAgICAgICBjb2xvcjpyZ2JhKDAsMjMwLDAsMC45KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI21haW57XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjVlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDoxNWVtO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDoxMGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAjcmVtb3Zle1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxZW07XG4gICAgICAgICAgICAgICAgY29sb3I6YmxhY2tcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNtYWluMntwb3NpdGlvbjphYnNvbHV0ZTt9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDo3MGVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NGVtO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxLjVlbTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9yZGVyOyJdfQ== */\n/*@ sourceURL=pages/Order.js */"
      }));
    }
  }]);

  return Order;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Order);
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/Order")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=8.fe6891485be78d99831d.hot-update.js.map