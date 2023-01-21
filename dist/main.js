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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --cells-white: #f5f5f5;\n  --cells-black: #292f2f;\n  --place-knight-cells-color: lightgreen;\n  --set-target-cells-color: red;\n  --move-cells-color: skyblue;\n  --chess-board-lables-font-size: 22px;\n  font-size: 16px;\n}\n\nbody {\n  margin: 0;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: \"Roboto\", sans-serif;\n  background-color: lightblue;\n  overflow-x: hidden;\n}\n\nbody.place-knight {\n  cursor: none;\n}\n\nh1#title {\n  margin: 30px 0;\n  font-size: 3rem;\n}\n\nmain {\n  flex: 1;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 20px;\n}\n\n#chess-board {\n  aspect-ratio: 1/1;\n  width: min(90vmin, 600px);\n  display: flex;\n  pointer-events: none;\n  outline: solid 1px black;\n}\n\n#chess-board .column {\n  pointer-events: none;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n#chess-board .cell {\n  flex: 1;\n  position: relative;\n  pointer-events: auto;\n  position: relative;\n  display: flex;\n}\n\nbody.no-cursor #chess-board .cell {\n  cursor: none;\n}\n\nbody.place-knight #chess-board .cell:hover {\n  background: var(--place-knight-cells-color);\n}\n\n#chess-board #starting-position {\n  background-color: var(--place-knight-cells-color);\n}\n\nbody.set-target #chess-board .cell:hover {\n  cursor: pointer;\n  background: var(--set-target-cells-color);\n}\n\n#chess-board #target {\n  background-color: var(--set-target-cells-color);\n}\n\n#chess-board .move {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#chess-board .cell:not(#target) .move {\n  background-color: var(--move-cells-color);\n}\n\n#chess-board .move p {\n  margin: 0;\n}\n\n#chess-board .cell.white {\n  background-color: var(--cells-white);\n}\n\n#chess-board .cell.black {\n  background-color: var(--cells-black);\n}\n\n#chess-board .label {\n  position: absolute;\n  bottom: 0;\n  margin: 0;\n  font-family: \"Roboto Mono\", monospace;\n  font-size: 1rem;\n  z-index: 1;\n}\n\n#chess-board .cell.white .label {\n  color: var(--cells-black);\n}\n\n#chess-board .cell.black .label {\n  color: var(--cells-white);\n}\n\n#chess-board .cell#column-zero-row-zero .column.label {\n  margin-left: 1ch;\n}\n\n#controls {\n  width: min(90vmin, 600px);\n  display: flex;\n  align-items: center;\n  gap: 2%;\n}\n\n#controls button {\n  flex: 1;\n  aspect-ratio: 3/1;\n  cursor: pointer;\n}\n\n#controls button.active {\n  border: solid 2px red;\n}\n\n#knight-piece {\n  width: 100%;\n  position: absolute;\n  bottom: 25%;\n  right: 0%;\n  transition-property: all;\n  transition-duration: 0.5s;\n  z-index: 2;\n}\n\n.custom-cursor {\n  z-index: 2;\n}\n\n.custom-cursor.hidden {\n  display: none;\n}\n\n#knight-cursor {\n  cursor: none;\n  pointer-events: none;\n  position: absolute;\n  aspect-ratio: 1/1;\n  width: 50px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n@media (orientation: portrait), (max-width: 600px) {\n  :root {\n    font-size: 12px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,sBAAsB;EACtB,sCAAsC;EACtC,6BAA6B;EAC7B,2BAA2B;EAC3B,oCAAoC;EACpC,eAAe;AACjB;;AAEA;EACE,SAAS;EACT,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,iCAAiC;EACjC,2BAA2B;EAC3B,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,OAAO;EACP,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,yBAAyB;EACzB,aAAa;EACb,oBAAoB;EACpB,wBAAwB;AAC1B;;AAEA;EACE,oBAAoB;EACpB,OAAO;EACP,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,OAAO;EACP,kBAAkB;EAClB,oBAAoB;EACpB,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,iDAAiD;AACnD;;AAEA;EACE,eAAe;EACf,yCAAyC;AAC3C;;AAEA;EACE,+CAA+C;AACjD;;AAEA;EACE,OAAO;EACP,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,SAAS;EACT,qCAAqC;EACrC,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,mBAAmB;EACnB,OAAO;AACT;;AAEA;EACE,OAAO;EACP,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,wBAAwB;EACxB,yBAAyB;EACzB,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,oBAAoB;EACpB,kBAAkB;EAClB,iBAAiB;EACjB,WAAW;EACX,yDAA4C;EAC5C,wBAAwB;EACxB,4BAA4B;AAC9B;;AAEA;EACE;IACE,eAAe;EACjB;AACF","sourcesContent":[":root {\n  --cells-white: #f5f5f5;\n  --cells-black: #292f2f;\n  --place-knight-cells-color: lightgreen;\n  --set-target-cells-color: red;\n  --move-cells-color: skyblue;\n  --chess-board-lables-font-size: 22px;\n  font-size: 16px;\n}\n\nbody {\n  margin: 0;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: \"Roboto\", sans-serif;\n  background-color: lightblue;\n  overflow-x: hidden;\n}\n\nbody.place-knight {\n  cursor: none;\n}\n\nh1#title {\n  margin: 30px 0;\n  font-size: 3rem;\n}\n\nmain {\n  flex: 1;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 20px;\n}\n\n#chess-board {\n  aspect-ratio: 1/1;\n  width: min(90vmin, 600px);\n  display: flex;\n  pointer-events: none;\n  outline: solid 1px black;\n}\n\n#chess-board .column {\n  pointer-events: none;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n#chess-board .cell {\n  flex: 1;\n  position: relative;\n  pointer-events: auto;\n  position: relative;\n  display: flex;\n}\n\nbody.no-cursor #chess-board .cell {\n  cursor: none;\n}\n\nbody.place-knight #chess-board .cell:hover {\n  background: var(--place-knight-cells-color);\n}\n\n#chess-board #starting-position {\n  background-color: var(--place-knight-cells-color);\n}\n\nbody.set-target #chess-board .cell:hover {\n  cursor: pointer;\n  background: var(--set-target-cells-color);\n}\n\n#chess-board #target {\n  background-color: var(--set-target-cells-color);\n}\n\n#chess-board .move {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#chess-board .cell:not(#target) .move {\n  background-color: var(--move-cells-color);\n}\n\n#chess-board .move p {\n  margin: 0;\n}\n\n#chess-board .cell.white {\n  background-color: var(--cells-white);\n}\n\n#chess-board .cell.black {\n  background-color: var(--cells-black);\n}\n\n#chess-board .label {\n  position: absolute;\n  bottom: 0;\n  margin: 0;\n  font-family: \"Roboto Mono\", monospace;\n  font-size: 1rem;\n  z-index: 1;\n}\n\n#chess-board .cell.white .label {\n  color: var(--cells-black);\n}\n\n#chess-board .cell.black .label {\n  color: var(--cells-white);\n}\n\n#chess-board .cell#column-zero-row-zero .column.label {\n  margin-left: 1ch;\n}\n\n#controls {\n  width: min(90vmin, 600px);\n  display: flex;\n  align-items: center;\n  gap: 2%;\n}\n\n#controls button {\n  flex: 1;\n  aspect-ratio: 3/1;\n  cursor: pointer;\n}\n\n#controls button.active {\n  border: solid 2px red;\n}\n\n#knight-piece {\n  width: 100%;\n  position: absolute;\n  bottom: 25%;\n  right: 0%;\n  transition-property: all;\n  transition-duration: 0.5s;\n  z-index: 2;\n}\n\n.custom-cursor {\n  z-index: 2;\n}\n\n.custom-cursor.hidden {\n  display: none;\n}\n\n#knight-cursor {\n  cursor: none;\n  pointer-events: none;\n  position: absolute;\n  aspect-ratio: 1/1;\n  width: 50px;\n  background-image: url(\"./images/knight.png\");\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n@media (orientation: portrait), (max-width: 600px) {\n  :root {\n    font-size: 12px;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/traverse.js":
/*!*************************!*\
  !*** ./src/traverse.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ traverse)
/* harmony export */ });
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
  // Here, I get something like "1s", so get rid of the "s" and multiply it by a thousand
  // so I can get the property in miliseconds (without the "ms" unit) and pass it as the argument for the pause function
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


