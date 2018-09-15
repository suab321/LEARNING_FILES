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
  __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get('http://localhost:3002/cookie').then(function (response) {
    __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get("http://localhost:3002/cart/get_placed_order/".concat(response.data)).then(function (response) {
      data = response.data;
      console.log(response.data);
    });
  });
  console.log(data);
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    className: "jsx-3346017477"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_link___default.a, {
    href: "/details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "yes"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3346017477",
    css: "#main.jsx-3346017477:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}#main.jsx-3346017477:active{-webkit-transform:scale(0.9);-ms-transform:scale(0.9);transform:scale(0.9);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL09yZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCYSxBQUdxQyxBQUdBLDJFQUZ4QixBQUdBIiwiZmlsZSI6InBhZ2VzL09yZGVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2FiaGluYXYvTEVBUk5JTkdfRklMRVMvZm9vZF9vcmRlcmluZ19zeXN0ZW0vZnJvbnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgT3JkZXJfaXRlbXMgZnJvbSAnLi4vY29tcG9uZW50cy9vcmRlcl9pdGVtL09yZGVyX2l0ZW0nXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5heGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHM9dHJ1ZTtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgT3JkZXI9KCk9PntcbiAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMi9jb29raWUnKS50aGVuKHJlc3BvbnNlPT57XG4gICAgICAgIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDozMDAyL2NhcnQvZ2V0X3BsYWNlZF9vcmRlci8ke3Jlc3BvbnNlLmRhdGF9YClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2U9PntcbiAgICAgICAgICAgIGRhdGE9cmVzcG9uc2UuZGF0YVxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgfSlcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICBcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgaWQ9J21haW4nPjxMaW5rIGhyZWY9Jy9kZXRhaWxzJz55ZXM8L0xpbms+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgI21haW46aG92ZXJ7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDEuMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjbWFpbjphY3RpdmV7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDAuOSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE9yZGVyOyJdfQ== */\n/*@ sourceURL=pages/Order.js */"
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
//# sourceMappingURL=8.e49ef0ec4eb72b3276c9.hot-update.js.map