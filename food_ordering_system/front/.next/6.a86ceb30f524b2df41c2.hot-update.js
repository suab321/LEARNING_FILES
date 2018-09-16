webpackHotUpdate(6,{

/***/ "./components/boxlist/Boxlist.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__box_Box__ = __webpack_require__("./components/box/Box.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
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

  function Boxlist(props) {
    var _this;

    _classCallCheck(this, Boxlist);

    _this = _possibleConstructorReturn(this, (Boxlist.__proto__ || Object.getPrototypeOf(Boxlist)).call(this, props));
    _this.state = {
      data: []
    };
    __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get('http://localhost:3002/food').then(function (response) {
      _this.setState({
        data: response.data
      });
    });
    return _this;
  }

  _createClass(Boxlist, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var boxes1 = this.state.data.filter(function (item) {
        if (item.category === _this2.props.category) return item;
      });
      var boxes2 = boxes1.filter(function (item) {
        if (item.type === _this2.props.cui) return item;
      });
      var boxes3 = boxes2.filter(function (item) {
        if (item.gene === _this2.props.rel) return item;
      });

      if (this.props.search != '') {
        boxes3 = boxes3.filter(function (item) {
          return item.name.toLowerCase().includes(_this2.props.search.toLowerCase());
        });
      }

      console.log(boxes3);
      var boxe = boxes3.map(function (item) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__box_Box__["a" /* default */], {
          name: item.name,
          price: item.price,
          url: item.url,
          category: item.category,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        });
      });
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        id: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        className: "jsx-2094692826"
      }, boxe, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2094692826",
        css: "#main.jsx-2094692826{margin-right:1.5em;padding-top:2.5em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYm94bGlzdC9Cb3hsaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDaUIsQUFDd0IsbUJBQWlCLGtCQUFDIiwiZmlsZSI6ImNvbXBvbmVudHMvYm94bGlzdC9Cb3hsaXN0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2FiaGluYXYvTEVBUk5JTkdfRklMRVMvZm9vZF9vcmRlcmluZ19zeXN0ZW0vZnJvbnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQm94IGZyb20gJy4uL2JveC9Cb3gnO1xuaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuXG5jbGFzcyBCb3hsaXN0IGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGU9e2RhdGE6W119XG4gICAgICAgIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAyL2Zvb2QnKS50aGVuKHJlc3BvbnNlPT57dGhpcy5zZXRTdGF0ZSh7ZGF0YTpyZXNwb25zZS5kYXRhfSl9KVxuICAgICAgICBcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgbGV0IGJveGVzMT10aGlzLnN0YXRlLmRhdGEuZmlsdGVyKGl0ZW09PntcbiAgICAgICAgICAgIGlmKGl0ZW0uY2F0ZWdvcnk9PT10aGlzLnByb3BzLmNhdGVnb3J5KVxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtXG4gICAgICAgIH0pXG4gICAgICAgXG4gICAgICAgIGxldCBib3hlczI9Ym94ZXMxLmZpbHRlcihpdGVtPT57XG4gICAgICAgICAgICBpZihpdGVtLnR5cGU9PT10aGlzLnByb3BzLmN1aSlcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbVxuICAgICAgICB9KVxuICAgICAgIFxuICAgICAgIGxldCBib3hlczM9Ym94ZXMyLmZpbHRlcihpdGVtPT57XG4gICAgICAgICAgICBpZihpdGVtLmdlbmU9PT10aGlzLnByb3BzLnJlbClcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbVxuICAgICAgICB9KVxuICAgICAgICBpZih0aGlzLnByb3BzLnNlYXJjaCE9Jycpe1xuICAgICAgICAgICAgYm94ZXMzPWJveGVzMy5maWx0ZXIoaXRlbT0+e1xuICAgICAgICAgICAgICAgIHJldHVybihpdGVtLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0aGlzLnByb3BzLnNlYXJjaC50b0xvd2VyQ2FzZSgpKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKGJveGVzMylcbiAgICAgICAgY29uc3QgYm94ZT1ib3hlczMubWFwKGl0ZW09PntcbiAgICAgICAgICAgIHJldHVybig8Qm94IG5hbWU9e2l0ZW0ubmFtZX0gcHJpY2U9e2l0ZW0ucHJpY2V9IHVybD17aXRlbS51cmx9IGNhdGVnb3J5PXtpdGVtLmNhdGVnb3J5fS8+KVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGlkPSdtYWluJz5cbiAgICAgICAgICAgICAgICB7Ym94ZX1cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgI21haW57bWFyZ2luLXJpZ2h0OjEuNWVtO3BhZGRpbmctdG9wOjIuNWVtO31gfVxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIClcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBCb3hsaXN0Il19 */\n/*@ sourceURL=components/boxlist/Boxlist.js */"
      }));
    }
  }]);

  return Boxlist;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Boxlist);

/***/ })

})
//# sourceMappingURL=6.a86ceb30f524b2df41c2.hot-update.js.map