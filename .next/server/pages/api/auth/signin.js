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
exports.id = "pages/api/auth/signin";
exports.ids = ["pages/api/auth/signin"];
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

/***/ "(api)/./pages/api/auth/signin.js":
/*!**********************************!*\
  !*** ./pages/api/auth/signin.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function handler(req, res) {\n  if (req.method === 'POST') {\n    const {\n      username,\n      password\n    } = req.body;\n\n    if (!username || !password) {\n      res.status(400).send('Données manquantes');\n      return;\n    } // on cherche dans la base de données l'utilisateur avec le username correspondant\n\n\n    const passwordUser = await prisma.user.findUnique({\n      where: {\n        username\n      }\n    });\n\n    if (passwordUser) {\n      const isValid = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_1__.compare)(password, passwordUser.password);\n\n      if (!isValid) {\n        res.status(400).send('Mot de passe ou nom d\\'utilisateur incorrect');\n      } else {\n        res.status(200).json({\n          username: passwordUser.username,\n          email: passwordUser.email,\n          id: passwordUser.id,\n          createdAt: passwordUser.createdAt\n        });\n        await prisma.$disconnect();\n      }\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9zaWduaW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsTUFBTUUsTUFBTSxHQUFHLElBQUlGLHdEQUFKLEVBQWY7QUFFZSxlQUFlRyxPQUFmLENBQ1hDLEdBRFcsRUFDTkMsR0FETSxFQUVkO0VBR0csSUFBR0QsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbEIsRUFBeUI7SUFDckIsTUFBTTtNQUFFQyxRQUFGO01BQWFDO0lBQWIsSUFBMEJKLEdBQUcsQ0FBQ0ssSUFBcEM7O0lBQ0EsSUFBRyxDQUFDRixRQUFELElBQWMsQ0FBQ0MsUUFBbEIsRUFBMkI7TUFDdkJILEdBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLG9CQUFyQjtNQUNBO0lBQ0gsQ0FMb0IsQ0FPckI7OztJQUNBLE1BQU1DLFlBQVksR0FBRyxNQUFNVixNQUFNLENBQUNXLElBQVAsQ0FBWUMsVUFBWixDQUF1QjtNQUM5Q0MsS0FBSyxFQUFFO1FBQ0hSO01BREc7SUFEdUMsQ0FBdkIsQ0FBM0I7O0lBTUEsSUFBR0ssWUFBSCxFQUFnQjtNQUNaLE1BQU1JLE9BQU8sR0FBRyxNQUFNZixpREFBTyxDQUFDTyxRQUFELEVBQVdJLFlBQVksQ0FBQ0osUUFBeEIsQ0FBN0I7O01BQ0EsSUFBRyxDQUFDUSxPQUFKLEVBQVk7UUFDUlgsR0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUIsOENBQXJCO01BQ0gsQ0FGRCxNQUVLO1FBQ0ROLEdBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JPLElBQWhCLENBQXFCO1VBQ2pCVixRQUFRLEVBQUdLLFlBQVksQ0FBQ0wsUUFEUDtVQUVqQlcsS0FBSyxFQUFHTixZQUFZLENBQUNNLEtBRko7VUFHakJDLEVBQUUsRUFBRVAsWUFBWSxDQUFDTyxFQUhBO1VBSWpCQyxTQUFTLEVBQUVSLFlBQVksQ0FBQ1E7UUFKUCxDQUFyQjtRQU9BLE1BQU1sQixNQUFNLENBQUNtQixXQUFQLEVBQU47TUFDSDtJQUNKO0VBQ0o7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zlc3RpdmFsLWFwcC8uL3BhZ2VzL2FwaS9hdXRoL3NpZ25pbi5qcz84YjE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tICdiY3J5cHRqcyc7XG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgICByZXEsIHJlc1xuKXtcblxuXG4gICAgaWYocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKXtcbiAgICAgICAgY29uc3QgeyB1c2VybmFtZSwgIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcbiAgICAgICAgaWYoIXVzZXJuYW1lIHx8ICAhcGFzc3dvcmQpe1xuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoJ0Rvbm7DqWVzIG1hbnF1YW50ZXMnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG9uIGNoZXJjaGUgZGFucyBsYSBiYXNlIGRlIGRvbm7DqWVzIGwndXRpbGlzYXRldXIgYXZlYyBsZSB1c2VybmFtZSBjb3JyZXNwb25kYW50XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkVXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYocGFzc3dvcmRVc2VyKXtcbiAgICAgICAgICAgIGNvbnN0IGlzVmFsaWQgPSBhd2FpdCBjb21wYXJlKHBhc3N3b3JkLCBwYXNzd29yZFVzZXIucGFzc3dvcmQpO1xuICAgICAgICAgICAgaWYoIWlzVmFsaWQpe1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdNb3QgZGUgcGFzc2Ugb3Ugbm9tIGRcXCd1dGlsaXNhdGV1ciBpbmNvcnJlY3QnKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWUgOiBwYXNzd29yZFVzZXIudXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsIDogcGFzc3dvcmRVc2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICBpZDogcGFzc3dvcmRVc2VyLmlkLFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6IHBhc3N3b3JkVXNlci5jcmVhdGVkQXQsXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiY29tcGFyZSIsInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiYm9keSIsInN0YXR1cyIsInNlbmQiLCJwYXNzd29yZFVzZXIiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiaXNWYWxpZCIsImpzb24iLCJlbWFpbCIsImlkIiwiY3JlYXRlZEF0IiwiJGRpc2Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/signin.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/signin.js"));
module.exports = __webpack_exports__;

})();