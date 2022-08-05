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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function handler(req, res) {\n  if (req.method === 'POST') {\n    const {\n      username,\n      password\n    } = req.body;\n\n    if (!username || !password) {\n      res.status(400).send('Données manquantes');\n      return;\n    } // on cherche dans la base de données l'utilisateur avec le username correspondant\n\n\n    const passwordUser = await prisma.user.findUnique({\n      where: {\n        username\n      }\n    });\n\n    if (passwordUser) {\n      const isValid = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_1__.compare)(password, passwordUser.password);\n\n      if (!isValid) {\n        res.status(400).send('Mot de passe ou nom d\\'utilisateur incorrect');\n      } else {\n        res.status(200).json({\n          username: passwordUser.username,\n          email: passwordUser.email,\n          id: passwordUser.id,\n          createdAt: passwordUser.createdAt,\n          image: passwordUser.image,\n          bio: passwordUser.bio\n        });\n        await prisma.$disconnect();\n        console.log('Vous êtes déconnecté');\n      }\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9zaWduaW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsTUFBTUUsTUFBTSxHQUFHLElBQUlGLHdEQUFKLEVBQWY7QUFFZSxlQUFlRyxPQUFmLENBQ1hDLEdBRFcsRUFDTkMsR0FETSxFQUVkO0VBR0csSUFBR0QsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbEIsRUFBeUI7SUFDckIsTUFBTTtNQUFFQyxRQUFGO01BQWFDO0lBQWIsSUFBMEJKLEdBQUcsQ0FBQ0ssSUFBcEM7O0lBQ0EsSUFBRyxDQUFDRixRQUFELElBQWMsQ0FBQ0MsUUFBbEIsRUFBMkI7TUFDdkJILEdBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLG9CQUFyQjtNQUNBO0lBQ0gsQ0FMb0IsQ0FPckI7OztJQUNBLE1BQU1DLFlBQVksR0FBRyxNQUFNVixNQUFNLENBQUNXLElBQVAsQ0FBWUMsVUFBWixDQUF1QjtNQUM5Q0MsS0FBSyxFQUFFO1FBQ0hSO01BREc7SUFEdUMsQ0FBdkIsQ0FBM0I7O0lBTUEsSUFBR0ssWUFBSCxFQUFnQjtNQUNaLE1BQU1JLE9BQU8sR0FBRyxNQUFNZixpREFBTyxDQUFDTyxRQUFELEVBQVdJLFlBQVksQ0FBQ0osUUFBeEIsQ0FBN0I7O01BQ0EsSUFBRyxDQUFDUSxPQUFKLEVBQVk7UUFDUlgsR0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUIsOENBQXJCO01BQ0gsQ0FGRCxNQUVLO1FBQ0ROLEdBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JPLElBQWhCLENBQXFCO1VBQ2pCVixRQUFRLEVBQUdLLFlBQVksQ0FBQ0wsUUFEUDtVQUVqQlcsS0FBSyxFQUFHTixZQUFZLENBQUNNLEtBRko7VUFHakJDLEVBQUUsRUFBR1AsWUFBWSxDQUFDTyxFQUhEO1VBSWpCQyxTQUFTLEVBQUdSLFlBQVksQ0FBQ1EsU0FKUjtVQUtqQkMsS0FBSyxFQUFHVCxZQUFZLENBQUNTLEtBTEo7VUFNakJDLEdBQUcsRUFBR1YsWUFBWSxDQUFDVTtRQU5GLENBQXJCO1FBUUEsTUFBTXBCLE1BQU0sQ0FBQ3FCLFdBQVAsRUFBTjtRQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtNQUNIO0lBQ0o7RUFDSjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmVzdGl2YWwtYXBwLy4vcGFnZXMvYXBpL2F1dGgvc2lnbmluLmpzPzhiMTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuaW1wb3J0IHsgY29tcGFyZSB9IGZyb20gJ2JjcnlwdGpzJztcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICAgIHJlcSwgcmVzXG4pe1xuXG5cbiAgICBpZihyZXEubWV0aG9kID09PSAnUE9TVCcpe1xuICAgICAgICBjb25zdCB7IHVzZXJuYW1lLCAgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xuICAgICAgICBpZighdXNlcm5hbWUgfHwgICFwYXNzd29yZCl7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuc2VuZCgnRG9ubsOpZXMgbWFucXVhbnRlcycpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gb24gY2hlcmNoZSBkYW5zIGxhIGJhc2UgZGUgZG9ubsOpZXMgbCd1dGlsaXNhdGV1ciBhdmVjIGxlIHVzZXJuYW1lIGNvcnJlc3BvbmRhbnRcbiAgICAgICAgY29uc3QgcGFzc3dvcmRVc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZihwYXNzd29yZFVzZXIpe1xuICAgICAgICAgICAgY29uc3QgaXNWYWxpZCA9IGF3YWl0IGNvbXBhcmUocGFzc3dvcmQsIHBhc3N3b3JkVXNlci5wYXNzd29yZCk7XG4gICAgICAgICAgICBpZighaXNWYWxpZCl7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoJ01vdCBkZSBwYXNzZSBvdSBub20gZFxcJ3V0aWxpc2F0ZXVyIGluY29ycmVjdCcpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZSA6IHBhc3N3b3JkVXNlci51c2VybmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZW1haWwgOiBwYXNzd29yZFVzZXIuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgIGlkIDogcGFzc3dvcmRVc2VyLmlkLFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkQXQgOiBwYXNzd29yZFVzZXIuY3JlYXRlZEF0LFxuICAgICAgICAgICAgICAgICAgICBpbWFnZSA6IHBhc3N3b3JkVXNlci5pbWFnZSxcbiAgICAgICAgICAgICAgICAgICAgYmlvIDogcGFzc3dvcmRVc2VyLmJpbyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1ZvdXMgw6p0ZXMgZMOpY29ubmVjdMOpJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImNvbXBhcmUiLCJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImJvZHkiLCJzdGF0dXMiLCJzZW5kIiwicGFzc3dvcmRVc2VyIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImlzVmFsaWQiLCJqc29uIiwiZW1haWwiLCJpZCIsImNyZWF0ZWRBdCIsImltYWdlIiwiYmlvIiwiJGRpc2Nvbm5lY3QiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/signin.js\n");

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