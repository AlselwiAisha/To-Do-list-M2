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

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\r\n    constructor(index, description) {\r\n      this.index = index;\r\n      this.description = description;\r\n      this.completed = false;\r\n    }\r\n  }\n\n//# sourceURL=webpack://to-do-list-m2/./src/modules/task.js?");

/***/ }),

/***/ "./src/modules/ul.js":
/*!***************************!*\
  !*** ./src/modules/ul.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createToDoList: () => (/* binding */ createToDoList),\n/* harmony export */   renderToDoList: () => (/* binding */ renderToDoList)\n/* harmony export */ });\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ \"./src/modules/task.js\");\n\r\n\r\nfunction createToDoList() {\r\n  const todoList = [];\r\n\r\n  for (let i = 0; i < 5; i += 1) {\r\n    if (i === 1) todoList.push(new _task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](i, ` To Do ${i + 1}`, true));\r\n    else todoList.push(new _task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](i, `To Do ${i + 1}`, false));\r\n  }\r\n\r\n  return (todoList);\r\n}\r\n\r\nfunction renderToDoList(taskList) {\r\n  const ulElement = document.createElement('ul');\r\n\r\n  taskList.forEach((task) => {\r\n    const liElement = document.createElement('li');\r\n    let isChecked = 'unchecked';\r\n    if (task.completed) {\r\n      isChecked = 'checked';\r\n      liElement.style.textDecoration = 'line-through';\r\n    }\r\n    liElement.innerHTML = `\r\n        <div>\r\n            <input type=\"checkbox\" ${isChecked}>\r\n            ${task.description}\r\n        </div>\r\n        <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n        `;\r\n    ulElement.appendChild(liElement);\r\n  });\r\n\r\n  return ulElement;\r\n}\n\n//# sourceURL=webpack://to-do-list-m2/./src/modules/ul.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/modules/ul.js");
/******/ 	
/******/ })()
;