"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profil/[pseudo]",{

/***/ "./pages/profil/[pseudo].js":
/*!**********************************!*\
  !*** ./pages/profil/[pseudo].js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Profil; }\n/* harmony export */ });\n/* harmony import */ var _Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Dashboard */ \"./components/Dashboard.js\");\n/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Login */ \"./components/Login.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\nvar _jsxFileName = \"/Applications/MAMP/htdocs/Festival-app/pages/profil/[pseudo].js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction Profil() {\n  _s();\n\n  var _useCookies = (0,react_cookie__WEBPACK_IMPORTED_MODULE_9__.useCookies)([\"user\"]),\n      _useCookies2 = (0,_Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useCookies, 2),\n      cookies = _useCookies2[0],\n      setcookies = _useCookies2[1];\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(),\n      user = _useState[0],\n      setUser = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    setUser(cookies.user);\n  }, [cookies.user]);\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(),\n      Img = _useState2[0],\n      setImg = _useState2[1];\n\n  var handleForm = /*#__PURE__*/function () {\n    var _ref = (0,_Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(e) {\n      var _cookies$user;\n\n      var Data, res, data;\n      return _Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              Data = new FormData();\n              Data.append(\"image\", Img);\n              _context.next = 5;\n              return fetch(\"/api/profil/\".concat(cookies === null || cookies === void 0 ? void 0 : (_cookies$user = cookies.user) === null || _cookies$user === void 0 ? void 0 : _cookies$user.username), {\n                method: \"POST\",\n                body: Data\n              });\n\n            case 5:\n              res = _context.sent;\n              _context.next = 8;\n              return res.json();\n\n            case 8:\n              data = _context.sent;\n\n              if (res.ok) {\n                setUser(data);\n                setcookies('user', JSON.stringify(json), {\n                  path: '/',\n                  maxAge: 1296000,\n                  sameSite: true\n                });\n              }\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleForm(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"title\", {\n        children: \"Festiv'app - JK profil\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Dashboard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }, this), \"// quand l'utilisateuer n'est pas connect\\xE9 on affiche login\", user ? 'vous etes connecté' : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Login__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 47\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Profil, \"Vwrb7/QFlM8sFJUbXcSe5OQaYVI=\", false, function () {\n  return [react_cookie__WEBPACK_IMPORTED_MODULE_9__.useCookies];\n});\n\n_c = Profil;\n\nvar _c;\n\n$RefreshReg$(_c, \"Profil\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9maWwvW3BzZXVkb10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBSWUsU0FBU1EsTUFBVCxHQUFrQjtFQUFBOztFQUU3QixrQkFBOEJQLHdEQUFVLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBeEM7RUFBQTtFQUFBLElBQU9RLE9BQVA7RUFBQSxJQUFnQkMsVUFBaEI7O0VBQ0EsZ0JBQXdCUiwrQ0FBUSxFQUFoQztFQUFBLElBQU9TLElBQVA7RUFBQSxJQUFhQyxPQUFiOztFQUNBVCxnREFBUyxDQUFDLFlBQU07SUFDWlMsT0FBTyxDQUFDSCxPQUFPLENBQUNFLElBQVQsQ0FBUDtFQUNILENBRlEsRUFFTCxDQUFDRixPQUFPLENBQUNFLElBQVQsQ0FGSyxDQUFUOztFQUdBLGlCQUF1QlQsK0NBQVEsRUFBL0I7RUFBQSxJQUFPVyxHQUFQO0VBQUEsSUFBYUMsTUFBYjs7RUFFQSxJQUFNQyxVQUFVO0lBQUEsZ1ZBQUcsaUJBQU9DLENBQVA7TUFBQTs7TUFBQTtNQUFBO1FBQUE7VUFBQTtZQUFBO2NBQ2ZBLENBQUMsQ0FBQ0MsY0FBRjtjQUNNQyxJQUZTLEdBRUYsSUFBSUMsUUFBSixFQUZFO2NBR2ZELElBQUksQ0FBQ0UsTUFBTCxDQUFZLE9BQVosRUFBcUJQLEdBQXJCO2NBSGU7Y0FBQSxPQUlHUSxLQUFLLHVCQUFnQlosT0FBaEIsYUFBZ0JBLE9BQWhCLHdDQUFnQkEsT0FBTyxDQUFFRSxJQUF6QixrREFBZ0IsY0FBZVcsUUFBL0IsR0FBMkM7Z0JBQzlEQyxNQUFNLEVBQUUsTUFEc0Q7Z0JBRTlEQyxJQUFJLEVBQUVOO2NBRndELENBQTNDLENBSlI7O1lBQUE7Y0FJVE8sR0FKUztjQUFBO2NBQUEsT0FRSUEsR0FBRyxDQUFDQyxJQUFKLEVBUko7O1lBQUE7Y0FRVEMsSUFSUzs7Y0FTZixJQUFJRixHQUFHLENBQUNHLEVBQVIsRUFBWTtnQkFDUmhCLE9BQU8sQ0FBQ2UsSUFBRCxDQUFQO2dCQUNBakIsVUFBVSxDQUFDLE1BQUQsRUFBUW1CLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixJQUFmLENBQVIsRUFBNkI7a0JBQ25DSyxJQUFJLEVBQUMsR0FEOEI7a0JBRW5DQyxNQUFNLEVBQUMsT0FGNEI7a0JBR25DQyxRQUFRLEVBQUM7Z0JBSDBCLENBQTdCLENBQVY7Y0FLSDs7WUFoQmM7WUFBQTtjQUFBO1VBQUE7UUFBQTtNQUFBO0lBQUEsQ0FBSDs7SUFBQSxnQkFBVmxCLFVBQVU7TUFBQTtJQUFBO0VBQUEsR0FBaEI7O0VBa0JBLG9CQUNJO0lBQUEsd0JBQ0ksOERBQUMsa0RBQUQ7TUFBQSx1QkFDSTtRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURKO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFESixlQUlJLDhEQUFDLDZEQUFEO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFKSixvRUFPS0osSUFBSSxHQUFJLG9CQUFKLGdCQUE2Qiw4REFBQyx5REFBRDtNQUFBO01BQUE7TUFBQTtJQUFBLFFBUHRDO0VBQUEsZ0JBREo7QUFZSDs7R0F2Q3VCSDtVQUVVUDs7O0tBRlZPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2ZpbC9bcHNldWRvXS5qcz8yNzNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gXCJyZWFjdC1jb29raWVcIlxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiXG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Rhc2hib2FyZFwiXG5pbXBvcnQgTG9naW4gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTG9naW5cIlxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsKCkge1xuXG4gICAgY29uc3QgW2Nvb2tpZXMsIHNldGNvb2tpZXNdID0gdXNlQ29va2llcyhbXCJ1c2VyXCJdKVxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKClcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRVc2VyKGNvb2tpZXMudXNlcilcbiAgICB9ICwgW2Nvb2tpZXMudXNlcl0pXG4gICAgY29uc3QgW0ltZyAsIHNldEltZ10gPSB1c2VTdGF0ZSgpXG5cbiAgICBjb25zdCBoYW5kbGVGb3JtID0gYXN5bmMgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbnN0IERhdGEgPSBuZXcgRm9ybURhdGEoKVxuICAgICAgICBEYXRhLmFwcGVuZChcImltYWdlXCIsIEltZylcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYC9hcGkvcHJvZmlsLyR7Y29va2llcz8udXNlcj8udXNlcm5hbWV9YCwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGJvZHk6IERhdGEsXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICAgIHNldFVzZXIoZGF0YSlcbiAgICAgICAgICAgIHNldGNvb2tpZXMoJ3VzZXInLEpTT04uc3RyaW5naWZ5KGpzb24pLHtcbiAgICAgICAgICAgICAgICBwYXRoOicvJyxcbiAgICAgICAgICAgICAgICBtYXhBZ2U6MTI5NjAwMCxcbiAgICAgICAgICAgICAgICBzYW1lU2l0ZTp0cnVlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+RmVzdGl2JmFwb3M7YXBwIC0gSksgcHJvZmlsPC90aXRsZT5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxEYXNoYm9hcmQvPlxuXG4gICAgICAgICAgICAvLyBxdWFuZCBsJ3V0aWxpc2F0ZXVlciBuJ2VzdCBwYXMgY29ubmVjdMOpIG9uIGFmZmljaGUgbG9naW4gXG4gICAgICAgICAgICB7dXNlciA/ICgndm91cyBldGVzIGNvbm5lY3TDqScpIDogKDxMb2dpbi8+KX1cblxuICAgICAgICA8Lz5cbiAgICApXG59XG5cblxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VDb29raWVzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwiUHJpc21hQ2xpZW50IiwiRGFzaGJvYXJkIiwiTG9naW4iLCJQcm9maWwiLCJjb29raWVzIiwic2V0Y29va2llcyIsInVzZXIiLCJzZXRVc2VyIiwiSW1nIiwic2V0SW1nIiwiaGFuZGxlRm9ybSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIkRhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZldGNoIiwidXNlcm5hbWUiLCJtZXRob2QiLCJib2R5IiwicmVzIiwianNvbiIsImRhdGEiLCJvayIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXRoIiwibWF4QWdlIiwic2FtZVNpdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/profil/[pseudo].js\n"));

/***/ })

});