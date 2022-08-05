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
exports.id = "pages/api/profil/[username]";
exports.ids = ["pages/api/profil/[username]"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "cloudinary":
/*!*****************************!*\
  !*** external "cloudinary" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("cloudinary");

/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("formidable");

/***/ }),

/***/ "(api)/./pages/api/profil/[username].js":
/*!****************************************!*\
  !*** ./pages/api/profil/[username].js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_formidable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/formidable */ \"(api)/./utils/formidable.js\");\n/* harmony import */ var _utils_cloudinary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/cloudinary */ \"(api)/./utils/cloudinary.js\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_2__.PrismaClient();\nconst config = {\n  api: {\n    bodyParser: false\n  }\n};\nasync function handler(req, res) {\n  const imageGet = await (0,_utils_formidable__WEBPACK_IMPORTED_MODULE_0__.getImage)(req);\n  const user = await req.query.username;\n  const userWho = await prisma.user.findFirst({\n    where: {\n      username: user\n    }\n  });\n\n  if (userWho) {\n    if (imageGet) {\n      res.status(500).json({\n        message: \"Erreur lors de l'upload de l'image\"\n      });\n      const image = await uploadFile(imageGet.filepath);\n      console.log(image);\n      const imgUser = await prisma.user.update({\n        where: {\n          username: imgUser.username\n        },\n        data: {\n          image: image.url\n        }\n      });\n      res.status(200).json({\n        username: imgUser.username,\n        email: imgUser.email,\n        image: imgUser.image,\n        bio: imgUser.bio,\n        createdAt: imgUser.createdAt,\n        id: imgUser.id\n      });\n    }\n  }\n\n  res.status(500).json({\n    message: \"Erreur\"\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZmlsL1t1c2VybmFtZV0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsTUFBTUcsTUFBTSxHQUFHLElBQUlELHdEQUFKLEVBQWY7QUFFTyxNQUFNRSxNQUFNLEdBQUc7RUFDbEJDLEdBQUcsRUFBRTtJQUFDQyxVQUFVLEVBQUU7RUFBYjtBQURhLENBQWY7QUFLUSxlQUFlQyxPQUFmLENBQXdCQyxHQUF4QixFQUE2QkMsR0FBN0IsRUFBa0M7RUFHN0MsTUFBTUMsUUFBUSxHQUFHLE1BQU1WLDJEQUFRLENBQUNRLEdBQUQsQ0FBL0I7RUFHQSxNQUFNRyxJQUFJLEdBQUcsTUFBTUgsR0FBRyxDQUFDSSxLQUFKLENBQVVDLFFBQTdCO0VBQ0EsTUFBTUMsT0FBTyxHQUFHLE1BQU1YLE1BQU0sQ0FBQ1EsSUFBUCxDQUFZSSxTQUFaLENBQXNCO0lBQ3hDQyxLQUFLLEVBQUU7TUFDSEgsUUFBUSxFQUFFRjtJQURQO0VBRGlDLENBQXRCLENBQXRCOztFQUtBLElBQUdHLE9BQUgsRUFBWTtJQUNSLElBQUdKLFFBQUgsRUFBYTtNQUNURCxHQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtRQUNqQkMsT0FBTyxFQUFFO01BRFEsQ0FBckI7TUFHQSxNQUFNQyxLQUFLLEdBQUcsTUFBTUMsVUFBVSxDQUFDWCxRQUFRLENBQUNZLFFBQVYsQ0FBOUI7TUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlKLEtBQVo7TUFDQSxNQUFNSyxPQUFPLEdBQUcsTUFBTXRCLE1BQU0sQ0FBQ1EsSUFBUCxDQUFZZSxNQUFaLENBQW1CO1FBQ3JDVixLQUFLLEVBQUU7VUFDSEgsUUFBUSxFQUFFWSxPQUFPLENBQUNaO1FBRGYsQ0FEOEI7UUFJckNjLElBQUksRUFBRTtVQUNGUCxLQUFLLEVBQUVBLEtBQUssQ0FBQ1E7UUFEWDtNQUorQixDQUFuQixDQUF0QjtNQVFBbkIsR0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7UUFDakJMLFFBQVEsRUFBRVksT0FBTyxDQUFDWixRQUREO1FBRWpCZ0IsS0FBSyxFQUFHSixPQUFPLENBQUNJLEtBRkM7UUFHakJULEtBQUssRUFBRUssT0FBTyxDQUFDTCxLQUhFO1FBSWpCVSxHQUFHLEVBQUdMLE9BQU8sQ0FBQ0ssR0FKRztRQUtqQkMsU0FBUyxFQUFHTixPQUFPLENBQUNNLFNBTEg7UUFNakJDLEVBQUUsRUFBRVAsT0FBTyxDQUFDTztNQU5LLENBQXJCO0lBU0g7RUFDSjs7RUFDRHZCLEdBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0lBQ2pCQyxPQUFPLEVBQUU7RUFEUSxDQUFyQjtBQUdIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmVzdGl2YWwtYXBwLy4vcGFnZXMvYXBpL3Byb2ZpbC9bdXNlcm5hbWVdLmpzPzE2ZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0SW1hZ2UgfSBmcm9tICcuLi8uLi8uLi91dGlscy9mb3JtaWRhYmxlJztcbmltcG9ydCB7IHVwbG9hZEltYWdlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY2xvdWRpbmFyeSc7XG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjsgXG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgICBhcGk6IHtib2R5UGFyc2VyOiBmYWxzZSxcbiAgICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlciAocmVxLCByZXMpIHtcblxuXG4gICAgY29uc3QgaW1hZ2VHZXQgPSBhd2FpdCBnZXRJbWFnZShyZXEpO1xuXG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcmVxLnF1ZXJ5LnVzZXJuYW1lO1xuICAgIGNvbnN0IHVzZXJXaG8gPSBhd2FpdCBwcmlzbWEudXNlci5maW5kRmlyc3Qoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXIsXG4gICAgICAgIH0sIFxuICAgIH0pXG4gICAgaWYodXNlcldobykge1xuICAgICAgICBpZihpbWFnZUdldCkge1xuICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRXJyZXVyIGxvcnMgZGUgbCd1cGxvYWQgZGUgbCdpbWFnZVwiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IGF3YWl0IHVwbG9hZEZpbGUoaW1hZ2VHZXQuZmlsZXBhdGgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coaW1hZ2UpO1xuICAgICAgICAgICAgY29uc3QgaW1nVXNlciA9IGF3YWl0IHByaXNtYS51c2VyLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IGltZ1VzZXIudXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBpbWFnZS51cmwsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBpbWdVc2VyLnVzZXJuYW1lLFxuICAgICAgICAgICAgICAgIGVtYWlsIDogaW1nVXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgICBpbWFnZTogaW1nVXNlci5pbWFnZSxcbiAgICAgICAgICAgICAgICBiaW8gOiBpbWdVc2VyLmJpbyxcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQgOiBpbWdVc2VyLmNyZWF0ZWRBdCxcbiAgICAgICAgICAgICAgICBpZDogaW1nVXNlci5pZCxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICBtZXNzYWdlOiBcIkVycmV1clwiLFxuICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbImdldEltYWdlIiwidXBsb2FkSW1hZ2UiLCJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJjb25maWciLCJhcGkiLCJib2R5UGFyc2VyIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImltYWdlR2V0IiwidXNlciIsInF1ZXJ5IiwidXNlcm5hbWUiLCJ1c2VyV2hvIiwiZmluZEZpcnN0Iiwid2hlcmUiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImltYWdlIiwidXBsb2FkRmlsZSIsImZpbGVwYXRoIiwiY29uc29sZSIsImxvZyIsImltZ1VzZXIiLCJ1cGRhdGUiLCJkYXRhIiwidXJsIiwiZW1haWwiLCJiaW8iLCJjcmVhdGVkQXQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/profil/[username].js\n");

