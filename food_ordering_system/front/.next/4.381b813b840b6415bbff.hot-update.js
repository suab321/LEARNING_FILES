webpackHotUpdate(4,{

/***/ "./components/boxlist/Boxlist.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__box_Box__ = __webpack_require__("./components/box/Box.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/home/abhinav/LEARNING_FILES/food_ordering_system/front/components/boxlist/Boxlist.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Boxlist =
/*#__PURE__*/
function (_Component) {
  _inherits(Boxlist, _Component);

  function Boxlist() {
    var _this;

    _classCallCheck(this, Boxlist);

    _this = _possibleConstructorReturn(this, (Boxlist.__proto__ || Object.getPrototypeOf(Boxlist)).call(this));
    _this.items = [{
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }, {
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }, {
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }, {
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }, {
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }, {
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }, {
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }, {
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }, {
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }, {
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }, {
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }, {
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }, {
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }, {
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }, {
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }, {
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }, {
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }, {
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }, {
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }, {
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }, {
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }, {
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }, {
      name: 'Gulab Jamun',
      Price: 100,
      category: 'desert'
    }];
    return _this;
  }

  _createClass(Boxlist, [{
    key: "render",
    value: function render() {
      var boxes = this.items.map(function (item) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__box_Box__["a" /* default */], {
          name: item.name,
          price: item.Price,
          url: 'sd',
          category: item.category,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        });
      });
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, boxes);
    }
  }]);

  return Boxlist;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Boxlist);

/***/ }),

/***/ "./components/navbar/Navbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__boxlist_Boxlist__ = __webpack_require__("./components/boxlist/Boxlist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_Side__ = __webpack_require__("./components/sidebar/Side.js");
var _jsxFileName = "/home/abhinav/LEARNING_FILES/food_ordering_system/front/components/navbar/Navbar.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Navbar =
/*#__PURE__*/
function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar(props) {
    _classCallCheck(this, Navbar);

    return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, props));
  }

  _createClass(Navbar, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        className: "jsx-439213154"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        className: "jsx-439213154"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        id: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        className: "jsx-439213154"
      }, "SUAB FOOD CENTER")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__boxlist_Boxlist__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__sidebar_Side__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "439213154",
        css: "#bar.jsx-439213154{background-color:rgba(230,0,0,1);padding-top:1px;text-align:center;border:transparent;height:150px;width:100%;}#text.jsx-439213154{padding-top:10px;font-size:3em;font-style:bold;color:rgba(0,230,0,0.9);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2YmFyL05hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQndCLEFBR2lELEFBVWhCLGlCQUNGLGNBQ0UsRUFYQSxjQWFyQixFQVp1QixrQkFDQyxJQVd2QixlQVZpQixhQUNGLFdBR1giLCJmaWxlIjoiY29tcG9uZW50cy9uYXZiYXIvTmF2YmFyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2FiaGluYXYvTEVBUk5JTkdfRklMRVMvZm9vZF9vcmRlcmluZ19zeXN0ZW0vZnJvbnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQm94bGlzdCBmcm9tICcuLi9ib3hsaXN0L0JveGxpc3QnXG5pbXBvcnQgU2lkZSBmcm9tICcuLi9zaWRlYmFyL1NpZGUnXG5cbiBjbGFzcyBOYXZiYXIgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPSdiYXInPlxuXHRcdCAgICA8cCBpZD0ndGV4dCc+U1VBQiBGT09EIENFTlRFUjwvcD5cblx0ICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxCb3hsaXN0Lz5cbiAgICAgICAgICAgIDxTaWRlLz5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICNiYXJ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIzMCwwLDAsMSk7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDFweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICN0ZXh0e1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOjEwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzZW07XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogYm9sZDtcbiAgICAgICAgICAgICAgICBjb2xvcjpyZ2JhKDAsMjMwLDAsMC45KVxuICAgICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyXG4iXX0= */\n/*@ sourceURL=components/navbar/Navbar.js */"
      }));
    }
  }]);

  return Navbar;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Navbar);

/***/ }),

/***/ "./components/sidebar/Side.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/home/abhinav/LEARNING_FILES/food_ordering_system/front/components/sidebar/Side.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Side =
/*#__PURE__*/
function (_Component) {
  _inherits(Side, _Component);

  function Side(props) {
    _classCallCheck(this, Side);

    return _possibleConstructorReturn(this, (Side.__proto__ || Object.getPrototypeOf(Side)).call(this, props));
  }

  _createClass(Side, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        className: "jsx-104821291"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        className: "jsx-104821291"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("select", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        className: "jsx-104821291"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        name: "mc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        className: "jsx-104821291"
      }, "Main Course"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        name: "sn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        className: "jsx-104821291"
      }, "Snacks"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        name: "des",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        className: "jsx-104821291"
      }, "Dessert")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        className: "jsx-104821291"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        className: "jsx-104821291"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        className: "jsx-104821291"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        className: "jsx-104821291"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        className: "jsx-104821291"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "checkbox",
        value: "veg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        className: "jsx-104821291"
      }), "Veg", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        className: "jsx-104821291"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "checkbox",
        value: "nonveg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        className: "jsx-104821291"
      }), "Non-Veg", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        className: "jsx-104821291"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        className: "jsx-104821291"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        className: "jsx-104821291"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        className: "jsx-104821291"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        className: "jsx-104821291"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        className: "jsx-104821291"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("select", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        className: "jsx-104821291"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        name: "ind",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: "jsx-104821291"
      }, "Indian"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        name: "chi",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        className: "jsx-104821291"
      }, "Chinese"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "104821291",
        css: "#main.jsx-104821291{background-color:rgba(230,187,98,0.5);width:10em;height:100%;margin-top:1em;padding-top:2px;margin-top:2px;padding-bottom:2px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2lkZWJhci9TaWRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCYSxBQUdzRCxzQ0FDM0IsV0FDQyxZQUNHLGVBQ0MsZ0JBQ0QsZUFDSSxtQkFDdEIiLCJmaWxlIjoiY29tcG9uZW50cy9zaWRlYmFyL1NpZGUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYWJoaW5hdi9MRUFSTklOR19GSUxFUy9mb29kX29yZGVyaW5nX3N5c3RlbS9mcm9udCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFNpZGUgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPSdtYWluJz5cbiAgICAgICAgICAgICAgICA8c2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIG5hbWU9J21jJz5NYWluIENvdXJzZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIG5hbWU9J3NuJz5TbmFja3M8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBuYW1lPSdkZXMnPkRlc3NlcnQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD48YnIvPjxici8+PGJyLz48YnIvPjxici8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyB2YWx1ZT0ndmVnJy8+VmVnPGJyLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIHZhbHVlPSdub252ZWcnLz5Ob24tVmVnPGJyLz48YnIvPjxici8+PGJyLz48YnIvPjxici8+XG4gICAgICAgICAgICAgICAgPHNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBuYW1lPSdpbmQnPkluZGlhbjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIG5hbWU9J2NoaSc+Q2hpbmVzZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICNtYWlue1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyMzAsMTg3LDk4LDAuNSk7XG4gICAgICAgICAgICAgICAgd2lkdGg6MTBlbTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjFlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDoycHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDoycHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206MnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFNpZGU7Il19 */\n/*@ sourceURL=components/sidebar/Side.js */"
      }));
    }
  }]);

  return Side;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Side);

/***/ })

})
//# sourceMappingURL=4.381b813b840b6415bbff.hot-update.js.map