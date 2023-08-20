/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: rgb(2, 114, 179);\r\n}\r\n\r\n.main-container {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.container {\r\n  width: 50%;\r\n  margin: 10%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  border: 1px solid white;\r\n  border-radius: 20px;\r\n  background-color: rgb(228, 240, 251);\r\n  box-shadow: 2px 2px 5px 3px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.title {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\nh1 {\r\n  width: 100%;\r\n  font-size: 30px;\r\n  padding: 10px;\r\n  text-align: center;\r\n  background-color: rgb(190, 224, 255);\r\n  border-radius: 20px 20px 0 0;\r\n}\r\n\r\n.list-title,\r\n.add-new {\r\n  width: 98%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: 0.5px solid rgb(140, 140, 140);\r\n}\r\n\r\n.list-title {\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.addnewdo {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n#add-new-input {\r\n  width: 90%;\r\n  font-size: 15px;\r\n  padding: 10px;\r\n  border: none;\r\n  outline: none;\r\n  background-color: rgba(240, 248, 255, 0);\r\n}\r\n\r\n#add-btn {\r\n  background-color: rgba(240, 248, 255, 0);\r\n  border: none;\r\n}\r\n\r\n.list {\r\n  width: 100%;\r\n}\r\n\r\nli {\r\n  width: 100%;\r\n  padding: 10px;\r\n  font-size: 15px;\r\n  list-style: none;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: 0.5px solid rgb(140, 140, 140);\r\n}\r\n\r\n#clear-btn {\r\n  width: 100%;\r\n  border: none;\r\n  font-size: 15px;\r\n  padding: 10px;\r\n  outline: none;\r\n  cursor: pointer;\r\n  background-color: rgb(190, 224, 255);\r\n  border-radius: 0 0 20px 20px;\r\n}\r\n\r\n#clear-btn:hover {\r\n  font-weight: bold;\r\n  color: rgb(2, 88, 138);\r\n}\r\n\r\n.icon {\r\n  opacity: 0.5;\r\n  cursor: pointer;\r\n}\r\n\r\n.icon:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.task-description {\r\n  background: transparent;\r\n  width: 90%;\r\n  padding: 5px;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.strike {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.no-strike {\r\n  text-decoration: none;\r\n}\r\n\r\nli.drag-sort-active {\r\n  background: transparent;\r\n  color: transparent;\r\n  border: 1px solid #4ca1af;\r\n}\r\n\r\nspan.drag-sort-active {\r\n  background: transparent;\r\n  color: transparent;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list-m2/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list-m2/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list-m2/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list-m2/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list-m2/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list-m2/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list-m2/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list-m2/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list-m2/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list-m2/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_listfuns_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/listfuns.js */ \"./src/modules/listfuns.js\");\n/* harmony import */ var _modules_dragdrop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/dragdrop.js */ \"./src/modules/dragdrop.js\");\n\n\n\n\nconst newtodo = document.querySelector('#add-new-input');\nconst addBtn = document.querySelector('#add-btn');\nconst clearBtn = document.querySelector('#clear-btn');\nconst todo = new _modules_listfuns_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\n/* ----------Add new when user press enter---------*/\nnewtodo.addEventListener('keyup', (e) => {\n  e.preventDefault();\n\n  if (e.keyCode === 13 && e.target.value.trim() !== '') {\n    todo.addTask(e.target.value);\n    e.target.value = '';\n  }\n});\n\n/* ----------Add new when user press the icon---------*/\naddBtn.addEventListener('click', (e) => {\n  e.preventDefault();\n\n  if (newtodo.value.trim() !== '') {\n    todo.addTask(newtodo.value);\n  }\n  newtodo.value = '';\n});\n\n/* ----------- clear all completed from to-do list -----------*/\nclearBtn.addEventListener('click', () => todo.clearAllCompleted());\n\n/* ----------When page opens get to-do list data from localStorage---------------*/\nwindow.onload = () => {\n  todo.todoList = JSON.parse(localStorage.getItem('todo-list')) || [];\n  if (todo.todoList.length > 0) {\n    todo.todoList.forEach((task) => todo.renderTask(task));\n  }\n  // (()=> {enableDragSort('drag-sort-enable',todo.todoList)})();\n};\n\n//# sourceURL=webpack://to-do-list-m2/./src/index.js?");

/***/ }),

/***/ "./src/modules/dragdrop.js":
/*!*********************************!*\
  !*** ./src/modules/dragdrop.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ enableDragSort)\n/* harmony export */ });\n/* harmony import */ var _updatefun_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updatefun.js */ \"./src/modules/updatefun.js\");\n\n\nfunction handleDrag(item) {\n  const selectedItem = item.target;\n  const list = selectedItem.parentNode;\n  const x = item.clientX;\n  const y = item.clientY;\n  selectedItem.classList.add('drag-sort-active');\n  let swapItem = document.elementFromPoint(x, y)\n  === null ? selectedItem : document.elementFromPoint(x, y);\n\n  if (list === swapItem.parentNode) {\n    swapItem = swapItem !== selectedItem.nextSibling ? swapItem : swapItem.nextSibling;\n    list.insertBefore(selectedItem, swapItem);\n  }\n}\n\nfunction handleDrop(item) {\n  item.target.classList.remove('drag-sort-active');\n  (0,_updatefun_js__WEBPACK_IMPORTED_MODULE_0__.updateList)();\n}\n\nfunction enableDragItem(item) {\n  item.setAttribute('draggable', true);\n  item.ondrag = handleDrag;\n  item.ondragend = handleDrop;\n}\n\nfunction enableDragList(list, todoList) {\n  Array.prototype.map.call(list.children, (item) => { enableDragItem(item, todoList); });\n}\n\nfunction enableDragSort(listClass, todoList) {\n  const sortableLists = document.getElementsByClassName(listClass);\n  Array.prototype.map.call(sortableLists, (list) => { enableDragList(list, todoList); });\n}\n\n//# sourceURL=webpack://to-do-list-m2/./src/modules/dragdrop.js?");

