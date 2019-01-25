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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
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

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(19);


/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(3);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/WorkComponent/components/WorkCard.jsx


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    .back {\n        font-size: 3rem;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Detailview = external_styled_components_default.a.div(_templateObject());

var WorkCard_WorkCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(WorkCard, _React$Component);

  function WorkCard() {
    _classCallCheck(this, WorkCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(WorkCard).apply(this, arguments));
  }

  _createClass(WorkCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          i = _this$props.i,
          url = _this$props.url,
          selectActive = _this$props.selectActive;
      return external_react_default.a.createElement("div", {
        key: i,
        className: "portfolio__item i".concat(i + 1, " ").concat(active === i + 1 ? "active" : "not--active"),
        id: "".concat(i + 1)
      }, active === i + 1 ? external_react_default.a.createElement(Detailview, null, external_react_default.a.createElement("span", {
        className: "back",
        onClick: function onClick() {
          return selectActive(null);
        }
      }, "Back")) : external_react_default.a.createElement("div", {
        className: "portfolio__item__content",
        onClick: function onClick() {
          return selectActive(i + 1);
        }
      }, external_react_default.a.createElement("a", {
        href: url
      })));
    }
  }]);

  return WorkCard;
}(external_react_default.a.Component);

/* harmony default export */ var components_WorkCard = (WorkCard_WorkCard);
// CONCATENATED MODULE: ./components/WorkComponent/index.jsx


function WorkComponent_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { WorkComponent_typeof = function _typeof(obj) { return typeof obj; }; } else { WorkComponent_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return WorkComponent_typeof(obj); }

function WorkComponent_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function WorkComponent_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function WorkComponent_createClass(Constructor, protoProps, staticProps) { if (protoProps) WorkComponent_defineProperties(Constructor.prototype, protoProps); if (staticProps) WorkComponent_defineProperties(Constructor, staticProps); return Constructor; }

function WorkComponent_possibleConstructorReturn(self, call) { if (call && (WorkComponent_typeof(call) === "object" || typeof call === "function")) { return call; } return WorkComponent_assertThisInitialized(self); }

function WorkComponent_getPrototypeOf(o) { WorkComponent_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return WorkComponent_getPrototypeOf(o); }

function WorkComponent_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) WorkComponent_setPrototypeOf(subClass, superClass); }

function WorkComponent_setPrototypeOf(o, p) { WorkComponent_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return WorkComponent_setPrototypeOf(o, p); }

