/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/knight.png */ "./src/images/knight.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --cells-white: #f5f5f5;\n  --cells-black: #292f2f;\n  --place-knight-cells-color: #9fdb26;\n  --set-target-cells-color: #dc143c;\n  --move-cells-color: #4682b4;\n  --chess-board-lables-font-size: 22px;\n  font-size: 16px;\n}\n\nbody {\n  margin: 0;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: \"Roboto\", sans-serif;\n  background-image: radial-gradient(\n    circle farthest-corner at 10% 20%,\n    rgba(14, 174, 87, 1) 0%,\n    rgba(12, 116, 117, 1) 90%\n  );\n  color: #f8f8ff;\n  overflow-x: hidden;\n}\n\nbody.place-knight {\n  cursor: none;\n}\n\nh1#title {\n  margin: 30px 0;\n  font-size: 3rem;\n}\n\nmain {\n  flex: 1;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 20px;\n}\n\n#chess-board {\n  aspect-ratio: 1/1;\n  width: min(60vmin, 600px);\n  display: flex;\n  pointer-events: none;\n  outline: solid 1px #000000;\n}\n\n#chess-board .column {\n  pointer-events: none;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n#chess-board .cell {\n  flex: 1;\n  position: relative;\n  pointer-events: auto;\n  position: relative;\n  display: flex;\n}\n\nbody.no-cursor #chess-board .cell {\n  cursor: none;\n}\n\nbody.place-knight #chess-board .cell:hover {\n  background: var(--place-knight-cells-color);\n}\n\n#chess-board #starting-position {\n  background-color: var(--place-knight-cells-color);\n}\n\nbody.set-target #chess-board .cell:hover {\n  cursor: pointer;\n  background: var(--set-target-cells-color);\n}\n\n#chess-board #target {\n  background-color: var(--set-target-cells-color);\n}\n\n#chess-board .move {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#chess-board .cell:not(#target) .move {\n  background-color: var(--move-cells-color);\n}\n\n#chess-board .move p {\n  margin: 0;\n  font-family: \"Roboto Mono\", monospace;\n  font-size: 2rem;\n  font-weight: 900;\n}\n\n#chess-board .cell.white {\n  background-color: var(--cells-white);\n}\n\n#chess-board .cell.black {\n  background-color: var(--cells-black);\n}\n\n#chess-board .label {\n  position: absolute;\n  bottom: 0;\n  margin: 0;\n  font-family: \"Roboto Mono\", monospace;\n  font-size: 1rem;\n  z-index: 1;\n}\n\n#chess-board .cell.white .label {\n  color: var(--cells-black);\n}\n\n#chess-board .cell.black .label {\n  color: var(--cells-white);\n}\n\n#chess-board .cell[data-position=\"column-zero-row-zero\"] .column.label {\n  margin-left: 1ch;\n}\n\n#controls {\n  width: min(90vmin, 600px);\n  display: flex;\n  align-items: center;\n  gap: 2%;\n}\n\n#controls button {\n  flex: 1;\n  aspect-ratio: 3/1;\n  cursor: pointer;\n  background-color: rgb(10 10 10 / 30%);\n  backdrop-filter: blur(2px);\n  color: #ffffff;\n  border-radius: 5px;\n  border: solid 1px #c2f9c2;\n}\n\n#controls button.active,\n#controls button:active:not(:disabled) {\n  background-color: #8b0000;\n  border-color: #8b0000;\n  font-weight: 900;\n}\n\n#controls button:disabled {\n  opacity: 0.5;\n}\n\n#knight-piece {\n  width: 100%;\n  position: absolute;\n  bottom: 25%;\n  right: 0%;\n  transition-property: all;\n  filter: drop-shadow(-1px -1px 1px darkslategrey);\n  transition-duration: 0.4s;\n  transition-timing-function: linear;\n  z-index: 2;\n}\n\n.custom-cursor {\n  z-index: 2;\n}\n\n.custom-cursor.hidden {\n  display: none;\n}\n\n#knight-cursor {\n  cursor: none;\n  pointer-events: none;\n  position: absolute;\n  aspect-ratio: 1/1;\n  width: 50px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n#volume-toggle,\n#github-icon {\n  position: absolute;\n\n  top: 2%;\n  cursor: pointer;\n  font-size: 1.5rem;\n  filter: brightness(0.8);\n}\n\n#volume-toggle:hover,\n#github-icon:hover {\n  transform: scale(1.02);\n  filter: brightness(1);\n}\n\n#github-icon {\n  right: 2%;\n}\n\n#volume-toggle {\n  right: calc(2% + 1.5rem + 1%);\n}\n\na,\na:visited,\na:hover,\na:active {\n  color: white;\n}\n\n@media (orientation: portrait), (max-width: 600px) {\n  :root {\n    font-size: 12px;\n  }\n\n  #chess-board {\n    width: min(90vmin, 600px);\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,sBAAsB;EACtB,mCAAmC;EACnC,iCAAiC;EACjC,2BAA2B;EAC3B,oCAAoC;EACpC,eAAe;AACjB;;AAEA;EACE,SAAS;EACT,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,iCAAiC;EACjC;;;;GAIC;EACD,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,OAAO;EACP,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,yBAAyB;EACzB,aAAa;EACb,oBAAoB;EACpB,0BAA0B;AAC5B;;AAEA;EACE,oBAAoB;EACpB,OAAO;EACP,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,OAAO;EACP,kBAAkB;EAClB,oBAAoB;EACpB,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,iDAAiD;AACnD;;AAEA;EACE,eAAe;EACf,yCAAyC;AAC3C;;AAEA;EACE,+CAA+C;AACjD;;AAEA;EACE,OAAO;EACP,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,SAAS;EACT,qCAAqC;EACrC,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,SAAS;EACT,qCAAqC;EACrC,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,mBAAmB;EACnB,OAAO;AACT;;AAEA;EACE,OAAO;EACP,iBAAiB;EACjB,eAAe;EACf,qCAAqC;EACrC,0BAA0B;EAC1B,cAAc;EACd,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;;EAEE,yBAAyB;EACzB,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,wBAAwB;EACxB,gDAAgD;EAChD,yBAAyB;EACzB,kCAAkC;EAClC,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,oBAAoB;EACpB,kBAAkB;EAClB,iBAAiB;EACjB,WAAW;EACX,yDAA4C;EAC5C,wBAAwB;EACxB,4BAA4B;AAC9B;;AAEA;;EAEE,kBAAkB;;EAElB,OAAO;EACP,eAAe;EACf,iBAAiB;EACjB,uBAAuB;AACzB;;AAEA;;EAEE,sBAAsB;EACtB,qBAAqB;AACvB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;;;;EAIE,YAAY;AACd;;AAEA;EACE;IACE,eAAe;EACjB;;EAEA;IACE,yBAAyB;EAC3B;AACF","sourcesContent":[":root {\n  --cells-white: #f5f5f5;\n  --cells-black: #292f2f;\n  --place-knight-cells-color: #9fdb26;\n  --set-target-cells-color: #dc143c;\n  --move-cells-color: #4682b4;\n  --chess-board-lables-font-size: 22px;\n  font-size: 16px;\n}\n\nbody {\n  margin: 0;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: \"Roboto\", sans-serif;\n  background-image: radial-gradient(\n    circle farthest-corner at 10% 20%,\n    rgba(14, 174, 87, 1) 0%,\n    rgba(12, 116, 117, 1) 90%\n  );\n  color: #f8f8ff;\n  overflow-x: hidden;\n}\n\nbody.place-knight {\n  cursor: none;\n}\n\nh1#title {\n  margin: 30px 0;\n  font-size: 3rem;\n}\n\nmain {\n  flex: 1;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 20px;\n}\n\n#chess-board {\n  aspect-ratio: 1/1;\n  width: min(60vmin, 600px);\n  display: flex;\n  pointer-events: none;\n  outline: solid 1px #000000;\n}\n\n#chess-board .column {\n  pointer-events: none;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n#chess-board .cell {\n  flex: 1;\n  position: relative;\n  pointer-events: auto;\n  position: relative;\n  display: flex;\n}\n\nbody.no-cursor #chess-board .cell {\n  cursor: none;\n}\n\nbody.place-knight #chess-board .cell:hover {\n  background: var(--place-knight-cells-color);\n}\n\n#chess-board #starting-position {\n  background-color: var(--place-knight-cells-color);\n}\n\nbody.set-target #chess-board .cell:hover {\n  cursor: pointer;\n  background: var(--set-target-cells-color);\n}\n\n#chess-board #target {\n  background-color: var(--set-target-cells-color);\n}\n\n#chess-board .move {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#chess-board .cell:not(#target) .move {\n  background-color: var(--move-cells-color);\n}\n\n#chess-board .move p {\n  margin: 0;\n  font-family: \"Roboto Mono\", monospace;\n  font-size: 2rem;\n  font-weight: 900;\n}\n\n#chess-board .cell.white {\n  background-color: var(--cells-white);\n}\n\n#chess-board .cell.black {\n  background-color: var(--cells-black);\n}\n\n#chess-board .label {\n  position: absolute;\n  bottom: 0;\n  margin: 0;\n  font-family: \"Roboto Mono\", monospace;\n  font-size: 1rem;\n  z-index: 1;\n}\n\n#chess-board .cell.white .label {\n  color: var(--cells-black);\n}\n\n#chess-board .cell.black .label {\n  color: var(--cells-white);\n}\n\n#chess-board .cell[data-position=\"column-zero-row-zero\"] .column.label {\n  margin-left: 1ch;\n}\n\n#controls {\n  width: min(90vmin, 600px);\n  display: flex;\n  align-items: center;\n  gap: 2%;\n}\n\n#controls button {\n  flex: 1;\n  aspect-ratio: 3/1;\n  cursor: pointer;\n  background-color: rgb(10 10 10 / 30%);\n  backdrop-filter: blur(2px);\n  color: #ffffff;\n  border-radius: 5px;\n  border: solid 1px #c2f9c2;\n}\n\n#controls button.active,\n#controls button:active:not(:disabled) {\n  background-color: #8b0000;\n  border-color: #8b0000;\n  font-weight: 900;\n}\n\n#controls button:disabled {\n  opacity: 0.5;\n}\n\n#knight-piece {\n  width: 100%;\n  position: absolute;\n  bottom: 25%;\n  right: 0%;\n  transition-property: all;\n  filter: drop-shadow(-1px -1px 1px darkslategrey);\n  transition-duration: 0.4s;\n  transition-timing-function: linear;\n  z-index: 2;\n}\n\n.custom-cursor {\n  z-index: 2;\n}\n\n.custom-cursor.hidden {\n  display: none;\n}\n\n#knight-cursor {\n  cursor: none;\n  pointer-events: none;\n  position: absolute;\n  aspect-ratio: 1/1;\n  width: 50px;\n  background-image: url(\"./images/knight.png\");\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n#volume-toggle,\n#github-icon {\n  position: absolute;\n\n  top: 2%;\n  cursor: pointer;\n  font-size: 1.5rem;\n  filter: brightness(0.8);\n}\n\n#volume-toggle:hover,\n#github-icon:hover {\n  transform: scale(1.02);\n  filter: brightness(1);\n}\n\n#github-icon {\n  right: 2%;\n}\n\n#volume-toggle {\n  right: calc(2% + 1.5rem + 1%);\n}\n\na,\na:visited,\na:hover,\na:active {\n  color: white;\n}\n\n@media (orientation: portrait), (max-width: 600px) {\n  :root {\n    font-size: 12px;\n  }\n\n  #chess-board {\n    width: min(90vmin, 600px);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/audio/chess-piece-sound.mp3":
/*!*****************************************!*\
  !*** ./src/audio/chess-piece-sound.mp3 ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/chess-piece-sound.mp3");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images/favicon.ico":
/*!********************************!*\
  !*** ./src/images/favicon.ico ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "6d621afb74b562aad7b626b551ec4c23.ico");

/***/ }),

