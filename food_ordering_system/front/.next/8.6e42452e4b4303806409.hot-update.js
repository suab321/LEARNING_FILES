webpackHotUpdate(8,{

/***/ "./pages/Order.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_order_item_Order_item__ = __webpack_require__("./components/order_item/Order_item.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_link__);
var _jsxFileName = "/home/abhinav/LEARNING_FILES/food_ordering_system/front/pages/Order.js";




__WEBPACK_IMPORTED_MODULE_3_axios___default.a.defaults.withCredentials = true;


var Order = function Order() {
  var data = [];
  __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get('http://localhost:3002/cookie').then(function (response) {
    __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get("http://localhost:3002/cart/get_placed_order/".concat(response.data)).then(function (response) {
      data = response.data;
    });
  });
  console.log(data);
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    className: "jsx-3346017477"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_link___default.a, {
    href: "/details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "yes"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3346017477",
    css: "#main.jsx-3346017477:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}#main.jsx-3346017477:active{-webkit-transform:scale(0.9);-ms-transform:scale(0.9);transform:scale(0.9);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL09yZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCYSxBQUdxQyxBQUdBLDJFQUZ4QixBQUdBIiwiZmlsZSI6InBhZ2VzL09yZGVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2FiaGluYXYvTEVBUk5JTkdfRklMRVMvZm9vZF9vcmRlcmluZ19zeXN0ZW0vZnJvbnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgT3JkZXJfaXRlbXMgZnJvbSAnLi4vY29tcG9uZW50cy9vcmRlcl9pdGVtL09yZGVyX2l0ZW0nXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5heGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHM9dHJ1ZTtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmNvbnN0IE9yZGVyPSgpPT57XG4gICAgbGV0IGRhdGE9W11cbiAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMi9jb29raWUnKS50aGVuKHJlc3BvbnNlPT57XG4gICAgICAgIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDozMDAyL2NhcnQvZ2V0X3BsYWNlZF9vcmRlci8ke3Jlc3BvbnNlLmRhdGF9YClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2U9PntcbiAgICAgICAgICAgIGRhdGE9cmVzcG9uc2UuZGF0YVxuICAgICAgICB9KVxuICAgIH0pXG4gICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBpZD0nbWFpbic+PExpbmsgaHJlZj0nL2RldGFpbHMnPnllczwvTGluaz5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAjbWFpbjpob3ZlcntcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMS4xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNtYWluOmFjdGl2ZXtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMC45KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgT3JkZXI7Il19 */\n/*@ sourceURL=pages/Order.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Order);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/Order")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=8.6e42452e4b4303806409.hot-update.js.map