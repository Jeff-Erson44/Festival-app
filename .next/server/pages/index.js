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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./helpers/index.js":
/*!**************************!*\
  !*** ./helpers/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"parseCookies\": () => (/* binding */ parseCookies)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n// fichier permettant de vérifier si les cookies existe et de les récupérer\n\nfunction parseCookies(req) {\n  return cookie__WEBPACK_IMPORTED_MODULE_0___default().parse(req ? req.headers.cookie || '' : document.cookie);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWxwZXJzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFFTyxTQUFTQyxZQUFULENBQXNCQyxHQUF0QixFQUEyQjtFQUNoQyxPQUFPRixtREFBQSxDQUFhRSxHQUFHLEdBQUdBLEdBQUcsQ0FBQ0UsT0FBSixDQUFZSixNQUFaLElBQXNCLEVBQXpCLEdBQThCSyxRQUFRLENBQUNMLE1BQXZELENBQVA7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zlc3RpdmFsLWFwcC8uL2hlbHBlcnMvaW5kZXguanM/OGFmYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmaWNoaWVyIHBlcm1ldHRhbnQgZGUgdsOpcmlmaWVyIHNpIGxlcyBjb29raWVzIGV4aXN0ZSBldCBkZSBsZXMgcsOpY3Vww6lyZXJcbmltcG9ydCBjb29raWUgZnJvbSAnY29va2llJztcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ29va2llcyhyZXEpIHtcbiAgcmV0dXJuIGNvb2tpZS5wYXJzZShyZXEgPyByZXEuaGVhZGVycy5jb29raWUgfHwgJycgOiBkb2N1bWVudC5jb29raWUpO1xufSJdLCJuYW1lcyI6WyJjb29raWUiLCJwYXJzZUNvb2tpZXMiLCJyZXEiLCJwYXJzZSIsImhlYWRlcnMiLCJkb2N1bWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./helpers/index.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-cookie */ \"react-cookie\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ \"./helpers/index.js\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Applications/MAMP/htdocs/Festival-app/pages/index.js\";\n\n\n\n\n\n\n\nfunction Home() {\n  const [cookies, setcookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_1__.useCookies)([\"user\"]);\n  const {\n    0: user,\n    1: setUser\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\n    setUser(cookies.user);\n  }, [cookies.user]);\n\n  const handleDeleteData = async id => {\n    const response = await fetch(`../api/post/deletePost`, {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify({\n        id\n      })\n    });\n    const json = await response.json();\n    console.log(json);\n    fetchData();\n  };\n\n  const {\n    0: Datas,\n    1: setDatas\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n\n  const fetchData = async () => {\n    const response = await fetch(`../api/post/getPost`);\n    const json = await response.json();\n    setDatas(json);\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\n    fetchData();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"title\", {\n        children: \"Festiv'app JK\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h1\", {\n      children: \"Festival\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n      children: \"Test final : TS \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h2\", {\n      children: [\"Bonjour \", user?.username]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      children: Datas.map(({\n        id,\n        description,\n        content,\n        nameFestival,\n        userId\n      }) => {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h3\", {\n            children: description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n            children: content\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n            children: nameFestival\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n            children: \"ecrit par : \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n            children: cookies?.user?.id === userId ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n              onClick: () => handleDeleteData(id),\n              children: \"Supprimer\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 49\n            }, this) : null\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 15\n          }, this)]\n        }, id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 13\n        }, this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtJQUFBLFFBZEY7RUFBQSxnQkFERjtBQStCRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zlc3RpdmFsLWFwcC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tICdyZWFjdC1jb29raWUnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHBhcnNlQ29va2llcyB9IGZyb20gJy4uL2hlbHBlcnMnXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtjb29raWVzLCBzZXRjb29raWVzXSA9IHVzZUNvb2tpZXMoW1widXNlclwiXSlcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgc2V0VXNlcihjb29raWVzLnVzZXIpXG4gIH0gLCBbY29va2llcy51c2VyXSlcblxuY29uc3QgaGFuZGxlRGVsZXRlRGF0YSA9IGFzeW5jIChpZCkgPT4ge1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC4uL2FwaS9wb3N0L2RlbGV0ZVBvc3RgLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpZCB9KVxuICB9KVxuICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gIGNvbnNvbGUubG9nKGpzb24pXG4gIGZldGNoRGF0YSgpXG59XG5cbiAgY29uc3QgW0RhdGFzLCBzZXREYXRhc10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAuLi9hcGkvcG9zdC9nZXRQb3N0YCk7XG4gIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgc2V0RGF0YXMoanNvbilcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hEYXRhKClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuXG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkZlc3RpdidhcHAgSks8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgXG4gICAgICA8aDE+RmVzdGl2YWw8L2gxPlxuICAgICAgPHA+VGVzdCBmaW5hbCA6IFRTIDwvcD5cblxuICAgICAgPGgyPkJvbmpvdXIge3VzZXI/LnVzZXJuYW1lfTwvaDI+XG5cblxuXG5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtEYXRhcy5tYXAoKHtpZCwgZGVzY3JpcHRpb24sIGNvbnRlbnQsIG5hbWVGZXN0aXZhbCwgdXNlcklkfSkgPT57XG4gICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2lkfT5cbiAgICAgICAgICAgICAgPGgzPntkZXNjcmlwdGlvbn08L2gzPlxuICAgICAgICAgICAgICA8cD57Y29udGVudH08L3A+XG4gICAgICAgICAgICAgIDxwPntuYW1lRmVzdGl2YWx9PC9wPlxuICAgICAgICAgICAgICA8cD5lY3JpdCBwYXIgOiA8L3A+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2Nvb2tpZXM/LnVzZXI/LmlkID09PSB1c2VySWQgPyA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZURhdGEoaWQpfT5TdXBwcmltZXI8L2J1dHRvbj4gOiBudWxsfVxuICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PiAgXG4gICAgPC8+KVxufVxuXG5cbiJdLCJuYW1lcyI6WyJIZWFkIiwidXNlQ29va2llcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwicGFyc2VDb29raWVzIiwicHJpc21hIiwiSG9tZSIsImNvb2tpZXMiLCJzZXRjb29raWVzIiwidXNlciIsInNldFVzZXIiLCJoYW5kbGVEZWxldGVEYXRhIiwiaWQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaERhdGEiLCJEYXRhcyIsInNldERhdGFzIiwidXNlcm5hbWUiLCJtYXAiLCJkZXNjcmlwdGlvbiIsImNvbnRlbnQiLCJuYW1lRmVzdGl2YWwiLCJ1c2VySWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();