/***/ "./src/allowed-moves.js":
/*!******************************!*\
  !*** ./src/allowed-moves.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ allowedMoves)
/* harmony export */ });
const MOVE_CONDITIONS = {
  twoUp(y) {
    return y <= 5;
  },

  twoDown(y) {
    return y >= 2;
  },

  twoLeft(x) {
    return x >= 2;
  },

  twoRight(x) {
    return x <= 5;
  },

  oneUp(y) {
    return y !== 7;
  },

  oneDown(y) {
    return y !== 0;
  },

  oneLeft(x) {
    return x !== 0;
  },

  oneRight(x) {
    return x !== 7;
  },
};

const MOVES = [
  {
    // top left
    condition: (x, y) => {
      return MOVE_CONDITIONS.oneLeft(x) && MOVE_CONDITIONS.twoUp(y);
    },
    coordinates: (x, y) => {
      return { x: x - 1, y: y + 2 };
    },
  },

  {
    // top right
    condition: (x, y) => {
      return MOVE_CONDITIONS.oneRight(x) && MOVE_CONDITIONS.twoUp(y);
    },
    coordinates: (x, y) => {
      return { x: x + 1, y: y + 2 };
    },
  },

  {
    // bottom left
    condition: (x, y) => {
      return MOVE_CONDITIONS.oneLeft(x) && MOVE_CONDITIONS.twoDown(y);
    },
    coordinates: (x, y) => {
      return { x: x - 1, y: y - 2 };
    },
  },

  {
    // bottom right
    condition: (x, y) => {
      return MOVE_CONDITIONS.oneRight(x) && MOVE_CONDITIONS.twoDown(y);
    },
    coordinates: (x, y) => {
      return { x: x + 1, y: y - 2 };
    },
  },

  {
    // left top
    condition: (x, y) => {
      return MOVE_CONDITIONS.twoLeft(x) && MOVE_CONDITIONS.oneUp(y);
    },
    coordinates: (x, y) => {
      return { x: x - 2, y: y + 1 };
    },
  },

  {
    // left bottom
    condition: (x, y) => {
      return MOVE_CONDITIONS.twoLeft(x) && MOVE_CONDITIONS.oneDown(y);
    },
    coordinates: (x, y) => {
      return { x: x - 2, y: y - 1 };
    },
  },

  {
    // right top
    condition: (x, y) => {
      return MOVE_CONDITIONS.twoRight(x) && MOVE_CONDITIONS.oneUp(y);
    },
    coordinates: (x, y) => {
      return { x: x + 2, y: y + 1 };
    },
  },

  {
    // right bottom
    condition: (x, y) => {
      return MOVE_CONDITIONS.twoRight(x) && MOVE_CONDITIONS.oneDown(y);
    },
    coordinates: (x, y) => {
      return { x: x + 2, y: y - 1 };
    },
  },
];

function allowedMoves({ x, y }) {
  const allowedMoves = [];

  for (const move of MOVES) {
    if (move.condition(x, y)) allowedMoves.push(move.coordinates(x, y));
  }

  return allowedMoves;
}


/***/ }),

/***/ "./src/knights-travails.js":
/*!*********************************!*\
  !*** ./src/knights-travails.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ knightMoves)
/* harmony export */ });
/* harmony import */ var _allowed_moves_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allowed-moves.js */ "./src/allowed-moves.js");
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node.js */ "./src/node.js");
/* harmony import */ var _queue_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./queue.js */ "./src/queue.js");




function knightMoves(queue, target) {
  if (!(queue instanceof _queue_js__WEBPACK_IMPORTED_MODULE_2__["default"])) {
    const startingPoint = queue;
    queue = new _queue_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    const queueObject = { position: startingPoint, parent: null };
    queue.enqueue(queueObject);
  }

  const currentQueueElement = queue.dequeue();
  const currentPosition = currentQueueElement.position;
  const currentParent = currentQueueElement.parent;
  const currentNode = new _node_js__WEBPACK_IMPORTED_MODULE_1__["default"](currentPosition, currentParent);

  // Base case: target position has been found
  if (currentPosition.x === target.x && currentPosition.y === target.y) {
    return currentNode.path.concat(currentPosition);
  }

  // Recursive case
  const isUnvisited = (position) => {
    return !JSON.stringify(currentNode.path).includes(JSON.stringify(position));
  };

  const potentialMoves = (0,_allowed_moves_js__WEBPACK_IMPORTED_MODULE_0__["default"])(currentPosition).filter(isUnvisited);

  potentialMoves.forEach((move) => {
    queue.enqueue({ position: move, parent: currentNode });
  });

  return knightMoves(queue, target);
}


/***/ }),

/***/ "./src/node.js":
/*!*********************!*\
  !*** ./src/node.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Node)
/* harmony export */ });
class Node {
  constructor(position, parent) {
    this.position = position;
    this.parent = parent;
    this.path = this.getPath();
  }

  getPath() {
    const path = [];
    let parent = this.parent;
    while (parent) {
      path.unshift(parent.position);
      parent = parent.parent;
    }
    return path;
  }
}


/***/ }),

/***/ "./src/queue.js":
/*!**********************!*\
  !*** ./src/queue.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Queue)
/* harmony export */ });
class Queue {
  queue = [];

  enqueue(value) {
    this.queue.push(value);
    return this.queue;
  }

  dequeue() {
    return this.queue.shift();
  }
}


/***/ }),

/***/ "./src/sound-effects.js":
/*!******************************!*\
  !*** ./src/sound-effects.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ playChessPieceSound)
/* harmony export */ });
/* harmony import */ var _audio_chess_piece_sound_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audio/chess-piece-sound.mp3 */ "./src/audio/chess-piece-sound.mp3");


const chessPieceSound = new Audio(_audio_chess_piece_sound_mp3__WEBPACK_IMPORTED_MODULE_0__["default"]);
chessPieceSound.preload = "auto";

function soundOn() {
  const volumeOn = document.querySelector("#volume-toggle[data-volume='true']");
  return volumeOn ? true : false;
}

function playChessPieceSound() {
  if (soundOn()) chessPieceSound.play();
}


/***/ }),

/***/ "./src/traverse.js":
/*!*************************!*\
  !*** ./src/traverse.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ traverse)
/* harmony export */ });
/* harmony import */ var _sound_effects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sound-effects.js */ "./src/sound-effects.js");


async function pause(pauseDuration) {
  return new Promise((resolve) => {
    setTimeout(resolve, pauseDuration);
  });
}

async function traverse(path) {
  const buttons = document.querySelectorAll("#controls button:not(#traverse)");
  buttons.forEach((button) => {
    button.disabled = true;
  });

  const knight = document.querySelector("#knight-piece");
  const knightStyle = window.getComputedStyle(knight);
  const originalKnightBottomMargin = knightStyle.getPropertyValue("bottom");
  // In line 19, getPropertyValue returns something like "1s", so I get rid of the "s" and multiply it by a thousand
  // in order to get the property in miliseconds (without the "ms" unit) and pass it as the argument for the pause function
  const knightTransitionDuration =
    knightStyle.getPropertyValue("transition-duration").slice(0, -1) * 1000;

  for (let positionIndex = 1; positionIndex < path.length; positionIndex++) {
    const previousPosition = path[positionIndex - 1];
    const currentPosition = path[positionIndex];

    const previousBottomMargin = window
      .getComputedStyle(knight)
      .getPropertyValue("bottom");
    const previousRightMargin = window
      .getComputedStyle(knight)
      .getPropertyValue("right");

    // top
    if (currentPosition.y === previousPosition.y + 2) {
      knight.style.bottom = `calc(${previousBottomMargin} + 200%)`;
      await pause(knightTransitionDuration);
      // left
      if (currentPosition.x === previousPosition.x - 1) {
        knight.style.right = `calc(${previousRightMargin} + 100%)`;
      } else {
        // right
        knight.style.right = `calc(${previousRightMargin} - 100%)`;
      }
      // bottom
    } else if (currentPosition.y === previousPosition.y - 2) {
      knight.style.bottom = `calc(${previousBottomMargin} - 200%)`;
      await pause(knightTransitionDuration);
      // left
      if (currentPosition.x === previousPosition.x - 1) {
        knight.style.right = `calc(${previousRightMargin} + 100%)`;
      } else {
        // right
        knight.style.right = `calc(${previousRightMargin} - 100%)`;
      }
      // left
    } else if (currentPosition.x === previousPosition.x - 2) {
      knight.style.right = `calc(${previousRightMargin} + 200%)`;
      await pause(knightTransitionDuration);
      // top
      if (currentPosition.y === previousPosition.y + 1) {
        knight.style.bottom = `calc(${previousBottomMargin} + 100%)`;
      } else {
        // bottom
        knight.style.bottom = `calc(${previousBottomMargin} - 100%)`;
      }
      // right
    } else {
      knight.style.right = `calc(${previousRightMargin} - 200%)`;
      await pause(knightTransitionDuration);
      // top
      if (currentPosition.y === previousPosition.y + 1) {
        knight.style.bottom = `calc(${previousBottomMargin} + 100%)`;
      } else {
        // bottom
        knight.style.bottom = `calc(${previousBottomMargin} - 100%)`;
      }
    }
    await pause(knightTransitionDuration);
    (0,_sound_effects_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    await pause(knightTransitionDuration * 2);

    const currentMove = document.createElement("section");
    currentMove.classList.add("move");
    currentMove.id = positionIndex;
    const moveNumber = document.createElement("p");
    moveNumber.innerText = positionIndex;
    currentMove.appendChild(moveNumber);
    const currentCell = document.querySelector(
      `.cell[data-position-x='${currentPosition.x}'][data-position-y='${currentPosition.y}']`
    );
    currentCell.appendChild(currentMove);

    if (positionIndex === path.length - 1) {
      knight.style.opacity = 0;
      await pause(knightTransitionDuration);

      buttons.forEach((button) => {
        button.disabled = false;
      });

      knight.style.bottom = originalKnightBottomMargin;
      knight.style.right = 0;
    }
  }
}


/***/ }),

/***/ "./src/ui-cells-functions.js":
/*!***********************************!*\
  !*** ./src/ui-cells-functions.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearKnight": () => (/* binding */ clearKnight),
/* harmony export */   "clearMoves": () => (/* binding */ clearMoves),
/* harmony export */   "clearTarget": () => (/* binding */ clearTarget),
/* harmony export */   "placeKnight": () => (/* binding */ placeKnight),
/* harmony export */   "setTarget": () => (/* binding */ setTarget)
/* harmony export */ });
/* harmony import */ var _images_knight_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/knight.png */ "./src/images/knight.png");
/* harmony import */ var _sound_effects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sound-effects.js */ "./src/sound-effects.js");



