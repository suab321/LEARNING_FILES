webpackHotUpdate(4,{

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
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get('http://localhost:3002');
  };

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "main",
    onClick: cart_save,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-1409188970"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "outer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-1409188970"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-1409188970"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: props.url,
    height: "200px",
    width: "200px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: "jsx-1409188970"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    id: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    className: "jsx-1409188970"
  }, props.name), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    className: "jsx-1409188970"
  }, props.category), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    className: "jsx-1409188970"
  }, props.price))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1409188970",
    css: "#main.jsx-1409188970{display:inline-block;padding-top:5px;margin-left:5px;}#inner.jsx-1409188970{border:1px solid black;padding-top:2px;width:210px;border-radius:10px;text-align:center;cursor:pointer;-webkit-transition=transform:1s;-webkit-transition=transform:1s;transition=transform:1s;}#inner.jsx-1409188970:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}#inner.jsx-1409188970:active{-webkit-transform:scale(0.9);-ms-transform:scale(0.9);transform:scale(0.9);}#name.jsx-1409188970{font:sans-serif;font-size:1.5em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYm94L0JveC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlb0IsQUFJcUMsQUFLRSxBQVNGLEFBS3pCLEFBRW9CLGdCQUNDLEtBckJELEVBS0MsU0FpQnBCLEtBckJtQixFQUtILFlBQ08sRUFMdkIsaUJBTXNCLEtBT3RCLEFBR0EsYUFUbUIsZUFDUSx3RkFDM0IiLCJmaWxlIjoiY29tcG9uZW50cy9ib3gvQm94LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2FiaGluYXYvTEVBUk5JTkdfRklMRVMvZm9vZF9vcmRlcmluZ19zeXN0ZW0vZnJvbnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5jb25zdCBCb3g9KHByb3BzKT0+e1xuXG4gICAgICAgIGNvbnN0IGNhcnRfc2F2ZT0oKT0+e2F4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAyJyl9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgaWQ9J21haW4nIG9uQ2xpY2s9e2NhcnRfc2F2ZX0+XG4gICAgICAgIDxkaXYgaWQ9J291dGVyJz5cbiAgICAgICAgPGRpdiBpZD0naW5uZXInPlxuICAgICAgICA8aW1nIHNyYz17cHJvcHMudXJsfSBoZWlnaHQ9XCIyMDBweFwiIHdpZHRoPScyMDBweCcvPlxuICAgICAgIDxwIGlkPSduYW1lJz57cHJvcHMubmFtZX08L3A+XG4gICAgICAgPHA+e3Byb3BzLmNhdGVnb3J5fTwvcD5cbiAgICAgICAgPHA+e3Byb3BzLnByaWNlfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgICAgICNtYWlue1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOjVweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDo1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjaW5uZXJ7XG4gICAgICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj10cmFuc2Zvcm0gMXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjaW5uZXI6aG92ZXJ7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDEuMSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjaW5uZXI6YWN0aXZle1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpzY2FsZSgwLjkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjbmFtZXtcbiAgICAgICAgICAgICAgICBmb250OnNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5leHBvcnQgZGVmYXVsdCBCb3giXX0= */\n/*@ sourceURL=components/box/Box.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Box);

/***/ })

})
//# sourceMappingURL=4.546dd4e0dfeb4c841f80.hot-update.js.map