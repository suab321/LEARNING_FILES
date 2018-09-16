webpackHotUpdate(6,{

/***/ "./components/user/User.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
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
      popup: 'no',
      log: ''
    };
    _this.change = _this.change.bind(_assertThisInitialized(_this));
    _this.close = _this.close.bind(_assertThisInitialized(_this));
    _this.logout = _this.logout.bind(_assertThisInitialized(_this));
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
    key: "logout",
    value: function logout() {
      __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get('http://localhost:3002/logout').then(function (response) {
        if (response.data === 'ok') {
          console.log('ok');
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get('http://localhost:3002/cookie').then(function (response) {
        if (response.data != undefined) _this2.setState({
          log: ok
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        className: "jsx-1106018185"
      }, this.state.popup === 'yes' ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        className: "jsx-1106018185"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "outer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        className: "jsx-1106018185"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        className: "jsx-1106018185"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: "/cart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        className: "jsx-1106018185"
      }, "My Cart")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
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
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: "/Order",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        className: "jsx-1106018185"
      }, "ViewOrders")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
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
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        className: "jsx-1106018185"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: "/Login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: this.logout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        className: "jsx-1106018185"
      }, "LogOut")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        className: "jsx-1106018185"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        className: "jsx-1106018185"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        className: "jsx-1106018185"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: this.close,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        className: "jsx-1106018185"
      }, "Close"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        className: "jsx-1106018185"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        className: "jsx-1106018185"
      }))), this.props.children) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        className: "jsx-1106018185"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        className: "jsx-1106018185"
      }, this.props.children), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
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
          lineNumber: 56
        },
        className: "jsx-1106018185"
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1106018185",
        css: "p.jsx-1106018185{font-family:sans-serif;font-size:1em;}#outer.jsx-1106018185{position:absolute;width:100%;height:100%;top:0;bottom:0;left:0;right:0;background-color:rgb(0,0,0,0.2);}#inner.jsx-1106018185{border:1px solid balck;padding-bottom:4em;padding-top:3em;position:fixed;left:44%;right:44%;top:25%;bottom:15%;height:15%;margin:auto;background:white;text-align:center;background-color:rgba(256,151,78,0.9);}#button.jsx-1106018185{position:fixed;margin-top:5em;margin-left:110em;cursor:pointer;font-size:1em;}#main.jsx-1106018185{position:absolute;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdXNlci9Vc2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStEYSxBQUV1QyxBQUlMLEFBVUssQUFlUCxBQVNHLGVBUkgsR0F6QkwsQUFpQ1MsS0FyQ04sQUFjSyxNQVROLENBeUJNLE9BN0J0QixJQUtTLENBU1UsS0FSUCxDQXdCTyxRQXZCVCxFQVFTLEtBUFIsQUF1Qk8sUUF0QmlCLEVBT3RCLElBZ0JaLEtBZmEsVUFDRixRQUNHLEdBVGYsUUFVZSxXQUNDLFlBQ0ssaUJBQ0Qsa0JBRXJCLHNDQUFDIiwiZmlsZSI6ImNvbXBvbmVudHMvdXNlci9Vc2VyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2FiaGluYXYvTEVBUk5JTkdfRklMRVMvZm9vZF9vcmRlcmluZ19zeXN0ZW0vZnJvbnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5cbmNsYXNzIFVzZXIgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZT17cG9wdXA6J25vJyxsb2c6Jyd9XG4gICAgdGhpcy5jaGFuZ2U9dGhpcy5jaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuY2xvc2U9dGhpcy5jbG9zZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5sb2dvdXQ9dGhpcy5sb2dvdXQuYmluZCh0aGlzKVxuICAgIH1cbiAgICBjaGFuZ2UoKXtcbiAgICAgICAgY29uc29sZS5sb2coJ3llcycpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3BvcHVwOid5ZXMnfSlcbiAgICB9XG4gICAgY2xvc2UoKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cG9wdXA6J25vJ30pXG4gICAgfVxuICAgIGxvZ291dCgpe1xuICAgICAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMi9sb2dvdXQnKS50aGVuKHJlc3BvbnNlPT57XG4gICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhPT09J29rJyl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ29rJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDIvY29va2llJykudGhlbihcbiAgICAgICAgICAgIHJlc3BvbnNlPT57XG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YSE9dW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2c6b2t9KVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PntcbiAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5wb3B1cD09PSd5ZXMnKVxuICAgICAgICAgICAgICAgID88ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9J291dGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0naW5uZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2NhcnQnPjxidXR0b24+TXkgQ2FydDwvYnV0dG9uPjwvTGluaz48YnIvPjxici8+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL09yZGVyJz48YnV0dG9uPlZpZXdPcmRlcnM8L2J1dHRvbj48L0xpbms+PGJyLz48YnIvPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvTG9naW4nPjxidXR0b24gb25DbGljaz17dGhpcy5sb2dvdXR9PkxvZ091dDwvYnV0dG9uPjwvTGluaz48YnIvPjxici8+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5jbG9zZX0+Q2xvc2U8L2J1dHRvbj48YnIvPjxici8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDooXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPSdtYWluJz57dGhpcy5wcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0nbWFpbic+PGltZyBpZD0nYnV0dG9uJyBvbkNsaWNrPXt0aGlzLmNoYW5nZX0gc3JjPSdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzEvMTIvVXNlcl9pY29uXzIuc3ZnLzIyMHB4LVVzZXJfaWNvbl8yLnN2Zy5wbmcnaGVpZ2h0PSc3MHB4JyB3aWR0aD0nNzBweCcvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgcHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTpzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjb3V0ZXJ7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgdG9wOjA7XG4gICAgICAgICAgICAgICAgYm90dG9tOjA7XG4gICAgICAgICAgICAgICAgbGVmdDowO1xuICAgICAgICAgICAgICAgIHJpZ2h0OjA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNpbm5lcntcbiAgICAgICAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkIGJhbGNrO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOjRlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDozZW07XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDQ0JTtcbiAgICAgICAgICAgICAgICByaWdodDogNDQlO1xuICAgICAgICAgICAgICAgIHRvcDogMjUlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMTUlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTUlO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NiwxNTEsNzgsMC45KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI2J1dHRvbntcbiAgICAgICAgICAgICAgICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NWVtO1xuICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDoxMTBlbTtcbiAgICAgICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxZW07XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnV0dG9ue1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI21haW57cG9zaXRpb246YWJzb2x1dGU7fVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyIl19 */\n/*@ sourceURL=components/user/User.js */"
      }));
    }
  }]);

  return User;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (User);

/***/ })

})
//# sourceMappingURL=6.82958b2f7690d6c4d526.hot-update.js.map