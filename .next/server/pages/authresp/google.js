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

/***/ "./custom-hooks/useLocalState.ts":
/*!***************************************!*\
  !*** ./custom-hooks/useLocalState.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useLocalState; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction useLocalState(key, defaultValue) {\n  const {\n    0: value,\n    1: setValueState\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(() => {\n    if (false) {}\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const listener = e => {\n      if (e.storageArea === localStorage && e.key === key) {\n        setValueState(JSON.parse(e.newValue));\n      }\n    };\n\n    window.addEventListener(\"storage\", listener);\n\n    if (!isLocalStorageWorking()) {\n      setInterval(() => {\n        if (JSON.stringify(getCookie(key)) != JSON.stringify(value)) {\n          setValueState(getCookie(key));\n        }\n      }, 500);\n    }\n\n    return () => {\n      window.removeEventListener(\"storage\", listener);\n    };\n  }, [key]);\n\n  const setValue = newValue => {\n    setValueState(currentValue => {\n      let value = null;\n\n      if (typeof newValue === \"function\") {\n        value = newValue(currentValue);\n      } else {\n        value = newValue;\n      }\n\n      if (isLocalStorageWorking()) {\n        localStorage.setItem(key, JSON.stringify(value));\n      } else {\n        setCookie(key, value);\n      }\n\n      return value;\n    });\n  };\n\n  return [value, setValue];\n}\n\nconst getValue = key => {\n  if (isLocalStorageWorking()) {\n    // return from local storage\n    const value = localStorage.getItem(key);\n    return value ? JSON.parse(value) : value;\n  } // return from cookie;\n\n\n  return getCookie(key);\n};\n\nconst isLocalStorageWorking = () => {\n  return false;\n  const key = \"local-storage-test\";\n  const value = 19;\n  localStorage.setItem(key, JSON.stringify(value));\n\n  if (JSON.parse(localStorage.getItem(key)) == value) {\n    console.log(\"working\");\n    return true;\n  }\n\n  console.log(\"not working\");\n  return false;\n};\n\nconst setCookie = (key, value) => {\n  js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set(key ? JSON.stringify(key) : key, value ? JSON.stringify(value) : value);\n};\n\nconst getCookie = key => {\n  const result = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get(JSON.stringify(key));\n  return result ? JSON.parse(result) : result;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jdXN0b20taG9va3MvdXNlTG9jYWxTdGF0ZS50cz8zZTFiIl0sIm5hbWVzIjpbInVzZUxvY2FsU3RhdGUiLCJrZXkiLCJkZWZhdWx0VmFsdWUiLCJ2YWx1ZSIsInNldFZhbHVlU3RhdGUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImxpc3RlbmVyIiwiZSIsInN0b3JhZ2VBcmVhIiwibG9jYWxTdG9yYWdlIiwiSlNPTiIsInBhcnNlIiwibmV3VmFsdWUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaXNMb2NhbFN0b3JhZ2VXb3JraW5nIiwic2V0SW50ZXJ2YWwiLCJzdHJpbmdpZnkiLCJnZXRDb29raWUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0VmFsdWUiLCJjdXJyZW50VmFsdWUiLCJzZXRJdGVtIiwic2V0Q29va2llIiwiZ2V0VmFsdWUiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyIsIkNvb2tpZXMiLCJzZXQiLCJyZXN1bHQiLCJnZXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFZSxTQUFTQSxhQUFULENBQTBCQyxHQUExQixFQUF1Q0MsWUFBdkMsRUFBMEQ7QUFDdkUsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQXlCQyxzREFBUSxDQUFDLE1BQU07QUFDNUMsZUFBcUIsRUFFcEI7QUFDRixHQUpzQyxDQUF2QztBQU1BQyx5REFBUyxDQUFDLE1BQU07QUFDZCxVQUFNQyxRQUFRLEdBQUlDLENBQUQsSUFBTztBQUN0QixVQUFJQSxDQUFDLENBQUNDLFdBQUYsS0FBa0JDLFlBQWxCLElBQWtDRixDQUFDLENBQUNQLEdBQUYsS0FBVUEsR0FBaEQsRUFBcUQ7QUFDbkRHLHFCQUFhLENBQUNPLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixDQUFDLENBQUNLLFFBQWIsQ0FBRCxDQUFiO0FBQ0Q7QUFDRixLQUpEOztBQUtBQyxVQUFNLENBQUNDLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DUixRQUFuQzs7QUFFQSxRQUFJLENBQUNTLHFCQUFxQixFQUExQixFQUE4QjtBQUM1QkMsaUJBQVcsQ0FBQyxNQUFNO0FBQ2hCLFlBQUlOLElBQUksQ0FBQ08sU0FBTCxDQUFlQyxTQUFTLENBQUNsQixHQUFELENBQXhCLEtBQWtDVSxJQUFJLENBQUNPLFNBQUwsQ0FBZWYsS0FBZixDQUF0QyxFQUE2RDtBQUMzREMsdUJBQWEsQ0FBQ2UsU0FBUyxDQUFDbEIsR0FBRCxDQUFWLENBQWI7QUFDRDtBQUNGLE9BSlUsRUFJUixHQUpRLENBQVg7QUFLRDs7QUFFRCxXQUFPLE1BQU07QUFDWGEsWUFBTSxDQUFDTSxtQkFBUCxDQUEyQixTQUEzQixFQUFzQ2IsUUFBdEM7QUFDRCxLQUZEO0FBR0QsR0FuQlEsRUFtQk4sQ0FBQ04sR0FBRCxDQW5CTSxDQUFUOztBQXFCQSxRQUFNb0IsUUFBUSxHQUFJUixRQUFELElBQWM7QUFDN0JULGlCQUFhLENBQUVrQixZQUFELElBQWtCO0FBQzlCLFVBQUluQixLQUFLLEdBQUcsSUFBWjs7QUFFQSxVQUFJLE9BQU9VLFFBQVAsS0FBb0IsVUFBeEIsRUFBb0M7QUFDbENWLGFBQUssR0FBR1UsUUFBUSxDQUFDUyxZQUFELENBQWhCO0FBQ0QsT0FGRCxNQUVPO0FBQ0xuQixhQUFLLEdBQUdVLFFBQVI7QUFDRDs7QUFFRCxVQUFJRyxxQkFBcUIsRUFBekIsRUFBNkI7QUFDM0JOLG9CQUFZLENBQUNhLE9BQWIsQ0FBcUJ0QixHQUFyQixFQUEwQlUsSUFBSSxDQUFDTyxTQUFMLENBQWVmLEtBQWYsQ0FBMUI7QUFDRCxPQUZELE1BRU87QUFDTHFCLGlCQUFTLENBQUN2QixHQUFELEVBQU1FLEtBQU4sQ0FBVDtBQUNEOztBQUVELGFBQU9BLEtBQVA7QUFDRCxLQWhCWSxDQUFiO0FBaUJELEdBbEJEOztBQW9CQSxTQUFPLENBQUNBLEtBQUQsRUFBUWtCLFFBQVIsQ0FBUDtBQUNEOztBQUVELE1BQU1JLFFBQVEsR0FBSXhCLEdBQUQsSUFBUztBQUN4QixNQUFJZSxxQkFBcUIsRUFBekIsRUFBNkI7QUFDM0I7QUFDQSxVQUFNYixLQUFLLEdBQUdPLFlBQVksQ0FBQ2dCLE9BQWIsQ0FBcUJ6QixHQUFyQixDQUFkO0FBQ0EsV0FBT0UsS0FBSyxHQUFHUSxJQUFJLENBQUNDLEtBQUwsQ0FBV1QsS0FBWCxDQUFILEdBQXVCQSxLQUFuQztBQUNELEdBTHVCLENBT3hCOzs7QUFDQSxTQUFPZ0IsU0FBUyxDQUFDbEIsR0FBRCxDQUFoQjtBQUNELENBVEQ7O0FBV0EsTUFBTWUscUJBQXFCLEdBQUcsTUFBZTtBQUMzQyxTQUFPLEtBQVA7QUFDQSxRQUFNZixHQUFHLEdBQUcsb0JBQVo7QUFDQSxRQUFNRSxLQUFLLEdBQUcsRUFBZDtBQUVBTyxjQUFZLENBQUNhLE9BQWIsQ0FBcUJ0QixHQUFyQixFQUEwQlUsSUFBSSxDQUFDTyxTQUFMLENBQWVmLEtBQWYsQ0FBMUI7O0FBRUEsTUFBSVEsSUFBSSxDQUFDQyxLQUFMLENBQVdGLFlBQVksQ0FBQ2dCLE9BQWIsQ0FBcUJ6QixHQUFyQixDQUFYLEtBQXlDRSxLQUE3QyxFQUFvRDtBQUNsRHdCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDQSxXQUFPLElBQVA7QUFDRDs7QUFFREQsU0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNBLFNBQU8sS0FBUDtBQUNELENBZEQ7O0FBZ0JBLE1BQU1KLFNBQVMsR0FBRyxDQUFDdkIsR0FBRCxFQUFNRSxLQUFOLEtBQWdCO0FBQ2hDMEIsa0RBQU8sQ0FBQ0MsR0FBUixDQUNFN0IsR0FBRyxHQUFHVSxJQUFJLENBQUNPLFNBQUwsQ0FBZWpCLEdBQWYsQ0FBSCxHQUF5QkEsR0FEOUIsRUFFRUUsS0FBSyxHQUFHUSxJQUFJLENBQUNPLFNBQUwsQ0FBZWYsS0FBZixDQUFILEdBQTJCQSxLQUZsQztBQUlELENBTEQ7O0FBT0EsTUFBTWdCLFNBQVMsR0FBSWxCLEdBQUQsSUFBUztBQUN6QixRQUFNOEIsTUFBTSxHQUFHRixnREFBTyxDQUFDRyxHQUFSLENBQVlyQixJQUFJLENBQUNPLFNBQUwsQ0FBZWpCLEdBQWYsQ0FBWixDQUFmO0FBQ0EsU0FBTzhCLE1BQU0sR0FBR3BCLElBQUksQ0FBQ0MsS0FBTCxDQUFXbUIsTUFBWCxDQUFILEdBQXdCQSxNQUFyQztBQUNELENBSEQiLCJmaWxlIjoiLi9jdXN0b20taG9va3MvdXNlTG9jYWxTdGF0ZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlTG9jYWxTdGF0ZTxUPihrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBhbnkpIHtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZVN0YXRlXSA9IHVzZVN0YXRlKCgpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XG4gICAgICByZXR1cm4gZ2V0VmFsdWUoa2V5KTtcbiAgICB9XG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbGlzdGVuZXIgPSAoZSkgPT4ge1xuICAgICAgaWYgKGUuc3RvcmFnZUFyZWEgPT09IGxvY2FsU3RvcmFnZSAmJiBlLmtleSA9PT0ga2V5KSB7XG4gICAgICAgIHNldFZhbHVlU3RhdGUoSlNPTi5wYXJzZShlLm5ld1ZhbHVlKSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInN0b3JhZ2VcIiwgbGlzdGVuZXIpO1xuXG4gICAgaWYgKCFpc0xvY2FsU3RvcmFnZVdvcmtpbmcoKSkge1xuICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoZ2V0Q29va2llKGtleSkpICE9IEpTT04uc3RyaW5naWZ5KHZhbHVlKSkge1xuICAgICAgICAgIHNldFZhbHVlU3RhdGUoZ2V0Q29va2llKGtleSkpO1xuICAgICAgICB9XG4gICAgICB9LCA1MDApO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN0b3JhZ2VcIiwgbGlzdGVuZXIpO1xuICAgIH07XG4gIH0sIFtrZXldKTtcblxuICBjb25zdCBzZXRWYWx1ZSA9IChuZXdWYWx1ZSkgPT4ge1xuICAgIHNldFZhbHVlU3RhdGUoKGN1cnJlbnRWYWx1ZSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gbnVsbDtcblxuICAgICAgaWYgKHR5cGVvZiBuZXdWYWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHZhbHVlID0gbmV3VmFsdWUoY3VycmVudFZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gbmV3VmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0xvY2FsU3RvcmFnZVdvcmtpbmcoKSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRDb29raWUoa2V5LCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gW3ZhbHVlLCBzZXRWYWx1ZV07XG59XG5cbmNvbnN0IGdldFZhbHVlID0gKGtleSkgPT4ge1xuICBpZiAoaXNMb2NhbFN0b3JhZ2VXb3JraW5nKCkpIHtcbiAgICAvLyByZXR1cm4gZnJvbSBsb2NhbCBzdG9yYWdlXG4gICAgY29uc3QgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgIHJldHVybiB2YWx1ZSA/IEpTT04ucGFyc2UodmFsdWUpIDogdmFsdWU7XG4gIH1cblxuICAvLyByZXR1cm4gZnJvbSBjb29raWU7XG4gIHJldHVybiBnZXRDb29raWUoa2V5KTtcbn07XG5cbmNvbnN0IGlzTG9jYWxTdG9yYWdlV29ya2luZyA9ICgpOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBrZXkgPSBcImxvY2FsLXN0b3JhZ2UtdGVzdFwiO1xuICBjb25zdCB2YWx1ZSA9IDE5O1xuXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcblxuICBpZiAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSA9PSB2YWx1ZSkge1xuICAgIGNvbnNvbGUubG9nKFwid29ya2luZ1wiKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKFwibm90IHdvcmtpbmdcIik7XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IHNldENvb2tpZSA9IChrZXksIHZhbHVlKSA9PiB7XG4gIENvb2tpZXMuc2V0KFxuICAgIGtleSA/IEpTT04uc3RyaW5naWZ5KGtleSkgOiBrZXksXG4gICAgdmFsdWUgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiB2YWx1ZVxuICApO1xufTtcblxuY29uc3QgZ2V0Q29va2llID0gKGtleSkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBDb29raWVzLmdldChKU09OLnN0cmluZ2lmeShrZXkpKTtcbiAgcmV0dXJuIHJlc3VsdCA/IEpTT04ucGFyc2UocmVzdWx0KSA6IHJlc3VsdDtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./custom-hooks/useLocalState.ts\n");

/***/ }),

