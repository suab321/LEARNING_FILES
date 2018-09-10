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
        className: "jsx-904531620"
      }, this.state.popup ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        className: "jsx-904531620"
      }, this.props.children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "outer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        className: "jsx-904531620"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        className: "jsx-904531620"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: "jsx-904531620"
      }, "View Orders"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        className: "jsx-904531620"
      }, "LogOut")))) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        className: "jsx-904531620"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        className: "jsx-904531620"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: this.change,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        className: "jsx-904531620"
      }, "User")), this.props.children), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "904531620",
        css: "p.jsx-904531620{font-family:sans-serif;font-size:1em;}#outer.jsx-904531620{height:100%;width:100%;background-color:#f1f1f1;position:absolute;}#inner.jsx-904531620{text-align:center padding:1em;border:1px solid black;left:25%;right:25%;top:25%;bottom:25%;height:30%;margin:auto;background:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdXNlci9Vc2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCYSxBQUV1QyxBQUlYLEFBT0EsWUFORCxXQUpHLEFBS1csT0FNRixPQVYxQixXQUtxQixLQU1SLFNBQ0MsSUFOZCxNQU9ZLFFBQ0csV0FDQSxXQUNDLFlBQ0ssaUJBQ3JCIiwiZmlsZSI6ImNvbXBvbmVudHMvdXNlci9Vc2VyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2FiaGluYXYvTEVBUk5JTkdfRklMRVMvZm9vZF9vcmRlcmluZ19zeXN0ZW0vZnJvbnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5cbmNsYXNzIFVzZXIgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZT17cG9wdXA6ZmFsc2V9XG4gICAgfVxuICAgIGNoYW5nZSgpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtwb3B1cDp0cnVlfSlcbiAgICB9XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+e1xuICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLnBvcHVwKVxuICAgICAgICAgICAgICAgID88ZGl2PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPSdvdXRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9J2lubmVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+VmlldyBPcmRlcnM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxvZ091dDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDooPGRpdj48ZGl2IGlkPSdidXR0b24nPjxidXR0b24gb25DbGljaz17dGhpcy5jaGFuZ2V9PlVzZXI8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj4pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2Bwe1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjFlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNvdXRlcntcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I2YxZjFmMTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNpbm5lcntcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6MWVtO1xuICAgICAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICAgICAgbGVmdDogMjUlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAyNSU7XG4gICAgICAgICAgICAgICAgdG9wOiAyNSU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAyNSU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAjYnV0dG9ue1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXIiXX0= */\n/*@ sourceURL=components/user/User.js */"
      }));
    }
  }]);

  return User;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (User);

/***/ })

})
//# sourceMappingURL=4.47d7e199b717900485b7.hot-update.js.map