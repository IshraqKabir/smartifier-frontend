webpackHotUpdate_N_E("pages/blog/posts/[slug]",{

/***/ "./custom-hooks/useLocalState.ts":
/*!***************************************!*\
  !*** ./custom-hooks/useLocalState.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);\nvar _s = $RefreshSig$();\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useLocalState = _s(function (key, defaultValue) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(function () {\n    if (true) {\n      return getValue(key);\n    }\n  }),\n      value = _useState[0],\n      setValueState = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var listener = function listener(e) {\n      if (e.storageArea === localStorage && e.key === key) {\n        setValueState(JSON.parse(e.newValue));\n      }\n    };\n\n    window.addEventListener(\"storage\", listener);\n    setInterval(function () {\n      if (JSON.stringify(getCookie(key)) != JSON.stringify(value)) {\n        setValueState(getCookie(key));\n      }\n    }, 500);\n    return function () {\n      window.removeEventListener(\"storage\", listener);\n    };\n  }, [key]);\n\n  var setValue = function setValue(newValue) {\n    setValueState(function (currentValue) {\n      var value = null;\n\n      if (typeof newValue === \"function\") {\n        value = newValue(currentValue);\n      } else {\n        value = newValue;\n      }\n\n      setCookie(key, value);\n      localStorage.setItem(key, JSON.stringify(value));\n      return value;\n    });\n  };\n\n  return [value, setValue];\n}, \"PzkA+WywkBhzu0D8FNCg+yfV/iY=\"));\n\nvar getValue = function getValue(key) {\n  if (isLocalStorageWorking()) {\n    // return from local storage\n    var value = localStorage.getItem(key);\n    return value ? JSON.parse(value) : value;\n  } // return from cookie;\n\n\n  return getCookie(key);\n};\n\nvar isLocalStorageWorking = function isLocalStorageWorking() {\n  var key = \"local-storage-test\";\n  var value = 19;\n  localStorage.setItem(key, JSON.stringify(value));\n\n  if (JSON.parse(localStorage.getItem(key)) == value) {\n    console.log(\"working\");\n    return true;\n  }\n\n  console.log(\"not working\");\n  return false;\n};\n\nvar setCookie = function setCookie(key, value) {\n  js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set(key ? JSON.stringify(key) : key, value ? JSON.stringify(value) : value);\n};\n\nvar getCookie = function getCookie(key) {\n  var result = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get(JSON.stringify(key));\n  return result ? JSON.parse(result) : result;\n}; // function useLocalState<T>(key: string, defaultValue: T) {\n//   const [value, setValue] = useState(() => {\n//     if (isLocalStorageWorking() == false) {\n//       return getCookie(key);\n//     }\n//     let result = null;\n//     if (process.browser) {\n//       const storedValue = localStorage.getItem(key)\n//         ? JSON.parse(localStorage.getItem(key))\n//         : localStorage.getItem(key);\n//       if (!storedValue) {\n//         result = defaultValue;\n//       }\n//       result = storedValue === null ? defaultValue : storedValue;\n//     } else {\n//       result = defaultValue;\n//     }\n//     return result;\n//   });\n//   useEffect(() => {\n//     const listener = (e) => {\n//       if (e.storageArea === localStorage && e.key === key) {\n//         setValue(JSON.parse(e.newValue));\n//       }\n//     };\n//     window.addEventListener(\"storage\", listener);\n//     return () => {\n//       window.removeEventListener(\"storage\", listener);\n//     };\n//   }, [key]);\n//   const setValueInLocalStorage = (newValue) => {\n//     setValue((currentValue) => {\n//       let value = null;\n//       if (typeof newValue === \"function\") {\n//         setCookie(key, newValue(currentValue));\n//         value = newValue(currentValue);\n//       } else {\n//         setCookie(key, newValue);\n//         value = newValue;\n//       }\n//       // const result =\n//       //   typeof newValue === \"function\" ? newValue(currentValue) : newValue;\n//       // localStorage.setItem(key, JSON.stringify(result));\n//       return value;\n//     });\n//   };\n//   useEffect(() => {\n//     const storedValue = JSON.parse(localStorage.getItem(key));\n//     if (storedValue) {\n//       setValueInLocalStorage(storedValue);\n//     } else {\n//       setValueInLocalStorage(value);\n//     }\n//   }, []);\n//   return [value, setValueInLocalStorage];\n// }\n// export default useLocalState;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY3VzdG9tLWhvb2tzL3VzZUxvY2FsU3RhdGUudHM/M2UxYiJdLCJuYW1lcyI6WyJ1c2VMb2NhbFN0YXRlIiwia2V5IiwiZGVmYXVsdFZhbHVlIiwidXNlU3RhdGUiLCJnZXRWYWx1ZSIsInZhbHVlIiwic2V0VmFsdWVTdGF0ZSIsInVzZUVmZmVjdCIsImxpc3RlbmVyIiwiZSIsInN0b3JhZ2VBcmVhIiwibG9jYWxTdG9yYWdlIiwiSlNPTiIsInBhcnNlIiwibmV3VmFsdWUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2V0SW50ZXJ2YWwiLCJzdHJpbmdpZnkiLCJnZXRDb29raWUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0VmFsdWUiLCJjdXJyZW50VmFsdWUiLCJzZXRDb29raWUiLCJzZXRJdGVtIiwiaXNMb2NhbFN0b3JhZ2VXb3JraW5nIiwiZ2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJDb29raWVzIiwic2V0IiwicmVzdWx0IiwiZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUVlQSw0RUFBYSxNQUFHLFVBQUNDLEdBQUQsRUFBY0MsWUFBZCxFQUFvQztBQUFBOztBQUFBLGtCQUNsQ0Msc0RBQVEsQ0FBQyxZQUFNO0FBQzVDLGNBQXFCO0FBQ25CLGFBQU9DLFFBQVEsQ0FBQ0gsR0FBRCxDQUFmO0FBQ0Q7QUFDRixHQUpzQyxDQUQwQjtBQUFBLE1BQzFESSxLQUQwRDtBQUFBLE1BQ25EQyxhQURtRDs7QUFPakVDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLENBQUQsRUFBTztBQUN0QixVQUFJQSxDQUFDLENBQUNDLFdBQUYsS0FBa0JDLFlBQWxCLElBQWtDRixDQUFDLENBQUNSLEdBQUYsS0FBVUEsR0FBaEQsRUFBcUQ7QUFDbkRLLHFCQUFhLENBQUNNLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixDQUFDLENBQUNLLFFBQWIsQ0FBRCxD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LENBQVlwQixJQUFJLENBQUNNLFNBQUwsQ0FBZWpCLEdBQWYsQ0FBWixDQUFmO0FBQ0EsU0FBTzhCLE1BQU0sR0FBR25CLElBQUksQ0FBQ0MsS0FBTCxDQUFXa0IsTUFBWCxDQUFILEdBQXdCQSxNQUFyQztBQUNELENBSEQsQyxDQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSIsImZpbGUiOiIuL2N1c3RvbS1ob29rcy91c2VMb2NhbFN0YXRlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VMb2NhbFN0YXRlID0gKGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IGFueSkgPT4ge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlU3RhdGVdID0gdXNlU3RhdGUoKCkgPT4ge1xuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgIHJldHVybiBnZXRWYWx1ZShrZXkpO1xuICAgIH1cbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsaXN0ZW5lciA9IChlKSA9PiB7XG4gICAgICBpZiAoZS5zdG9yYWdlQXJlYSA9PT0gbG9jYWxTdG9yYWdlICYmIGUua2V5ID09PSBrZXkpIHtcbiAgICAgICAgc2V0VmFsdWVTdGF0ZShKU09OLnBhcnNlKGUubmV3VmFsdWUpKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic3RvcmFnZVwiLCBsaXN0ZW5lcik7XG5cbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoZ2V0Q29va2llKGtleSkpICE9IEpTT04uc3RyaW5naWZ5KHZhbHVlKSkge1xuICAgICAgICBzZXRWYWx1ZVN0YXRlKGdldENvb2tpZShrZXkpKTtcbiAgICAgIH1cbiAgICB9LCA1MDApO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic3RvcmFnZVwiLCBsaXN0ZW5lcik7XG4gICAgfTtcbiAgfSwgW2tleV0pO1xuXG4gIGNvbnN0IHNldFZhbHVlID0gKG5ld1ZhbHVlKSA9PiB7XG4gICAgc2V0VmFsdWVTdGF0ZSgoY3VycmVudFZhbHVlKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBudWxsO1xuXG4gICAgICBpZiAodHlwZW9mIG5ld1ZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdmFsdWUgPSBuZXdWYWx1ZShjdXJyZW50VmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgIH1cblxuICAgICAgc2V0Q29va2llKGtleSwgdmFsdWUpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIFt2YWx1ZSwgc2V0VmFsdWVdO1xufTtcblxuY29uc3QgZ2V0VmFsdWUgPSAoa2V5KSA9PiB7XG4gIGlmIChpc0xvY2FsU3RvcmFnZVdvcmtpbmcoKSkge1xuICAgIC8vIHJldHVybiBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgICBjb25zdCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgcmV0dXJuIHZhbHVlID8gSlNPTi5wYXJzZSh2YWx1ZSkgOiB2YWx1ZTtcbiAgfVxuXG4gIC8vIHJldHVybiBmcm9tIGNvb2tpZTtcbiAgcmV0dXJuIGdldENvb2tpZShrZXkpO1xufTtcblxuY29uc3QgaXNMb2NhbFN0b3JhZ2VXb3JraW5nID0gKCk6IGJvb2xlYW4gPT4ge1xuICBjb25zdCBrZXkgPSBcImxvY2FsLXN0b3JhZ2UtdGVzdFwiO1xuICBjb25zdCB2YWx1ZSA9IDE5O1xuXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcblxuICBpZiAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSA9PSB2YWx1ZSkge1xuICAgIGNvbnNvbGUubG9nKFwid29ya2luZ1wiKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKFwibm90IHdvcmtpbmdcIik7XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IHNldENvb2tpZSA9IChrZXksIHZhbHVlKSA9PiB7XG4gIENvb2tpZXMuc2V0KFxuICAgIGtleSA/IEpTT04uc3RyaW5naWZ5KGtleSkgOiBrZXksXG4gICAgdmFsdWUgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiB2YWx1ZVxuICApO1xufTtcblxuY29uc3QgZ2V0Q29va2llID0gKGtleSkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBDb29raWVzLmdldChKU09OLnN0cmluZ2lmeShrZXkpKTtcbiAgcmV0dXJuIHJlc3VsdCA/IEpTT04ucGFyc2UocmVzdWx0KSA6IHJlc3VsdDtcbn07XG5cbi8vIGZ1bmN0aW9uIHVzZUxvY2FsU3RhdGU8VD4oa2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogVCkge1xuLy8gICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCgpID0+IHtcbi8vICAgICBpZiAoaXNMb2NhbFN0b3JhZ2VXb3JraW5nKCkgPT0gZmFsc2UpIHtcbi8vICAgICAgIHJldHVybiBnZXRDb29raWUoa2V5KTtcbi8vICAgICB9XG5cbi8vICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcbi8vICAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XG4vLyAgICAgICBjb25zdCBzdG9yZWRWYWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSlcbi8vICAgICAgICAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpXG4vLyAgICAgICAgIDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcblxuLy8gICAgICAgaWYgKCFzdG9yZWRWYWx1ZSkge1xuLy8gICAgICAgICByZXN1bHQgPSBkZWZhdWx0VmFsdWU7XG4vLyAgICAgICB9XG4vLyAgICAgICByZXN1bHQgPSBzdG9yZWRWYWx1ZSA9PT0gbnVsbCA/IGRlZmF1bHRWYWx1ZSA6IHN0b3JlZFZhbHVlO1xuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICByZXN1bHQgPSBkZWZhdWx0VmFsdWU7XG4vLyAgICAgfVxuXG4vLyAgICAgcmV0dXJuIHJlc3VsdDtcbi8vICAgfSk7XG5cbi8vICAgdXNlRWZmZWN0KCgpID0+IHtcbi8vICAgICBjb25zdCBsaXN0ZW5lciA9IChlKSA9PiB7XG4vLyAgICAgICBpZiAoZS5zdG9yYWdlQXJlYSA9PT0gbG9jYWxTdG9yYWdlICYmIGUua2V5ID09PSBrZXkpIHtcbi8vICAgICAgICAgc2V0VmFsdWUoSlNPTi5wYXJzZShlLm5ld1ZhbHVlKSk7XG4vLyAgICAgICB9XG4vLyAgICAgfTtcbi8vICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInN0b3JhZ2VcIiwgbGlzdGVuZXIpO1xuXG4vLyAgICAgcmV0dXJuICgpID0+IHtcbi8vICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic3RvcmFnZVwiLCBsaXN0ZW5lcik7XG4vLyAgICAgfTtcbi8vICAgfSwgW2tleV0pO1xuXG4vLyAgIGNvbnN0IHNldFZhbHVlSW5Mb2NhbFN0b3JhZ2UgPSAobmV3VmFsdWUpID0+IHtcbi8vICAgICBzZXRWYWx1ZSgoY3VycmVudFZhbHVlKSA9PiB7XG4vLyAgICAgICBsZXQgdmFsdWUgPSBudWxsO1xuLy8gICAgICAgaWYgKHR5cGVvZiBuZXdWYWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4vLyAgICAgICAgIHNldENvb2tpZShrZXksIG5ld1ZhbHVlKGN1cnJlbnRWYWx1ZSkpO1xuLy8gICAgICAgICB2YWx1ZSA9IG5ld1ZhbHVlKGN1cnJlbnRWYWx1ZSk7XG4vLyAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICBzZXRDb29raWUoa2V5LCBuZXdWYWx1ZSk7XG4vLyAgICAgICAgIHZhbHVlID0gbmV3VmFsdWU7XG4vLyAgICAgICB9XG4vLyAgICAgICAvLyBjb25zdCByZXN1bHQgPVxuLy8gICAgICAgLy8gICB0eXBlb2YgbmV3VmFsdWUgPT09IFwiZnVuY3Rpb25cIiA/IG5ld1ZhbHVlKGN1cnJlbnRWYWx1ZSkgOiBuZXdWYWx1ZTtcbi8vICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG4vLyAgICAgICByZXR1cm4gdmFsdWU7XG4vLyAgICAgfSk7XG4vLyAgIH07XG5cbi8vICAgdXNlRWZmZWN0KCgpID0+IHtcbi8vICAgICBjb25zdCBzdG9yZWRWYWx1ZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSk7XG4vLyAgICAgaWYgKHN0b3JlZFZhbHVlKSB7XG4vLyAgICAgICBzZXRWYWx1ZUluTG9jYWxTdG9yYWdlKHN0b3JlZFZhbHVlKTtcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgc2V0VmFsdWVJbkxvY2FsU3RvcmFnZSh2YWx1ZSk7XG4vLyAgICAgfVxuLy8gICB9LCBbXSk7XG5cbi8vICAgcmV0dXJuIFt2YWx1ZSwgc2V0VmFsdWVJbkxvY2FsU3RvcmFnZV07XG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IHVzZUxvY2FsU3RhdGU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./custom-hooks/useLocalState.ts\n");

/***/ })

})