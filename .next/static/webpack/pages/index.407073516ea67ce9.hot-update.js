"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _jsxFileName = \"/Applications/MAMP/htdocs/Festival-app/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _cookies$user,\n      _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),\n      Datas = _useState[0],\n      setDatas = _useState[1];\n\n  var _useCookies = (0,react_cookie__WEBPACK_IMPORTED_MODULE_6__.useCookies)(['user']),\n      _useCookies2 = (0,_Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useCookies, 2),\n      cookies = _useCookies2[0],\n      setcookies = _useCookies2[1];\n\n  var fetchData = /*#__PURE__*/function () {\n    var _ref = (0,_Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n      var response, json;\n      return _Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch(\"../api/post/getPost\");\n\n            case 2:\n              response = _context.sent;\n              _context.next = 5;\n              return response.json();\n\n            case 5:\n              json = _context.sent;\n              setDatas(json);\n\n            case 7:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetchData() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    fetchData();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"title\", {\n        children: \"Festiv'app JK\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h1\", {\n      children: \"Festival\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n      children: \"Test final : TS \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n        children: cookies === null || cookies === void 0 ? void 0 : (_cookies$user = cookies.user) === null || _cookies$user === void 0 ? void 0 : _cookies$user.username\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      children: Datas.map(function (_ref2) {\n        var id = _ref2.id,\n            description = _ref2.description,\n            content = _ref2.content,\n            nameFestival = _ref2.nameFestival;\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h3\", {\n            children: description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n            children: content\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n            children: nameFestival\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n            onClick: function onClick() {\n              return handleDeleteData(id);\n            },\n            children: \"Delete data\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 15\n          }, _this)]\n        }, id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Home, \"YWIr01b6vDmeDAUFE5egzIxmFqk=\", false, function () {\n  return [react_cookie__WEBPACK_IMPORTED_MODULE_6__.useCookies];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFZSxTQUFTSSxJQUFULEdBQWdCO0VBQUE7O0VBQUE7RUFBQTs7RUFFN0IsZ0JBQTBCRiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7RUFBQSxJQUFPRyxLQUFQO0VBQUEsSUFBY0MsUUFBZDs7RUFDQSxrQkFBOEJMLHdEQUFVLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBeEM7RUFBQTtFQUFBLElBQU9NLE9BQVA7RUFBQSxJQUFnQkMsVUFBaEI7O0VBQ0EsSUFBTUMsU0FBUztJQUFBLGdWQUFHO01BQUE7TUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2NBQUEsT0FDS0MsS0FBSyx1QkFEVjs7WUFBQTtjQUNaQyxRQURZO2NBQUE7Y0FBQSxPQUVDQSxRQUFRLENBQUNDLElBQVQsRUFGRDs7WUFBQTtjQUVaQSxJQUZZO2NBR2xCTixRQUFRLENBQUNNLElBQUQsQ0FBUjs7WUFIa0I7WUFBQTtjQUFBO1VBQUE7UUFBQTtNQUFBO0lBQUEsQ0FBSDs7SUFBQSxnQkFBVEgsU0FBUztNQUFBO0lBQUE7RUFBQSxHQUFmOztFQVFBTixnREFBUyxDQUFDLFlBQU07SUFDZE0sU0FBUztFQUNSLENBRk0sRUFFSixFQUZJLENBQVQ7RUFJQSxvQkFDRTtJQUFBLHdCQUNFLDhEQUFDLGtEQUFEO01BQUEsdUJBQ0U7UUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFERjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBREYsZUFLRTtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxRQUxGLGVBTUU7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFORixlQU9FO01BQUEsdUJBQ0U7UUFBQSxVQUFJRixPQUFKLGFBQUlBLE9BQUosd0NBQUlBLE9BQU8sQ0FBRU0sSUFBYixrREFBSSxjQUFlQztNQUFuQjtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQSxRQVBGLGVBWUU7TUFBQSxVQUNHVCxLQUFLLENBQUNVLEdBQU4sQ0FBVSxpQkFBNkM7UUFBQSxJQUEzQ0MsRUFBMkMsU0FBM0NBLEVBQTJDO1FBQUEsSUFBdkNDLFdBQXVDLFNBQXZDQSxXQUF1QztRQUFBLElBQTFCQyxPQUEwQixTQUExQkEsT0FBMEI7UUFBQSxJQUFqQkMsWUFBaUIsU0FBakJBLFlBQWlCO1FBQ3RELG9CQUNFO1VBQUEsd0JBQ0U7WUFBQSxVQUFLRjtVQUFMO1lBQUE7WUFBQTtZQUFBO1VBQUEsU0FERixlQUVFO1lBQUEsVUFBSUM7VUFBSjtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBRkYsZUFHRTtZQUFBLFVBQUlDO1VBQUo7WUFBQTtZQUFBO1lBQUE7VUFBQSxTQUhGLGVBSUU7WUFBUSxPQUFPLEVBQUU7Y0FBQSxPQUFNQyxnQkFBZ0IsQ0FBQ0osRUFBRCxDQUF0QjtZQUFBLENBQWpCO1lBQUE7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBSkY7UUFBQSxHQUFVQSxFQUFWO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FERjtNQVFELENBVEE7SUFESDtNQUFBO01BQUE7TUFBQTtJQUFBLFFBWkY7RUFBQSxnQkFERjtBQTJCRDs7R0EzQ3VCWjtVQUdRSDs7O0tBSFJHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tICdyZWFjdC1jb29raWUnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBbRGF0YXMsIHNldERhdGFzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbY29va2llcywgc2V0Y29va2llc10gPSB1c2VDb29raWVzKFsndXNlciddKVxuICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC4uL2FwaS9wb3N0L2dldFBvc3RgKTtcbiAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICBzZXREYXRhcyhqc29uKVxuICB9XG5cblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hEYXRhKClcbiAgICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkZlc3RpdidhcHAgSks8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgXG4gICAgICA8aDE+RmVzdGl2YWw8L2gxPlxuICAgICAgPHA+VGVzdCBmaW5hbCA6IFRTIDwvcD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxwPntjb29raWVzPy51c2VyPy51c2VybmFtZX08L3A+XG4gICAgICA8L2Rpdj5cblxuXG4gICAgICA8ZGl2PlxuICAgICAgICB7RGF0YXMubWFwKCh7aWQsIGRlc2NyaXB0aW9uLCBjb250ZW50LCBuYW1lRmVzdGl2YWx9KSA9PntcbiAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGtleT17aWR9PlxuICAgICAgICAgICAgICA8aDM+e2Rlc2NyaXB0aW9ufTwvaDM+XG4gICAgICAgICAgICAgIDxwPntjb250ZW50fTwvcD5cbiAgICAgICAgICAgICAgPHA+e25hbWVGZXN0aXZhbH08L3A+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlRGF0YShpZCl9PkRlbGV0ZSBkYXRhPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gIFxuICAgIDwvPilcbn1cblxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VDb29raWVzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIb21lIiwiRGF0YXMiLCJzZXREYXRhcyIsImNvb2tpZXMiLCJzZXRjb29raWVzIiwiZmV0Y2hEYXRhIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJ1c2VyIiwidXNlcm5hbWUiLCJtYXAiLCJpZCIsImRlc2NyaXB0aW9uIiwiY29udGVudCIsIm5hbWVGZXN0aXZhbCIsImhhbmRsZURlbGV0ZURhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});