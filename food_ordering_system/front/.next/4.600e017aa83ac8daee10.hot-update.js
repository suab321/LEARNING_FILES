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
        className: "jsx-1429997162"
      }, this.state.popup ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        className: "jsx-1429997162"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "outer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        className: "jsx-1429997162"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        className: "jsx-1429997162"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        className: "jsx-1429997162"
      }, "ViewOrders"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        className: "jsx-1429997162"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        className: "jsx-1429997162"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        className: "jsx-1429997162"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        className: "jsx-1429997162"
      }, "LogOut"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        className: "jsx-1429997162"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        className: "jsx-1429997162"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        className: "jsx-1429997162"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: this.close,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        className: "jsx-1429997162"
      }, "Close"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        className: "jsx-1429997162"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        className: "jsx-1429997162"
      }))), this.props.children) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        className: "jsx-1429997162"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        className: "jsx-1429997162"
      }, this.props.children), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        className: "jsx-1429997162"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: this.change,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        className: "jsx-1429997162"
      }, "User"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1429997162",
        css: "p.jsx-1429997162{font-family:sans-serif;font-size:1em;}#outer.jsx-1429997162{position:absolute;width:100%;height:100%;top:0;bottom:0;left:0;right:0;background-color:rgb(0,0,0,0.2);}#inner.jsx-1429997162{padding-bottom:4em;padding-top:3em;position:absolute;left:44%;right:44%;top:25%;bottom:25%;height:15%;margin:auto;background:white;text-align:center;}#button.jsx-1429997162{postion:fixed;margin-top:7em;position:absolute;margin-left:110em;cursor:pointer;}button.jsx-1429997162{font-size:1em;}#main.jsx-1429997162{position:varibale;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdXNlci9Vc2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDYSxBQUV1QyxBQUlMLEFBVUMsQUFhTCxBQU9BLEFBRUksY0FSSCxBQU9sQixJQTlCYyxBQStCUSxDQXJCSCxJQWRGLE1BS0QsQUF1QkksTUFiRSxFQWR0QixJQUtTLE1BQ0ksQUFzQk8sTUFiUCxHQVJILE1BU0ksQ0FSSCxFQXFCTSxNQXBCa0IsQ0FRdkIsUUFDRyxBQVlkLFdBWGMsV0FDQyxDQVZoQixXQVdxQixpQkFDRCxrQkFDcEIiLCJmaWxlIjoiY29tcG9uZW50cy91c2VyL1VzZXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYWJoaW5hdi9MRUFSTklOR19GSUxFUy9mb29kX29yZGVyaW5nX3N5c3RlbS9mcm9udCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcblxuY2xhc3MgVXNlciBleHRlbmRzIENvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlPXtwb3B1cDpmYWxzZX1cblxuICAgIHRoaXMuY2hhbmdlPXRoaXMuY2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLmNsb3NlPXRoaXMuY2xvc2UuYmluZCh0aGlzKVxuICAgIH1cbiAgICBjaGFuZ2UoKXtcbiAgICAgICAgY29uc29sZS5sb2coJ3llcycpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3BvcHVwOnRydWV9KVxuICAgIH1cbiAgICBjbG9zZSgpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtwb3B1cDpmYWxzZX0pXG4gICAgfVxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PntcbiAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5wb3B1cClcbiAgICAgICAgICAgICAgICA/PGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPSdvdXRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9J2lubmVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+Vmlld09yZGVyczwvYnV0dG9uPjxici8+PGJyLz48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5Mb2dPdXQ8L2J1dHRvbj48YnIvPjxici8+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5jbG9zZX0+Q2xvc2U8L2J1dHRvbj48YnIvPjxici8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgOig8ZGl2PjxkaXYgaWQ9J21haW4nPnt0aGlzLnByb3BzLmNoaWxkcmVufTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9J2J1dHRvbic+PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNoYW5nZX0+VXNlcjwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgcHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTpzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjb3V0ZXJ7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgdG9wOjA7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6MDtcbiAgICAgICAgICAgICAgICByaWdodDowO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDAsMCwwLDAuMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjaW5uZXJ7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206NGVtO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOjNlbTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogNDQlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiA0NCU7XG4gICAgICAgICAgICAgICAgdG9wOiAyNSU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAyNSU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNSU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjYnV0dG9ue1xuICAgICAgICAgICAgICAgIHBvc3Rpb246Zml4ZWQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo3ZW07XG4gICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjExMGVtO1xuICAgICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnV0dG9ue1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjbWFpbntwb3NpdGlvbjp2YXJpYmFsZX1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXIiXX0= */\n/*@ sourceURL=components/user/User.js */"
      }));
    }
  }]);

  return User;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (User);

/***/ })

})
//# sourceMappingURL=4.600e017aa83ac8daee10.hot-update.js.map