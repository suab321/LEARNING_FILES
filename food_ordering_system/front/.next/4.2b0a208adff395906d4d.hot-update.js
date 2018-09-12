webpackHotUpdate(4,{

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
      console.log(boxes1);
      var boxes2 = boxes1.filter(function (item) {
        if (item.type === _this2.props.cui) return item;
      });
      console.log(boxes2);
      var boxes3 = boxes2.filter(function (item) {
        if (item.gene === _this2.props.rel) return item;
      });
      console.log(boxes3);
      var boxe = boxes3.map(function (item) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__box_Box__["a" /* default */], {
          name: item.name,
          price: item.price,
          url: item.url,
          category: item.category,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        });
      });
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        id: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        className: "jsx-952768916"
      }, boxe, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "952768916",
        css: "#main.jsx-952768916{margin-right:1.5em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYm94bGlzdC9Cb3hsaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9DaUIsQUFDd0IsbUJBQUMiLCJmaWxlIjoiY29tcG9uZW50cy9ib3hsaXN0L0JveGxpc3QuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYWJoaW5hdi9MRUFSTklOR19GSUxFUy9mb29kX29yZGVyaW5nX3N5c3RlbS9mcm9udCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCb3ggZnJvbSAnLi4vYm94L0JveCc7XG5pbXBvcnQgUmVhY3Qse0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5jbGFzcyBCb3hsaXN0IGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGU9e2RhdGE6W119XG4gICAgICAgIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAyL2Zvb2QnKS50aGVuKHJlc3BvbnNlPT57dGhpcy5zZXRTdGF0ZSh7ZGF0YTpyZXNwb25zZS5kYXRhfSl9KVxuICAgICAgICBcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgbGV0IGJveGVzMT10aGlzLnN0YXRlLmRhdGEuZmlsdGVyKGl0ZW09PntcbiAgICAgICAgICAgIGlmKGl0ZW0uY2F0ZWdvcnk9PT10aGlzLnByb3BzLmNhdGVnb3J5KVxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKGJveGVzMSlcbiAgICAgICAgbGV0IGJveGVzMj1ib3hlczEuZmlsdGVyKGl0ZW09PntcbiAgICAgICAgICAgIGlmKGl0ZW0udHlwZT09PXRoaXMucHJvcHMuY3VpKVxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKGJveGVzMilcbiAgICAgICBsZXQgYm94ZXMzPWJveGVzMi5maWx0ZXIoaXRlbT0+e1xuICAgICAgICAgICAgaWYoaXRlbS5nZW5lPT09dGhpcy5wcm9wcy5yZWwpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1cbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coYm94ZXMzKVxuICAgICAgICBjb25zdCBib3hlPWJveGVzMy5tYXAoaXRlbT0+e1xuICAgICAgICAgICAgcmV0dXJuKDxCb3ggbmFtZT17aXRlbS5uYW1lfSBwcmljZT17aXRlbS5wcmljZX0gdXJsPXtpdGVtLnVybH0gY2F0ZWdvcnk9e2l0ZW0uY2F0ZWdvcnl9Lz4pXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgaWQ9J21haW4nPlxuICAgICAgICAgICAgICAgIHtib3hlfVxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2AjbWFpbnttYXJnaW4tcmlnaHQ6MS41ZW07fWB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgKVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEJveGxpc3QiXX0= */\n/*@ sourceURL=components/boxlist/Boxlist.js */"
      }));
    }
  }]);

  return Boxlist;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Boxlist);

/***/ })

})
//# sourceMappingURL=4.2b0a208adff395906d4d.hot-update.js.map