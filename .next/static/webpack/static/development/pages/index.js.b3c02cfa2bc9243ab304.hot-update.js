webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config.js");
var _jsxFileName = "/home/ubuntu/Desktop/namlong/nextjs-app/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var routers = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(_config__WEBPACK_IMPORTED_MODULE_2__["default"], "routers");

function HomePage() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Welcome to Next.js!", __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Menu"), _renderRouters(routers));
}

var _renderRouters = function _renderRouters(routers) {
  if (!lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isEmpty(routers)) {
    return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(routers, function (item, index) {
      return __jsx("li", {
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(item, "text"));
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=index.js.b3c02cfa2bc9243ab304.hot-update.js.map