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
        id: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        className: "jsx-502559888"
      }, boxe, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "502559888",
        css: "#main.jsx-502559888{border:1px solid black;width:100%;background-color:rgba(230,0,0,0.2);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL09yZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCYSxBQUd1Qyx1QkFDWixXQUN5QixtQ0FDdkMiLCJmaWxlIjoicGFnZXMvT3JkZXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYWJoaW5hdi9MRUFSTklOR19GSUxFUy9mb29kX29yZGVyaW5nX3N5c3RlbS9mcm9udCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBPcmRlcl9pdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvb3JkZXJfaXRlbS9PcmRlcl9pdGVtJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzPXRydWU7XG5pbXBvcnQgUmVhY3Qse0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNsYXNzIE9yZGVyIGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5zdGF0ZT17ZGF0YTpbXX1cbiAgICAgICAgdGhpcy5zZXQ9dGhpcy5zZXQuYmluZCh0aGlzKVxuICAgICAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMi9jb29raWUnKS50aGVuKHJlc3BvbnNlPT57XG4gICAgICAgICAgICBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMi9jYXJ0L2dldF9wbGFjZWRfb3JkZXIvJHtyZXNwb25zZS5kYXRhfWApXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZT0+e1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbiAgICBzZXQoZGF0YSl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6ZGF0YX0pXG4gICAgfVxuXG4gICByZW5kZXIoKXtcbiAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmRhdGEpXG4gICAgICAgY29uc3QgYm94ZT10aGlzLnN0YXRlLmRhdGEubWFwKGl0ZW09PntcbiAgICAgICAgICAgcmV0dXJuKDxPcmRlcl9pdGVtIGRhdGU9e2l0ZW0uZGF0ZX1uYW1lPXtpdGVtLm9yZGVycy5uYW1lfSBwcmljZT17aXRlbS5vcmRlcnMucHJpY2V9IHVybD17aXRlbS5vcmRlcnMudXJsfSBjYXRlZ29yeT17aXRlbS5vcmRlcnMuY2F0ZWdvcnl9Lz4pXG4gICAgICAgfSlcbiAgICAgICBjb25zb2xlLmxvZyhib3hlKVxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBpZD0nbWFpbic+e2JveGV9XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgI21haW57XG4gICAgICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMwLDAsMCwwLjIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9yZGVyOyJdfQ== */\n/*@ sourceURL=pages/Order.js */"
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
//# sourceMappingURL=8.3a501fb8c3af4fe9170f.hot-update.js.map