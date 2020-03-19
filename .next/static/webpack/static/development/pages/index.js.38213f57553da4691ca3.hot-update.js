webpackHotUpdate("static/development/pages/index.js",{

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/ubuntu/Desktop/namlong/nextjs-app/config.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
var theme = {
  primary: "#ffc600",
  linkComments: [{
    id: 0,
    asLink: "first-comment",
    content: __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: undefined
    }, "Hello First comment"),
    href: "/post/[id]/[comment]"
  }, {
    id: 2,
    asLink: "second-comment",
    content: __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: undefined
    }, "Hello Second comment"),
    href: "/post/[id]/[comment]"
  }],
  routers: [{
    groupId: 0,
    text: "Routing",
    subRouters: [{
      id: 0,
      href: "/post/",
      text: "Dynamic routers"
    }, {
      id: 1,
      href: "/catch-all-routing/",
      text: "Catch all routers"
    }]
  }, {
    groupId: 1,
    text: "asdasdsadsadsad",
    subRouters: [{
      id: 0,
      href: "/post/",
      text: "Dynamic routers"
    }, {
      id: 1,
      href: "/catch-all-routing/",
      text: "Catch all routers"
    }]
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

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
  }, "Welcome to Next.js!", __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Menu"), _renderRouters(routers));
}

var _renderRouters = function _renderRouters(routers) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isShow = _useState[0],
      setToggle = _useState[1];

  if (!lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isEmpty(routers)) {
    return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(routers, function (group, idxGroup) {
      return __jsx("div", {
        key: idxGroup,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, __jsx("h3", {
        onClick: function onClick() {
          return setToggle(true);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(group, "text")), isShow && __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, !lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isEmpty(group.subRouters) && lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(group.subRouters, function (router, index) {
        return __jsx("li", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(router, "href"),
          as: "".concat(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(router, "href")).concat(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(router, "id")),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(router, "text")));
      })));
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=index.js.38213f57553da4691ca3.hot-update.js.map