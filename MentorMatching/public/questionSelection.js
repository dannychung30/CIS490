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

/***/ "./Models/Mentee.js":
/*!**************************!*\
  !*** ./Models/Mentee.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Mentee)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nvar Mentee = /*#__PURE__*/_createClass(\n/**\n *\n * @param {String} id\n * @param {{}[]} responses\n * @param {String} email\n * @param {String} firstName\n * @param {String} lastName\n */\nfunction Mentee(id, responses, email, firstName, lastName) {\n  _classCallCheck(this, Mentee);\n  this.id = id;\n  this.responses = responses;\n  this.email = email;\n  this.firstName = firstName;\n  this.lastName = lastName;\n  this.MAX_MATCHES = 3;\n  this.possible_matches = [];\n});\n\n\n//# sourceURL=webpack://mentormatching/./Models/Mentee.js?");

/***/ }),

/***/ "./Models/Mentor.js":
/*!**************************!*\
  !*** ./Models/Mentor.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Mentor)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nvar Mentor = /*#__PURE__*/_createClass(\n/**\n *\n * @param {String} id\n * @param {{}[]} responses\n * @param {String} email\n * @param {String} firstName\n * @param {String} lastName\n */\nfunction Mentor(id, responses, email, firstName, lastName) {\n  _classCallCheck(this, Mentor);\n  this.id = id;\n  this.responses = responses;\n  this.email = email;\n  this.firstName = firstName;\n  this.lastName = lastName;\n  this.mentees = [];\n  this.max_mentees = 1;\n});\n\n\n//# sourceURL=webpack://mentormatching/./Models/Mentor.js?");

/***/ }),

