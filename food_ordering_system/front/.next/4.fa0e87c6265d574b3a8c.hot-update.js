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
    return _this;
  }

  _createClass(User, [{
    key: "change",
    value: function change() {
      console.log('yes');
      this.setState({
        popup: true
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.setState({
        popup: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        className: "jsx-660922703"
      }, this.state.popup ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        className: "jsx-660922703"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "outer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        className: "jsx-660922703"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        className: "jsx-660922703"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        className: "jsx-660922703"
      }, "ViewOrders"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        className: "jsx-660922703"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        className: "jsx-660922703"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        className: "jsx-660922703"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        className: "jsx-660922703"
      }, "LogOut"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        className: "jsx-660922703"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        className: "jsx-660922703"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        className: "jsx-660922703"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: this.close,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        className: "jsx-660922703"
      }, "Close"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        className: "jsx-660922703"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        className: "jsx-660922703"
      }))), this.props.children) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        className: "jsx-660922703"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        className: "jsx-660922703"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: this.change,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        className: "jsx-660922703"
      }, "User")), this.props.children), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "660922703",
        css: "p.jsx-660922703{font-family:sans-serif;font-size:1em;}#outer.jsx-660922703{position:absolute;width:100%;height:100%;top:0;bottom:0;left:0;right:0;background-color:rgb(0,0,0,0.2);}#inner.jsx-660922703{padding-bottom:4em;padding-top:3em;position:fixed;left:44%;right:44%;top:25%;bottom:25%;height:15%;margin:auto;background:white;text-align:center;}#button.jsx-660922703{position:absolute;margin-top:10em;margin-left:110em;cursor:pointer;}button.jsx-660922703{font-size:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdXNlci9Vc2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDYSxBQUV1QyxBQUlMLEFBVUMsQUFhRCxBQU1KLGNBQ2pCLElBN0JjLEFBdUJLLENBYkEsSUFkRixNQUtELEtBdUJNLENBYkgsRUFkbkIsSUFLUyxNQUNJLEdBU0EsRUFhTSxJQXJCVCxHQVNJLElBUkgsSUFxQlYsRUFaVyxFQVJ1QixNQVNwQixXQUNBLFdBQ0MsSUFWaEIsUUFXcUIsaUJBQ0Qsa0JBQ3BCIiwiZmlsZSI6ImNvbXBvbmVudHMvdXNlci9Vc2VyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2FiaGluYXYvTEVBUk5JTkdfRklMRVMvZm9vZF9vcmRlcmluZ19zeXN0ZW0vZnJvbnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5cbmNsYXNzIFVzZXIgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZT17cG9wdXA6ZmFsc2V9XG5cbiAgICB0aGlzLmNoYW5nZT10aGlzLmNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5jbG9zZT10aGlzLmNsb3NlLmJpbmQodGhpcylcbiAgICB9XG4gICAgY2hhbmdlKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCd5ZXMnKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtwb3B1cDp0cnVlfSlcbiAgICB9XG4gICAgY2xvc2UoKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cG9wdXA6ZmFsc2V9KVxuICAgIH1cbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj57XG4gICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUucG9wdXApXG4gICAgICAgICAgICAgICAgPzxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD0nb3V0ZXInPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPSdpbm5lcic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPlZpZXdPcmRlcnM8L2J1dHRvbj48YnIvPjxici8+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+TG9nT3V0PC9idXR0b24+PGJyLz48YnIvPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuY2xvc2V9PkNsb3NlPC9idXR0b24+PGJyLz48YnIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDooPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0nYnV0dG9uJz48YnV0dG9uIG9uQ2xpY2s9e3RoaXMuY2hhbmdlfT5Vc2VyPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgcHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTpzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjb3V0ZXJ7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgdG9wOjA7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6MDtcbiAgICAgICAgICAgICAgICByaWdodDowO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDAsMCwwLDAuMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjaW5uZXJ7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206NGVtO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOjNlbTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgbGVmdDogNDQlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiA0NCU7XG4gICAgICAgICAgICAgICAgdG9wOiAyNSU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAyNSU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNSU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjYnV0dG9ue1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MTBlbTtcbiAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MTEwZW07XG4gICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MWVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyIl19 */\n/*@ sourceURL=components/user/User.js */"
      }));
    }
  }]);

  return User;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (User);

/***/ })

})
//# sourceMappingURL=4.fa0e87c6265d574b3a8c.hot-update.js.map