function WorkComponent_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = WorkComponent_taggedTemplateLiteral(["\n  .not--active:hover {\n    transform: scale(1.1);\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  }\n\n  .i1 {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 1;\n    grid-row-end: 2;\n  }\n\n  .i2 {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 1;\n    grid-row-end: 2;\n  }\n\n  .i3 {\n    grid-column-start: 3;\n    grid-column-end: 4;\n    grid-row-start: 1;\n    grid-row-end: 2;\n  }\n\n  .i4 {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 2;\n    grid-row-end: 3;\n  }\n\n  .i5 {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 2;\n    grid-row-end: 3;\n  }\n\n  .i6 {\n    grid-column-start: 3;\n    grid-column-end: 4;\n    grid-row-start: 2;\n    grid-row-end: 3;\n  }\n\n  .i7 {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 3;\n    grid-row-end: 4;\n  }\n\n  .i8 {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 3;\n    grid-row-end: 4;\n  }\n\n  .i9 {\n    grid-column-start: 3;\n    grid-column-end: 4;\n    grid-row-start: 3;\n    grid-row-end: 4;\n  }\n\n  .active {\n    z-index: 100;\n    grid-column: 1/4;\n    grid-row: 1/4;\n    transform: none;\n  }\n\n  @media screen and (max-width: 700px) {\n    .not--active:hover {\n      transform: none;\n      box-shadow: none;\n    }\n\n    .active {\n      z-index: 100;\n      height: 100vh;\n      width: 100vw;\n      transform: none;\n    }\n    .i1 {\n      grid-column-start: 1;\n      grid-column-end: 2;\n      grid-row-start: 1;\n      grid-row-end: 2;\n    }\n\n    .i2 {\n      grid-column-start: 1;\n      grid-column-end: 2;\n      grid-row-start: 2;\n      grid-row-end: 3;\n    }\n\n    .i3 {\n      grid-column-start: 1;\n      grid-column-end: 2;\n      grid-row-start: 3;\n      grid-row-end: 4;\n    }\n\n    .i4 {\n      grid-column-start: 1;\n      grid-column-end: 2;\n      grid-row-start: 4;\n      grid-row-end: 5;\n    }\n\n    .i5 {\n      grid-column-start: 1;\n      grid-column-end: 2;\n      grid-row-start: 5;\n      grid-row-end: 6;\n    }\n\n    .i6 {\n      grid-column-start: 1;\n      grid-column-end: 2;\n      grid-row-start: 6;\n      grid-row-end: 7;\n    }\n\n    .i7 {\n      grid-column-start: 1;\n      grid-column-end: 2;\n      grid-row-start: 7;\n      grid-row-end: 8;\n    }\n\n    .i8 {\n      grid-column-start: 1;\n      grid-column-end: 2;\n      grid-row-start: 8;\n      grid-row-end: 9;\n    }\n\n    .i9 {\n      grid-column-start: 1;\n      grid-column-end: 2;\n      grid-row-start: 9;\n      grid-row-end: 10;\n    }\n\n    .portfolio__item {\n      min-height: 20vh;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function WorkComponent_templateObject() {
  var data = WorkComponent_taggedTemplateLiteral(["\n  display: grid;\n  grid-template-rows: 1fr 1fr 1fr;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-row-gap: 3rem;\n  grid-column-gap: 3rem;\n\n  @media screen and (max-width: 700px) {\n    grid-template-rows: 1fr;\n    grid-template-columns: auto;\n    grid-row-gap: 1rem;\n    grid-column-gap: 1rem;\n  }\n"]);

  WorkComponent_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function WorkComponent_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Grid = external_styled_components_default.a.div(WorkComponent_templateObject());
var Section = external_styled_components_default.a.section(_templateObject2());
var WorkComponent_data = ["http://distracted-goldwasser-aaeb24.bitballoon.com/", "http://practical-wright-58b89a.bitballoon.com/", "#", "#", "http://nervous-mclean-17152f.bitballoon.com/", "#", "#", "#", "https://relaxed-poincare-7d9478.netlify.com/"];

var WorkComponent_WorkComponent =
/*#__PURE__*/
function (_React$Component) {
  WorkComponent_inherits(WorkComponent, _React$Component);

  function WorkComponent() {
    var _getPrototypeOf2;

    var _this;

    WorkComponent_classCallCheck(this, WorkComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = WorkComponent_possibleConstructorReturn(this, (_getPrototypeOf2 = WorkComponent_getPrototypeOf(WorkComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(WorkComponent_assertThisInitialized(WorkComponent_assertThisInitialized(_this)), "state", {
      active: null
    });

    _defineProperty(WorkComponent_assertThisInitialized(WorkComponent_assertThisInitialized(_this)), "selectActive", function (selection) {
      _this.setState({
        active: selection
      });
    });

    return _this;
  }

  WorkComponent_createClass(WorkComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var active = this.state.active;
      console.log(active, active === 4 ? "active" : "null");
      return external_react_default.a.createElement(Section, null, external_react_default.a.createElement(Grid, {
        className: "portfolio"
      }, WorkComponent_data.map(function (data, i) {
        return external_react_default.a.createElement(components_WorkCard, {
          selectActive: _this2.selectActive,
          active: active,
          url: data,
          i: i
        });
      })));
    }
  }]);

  return WorkComponent;
}(external_react_default.a.Component);

/* harmony default export */ var components_WorkComponent = (WorkComponent_WorkComponent);
// CONCATENATED MODULE: ./pages/work/index.jsx



var work_work = function work() {
  return external_react_default.a.createElement(components_WorkComponent, null);
};

/* harmony default export */ var pages_work = __webpack_exports__["default"] = (work_work);

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ })

/******/ });