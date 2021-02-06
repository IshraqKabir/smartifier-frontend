module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/authresp/google.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./UtilFunctions/post.js":
/*!*******************************!*\
  !*** ./UtilFunctions/post.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return post; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nasync function post(url, data, callBack, errorCallBack, token, isMultipart = false) {\n  var config = {\n    method: 'post',\n    url,\n    headers: {\n      'Accept': 'application/json',\n      'Authorization': `Bearer ${token}`\n    },\n    data\n  };\n\n  if (isMultipart) {\n    config = _objectSpread(_objectSpread({}, config), {}, {\n      'Content-Type': 'multipart/form-data'\n    });\n  }\n\n  axios__WEBPACK_IMPORTED_MODULE_0___default()(config).then(response => {\n    callBack(response);\n  }).catch(error => {\n    errorCallBack(error);\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9VdGlsRnVuY3Rpb25zL3Bvc3QuanM/NzdjMiJdLCJuYW1lcyI6WyJwb3N0IiwidXJsIiwiZGF0YSIsImNhbGxCYWNrIiwiZXJyb3JDYWxsQmFjayIsInRva2VuIiwiaXNNdWx0aXBhcnQiLCJjb25maWciLCJtZXRob2QiLCJoZWFkZXJzIiwiQXhpb3MiLCJ0aGVuIiwicmVzcG9uc2UiLCJjYXRjaCIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFFZSxlQUFlQSxJQUFmLENBQW9CQyxHQUFwQixFQUF5QkMsSUFBekIsRUFBK0JDLFFBQS9CLEVBQXlDQyxhQUF6QyxFQUF3REMsS0FBeEQsRUFBK0RDLFdBQVcsR0FBRyxLQUE3RSxFQUFvRjtBQUUvRixNQUFJQyxNQUFNLEdBQUc7QUFDVEMsVUFBTSxFQUFFLE1BREM7QUFFVFAsT0FGUztBQUdUUSxXQUFPLEVBQUU7QUFDTCxnQkFBVSxrQkFETDtBQUVMLHVCQUFrQixVQUFTSixLQUFNO0FBRjVCLEtBSEE7QUFPVEg7QUFQUyxHQUFiOztBQVVBLE1BQUlJLFdBQUosRUFBaUI7QUFDYkMsVUFBTSxtQ0FDQ0EsTUFERDtBQUVGLHNCQUFnQjtBQUZkLE1BQU47QUFJSDs7QUFFREcsOENBQUssQ0FBQ0gsTUFBRCxDQUFMLENBQ0tJLElBREwsQ0FDVUMsUUFBUSxJQUFJO0FBQ2RULFlBQVEsQ0FBQ1MsUUFBRCxDQUFSO0FBQ0gsR0FITCxFQUlLQyxLQUpMLENBSVdDLEtBQUssSUFBSTtBQUNaVixpQkFBYSxDQUFDVSxLQUFELENBQWI7QUFDSCxHQU5MO0FBT0giLCJmaWxlIjoiLi9VdGlsRnVuY3Rpb25zL3Bvc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHBvc3QodXJsLCBkYXRhLCBjYWxsQmFjaywgZXJyb3JDYWxsQmFjaywgdG9rZW4sIGlzTXVsdGlwYXJ0ID0gZmFsc2UpIHtcblxuICAgIHZhciBjb25maWcgPSB7XG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICB1cmwsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhLFxuICAgIH07XG5cbiAgICBpZiAoaXNNdWx0aXBhcnQpIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgLi4uY29uZmlnLFxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQXhpb3MoY29uZmlnKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBjYWxsQmFjayhyZXNwb25zZSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGVycm9yQ2FsbEJhY2soZXJyb3IpXG4gICAgICAgIH0pXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./UtilFunctions/post.js\n");

/***/ }),

