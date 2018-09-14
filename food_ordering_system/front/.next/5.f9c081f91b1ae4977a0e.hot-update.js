webpackHotUpdate(5,{

/***/ "./components/box/Box.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
var _jsxFileName = "/home/abhinav/LEARNING_FILES/food_ordering_system/front/components/box/Box.js";




var Box = function Box(props) {
  var cart_save = function cart_save() {
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get('http://localhost:3002/cookie').then(function (response) {
      __WEBPACK_IMPORTED_MODULE_2_axios___default.a.put('http://localhost:3002/cart/add', {
        email: response.data,
        name: props.name,
        price: props.price,
        category: props.category,
        url: props.url
      });
    });
  };

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "main",
    onClick: cart_save,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    className: "jsx-1409188970"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "outer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    className: "jsx-1409188970"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    className: "jsx-1409188970"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: props.url,
    height: "200px",
    width: "200px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    className: "jsx-1409188970"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    id: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    className: "jsx-1409188970"
  }, props.name), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    className: "jsx-1409188970"
  }, props.category), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    className: "jsx-1409188970"
  }, props.price))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1409188970",
    css: "#main.jsx-1409188970{display:inline-block;padding-top:5px;margin-left:5px;}#inner.jsx-1409188970{border:1px solid black;padding-top:2px;width:210px;border-radius:10px;text-align:center;cursor:pointer;-webkit-transition=transform:1s;-webkit-transition=transform:1s;transition=transform:1s;}#inner.jsx-1409188970:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}#inner.jsx-1409188970:active{-webkit-transform:scale(0.9);-ms-transform:scale(0.9);transform:scale(0.9);}#name.jsx-1409188970{font:sans-serif;font-size:1.5em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYm94L0JveC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQm9CLEFBSXFDLEFBS0UsQUFTRixBQUt6QixBQUVvQixnQkFDQyxLQXJCRCxFQUtDLFNBaUJwQixLQXJCbUIsRUFLSCxZQUNPLEVBTHZCLGlCQU1zQixLQU90QixBQUdBLGFBVG1CLGVBQ1Esd0ZBQzNCIiwiZmlsZSI6ImNvbXBvbmVudHMvYm94L0JveC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9hYmhpbmF2L0xFQVJOSU5HX0ZJTEVTL2Zvb2Rfb3JkZXJpbmdfc3lzdGVtL2Zyb250Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuY29uc3QgQm94PShwcm9wcyk9PntcblxuICAgICAgICBjb25zdCBjYXJ0X3NhdmU9KCk9PntheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMi9jb29raWUnKS5cbiAgICAgICAgdGhlbihyZXNwb25zZT0+e1xuICAgICAgICAgICAgYXhpb3MucHV0KCdodHRwOi8vbG9jYWxob3N0OjMwMDIvY2FydC9hZGQnLHtlbWFpbDpyZXNwb25zZS5kYXRhLG5hbWU6cHJvcHMubmFtZSxwcmljZTpwcm9wcy5wcmljZSxjYXRlZ29yeTpwcm9wcy5jYXRlZ29yeSx1cmw6cHJvcHMudXJsfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgaWQ9J21haW4nIG9uQ2xpY2s9e2NhcnRfc2F2ZX0+XG4gICAgICAgIDxkaXYgaWQ9J291dGVyJz5cbiAgICAgICAgPGRpdiBpZD0naW5uZXInPlxuICAgICAgICA8aW1nIHNyYz17cHJvcHMudXJsfSBoZWlnaHQ9XCIyMDBweFwiIHdpZHRoPScyMDBweCcvPlxuICAgICAgIDxwIGlkPSduYW1lJz57cHJvcHMubmFtZX08L3A+XG4gICAgICAgPHA+e3Byb3BzLmNhdGVnb3J5fTwvcD5cbiAgICAgICAgPHA+e3Byb3BzLnByaWNlfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgICAgICNtYWlue1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOjVweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDo1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjaW5uZXJ7XG4gICAgICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj10cmFuc2Zvcm0gMXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjaW5uZXI6aG92ZXJ7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDEuMSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjaW5uZXI6YWN0aXZle1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpzY2FsZSgwLjkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjbmFtZXtcbiAgICAgICAgICAgICAgICBmb250OnNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5leHBvcnQgZGVmYXVsdCBCb3giXX0= */\n/*@ sourceURL=components/box/Box.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Box);

/***/ })

})
//# sourceMappingURL=5.f9c081f91b1ae4977a0e.hot-update.js.map