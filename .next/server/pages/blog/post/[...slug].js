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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/blog/post/[...slug].tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/blog/post/[...slug].tsx":
/*!***************************************!*\
  !*** ./pages/blog/post/[...slug].tsx ***!
  \***************************************/
/*! exports provided: getStaticProps, getStaticPaths, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/pages/blog/post/[...slug].tsx\";\nconst getStaticProps = async context => {\n  console.log(context.params.slug[0]);\n  return {\n    props: {}\n  };\n};\nconst getStaticPaths = async () => {\n  return {\n    paths: [],\n    fallback: true\n  };\n};\n\nconst Post = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n    children: \"Hello\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 10\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nL3Bvc3QvWy4uLnNsdWddLnRzeD84OWNkIl0sIm5hbWVzIjpbImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCJwYXJhbXMiLCJzbHVnIiwicHJvcHMiLCJnZXRTdGF0aWNQYXRocyIsInBhdGhzIiwiZmFsbGJhY2siLCJQb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRU8sTUFBTUEsY0FBOEIsR0FBRyxNQUFPQyxPQUFQLElBQW1CO0FBQy9EQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsT0FBTyxDQUFDRyxNQUFSLENBQWVDLElBQWYsQ0FBb0IsQ0FBcEIsQ0FBWjtBQUNBLFNBQU87QUFDTEMsU0FBSyxFQUFFO0FBREYsR0FBUDtBQUdELENBTE07QUFPQSxNQUFNQyxjQUE4QixHQUFHLFlBQVk7QUFDeEQsU0FBTztBQUNMQyxTQUFLLEVBQUUsRUFERjtBQUVMQyxZQUFRLEVBQUU7QUFGTCxHQUFQO0FBSUQsQ0FMTTs7QUFTUCxNQUFNQyxJQUFzQixHQUFHLE1BQU07QUFDbkMsc0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELENBRkQ7O0FBSWVBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYmxvZy9wb3N0L1suLi5zbHVnXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTdGF0aWNQcm9wcywgR2V0U3RhdGljUGF0aHMgfSBmcm9tIFwibmV4dFwiO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgY29uc29sZS5sb2coY29udGV4dC5wYXJhbXMuc2x1Z1swXSk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHt9LFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzOiBHZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwYXRoczogW10sXG4gICAgZmFsbGJhY2s6IHRydWUsXG4gIH07XG59O1xuXG5pbnRlcmZhY2UgSVByb3BzIHt9XG5cbmNvbnN0IFBvc3Q6IFJlYWN0LkZDPElQcm9wcz4gPSAoKSA9PiB7XG4gIHJldHVybiA8cD5IZWxsbzwvcD47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blog/post/[...slug].tsx\n");

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