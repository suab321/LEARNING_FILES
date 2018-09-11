webpackHotUpdate(4,{

/***/ "./components/user/User.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_Order__ = __webpack_require__("./components/order/Order.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_Cart__ = __webpack_require__("./components/cart/Cart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__placed_Placed__ = __webpack_require__("./components/placed/Placed.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_link__);
var _jsxFileName = "/home/abhinav/LEARNING_FILES/food_ordering_system/front/components/user/User.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var User =
/*#__PURE__*/
function (_Component) {
  _inherits(User, _Component);

  function User(props) {
    var _this;

    _classCallCheck(this, User);

    _this = _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).call(this, props));
    _this.state = {
      popup: 'no'
    };
    _this.change = _this.change.bind(_assertThisInitialized(_this));
    _this.close = _this.close.bind(_assertThisInitialized(_this));
    _this.order = _this.order.bind(_assertThisInitialized(_this));
    _this.cart = _this.cart.bind(_assertThisInitialized(_this));
    _this.placed = _this.placed.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(User, [{
    key: "change",
    value: function change() {
      console.log('yes');
      this.setState({
        popup: 'yes'
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.setState({
        popup: 'no'
      });
    }
  }, {
    key: "order",
    value: function order() {
      this.setState({
        popup: 'order'
      });
    }
  }, {
    key: "cart",
    value: function cart() {
      this.setState({
        popup: 'cart'
      });
    }
  }, {
    key: "placed",
    value: function placed() {
      this.setState({
        popup: 'placed'
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        className: "jsx-1106018185"
      }, this.state.popup === 'yes' ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        className: "jsx-1106018185"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "outer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        className: "jsx-1106018185"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        className: "jsx-1106018185"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_link___default.a, {
        href: "/cart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        className: "jsx-1106018185"
      }, "My Cart")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        className: "jsx-1106018185"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        className: "jsx-1106018185"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        className: "jsx-1106018185"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_link___default.a, {
        href: "/Order",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        className: "jsx-1106018185"
      }, "ViewOrders")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        className: "jsx-1106018185"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        className: "jsx-1106018185"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        className: "jsx-1106018185"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        className: "jsx-1106018185"
      }, "LogOut"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        className: "jsx-1106018185"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        className: "jsx-1106018185"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        className: "jsx-1106018185"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: this.close,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        className: "jsx-1106018185"
      }, "Close"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        className: "jsx-1106018185"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        className: "jsx-1106018185"
      }))), this.props.children) : this.state.popup === 'no' ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        className: "jsx-1106018185"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        className: "jsx-1106018185"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        className: "jsx-1106018185"
      }, this.props.children), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        className: "jsx-1106018185"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        id: "button",
        onClick: this.change,
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png",
        height: "70px",
        width: "70px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        className: "jsx-1106018185"
      })))) : this.state.popup === 'order' ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__order_Order__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }) : this.state.popup === 'cart' ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__cart_Cart__["a" /* default */], {
        change: this.placed,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__placed_Placed__["a" /* default */], {
        change: this.close,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1106018185",
        css: "p.jsx-1106018185{font-family:sans-serif;font-size:1em;}#outer.jsx-1106018185{position:absolute;width:100%;height:100%;top:0;bottom:0;left:0;right:0;background-color:rgb(0,0,0,0.2);}#inner.jsx-1106018185{border:1px solid balck;padding-bottom:4em;padding-top:3em;position:fixed;left:44%;right:44%;top:25%;bottom:15%;height:15%;margin:auto;background:white;text-align:center;background-color:rgba(256,151,78,0.9);}#button.jsx-1106018185{position:fixed;margin-top:5em;margin-left:110em;cursor:pointer;font-size:1em;}#main.jsx-1106018185{position:absolute;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdXNlci9Vc2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdFYSxBQUV1QyxBQUlMLEFBVUssQUFlUCxBQVNHLGVBUkgsR0F6QkwsQUFpQ1MsS0FyQ04sQUFjSyxNQVROLENBeUJNLE9BN0J0QixJQUtTLENBU1UsS0FSUCxDQXdCTyxRQXZCVCxFQVFTLEtBUFIsQUF1Qk8sUUF0QmlCLEVBT3RCLElBZ0JaLEtBZmEsVUFDRixRQUNHLEdBVGYsUUFVZSxXQUNDLFlBQ0ssaUJBQ0Qsa0JBRXJCLHNDQUFDIiwiZmlsZSI6ImNvbXBvbmVudHMvdXNlci9Vc2VyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2FiaGluYXYvTEVBUk5JTkdfRklMRVMvZm9vZF9vcmRlcmluZ19zeXN0ZW0vZnJvbnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgT3JkZXIgZnJvbSAnLi4vb3JkZXIvT3JkZXInXG5pbXBvcnQgQ2FydCBmcm9tICcuLi9jYXJ0L0NhcnQnXG5pbXBvcnQgUGxhY2VkIGZyb20gJy4uL3BsYWNlZC9QbGFjZWQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jbGFzcyBVc2VyIGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGU9e3BvcHVwOidubyd9XG5cbiAgICB0aGlzLmNoYW5nZT10aGlzLmNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5jbG9zZT10aGlzLmNsb3NlLmJpbmQodGhpcylcbiAgICB0aGlzLm9yZGVyPXRoaXMub3JkZXIuYmluZCh0aGlzKVxuICAgIHRoaXMuY2FydD10aGlzLmNhcnQuYmluZCh0aGlzKVxuICAgIHRoaXMucGxhY2VkPXRoaXMucGxhY2VkLmJpbmQodGhpcylcbiAgICB9XG4gICAgY2hhbmdlKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCd5ZXMnKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtwb3B1cDoneWVzJ30pXG4gICAgfVxuICAgIGNsb3NlKCl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3BvcHVwOidubyd9KVxuICAgIH1cbiAgICBvcmRlcigpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtwb3B1cDonb3JkZXInfSlcbiAgICB9XG4gICAgY2FydCgpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtwb3B1cDonY2FydCd9KVxuICAgIH1cbiAgICBwbGFjZWQoKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cG9wdXA6J3BsYWNlZCd9KVxuICAgIH1cbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj57XG4gICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUucG9wdXA9PT0neWVzJylcbiAgICAgICAgICAgICAgICA/PGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPSdvdXRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9J2lubmVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9jYXJ0Jz48YnV0dG9uPk15IENhcnQ8L2J1dHRvbj48L0xpbms+PGJyLz48YnIvPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9PcmRlcic+PGJ1dHRvbj5WaWV3T3JkZXJzPC9idXR0b24+PC9MaW5rPjxici8+PGJyLz48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5Mb2dPdXQ8L2J1dHRvbj48YnIvPjxici8+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5jbG9zZX0+Q2xvc2U8L2J1dHRvbj48YnIvPjxici8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDooXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucG9wdXA9PT0nbm8nXG4gICAgICAgICAgICAgICAgICAgID88ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPSdtYWluJz57dGhpcy5wcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0nbWFpbic+PGltZyBpZD0nYnV0dG9uJyBvbkNsaWNrPXt0aGlzLmNoYW5nZX0gc3JjPSdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzEvMTIvVXNlcl9pY29uXzIuc3ZnLzIyMHB4LVVzZXJfaWNvbl8yLnN2Zy5wbmcnaGVpZ2h0PSc3MHB4JyB3aWR0aD0nNzBweCcvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA6KFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wb3B1cD09PSdvcmRlcidcbiAgICAgICAgICAgICAgICAgICAgICAgID88T3JkZXIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgOihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnBvcHVwPT09J2NhcnQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPzxDYXJ0IGNoYW5nZT17dGhpcy5wbGFjZWR9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PFBsYWNlZCBjaGFuZ2U9e3RoaXMuY2xvc2V9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YHB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MWVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI291dGVye1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHRvcDowO1xuICAgICAgICAgICAgICAgIGJvdHRvbTowO1xuICAgICAgICAgICAgICAgIGxlZnQ6MDtcbiAgICAgICAgICAgICAgICByaWdodDowO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDAsMCwwLDAuMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjaW5uZXJ7XG4gICAgICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCBiYWxjaztcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTo0ZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6M2VtO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICBsZWZ0OiA0NCU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDQ0JTtcbiAgICAgICAgICAgICAgICB0b3A6IDI1JTtcbiAgICAgICAgICAgICAgICBib3R0b206IDE1JTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1JTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNTYsMTUxLDc4LDAuOSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNidXR0b257XG4gICAgICAgICAgICAgICAgIHBvc2l0aW9uOmZpeGVkO1xuICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjVlbTtcbiAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MTEwZW07XG4gICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xuICAgICAgICAgICAgICAgICBmb250LXNpemU6MWVtO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNtYWlue3Bvc2l0aW9uOmFic29sdXRlO31cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlciJdfQ== */\n/*@ sourceURL=components/user/User.js */"
      }));
    }
  }]);

  return User;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (User);

/***/ })

})
//# sourceMappingURL=4.024cd1f40be7b931d115.hot-update.js.map