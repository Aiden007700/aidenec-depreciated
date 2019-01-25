module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Resumecomponent.jsx":
/*!****************************************!*\
  !*** ./components/Resumecomponent.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/aiden/webdev/DoneProjectsFull/aidenec/components/Resumecomponent.jsx";


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 5rem 3rem;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 300;\n  font-size: 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n\n  .name {\n    font-size: 2.5em;\n    margin-bottom: 1rem;\n    font-family: \"Stardos Stencil\", cursive;\n  }\n\n  .subheading {\n    font-size: 2em;\n    margin: 1rem 0;\n    font-family: \"Stardos Stencil\", cursive;\n  }\n\n  p {\n    margin: 0.5rem 0;\n    width: 80%;\n  }\n\n  .bold,\n  strong {\n    font-family: \"Stardos Stencil\", cursive;\n  }\n\n  .bottomBorder {\n    border-bottom: 1px solid black;\n    padding-bottom: 0.5rem;\n    display: inline-block;\n  }\n\n  .tagContainer {\n    margin-top: -1rem;\n    display: flex;\n    flex-direction: row;\n    font-size: 1.5rem;\n    flex-wrap: wrap;\n\n    li {\n      background-color: #f5f5f5;\n      display: inline-block;\n      padding: 1rem;\n      border-radius: 4px;\n      margin: 1rem;\n      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n      transition: all 0.2s;\n\n      &:hover {\n        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),\n          0 10px 10px rgba(0, 0, 0, 0.22);\n      }\n    }\n  }\n\n  .skills {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n\n    .skill-box {\n      min-width: 40%;\n      margin: 1rem 3rem 1rem 0;\n      border-radius: 4px;\n      background-color: #f7f7f7;\n      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n      transition: all 0.2s;\n\n      &:hover {\n        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),\n          0 10px 10px rgba(0, 0, 0, 0.22);\n      }\n      &__skill {\n        padding: 1rem 2.5rem;\n      }\n      &__skill:nth-child(even) {\n        background-color: #fcfcfc;\n      }\n    }\n  }\n\n  .latest--projects {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n  }\n\n  .project--box {\n    background-color: #f7f7f7;\n    padding: 2rem;\n    margin: 2rem;\n    border-radius: 4px;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: all 0.2s;\n\n    &:hover {\n      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),\n        0 10px 10px rgba(0, 0, 0, 0.22);\n    }\n  }\n\n  @media screen and (max-width: 1400px) {\n    width: 100%;\n  }\n\n  @media screen and (max-width: 1000px) {\n    width: 100%;\n  }\n\n  @media screen and (max-width: 700px) {\n    p {\n      width: 100%;\n    }\n    .skills {\n      flex-direction: column;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var StyledResume = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());

var Resumecomponent = function Resumecomponent() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    style: {
      overflowY: "scroll",
      maxHeight: "100vh"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledResume, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, "Aiden Campbell"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "tagContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "FULL-STACK DEVELOPER"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "UTC+1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, "Krakow"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, "EN"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "PL"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://bravelab.io",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "Bravelab"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "Hey there! I am a self-motivated web developer. Ambitious & problem-solving. From New York, currently in Krakow."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "Education:"), " MBA Candidate, BBA"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "Languages:"), " English, Polish"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "Visited:"), " \uD83C\uDDFA\uD83C\uDDF8 \uD83C\uDDF5\uD83C\uDDF1 \uD83C\uDDEF\uD83C\uDDF5 \uD83C\uDDF2\uD83C\uDDFD \uD83C\uDDF9\uD83C\uDDED \uD83C\uDDE9\uD83C\uDDEA \uD83C\uDDEB\uD83C\uDDF7 \uD83C\uDDF3\uD83C\uDDF1 \uD83C\uDDED\uD83C\uDDFA"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "subheading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, "Skills"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "skills",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "skill-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "bold skill-box__skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, "FRONTEND"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "skill-box__skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "Javascript/ES.Next/TypeScript"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "skill-box__skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, "React/Next.js"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "skill-box__skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, "Redux/Apollo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "skill-box__skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, "SASS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "skill-box__skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, "Webpack/Parcel/NPM")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "skill-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "bold skill-box__skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, "BACKEND"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "skill-box__skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, "Node.js"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "skill-box__skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, "Express.js"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "skill-box__skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, "Apollo Server"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "skill-box__skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, "GraphQL/REST"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "skill-box__skill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, "MySQL/MongoDB"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "infoBox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, "Want to learn"), ": GatsbyJS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "subheading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, "Latest Projects"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "latest--projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "project--box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "bold bottomBorder",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://mclinica.com/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, "mClinica (SwipeRX)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, "Role:"), " Fullstack developer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "stack-n-scope",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "stack-n-scope__section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, "Frontend:"), " React, Redux, Typescript, ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }), " ", "Webpack, Styled-Components, Moment.JS, React Router"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, "Backend:"), " Node, Warp, Express, Sentry"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, "Server:"), " MySQL, Azure, Papertrail")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "project--box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "bold bottomBorder",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.imssensory.com/en/rd/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, "IMS r&d (MapMaker)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, "Role:"), " Frontend developer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "stack-n-scope",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "stack-n-scope__section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, "Frontend:"), " Angular 4, RxJs, Typescript, ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }), " ", "Webpack, Leaflet, OpenStreetMap"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, "Backend:"), " Django, Sentry"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, "Server:"), " MySQL"))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Resumecomponent);

/***/ }),

/***/ "./pages/resume.jsx":
/*!**************************!*\
  !*** ./pages/resume.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Resumecomponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Resumecomponent */ "./components/Resumecomponent.jsx");
var _jsxFileName = "/home/aiden/webdev/DoneProjectsFull/aidenec/pages/resume.jsx";



var Resume = function Resume(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Resumecomponent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Resume);

/***/ }),

/***/ 4:
/*!********************************!*\
  !*** multi ./pages/resume.jsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/resume.jsx */"./pages/resume.jsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=resume.js.map