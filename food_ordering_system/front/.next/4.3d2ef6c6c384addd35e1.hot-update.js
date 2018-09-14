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
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get('http://localhost:3002/cookie').then(function (response) {
      __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('http://localhost:3002/cart/add', {
        email: response.data,
        name: props.name,
        price: props.price,
        category: props.category
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
    css: "#main.jsx-1409188970{display:inline-block;padding-top:5px;margin-left:5px;}#inner.jsx-1409188970{border:1px solid black;padding-top:2px;width:210px;border-radius:10px;text-align:center;cursor:pointer;-webkit-transition=transform:1s;-webkit-transition=transform:1s;transition=transform:1s;}#inner.jsx-1409188970:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}#inner.jsx-1409188970:active{-webkit-transform:scale(0.9);-ms-transform:scale(0.9);transform:scale(0.9);}#name.jsx-1409188970{font:sans-serif;font-size:1.5em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYm94L0JveC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQm9CLEFBSXFDLEFBS0UsQUFTRixBQUt6QixBQUVvQixnQkFDQyxLQXJCRCxFQUtDLFNBaUJwQixLQXJCbUIsRUFLSCxZQUNPLEVBTHZCLGlCQU1zQixLQU90QixBQUdBLGFBVG1CLGVBQ1Esd0ZBQzNCIiwiZmlsZSI6ImNvbXBvbmVudHMvYm94L0JveC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9hYmhpbmF2L0xFQVJOSU5HX0ZJTEVTL2Zvb2Rfb3JkZXJpbmdfc3lzdGVtL2Zyb250Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuY29uc3QgQm94PShwcm9wcyk9PntcblxuICAgICAgICBjb25zdCBjYXJ0X3NhdmU9KCk9PntheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMi9jb29raWUnKS5cbiAgICAgICAgdGhlbihyZXNwb25zZT0+e1xuICAgICAgICAgICAgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAyL2NhcnQvYWRkJyx7ZW1haWw6cmVzcG9uc2UuZGF0YSxuYW1lOnByb3BzLm5hbWUscHJpY2U6cHJvcHMucHJpY2UsY2F0ZWdvcnk6cHJvcHMuY2F0ZWdvcnl9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBpZD0nbWFpbicgb25DbGljaz17Y2FydF9zYXZlfT5cbiAgICAgICAgPGRpdiBpZD0nb3V0ZXInPlxuICAgICAgICA8ZGl2IGlkPSdpbm5lcic+XG4gICAgICAgIDxpbWcgc3JjPXtwcm9wcy51cmx9IGhlaWdodD1cIjIwMHB4XCIgd2lkdGg9JzIwMHB4Jy8+XG4gICAgICAgPHAgaWQ9J25hbWUnPntwcm9wcy5uYW1lfTwvcD5cbiAgICAgICA8cD57cHJvcHMuY2F0ZWdvcnl9PC9wPlxuICAgICAgICA8cD57cHJvcHMucHJpY2V9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICAgICAgI21haW57XG4gICAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6NXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNpbm5lcntcbiAgICAgICAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAycHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIxMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXRyYW5zZm9ybSAxcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNpbm5lcjpob3ZlcntcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMS4xKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNpbm5lcjphY3RpdmV7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDAuOSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNuYW1le1xuICAgICAgICAgICAgICAgIGZvbnQ6c2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IEJveCJdfQ== */\n/*@ sourceURL=components/box/Box.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Box);

/***/ })

})
//# sourceMappingURL=4.3d2ef6c6c384addd35e1.hot-update.js.map