/***/ }),

/***/ "(api)/./utils/cloudinary.js":
/*!*****************************!*\
  !*** ./utils/cloudinary.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"uploadImage\": () => (/* binding */ uploadImage)\n/* harmony export */ });\nconst cloudinary = (__webpack_require__(/*! cloudinary */ \"cloudinary\").v2); //Initialisation Cloudinary\n\n\ncloudinary.config({\n  cloud_name: process.env.NEXT_PUBLIC_CLOUD_NAME,\n  api_key: process.env.NEXT_PUBLIC_APP_KEY,\n  api_secret: process.env.NEXT_PUBLIC_API_SECRET\n}); // Export Cloudninary\n\nfunction uploadImage(imageUploaded) {\n  return new Promise((resolve, reject) => {\n    // on appelle la méthode de téléchargement Cloudinary Uploader\n    cloudinary.uploader.upload(imageUploaded, {\n      width: 450,\n      height: 450,\n      crop: 'fill'\n    }, (err, res) => {\n      if (err) reject(err);\n      resolve(res);\n    });\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9jbG91ZGluYXJ5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxVQUFVLEdBQUdDLHdEQUFuQixFQUVBOzs7QUFDQUQsVUFBVSxDQUFDRyxNQUFYLENBQWtCO0VBQ2RDLFVBQVUsRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLHNCQURWO0VBRWRDLE9BQU8sRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlHLG1CQUZQO0VBR2RDLFVBQVUsRUFBRUwsT0FBTyxDQUFDQyxHQUFSLENBQVlLO0FBSFYsQ0FBbEIsR0FNQTs7QUFFTyxTQUFTQyxXQUFULENBQXFCQyxhQUFyQixFQUFvQztFQUN2QyxPQUFPLElBQUlDLE9BQUosQ0FBYSxDQUFDQyxPQUFELEVBQVVDLE1BQVYsS0FBcUI7SUFDckM7SUFDQWhCLFVBQVUsQ0FBQ2lCLFFBQVgsQ0FBb0JDLE1BQXBCLENBQ0lMLGFBREosRUFFSTtNQUFJTSxLQUFLLEVBQUUsR0FBWDtNQUNJQyxNQUFNLEVBQUUsR0FEWjtNQUVJQyxJQUFJLEVBQUU7SUFGVixDQUZKLEVBTUksQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEtBQWM7TUFDVixJQUFJRCxHQUFKLEVBQVNOLE1BQU0sQ0FBRU0sR0FBRixDQUFOO01BQ1RQLE9BQU8sQ0FBRVEsR0FBRixDQUFQO0lBQ0gsQ0FUTDtFQVdILENBYk0sQ0FBUDtBQWNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmVzdGl2YWwtYXBwLy4vdXRpbHMvY2xvdWRpbmFyeS5qcz84ZTM3Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNsb3VkaW5hcnkgPSByZXF1aXJlKCdjbG91ZGluYXJ5JykudjI7XG5cbi8vSW5pdGlhbGlzYXRpb24gQ2xvdWRpbmFyeVxuY2xvdWRpbmFyeS5jb25maWcoe1xuICAgIGNsb3VkX25hbWU6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NMT1VEX05BTUUsXG4gICAgYXBpX2tleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBQX0tFWSxcbiAgICBhcGlfc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfU0VDUkVULFxufSk7XG5cbi8vIEV4cG9ydCBDbG91ZG5pbmFyeVxuXG5leHBvcnQgZnVuY3Rpb24gdXBsb2FkSW1hZ2UoaW1hZ2VVcGxvYWRlZCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSAoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAvLyBvbiBhcHBlbGxlIGxhIG3DqXRob2RlIGRlIHTDqWzDqWNoYXJnZW1lbnQgQ2xvdWRpbmFyeSBVcGxvYWRlclxuICAgICAgICBjbG91ZGluYXJ5LnVwbG9hZGVyLnVwbG9hZChcbiAgICAgICAgICAgIGltYWdlVXBsb2FkZWQsXG4gICAgICAgICAgICB7ICAgd2lkdGg6IDQ1MCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1MCxcbiAgICAgICAgICAgICAgICBjcm9wOiAnZmlsbCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikgcmVqZWN0IChlcnIpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUgKHJlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfSk7XG59XG5cbiJdLCJuYW1lcyI6WyJjbG91ZGluYXJ5IiwicmVxdWlyZSIsInYyIiwiY29uZmlnIiwiY2xvdWRfbmFtZSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19DTE9VRF9OQU1FIiwiYXBpX2tleSIsIk5FWFRfUFVCTElDX0FQUF9LRVkiLCJhcGlfc2VjcmV0IiwiTkVYVF9QVUJMSUNfQVBJX1NFQ1JFVCIsInVwbG9hZEltYWdlIiwiaW1hZ2VVcGxvYWRlZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidXBsb2FkZXIiLCJ1cGxvYWQiLCJ3aWR0aCIsImhlaWdodCIsImNyb3AiLCJlcnIiLCJyZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/cloudinary.js\n");

/***/ }),

