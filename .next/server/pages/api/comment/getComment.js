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
exports.id = "pages/api/comment/getComment";
exports.ids = ["pages/api/comment/getComment"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/comment/getComment.js":
/*!*****************************************!*\
  !*** ./pages/api/comment/getComment.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function handler(req, res) {\n  // fonction get \n  const comments = await prisma.comment.findMany();\n  res.json(comments);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29tbWVudC9nZXRDb21tZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsTUFBTUMsTUFBTSxHQUFHLElBQUlELHdEQUFKLEVBQWY7QUFFZSxlQUFlRSxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBZ0M7RUFDM0M7RUFDQSxNQUFNQyxRQUFRLEdBQUcsTUFBTUosTUFBTSxDQUFDSyxPQUFQLENBQWVDLFFBQWYsRUFBdkI7RUFDQUgsR0FBRyxDQUFDSSxJQUFKLENBQVNILFFBQVQ7QUFHSCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zlc3RpdmFsLWFwcC8uL3BhZ2VzL2FwaS9jb21tZW50L2dldENvbW1lbnQuanM/MWE4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKXtcbiAgICAvLyBmb25jdGlvbiBnZXQgXG4gICAgY29uc3QgY29tbWVudHMgPSBhd2FpdCBwcmlzbWEuY29tbWVudC5maW5kTWFueSgpO1xuICAgIHJlcy5qc29uKGNvbW1lbnRzKTtcblxuXG59Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb21tZW50cyIsImNvbW1lbnQiLCJmaW5kTWFueSIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/comment/getComment.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/comment/getComment.js"));
module.exports = __webpack_exports__;

})();