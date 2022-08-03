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
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./pages/login/index.js":
/*!******************************!*\
  !*** ./pages/login/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Index)\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-cookie */ \"react-cookie\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Applications/MAMP/htdocs/Festival-app/pages/login/index.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nfunction Index() {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)(); // si l'utilisateur est déjà connecté, on le redirige vers la page d'accueil\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    if (cookies.user) {\n      router.push('/');\n    }\n  }); // Etat du cookie\n\n  const [cookies, setCookie] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_2__.useCookies)(['user']); // Etat des donnes du formulaire inscription \n\n  const {\n    0: inputUser,\n    1: setInputUser\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    id: \"\",\n    username: \"\",\n    email: \"\",\n    password: \"\"\n  }); // Etat des donnes du formulaire de connexion \n\n  const {\n    0: inputedUser,\n    1: setInputedUser\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    username: \"\",\n    password: \"\"\n  }); //Etat du formulaire à afficher\n\n  const {\n    0: form,\n    1: setForm\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"signup\"); // Etat formulaire d'inscription\n\n  const handleSignUp = async e => {\n    e.preventDefault(); // On récupère toutes les infos utisateurs\n\n    if (!inputUser.username || !inputUser.email.includes('@') || !inputUser.password) {\n      alert(\"Données manquantes\");\n      return;\n    } else {\n      const res = await fetch('/api/auth/signup', {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({\n          username: inputUser.username,\n          email: inputUser.email,\n          password: inputUser.password\n        })\n      });\n      const data = await res.json();\n\n      if (res.ok) {\n        setCookie(\"user\", JSON.stringify(data), {\n          path: '/',\n          maxAge: 1296000,\n          // Expires after 1hr\n          sameSite: true\n        });\n        router.push('/');\n      } else {\n        console.log('error');\n      }\n    }\n  }; // Etat formulaire de connexion\n\n\n  const handleSignIn = async e => {\n    e.preventDefault(); // On récupère toutes les infos utisateurs\n\n    const res = await fetch('/api/auth/signin', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        username: inputedUser.username,\n        password: inputedUser.password\n      })\n    });\n    const data = await res.json();\n\n    if (res.ok) {\n      setCookie(\"user\", JSON.stringify(data), {\n        path: '/',\n        maxAge: 1296000,\n        // Expires after 1hr\n        sameSite: true\n      });\n      router.push('/');\n    } else {\n      console.log('error');\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"title\", {\n        children: \"Festiv'app JK - Inscription/Connexion\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: `form ${form === 'signin' ? 'active' : ''}`,\n        onClick: () => setForm('signin'),\n        children: \"Se connecter\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: `form ${form === 'signup' ? 'active' : ''}`,\n        onClick: () => setForm('signup'),\n        children: \"S'inscrire\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 13\n    }, this), form === 'signup' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h2\", {\n        children: \"Cr\\xE9er un compte\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"form\", {\n        onSubmit: handleSignUp,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"label\", {\n          children: \" Nom d'utilisateur : \"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n          type: \"text\",\n          name: \"username\",\n          value: inputUser.username || '',\n          onChange: e => setInputUser(_objectSpread(_objectSpread({}, inputUser), {}, {\n            username: e.target.value\n          }))\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 110,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"label\", {\n          children: \" Email : \"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n          type: \"text\",\n          name: \"email\",\n          value: inputUser.email || '',\n          onChange: e => setInputUser(_objectSpread(_objectSpread({}, inputUser), {}, {\n            email: e.target.value\n          }))\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"label\", {\n          children: \" Mot de passe : \"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n          type: \"password\",\n          name: \"password\",\n          value: inputUser.password || '',\n          onChange: e => setInputUser(_objectSpread(_objectSpread({}, inputUser), {}, {\n            password: e.target.value\n          }))\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n          type: \"submit\",\n          children: \"Cr\\xE9er\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h3\", {\n        children: [\"Vouas avez d\\xE9ja un compte ? \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"span\", {\n          onClick: () => setForm('signin'),\n          children: \" Connectez-vous ici \"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 117,\n          columnNumber: 49\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true), form === 'signin' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h2\", {\n        children: \"Connexion\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"form\", {\n        onSubmit: handleSignIn,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"label\", {\n          children: \" Nom d'utilisateur : \"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n          type: \"text\",\n          name: \"username\",\n          value: inputedUser.username || '',\n          onChange: e => setInputedUser(_objectSpread(_objectSpread({}, inputUser), {}, {\n            username: e.target.value\n          }))\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 125,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"label\", {\n          children: \" Mot de passe : \"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 126,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n          type: \"password\",\n          name: \"password\",\n          value: inputedUser.password || '',\n          onChange: e => setInputedUser(_objectSpread(_objectSpread({}, inputedUser), {}, {\n            password: e.target.value\n          }))\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 127,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n          type: \"submit\",\n          children: \"Connexion\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 128,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h3\", {\n        children: [\"Vouas n'avez pas de compte ? \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"span\", {\n          onClick: () => setForm('signup'),\n          children: \" Inscrivez-vous ici \"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 130,\n          columnNumber: 50\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 130,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true)]\n  }, void 0, true);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsUUFMSjtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFGQSxlQVNBO1FBQUEseURBQWlDO1VBQU0sT0FBTyxFQUFFLE1BQU12QixPQUFPLENBQUMsUUFBRCxDQUE1QjtVQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQSxRQUFqQztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFUQTtJQUFBLGdCQTNCUjtFQUFBLGdCQURKO0FBeUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmVzdGl2YWwtYXBwLy4vcGFnZXMvbG9naW4vaW5kZXguanM/OTFmYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tIFwicmVhY3QtY29va2llXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICAvLyBzaSBsJ3V0aWxpc2F0ZXVyIGVzdCBkw6lqw6AgY29ubmVjdMOpLCBvbiBsZSByZWRpcmlnZSB2ZXJzIGxhIHBhZ2UgZCdhY2N1ZWlsXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYoY29va2llcy51c2VyKXtcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJylcbiAgICAgICAgfVxuICAgICB9KTtcbiAgICAvLyBFdGF0IGR1IGNvb2tpZVxuICAgIGNvbnN0IFtjb29raWVzLCBzZXRDb29raWVdID0gdXNlQ29va2llcyhbJ3VzZXInXSk7XG5cbiAgICAvLyBFdGF0IGRlcyBkb25uZXMgZHUgZm9ybXVsYWlyZSBpbnNjcmlwdGlvbiBcbiAgICBjb25zdCBbaW5wdXRVc2VyLCBzZXRJbnB1dFVzZXJdID0gdXNlU3RhdGUoe1xuICAgICAgICBpZDogXCJcIixcbiAgICAgICAgdXNlcm5hbWU6IFwiXCIsXG4gICAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgICBwYXNzd29yZDogXCJcIixcbiAgICB9KVxuICAgIC8vIEV0YXQgZGVzIGRvbm5lcyBkdSBmb3JtdWxhaXJlIGRlIGNvbm5leGlvbiBcbiAgICBjb25zdCBbaW5wdXRlZFVzZXIsIHNldElucHV0ZWRVc2VyXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgdXNlcm5hbWU6IFwiXCIsXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgIH0pXG4gICAgLy9FdGF0IGR1IGZvcm11bGFpcmUgw6AgYWZmaWNoZXJcbiAgICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZShcInNpZ251cFwiKTtcblxuICAgIC8vIEV0YXQgZm9ybXVsYWlyZSBkJ2luc2NyaXB0aW9uXG4gICAgY29uc3QgaGFuZGxlU2lnblVwID0gYXN5bmMgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBPbiByw6ljdXDDqHJlIHRvdXRlcyBsZXMgaW5mb3MgdXRpc2F0ZXVyc1xuICAgICAgICBpZiAoIWlucHV0VXNlci51c2VybmFtZSB8fCAhaW5wdXRVc2VyLmVtYWlsLmluY2x1ZGVzKCdAJykgfHwgIWlucHV0VXNlci5wYXNzd29yZCAgKXtcbiAgICAgICAgICAgIGFsZXJ0KFwiRG9ubsOpZXMgbWFucXVhbnRlc1wiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS9hdXRoL3NpZ251cCcsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBpbnB1dFVzZXIudXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBpbnB1dFVzZXIuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBpbnB1dFVzZXIucGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICAgICAgICAgIGlmKHJlcy5vayl7XG4gICAgICAgICAgICAgICAgICAgIHNldENvb2tpZShcInVzZXJcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6ICcvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heEFnZTogMTI5NjAwMCwgLy8gRXhwaXJlcyBhZnRlciAxaHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhbWVTaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBFdGF0IGZvcm11bGFpcmUgZGUgY29ubmV4aW9uXG4gICAgY29uc3QgaGFuZGxlU2lnbkluID0gYXN5bmMgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBPbiByw6ljdXDDqHJlIHRvdXRlcyBsZXMgaW5mb3MgdXRpc2F0ZXVyc1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS9hdXRoL3NpZ25pbicsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBpbnB1dGVkVXNlci51c2VybmFtZSxcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogaW5wdXRlZFVzZXIucGFzc3dvcmQsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICBpZihyZXMub2spe1xuICAgICAgICAgICAgc2V0Q29va2llKFwidXNlclwiLCBKU09OLnN0cmluZ2lmeShkYXRhKSwge1xuICAgICAgICAgICAgICAgIHBhdGg6ICcvJyxcbiAgICAgICAgICAgICAgICBtYXhBZ2U6IDEyOTYwMDAsIC8vIEV4cGlyZXMgYWZ0ZXIgMWhyXG4gICAgICAgICAgICAgICAgc2FtZVNpdGU6IHRydWUsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkZlc3RpdiZhcG9zO2FwcCBKSyAtIEluc2NyaXB0aW9uL0Nvbm5leGlvbjwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bmb3JtICR7Zm9ybSA9PT0gJ3NpZ25pbicgPyAnYWN0aXZlJyA6ICcnfWB9IG9uQ2xpY2s9eygpID0+IHNldEZvcm0oJ3NpZ25pbicpfT5TZSBjb25uZWN0ZXI8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZvcm0gJHtmb3JtID09PSAnc2lnbnVwJyA/ICdhY3RpdmUnIDogJyd9YH0gb25DbGljaz17KCkgPT4gc2V0Rm9ybSgnc2lnbnVwJyl9PlMnaW5zY3JpcmU8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7Zm9ybSA9PT0gJ3NpZ251cCcgJiYgKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGgyPkNyw6llciB1biBjb21wdGU8L2gyPlxuXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVNpZ25VcH0+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD4gTm9tIGQndXRpbGlzYXRldXIgOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiB2YWx1ZT17aW5wdXRVc2VyLnVzZXJuYW1lIHx8ICcnfSBvbkNoYW5nZT17KGUpID0+IHNldElucHV0VXNlcih7IC4uLmlucHV0VXNlciwgdXNlcm5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+IEVtYWlsIDogPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgdmFsdWU9e2lucHV0VXNlci5lbWFpbCB8fCAnJ30gb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnB1dFVzZXIoeyAuLi5pbnB1dFVzZXIsIGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPiBNb3QgZGUgcGFzc2UgOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgdmFsdWU9e2lucHV0VXNlci5wYXNzd29yZCB8fCAnJ30gb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnB1dFVzZXIoeyAuLi5pbnB1dFVzZXIsIHBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZSB9KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+Q3LDqWVyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDxoMz5Wb3VhcyBhdmV6IGTDqWphIHVuIGNvbXB0ZSA/IDxzcGFuIG9uQ2xpY2s9eygpID0+IHNldEZvcm0oJ3NpZ25pbicpfSA+IENvbm5lY3Rlei12b3VzIGljaSA8L3NwYW4+PC9oMz5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAge2Zvcm0gPT09ICdzaWduaW4nICYmIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxoMj5Db25uZXhpb248L2gyPlxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTaWduSW59PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+IE5vbSBkJ3V0aWxpc2F0ZXVyIDogPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgdmFsdWU9e2lucHV0ZWRVc2VyLnVzZXJuYW1lIHx8ICcnfSBvbkNoYW5nZT17KGUpID0+IHNldElucHV0ZWRVc2VyKHsgLi4uaW5wdXRVc2VyLCB1c2VybmFtZTogZS50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD4gTW90IGRlIHBhc3NlIDogPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHZhbHVlPXtpbnB1dGVkVXNlci5wYXNzd29yZCB8fCAnJ30gb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnB1dGVkVXNlcih7IC4uLmlucHV0ZWRVc2VyLCBwYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNvbm5leGlvbjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8aDM+Vm91YXMgbidhdmV6IHBhcyBkZSBjb21wdGUgPyA8c3BhbiBvbkNsaWNrPXsoKSA9PiBzZXRGb3JtKCdzaWdudXAnKX0gPiBJbnNjcml2ZXotdm91cyBpY2kgPC9zcGFuPjwvaDM+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfSAgIFxuICAgIDwvPilcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb29raWVzIiwidXNlUm91dGVyIiwiSW5kZXgiLCJyb3V0ZXIiLCJjb29raWVzIiwidXNlciIsInB1c2giLCJzZXRDb29raWUiLCJpbnB1dFVzZXIiLCJzZXRJbnB1dFVzZXIiLCJpZCIsInVzZXJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImlucHV0ZWRVc2VyIiwic2V0SW5wdXRlZFVzZXIiLCJmb3JtIiwic2V0Rm9ybSIsImhhbmRsZVNpZ25VcCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImluY2x1ZGVzIiwiYWxlcnQiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwib2siLCJwYXRoIiwibWF4QWdlIiwic2FtZVNpdGUiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU2lnbkluIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/login/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-cookie":
/*!*******************************!*\
  !*** external "react-cookie" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("react-cookie");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/login/index.js"));
module.exports = __webpack_exports__;

})();