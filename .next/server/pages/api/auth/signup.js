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

/***/ "(api)/./pages/api/auth/signup.js":
/*!**********************************!*\
  !*** ./pages/api/auth/signup.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  // On accepte seulement les requêtes POST\n  if (req.method === \"POST\") {\n    const Prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient(); // On récupère toutes les infos utisateurs\n\n    const {\n      username,\n      email,\n      password\n    } = req.body; // Validation des données\n\n    if (!username || !email.includes('@') || !password) {\n      res.status(400).send(\"Données manquantes\");\n      return;\n    } // On vérifie que l'utilisateur n'existe pas déjà et que son email n'est pas déjà utilisé\n\n\n    const user = await Prisma.user.findUnique({\n      where: {\n        username\n      }\n    }); // On hash le mot de passe\n\n    if (user) {\n      res.status(500).send(\"Utilisateur déjà existant\");\n      return;\n    }\n\n    const status = await Prisma.user.create({\n      data: {\n        username,\n        email,\n        password: await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_1__.hash)(password, 8)\n      }\n    });\n    await Prisma.$disconnect();\n    res.status(200).json({\n      message: 'Compte créé'\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9zaWdudXAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsNkJBQWUsMENBQWdCRSxHQUFoQixFQUFxQkMsR0FBckIsRUFBMkI7RUFDdEM7RUFDQSxJQUFLRCxHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFwQixFQUE2QjtJQUN6QixNQUFNQyxNQUFNLEdBQUcsSUFBSUwsd0RBQUosRUFBZixDQUR5QixDQUV6Qjs7SUFDQSxNQUFNO01BQUVNLFFBQUY7TUFBWUMsS0FBWjtNQUFtQkM7SUFBbkIsSUFBZ0NOLEdBQUcsQ0FBQ08sSUFBMUMsQ0FIeUIsQ0FJekI7O0lBQ0EsSUFBSyxDQUFDSCxRQUFELElBQWEsQ0FBQ0MsS0FBSyxDQUFDRyxRQUFOLENBQWUsR0FBZixDQUFkLElBQXFDLENBQUNGLFFBQTNDLEVBQXVEO01BQ25ETCxHQUFHLENBQUNRLE1BQUosQ0FBWSxHQUFaLEVBQWtCQyxJQUFsQixDQUF3QixvQkFBeEI7TUFDQTtJQUNILENBUndCLENBVTdCOzs7SUFDQSxNQUFNQyxJQUFJLEdBQUcsTUFBTVIsTUFBTSxDQUFDUSxJQUFQLENBQVlDLFVBQVosQ0FBdUI7TUFDdENDLEtBQUssRUFBRTtRQUNIVDtNQURHO0lBRCtCLENBQXZCLENBQW5CLENBWDZCLENBZ0I3Qjs7SUFFQSxJQUFJTyxJQUFKLEVBQVM7TUFDTFYsR0FBRyxDQUFDUSxNQUFKLENBQVksR0FBWixFQUFrQkMsSUFBbEIsQ0FBd0IsMkJBQXhCO01BQ0E7SUFDSDs7SUFFRCxNQUFNRCxNQUFNLEdBQUksTUFBTU4sTUFBTSxDQUFDUSxJQUFQLENBQVlHLE1BQVosQ0FBbUI7TUFDckNDLElBQUksRUFBRTtRQUNGWCxRQURFO1FBRUZDLEtBRkU7UUFHRkMsUUFBUSxFQUFFLE1BQU1QLDhDQUFJLENBQUVPLFFBQUYsRUFBWSxDQUFaO01BSGxCO0lBRCtCLENBQW5CLENBQXRCO0lBT0EsTUFBTUgsTUFBTSxDQUFDYSxXQUFQLEVBQU47SUFDQWYsR0FBRyxDQUFDUSxNQUFKLENBQVksR0FBWixFQUFrQlEsSUFBbEIsQ0FBdUI7TUFBRUMsT0FBTyxFQUFFO0lBQVgsQ0FBdkI7RUFDQztBQUVKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmVzdGl2YWwtYXBwLy4vcGFnZXMvYXBpL2F1dGgvc2lnbnVwLmpzP2EyYTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgIFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgaGFzaCB9IGZyb20gXCJiY3J5cHRqc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiggcmVxLCByZXMgKSB7XG4gICAgLy8gT24gYWNjZXB0ZSBzZXVsZW1lbnQgbGVzIHJlcXXDqnRlcyBQT1NUXG4gICAgaWYgKCByZXEubWV0aG9kID09PSBcIlBPU1RcIiApIHtcbiAgICAgICAgY29uc3QgUHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICAgICAgICAvLyBPbiByw6ljdXDDqHJlIHRvdXRlcyBsZXMgaW5mb3MgdXRpc2F0ZXVyc1xuICAgICAgICBjb25zdCB7IHVzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xuICAgICAgICAvLyBWYWxpZGF0aW9uIGRlcyBkb25uw6llc1xuICAgICAgICBpZiAoICF1c2VybmFtZSB8fCAhZW1haWwuaW5jbHVkZXMoJ0AnKSB8fCAhcGFzc3dvcmQgICkge1xuICAgICAgICAgICAgcmVzLnN0YXR1cyggNDAwICkuc2VuZCggXCJEb25uw6llcyBtYW5xdWFudGVzXCIgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIFxuICAgIC8vIE9uIHbDqXJpZmllIHF1ZSBsJ3V0aWxpc2F0ZXVyIG4nZXhpc3RlIHBhcyBkw6lqw6AgZXQgcXVlIHNvbiBlbWFpbCBuJ2VzdCBwYXMgZMOpasOgIHV0aWxpc8OpXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC8vIE9uIGhhc2ggbGUgbW90IGRlIHBhc3NlXG5cbiAgICBpZiAodXNlcil7XG4gICAgICAgIHJlcy5zdGF0dXMoIDUwMCApLnNlbmQoIFwiVXRpbGlzYXRldXIgZMOpasOgIGV4aXN0YW50XCIgKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXR1cyAgPSBhd2FpdCBQcmlzbWEudXNlci5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IGF3YWl0IGhhc2goIHBhc3N3b3JkLCA4ICksXG4gICAgICAgIH1cbiAgICB9KVxuICAgIGF3YWl0IFByaXNtYS4kZGlzY29ubmVjdCgpO1xuICAgIHJlcy5zdGF0dXMoIDIwMCApLmpzb24oeyBtZXNzYWdlOiAnQ29tcHRlIGNyw6nDqScgfSk7XG4gICAgfVxuXG59Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImhhc2giLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJQcmlzbWEiLCJ1c2VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJib2R5IiwiaW5jbHVkZXMiLCJzdGF0dXMiLCJzZW5kIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImNyZWF0ZSIsImRhdGEiLCIkZGlzY29ubmVjdCIsImpzb24iLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/signup.js\n");

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