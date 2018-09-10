webpackHotUpdate(4,{

/***/ "./components/user/User.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
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
      popup: false
    };
    _this.change = _this.change.bind(_assertThisInitialized(_this));
    _this.close = _this.close.bind(_assertThisInitialized(_this));
    _this.order = _this.order.bind(_assertThisInitialized(_this));
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
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        className: "jsx-3546068768"
      }, this.state.popup === 'yes' ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        className: "jsx-3546068768"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "outer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        className: "jsx-3546068768"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        className: "jsx-3546068768"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: this.order,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        className: "jsx-3546068768"
      }, "ViewOrders"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        className: "jsx-3546068768"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        className: "jsx-3546068768"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        className: "jsx-3546068768"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        className: "jsx-3546068768"
      }, "LogOut"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        className: "jsx-3546068768"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        className: "jsx-3546068768"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        className: "jsx-3546068768"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: this.close,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        className: "jsx-3546068768"
      }, "Close"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        className: "jsx-3546068768"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        className: "jsx-3546068768"
      }))), this.props.children) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        className: "jsx-3546068768"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        className: "jsx-3546068768"
      }, this.props.children), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        className: "jsx-3546068768"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        id: "button",
        onClick: this.change,
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        className: "jsx-3546068768"
      }), "User")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3546068768",
        css: "p.jsx-3546068768{font-family:sans-serif;font-size:1em;}#outer.jsx-3546068768{position:absolute;width:100%;height:100%;top:0;bottom:0;left:0;right:0;background-color:rgb(0,0,0,0.2);}#inner.jsx-3546068768{padding-bottom:4em;padding-top:3em;position:fixed;left:44%;right:44%;top:25%;bottom:25%;height:15%;margin:auto;background:white;text-align:center;}#button.jsx-3546068768{position:fixed;margin-top:8em;margin-left:110em;cursor:pointer;font-size:1em;}button.jsx-3546068768{font-size:1em;}#main.jsx-3546068768{position:absolute;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdXNlci9Vc2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDYSxBQUV1QyxBQUlMLEFBVUMsQUFhSixBQU9ELEFBRUssY0FEdEIsQ0FQa0IsR0F2QkosQUErQlMsQ0FyQkosSUFkRixNQUtELENBdUJNLEtBYkgsRUFkbkIsSUFLUyxNQUNJLENBc0JNLEVBYk4sTUFSSCxHQVNJLElBUkgsQUFxQk8sTUFaTixFQVJ1QixNQVNwQixBQVlkLFdBWGMsV0FDQyxJQVZoQixRQVdxQixpQkFDRCxrQkFDcEIiLCJmaWxlIjoiY29tcG9uZW50cy91c2VyL1VzZXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYWJoaW5hdi9MRUFSTklOR19GSUxFUy9mb29kX29yZGVyaW5nX3N5c3RlbS9mcm9udCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcblxuY2xhc3MgVXNlciBleHRlbmRzIENvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlPXtwb3B1cDpmYWxzZX1cblxuICAgIHRoaXMuY2hhbmdlPXRoaXMuY2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLmNsb3NlPXRoaXMuY2xvc2UuYmluZCh0aGlzKVxuICAgIHRoaXMub3JkZXI9dGhpcy5vcmRlci5iaW5kKHRoaXMpXG4gICAgfVxuICAgIGNoYW5nZSgpe1xuICAgICAgICBjb25zb2xlLmxvZygneWVzJylcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cG9wdXA6J3llcyd9KVxuICAgIH1cbiAgICBjbG9zZSgpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtwb3B1cDonbm8nfSlcbiAgICB9XG4gICAgb3JkZXIoKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cG9wdXA6J29yZGVyJ30pXG4gICAgfVxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PntcbiAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5wb3B1cD09PSd5ZXMnKVxuICAgICAgICAgICAgICAgID88ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9J291dGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0naW5uZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9yZGVyfT5WaWV3T3JkZXJzPC9idXR0b24+PGJyLz48YnIvPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPkxvZ091dDwvYnV0dG9uPjxici8+PGJyLz48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNsb3NlfT5DbG9zZTwvYnV0dG9uPjxici8+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA6KDxkaXY+PGRpdiBpZD0nbWFpbic+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9J21haW4nPjxpbWcgaWQ9J2J1dHRvbicgb25DbGljaz17dGhpcy5jaGFuZ2V9IHNyYz0naHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi8xLzEyL1VzZXJfaWNvbl8yLnN2Zy8yMjBweC1Vc2VyX2ljb25fMi5zdmcucG5nJ1xuICAgICAgICAgICAgICAgICAgICAvPlVzZXI8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2Bwe1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjFlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNvdXRlcntcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB0b3A6MDtcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgbGVmdDowO1xuICAgICAgICAgICAgICAgIHJpZ2h0OjA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNpbm5lcntcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTo0ZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6M2VtO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICBsZWZ0OiA0NCU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDQ0JTtcbiAgICAgICAgICAgICAgICB0b3A6IDI1JTtcbiAgICAgICAgICAgICAgICBib3R0b206IDI1JTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1JTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNidXR0b257XG4gICAgICAgICAgICAgICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo4ZW07XG4gICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjExMGVtO1xuICAgICAgICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgZm9udC1zaXplOjFlbTtcbiAgICAgICAgICAgICB9XG4gICAgICAgICAgICBidXR0b257XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjFlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNtYWlue3Bvc2l0aW9uOmFic29sdXRlO31cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlciJdfQ== */\n/*@ sourceURL=components/user/User.js */"
      }));
    }
  }]);

  return User;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (User);

/***/ })

})
//# sourceMappingURL=4.89e4beeb828459ccf896.hot-update.js.map