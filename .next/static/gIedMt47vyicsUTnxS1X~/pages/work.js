(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{239:function(n,r,t){__NEXT_REGISTER_PAGE("/work",function(){return n.exports=t(246),{page:n.exports.default}})},246:function(n,r,t){"use strict";t.r(r);var e=t(0),o=t.n(e),i=(t(53),t(12));function c(n){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function a(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function u(n,r){return!r||"object"!==c(r)&&"function"!=typeof r?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):r}function l(n){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function d(n,r){return(d=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n})(n,r)}function s(){var n=function(n,r){r||(r=n.slice(0));return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(r)}}))}(["\n    .back {\n        font-size: 3rem;\n    }\n"]);return s=function(){return n},n}var f=i.a.div(s()),g=function(n){function r(){return function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r),u(this,l(r).apply(this,arguments))}var t,e,i;return function(n,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&d(n,r)}(r,o.a.Component),t=r,(e=[{key:"render",value:function(){var n=this.props,r=n.active,t=n.i,e=n.url,i=n.selectActive;return o.a.createElement("div",{key:t,className:"portfolio__item i".concat(t+1," ").concat(r===t+1?"active":"not--active"),id:"".concat(t+1)},r===t+1?o.a.createElement(f,null,o.a.createElement("span",{className:"back",onClick:function(){return i(null)}},"Back")):o.a.createElement("div",{className:"portfolio__item__content",onClick:function(){return i(t+1)}},o.a.createElement("a",{href:e})))}}])&&a(t.prototype,e),i&&a(t,i),r}();function m(n){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function p(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function w(n){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function b(n,r){return(b=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n})(n,r)}function y(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function v(n,r,t){return r in n?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t,n}function h(){var n=O(["\n  .not--active:hover {\n    transform: scale(1.1);\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  }\n\n  .i1 {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 1;\n    grid-row-end: 2;\n  }\n\n  .i2 {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 1;\n    grid-row-end: 2;\n  }\n\n  .i3 {\n    grid-column-start: 3;\n    grid-column-end: 4;\n    grid-row-start: 1;\n    grid-row-end: 2;\n  }\n\n  .i4 {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 2;\n    grid-row-end: 3;\n  }\n\n  .i5 {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 2;\n    grid-row-end: 3;\n  }\n\n  .i6 {\n    grid-column-start: 3;\n    grid-column-end: 4;\n    grid-row-start: 2;\n    grid-row-end: 3;\n  }\n\n  .i7 {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 3;\n    grid-row-end: 4;\n  }\n\n  .i8 {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 3;\n    grid-row-end: 4;\n  }\n\n  .i9 {\n    grid-column-start: 3;\n    grid-column-end: 4;\n    grid-row-start: 3;\n    grid-row-end: 4;\n  }\n\n  .active {\n    z-index: 100;\n    grid-column: 1/4;\n    grid-row: 1/4;\n    transform: none;\n  }\n\n  @media screen and (max-width: 700px) {\n    .not--active:hover {\n      transform: none;\n      box-shadow: none;\n    }\n\n    .active {\n      z-index: 100;\n      height: 100vh;\n      width: 100vw;\n      transform: none;\n    }\n    .i1 {\n      grid-column-start: 1;\n      grid-column-end: 2;\n      grid-row-start: 1;\n      grid-row-end: 2;\n    }\n\n    .i2 {\n      grid-column-start: 1;\n      grid-column-end: 2;\n      grid-row-start: 2;\n      grid-row-end: 3;\n    }\n\n    .i3 {\n      grid-column-start: 1;\n      grid-column-end: 2;\n      grid-row-start: 3;\n      grid-row-end: 4;\n    }\n\n    .i4 {\n      grid-column-start: 1;\n      grid-column-end: 2;\n      grid-row-start: 4;\n      grid-row-end: 5;\n    }\n\n    .i5 {\n      grid-column-start: 1;\n      grid-column-end: 2;\n      grid-row-start: 5;\n      grid-row-end: 6;\n    }\n\n    .i6 {\n      grid-column-start: 1;\n      grid-column-end: 2;\n      grid-row-start: 6;\n      grid-row-end: 7;\n    }\n\n    .i7 {\n      grid-column-start: 1;\n      grid-column-end: 2;\n      grid-row-start: 7;\n      grid-row-end: 8;\n    }\n\n    .i8 {\n      grid-column-start: 1;\n      grid-column-end: 2;\n      grid-row-start: 8;\n      grid-row-end: 9;\n    }\n\n    .i9 {\n      grid-column-start: 1;\n      grid-column-end: 2;\n      grid-row-start: 9;\n      grid-row-end: 10;\n    }\n\n    .portfolio__item {\n      min-height: 20vh;\n    }\n  }\n"]);return h=function(){return n},n}function _(){var n=O(["\n  display: grid;\n  grid-template-rows: 1fr 1fr 1fr;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-row-gap: 3rem;\n  grid-column-gap: 3rem;\n\n  @media screen and (max-width: 700px) {\n    grid-template-rows: 1fr;\n    grid-template-columns: auto;\n    grid-row-gap: 1rem;\n    grid-column-gap: 1rem;\n  }\n"]);return _=function(){return n},n}function O(n,r){return r||(r=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(r)}}))}var j=i.a.div(_()),E=i.a.section(h()),x=["http://distracted-goldwasser-aaeb24.bitballoon.com/","http://practical-wright-58b89a.bitballoon.com/","#","#","http://nervous-mclean-17152f.bitballoon.com/","#","#","#","https://relaxed-poincare-7d9478.netlify.com/"],P=function(n){function r(){var n,t,e,o;!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r);for(var i=arguments.length,c=new Array(i),a=0;a<i;a++)c[a]=arguments[a];return e=this,o=(n=w(r)).call.apply(n,[this].concat(c)),t=!o||"object"!==m(o)&&"function"!=typeof o?y(e):o,v(y(y(t)),"state",{active:null}),v(y(y(t)),"selectActive",function(n){t.setState({active:n})}),t}var t,e,i;return function(n,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&b(n,r)}(r,o.a.Component),t=r,(e=[{key:"render",value:function(){var n=this,r=this.state.active;return console.log(r,4===r?"active":"null"),o.a.createElement(E,null,o.a.createElement(j,{className:"portfolio"},x.map(function(t,e){return o.a.createElement(g,{selectActive:n.selectActive,active:r,url:t,i:e})})))}}])&&p(t.prototype,e),i&&p(t,i),r}();r.default=function(){return o.a.createElement(P,null)}},53:function(n,r,t){n.exports=t(32)}},[[239,1,0]]]);