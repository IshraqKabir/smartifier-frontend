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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction useLocalState(key, defaultValue) {\n  const {\n    0: value,\n    1: setValue\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(() => {\n    if (false) {} else {\n      return defaultValue;\n    }\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const listener = e => {\n      if (e.storageArea === localStorage && e.key === key) {\n        setValue(JSON.parse(e.newValue));\n      }\n    };\n\n    window.addEventListener(\"storage\", listener);\n    return () => {\n      window.removeEventListener(\"storage\", listener);\n    };\n  }, [key]);\n\n  const setValueInLocalStorage = newValue => {\n    setValue(currentValue => {\n      const result = typeof newValue === \"function\" ? newValue(currentValue) : newValue;\n      localStorage.setItem(key, JSON.stringify(result));\n      return result;\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const storedValue = JSON.parse(localStorage.getItem(key));\n\n    if (storedValue) {\n      setValueInLocalStorage(storedValue);\n    } else {\n      setValueInLocalStorage(value);\n    }\n  }, []);\n  return [value, setValueInLocalStorage];\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (useLocalState);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jdXN0b20taG9va3MvdXNlTG9jYWxTdGF0ZS50cz8zZTFiIl0sIm5hbWVzIjpbInVzZUxvY2FsU3RhdGUiLCJrZXkiLCJkZWZhdWx0VmFsdWUiLCJ2YWx1ZSIsInNldFZhbHVlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJsaXN0ZW5lciIsImUiLCJzdG9yYWdlQXJlYSIsImxvY2FsU3RvcmFnZSIsIkpTT04iLCJwYXJzZSIsIm5ld1ZhbHVlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXRWYWx1ZUluTG9jYWxTdG9yYWdlIiwiY3VycmVudFZhbHVlIiwicmVzdWx0Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInN0b3JlZFZhbHVlIiwiZ2V0SXRlbSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUEsU0FBU0EsYUFBVCxDQUEwQkMsR0FBMUIsRUFBdUNDLFlBQXZDLEVBQXdEO0FBQ3BELFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsc0RBQVEsQ0FBQyxNQUFNO0FBQ3JDLGVBQXFCLEVBQXJCLE1BTU87QUFDSCxhQUFPSCxZQUFQO0FBQ0g7QUFDSixHQVZpQyxDQUFsQztBQVlBSSx5REFBUyxDQUFDLE1BQU07QUFDWixVQUFNQyxRQUFRLEdBQUlDLENBQUQsSUFBTztBQUNwQixVQUFJQSxDQUFDLENBQUNDLFdBQUYsS0FBa0JDLFlBQWxCLElBQWtDRixDQUFDLENBQUNQLEdBQUYsS0FBVUEsR0FBaEQsRUFBcUQ7QUFDakRHLGdCQUFRLENBQUNPLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixDQUFDLENBQUNLLFFBQWIsQ0FBRCxDQUFSO0FBQ0g7QUFDSixLQUpEOztBQUtBQyxVQUFNLENBQUNDLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DUixRQUFuQztBQUVBLFdBQU8sTUFBTTtBQUNUTyxZQUFNLENBQUNFLG1CQUFQLENBQTJCLFNBQTNCLEVBQXNDVCxRQUF0QztBQUNILEtBRkQ7QUFHSCxHQVhRLEVBV04sQ0FBQ04sR0FBRCxDQVhNLENBQVQ7O0FBYUEsUUFBTWdCLHNCQUFzQixHQUFJSixRQUFELElBQWM7QUFDekNULFlBQVEsQ0FBRWMsWUFBRCxJQUFrQjtBQUN2QixZQUFNQyxNQUFNLEdBQ1IsT0FBT04sUUFBUCxLQUFvQixVQUFwQixHQUFpQ0EsUUFBUSxDQUFDSyxZQUFELENBQXpDLEdBQTBETCxRQUQ5RDtBQUVBSCxrQkFBWSxDQUFDVSxPQUFiLENBQXFCbkIsR0FBckIsRUFBMEJVLElBQUksQ0FBQ1UsU0FBTCxDQUFlRixNQUFmLENBQTFCO0FBQ0EsYUFBT0EsTUFBUDtBQUNILEtBTE8sQ0FBUjtBQU1ILEdBUEQ7O0FBU0FiLHlEQUFTLENBQUMsTUFBTTtBQUNaLFVBQU1nQixXQUFXLEdBQUdYLElBQUksQ0FBQ0MsS0FBTCxDQUFXRixZQUFZLENBQUNhLE9BQWIsQ0FBcUJ0QixHQUFyQixDQUFYLENBQXBCOztBQUNBLFFBQUlxQixXQUFKLEVBQWlCO0FBQ2JMLDRCQUFzQixDQUFDSyxXQUFELENBQXRCO0FBQ0gsS0FGRCxNQUVPO0FBQ0hMLDRCQUFzQixDQUFDZCxLQUFELENBQXRCO0FBQ0g7QUFDSixHQVBRLEVBT04sRUFQTSxDQUFUO0FBU0EsU0FBTyxDQUFDQSxLQUFELEVBQVFjLHNCQUFSLENBQVA7QUFDSDs7QUFBQTtBQUVjakIsNEVBQWYiLCJmaWxlIjoiLi9jdXN0b20taG9va3MvdXNlTG9jYWxTdGF0ZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gdXNlTG9jYWxTdGF0ZTxUPihrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBUKSB7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgoKSA9PiB7XG4gICAgICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlZFZhbHVlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcbiAgICAgICAgICAgIGlmICghc3RvcmVkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN0b3JlZFZhbHVlID09PSBudWxsID8gZGVmYXVsdFZhbHVlIDogc3RvcmVkVmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5zdG9yYWdlQXJlYSA9PT0gbG9jYWxTdG9yYWdlICYmIGUua2V5ID09PSBrZXkpIHtcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZShKU09OLnBhcnNlKGUubmV3VmFsdWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzdG9yYWdlXCIsIGxpc3RlbmVyKTtcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdG9yYWdlXCIsIGxpc3RlbmVyKTtcbiAgICAgICAgfTtcbiAgICB9LCBba2V5XSk7XG5cbiAgICBjb25zdCBzZXRWYWx1ZUluTG9jYWxTdG9yYWdlID0gKG5ld1ZhbHVlKSA9PiB7XG4gICAgICAgIHNldFZhbHVlKChjdXJyZW50VmFsdWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9XG4gICAgICAgICAgICAgICAgdHlwZW9mIG5ld1ZhbHVlID09PSBcImZ1bmN0aW9uXCIgPyBuZXdWYWx1ZShjdXJyZW50VmFsdWUpIDogbmV3VmFsdWU7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0b3JlZFZhbHVlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcbiAgICAgICAgaWYgKHN0b3JlZFZhbHVlKSB7XG4gICAgICAgICAgICBzZXRWYWx1ZUluTG9jYWxTdG9yYWdlKHN0b3JlZFZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFZhbHVlSW5Mb2NhbFN0b3JhZ2UodmFsdWUpO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIFt2YWx1ZSwgc2V0VmFsdWVJbkxvY2FsU3RvcmFnZV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VMb2NhbFN0YXRlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./custom-hooks/useLocalState.ts\n");

/***/ }),

/***/ "./pages/authresp/google.tsx":
/*!***********************************!*\
  !*** ./pages/authresp/google.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../url */ \"./url.js\");\n/* harmony import */ var _custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../custom-hooks/useLocalState */ \"./custom-hooks/useLocalState.ts\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/pages/authresp/google.tsx\";\n\n\n\n\n\n\n\nconst Google = () => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])();\n  const {\n    code\n  } = router.query;\n  const [user, setUser] = Object(_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"user\", \"\");\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    if (code) {\n      axios__WEBPACK_IMPORTED_MODULE_2___default()({\n        method: \"get\",\n        url: `/api/auth/google?get=user&code=${code}`\n      }).then(res => {\n        const id_token = res.data.user.data.id_token;\n        axios__WEBPACK_IMPORTED_MODULE_2___default()({\n          method: \"GET\",\n          url: `https://oauth2.googleapis.com/tokeninfo?id_token=${id_token}`\n        }).then(response => {\n          const {\n            email,\n            email_verified,\n            at_hash,\n            name,\n            picture\n          } = response.data;\n          axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`${_url__WEBPACK_IMPORTED_MODULE_3__[\"local_backend_url\"]}/api/auth/googleSignIn`, {\n            id_token: id_token,\n            email: email,\n            at_hash: at_hash,\n            email_verified: email_verified === \"true\" ? true : false,\n            name: name,\n            picture: picture\n          }).then(response => {\n            const token = response.data;\n            const user = {\n              email: email,\n              name: name,\n              picture: picture,\n              token: token\n            };\n            setUser(user);\n            router.replace(\"/\");\n          }).catch(error => {\n            setUser(\"\");\n            window.history.back();\n          });\n        }).catch(error => {\n          setUser(\"\");\n          window.history.back();\n        });\n      });\n    }\n  }, [code]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"LinearProgress\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Title, {\n        variant: \"h6\",\n        children: \"Please wait while we sign you in...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Title, {\n        children: \"Redirecting you to smartifier.org...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"CircularProgress\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Google);\nconst Container = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"withStyles\"])({\n  root: {\n    width: \"100vw\",\n    display: \"flex\",\n    flexDirection: \"column\",\n    alignItems: \"center\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Box\"]);\nconst Title = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"withStyles\"])({\n  root: {\n    textAlign: \"center\",\n    marginTop: 30,\n    marginBottom: 10\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Typography\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hdXRocmVzcC9nb29nbGUudHN4P2ZmZDYiXSwibmFtZXMiOlsiR29vZ2xlIiwicm91dGVyIiwidXNlUm91dGVyIiwiY29kZSIsInF1ZXJ5IiwidXNlciIsInNldFVzZXIiLCJ1c2VMb2NhbFN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJtZXRob2QiLCJ1cmwiLCJ0aGVuIiwicmVzIiwiaWRfdG9rZW4iLCJkYXRhIiwicmVzcG9uc2UiLCJlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIiwiYXRfaGFzaCIsIm5hbWUiLCJwaWN0dXJlIiwicG9zdCIsImxvY2FsX2JhY2tlbmRfdXJsIiwidG9rZW4iLCJyZXBsYWNlIiwiY2F0Y2giLCJlcnJvciIsIndpbmRvdyIsImhpc3RvcnkiLCJiYWNrIiwiQ29udGFpbmVyIiwid2l0aFN0eWxlcyIsInJvb3QiLCJ3aWR0aCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIkJveCIsIlRpdGxlIiwidGV4dEFsaWduIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiVHlwb2dyYXBoeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFRQTs7QUFJQSxNQUFNQSxNQUF3QixHQUFHLE1BQU07QUFDckMsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFFBQU07QUFBRUM7QUFBRixNQUFXRixNQUFNLENBQUNHLEtBQXhCO0FBRUEsUUFBTSxDQUFDQyxJQUFELEVBQU9DLE9BQVAsSUFBa0JDLDJFQUFhLENBQUMsTUFBRCxFQUFTLEVBQVQsQ0FBckM7QUFFQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSUwsSUFBSixFQUFVO0FBQ1JNLGtEQUFLLENBQUM7QUFDSkMsY0FBTSxFQUFFLEtBREo7QUFFSkMsV0FBRyxFQUFHLGtDQUFpQ1IsSUFBSztBQUZ4QyxPQUFELENBQUwsQ0FHR1MsSUFISCxDQUdTQyxHQUFELElBQVM7QUFDZixjQUFNQyxRQUFRLEdBQUdELEdBQUcsQ0FBQ0UsSUFBSixDQUFTVixJQUFULENBQWNVLElBQWQsQ0FBbUJELFFBQXBDO0FBRUFMLG9EQUFLLENBQUM7QUFDSkMsZ0JBQU0sRUFBRSxLQURKO0FBRUpDLGFBQUcsRUFBRyxvREFBbURHLFFBQVM7QUFGOUQsU0FBRCxDQUFMLENBSUdGLElBSkgsQ0FJU0ksUUFBRCxJQUFtQjtBQUN2QixnQkFBTTtBQUNKQyxpQkFESTtBQUVKQywwQkFGSTtBQUdKQyxtQkFISTtBQUlKQyxnQkFKSTtBQUtKQztBQUxJLGNBTUZMLFFBQVEsQ0FBQ0QsSUFOYjtBQVFBTixzREFBSyxDQUNGYSxJQURILENBQ1MsR0FBRUMsc0RBQWtCLHdCQUQ3QixFQUNzRDtBQUNsRFQsb0JBQVEsRUFBRUEsUUFEd0M7QUFFbERHLGlCQUFLLEVBQUVBLEtBRjJDO0FBR2xERSxtQkFBTyxFQUFFQSxPQUh5QztBQUlsREQsMEJBQWMsRUFBRUEsY0FBYyxLQUFLLE1BQW5CLEdBQTRCLElBQTVCLEdBQW1DLEtBSkQ7QUFLbERFLGdCQUFJLEVBQUVBLElBTDRDO0FBTWxEQyxtQkFBTyxFQUFFQTtBQU55QyxXQUR0RCxFQVNHVCxJQVRILENBU1NJLFFBQUQsSUFBYztBQUNsQixrQkFBTVEsS0FBSyxHQUFHUixRQUFRLENBQUNELElBQXZCO0FBRUEsa0JBQU1WLElBQVMsR0FBRztBQUNoQlksbUJBQUssRUFBRUEsS0FEUztBQUVoQkcsa0JBQUksRUFBRUEsSUFGVTtBQUdoQkMscUJBQU8sRUFBRUEsT0FITztBQUloQkcsbUJBQUssRUFBRUE7QUFKUyxhQUFsQjtBQU9BbEIsbUJBQU8sQ0FBQ0QsSUFBRCxDQUFQO0FBRUFKLGtCQUFNLENBQUN3QixPQUFQLENBQWUsR0FBZjtBQUNELFdBdEJILEVBdUJHQyxLQXZCSCxDQXVCVUMsS0FBRCxJQUFXO0FBQ2hCckIsbUJBQU8sQ0FBQyxFQUFELENBQVA7QUFDQXNCLGtCQUFNLENBQUNDLE9BQVAsQ0FBZUMsSUFBZjtBQUNELFdBMUJIO0FBMkJELFNBeENILEVBeUNHSixLQXpDSCxDQXlDVUMsS0FBRCxJQUFXO0FBQ2hCckIsaUJBQU8sQ0FBQyxFQUFELENBQVA7QUFDQXNCLGdCQUFNLENBQUNDLE9BQVAsQ0FBZUMsSUFBZjtBQUNELFNBNUNIO0FBNkNELE9BbkREO0FBb0REO0FBQ0YsR0F2RFEsRUF1RE4sQ0FBQzNCLElBQUQsQ0F2RE0sQ0FBVDtBQXlEQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSxxRUFBQyxTQUFEO0FBQUEsOEJBQ0UscUVBQUMsS0FBRDtBQUFPLGVBQU8sRUFBQyxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUscUVBQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFLHFFQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUEsa0JBREY7QUFVRCxDQXpFRDs7QUEyRWVILHFFQUFmO0FBRUEsTUFBTStCLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQztBQUMzQkMsTUFBSSxFQUFFO0FBQ0pDLFNBQUssRUFBRSxPQURIO0FBRUpDLFdBQU8sRUFBRSxNQUZMO0FBR0pDLGlCQUFhLEVBQUUsUUFIWDtBQUlKQyxjQUFVLEVBQUU7QUFKUjtBQURxQixDQUFELENBQVYsQ0FPZkMscURBUGUsQ0FBbEI7QUFTQSxNQUFNQyxLQUFLLEdBQUdQLG9FQUFVLENBQUM7QUFDdkJDLE1BQUksRUFBRTtBQUFFTyxhQUFTLEVBQUUsUUFBYjtBQUF1QkMsYUFBUyxFQUFFLEVBQWxDO0FBQXNDQyxnQkFBWSxFQUFFO0FBQXBEO0FBRGlCLENBQUQsQ0FBVixDQUVYQyw0REFGVyxDQUFkIiwiZmlsZSI6Ii4vcGFnZXMvYXV0aHJlc3AvZ29vZ2xlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgbG9jYWxfYmFja2VuZF91cmwgfSBmcm9tIFwiLi4vLi4vdXJsXCI7XG5pbXBvcnQgdXNlTG9jYWxTdGF0ZSBmcm9tIFwiLi4vLi4vY3VzdG9tLWhvb2tzL3VzZUxvY2FsU3RhdGVcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgQ2lyY3VsYXJQcm9ncmVzcyxcbiAgTGluZWFyUHJvZ3Jlc3MsXG4gIFR5cG9ncmFwaHksXG4gIHdpdGhTdHlsZXMsXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7fVxuXG5jb25zdCBHb29nbGU6IFJlYWN0LkZDPElQcm9wcz4gPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGNvZGUgfSA9IHJvdXRlci5xdWVyeTtcblxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VMb2NhbFN0YXRlKFwidXNlclwiLCBcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb2RlKSB7XG4gICAgICBheGlvcyh7XG4gICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgdXJsOiBgL2FwaS9hdXRoL2dvb2dsZT9nZXQ9dXNlciZjb2RlPSR7Y29kZX1gLFxuICAgICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkX3Rva2VuID0gcmVzLmRhdGEudXNlci5kYXRhLmlkX3Rva2VuO1xuXG4gICAgICAgIGF4aW9zKHtcbiAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgdXJsOiBgaHR0cHM6Ly9vYXV0aDIuZ29vZ2xlYXBpcy5jb20vdG9rZW5pbmZvP2lkX3Rva2VuPSR7aWRfdG9rZW59YCxcbiAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgZW1haWxfdmVyaWZpZWQsXG4gICAgICAgICAgICAgIGF0X2hhc2gsXG4gICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgIHBpY3R1cmUsXG4gICAgICAgICAgICB9ID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgICAgLnBvc3QoYCR7bG9jYWxfYmFja2VuZF91cmx9L2FwaS9hdXRoL2dvb2dsZVNpZ25JbmAsIHtcbiAgICAgICAgICAgICAgICBpZF90b2tlbjogaWRfdG9rZW4sXG4gICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgICAgICAgIGF0X2hhc2g6IGF0X2hhc2gsXG4gICAgICAgICAgICAgICAgZW1haWxfdmVyaWZpZWQ6IGVtYWlsX3ZlcmlmaWVkID09PSBcInRydWVcIiA/IHRydWUgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgIHBpY3R1cmU6IHBpY3R1cmUsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXI6IGFueSA9IHtcbiAgICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgICBwaWN0dXJlOiBwaWN0dXJlLFxuICAgICAgICAgICAgICAgICAgdG9rZW46IHRva2VuLFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBzZXRVc2VyKHVzZXIpO1xuXG4gICAgICAgICAgICAgICAgcm91dGVyLnJlcGxhY2UoXCIvXCIpO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VXNlcihcIlwiKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgc2V0VXNlcihcIlwiKTtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW2NvZGVdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGluZWFyUHJvZ3Jlc3MgLz5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxUaXRsZSB2YXJpYW50PVwiaDZcIj5QbGVhc2Ugd2FpdCB3aGlsZSB3ZSBzaWduIHlvdSBpbi4uLjwvVGl0bGU+XG4gICAgICAgIDxUaXRsZT5SZWRpcmVjdGluZyB5b3UgdG8gc21hcnRpZmllci5vcmcuLi48L1RpdGxlPlxuICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyAvPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHb29nbGU7XG5cbmNvbnN0IENvbnRhaW5lciA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgd2lkdGg6IFwiMTAwdndcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIH0sXG59KShCb3gpO1xuXG5jb25zdCBUaXRsZSA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luVG9wOiAzMCwgbWFyZ2luQm90dG9tOiAxMCB9LFxufSkoVHlwb2dyYXBoeSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/authresp/google.tsx\n");

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