((window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./components/IndexComponent.jsx":
/*!***************************************!*\
  !*** ./components/IndexComponent.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/aiden/webdev/DoneProjectsFull/aidenec/components/IndexComponent.jsx";


var IndexComponent = function IndexComponent() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "heading__highlight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Aiden Campbell"), ",", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), " a ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "heading__highlight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Business Developer"), " ", "turned", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "heading__highlight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, " Web Developer"), "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "about__para",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "From New York, currently in Krakow."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexComponent);

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_e8427f5b250f425a56e7 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_e8427f5b250f425a56e7 */ "dll-reference dll_e8427f5b250f425a56e7"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_IndexComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/IndexComponent */ "./components/IndexComponent.jsx");
var _jsxFileName = "/home/aiden/webdev/DoneProjectsFull/aidenec/pages/index.jsx";



var index = function index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_IndexComponent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (index);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__NEXT_REGISTER_PAGE('/', function() {
module.exports = __webpack_require__(/*! ./pages/index.jsx */"./pages/index.jsx");

return { page: module.exports.default }});

/***/ }),

/***/ "dll-reference dll_e8427f5b250f425a56e7":
/*!*******************************************!*\
  !*** external "dll_e8427f5b250f425a56e7" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_e8427f5b250f425a56e7;

/***/ })

},[[4,"static/runtime/webpack.js"]]]));;
//# sourceMappingURL=index.js.map