/***/ }),

/***/ "./src/modules/listfuns.js":
/*!*********************************!*\
  !*** ./src/modules/listfuns.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToDo)\n/* harmony export */ });\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ \"./src/modules/task.js\");\n/* harmony import */ var _ul_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ul.js */ \"./src/modules/ul.js\");\n/* harmony import */ var _dragdrop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dragdrop.js */ \"./src/modules/dragdrop.js\");\n\n\n\n\nclass ToDo {\n  constructor() {\n    this.todoList = [];\n  }\n\n  /* -------------Function to create list in html file------------*/\n  renderTask(task) {\n    const liElement = document.createElement('li');\n    liElement.classList.add('draggable-item');\n    liElement.setAttribute('value', task.index);\n    liElement.setAttribute('draggable', 'true');\n\n    liElement.innerHTML = `\n        <div>\n        <input class=\"completed-checkbox\" type=\"checkbox\">\n        <input class=\"task-description\" type=\"text\" name=\"${task.index}\" value=\"${task.description}\">\n       </div>\n        <i class=\"fa fa-trash icon trash-icon\" aria-hidden=\"true\"></i>\n        `;\n    /* -----------Call function to add all events to buttons in list---------*/\n    (0,_ul_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(liElement, this, this.todoList);\n\n    liElement.querySelector('.completed-checkbox').checked = task.completed;\n    document.querySelector('#list').appendChild(liElement);\n    liElement.querySelector('.task-description').style.textDecoration = task.completed ? 'line-through' : 'none';\n\n    (() => { (0,_dragdrop_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('drag-sort-enable', this.todoList); })();\n  }\n\n  /* ----------Function to update indexes after remove data----------*/\n  updateIndexes() {\n    document.querySelectorAll('.draggable-item')\n      .forEach((item, index) => {\n        item.setAttribute('value', index + 1);\n        item.querySelector('.task-description').setAttribute('name', index + 1);\n      });\n    this.todoList.forEach((task, index) => {\n      task.index = index + 1;\n    });\n  }\n\n  /* ----------Function to add new to-do ----------*/\n  addTask(description) {\n    const task = new _task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.todoList.length + 1, description);\n    this.todoList.push(task);\n    localStorage.setItem('todo-list', JSON.stringify(this.todoList));\n    console.log(this.todoList);\n    this.renderTask(task);\n  }\n\n  /* -----------Function to remove item from to-do list---------*/\n  removeTask(liElement) {\n    const taskIndex = liElement.value - 1;\n    this.todoList.splice(taskIndex, 1);\n    liElement.remove();\n\n    /* ---call function to update indexes---*/\n    this.updateIndexes();\n    localStorage.setItem('todo-list', JSON.stringify(this.todoList));\n  }\n\n  /* ------------remove all completed tasks---------------*/\n  clearAllCompleted() {\n    this.todoList = this.todoList.filter((task) => !task.completed);\n    document.querySelectorAll('.draggable-item').forEach((item) => {\n      if (item.querySelector('.completed-checkbox').checked) {\n        item.remove();\n      }\n    });\n\n    /* ---call function to update indexes---*/\n    this.updateIndexes();\n\n    /* ------------Remove all completed tasks---------------*/\n    localStorage.setItem('todo-list', JSON.stringify(this.todoList));\n  }\n}\n\n//# sourceURL=webpack://to-do-list-m2/./src/modules/listfuns.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  constructor(index, description) {\n    this.index = index;\n    this.description = description;\n    this.completed = false;\n  }\n}\n\n//# sourceURL=webpack://to-do-list-m2/./src/modules/task.js?");

