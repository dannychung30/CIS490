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

/***/ "./Models/Keys.js":
/*!************************!*\
  !*** ./Models/Keys.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Keys)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar Keys = /*#__PURE__*/_createClass(function Keys() {\n  _classCallCheck(this, Keys);\n});\n_defineProperty(Keys, \"Mentees\", 'Mentees');\n_defineProperty(Keys, \"Mentee_Survey\", 'MenteeSurvey');\n_defineProperty(Keys, \"Mentee_Selected_Questions\", 'MenteeSelectedQuestions');\n_defineProperty(Keys, \"Mentors\", 'Mentors');\n_defineProperty(Keys, \"Mentor_Survey\", 'MentorSurvey');\n_defineProperty(Keys, \"Mentor_Selected_Questions\", 'MentorSelectedQuestions');\n_defineProperty(Keys, \"Question_Pairs\", 'QuestionPairs');\n\n\n//# sourceURL=webpack://mentormatching/./Models/Keys.js?");

/***/ }),

/***/ "./Models/Storage.js":
/*!***************************!*\
  !*** ./Models/Storage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar Storage = /*#__PURE__*/function () {\n  function Storage(dbName) {\n    _classCallCheck(this, Storage);\n    this.dbName = dbName;\n    this.initializeDatabase();\n  }\n  _createClass(Storage, [{\n    key: \"getAll\",\n    value: function getAll() {\n      var db = JSON.parse(localStorage.getItem(this.dbName));\n      return db;\n    }\n  }, {\n    key: \"initializeDatabase\",\n    value: function initializeDatabase() {\n      if (!localStorage.getItem(this.dbName)) {\n        localStorage.setItem(this.dbName, JSON.stringify([]));\n      }\n    }\n  }, {\n    key: \"insertMany\",\n    value: function insertMany(data, name) {\n      var _this = this;\n      data.forEach(function (d) {\n        _this.insert(d, name);\n      });\n    }\n  }, {\n    key: \"insert\",\n    value: function insert(data) {\n      var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n      var db = JSON.parse(localStorage.getItem(this.dbName));\n      // db.push({ id: crypto.randomUUID(), data });\n      if (name) {\n        var entry = {};\n        entry.id = crypto.randomUUID();\n        entry[name] = data;\n        db.push(entry);\n      } else {\n        db.push(data);\n      }\n      localStorage.setItem(this.dbName, JSON.stringify(db));\n    }\n  }, {\n    key: \"find\",\n    value: function find(query) {\n      var db = JSON.parse(localStorage.getItem(this.dbName));\n      var result = db.filter(function (doc) {\n        for (var key in query) {\n          if (doc[key] !== query[key]) {\n            return false;\n          }\n        }\n        return true;\n      });\n      return result;\n    }\n  }, {\n    key: \"findOne\",\n    value: function findOne(query) {\n      var db = JSON.parse(localStorage.getItem(this.dbName));\n      var result = db.filter(function (doc) {\n        for (var key in query) {\n          if (doc[key] !== query[key]) {\n            return false;\n          }\n        }\n        return true;\n      });\n      return result[0];\n    }\n  }, {\n    key: \"update\",\n    value: function update(query, data) {\n      var db = JSON.parse(localStorage.getItem(this.dbName));\n      db.data.forEach(function (doc) {\n        var match = true;\n        for (var key in query) {\n          if (doc[key] !== query[key]) {\n            match = false;\n            break;\n          }\n        }\n        if (match) {\n          for (var _key in data) {\n            doc[_key] = data[_key];\n          }\n        }\n      });\n      localStorage.setItem(this.dbName, JSON.stringify(db));\n    }\n  }, {\n    key: \"remove\",\n    value: function remove(query) {\n      var db = JSON.parse(localStorage.getItem(this.dbName));\n      db.data = db.data.filter(function (doc) {\n        for (var key in query) {\n          if (doc[key] !== query[key]) {\n            return true;\n          }\n        }\n        return false;\n      });\n      localStorage.setItem(this.dbName, JSON.stringify(db));\n    }\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      localStorage.setItem(this.dbName, '[]');\n    }\n  }]);\n  return Storage;\n}();\n\n\n//# sourceURL=webpack://mentormatching/./Models/Storage.js?");

/***/ }),

/***/ "./scripts/questionPairing.js":
/*!************************************!*\
  !*** ./scripts/questionPairing.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Models_Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Models/Storage */ \"./Models/Storage.js\");\n/* harmony import */ var _Models_Keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Models/Keys */ \"./Models/Keys.js\");\n\n\nvar pairing_section = document.querySelector('.pairing-section');\nvar submit_button_container = document.querySelector('.submit-button-container');\nvar pair_form = document.getElementById('pair-form');\nvar menteeSurvey = new _Models_Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_Models_Keys__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Mentee_Survey);\nvar mentorSurvey = new _Models_Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_Models_Keys__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Mentor_Survey);\nvar menteeSelectedQuestions = new _Models_Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_Models_Keys__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Mentee_Selected_Questions);\nvar mentorSelectedQuestions = new _Models_Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_Models_Keys__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Mentor_Selected_Questions);\nmenteeSelectedQuestions.getAll().forEach(function (question) {\n  var select = document.createElement('select');\n  select.id = question.id;\n  var label = document.createElement('label');\n  label.innerText = question.question + ': ';\n  // const breakEl = document.createElement('br');\n  populateOptions(mentorSelectedQuestions.getAll(), select);\n  pairing_section.append(label, select);\n});\nfunction populateOptions(questions, tag) {\n  questions.forEach(function (question) {\n    var option = document.createElement('option');\n    option.id = question.id;\n    option.value = question.id;\n    option.innerText = question.question;\n    tag.append(option);\n  });\n}\nvar submit = document.createElement('input');\nsubmit.type = 'submit';\nsubmit.value = 'Get Matches';\nsubmit.className = 'submit-question';\nsubmit_button_container.append(submit);\npair_form.addEventListener('submit', function (e) {\n  e.preventDefault();\n  var pairs = new _Models_Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_Models_Keys__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Question_Pairs);\n  pairs.clear();\n  savePairs();\n  window.location.href = './results.html';\n});\nfunction savePairs() {\n  var questionPairs = new _Models_Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_Models_Keys__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Question_Pairs);\n  var pairs = [];\n  menteeSelectedQuestions.getAll().forEach(function (question) {\n    var menteeQuestion = document.getElementById(question.id);\n    pairs.push({\n      menteeQuestion: question.id,\n      mentorQuestion: menteeQuestion.value\n    });\n  });\n  questionPairs.insertMany(pairs);\n}\n\n//# sourceURL=webpack://mentormatching/./scripts/questionPairing.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/questionPairing.js");
/******/ 	
/******/ })()
;