/***/ "./Models/Storage.js":
/*!***************************!*\
  !*** ./Models/Storage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar Storage = /*#__PURE__*/function () {\n  function Storage(dbName) {\n    _classCallCheck(this, Storage);\n    this.dbName = dbName;\n    this.initializeDatabase();\n  }\n  _createClass(Storage, [{\n    key: \"getAll\",\n    value: function getAll() {\n      var db = JSON.parse(localStorage.getItem(this.dbName));\n      return db;\n    }\n  }, {\n    key: \"initializeDatabase\",\n    value: function initializeDatabase() {\n      if (!localStorage.getItem(this.dbName)) {\n        localStorage.setItem(this.dbName, JSON.stringify([]));\n      }\n    }\n  }, {\n    key: \"insertMany\",\n    value: function insertMany(data, name) {\n      var _this = this;\n      data.forEach(function (d) {\n        _this.insert(d, name);\n      });\n    }\n  }, {\n    key: \"insert\",\n    value: function insert(data) {\n      var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n      var db = JSON.parse(localStorage.getItem(this.dbName));\n      // db.push({ id: crypto.randomUUID(), data });\n      if (name) {\n        var entry = {};\n        entry.id = crypto.randomUUID();\n        entry[name] = data;\n        db.push(entry);\n      } else {\n        db.push(data);\n      }\n      localStorage.setItem(this.dbName, JSON.stringify(db));\n    }\n  }, {\n    key: \"find\",\n    value: function find(query) {\n      var db = JSON.parse(localStorage.getItem(this.dbName));\n      var result = db.filter(function (doc) {\n        for (var key in query) {\n          if (doc[key] !== query[key]) {\n            return false;\n          }\n        }\n        return true;\n      });\n      return result;\n    }\n  }, {\n    key: \"findOne\",\n    value: function findOne(query) {\n      var db = JSON.parse(localStorage.getItem(this.dbName));\n      var result = db.filter(function (doc) {\n        for (var key in query) {\n          if (doc[key] !== query[key]) {\n            return false;\n          }\n        }\n        return true;\n      });\n      return result[0];\n    }\n  }, {\n    key: \"update\",\n    value: function update(query, data) {\n      var db = JSON.parse(localStorage.getItem(this.dbName));\n      db.data.forEach(function (doc) {\n        var match = true;\n        for (var key in query) {\n          if (doc[key] !== query[key]) {\n            match = false;\n            break;\n          }\n        }\n        if (match) {\n          for (var _key in data) {\n            doc[_key] = data[_key];\n          }\n        }\n      });\n      localStorage.setItem(this.dbName, JSON.stringify(db));\n    }\n  }, {\n    key: \"remove\",\n    value: function remove(query) {\n      var db = JSON.parse(localStorage.getItem(this.dbName));\n      db.data = db.data.filter(function (doc) {\n        for (var key in query) {\n          if (doc[key] !== query[key]) {\n            return true;\n          }\n        }\n        return false;\n      });\n      localStorage.setItem(this.dbName, JSON.stringify(db));\n    }\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      localStorage.setItem(this.dbName, '[]');\n    }\n  }]);\n  return Storage;\n}();\n\n\n//# sourceURL=webpack://mentormatching/./Models/Storage.js?");

/***/ }),

/***/ "./scripts/questionSelection.js":
/*!**************************************!*\
  !*** ./scripts/questionSelection.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Models_Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Models/Storage */ \"./Models/Storage.js\");\n/* harmony import */ var _Models_Keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Models/Keys */ \"./Models/Keys.js\");\n/* harmony import */ var _Models_Mentee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Models/Mentee */ \"./Models/Mentee.js\");\n/* harmony import */ var _Models_Mentor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Models/Mentor */ \"./Models/Mentor.js\");\n\n\n\n\nvar menteeSurvey = new _Models_Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_Models_Keys__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Mentee_Survey);\nvar mentorSurvey = new _Models_Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_Models_Keys__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Mentor_Survey);\nvar menteeSelectedQuestions = new _Models_Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_Models_Keys__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Mentee_Selected_Questions);\nvar mentorSelectedQuestions = new _Models_Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_Models_Keys__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Mentor_Selected_Questions);\nvar mentee_first_name_select = document.getElementById('mentee-first-name');\npopulateOptions(menteeSurvey, mentee_first_name_select);\nvar mentee_last_name_select = document.getElementById('mentee-last-name');\npopulateOptions(menteeSurvey, mentee_last_name_select);\nvar mentee_email_select = document.getElementById('mentee-email');\npopulateOptions(menteeSurvey, mentee_email_select);\nvar mentor_first_name_select = document.getElementById('mentor-first-name');\npopulateOptions(mentorSurvey, mentor_first_name_select);\nvar mentor_last_name_select = document.getElementById('mentor-last-name');\npopulateOptions(mentorSurvey, mentor_last_name_select);\nvar mentor_email_select = document.getElementById('mentor-email');\npopulateOptions(mentorSurvey, mentor_email_select);\nvar mentee_options = document.getElementById('mentee-questions');\nvar mentor_options = document.getElementById('mentor-questions');\ndisplayQuestions(menteeSurvey, mentee_options);\ndisplayQuestions(mentorSurvey, mentor_options);\nvar mentee_question_form = document.getElementById('mentee-question-form');\nvar mentor_question_form = document.getElementById('mentor-question-form');\nvar question_forms_button = document.querySelector('#question-forms-submit-button');\nquestion_forms_button.addEventListener('click', submitBothForms);\n\n/**\n *\n * @param {Event} e\n */\nfunction submitBothForms(e) {\n  e.preventDefault();\n  menteeSelectedQuestions.clear();\n  saveSelectedQuestions(mentee_question_form, menteeSelectedQuestions);\n  mentorSelectedQuestions.clear();\n  saveSelectedQuestions(mentor_question_form, mentorSelectedQuestions);\n  var mentee_checked = menteeSelectedQuestions.getAll().length;\n  var mentor_checked = mentorSelectedQuestions.getAll().length;\n  var difference = Math.abs(mentee_checked - mentor_checked);\n  if (mentee_checked > mentor_checked) {\n    alert('The Mentee Survey has ' + difference + ' more question(s) checked than the Mentor Survey. Make sure both surveys have the same amount of questions checked');\n  } else if (mentor_checked > mentee_checked) {\n    alert('The Mentor Survey has ' + difference + ' more question(s) checked than the Mentee Survey. Make sure both surveys have the same amount of questions checked');\n  } else if ((mentee_checked && mentor_checked) === 0) {\n    alert('No question(s) are selected from either survey');\n  } else {\n    var userProfilesCreated = JSON.parse(localStorage.getItem('UserProfilesCreated'));\n    if (!userProfilesCreated) {\n      createUserProfiles(_Models_Keys__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Mentees, _Models_Mentee__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n      createUserProfiles(_Models_Keys__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Mentors, _Models_Mentor__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n      localStorage.setItem('UserProfilesCreated', JSON.stringify(true));\n    }\n    window.location.href = './question-pairing.html';\n  }\n}\n\n// mentee_question_form.addEventListener('submit', (e) => {\n//   mentor_question_form.submit();\n//   e.preventDefault();\n//   menteeSelectedQuestions.clear();\n\n//   console.log(\"here\");\n\n//   saveSelectedQuestions(mentee_question_form, menteeSelectedQuestions);\n//   const userProfilesCreated = JSON.parse(\n//     localStorage.getItem('UserProfilesCreated')\n//   );\n//   if (!userProfilesCreated) {\n//     createUserProfiles(Keys.Mentees, Mentee);\n//     localStorage.setItem('UserProfilesCreated', JSON.stringify(true));\n//   }\n\n// });\n\n// mentor_question_form.addEventListener('submit', (e) => {\n//   e.preventDefault();\n//   mentorSelectedQuestions.clear();\n//   saveSelectedQuestions(mentor_question_form, mentorSelectedQuestions);\n\n//   const userProfilesCreated = JSON.parse(\n//     localStorage.getItem('UserProfilesCreated')\n//   );\n//   if (!userProfilesCreated) {\n//     createUserProfiles(Keys.Mentors, Mentor);\n//     localStorage.setItem('UserProfilesCreated', JSON.stringify(true));\n//   }\n// });\n\n/**\n *\n * @param {Storage} survey Storage item that includes the User's questions.\n * @param {HTMLDivElement} questionsDiv\n */\n\nfunction displayQuestions(survey, questionsDiv) {\n  survey.getAll().forEach(function (_ref) {\n    var id = _ref.id,\n      question = _ref.question;\n    var input = document.createElement('input');\n    input.type = 'checkbox';\n    input.id = id;\n    input.value = question;\n    var label = document.createElement('label');\n    label.htmlFor = id;\n    label.innerText = question;\n    var breakEl = document.createElement('br');\n    questionsDiv.append(input, label, breakEl);\n  });\n}\n\n/**\n *\n * @param {Storage} survey Storage item that includes the User's questions\n * @param {HTMLSelectElement} selectElement\n */\nfunction populateOptions(survey, selectElement) {\n  survey.getAll().forEach(function (question) {\n    var option = document.createElement('option');\n    option.value = question.id;\n    option.innerText = question.question;\n    selectElement.append(option);\n  });\n}\n\n/**\n *\n * @param {HTMLFormElement} form\n * @returns {NodeListOf<Element>}\n */\nfunction getCheckedBoxes(form) {\n  var checkboxes = form.querySelectorAll('input[type=\"checkbox\"]');\n  var checkedBoxes = [];\n  for (var i = 0; i < checkboxes.length; i++) {\n    if (checkboxes[i].checked) {\n      checkedBoxes.push({\n        id: checkboxes[i].id,\n        question: checkboxes[i].value\n      });\n    }\n  }\n  return checkedBoxes;\n}\n\n/**\n *\n * @param {HTMLFormElement} form\n * @param {Storage} userSelectedQuestions Storage item to save the selected questions for.\n */\nfunction saveSelectedQuestions(form, userSelectedQuestions) {\n  var selected = getCheckedBoxes(form);\n  userSelectedQuestions.insertMany(selected);\n}\nfunction createUserProfiles(key, userType) {\n  var currentData = new _Models_Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"](key);\n  var users = currentData.getAll().map(function (user) {\n    return new userType(user.id, user.data.responses);\n  });\n  currentData.clear();\n  currentData.insertMany(users);\n}\n\n//# sourceURL=webpack://mentormatching/./scripts/questionSelection.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/questionSelection.js");
/******/ 	
/******/ })()
;