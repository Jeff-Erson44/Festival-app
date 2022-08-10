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
exports.id = "pages/comment";
exports.ids = ["pages/comment"];
exports.modules = {

/***/ "./pages/comment/index.js":
/*!********************************!*\
  !*** ./pages/comment/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Comment)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Applications/MAMP/htdocs/Festival-app/pages/comment/index.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nfunction Comment() {\n  const {\n    0: Datas,\n    1: setDatas\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const {\n    0: inputedData,\n    1: setInputedData\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    content: \"\",\n    postId: \"\",\n    userId: \"\"\n  });\n\n  const fetchData = async () => {\n    const response = await fetch(`../api/comment/getComment`);\n    const json = await response.json();\n    setDatas(json);\n  };\n\n  const handleCreateComment = async e => {\n    e.preventDefault();\n    const response = await fetch(`/api/comment/createComment`, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        content: inputedData.content,\n        postId: 44,\n        userId: 16\n      })\n    });\n    const json = await response.json();\n    console.log(json);\n    setInputedData({\n      id: \"\",\n      description: \"\",\n      content: \"\"\n    });\n    fetchData();\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    fetchData();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n      children: \"Comment\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n      onSubmit: handleCreateComment,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n        type: \"text\",\n        name: \"content\",\n        placeholder: \"Votre commentaire\",\n        value: inputedData.content || \"\",\n        onChange: e => setInputedData(_objectSpread(_objectSpread({}, inputedData), {}, {\n          content: e.target.value\n        }))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 13\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n        type: \"submit\",\n        children: \"Envoyer\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21tZW50L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBR2UsU0FBU0UsT0FBVCxHQUFrQjtFQUM3QixNQUFLO0lBQUEsR0FBQ0MsS0FBRDtJQUFBLEdBQVFDO0VBQVIsSUFBb0JKLCtDQUFRLENBQUMsRUFBRCxDQUFqQztFQUNBLE1BQU07SUFBQSxHQUFDSyxXQUFEO0lBQUEsR0FBY0M7RUFBZCxJQUFnQ04sK0NBQVEsQ0FBQztJQUMzQ08sT0FBTyxFQUFFLEVBRGtDO0lBRTNDQyxNQUFNLEVBQUUsRUFGbUM7SUFHM0NDLE1BQU0sRUFBRTtFQUhtQyxDQUFELENBQTlDOztFQU1GLE1BQU1DLFNBQVMsR0FBRyxZQUFZO0lBQzVCLE1BQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUUsMkJBQUYsQ0FBNUI7SUFDQSxNQUFNQyxJQUFJLEdBQUcsTUFBTUYsUUFBUSxDQUFDRSxJQUFULEVBQW5CO0lBQ0FULFFBQVEsQ0FBQ1MsSUFBRCxDQUFSO0VBQ0MsQ0FKSDs7RUFRRSxNQUFNQyxtQkFBbUIsR0FBRyxNQUFPQyxDQUFQLElBQWE7SUFDckNBLENBQUMsQ0FBQ0MsY0FBRjtJQUNBLE1BQU1MLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUUsNEJBQUYsRUFBZ0M7TUFDeERLLE1BQU0sRUFBRSxNQURnRDtNQUV4REMsT0FBTyxFQUFFO1FBQ0wsZ0JBQWdCO01BRFgsQ0FGK0M7TUFLeERDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7UUFDakJkLE9BQU8sRUFBRUYsV0FBVyxDQUFDRSxPQURKO1FBRWpCQyxNQUFNLEVBQUUsRUFGUztRQUdqQkMsTUFBTSxFQUFFO01BSFMsQ0FBZjtJQUxrRCxDQUFoQyxDQUE1QjtJQVdBLE1BQU1JLElBQUksR0FBRyxNQUFNRixRQUFRLENBQUNFLElBQVQsRUFBbkI7SUFDQVMsT0FBTyxDQUFDQyxHQUFSLENBQVlWLElBQVo7SUFDQVAsY0FBYyxDQUFDO01BQUVrQixFQUFFLEVBQUMsRUFBTDtNQUFTQyxXQUFXLEVBQUMsRUFBckI7TUFBeUJsQixPQUFPLEVBQUM7SUFBakMsQ0FBRCxDQUFkO0lBQ0FHLFNBQVM7RUFDWixDQWpCRDs7RUFvQkFULGdEQUFTLENBQUMsTUFBTTtJQUNaUyxTQUFTO0VBQ1YsQ0FGTSxFQUVKLEVBRkksQ0FBVDtFQUdBLG9CQUNJO0lBQUEsd0JBQ0E7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFEQSxlQUtBO01BQU0sUUFBUSxFQUFFSSxtQkFBaEI7TUFBQSx3QkFDSTtRQUNJLElBQUksRUFBQyxNQURUO1FBRUksSUFBSSxFQUFDLFNBRlQ7UUFHSSxXQUFXLEVBQUMsbUJBSGhCO1FBSUksS0FBSyxFQUFFVCxXQUFXLENBQUNFLE9BQVosSUFBdUIsRUFKbEM7UUFLSSxRQUFRLEVBQUdRLENBQUQsSUFBTVQsY0FBYyxpQ0FBS0QsV0FBTDtVQUFrQkUsT0FBTyxFQUFFUSxDQUFDLENBQUNXLE1BQUYsQ0FBU0M7UUFBcEM7TUFMbEM7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQURKLGVBU0k7UUFBUSxJQUFJLEVBQUMsUUFBYjtRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQVRKO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxRQUxBO0VBQUEsZ0JBREo7QUFtQkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mZXN0aXZhbC1hcHAvLi9wYWdlcy9jb21tZW50L2luZGV4LmpzP2JhMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbW1lbnQoKXtcbiAgICBjb25zdFtEYXRhcywgc2V0RGF0YXNdID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgW2lucHV0ZWREYXRhLCBzZXRJbnB1dGVkRGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCIsXG4gICAgICAgIHBvc3RJZDogXCJcIixcbiAgICAgICAgdXNlcklkOiBcIlwiLFxuICAgIH0pXG5cbiAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC4uL2FwaS9jb21tZW50L2dldENvbW1lbnRgKTtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgc2V0RGF0YXMoanNvbilcbiAgICB9XG4gIFxuXG5cbiAgICBjb25zdCBoYW5kbGVDcmVhdGVDb21tZW50ID0gYXN5bmMgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL2NvbW1lbnQvY3JlYXRlQ29tbWVudGAsICB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBpbnB1dGVkRGF0YS5jb250ZW50LFxuICAgICAgICAgICAgICAgIHBvc3RJZDogNDQsXG4gICAgICAgICAgICAgICAgdXNlcklkOiAxNixcbiAgICAgICAgICAgIH0pLCBcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICBjb25zb2xlLmxvZyhqc29uKVxuICAgICAgICBzZXRJbnB1dGVkRGF0YSh7IGlkOlwiXCIsIGRlc2NyaXB0aW9uOlwiXCIsIGNvbnRlbnQ6XCJcIiB9KVxuICAgICAgICBmZXRjaERhdGEoKVxuICAgIH1cblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2hEYXRhKClcbiAgICAgIH0sIFtdKVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxoMT5Db21tZW50PC9oMT5cbiAgICAgICAgXG5cblxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlQ3JlYXRlQ29tbWVudH0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImNvbnRlbnRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVm90cmUgY29tbWVudGFpcmVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dGVkRGF0YS5jb250ZW50IHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+IHNldElucHV0ZWREYXRhKHsuLi5pbnB1dGVkRGF0YSwgY29udGVudDogZS50YXJnZXQudmFsdWV9KX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkVudm95ZXI8L2J1dHRvbj5cblxuICAgICAgICA8L2Zvcm0+XG4gICAgPC8+KVxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNvbW1lbnQiLCJEYXRhcyIsInNldERhdGFzIiwiaW5wdXRlZERhdGEiLCJzZXRJbnB1dGVkRGF0YSIsImNvbnRlbnQiLCJwb3N0SWQiLCJ1c2VySWQiLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsImhhbmRsZUNyZWF0ZUNvbW1lbnQiLCJlIiwicHJldmVudERlZmF1bHQiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJkZXNjcmlwdGlvbiIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/comment/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__("./pages/comment/index.js"));
module.exports = __webpack_exports__;

})();