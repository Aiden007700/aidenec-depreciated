webpackHotUpdate("static/development/pages/work.js",{

/***/ "./components/WorkComponent/index.jsx":
/*!********************************************!*\
  !*** ./components/WorkComponent/index.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_WorkCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/WorkCard */ "./components/WorkComponent/components/WorkCard.jsx");
var _jsxFileName = "/home/aiden/webdev/DoneProjectsFull/aidenec/components/WorkComponent/index.jsx";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  .not--active:hover {\n    transform: scale(1.1);\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  }\n\n  .portfolio__item__content a {\n    cursor: pointer;\n  }\n\n  .i1 {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 1;\n    grid-row-end: 2;\n  }\n\n  .i2 {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 1;\n    grid-row-end: 2;\n  }\n\n  .i3 {\n    grid-column-start: 3;\n    grid-column-end: 4;\n    grid-row-start: 1;\n    grid-row-end: 2;\n  }\n\n  .i4 {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 2;\n    grid-row-end: 3;\n  }\n\n  .i5 {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 2;\n    grid-row-end: 3;\n  }\n\n  .i6 {\n    grid-column-start: 3;\n    grid-column-end: 4;\n    grid-row-start: 2;\n    grid-row-end: 3;\n  }\n\n  .i7 {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 3;\n    grid-row-end: 4;\n  }\n\n  .i8 {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 3;\n    grid-row-end: 4;\n  }\n\n  .i9 {\n    grid-column-start: 3;\n    grid-column-end: 4;\n    grid-row-start: 3;\n    grid-row-end: 4;\n  }\n\n  .active {\n    z-index: 100;\n    grid-column: 1/4;\n    grid-row: 1/4;\n    transform: none;\n  }\n\n  @media screen and (max-width: 700px) {\n    .not--active:hover {\n      transform: none;\n      box-shadow: none;\n    }\n\n    .active {\n      z-index: 3;\n      height: 100vh;\n      width: 100vw;\n      transform: none;\n      position: fixed;\n      top: 0;\n      left: 0;\n      border-radius: 0;\n      padding: \n    }\n    .i1 {\n      grid-column-start: 1;\n      grid-column-end: 2;\n      grid-row-start: 1;\n      grid-row-end: 2;\n    }\n\n    .i2 {\n      grid-column-start: 1;\n      grid-column-end: 2;\n      grid-row-start: 2;\n      grid-row-end: 3;\n    }\n\n    .i3 {\n      grid-column-start: 1;\n      grid-column-end: 2;\n      grid-row-start: 3;\n      grid-row-end: 4;\n    }\n\n    .i4 {\n      grid-column-start: 1;\n      grid-column-end: 2;\n      grid-row-start: 4;\n      grid-row-end: 5;\n    }\n\n    .i5 {\n      grid-column-start: 1;\n      grid-column-end: 2;\n      grid-row-start: 5;\n      grid-row-end: 6;\n    }\n\n    .i6 {\n      grid-column-start: 1;\n      grid-column-end: 2;\n      grid-row-start: 6;\n      grid-row-end: 7;\n    }\n\n    .i7 {\n      grid-column-start: 1;\n      grid-column-end: 2;\n      grid-row-start: 7;\n      grid-row-end: 8;\n    }\n\n    .i8 {\n      grid-column-start: 1;\n      grid-column-end: 2;\n      grid-row-start: 8;\n      grid-row-end: 9;\n    }\n\n    .i9 {\n      grid-column-start: 1;\n      grid-column-end: 2;\n      grid-row-start: 9;\n      grid-row-end: 10;\n    }\n\n    .portfolio__item {\n      min-height: 20vh;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-rows: 1fr 1fr 1fr;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-row-gap: 3rem;\n  grid-column-gap: 3rem;\n\n  @media screen and (max-width: 700px) {\n    grid-template-rows: 1fr;\n    grid-template-columns: auto;\n    grid-row-gap: 1rem;\n    grid-column-gap: 1rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Grid = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var Section = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section(_templateObject2());
var data = ["http://distracted-goldwasser-aaeb24.bitballoon.com/", "http://practical-wright-58b89a.bitballoon.com/", "#", "#", "http://nervous-mclean-17152f.bitballoon.com/", "#", "#", "#", "https://relaxed-poincare-7d9478.netlify.com/"];

var WorkComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(WorkComponent, _React$Component);

  function WorkComponent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, WorkComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WorkComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      active: null
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "selectActive", function (selection) {
      _this.setState({
        active: selection
      });
    });

    return _this;
  }

  _createClass(WorkComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var active = this.state.active;
      console.log(active, active === 4 ? "active" : "null");
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Section, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Grid, {
        className: "portfolio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, data.map(function (data, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_WorkCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
          selectActive: _this2.selectActive,
          active: active,
          url: data,
          i: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 211
          },
          __self: this
        });
      })));
    }
  }]);

  return WorkComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (WorkComponent);

/***/ })

})
//# sourceMappingURL=work.js.c7c1bd724ea24f97bc5d.hot-update.js.map