/***/ "./custom-hooks/useLocalState.ts":
/*!***************************************!*\
  !*** ./custom-hooks/useLocalState.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction useLocalState(key, defaultValue) {\n  const {\n    0: value,\n    1: setValue\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(() => {\n    if (false) {} else {\n      return defaultValue;\n    }\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const listener = e => {\n      if (e.storageArea === localStorage && e.key === key) {\n        setValue(JSON.parse(e.newValue));\n      }\n    };\n\n    window.addEventListener(\"storage\", listener);\n    return () => {\n      window.removeEventListener(\"storage\", listener);\n    };\n  }, [key]);\n\n  const setValueInLocalStorage = newValue => {\n    setValue(currentValue => {\n      const result = typeof newValue === \"function\" ? newValue(currentValue) : newValue;\n      localStorage.setItem(key, JSON.stringify(result));\n      return result;\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const storedValue = JSON.parse(localStorage.getItem(key));\n\n    if (storedValue) {\n      setValueInLocalStorage(storedValue);\n    } else {\n      setValueInLocalStorage(value);\n    }\n  }, []);\n  return [value, setValueInLocalStorage];\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (useLocalState);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jdXN0b20taG9va3MvdXNlTG9jYWxTdGF0ZS50cz8zZTFiIl0sIm5hbWVzIjpbInVzZUxvY2FsU3RhdGUiLCJrZXkiLCJkZWZhdWx0VmFsdWUiLCJ2YWx1ZSIsInNldFZhbHVlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJsaXN0ZW5lciIsImUiLCJzdG9yYWdlQXJlYSIsImxvY2FsU3RvcmFnZSIsIkpTT04iLCJwYXJzZSIsIm5ld1ZhbHVlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXRWYWx1ZUluTG9jYWxTdG9yYWdlIiwiY3VycmVudFZhbHVlIiwicmVzdWx0Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInN0b3JlZFZhbHVlIiwiZ2V0SXRlbSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUEsU0FBU0EsYUFBVCxDQUEwQkMsR0FBMUIsRUFBdUNDLFlBQXZDLEVBQXdEO0FBQ3BELFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsc0RBQVEsQ0FBQyxNQUFNO0FBQ3JDLGVBQXFCLEVBQXJCLE1BTU87QUFDSCxhQUFPSCxZQUFQO0FBQ0g7QUFDSixHQVZpQyxDQUFsQztBQVlBSSx5REFBUyxDQUFDLE1BQU07QUFDWixVQUFNQyxRQUFRLEdBQUlDLENBQUQsSUFBTztBQUNwQixVQUFJQSxDQUFDLENBQUNDLFdBQUYsS0FBa0JDLFlBQWxCLElBQWtDRixDQUFDLENBQUNQLEdBQUYsS0FBVUEsR0FBaEQsRUFBcUQ7QUFDakRHLGdCQUFRLENBQUNPLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixDQUFDLENBQUNLLFFBQWIsQ0FBRCxDQUFSO0FBQ0g7QUFDSixLQUpEOztBQUtBQyxVQUFNLENBQUNDLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DUixRQUFuQztBQUVBLFdBQU8sTUFBTTtBQUNUTyxZQUFNLENBQUNFLG1CQUFQLENBQTJCLFNBQTNCLEVBQXNDVCxRQUF0QztBQUNILEtBRkQ7QUFHSCxHQVhRLEVBV04sQ0FBQ04sR0FBRCxDQVhNLENBQVQ7O0FBYUEsUUFBTWdCLHNCQUFzQixHQUFJSixRQUFELElBQWM7QUFDekNULFlBQVEsQ0FBRWMsWUFBRCxJQUFrQjtBQUN2QixZQUFNQyxNQUFNLEdBQ1IsT0FBT04sUUFBUCxLQUFvQixVQUFwQixHQUFpQ0EsUUFBUSxDQUFDSyxZQUFELENBQXpDLEdBQTBETCxRQUQ5RDtBQUVBSCxrQkFBWSxDQUFDVSxPQUFiLENBQXFCbkIsR0FBckIsRUFBMEJVLElBQUksQ0FBQ1UsU0FBTCxDQUFlRixNQUFmLENBQTFCO0FBQ0EsYUFBT0EsTUFBUDtBQUNILEtBTE8sQ0FBUjtBQU1ILEdBUEQ7O0FBU0FiLHlEQUFTLENBQUMsTUFBTTtBQUNaLFVBQU1nQixXQUFXLEdBQUdYLElBQUksQ0FBQ0MsS0FBTCxDQUFXRixZQUFZLENBQUNhLE9BQWIsQ0FBcUJ0QixHQUFyQixDQUFYLENBQXBCOztBQUNBLFFBQUlxQixXQUFKLEVBQWlCO0FBQ2JMLDRCQUFzQixDQUFDSyxXQUFELENBQXRCO0FBQ0gsS0FGRCxNQUVPO0FBQ0hMLDRCQUFzQixDQUFDZCxLQUFELENBQXRCO0FBQ0g7QUFDSixHQVBRLEVBT04sRUFQTSxDQUFUO0FBU0EsU0FBTyxDQUFDQSxLQUFELEVBQVFjLHNCQUFSLENBQVA7QUFDSDs7QUFBQTtBQUVjakIsNEVBQWYiLCJmaWxlIjoiLi9jdXN0b20taG9va3MvdXNlTG9jYWxTdGF0ZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gdXNlTG9jYWxTdGF0ZTxUPihrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBUKSB7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgoKSA9PiB7XG4gICAgICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlZFZhbHVlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcbiAgICAgICAgICAgIGlmICghc3RvcmVkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN0b3JlZFZhbHVlID09PSBudWxsID8gZGVmYXVsdFZhbHVlIDogc3RvcmVkVmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5zdG9yYWdlQXJlYSA9PT0gbG9jYWxTdG9yYWdlICYmIGUua2V5ID09PSBrZXkpIHtcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZShKU09OLnBhcnNlKGUubmV3VmFsdWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzdG9yYWdlXCIsIGxpc3RlbmVyKTtcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdG9yYWdlXCIsIGxpc3RlbmVyKTtcbiAgICAgICAgfTtcbiAgICB9LCBba2V5XSk7XG5cbiAgICBjb25zdCBzZXRWYWx1ZUluTG9jYWxTdG9yYWdlID0gKG5ld1ZhbHVlKSA9PiB7XG4gICAgICAgIHNldFZhbHVlKChjdXJyZW50VmFsdWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9XG4gICAgICAgICAgICAgICAgdHlwZW9mIG5ld1ZhbHVlID09PSBcImZ1bmN0aW9uXCIgPyBuZXdWYWx1ZShjdXJyZW50VmFsdWUpIDogbmV3VmFsdWU7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0b3JlZFZhbHVlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcbiAgICAgICAgaWYgKHN0b3JlZFZhbHVlKSB7XG4gICAgICAgICAgICBzZXRWYWx1ZUluTG9jYWxTdG9yYWdlKHN0b3JlZFZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFZhbHVlSW5Mb2NhbFN0b3JhZ2UodmFsdWUpO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIFt2YWx1ZSwgc2V0VmFsdWVJbkxvY2FsU3RvcmFnZV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VMb2NhbFN0YXRlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./custom-hooks/useLocalState.ts\n");

/***/ }),

