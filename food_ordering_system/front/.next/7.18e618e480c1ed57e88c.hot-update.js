webpackHotUpdate(7,{

/***/ "./pages/cart.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_box_Box__ = __webpack_require__("./components/box/Box.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
var _jsxFileName = "/home/abhinav/LEARNING_FILES/food_ordering_system/front/pages/cart.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Cart =
/*#__PURE__*/
function (_Component) {
  _inherits(Cart, _Component);

  function Cart(props) {
    _classCallCheck(this, Cart);

    return _possibleConstructorReturn(this, (Cart.__proto__ || Object.getPrototypeOf(Cart)).call(this, props));
  }

  _createClass(Cart, [{
    key: "render",
    value: function render() {
      var items = [];
      var id = '';
      __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get('http://localhost:3002/cookie').then(function (response) {
        id = response.data;
      });
      console.log(id);
      __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get("http://localhost:3002/order/cart_food/".concat(id)).then(function (response) {
        items = response.data;
      });
      var box = items.map(function (item) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_box_Box__["a" /* default */], {
          name: item.name,
          price: item.price,
          category: item.category,
          url: item.url,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        });
      });
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        className: "jsx-3605367645"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        id: "main2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        className: "jsx-3605367645"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        id: "bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        className: "jsx-3605367645"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        id: "remove",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        className: "jsx-3605367645"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        className: "jsx-3605367645"
      }, "ClICK TO REMOVE ITEMS")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        id: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        className: "jsx-3605367645"
      }, "SUAB FOOD CENTER")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        id: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        className: "jsx-3605367645"
      }, this.box)), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        id: "main2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        className: "jsx-3605367645"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
        href: "/Order_placed",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        className: "jsx-3605367645"
      }, "Place Order"))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3605367645",
        css: "#bar.jsx-3605367645{background-color:rgba(230,0,0,0.1);padding-top:1px;text-align:center;height:150px;width:100%;position:fixed;display:inline-block;}#text.jsx-3605367645{padding-top:10px;font-size:3em;font-style:bold;color:rgba(0,230,0,0.9);}#main.jsx-3605367645{margin-right:5em;padding-top:15em;padding-left:10em;}#remove.jsx-3605367645{font-size:1em;color:black;}#main2.jsx-3605367645{position:absolute;}button.jsx-3605367645{position:fixed;margin-left:70em;margin-top:4em;font-size:1.5em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJ3QixBQUdtRCxBQVNsQixBQU1BLEFBTUgsQUFHTSxBQUVMLGNBSG5CLENBSXFCLEVBakJGLEFBTUUsQ0FRSSxRQUR4QixLQVpvQixDQWlCRixFQVhHLENBaEJELFlBWXJCLEFBZ0JvQixJQTNCRyxDQWdCdEIsV0FZQSxNQTNCaUIsRUFVakIsV0FUZSxXQUNHLGVBQ00scUJBQ3BCIiwiZmlsZSI6InBhZ2VzL2NhcnQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYWJoaW5hdi9MRUFSTklOR19GSUxFUy9mb29kX29yZGVyaW5nX3N5c3RlbS9mcm9udCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCb3ggZnJvbSAnLi4vY29tcG9uZW50cy9ib3gvQm94J1xuaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5jbGFzcyBDYXJ0IGV4dGVuZHMgQ29tcG9uZW50e1xuICAgXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbnJlbmRlcigpe1xuICAgIGxldCBpdGVtcz1bXVxuICAgIGxldCBpZD0nJztcbiAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMi9jb29raWUnKS50aGVuKHJlc3BvbnNlPT57aWQ9cmVzcG9uc2UuZGF0YX0pXG4gICAgY29uc29sZS5sb2coaWQpXG4gICAgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMwMDIvb3JkZXIvY2FydF9mb29kLyR7aWR9YClcbiAgICAudGhlbihyZXNwb25zZT0+e2l0ZW1zPXJlc3BvbnNlLmRhdGF9KVxuICAgIGNvbnN0IGJveD1pdGVtcy5tYXAoaXRlbT0+e3JldHVybig8Qm94IG5hbWU9e2l0ZW0ubmFtZX0gcHJpY2U9e2l0ZW0ucHJpY2V9IGNhdGVnb3J5PXtpdGVtLmNhdGVnb3J5fSB1cmw9e2l0ZW0udXJsfS8+KX0pXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGlkPSdtYWluMic+XG4gICAgICAgIDxkaXYgaWQ9J2Jhcic+XG4gICAgICAgIDxkaXYgaWQ9J3JlbW92ZSc+PHA+Q2xJQ0sgVE8gUkVNT1ZFIElURU1TPC9wPjwvZGl2PlxuXHRcdDxwIGlkPSd0ZXh0Jz5TVUFCIEZPT0QgQ0VOVEVSPC9wPlxuXHQgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPSdtYWluJz57dGhpcy5ib3h9PC9kaXY+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPSdtYWluMic+PExpbmsgaHJlZj0nL09yZGVyX3BsYWNlZCc+PGJ1dHRvbiA+UGxhY2UgT3JkZXI8L2J1dHRvbj48L0xpbms+PC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICNiYXJ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIzMCwwLDAsMC4xKTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMXB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOmZpeGVkO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICN0ZXh0e1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOjEwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzZW07XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogYm9sZDtcbiAgICAgICAgICAgICAgICBjb2xvcjpyZ2JhKDAsMjMwLDAsMC45KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI21haW57XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjVlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDoxNWVtO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDoxMGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAjcmVtb3Zle1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxZW07XG4gICAgICAgICAgICAgICAgY29sb3I6YmxhY2tcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNtYWluMntwb3NpdGlvbjphYnNvbHV0ZTt9XG4gICAgICAgICAgICBidXR0b257XG4gICAgICAgICAgICAgICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6NzBlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjRlbTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MS41ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbn1cbmV4cG9ydCBkZWZhdWx0IENhcnRcblxuIl19 */\n/*@ sourceURL=pages/cart.js */"
      }));
    }
  }]);

  return Cart;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Cart);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/cart")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=7.18e618e480c1ed57e88c.hot-update.js.map