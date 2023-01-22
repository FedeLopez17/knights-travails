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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --cells-white: #f5f5f5;\n  --cells-black: #292f2f;\n  --place-knight-cells-color: lightgreen;\n  --set-target-cells-color: red;\n  --move-cells-color: skyblue;\n  --chess-board-lables-font-size: 22px;\n  font-size: 16px;\n}\n\nbody {\n  margin: 0;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: \"Roboto\", sans-serif;\n  background-color: lightblue;\n  overflow-x: hidden;\n}\n\nbody.place-knight {\n  cursor: none;\n}\n\nh1#title {\n  margin: 30px 0;\n  font-size: 3rem;\n}\n\nmain {\n  flex: 1;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 20px;\n}\n\n#chess-board {\n  aspect-ratio: 1/1;\n  width: min(60vmin, 600px);\n  display: flex;\n  pointer-events: none;\n  outline: solid 1px black;\n}\n\n#chess-board .column {\n  pointer-events: none;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n#chess-board .cell {\n  flex: 1;\n  position: relative;\n  pointer-events: auto;\n  position: relative;\n  display: flex;\n}\n\nbody.no-cursor #chess-board .cell {\n  cursor: none;\n}\n\nbody.place-knight #chess-board .cell:hover {\n  background: var(--place-knight-cells-color);\n}\n\n#chess-board #starting-position {\n  background-color: var(--place-knight-cells-color);\n}\n\nbody.set-target #chess-board .cell:hover {\n  cursor: pointer;\n  background: var(--set-target-cells-color);\n}\n\n#chess-board #target {\n  background-color: var(--set-target-cells-color);\n}\n\n#chess-board .move {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#chess-board .cell:not(#target) .move {\n  background-color: var(--move-cells-color);\n}\n\n#chess-board .move p {\n  margin: 0;\n}\n\n#chess-board .cell.white {\n  background-color: var(--cells-white);\n}\n\n#chess-board .cell.black {\n  background-color: var(--cells-black);\n}\n\n#chess-board .label {\n  position: absolute;\n  bottom: 0;\n  margin: 0;\n  font-family: \"Roboto Mono\", monospace;\n  font-size: 1rem;\n  z-index: 1;\n}\n\n#chess-board .cell.white .label {\n  color: var(--cells-black);\n}\n\n#chess-board .cell.black .label {\n  color: var(--cells-white);\n}\n\n#chess-board .cell[data-position=\"column-zero-row-zero\"] .column.label {\n  margin-left: 1ch;\n}\n\n#controls {\n  width: min(90vmin, 600px);\n  display: flex;\n  align-items: center;\n  gap: 2%;\n}\n\n#controls button {\n  flex: 1;\n  aspect-ratio: 3/1;\n  cursor: pointer;\n}\n\n#controls button.active {\n  border: solid 2px red;\n}\n\n#knight-piece {\n  width: 100%;\n  position: absolute;\n  bottom: 25%;\n  right: 0%;\n  transition-property: all;\n  transition-duration: 0.5s;\n  z-index: 2;\n}\n\n.custom-cursor {\n  z-index: 2;\n}\n\n.custom-cursor.hidden {\n  display: none;\n}\n\n#knight-cursor {\n  cursor: none;\n  pointer-events: none;\n  position: absolute;\n  aspect-ratio: 1/1;\n  width: 50px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n#volume-toggle {\n  position: absolute;\n  right: 2%;\n  top: 2%;\n  cursor: pointer;\n  font-size: 1.5rem;\n}\n\n#volume-toggle:hover {\n  transform: scale(1.1);\n  filter: drop-shadow(-1px 1px 0px white);\n}\n\n@media (orientation: portrait), (max-width: 600px) {\n  :root {\n    font-size: 12px;\n  }\n\n  #chess-board {\n    width: min(90vmin, 600px);\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,sBAAsB;EACtB,sCAAsC;EACtC,6BAA6B;EAC7B,2BAA2B;EAC3B,oCAAoC;EACpC,eAAe;AACjB;;AAEA;EACE,SAAS;EACT,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,iCAAiC;EACjC,2BAA2B;EAC3B,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,OAAO;EACP,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,yBAAyB;EACzB,aAAa;EACb,oBAAoB;EACpB,wBAAwB;AAC1B;;AAEA;EACE,oBAAoB;EACpB,OAAO;EACP,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,OAAO;EACP,kBAAkB;EAClB,oBAAoB;EACpB,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,iDAAiD;AACnD;;AAEA;EACE,eAAe;EACf,yCAAyC;AAC3C;;AAEA;EACE,+CAA+C;AACjD;;AAEA;EACE,OAAO;EACP,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,SAAS;EACT,qCAAqC;EACrC,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,mBAAmB;EACnB,OAAO;AACT;;AAEA;EACE,OAAO;EACP,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,wBAAwB;EACxB,yBAAyB;EACzB,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,oBAAoB;EACpB,kBAAkB;EAClB,iBAAiB;EACjB,WAAW;EACX,yDAA4C;EAC5C,wBAAwB;EACxB,4BAA4B;AAC9B;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;EACrB,uCAAuC;AACzC;;AAEA;EACE;IACE,eAAe;EACjB;;EAEA;IACE,yBAAyB;EAC3B;AACF","sourcesContent":[":root {\n  --cells-white: #f5f5f5;\n  --cells-black: #292f2f;\n  --place-knight-cells-color: lightgreen;\n  --set-target-cells-color: red;\n  --move-cells-color: skyblue;\n  --chess-board-lables-font-size: 22px;\n  font-size: 16px;\n}\n\nbody {\n  margin: 0;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: \"Roboto\", sans-serif;\n  background-color: lightblue;\n  overflow-x: hidden;\n}\n\nbody.place-knight {\n  cursor: none;\n}\n\nh1#title {\n  margin: 30px 0;\n  font-size: 3rem;\n}\n\nmain {\n  flex: 1;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 20px;\n}\n\n#chess-board {\n  aspect-ratio: 1/1;\n  width: min(60vmin, 600px);\n  display: flex;\n  pointer-events: none;\n  outline: solid 1px black;\n}\n\n#chess-board .column {\n  pointer-events: none;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n#chess-board .cell {\n  flex: 1;\n  position: relative;\n  pointer-events: auto;\n  position: relative;\n  display: flex;\n}\n\nbody.no-cursor #chess-board .cell {\n  cursor: none;\n}\n\nbody.place-knight #chess-board .cell:hover {\n  background: var(--place-knight-cells-color);\n}\n\n#chess-board #starting-position {\n  background-color: var(--place-knight-cells-color);\n}\n\nbody.set-target #chess-board .cell:hover {\n  cursor: pointer;\n  background: var(--set-target-cells-color);\n}\n\n#chess-board #target {\n  background-color: var(--set-target-cells-color);\n}\n\n#chess-board .move {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#chess-board .cell:not(#target) .move {\n  background-color: var(--move-cells-color);\n}\n\n#chess-board .move p {\n  margin: 0;\n}\n\n#chess-board .cell.white {\n  background-color: var(--cells-white);\n}\n\n#chess-board .cell.black {\n  background-color: var(--cells-black);\n}\n\n#chess-board .label {\n  position: absolute;\n  bottom: 0;\n  margin: 0;\n  font-family: \"Roboto Mono\", monospace;\n  font-size: 1rem;\n  z-index: 1;\n}\n\n#chess-board .cell.white .label {\n  color: var(--cells-black);\n}\n\n#chess-board .cell.black .label {\n  color: var(--cells-white);\n}\n\n#chess-board .cell[data-position=\"column-zero-row-zero\"] .column.label {\n  margin-left: 1ch;\n}\n\n#controls {\n  width: min(90vmin, 600px);\n  display: flex;\n  align-items: center;\n  gap: 2%;\n}\n\n#controls button {\n  flex: 1;\n  aspect-ratio: 3/1;\n  cursor: pointer;\n}\n\n#controls button.active {\n  border: solid 2px red;\n}\n\n#knight-piece {\n  width: 100%;\n  position: absolute;\n  bottom: 25%;\n  right: 0%;\n  transition-property: all;\n  transition-duration: 0.5s;\n  z-index: 2;\n}\n\n.custom-cursor {\n  z-index: 2;\n}\n\n.custom-cursor.hidden {\n  display: none;\n}\n\n#knight-cursor {\n  cursor: none;\n  pointer-events: none;\n  position: absolute;\n  aspect-ratio: 1/1;\n  width: 50px;\n  background-image: url(\"./images/knight.png\");\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n#volume-toggle {\n  position: absolute;\n  right: 2%;\n  top: 2%;\n  cursor: pointer;\n  font-size: 1.5rem;\n}\n\n#volume-toggle:hover {\n  transform: scale(1.1);\n  filter: drop-shadow(-1px 1px 0px white);\n}\n\n@media (orientation: portrait), (max-width: 600px) {\n  :root {\n    font-size: 12px;\n  }\n\n  #chess-board {\n    width: min(90vmin, 600px);\n  }\n}\n"],"sourceRoot":""}]);
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
        await pause(knightTransitionDuration * 1.5);
      } else {
        // right
        knight.style.right = `calc(${previousRightMargin} - 100%)`;
        await pause(knightTransitionDuration * 1.5);
      }
      // bottom
    } else if (currentPosition.y === previousPosition.y - 2) {
      knight.style.bottom = `calc(${previousBottomMargin} - 200%)`;
      await pause(knightTransitionDuration);

      // left
      if (currentPosition.x === previousPosition.x - 1) {
        knight.style.right = `calc(${previousRightMargin} + 100%)`;
        await pause(knightTransitionDuration * 1.5);
      } else {
        // right
        knight.style.right = `calc(${previousRightMargin} - 100%)`;
        await pause(knightTransitionDuration * 1.5);
      }
      // left
    } else if (currentPosition.x === previousPosition.x - 2) {
      knight.style.right = `calc(${previousRightMargin} + 200%)`;
      await pause(knightTransitionDuration);

      // top
      if (currentPosition.y === previousPosition.y + 1) {
        knight.style.bottom = `calc(${previousBottomMargin} + 100%)`;
        await pause(knightTransitionDuration * 1.5);
      } else {
        // bottom
        knight.style.bottom = `calc(${previousBottomMargin} - 100%)`;
        await pause(knightTransitionDuration * 1.5);
      }
      // right
    } else {
      knight.style.right = `calc(${previousRightMargin} - 200%)`;
      await pause(knightTransitionDuration);

      // top
      if (currentPosition.y === previousPosition.y + 1) {
        knight.style.bottom = `calc(${previousBottomMargin} + 100%)`;
        await pause(knightTransitionDuration * 1.5);
      } else {
        // bottom
        knight.style.bottom = `calc(${previousBottomMargin} - 100%)`;
        await pause(knightTransitionDuration * 1.5);
      }
    }

    (0,_sound_effects_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _knights_travails_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./knights-travails.js */ "./src/knights-travails.js");