function placeKnight(cell) {
  (0,_sound_effects_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const knight = document.createElement("img");
  knight.src = _images_knight_png__WEBPACK_IMPORTED_MODULE_0__;
  knight.id = "knight-piece";
  knight.alt = "Knight piece";
  cell.appendChild(knight);
  cell.id = "starting-position";
}

function clearKnight() {
  const previousKnight = document.querySelector("img#knight-piece");
  if (previousKnight) previousKnight.remove();
  const previousStartingCell = document.querySelector("#starting-position");
  if (previousStartingCell) previousStartingCell.id = "";
  clearMoves();
}

function setTarget(cell) {
  cell.id = "target";
}

function clearTarget() {
  const previousTarget = document.querySelector(".cell#target");
  if (previousTarget) previousTarget.id = "";
  clearMoves();
}

function clearMoves() {
  const moves = document.querySelectorAll(".move");
  moves.forEach((move) => {
    move.remove();
  });
}


/***/ }),

/***/ "./src/images/knight.png":
/*!*******************************!*\
  !*** ./src/images/knight.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "132402da34a41001fab7.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./src/user-interface.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_favicon_ico__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/favicon.ico */ "./src/images/favicon.ico");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _knights_travails_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./knights-travails.js */ "./src/knights-travails.js");
/* harmony import */ var _ui_cells_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui-cells-functions */ "./src/ui-cells-functions.js");
/* harmony import */ var _traverse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./traverse */ "./src/traverse.js");






const body = document.querySelector("body");

// Cursor modes:
let placeKnightCursor = false;
let setTargetCursor = false;

function displayKnightCursor() {
  (0,_ui_cells_functions__WEBPACK_IMPORTED_MODULE_3__.clearKnight)();

  const knightCursor = document.createElement("section");
  knightCursor.classList.add("custom-cursor", "hidden");
  knightCursor.id = "knight-cursor";
  const cell = document.querySelector(".cell");
  const cellsWidth = window.getComputedStyle(cell).getPropertyValue("width");
  knightCursor.style.width = cellsWidth;
  body.addEventListener("mousemove", (event) => {
    knightCursor.classList.remove("hidden");
    knightCursor.style.left = `calc(${event.clientX}px - ${cellsWidth}/2)`;
    knightCursor.style.top = `calc(${event.clientY}px - ${cellsWidth}/2)`;
  });
  body.appendChild(knightCursor);
  body.classList.add("place-knight");
}

function removeKnightCursor() {
  const knightCursor = document.querySelector("#knight-cursor");
  if (knightCursor) knightCursor.remove();
  body.classList.remove("place-knight");
}

function checkTraverseButtonState() {
  const knight = document.querySelector("#knight-piece");
  const target = document.querySelector("#target");
  const traverseButton = document.querySelector("button#traverse");
  traverseButton.disabled = !(knight && target);
}

function togglePlaceKnightCursor() {
  placeKnightCursor = !placeKnightCursor;
  placeKnightCursor ? displayKnightCursor() : removeKnightCursor();
  placeKnightButton.classList.toggle("active");
  setTargetCursor = false;
  setTargetButton.classList.remove("active");
  body.classList.remove("set-target");
  checkTraverseButtonState();
}

function toggleSetTargetCursor() {
  setTargetCursor = !setTargetCursor;
  if (setTargetCursor) (0,_ui_cells_functions__WEBPACK_IMPORTED_MODULE_3__.clearTarget)();
  setTargetButton.classList.toggle("active");
  body.classList.toggle("set-target");
  placeKnightCursor = false;
  placeKnightButton.classList.remove("active");
  const knight = document.querySelector("#knight-piece");
  if (knight) knight.style.opacity = 1;
  removeKnightCursor();
  checkTraverseButtonState();
}

// Build chess board:

const chessBoard = document.querySelector("#chess-board");

// Normal chess boards are 8x8
const CHESSBOARD_WIDTH = 8;
const CHESSBOARD_HEIGHT = 8;

const COLUMN_COLORS = { even: "black", odd: "white" };

for (let column = 0; column < CHESSBOARD_WIDTH; column++) {
  const columnSection = document.createElement("section");
  columnSection.classList.add("column");
  columnSection.id = column;
  for (let row = CHESSBOARD_HEIGHT - 1; row >= 0; row--) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    const cellColor = row % 2 === 0 ? COLUMN_COLORS.even : COLUMN_COLORS.odd;
    cell.classList.add(cellColor);
    cell.setAttribute("data-position-x", column);
    cell.setAttribute("data-position-y", row);
    cell.addEventListener("click", () => {
      if (placeKnightCursor) {
        (0,_ui_cells_functions__WEBPACK_IMPORTED_MODULE_3__.placeKnight)(cell);
        togglePlaceKnightCursor();
      } else if (setTargetCursor) {
        // Knight's target can't be equal to its starting point
        const knight = document.querySelector("#knight-piece");
        if (knight && knight.parentElement === cell) return;
        (0,_ui_cells_functions__WEBPACK_IMPORTED_MODULE_3__.setTarget)(cell);
        toggleSetTargetCursor();
      }
    });

    if (column === 0 && row === 0) {
      cell.setAttribute("data-position", "column-zero-row-zero");
    }

    if (column === 0) {
      const rowLabel = document.createElement("p");
      rowLabel.classList.add("row", "label");
      rowLabel.innerText = row + 1;
      cell.appendChild(rowLabel);
    }

    if (row === 0) {
      const columnLabel = document.createElement("p");
      columnLabel.classList.add("column", "label");
      // Here I add column and 97 to get the ascii code of the lower case letters starting from "a", which is how
      // columns are labeled in chess boards: https://www.asciitable.com/
      columnLabel.innerText = String.fromCharCode(column + 97);
      cell.appendChild(columnLabel);
    }

    columnSection.appendChild(cell);
  }
  chessBoard.appendChild(columnSection);
  // swap the colours
  let temporary = COLUMN_COLORS.even;
  COLUMN_COLORS.even = COLUMN_COLORS.odd;
  COLUMN_COLORS.odd = temporary;
}

// Build buttons:

const controls = document.querySelector("#controls");

const placeKnightButton = document.createElement("button");
placeKnightButton.id = "place-knight";
placeKnightButton.innerText = "Place Knight";
placeKnightButton.addEventListener("click", togglePlaceKnightCursor);
controls.appendChild(placeKnightButton);

const setTargetButton = document.createElement("button");
setTargetButton.id = "set-target";
setTargetButton.innerText = "Set target";
setTargetButton.addEventListener("click", toggleSetTargetCursor);
controls.appendChild(setTargetButton);

const traverseButton = document.createElement("button");
traverseButton.id = "traverse";
traverseButton.innerText = "Traverse";
traverseButton.disabled = true;
traverseButton.addEventListener("click", () => {
  const knight = document.querySelector("#knight-piece");
  const originPosition = JSON.parse(
    `{"x": ${knight.parentElement.getAttribute(
      "data-position-x"
    )}, "y": ${knight.parentElement.getAttribute("data-position-y")}}`
  );
  const target = document.querySelector("#target");
  const targetPosition = JSON.parse(
    `{"x": ${target.getAttribute(
      "data-position-x"
    )}, "y": ${target.getAttribute("data-position-y")}}`
  );
  const shortestPath = (0,_knights_travails_js__WEBPACK_IMPORTED_MODULE_2__["default"])(originPosition, targetPosition);
  (0,_traverse__WEBPACK_IMPORTED_MODULE_4__["default"])(shortestPath);
  traverseButton.disabled = true;
});
controls.appendChild(traverseButton);

function clearBoard() {
  (0,_ui_cells_functions__WEBPACK_IMPORTED_MODULE_3__.clearKnight)();
  (0,_ui_cells_functions__WEBPACK_IMPORTED_MODULE_3__.clearTarget)();
  (0,_ui_cells_functions__WEBPACK_IMPORTED_MODULE_3__.clearMoves)();
  checkTraverseButtonState();
}

const clearButton = document.createElement("button");
clearButton.id = "clear";
clearButton.innerText = "Clear";
clearButton.addEventListener("click", clearBoard);
controls.appendChild(clearButton);

// Hide the knight piece if the browser is resized during traversal as resizing then would mess up the knight's position
window.addEventListener("resize", () => {
  // If the place knight button is enabled, that means the traversal isn't taking place
  if (!placeKnightButton.disabled) return;
  const knight = document.querySelector("#knight-piece");
  knight.style.opacity = 0;
});

// Build volume toggle:
let volume = true;

const volumeToggle = document.createElement("i");
volumeToggle.id = "volume-toggle";
volumeToggle.setAttribute("data-volume", volume);
volumeToggle.classList.add("fa-solid", "fa-volume-high");
volumeToggle.addEventListener("click", () => {
  volumeToggle.classList.toggle("fa-volume-high");
  volumeToggle.classList.toggle("fa-volume-xmark");
  volume = !volume;
  volumeToggle.setAttribute("data-volume", volume);
});
body.appendChild(volumeToggle);

