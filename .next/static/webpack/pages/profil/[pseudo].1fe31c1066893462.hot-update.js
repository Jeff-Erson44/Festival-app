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

/***/ "./components/Dashboard.js":
/*!*********************************!*\
  !*** ./components/Dashboard.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var _Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Applications/MAMP/htdocs/Festival-app/components/Dashboard.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Dashboard() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(),\n      user = _useState[0],\n      setUser = _useState[1];\n\n  var _useCookies = (0,react_cookie__WEBPACK_IMPORTED_MODULE_6__.useCookies)(['user']),\n      _useCookies2 = (0,_Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useCookies, 2),\n      cookies = _useCookies2[0],\n      setCookie = _useCookies2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    setUser(cookies.user);\n  }, [cookies.user]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"container\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"container__profil\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h2\", {\n          children: \"Mon profil\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          className: \"container__profil--info\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n            className: \"profil\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n              children: user === null || user === void 0 ? void 0 : user.username\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 24,\n              columnNumber: 29\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n              children: user === null || user === void 0 ? void 0 : user.localisation\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 25,\n              columnNumber: 29\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n              children: \" 4 posts, 354 likes\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 26,\n              columnNumber: 29\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n              children: user === null || user === void 0 ? void 0 : user.bio\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 27,\n              columnNumber: 29\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n            className: \"photo\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n              src: user === null || user === void 0 ? void 0 : user.image,\n              width: 200,\n              height: 200\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 30,\n              columnNumber: 29\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }, this)\n  }, void 0, false);\n}\n\n_s(Dashboard, \"e1Nabzklipww9MF6VQwlwjO5W+g=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter, react_cookie__WEBPACK_IMPORTED_MODULE_6__.useCookies];\n});\n\n_c = Dashboard;\n\nvar _c;\n\n$RefreshReg$(_c, \"Dashboard\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Rhc2hib2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdlLFNBQVNPLFNBQVQsR0FBcUI7RUFBQTs7RUFDaEMsSUFBTUMsTUFBTSxHQUFHSixzREFBUyxFQUF4Qjs7RUFDQSxnQkFBd0JFLCtDQUFRLEVBQWhDO0VBQUEsSUFBT0csSUFBUDtFQUFBLElBQWFDLE9BQWI7O0VBQ0Esa0JBQTZCUCx3REFBVSxDQUFDLENBQUMsTUFBRCxDQUFELENBQXZDO0VBQUE7RUFBQSxJQUFPUSxPQUFQO0VBQUEsSUFBZ0JDLFNBQWhCOztFQUNBUCxnREFBUyxDQUFDLFlBQU07SUFDWkssT0FBTyxDQUFDQyxPQUFPLENBQUNGLElBQVQsQ0FBUDtFQUNILENBRlEsRUFFTCxDQUFDRSxPQUFPLENBQUNGLElBQVQsQ0FGSyxDQUFUO0VBSUEsb0JBQ0k7SUFBQSx1QkFDSTtNQUFLLFNBQVMsRUFBQyxXQUFmO01BQUEsdUJBQ0k7UUFBSyxTQUFTLEVBQUMsbUJBQWY7UUFBQSx3QkFDSTtVQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQSxRQURKLGVBRUk7VUFBSyxTQUFTLEVBQUMseUJBQWY7VUFBQSx3QkFDSTtZQUFLLFNBQVMsRUFBQyxRQUFmO1lBQUEsd0JBQ0k7Y0FBQSxVQUFJQSxJQUFKLGFBQUlBLElBQUosdUJBQUlBLElBQUksQ0FBRUk7WUFBVjtjQUFBO2NBQUE7Y0FBQTtZQUFBLFFBREosZUFFSTtjQUFBLFVBQUlKLElBQUosYUFBSUEsSUFBSix1QkFBSUEsSUFBSSxDQUFFSztZQUFWO2NBQUE7Y0FBQTtjQUFBO1lBQUEsUUFGSixlQUdJO2NBQUE7WUFBQTtjQUFBO2NBQUE7Y0FBQTtZQUFBLFFBSEosZUFJSTtjQUFBLFVBQUlMLElBQUosYUFBSUEsSUFBSix1QkFBSUEsSUFBSSxDQUFFTTtZQUFWO2NBQUE7Y0FBQTtjQUFBO1lBQUEsUUFKSjtVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUEsUUFESixlQU9JO1lBQUssU0FBUyxFQUFDLE9BQWY7WUFBQSx1QkFDSSw4REFBQyxtREFBRDtjQUFPLEdBQUcsRUFBRU4sSUFBRixhQUFFQSxJQUFGLHVCQUFFQSxJQUFJLENBQUVPLEtBQWxCO2NBQXlCLEtBQUssRUFBRSxHQUFoQztjQUFxQyxNQUFNLEVBQUU7WUFBN0M7Y0FBQTtjQUFBO2NBQUE7WUFBQTtVQURKO1lBQUE7WUFBQTtZQUFBO1VBQUEsUUFQSjtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsUUFGSjtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFESjtNQUFBO01BQUE7TUFBQTtJQUFBO0VBREosaUJBREo7QUFvQkg7O0dBNUJ1QlQ7VUFDTEgsb0RBRWNEOzs7S0FIVEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXNoYm9hcmQuanM/NDRlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSAncmVhY3QtY29va2llJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFtjb29raWVzLCBzZXRDb29raWVdID0gdXNlQ29va2llcyhbJ3VzZXInXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0VXNlcihjb29raWVzLnVzZXIpXG4gICAgfSAsIFtjb29raWVzLnVzZXJdKVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcl9fcHJvZmlsJz5cbiAgICAgICAgICAgICAgICAgICAgPGgyPk1vbiBwcm9maWw8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyX19wcm9maWwtLWluZm8nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2ZpbCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3VzZXI/LnVzZXJuYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dXNlcj8ubG9jYWxpc2F0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4gNCBwb3N0cywgMzU0IGxpa2VzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt1c2VyPy5iaW99PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGhvdG8nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3VzZXI/LmltYWdlfSB3aWR0aD17MjAwfSBoZWlnaHQ9ezIwMH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG4iXSwibmFtZXMiOlsic3R5bGVkIiwiTGluayIsIkltYWdlIiwidXNlQ29va2llcyIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRGFzaGJvYXJkIiwicm91dGVyIiwidXNlciIsInNldFVzZXIiLCJjb29raWVzIiwic2V0Q29va2llIiwidXNlcm5hbWUiLCJsb2NhbGlzYXRpb24iLCJiaW8iLCJpbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Dashboard.js\n"));

/***/ })

});