/* harmony import */ var _ui_cells_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui-cells-functions */ "./src/ui-cells-functions.js");
/* harmony import */ var _traverse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./traverse */ "./src/traverse.js");





const body = document.querySelector("body");

// Cursor modes:
let placeKnightCursor = false;
let setTargetCursor = false;

function displayKnightCursor() {
  (0,_ui_cells_functions__WEBPACK_IMPORTED_MODULE_2__.clearKnight)();

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
  if (setTargetCursor) (0,_ui_cells_functions__WEBPACK_IMPORTED_MODULE_2__.clearTarget)();
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
        (0,_ui_cells_functions__WEBPACK_IMPORTED_MODULE_2__.placeKnight)(cell);
        togglePlaceKnightCursor();
      } else if (setTargetCursor) {
        // Knight's target can't be equal to its starting point
        const knight = document.querySelector("#knight-piece");
        if (knight && knight.parentElement === cell) return;
        (0,_ui_cells_functions__WEBPACK_IMPORTED_MODULE_2__.setTarget)(cell);
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
  const shortestPath = (0,_knights_travails_js__WEBPACK_IMPORTED_MODULE_1__["default"])(originPosition, targetPosition);
  (0,_traverse__WEBPACK_IMPORTED_MODULE_3__["default"])(shortestPath);
  traverseButton.disabled = true;
});
controls.appendChild(traverseButton);

