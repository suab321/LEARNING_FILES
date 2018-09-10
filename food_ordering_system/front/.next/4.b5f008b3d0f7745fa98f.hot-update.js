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

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



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
    return _this;
  }

  _createClass(User, [{
    key: "change",
    value: function change() {
      this.setState({
        popup: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        className: "jsx-2587882801"
      }, this.state.popup ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        className: "jsx-2587882801"
      }, this.props.children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "outer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        className: "jsx-2587882801"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        className: "jsx-2587882801"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: "jsx-2587882801"
      }, "View Orders"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        className: "jsx-2587882801"
      }, "LogOut")))) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        className: "jsx-2587882801"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: this.change,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        className: "jsx-2587882801"
      }, "User"), this.props.children), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2587882801",
        css: "p.jsx-2587882801{font-family:sans-serif;font-size:1em;}#outer.jsx-2587882801{height:100%;width:100%;background-color:#f1f1f1;position:absolute;}#inner.jsx-2587882801{text-align:center padding:1em;border:1px solid black;left:25%;right:25%;top:25%;bottom:25%;height:30%;margin:auto;background:white;}button.jsx-2587882801{margin-left:100em;text-align:right;position:fixed;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdXNlci9Vc2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCYSxBQUV1QyxBQUlYLEFBT0EsQUFXSyxZQWpCTixNQWtCTSxLQXRCSCxBQUtXLE9BTUYsS0FZUixFQXRCbEIsV0FLcUIsRUFrQkgsR0FaTCxTQUNDLEdBWWQsQ0FsQkEsTUFPWSxRQUNHLFdBQ0EsV0FDQyxZQUNLLGlCQUNyQiIsImZpbGUiOiJjb21wb25lbnRzL3VzZXIvVXNlci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9hYmhpbmF2L0xFQVJOSU5HX0ZJTEVTL2Zvb2Rfb3JkZXJpbmdfc3lzdGVtL2Zyb250Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBVc2VyIGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGU9e3BvcHVwOmZhbHNlfVxuICAgIH1cbiAgICBjaGFuZ2UoKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cG9wdXA6dHJ1ZX0pXG4gICAgfVxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PntcbiAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5wb3B1cClcbiAgICAgICAgICAgICAgICA/PGRpdj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPGRpdiBpZD0nb3V0ZXInPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPSdpbm5lcic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPlZpZXcgT3JkZXJzPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb2dPdXQ8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA6KDxkaXY+PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNoYW5nZX0+VXNlcjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvZGl2PilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YHB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MWVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI291dGVye1xuICAgICAgICAgICAgICAgIGhlaWdodDoxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZjFmMWYxO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI2lubmVye1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyXG4gICAgICAgICAgICAgICAgcGFkZGluZzoxZW07XG4gICAgICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgICAgICBsZWZ0OiAyNSU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDI1JTtcbiAgICAgICAgICAgICAgICB0b3A6IDI1JTtcbiAgICAgICAgICAgICAgICBib3R0b206IDI1JTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjEwMGVtO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246cmlnaHQ7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyIl19 */\n/*@ sourceURL=components/user/User.js */"
      }));
    }
  }]);

  return User;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (User);

/***/ })

})
//# sourceMappingURL=4.b5f008b3d0f7745fa98f.hot-update.js.map