/***/ }),

/***/ "./src/modules/ul.js":
/*!***************************!*\
  !*** ./src/modules/ul.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addEventListeners)\n/* harmony export */ });\n/* harmony import */ var _updatefun_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updatefun.js */ \"./src/modules/updatefun.js\");\n/* ---------- function to add all events to buttons in list---------*/\n\n\nfunction addEventListeners(liElement, todoObj, todoList) {\n  const dscr = liElement.querySelector('.task-description');\n  const checkbox = liElement.querySelector('.completed-checkbox');\n  const trash = liElement.querySelector('.trash-icon');\n\n  /* -----------Event when checke change-----------*/\n  checkbox.addEventListener('change', function () {\n    dscr.style.textDecoration = this.checked ? 'line-through' : 'none';\n    (0,_updatefun_js__WEBPACK_IMPORTED_MODULE_0__.updateTask)(liElement, todoList);\n  });\n\n  /* -----------Event when user need to update task-----------*/\n  dscr.addEventListener('focus', function () {\n    liElement.style.backgroundColor = '#ffeea8';\n    this.style.cursor = 'text';\n  });\n\n  /* ----------Event when user completes update task-----------*/\n  dscr.addEventListener('focusout', function () {\n    liElement.style.backgroundColor = 'transparent';\n    this.style.cursor = 'default';\n    if (this.value.trim() === '') {\n      todoObj.removeTask(liElement);\n    } else {\n      (0,_updatefun_js__WEBPACK_IMPORTED_MODULE_0__.updateTask)(liElement, todoList);\n    }\n  });\n\n  dscr.addEventListener('keydown', (e) => {\n    if (e.keyCode === 13) {\n      e.target.blur();\n    }\n  });\n\n  /* ----------Event when user clicks remove button-----------*/\n  trash.addEventListener('click', () => {\n    todoObj.removeTask(liElement);\n  });\n}\n\n//# sourceURL=webpack://to-do-list-m2/./src/modules/ul.js?");

/***/ }),

/***/ "./src/modules/updatefun.js":
/*!**********************************!*\
  !*** ./src/modules/updatefun.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateList: () => (/* binding */ updateList),\n/* harmony export */   updateTask: () => (/* binding */ updateTask)\n/* harmony export */ });\n/* -----------function to update a task----------*/\nfunction updateTask(liElement, todoList) {\n  const taskDesc = liElement.querySelector('.task-description').value;\n  const chkState = liElement.querySelector('.completed-checkbox').checked;\n  const taskIndex = liElement.value - 1;\n  todoList[taskIndex].description = taskDesc;\n  todoList[taskIndex].completed = chkState;\n  /* ---------Update the task in localStorage----------*/\n  localStorage.setItem('todo-list', JSON.stringify(todoList));\n}\n\nfunction updateList() {\n  // debugger;\n  const todo = [];\n  const liElement = document.querySelectorAll('.draggable-item');\n  liElement.forEach((item, index) => {\n    const opj = {\n      index: index + 1,\n      description: item.querySelector('.task-description').value,\n      completed: item.querySelector('.completed-checkbox').checked,\n    };\n    todo.push(opj);\n  });\n\n  //   todoList.forEach((task, index) => {\n  //   task.index = index + 1;\n  //  });\n  /* ---------Update the task in localStorage----------*/\n  localStorage.setItem('todo-list', JSON.stringify(todo));\n}\n\n//# sourceURL=webpack://to-do-list-m2/./src/modules/updatefun.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;