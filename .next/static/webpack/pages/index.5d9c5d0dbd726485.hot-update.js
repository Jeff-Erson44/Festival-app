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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _jsxFileName = \"/Applications/MAMP/htdocs/Festival-app/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _cookies$user,\n      _this = this,\n      _cookies$user3;\n\n  var handleDeleteData = /*#__PURE__*/function () {\n    var _ref = (0,_Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(id) {\n      var response, json;\n      return _Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              console.log(id);\n              _context.next = 3;\n              return fetch(\"../api/post/deletePost\", {\n                method: \"POST\",\n                headers: {\n                  \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                  id: id\n                })\n              });\n\n            case 3:\n              response = _context.sent;\n              _context.next = 6;\n              return response.json();\n\n            case 6:\n              json = _context.sent;\n              console.log(json);\n              fetchData();\n\n            case 9:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleDeleteData(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),\n      Datas = _useState[0],\n      setDatas = _useState[1];\n\n  var _useCookies = (0,react_cookie__WEBPACK_IMPORTED_MODULE_6__.useCookies)(['user']),\n      _useCookies2 = (0,_Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useCookies, 2),\n      cookies = _useCookies2[0],\n      setcookies = _useCookies2[1];\n\n  var fetchData = /*#__PURE__*/function () {\n    var _ref2 = (0,_Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {\n      var response, json;\n      return _Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return fetch(\"../api/post/getPost\");\n\n            case 2:\n              response = _context2.sent;\n              _context2.next = 5;\n              return response.json();\n\n            case 5:\n              json = _context2.sent;\n              setDatas(json);\n\n            case 7:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function fetchData() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {\n    fetchData();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"title\", {\n        children: \"Festiv'app JK\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h1\", {\n      children: \"Festival\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n      children: \"Test final : TS \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n        children: cookies === null || cookies === void 0 ? void 0 : (_cookies$user = cookies.user) === null || _cookies$user === void 0 ? void 0 : _cookies$user.username\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      children: Datas.map(function (_ref3) {\n        var _cookies$user2;\n\n        var id = _ref3.id,\n            description = _ref3.description,\n            content = _ref3.content,\n            nameFestival = _ref3.nameFestival;\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h3\", {\n            children: description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n            children: content\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n            children: nameFestival\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n            children: (cookies === null || cookies === void 0 ? void 0 : (_cookies$user2 = cookies.user) === null || _cookies$user2 === void 0 ? void 0 : _cookies$user2.id) === userId ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n              onClick: function onClick() {\n                return handleDeleteData(id);\n              },\n              children: \"Supprimer\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 55,\n              columnNumber: 49\n            }, _this) : null\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 15\n          }, _this)]\n        }, id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n      children: cookies === null || cookies === void 0 ? void 0 : (_cookies$user3 = cookies.user) === null || _cookies$user3 === void 0 ? void 0 : _cookies$user3.id\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Home, \"YWIr01b6vDmeDAUFE5egzIxmFqk=\", false, function () {\n  return [react_cookie__WEBPACK_IMPORTED_MODULE_6__.useCookies];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxPQUFPLENBQUVFLElBQVQsa0VBQWVoQixFQUFmLE1BQXNCc0IsTUFBdEIsZ0JBQStCO2NBQVEsT0FBTyxFQUFFO2dCQUFBLE9BQU12QixnQkFBZ0IsQ0FBQ0MsRUFBRCxDQUF0QjtjQUFBLENBQWpCO2NBQUE7WUFBQTtjQUFBO2NBQUE7Y0FBQTtZQUFBLFNBQS9CLEdBQWlHO1VBRHBHO1lBQUE7WUFBQTtZQUFBO1VBQUEsU0FKRjtRQUFBLEdBQVVBLEVBQVY7VUFBQTtVQUFBO1VBQUE7UUFBQSxTQURGO01BVUQsQ0FYQTtJQURIO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFaRixlQTBCRTtNQUFBLFVBQUljLE9BQUosYUFBSUEsT0FBSix5Q0FBSUEsT0FBTyxDQUFFRSxJQUFiLG1EQUFJLGVBQWVoQjtJQUFuQjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBMUJGO0VBQUEsZ0JBREY7QUE4QkQ7O0dBM0R1QkY7VUFpQlFIOzs7S0FqQlJHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tICdyZWFjdC1jb29raWUnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuY29uc3QgaGFuZGxlRGVsZXRlRGF0YSA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zb2xlLmxvZyhpZClcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgLi4vYXBpL3Bvc3QvZGVsZXRlUG9zdGAsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGlkIH0pXG4gIH0pXG4gIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgY29uc29sZS5sb2coanNvbilcbiAgZmV0Y2hEYXRhKClcbn1cblxuICBjb25zdCBbRGF0YXMsIHNldERhdGFzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbY29va2llcywgc2V0Y29va2llc10gPSB1c2VDb29raWVzKFsndXNlciddKVxuICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC4uL2FwaS9wb3N0L2dldFBvc3RgKTtcbiAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICBzZXREYXRhcyhqc29uKVxuICB9XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoRGF0YSgpXG4gICAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5GZXN0aXYnYXBwIEpLPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIFxuICAgICAgPGgxPkZlc3RpdmFsPC9oMT5cbiAgICAgIDxwPlRlc3QgZmluYWwgOiBUUyA8L3A+XG4gICAgICA8ZGl2PlxuICAgICAgICA8cD57Y29va2llcz8udXNlcj8udXNlcm5hbWV9PC9wPlxuICAgICAgPC9kaXY+XG5cblxuICAgICAgPGRpdj5cbiAgICAgICAge0RhdGFzLm1hcCgoe2lkLCBkZXNjcmlwdGlvbiwgY29udGVudCwgbmFtZUZlc3RpdmFsfSkgPT57XG4gICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2lkfT5cbiAgICAgICAgICAgICAgPGgzPntkZXNjcmlwdGlvbn08L2gzPlxuICAgICAgICAgICAgICA8cD57Y29udGVudH08L3A+XG4gICAgICAgICAgICAgIDxwPntuYW1lRmVzdGl2YWx9PC9wPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtjb29raWVzPy51c2VyPy5pZCA9PT0gdXNlcklkID8gPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVEYXRhKGlkKX0+U3VwcHJpbWVyPC9idXR0b24+IDogbnVsbH1cbiAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwPntjb29raWVzPy51c2VyPy5pZH08L3A+XG4gIFxuICAgIDwvPilcbn1cblxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VDb29raWVzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIb21lIiwiaGFuZGxlRGVsZXRlRGF0YSIsImlkIiwiY29uc29sZSIsImxvZyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJqc29uIiwiZmV0Y2hEYXRhIiwiRGF0YXMiLCJzZXREYXRhcyIsImNvb2tpZXMiLCJzZXRjb29raWVzIiwidXNlciIsInVzZXJuYW1lIiwibWFwIiwiZGVzY3JpcHRpb24iLCJjb250ZW50IiwibmFtZUZlc3RpdmFsIiwidXNlcklkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});