/***/ "(api)/./utils/formidable.js":
/*!*****************************!*\
  !*** ./utils/formidable.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getImage\": () => (/* binding */ getImage)\n/* harmony export */ });\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function getImage(formData) {\n  const data = await new Promise(function (resolve, reject) {\n    const form = new formidable__WEBPACK_IMPORTED_MODULE_0__.IncomingForm({\n      keepExtensions: true\n    });\n    form.parse(formData, function (err, fields, files) {\n      if (err) return reject(err);\n      resolve({\n        fields,\n        files\n      });\n    });\n  });\n  return data.files.image;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9mb3JtaWRhYmxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRU8sZUFBZUMsUUFBZixDQUF3QkMsUUFBeEIsRUFBa0M7RUFDdkMsTUFBTUMsSUFBSSxHQUFHLE1BQU0sSUFBSUMsT0FBSixDQUFZLFVBQVVDLE9BQVYsRUFBbUJDLE1BQW5CLEVBQTJCO0lBQ3hELE1BQU1DLElBQUksR0FBRyxJQUFJUCxvREFBSixDQUFpQjtNQUFFUSxjQUFjLEVBQUU7SUFBbEIsQ0FBakIsQ0FBYjtJQUNBRCxJQUFJLENBQUNFLEtBQUwsQ0FBV1AsUUFBWCxFQUFxQixVQUFVUSxHQUFWLEVBQWVDLE1BQWYsRUFBdUJDLEtBQXZCLEVBQThCO01BQ2pELElBQUlGLEdBQUosRUFBUyxPQUFPSixNQUFNLENBQUNJLEdBQUQsQ0FBYjtNQUNUTCxPQUFPLENBQUM7UUFBRU0sTUFBRjtRQUFVQztNQUFWLENBQUQsQ0FBUDtJQUNELENBSEQ7RUFJRCxDQU5rQixDQUFuQjtFQVFBLE9BQU9ULElBQUksQ0FBQ1MsS0FBTCxDQUFXQyxLQUFsQjtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmVzdGl2YWwtYXBwLy4vdXRpbHMvZm9ybWlkYWJsZS5qcz8zNGNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluY29taW5nRm9ybSB9IGZyb20gXCJmb3JtaWRhYmxlXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJbWFnZShmb3JtRGF0YSkge1xuICBjb25zdCBkYXRhID0gYXdhaXQgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGNvbnN0IGZvcm0gPSBuZXcgSW5jb21pbmdGb3JtKHsga2VlcEV4dGVuc2lvbnM6IHRydWUgfSk7XG4gICAgZm9ybS5wYXJzZShmb3JtRGF0YSwgZnVuY3Rpb24gKGVyciwgZmllbGRzLCBmaWxlcykge1xuICAgICAgaWYgKGVycikgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgcmVzb2x2ZSh7IGZpZWxkcywgZmlsZXMgfSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhLmZpbGVzLmltYWdlO1xufSJdLCJuYW1lcyI6WyJJbmNvbWluZ0Zvcm0iLCJnZXRJbWFnZSIsImZvcm1EYXRhIiwiZGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZm9ybSIsImtlZXBFeHRlbnNpb25zIiwicGFyc2UiLCJlcnIiLCJmaWVsZHMiLCJmaWxlcyIsImltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/formidable.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/profil/[username].js"));
module.exports = __webpack_exports__;

})();