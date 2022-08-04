"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/post/createPost";
exports.ids = ["pages/api/post/createPost"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/post/createPost.js":
/*!**************************************!*\
  !*** ./pages/api/post/createPost.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function handler(req, res) {\n  if (req.method === 'POST') {\n    const {\n      createdAt,\n      updatedAt,\n      description,\n      nameFestival,\n      content,\n      userId\n    } = req.body;\n    const post = await prisma.post.create({\n      data: {\n        createdAt,\n        updatedAt,\n        description,\n        nameFestival,\n        content,\n        userId\n      }\n    });\n    res.status(200).json(post);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdC9jcmVhdGVQb3N0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsTUFBTUMsTUFBTSxHQUFHLElBQUlELHdEQUFKLEVBQWY7QUFFZSxlQUFlRSxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBZ0M7RUFDM0MsSUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7SUFDdkIsTUFBTTtNQUFFQyxTQUFGO01BQWFDLFNBQWI7TUFBd0JDLFdBQXhCO01BQXFDQyxZQUFyQztNQUFtREMsT0FBbkQ7TUFBNERDO0lBQTVELElBQXVFUixHQUFHLENBQUNTLElBQWpGO0lBQ0EsTUFBTUMsSUFBSSxHQUFHLE1BQU1aLE1BQU0sQ0FBQ1ksSUFBUCxDQUFZQyxNQUFaLENBQW1CO01BQ2xDQyxJQUFJLEVBQUU7UUFDRlQsU0FERTtRQUVGQyxTQUZFO1FBR0ZDLFdBSEU7UUFJRkMsWUFKRTtRQUtGQyxPQUxFO1FBTUZDO01BTkU7SUFENEIsQ0FBbkIsQ0FBbkI7SUFVQVAsR0FBRyxDQUFDWSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJKLElBQXJCO0VBQ0g7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zlc3RpdmFsLWFwcC8uL3BhZ2VzL2FwaS9wb3N0L2NyZWF0ZVBvc3QuanM/YWFhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcyl7XG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgICAgICBjb25zdCB7IGNyZWF0ZWRBdCwgdXBkYXRlZEF0LCBkZXNjcmlwdGlvbiwgbmFtZUZlc3RpdmFsLCBjb250ZW50LCB1c2VySWQgfSA9IHJlcS5ib2R5O1xuICAgICAgICBjb25zdCBwb3N0ID0gYXdhaXQgcHJpc21hLnBvc3QuY3JlYXRlKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQsXG4gICAgICAgICAgICAgICAgdXBkYXRlZEF0LFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIG5hbWVGZXN0aXZhbCxcbiAgICAgICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgICAgIHVzZXJJZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocG9zdCk7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0IiwiZGVzY3JpcHRpb24iLCJuYW1lRmVzdGl2YWwiLCJjb250ZW50IiwidXNlcklkIiwiYm9keSIsInBvc3QiLCJjcmVhdGUiLCJkYXRhIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/post/createPost.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/post/createPost.js"));
module.exports = __webpack_exports__;

})();