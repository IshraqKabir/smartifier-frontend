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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../url */ \"./url.js\");\n/* harmony import */ var _custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../custom-hooks/useLocalState */ \"./custom-hooks/useLocalState.ts\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/pages/authresp/google.tsx\";\n\n\n\n\n\n\n\nconst Google = () => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])();\n  const {\n    code\n  } = router.query;\n  const [user, setUser] = Object(_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"user\", \"\");\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    if (code) {\n      axios__WEBPACK_IMPORTED_MODULE_2___default()({\n        method: \"get\",\n        url: `/api/auth/google?get=user&code=${code}`\n      }).then(res => {\n        const id_token = res.data.user.data.id_token;\n        axios__WEBPACK_IMPORTED_MODULE_2___default()({\n          method: \"GET\",\n          url: `https://oauth2.googleapis.com/tokeninfo?id_token=${id_token}`\n        }).then(response => {\n          console.log(response.data);\n          const {\n            email,\n            email_verified,\n            at_hash,\n            name,\n            picture\n          } = response.data;\n          axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`${_url__WEBPACK_IMPORTED_MODULE_3__[\"local_backend_url\"]}/api/auth/googleSignIn`, {\n            id_token: id_token,\n            email: email,\n            at_hash: at_hash,\n            email_verified: email_verified === \"true\" ? true : false,\n            name: name,\n            picture: picture\n          }).then(response => {\n            const token = response.data;\n            const user = {\n              email: email,\n              name: name,\n              picture: picture,\n              token: token\n            };\n            setUser(user);\n            router.replace(\"/\");\n          }).catch(error => setUser(\"\"));\n        });\n      });\n    }\n  }, [code]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"LinearProgress\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Title, {\n        variant: \"h6\",\n        children: \"Please wait while we sign you in...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Title, {\n        children: \"Redirecting you to smartifier.org...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"CircularProgress\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Google);\nconst Container = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"withStyles\"])({\n  root: {\n    width: \"100vw\",\n    display: \"flex\",\n    flexDirection: \"column\",\n    alignItems: \"center\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Box\"]);\nconst Title = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"withStyles\"])({\n  root: {\n    textAlign: \"center\",\n    marginTop: 30,\n    marginBottom: 10\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Typography\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hdXRocmVzcC9nb29nbGUudHN4P2ZmZDYiXSwibmFtZXMiOlsiR29vZ2xlIiwicm91dGVyIiwidXNlUm91dGVyIiwiY29kZSIsInF1ZXJ5IiwidXNlciIsInNldFVzZXIiLCJ1c2VMb2NhbFN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJtZXRob2QiLCJ1cmwiLCJ0aGVuIiwicmVzIiwiaWRfdG9rZW4iLCJkYXRhIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZW1haWwiLCJlbWFpbF92ZXJpZmllZCIsImF0X2hhc2giLCJuYW1lIiwicGljdHVyZSIsInBvc3QiLCJsb2NhbF9iYWNrZW5kX3VybCIsInRva2VuIiwicmVwbGFjZSIsImNhdGNoIiwiZXJyb3IiLCJDb250YWluZXIiLCJ3aXRoU3R5bGVzIiwicm9vdCIsIndpZHRoIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwiQm94IiwiVGl0bGUiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJUeXBvZ3JhcGh5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQVFBOztBQUlBLE1BQU1BLE1BQXdCLEdBQUcsTUFBTTtBQUNyQyxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQVdGLE1BQU0sQ0FBQ0csS0FBeEI7QUFFQSxRQUFNLENBQUNDLElBQUQsRUFBT0MsT0FBUCxJQUFrQkMsMkVBQWEsQ0FBQyxNQUFELEVBQVMsRUFBVCxDQUFyQztBQUVBQyx5REFBUyxDQUFDLE1BQU07QUFDZCxRQUFJTCxJQUFKLEVBQVU7QUFDUk0sa0RBQUssQ0FBQztBQUNKQyxjQUFNLEVBQUUsS0FESjtBQUVKQyxXQUFHLEVBQUcsa0NBQWlDUixJQUFLO0FBRnhDLE9BQUQsQ0FBTCxDQUdHUyxJQUhILENBR1NDLEdBQUQsSUFBUztBQUNmLGNBQU1DLFFBQVEsR0FBR0QsR0FBRyxDQUFDRSxJQUFKLENBQVNWLElBQVQsQ0FBY1UsSUFBZCxDQUFtQkQsUUFBcEM7QUFFQUwsb0RBQUssQ0FBQztBQUNKQyxnQkFBTSxFQUFFLEtBREo7QUFFSkMsYUFBRyxFQUFHLG9EQUFtREcsUUFBUztBQUY5RCxTQUFELENBQUwsQ0FHR0YsSUFISCxDQUdTSSxRQUFELElBQW1CO0FBQ3pCQyxpQkFBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVEsQ0FBQ0QsSUFBckI7QUFDQSxnQkFBTTtBQUNKSSxpQkFESTtBQUVKQywwQkFGSTtBQUdKQyxtQkFISTtBQUlKQyxnQkFKSTtBQUtKQztBQUxJLGNBTUZQLFFBQVEsQ0FBQ0QsSUFOYjtBQVFBTixzREFBSyxDQUNGZSxJQURILENBQ1MsR0FBRUMsc0RBQWtCLHdCQUQ3QixFQUNzRDtBQUNsRFgsb0JBQVEsRUFBRUEsUUFEd0M7QUFFbERLLGlCQUFLLEVBQUVBLEtBRjJDO0FBR2xERSxtQkFBTyxFQUFFQSxPQUh5QztBQUlsREQsMEJBQWMsRUFBRUEsY0FBYyxLQUFLLE1BQW5CLEdBQTRCLElBQTVCLEdBQW1DLEtBSkQ7QUFLbERFLGdCQUFJLEVBQUVBLElBTDRDO0FBTWxEQyxtQkFBTyxFQUFFQTtBQU55QyxXQUR0RCxFQVNHWCxJQVRILENBU1NJLFFBQUQsSUFBYztBQUNsQixrQkFBTVUsS0FBSyxHQUFHVixRQUFRLENBQUNELElBQXZCO0FBRUEsa0JBQU1WLElBQVMsR0FBRztBQUNoQmMsbUJBQUssRUFBRUEsS0FEUztBQUVoQkcsa0JBQUksRUFBRUEsSUFGVTtBQUdoQkMscUJBQU8sRUFBRUEsT0FITztBQUloQkcsbUJBQUssRUFBRUE7QUFKUyxhQUFsQjtBQU9BcEIsbUJBQU8sQ0FBQ0QsSUFBRCxDQUFQO0FBRUFKLGtCQUFNLENBQUMwQixPQUFQLENBQWUsR0FBZjtBQUNELFdBdEJILEVBdUJHQyxLQXZCSCxDQXVCVUMsS0FBRCxJQUFXdkIsT0FBTyxDQUFDLEVBQUQsQ0F2QjNCO0FBd0JELFNBckNEO0FBc0NELE9BNUNEO0FBNkNEO0FBQ0YsR0FoRFEsRUFnRE4sQ0FBQ0gsSUFBRCxDQWhETSxDQUFUO0FBa0RBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLHFFQUFDLFNBQUQ7QUFBQSw4QkFDRSxxRUFBQyxLQUFEO0FBQU8sZUFBTyxFQUFDLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSxxRUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0UscUVBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQSxrQkFERjtBQVVELENBbEVEOztBQW9FZUgscUVBQWY7QUFFQSxNQUFNOEIsU0FBUyxHQUFHQyxvRUFBVSxDQUFDO0FBQzNCQyxNQUFJLEVBQUU7QUFDSkMsU0FBSyxFQUFFLE9BREg7QUFFSkMsV0FBTyxFQUFFLE1BRkw7QUFHSkMsaUJBQWEsRUFBRSxRQUhYO0FBSUpDLGNBQVUsRUFBRTtBQUpSO0FBRHFCLENBQUQsQ0FBVixDQU9mQyxxREFQZSxDQUFsQjtBQVNBLE1BQU1DLEtBQUssR0FBR1Asb0VBQVUsQ0FBQztBQUN2QkMsTUFBSSxFQUFFO0FBQUVPLGFBQVMsRUFBRSxRQUFiO0FBQXVCQyxhQUFTLEVBQUUsRUFBbEM7QUFBc0NDLGdCQUFZLEVBQUU7QUFBcEQ7QUFEaUIsQ0FBRCxDQUFWLENBRVhDLDREQUZXLENBQWQiLCJmaWxlIjoiLi9wYWdlcy9hdXRocmVzcC9nb29nbGUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBsb2NhbF9iYWNrZW5kX3VybCB9IGZyb20gXCIuLi8uLi91cmxcIjtcbmltcG9ydCB1c2VMb2NhbFN0YXRlIGZyb20gXCIuLi8uLi9jdXN0b20taG9va3MvdXNlTG9jYWxTdGF0ZVwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBDaXJjdWxhclByb2dyZXNzLFxuICBMaW5lYXJQcm9ncmVzcyxcbiAgVHlwb2dyYXBoeSxcbiAgd2l0aFN0eWxlcyxcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5cbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHt9XG5cbmNvbnN0IEdvb2dsZTogUmVhY3QuRkM8SVByb3BzPiA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgY29kZSB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZUxvY2FsU3RhdGUoXCJ1c2VyXCIsIFwiXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNvZGUpIHtcbiAgICAgIGF4aW9zKHtcbiAgICAgICAgbWV0aG9kOiBcImdldFwiLFxuICAgICAgICB1cmw6IGAvYXBpL2F1dGgvZ29vZ2xlP2dldD11c2VyJmNvZGU9JHtjb2RlfWAsXG4gICAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc3QgaWRfdG9rZW4gPSByZXMuZGF0YS51c2VyLmRhdGEuaWRfdG9rZW47XG5cbiAgICAgICAgYXhpb3Moe1xuICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICB1cmw6IGBodHRwczovL29hdXRoMi5nb29nbGVhcGlzLmNvbS90b2tlbmluZm8/aWRfdG9rZW49JHtpZF90b2tlbn1gLFxuICAgICAgICB9KS50aGVuKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICBlbWFpbF92ZXJpZmllZCxcbiAgICAgICAgICAgIGF0X2hhc2gsXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgcGljdHVyZSxcbiAgICAgICAgICB9ID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAucG9zdChgJHtsb2NhbF9iYWNrZW5kX3VybH0vYXBpL2F1dGgvZ29vZ2xlU2lnbkluYCwge1xuICAgICAgICAgICAgICBpZF90b2tlbjogaWRfdG9rZW4sXG4gICAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgICAgICAgYXRfaGFzaDogYXRfaGFzaCxcbiAgICAgICAgICAgICAgZW1haWxfdmVyaWZpZWQ6IGVtYWlsX3ZlcmlmaWVkID09PSBcInRydWVcIiA/IHRydWUgOiBmYWxzZSxcbiAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgcGljdHVyZTogcGljdHVyZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdG9rZW4gPSByZXNwb25zZS5kYXRhO1xuXG4gICAgICAgICAgICAgIGNvbnN0IHVzZXI6IGFueSA9IHtcbiAgICAgICAgICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICBwaWN0dXJlOiBwaWN0dXJlLFxuICAgICAgICAgICAgICAgIHRva2VuOiB0b2tlbixcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICBzZXRVc2VyKHVzZXIpO1xuXG4gICAgICAgICAgICAgIHJvdXRlci5yZXBsYWNlKFwiL1wiKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBzZXRVc2VyKFwiXCIpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtjb2RlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExpbmVhclByb2dyZXNzIC8+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8VGl0bGUgdmFyaWFudD1cImg2XCI+UGxlYXNlIHdhaXQgd2hpbGUgd2Ugc2lnbiB5b3UgaW4uLi48L1RpdGxlPlxuICAgICAgICA8VGl0bGU+UmVkaXJlY3RpbmcgeW91IHRvIHNtYXJ0aWZpZXIub3JnLi4uPC9UaXRsZT5cbiAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MgLz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR29vZ2xlO1xuXG5jb25zdCBDb250YWluZXIgPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIHdpZHRoOiBcIjEwMHZ3XCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICB9LFxufSkoQm94KTtcblxuY29uc3QgVGl0bGUgPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDogeyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpblRvcDogMzAsIG1hcmdpbkJvdHRvbTogMTAgfSxcbn0pKFR5cG9ncmFwaHkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/authresp/google.tsx\n");

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