// Build github link
const githubLink = document.createElement("a");
githubLink.setAttribute(
  "href",
  "https://github.com/FedeLopez17/knights-travails"
);
githubLink.setAttribute("target", "_blank");
const githubIcon = document.createElement("i");
githubIcon.id = "github-icon";
githubIcon.classList.add("fa-brands", "fa-github");
githubLink.appendChild(githubIcon);
body.appendChild(githubLink);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxnRUFBVztBQUNiLEVBQUUsK0RBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9hdWRpby9jaGVzcy1waWVjZS1zb3VuZC5tcDMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvaW1hZ2VzL2Zhdmljb24uaWNvIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvYWxsb3dlZC1tb3Zlcy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL2tuaWdodHMtdHJhdmFpbHMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9ub2RlLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvcXVldWUuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9zb3VuZC1lZmZlY3RzLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvdHJhdmVyc2UuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy91aS1jZWxscy1mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL3VzZXItaW50ZXJmYWNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9rbmlnaHQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1jZWxscy13aGl0ZTogI2Y1ZjVmNTtcXG4gIC0tY2VsbHMtYmxhY2s6ICMyOTJmMmY7XFxuICAtLXBsYWNlLWtuaWdodC1jZWxscy1jb2xvcjogIzlmZGIyNjtcXG4gIC0tc2V0LXRhcmdldC1jZWxscy1jb2xvcjogI2RjMTQzYztcXG4gIC0tbW92ZS1jZWxscy1jb2xvcjogIzQ2ODJiNDtcXG4gIC0tY2hlc3MtYm9hcmQtbGFibGVzLWZvbnQtc2l6ZTogMjJweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KFxcbiAgICBjaXJjbGUgZmFydGhlc3QtY29ybmVyIGF0IDEwJSAyMCUsXFxuICAgIHJnYmEoMTQsIDE3NCwgODcsIDEpIDAlLFxcbiAgICByZ2JhKDEyLCAxMTYsIDExNywgMSkgOTAlXFxuICApO1xcbiAgY29sb3I6ICNmOGY4ZmY7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbmJvZHkucGxhY2Uta25pZ2h0IHtcXG4gIGN1cnNvcjogbm9uZTtcXG59XFxuXFxuaDEjdGl0bGUge1xcbiAgbWFyZ2luOiAzMHB4IDA7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbm1haW4ge1xcbiAgZmxleDogMTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jY2hlc3MtYm9hcmQge1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICB3aWR0aDogbWluKDYwdm1pbiwgNjAwcHgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgb3V0bGluZTogc29saWQgMXB4ICMwMDAwMDA7XFxufVxcblxcbiNjaGVzcy1ib2FyZCAuY29sdW1uIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jY2hlc3MtYm9hcmQgLmNlbGwge1xcbiAgZmxleDogMTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuYm9keS5uby1jdXJzb3IgI2NoZXNzLWJvYXJkIC5jZWxsIHtcXG4gIGN1cnNvcjogbm9uZTtcXG59XFxuXFxuYm9keS5wbGFjZS1rbmlnaHQgI2NoZXNzLWJvYXJkIC5jZWxsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXBsYWNlLWtuaWdodC1jZWxscy1jb2xvcik7XFxufVxcblxcbiNjaGVzcy1ib2FyZCAjc3RhcnRpbmctcG9zaXRpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGxhY2Uta25pZ2h0LWNlbGxzLWNvbG9yKTtcXG59XFxuXFxuYm9keS5zZXQtdGFyZ2V0ICNjaGVzcy1ib2FyZCAuY2VsbDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZXQtdGFyZ2V0LWNlbGxzLWNvbG9yKTtcXG59XFxuXFxuI2NoZXNzLWJvYXJkICN0YXJnZXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2V0LXRhcmdldC1jZWxscy1jb2xvcik7XFxufVxcblxcbiNjaGVzcy1ib2FyZCAubW92ZSB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2NoZXNzLWJvYXJkIC5jZWxsOm5vdCgjdGFyZ2V0KSAubW92ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb3ZlLWNlbGxzLWNvbG9yKTtcXG59XFxuXFxuI2NoZXNzLWJvYXJkIC5tb3ZlIHAge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8gTW9ub1xcXCIsIG1vbm9zcGFjZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbiNjaGVzcy1ib2FyZCAuY2VsbC53aGl0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jZWxscy13aGl0ZSk7XFxufVxcblxcbiNjaGVzcy1ib2FyZCAuY2VsbC5ibGFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jZWxscy1ibGFjayk7XFxufVxcblxcbiNjaGVzcy1ib2FyZCAubGFiZWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8gTW9ub1xcXCIsIG1vbm9zcGFjZTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbiNjaGVzcy1ib2FyZCAuY2VsbC53aGl0ZSAubGFiZWwge1xcbiAgY29sb3I6IHZhcigtLWNlbGxzLWJsYWNrKTtcXG59XFxuXFxuI2NoZXNzLWJvYXJkIC5jZWxsLmJsYWNrIC5sYWJlbCB7XFxuICBjb2xvcjogdmFyKC0tY2VsbHMtd2hpdGUpO1xcbn1cXG5cXG4jY2hlc3MtYm9hcmQgLmNlbGxbZGF0YS1wb3NpdGlvbj1cXFwiY29sdW1uLXplcm8tcm93LXplcm9cXFwiXSAuY29sdW1uLmxhYmVsIHtcXG4gIG1hcmdpbi1sZWZ0OiAxY2g7XFxufVxcblxcbiNjb250cm9scyB7XFxuICB3aWR0aDogbWluKDkwdm1pbiwgNjAwcHgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIlO1xcbn1cXG5cXG4jY29udHJvbHMgYnV0dG9uIHtcXG4gIGZsZXg6IDE7XFxuICBhc3BlY3QtcmF0aW86IDMvMTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMCAxMCAxMCAvIDMwJSk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2MyZjljMjtcXG59XFxuXFxuI2NvbnRyb2xzIGJ1dHRvbi5hY3RpdmUsXFxuI2NvbnRyb2xzIGJ1dHRvbjphY3RpdmU6bm90KDpkaXNhYmxlZCkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhiMDAwMDtcXG4gIGJvcmRlci1jb2xvcjogIzhiMDAwMDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbiNjb250cm9scyBidXR0b246ZGlzYWJsZWQge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4ja25pZ2h0LXBpZWNlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAyNSU7XFxuICByaWdodDogMCU7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KC0xcHggLTFweCAxcHggZGFya3NsYXRlZ3JleSk7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbi5jdXN0b20tY3Vyc29yIHtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbi5jdXN0b20tY3Vyc29yLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ja25pZ2h0LWN1cnNvciB7XFxuICBjdXJzb3I6IG5vbmU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuI3ZvbHVtZS10b2dnbGUsXFxuI2dpdGh1Yi1pY29uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXG4gIHRvcDogMiU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjgpO1xcbn1cXG5cXG4jdm9sdW1lLXRvZ2dsZTpob3ZlcixcXG4jZ2l0aHViLWljb246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxKTtcXG59XFxuXFxuI2dpdGh1Yi1pY29uIHtcXG4gIHJpZ2h0OiAyJTtcXG59XFxuXFxuI3ZvbHVtZS10b2dnbGUge1xcbiAgcmlnaHQ6IGNhbGMoMiUgKyAxLjVyZW0gKyAxJSk7XFxufVxcblxcbmEsXFxuYTp2aXNpdGVkLFxcbmE6aG92ZXIsXFxuYTphY3RpdmUge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCksIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICA6cm9vdCB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gIH1cXG5cXG4gICNjaGVzcy1ib2FyZCB7XFxuICAgIHdpZHRoOiBtaW4oOTB2bWluLCA2MDBweCk7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLG1DQUFtQztFQUNuQyxpQ0FBaUM7RUFDakMsMkJBQTJCO0VBQzNCLG9DQUFvQztFQUNwQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsU0FBUztFQUNULGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixpQ0FBaUM7RUFDakM7Ozs7R0FJQztFQUNELGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsT0FBTztFQUNQLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxxQ0FBcUM7RUFDckMsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztFQUNULHFDQUFxQztFQUNyQyxlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsT0FBTztBQUNUOztBQUVBO0VBQ0UsT0FBTztFQUNQLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YscUNBQXFDO0VBQ3JDLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCx3QkFBd0I7RUFDeEIsZ0RBQWdEO0VBQ2hELHlCQUF5QjtFQUN6QixrQ0FBa0M7RUFDbEMsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCx5REFBNEM7RUFDNUMsd0JBQXdCO0VBQ3hCLDRCQUE0QjtBQUM5Qjs7QUFFQTs7RUFFRSxrQkFBa0I7O0VBRWxCLE9BQU87RUFDUCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSxzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBOzs7O0VBSUUsWUFBWTtBQUNkOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1jZWxscy13aGl0ZTogI2Y1ZjVmNTtcXG4gIC0tY2VsbHMtYmxhY2s6ICMyOTJmMmY7XFxuICAtLXBsYWNlLWtuaWdodC1jZWxscy1jb2xvcjogIzlmZGIyNjtcXG4gIC0tc2V0LXRhcmdldC1jZWxscy1jb2xvcjogI2RjMTQzYztcXG4gIC0tbW92ZS1jZWxscy1jb2xvcjogIzQ2ODJiNDtcXG4gIC0tY2hlc3MtYm9hcmQtbGFibGVzLWZvbnQtc2l6ZTogMjJweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KFxcbiAgICBjaXJjbGUgZmFydGhlc3QtY29ybmVyIGF0IDEwJSAyMCUsXFxuICAgIHJnYmEoMTQsIDE3NCwgODcsIDEpIDAlLFxcbiAgICByZ2JhKDEyLCAxMTYsIDExNywgMSkgOTAlXFxuICApO1xcbiAgY29sb3I6ICNmOGY4ZmY7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbmJvZHkucGxhY2Uta25pZ2h0IHtcXG4gIGN1cnNvcjogbm9uZTtcXG59XFxuXFxuaDEjdGl0bGUge1xcbiAgbWFyZ2luOiAzMHB4IDA7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbm1haW4ge1xcbiAgZmxleDogMTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jY2hlc3MtYm9hcmQge1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICB3aWR0aDogbWluKDYwdm1pbiwgNjAwcHgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgb3V0bGluZTogc29saWQgMXB4ICMwMDAwMDA7XFxufVxcblxcbiNjaGVzcy1ib2FyZCAuY29sdW1uIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jY2hlc3MtYm9hcmQgLmNlbGwge1xcbiAgZmxleDogMTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuYm9keS5uby1jdXJzb3IgI2NoZXNzLWJvYXJkIC5jZWxsIHtcXG4gIGN1cnNvcjogbm9uZTtcXG59XFxuXFxuYm9keS5wbGFjZS1rbmlnaHQgI2NoZXNzLWJvYXJkIC5jZWxsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXBsYWNlLWtuaWdodC1jZWxscy1jb2xvcik7XFxufVxcblxcbiNjaGVzcy1ib2FyZCAjc3RhcnRpbmctcG9zaXRpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGxhY2Uta25pZ2h0LWNlbGxzLWNvbG9yKTtcXG59XFxuXFxuYm9keS5zZXQtdGFyZ2V0ICNjaGVzcy1ib2FyZCAuY2VsbDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZXQtdGFyZ2V0LWNlbGxzLWNvbG9yKTtcXG59XFxuXFxuI2NoZXNzLWJvYXJkICN0YXJnZXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2V0LXRhcmdldC1jZWxscy1jb2xvcik7XFxufVxcblxcbiNjaGVzcy1ib2FyZCAubW92ZSB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2NoZXNzLWJvYXJkIC5jZWxsOm5vdCgjdGFyZ2V0KSAubW92ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb3ZlLWNlbGxzLWNvbG9yKTtcXG59XFxuXFxuI2NoZXNzLWJvYXJkIC5tb3ZlIHAge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8gTW9ub1xcXCIsIG1vbm9zcGFjZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbiNjaGVzcy1ib2FyZCAuY2VsbC53aGl0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jZWxscy13aGl0ZSk7XFxufVxcblxcbiNjaGVzcy1ib2FyZCAuY2VsbC5ibGFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jZWxscy1ibGFjayk7XFxufVxcblxcbiNjaGVzcy1ib2FyZCAubGFiZWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8gTW9ub1xcXCIsIG1vbm9zcGFjZTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbiNjaGVzcy1ib2FyZCAuY2VsbC53aGl0ZSAubGFiZWwge1xcbiAgY29sb3I6IHZhcigtLWNlbGxzLWJsYWNrKTtcXG59XFxuXFxuI2NoZXNzLWJvYXJkIC5jZWxsLmJsYWNrIC5sYWJlbCB7XFxuICBjb2xvcjogdmFyKC0tY2VsbHMtd2hpdGUpO1xcbn1cXG5cXG4jY2hlc3MtYm9hcmQgLmNlbGxbZGF0YS1wb3NpdGlvbj1cXFwiY29sdW1uLXplcm8tcm93LXplcm9cXFwiXSAuY29sdW1uLmxhYmVsIHtcXG4gIG1hcmdpbi1sZWZ0OiAxY2g7XFxufVxcblxcbiNjb250cm9scyB7XFxuICB3aWR0aDogbWluKDkwdm1pbiwgNjAwcHgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIlO1xcbn1cXG5cXG4jY29udHJvbHMgYnV0dG9uIHtcXG4gIGZsZXg6IDE7XFxuICBhc3BlY3QtcmF0aW86IDMvMTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMCAxMCAxMCAvIDMwJSk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2MyZjljMjtcXG59XFxuXFxuI2NvbnRyb2xzIGJ1dHRvbi5hY3RpdmUsXFxuI2NvbnRyb2xzIGJ1dHRvbjphY3RpdmU6bm90KDpkaXNhYmxlZCkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhiMDAwMDtcXG4gIGJvcmRlci1jb2xvcjogIzhiMDAwMDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbiNjb250cm9scyBidXR0b246ZGlzYWJsZWQge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4ja25pZ2h0LXBpZWNlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAyNSU7XFxuICByaWdodDogMCU7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KC0xcHggLTFweCAxcHggZGFya3NsYXRlZ3JleSk7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbi5jdXN0b20tY3Vyc29yIHtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbi5jdXN0b20tY3Vyc29yLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ja25pZ2h0LWN1cnNvciB7XFxuICBjdXJzb3I6IG5vbmU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vaW1hZ2VzL2tuaWdodC5wbmdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbiN2b2x1bWUtdG9nZ2xlLFxcbiNnaXRodWItaWNvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFxuICB0b3A6IDIlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44KTtcXG59XFxuXFxuI3ZvbHVtZS10b2dnbGU6aG92ZXIsXFxuI2dpdGh1Yi1pY29uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMSk7XFxufVxcblxcbiNnaXRodWItaWNvbiB7XFxuICByaWdodDogMiU7XFxufVxcblxcbiN2b2x1bWUtdG9nZ2xlIHtcXG4gIHJpZ2h0OiBjYWxjKDIlICsgMS41cmVtICsgMSUpO1xcbn1cXG5cXG5hLFxcbmE6dmlzaXRlZCxcXG5hOmhvdmVyLFxcbmE6YWN0aXZlIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpLCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgOnJvb3Qge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICB9XFxuXFxuICAjY2hlc3MtYm9hcmQge1xcbiAgICB3aWR0aDogbWluKDkwdm1pbiwgNjAwcHgpO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXVkaW8vY2hlc3MtcGllY2Utc291bmQubXAzXCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2ZDYyMWFmYjc0YjU2MmFhZDdiNjI2YjU1MWVjNGMyMy5pY29cIjsiLCJjb25zdCBNT1ZFX0NPTkRJVElPTlMgPSB7XG4gIHR3b1VwKHkpIHtcbiAgICByZXR1cm4geSA8PSA1O1xuICB9LFxuXG4gIHR3b0Rvd24oeSkge1xuICAgIHJldHVybiB5ID49IDI7XG4gIH0sXG5cbiAgdHdvTGVmdCh4KSB7XG4gICAgcmV0dXJuIHggPj0gMjtcbiAgfSxcblxuICB0d29SaWdodCh4KSB7XG4gICAgcmV0dXJuIHggPD0gNTtcbiAgfSxcblxuICBvbmVVcCh5KSB7XG4gICAgcmV0dXJuIHkgIT09IDc7XG4gIH0sXG5cbiAgb25lRG93bih5KSB7XG4gICAgcmV0dXJuIHkgIT09IDA7XG4gIH0sXG5cbiAgb25lTGVmdCh4KSB7XG4gICAgcmV0dXJuIHggIT09IDA7XG4gIH0sXG5cbiAgb25lUmlnaHQoeCkge1xuICAgIHJldHVybiB4ICE9PSA3O1xuICB9LFxufTtcblxuY29uc3QgTU9WRVMgPSBbXG4gIHtcbiAgICAvLyB0b3AgbGVmdFxuICAgIGNvbmRpdGlvbjogKHgsIHkpID0+IHtcbiAgICAgIHJldHVybiBNT1ZFX0NPTkRJVElPTlMub25lTGVmdCh4KSAmJiBNT1ZFX0NPTkRJVElPTlMudHdvVXAoeSk7XG4gICAgfSxcbiAgICBjb29yZGluYXRlczogKHgsIHkpID0+IHtcbiAgICAgIHJldHVybiB7IHg6IHggLSAxLCB5OiB5ICsgMiB9O1xuICAgIH0sXG4gIH0sXG5cbiAge1xuICAgIC8vIHRvcCByaWdodFxuICAgIGNvbmRpdGlvbjogKHgsIHkpID0+IHtcbiAgICAgIHJldHVybiBNT1ZFX0NPTkRJVElPTlMub25lUmlnaHQoeCkgJiYgTU9WRV9DT05ESVRJT05TLnR3b1VwKHkpO1xuICAgIH0sXG4gICAgY29vcmRpbmF0ZXM6ICh4LCB5KSA9PiB7XG4gICAgICByZXR1cm4geyB4OiB4ICsgMSwgeTogeSArIDIgfTtcbiAgICB9LFxuICB9LFxuXG4gIHtcbiAgICAvLyBib3R0b20gbGVmdFxuICAgIGNvbmRpdGlvbjogKHgsIHkpID0+IHtcbiAgICAgIHJldHVybiBNT1ZFX0NPTkRJVElPTlMub25lTGVmdCh4KSAmJiBNT1ZFX0NPTkRJVElPTlMudHdvRG93bih5KTtcbiAgICB9LFxuICAgIGNvb3JkaW5hdGVzOiAoeCwgeSkgPT4ge1xuICAgICAgcmV0dXJuIHsgeDogeCAtIDEsIHk6IHkgLSAyIH07XG4gICAgfSxcbiAgfSxcblxuICB7XG4gICAgLy8gYm90dG9tIHJpZ2h0XG4gICAgY29uZGl0aW9uOiAoeCwgeSkgPT4ge1xuICAgICAgcmV0dXJuIE1PVkVfQ09ORElUSU9OUy5vbmVSaWdodCh4KSAmJiBNT1ZFX0NPTkRJVElPTlMudHdvRG93bih5KTtcbiAgICB9LFxuICAgIGNvb3JkaW5hdGVzOiAoeCwgeSkgPT4ge1xuICAgICAgcmV0dXJuIHsgeDogeCArIDEsIHk6IHkgLSAyIH07XG4gICAgfSxcbiAgfSxcblxuICB7XG4gICAgLy8gbGVmdCB0b3BcbiAgICBjb25kaXRpb246ICh4LCB5KSA9PiB7XG4gICAgICByZXR1cm4gTU9WRV9DT05ESVRJT05TLnR3b0xlZnQoeCkgJiYgTU9WRV9DT05ESVRJT05TLm9uZVVwKHkpO1xuICAgIH0sXG4gICAgY29vcmRpbmF0ZXM6ICh4LCB5KSA9PiB7XG4gICAgICByZXR1cm4geyB4OiB4IC0gMiwgeTogeSArIDEgfTtcbiAgICB9LFxuICB9LFxuXG4gIHtcbiAgICAvLyBsZWZ0IGJvdHRvbVxuICAgIGNvbmRpdGlvbjogKHgsIHkpID0+IHtcbiAgICAgIHJldHVybiBNT1ZFX0NPTkRJVElPTlMudHdvTGVmdCh4KSAmJiBNT1ZFX0NPTkRJVElPTlMub25lRG93bih5KTtcbiAgICB9LFxuICAgIGNvb3JkaW5hdGVzOiAoeCwgeSkgPT4ge1xuICAgICAgcmV0dXJuIHsgeDogeCAtIDIsIHk6IHkgLSAxIH07XG4gICAgfSxcbiAgfSxcblxuICB7XG4gICAgLy8gcmlnaHQgdG9wXG4gICAgY29uZGl0aW9uOiAoeCwgeSkgPT4ge1xuICAgICAgcmV0dXJuIE1PVkVfQ09ORElUSU9OUy50d29SaWdodCh4KSAmJiBNT1ZFX0NPTkRJVElPTlMub25lVXAoeSk7XG4gICAgfSxcbiAgICBjb29yZGluYXRlczogKHgsIHkpID0+IHtcbiAgICAgIHJldHVybiB7IHg6IHggKyAyLCB5OiB5ICsgMSB9O1xuICAgIH0sXG4gIH0sXG5cbiAge1xuICAgIC8vIHJpZ2h0IGJvdHRvbVxuICAgIGNvbmRpdGlvbjogKHgsIHkpID0+IHtcbiAgICAgIHJldHVybiBNT1ZFX0NPTkRJVElPTlMudHdvUmlnaHQoeCkgJiYgTU9WRV9DT05ESVRJT05TLm9uZURvd24oeSk7XG4gICAgfSxcbiAgICBjb29yZGluYXRlczogKHgsIHkpID0+IHtcbiAgICAgIHJldHVybiB7IHg6IHggKyAyLCB5OiB5IC0gMSB9O1xuICAgIH0sXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbGxvd2VkTW92ZXMoeyB4LCB5IH0pIHtcbiAgY29uc3QgYWxsb3dlZE1vdmVzID0gW107XG5cbiAgZm9yIChjb25zdCBtb3ZlIG9mIE1PVkVTKSB7XG4gICAgaWYgKG1vdmUuY29uZGl0aW9uKHgsIHkpKSBhbGxvd2VkTW92ZXMucHVzaChtb3ZlLmNvb3JkaW5hdGVzKHgsIHkpKTtcbiAgfVxuXG4gIHJldHVybiBhbGxvd2VkTW92ZXM7XG59XG4iLCJpbXBvcnQgYWxsb3dlZE1vdmVzIGZyb20gXCIuL2FsbG93ZWQtbW92ZXMuanNcIjtcbmltcG9ydCBOb2RlIGZyb20gXCIuL25vZGUuanNcIjtcbmltcG9ydCBRdWV1ZSBmcm9tIFwiLi9xdWV1ZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBrbmlnaHRNb3ZlcyhxdWV1ZSwgdGFyZ2V0KSB7XG4gIGlmICghKHF1ZXVlIGluc3RhbmNlb2YgUXVldWUpKSB7XG4gICAgY29uc3Qgc3RhcnRpbmdQb2ludCA9IHF1ZXVlO1xuICAgIHF1ZXVlID0gbmV3IFF1ZXVlKCk7XG4gICAgY29uc3QgcXVldWVPYmplY3QgPSB7IHBvc2l0aW9uOiBzdGFydGluZ1BvaW50LCBwYXJlbnQ6IG51bGwgfTtcbiAgICBxdWV1ZS5lbnF1ZXVlKHF1ZXVlT2JqZWN0KTtcbiAgfVxuXG4gIGNvbnN0IGN1cnJlbnRRdWV1ZUVsZW1lbnQgPSBxdWV1ZS5kZXF1ZXVlKCk7XG4gIGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IGN1cnJlbnRRdWV1ZUVsZW1lbnQucG9zaXRpb247XG4gIGNvbnN0IGN1cnJlbnRQYXJlbnQgPSBjdXJyZW50UXVldWVFbGVtZW50LnBhcmVudDtcbiAgY29uc3QgY3VycmVudE5vZGUgPSBuZXcgTm9kZShjdXJyZW50UG9zaXRpb24sIGN1cnJlbnRQYXJlbnQpO1xuXG4gIC8vIEJhc2UgY2FzZTogdGFyZ2V0IHBvc2l0aW9uIGhhcyBiZWVuIGZvdW5kXG4gIGlmIChjdXJyZW50UG9zaXRpb24ueCA9PT0gdGFyZ2V0LnggJiYgY3VycmVudFBvc2l0aW9uLnkgPT09IHRhcmdldC55KSB7XG4gICAgcmV0dXJuIGN1cnJlbnROb2RlLnBhdGguY29uY2F0KGN1cnJlbnRQb3NpdGlvbik7XG4gIH1cblxuICAvLyBSZWN1cnNpdmUgY2FzZVxuICBjb25zdCBpc1VudmlzaXRlZCA9IChwb3NpdGlvbikgPT4ge1xuICAgIHJldHVybiAhSlNPTi5zdHJpbmdpZnkoY3VycmVudE5vZGUucGF0aCkuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkocG9zaXRpb24pKTtcbiAgfTtcblxuICBjb25zdCBwb3RlbnRpYWxNb3ZlcyA9IGFsbG93ZWRNb3ZlcyhjdXJyZW50UG9zaXRpb24pLmZpbHRlcihpc1VudmlzaXRlZCk7XG5cbiAgcG90ZW50aWFsTW92ZXMuZm9yRWFjaCgobW92ZSkgPT4ge1xuICAgIHF1ZXVlLmVucXVldWUoeyBwb3NpdGlvbjogbW92ZSwgcGFyZW50OiBjdXJyZW50Tm9kZSB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGtuaWdodE1vdmVzKHF1ZXVlLCB0YXJnZXQpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBwYXJlbnQpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy5wYXRoID0gdGhpcy5nZXRQYXRoKCk7XG4gIH1cblxuICBnZXRQYXRoKCkge1xuICAgIGNvbnN0IHBhdGggPSBbXTtcbiAgICBsZXQgcGFyZW50ID0gdGhpcy5wYXJlbnQ7XG4gICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgcGF0aC51bnNoaWZ0KHBhcmVudC5wb3NpdGlvbik7XG4gICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVldWUge1xuICBxdWV1ZSA9IFtdO1xuXG4gIGVucXVldWUodmFsdWUpIHtcbiAgICB0aGlzLnF1ZXVlLnB1c2godmFsdWUpO1xuICAgIHJldHVybiB0aGlzLnF1ZXVlO1xuICB9XG5cbiAgZGVxdWV1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5xdWV1ZS5zaGlmdCgpO1xuICB9XG59XG4iLCJpbXBvcnQgY2hlc3NQaWVjZVNvdW5kRmlsZSBmcm9tIFwiLi9hdWRpby9jaGVzcy1waWVjZS1zb3VuZC5tcDNcIjtcblxuY29uc3QgY2hlc3NQaWVjZVNvdW5kID0gbmV3IEF1ZGlvKGNoZXNzUGllY2VTb3VuZEZpbGUpO1xuY2hlc3NQaWVjZVNvdW5kLnByZWxvYWQgPSBcImF1dG9cIjtcblxuZnVuY3Rpb24gc291bmRPbigpIHtcbiAgY29uc3Qgdm9sdW1lT24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ZvbHVtZS10b2dnbGVbZGF0YS12b2x1bWU9J3RydWUnXVwiKTtcbiAgcmV0dXJuIHZvbHVtZU9uID8gdHJ1ZSA6IGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwbGF5Q2hlc3NQaWVjZVNvdW5kKCkge1xuICBpZiAoc291bmRPbigpKSBjaGVzc1BpZWNlU291bmQucGxheSgpO1xufVxuIiwiaW1wb3J0IHBsYXlDaGVzc1BpZWNlU291bmQgZnJvbSBcIi4vc291bmQtZWZmZWN0cy5qc1wiO1xuXG5hc3luYyBmdW5jdGlvbiBwYXVzZShwYXVzZUR1cmF0aW9uKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgcGF1c2VEdXJhdGlvbik7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiB0cmF2ZXJzZShwYXRoKSB7XG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2NvbnRyb2xzIGJ1dHRvbjpub3QoI3RyYXZlcnNlKVwiKTtcbiAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBidXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICB9KTtcblxuICBjb25zdCBrbmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2tuaWdodC1waWVjZVwiKTtcbiAgY29uc3Qga25pZ2h0U3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShrbmlnaHQpO1xuICBjb25zdCBvcmlnaW5hbEtuaWdodEJvdHRvbU1hcmdpbiA9IGtuaWdodFN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJib3R0b21cIik7XG4gIC8vIEluIGxpbmUgMTksIGdldFByb3BlcnR5VmFsdWUgcmV0dXJucyBzb21ldGhpbmcgbGlrZSBcIjFzXCIsIHNvIEkgZ2V0IHJpZCBvZiB0aGUgXCJzXCIgYW5kIG11bHRpcGx5IGl0IGJ5IGEgdGhvdXNhbmRcbiAgLy8gaW4gb3JkZXIgdG8gZ2V0IHRoZSBwcm9wZXJ0eSBpbiBtaWxpc2Vjb25kcyAod2l0aG91dCB0aGUgXCJtc1wiIHVuaXQpIGFuZCBwYXNzIGl0IGFzIHRoZSBhcmd1bWVudCBmb3IgdGhlIHBhdXNlIGZ1bmN0aW9uXG4gIGNvbnN0IGtuaWdodFRyYW5zaXRpb25EdXJhdGlvbiA9XG4gICAga25pZ2h0U3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcInRyYW5zaXRpb24tZHVyYXRpb25cIikuc2xpY2UoMCwgLTEpICogMTAwMDtcblxuICBmb3IgKGxldCBwb3NpdGlvbkluZGV4ID0gMTsgcG9zaXRpb25JbmRleCA8IHBhdGgubGVuZ3RoOyBwb3NpdGlvbkluZGV4KyspIHtcbiAgICBjb25zdCBwcmV2aW91c1Bvc2l0aW9uID0gcGF0aFtwb3NpdGlvbkluZGV4IC0gMV07XG4gICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gcGF0aFtwb3NpdGlvbkluZGV4XTtcblxuICAgIGNvbnN0IHByZXZpb3VzQm90dG9tTWFyZ2luID0gd2luZG93XG4gICAgICAuZ2V0Q29tcHV0ZWRTdHlsZShrbmlnaHQpXG4gICAgICAuZ2V0UHJvcGVydHlWYWx1ZShcImJvdHRvbVwiKTtcbiAgICBjb25zdCBwcmV2aW91c1JpZ2h0TWFyZ2luID0gd2luZG93XG4gICAgICAuZ2V0Q29tcHV0ZWRTdHlsZShrbmlnaHQpXG4gICAgICAuZ2V0UHJvcGVydHlWYWx1ZShcInJpZ2h0XCIpO1xuXG4gICAgLy8gdG9wXG4gICAgaWYgKGN1cnJlbnRQb3NpdGlvbi55ID09PSBwcmV2aW91c1Bvc2l0aW9uLnkgKyAyKSB7XG4gICAgICBrbmlnaHQuc3R5bGUuYm90dG9tID0gYGNhbGMoJHtwcmV2aW91c0JvdHRvbU1hcmdpbn0gKyAyMDAlKWA7XG4gICAgICBhd2FpdCBwYXVzZShrbmlnaHRUcmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgLy8gbGVmdFxuICAgICAgaWYgKGN1cnJlbnRQb3NpdGlvbi54ID09PSBwcmV2aW91c1Bvc2l0aW9uLnggLSAxKSB7XG4gICAgICAgIGtuaWdodC5zdHlsZS5yaWdodCA9IGBjYWxjKCR7cHJldmlvdXNSaWdodE1hcmdpbn0gKyAxMDAlKWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyByaWdodFxuICAgICAgICBrbmlnaHQuc3R5bGUucmlnaHQgPSBgY2FsYygke3ByZXZpb3VzUmlnaHRNYXJnaW59IC0gMTAwJSlgO1xuICAgICAgfVxuICAgICAgLy8gYm90dG9tXG4gICAgfSBlbHNlIGlmIChjdXJyZW50UG9zaXRpb24ueSA9PT0gcHJldmlvdXNQb3NpdGlvbi55IC0gMikge1xuICAgICAga25pZ2h0LnN0eWxlLmJvdHRvbSA9IGBjYWxjKCR7cHJldmlvdXNCb3R0b21NYXJnaW59IC0gMjAwJSlgO1xuICAgICAgYXdhaXQgcGF1c2Uoa25pZ2h0VHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICAgIC8vIGxlZnRcbiAgICAgIGlmIChjdXJyZW50UG9zaXRpb24ueCA9PT0gcHJldmlvdXNQb3NpdGlvbi54IC0gMSkge1xuICAgICAgICBrbmlnaHQuc3R5bGUucmlnaHQgPSBgY2FsYygke3ByZXZpb3VzUmlnaHRNYXJnaW59ICsgMTAwJSlgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcmlnaHRcbiAgICAgICAga25pZ2h0LnN0eWxlLnJpZ2h0ID0gYGNhbGMoJHtwcmV2aW91c1JpZ2h0TWFyZ2lufSAtIDEwMCUpYDtcbiAgICAgIH1cbiAgICAgIC8vIGxlZnRcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRQb3NpdGlvbi54ID09PSBwcmV2aW91c1Bvc2l0aW9uLnggLSAyKSB7XG4gICAgICBrbmlnaHQuc3R5bGUucmlnaHQgPSBgY2FsYygke3ByZXZpb3VzUmlnaHRNYXJnaW59ICsgMjAwJSlgO1xuICAgICAgYXdhaXQgcGF1c2Uoa25pZ2h0VHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICAgIC8vIHRvcFxuICAgICAgaWYgKGN1cnJlbnRQb3NpdGlvbi55ID09PSBwcmV2aW91c1Bvc2l0aW9uLnkgKyAxKSB7XG4gICAgICAgIGtuaWdodC5zdHlsZS5ib3R0b20gPSBgY2FsYygke3ByZXZpb3VzQm90dG9tTWFyZ2lufSArIDEwMCUpYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGJvdHRvbVxuICAgICAgICBrbmlnaHQuc3R5bGUuYm90dG9tID0gYGNhbGMoJHtwcmV2aW91c0JvdHRvbU1hcmdpbn0gLSAxMDAlKWA7XG4gICAgICB9XG4gICAgICAvLyByaWdodFxuICAgIH0gZWxzZSB7XG4gICAgICBrbmlnaHQuc3R5bGUucmlnaHQgPSBgY2FsYygke3ByZXZpb3VzUmlnaHRNYXJnaW59IC0gMjAwJSlgO1xuICAgICAgYXdhaXQgcGF1c2Uoa25pZ2h0VHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICAgIC8vIHRvcFxuICAgICAgaWYgKGN1cnJlbnRQb3NpdGlvbi55ID09PSBwcmV2aW91c1Bvc2l0aW9uLnkgKyAxKSB7XG4gICAgICAgIGtuaWdodC5zdHlsZS5ib3R0b20gPSBgY2FsYygke3ByZXZpb3VzQm90dG9tTWFyZ2lufSArIDEwMCUpYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGJvdHRvbVxuICAgICAgICBrbmlnaHQuc3R5bGUuYm90dG9tID0gYGNhbGMoJHtwcmV2aW91c0JvdHRvbU1hcmdpbn0gLSAxMDAlKWA7XG4gICAgICB9XG4gICAgfVxuICAgIGF3YWl0IHBhdXNlKGtuaWdodFRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgcGxheUNoZXNzUGllY2VTb3VuZCgpO1xuICAgIGF3YWl0IHBhdXNlKGtuaWdodFRyYW5zaXRpb25EdXJhdGlvbiAqIDIpO1xuXG4gICAgY29uc3QgY3VycmVudE1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBjdXJyZW50TW92ZS5jbGFzc0xpc3QuYWRkKFwibW92ZVwiKTtcbiAgICBjdXJyZW50TW92ZS5pZCA9IHBvc2l0aW9uSW5kZXg7XG4gICAgY29uc3QgbW92ZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG1vdmVOdW1iZXIuaW5uZXJUZXh0ID0gcG9zaXRpb25JbmRleDtcbiAgICBjdXJyZW50TW92ZS5hcHBlbmRDaGlsZChtb3ZlTnVtYmVyKTtcbiAgICBjb25zdCBjdXJyZW50Q2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLmNlbGxbZGF0YS1wb3NpdGlvbi14PScke2N1cnJlbnRQb3NpdGlvbi54fSddW2RhdGEtcG9zaXRpb24teT0nJHtjdXJyZW50UG9zaXRpb24ueX0nXWBcbiAgICApO1xuICAgIGN1cnJlbnRDZWxsLmFwcGVuZENoaWxkKGN1cnJlbnRNb3ZlKTtcblxuICAgIGlmIChwb3NpdGlvbkluZGV4ID09PSBwYXRoLmxlbmd0aCAtIDEpIHtcbiAgICAgIGtuaWdodC5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgIGF3YWl0IHBhdXNlKGtuaWdodFRyYW5zaXRpb25EdXJhdGlvbik7XG5cbiAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgfSk7XG5cbiAgICAgIGtuaWdodC5zdHlsZS5ib3R0b20gPSBvcmlnaW5hbEtuaWdodEJvdHRvbU1hcmdpbjtcbiAgICAgIGtuaWdodC5zdHlsZS5yaWdodCA9IDA7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQga25pZ2h0SW1hZ2VTcmMgZnJvbSBcIi4vaW1hZ2VzL2tuaWdodC5wbmdcIjtcbmltcG9ydCBwbGF5Q2hlc3NQaWVjZVNvdW5kIGZyb20gXCIuL3NvdW5kLWVmZmVjdHMuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHBsYWNlS25pZ2h0KGNlbGwpIHtcbiAgcGxheUNoZXNzUGllY2VTb3VuZCgpO1xuICBjb25zdCBrbmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBrbmlnaHQuc3JjID0ga25pZ2h0SW1hZ2VTcmM7XG4gIGtuaWdodC5pZCA9IFwia25pZ2h0LXBpZWNlXCI7XG4gIGtuaWdodC5hbHQgPSBcIktuaWdodCBwaWVjZVwiO1xuICBjZWxsLmFwcGVuZENoaWxkKGtuaWdodCk7XG4gIGNlbGwuaWQgPSBcInN0YXJ0aW5nLXBvc2l0aW9uXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhcktuaWdodCgpIHtcbiAgY29uc3QgcHJldmlvdXNLbmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW1nI2tuaWdodC1waWVjZVwiKTtcbiAgaWYgKHByZXZpb3VzS25pZ2h0KSBwcmV2aW91c0tuaWdodC5yZW1vdmUoKTtcbiAgY29uc3QgcHJldmlvdXNTdGFydGluZ0NlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0YXJ0aW5nLXBvc2l0aW9uXCIpO1xuICBpZiAocHJldmlvdXNTdGFydGluZ0NlbGwpIHByZXZpb3VzU3RhcnRpbmdDZWxsLmlkID0gXCJcIjtcbiAgY2xlYXJNb3ZlcygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VGFyZ2V0KGNlbGwpIHtcbiAgY2VsbC5pZCA9IFwidGFyZ2V0XCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhclRhcmdldCgpIHtcbiAgY29uc3QgcHJldmlvdXNUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNlbGwjdGFyZ2V0XCIpO1xuICBpZiAocHJldmlvdXNUYXJnZXQpIHByZXZpb3VzVGFyZ2V0LmlkID0gXCJcIjtcbiAgY2xlYXJNb3ZlcygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJNb3ZlcygpIHtcbiAgY29uc3QgbW92ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vdmVcIik7XG4gIG1vdmVzLmZvckVhY2goKG1vdmUpID0+IHtcbiAgICBtb3ZlLnJlbW92ZSgpO1xuICB9KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgZmF2aWNvbiBmcm9tIFwiLi9pbWFnZXMvZmF2aWNvbi5pY29cIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQga25pZ2h0TW92ZXMgZnJvbSBcIi4va25pZ2h0cy10cmF2YWlscy5qc1wiO1xuaW1wb3J0IHtcbiAgY2xlYXJLbmlnaHQsXG4gIGNsZWFyTW92ZXMsXG4gIGNsZWFyVGFyZ2V0LFxuICBwbGFjZUtuaWdodCxcbiAgc2V0VGFyZ2V0LFxufSBmcm9tIFwiLi91aS1jZWxscy1mdW5jdGlvbnNcIjtcbmltcG9ydCB0cmF2ZXJzZSBmcm9tIFwiLi90cmF2ZXJzZVwiO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbi8vIEN1cnNvciBtb2RlczpcbmxldCBwbGFjZUtuaWdodEN1cnNvciA9IGZhbHNlO1xubGV0IHNldFRhcmdldEN1cnNvciA9IGZhbHNlO1xuXG5mdW5jdGlvbiBkaXNwbGF5S25pZ2h0Q3Vyc29yKCkge1xuICBjbGVhcktuaWdodCgpO1xuXG4gIGNvbnN0IGtuaWdodEN1cnNvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBrbmlnaHRDdXJzb3IuY2xhc3NMaXN0LmFkZChcImN1c3RvbS1jdXJzb3JcIiwgXCJoaWRkZW5cIik7XG4gIGtuaWdodEN1cnNvci5pZCA9IFwia25pZ2h0LWN1cnNvclwiO1xuICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jZWxsXCIpO1xuICBjb25zdCBjZWxsc1dpZHRoID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoY2VsbCkuZ2V0UHJvcGVydHlWYWx1ZShcIndpZHRoXCIpO1xuICBrbmlnaHRDdXJzb3Iuc3R5bGUud2lkdGggPSBjZWxsc1dpZHRoO1xuICBib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgKGV2ZW50KSA9PiB7XG4gICAga25pZ2h0Q3Vyc29yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAga25pZ2h0Q3Vyc29yLnN0eWxlLmxlZnQgPSBgY2FsYygke2V2ZW50LmNsaWVudFh9cHggLSAke2NlbGxzV2lkdGh9LzIpYDtcbiAgICBrbmlnaHRDdXJzb3Iuc3R5bGUudG9wID0gYGNhbGMoJHtldmVudC5jbGllbnRZfXB4IC0gJHtjZWxsc1dpZHRofS8yKWA7XG4gIH0pO1xuICBib2R5LmFwcGVuZENoaWxkKGtuaWdodEN1cnNvcik7XG4gIGJvZHkuY2xhc3NMaXN0LmFkZChcInBsYWNlLWtuaWdodFwiKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlS25pZ2h0Q3Vyc29yKCkge1xuICBjb25zdCBrbmlnaHRDdXJzb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2tuaWdodC1jdXJzb3JcIik7XG4gIGlmIChrbmlnaHRDdXJzb3IpIGtuaWdodEN1cnNvci5yZW1vdmUoKTtcbiAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwicGxhY2Uta25pZ2h0XCIpO1xufVxuXG5mdW5jdGlvbiBjaGVja1RyYXZlcnNlQnV0dG9uU3RhdGUoKSB7XG4gIGNvbnN0IGtuaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIja25pZ2h0LXBpZWNlXCIpO1xuICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RhcmdldFwiKTtcbiAgY29uc3QgdHJhdmVyc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uI3RyYXZlcnNlXCIpO1xuICB0cmF2ZXJzZUJ1dHRvbi5kaXNhYmxlZCA9ICEoa25pZ2h0ICYmIHRhcmdldCk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVBsYWNlS25pZ2h0Q3Vyc29yKCkge1xuICBwbGFjZUtuaWdodEN1cnNvciA9ICFwbGFjZUtuaWdodEN1cnNvcjtcbiAgcGxhY2VLbmlnaHRDdXJzb3IgPyBkaXNwbGF5S25pZ2h0Q3Vyc29yKCkgOiByZW1vdmVLbmlnaHRDdXJzb3IoKTtcbiAgcGxhY2VLbmlnaHRCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgc2V0VGFyZ2V0Q3Vyc29yID0gZmFsc2U7XG4gIHNldFRhcmdldEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJzZXQtdGFyZ2V0XCIpO1xuICBjaGVja1RyYXZlcnNlQnV0dG9uU3RhdGUoKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlU2V0VGFyZ2V0Q3Vyc29yKCkge1xuICBzZXRUYXJnZXRDdXJzb3IgPSAhc2V0VGFyZ2V0Q3Vyc29yO1xuICBpZiAoc2V0VGFyZ2V0Q3Vyc29yKSBjbGVhclRhcmdldCgpO1xuICBzZXRUYXJnZXRCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwic2V0LXRhcmdldFwiKTtcbiAgcGxhY2VLbmlnaHRDdXJzb3IgPSBmYWxzZTtcbiAgcGxhY2VLbmlnaHRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgY29uc3Qga25pZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNrbmlnaHQtcGllY2VcIik7XG4gIGlmIChrbmlnaHQpIGtuaWdodC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgcmVtb3ZlS25pZ2h0Q3Vyc29yKCk7XG4gIGNoZWNrVHJhdmVyc2VCdXR0b25TdGF0ZSgpO1xufVxuXG4vLyBCdWlsZCBjaGVzcyBib2FyZDpcblxuY29uc3QgY2hlc3NCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2hlc3MtYm9hcmRcIik7XG5cbi8vIE5vcm1hbCBjaGVzcyBib2FyZHMgYXJlIDh4OFxuY29uc3QgQ0hFU1NCT0FSRF9XSURUSCA9IDg7XG5jb25zdCBDSEVTU0JPQVJEX0hFSUdIVCA9IDg7XG5cbmNvbnN0IENPTFVNTl9DT0xPUlMgPSB7IGV2ZW46IFwiYmxhY2tcIiwgb2RkOiBcIndoaXRlXCIgfTtcblxuZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgQ0hFU1NCT0FSRF9XSURUSDsgY29sdW1uKyspIHtcbiAgY29uc3QgY29sdW1uU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBjb2x1bW5TZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJjb2x1bW5cIik7XG4gIGNvbHVtblNlY3Rpb24uaWQgPSBjb2x1bW47XG4gIGZvciAobGV0IHJvdyA9IENIRVNTQk9BUkRfSEVJR0hUIC0gMTsgcm93ID49IDA7IHJvdy0tKSB7XG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcbiAgICBjb25zdCBjZWxsQ29sb3IgPSByb3cgJSAyID09PSAwID8gQ09MVU1OX0NPTE9SUy5ldmVuIDogQ09MVU1OX0NPTE9SUy5vZGQ7XG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKGNlbGxDb2xvcik7XG4gICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXBvc2l0aW9uLXhcIiwgY29sdW1uKTtcbiAgICBjZWxsLnNldEF0dHJpYnV0ZShcImRhdGEtcG9zaXRpb24teVwiLCByb3cpO1xuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmIChwbGFjZUtuaWdodEN1cnNvcikge1xuICAgICAgICBwbGFjZUtuaWdodChjZWxsKTtcbiAgICAgICAgdG9nZ2xlUGxhY2VLbmlnaHRDdXJzb3IoKTtcbiAgICAgIH0gZWxzZSBpZiAoc2V0VGFyZ2V0Q3Vyc29yKSB7XG4gICAgICAgIC8vIEtuaWdodCdzIHRhcmdldCBjYW4ndCBiZSBlcXVhbCB0byBpdHMgc3RhcnRpbmcgcG9pbnRcbiAgICAgICAgY29uc3Qga25pZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNrbmlnaHQtcGllY2VcIik7XG4gICAgICAgIGlmIChrbmlnaHQgJiYga25pZ2h0LnBhcmVudEVsZW1lbnQgPT09IGNlbGwpIHJldHVybjtcbiAgICAgICAgc2V0VGFyZ2V0KGNlbGwpO1xuICAgICAgICB0b2dnbGVTZXRUYXJnZXRDdXJzb3IoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChjb2x1bW4gPT09IDAgJiYgcm93ID09PSAwKSB7XG4gICAgICBjZWxsLnNldEF0dHJpYnV0ZShcImRhdGEtcG9zaXRpb25cIiwgXCJjb2x1bW4temVyby1yb3ctemVyb1wiKTtcbiAgICB9XG5cbiAgICBpZiAoY29sdW1uID09PSAwKSB7XG4gICAgICBjb25zdCByb3dMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgcm93TGFiZWwuY2xhc3NMaXN0LmFkZChcInJvd1wiLCBcImxhYmVsXCIpO1xuICAgICAgcm93TGFiZWwuaW5uZXJUZXh0ID0gcm93ICsgMTtcbiAgICAgIGNlbGwuYXBwZW5kQ2hpbGQocm93TGFiZWwpO1xuICAgIH1cblxuICAgIGlmIChyb3cgPT09IDApIHtcbiAgICAgIGNvbnN0IGNvbHVtbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBjb2x1bW5MYWJlbC5jbGFzc0xpc3QuYWRkKFwiY29sdW1uXCIsIFwibGFiZWxcIik7XG4gICAgICAvLyBIZXJlIEkgYWRkIGNvbHVtbiBhbmQgOTcgdG8gZ2V0IHRoZSBhc2NpaSBjb2RlIG9mIHRoZSBsb3dlciBjYXNlIGxldHRlcnMgc3RhcnRpbmcgZnJvbSBcImFcIiwgd2hpY2ggaXMgaG93XG4gICAgICAvLyBjb2x1bW5zIGFyZSBsYWJlbGVkIGluIGNoZXNzIGJvYXJkczogaHR0cHM6Ly93d3cuYXNjaWl0YWJsZS5jb20vXG4gICAgICBjb2x1bW5MYWJlbC5pbm5lclRleHQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvbHVtbiArIDk3KTtcbiAgICAgIGNlbGwuYXBwZW5kQ2hpbGQoY29sdW1uTGFiZWwpO1xuICAgIH1cblxuICAgIGNvbHVtblNlY3Rpb24uYXBwZW5kQ2hpbGQoY2VsbCk7XG4gIH1cbiAgY2hlc3NCb2FyZC5hcHBlbmRDaGlsZChjb2x1bW5TZWN0aW9uKTtcbiAgLy8gc3dhcCB0aGUgY29sb3Vyc1xuICBsZXQgdGVtcG9yYXJ5ID0gQ09MVU1OX0NPTE9SUy5ldmVuO1xuICBDT0xVTU5fQ09MT1JTLmV2ZW4gPSBDT0xVTU5fQ09MT1JTLm9kZDtcbiAgQ09MVU1OX0NPTE9SUy5vZGQgPSB0ZW1wb3Jhcnk7XG59XG5cbi8vIEJ1aWxkIGJ1dHRvbnM6XG5cbmNvbnN0IGNvbnRyb2xzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250cm9sc1wiKTtcblxuY29uc3QgcGxhY2VLbmlnaHRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xucGxhY2VLbmlnaHRCdXR0b24uaWQgPSBcInBsYWNlLWtuaWdodFwiO1xucGxhY2VLbmlnaHRCdXR0b24uaW5uZXJUZXh0ID0gXCJQbGFjZSBLbmlnaHRcIjtcbnBsYWNlS25pZ2h0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVQbGFjZUtuaWdodEN1cnNvcik7XG5jb250cm9scy5hcHBlbmRDaGlsZChwbGFjZUtuaWdodEJ1dHRvbik7XG5cbmNvbnN0IHNldFRhcmdldEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5zZXRUYXJnZXRCdXR0b24uaWQgPSBcInNldC10YXJnZXRcIjtcbnNldFRhcmdldEJ1dHRvbi5pbm5lclRleHQgPSBcIlNldCB0YXJnZXRcIjtcbnNldFRhcmdldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlU2V0VGFyZ2V0Q3Vyc29yKTtcbmNvbnRyb2xzLmFwcGVuZENoaWxkKHNldFRhcmdldEJ1dHRvbik7XG5cbmNvbnN0IHRyYXZlcnNlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbnRyYXZlcnNlQnV0dG9uLmlkID0gXCJ0cmF2ZXJzZVwiO1xudHJhdmVyc2VCdXR0b24uaW5uZXJUZXh0ID0gXCJUcmF2ZXJzZVwiO1xudHJhdmVyc2VCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xudHJhdmVyc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc3Qga25pZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNrbmlnaHQtcGllY2VcIik7XG4gIGNvbnN0IG9yaWdpblBvc2l0aW9uID0gSlNPTi5wYXJzZShcbiAgICBge1wieFwiOiAke2tuaWdodC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcbiAgICAgIFwiZGF0YS1wb3NpdGlvbi14XCJcbiAgICApfSwgXCJ5XCI6ICR7a25pZ2h0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wb3NpdGlvbi15XCIpfX1gXG4gICk7XG4gIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFyZ2V0XCIpO1xuICBjb25zdCB0YXJnZXRQb3NpdGlvbiA9IEpTT04ucGFyc2UoXG4gICAgYHtcInhcIjogJHt0YXJnZXQuZ2V0QXR0cmlidXRlKFxuICAgICAgXCJkYXRhLXBvc2l0aW9uLXhcIlxuICAgICl9LCBcInlcIjogJHt0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wb3NpdGlvbi15XCIpfX1gXG4gICk7XG4gIGNvbnN0IHNob3J0ZXN0UGF0aCA9IGtuaWdodE1vdmVzKG9yaWdpblBvc2l0aW9uLCB0YXJnZXRQb3NpdGlvbik7XG4gIHRyYXZlcnNlKHNob3J0ZXN0UGF0aCk7XG4gIHRyYXZlcnNlQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbn0pO1xuY29udHJvbHMuYXBwZW5kQ2hpbGQodHJhdmVyc2VCdXR0b24pO1xuXG5mdW5jdGlvbiBjbGVhckJvYXJkKCkge1xuICBjbGVhcktuaWdodCgpO1xuICBjbGVhclRhcmdldCgpO1xuICBjbGVhck1vdmVzKCk7XG4gIGNoZWNrVHJhdmVyc2VCdXR0b25TdGF0ZSgpO1xufVxuXG5jb25zdCBjbGVhckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5jbGVhckJ1dHRvbi5pZCA9IFwiY2xlYXJcIjtcbmNsZWFyQnV0dG9uLmlubmVyVGV4dCA9IFwiQ2xlYXJcIjtcbmNsZWFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGVhckJvYXJkKTtcbmNvbnRyb2xzLmFwcGVuZENoaWxkKGNsZWFyQnV0dG9uKTtcblxuLy8gSGlkZSB0aGUga25pZ2h0IHBpZWNlIGlmIHRoZSBicm93c2VyIGlzIHJlc2l6ZWQgZHVyaW5nIHRyYXZlcnNhbCBhcyByZXNpemluZyB0aGVuIHdvdWxkIG1lc3MgdXAgdGhlIGtuaWdodCdzIHBvc2l0aW9uXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gIC8vIElmIHRoZSBwbGFjZSBrbmlnaHQgYnV0dG9uIGlzIGVuYWJsZWQsIHRoYXQgbWVhbnMgdGhlIHRyYXZlcnNhbCBpc24ndCB0YWtpbmcgcGxhY2VcbiAgaWYgKCFwbGFjZUtuaWdodEJ1dHRvbi5kaXNhYmxlZCkgcmV0dXJuO1xuICBjb25zdCBrbmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2tuaWdodC1waWVjZVwiKTtcbiAga25pZ2h0LnN0eWxlLm9wYWNpdHkgPSAwO1xufSk7XG5cbi8vIEJ1aWxkIHZvbHVtZSB0b2dnbGU6XG5sZXQgdm9sdW1lID0gdHJ1ZTtcblxuY29uc3Qgdm9sdW1lVG9nZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG52b2x1bWVUb2dnbGUuaWQgPSBcInZvbHVtZS10b2dnbGVcIjtcbnZvbHVtZVRvZ2dsZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZvbHVtZVwiLCB2b2x1bWUpO1xudm9sdW1lVG9nZ2xlLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiLCBcImZhLXZvbHVtZS1oaWdoXCIpO1xudm9sdW1lVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHZvbHVtZVRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKFwiZmEtdm9sdW1lLWhpZ2hcIik7XG4gIHZvbHVtZVRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKFwiZmEtdm9sdW1lLXhtYXJrXCIpO1xuICB2b2x1bWUgPSAhdm9sdW1lO1xuICB2b2x1bWVUb2dnbGUuc2V0QXR0cmlidXRlKFwiZGF0YS12b2x1bWVcIiwgdm9sdW1lKTtcbn0pO1xuYm9keS5hcHBlbmRDaGlsZCh2b2x1bWVUb2dnbGUpO1xuXG4vLyBCdWlsZCBnaXRodWIgbGlua1xuY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuZ2l0aHViTGluay5zZXRBdHRyaWJ1dGUoXG4gIFwiaHJlZlwiLFxuICBcImh0dHBzOi8vZ2l0aHViLmNvbS9GZWRlTG9wZXoxNy9rbmlnaHRzLXRyYXZhaWxzXCJcbik7XG5naXRodWJMaW5rLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcbmNvbnN0IGdpdGh1Ykljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbmdpdGh1Ykljb24uaWQgPSBcImdpdGh1Yi1pY29uXCI7XG5naXRodWJJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1icmFuZHNcIiwgXCJmYS1naXRodWJcIik7XG5naXRodWJMaW5rLmFwcGVuZENoaWxkKGdpdGh1Ykljb24pO1xuYm9keS5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==