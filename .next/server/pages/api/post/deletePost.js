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
exports.id = "pages/api/post/deletePost";
exports.ids = ["pages/api/post/deletePost"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/post/deletePost.js":
/*!**************************************!*\
  !*** ./pages/api/post/deletePost.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function handler(req, res) {\n  if (req.method === 'POST') {\n    const {\n      id\n    } = req.body;\n    const post = await prisma.post.delete({\n      where: {\n        id\n      }\n    });\n    res.status(200).json(post);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdC9kZWxldGVQb3N0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsTUFBTUMsTUFBTSxHQUFHLElBQUlELHdEQUFKLEVBQWY7QUFFZSxlQUFlRSxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBZ0M7RUFDM0MsSUFBR0QsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbEIsRUFBeUI7SUFDckIsTUFBTTtNQUFFQztJQUFGLElBQVNILEdBQUcsQ0FBQ0ksSUFBbkI7SUFDQSxNQUFNQyxJQUFJLEdBQUcsTUFBTVAsTUFBTSxDQUFDTyxJQUFQLENBQVlDLE1BQVosQ0FBbUI7TUFDbENDLEtBQUssRUFBRTtRQUNISjtNQURHO0lBRDJCLENBQW5CLENBQW5CO0lBS0FGLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCSixJQUFyQjtFQUNIO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mZXN0aXZhbC1hcHAvLi9wYWdlcy9hcGkvcG9zdC9kZWxldGVQb3N0LmpzP2M1ZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcyl7XG4gICAgaWYocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKXtcbiAgICAgICAgY29uc3QgeyBpZCB9ID0gcmVxLmJvZHk7XG4gICAgICAgIGNvbnN0IHBvc3QgPSBhd2FpdCBwcmlzbWEucG9zdC5kZWxldGUoe1xuICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocG9zdCk7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiaWQiLCJib2R5IiwicG9zdCIsImRlbGV0ZSIsIndoZXJlIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/post/deletePost.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/post/deletePost.js"));
module.exports = __webpack_exports__;

})();