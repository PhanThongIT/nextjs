webpackHotUpdate("static/development/pages/catch-all-routing/[...params].js",{

/***/ "./pages/catch-all-routing/[...params].js":
/*!************************************************!*\
  !*** ./pages/catch-all-routing/[...params].js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/ubuntu/Desktop/namlong/nextjs-app/pages/catch-all-routing/[...params].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Comment = function Comment() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var params = router.query.params || [];
  console.log("Catch all routing: ", router);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Slug: ", params.join("/")), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "-----Render list params-----"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, _renderListParams(params)));
};

var _renderListParams = function _renderListParams(params) {
  if (!lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isEmpty(params)) {
    return lodash__WEBPACK_IMPORTED_MODULE_2___default.a.map(params, function (item, index) {
      return __jsx("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "Param ", index, ": ", item);
    });
  } else {
    return undefined;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Comment);

/***/ })

})
//# sourceMappingURL=[...params].js.24d7efa1f656dce8947b.hot-update.js.map