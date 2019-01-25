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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);


/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/Resumecomponent.jsx


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 5rem 3rem;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 300;\n  font-size: 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n\n  .name {\n    font-size: 2.5em;\n    margin-bottom: 1rem;\n    font-family: \"Stardos Stencil\", cursive;\n  }\n\n  .subheading {\n    font-size: 2em;\n    margin: 1rem 0;\n    font-family: \"Stardos Stencil\", cursive;\n  }\n\n  p {\n    margin: 0.5rem 0;\n    width: 80%;\n  }\n\n  .bold,\n  strong {\n    font-family: \"Stardos Stencil\", cursive;\n  }\n\n  .bottomBorder {\n    border-bottom: 1px solid black;\n    padding-bottom: 0.5rem;\n    display: inline-block;\n  }\n\n  .tagContainer {\n    margin-top: -1rem;\n    display: flex;\n    flex-direction: row;\n    font-size: 1.5rem;\n    flex-wrap: wrap;\n\n    li {\n      background-color: #f5f5f5;\n      display: inline-block;\n      padding: 1rem;\n      border-radius: 4px;\n      margin: 1rem;\n      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n      transition: all 0.2s;\n\n      &:hover {\n        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),\n          0 10px 10px rgba(0, 0, 0, 0.22);\n      }\n    }\n  }\n\n  .skills {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n\n    .skill-box {\n      min-width: 40%;\n      margin: 1rem 3rem 1rem 0;\n      border-radius: 4px;\n      background-color: #f7f7f7;\n      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n      transition: all 0.2s;\n\n      &:hover {\n        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),\n          0 10px 10px rgba(0, 0, 0, 0.22);\n      }\n      &__skill {\n        padding: 1rem 2.5rem;\n      }\n      &__skill:nth-child(even) {\n        background-color: #fcfcfc;\n      }\n    }\n  }\n\n  .latest--projects {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n  }\n\n  .project--box {\n    background-color: #f7f7f7;\n    padding: 2rem;\n    margin: 2rem;\n    border-radius: 4px;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: all 0.2s;\n\n    &:hover {\n      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),\n        0 10px 10px rgba(0, 0, 0, 0.22);\n    }\n  }\n\n  @media screen and (max-width: 1400px) {\n    width: 100%;\n  }\n\n  @media screen and (max-width: 1000px) {\n    width: 100%;\n  }\n\n  @media screen and (max-width: 700px) {\n    p {\n      width: 100%;\n    }\n    .skills {\n      flex-direction: column;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var StyledResume = external_styled_components_default.a.div(_templateObject());

var Resumecomponent_Resumecomponent = function Resumecomponent() {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("section", {
    style: {
      overflowY: "scroll",
      maxHeight: "100vh"
    }
  }, external_react_default.a.createElement(StyledResume, null, external_react_default.a.createElement("h1", {
    className: "name"
  }, "Aiden Campbell"), external_react_default.a.createElement("ul", {
    className: "tagContainer"
  }, external_react_default.a.createElement("li", null, "FULL-STACK DEVELOPER"), external_react_default.a.createElement("li", null, "UTC+1"), external_react_default.a.createElement("li", null, "Krakow"), external_react_default.a.createElement("li", null, "EN"), external_react_default.a.createElement("li", null, "PL"), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
    href: "https://bravelab.io",
    target: "_blank"
  }, "Bravelab"))), external_react_default.a.createElement("p", null, "Hey there! I am a self-motivated web developer. Ambitious & problem-solving. From New York, currently in Krakow."), external_react_default.a.createElement("p", null, external_react_default.a.createElement("strong", null, "Education:"), " MBA Candidate, BBA"), external_react_default.a.createElement("p", null, external_react_default.a.createElement("strong", null, "Languages:"), " English, Polish"), external_react_default.a.createElement("p", null, external_react_default.a.createElement("strong", null, "Visited:"), " \uD83C\uDDFA\uD83C\uDDF8 \uD83C\uDDF5\uD83C\uDDF1 \uD83C\uDDEF\uD83C\uDDF5 \uD83C\uDDF2\uD83C\uDDFD \uD83C\uDDF9\uD83C\uDDED \uD83C\uDDE9\uD83C\uDDEA \uD83C\uDDEB\uD83C\uDDF7 \uD83C\uDDF3\uD83C\uDDF1 \uD83C\uDDED\uD83C\uDDFA"), external_react_default.a.createElement("h2", {
    className: "subheading"
  }, "Skills"), external_react_default.a.createElement("div", {
    className: "skills"
  }, external_react_default.a.createElement("ul", {
    className: "skill-box"
  }, external_react_default.a.createElement("li", {
    className: "bold skill-box__skill"
  }, "FRONTEND"), external_react_default.a.createElement("li", {
    className: "skill-box__skill"
  }, "Javascript/ES.Next/TypeScript"), external_react_default.a.createElement("li", {
    className: "skill-box__skill"
  }, "React/Next.js"), external_react_default.a.createElement("li", {
    className: "skill-box__skill"
  }, "Redux/Apollo"), external_react_default.a.createElement("li", {
    className: "skill-box__skill"
  }, "SASS"), external_react_default.a.createElement("li", {
    className: "skill-box__skill"
  }, "Webpack/Parcel/NPM")), external_react_default.a.createElement("ul", {
    className: "skill-box"
  }, external_react_default.a.createElement("li", {
    className: "bold skill-box__skill"
  }, "BACKEND"), external_react_default.a.createElement("li", {
    className: "skill-box__skill"
  }, "Node.js"), external_react_default.a.createElement("li", {
    className: "skill-box__skill"
  }, "Express.js"), external_react_default.a.createElement("li", {
    className: "skill-box__skill"
  }, "Apollo Server"), external_react_default.a.createElement("li", {
    className: "skill-box__skill"
  }, "GraphQL/REST"), external_react_default.a.createElement("li", {
    className: "skill-box__skill"
  }, "MySQL/MongoDB"))), external_react_default.a.createElement("p", {
    className: "infoBox"
  }, external_react_default.a.createElement("strong", null, "Want to learn"), ": GatsbyJS"), external_react_default.a.createElement("h2", {
    className: "subheading"
  }, "Latest Projects"), external_react_default.a.createElement("div", {
    className: "latest--projects"
  }, external_react_default.a.createElement("div", {
    className: "project--box"
  }, external_react_default.a.createElement("h3", {
    className: "bold bottomBorder"
  }, external_react_default.a.createElement("a", {
    href: "https://mclinica.com/",
    target: "_blank"
  }, "mClinica (SwipeRX)")), external_react_default.a.createElement("p", null, external_react_default.a.createElement("strong", null, "Role:"), " Fullstack developer"), external_react_default.a.createElement("div", {
    className: "stack-n-scope"
  }, external_react_default.a.createElement("div", {
    className: "stack-n-scope__section"
  }, external_react_default.a.createElement("p", null, external_react_default.a.createElement("strong", null, "Frontend:"), " React, Redux, Typescript, ", external_react_default.a.createElement("br", null), " ", "Webpack, Styled-Components, Moment.JS, React Router"), external_react_default.a.createElement("p", null, external_react_default.a.createElement("strong", null, "Backend:"), " Node, Warp, Express, Sentry"), external_react_default.a.createElement("p", null, external_react_default.a.createElement("strong", null, "Server:"), " MySQL, Azure, Papertrail")))), external_react_default.a.createElement("div", {
    className: "project--box"
  }, external_react_default.a.createElement("h3", {
    className: "bold bottomBorder"
  }, external_react_default.a.createElement("a", {
    href: "https://www.imssensory.com/en/rd/",
    target: "_blank"
  }, "IMS r&d (MapMaker)")), external_react_default.a.createElement("p", null, external_react_default.a.createElement("strong", null, "Role:"), " Frontend developer"), external_react_default.a.createElement("div", {
    className: "stack-n-scope"
  }, external_react_default.a.createElement("div", {
    className: "stack-n-scope__section"
  }, external_react_default.a.createElement("p", null, external_react_default.a.createElement("strong", null, "Frontend:"), " Angular 4, RxJs, Typescript, ", external_react_default.a.createElement("br", null), " ", "Webpack, Leaflet, OpenStreetMap"), external_react_default.a.createElement("p", null, external_react_default.a.createElement("strong", null, "Backend:"), " Django, Sentry"), external_react_default.a.createElement("p", null, external_react_default.a.createElement("strong", null, "Server:"), " MySQL"))))))));
};

/* harmony default export */ var components_Resumecomponent = (Resumecomponent_Resumecomponent);
// CONCATENATED MODULE: ./pages/resume.jsx



var resume_Resume = function Resume(props) {
  return external_react_default.a.createElement(components_Resumecomponent, null);
};

/* harmony default export */ var resume = __webpack_exports__["default"] = (resume_Resume);

/***/ })

/******/ });