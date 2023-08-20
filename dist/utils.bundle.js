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