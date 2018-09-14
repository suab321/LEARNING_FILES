webpackHotUpdate(5,{

/***/ "./pages/Login.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
var _jsxFileName = "/home/abhinav/LEARNING_FILES/food_ordering_system/front/pages/Login.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




__WEBPACK_IMPORTED_MODULE_2_axios___default.a.defaults.withCredentials = true;

var Login =
/*#__PURE__*/
function (_Component) {
  _inherits(Login, _Component);

  function Login(props) {
    var _this;

    _classCallCheck(this, Login);

    _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));
    _this.login = _this.login.bind(_assertThisInitialized(_this));
    _this.state = {
      email: '',
      password: ''
    };
    return _this;
  }

  _createClass(Login, [{
    key: "login",
    value: function login() {
      __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('http://localhost:3002/login', {
        email: this.state.email,
        password: this.state.password
      });
    }
  }, {
    key: "email",
    value: function email(event) {
      this.setState({
        email: event.target.value
      });
    }
  }, {
    key: "password",
    value: function password(event) {
      this.setState({
        password: event.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          textAlign: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        className: "jsx-1745441607"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        className: "jsx-1745441607"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        className: "jsx-1745441607"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("form", {
        method: "POST",
        action: "http://localhost:3002/login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        className: "jsx-1745441607"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        style: {
          fontSize: "2em"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        className: "jsx-1745441607"
      }, "LOGIN"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        className: "jsx-1745441607"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        className: "jsx-1745441607"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        className: "jsx-1745441607"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "https://s3.amazonaws.com/thumbnails.illustrationsource.com/huge.102.513291.JPG",
        alt: "",
        width: "200px",
        height: "200px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        className: "jsx-1745441607"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        className: "jsx-1745441607"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        className: "jsx-1745441607"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        className: "jsx-1745441607"
      }, "Email"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        className: "jsx-1745441607"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        className: "jsx-1745441607"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "email",
        name: "email",
        required: "true",
        onChange: this.email,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        className: "jsx-1745441607"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        className: "jsx-1745441607"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        className: "jsx-1745441607"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        className: "jsx-1745441607"
      }, "Password"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        className: "jsx-1745441607"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        className: "jsx-1745441607"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "password",
        name: "password",
        required: "true",
        onChange: this.password,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        className: "jsx-1745441607"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        className: "jsx-1745441607"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        className: "jsx-1745441607"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        style: {
          cursor: "pointer",
          fontSize: "1em"
        },
        onClick: this.login,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        className: "jsx-1745441607"
      }, "Login"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        className: "jsx-1745441607"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        className: "jsx-1745441607"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        style: {
          fontFamily: "sans-serif"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        className: "jsx-1745441607"
      }, "Dont Have an Account!")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("form", {
        action: "/register_page",
        method: "GET",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        className: "jsx-1745441607"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
        href: "/Register",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        style: {
          cursor: "pointer"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        className: "jsx-1745441607"
      }, "Click to Register"))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1745441607",
        css: ".form.jsx-1745441607{border:1px solid black;width:30em;padding:5px;margin-left:42em;margin-top:5em;margin-right:10em;text-align:center;padding-top:1em;padding-bottom:1em;background-color:rgb(149,78,87);}label.jsx-1745441607{font-size:1em;font-family:sans-serif;}input.jsx-1745441607{font-size:1.5em;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL0xvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDYSxBQUd3QyxBQVlULEFBSUUsY0FITyxFQUlMLE9BaEJSLFdBQ0UsQUFnQmhCLEdBSkEsU0FYcUIsaUJBQ0YsZUFDRyxrQkFDQSxrQkFDRixnQkFDRyxtQkFDYSxnQ0FDcEMiLCJmaWxlIjoicGFnZXMvTG9naW4uanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYWJoaW5hdi9MRUFSTklOR19GSUxFUy9mb29kX29yZGVyaW5nX3N5c3RlbS9mcm9udCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscz10cnVlO1xuY2xhc3MgTG9naW4gZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5sb2dpbj10aGlzLmxvZ2luLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5zdGF0ZT17ZW1haWw6JycscGFzc3dvcmQ6Jyd9XG4gICAgfVxuICAgIGxvZ2luKCl7XG4gICAgICAgIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMi9sb2dpbicse2VtYWlsOnRoaXMuc3RhdGUuZW1haWwscGFzc3dvcmQ6dGhpcy5zdGF0ZS5wYXNzd29yZH0pXG4gICAgfVxuICAgIGVtYWlsKGV2ZW50KXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZW1haWw6ZXZlbnQudGFyZ2V0LnZhbHVlfSlcbiAgICB9XG4gICAgcGFzc3dvcmQoZXZlbnQpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtwYXNzd29yZDpldmVudC50YXJnZXQudmFsdWV9KVxuICAgIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOlwiY2VudGVyXCJ9fT5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9J2Zvcm0nPlxuXHRcdFx0XHQ8Zm9ybSBtZXRob2Q9XCJQT1NUXCIgYWN0aW9uPSdodHRwOi8vbG9jYWxob3N0OjMwMDIvbG9naW4nPlxuXHRcdFx0XHQ8bGFiZWwgc3R5bGU9e3tmb250U2l6ZTogXCIyZW1cIn19PkxPR0lOPC9sYWJlbD48YnIvPjxici8+PGJyLz5cblx0XHRcdFx0PGltZyBzcmM9XCJodHRwczovL3MzLmFtYXpvbmF3cy5jb20vdGh1bWJuYWlscy5pbGx1c3RyYXRpb25zb3VyY2UuY29tL2h1Z2UuMTAyLjUxMzI5MS5KUEdcIiBhbHQ9XCJcIiB3aWR0aD1cIjIwMHB4XCIgaGVpZ2h0PVwiMjAwcHhcIi8+PGJyLz48YnIvPlxuXHRcdFx0XHQ8bGFiZWw+RW1haWw8L2xhYmVsPjxici8+PGJyLz5cblx0XHRcdFx0PGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHJlcXVpcmVkPVwidHJ1ZVwib25DaGFuZ2U9e3RoaXMuZW1haWx9Lz48YnIvPjxici8+XG5cdFx0XHRcdDxsYWJlbD5QYXNzd29yZDwvbGFiZWw+PGJyLz48YnIvPlxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgcmVxdWlyZWQ9XCJ0cnVlXCJvbkNoYW5nZT17dGhpcy5wYXNzd29yZH0vPjxici8+PGJyLz5cblx0XHRcdFx0PGJ1dHRvbiBzdHlsZT17e2N1cnNvcjogXCJwb2ludGVyXCIsZm9udFNpemU6IFwiMWVtXCJ9fW9uQ2xpY2s9e3RoaXMubG9naW59PkxvZ2luPC9idXR0b24+PGJyLz48YnIvPlxuXHRcdFx0XHQ8cCBzdHlsZT17e2ZvbnRGYW1pbHk6IFwic2Fucy1zZXJpZlwifX0+RG9udCBIYXZlIGFuIEFjY291bnQhPC9wPlxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdDxmb3JtIGFjdGlvbj0nL3JlZ2lzdGVyX3BhZ2UnIG1ldGhvZD1cIkdFVFwiPlxuXHRcdFx0XHQ8TGluayBocmVmPScvUmVnaXN0ZXInPjxidXR0b24gc3R5bGU9e3tjdXJzb3I6XCJwb2ludGVyXCJ9fT5DbGljayB0byBSZWdpc3RlcjwvYnV0dG9uPjwvTGluaz5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAuZm9ybXtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgICAgICB3aWR0aDozMGVtO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNDJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1ZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMGVtO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMWVtO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxZW07XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0OSw3OCw4Nyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYWJlbHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0e1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG5cdFx0XHQ8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IExvZ2luOyJdfQ== */\n/*@ sourceURL=pages/Login.js */"
      }));
    }
  }]);

  return Login;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Login);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/Login")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.da3e7074f9826aefb1a1.hot-update.js.map