/***/ "./pages/authresp/google.tsx":
/*!***********************************!*\
  !*** ./pages/authresp/google.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _UtilFunctions_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../UtilFunctions/post */ \"./UtilFunctions/post.js\");\n/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../url */ \"./url.js\");\n/* harmony import */ var _custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../custom-hooks/useLocalState */ \"./custom-hooks/useLocalState.ts\");\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/pages/authresp/google.tsx\";\n\n\n\n\n\n\n\nconst Google = () => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  const {\n    code\n  } = router.query;\n  const [user, setUser] = Object(_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"user\", \"\");\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    if (code) {\n      axios__WEBPACK_IMPORTED_MODULE_3___default()({\n        method: \"get\",\n        url: `/api/auth/google?get=user&code=${code}`\n      }).then(res => {\n        const id_token = res.data.user.data.id_token;\n        Object(_UtilFunctions_post__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(`${_url__WEBPACK_IMPORTED_MODULE_5__[\"backend_url\"]}/api/auth/google/verify`, {\n          id_token: id_token,\n          code: code\n        }, response => {\n          setUser(response.data);\n        }, () => {\n          setUser(\"\");\n        });\n      });\n    }\n  }, [code]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n    children: \"hello\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 10\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Google);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hdXRocmVzcC9nb29nbGUudHN4P2ZmZDYiXSwibmFtZXMiOlsiR29vZ2xlIiwicm91dGVyIiwidXNlUm91dGVyIiwiY29kZSIsInF1ZXJ5IiwidXNlciIsInNldFVzZXIiLCJ1c2VMb2NhbFN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJtZXRob2QiLCJ1cmwiLCJ0aGVuIiwicmVzIiwiaWRfdG9rZW4iLCJkYXRhIiwicG9zdCIsImJhY2tlbmRfdXJsIiwicmVzcG9uc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBLE1BQU1BLE1BQXdCLEdBQUcsTUFBTTtBQUNyQyxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQVdGLE1BQU0sQ0FBQ0csS0FBeEI7QUFFQSxRQUFNLENBQUNDLElBQUQsRUFBT0MsT0FBUCxJQUFrQkMsMkVBQWEsQ0FBTSxNQUFOLEVBQWMsRUFBZCxDQUFyQztBQUVBQyx5REFBUyxDQUFDLE1BQU07QUFDZCxRQUFJTCxJQUFKLEVBQVU7QUFDUk0sa0RBQUssQ0FBQztBQUNKQyxjQUFNLEVBQUUsS0FESjtBQUVKQyxXQUFHLEVBQUcsa0NBQWlDUixJQUFLO0FBRnhDLE9BQUQsQ0FBTCxDQUdHUyxJQUhILENBR1NDLEdBQUQsSUFBUztBQUNmLGNBQU1DLFFBQVEsR0FBR0QsR0FBRyxDQUFDRSxJQUFKLENBQVNWLElBQVQsQ0FBY1UsSUFBZCxDQUFtQkQsUUFBcEM7QUFFQUUsMkVBQUksQ0FDRCxHQUFFQyxnREFBWSx5QkFEYixFQUVGO0FBQUVILGtCQUFRLEVBQUVBLFFBQVo7QUFBc0JYLGNBQUksRUFBRUE7QUFBNUIsU0FGRSxFQUdEZSxRQUFELElBQW1CO0FBQ2pCWixpQkFBTyxDQUFDWSxRQUFRLENBQUNILElBQVYsQ0FBUDtBQUNELFNBTEMsRUFNRixNQUFNO0FBQ0pULGlCQUFPLENBQUMsRUFBRCxDQUFQO0FBQ0QsU0FSQyxDQUFKO0FBVUQsT0FoQkQ7QUFpQkQ7QUFDRixHQXBCUSxFQW9CTixDQUFDSCxJQUFELENBcEJNLENBQVQ7QUFzQkEsc0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELENBN0JEOztBQStCZUgscUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9hdXRocmVzcC9nb29nbGUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBwb3N0IGZyb20gXCIuLi8uLi9VdGlsRnVuY3Rpb25zL3Bvc3RcIjtcbmltcG9ydCB7IGJhY2tlbmRfdXJsIH0gZnJvbSBcIi4uLy4uL3VybFwiO1xuaW1wb3J0IHVzZUxvY2FsU3RhdGUgZnJvbSBcIi4uLy4uL2N1c3RvbS1ob29rcy91c2VMb2NhbFN0YXRlXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge31cblxuY29uc3QgR29vZ2xlOiBSZWFjdC5GQzxJUHJvcHM+ID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBjb2RlIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlTG9jYWxTdGF0ZTxhbnk+KFwidXNlclwiLCBcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb2RlKSB7XG4gICAgICBheGlvcyh7XG4gICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgdXJsOiBgL2FwaS9hdXRoL2dvb2dsZT9nZXQ9dXNlciZjb2RlPSR7Y29kZX1gLFxuICAgICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkX3Rva2VuID0gcmVzLmRhdGEudXNlci5kYXRhLmlkX3Rva2VuO1xuXG4gICAgICAgIHBvc3QoXG4gICAgICAgICAgYCR7YmFja2VuZF91cmx9L2FwaS9hdXRoL2dvb2dsZS92ZXJpZnlgLFxuICAgICAgICAgIHsgaWRfdG9rZW46IGlkX3Rva2VuLCBjb2RlOiBjb2RlIH0sXG4gICAgICAgICAgKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHNldFVzZXIocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBzZXRVc2VyKFwiXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW2NvZGVdKTtcblxuICByZXR1cm4gPHA+aGVsbG88L3A+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR29vZ2xlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/authresp/google.tsx\n");

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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

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