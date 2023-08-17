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

/***/ "./src/modules/ul.js":
/*!***************************!*\
  !*** ./src/modules/ul.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addEventListeners)\n/* harmony export */ });\n/* ---------- function to add all events to buttons in list---------*/\r\nfunction addEventListeners(liElement, todoObj) {\r\n  const dscr = liElement.querySelector('.task-description');\r\n  const checkbox = liElement.querySelector('.completed-checkbox');\r\n  const trash = liElement.querySelector('.trash-icon');\r\n\r\n  /* -----------Event when checke change-----------*/\r\n  checkbox.addEventListener('change', function () {\r\n    dscr.style.textDecoration = this.checked ? 'line-through' : 'none';\r\n    todoObj.updateTask(liElement);\r\n  });\r\n\r\n  /* -----------Event when user need to update task-----------*/\r\n  dscr.addEventListener('focus', function () {\r\n    liElement.style.backgroundColor = '#ffeea8';\r\n    this.style.cursor = 'text';\r\n  });\r\n\r\n  /* ----------Event when user completes update task-----------*/\r\n  dscr.addEventListener('focusout', function () {\r\n    liElement.style.backgroundColor = 'transparent';\r\n    this.style.cursor = 'default';\r\n    if (this.value.trim() === '') {\r\n      todoObj.removeTask(liElement);\r\n    } else {\r\n      todoObj.updateTask(liElement);\r\n    }\r\n  });\r\n\r\n  dscr.addEventListener('keydown', (e) => {\r\n    if (e.keyCode === 13) {\r\n      e.target.blur();\r\n    }\r\n  });\r\n\r\n  /* ----------Event when user clicks remove button-----------*/\r\n  trash.addEventListener('click', () => {\r\n    todoObj.removeTask(liElement);\r\n  });\r\n}\n\n//# sourceURL=webpack://to-do-list-m2/./src/modules/ul.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/modules/ul.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;