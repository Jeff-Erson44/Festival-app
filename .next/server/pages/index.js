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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-cookie */ \"react-cookie\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Applications/MAMP/htdocs/Festival-app/pages/index.js\";\n\n\n\n\n\nfunction Home() {\n  const handleDeleteData = async id => {\n    console.log(id);\n    const response = await fetch(`../api/post/deletePost`, {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify({\n        id\n      })\n    });\n    const json = await response.json();\n    console.log(json);\n    fetchData();\n  };\n\n  const {\n    0: Datas,\n    1: setDatas\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n  const [cookies, setcookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_1__.useCookies)(['user']);\n\n  const fetchData = async () => {\n    const response = await fetch(`../api/post/getPost`);\n    const json = await response.json();\n    setDatas(json);\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\n    fetchData();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"title\", {\n        children: \"Festiv'app JK\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n      children: \"Festival\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n      children: \"Test final : TS \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n        children: cookies?.user?.username\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      children: Datas.map(({\n        id,\n        description,\n        content,\n        nameFestival,\n        userId\n      }) => {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h3\", {\n            children: description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n            children: content\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n            children: nameFestival\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 15\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            children: cookies?.user?.id === userId ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n              onClick: () => handleDeleteData(id),\n              children: \"Supprimer\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 55,\n              columnNumber: 49\n            }, this) : null\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 15\n          }, this)]\n        }, id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 13\n        }, this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n      children: cookies?.user?.id\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG5jb25zdCBoYW5kbGVEZWxldGVEYXRhID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnNvbGUubG9nKGlkKVxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAuLi9hcGkvcG9zdC9kZWxldGVQb3N0YCwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczoge1xuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaWQgfSlcbiAgfSlcbiAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICBjb25zb2xlLmxvZyhqc29uKVxuICBmZXRjaERhdGEoKVxufVxuXG4gIGNvbnN0IFtEYXRhcywgc2V0RGF0YXNdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtjb29raWVzLCBzZXRjb29raWVzXSA9IHVzZUNvb2tpZXMoWyd1c2VyJ10pXG4gIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgLi4vYXBpL3Bvc3QvZ2V0UG9zdGApO1xuICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gIHNldERhdGFzKGpzb24pXG4gIH1cblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hEYXRhKClcbiAgICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkZlc3RpdidhcHAgSks8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgXG4gICAgICA8aDE+RmVzdGl2YWw8L2gxPlxuICAgICAgPHA+VGVzdCBmaW5hbCA6IFRTIDwvcD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxwPntjb29raWVzPy51c2VyPy51c2VybmFtZX08L3A+XG4gICAgICA8L2Rpdj5cblxuXG4gICAgICA8ZGl2PlxuICAgICAgICB7RGF0YXMubWFwKCh7aWQsIGRlc2NyaXB0aW9uLCBjb250ZW50LCBuYW1lRmVzdGl2YWwsIHVzZXJJZH0pID0+e1xuICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYga2V5PXtpZH0+XG4gICAgICAgICAgICAgIDxoMz57ZGVzY3JpcHRpb259PC9oMz5cbiAgICAgICAgICAgICAgPHA+e2NvbnRlbnR9PC9wPlxuICAgICAgICAgICAgICA8cD57bmFtZUZlc3RpdmFsfTwvcD5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7Y29va2llcz8udXNlcj8uaWQgPT09IHVzZXJJZCA/IDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlRGF0YShpZCl9PlN1cHByaW1lcjwvYnV0dG9uPiA6IG51bGx9XG4gICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICA8cD57Y29va2llcz8udXNlcj8uaWR9PC9wPlxuICBcbiAgICA8Lz4pXG59XG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6WyJIZWFkIiwidXNlQ29va2llcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSG9tZSIsImhhbmRsZURlbGV0ZURhdGEiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiIsImZldGNoRGF0YSIsIkRhdGFzIiwic2V0RGF0YXMiLCJjb29raWVzIiwic2V0Y29va2llcyIsInVzZXIiLCJ1c2VybmFtZSIsIm1hcCIsImRlc2NyaXB0aW9uIiwiY29udGVudCIsIm5hbWVGZXN0aXZhbCIsInVzZXJJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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