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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  // On accepte seulement les requêtes POST\n  if (req.method === \"POST\") {\n    const Prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient(); // On récupère toutes les infos utisateurs\n\n    const {\n      username,\n      email,\n      password,\n      bio,\n      localisation\n    } = req.body; // Validation des données\n\n    if (!username || !email.includes('@') || !password) {\n      res.status(400).send(\"Données manquantes\");\n      return;\n    } // On vérifie que l'utilisateur n'existe pas déjà et que son email n'est pas déjà utilisé\n\n\n    const user = await Prisma.user.findUnique({\n      where: {\n        username\n      }\n    }); // On hash le mot de passe\n\n    if (user) {\n      res.status(500).send(\"Utilisateur déjà existant\");\n      return;\n    }\n\n    const status = await Prisma.user.create({\n      data: {\n        username,\n        email,\n        password: await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_1__.hash)(password, 8),\n        bio,\n        localisation\n      }\n    }); // afficher un toast de succès\n\n    await Prisma.$disconnect();\n    res.status(200).json({\n      message: 'Compte créé'\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9zaWdudXAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0EsNkJBQWUsMENBQWdCRSxHQUFoQixFQUFxQkMsR0FBckIsRUFBMkI7RUFDdEM7RUFDQSxJQUFLRCxHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFwQixFQUE2QjtJQUN6QixNQUFNQyxNQUFNLEdBQUcsSUFBSUwsd0RBQUosRUFBZixDQUR5QixDQUV6Qjs7SUFDQSxNQUFNO01BQUVNLFFBQUY7TUFBWUMsS0FBWjtNQUFtQkMsUUFBbkI7TUFBNkJDLEdBQTdCO01BQWtDQztJQUFsQyxJQUFrRFIsR0FBRyxDQUFDUyxJQUE1RCxDQUh5QixDQUl6Qjs7SUFDQSxJQUFLLENBQUNMLFFBQUQsSUFBYSxDQUFDQyxLQUFLLENBQUNLLFFBQU4sQ0FBZSxHQUFmLENBQWQsSUFBcUMsQ0FBQ0osUUFBM0MsRUFBdUQ7TUFDbkRMLEdBQUcsQ0FBQ1UsTUFBSixDQUFZLEdBQVosRUFBa0JDLElBQWxCLENBQXdCLG9CQUF4QjtNQUNBO0lBQ0gsQ0FSd0IsQ0FTN0I7OztJQUNBLE1BQU1DLElBQUksR0FBRyxNQUFNVixNQUFNLENBQUNVLElBQVAsQ0FBWUMsVUFBWixDQUF1QjtNQUN0Q0MsS0FBSyxFQUFFO1FBQ0hYO01BREc7SUFEK0IsQ0FBdkIsQ0FBbkIsQ0FWNkIsQ0FlN0I7O0lBQ0EsSUFBSVMsSUFBSixFQUFTO01BQ0xaLEdBQUcsQ0FBQ1UsTUFBSixDQUFZLEdBQVosRUFBa0JDLElBQWxCLENBQXdCLDJCQUF4QjtNQUNBO0lBQ0g7O0lBQ0QsTUFBTUQsTUFBTSxHQUFJLE1BQU1SLE1BQU0sQ0FBQ1UsSUFBUCxDQUFZRyxNQUFaLENBQW1CO01BQ3JDQyxJQUFJLEVBQUU7UUFDRmIsUUFERTtRQUVGQyxLQUZFO1FBR0ZDLFFBQVEsRUFBRSxNQUFNUCw4Q0FBSSxDQUFFTyxRQUFGLEVBQVksQ0FBWixDQUhsQjtRQUlGQyxHQUpFO1FBS0ZDO01BTEU7SUFEK0IsQ0FBbkIsQ0FBdEIsQ0FwQjZCLENBNkI3Qjs7SUFDQSxNQUFNTCxNQUFNLENBQUNlLFdBQVAsRUFBTjtJQUVBakIsR0FBRyxDQUFDVSxNQUFKLENBQVksR0FBWixFQUFrQlEsSUFBbEIsQ0FBdUI7TUFBRUMsT0FBTyxFQUFFO0lBQVgsQ0FBdkI7RUFDQztBQUVKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmVzdGl2YWwtYXBwLy4vcGFnZXMvYXBpL2F1dGgvc2lnbnVwLmpzP2EyYTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgIFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgaGFzaCB9IGZyb20gXCJiY3J5cHRqc1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uKCByZXEsIHJlcyApIHtcbiAgICAvLyBPbiBhY2NlcHRlIHNldWxlbWVudCBsZXMgcmVxdcOqdGVzIFBPU1RcbiAgICBpZiAoIHJlcS5tZXRob2QgPT09IFwiUE9TVFwiICkge1xuICAgICAgICBjb25zdCBQcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gICAgICAgIC8vIE9uIHLDqWN1cMOocmUgdG91dGVzIGxlcyBpbmZvcyB1dGlzYXRldXJzXG4gICAgICAgIGNvbnN0IHsgdXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZCwgYmlvLCBsb2NhbGlzYXRpb259ID0gcmVxLmJvZHk7XG4gICAgICAgIC8vIFZhbGlkYXRpb24gZGVzIGRvbm7DqWVzXG4gICAgICAgIGlmICggIXVzZXJuYW1lIHx8ICFlbWFpbC5pbmNsdWRlcygnQCcpIHx8ICFwYXNzd29yZCAgKSB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKCA0MDAgKS5zZW5kKCBcIkRvbm7DqWVzIG1hbnF1YW50ZXNcIiApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgLy8gT24gdsOpcmlmaWUgcXVlIGwndXRpbGlzYXRldXIgbidleGlzdGUgcGFzIGTDqWrDoCBldCBxdWUgc29uIGVtYWlsIG4nZXN0IHBhcyBkw6lqw6AgdXRpbGlzw6lcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgUHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLy8gT24gaGFzaCBsZSBtb3QgZGUgcGFzc2VcbiAgICBpZiAodXNlcil7XG4gICAgICAgIHJlcy5zdGF0dXMoIDUwMCApLnNlbmQoIFwiVXRpbGlzYXRldXIgZMOpasOgIGV4aXN0YW50XCIgKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzdGF0dXMgID0gYXdhaXQgUHJpc21hLnVzZXIuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBhd2FpdCBoYXNoKCBwYXNzd29yZCwgOCApLFxuICAgICAgICAgICAgYmlvLFxuICAgICAgICAgICAgbG9jYWxpc2F0aW9uXG4gICAgICAgIH1cbiAgICB9KVxuICAgIC8vIGFmZmljaGVyIHVuIHRvYXN0IGRlIHN1Y2PDqHNcbiAgICBhd2FpdCBQcmlzbWEuJGRpc2Nvbm5lY3QoKTtcbiAgICBcbiAgICByZXMuc3RhdHVzKCAyMDAgKS5qc29uKHsgbWVzc2FnZTogJ0NvbXB0ZSBjcsOpw6knIH0pO1xuICAgIH1cblxufSJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJoYXNoIiwicmVxIiwicmVzIiwibWV0aG9kIiwiUHJpc21hIiwidXNlcm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiYmlvIiwibG9jYWxpc2F0aW9uIiwiYm9keSIsImluY2x1ZGVzIiwic3RhdHVzIiwic2VuZCIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJjcmVhdGUiLCJkYXRhIiwiJGRpc2Nvbm5lY3QiLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/signup.js\n");

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