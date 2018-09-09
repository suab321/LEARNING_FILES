webpackHotUpdate(4,{

/***/ "./components/box/Box.js":
false,

/***/ "./components/boxlist/Boxlist.js":
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: /home/abhinav/LEARNING_FILES/food_ordering_system/front/components/boxlist/Boxlist.js: Unexpected token, expected \";\" (4:5)\n\n  2 | import React,{Component} from 'react'\n  3 | \n> 4 | clas Boxlist extends Component{\n    |      ^\n  5 |     \n  6 |     constructor(props){\n  7 |         super(props)\n    at _class.raise (/home/abhinav/LEARNING_FILES/food_ordering_system/front/node_modules/babylon/lib/index.js:778:15)\n    at _class.unexpected (/home/abhinav/LEARNING_FILES/food_ordering_system/front/node_modules/babylon/lib/index.js:2063:16)\n    at _class.semicolon (/home/abhinav/LEARNING_FILES/food_ordering_system/front/node_modules/babylon/lib/index.js:2047:40)\n    at _class.parseExpressionStatement (/home/abhinav/LEARNING_FILES/food_ordering_system/front/node_modules/babylon/lib/index.js:4439:10)\n    at _class.parseStatementContent (/home/abhinav/LEARNING_FILES/food_ordering_system/front/node_modules/babylon/lib/index.js:4045:19)\n    at _class.parseStatement (/home/abhinav/LEARNING_FILES/food_ordering_system/front/node_modules/babylon/lib/index.js:3926:17)\n    at _class.parseBlockOrModuleBlockBody (/home/abhinav/LEARNING_FILES/food_ordering_system/front/node_modules/babylon/lib/index.js:4470:23)\n    at _class.parseBlockBody (/home/abhinav/LEARNING_FILES/food_ordering_system/front/node_modules/babylon/lib/index.js:4457:10)\n    at _class.parseTopLevel (/home/abhinav/LEARNING_FILES/food_ordering_system/front/node_modules/babylon/lib/index.js:3902:10)\n    at _class.parse (/home/abhinav/LEARNING_FILES/food_ordering_system/front/node_modules/babylon/lib/index.js:5250:17)\n    at parse (/home/abhinav/LEARNING_FILES/food_ordering_system/front/node_modules/babylon/lib/index.js:9972:38)\n    at parser (/home/abhinav/LEARNING_FILES/food_ordering_system/front/node_modules/@babel/core/lib/transformation/normalize-file.js:106:33)\n    at normalizeFile (/home/abhinav/LEARNING_FILES/food_ordering_system/front/node_modules/@babel/core/lib/transformation/normalize-file.js:53:11)\n    at runSync (/home/abhinav/LEARNING_FILES/food_ordering_system/front/node_modules/@babel/core/lib/transformation/index.js:34:41)\n    at runAsync (/home/abhinav/LEARNING_FILES/food_ordering_system/front/node_modules/@babel/core/lib/transformation/index.js:25:14)\n    at /home/abhinav/LEARNING_FILES/food_ordering_system/front/node_modules/@babel/core/lib/transform.js:32:34");

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_navbar_Navbar__ = __webpack_require__("./components/navbar/Navbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_boxlist_Boxlist__ = __webpack_require__("./components/boxlist/Boxlist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_boxlist_Boxlist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_boxlist_Boxlist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_sidebar_Side__ = __webpack_require__("./components/sidebar/Side.js");
var _jsxFileName = "/home/abhinav/LEARNING_FILES/food_ordering_system/front/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Home =
/*#__PURE__*/
function (_Component) {
  _inherits(Home, _Component);

  function Home(props) {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_boxlist_Boxlist__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }));
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.46566a149f809e4e66c9.hot-update.js.map