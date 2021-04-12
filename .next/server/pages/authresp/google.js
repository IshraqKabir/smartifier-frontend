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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst useLocalState = (key, defaultValue) => {\n  const {\n    0: value,\n    1: setValueState\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(() => {\n    if (false) {}\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const listener = e => {\n      if (e.storageArea === localStorage && e.key === key) {\n        setValueState(JSON.parse(e.newValue));\n      }\n    };\n\n    window.addEventListener(\"storage\", listener);\n    setInterval(() => {\n      if (JSON.stringify(getCookie(key)) != JSON.stringify(value)) {\n        setValueState(getCookie(key));\n      }\n    }, 500);\n    return () => {\n      window.removeEventListener(\"storage\", listener);\n    };\n  }, [key]);\n\n  const setValue = newValue => {\n    setValueState(currentValue => {\n      let value = null;\n\n      if (typeof newValue === \"function\") {\n        value = newValue(currentValue);\n      } else {\n        value = newValue;\n      }\n\n      setCookie(key, value);\n      localStorage.setItem(key, JSON.stringify(value));\n      return value;\n    });\n  };\n\n  return [value, setValue];\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useLocalState);\n\nconst getValue = key => {\n  if (isLocalStorageWorking()) {\n    // return from local storage\n    const value = localStorage.getItem(key);\n    return value ? JSON.parse(value) : value;\n  } // return from cookie;\n\n\n  return getCookie(key);\n};\n\nconst isLocalStorageWorking = () => {\n  const key = \"local-storage-test\";\n  const value = 19;\n  localStorage.setItem(key, JSON.stringify(value));\n\n  if (JSON.parse(localStorage.getItem(key)) == value) {\n    console.log(\"working\");\n    return true;\n  }\n\n  console.log(\"not working\");\n  return false;\n};\n\nconst setCookie = (key, value) => {\n  js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set(key ? JSON.stringify(key) : key, value ? JSON.stringify(value) : value);\n};\n\nconst getCookie = key => {\n  const result = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get(JSON.stringify(key));\n  return result ? JSON.parse(result) : result;\n}; // function useLocalState<T>(key: string, defaultValue: T) {\n//   const [value, setValue] = useState(() => {\n//     if (isLocalStorageWorking() == false) {\n//       return getCookie(key);\n//     }\n//     let result = null;\n//     if (process.browser) {\n//       const storedValue = localStorage.getItem(key)\n//         ? JSON.parse(localStorage.getItem(key))\n//         : localStorage.getItem(key);\n//       if (!storedValue) {\n//         result = defaultValue;\n//       }\n//       result = storedValue === null ? defaultValue : storedValue;\n//     } else {\n//       result = defaultValue;\n//     }\n//     return result;\n//   });\n//   useEffect(() => {\n//     const listener = (e) => {\n//       if (e.storageArea === localStorage && e.key === key) {\n//         setValue(JSON.parse(e.newValue));\n//       }\n//     };\n//     window.addEventListener(\"storage\", listener);\n//     return () => {\n//       window.removeEventListener(\"storage\", listener);\n//     };\n//   }, [key]);\n//   const setValueInLocalStorage = (newValue) => {\n//     setValue((currentValue) => {\n//       let value = null;\n//       if (typeof newValue === \"function\") {\n//         setCookie(key, newValue(currentValue));\n//         value = newValue(currentValue);\n//       } else {\n//         setCookie(key, newValue);\n//         value = newValue;\n//       }\n//       // const result =\n//       //   typeof newValue === \"function\" ? newValue(currentValue) : newValue;\n//       // localStorage.setItem(key, JSON.stringify(result));\n//       return value;\n//     });\n//   };\n//   useEffect(() => {\n//     const storedValue = JSON.parse(localStorage.getItem(key));\n//     if (storedValue) {\n//       setValueInLocalStorage(storedValue);\n//     } else {\n//       setValueInLocalStorage(value);\n//     }\n//   }, []);\n//   return [value, setValueInLocalStorage];\n// }\n// export default useLocalState;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jdXN0b20taG9va3MvdXNlTG9jYWxTdGF0ZS50cz8zZTFiIl0sIm5hbWVzIjpbInVzZUxvY2FsU3RhdGUiLCJrZXkiLCJkZWZhdWx0VmFsdWUiLCJ2YWx1ZSIsInNldFZhbHVlU3RhdGUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImxpc3RlbmVyIiwiZSIsInN0b3JhZ2VBcmVhIiwibG9jYWxTdG9yYWdlIiwiSlNPTiIsInBhcnNlIiwibmV3VmFsdWUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2V0SW50ZXJ2YWwiLCJzdHJpbmdpZnkiLCJnZXRDb29raWUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0VmFsdWUiLCJjdXJyZW50VmFsdWUiLCJzZXRDb29raWUiLCJzZXRJdGVtIiwiZ2V0VmFsdWUiLCJpc0xvY2FsU3RvcmFnZVdvcmtpbmciLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyIsIkNvb2tpZXMiLCJzZXQiLCJyZXN1bHQiLCJnZXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBLE1BQU1BLGFBQWEsR0FBRyxDQUFDQyxHQUFELEVBQWNDLFlBQWQsS0FBb0M7QUFDeEQsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQXlCQyxzREFBUSxDQUFDLE1BQU07QUFDNUMsZUFBcUIsRUFFcEI7QUFDRixHQUpzQyxDQUF2QztBQU1BQyx5REFBUyxDQUFDLE1BQU07QUFDZCxVQUFNQyxRQUFRLEdBQUlDLENBQUQsSUFBTztBQUN0QixVQUFJQSxDQUFDLENBQUNDLFdBQUYsS0FBa0JDLFlBQWxCLElBQWtDRixDQUFDLENBQUNQLEdBQUYsS0FBVUEsR0FBaEQsRUFBcUQ7QUFDbkRHLHFCQUFhLENBQUNPLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixDQUFDLENBQUNLLFFBQWIsQ0FBRCxDQUFiO0FBQ0Q7QUFDRixLQUpEOztBQUtBQyxVQUFNLENBQUNDLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DUixRQUFuQztBQUVBUyxlQUFXLENBQUMsTUFBTTtBQUNoQixVQUFJTCxJQUFJLENBQUNNLFNBQUwsQ0FBZUMsU0FBUyxDQUFDakIsR0FBRCxDQUF4QixLQUFrQ1UsSUFBSSxDQUFDTSxTQUFMLENBQWVkLEtBQWYsQ0FBdEMsRUFBNkQ7QUFDM0RDLHFCQUFhLENBQUNjLFNBQVMsQ0FBQ2pCLEdBQUQsQ0FBVixDQUFiO0FBQ0Q7QUFDRixLQUpVLEVBSVIsR0FKUSxDQUFYO0FBTUEsV0FBTyxNQUFNO0FBQ1hhLFlBQU0sQ0FBQ0ssbUJBQVAsQ0FBMkIsU0FBM0IsRUFBc0NaLFFBQXRDO0FBQ0QsS0FGRDtBQUdELEdBakJRLEVBaUJOLENBQUNOLEdBQUQsQ0FqQk0sQ0FBVDs7QUFtQkEsUUFBTW1CLFFBQVEsR0FBSVAsUUFBRCxJQUFjO0FBQzdCVCxpQkFBYSxDQUFFaUIsWUFBRCxJQUFrQjtBQUM5QixVQUFJbEIsS0FBSyxHQUFHLElBQVo7O0FBRUEsVUFBSSxPQUFPVSxRQUFQLEtBQW9CLFVBQXhCLEVBQW9DO0FBQ2xDVixhQUFLLEdBQUdVLFFBQVEsQ0FBQ1EsWUFBRCxDQUFoQjtBQUNELE9BRkQsTUFFTztBQUNMbEIsYUFBSyxHQUFHVSxRQUFSO0FBQ0Q7O0FBRURTLGVBQVMsQ0FBQ3JCLEdBQUQsRUFBTUUsS0FBTixDQUFUO0FBQ0FPLGtCQUFZLENBQUNhLE9BQWIsQ0FBcUJ0QixHQUFyQixFQUEwQlUsSUFBSSxDQUFDTSxTQUFMLENBQWVkLEtBQWYsQ0FBMUI7QUFFQSxhQUFPQSxLQUFQO0FBQ0QsS0FiWSxDQUFiO0FBY0QsR0FmRDs7QUFpQkEsU0FBTyxDQUFDQSxLQUFELEVBQVFpQixRQUFSLENBQVA7QUFDRCxDQTVDRDs7QUE4Q2VwQiw0RUFBZjs7QUFFQSxNQUFNd0IsUUFBUSxHQUFJdkIsR0FBRCxJQUFTO0FBQ3hCLE1BQUl3QixxQkFBcUIsRUFBekIsRUFBNkI7QUFDM0I7QUFDQSxVQUFNdEIsS0FBSyxHQUFHTyxZQUFZLENBQUNnQixPQUFiLENBQXFCekIsR0FBckIsQ0FBZDtBQUNBLFdBQU9FLEtBQUssR0FBR1EsSUFBSSxDQUFDQyxLQUFMLENBQVdULEtBQVgsQ0FBSCxHQUF1QkEsS0FBbkM7QUFDRCxHQUx1QixDQU94Qjs7O0FBQ0EsU0FBT2UsU0FBUyxDQUFDakIsR0FBRCxDQUFoQjtBQUNELENBVEQ7O0FBV0EsTUFBTXdCLHFCQUFxQixHQUFHLE1BQWU7QUFDM0MsUUFBTXhCLEdBQUcsR0FBRyxvQkFBWjtBQUNBLFFBQU1FLEtBQUssR0FBRyxFQUFkO0FBRUFPLGNBQVksQ0FBQ2EsT0FBYixDQUFxQnRCLEdBQXJCLEVBQTBCVSxJQUFJLENBQUNNLFNBQUwsQ0FBZWQsS0FBZixDQUExQjs7QUFFQSxNQUFJUSxJQUFJLENBQUNDLEtBQUwsQ0FBV0YsWUFBWSxDQUFDZ0IsT0FBYixDQUFxQnpCLEdBQXJCLENBQVgsS0FBeUNFLEtBQTdDLEVBQW9EO0FBQ2xEd0IsV0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUNBLFdBQU8sSUFBUDtBQUNEOztBQUVERCxTQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBQ0EsU0FBTyxLQUFQO0FBQ0QsQ0FiRDs7QUFlQSxNQUFNTixTQUFTLEdBQUcsQ0FBQ3JCLEdBQUQsRUFBTUUsS0FBTixLQUFnQjtBQUNoQzBCLGtEQUFPLENBQUNDLEdBQVIsQ0FDRTdCLEdBQUcsR0FBR1UsSUFBSSxDQUFDTSxTQUFMLENBQWVoQixHQUFmLENBQUgsR0FBeUJBLEdBRDlCLEVBRUVFLEtBQUssR0FBR1EsSUFBSSxDQUFDTSxTQUFMLENBQWVkLEtBQWYsQ0FBSCxHQUEyQkEsS0FGbEM7QUFJRCxDQUxEOztBQU9BLE1BQU1lLFNBQVMsR0FBSWpCLEdBQUQsSUFBUztBQUN6QixRQUFNOEIsTUFBTSxHQUFHRixnREFBTyxDQUFDRyxHQUFSLENBQVlyQixJQUFJLENBQUNNLFNBQUwsQ0FBZWhCLEdBQWYsQ0FBWixDQUFmO0FBQ0EsU0FBTzhCLE1BQU0sR0FBR3BCLElBQUksQ0FBQ0MsS0FBTCxDQUFXbUIsTUFBWCxDQUFILEdBQXdCQSxNQUFyQztBQUNELENBSEQsQyxDQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSIsImZpbGUiOiIuL2N1c3RvbS1ob29rcy91c2VMb2NhbFN0YXRlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xuXG5jb25zdCB1c2VMb2NhbFN0YXRlID0gKGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IGFueSkgPT4ge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlU3RhdGVdID0gdXNlU3RhdGUoKCkgPT4ge1xuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgIHJldHVybiBnZXRWYWx1ZShrZXkpO1xuICAgIH1cbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsaXN0ZW5lciA9IChlKSA9PiB7XG4gICAgICBpZiAoZS5zdG9yYWdlQXJlYSA9PT0gbG9jYWxTdG9yYWdlICYmIGUua2V5ID09PSBrZXkpIHtcbiAgICAgICAgc2V0VmFsdWVTdGF0ZShKU09OLnBhcnNlKGUubmV3VmFsdWUpKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic3RvcmFnZVwiLCBsaXN0ZW5lcik7XG5cbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoZ2V0Q29va2llKGtleSkpICE9IEpTT04uc3RyaW5naWZ5KHZhbHVlKSkge1xuICAgICAgICBzZXRWYWx1ZVN0YXRlKGdldENvb2tpZShrZXkpKTtcbiAgICAgIH1cbiAgICB9LCA1MDApO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic3RvcmFnZVwiLCBsaXN0ZW5lcik7XG4gICAgfTtcbiAgfSwgW2tleV0pO1xuXG4gIGNvbnN0IHNldFZhbHVlID0gKG5ld1ZhbHVlKSA9PiB7XG4gICAgc2V0VmFsdWVTdGF0ZSgoY3VycmVudFZhbHVlKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBudWxsO1xuXG4gICAgICBpZiAodHlwZW9mIG5ld1ZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdmFsdWUgPSBuZXdWYWx1ZShjdXJyZW50VmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgIH1cblxuICAgICAgc2V0Q29va2llKGtleSwgdmFsdWUpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIFt2YWx1ZSwgc2V0VmFsdWVdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlTG9jYWxTdGF0ZTtcblxuY29uc3QgZ2V0VmFsdWUgPSAoa2V5KSA9PiB7XG4gIGlmIChpc0xvY2FsU3RvcmFnZVdvcmtpbmcoKSkge1xuICAgIC8vIHJldHVybiBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgICBjb25zdCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgcmV0dXJuIHZhbHVlID8gSlNPTi5wYXJzZSh2YWx1ZSkgOiB2YWx1ZTtcbiAgfVxuXG4gIC8vIHJldHVybiBmcm9tIGNvb2tpZTtcbiAgcmV0dXJuIGdldENvb2tpZShrZXkpO1xufTtcblxuY29uc3QgaXNMb2NhbFN0b3JhZ2VXb3JraW5nID0gKCk6IGJvb2xlYW4gPT4ge1xuICBjb25zdCBrZXkgPSBcImxvY2FsLXN0b3JhZ2UtdGVzdFwiO1xuICBjb25zdCB2YWx1ZSA9IDE5O1xuXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcblxuICBpZiAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSA9PSB2YWx1ZSkge1xuICAgIGNvbnNvbGUubG9nKFwid29ya2luZ1wiKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKFwibm90IHdvcmtpbmdcIik7XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IHNldENvb2tpZSA9IChrZXksIHZhbHVlKSA9PiB7XG4gIENvb2tpZXMuc2V0KFxuICAgIGtleSA/IEpTT04uc3RyaW5naWZ5KGtleSkgOiBrZXksXG4gICAgdmFsdWUgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiB2YWx1ZVxuICApO1xufTtcblxuY29uc3QgZ2V0Q29va2llID0gKGtleSkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBDb29raWVzLmdldChKU09OLnN0cmluZ2lmeShrZXkpKTtcbiAgcmV0dXJuIHJlc3VsdCA/IEpTT04ucGFyc2UocmVzdWx0KSA6IHJlc3VsdDtcbn07XG5cbi8vIGZ1bmN0aW9uIHVzZUxvY2FsU3RhdGU8VD4oa2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogVCkge1xuLy8gICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCgpID0+IHtcbi8vICAgICBpZiAoaXNMb2NhbFN0b3JhZ2VXb3JraW5nKCkgPT0gZmFsc2UpIHtcbi8vICAgICAgIHJldHVybiBnZXRDb29raWUoa2V5KTtcbi8vICAgICB9XG5cbi8vICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbi8vICAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XG4vLyAgICAgICBjb25zdCBzdG9yZWRWYWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSlcbi8vICAgICAgICAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpXG4vLyAgICAgICAgIDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcblxuLy8gICAgICAgaWYgKCFzdG9yZWRWYWx1ZSkge1xuLy8gICAgICAgICByZXN1bHQgPSBkZWZhdWx0VmFsdWU7XG4vLyAgICAgICB9XG4vLyAgICAgICByZXN1bHQgPSBzdG9yZWRWYWx1ZSA9PT0gbnVsbCA/IGRlZmF1bHRWYWx1ZSA6IHN0b3JlZFZhbHVlO1xuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICByZXN1bHQgPSBkZWZhdWx0VmFsdWU7XG4vLyAgICAgfVxuXG4vLyAgICAgcmV0dXJuIHJlc3VsdDtcbi8vICAgfSk7XG5cbi8vICAgdXNlRWZmZWN0KCgpID0+IHtcbi8vICAgICBjb25zdCBsaXN0ZW5lciA9IChlKSA9PiB7XG4vLyAgICAgICBpZiAoZS5zdG9yYWdlQXJlYSA9PT0gbG9jYWxTdG9yYWdlICYmIGUua2V5ID09PSBrZXkpIHtcbi8vICAgICAgICAgc2V0VmFsdWUoSlNPTi5wYXJzZShlLm5ld1ZhbHVlKSk7XG4vLyAgICAgICB9XG4vLyAgICAgfTtcbi8vICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInN0b3JhZ2VcIiwgbGlzdGVuZXIpO1xuXG4vLyAgICAgcmV0dXJuICgpID0+IHtcbi8vICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic3RvcmFnZVwiLCBsaXN0ZW5lcik7XG4vLyAgICAgfTtcbi8vICAgfSwgW2tleV0pO1xuXG4vLyAgIGNvbnN0IHNldFZhbHVlSW5Mb2NhbFN0b3JhZ2UgPSAobmV3VmFsdWUpID0+IHtcbi8vICAgICBzZXRWYWx1ZSgoY3VycmVudFZhbHVlKSA9PiB7XG4vLyAgICAgICBsZXQgdmFsdWUgPSBudWxsO1xuLy8gICAgICAgaWYgKHR5cGVvZiBuZXdWYWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4vLyAgICAgICAgIHNldENvb2tpZShrZXksIG5ld1ZhbHVlKGN1cnJlbnRWYWx1ZSkpO1xuLy8gICAgICAgICB2YWx1ZSA9IG5ld1ZhbHVlKGN1cnJlbnRWYWx1ZSk7XG4vLyAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICBzZXRDb29raWUoa2V5LCBuZXdWYWx1ZSk7XG4vLyAgICAgICAgIHZhbHVlID0gbmV3VmFsdWU7XG4vLyAgICAgICB9XG4vLyAgICAgICAvLyBjb25zdCByZXN1bHQgPVxuLy8gICAgICAgLy8gICB0eXBlb2YgbmV3VmFsdWUgPT09IFwiZnVuY3Rpb25cIiA/IG5ld1ZhbHVlKGN1cnJlbnRWYWx1ZSkgOiBuZXdWYWx1ZTtcbi8vICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG4vLyAgICAgICByZXR1cm4gdmFsdWU7XG4vLyAgICAgfSk7XG4vLyAgIH07XG5cbi8vICAgdXNlRWZmZWN0KCgpID0+IHtcbi8vICAgICBjb25zdCBzdG9yZWRWYWx1ZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSk7XG4vLyAgICAgaWYgKHN0b3JlZFZhbHVlKSB7XG4vLyAgICAgICBzZXRWYWx1ZUluTG9jYWxTdG9yYWdlKHN0b3JlZFZhbHVlKTtcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgc2V0VmFsdWVJbkxvY2FsU3RvcmFnZSh2YWx1ZSk7XG4vLyAgICAgfVxuLy8gICB9LCBbXSk7XG5cbi8vICAgcmV0dXJuIFt2YWx1ZSwgc2V0VmFsdWVJbkxvY2FsU3RvcmFnZV07XG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IHVzZUxvY2FsU3RhdGU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./custom-hooks/useLocalState.ts\n");

/***/ }),

/***/ "./pages/authresp/google.tsx":
/*!***********************************!*\
  !*** ./pages/authresp/google.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../url */ \"./url.js\");\n/* harmony import */ var _custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../custom-hooks/useLocalState */ \"./custom-hooks/useLocalState.ts\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/pages/authresp/google.tsx\";\n\n\n\n\n\n\n\nconst Google = () => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])();\n  const {\n    code\n  } = router.query;\n  const [user, setUser] = Object(_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"user\", \"\");\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    if (code) {\n      axios__WEBPACK_IMPORTED_MODULE_2___default()({\n        method: \"get\",\n        url: `/api/auth/google?get=user&code=${code}`\n      }).then(res => {\n        const id_token = res.data.user.data.id_token;\n        axios__WEBPACK_IMPORTED_MODULE_2___default()({\n          method: \"GET\",\n          url: `https://oauth2.googleapis.com/tokeninfo?id_token=${id_token}`\n        }).then(response => {\n          const {\n            email,\n            email_verified,\n            at_hash,\n            name,\n            picture\n          } = response.data;\n          axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`${_url__WEBPACK_IMPORTED_MODULE_3__[\"local_backend_url\"]}/api/auth/googleSignIn`, {\n            id_token: id_token,\n            email: email,\n            at_hash: at_hash,\n            email_verified: email_verified === \"true\" ? true : false,\n            name: name,\n            picture: picture\n          }).then(response => {\n            const token = response.data;\n            const user = {\n              email: email,\n              name: name,\n              picture: picture,\n              token: token\n            };\n            setUser(user);\n            window.close(); // router.replace(\"/\");\n          }).catch(error => {\n            setUser(\"\");\n            window.history.back();\n          });\n        }).catch(error => {\n          setUser(\"\");\n          window.history.back();\n        });\n      });\n    }\n  }, [code]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"LinearProgress\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Title, {\n        variant: \"h6\",\n        children: \"Please wait while we sign you in...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Title, {\n        children: \"Redirecting you to smartifier.org...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"CircularProgress\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Google);\nconst Container = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"withStyles\"])({\n  root: {\n    width: \"100vw\",\n    display: \"flex\",\n    flexDirection: \"column\",\n    alignItems: \"center\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Box\"]);\nconst Title = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"withStyles\"])({\n  root: {\n    textAlign: \"center\",\n    marginTop: 30,\n    marginBottom: 10\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Typography\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hdXRocmVzcC9nb29nbGUudHN4P2ZmZDYiXSwibmFtZXMiOlsiR29vZ2xlIiwicm91dGVyIiwidXNlUm91dGVyIiwiY29kZSIsInF1ZXJ5IiwidXNlciIsInNldFVzZXIiLCJ1c2VMb2NhbFN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJtZXRob2QiLCJ1cmwiLCJ0aGVuIiwicmVzIiwiaWRfdG9rZW4iLCJkYXRhIiwicmVzcG9uc2UiLCJlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIiwiYXRfaGFzaCIsIm5hbWUiLCJwaWN0dXJlIiwicG9zdCIsImxvY2FsX2JhY2tlbmRfdXJsIiwidG9rZW4iLCJ3aW5kb3ciLCJjbG9zZSIsImNhdGNoIiwiZXJyb3IiLCJoaXN0b3J5IiwiYmFjayIsIkNvbnRhaW5lciIsIndpdGhTdHlsZXMiLCJyb290Iiwid2lkdGgiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJCb3giLCJUaXRsZSIsInRleHRBbGlnbiIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIlR5cG9ncmFwaHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7O0FBSUEsTUFBTUEsTUFBd0IsR0FBRyxNQUFNO0FBQ3JDLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxRQUFNO0FBQUVDO0FBQUYsTUFBV0YsTUFBTSxDQUFDRyxLQUF4QjtBQUVBLFFBQU0sQ0FBQ0MsSUFBRCxFQUFPQyxPQUFQLElBQWtCQywyRUFBYSxDQUFDLE1BQUQsRUFBUyxFQUFULENBQXJDO0FBRUFDLHlEQUFTLENBQUMsTUFBTTtBQUNkLFFBQUlMLElBQUosRUFBVTtBQUNSTSxrREFBSyxDQUFDO0FBQ0pDLGNBQU0sRUFBRSxLQURKO0FBRUpDLFdBQUcsRUFBRyxrQ0FBaUNSLElBQUs7QUFGeEMsT0FBRCxDQUFMLENBR0dTLElBSEgsQ0FHU0MsR0FBRCxJQUFTO0FBQ2YsY0FBTUMsUUFBUSxHQUFHRCxHQUFHLENBQUNFLElBQUosQ0FBU1YsSUFBVCxDQUFjVSxJQUFkLENBQW1CRCxRQUFwQztBQUVBTCxvREFBSyxDQUFDO0FBQ0pDLGdCQUFNLEVBQUUsS0FESjtBQUVKQyxhQUFHLEVBQUcsb0RBQW1ERyxRQUFTO0FBRjlELFNBQUQsQ0FBTCxDQUlHRixJQUpILENBSVNJLFFBQUQsSUFBbUI7QUFDdkIsZ0JBQU07QUFDSkMsaUJBREk7QUFFSkMsMEJBRkk7QUFHSkMsbUJBSEk7QUFJSkMsZ0JBSkk7QUFLSkM7QUFMSSxjQU1GTCxRQUFRLENBQUNELElBTmI7QUFRQU4sc0RBQUssQ0FDRmEsSUFESCxDQUNTLEdBQUVDLHNEQUFrQix3QkFEN0IsRUFDc0Q7QUFDbERULG9CQUFRLEVBQUVBLFFBRHdDO0FBRWxERyxpQkFBSyxFQUFFQSxLQUYyQztBQUdsREUsbUJBQU8sRUFBRUEsT0FIeUM7QUFJbERELDBCQUFjLEVBQUVBLGNBQWMsS0FBSyxNQUFuQixHQUE0QixJQUE1QixHQUFtQyxLQUpEO0FBS2xERSxnQkFBSSxFQUFFQSxJQUw0QztBQU1sREMsbUJBQU8sRUFBRUE7QUFOeUMsV0FEdEQsRUFTR1QsSUFUSCxDQVNTSSxRQUFELElBQWM7QUFDbEIsa0JBQU1RLEtBQUssR0FBR1IsUUFBUSxDQUFDRCxJQUF2QjtBQUVBLGtCQUFNVixJQUFTLEdBQUc7QUFDaEJZLG1CQUFLLEVBQUVBLEtBRFM7QUFFaEJHLGtCQUFJLEVBQUVBLElBRlU7QUFHaEJDLHFCQUFPLEVBQUVBLE9BSE87QUFJaEJHLG1CQUFLLEVBQUVBO0FBSlMsYUFBbEI7QUFPQWxCLG1CQUFPLENBQUNELElBQUQsQ0FBUDtBQUVBb0Isa0JBQU0sQ0FBQ0MsS0FBUCxHQVprQixDQWFsQjtBQUNELFdBdkJILEVBd0JHQyxLQXhCSCxDQXdCVUMsS0FBRCxJQUFXO0FBQ2hCdEIsbUJBQU8sQ0FBQyxFQUFELENBQVA7QUFDQW1CLGtCQUFNLENBQUNJLE9BQVAsQ0FBZUMsSUFBZjtBQUNELFdBM0JIO0FBNEJELFNBekNILEVBMENHSCxLQTFDSCxDQTBDVUMsS0FBRCxJQUFXO0FBQ2hCdEIsaUJBQU8sQ0FBQyxFQUFELENBQVA7QUFDQW1CLGdCQUFNLENBQUNJLE9BQVAsQ0FBZUMsSUFBZjtBQUNELFNBN0NIO0FBOENELE9BcEREO0FBcUREO0FBQ0YsR0F4RFEsRUF3RE4sQ0FBQzNCLElBQUQsQ0F4RE0sQ0FBVDtBQTBEQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSxxRUFBQyxTQUFEO0FBQUEsOEJBQ0UscUVBQUMsS0FBRDtBQUFPLGVBQU8sRUFBQyxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUscUVBQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFLHFFQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUEsa0JBREY7QUFVRCxDQTFFRDs7QUE0RWVILHFFQUFmO0FBRUEsTUFBTStCLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQztBQUMzQkMsTUFBSSxFQUFFO0FBQ0pDLFNBQUssRUFBRSxPQURIO0FBRUpDLFdBQU8sRUFBRSxNQUZMO0FBR0pDLGlCQUFhLEVBQUUsUUFIWDtBQUlKQyxjQUFVLEVBQUU7QUFKUjtBQURxQixDQUFELENBQVYsQ0FPZkMscURBUGUsQ0FBbEI7QUFTQSxNQUFNQyxLQUFLLEdBQUdQLG9FQUFVLENBQUM7QUFDdkJDLE1BQUksRUFBRTtBQUFFTyxhQUFTLEVBQUUsUUFBYjtBQUF1QkMsYUFBUyxFQUFFLEVBQWxDO0FBQXNDQyxnQkFBWSxFQUFFO0FBQXBEO0FBRGlCLENBQUQsQ0FBVixDQUVYQyw0REFGVyxDQUFkIiwiZmlsZSI6Ii4vcGFnZXMvYXV0aHJlc3AvZ29vZ2xlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgbG9jYWxfYmFja2VuZF91cmwgfSBmcm9tIFwiLi4vLi4vdXJsXCI7XG5pbXBvcnQgdXNlTG9jYWxTdGF0ZSBmcm9tIFwiLi4vLi4vY3VzdG9tLWhvb2tzL3VzZUxvY2FsU3RhdGVcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgQ2lyY3VsYXJQcm9ncmVzcyxcbiAgTGluZWFyUHJvZ3Jlc3MsXG4gIFR5cG9ncmFwaHksXG4gIHdpdGhTdHlsZXMsXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7fVxuXG5jb25zdCBHb29nbGU6IFJlYWN0LkZDPElQcm9wcz4gPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGNvZGUgfSA9IHJvdXRlci5xdWVyeTtcblxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VMb2NhbFN0YXRlKFwidXNlclwiLCBcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb2RlKSB7XG4gICAgICBheGlvcyh7XG4gICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgdXJsOiBgL2FwaS9hdXRoL2dvb2dsZT9nZXQ9dXNlciZjb2RlPSR7Y29kZX1gLFxuICAgICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkX3Rva2VuID0gcmVzLmRhdGEudXNlci5kYXRhLmlkX3Rva2VuO1xuXG4gICAgICAgIGF4aW9zKHtcbiAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgdXJsOiBgaHR0cHM6Ly9vYXV0aDIuZ29vZ2xlYXBpcy5jb20vdG9rZW5pbmZvP2lkX3Rva2VuPSR7aWRfdG9rZW59YCxcbiAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgZW1haWxfdmVyaWZpZWQsXG4gICAgICAgICAgICAgIGF0X2hhc2gsXG4gICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgIHBpY3R1cmUsXG4gICAgICAgICAgICB9ID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgICAgLnBvc3QoYCR7bG9jYWxfYmFja2VuZF91cmx9L2FwaS9hdXRoL2dvb2dsZVNpZ25JbmAsIHtcbiAgICAgICAgICAgICAgICBpZF90b2tlbjogaWRfdG9rZW4sXG4gICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgICAgICAgIGF0X2hhc2g6IGF0X2hhc2gsXG4gICAgICAgICAgICAgICAgZW1haWxfdmVyaWZpZWQ6IGVtYWlsX3ZlcmlmaWVkID09PSBcInRydWVcIiA/IHRydWUgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgIHBpY3R1cmU6IHBpY3R1cmUsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXI6IGFueSA9IHtcbiAgICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICBwaWN0dXJlOiBwaWN0dXJlLFxuICAgICAgICAgICAgICAgICAgdG9rZW46IHRva2VuLFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBzZXRVc2VyKHVzZXIpO1xuXG4gICAgICAgICAgICAgICAgd2luZG93LmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgLy8gcm91dGVyLnJlcGxhY2UoXCIvXCIpO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VXNlcihcIlwiKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgc2V0VXNlcihcIlwiKTtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW2NvZGVdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGluZWFyUHJvZ3Jlc3MgLz5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxUaXRsZSB2YXJpYW50PVwiaDZcIj5QbGVhc2Ugd2FpdCB3aGlsZSB3ZSBzaWduIHlvdSBpbi4uLjwvVGl0bGU+XG4gICAgICAgIDxUaXRsZT5SZWRpcmVjdGluZyB5b3UgdG8gc21hcnRpZmllci5vcmcuLi48L1RpdGxlPlxuICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyAvPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHb29nbGU7XG5cbmNvbnN0IENvbnRhaW5lciA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgd2lkdGg6IFwiMTAwdndcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIH0sXG59KShCb3gpO1xuXG5jb25zdCBUaXRsZSA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luVG9wOiAzMCwgbWFyZ2luQm90dG9tOiAxMCB9LFxufSkoVHlwb2dyYXBoeSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/authresp/google.tsx\n");

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