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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/ubuntu/Desktop/namlong/nextjs-app/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var routers = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(_config__WEBPACK_IMPORTED_MODULE_2__["default"], "routers");

function HomePage() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Menu"), RenderRouters(routers));
}

var RenderRouters = function RenderRouters(routers) {
  if (!lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isEmpty(routers)) {
    return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(routers, RenderGroup);
  } else {
    return undefined;
  }
};

var RenderGroup = function RenderGroup(group, idxGroup) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isShow = _useState[0],
      setToggle = _useState[1];

  return __jsx("div", {
    key: idxGroup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("h3", {
    onClick: function onClick() {
      return setToggle(!isShow);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, isShow ? " - " : " + ", " ", lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(group, "text")), isShow && __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, !lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isEmpty(group.subRouters) && lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(group.subRouters, function (router, index) {
    return __jsx("li", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(router, "href"),
      as: "".concat(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(router, "href")).concat(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(router, "id")),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(router, "text")));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=index.js.483c1e0a592f22ea3331.hot-update.js.map