/***/ "./pages/authresp/google.tsx":
/*!***********************************!*\
  !*** ./pages/authresp/google.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../url */ \"./url.js\");\n/* harmony import */ var _custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../custom-hooks/useLocalState */ \"./custom-hooks/useLocalState.ts\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/pages/authresp/google.tsx\";\n\n\n\n\n\n\n\nconst Google = () => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])();\n  const {\n    code\n  } = router.query;\n  const [user, setUser] = Object(_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"user\", \"\"); // useEffect(() => {\n  //   if (code) {\n  //     login();\n  //   }\n  // }, [code]);\n  // async function login() {\n  //   // get google id token (code)\n  //   const id_token = await getGoogleIdToken(code);\n  //   // get user data from google (id_token)\n  //   const {\n  //     email,\n  //     email_verified,\n  //     at_hash,\n  //     name,\n  //     picture,\n  //   } = await getUserDataFromGoogle(id_token);\n  //   // login to our own backend (\n  //   // id_token, email, at_hash, email_verified, name, picture\n  //   // )\n  //   const token = await backendSignIn({\n  //     id_token,\n  //     email,\n  //     at_hash,\n  //     email_verified,\n  //     name,\n  //     picture,\n  //   });\n  //   // set the user\n  //   const authUser: any = {\n  //     email: email,\n  //     name: name,\n  //     picture: picture,\n  //     token: token,\n  //   };\n  //   setUser(authUser);\n  // }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    if (code) {\n      axios__WEBPACK_IMPORTED_MODULE_2___default()({\n        method: \"get\",\n        url: `/api/auth/google?get=user&code=${code}`\n      }).then(res => {\n        const id_token = res.data.user.data.id_token;\n        axios__WEBPACK_IMPORTED_MODULE_2___default()({\n          method: \"GET\",\n          url: `https://oauth2.googleapis.com/tokeninfo?id_token=${id_token}`\n        }).then(response => {\n          const {\n            email,\n            email_verified,\n            at_hash,\n            name,\n            picture\n          } = response.data;\n          axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`${_url__WEBPACK_IMPORTED_MODULE_3__[\"local_backend_url\"]}/api/auth/googleSignIn`, {\n            id_token: id_token,\n            email: email,\n            at_hash: at_hash,\n            email_verified: email_verified === \"true\" ? true : false,\n            name: name,\n            picture: picture\n          }).then(response => {\n            const token = response.data;\n            const user = {\n              email: email,\n              name: name,\n              picture: picture,\n              token: token\n            };\n            setUser(user);\n            window.close(); // router.replace(\"/\");\n          }).catch(error => {\n            // window.history.back();\n            console.log(error);\n          });\n        }).catch(error => {\n          console.log(error); // window.history.back();\n        });\n      });\n    }\n  }, [code]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"LinearProgress\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Title, {\n        variant: \"h6\",\n        children: \"Please wait while we sign you in...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Title, {\n        children: \"Redirecting you to smartifier.org...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 130,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"CircularProgress\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 131,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Google);\nconst Container = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"withStyles\"])({\n  root: {\n    width: \"100vw\",\n    display: \"flex\",\n    flexDirection: \"column\",\n    alignItems: \"center\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Box\"]);\nconst Title = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"withStyles\"])({\n  root: {\n    textAlign: \"center\",\n    marginTop: 30,\n    marginBottom: 10\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Typography\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hdXRocmVzcC9nb29nbGUudHN4P2ZmZDYiXSwibmFtZXMiOlsiR29vZ2xlIiwicm91dGVyIiwidXNlUm91dGVyIiwiY29kZSIsInF1ZXJ5IiwidXNlciIsInNldFVzZXIiLCJ1c2VMb2NhbFN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJtZXRob2QiLCJ1cmwiLCJ0aGVuIiwicmVzIiwiaWRfdG9rZW4iLCJkYXRhIiwicmVzcG9uc2UiLCJlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIiwiYXRfaGFzaCIsIm5hbWUiLCJwaWN0dXJlIiwicG9zdCIsImxvY2FsX2JhY2tlbmRfdXJsIiwidG9rZW4iLCJ3aW5kb3ciLCJjbG9zZSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiQ29udGFpbmVyIiwid2l0aFN0eWxlcyIsInJvb3QiLCJ3aWR0aCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIkJveCIsIlRpdGxlIiwidGV4dEFsaWduIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiVHlwb2dyYXBoeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFRQTs7QUFPQSxNQUFNQSxNQUF3QixHQUFHLE1BQU07QUFDckMsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFFBQU07QUFBRUM7QUFBRixNQUFXRixNQUFNLENBQUNHLEtBQXhCO0FBRUEsUUFBTSxDQUFDQyxJQUFELEVBQU9DLE9BQVAsSUFBa0JDLDJFQUFhLENBQUMsTUFBRCxFQUFTLEVBQVQsQ0FBckMsQ0FKcUMsQ0FNckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7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bEM7QUFBc0NDLGdCQUFZLEVBQUU7QUFBcEQ7QUFEaUIsQ0FBRCxDQUFWLENBRVhDLDREQUZXLENBQWQiLCJmaWxlIjoiLi9wYWdlcy9hdXRocmVzcC9nb29nbGUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBsb2NhbF9iYWNrZW5kX3VybCB9IGZyb20gXCIuLi8uLi91cmxcIjtcbmltcG9ydCB1c2VMb2NhbFN0YXRlIGZyb20gXCIuLi8uLi9jdXN0b20taG9va3MvdXNlTG9jYWxTdGF0ZVwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBDaXJjdWxhclByb2dyZXNzLFxuICBMaW5lYXJQcm9ncmVzcyxcbiAgVHlwb2dyYXBoeSxcbiAgd2l0aFN0eWxlcyxcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5cbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGdldEdvb2dsZUlkVG9rZW4gZnJvbSBcIi4uLy4uL3JlcG9zaXRvcnkvU2lnbkluL2dldEdvb2dsZUlkVG9rZW5cIjtcbmltcG9ydCBnZXRVc2VyRGF0YUZyb21Hb29nbGUgZnJvbSBcIi4uLy4uL3JlcG9zaXRvcnkvU2lnbkluL2dldFVzZXJEYXRhRnJvbUdvb2dsZVwiO1xuaW1wb3J0IGJhY2tlbmRTaWduSW4gZnJvbSBcIi4uLy4uL3JlcG9zaXRvcnkvU2lnbkluL2JhY2tlbmRTaWduSW5cIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7fVxuXG5jb25zdCBHb29nbGU6IFJlYWN0LkZDPElQcm9wcz4gPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGNvZGUgfSA9IHJvdXRlci5xdWVyeTtcblxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VMb2NhbFN0YXRlKFwidXNlclwiLCBcIlwiKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGlmIChjb2RlKSB7XG4gIC8vICAgICBsb2dpbigpO1xuICAvLyAgIH1cbiAgLy8gfSwgW2NvZGVdKTtcblxuICAvLyBhc3luYyBmdW5jdGlvbiBsb2dpbigpIHtcbiAgLy8gICAvLyBnZXQgZ29vZ2xlIGlkIHRva2VuIChjb2RlKVxuICAvLyAgIGNvbnN0IGlkX3Rva2VuID0gYXdhaXQgZ2V0R29vZ2xlSWRUb2tlbihjb2RlKTtcbiAgLy8gICAvLyBnZXQgdXNlciBkYXRhIGZyb20gZ29vZ2xlIChpZF90b2tlbilcbiAgLy8gICBjb25zdCB7XG4gIC8vICAgICBlbWFpbCxcbiAgLy8gICAgIGVtYWlsX3ZlcmlmaWVkLFxuICAvLyAgICAgYXRfaGFzaCxcbiAgLy8gICAgIG5hbWUsXG4gIC8vICAgICBwaWN0dXJlLFxuICAvLyAgIH0gPSBhd2FpdCBnZXRVc2VyRGF0YUZyb21Hb29nbGUoaWRfdG9rZW4pO1xuICAvLyAgIC8vIGxvZ2luIHRvIG91ciBvd24gYmFja2VuZCAoXG4gIC8vICAgLy8gaWRfdG9rZW4sIGVtYWlsLCBhdF9oYXNoLCBlbWFpbF92ZXJpZmllZCwgbmFtZSwgcGljdHVyZVxuICAvLyAgIC8vIClcbiAgLy8gICBjb25zdCB0b2tlbiA9IGF3YWl0IGJhY2tlbmRTaWduSW4oe1xuICAvLyAgICAgaWRfdG9rZW4sXG4gIC8vICAgICBlbWFpbCxcbiAgLy8gICAgIGF0X2hhc2gsXG4gIC8vICAgICBlbWFpbF92ZXJpZmllZCxcbiAgLy8gICAgIG5hbWUsXG4gIC8vICAgICBwaWN0dXJlLFxuICAvLyAgIH0pO1xuXG4gIC8vICAgLy8gc2V0IHRoZSB1c2VyXG4gIC8vICAgY29uc3QgYXV0aFVzZXI6IGFueSA9IHtcbiAgLy8gICAgIGVtYWlsOiBlbWFpbCxcbiAgLy8gICAgIG5hbWU6IG5hbWUsXG4gIC8vICAgICBwaWN0dXJlOiBwaWN0dXJlLFxuICAvLyAgICAgdG9rZW46IHRva2VuLFxuICAvLyAgIH07XG5cbiAgLy8gICBzZXRVc2VyKGF1dGhVc2VyKTtcbiAgLy8gfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNvZGUpIHtcbiAgICAgIGF4aW9zKHtcbiAgICAgICAgbWV0aG9kOiBcImdldFwiLFxuICAgICAgICB1cmw6IGAvYXBpL2F1dGgvZ29vZ2xlP2dldD11c2VyJmNvZGU9JHtjb2RlfWAsXG4gICAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc3QgaWRfdG9rZW4gPSByZXMuZGF0YS51c2VyLmRhdGEuaWRfdG9rZW47XG5cbiAgICAgICAgYXhpb3Moe1xuICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICB1cmw6IGBodHRwczovL29hdXRoMi5nb29nbGVhcGlzLmNvbS90b2tlbmluZm8/aWRfdG9rZW49JHtpZF90b2tlbn1gLFxuICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICBlbWFpbF92ZXJpZmllZCxcbiAgICAgICAgICAgICAgYXRfaGFzaCxcbiAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgcGljdHVyZSxcbiAgICAgICAgICAgIH0gPSByZXNwb25zZS5kYXRhO1xuXG4gICAgICAgICAgICBheGlvc1xuICAgICAgICAgICAgICAucG9zdChgJHtsb2NhbF9iYWNrZW5kX3VybH0vYXBpL2F1dGgvZ29vZ2xlU2lnbkluYCwge1xuICAgICAgICAgICAgICAgIGlkX3Rva2VuOiBpZF90b2tlbixcbiAgICAgICAgICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgICAgICAgICAgYXRfaGFzaDogYXRfaGFzaCxcbiAgICAgICAgICAgICAgICBlbWFpbF92ZXJpZmllZDogZW1haWxfdmVyaWZpZWQgPT09IFwidHJ1ZVwiID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgcGljdHVyZTogcGljdHVyZSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9rZW4gPSByZXNwb25zZS5kYXRhO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlcjogYW55ID0ge1xuICAgICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgIHBpY3R1cmU6IHBpY3R1cmUsXG4gICAgICAgICAgICAgICAgICB0b2tlbjogdG9rZW4sXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHNldFVzZXIodXNlcik7XG5cbiAgICAgICAgICAgICAgICB3aW5kb3cuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAvLyByb3V0ZXIucmVwbGFjZShcIi9cIik7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAvLyB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIC8vIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW2NvZGVdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGluZWFyUHJvZ3Jlc3MgLz5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxUaXRsZSB2YXJpYW50PVwiaDZcIj5QbGVhc2Ugd2FpdCB3aGlsZSB3ZSBzaWduIHlvdSBpbi4uLjwvVGl0bGU+XG4gICAgICAgIDxUaXRsZT5SZWRpcmVjdGluZyB5b3UgdG8gc21hcnRpZmllci5vcmcuLi48L1RpdGxlPlxuICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyAvPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHb29nbGU7XG5cbmNvbnN0IENvbnRhaW5lciA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgd2lkdGg6IFwiMTAwdndcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIH0sXG59KShCb3gpO1xuXG5jb25zdCBUaXRsZSA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luVG9wOiAzMCwgbWFyZ2luQm90dG9tOiAxMCB9LFxufSkoVHlwb2dyYXBoeSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/authresp/google.tsx\n");

