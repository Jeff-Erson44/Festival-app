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
exports.id = "pages/api/auth/signup";
exports.ids = ["pages/api/auth/signup"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "react-cookie":
/*!*******************************!*\
  !*** external "react-cookie" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("react-cookie");

/***/ }),

/***/ "(api)/./pages/api/auth/signup.js":
/*!**********************************!*\
  !*** ./pages/api/auth/signup.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-cookie */ \"react-cookie\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  // On accepte seulement les requêtes POST\n  if (req.method === \"POST\") {\n    const Prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient(); // On récupère toutes les infos utisateurs\n\n    const {\n      username,\n      email,\n      password\n    } = req.body; // Validation des données\n\n    if (!username || !email.includes('@') || !password) {\n      res.status(400).send(\"Données manquantes\");\n      return;\n    } // On vérifie que l'utilisateur n'existe pas déjà et que son email n'est pas déjà utilisé\n\n\n    const user = await Prisma.user.findUnique({\n      where: {\n        username\n      }\n    }); // On hash le mot de passe\n\n    if (user) {\n      res.status(500).send(\"Utilisateur déjà existant\");\n      return;\n    }\n\n    const status = await Prisma.user.create({\n      data: {\n        username,\n        email,\n        password: await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_1__.hash)(password, 8)\n      }\n    });\n    await Prisma.$disconnect();\n    res.status(200).json({\n      message: 'Compte créé'\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9zaWdudXAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLDZCQUFlLDBDQUFnQkcsR0FBaEIsRUFBcUJDLEdBQXJCLEVBQTJCO0VBQ3RDO0VBQ0EsSUFBS0QsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBcEIsRUFBNkI7SUFDekIsTUFBTUMsTUFBTSxHQUFHLElBQUlOLHdEQUFKLEVBQWYsQ0FEeUIsQ0FFekI7O0lBQ0EsTUFBTTtNQUFFTyxRQUFGO01BQVlDLEtBQVo7TUFBbUJDO0lBQW5CLElBQWdDTixHQUFHLENBQUNPLElBQTFDLENBSHlCLENBSXpCOztJQUNBLElBQUssQ0FBQ0gsUUFBRCxJQUFhLENBQUNDLEtBQUssQ0FBQ0csUUFBTixDQUFlLEdBQWYsQ0FBZCxJQUFxQyxDQUFDRixRQUEzQyxFQUF1RDtNQUNuREwsR0FBRyxDQUFDUSxNQUFKLENBQVksR0FBWixFQUFrQkMsSUFBbEIsQ0FBd0Isb0JBQXhCO01BQ0E7SUFDSCxDQVJ3QixDQVM3Qjs7O0lBQ0EsTUFBTUMsSUFBSSxHQUFHLE1BQU1SLE1BQU0sQ0FBQ1EsSUFBUCxDQUFZQyxVQUFaLENBQXVCO01BQ3RDQyxLQUFLLEVBQUU7UUFDSFQ7TUFERztJQUQrQixDQUF2QixDQUFuQixDQVY2QixDQWU3Qjs7SUFDQSxJQUFJTyxJQUFKLEVBQVM7TUFDTFYsR0FBRyxDQUFDUSxNQUFKLENBQVksR0FBWixFQUFrQkMsSUFBbEIsQ0FBd0IsMkJBQXhCO01BQ0E7SUFDSDs7SUFDRCxNQUFNRCxNQUFNLEdBQUksTUFBTU4sTUFBTSxDQUFDUSxJQUFQLENBQVlHLE1BQVosQ0FBbUI7TUFDckNDLElBQUksRUFBRTtRQUNGWCxRQURFO1FBRUZDLEtBRkU7UUFHRkMsUUFBUSxFQUFFLE1BQU1SLDhDQUFJLENBQUVRLFFBQUYsRUFBWSxDQUFaO01BSGxCO0lBRCtCLENBQW5CLENBQXRCO0lBT0EsTUFBTUgsTUFBTSxDQUFDYSxXQUFQLEVBQU47SUFFQWYsR0FBRyxDQUFDUSxNQUFKLENBQVksR0FBWixFQUFrQlEsSUFBbEIsQ0FBdUI7TUFBRUMsT0FBTyxFQUFFO0lBQVgsQ0FBdkI7RUFDQztBQUVKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmVzdGl2YWwtYXBwLy4vcGFnZXMvYXBpL2F1dGgvc2lnbnVwLmpzP2EyYTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgIFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgaGFzaCB9IGZyb20gXCJiY3J5cHRqc1wiO1xuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gXCJyZWFjdC1jb29raWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24oIHJlcSwgcmVzICkge1xuICAgIC8vIE9uIGFjY2VwdGUgc2V1bGVtZW50IGxlcyByZXF1w6p0ZXMgUE9TVFxuICAgIGlmICggcmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIgKSB7XG4gICAgICAgIGNvbnN0IFByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgICAgICAgLy8gT24gcsOpY3Vww6hyZSB0b3V0ZXMgbGVzIGluZm9zIHV0aXNhdGV1cnNcbiAgICAgICAgY29uc3QgeyB1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcbiAgICAgICAgLy8gVmFsaWRhdGlvbiBkZXMgZG9ubsOpZXNcbiAgICAgICAgaWYgKCAhdXNlcm5hbWUgfHwgIWVtYWlsLmluY2x1ZGVzKCdAJykgfHwgIXBhc3N3b3JkICApIHtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoIDQwMCApLnNlbmQoIFwiRG9ubsOpZXMgbWFucXVhbnRlc1wiICk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAvLyBPbiB2w6lyaWZpZSBxdWUgbCd1dGlsaXNhdGV1ciBuJ2V4aXN0ZSBwYXMgZMOpasOgIGV0IHF1ZSBzb24gZW1haWwgbidlc3QgcGFzIGTDqWrDoCB1dGlsaXPDqVxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBQcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICB9XG4gICAgfSlcbiAgICAvLyBPbiBoYXNoIGxlIG1vdCBkZSBwYXNzZVxuICAgIGlmICh1c2VyKXtcbiAgICAgICAgcmVzLnN0YXR1cyggNTAwICkuc2VuZCggXCJVdGlsaXNhdGV1ciBkw6lqw6AgZXhpc3RhbnRcIiApO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHN0YXR1cyAgPSBhd2FpdCBQcmlzbWEudXNlci5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IGF3YWl0IGhhc2goIHBhc3N3b3JkLCA4ICksXG4gICAgICAgIH1cbiAgICB9KVxuICAgIGF3YWl0IFByaXNtYS4kZGlzY29ubmVjdCgpO1xuICAgIFxuICAgIHJlcy5zdGF0dXMoIDIwMCApLmpzb24oeyBtZXNzYWdlOiAnQ29tcHRlIGNyw6nDqScgfSk7XG4gICAgfVxuXG59Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImhhc2giLCJ1c2VDb29raWVzIiwicmVxIiwicmVzIiwibWV0aG9kIiwiUHJpc21hIiwidXNlcm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiYm9keSIsImluY2x1ZGVzIiwic3RhdHVzIiwic2VuZCIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJjcmVhdGUiLCJkYXRhIiwiJGRpc2Nvbm5lY3QiLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/signup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/signup.js"));
module.exports = __webpack_exports__;

})();