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
const KNIGHT_MOVES = [
  { x: -1, y: 2 },
  { x: 1, y: 2 },
  { x: -1, y: -2 },
  { x: 1, y: -2 },
  { x: -2, y: 1 },
  { x: -2, y: -1 },
  { x: 2, y: 1 },
  { x: 2, y: -1 },
];

function allowedMoves({ x, y }) {
  const allowedMoves = [];

  KNIGHT_MOVES.forEach((move) => {
    const potentialMoveX = x + move.x;
    const potentialMoveY = y + move.y;
    if (
      potentialMoveX < 8 &&
      potentialMoveX > -1 &&
      potentialMoveY < 8 &&
      potentialMoveY > -1
    ) {
      allowedMoves.push({ x: potentialMoveX, y: potentialMoveY });
    }
  });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sT0FBTztBQUNiO0FBQ0EsTUFBTSxTQUFTLHNEQUFzRDtBQUNyRTtBQUNBO0FBQ0E7QUFDQSxNQUFNLE9BQU87QUFDYjtBQUNBLE1BQU0sU0FBUyx3Q0FBd0M7QUFDdkQ7QUFDQSx1QkFBdUIsZ0VBQVc7QUFDbEMsRUFBRSxxREFBUTtBQUNWO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0EsRUFBRSxnRUFBVztBQUNiLEVBQUUsZ0VBQVc7QUFDYixFQUFFLCtEQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvYXVkaW8vY2hlc3MtcGllY2Utc291bmQubXAzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL2ltYWdlcy9mYXZpY29uLmljbyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL2FsbG93ZWQtbW92ZXMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9rbmlnaHRzLXRyYXZhaWxzLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvbm9kZS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL3F1ZXVlLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvc291bmQtZWZmZWN0cy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL3RyYXZlcnNlLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvdWktY2VsbHMtZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy91c2VyLWludGVyZmFjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMva25pZ2h0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tY2VsbHMtd2hpdGU6ICNmNWY1ZjU7XFxuICAtLWNlbGxzLWJsYWNrOiAjMjkyZjJmO1xcbiAgLS1wbGFjZS1rbmlnaHQtY2VsbHMtY29sb3I6ICM5ZmRiMjY7XFxuICAtLXNldC10YXJnZXQtY2VsbHMtY29sb3I6ICNkYzE0M2M7XFxuICAtLW1vdmUtY2VsbHMtY29sb3I6ICM0NjgyYjQ7XFxuICAtLWNoZXNzLWJvYXJkLWxhYmxlcy1mb250LXNpemU6IDIycHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChcXG4gICAgY2lyY2xlIGZhcnRoZXN0LWNvcm5lciBhdCAxMCUgMjAlLFxcbiAgICByZ2JhKDE0LCAxNzQsIDg3LCAxKSAwJSxcXG4gICAgcmdiYSgxMiwgMTE2LCAxMTcsIDEpIDkwJVxcbiAgKTtcXG4gIGNvbG9yOiAjZjhmOGZmO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5ib2R5LnBsYWNlLWtuaWdodCB7XFxuICBjdXJzb3I6IG5vbmU7XFxufVxcblxcbmgxI3RpdGxlIHtcXG4gIG1hcmdpbjogMzBweCAwO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG5tYWluIHtcXG4gIGZsZXg6IDE7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuI2NoZXNzLWJvYXJkIHtcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgd2lkdGg6IG1pbig2MHZtaW4sIDYwMHB4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIG91dGxpbmU6IHNvbGlkIDFweCAjMDAwMDAwO1xcbn1cXG5cXG4jY2hlc3MtYm9hcmQgLmNvbHVtbiB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2NoZXNzLWJvYXJkIC5jZWxsIHtcXG4gIGZsZXg6IDE7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmJvZHkubm8tY3Vyc29yICNjaGVzcy1ib2FyZCAuY2VsbCB7XFxuICBjdXJzb3I6IG5vbmU7XFxufVxcblxcbmJvZHkucGxhY2Uta25pZ2h0ICNjaGVzcy1ib2FyZCAuY2VsbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wbGFjZS1rbmlnaHQtY2VsbHMtY29sb3IpO1xcbn1cXG5cXG4jY2hlc3MtYm9hcmQgI3N0YXJ0aW5nLXBvc2l0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBsYWNlLWtuaWdodC1jZWxscy1jb2xvcik7XFxufVxcblxcbmJvZHkuc2V0LXRhcmdldCAjY2hlc3MtYm9hcmQgLmNlbGw6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tc2V0LXRhcmdldC1jZWxscy1jb2xvcik7XFxufVxcblxcbiNjaGVzcy1ib2FyZCAjdGFyZ2V0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNldC10YXJnZXQtY2VsbHMtY29sb3IpO1xcbn1cXG5cXG4jY2hlc3MtYm9hcmQgLm1vdmUge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNjaGVzcy1ib2FyZCAuY2VsbDpub3QoI3RhcmdldCkgLm1vdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW92ZS1jZWxscy1jb2xvcik7XFxufVxcblxcbiNjaGVzcy1ib2FyZCAubW92ZSBwIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvIE1vbm9cXFwiLCBtb25vc3BhY2U7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4jY2hlc3MtYm9hcmQgLmNlbGwud2hpdGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2VsbHMtd2hpdGUpO1xcbn1cXG5cXG4jY2hlc3MtYm9hcmQgLmNlbGwuYmxhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2VsbHMtYmxhY2spO1xcbn1cXG5cXG4jY2hlc3MtYm9hcmQgLmxhYmVsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvIE1vbm9cXFwiLCBtb25vc3BhY2U7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jY2hlc3MtYm9hcmQgLmNlbGwud2hpdGUgLmxhYmVsIHtcXG4gIGNvbG9yOiB2YXIoLS1jZWxscy1ibGFjayk7XFxufVxcblxcbiNjaGVzcy1ib2FyZCAuY2VsbC5ibGFjayAubGFiZWwge1xcbiAgY29sb3I6IHZhcigtLWNlbGxzLXdoaXRlKTtcXG59XFxuXFxuI2NoZXNzLWJvYXJkIC5jZWxsW2RhdGEtcG9zaXRpb249XFxcImNvbHVtbi16ZXJvLXJvdy16ZXJvXFxcIl0gLmNvbHVtbi5sYWJlbCB7XFxuICBtYXJnaW4tbGVmdDogMWNoO1xcbn1cXG5cXG4jY29udHJvbHMge1xcbiAgd2lkdGg6IG1pbig5MHZtaW4sIDYwMHB4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyJTtcXG59XFxuXFxuI2NvbnRyb2xzIGJ1dHRvbiB7XFxuICBmbGV4OiAxO1xcbiAgYXNwZWN0LXJhdGlvOiAzLzE7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAgMTAgMTAgLyAzMCUpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogc29saWQgMXB4ICNjMmY5YzI7XFxufVxcblxcbiNjb250cm9scyBidXR0b24uYWN0aXZlLFxcbiNjb250cm9scyBidXR0b246YWN0aXZlOm5vdCg6ZGlzYWJsZWQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4YjAwMDA7XFxuICBib3JkZXItY29sb3I6ICM4YjAwMDA7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4jY29udHJvbHMgYnV0dG9uOmRpc2FibGVkIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuI2tuaWdodC1waWVjZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMjUlO1xcbiAgcmlnaHQ6IDAlO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygtMXB4IC0xcHggMXB4IGRhcmtzbGF0ZWdyZXkpO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uY3VzdG9tLWN1cnNvciB7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uY3VzdG9tLWN1cnNvci5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2tuaWdodC1jdXJzb3Ige1xcbiAgY3Vyc29yOiBub25lO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbiN2b2x1bWUtdG9nZ2xlLFxcbiNnaXRodWItaWNvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFxuICB0b3A6IDIlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44KTtcXG59XFxuXFxuI3ZvbHVtZS10b2dnbGU6aG92ZXIsXFxuI2dpdGh1Yi1pY29uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMSk7XFxufVxcblxcbiNnaXRodWItaWNvbiB7XFxuICByaWdodDogMiU7XFxufVxcblxcbiN2b2x1bWUtdG9nZ2xlIHtcXG4gIHJpZ2h0OiBjYWxjKDIlICsgMS41cmVtICsgMSUpO1xcbn1cXG5cXG5hLFxcbmE6dmlzaXRlZCxcXG5hOmhvdmVyLFxcbmE6YWN0aXZlIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpLCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgOnJvb3Qge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICB9XFxuXFxuICAjY2hlc3MtYm9hcmQge1xcbiAgICB3aWR0aDogbWluKDkwdm1pbiwgNjAwcHgpO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixtQ0FBbUM7RUFDbkMsaUNBQWlDO0VBQ2pDLDJCQUEyQjtFQUMzQixvQ0FBb0M7RUFDcEMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsaUNBQWlDO0VBQ2pDOzs7O0dBSUM7RUFDRCxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLE9BQU87RUFDUCxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsT0FBTztFQUNQLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGVBQWU7RUFDZix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxTQUFTO0VBQ1QscUNBQXFDO0VBQ3JDLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCxxQ0FBcUM7RUFDckMsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLE9BQU87QUFDVDs7QUFFQTtFQUNFLE9BQU87RUFDUCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHFDQUFxQztFQUNyQywwQkFBMEI7RUFDMUIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsd0JBQXdCO0VBQ3hCLGdEQUFnRDtFQUNoRCx5QkFBeUI7RUFDekIsa0NBQWtDO0VBQ2xDLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gseURBQTRDO0VBQzVDLHdCQUF3QjtFQUN4Qiw0QkFBNEI7QUFDOUI7O0FBRUE7O0VBRUUsa0JBQWtCOztFQUVsQixPQUFPO0VBQ1AsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUUsc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTs7OztFQUlFLFlBQVk7QUFDZDs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tY2VsbHMtd2hpdGU6ICNmNWY1ZjU7XFxuICAtLWNlbGxzLWJsYWNrOiAjMjkyZjJmO1xcbiAgLS1wbGFjZS1rbmlnaHQtY2VsbHMtY29sb3I6ICM5ZmRiMjY7XFxuICAtLXNldC10YXJnZXQtY2VsbHMtY29sb3I6ICNkYzE0M2M7XFxuICAtLW1vdmUtY2VsbHMtY29sb3I6ICM0NjgyYjQ7XFxuICAtLWNoZXNzLWJvYXJkLWxhYmxlcy1mb250LXNpemU6IDIycHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChcXG4gICAgY2lyY2xlIGZhcnRoZXN0LWNvcm5lciBhdCAxMCUgMjAlLFxcbiAgICByZ2JhKDE0LCAxNzQsIDg3LCAxKSAwJSxcXG4gICAgcmdiYSgxMiwgMTE2LCAxMTcsIDEpIDkwJVxcbiAgKTtcXG4gIGNvbG9yOiAjZjhmOGZmO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5ib2R5LnBsYWNlLWtuaWdodCB7XFxuICBjdXJzb3I6IG5vbmU7XFxufVxcblxcbmgxI3RpdGxlIHtcXG4gIG1hcmdpbjogMzBweCAwO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG5tYWluIHtcXG4gIGZsZXg6IDE7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuI2NoZXNzLWJvYXJkIHtcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgd2lkdGg6IG1pbig2MHZtaW4sIDYwMHB4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIG91dGxpbmU6IHNvbGlkIDFweCAjMDAwMDAwO1xcbn1cXG5cXG4jY2hlc3MtYm9hcmQgLmNvbHVtbiB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2NoZXNzLWJvYXJkIC5jZWxsIHtcXG4gIGZsZXg6IDE7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmJvZHkubm8tY3Vyc29yICNjaGVzcy1ib2FyZCAuY2VsbCB7XFxuICBjdXJzb3I6IG5vbmU7XFxufVxcblxcbmJvZHkucGxhY2Uta25pZ2h0ICNjaGVzcy1ib2FyZCAuY2VsbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wbGFjZS1rbmlnaHQtY2VsbHMtY29sb3IpO1xcbn1cXG5cXG4jY2hlc3MtYm9hcmQgI3N0YXJ0aW5nLXBvc2l0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBsYWNlLWtuaWdodC1jZWxscy1jb2xvcik7XFxufVxcblxcbmJvZHkuc2V0LXRhcmdldCAjY2hlc3MtYm9hcmQgLmNlbGw6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tc2V0LXRhcmdldC1jZWxscy1jb2xvcik7XFxufVxcblxcbiNjaGVzcy1ib2FyZCAjdGFyZ2V0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNldC10YXJnZXQtY2VsbHMtY29sb3IpO1xcbn1cXG5cXG4jY2hlc3MtYm9hcmQgLm1vdmUge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNjaGVzcy1ib2FyZCAuY2VsbDpub3QoI3RhcmdldCkgLm1vdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW92ZS1jZWxscy1jb2xvcik7XFxufVxcblxcbiNjaGVzcy1ib2FyZCAubW92ZSBwIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvIE1vbm9cXFwiLCBtb25vc3BhY2U7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4jY2hlc3MtYm9hcmQgLmNlbGwud2hpdGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2VsbHMtd2hpdGUpO1xcbn1cXG5cXG4jY2hlc3MtYm9hcmQgLmNlbGwuYmxhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2VsbHMtYmxhY2spO1xcbn1cXG5cXG4jY2hlc3MtYm9hcmQgLmxhYmVsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvIE1vbm9cXFwiLCBtb25vc3BhY2U7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jY2hlc3MtYm9hcmQgLmNlbGwud2hpdGUgLmxhYmVsIHtcXG4gIGNvbG9yOiB2YXIoLS1jZWxscy1ibGFjayk7XFxufVxcblxcbiNjaGVzcy1ib2FyZCAuY2VsbC5ibGFjayAubGFiZWwge1xcbiAgY29sb3I6IHZhcigtLWNlbGxzLXdoaXRlKTtcXG59XFxuXFxuI2NoZXNzLWJvYXJkIC5jZWxsW2RhdGEtcG9zaXRpb249XFxcImNvbHVtbi16ZXJvLXJvdy16ZXJvXFxcIl0gLmNvbHVtbi5sYWJlbCB7XFxuICBtYXJnaW4tbGVmdDogMWNoO1xcbn1cXG5cXG4jY29udHJvbHMge1xcbiAgd2lkdGg6IG1pbig5MHZtaW4sIDYwMHB4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyJTtcXG59XFxuXFxuI2NvbnRyb2xzIGJ1dHRvbiB7XFxuICBmbGV4OiAxO1xcbiAgYXNwZWN0LXJhdGlvOiAzLzE7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAgMTAgMTAgLyAzMCUpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogc29saWQgMXB4ICNjMmY5YzI7XFxufVxcblxcbiNjb250cm9scyBidXR0b24uYWN0aXZlLFxcbiNjb250cm9scyBidXR0b246YWN0aXZlOm5vdCg6ZGlzYWJsZWQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4YjAwMDA7XFxuICBib3JkZXItY29sb3I6ICM4YjAwMDA7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4jY29udHJvbHMgYnV0dG9uOmRpc2FibGVkIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuI2tuaWdodC1waWVjZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMjUlO1xcbiAgcmlnaHQ6IDAlO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygtMXB4IC0xcHggMXB4IGRhcmtzbGF0ZWdyZXkpO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uY3VzdG9tLWN1cnNvciB7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uY3VzdG9tLWN1cnNvci5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2tuaWdodC1jdXJzb3Ige1xcbiAgY3Vyc29yOiBub25lO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltYWdlcy9rbmlnaHQucG5nXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4jdm9sdW1lLXRvZ2dsZSxcXG4jZ2l0aHViLWljb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcblxcbiAgdG9wOiAyJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XFxufVxcblxcbiN2b2x1bWUtdG9nZ2xlOmhvdmVyLFxcbiNnaXRodWItaWNvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEpO1xcbn1cXG5cXG4jZ2l0aHViLWljb24ge1xcbiAgcmlnaHQ6IDIlO1xcbn1cXG5cXG4jdm9sdW1lLXRvZ2dsZSB7XFxuICByaWdodDogY2FsYygyJSArIDEuNXJlbSArIDElKTtcXG59XFxuXFxuYSxcXG5hOnZpc2l0ZWQsXFxuYTpob3ZlcixcXG5hOmFjdGl2ZSB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSwgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIDpyb290IHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgfVxcblxcbiAgI2NoZXNzLWJvYXJkIHtcXG4gICAgd2lkdGg6IG1pbig5MHZtaW4sIDYwMHB4KTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImF1ZGlvL2NoZXNzLXBpZWNlLXNvdW5kLm1wM1wiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNmQ2MjFhZmI3NGI1NjJhYWQ3YjYyNmI1NTFlYzRjMjMuaWNvXCI7IiwiY29uc3QgS05JR0hUX01PVkVTID0gW1xuICB7IHg6IC0xLCB5OiAyIH0sXG4gIHsgeDogMSwgeTogMiB9LFxuICB7IHg6IC0xLCB5OiAtMiB9LFxuICB7IHg6IDEsIHk6IC0yIH0sXG4gIHsgeDogLTIsIHk6IDEgfSxcbiAgeyB4OiAtMiwgeTogLTEgfSxcbiAgeyB4OiAyLCB5OiAxIH0sXG4gIHsgeDogMiwgeTogLTEgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFsbG93ZWRNb3Zlcyh7IHgsIHkgfSkge1xuICBjb25zdCBhbGxvd2VkTW92ZXMgPSBbXTtcblxuICBLTklHSFRfTU9WRVMuZm9yRWFjaCgobW92ZSkgPT4ge1xuICAgIGNvbnN0IHBvdGVudGlhbE1vdmVYID0geCArIG1vdmUueDtcbiAgICBjb25zdCBwb3RlbnRpYWxNb3ZlWSA9IHkgKyBtb3ZlLnk7XG4gICAgaWYgKFxuICAgICAgcG90ZW50aWFsTW92ZVggPCA4ICYmXG4gICAgICBwb3RlbnRpYWxNb3ZlWCA+IC0xICYmXG4gICAgICBwb3RlbnRpYWxNb3ZlWSA8IDggJiZcbiAgICAgIHBvdGVudGlhbE1vdmVZID4gLTFcbiAgICApIHtcbiAgICAgIGFsbG93ZWRNb3Zlcy5wdXNoKHsgeDogcG90ZW50aWFsTW92ZVgsIHk6IHBvdGVudGlhbE1vdmVZIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGFsbG93ZWRNb3Zlcztcbn1cbiIsImltcG9ydCBhbGxvd2VkTW92ZXMgZnJvbSBcIi4vYWxsb3dlZC1tb3Zlcy5qc1wiO1xuaW1wb3J0IE5vZGUgZnJvbSBcIi4vbm9kZS5qc1wiO1xuaW1wb3J0IFF1ZXVlIGZyb20gXCIuL3F1ZXVlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGtuaWdodE1vdmVzKHF1ZXVlLCB0YXJnZXQpIHtcbiAgaWYgKCEocXVldWUgaW5zdGFuY2VvZiBRdWV1ZSkpIHtcbiAgICBjb25zdCBzdGFydGluZ1BvaW50ID0gcXVldWU7XG4gICAgcXVldWUgPSBuZXcgUXVldWUoKTtcbiAgICBjb25zdCBxdWV1ZU9iamVjdCA9IHsgcG9zaXRpb246IHN0YXJ0aW5nUG9pbnQsIHBhcmVudDogbnVsbCB9O1xuICAgIHF1ZXVlLmVucXVldWUocXVldWVPYmplY3QpO1xuICB9XG5cbiAgY29uc3QgY3VycmVudFF1ZXVlRWxlbWVudCA9IHF1ZXVlLmRlcXVldWUoKTtcbiAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gY3VycmVudFF1ZXVlRWxlbWVudC5wb3NpdGlvbjtcbiAgY29uc3QgY3VycmVudFBhcmVudCA9IGN1cnJlbnRRdWV1ZUVsZW1lbnQucGFyZW50O1xuICBjb25zdCBjdXJyZW50Tm9kZSA9IG5ldyBOb2RlKGN1cnJlbnRQb3NpdGlvbiwgY3VycmVudFBhcmVudCk7XG5cbiAgLy8gQmFzZSBjYXNlOiB0YXJnZXQgcG9zaXRpb24gaGFzIGJlZW4gZm91bmRcbiAgaWYgKGN1cnJlbnRQb3NpdGlvbi54ID09PSB0YXJnZXQueCAmJiBjdXJyZW50UG9zaXRpb24ueSA9PT0gdGFyZ2V0LnkpIHtcbiAgICByZXR1cm4gY3VycmVudE5vZGUucGF0aC5jb25jYXQoY3VycmVudFBvc2l0aW9uKTtcbiAgfVxuXG4gIC8vIFJlY3Vyc2l2ZSBjYXNlXG4gIGNvbnN0IGlzVW52aXNpdGVkID0gKHBvc2l0aW9uKSA9PiB7XG4gICAgcmV0dXJuICFKU09OLnN0cmluZ2lmeShjdXJyZW50Tm9kZS5wYXRoKS5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShwb3NpdGlvbikpO1xuICB9O1xuXG4gIGNvbnN0IHBvdGVudGlhbE1vdmVzID0gYWxsb3dlZE1vdmVzKGN1cnJlbnRQb3NpdGlvbikuZmlsdGVyKGlzVW52aXNpdGVkKTtcblxuICBwb3RlbnRpYWxNb3Zlcy5mb3JFYWNoKChtb3ZlKSA9PiB7XG4gICAgcXVldWUuZW5xdWV1ZSh7IHBvc2l0aW9uOiBtb3ZlLCBwYXJlbnQ6IGN1cnJlbnROb2RlIH0pO1xuICB9KTtcblxuICByZXR1cm4ga25pZ2h0TW92ZXMocXVldWUsIHRhcmdldCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlIHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIHBhcmVudCkge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLnBhdGggPSB0aGlzLmdldFBhdGgoKTtcbiAgfVxuXG4gIGdldFBhdGgoKSB7XG4gICAgY29uc3QgcGF0aCA9IFtdO1xuICAgIGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudDtcbiAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICBwYXRoLnVuc2hpZnQocGFyZW50LnBvc2l0aW9uKTtcbiAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBRdWV1ZSB7XG4gIHF1ZXVlID0gW107XG5cbiAgZW5xdWV1ZSh2YWx1ZSkge1xuICAgIHRoaXMucXVldWUucHVzaCh2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXMucXVldWU7XG4gIH1cblxuICBkZXF1ZXVlKCkge1xuICAgIHJldHVybiB0aGlzLnF1ZXVlLnNoaWZ0KCk7XG4gIH1cbn1cbiIsImltcG9ydCBjaGVzc1BpZWNlU291bmRGaWxlIGZyb20gXCIuL2F1ZGlvL2NoZXNzLXBpZWNlLXNvdW5kLm1wM1wiO1xuXG5jb25zdCBjaGVzc1BpZWNlU291bmQgPSBuZXcgQXVkaW8oY2hlc3NQaWVjZVNvdW5kRmlsZSk7XG5jaGVzc1BpZWNlU291bmQucHJlbG9hZCA9IFwiYXV0b1wiO1xuXG5mdW5jdGlvbiBzb3VuZE9uKCkge1xuICBjb25zdCB2b2x1bWVPbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdm9sdW1lLXRvZ2dsZVtkYXRhLXZvbHVtZT0ndHJ1ZSddXCIpO1xuICByZXR1cm4gdm9sdW1lT24gPyB0cnVlIDogZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBsYXlDaGVzc1BpZWNlU291bmQoKSB7XG4gIGlmIChzb3VuZE9uKCkpIGNoZXNzUGllY2VTb3VuZC5wbGF5KCk7XG59XG4iLCJpbXBvcnQgcGxheUNoZXNzUGllY2VTb3VuZCBmcm9tIFwiLi9zb3VuZC1lZmZlY3RzLmpzXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIHBhdXNlKHBhdXNlRHVyYXRpb24pIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgc2V0VGltZW91dChyZXNvbHZlLCBwYXVzZUR1cmF0aW9uKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHRyYXZlcnNlKHBhdGgpIHtcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjY29udHJvbHMgYnV0dG9uOm5vdCgjdHJhdmVyc2UpXCIpO1xuICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gIH0pO1xuXG4gIGNvbnN0IGtuaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIja25pZ2h0LXBpZWNlXCIpO1xuICBjb25zdCBrbmlnaHRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGtuaWdodCk7XG4gIGNvbnN0IG9yaWdpbmFsS25pZ2h0Qm90dG9tTWFyZ2luID0ga25pZ2h0U3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImJvdHRvbVwiKTtcbiAgLy8gSW4gbGluZSAxOSwgZ2V0UHJvcGVydHlWYWx1ZSByZXR1cm5zIHNvbWV0aGluZyBsaWtlIFwiMXNcIiwgc28gSSBnZXQgcmlkIG9mIHRoZSBcInNcIiBhbmQgbXVsdGlwbHkgaXQgYnkgYSB0aG91c2FuZFxuICAvLyBpbiBvcmRlciB0byBnZXQgdGhlIHByb3BlcnR5IGluIG1pbGlzZWNvbmRzICh3aXRob3V0IHRoZSBcIm1zXCIgdW5pdCkgYW5kIHBhc3MgaXQgYXMgdGhlIGFyZ3VtZW50IGZvciB0aGUgcGF1c2UgZnVuY3Rpb25cbiAgY29uc3Qga25pZ2h0VHJhbnNpdGlvbkR1cmF0aW9uID1cbiAgICBrbmlnaHRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwidHJhbnNpdGlvbi1kdXJhdGlvblwiKS5zbGljZSgwLCAtMSkgKiAxMDAwO1xuXG4gIGZvciAobGV0IHBvc2l0aW9uSW5kZXggPSAxOyBwb3NpdGlvbkluZGV4IDwgcGF0aC5sZW5ndGg7IHBvc2l0aW9uSW5kZXgrKykge1xuICAgIGNvbnN0IHByZXZpb3VzUG9zaXRpb24gPSBwYXRoW3Bvc2l0aW9uSW5kZXggLSAxXTtcbiAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSBwYXRoW3Bvc2l0aW9uSW5kZXhdO1xuXG4gICAgY29uc3QgcHJldmlvdXNCb3R0b21NYXJnaW4gPSB3aW5kb3dcbiAgICAgIC5nZXRDb21wdXRlZFN0eWxlKGtuaWdodClcbiAgICAgIC5nZXRQcm9wZXJ0eVZhbHVlKFwiYm90dG9tXCIpO1xuICAgIGNvbnN0IHByZXZpb3VzUmlnaHRNYXJnaW4gPSB3aW5kb3dcbiAgICAgIC5nZXRDb21wdXRlZFN0eWxlKGtuaWdodClcbiAgICAgIC5nZXRQcm9wZXJ0eVZhbHVlKFwicmlnaHRcIik7XG5cbiAgICAvLyB0b3BcbiAgICBpZiAoY3VycmVudFBvc2l0aW9uLnkgPT09IHByZXZpb3VzUG9zaXRpb24ueSArIDIpIHtcbiAgICAgIGtuaWdodC5zdHlsZS5ib3R0b20gPSBgY2FsYygke3ByZXZpb3VzQm90dG9tTWFyZ2lufSArIDIwMCUpYDtcbiAgICAgIGF3YWl0IHBhdXNlKGtuaWdodFRyYW5zaXRpb25EdXJhdGlvbik7XG4gICAgICAvLyBsZWZ0XG4gICAgICBpZiAoY3VycmVudFBvc2l0aW9uLnggPT09IHByZXZpb3VzUG9zaXRpb24ueCAtIDEpIHtcbiAgICAgICAga25pZ2h0LnN0eWxlLnJpZ2h0ID0gYGNhbGMoJHtwcmV2aW91c1JpZ2h0TWFyZ2lufSArIDEwMCUpYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHJpZ2h0XG4gICAgICAgIGtuaWdodC5zdHlsZS5yaWdodCA9IGBjYWxjKCR7cHJldmlvdXNSaWdodE1hcmdpbn0gLSAxMDAlKWA7XG4gICAgICB9XG4gICAgICAvLyBib3R0b21cbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRQb3NpdGlvbi55ID09PSBwcmV2aW91c1Bvc2l0aW9uLnkgLSAyKSB7XG4gICAgICBrbmlnaHQuc3R5bGUuYm90dG9tID0gYGNhbGMoJHtwcmV2aW91c0JvdHRvbU1hcmdpbn0gLSAyMDAlKWA7XG4gICAgICBhd2FpdCBwYXVzZShrbmlnaHRUcmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgLy8gbGVmdFxuICAgICAgaWYgKGN1cnJlbnRQb3NpdGlvbi54ID09PSBwcmV2aW91c1Bvc2l0aW9uLnggLSAxKSB7XG4gICAgICAgIGtuaWdodC5zdHlsZS5yaWdodCA9IGBjYWxjKCR7cHJldmlvdXNSaWdodE1hcmdpbn0gKyAxMDAlKWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyByaWdodFxuICAgICAgICBrbmlnaHQuc3R5bGUucmlnaHQgPSBgY2FsYygke3ByZXZpb3VzUmlnaHRNYXJnaW59IC0gMTAwJSlgO1xuICAgICAgfVxuICAgICAgLy8gbGVmdFxuICAgIH0gZWxzZSBpZiAoY3VycmVudFBvc2l0aW9uLnggPT09IHByZXZpb3VzUG9zaXRpb24ueCAtIDIpIHtcbiAgICAgIGtuaWdodC5zdHlsZS5yaWdodCA9IGBjYWxjKCR7cHJldmlvdXNSaWdodE1hcmdpbn0gKyAyMDAlKWA7XG4gICAgICBhd2FpdCBwYXVzZShrbmlnaHRUcmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgLy8gdG9wXG4gICAgICBpZiAoY3VycmVudFBvc2l0aW9uLnkgPT09IHByZXZpb3VzUG9zaXRpb24ueSArIDEpIHtcbiAgICAgICAga25pZ2h0LnN0eWxlLmJvdHRvbSA9IGBjYWxjKCR7cHJldmlvdXNCb3R0b21NYXJnaW59ICsgMTAwJSlgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gYm90dG9tXG4gICAgICAgIGtuaWdodC5zdHlsZS5ib3R0b20gPSBgY2FsYygke3ByZXZpb3VzQm90dG9tTWFyZ2lufSAtIDEwMCUpYDtcbiAgICAgIH1cbiAgICAgIC8vIHJpZ2h0XG4gICAgfSBlbHNlIHtcbiAgICAgIGtuaWdodC5zdHlsZS5yaWdodCA9IGBjYWxjKCR7cHJldmlvdXNSaWdodE1hcmdpbn0gLSAyMDAlKWA7XG4gICAgICBhd2FpdCBwYXVzZShrbmlnaHRUcmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgLy8gdG9wXG4gICAgICBpZiAoY3VycmVudFBvc2l0aW9uLnkgPT09IHByZXZpb3VzUG9zaXRpb24ueSArIDEpIHtcbiAgICAgICAga25pZ2h0LnN0eWxlLmJvdHRvbSA9IGBjYWxjKCR7cHJldmlvdXNCb3R0b21NYXJnaW59ICsgMTAwJSlgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gYm90dG9tXG4gICAgICAgIGtuaWdodC5zdHlsZS5ib3R0b20gPSBgY2FsYygke3ByZXZpb3VzQm90dG9tTWFyZ2lufSAtIDEwMCUpYDtcbiAgICAgIH1cbiAgICB9XG4gICAgYXdhaXQgcGF1c2Uoa25pZ2h0VHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICBwbGF5Q2hlc3NQaWVjZVNvdW5kKCk7XG4gICAgYXdhaXQgcGF1c2Uoa25pZ2h0VHJhbnNpdGlvbkR1cmF0aW9uICogMik7XG5cbiAgICBjb25zdCBjdXJyZW50TW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIGN1cnJlbnRNb3ZlLmNsYXNzTGlzdC5hZGQoXCJtb3ZlXCIpO1xuICAgIGN1cnJlbnRNb3ZlLmlkID0gcG9zaXRpb25JbmRleDtcbiAgICBjb25zdCBtb3ZlTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbW92ZU51bWJlci5pbm5lclRleHQgPSBwb3NpdGlvbkluZGV4O1xuICAgIGN1cnJlbnRNb3ZlLmFwcGVuZENoaWxkKG1vdmVOdW1iZXIpO1xuICAgIGNvbnN0IGN1cnJlbnRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuY2VsbFtkYXRhLXBvc2l0aW9uLXg9JyR7Y3VycmVudFBvc2l0aW9uLnh9J11bZGF0YS1wb3NpdGlvbi15PScke2N1cnJlbnRQb3NpdGlvbi55fSddYFxuICAgICk7XG4gICAgY3VycmVudENlbGwuYXBwZW5kQ2hpbGQoY3VycmVudE1vdmUpO1xuXG4gICAgaWYgKHBvc2l0aW9uSW5kZXggPT09IHBhdGgubGVuZ3RoIC0gMSkge1xuICAgICAga25pZ2h0LnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgYXdhaXQgcGF1c2Uoa25pZ2h0VHJhbnNpdGlvbkR1cmF0aW9uKTtcblxuICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB9KTtcblxuICAgICAga25pZ2h0LnN0eWxlLmJvdHRvbSA9IG9yaWdpbmFsS25pZ2h0Qm90dG9tTWFyZ2luO1xuICAgICAga25pZ2h0LnN0eWxlLnJpZ2h0ID0gMDtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBrbmlnaHRJbWFnZVNyYyBmcm9tIFwiLi9pbWFnZXMva25pZ2h0LnBuZ1wiO1xuaW1wb3J0IHBsYXlDaGVzc1BpZWNlU291bmQgZnJvbSBcIi4vc291bmQtZWZmZWN0cy5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcGxhY2VLbmlnaHQoY2VsbCkge1xuICBwbGF5Q2hlc3NQaWVjZVNvdW5kKCk7XG4gIGNvbnN0IGtuaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGtuaWdodC5zcmMgPSBrbmlnaHRJbWFnZVNyYztcbiAga25pZ2h0LmlkID0gXCJrbmlnaHQtcGllY2VcIjtcbiAga25pZ2h0LmFsdCA9IFwiS25pZ2h0IHBpZWNlXCI7XG4gIGNlbGwuYXBwZW5kQ2hpbGQoa25pZ2h0KTtcbiAgY2VsbC5pZCA9IFwic3RhcnRpbmctcG9zaXRpb25cIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyS25pZ2h0KCkge1xuICBjb25zdCBwcmV2aW91c0tuaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbWcja25pZ2h0LXBpZWNlXCIpO1xuICBpZiAocHJldmlvdXNLbmlnaHQpIHByZXZpb3VzS25pZ2h0LnJlbW92ZSgpO1xuICBjb25zdCBwcmV2aW91c1N0YXJ0aW5nQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RhcnRpbmctcG9zaXRpb25cIik7XG4gIGlmIChwcmV2aW91c1N0YXJ0aW5nQ2VsbCkgcHJldmlvdXNTdGFydGluZ0NlbGwuaWQgPSBcIlwiO1xuICBjbGVhck1vdmVzKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRUYXJnZXQoY2VsbCkge1xuICBjZWxsLmlkID0gXCJ0YXJnZXRcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyVGFyZ2V0KCkge1xuICBjb25zdCBwcmV2aW91c1RhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2VsbCN0YXJnZXRcIik7XG4gIGlmIChwcmV2aW91c1RhcmdldCkgcHJldmlvdXNUYXJnZXQuaWQgPSBcIlwiO1xuICBjbGVhck1vdmVzKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhck1vdmVzKCkge1xuICBjb25zdCBtb3ZlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW92ZVwiKTtcbiAgbW92ZXMuZm9yRWFjaCgobW92ZSkgPT4ge1xuICAgIG1vdmUucmVtb3ZlKCk7XG4gIH0pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBmYXZpY29uIGZyb20gXCIuL2ltYWdlcy9mYXZpY29uLmljb1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBrbmlnaHRNb3ZlcyBmcm9tIFwiLi9rbmlnaHRzLXRyYXZhaWxzLmpzXCI7XG5pbXBvcnQge1xuICBjbGVhcktuaWdodCxcbiAgY2xlYXJNb3ZlcyxcbiAgY2xlYXJUYXJnZXQsXG4gIHBsYWNlS25pZ2h0LFxuICBzZXRUYXJnZXQsXG59IGZyb20gXCIuL3VpLWNlbGxzLWZ1bmN0aW9uc1wiO1xuaW1wb3J0IHRyYXZlcnNlIGZyb20gXCIuL3RyYXZlcnNlXCI7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuLy8gQ3Vyc29yIG1vZGVzOlxubGV0IHBsYWNlS25pZ2h0Q3Vyc29yID0gZmFsc2U7XG5sZXQgc2V0VGFyZ2V0Q3Vyc29yID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGRpc3BsYXlLbmlnaHRDdXJzb3IoKSB7XG4gIGNsZWFyS25pZ2h0KCk7XG5cbiAgY29uc3Qga25pZ2h0Q3Vyc29yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGtuaWdodEN1cnNvci5jbGFzc0xpc3QuYWRkKFwiY3VzdG9tLWN1cnNvclwiLCBcImhpZGRlblwiKTtcbiAga25pZ2h0Q3Vyc29yLmlkID0gXCJrbmlnaHQtY3Vyc29yXCI7XG4gIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNlbGxcIik7XG4gIGNvbnN0IGNlbGxzV2lkdGggPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjZWxsKS5nZXRQcm9wZXJ0eVZhbHVlKFwid2lkdGhcIik7XG4gIGtuaWdodEN1cnNvci5zdHlsZS53aWR0aCA9IGNlbGxzV2lkdGg7XG4gIGJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZXZlbnQpID0+IHtcbiAgICBrbmlnaHRDdXJzb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICBrbmlnaHRDdXJzb3Iuc3R5bGUubGVmdCA9IGBjYWxjKCR7ZXZlbnQuY2xpZW50WH1weCAtICR7Y2VsbHNXaWR0aH0vMilgO1xuICAgIGtuaWdodEN1cnNvci5zdHlsZS50b3AgPSBgY2FsYygke2V2ZW50LmNsaWVudFl9cHggLSAke2NlbGxzV2lkdGh9LzIpYDtcbiAgfSk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoa25pZ2h0Q3Vyc29yKTtcbiAgYm9keS5jbGFzc0xpc3QuYWRkKFwicGxhY2Uta25pZ2h0XCIpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVLbmlnaHRDdXJzb3IoKSB7XG4gIGNvbnN0IGtuaWdodEN1cnNvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIja25pZ2h0LWN1cnNvclwiKTtcbiAgaWYgKGtuaWdodEN1cnNvcikga25pZ2h0Q3Vyc29yLnJlbW92ZSgpO1xuICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJwbGFjZS1rbmlnaHRcIik7XG59XG5cbmZ1bmN0aW9uIGNoZWNrVHJhdmVyc2VCdXR0b25TdGF0ZSgpIHtcbiAgY29uc3Qga25pZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNrbmlnaHQtcGllY2VcIik7XG4gIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFyZ2V0XCIpO1xuICBjb25zdCB0cmF2ZXJzZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24jdHJhdmVyc2VcIik7XG4gIHRyYXZlcnNlQnV0dG9uLmRpc2FibGVkID0gIShrbmlnaHQgJiYgdGFyZ2V0KTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlUGxhY2VLbmlnaHRDdXJzb3IoKSB7XG4gIHBsYWNlS25pZ2h0Q3Vyc29yID0gIXBsYWNlS25pZ2h0Q3Vyc29yO1xuICBwbGFjZUtuaWdodEN1cnNvciA/IGRpc3BsYXlLbmlnaHRDdXJzb3IoKSA6IHJlbW92ZUtuaWdodEN1cnNvcigpO1xuICBwbGFjZUtuaWdodEJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICBzZXRUYXJnZXRDdXJzb3IgPSBmYWxzZTtcbiAgc2V0VGFyZ2V0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcInNldC10YXJnZXRcIik7XG4gIGNoZWNrVHJhdmVyc2VCdXR0b25TdGF0ZSgpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVTZXRUYXJnZXRDdXJzb3IoKSB7XG4gIHNldFRhcmdldEN1cnNvciA9ICFzZXRUYXJnZXRDdXJzb3I7XG4gIGlmIChzZXRUYXJnZXRDdXJzb3IpIGNsZWFyVGFyZ2V0KCk7XG4gIHNldFRhcmdldEJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICBib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJzZXQtdGFyZ2V0XCIpO1xuICBwbGFjZUtuaWdodEN1cnNvciA9IGZhbHNlO1xuICBwbGFjZUtuaWdodEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICBjb25zdCBrbmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2tuaWdodC1waWVjZVwiKTtcbiAgaWYgKGtuaWdodCkga25pZ2h0LnN0eWxlLm9wYWNpdHkgPSAxO1xuICByZW1vdmVLbmlnaHRDdXJzb3IoKTtcbiAgY2hlY2tUcmF2ZXJzZUJ1dHRvblN0YXRlKCk7XG59XG5cbi8vIEJ1aWxkIGNoZXNzIGJvYXJkOlxuXG5jb25zdCBjaGVzc0JvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaGVzcy1ib2FyZFwiKTtcblxuLy8gTm9ybWFsIGNoZXNzIGJvYXJkcyBhcmUgOHg4XG5jb25zdCBDSEVTU0JPQVJEX1dJRFRIID0gODtcbmNvbnN0IENIRVNTQk9BUkRfSEVJR0hUID0gODtcblxuY29uc3QgQ09MVU1OX0NPTE9SUyA9IHsgZXZlbjogXCJibGFja1wiLCBvZGQ6IFwid2hpdGVcIiB9O1xuXG5mb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCBDSEVTU0JPQVJEX1dJRFRIOyBjb2x1bW4rKykge1xuICBjb25zdCBjb2x1bW5TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGNvbHVtblNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImNvbHVtblwiKTtcbiAgY29sdW1uU2VjdGlvbi5pZCA9IGNvbHVtbjtcbiAgZm9yIChsZXQgcm93ID0gQ0hFU1NCT0FSRF9IRUlHSFQgLSAxOyByb3cgPj0gMDsgcm93LS0pIHtcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuICAgIGNvbnN0IGNlbGxDb2xvciA9IHJvdyAlIDIgPT09IDAgPyBDT0xVTU5fQ09MT1JTLmV2ZW4gOiBDT0xVTU5fQ09MT1JTLm9kZDtcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoY2VsbENvbG9yKTtcbiAgICBjZWxsLnNldEF0dHJpYnV0ZShcImRhdGEtcG9zaXRpb24teFwiLCBjb2x1bW4pO1xuICAgIGNlbGwuc2V0QXR0cmlidXRlKFwiZGF0YS1wb3NpdGlvbi15XCIsIHJvdyk7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKHBsYWNlS25pZ2h0Q3Vyc29yKSB7XG4gICAgICAgIHBsYWNlS25pZ2h0KGNlbGwpO1xuICAgICAgICB0b2dnbGVQbGFjZUtuaWdodEN1cnNvcigpO1xuICAgICAgfSBlbHNlIGlmIChzZXRUYXJnZXRDdXJzb3IpIHtcbiAgICAgICAgLy8gS25pZ2h0J3MgdGFyZ2V0IGNhbid0IGJlIGVxdWFsIHRvIGl0cyBzdGFydGluZyBwb2ludFxuICAgICAgICBjb25zdCBrbmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2tuaWdodC1waWVjZVwiKTtcbiAgICAgICAgaWYgKGtuaWdodCAmJiBrbmlnaHQucGFyZW50RWxlbWVudCA9PT0gY2VsbCkgcmV0dXJuO1xuICAgICAgICBzZXRUYXJnZXQoY2VsbCk7XG4gICAgICAgIHRvZ2dsZVNldFRhcmdldEN1cnNvcigpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGNvbHVtbiA9PT0gMCAmJiByb3cgPT09IDApIHtcbiAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwiZGF0YS1wb3NpdGlvblwiLCBcImNvbHVtbi16ZXJvLXJvdy16ZXJvXCIpO1xuICAgIH1cblxuICAgIGlmIChjb2x1bW4gPT09IDApIHtcbiAgICAgIGNvbnN0IHJvd0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICByb3dMYWJlbC5jbGFzc0xpc3QuYWRkKFwicm93XCIsIFwibGFiZWxcIik7XG4gICAgICByb3dMYWJlbC5pbm5lclRleHQgPSByb3cgKyAxO1xuICAgICAgY2VsbC5hcHBlbmRDaGlsZChyb3dMYWJlbCk7XG4gICAgfVxuXG4gICAgaWYgKHJvdyA9PT0gMCkge1xuICAgICAgY29uc3QgY29sdW1uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGNvbHVtbkxhYmVsLmNsYXNzTGlzdC5hZGQoXCJjb2x1bW5cIiwgXCJsYWJlbFwiKTtcbiAgICAgIC8vIEhlcmUgSSBhZGQgY29sdW1uIGFuZCA5NyB0byBnZXQgdGhlIGFzY2lpIGNvZGUgb2YgdGhlIGxvd2VyIGNhc2UgbGV0dGVycyBzdGFydGluZyBmcm9tIFwiYVwiLCB3aGljaCBpcyBob3dcbiAgICAgIC8vIGNvbHVtbnMgYXJlIGxhYmVsZWQgaW4gY2hlc3MgYm9hcmRzOiBodHRwczovL3d3dy5hc2NpaXRhYmxlLmNvbS9cbiAgICAgIGNvbHVtbkxhYmVsLmlubmVyVGV4dCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29sdW1uICsgOTcpO1xuICAgICAgY2VsbC5hcHBlbmRDaGlsZChjb2x1bW5MYWJlbCk7XG4gICAgfVxuXG4gICAgY29sdW1uU2VjdGlvbi5hcHBlbmRDaGlsZChjZWxsKTtcbiAgfVxuICBjaGVzc0JvYXJkLmFwcGVuZENoaWxkKGNvbHVtblNlY3Rpb24pO1xuICAvLyBzd2FwIHRoZSBjb2xvdXJzXG4gIGxldCB0ZW1wb3JhcnkgPSBDT0xVTU5fQ09MT1JTLmV2ZW47XG4gIENPTFVNTl9DT0xPUlMuZXZlbiA9IENPTFVNTl9DT0xPUlMub2RkO1xuICBDT0xVTU5fQ09MT1JTLm9kZCA9IHRlbXBvcmFyeTtcbn1cblxuLy8gQnVpbGQgYnV0dG9uczpcblxuY29uc3QgY29udHJvbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRyb2xzXCIpO1xuXG5jb25zdCBwbGFjZUtuaWdodEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5wbGFjZUtuaWdodEJ1dHRvbi5pZCA9IFwicGxhY2Uta25pZ2h0XCI7XG5wbGFjZUtuaWdodEJ1dHRvbi5pbm5lclRleHQgPSBcIlBsYWNlIEtuaWdodFwiO1xucGxhY2VLbmlnaHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZVBsYWNlS25pZ2h0Q3Vyc29yKTtcbmNvbnRyb2xzLmFwcGVuZENoaWxkKHBsYWNlS25pZ2h0QnV0dG9uKTtcblxuY29uc3Qgc2V0VGFyZ2V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbnNldFRhcmdldEJ1dHRvbi5pZCA9IFwic2V0LXRhcmdldFwiO1xuc2V0VGFyZ2V0QnV0dG9uLmlubmVyVGV4dCA9IFwiU2V0IHRhcmdldFwiO1xuc2V0VGFyZ2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVTZXRUYXJnZXRDdXJzb3IpO1xuY29udHJvbHMuYXBwZW5kQ2hpbGQoc2V0VGFyZ2V0QnV0dG9uKTtcblxuY29uc3QgdHJhdmVyc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xudHJhdmVyc2VCdXR0b24uaWQgPSBcInRyYXZlcnNlXCI7XG50cmF2ZXJzZUJ1dHRvbi5pbm5lclRleHQgPSBcIlRyYXZlcnNlXCI7XG50cmF2ZXJzZUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG50cmF2ZXJzZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCBrbmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2tuaWdodC1waWVjZVwiKTtcbiAgY29uc3Qgb3JpZ2luUG9zaXRpb24gPSBKU09OLnBhcnNlKFxuICAgIGB7XCJ4XCI6ICR7a25pZ2h0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFxuICAgICAgXCJkYXRhLXBvc2l0aW9uLXhcIlxuICAgICl9LCBcInlcIjogJHtrbmlnaHQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBvc2l0aW9uLXlcIil9fWBcbiAgKTtcbiAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXJnZXRcIik7XG4gIGNvbnN0IHRhcmdldFBvc2l0aW9uID0gSlNPTi5wYXJzZShcbiAgICBge1wieFwiOiAke3RhcmdldC5nZXRBdHRyaWJ1dGUoXG4gICAgICBcImRhdGEtcG9zaXRpb24teFwiXG4gICAgKX0sIFwieVwiOiAke3RhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBvc2l0aW9uLXlcIil9fWBcbiAgKTtcbiAgY29uc3Qgc2hvcnRlc3RQYXRoID0ga25pZ2h0TW92ZXMob3JpZ2luUG9zaXRpb24sIHRhcmdldFBvc2l0aW9uKTtcbiAgdHJhdmVyc2Uoc2hvcnRlc3RQYXRoKTtcbiAgdHJhdmVyc2VCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xufSk7XG5jb250cm9scy5hcHBlbmRDaGlsZCh0cmF2ZXJzZUJ1dHRvbik7XG5cbmZ1bmN0aW9uIGNsZWFyQm9hcmQoKSB7XG4gIGNsZWFyS25pZ2h0KCk7XG4gIGNsZWFyVGFyZ2V0KCk7XG4gIGNsZWFyTW92ZXMoKTtcbiAgY2hlY2tUcmF2ZXJzZUJ1dHRvblN0YXRlKCk7XG59XG5cbmNvbnN0IGNsZWFyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmNsZWFyQnV0dG9uLmlkID0gXCJjbGVhclwiO1xuY2xlYXJCdXR0b24uaW5uZXJUZXh0ID0gXCJDbGVhclwiO1xuY2xlYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsZWFyQm9hcmQpO1xuY29udHJvbHMuYXBwZW5kQ2hpbGQoY2xlYXJCdXR0b24pO1xuXG4vLyBIaWRlIHRoZSBrbmlnaHQgcGllY2UgaWYgdGhlIGJyb3dzZXIgaXMgcmVzaXplZCBkdXJpbmcgdHJhdmVyc2FsIGFzIHJlc2l6aW5nIHRoZW4gd291bGQgbWVzcyB1cCB0aGUga25pZ2h0J3MgcG9zaXRpb25cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgLy8gSWYgdGhlIHBsYWNlIGtuaWdodCBidXR0b24gaXMgZW5hYmxlZCwgdGhhdCBtZWFucyB0aGUgdHJhdmVyc2FsIGlzbid0IHRha2luZyBwbGFjZVxuICBpZiAoIXBsYWNlS25pZ2h0QnV0dG9uLmRpc2FibGVkKSByZXR1cm47XG4gIGNvbnN0IGtuaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIja25pZ2h0LXBpZWNlXCIpO1xuICBrbmlnaHQuc3R5bGUub3BhY2l0eSA9IDA7XG59KTtcblxuLy8gQnVpbGQgdm9sdW1lIHRvZ2dsZTpcbmxldCB2b2x1bWUgPSB0cnVlO1xuXG5jb25zdCB2b2x1bWVUb2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbnZvbHVtZVRvZ2dsZS5pZCA9IFwidm9sdW1lLXRvZ2dsZVwiO1xudm9sdW1lVG9nZ2xlLnNldEF0dHJpYnV0ZShcImRhdGEtdm9sdW1lXCIsIHZvbHVtZSk7XG52b2x1bWVUb2dnbGUuY2xhc3NMaXN0LmFkZChcImZhLXNvbGlkXCIsIFwiZmEtdm9sdW1lLWhpZ2hcIik7XG52b2x1bWVUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgdm9sdW1lVG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoXCJmYS12b2x1bWUtaGlnaFwiKTtcbiAgdm9sdW1lVG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoXCJmYS12b2x1bWUteG1hcmtcIik7XG4gIHZvbHVtZSA9ICF2b2x1bWU7XG4gIHZvbHVtZVRvZ2dsZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZvbHVtZVwiLCB2b2x1bWUpO1xufSk7XG5ib2R5LmFwcGVuZENoaWxkKHZvbHVtZVRvZ2dsZSk7XG5cbi8vIEJ1aWxkIGdpdGh1YiBsaW5rXG5jb25zdCBnaXRodWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5naXRodWJMaW5rLnNldEF0dHJpYnV0ZShcbiAgXCJocmVmXCIsXG4gIFwiaHR0cHM6Ly9naXRodWIuY29tL0ZlZGVMb3BlejE3L2tuaWdodHMtdHJhdmFpbHNcIlxuKTtcbmdpdGh1Ykxpbmsuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xuY29uc3QgZ2l0aHViSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuZ2l0aHViSWNvbi5pZCA9IFwiZ2l0aHViLWljb25cIjtcbmdpdGh1Ykljb24uY2xhc3NMaXN0LmFkZChcImZhLWJyYW5kc1wiLCBcImZhLWdpdGh1YlwiKTtcbmdpdGh1YkxpbmsuYXBwZW5kQ2hpbGQoZ2l0aHViSWNvbik7XG5ib2R5LmFwcGVuZENoaWxkKGdpdGh1YkxpbmspO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9