/***/ }),

/***/ "./url.js":
/*!****************!*\
  !*** ./url.js ***!
  \****************/
/*! exports provided: backend_url, local_backend_url, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"backend_url\", function() { return backend_url; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"local_backend_url\", function() { return local_backend_url; });\nconst url = \"https://smartifier.org\"; // const url = \"localhost:8000\";\n// export const backend_url = \"localhost:8000\";\n\nconst backend_url = \"https://admin.smartifier.org\"; // export const local_backend_url = \"localhost:8000\";\n\nconst local_backend_url = \"https://admin.smartifier.org\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (url);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91cmwuanM/MWIwZSJdLCJuYW1lcyI6WyJ1cmwiLCJiYWNrZW5kX3VybCIsImxvY2FsX2JhY2tlbmRfdXJsIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFNQSxHQUFHLEdBQUcsd0JBQVosQyxDQUNBO0FBRUE7O0FBQ08sTUFBTUMsV0FBVyxHQUFHLDhCQUFwQixDLENBQ1A7O0FBQ08sTUFBTUMsaUJBQWlCLEdBQUcsOEJBQTFCO0FBRVFGLGtFQUFmIiwiZmlsZSI6Ii4vdXJsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdXJsID0gXCJodHRwczovL3NtYXJ0aWZpZXIub3JnXCI7XG4vLyBjb25zdCB1cmwgPSBcImxvY2FsaG9zdDo4MDAwXCI7XG5cbi8vIGV4cG9ydCBjb25zdCBiYWNrZW5kX3VybCA9IFwibG9jYWxob3N0OjgwMDBcIjtcbmV4cG9ydCBjb25zdCBiYWNrZW5kX3VybCA9IFwiaHR0cHM6Ly9hZG1pbi5zbWFydGlmaWVyLm9yZ1wiO1xuLy8gZXhwb3J0IGNvbnN0IGxvY2FsX2JhY2tlbmRfdXJsID0gXCJsb2NhbGhvc3Q6ODAwMFwiO1xuZXhwb3J0IGNvbnN0IGxvY2FsX2JhY2tlbmRfdXJsID0gXCJodHRwczovL2FkbWluLnNtYXJ0aWZpZXIub3JnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHVybDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./url.js\n");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiP2I2OTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"js-cookie\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIj8wM2MxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImpzLWNvb2tpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///js-cookie\n");

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