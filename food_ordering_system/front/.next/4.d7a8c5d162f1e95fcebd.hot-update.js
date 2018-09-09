webpackHotUpdate(4,{

/***/ "./components/boxlist/Boxlist.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__box_Box__ = __webpack_require__("./components/box/Box.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
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
    }];
    return _this;
  }

  _createClass(Boxlist, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var boxes = this.items.map(function (item) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__box_Box__["a" /* default */], {
          name: item.name,
          price: _this2.items.Price,
          url: 'sd',
          category: _this2.items.category,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        });
      });
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        id: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        className: "jsx-1508078048"
      }, boxes, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1508078048",
        css: "#main.jsx-1508078048{display:inline-block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYm94bGlzdC9Cb3hsaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCaUIsQUFFNkMscUJBQUMiLCJmaWxlIjoiY29tcG9uZW50cy9ib3hsaXN0L0JveGxpc3QuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYWJoaW5hdi9MRUFSTklOR19GSUxFUy9mb29kX29yZGVyaW5nX3N5c3RlbS9mcm9udCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCb3ggZnJvbSAnLi4vYm94L0JveCc7XG5pbXBvcnQgUmVhY3Qse0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBCb3hsaXN0IGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKClcbiAgICB0aGlzLml0ZW1zPVt7bmFtZTonR3VsYWIgSmFtdW4nLFByaWNlOjEwMCxjYXRlZ29yeTonZGVzZXJ0J30sXG4gICAge25hbWU6J0d1bGFiIEphbXVuJyxQcmljZToxMDAsY2F0ZWdvcnk6J2Rlc2VydCd9LFxuICAgIHtuYW1lOidHdWxhYiBKYW11bicsUHJpY2U6MTAwLGNhdGVnb3J5OidkZXNlcnQnfSxcbiAgICB7bmFtZTonR3VsYWIgSmFtdW4nLFByaWNlOjEwMCxjYXRlZ29yeTonZGVzZXJ0J30sXG4gICAge25hbWU6J0d1bGFiIEphbXVuJyxQcmljZToxMDAsY2F0ZWdvcnk6J2Rlc2VydCd9LFxuICAgIHtuYW1lOidHdWxhYiBKYW11bicsUHJpY2U6MTAwLGNhdGVnb3J5OidkZXNlcnQnfSxcbiAgICB7bmFtZTonR3VsYWIgSmFtdW4nLFByaWNlOjEwMCxjYXRlZ29yeTonZGVzZXJ0J30sXG4gICAge25hbWU6J0d1bGFiIEphbXVuJyxQcmljZToxMDAsY2F0ZWdvcnk6J2Rlc2VydCd9LFxuICAgIHtuYW1lOidHdWxhYiBKYW11bicsUHJpY2U6MTAwLGNhdGVnb3J5OidkZXNlcnQnfV1cblxufVxuICAgIHJlbmRlcigpe1xuICAgICAgICBjb25zdCBib3hlcz10aGlzLml0ZW1zLm1hcChpdGVtPT57XG4gICAgICAgICAgICByZXR1cm4oPEJveCBuYW1lPXtpdGVtLm5hbWV9IHByaWNlPXt0aGlzLml0ZW1zLlByaWNlfSB1cmw9eydzZCd9IGNhdGVnb3J5PXt0aGlzLml0ZW1zLmNhdGVnb3J5fS8+KVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGlkPSdtYWluJz5cbiAgICAgICAgICAgICAgICB7Ym94ZXN9XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAjbWFpbntkaXNwbGF5OmlubGluZS1ibG9ja31cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIClcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBCb3hsaXN0Il19 */\n/*@ sourceURL=components/boxlist/Boxlist.js */"
      }));
    }
  }]);

  return Boxlist;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Boxlist);

/***/ })

})
//# sourceMappingURL=4.d7a8c5d162f1e95fcebd.hot-update.js.map