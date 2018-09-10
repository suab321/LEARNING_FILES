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
      popup: true
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
        className: "jsx-4055233186"
      }, this.state.popup ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        className: "jsx-4055233186"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "outer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        className: "jsx-4055233186"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        className: "jsx-4055233186"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        className: "jsx-4055233186"
      }, "View Orders"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: "jsx-4055233186"
      }, "LogOut"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        className: "jsx-4055233186"
      }, "Close"))), this.props.children) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        className: "jsx-4055233186"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        className: "jsx-4055233186"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        onClick: this.change,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        className: "jsx-4055233186"
      }, "User")), this.props.children), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "4055233186",
        css: "p.jsx-4055233186{font-family:sans-serif;font-size:1em;}#outer.jsx-4055233186{position:fixed;width:100%;height:100%;top:0;bottom:0;left:0;right:0;background-color:rgb(0,0,0,0.2);}#inner.jsx-4055233186{padding-top:6em;position:absolute;left:44%;right:44%;top:25%;bottom:25%;height:15%;margin:auto;background:white;text-align:center;}#button.jsx-4055233186{margin-top:8em;position:absolute;margin-left:110em;font-size:1em;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdXNlci9Vc2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCYSxBQUV1QyxBQUlSLEFBVUMsQUFZRixlQXJCSCxBQXNCSyxDQVpHLE9BZEwsR0FLRCxPQXNCRyxDQVpOLEdBZGIsQ0FLUyxLQVVLLENBVEQsT0FxQkUsRUFwQkwsQUFTRSxPQVJELENBU0ksSUFXQyxHQW5CbUIsSUFTcEIsUUFXZixHQVZnQixZQUNLLEtBVnJCLFlBV29CLGtCQUNwQiIsImZpbGUiOiJjb21wb25lbnRzL3VzZXIvVXNlci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9hYmhpbmF2L0xFQVJOSU5HX0ZJTEVTL2Zvb2Rfb3JkZXJpbmdfc3lzdGVtL2Zyb250Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBVc2VyIGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGU9e3BvcHVwOnRydWV9XG4gICAgfVxuICAgIGNoYW5nZSgpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtwb3B1cDp0cnVlfSlcbiAgICB9XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+e1xuICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLnBvcHVwKVxuICAgICAgICAgICAgICAgID88ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9J291dGVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0naW5uZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5WaWV3IE9yZGVyczwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5Mb2dPdXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+Q2xvc2U8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA6KDxkaXY+PGRpdiBpZD0nYnV0dG9uJz48cCBvbkNsaWNrPXt0aGlzLmNoYW5nZX0+VXNlcjwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj4pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2Bwe1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjFlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNvdXRlcntcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB0b3A6MDtcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgbGVmdDowO1xuICAgICAgICAgICAgICAgIHJpZ2h0OjA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNpbm5lcntcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDo2ZW07XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDQ0JTtcbiAgICAgICAgICAgICAgICByaWdodDogNDQlO1xuICAgICAgICAgICAgICAgIHRvcDogMjUlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMjUlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTUlO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAjYnV0dG9ue1xuICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo4ZW07XG4gICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDoxMTBlbTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOjFlbTtcbiAgICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyIl19 */\n/*@ sourceURL=components/user/User.js */"
      }));
    }
  }]);

  return User;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (User);

/***/ })

})
//# sourceMappingURL=4.4bfdb631f3cbf97f6258.hot-update.js.map