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
        id: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        className: "jsx-3346017477"
      }, boxe, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3346017477",
        css: "#main.jsx-3346017477:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}#main.jsx-3346017477:active{-webkit-transform:scale(0.9);-ms-transform:scale(0.9);transform:scale(0.9);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL09yZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCYSxBQUdxQyxBQUdBLDJFQUZ4QixBQUdBIiwiZmlsZSI6InBhZ2VzL09yZGVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2FiaGluYXYvTEVBUk5JTkdfRklMRVMvZm9vZF9vcmRlcmluZ19zeXN0ZW0vZnJvbnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgT3JkZXJfaXRlbSBmcm9tICcuLi9jb21wb25lbnRzL29yZGVyX2l0ZW0vT3JkZXJfaXRlbSdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscz10cnVlO1xuaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jbGFzcyBPcmRlciBleHRlbmRzIENvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuc3RhdGU9e2RhdGE6W119XG4gICAgICAgIHRoaXMuc2V0PXRoaXMuc2V0LmJpbmQodGhpcylcbiAgICAgICAgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDIvY29va2llJykudGhlbihyZXNwb25zZT0+e1xuICAgICAgICAgICAgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMwMDIvY2FydC9nZXRfcGxhY2VkX29yZGVyLyR7cmVzcG9uc2UuZGF0YX1gKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2U9PntcbiAgICAgICAgICAgICAgICB0aGlzLnNldChyZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG4gICAgc2V0KGRhdGEpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhOmRhdGF9KVxuICAgIH1cblxuICAgcmVuZGVyKCl7XG4gICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5kYXRhKVxuICAgICAgIGNvbnN0IGJveGU9dGhpcy5zdGF0ZS5kYXRhLm1hcChpdGVtPT57XG4gICAgICAgICAgIHJldHVybig8T3JkZXJfaXRlbSBuYW1lPXtpdGVtLm9yZGVycy5uYW1lfSBwcmljZT17aXRlbS5vcmRlcnMucHJpY2V9IHVybD17aXRlbS5vcmRlcnMudXJsfSBjYXRlZ29yeT17aXRlbS5vcmRlcnMuY2F0ZWdvcnl9Lz4pXG4gICAgICAgfSlcbiAgICAgICBjb25zb2xlLmxvZyhib3hlKVxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBpZD0nJz57Ym94ZX1cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAjbWFpbjpob3ZlcntcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMS4xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNtYWluOmFjdGl2ZXtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMC45KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT3JkZXI7Il19 */\n/*@ sourceURL=pages/Order.js */"
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
//# sourceMappingURL=8.0cbad0a9a868bb2cf4bc.hot-update.js.map