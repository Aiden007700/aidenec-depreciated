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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);


/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/app"
var app_ = __webpack_require__(4);
var app_default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(3);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(5);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/util/Link.jsx
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var Link_ActiveLink = function ActiveLink(_ref) {
  var router = _ref.router,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["router", "children"]);

  var child = external_react_["Children"].only(children);
  var className = child.props.className || null;

  if (router.pathname === props.href && props.activeClassName) {
    className = "".concat(className !== null ? className : '', " ").concat(props.activeClassName).trim();
  }

  delete props.activeClassName;
  return external_react_default.a.createElement(link_default.a, props, external_react_default.a.cloneElement(child, {
    className: className
  }));
};

/* harmony default export */ var Link = (Object(router_["withRouter"])(Link_ActiveLink));
// CONCATENATED MODULE: ./components/Nav.jsx



var Nav_Nav = function Nav() {
  return external_react_default.a.createElement("header", {
    className: "header"
  }, external_react_default.a.createElement("nav", {
    className: "nav"
  }, external_react_default.a.createElement("img", {
    className: "nav__img",
    src: "static/img/me.jpg",
    alt: "#"
  }), external_react_default.a.createElement(Link, {
    activeClassName: "selected",
    href: "/"
  }, external_react_default.a.createElement("a", {
    className: "nav__item white"
  }, "About")), external_react_default.a.createElement(Link, {
    activeClassName: "selected",
    href: "/resume"
  }, external_react_default.a.createElement("a", {
    className: "nav__item white"
  }, "Resume")), external_react_default.a.createElement(Link, {
    activeClassName: "selected",
    href: "/work"
  }, external_react_default.a.createElement("a", {
    className: "nav__item white"
  }, " Portfolio")), external_react_default.a.createElement("div", {
    className: "social-media--box"
  }, external_react_default.a.createElement("a", {
    className: "nav__item white nav__icon",
    href: "https://linkedin.com/in/aidenec",
    target: "_blank"
  }, external_react_default.a.createElement("i", {
    className: "fab fa-linkedin-in"
  })), external_react_default.a.createElement("a", {
    className: "nav__icon white nav__item",
    href: "https://github.com/Aiden007700",
    target: "_blank"
  }, external_react_default.a.createElement("i", {
    className: "fab fa-github"
  })))), external_react_default.a.createElement("footer", {
    className: "header__contact-box"
  }, external_react_default.a.createElement("h2", null, "N:", external_react_default.a.createElement("span", {
    className: "highlite"
  }, " +48 515 817 829")), external_react_default.a.createElement("h2", null, "E:", external_react_default.a.createElement("span", {
    className: "highlite"
  }, external_react_default.a.createElement("a", {
    href: "mailto:campbell.e.aiden@gmail.com"
  }, " campbell.e.aiden@gmail.com")))));
};

/* harmony default export */ var components_Nav = (Nav_Nav);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(6);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/Head.jsx


/* harmony default export */ var Head = (function () {
  return external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, "AidenEC"), external_react_default.a.createElement("link", {
    rel: "stylesheet",
    href: "static/css/main.css"
  }), external_react_default.a.createElement("link", {
    rel: "icon",
    href: "static/favicon.ico",
    type: "image/x-icon"
  }), external_react_default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width"
  }), external_react_default.a.createElement("script", {
    src: "static/js/script.js"
  }), external_react_default.a.createElement("script", {
    defer: true,
    src: "static/js/fa-brands.min.js"
  }), external_react_default.a.createElement("script", {
    src: "static/js/fontawesome.min.js"
  }));
});
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/Footer.jsx


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: none !important;\n  padding: 1rem 2rem;\n  font-size: 2.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 100;\n  width: 100vw;\n  bottom: 0;\n  background-color: #fff;\n\n  @media screen and (max-width: 700px) {\n  .contact {\n    position: fixed;\n  }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var StyledFooter = external_styled_components_default.a.div(_templateObject());

var Footer_Footer = function Footer() {
  return external_react_default.a.createElement(StyledFooter, null, external_react_default.a.createElement("div", {
    className: "contact__info"
  }, external_react_default.a.createElement("h2", null, "N:", external_react_default.a.createElement("span", {
    className: "highlite"
  }, "+48 515 817 829")), external_react_default.a.createElement("h2", null, "E:", external_react_default.a.createElement("span", {
    className: "highlite"
  }, external_react_default.a.createElement("a", {
    href: "mailto:hello@aidenec.com"
  }, "hello@aidenec.com")))), external_react_default.a.createElement("div", {
    className: "contact__links"
  }, external_react_default.a.createElement("a", {
    className: "",
    href: "https://linkedin.com/in/aidenec",
    target: "_blank"
  }, external_react_default.a.createElement("i", {
    className: "fab fa-linkedin-in"
  })), external_react_default.a.createElement("a", {
    className: "",
    href: "https://github.com/Aiden007700",
    target: "_blank"
  }, external_react_default.a.createElement("i", {
    className: "fab fa-github"
  }))));
};

/* harmony default export */ var components_Footer = (Footer_Footer);
// CONCATENATED MODULE: ./components/Page.jsx
function Page_templateObject() {
  var data = Page_taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: 30% 1fr;\n  grid-template-rows: 50px 1fr;\n  min-height: 100vh;\n\n  .nav {\n    grid-column: 1 / 2;\n    grid-row: 1 / 3;\n  }\n\n  .content {\n    grid-column: 2 / 3;\n    grid-row: 1 / 3;\n  }\n\n  @media only screen and (max-width: 700px) {\n    .content {\n      grid-column: 1 / 3;\n      grid-row: 2 / 3;\n    }\n\n    .nav {\n      grid-column: 1 / 3;\n      grid-row: 1 / 2;\n    }\n  }\n"]);

  Page_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Page_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var Grid = external_styled_components_default.a.div(Page_templateObject());

var Page_Page = function Page(props) {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(Head, null), external_react_default.a.createElement(Grid, {
    className: "scroll-disable fade-out"
  }, external_react_default.a.createElement("div", {
    className: "nav"
  }, external_react_default.a.createElement(components_Nav, null)), external_react_default.a.createElement("div", {
    className: "content"
  }, props.children), external_react_default.a.createElement(components_Footer, null)));
};

/* harmony default export */ var components_Page = (Page_Page);
// CONCATENATED MODULE: ./pages/_app.jsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _app_MyApp; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var _app_MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyApp).apply(this, arguments));
  }

  _createClass(MyApp, [{
    key: "render",
    value: function render() {
      var Component = this.props.Component;
      return external_react_default.a.createElement(app_["Container"], null, external_react_default.a.createElement(components_Page, null, external_react_default.a.createElement(Component, null)));
    }
  }]);

  return MyApp;
}(app_default.a);



/***/ })
/******/ ]);