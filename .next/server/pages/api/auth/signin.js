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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function handler(req, res) {\n  if (req.method === 'POST') {\n    const {\n      username,\n      password\n    } = req.body;\n\n    if (!username || !password) {\n      res.status(400).send('Données manquantes');\n      return;\n    } // on cherche dans la base de données l'utilisateur avec le username correspondant\n\n\n    const passwordUser = await prisma.user.findUnique({\n      where: {\n        username\n      }\n    });\n\n    if (passwordUser) {\n      const isValid = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_1__.compare)(password, passwordUser.password);\n\n      if (!isValid) {\n        res.status(400).send('Mot de passe ou nom d\\'utilisateur incorrect');\n      } else {\n        res.status(200).json({\n          username: passwordUser.username,\n          email: passwordUser.email,\n          id: passwordUser.id,\n          createdAt: passwordUser.createdAt,\n          image: passwordUser.image,\n          bio: passwordUser.bio,\n          location: passwordUser.location,\n          birthdate: passwordUser.birthdate\n        });\n        await prisma.$disconnect();\n        console.log('Vous êtes déconnecté');\n      }\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9zaWduaW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsTUFBTUUsTUFBTSxHQUFHLElBQUlGLHdEQUFKLEVBQWY7QUFFZSxlQUFlRyxPQUFmLENBQ1hDLEdBRFcsRUFDTkMsR0FETSxFQUVkO0VBR0csSUFBR0QsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbEIsRUFBeUI7SUFDckIsTUFBTTtNQUFFQyxRQUFGO01BQWFDO0lBQWIsSUFBMEJKLEdBQUcsQ0FBQ0ssSUFBcEM7O0lBQ0EsSUFBRyxDQUFDRixRQUFELElBQWMsQ0FBQ0MsUUFBbEIsRUFBMkI7TUFDdkJILEdBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLG9CQUFyQjtNQUNBO0lBQ0gsQ0FMb0IsQ0FPckI7OztJQUNBLE1BQU1DLFlBQVksR0FBRyxNQUFNVixNQUFNLENBQUNXLElBQVAsQ0FBWUMsVUFBWixDQUF1QjtNQUM5Q0MsS0FBSyxFQUFFO1FBQ0hSO01BREc7SUFEdUMsQ0FBdkIsQ0FBM0I7O0lBTUEsSUFBR0ssWUFBSCxFQUFnQjtNQUNaLE1BQU1JLE9BQU8sR0FBRyxNQUFNZixpREFBTyxDQUFDTyxRQUFELEVBQVdJLFlBQVksQ0FBQ0osUUFBeEIsQ0FBN0I7O01BQ0EsSUFBRyxDQUFDUSxPQUFKLEVBQVk7UUFDUlgsR0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUIsOENBQXJCO01BQ0gsQ0FGRCxNQUVLO1FBQ0ROLEdBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JPLElBQWhCLENBQXFCO1VBQ2pCVixRQUFRLEVBQUdLLFlBQVksQ0FBQ0wsUUFEUDtVQUVqQlcsS0FBSyxFQUFHTixZQUFZLENBQUNNLEtBRko7VUFHakJDLEVBQUUsRUFBR1AsWUFBWSxDQUFDTyxFQUhEO1VBSWpCQyxTQUFTLEVBQUdSLFlBQVksQ0FBQ1EsU0FKUjtVQUtqQkMsS0FBSyxFQUFHVCxZQUFZLENBQUNTLEtBTEo7VUFNakJDLEdBQUcsRUFBR1YsWUFBWSxDQUFDVSxHQU5GO1VBT2pCQyxRQUFRLEVBQUdYLFlBQVksQ0FBQ1csUUFQUDtVQVFqQkMsU0FBUyxFQUFHWixZQUFZLENBQUNZO1FBUlIsQ0FBckI7UUFVQSxNQUFNdEIsTUFBTSxDQUFDdUIsV0FBUCxFQUFOO1FBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaO01BQ0g7SUFDSjtFQUNKO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mZXN0aXZhbC1hcHAvLi9wYWdlcy9hcGkvYXV0aC9zaWduaW4uanM/OGIxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSAnYmNyeXB0anMnO1xuXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gICAgcmVxLCByZXNcbil7XG5cblxuICAgIGlmKHJlcS5tZXRob2QgPT09ICdQT1NUJyl7XG4gICAgICAgIGNvbnN0IHsgdXNlcm5hbWUsICBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XG4gICAgICAgIGlmKCF1c2VybmFtZSB8fCAgIXBhc3N3b3JkKXtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5zZW5kKCdEb25uw6llcyBtYW5xdWFudGVzJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBvbiBjaGVyY2hlIGRhbnMgbGEgYmFzZSBkZSBkb25uw6llcyBsJ3V0aWxpc2F0ZXVyIGF2ZWMgbGUgdXNlcm5hbWUgY29ycmVzcG9uZGFudFxuICAgICAgICBjb25zdCBwYXNzd29yZFVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKHBhc3N3b3JkVXNlcil7XG4gICAgICAgICAgICBjb25zdCBpc1ZhbGlkID0gYXdhaXQgY29tcGFyZShwYXNzd29yZCwgcGFzc3dvcmRVc2VyLnBhc3N3b3JkKTtcbiAgICAgICAgICAgIGlmKCFpc1ZhbGlkKXtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZCgnTW90IGRlIHBhc3NlIG91IG5vbSBkXFwndXRpbGlzYXRldXIgaW5jb3JyZWN0Jyk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lIDogcGFzc3dvcmRVc2VyLnVzZXJuYW1lLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbCA6IHBhc3N3b3JkVXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgaWQgOiBwYXNzd29yZFVzZXIuaWQsXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRBdCA6IHBhc3N3b3JkVXNlci5jcmVhdGVkQXQsXG4gICAgICAgICAgICAgICAgICAgIGltYWdlIDogcGFzc3dvcmRVc2VyLmltYWdlLFxuICAgICAgICAgICAgICAgICAgICBiaW8gOiBwYXNzd29yZFVzZXIuYmlvLFxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbiA6IHBhc3N3b3JkVXNlci5sb2NhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgYmlydGhkYXRlIDogcGFzc3dvcmRVc2VyLmJpcnRoZGF0ZSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1ZvdXMgw6p0ZXMgZMOpY29ubmVjdMOpJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImNvbXBhcmUiLCJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImJvZHkiLCJzdGF0dXMiLCJzZW5kIiwicGFzc3dvcmRVc2VyIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImlzVmFsaWQiLCJqc29uIiwiZW1haWwiLCJpZCIsImNyZWF0ZWRBdCIsImltYWdlIiwiYmlvIiwibG9jYXRpb24iLCJiaXJ0aGRhdGUiLCIkZGlzY29ubmVjdCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/signin.js\n");

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