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
exports.id = "pages/api/comment/createComment";
exports.ids = ["pages/api/comment/createComment"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/comment/createComment.js":
/*!********************************************!*\
  !*** ./pages/api/comment/createComment.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function handler(req, res) {\n  const {\n    id,\n    content,\n    postId,\n    userId\n  } = req.body;\n  const comment = await prisma.comment.create({\n    data: {\n      id,\n      content,\n      userId,\n      postId\n    }\n  });\n  res.status(200).json(comment);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29tbWVudC9jcmVhdGVDb21tZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsTUFBTUMsTUFBTSxHQUFHLElBQUlELHdEQUFKLEVBQWY7QUFFZSxlQUFlRSxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBZ0M7RUFFM0MsTUFBTTtJQUFFQyxFQUFGO0lBQU1DLE9BQU47SUFBZUMsTUFBZjtJQUF1QkM7RUFBdkIsSUFBa0NMLEdBQUcsQ0FBQ00sSUFBNUM7RUFDQSxNQUFNQyxPQUFPLEdBQUcsTUFBTVQsTUFBTSxDQUFDUyxPQUFQLENBQWVDLE1BQWYsQ0FBc0I7SUFDeENDLElBQUksRUFBRTtNQUNGUCxFQURFO01BRUZDLE9BRkU7TUFHRkUsTUFIRTtNQUlGRDtJQUpFO0VBRGtDLENBQXRCLENBQXRCO0VBUUFILEdBQUcsQ0FBQ1MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCSixPQUFyQjtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmVzdGl2YWwtYXBwLy4vcGFnZXMvYXBpL2NvbW1lbnQvY3JlYXRlQ29tbWVudC5qcz8zNThkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpe1xuXG4gICAgY29uc3QgeyBpZCwgY29udGVudCwgcG9zdElkLCB1c2VySWQgfSA9IHJlcS5ib2R5O1xuICAgIGNvbnN0IGNvbW1lbnQgPSBhd2FpdCBwcmlzbWEuY29tbWVudC5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgICBwb3N0SWQsXG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oY29tbWVudCk7XG59Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJpZCIsImNvbnRlbnQiLCJwb3N0SWQiLCJ1c2VySWQiLCJib2R5IiwiY29tbWVudCIsImNyZWF0ZSIsImRhdGEiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/comment/createComment.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/comment/createComment.js"));
module.exports = __webpack_exports__;

})();