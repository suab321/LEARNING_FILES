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
        className: "jsx-80802762"
      }, this.state.popup ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        className: "jsx-80802762"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "outer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        className: "jsx-80802762"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        className: "jsx-80802762"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        className: "jsx-80802762"
      }, "ViewOrders"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        className: "jsx-80802762"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        className: "jsx-80802762"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        className: "jsx-80802762"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: "jsx-80802762"
      }, "LogOut"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: "jsx-80802762"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: "jsx-80802762"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: "jsx-80802762"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        className: "jsx-80802762"
      }, "Close"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        className: "jsx-80802762"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        className: "jsx-80802762"
      }))), this.props.children) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        className: "jsx-80802762"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        className: "jsx-80802762"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        onClick: this.change,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        className: "jsx-80802762"
      }, "User")), this.props.children), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "80802762",
        css: "p.jsx-80802762{font-family:sans-serif;font-size:1em;}#outer.jsx-80802762{position:fixed;width:100%;height:100%;top:0;bottom:0;left:0;right:0;background-color:rgb(0,0,0,0.2);}#inner.jsx-80802762{padding-bottom:4em;padding-top:3em;position:absolute;left:44%;right:44%;top:25%;bottom:25%;height:15%;margin:auto;background:white;text-align:center;}#button.jsx-80802762{margin-top:8em;position:absolute;margin-left:110em;font-size:1em;cursor:pointer;}button.jsx-80802762{font-size:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdXNlci9Vc2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCYSxBQUV1QyxBQUlSLEFBVUksQUFhTCxBQU9BLGNBQ2pCLENBOUJjLEFBdUJLLElBYkEsSUFkRixHQUtELE9BdUJHLEVBYkcsRUFkdEIsQ0FLUyxNQUNJLE9Bc0JFLEVBckJMLEFBUUcsT0FQRixFQVFHLEdBYUUsR0FwQm1CLElBUXZCLFFBQ0csQUFZZixXQVhlLFNBVGYsRUFVZ0IsWUFDSyxpQkFDRCxrQkFDcEIiLCJmaWxlIjoiY29tcG9uZW50cy91c2VyL1VzZXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYWJoaW5hdi9MRUFSTklOR19GSUxFUy9mb29kX29yZGVyaW5nX3N5c3RlbS9mcm9udCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcblxuY2xhc3MgVXNlciBleHRlbmRzIENvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlPXtwb3B1cDp0cnVlfVxuICAgIH1cbiAgICBjaGFuZ2UoKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cG9wdXA6dHJ1ZX0pXG4gICAgfVxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PntcbiAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5wb3B1cClcbiAgICAgICAgICAgICAgICA/PGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPSdvdXRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9J2lubmVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+Vmlld09yZGVyczwvYnV0dG9uPjxici8+PGJyLz48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5Mb2dPdXQ8L2J1dHRvbj48YnIvPjxici8+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+Q2xvc2U8L2J1dHRvbj48YnIvPjxici8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgOig8ZGl2PjxkaXYgaWQ9J2J1dHRvbic+PHAgb25DbGljaz17dGhpcy5jaGFuZ2V9PlVzZXI8L3A+PC9kaXY+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgcHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTpzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjb3V0ZXJ7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgdG9wOjA7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6MDtcbiAgICAgICAgICAgICAgICByaWdodDowO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDAsMCwwLDAuMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjaW5uZXJ7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206NGVtO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOjNlbTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogNDQlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiA0NCU7XG4gICAgICAgICAgICAgICAgdG9wOiAyNSU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAyNSU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNSU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICNidXR0b257XG4gICAgICAgICAgICAgICBtYXJnaW4tdG9wOjhlbTtcbiAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjExMGVtO1xuICAgICAgICAgICAgICBmb250LXNpemU6MWVtO1xuICAgICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MWVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlciJdfQ== */\n/*@ sourceURL=components/user/User.js */"
      }));
    }
  }]);

  return User;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (User);

/***/ })

})
//# sourceMappingURL=4.3ac431370674542b0f6b.hot-update.js.map