function clearBoard() {
  (0,_ui_cells_functions__WEBPACK_IMPORTED_MODULE_2__.clearKnight)();
  (0,_ui_cells_functions__WEBPACK_IMPORTED_MODULE_2__.clearTarget)();
  (0,_ui_cells_functions__WEBPACK_IMPORTED_MODULE_2__.clearMoves)();
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG1IQUFzQztBQUNsRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSxpREFBaUQsMkJBQTJCLDJCQUEyQiwyQ0FBMkMsa0NBQWtDLGdDQUFnQyx5Q0FBeUMsb0JBQW9CLEdBQUcsVUFBVSxjQUFjLGtCQUFrQixrQkFBa0IsMkJBQTJCLHdCQUF3Qix3Q0FBd0MsZ0NBQWdDLHVCQUF1QixHQUFHLHVCQUF1QixpQkFBaUIsR0FBRyxjQUFjLG1CQUFtQixvQkFBb0IsR0FBRyxVQUFVLFlBQVksZ0JBQWdCLGtCQUFrQiwyQkFBMkIsZ0NBQWdDLHdCQUF3QixjQUFjLEdBQUcsa0JBQWtCLHNCQUFzQiw4QkFBOEIsa0JBQWtCLHlCQUF5Qiw2QkFBNkIsR0FBRywwQkFBMEIseUJBQXlCLFlBQVksa0JBQWtCLDJCQUEyQixHQUFHLHdCQUF3QixZQUFZLHVCQUF1Qix5QkFBeUIsdUJBQXVCLGtCQUFrQixHQUFHLHVDQUF1QyxpQkFBaUIsR0FBRyxnREFBZ0QsZ0RBQWdELEdBQUcscUNBQXFDLHNEQUFzRCxHQUFHLDhDQUE4QyxvQkFBb0IsOENBQThDLEdBQUcsMEJBQTBCLG9EQUFvRCxHQUFHLHdCQUF3QixZQUFZLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcsMkNBQTJDLDhDQUE4QyxHQUFHLDBCQUEwQixjQUFjLEdBQUcsOEJBQThCLHlDQUF5QyxHQUFHLDhCQUE4Qix5Q0FBeUMsR0FBRyx5QkFBeUIsdUJBQXVCLGNBQWMsY0FBYyw0Q0FBNEMsb0JBQW9CLGVBQWUsR0FBRyxxQ0FBcUMsOEJBQThCLEdBQUcscUNBQXFDLDhCQUE4QixHQUFHLDhFQUE4RSxxQkFBcUIsR0FBRyxlQUFlLDhCQUE4QixrQkFBa0Isd0JBQXdCLFlBQVksR0FBRyxzQkFBc0IsWUFBWSxzQkFBc0Isb0JBQW9CLEdBQUcsNkJBQTZCLDBCQUEwQixHQUFHLG1CQUFtQixnQkFBZ0IsdUJBQXVCLGdCQUFnQixjQUFjLDZCQUE2Qiw4QkFBOEIsZUFBZSxHQUFHLG9CQUFvQixlQUFlLEdBQUcsMkJBQTJCLGtCQUFrQixHQUFHLG9CQUFvQixpQkFBaUIseUJBQXlCLHVCQUF1QixzQkFBc0IsZ0JBQWdCLHNFQUFzRSw2QkFBNkIsaUNBQWlDLEdBQUcsb0JBQW9CLHVCQUF1QixjQUFjLFlBQVksb0JBQW9CLHNCQUFzQixHQUFHLDBCQUEwQiwwQkFBMEIsNENBQTRDLEdBQUcsd0RBQXdELFdBQVcsc0JBQXNCLEtBQUssb0JBQW9CLGdDQUFnQyxLQUFLLEdBQUcsU0FBUyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE1BQU0sZ0NBQWdDLDJCQUEyQiwyQkFBMkIsMkNBQTJDLGtDQUFrQyxnQ0FBZ0MseUNBQXlDLG9CQUFvQixHQUFHLFVBQVUsY0FBYyxrQkFBa0Isa0JBQWtCLDJCQUEyQix3QkFBd0Isd0NBQXdDLGdDQUFnQyx1QkFBdUIsR0FBRyx1QkFBdUIsaUJBQWlCLEdBQUcsY0FBYyxtQkFBbUIsb0JBQW9CLEdBQUcsVUFBVSxZQUFZLGdCQUFnQixrQkFBa0IsMkJBQTJCLGdDQUFnQyx3QkFBd0IsY0FBYyxHQUFHLGtCQUFrQixzQkFBc0IsOEJBQThCLGtCQUFrQix5QkFBeUIsNkJBQTZCLEdBQUcsMEJBQTBCLHlCQUF5QixZQUFZLGtCQUFrQiwyQkFBMkIsR0FBRyx3QkFBd0IsWUFBWSx1QkFBdUIseUJBQXlCLHVCQUF1QixrQkFBa0IsR0FBRyx1Q0FBdUMsaUJBQWlCLEdBQUcsZ0RBQWdELGdEQUFnRCxHQUFHLHFDQUFxQyxzREFBc0QsR0FBRyw4Q0FBOEMsb0JBQW9CLDhDQUE4QyxHQUFHLDBCQUEwQixvREFBb0QsR0FBRyx3QkFBd0IsWUFBWSxrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLDJDQUEyQyw4Q0FBOEMsR0FBRywwQkFBMEIsY0FBYyxHQUFHLDhCQUE4Qix5Q0FBeUMsR0FBRyw4QkFBOEIseUNBQXlDLEdBQUcseUJBQXlCLHVCQUF1QixjQUFjLGNBQWMsNENBQTRDLG9CQUFvQixlQUFlLEdBQUcscUNBQXFDLDhCQUE4QixHQUFHLHFDQUFxQyw4QkFBOEIsR0FBRyw4RUFBOEUscUJBQXFCLEdBQUcsZUFBZSw4QkFBOEIsa0JBQWtCLHdCQUF3QixZQUFZLEdBQUcsc0JBQXNCLFlBQVksc0JBQXNCLG9CQUFvQixHQUFHLDZCQUE2QiwwQkFBMEIsR0FBRyxtQkFBbUIsZ0JBQWdCLHVCQUF1QixnQkFBZ0IsY0FBYyw2QkFBNkIsOEJBQThCLGVBQWUsR0FBRyxvQkFBb0IsZUFBZSxHQUFHLDJCQUEyQixrQkFBa0IsR0FBRyxvQkFBb0IsaUJBQWlCLHlCQUF5Qix1QkFBdUIsc0JBQXNCLGdCQUFnQixtREFBbUQsNkJBQTZCLGlDQUFpQyxHQUFHLG9CQUFvQix1QkFBdUIsY0FBYyxZQUFZLG9CQUFvQixzQkFBc0IsR0FBRywwQkFBMEIsMEJBQTBCLDRDQUE0QyxHQUFHLHdEQUF3RCxXQUFXLHNCQUFzQixLQUFLLG9CQUFvQixnQ0FBZ0MsS0FBSyxHQUFHLHFCQUFxQjtBQUMzMFE7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNWMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2ZBLGlFQUFlLHFCQUF1QixnQ0FBZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDdEUsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxlQUFlO0FBQ2YsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxlQUFlO0FBQ2YsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxlQUFlO0FBQ2YsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxlQUFlO0FBQ2YsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxlQUFlO0FBQ2YsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxlQUFlO0FBQ2YsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxlQUFlO0FBQ2YsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxlQUFlO0FBQ2YsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFZSx3QkFBd0IsTUFBTTtBQUM3Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7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Q0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLE9BQU87QUFDYjtBQUNBLE1BQU0sU0FBUyxzREFBc0Q7QUFDckU7QUFDQTtBQUNBO0FBQ0EsTUFBTSxPQUFPO0FBQ2I7QUFDQSxNQUFNLFNBQVMsd0NBQXdDO0FBQ3ZEO0FBQ0EsdUJBQXVCLGdFQUFXO0FBQ2xDLEVBQUUscURBQVE7QUFDVjtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBLEVBQUUsZ0VBQVc7QUFDYixFQUFFLGdFQUFXO0FBQ2IsRUFBRSwrREFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvYXVkaW8vY2hlc3MtcGllY2Utc291bmQubXAzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL2FsbG93ZWQtbW92ZXMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9rbmlnaHRzLXRyYXZhaWxzLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvbm9kZS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL3F1ZXVlLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvc291bmQtZWZmZWN0cy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL3RyYXZlcnNlLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvdWktY2VsbHMtZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy91c2VyLWludGVyZmFjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMva25pZ2h0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tY2VsbHMtd2hpdGU6ICNmNWY1ZjU7XFxuICAtLWNlbGxzLWJsYWNrOiAjMjkyZjJmO1xcbiAgLS1wbGFjZS1rbmlnaHQtY2VsbHMtY29sb3I6IGxpZ2h0Z3JlZW47XFxuICAtLXNldC10YXJnZXQtY2VsbHMtY29sb3I6IHJlZDtcXG4gIC0tbW92ZS1jZWxscy1jb2xvcjogc2t5Ymx1ZTtcXG4gIC0tY2hlc3MtYm9hcmQtbGFibGVzLWZvbnQtc2l6ZTogMjJweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5ib2R5LnBsYWNlLWtuaWdodCB7XFxuICBjdXJzb3I6IG5vbmU7XFxufVxcblxcbmgxI3RpdGxlIHtcXG4gIG1hcmdpbjogMzBweCAwO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG5tYWluIHtcXG4gIGZsZXg6IDE7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuI2NoZXNzLWJvYXJkIHtcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgd2lkdGg6IG1pbig2MHZtaW4sIDYwMHB4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIG91dGxpbmU6IHNvbGlkIDFweCBibGFjaztcXG59XFxuXFxuI2NoZXNzLWJvYXJkIC5jb2x1bW4ge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNjaGVzcy1ib2FyZCAuY2VsbCB7XFxuICBmbGV4OiAxO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5ib2R5Lm5vLWN1cnNvciAjY2hlc3MtYm9hcmQgLmNlbGwge1xcbiAgY3Vyc29yOiBub25lO1xcbn1cXG5cXG5ib2R5LnBsYWNlLWtuaWdodCAjY2hlc3MtYm9hcmQgLmNlbGw6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcGxhY2Uta25pZ2h0LWNlbGxzLWNvbG9yKTtcXG59XFxuXFxuI2NoZXNzLWJvYXJkICNzdGFydGluZy1wb3NpdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wbGFjZS1rbmlnaHQtY2VsbHMtY29sb3IpO1xcbn1cXG5cXG5ib2R5LnNldC10YXJnZXQgI2NoZXNzLWJvYXJkIC5jZWxsOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXNldC10YXJnZXQtY2VsbHMtY29sb3IpO1xcbn1cXG5cXG4jY2hlc3MtYm9hcmQgI3RhcmdldCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZXQtdGFyZ2V0LWNlbGxzLWNvbG9yKTtcXG59XFxuXFxuI2NoZXNzLWJvYXJkIC5tb3ZlIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jY2hlc3MtYm9hcmQgLmNlbGw6bm90KCN0YXJnZXQpIC5tb3ZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1vdmUtY2VsbHMtY29sb3IpO1xcbn1cXG5cXG4jY2hlc3MtYm9hcmQgLm1vdmUgcCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbiNjaGVzcy1ib2FyZCAuY2VsbC53aGl0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jZWxscy13aGl0ZSk7XFxufVxcblxcbiNjaGVzcy1ib2FyZCAuY2VsbC5ibGFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jZWxscy1ibGFjayk7XFxufVxcblxcbiNjaGVzcy1ib2FyZCAubGFiZWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8gTW9ub1xcXCIsIG1vbm9zcGFjZTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbiNjaGVzcy1ib2FyZCAuY2VsbC53aGl0ZSAubGFiZWwge1xcbiAgY29sb3I6IHZhcigtLWNlbGxzLWJsYWNrKTtcXG59XFxuXFxuI2NoZXNzLWJvYXJkIC5jZWxsLmJsYWNrIC5sYWJlbCB7XFxuICBjb2xvcjogdmFyKC0tY2VsbHMtd2hpdGUpO1xcbn1cXG5cXG4jY2hlc3MtYm9hcmQgLmNlbGxbZGF0YS1wb3NpdGlvbj1cXFwiY29sdW1uLXplcm8tcm93LXplcm9cXFwiXSAuY29sdW1uLmxhYmVsIHtcXG4gIG1hcmdpbi1sZWZ0OiAxY2g7XFxufVxcblxcbiNjb250cm9scyB7XFxuICB3aWR0aDogbWluKDkwdm1pbiwgNjAwcHgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIlO1xcbn1cXG5cXG4jY29udHJvbHMgYnV0dG9uIHtcXG4gIGZsZXg6IDE7XFxuICBhc3BlY3QtcmF0aW86IDMvMTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2NvbnRyb2xzIGJ1dHRvbi5hY3RpdmUge1xcbiAgYm9yZGVyOiBzb2xpZCAycHggcmVkO1xcbn1cXG5cXG4ja25pZ2h0LXBpZWNlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAyNSU7XFxuICByaWdodDogMCU7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgei1pbmRleDogMjtcXG59XFxuXFxuLmN1c3RvbS1jdXJzb3Ige1xcbiAgei1pbmRleDogMjtcXG59XFxuXFxuLmN1c3RvbS1jdXJzb3IuaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNrbmlnaHQtY3Vyc29yIHtcXG4gIGN1cnNvcjogbm9uZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICB3aWR0aDogNTBweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4jdm9sdW1lLXRvZ2dsZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMiU7XFxuICB0b3A6IDIlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbiN2b2x1bWUtdG9nZ2xlOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coLTFweCAxcHggMHB4IHdoaXRlKTtcXG59XFxuXFxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpLCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgOnJvb3Qge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICB9XFxuXFxuICAjY2hlc3MtYm9hcmQge1xcbiAgICB3aWR0aDogbWluKDkwdm1pbiwgNjAwcHgpO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixzQ0FBc0M7RUFDdEMsNkJBQTZCO0VBQzdCLDJCQUEyQjtFQUMzQixvQ0FBb0M7RUFDcEMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsaUNBQWlDO0VBQ2pDLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsT0FBTztFQUNQLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztFQUNULHFDQUFxQztFQUNyQyxlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsT0FBTztBQUNUOztBQUVBO0VBQ0UsT0FBTztFQUNQLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCx5REFBNEM7RUFDNUMsd0JBQXdCO0VBQ3hCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1jZWxscy13aGl0ZTogI2Y1ZjVmNTtcXG4gIC0tY2VsbHMtYmxhY2s6ICMyOTJmMmY7XFxuICAtLXBsYWNlLWtuaWdodC1jZWxscy1jb2xvcjogbGlnaHRncmVlbjtcXG4gIC0tc2V0LXRhcmdldC1jZWxscy1jb2xvcjogcmVkO1xcbiAgLS1tb3ZlLWNlbGxzLWNvbG9yOiBza3libHVlO1xcbiAgLS1jaGVzcy1ib2FyZC1sYWJsZXMtZm9udC1zaXplOiAyMnB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbmJvZHkucGxhY2Uta25pZ2h0IHtcXG4gIGN1cnNvcjogbm9uZTtcXG59XFxuXFxuaDEjdGl0bGUge1xcbiAgbWFyZ2luOiAzMHB4IDA7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbm1haW4ge1xcbiAgZmxleDogMTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jY2hlc3MtYm9hcmQge1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICB3aWR0aDogbWluKDYwdm1pbiwgNjAwcHgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgb3V0bGluZTogc29saWQgMXB4IGJsYWNrO1xcbn1cXG5cXG4jY2hlc3MtYm9hcmQgLmNvbHVtbiB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2NoZXNzLWJvYXJkIC5jZWxsIHtcXG4gIGZsZXg6IDE7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmJvZHkubm8tY3Vyc29yICNjaGVzcy1ib2FyZCAuY2VsbCB7XFxuICBjdXJzb3I6IG5vbmU7XFxufVxcblxcbmJvZHkucGxhY2Uta25pZ2h0ICNjaGVzcy1ib2FyZCAuY2VsbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wbGFjZS1rbmlnaHQtY2VsbHMtY29sb3IpO1xcbn1cXG5cXG4jY2hlc3MtYm9hcmQgI3N0YXJ0aW5nLXBvc2l0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBsYWNlLWtuaWdodC1jZWxscy1jb2xvcik7XFxufVxcblxcbmJvZHkuc2V0LXRhcmdldCAjY2hlc3MtYm9hcmQgLmNlbGw6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tc2V0LXRhcmdldC1jZWxscy1jb2xvcik7XFxufVxcblxcbiNjaGVzcy1ib2FyZCAjdGFyZ2V0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNldC10YXJnZXQtY2VsbHMtY29sb3IpO1xcbn1cXG5cXG4jY2hlc3MtYm9hcmQgLm1vdmUge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNjaGVzcy1ib2FyZCAuY2VsbDpub3QoI3RhcmdldCkgLm1vdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW92ZS1jZWxscy1jb2xvcik7XFxufVxcblxcbiNjaGVzcy1ib2FyZCAubW92ZSBwIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuI2NoZXNzLWJvYXJkIC5jZWxsLndoaXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNlbGxzLXdoaXRlKTtcXG59XFxuXFxuI2NoZXNzLWJvYXJkIC5jZWxsLmJsYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNlbGxzLWJsYWNrKTtcXG59XFxuXFxuI2NoZXNzLWJvYXJkIC5sYWJlbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90byBNb25vXFxcIiwgbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuI2NoZXNzLWJvYXJkIC5jZWxsLndoaXRlIC5sYWJlbCB7XFxuICBjb2xvcjogdmFyKC0tY2VsbHMtYmxhY2spO1xcbn1cXG5cXG4jY2hlc3MtYm9hcmQgLmNlbGwuYmxhY2sgLmxhYmVsIHtcXG4gIGNvbG9yOiB2YXIoLS1jZWxscy13aGl0ZSk7XFxufVxcblxcbiNjaGVzcy1ib2FyZCAuY2VsbFtkYXRhLXBvc2l0aW9uPVxcXCJjb2x1bW4temVyby1yb3ctemVyb1xcXCJdIC5jb2x1bW4ubGFiZWwge1xcbiAgbWFyZ2luLWxlZnQ6IDFjaDtcXG59XFxuXFxuI2NvbnRyb2xzIHtcXG4gIHdpZHRoOiBtaW4oOTB2bWluLCA2MDBweCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMiU7XFxufVxcblxcbiNjb250cm9scyBidXR0b24ge1xcbiAgZmxleDogMTtcXG4gIGFzcGVjdC1yYXRpbzogMy8xO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jY29udHJvbHMgYnV0dG9uLmFjdGl2ZSB7XFxuICBib3JkZXI6IHNvbGlkIDJweCByZWQ7XFxufVxcblxcbiNrbmlnaHQtcGllY2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDI1JTtcXG4gIHJpZ2h0OiAwJTtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uY3VzdG9tLWN1cnNvciB7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uY3VzdG9tLWN1cnNvci5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2tuaWdodC1jdXJzb3Ige1xcbiAgY3Vyc29yOiBub25lO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltYWdlcy9rbmlnaHQucG5nXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4jdm9sdW1lLXRvZ2dsZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMiU7XFxuICB0b3A6IDIlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbiN2b2x1bWUtdG9nZ2xlOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coLTFweCAxcHggMHB4IHdoaXRlKTtcXG59XFxuXFxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpLCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgOnJvb3Qge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICB9XFxuXFxuICAjY2hlc3MtYm9hcmQge1xcbiAgICB3aWR0aDogbWluKDkwdm1pbiwgNjAwcHgpO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXVkaW8vY2hlc3MtcGllY2Utc291bmQubXAzXCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IE1PVkVfQ09ORElUSU9OUyA9IHtcbiAgdHdvVXAoeSkge1xuICAgIHJldHVybiB5IDw9IDU7XG4gIH0sXG5cbiAgdHdvRG93bih5KSB7XG4gICAgcmV0dXJuIHkgPj0gMjtcbiAgfSxcblxuICB0d29MZWZ0KHgpIHtcbiAgICByZXR1cm4geCA+PSAyO1xuICB9LFxuXG4gIHR3b1JpZ2h0KHgpIHtcbiAgICByZXR1cm4geCA8PSA1O1xuICB9LFxuXG4gIG9uZVVwKHkpIHtcbiAgICByZXR1cm4geSAhPT0gNztcbiAgfSxcblxuICBvbmVEb3duKHkpIHtcbiAgICByZXR1cm4geSAhPT0gMDtcbiAgfSxcblxuICBvbmVMZWZ0KHgpIHtcbiAgICByZXR1cm4geCAhPT0gMDtcbiAgfSxcblxuICBvbmVSaWdodCh4KSB7XG4gICAgcmV0dXJuIHggIT09IDc7XG4gIH0sXG59O1xuXG5jb25zdCBNT1ZFUyA9IFtcbiAge1xuICAgIC8vIHRvcCBsZWZ0XG4gICAgY29uZGl0aW9uOiAoeCwgeSkgPT4ge1xuICAgICAgcmV0dXJuIE1PVkVfQ09ORElUSU9OUy5vbmVMZWZ0KHgpICYmIE1PVkVfQ09ORElUSU9OUy50d29VcCh5KTtcbiAgICB9LFxuICAgIGNvb3JkaW5hdGVzOiAoeCwgeSkgPT4ge1xuICAgICAgcmV0dXJuIHsgeDogeCAtIDEsIHk6IHkgKyAyIH07XG4gICAgfSxcbiAgfSxcblxuICB7XG4gICAgLy8gdG9wIHJpZ2h0XG4gICAgY29uZGl0aW9uOiAoeCwgeSkgPT4ge1xuICAgICAgcmV0dXJuIE1PVkVfQ09ORElUSU9OUy5vbmVSaWdodCh4KSAmJiBNT1ZFX0NPTkRJVElPTlMudHdvVXAoeSk7XG4gICAgfSxcbiAgICBjb29yZGluYXRlczogKHgsIHkpID0+IHtcbiAgICAgIHJldHVybiB7IHg6IHggKyAxLCB5OiB5ICsgMiB9O1xuICAgIH0sXG4gIH0sXG5cbiAge1xuICAgIC8vIGJvdHRvbSBsZWZ0XG4gICAgY29uZGl0aW9uOiAoeCwgeSkgPT4ge1xuICAgICAgcmV0dXJuIE1PVkVfQ09ORElUSU9OUy5vbmVMZWZ0KHgpICYmIE1PVkVfQ09ORElUSU9OUy50d29Eb3duKHkpO1xuICAgIH0sXG4gICAgY29vcmRpbmF0ZXM6ICh4LCB5KSA9PiB7XG4gICAgICByZXR1cm4geyB4OiB4IC0gMSwgeTogeSAtIDIgfTtcbiAgICB9LFxuICB9LFxuXG4gIHtcbiAgICAvLyBib3R0b20gcmlnaHRcbiAgICBjb25kaXRpb246ICh4LCB5KSA9PiB7XG4gICAgICByZXR1cm4gTU9WRV9DT05ESVRJT05TLm9uZVJpZ2h0KHgpICYmIE1PVkVfQ09ORElUSU9OUy50d29Eb3duKHkpO1xuICAgIH0sXG4gICAgY29vcmRpbmF0ZXM6ICh4LCB5KSA9PiB7XG4gICAgICByZXR1cm4geyB4OiB4ICsgMSwgeTogeSAtIDIgfTtcbiAgICB9LFxuICB9LFxuXG4gIHtcbiAgICAvLyBsZWZ0IHRvcFxuICAgIGNvbmRpdGlvbjogKHgsIHkpID0+IHtcbiAgICAgIHJldHVybiBNT1ZFX0NPTkRJVElPTlMudHdvTGVmdCh4KSAmJiBNT1ZFX0NPTkRJVElPTlMub25lVXAoeSk7XG4gICAgfSxcbiAgICBjb29yZGluYXRlczogKHgsIHkpID0+IHtcbiAgICAgIHJldHVybiB7IHg6IHggLSAyLCB5OiB5ICsgMSB9O1xuICAgIH0sXG4gIH0sXG5cbiAge1xuICAgIC8vIGxlZnQgYm90dG9tXG4gICAgY29uZGl0aW9uOiAoeCwgeSkgPT4ge1xuICAgICAgcmV0dXJuIE1PVkVfQ09ORElUSU9OUy50d29MZWZ0KHgpICYmIE1PVkVfQ09ORElUSU9OUy5vbmVEb3duKHkpO1xuICAgIH0sXG4gICAgY29vcmRpbmF0ZXM6ICh4LCB5KSA9PiB7XG4gICAgICByZXR1cm4geyB4OiB4IC0gMiwgeTogeSAtIDEgfTtcbiAgICB9LFxuICB9LFxuXG4gIHtcbiAgICAvLyByaWdodCB0b3BcbiAgICBjb25kaXRpb246ICh4LCB5KSA9PiB7XG4gICAgICByZXR1cm4gTU9WRV9DT05ESVRJT05TLnR3b1JpZ2h0KHgpICYmIE1PVkVfQ09ORElUSU9OUy5vbmVVcCh5KTtcbiAgICB9LFxuICAgIGNvb3JkaW5hdGVzOiAoeCwgeSkgPT4ge1xuICAgICAgcmV0dXJuIHsgeDogeCArIDIsIHk6IHkgKyAxIH07XG4gICAgfSxcbiAgfSxcblxuICB7XG4gICAgLy8gcmlnaHQgYm90dG9tXG4gICAgY29uZGl0aW9uOiAoeCwgeSkgPT4ge1xuICAgICAgcmV0dXJuIE1PVkVfQ09ORElUSU9OUy50d29SaWdodCh4KSAmJiBNT1ZFX0NPTkRJVElPTlMub25lRG93bih5KTtcbiAgICB9LFxuICAgIGNvb3JkaW5hdGVzOiAoeCwgeSkgPT4ge1xuICAgICAgcmV0dXJuIHsgeDogeCArIDIsIHk6IHkgLSAxIH07XG4gICAgfSxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFsbG93ZWRNb3Zlcyh7IHgsIHkgfSkge1xuICBjb25zdCBhbGxvd2VkTW92ZXMgPSBbXTtcblxuICBmb3IgKGNvbnN0IG1vdmUgb2YgTU9WRVMpIHtcbiAgICBpZiAobW92ZS5jb25kaXRpb24oeCwgeSkpIGFsbG93ZWRNb3Zlcy5wdXNoKG1vdmUuY29vcmRpbmF0ZXMoeCwgeSkpO1xuICB9XG5cbiAgcmV0dXJuIGFsbG93ZWRNb3Zlcztcbn1cbiIsImltcG9ydCBhbGxvd2VkTW92ZXMgZnJvbSBcIi4vYWxsb3dlZC1tb3Zlcy5qc1wiO1xuaW1wb3J0IE5vZGUgZnJvbSBcIi4vbm9kZS5qc1wiO1xuaW1wb3J0IFF1ZXVlIGZyb20gXCIuL3F1ZXVlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGtuaWdodE1vdmVzKHF1ZXVlLCB0YXJnZXQpIHtcbiAgaWYgKCEocXVldWUgaW5zdGFuY2VvZiBRdWV1ZSkpIHtcbiAgICBjb25zdCBzdGFydGluZ1BvaW50ID0gcXVldWU7XG4gICAgcXVldWUgPSBuZXcgUXVldWUoKTtcbiAgICBjb25zdCBxdWV1ZU9iamVjdCA9IHsgcG9zaXRpb246IHN0YXJ0aW5nUG9pbnQsIHBhcmVudDogbnVsbCB9O1xuICAgIHF1ZXVlLmVucXVldWUocXVldWVPYmplY3QpO1xuICB9XG5cbiAgY29uc3QgY3VycmVudFF1ZXVlRWxlbWVudCA9IHF1ZXVlLmRlcXVldWUoKTtcbiAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gY3VycmVudFF1ZXVlRWxlbWVudC5wb3NpdGlvbjtcbiAgY29uc3QgY3VycmVudFBhcmVudCA9IGN1cnJlbnRRdWV1ZUVsZW1lbnQucGFyZW50O1xuICBjb25zdCBjdXJyZW50Tm9kZSA9IG5ldyBOb2RlKGN1cnJlbnRQb3NpdGlvbiwgY3VycmVudFBhcmVudCk7XG5cbiAgLy8gQmFzZSBjYXNlOiB0YXJnZXQgcG9zaXRpb24gaGFzIGJlZW4gZm91bmRcbiAgaWYgKGN1cnJlbnRQb3NpdGlvbi54ID09PSB0YXJnZXQueCAmJiBjdXJyZW50UG9zaXRpb24ueSA9PT0gdGFyZ2V0LnkpIHtcbiAgICByZXR1cm4gY3VycmVudE5vZGUucGF0aC5jb25jYXQoY3VycmVudFBvc2l0aW9uKTtcbiAgfVxuXG4gIC8vIFJlY3Vyc2l2ZSBjYXNlXG4gIGNvbnN0IGlzVW52aXNpdGVkID0gKHBvc2l0aW9uKSA9PiB7XG4gICAgcmV0dXJuICFKU09OLnN0cmluZ2lmeShjdXJyZW50Tm9kZS5wYXRoKS5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShwb3NpdGlvbikpO1xuICB9O1xuXG4gIGNvbnN0IHBvdGVudGlhbE1vdmVzID0gYWxsb3dlZE1vdmVzKGN1cnJlbnRQb3NpdGlvbikuZmlsdGVyKGlzVW52aXNpdGVkKTtcblxuICBwb3RlbnRpYWxNb3Zlcy5mb3JFYWNoKChtb3ZlKSA9PiB7XG4gICAgcXVldWUuZW5xdWV1ZSh7IHBvc2l0aW9uOiBtb3ZlLCBwYXJlbnQ6IGN1cnJlbnROb2RlIH0pO1xuICB9KTtcblxuICByZXR1cm4ga25pZ2h0TW92ZXMocXVldWUsIHRhcmdldCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlIHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIHBhcmVudCkge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLnBhdGggPSB0aGlzLmdldFBhdGgoKTtcbiAgfVxuXG4gIGdldFBhdGgoKSB7XG4gICAgY29uc3QgcGF0aCA9IFtdO1xuICAgIGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudDtcbiAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICBwYXRoLnVuc2hpZnQocGFyZW50LnBvc2l0aW9uKTtcbiAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBRdWV1ZSB7XG4gIHF1ZXVlID0gW107XG5cbiAgZW5xdWV1ZSh2YWx1ZSkge1xuICAgIHRoaXMucXVldWUucHVzaCh2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXMucXVldWU7XG4gIH1cblxuICBkZXF1ZXVlKCkge1xuICAgIHJldHVybiB0aGlzLnF1ZXVlLnNoaWZ0KCk7XG4gIH1cbn1cbiIsImltcG9ydCBjaGVzc1BpZWNlU291bmRGaWxlIGZyb20gXCIuL2F1ZGlvL2NoZXNzLXBpZWNlLXNvdW5kLm1wM1wiO1xuXG5jb25zdCBjaGVzc1BpZWNlU291bmQgPSBuZXcgQXVkaW8oY2hlc3NQaWVjZVNvdW5kRmlsZSk7XG5jaGVzc1BpZWNlU291bmQucHJlbG9hZCA9IFwiYXV0b1wiO1xuXG5mdW5jdGlvbiBzb3VuZE9uKCkge1xuICBjb25zdCB2b2x1bWVPbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdm9sdW1lLXRvZ2dsZVtkYXRhLXZvbHVtZT0ndHJ1ZSddXCIpO1xuICByZXR1cm4gdm9sdW1lT24gPyB0cnVlIDogZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBsYXlDaGVzc1BpZWNlU291bmQoKSB7XG4gIGlmIChzb3VuZE9uKCkpIGNoZXNzUGllY2VTb3VuZC5wbGF5KCk7XG59XG4iLCJpbXBvcnQgcGxheUNoZXNzUGllY2VTb3VuZCBmcm9tIFwiLi9zb3VuZC1lZmZlY3RzLmpzXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIHBhdXNlKHBhdXNlRHVyYXRpb24pIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgc2V0VGltZW91dChyZXNvbHZlLCBwYXVzZUR1cmF0aW9uKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHRyYXZlcnNlKHBhdGgpIHtcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjY29udHJvbHMgYnV0dG9uOm5vdCgjdHJhdmVyc2UpXCIpO1xuICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gIH0pO1xuXG4gIGNvbnN0IGtuaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIja25pZ2h0LXBpZWNlXCIpO1xuICBjb25zdCBrbmlnaHRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGtuaWdodCk7XG4gIGNvbnN0IG9yaWdpbmFsS25pZ2h0Qm90dG9tTWFyZ2luID0ga25pZ2h0U3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImJvdHRvbVwiKTtcbiAgLy8gSW4gbGluZSAxOSwgZ2V0UHJvcGVydHlWYWx1ZSByZXR1cm5zIHNvbWV0aGluZyBsaWtlIFwiMXNcIiwgc28gSSBnZXQgcmlkIG9mIHRoZSBcInNcIiBhbmQgbXVsdGlwbHkgaXQgYnkgYSB0aG91c2FuZFxuICAvLyBpbiBvcmRlciB0byBnZXQgdGhlIHByb3BlcnR5IGluIG1pbGlzZWNvbmRzICh3aXRob3V0IHRoZSBcIm1zXCIgdW5pdCkgYW5kIHBhc3MgaXQgYXMgdGhlIGFyZ3VtZW50IGZvciB0aGUgcGF1c2UgZnVuY3Rpb25cbiAgY29uc3Qga25pZ2h0VHJhbnNpdGlvbkR1cmF0aW9uID1cbiAgICBrbmlnaHRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwidHJhbnNpdGlvbi1kdXJhdGlvblwiKS5zbGljZSgwLCAtMSkgKiAxMDAwO1xuXG4gIGZvciAobGV0IHBvc2l0aW9uSW5kZXggPSAxOyBwb3NpdGlvbkluZGV4IDwgcGF0aC5sZW5ndGg7IHBvc2l0aW9uSW5kZXgrKykge1xuICAgIGNvbnN0IHByZXZpb3VzUG9zaXRpb24gPSBwYXRoW3Bvc2l0aW9uSW5kZXggLSAxXTtcbiAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSBwYXRoW3Bvc2l0aW9uSW5kZXhdO1xuXG4gICAgY29uc3QgcHJldmlvdXNCb3R0b21NYXJnaW4gPSB3aW5kb3dcbiAgICAgIC5nZXRDb21wdXRlZFN0eWxlKGtuaWdodClcbiAgICAgIC5nZXRQcm9wZXJ0eVZhbHVlKFwiYm90dG9tXCIpO1xuICAgIGNvbnN0IHByZXZpb3VzUmlnaHRNYXJnaW4gPSB3aW5kb3dcbiAgICAgIC5nZXRDb21wdXRlZFN0eWxlKGtuaWdodClcbiAgICAgIC5nZXRQcm9wZXJ0eVZhbHVlKFwicmlnaHRcIik7XG5cbiAgICAvLyB0b3BcbiAgICBpZiAoY3VycmVudFBvc2l0aW9uLnkgPT09IHByZXZpb3VzUG9zaXRpb24ueSArIDIpIHtcbiAgICAgIGtuaWdodC5zdHlsZS5ib3R0b20gPSBgY2FsYygke3ByZXZpb3VzQm90dG9tTWFyZ2lufSArIDIwMCUpYDtcbiAgICAgIGF3YWl0IHBhdXNlKGtuaWdodFRyYW5zaXRpb25EdXJhdGlvbik7XG5cbiAgICAgIC8vIGxlZnRcbiAgICAgIGlmIChjdXJyZW50UG9zaXRpb24ueCA9PT0gcHJldmlvdXNQb3NpdGlvbi54IC0gMSkge1xuICAgICAgICBrbmlnaHQuc3R5bGUucmlnaHQgPSBgY2FsYygke3ByZXZpb3VzUmlnaHRNYXJnaW59ICsgMTAwJSlgO1xuICAgICAgICBhd2FpdCBwYXVzZShrbmlnaHRUcmFuc2l0aW9uRHVyYXRpb24gKiAxLjUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcmlnaHRcbiAgICAgICAga25pZ2h0LnN0eWxlLnJpZ2h0ID0gYGNhbGMoJHtwcmV2aW91c1JpZ2h0TWFyZ2lufSAtIDEwMCUpYDtcbiAgICAgICAgYXdhaXQgcGF1c2Uoa25pZ2h0VHJhbnNpdGlvbkR1cmF0aW9uICogMS41KTtcbiAgICAgIH1cbiAgICAgIC8vIGJvdHRvbVxuICAgIH0gZWxzZSBpZiAoY3VycmVudFBvc2l0aW9uLnkgPT09IHByZXZpb3VzUG9zaXRpb24ueSAtIDIpIHtcbiAgICAgIGtuaWdodC5zdHlsZS5ib3R0b20gPSBgY2FsYygke3ByZXZpb3VzQm90dG9tTWFyZ2lufSAtIDIwMCUpYDtcbiAgICAgIGF3YWl0IHBhdXNlKGtuaWdodFRyYW5zaXRpb25EdXJhdGlvbik7XG5cbiAgICAgIC8vIGxlZnRcbiAgICAgIGlmIChjdXJyZW50UG9zaXRpb24ueCA9PT0gcHJldmlvdXNQb3NpdGlvbi54IC0gMSkge1xuICAgICAgICBrbmlnaHQuc3R5bGUucmlnaHQgPSBgY2FsYygke3ByZXZpb3VzUmlnaHRNYXJnaW59ICsgMTAwJSlgO1xuICAgICAgICBhd2FpdCBwYXVzZShrbmlnaHRUcmFuc2l0aW9uRHVyYXRpb24gKiAxLjUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcmlnaHRcbiAgICAgICAga25pZ2h0LnN0eWxlLnJpZ2h0ID0gYGNhbGMoJHtwcmV2aW91c1JpZ2h0TWFyZ2lufSAtIDEwMCUpYDtcbiAgICAgICAgYXdhaXQgcGF1c2Uoa25pZ2h0VHJhbnNpdGlvbkR1cmF0aW9uICogMS41KTtcbiAgICAgIH1cbiAgICAgIC8vIGxlZnRcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRQb3NpdGlvbi54ID09PSBwcmV2aW91c1Bvc2l0aW9uLnggLSAyKSB7XG4gICAgICBrbmlnaHQuc3R5bGUucmlnaHQgPSBgY2FsYygke3ByZXZpb3VzUmlnaHRNYXJnaW59ICsgMjAwJSlgO1xuICAgICAgYXdhaXQgcGF1c2Uoa25pZ2h0VHJhbnNpdGlvbkR1cmF0aW9uKTtcblxuICAgICAgLy8gdG9wXG4gICAgICBpZiAoY3VycmVudFBvc2l0aW9uLnkgPT09IHByZXZpb3VzUG9zaXRpb24ueSArIDEpIHtcbiAgICAgICAga25pZ2h0LnN0eWxlLmJvdHRvbSA9IGBjYWxjKCR7cHJldmlvdXNCb3R0b21NYXJnaW59ICsgMTAwJSlgO1xuICAgICAgICBhd2FpdCBwYXVzZShrbmlnaHRUcmFuc2l0aW9uRHVyYXRpb24gKiAxLjUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gYm90dG9tXG4gICAgICAgIGtuaWdodC5zdHlsZS5ib3R0b20gPSBgY2FsYygke3ByZXZpb3VzQm90dG9tTWFyZ2lufSAtIDEwMCUpYDtcbiAgICAgICAgYXdhaXQgcGF1c2Uoa25pZ2h0VHJhbnNpdGlvbkR1cmF0aW9uICogMS41KTtcbiAgICAgIH1cbiAgICAgIC8vIHJpZ2h0XG4gICAgfSBlbHNlIHtcbiAgICAgIGtuaWdodC5zdHlsZS5yaWdodCA9IGBjYWxjKCR7cHJldmlvdXNSaWdodE1hcmdpbn0gLSAyMDAlKWA7XG4gICAgICBhd2FpdCBwYXVzZShrbmlnaHRUcmFuc2l0aW9uRHVyYXRpb24pO1xuXG4gICAgICAvLyB0b3BcbiAgICAgIGlmIChjdXJyZW50UG9zaXRpb24ueSA9PT0gcHJldmlvdXNQb3NpdGlvbi55ICsgMSkge1xuICAgICAgICBrbmlnaHQuc3R5bGUuYm90dG9tID0gYGNhbGMoJHtwcmV2aW91c0JvdHRvbU1hcmdpbn0gKyAxMDAlKWA7XG4gICAgICAgIGF3YWl0IHBhdXNlKGtuaWdodFRyYW5zaXRpb25EdXJhdGlvbiAqIDEuNSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBib3R0b21cbiAgICAgICAga25pZ2h0LnN0eWxlLmJvdHRvbSA9IGBjYWxjKCR7cHJldmlvdXNCb3R0b21NYXJnaW59IC0gMTAwJSlgO1xuICAgICAgICBhd2FpdCBwYXVzZShrbmlnaHRUcmFuc2l0aW9uRHVyYXRpb24gKiAxLjUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHBsYXlDaGVzc1BpZWNlU291bmQoKTtcblxuICAgIGNvbnN0IGN1cnJlbnRNb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgY3VycmVudE1vdmUuY2xhc3NMaXN0LmFkZChcIm1vdmVcIik7XG4gICAgY3VycmVudE1vdmUuaWQgPSBwb3NpdGlvbkluZGV4O1xuICAgIGNvbnN0IG1vdmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBtb3ZlTnVtYmVyLmlubmVyVGV4dCA9IHBvc2l0aW9uSW5kZXg7XG4gICAgY3VycmVudE1vdmUuYXBwZW5kQ2hpbGQobW92ZU51bWJlcik7XG4gICAgY29uc3QgY3VycmVudENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC5jZWxsW2RhdGEtcG9zaXRpb24teD0nJHtjdXJyZW50UG9zaXRpb24ueH0nXVtkYXRhLXBvc2l0aW9uLXk9JyR7Y3VycmVudFBvc2l0aW9uLnl9J11gXG4gICAgKTtcbiAgICBjdXJyZW50Q2VsbC5hcHBlbmRDaGlsZChjdXJyZW50TW92ZSk7XG5cbiAgICBpZiAocG9zaXRpb25JbmRleCA9PT0gcGF0aC5sZW5ndGggLSAxKSB7XG4gICAgICBrbmlnaHQuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICBhd2FpdCBwYXVzZShrbmlnaHRUcmFuc2l0aW9uRHVyYXRpb24pO1xuXG4gICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH0pO1xuXG4gICAgICBrbmlnaHQuc3R5bGUuYm90dG9tID0gb3JpZ2luYWxLbmlnaHRCb3R0b21NYXJnaW47XG4gICAgICBrbmlnaHQuc3R5bGUucmlnaHQgPSAwO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IGtuaWdodEltYWdlU3JjIGZyb20gXCIuL2ltYWdlcy9rbmlnaHQucG5nXCI7XG5pbXBvcnQgcGxheUNoZXNzUGllY2VTb3VuZCBmcm9tIFwiLi9zb3VuZC1lZmZlY3RzLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwbGFjZUtuaWdodChjZWxsKSB7XG4gIHBsYXlDaGVzc1BpZWNlU291bmQoKTtcbiAgY29uc3Qga25pZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAga25pZ2h0LnNyYyA9IGtuaWdodEltYWdlU3JjO1xuICBrbmlnaHQuaWQgPSBcImtuaWdodC1waWVjZVwiO1xuICBrbmlnaHQuYWx0ID0gXCJLbmlnaHQgcGllY2VcIjtcbiAgY2VsbC5hcHBlbmRDaGlsZChrbmlnaHQpO1xuICBjZWxsLmlkID0gXCJzdGFydGluZy1wb3NpdGlvblwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJLbmlnaHQoKSB7XG4gIGNvbnN0IHByZXZpb3VzS25pZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImltZyNrbmlnaHQtcGllY2VcIik7XG4gIGlmIChwcmV2aW91c0tuaWdodCkgcHJldmlvdXNLbmlnaHQucmVtb3ZlKCk7XG4gIGNvbnN0IHByZXZpb3VzU3RhcnRpbmdDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGFydGluZy1wb3NpdGlvblwiKTtcbiAgaWYgKHByZXZpb3VzU3RhcnRpbmdDZWxsKSBwcmV2aW91c1N0YXJ0aW5nQ2VsbC5pZCA9IFwiXCI7XG4gIGNsZWFyTW92ZXMoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFRhcmdldChjZWxsKSB7XG4gIGNlbGwuaWQgPSBcInRhcmdldFwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJUYXJnZXQoKSB7XG4gIGNvbnN0IHByZXZpb3VzVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jZWxsI3RhcmdldFwiKTtcbiAgaWYgKHByZXZpb3VzVGFyZ2V0KSBwcmV2aW91c1RhcmdldC5pZCA9IFwiXCI7XG4gIGNsZWFyTW92ZXMoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyTW92ZXMoKSB7XG4gIGNvbnN0IG1vdmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb3ZlXCIpO1xuICBtb3Zlcy5mb3JFYWNoKChtb3ZlKSA9PiB7XG4gICAgbW92ZS5yZW1vdmUoKTtcbiAgfSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBrbmlnaHRNb3ZlcyBmcm9tIFwiLi9rbmlnaHRzLXRyYXZhaWxzLmpzXCI7XG5pbXBvcnQge1xuICBjbGVhcktuaWdodCxcbiAgY2xlYXJNb3ZlcyxcbiAgY2xlYXJUYXJnZXQsXG4gIHBsYWNlS25pZ2h0LFxuICBzZXRUYXJnZXQsXG59IGZyb20gXCIuL3VpLWNlbGxzLWZ1bmN0aW9uc1wiO1xuaW1wb3J0IHRyYXZlcnNlIGZyb20gXCIuL3RyYXZlcnNlXCI7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuLy8gQ3Vyc29yIG1vZGVzOlxubGV0IHBsYWNlS25pZ2h0Q3Vyc29yID0gZmFsc2U7XG5sZXQgc2V0VGFyZ2V0Q3Vyc29yID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGRpc3BsYXlLbmlnaHRDdXJzb3IoKSB7XG4gIGNsZWFyS25pZ2h0KCk7XG5cbiAgY29uc3Qga25pZ2h0Q3Vyc29yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGtuaWdodEN1cnNvci5jbGFzc0xpc3QuYWRkKFwiY3VzdG9tLWN1cnNvclwiLCBcImhpZGRlblwiKTtcbiAga25pZ2h0Q3Vyc29yLmlkID0gXCJrbmlnaHQtY3Vyc29yXCI7XG4gIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNlbGxcIik7XG4gIGNvbnN0IGNlbGxzV2lkdGggPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjZWxsKS5nZXRQcm9wZXJ0eVZhbHVlKFwid2lkdGhcIik7XG4gIGtuaWdodEN1cnNvci5zdHlsZS53aWR0aCA9IGNlbGxzV2lkdGg7XG4gIGJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZXZlbnQpID0+IHtcbiAgICBrbmlnaHRDdXJzb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICBrbmlnaHRDdXJzb3Iuc3R5bGUubGVmdCA9IGBjYWxjKCR7ZXZlbnQuY2xpZW50WH1weCAtICR7Y2VsbHNXaWR0aH0vMilgO1xuICAgIGtuaWdodEN1cnNvci5zdHlsZS50b3AgPSBgY2FsYygke2V2ZW50LmNsaWVudFl9cHggLSAke2NlbGxzV2lkdGh9LzIpYDtcbiAgfSk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoa25pZ2h0Q3Vyc29yKTtcbiAgYm9keS5jbGFzc0xpc3QuYWRkKFwicGxhY2Uta25pZ2h0XCIpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVLbmlnaHRDdXJzb3IoKSB7XG4gIGNvbnN0IGtuaWdodEN1cnNvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIja25pZ2h0LWN1cnNvclwiKTtcbiAgaWYgKGtuaWdodEN1cnNvcikga25pZ2h0Q3Vyc29yLnJlbW92ZSgpO1xuICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJwbGFjZS1rbmlnaHRcIik7XG59XG5cbmZ1bmN0aW9uIGNoZWNrVHJhdmVyc2VCdXR0b25TdGF0ZSgpIHtcbiAgY29uc3Qga25pZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNrbmlnaHQtcGllY2VcIik7XG4gIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFyZ2V0XCIpO1xuICBjb25zdCB0cmF2ZXJzZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24jdHJhdmVyc2VcIik7XG4gIHRyYXZlcnNlQnV0dG9uLmRpc2FibGVkID0gIShrbmlnaHQgJiYgdGFyZ2V0KTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlUGxhY2VLbmlnaHRDdXJzb3IoKSB7XG4gIHBsYWNlS25pZ2h0Q3Vyc29yID0gIXBsYWNlS25pZ2h0Q3Vyc29yO1xuICBwbGFjZUtuaWdodEN1cnNvciA/IGRpc3BsYXlLbmlnaHRDdXJzb3IoKSA6IHJlbW92ZUtuaWdodEN1cnNvcigpO1xuICBwbGFjZUtuaWdodEJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICBzZXRUYXJnZXRDdXJzb3IgPSBmYWxzZTtcbiAgc2V0VGFyZ2V0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcInNldC10YXJnZXRcIik7XG4gIGNoZWNrVHJhdmVyc2VCdXR0b25TdGF0ZSgpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVTZXRUYXJnZXRDdXJzb3IoKSB7XG4gIHNldFRhcmdldEN1cnNvciA9ICFzZXRUYXJnZXRDdXJzb3I7XG4gIGlmIChzZXRUYXJnZXRDdXJzb3IpIGNsZWFyVGFyZ2V0KCk7XG4gIHNldFRhcmdldEJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICBib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJzZXQtdGFyZ2V0XCIpO1xuICBwbGFjZUtuaWdodEN1cnNvciA9IGZhbHNlO1xuICBwbGFjZUtuaWdodEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICBjb25zdCBrbmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2tuaWdodC1waWVjZVwiKTtcbiAgaWYgKGtuaWdodCkga25pZ2h0LnN0eWxlLm9wYWNpdHkgPSAxO1xuICByZW1vdmVLbmlnaHRDdXJzb3IoKTtcbiAgY2hlY2tUcmF2ZXJzZUJ1dHRvblN0YXRlKCk7XG59XG5cbi8vIEJ1aWxkIGNoZXNzIGJvYXJkOlxuXG5jb25zdCBjaGVzc0JvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaGVzcy1ib2FyZFwiKTtcblxuLy8gTm9ybWFsIGNoZXNzIGJvYXJkcyBhcmUgOHg4XG5jb25zdCBDSEVTU0JPQVJEX1dJRFRIID0gODtcbmNvbnN0IENIRVNTQk9BUkRfSEVJR0hUID0gODtcblxuY29uc3QgQ09MVU1OX0NPTE9SUyA9IHsgZXZlbjogXCJibGFja1wiLCBvZGQ6IFwid2hpdGVcIiB9O1xuXG5mb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCBDSEVTU0JPQVJEX1dJRFRIOyBjb2x1bW4rKykge1xuICBjb25zdCBjb2x1bW5TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGNvbHVtblNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImNvbHVtblwiKTtcbiAgY29sdW1uU2VjdGlvbi5pZCA9IGNvbHVtbjtcbiAgZm9yIChsZXQgcm93ID0gQ0hFU1NCT0FSRF9IRUlHSFQgLSAxOyByb3cgPj0gMDsgcm93LS0pIHtcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuICAgIGNvbnN0IGNlbGxDb2xvciA9IHJvdyAlIDIgPT09IDAgPyBDT0xVTU5fQ09MT1JTLmV2ZW4gOiBDT0xVTU5fQ09MT1JTLm9kZDtcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoY2VsbENvbG9yKTtcbiAgICBjZWxsLnNldEF0dHJpYnV0ZShcImRhdGEtcG9zaXRpb24teFwiLCBjb2x1bW4pO1xuICAgIGNlbGwuc2V0QXR0cmlidXRlKFwiZGF0YS1wb3NpdGlvbi15XCIsIHJvdyk7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKHBsYWNlS25pZ2h0Q3Vyc29yKSB7XG4gICAgICAgIHBsYWNlS25pZ2h0KGNlbGwpO1xuICAgICAgICB0b2dnbGVQbGFjZUtuaWdodEN1cnNvcigpO1xuICAgICAgfSBlbHNlIGlmIChzZXRUYXJnZXRDdXJzb3IpIHtcbiAgICAgICAgLy8gS25pZ2h0J3MgdGFyZ2V0IGNhbid0IGJlIGVxdWFsIHRvIGl0cyBzdGFydGluZyBwb2ludFxuICAgICAgICBjb25zdCBrbmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2tuaWdodC1waWVjZVwiKTtcbiAgICAgICAgaWYgKGtuaWdodCAmJiBrbmlnaHQucGFyZW50RWxlbWVudCA9PT0gY2VsbCkgcmV0dXJuO1xuICAgICAgICBzZXRUYXJnZXQoY2VsbCk7XG4gICAgICAgIHRvZ2dsZVNldFRhcmdldEN1cnNvcigpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGNvbHVtbiA9PT0gMCAmJiByb3cgPT09IDApIHtcbiAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwiZGF0YS1wb3NpdGlvblwiLCBcImNvbHVtbi16ZXJvLXJvdy16ZXJvXCIpO1xuICAgIH1cblxuICAgIGlmIChjb2x1bW4gPT09IDApIHtcbiAgICAgIGNvbnN0IHJvd0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICByb3dMYWJlbC5jbGFzc0xpc3QuYWRkKFwicm93XCIsIFwibGFiZWxcIik7XG4gICAgICByb3dMYWJlbC5pbm5lclRleHQgPSByb3cgKyAxO1xuICAgICAgY2VsbC5hcHBlbmRDaGlsZChyb3dMYWJlbCk7XG4gICAgfVxuXG4gICAgaWYgKHJvdyA9PT0gMCkge1xuICAgICAgY29uc3QgY29sdW1uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGNvbHVtbkxhYmVsLmNsYXNzTGlzdC5hZGQoXCJjb2x1bW5cIiwgXCJsYWJlbFwiKTtcbiAgICAgIC8vIEhlcmUgSSBhZGQgY29sdW1uIGFuZCA5NyB0byBnZXQgdGhlIGFzY2lpIGNvZGUgb2YgdGhlIGxvd2VyIGNhc2UgbGV0dGVycyBzdGFydGluZyBmcm9tIFwiYVwiLCB3aGljaCBpcyBob3dcbiAgICAgIC8vIGNvbHVtbnMgYXJlIGxhYmVsZWQgaW4gY2hlc3MgYm9hcmRzOiBodHRwczovL3d3dy5hc2NpaXRhYmxlLmNvbS9cbiAgICAgIGNvbHVtbkxhYmVsLmlubmVyVGV4dCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29sdW1uICsgOTcpO1xuICAgICAgY2VsbC5hcHBlbmRDaGlsZChjb2x1bW5MYWJlbCk7XG4gICAgfVxuXG4gICAgY29sdW1uU2VjdGlvbi5hcHBlbmRDaGlsZChjZWxsKTtcbiAgfVxuICBjaGVzc0JvYXJkLmFwcGVuZENoaWxkKGNvbHVtblNlY3Rpb24pO1xuICAvLyBzd2FwIHRoZSBjb2xvdXJzXG4gIGxldCB0ZW1wb3JhcnkgPSBDT0xVTU5fQ09MT1JTLmV2ZW47XG4gIENPTFVNTl9DT0xPUlMuZXZlbiA9IENPTFVNTl9DT0xPUlMub2RkO1xuICBDT0xVTU5fQ09MT1JTLm9kZCA9IHRlbXBvcmFyeTtcbn1cblxuLy8gQnVpbGQgYnV0dG9uczpcblxuY29uc3QgY29udHJvbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRyb2xzXCIpO1xuXG5jb25zdCBwbGFjZUtuaWdodEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5wbGFjZUtuaWdodEJ1dHRvbi5pZCA9IFwicGxhY2Uta25pZ2h0XCI7XG5wbGFjZUtuaWdodEJ1dHRvbi5pbm5lclRleHQgPSBcIlBsYWNlIEtuaWdodFwiO1xucGxhY2VLbmlnaHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZVBsYWNlS25pZ2h0Q3Vyc29yKTtcbmNvbnRyb2xzLmFwcGVuZENoaWxkKHBsYWNlS25pZ2h0QnV0dG9uKTtcblxuY29uc3Qgc2V0VGFyZ2V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbnNldFRhcmdldEJ1dHRvbi5pZCA9IFwic2V0LXRhcmdldFwiO1xuc2V0VGFyZ2V0QnV0dG9uLmlubmVyVGV4dCA9IFwiU2V0IHRhcmdldFwiO1xuc2V0VGFyZ2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVTZXRUYXJnZXRDdXJzb3IpO1xuY29udHJvbHMuYXBwZW5kQ2hpbGQoc2V0VGFyZ2V0QnV0dG9uKTtcblxuY29uc3QgdHJhdmVyc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xudHJhdmVyc2VCdXR0b24uaWQgPSBcInRyYXZlcnNlXCI7XG50cmF2ZXJzZUJ1dHRvbi5pbm5lclRleHQgPSBcIlRyYXZlcnNlXCI7XG50cmF2ZXJzZUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG50cmF2ZXJzZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCBrbmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2tuaWdodC1waWVjZVwiKTtcbiAgY29uc3Qgb3JpZ2luUG9zaXRpb24gPSBKU09OLnBhcnNlKFxuICAgIGB7XCJ4XCI6ICR7a25pZ2h0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFxuICAgICAgXCJkYXRhLXBvc2l0aW9uLXhcIlxuICAgICl9LCBcInlcIjogJHtrbmlnaHQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBvc2l0aW9uLXlcIil9fWBcbiAgKTtcbiAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXJnZXRcIik7XG4gIGNvbnN0IHRhcmdldFBvc2l0aW9uID0gSlNPTi5wYXJzZShcbiAgICBge1wieFwiOiAke3RhcmdldC5nZXRBdHRyaWJ1dGUoXG4gICAgICBcImRhdGEtcG9zaXRpb24teFwiXG4gICAgKX0sIFwieVwiOiAke3RhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBvc2l0aW9uLXlcIil9fWBcbiAgKTtcbiAgY29uc3Qgc2hvcnRlc3RQYXRoID0ga25pZ2h0TW92ZXMob3JpZ2luUG9zaXRpb24sIHRhcmdldFBvc2l0aW9uKTtcbiAgdHJhdmVyc2Uoc2hvcnRlc3RQYXRoKTtcbiAgdHJhdmVyc2VCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xufSk7XG5jb250cm9scy5hcHBlbmRDaGlsZCh0cmF2ZXJzZUJ1dHRvbik7XG5cbmZ1bmN0aW9uIGNsZWFyQm9hcmQoKSB7XG4gIGNsZWFyS25pZ2h0KCk7XG4gIGNsZWFyVGFyZ2V0KCk7XG4gIGNsZWFyTW92ZXMoKTtcbiAgY2hlY2tUcmF2ZXJzZUJ1dHRvblN0YXRlKCk7XG59XG5cbmNvbnN0IGNsZWFyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmNsZWFyQnV0dG9uLmlkID0gXCJjbGVhclwiO1xuY2xlYXJCdXR0b24uaW5uZXJUZXh0ID0gXCJDbGVhclwiO1xuY2xlYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsZWFyQm9hcmQpO1xuY29udHJvbHMuYXBwZW5kQ2hpbGQoY2xlYXJCdXR0b24pO1xuXG4vLyBIaWRlIHRoZSBrbmlnaHQgcGllY2UgaWYgdGhlIGJyb3dzZXIgaXMgcmVzaXplZCBkdXJpbmcgdHJhdmVyc2FsIGFzIHJlc2l6aW5nIHRoZW4gd291bGQgbWVzcyB1cCB0aGUga25pZ2h0J3MgcG9zaXRpb25cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgLy8gSWYgdGhlIHBsYWNlIGtuaWdodCBidXR0b24gaXMgZW5hYmxlZCwgdGhhdCBtZWFucyB0aGUgdHJhdmVyc2FsIGlzbid0IHRha2luZyBwbGFjZVxuICBpZiAoIXBsYWNlS25pZ2h0QnV0dG9uLmRpc2FibGVkKSByZXR1cm47XG4gIGNvbnN0IGtuaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIja25pZ2h0LXBpZWNlXCIpO1xuICBrbmlnaHQuc3R5bGUub3BhY2l0eSA9IDA7XG59KTtcblxuLy8gQnVpbGQgdm9sdW1lIHRvZ2dsZTpcbmxldCB2b2x1bWUgPSB0cnVlO1xuXG5jb25zdCB2b2x1bWVUb2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbnZvbHVtZVRvZ2dsZS5pZCA9IFwidm9sdW1lLXRvZ2dsZVwiO1xudm9sdW1lVG9nZ2xlLnNldEF0dHJpYnV0ZShcImRhdGEtdm9sdW1lXCIsIHZvbHVtZSk7XG52b2x1bWVUb2dnbGUuY2xhc3NMaXN0LmFkZChcImZhLXNvbGlkXCIsIFwiZmEtdm9sdW1lLWhpZ2hcIik7XG52b2x1bWVUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgdm9sdW1lVG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoXCJmYS12b2x1bWUtaGlnaFwiKTtcbiAgdm9sdW1lVG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoXCJmYS12b2x1bWUteG1hcmtcIik7XG4gIHZvbHVtZSA9ICF2b2x1bWU7XG4gIHZvbHVtZVRvZ2dsZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZvbHVtZVwiLCB2b2x1bWUpO1xufSk7XG5ib2R5LmFwcGVuZENoaWxkKHZvbHVtZVRvZ2dsZSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=