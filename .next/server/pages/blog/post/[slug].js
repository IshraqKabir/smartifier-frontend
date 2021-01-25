module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/blog/post/[slug].tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/blog/post/[slug].tsx":
/*!************************************!*\
  !*** ./pages/blog/post/[slug].tsx ***!
  \************************************/
/*! exports provided: getStaticProps, getStaticPaths, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../url */ \"./url.js\");\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/pages/blog/post/[slug].tsx\";\n\nconst getStaticProps = async context => {\n  const {\n    slug\n  } = context.params;\n  const postRes = await fetch(`${_url__WEBPACK_IMPORTED_MODULE_1__[\"local_backend_url\"]}/`);\n  return {\n    props: {}\n  };\n};\nconst getStaticPaths = async () => {\n  return {\n    paths: [],\n    fallback: true\n  };\n};\n\nconst Post = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n    children: \"Hello\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 10\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nL3Bvc3QvW3NsdWddLnRzeD81NDk3Il0sIm5hbWVzIjpbImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsInNsdWciLCJwYXJhbXMiLCJwb3N0UmVzIiwiZmV0Y2giLCJsb2NhbF9iYWNrZW5kX3VybCIsInByb3BzIiwiZ2V0U3RhdGljUGF0aHMiLCJwYXRocyIsImZhbGxiYWNrIiwiUG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUVPLE1BQU1BLGNBQThCLEdBQUcsTUFBT0MsT0FBUCxJQUFtQjtBQUMvRCxRQUFNO0FBQUVDO0FBQUYsTUFBV0QsT0FBTyxDQUFDRSxNQUF6QjtBQUVBLFFBQU1DLE9BQU8sR0FBRyxNQUFNQyxLQUFLLENBQUUsR0FBRUMsc0RBQWtCLEdBQXRCLENBQTNCO0FBRUEsU0FBTztBQUNMQyxTQUFLLEVBQUU7QUFERixHQUFQO0FBR0QsQ0FSTTtBQVVBLE1BQU1DLGNBQThCLEdBQUcsWUFBWTtBQUN4RCxTQUFPO0FBQ0xDLFNBQUssRUFBRSxFQURGO0FBRUxDLFlBQVEsRUFBRTtBQUZMLEdBQVA7QUFJRCxDQUxNOztBQVNQLE1BQU1DLElBQXNCLEdBQUcsTUFBTTtBQUNuQyxzQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsQ0FGRDs7QUFJZUEsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9ibG9nL3Bvc3QvW3NsdWddLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1Byb3BzLCBHZXRTdGF0aWNQYXRocyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBsb2NhbF9iYWNrZW5kX3VybCB9IGZyb20gXCIuLi8uLi8uLi91cmxcIjtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgc2x1ZyB9ID0gY29udGV4dC5wYXJhbXM7XG5cbiAgY29uc3QgcG9zdFJlcyA9IGF3YWl0IGZldGNoKGAke2xvY2FsX2JhY2tlbmRfdXJsfS9gKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHt9LFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzOiBHZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwYXRoczogW10sXG4gICAgZmFsbGJhY2s6IHRydWUsXG4gIH07XG59O1xuXG5pbnRlcmZhY2UgSVByb3BzIHt9XG5cbmNvbnN0IFBvc3Q6IFJlYWN0LkZDPElQcm9wcz4gPSAoKSA9PiB7XG4gIHJldHVybiA8cD5IZWxsbzwvcD47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blog/post/[slug].tsx\n");

/***/ }),

/***/ "./url.js":
/*!****************!*\
  !*** ./url.js ***!
  \****************/
/*! exports provided: backend_url, local_backend_url, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"backend_url\", function() { return backend_url; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"local_backend_url\", function() { return local_backend_url; });\nconst url = \"https://smartifier.org\";\nconst backend_url = \"https://admin.smartifier.org\";\nconst local_backend_url = \"http://localhost:8000\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (url);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91cmwuanM/MWIwZSJdLCJuYW1lcyI6WyJ1cmwiLCJiYWNrZW5kX3VybCIsImxvY2FsX2JhY2tlbmRfdXJsIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFNQSxHQUFHLEdBQUcsd0JBQVo7QUFFTyxNQUFNQyxXQUFXLEdBQUcsOEJBQXBCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsdUJBQTFCO0FBRVFGLGtFQUFmIiwiZmlsZSI6Ii4vdXJsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdXJsID0gXCJodHRwczovL3NtYXJ0aWZpZXIub3JnXCI7XG5cbmV4cG9ydCBjb25zdCBiYWNrZW5kX3VybCA9IFwiaHR0cHM6Ly9hZG1pbi5zbWFydGlmaWVyLm9yZ1wiO1xuZXhwb3J0IGNvbnN0IGxvY2FsX2JhY2tlbmRfdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwMDBcIjtcblxuZXhwb3J0IGRlZmF1bHQgdXJsOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./url.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });