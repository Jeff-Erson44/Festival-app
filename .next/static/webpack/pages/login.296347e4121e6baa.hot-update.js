"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login/index.js":
/*!******************************!*\
  !*** ./pages/login/index.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var _Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\nvar _jsxFileName = \"/Applications/MAMP/htdocs/Festival-app/pages/login/index.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\n\n\n\n\n\n\nfunction Index() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)(); // si l'utilisateur est déjà connecté, on le redirige vers la page d'accueil\n\n  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {\n    if (cookies.user) {\n      router.push('/');\n    }\n  }); // Etat du cookie\n\n  var _useCookies = (0,react_cookie__WEBPACK_IMPORTED_MODULE_8__.useCookies)(['user']),\n      _useCookies2 = (0,_Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useCookies, 2),\n      cookies = _useCookies2[0],\n      setCookie = _useCookies2[1]; // Etat des donnes du formulaire inscription \n\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({\n    id: \"\",\n    username: \"\",\n    email: \"\",\n    password: \"\"\n  }),\n      inputUser = _useState[0],\n      setInputUser = _useState[1]; // Etat des donnes du formulaire de connexion \n\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({\n    username: \"\",\n    password: \"\"\n  }),\n      inputedUser = _useState2[0],\n      setInputedUser = _useState2[1]; //Etat du formulaire à afficher\n\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"signup\"),\n      form = _useState3[0],\n      setForm = _useState3[1]; // Etat formulaire d'inscription\n\n\n  var handleSignUp = /*#__PURE__*/function () {\n    var _ref = (0,_Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(e) {\n      var res, data;\n      return _Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault(); // On récupère toutes les infos utisateurs\n\n              if (!(!inputUser.username || !inputUser.email.includes('@') || !inputUser.password)) {\n                _context.next = 6;\n                break;\n              }\n\n              alert(\"Données manquantes\");\n              return _context.abrupt(\"return\");\n\n            case 6:\n              _context.next = 8;\n              return fetch('/api/auth/signup', {\n                method: 'POST',\n                headers: {\n                  'Content-Type': 'application/json'\n                },\n                body: JSON.stringify({\n                  username: inputUser.username,\n                  email: inputUser.email,\n                  password: inputUser.password\n                })\n              });\n\n            case 8:\n              res = _context.sent;\n              _context.next = 11;\n              return res.json();\n\n            case 11:\n              data = _context.sent;\n\n              if (res.ok) {\n                router.reload('/');\n              } else {\n                console.log('error');\n              }\n\n            case 13:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleSignUp(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }(); // Etat formulaire de connexion\n\n\n  var handleSignIn = /*#__PURE__*/function () {\n    var _ref2 = (0,_Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(e) {\n      var res, data;\n      return _Applications_MAMP_htdocs_Festival_app_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              e.preventDefault(); // On récupère toutes les infos utisateurs\n\n              _context2.next = 3;\n              return fetch('/api/auth/signin', {\n                method: 'POST',\n                headers: {\n                  'Content-Type': 'application/json'\n                },\n                body: JSON.stringify({\n                  username: inputedUser.username,\n                  password: inputedUser.password\n                })\n              });\n\n            case 3:\n              res = _context2.sent;\n              _context2.next = 6;\n              return res.json();\n\n            case 6:\n              data = _context2.sent;\n\n              if (res.ok) {\n                setCookie(\"user\", JSON.stringify(data), {\n                  path: '/',\n                  maxAge: 1296000,\n                  // Expires after 1hr\n                  sameSite: true\n                });\n                router.push('/');\n              } else {\n                console.log('error');\n              }\n\n            case 8:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function handleSignIn(_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"title\", {\n        children: \"Festiv'app JK - Inscription/Connexion\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        className: \"form \".concat(form === 'signin' ? 'active' : ''),\n        onClick: function onClick() {\n          return setForm('signin');\n        },\n        children: \"Se connecter\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        className: \"form \".concat(form === 'signup' ? 'active' : ''),\n        onClick: function onClick() {\n          return setForm('signup');\n        },\n        children: \"S'inscrire\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 13\n    }, this), form === 'signup' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"h2\", {\n        children: \"Cr\\xE9er un compte\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"form\", {\n        onSubmit: handleSignUp,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"label\", {\n          children: \" Nom d'utilisateur : \"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"input\", {\n          type: \"text\",\n          name: \"username\",\n          value: inputUser.username || '',\n          onChange: function onChange(e) {\n            return setInputUser(_objectSpread(_objectSpread({}, inputUser), {}, {\n              username: e.target.value\n            }));\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"label\", {\n          children: \" Email : \"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"input\", {\n          type: \"text\",\n          name: \"email\",\n          value: inputUser.email || '',\n          onChange: function onChange(e) {\n            return setInputUser(_objectSpread(_objectSpread({}, inputUser), {}, {\n              email: e.target.value\n            }));\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"label\", {\n          children: \" Mot de passe : \"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"input\", {\n          type: \"password\",\n          name: \"password\",\n          value: inputUser.password || '',\n          onChange: function onChange(e) {\n            return setInputUser(_objectSpread(_objectSpread({}, inputUser), {}, {\n              password: e.target.value\n            }));\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"button\", {\n          type: \"submit\",\n          children: \"Cr\\xE9er\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 110,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true), form === 'signin' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"h2\", {\n        children: \"Connexion\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"form\", {\n        onSubmit: handleSignIn,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"label\", {\n          children: \" Nom d'utilisateur : \"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 118,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"input\", {\n          type: \"text\",\n          name: \"username\",\n          value: inputedUser.username || '',\n          onChange: function onChange(e) {\n            return setInputedUser(_objectSpread(_objectSpread({}, inputUser), {}, {\n              username: e.target.value\n            }));\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 119,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"label\", {\n          children: \" Mot de passe : \"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 120,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"input\", {\n          type: \"password\",\n          name: \"password\",\n          value: inputedUser.password || '',\n          onChange: function onChange(e) {\n            return setInputedUser(_objectSpread(_objectSpread({}, inputedUser), {}, {\n              password: e.target.value\n            }));\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 121,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"button\", {\n          type: \"submit\",\n          children: \"Connexion\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 122,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true)]\n  }, void 0, true);\n}\n\n_s(Index, \"KFBUOUOGfYC4Avnnq64GuVNtmC4=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter, react_cookie__WEBPACK_IMPORTED_MODULE_8__.useCookies];\n});\n\n_c = Index;\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU1ELFdBQU47Y0FBbUJILFFBQVEsRUFBRVEsQ0FBQyxDQUFDcUIsTUFBRixDQUFTQztZQUF0QyxHQUFyQjtVQUFBO1FBQXBGO1VBQUE7VUFBQTtVQUFBO1FBQUEsUUFKSixlQUtJO1VBQVEsSUFBSSxFQUFDLFFBQWI7VUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsUUFMSjtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFGQTtJQUFBLGdCQXpCUjtFQUFBLGdCQURKO0FBc0NIOztHQXpIdUJ2QztVQUNMRCxvREFRY0Q7OztLQVRURSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sb2dpbi9pbmRleC5qcz85MWZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gXCJyZWFjdC1jb29raWVcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIC8vIHNpIGwndXRpbGlzYXRldXIgZXN0IGTDqWrDoCBjb25uZWN0w6ksIG9uIGxlIHJlZGlyaWdlIHZlcnMgbGEgcGFnZSBkJ2FjY3VlaWxcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZihjb29raWVzLnVzZXIpe1xuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKVxuICAgICAgICB9XG4gICAgIH0pO1xuICAgIC8vIEV0YXQgZHUgY29va2llXG4gICAgY29uc3QgW2Nvb2tpZXMsIHNldENvb2tpZV0gPSB1c2VDb29raWVzKFsndXNlciddKTtcblxuICAgIC8vIEV0YXQgZGVzIGRvbm5lcyBkdSBmb3JtdWxhaXJlIGluc2NyaXB0aW9uIFxuICAgIGNvbnN0IFtpbnB1dFVzZXIsIHNldElucHV0VXNlcl0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIGlkOiBcIlwiLFxuICAgICAgICB1c2VybmFtZTogXCJcIixcbiAgICAgICAgZW1haWw6IFwiXCIsXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgIH0pXG4gICAgLy8gRXRhdCBkZXMgZG9ubmVzIGR1IGZvcm11bGFpcmUgZGUgY29ubmV4aW9uIFxuICAgIGNvbnN0IFtpbnB1dGVkVXNlciwgc2V0SW5wdXRlZFVzZXJdID0gdXNlU3RhdGUoe1xuICAgICAgICB1c2VybmFtZTogXCJcIixcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgfSlcbiAgICAvL0V0YXQgZHUgZm9ybXVsYWlyZSDDoCBhZmZpY2hlclxuICAgIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKFwic2lnbnVwXCIpO1xuXG4gICAgLy8gRXRhdCBmb3JtdWxhaXJlIGQnaW5zY3JpcHRpb25cbiAgICBjb25zdCBoYW5kbGVTaWduVXAgPSBhc3luYyAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIE9uIHLDqWN1cMOocmUgdG91dGVzIGxlcyBpbmZvcyB1dGlzYXRldXJzXG4gICAgICAgIGlmICghaW5wdXRVc2VyLnVzZXJuYW1lIHx8ICFpbnB1dFVzZXIuZW1haWwuaW5jbHVkZXMoJ0AnKSB8fCAhaW5wdXRVc2VyLnBhc3N3b3JkICApe1xuICAgICAgICAgICAgYWxlcnQoXCJEb25uw6llcyBtYW5xdWFudGVzXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL2F1dGgvc2lnbnVwJywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IGlucHV0VXNlci51c2VybmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IGlucHV0VXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IGlucHV0VXNlci5wYXNzd29yZCxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgICBpZihyZXMub2spe1xuICAgICAgICAgICAgICAgIHJvdXRlci5yZWxvYWQoJy8nKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gRXRhdCBmb3JtdWxhaXJlIGRlIGNvbm5leGlvblxuICAgIGNvbnN0IGhhbmRsZVNpZ25JbiA9IGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gT24gcsOpY3Vww6hyZSB0b3V0ZXMgbGVzIGluZm9zIHV0aXNhdGV1cnNcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvYXV0aC9zaWduaW4nLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogaW5wdXRlZFVzZXIudXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IGlucHV0ZWRVc2VyLnBhc3N3b3JkLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICBpZihyZXMub2spe1xuICAgICAgICAgICAgc2V0Q29va2llKFwidXNlclwiLCBKU09OLnN0cmluZ2lmeShkYXRhKSwge1xuICAgICAgICAgICAgICAgIHBhdGg6ICcvJyxcbiAgICAgICAgICAgICAgICBtYXhBZ2U6IDEyOTYwMDAsIC8vIEV4cGlyZXMgYWZ0ZXIgMWhyXG4gICAgICAgICAgICAgICAgc2FtZVNpdGU6IHRydWUsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkZlc3RpdiZhcG9zO2FwcCBKSyAtIEluc2NyaXB0aW9uL0Nvbm5leGlvbjwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bmb3JtICR7Zm9ybSA9PT0gJ3NpZ25pbicgPyAnYWN0aXZlJyA6ICcnfWB9IG9uQ2xpY2s9eygpID0+IHNldEZvcm0oJ3NpZ25pbicpfT5TZSBjb25uZWN0ZXI8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZvcm0gJHtmb3JtID09PSAnc2lnbnVwJyA/ICdhY3RpdmUnIDogJyd9YH0gb25DbGljaz17KCkgPT4gc2V0Rm9ybSgnc2lnbnVwJyl9PlMnaW5zY3JpcmU8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7Zm9ybSA9PT0gJ3NpZ251cCcgJiYgKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGgyPkNyw6llciB1biBjb21wdGU8L2gyPlxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTaWduVXB9PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+IE5vbSBkJ3V0aWxpc2F0ZXVyIDogPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgdmFsdWU9e2lucHV0VXNlci51c2VybmFtZSB8fCAnJ30gb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnB1dFVzZXIoeyAuLi5pbnB1dFVzZXIsIHVzZXJuYW1lOiBlLnRhcmdldC52YWx1ZSB9KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPiBFbWFpbCA6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPXtpbnB1dFVzZXIuZW1haWwgfHwgJyd9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXRVc2VyKHsgLi4uaW5wdXRVc2VyLCBlbWFpbDogZS50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD4gTW90IGRlIHBhc3NlIDogPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHZhbHVlPXtpbnB1dFVzZXIucGFzc3dvcmQgfHwgJyd9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXRVc2VyKHsgLi4uaW5wdXRVc2VyLCBwYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNyw6llcjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAge2Zvcm0gPT09ICdzaWduaW4nICYmIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxoMj5Db25uZXhpb248L2gyPlxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTaWduSW59PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+IE5vbSBkJ3V0aWxpc2F0ZXVyIDogPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgdmFsdWU9e2lucHV0ZWRVc2VyLnVzZXJuYW1lIHx8ICcnfSBvbkNoYW5nZT17KGUpID0+IHNldElucHV0ZWRVc2VyKHsgLi4uaW5wdXRVc2VyLCB1c2VybmFtZTogZS50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD4gTW90IGRlIHBhc3NlIDogPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHZhbHVlPXtpbnB1dGVkVXNlci5wYXNzd29yZCB8fCAnJ30gb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnB1dGVkVXNlcih7IC4uLmlucHV0ZWRVc2VyLCBwYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNvbm5leGlvbjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9ICAgXG4gICAgPC8+KVxufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvb2tpZXMiLCJ1c2VSb3V0ZXIiLCJJbmRleCIsInJvdXRlciIsImNvb2tpZXMiLCJ1c2VyIiwicHVzaCIsInNldENvb2tpZSIsImlkIiwidXNlcm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiaW5wdXRVc2VyIiwic2V0SW5wdXRVc2VyIiwiaW5wdXRlZFVzZXIiLCJzZXRJbnB1dGVkVXNlciIsImZvcm0iLCJzZXRGb3JtIiwiaGFuZGxlU2lnblVwIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5jbHVkZXMiLCJhbGVydCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzIiwianNvbiIsImRhdGEiLCJvayIsInJlbG9hZCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTaWduSW4iLCJwYXRoIiwibWF4QWdlIiwic2FtZVNpdGUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login/index.js\n"));

/***/ })

});