webpackHotUpdate("static/development/pages/post/[id].js",{

/***/ "./pages/post/[id]/index.js":
/*!**********************************!*\
  !*** ./pages/post/[id]/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config */ "./config.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/ubuntu/Desktop/namlong/nextjs-app/pages/post/[id]/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var linkComments = lodash__WEBPACK_IMPORTED_MODULE_4___default.a.get(_config__WEBPACK_IMPORTED_MODULE_3__["default"], "linkComments");

var Post = function Post() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var id = router.query.id;
  console.log("Router object: ", router);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Post: ", id), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, _renderLinkComment(id)));
};

var _renderLinkComment = function _renderLinkComment(id) {
  if (!lodash__WEBPACK_IMPORTED_MODULE_4___default.a.isEmpty(linkComments)) {
    return lodash__WEBPACK_IMPORTED_MODULE_4___default.a.map(linkComments, function (item, index) {
      return __jsx("li", {
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: lodash__WEBPACK_IMPORTED_MODULE_4___default.a.get(item, "href"),
        as: "/post/".concat(id, "/").concat(lodash__WEBPACK_IMPORTED_MODULE_4___default.a.get(item, "asLink")),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, lodash__WEBPACK_IMPORTED_MODULE_4___default.a.get(item, "content")));
    });
  } else {
    return undefined;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=[id].js.ea7c287e5ce5d81cdb3d.hot-update.js.map