function placeKnight(cell) {
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

const COLUMN_COLORS = { even: "white", odd: "black" };

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
        (0,_ui_cells_functions__WEBPACK_IMPORTED_MODULE_2__.setTarget)(cell);
        toggleSetTargetCursor();
      }
    });

    if (column === 0 && row === 0) {
      cell.id = "column-zero-row-zero";
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

window.addEventListener("resize", clearBoard);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNiLEVBQUUsK0RBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvYWxsb3dlZC1tb3Zlcy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL2tuaWdodHMtdHJhdmFpbHMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9ub2RlLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvcXVldWUuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy90cmF2ZXJzZS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL3VpLWNlbGxzLWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvdXNlci1pbnRlcmZhY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2tuaWdodC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWNlbGxzLXdoaXRlOiAjZjVmNWY1O1xcbiAgLS1jZWxscy1ibGFjazogIzI5MmYyZjtcXG4gIC0tcGxhY2Uta25pZ2h0LWNlbGxzLWNvbG9yOiBsaWdodGdyZWVuO1xcbiAgLS1zZXQtdGFyZ2V0LWNlbGxzLWNvbG9yOiByZWQ7XFxuICAtLW1vdmUtY2VsbHMtY29sb3I6IHNreWJsdWU7XFxuICAtLWNoZXNzLWJvYXJkLWxhYmxlcy1mb250LXNpemU6IDIycHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuYm9keS5wbGFjZS1rbmlnaHQge1xcbiAgY3Vyc29yOiBub25lO1xcbn1cXG5cXG5oMSN0aXRsZSB7XFxuICBtYXJnaW46IDMwcHggMDtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxubWFpbiB7XFxuICBmbGV4OiAxO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbiNjaGVzcy1ib2FyZCB7XFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gIHdpZHRoOiBtaW4oOTB2bWluLCA2MDBweCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBvdXRsaW5lOiBzb2xpZCAxcHggYmxhY2s7XFxufVxcblxcbiNjaGVzcy1ib2FyZCAuY29sdW1uIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jY2hlc3MtYm9hcmQgLmNlbGwge1xcbiAgZmxleDogMTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuYm9keS5uby1jdXJzb3IgI2NoZXNzLWJvYXJkIC5jZWxsIHtcXG4gIGN1cnNvcjogbm9uZTtcXG59XFxuXFxuYm9keS5wbGFjZS1rbmlnaHQgI2NoZXNzLWJvYXJkIC5jZWxsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXBsYWNlLWtuaWdodC1jZWxscy1jb2xvcik7XFxufVxcblxcbiNjaGVzcy1ib2FyZCAjc3RhcnRpbmctcG9zaXRpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGxhY2Uta25pZ2h0LWNlbGxzLWNvbG9yKTtcXG59XFxuXFxuYm9keS5zZXQtdGFyZ2V0ICNjaGVzcy1ib2FyZCAuY2VsbDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZXQtdGFyZ2V0LWNlbGxzLWNvbG9yKTtcXG59XFxuXFxuI2NoZXNzLWJvYXJkICN0YXJnZXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2V0LXRhcmdldC1jZWxscy1jb2xvcik7XFxufVxcblxcbiNjaGVzcy1ib2FyZCAubW92ZSB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2NoZXNzLWJvYXJkIC5jZWxsOm5vdCgjdGFyZ2V0KSAubW92ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb3ZlLWNlbGxzLWNvbG9yKTtcXG59XFxuXFxuI2NoZXNzLWJvYXJkIC5tb3ZlIHAge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jY2hlc3MtYm9hcmQgLmNlbGwud2hpdGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2VsbHMtd2hpdGUpO1xcbn1cXG5cXG4jY2hlc3MtYm9hcmQgLmNlbGwuYmxhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2VsbHMtYmxhY2spO1xcbn1cXG5cXG4jY2hlc3MtYm9hcmQgLmxhYmVsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvIE1vbm9cXFwiLCBtb25vc3BhY2U7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jY2hlc3MtYm9hcmQgLmNlbGwud2hpdGUgLmxhYmVsIHtcXG4gIGNvbG9yOiB2YXIoLS1jZWxscy1ibGFjayk7XFxufVxcblxcbiNjaGVzcy1ib2FyZCAuY2VsbC5ibGFjayAubGFiZWwge1xcbiAgY29sb3I6IHZhcigtLWNlbGxzLXdoaXRlKTtcXG59XFxuXFxuI2NoZXNzLWJvYXJkIC5jZWxsI2NvbHVtbi16ZXJvLXJvdy16ZXJvIC5jb2x1bW4ubGFiZWwge1xcbiAgbWFyZ2luLWxlZnQ6IDFjaDtcXG59XFxuXFxuI2NvbnRyb2xzIHtcXG4gIHdpZHRoOiBtaW4oOTB2bWluLCA2MDBweCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMiU7XFxufVxcblxcbiNjb250cm9scyBidXR0b24ge1xcbiAgZmxleDogMTtcXG4gIGFzcGVjdC1yYXRpbzogMy8xO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jY29udHJvbHMgYnV0dG9uLmFjdGl2ZSB7XFxuICBib3JkZXI6IHNvbGlkIDJweCByZWQ7XFxufVxcblxcbiNrbmlnaHQtcGllY2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDI1JTtcXG4gIHJpZ2h0OiAwJTtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uY3VzdG9tLWN1cnNvciB7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uY3VzdG9tLWN1cnNvci5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2tuaWdodC1jdXJzb3Ige1xcbiAgY3Vyc29yOiBub25lO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSwgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIDpyb290IHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixzQ0FBc0M7RUFDdEMsNkJBQTZCO0VBQzdCLDJCQUEyQjtFQUMzQixvQ0FBb0M7RUFDcEMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsaUNBQWlDO0VBQ2pDLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsT0FBTztFQUNQLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztFQUNULHFDQUFxQztFQUNyQyxlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsT0FBTztBQUNUOztBQUVBO0VBQ0UsT0FBTztFQUNQLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCx5REFBNEM7RUFDNUMsd0JBQXdCO0VBQ3hCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tY2VsbHMtd2hpdGU6ICNmNWY1ZjU7XFxuICAtLWNlbGxzLWJsYWNrOiAjMjkyZjJmO1xcbiAgLS1wbGFjZS1rbmlnaHQtY2VsbHMtY29sb3I6IGxpZ2h0Z3JlZW47XFxuICAtLXNldC10YXJnZXQtY2VsbHMtY29sb3I6IHJlZDtcXG4gIC0tbW92ZS1jZWxscy1jb2xvcjogc2t5Ymx1ZTtcXG4gIC0tY2hlc3MtYm9hcmQtbGFibGVzLWZvbnQtc2l6ZTogMjJweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5ib2R5LnBsYWNlLWtuaWdodCB7XFxuICBjdXJzb3I6IG5vbmU7XFxufVxcblxcbmgxI3RpdGxlIHtcXG4gIG1hcmdpbjogMzBweCAwO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG5tYWluIHtcXG4gIGZsZXg6IDE7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuI2NoZXNzLWJvYXJkIHtcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgd2lkdGg6IG1pbig5MHZtaW4sIDYwMHB4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIG91dGxpbmU6IHNvbGlkIDFweCBibGFjaztcXG59XFxuXFxuI2NoZXNzLWJvYXJkIC5jb2x1bW4ge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNjaGVzcy1ib2FyZCAuY2VsbCB7XFxuICBmbGV4OiAxO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5ib2R5Lm5vLWN1cnNvciAjY2hlc3MtYm9hcmQgLmNlbGwge1xcbiAgY3Vyc29yOiBub25lO1xcbn1cXG5cXG5ib2R5LnBsYWNlLWtuaWdodCAjY2hlc3MtYm9hcmQgLmNlbGw6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcGxhY2Uta25pZ2h0LWNlbGxzLWNvbG9yKTtcXG59XFxuXFxuI2NoZXNzLWJvYXJkICNzdGFydGluZy1wb3NpdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wbGFjZS1rbmlnaHQtY2VsbHMtY29sb3IpO1xcbn1cXG5cXG5ib2R5LnNldC10YXJnZXQgI2NoZXNzLWJvYXJkIC5jZWxsOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXNldC10YXJnZXQtY2VsbHMtY29sb3IpO1xcbn1cXG5cXG4jY2hlc3MtYm9hcmQgI3RhcmdldCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZXQtdGFyZ2V0LWNlbGxzLWNvbG9yKTtcXG59XFxuXFxuI2NoZXNzLWJvYXJkIC5tb3ZlIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jY2hlc3MtYm9hcmQgLmNlbGw6bm90KCN0YXJnZXQpIC5tb3ZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1vdmUtY2VsbHMtY29sb3IpO1xcbn1cXG5cXG4jY2hlc3MtYm9hcmQgLm1vdmUgcCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbiNjaGVzcy1ib2FyZCAuY2VsbC53aGl0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jZWxscy13aGl0ZSk7XFxufVxcblxcbiNjaGVzcy1ib2FyZCAuY2VsbC5ibGFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jZWxscy1ibGFjayk7XFxufVxcblxcbiNjaGVzcy1ib2FyZCAubGFiZWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8gTW9ub1xcXCIsIG1vbm9zcGFjZTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbiNjaGVzcy1ib2FyZCAuY2VsbC53aGl0ZSAubGFiZWwge1xcbiAgY29sb3I6IHZhcigtLWNlbGxzLWJsYWNrKTtcXG59XFxuXFxuI2NoZXNzLWJvYXJkIC5jZWxsLmJsYWNrIC5sYWJlbCB7XFxuICBjb2xvcjogdmFyKC0tY2VsbHMtd2hpdGUpO1xcbn1cXG5cXG4jY2hlc3MtYm9hcmQgLmNlbGwjY29sdW1uLXplcm8tcm93LXplcm8gLmNvbHVtbi5sYWJlbCB7XFxuICBtYXJnaW4tbGVmdDogMWNoO1xcbn1cXG5cXG4jY29udHJvbHMge1xcbiAgd2lkdGg6IG1pbig5MHZtaW4sIDYwMHB4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyJTtcXG59XFxuXFxuI2NvbnRyb2xzIGJ1dHRvbiB7XFxuICBmbGV4OiAxO1xcbiAgYXNwZWN0LXJhdGlvOiAzLzE7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjb250cm9scyBidXR0b24uYWN0aXZlIHtcXG4gIGJvcmRlcjogc29saWQgMnB4IHJlZDtcXG59XFxuXFxuI2tuaWdodC1waWVjZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMjUlO1xcbiAgcmlnaHQ6IDAlO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbi5jdXN0b20tY3Vyc29yIHtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbi5jdXN0b20tY3Vyc29yLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ja25pZ2h0LWN1cnNvciB7XFxuICBjdXJzb3I6IG5vbmU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vaW1hZ2VzL2tuaWdodC5wbmdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSwgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIDpyb290IHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgTU9WRV9DT05ESVRJT05TID0ge1xuICB0d29VcCh5KSB7XG4gICAgcmV0dXJuIHkgPD0gNTtcbiAgfSxcblxuICB0d29Eb3duKHkpIHtcbiAgICByZXR1cm4geSA+PSAyO1xuICB9LFxuXG4gIHR3b0xlZnQoeCkge1xuICAgIHJldHVybiB4ID49IDI7XG4gIH0sXG5cbiAgdHdvUmlnaHQoeCkge1xuICAgIHJldHVybiB4IDw9IDU7XG4gIH0sXG5cbiAgb25lVXAoeSkge1xuICAgIHJldHVybiB5ICE9PSA3O1xuICB9LFxuXG4gIG9uZURvd24oeSkge1xuICAgIHJldHVybiB5ICE9PSAwO1xuICB9LFxuXG4gIG9uZUxlZnQoeCkge1xuICAgIHJldHVybiB4ICE9PSAwO1xuICB9LFxuXG4gIG9uZVJpZ2h0KHgpIHtcbiAgICByZXR1cm4geCAhPT0gNztcbiAgfSxcbn07XG5cbmNvbnN0IE1PVkVTID0gW1xuICB7XG4gICAgLy8gdG9wIGxlZnRcbiAgICBjb25kaXRpb246ICh4LCB5KSA9PiB7XG4gICAgICByZXR1cm4gTU9WRV9DT05ESVRJT05TLm9uZUxlZnQoeCkgJiYgTU9WRV9DT05ESVRJT05TLnR3b1VwKHkpO1xuICAgIH0sXG4gICAgY29vcmRpbmF0ZXM6ICh4LCB5KSA9PiB7XG4gICAgICByZXR1cm4geyB4OiB4IC0gMSwgeTogeSArIDIgfTtcbiAgICB9LFxuICB9LFxuXG4gIHtcbiAgICAvLyB0b3AgcmlnaHRcbiAgICBjb25kaXRpb246ICh4LCB5KSA9PiB7XG4gICAgICByZXR1cm4gTU9WRV9DT05ESVRJT05TLm9uZVJpZ2h0KHgpICYmIE1PVkVfQ09ORElUSU9OUy50d29VcCh5KTtcbiAgICB9LFxuICAgIGNvb3JkaW5hdGVzOiAoeCwgeSkgPT4ge1xuICAgICAgcmV0dXJuIHsgeDogeCArIDEsIHk6IHkgKyAyIH07XG4gICAgfSxcbiAgfSxcblxuICB7XG4gICAgLy8gYm90dG9tIGxlZnRcbiAgICBjb25kaXRpb246ICh4LCB5KSA9PiB7XG4gICAgICByZXR1cm4gTU9WRV9DT05ESVRJT05TLm9uZUxlZnQoeCkgJiYgTU9WRV9DT05ESVRJT05TLnR3b0Rvd24oeSk7XG4gICAgfSxcbiAgICBjb29yZGluYXRlczogKHgsIHkpID0+IHtcbiAgICAgIHJldHVybiB7IHg6IHggLSAxLCB5OiB5IC0gMiB9O1xuICAgIH0sXG4gIH0sXG5cbiAge1xuICAgIC8vIGJvdHRvbSByaWdodFxuICAgIGNvbmRpdGlvbjogKHgsIHkpID0+IHtcbiAgICAgIHJldHVybiBNT1ZFX0NPTkRJVElPTlMub25lUmlnaHQoeCkgJiYgTU9WRV9DT05ESVRJT05TLnR3b0Rvd24oeSk7XG4gICAgfSxcbiAgICBjb29yZGluYXRlczogKHgsIHkpID0+IHtcbiAgICAgIHJldHVybiB7IHg6IHggKyAxLCB5OiB5IC0gMiB9O1xuICAgIH0sXG4gIH0sXG5cbiAge1xuICAgIC8vIGxlZnQgdG9wXG4gICAgY29uZGl0aW9uOiAoeCwgeSkgPT4ge1xuICAgICAgcmV0dXJuIE1PVkVfQ09ORElUSU9OUy50d29MZWZ0KHgpICYmIE1PVkVfQ09ORElUSU9OUy5vbmVVcCh5KTtcbiAgICB9LFxuICAgIGNvb3JkaW5hdGVzOiAoeCwgeSkgPT4ge1xuICAgICAgcmV0dXJuIHsgeDogeCAtIDIsIHk6IHkgKyAxIH07XG4gICAgfSxcbiAgfSxcblxuICB7XG4gICAgLy8gbGVmdCBib3R0b21cbiAgICBjb25kaXRpb246ICh4LCB5KSA9PiB7XG4gICAgICByZXR1cm4gTU9WRV9DT05ESVRJT05TLnR3b0xlZnQoeCkgJiYgTU9WRV9DT05ESVRJT05TLm9uZURvd24oeSk7XG4gICAgfSxcbiAgICBjb29yZGluYXRlczogKHgsIHkpID0+IHtcbiAgICAgIHJldHVybiB7IHg6IHggLSAyLCB5OiB5IC0gMSB9O1xuICAgIH0sXG4gIH0sXG5cbiAge1xuICAgIC8vIHJpZ2h0IHRvcFxuICAgIGNvbmRpdGlvbjogKHgsIHkpID0+IHtcbiAgICAgIHJldHVybiBNT1ZFX0NPTkRJVElPTlMudHdvUmlnaHQoeCkgJiYgTU9WRV9DT05ESVRJT05TLm9uZVVwKHkpO1xuICAgIH0sXG4gICAgY29vcmRpbmF0ZXM6ICh4LCB5KSA9PiB7XG4gICAgICByZXR1cm4geyB4OiB4ICsgMiwgeTogeSArIDEgfTtcbiAgICB9LFxuICB9LFxuXG4gIHtcbiAgICAvLyByaWdodCBib3R0b21cbiAgICBjb25kaXRpb246ICh4LCB5KSA9PiB7XG4gICAgICByZXR1cm4gTU9WRV9DT05ESVRJT05TLnR3b1JpZ2h0KHgpICYmIE1PVkVfQ09ORElUSU9OUy5vbmVEb3duKHkpO1xuICAgIH0sXG4gICAgY29vcmRpbmF0ZXM6ICh4LCB5KSA9PiB7XG4gICAgICByZXR1cm4geyB4OiB4ICsgMiwgeTogeSAtIDEgfTtcbiAgICB9LFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWxsb3dlZE1vdmVzKHsgeCwgeSB9KSB7XG4gIGNvbnN0IGFsbG93ZWRNb3ZlcyA9IFtdO1xuXG4gIGZvciAoY29uc3QgbW92ZSBvZiBNT1ZFUykge1xuICAgIGlmIChtb3ZlLmNvbmRpdGlvbih4LCB5KSkgYWxsb3dlZE1vdmVzLnB1c2gobW92ZS5jb29yZGluYXRlcyh4LCB5KSk7XG4gIH1cblxuICByZXR1cm4gYWxsb3dlZE1vdmVzO1xufVxuIiwiaW1wb3J0IGFsbG93ZWRNb3ZlcyBmcm9tIFwiLi9hbGxvd2VkLW1vdmVzLmpzXCI7XG5pbXBvcnQgTm9kZSBmcm9tIFwiLi9ub2RlLmpzXCI7XG5pbXBvcnQgUXVldWUgZnJvbSBcIi4vcXVldWUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ga25pZ2h0TW92ZXMocXVldWUsIHRhcmdldCkge1xuICBpZiAoIShxdWV1ZSBpbnN0YW5jZW9mIFF1ZXVlKSkge1xuICAgIGNvbnN0IHN0YXJ0aW5nUG9pbnQgPSBxdWV1ZTtcbiAgICBxdWV1ZSA9IG5ldyBRdWV1ZSgpO1xuICAgIGNvbnN0IHF1ZXVlT2JqZWN0ID0geyBwb3NpdGlvbjogc3RhcnRpbmdQb2ludCwgcGFyZW50OiBudWxsIH07XG4gICAgcXVldWUuZW5xdWV1ZShxdWV1ZU9iamVjdCk7XG4gIH1cblxuICBjb25zdCBjdXJyZW50UXVldWVFbGVtZW50ID0gcXVldWUuZGVxdWV1ZSgpO1xuICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSBjdXJyZW50UXVldWVFbGVtZW50LnBvc2l0aW9uO1xuICBjb25zdCBjdXJyZW50UGFyZW50ID0gY3VycmVudFF1ZXVlRWxlbWVudC5wYXJlbnQ7XG4gIGNvbnN0IGN1cnJlbnROb2RlID0gbmV3IE5vZGUoY3VycmVudFBvc2l0aW9uLCBjdXJyZW50UGFyZW50KTtcblxuICAvLyBCYXNlIGNhc2U6IHRhcmdldCBwb3NpdGlvbiBoYXMgYmVlbiBmb3VuZFxuICBpZiAoY3VycmVudFBvc2l0aW9uLnggPT09IHRhcmdldC54ICYmIGN1cnJlbnRQb3NpdGlvbi55ID09PSB0YXJnZXQueSkge1xuICAgIHJldHVybiBjdXJyZW50Tm9kZS5wYXRoLmNvbmNhdChjdXJyZW50UG9zaXRpb24pO1xuICB9XG5cbiAgLy8gUmVjdXJzaXZlIGNhc2VcbiAgY29uc3QgaXNVbnZpc2l0ZWQgPSAocG9zaXRpb24pID0+IHtcbiAgICByZXR1cm4gIUpTT04uc3RyaW5naWZ5KGN1cnJlbnROb2RlLnBhdGgpLmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KHBvc2l0aW9uKSk7XG4gIH07XG5cbiAgY29uc3QgcG90ZW50aWFsTW92ZXMgPSBhbGxvd2VkTW92ZXMoY3VycmVudFBvc2l0aW9uKS5maWx0ZXIoaXNVbnZpc2l0ZWQpO1xuXG4gIHBvdGVudGlhbE1vdmVzLmZvckVhY2goKG1vdmUpID0+IHtcbiAgICBxdWV1ZS5lbnF1ZXVlKHsgcG9zaXRpb246IG1vdmUsIHBhcmVudDogY3VycmVudE5vZGUgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBrbmlnaHRNb3ZlcyhxdWV1ZSwgdGFyZ2V0KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGUge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgcGFyZW50KSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMucGF0aCA9IHRoaXMuZ2V0UGF0aCgpO1xuICB9XG5cbiAgZ2V0UGF0aCgpIHtcbiAgICBjb25zdCBwYXRoID0gW107XG4gICAgbGV0IHBhcmVudCA9IHRoaXMucGFyZW50O1xuICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgIHBhdGgudW5zaGlmdChwYXJlbnQucG9zaXRpb24pO1xuICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXVlIHtcbiAgcXVldWUgPSBbXTtcblxuICBlbnF1ZXVlKHZhbHVlKSB7XG4gICAgdGhpcy5xdWV1ZS5wdXNoKHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcy5xdWV1ZTtcbiAgfVxuXG4gIGRlcXVldWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucXVldWUuc2hpZnQoKTtcbiAgfVxufVxuIiwiYXN5bmMgZnVuY3Rpb24gcGF1c2UocGF1c2VEdXJhdGlvbikge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBzZXRUaW1lb3V0KHJlc29sdmUsIHBhdXNlRHVyYXRpb24pO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gdHJhdmVyc2UocGF0aCkge1xuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNjb250cm9scyBidXR0b246bm90KCN0cmF2ZXJzZSlcIik7XG4gIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgfSk7XG5cbiAgY29uc3Qga25pZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNrbmlnaHQtcGllY2VcIik7XG4gIGNvbnN0IGtuaWdodFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoa25pZ2h0KTtcbiAgY29uc3Qgb3JpZ2luYWxLbmlnaHRCb3R0b21NYXJnaW4gPSBrbmlnaHRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiYm90dG9tXCIpO1xuICAvLyBIZXJlLCBJIGdldCBzb21ldGhpbmcgbGlrZSBcIjFzXCIsIHNvIGdldCByaWQgb2YgdGhlIFwic1wiIGFuZCBtdWx0aXBseSBpdCBieSBhIHRob3VzYW5kXG4gIC8vIHNvIEkgY2FuIGdldCB0aGUgcHJvcGVydHkgaW4gbWlsaXNlY29uZHMgKHdpdGhvdXQgdGhlIFwibXNcIiB1bml0KSBhbmQgcGFzcyBpdCBhcyB0aGUgYXJndW1lbnQgZm9yIHRoZSBwYXVzZSBmdW5jdGlvblxuICBjb25zdCBrbmlnaHRUcmFuc2l0aW9uRHVyYXRpb24gPVxuICAgIGtuaWdodFN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCIpLnNsaWNlKDAsIC0xKSAqIDEwMDA7XG5cbiAgZm9yIChsZXQgcG9zaXRpb25JbmRleCA9IDE7IHBvc2l0aW9uSW5kZXggPCBwYXRoLmxlbmd0aDsgcG9zaXRpb25JbmRleCsrKSB7XG4gICAgY29uc3QgcHJldmlvdXNQb3NpdGlvbiA9IHBhdGhbcG9zaXRpb25JbmRleCAtIDFdO1xuICAgIGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IHBhdGhbcG9zaXRpb25JbmRleF07XG5cbiAgICBjb25zdCBwcmV2aW91c0JvdHRvbU1hcmdpbiA9IHdpbmRvd1xuICAgICAgLmdldENvbXB1dGVkU3R5bGUoa25pZ2h0KVxuICAgICAgLmdldFByb3BlcnR5VmFsdWUoXCJib3R0b21cIik7XG4gICAgY29uc3QgcHJldmlvdXNSaWdodE1hcmdpbiA9IHdpbmRvd1xuICAgICAgLmdldENvbXB1dGVkU3R5bGUoa25pZ2h0KVxuICAgICAgLmdldFByb3BlcnR5VmFsdWUoXCJyaWdodFwiKTtcblxuICAgIC8vIHRvcFxuICAgIGlmIChjdXJyZW50UG9zaXRpb24ueSA9PT0gcHJldmlvdXNQb3NpdGlvbi55ICsgMikge1xuICAgICAga25pZ2h0LnN0eWxlLmJvdHRvbSA9IGBjYWxjKCR7cHJldmlvdXNCb3R0b21NYXJnaW59ICsgMjAwJSlgO1xuICAgICAgYXdhaXQgcGF1c2Uoa25pZ2h0VHJhbnNpdGlvbkR1cmF0aW9uKTtcblxuICAgICAgLy8gbGVmdFxuICAgICAgaWYgKGN1cnJlbnRQb3NpdGlvbi54ID09PSBwcmV2aW91c1Bvc2l0aW9uLnggLSAxKSB7XG4gICAgICAgIGtuaWdodC5zdHlsZS5yaWdodCA9IGBjYWxjKCR7cHJldmlvdXNSaWdodE1hcmdpbn0gKyAxMDAlKWA7XG4gICAgICAgIGF3YWl0IHBhdXNlKGtuaWdodFRyYW5zaXRpb25EdXJhdGlvbiAqIDEuNSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyByaWdodFxuICAgICAgICBrbmlnaHQuc3R5bGUucmlnaHQgPSBgY2FsYygke3ByZXZpb3VzUmlnaHRNYXJnaW59IC0gMTAwJSlgO1xuICAgICAgICBhd2FpdCBwYXVzZShrbmlnaHRUcmFuc2l0aW9uRHVyYXRpb24gKiAxLjUpO1xuICAgICAgfVxuICAgICAgLy8gYm90dG9tXG4gICAgfSBlbHNlIGlmIChjdXJyZW50UG9zaXRpb24ueSA9PT0gcHJldmlvdXNQb3NpdGlvbi55IC0gMikge1xuICAgICAga25pZ2h0LnN0eWxlLmJvdHRvbSA9IGBjYWxjKCR7cHJldmlvdXNCb3R0b21NYXJnaW59IC0gMjAwJSlgO1xuICAgICAgYXdhaXQgcGF1c2Uoa25pZ2h0VHJhbnNpdGlvbkR1cmF0aW9uKTtcblxuICAgICAgLy8gbGVmdFxuICAgICAgaWYgKGN1cnJlbnRQb3NpdGlvbi54ID09PSBwcmV2aW91c1Bvc2l0aW9uLnggLSAxKSB7XG4gICAgICAgIGtuaWdodC5zdHlsZS5yaWdodCA9IGBjYWxjKCR7cHJldmlvdXNSaWdodE1hcmdpbn0gKyAxMDAlKWA7XG4gICAgICAgIGF3YWl0IHBhdXNlKGtuaWdodFRyYW5zaXRpb25EdXJhdGlvbiAqIDEuNSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyByaWdodFxuICAgICAgICBrbmlnaHQuc3R5bGUucmlnaHQgPSBgY2FsYygke3ByZXZpb3VzUmlnaHRNYXJnaW59IC0gMTAwJSlgO1xuICAgICAgICBhd2FpdCBwYXVzZShrbmlnaHRUcmFuc2l0aW9uRHVyYXRpb24gKiAxLjUpO1xuICAgICAgfVxuICAgICAgLy8gbGVmdFxuICAgIH0gZWxzZSBpZiAoY3VycmVudFBvc2l0aW9uLnggPT09IHByZXZpb3VzUG9zaXRpb24ueCAtIDIpIHtcbiAgICAgIGtuaWdodC5zdHlsZS5yaWdodCA9IGBjYWxjKCR7cHJldmlvdXNSaWdodE1hcmdpbn0gKyAyMDAlKWA7XG4gICAgICBhd2FpdCBwYXVzZShrbmlnaHRUcmFuc2l0aW9uRHVyYXRpb24pO1xuXG4gICAgICAvLyB0b3BcbiAgICAgIGlmIChjdXJyZW50UG9zaXRpb24ueSA9PT0gcHJldmlvdXNQb3NpdGlvbi55ICsgMSkge1xuICAgICAgICBrbmlnaHQuc3R5bGUuYm90dG9tID0gYGNhbGMoJHtwcmV2aW91c0JvdHRvbU1hcmdpbn0gKyAxMDAlKWA7XG4gICAgICAgIGF3YWl0IHBhdXNlKGtuaWdodFRyYW5zaXRpb25EdXJhdGlvbiAqIDEuNSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBib3R0b21cbiAgICAgICAga25pZ2h0LnN0eWxlLmJvdHRvbSA9IGBjYWxjKCR7cHJldmlvdXNCb3R0b21NYXJnaW59IC0gMTAwJSlgO1xuICAgICAgICBhd2FpdCBwYXVzZShrbmlnaHRUcmFuc2l0aW9uRHVyYXRpb24gKiAxLjUpO1xuICAgICAgfVxuICAgICAgLy8gcmlnaHRcbiAgICB9IGVsc2Uge1xuICAgICAga25pZ2h0LnN0eWxlLnJpZ2h0ID0gYGNhbGMoJHtwcmV2aW91c1JpZ2h0TWFyZ2lufSAtIDIwMCUpYDtcbiAgICAgIGF3YWl0IHBhdXNlKGtuaWdodFRyYW5zaXRpb25EdXJhdGlvbik7XG5cbiAgICAgIC8vIHRvcFxuICAgICAgaWYgKGN1cnJlbnRQb3NpdGlvbi55ID09PSBwcmV2aW91c1Bvc2l0aW9uLnkgKyAxKSB7XG4gICAgICAgIGtuaWdodC5zdHlsZS5ib3R0b20gPSBgY2FsYygke3ByZXZpb3VzQm90dG9tTWFyZ2lufSArIDEwMCUpYDtcbiAgICAgICAgYXdhaXQgcGF1c2Uoa25pZ2h0VHJhbnNpdGlvbkR1cmF0aW9uICogMS41KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGJvdHRvbVxuICAgICAgICBrbmlnaHQuc3R5bGUuYm90dG9tID0gYGNhbGMoJHtwcmV2aW91c0JvdHRvbU1hcmdpbn0gLSAxMDAlKWA7XG4gICAgICAgIGF3YWl0IHBhdXNlKGtuaWdodFRyYW5zaXRpb25EdXJhdGlvbiAqIDEuNSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVudE1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBjdXJyZW50TW92ZS5jbGFzc0xpc3QuYWRkKFwibW92ZVwiKTtcbiAgICBjdXJyZW50TW92ZS5pZCA9IHBvc2l0aW9uSW5kZXg7XG4gICAgY29uc3QgbW92ZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG1vdmVOdW1iZXIuaW5uZXJUZXh0ID0gcG9zaXRpb25JbmRleDtcbiAgICBjdXJyZW50TW92ZS5hcHBlbmRDaGlsZChtb3ZlTnVtYmVyKTtcbiAgICBjb25zdCBjdXJyZW50Q2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLmNlbGxbZGF0YS1wb3NpdGlvbi14PScke2N1cnJlbnRQb3NpdGlvbi54fSddW2RhdGEtcG9zaXRpb24teT0nJHtjdXJyZW50UG9zaXRpb24ueX0nXWBcbiAgICApO1xuICAgIGN1cnJlbnRDZWxsLmFwcGVuZENoaWxkKGN1cnJlbnRNb3ZlKTtcblxuICAgIGlmIChwb3NpdGlvbkluZGV4ID09PSBwYXRoLmxlbmd0aCAtIDEpIHtcbiAgICAgIGtuaWdodC5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgIGF3YWl0IHBhdXNlKGtuaWdodFRyYW5zaXRpb25EdXJhdGlvbik7XG5cbiAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgfSk7XG5cbiAgICAgIGtuaWdodC5zdHlsZS5ib3R0b20gPSBvcmlnaW5hbEtuaWdodEJvdHRvbU1hcmdpbjtcbiAgICAgIGtuaWdodC5zdHlsZS5yaWdodCA9IDA7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQga25pZ2h0SW1hZ2VTcmMgZnJvbSBcIi4vaW1hZ2VzL2tuaWdodC5wbmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHBsYWNlS25pZ2h0KGNlbGwpIHtcbiAgY29uc3Qga25pZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAga25pZ2h0LnNyYyA9IGtuaWdodEltYWdlU3JjO1xuICBrbmlnaHQuaWQgPSBcImtuaWdodC1waWVjZVwiO1xuICBrbmlnaHQuYWx0ID0gXCJLbmlnaHQgcGllY2VcIjtcbiAgY2VsbC5hcHBlbmRDaGlsZChrbmlnaHQpO1xuICBjZWxsLmlkID0gXCJzdGFydGluZy1wb3NpdGlvblwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJLbmlnaHQoKSB7XG4gIGNvbnN0IHByZXZpb3VzS25pZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImltZyNrbmlnaHQtcGllY2VcIik7XG4gIGlmIChwcmV2aW91c0tuaWdodCkgcHJldmlvdXNLbmlnaHQucmVtb3ZlKCk7XG4gIGNvbnN0IHByZXZpb3VzU3RhcnRpbmdDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGFydGluZy1wb3NpdGlvblwiKTtcbiAgaWYgKHByZXZpb3VzU3RhcnRpbmdDZWxsKSBwcmV2aW91c1N0YXJ0aW5nQ2VsbC5pZCA9IFwiXCI7XG4gIGNsZWFyTW92ZXMoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFRhcmdldChjZWxsKSB7XG4gIGNlbGwuaWQgPSBcInRhcmdldFwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJUYXJnZXQoKSB7XG4gIGNvbnN0IHByZXZpb3VzVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jZWxsI3RhcmdldFwiKTtcbiAgaWYgKHByZXZpb3VzVGFyZ2V0KSBwcmV2aW91c1RhcmdldC5pZCA9IFwiXCI7XG4gIGNsZWFyTW92ZXMoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyTW92ZXMoKSB7XG4gIGNvbnN0IG1vdmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb3ZlXCIpO1xuICBtb3Zlcy5mb3JFYWNoKChtb3ZlKSA9PiB7XG4gICAgbW92ZS5yZW1vdmUoKTtcbiAgfSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBrbmlnaHRNb3ZlcyBmcm9tIFwiLi9rbmlnaHRzLXRyYXZhaWxzLmpzXCI7XG5pbXBvcnQge1xuICBjbGVhcktuaWdodCxcbiAgY2xlYXJNb3ZlcyxcbiAgY2xlYXJUYXJnZXQsXG4gIHBsYWNlS25pZ2h0LFxuICBzZXRUYXJnZXQsXG59IGZyb20gXCIuL3VpLWNlbGxzLWZ1bmN0aW9uc1wiO1xuaW1wb3J0IHRyYXZlcnNlIGZyb20gXCIuL3RyYXZlcnNlXCI7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuLy8gQ3Vyc29yIG1vZGVzOlxubGV0IHBsYWNlS25pZ2h0Q3Vyc29yID0gZmFsc2U7XG5sZXQgc2V0VGFyZ2V0Q3Vyc29yID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGRpc3BsYXlLbmlnaHRDdXJzb3IoKSB7XG4gIGNsZWFyS25pZ2h0KCk7XG5cbiAgY29uc3Qga25pZ2h0Q3Vyc29yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGtuaWdodEN1cnNvci5jbGFzc0xpc3QuYWRkKFwiY3VzdG9tLWN1cnNvclwiLCBcImhpZGRlblwiKTtcbiAga25pZ2h0Q3Vyc29yLmlkID0gXCJrbmlnaHQtY3Vyc29yXCI7XG4gIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNlbGxcIik7XG4gIGNvbnN0IGNlbGxzV2lkdGggPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjZWxsKS5nZXRQcm9wZXJ0eVZhbHVlKFwid2lkdGhcIik7XG4gIGtuaWdodEN1cnNvci5zdHlsZS53aWR0aCA9IGNlbGxzV2lkdGg7XG4gIGJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZXZlbnQpID0+IHtcbiAgICBrbmlnaHRDdXJzb3IuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICBrbmlnaHRDdXJzb3Iuc3R5bGUubGVmdCA9IGBjYWxjKCR7ZXZlbnQuY2xpZW50WH1weCAtICR7Y2VsbHNXaWR0aH0vMilgO1xuICAgIGtuaWdodEN1cnNvci5zdHlsZS50b3AgPSBgY2FsYygke2V2ZW50LmNsaWVudFl9cHggLSAke2NlbGxzV2lkdGh9LzIpYDtcbiAgfSk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoa25pZ2h0Q3Vyc29yKTtcbiAgYm9keS5jbGFzc0xpc3QuYWRkKFwicGxhY2Uta25pZ2h0XCIpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVLbmlnaHRDdXJzb3IoKSB7XG4gIGNvbnN0IGtuaWdodEN1cnNvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIja25pZ2h0LWN1cnNvclwiKTtcbiAgaWYgKGtuaWdodEN1cnNvcikga25pZ2h0Q3Vyc29yLnJlbW92ZSgpO1xuICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJwbGFjZS1rbmlnaHRcIik7XG59XG5cbmZ1bmN0aW9uIGNoZWNrVHJhdmVyc2VCdXR0b25TdGF0ZSgpIHtcbiAgY29uc3Qga25pZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNrbmlnaHQtcGllY2VcIik7XG4gIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFyZ2V0XCIpO1xuICBjb25zdCB0cmF2ZXJzZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24jdHJhdmVyc2VcIik7XG4gIHRyYXZlcnNlQnV0dG9uLmRpc2FibGVkID0gIShrbmlnaHQgJiYgdGFyZ2V0KTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlUGxhY2VLbmlnaHRDdXJzb3IoKSB7XG4gIHBsYWNlS25pZ2h0Q3Vyc29yID0gIXBsYWNlS25pZ2h0Q3Vyc29yO1xuICBwbGFjZUtuaWdodEN1cnNvciA/IGRpc3BsYXlLbmlnaHRDdXJzb3IoKSA6IHJlbW92ZUtuaWdodEN1cnNvcigpO1xuICBwbGFjZUtuaWdodEJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICBzZXRUYXJnZXRDdXJzb3IgPSBmYWxzZTtcbiAgc2V0VGFyZ2V0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcInNldC10YXJnZXRcIik7XG4gIGNoZWNrVHJhdmVyc2VCdXR0b25TdGF0ZSgpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVTZXRUYXJnZXRDdXJzb3IoKSB7XG4gIHNldFRhcmdldEN1cnNvciA9ICFzZXRUYXJnZXRDdXJzb3I7XG4gIGlmIChzZXRUYXJnZXRDdXJzb3IpIGNsZWFyVGFyZ2V0KCk7XG4gIHNldFRhcmdldEJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICBib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJzZXQtdGFyZ2V0XCIpO1xuICBwbGFjZUtuaWdodEN1cnNvciA9IGZhbHNlO1xuICBwbGFjZUtuaWdodEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICBjb25zdCBrbmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2tuaWdodC1waWVjZVwiKTtcbiAgaWYgKGtuaWdodCkga25pZ2h0LnN0eWxlLm9wYWNpdHkgPSAxO1xuICByZW1vdmVLbmlnaHRDdXJzb3IoKTtcbiAgY2hlY2tUcmF2ZXJzZUJ1dHRvblN0YXRlKCk7XG59XG5cbi8vIEJ1aWxkIGNoZXNzIGJvYXJkOlxuXG5jb25zdCBjaGVzc0JvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaGVzcy1ib2FyZFwiKTtcblxuLy8gTm9ybWFsIGNoZXNzIGJvYXJkcyBhcmUgOHg4XG5jb25zdCBDSEVTU0JPQVJEX1dJRFRIID0gODtcbmNvbnN0IENIRVNTQk9BUkRfSEVJR0hUID0gODtcblxuY29uc3QgQ09MVU1OX0NPTE9SUyA9IHsgZXZlbjogXCJ3aGl0ZVwiLCBvZGQ6IFwiYmxhY2tcIiB9O1xuXG5mb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCBDSEVTU0JPQVJEX1dJRFRIOyBjb2x1bW4rKykge1xuICBjb25zdCBjb2x1bW5TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGNvbHVtblNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImNvbHVtblwiKTtcbiAgY29sdW1uU2VjdGlvbi5pZCA9IGNvbHVtbjtcbiAgZm9yIChsZXQgcm93ID0gQ0hFU1NCT0FSRF9IRUlHSFQgLSAxOyByb3cgPj0gMDsgcm93LS0pIHtcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuICAgIGNvbnN0IGNlbGxDb2xvciA9IHJvdyAlIDIgPT09IDAgPyBDT0xVTU5fQ09MT1JTLmV2ZW4gOiBDT0xVTU5fQ09MT1JTLm9kZDtcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoY2VsbENvbG9yKTtcbiAgICBjZWxsLnNldEF0dHJpYnV0ZShcImRhdGEtcG9zaXRpb24teFwiLCBjb2x1bW4pO1xuICAgIGNlbGwuc2V0QXR0cmlidXRlKFwiZGF0YS1wb3NpdGlvbi15XCIsIHJvdyk7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKHBsYWNlS25pZ2h0Q3Vyc29yKSB7XG4gICAgICAgIHBsYWNlS25pZ2h0KGNlbGwpO1xuICAgICAgICB0b2dnbGVQbGFjZUtuaWdodEN1cnNvcigpO1xuICAgICAgfSBlbHNlIGlmIChzZXRUYXJnZXRDdXJzb3IpIHtcbiAgICAgICAgc2V0VGFyZ2V0KGNlbGwpO1xuICAgICAgICB0b2dnbGVTZXRUYXJnZXRDdXJzb3IoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChjb2x1bW4gPT09IDAgJiYgcm93ID09PSAwKSB7XG4gICAgICBjZWxsLmlkID0gXCJjb2x1bW4temVyby1yb3ctemVyb1wiO1xuICAgIH1cblxuICAgIGlmIChjb2x1bW4gPT09IDApIHtcbiAgICAgIGNvbnN0IHJvd0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICByb3dMYWJlbC5jbGFzc0xpc3QuYWRkKFwicm93XCIsIFwibGFiZWxcIik7XG4gICAgICByb3dMYWJlbC5pbm5lclRleHQgPSByb3cgKyAxO1xuICAgICAgY2VsbC5hcHBlbmRDaGlsZChyb3dMYWJlbCk7XG4gICAgfVxuXG4gICAgaWYgKHJvdyA9PT0gMCkge1xuICAgICAgY29uc3QgY29sdW1uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGNvbHVtbkxhYmVsLmNsYXNzTGlzdC5hZGQoXCJjb2x1bW5cIiwgXCJsYWJlbFwiKTtcbiAgICAgIC8vIEhlcmUgSSBhZGQgY29sdW1uIGFuZCA5NyB0byBnZXQgdGhlIGFzY2lpIGNvZGUgb2YgdGhlIGxvd2VyIGNhc2UgbGV0dGVycyBzdGFydGluZyBmcm9tIFwiYVwiLCB3aGljaCBpcyBob3dcbiAgICAgIC8vIGNvbHVtbnMgYXJlIGxhYmVsZWQgaW4gY2hlc3MgYm9hcmRzOiBodHRwczovL3d3dy5hc2NpaXRhYmxlLmNvbS9cbiAgICAgIGNvbHVtbkxhYmVsLmlubmVyVGV4dCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29sdW1uICsgOTcpO1xuICAgICAgY2VsbC5hcHBlbmRDaGlsZChjb2x1bW5MYWJlbCk7XG4gICAgfVxuXG4gICAgY29sdW1uU2VjdGlvbi5hcHBlbmRDaGlsZChjZWxsKTtcbiAgfVxuICBjaGVzc0JvYXJkLmFwcGVuZENoaWxkKGNvbHVtblNlY3Rpb24pO1xuICAvLyBzd2FwIHRoZSBjb2xvdXJzXG4gIGxldCB0ZW1wb3JhcnkgPSBDT0xVTU5fQ09MT1JTLmV2ZW47XG4gIENPTFVNTl9DT0xPUlMuZXZlbiA9IENPTFVNTl9DT0xPUlMub2RkO1xuICBDT0xVTU5fQ09MT1JTLm9kZCA9IHRlbXBvcmFyeTtcbn1cblxuLy8gQnVpbGQgYnV0dG9uczpcblxuY29uc3QgY29udHJvbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRyb2xzXCIpO1xuXG5jb25zdCBwbGFjZUtuaWdodEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5wbGFjZUtuaWdodEJ1dHRvbi5pZCA9IFwicGxhY2Uta25pZ2h0XCI7XG5wbGFjZUtuaWdodEJ1dHRvbi5pbm5lclRleHQgPSBcIlBsYWNlIEtuaWdodFwiO1xucGxhY2VLbmlnaHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZVBsYWNlS25pZ2h0Q3Vyc29yKTtcbmNvbnRyb2xzLmFwcGVuZENoaWxkKHBsYWNlS25pZ2h0QnV0dG9uKTtcblxuY29uc3Qgc2V0VGFyZ2V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbnNldFRhcmdldEJ1dHRvbi5pZCA9IFwic2V0LXRhcmdldFwiO1xuc2V0VGFyZ2V0QnV0dG9uLmlubmVyVGV4dCA9IFwiU2V0IHRhcmdldFwiO1xuc2V0VGFyZ2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVTZXRUYXJnZXRDdXJzb3IpO1xuY29udHJvbHMuYXBwZW5kQ2hpbGQoc2V0VGFyZ2V0QnV0dG9uKTtcblxuY29uc3QgdHJhdmVyc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xudHJhdmVyc2VCdXR0b24uaWQgPSBcInRyYXZlcnNlXCI7XG50cmF2ZXJzZUJ1dHRvbi5pbm5lclRleHQgPSBcIlRyYXZlcnNlXCI7XG50cmF2ZXJzZUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG50cmF2ZXJzZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCBrbmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2tuaWdodC1waWVjZVwiKTtcbiAgY29uc3Qgb3JpZ2luUG9zaXRpb24gPSBKU09OLnBhcnNlKFxuICAgIGB7XCJ4XCI6ICR7a25pZ2h0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFxuICAgICAgXCJkYXRhLXBvc2l0aW9uLXhcIlxuICAgICl9LCBcInlcIjogJHtrbmlnaHQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBvc2l0aW9uLXlcIil9fWBcbiAgKTtcbiAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXJnZXRcIik7XG4gIGNvbnN0IHRhcmdldFBvc2l0aW9uID0gSlNPTi5wYXJzZShcbiAgICBge1wieFwiOiAke3RhcmdldC5nZXRBdHRyaWJ1dGUoXG4gICAgICBcImRhdGEtcG9zaXRpb24teFwiXG4gICAgKX0sIFwieVwiOiAke3RhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBvc2l0aW9uLXlcIil9fWBcbiAgKTtcbiAgY29uc3Qgc2hvcnRlc3RQYXRoID0ga25pZ2h0TW92ZXMob3JpZ2luUG9zaXRpb24sIHRhcmdldFBvc2l0aW9uKTtcbiAgdHJhdmVyc2Uoc2hvcnRlc3RQYXRoKTtcbiAgdHJhdmVyc2VCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xufSk7XG5jb250cm9scy5hcHBlbmRDaGlsZCh0cmF2ZXJzZUJ1dHRvbik7XG5cbmZ1bmN0aW9uIGNsZWFyQm9hcmQoKSB7XG4gIGNsZWFyS25pZ2h0KCk7XG4gIGNsZWFyVGFyZ2V0KCk7XG4gIGNsZWFyTW92ZXMoKTtcbiAgY2hlY2tUcmF2ZXJzZUJ1dHRvblN0YXRlKCk7XG59XG5cbmNvbnN0IGNsZWFyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmNsZWFyQnV0dG9uLmlkID0gXCJjbGVhclwiO1xuY2xlYXJCdXR0b24uaW5uZXJUZXh0ID0gXCJDbGVhclwiO1xuY2xlYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsZWFyQm9hcmQpO1xuY29udHJvbHMuYXBwZW5kQ2hpbGQoY2xlYXJCdXR0b24pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBjbGVhckJvYXJkKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==