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
      console.log(response.data);
    });
  });
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    className: "jsx-3346017477"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_link___default.a, {
    href: "/details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "yes"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3346017477",
    css: "#main.jsx-3346017477:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}#main.jsx-3346017477:active{-webkit-transform:scale(0.9);-ms-transform:scale(0.9);transform:scale(0.9);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL09yZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCYSxBQUdxQyxBQUdBLDJFQUZ4QixBQUdBIiwiZmlsZSI6InBhZ2VzL09yZGVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2FiaGluYXYvTEVBUk5JTkdfRklMRVMvZm9vZF9vcmRlcmluZ19zeXN0ZW0vZnJvbnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgT3JkZXJfaXRlbXMgZnJvbSAnLi4vY29tcG9uZW50cy9vcmRlcl9pdGVtL09yZGVyX2l0ZW0nXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5heGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHM9dHJ1ZTtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgT3JkZXI9KCk9PntcbiAgICB2YXIgZGF0YT1bXVxuICAgIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAyL2Nvb2tpZScpLnRoZW4ocmVzcG9uc2U9PntcbiAgICAgICAgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMwMDIvY2FydC9nZXRfcGxhY2VkX29yZGVyLyR7cmVzcG9uc2UuZGF0YX1gKVxuICAgICAgICAudGhlbihyZXNwb25zZT0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgfSlcbiAgICB9KVxuICAgXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGlkPSdtYWluJz48TGluayBocmVmPScvZGV0YWlscyc+eWVzPC9MaW5rPlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICNtYWluOmhvdmVye1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpzY2FsZSgxLjEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI21haW46YWN0aXZle1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpzY2FsZSgwLjkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBPcmRlcjsiXX0= */\n/*@ sourceURL=pages/Order.js */"
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
//# sourceMappingURL=8.9cc86c78422a87ea900d.hot-update.js.map