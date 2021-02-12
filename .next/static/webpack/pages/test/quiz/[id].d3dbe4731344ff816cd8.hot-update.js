webpackHotUpdate_N_E("pages/test/quiz/[id]",{

/***/ "./UtilFunctions/postFunc.js":
/*!***********************************!*\
  !*** ./UtilFunctions/postFunc.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return post; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n\n\nfunction post(_x, _x2, _x3, _x4) {\n  return _post.apply(this, arguments);\n}\n\nfunction _post() {\n  _post = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url, data, callBack, errorCallBack) {\n    var user, config;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            user = getUser();\n            config = {\n              method: \"post\",\n              url: url,\n              headers: {\n                Accept: \"application/json\",\n                Authorization: \"Bearer \".concat(user.token)\n              },\n              data: data\n            };\n            axios.post(\"\".concat(url), {\n              data: data,\n              headers: {\n                Accept: \"application/json\",\n                Authorization: \"Bearer \".concat(user.token)\n              }\n            }).then(function (response) {\n              callBack(response);\n            })[\"catch\"](function (error) {\n              errorCallBack(error);\n            });\n\n          case 3:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _post.apply(this, arguments);\n}\n\nfunction getUser() {\n  var key = \"user\";\n  var defaultValue = \"\";\n\n  if (true) {\n    var storedValue = JSON.parse(localStorage.getItem(key));\n\n    if (!storedValue) {\n      return defaultValue;\n    }\n\n    return storedValue === null ? defaultValue : storedValue;\n  } else {}\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vVXRpbEZ1bmN0aW9ucy9wb3N0RnVuYy5qcz83MTNhIl0sIm5hbWVzIjpbInBvc3QiLCJ1cmwiLCJkYXRhIiwiY2FsbEJhY2siLCJlcnJvckNhbGxCYWNrIiwidXNlciIsImdldFVzZXIiLCJjb25maWciLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiQXV0aG9yaXphdGlvbiIsInRva2VuIiwiYXhpb3MiLCJ0aGVuIiwicmVzcG9uc2UiLCJlcnJvciIsImtleSIsImRlZmF1bHRWYWx1ZSIsInN0b3JlZFZhbHVlIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNlLFNBQWVBLElBQTlCO0FBQUE7QUFBQTs7OzJMQUFlLGlCQUFvQkMsR0FBcEIsRUFBeUJDLElBQXpCLEVBQStCQyxRQUEvQixFQUF5Q0MsYUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1BDLGdCQURPLEdBQ0FDLE9BQU8sRUFEUDtBQUdQQyxrQkFITyxHQUdFO0FBQ2JDLG9CQUFNLEVBQUUsTUFESztBQUViUCxpQkFBRyxFQUFIQSxHQUZhO0FBR2JRLHFCQUFPLEVBQUU7QUFDUEMsc0JBQU0sRUFBRSxrQkFERDtBQUVQQyw2QkFBYSxtQkFBWU4sSUFBSSxDQUFDTyxLQUFqQjtBQUZOLGVBSEk7QUFPYlYsa0JBQUksRUFBSkE7QUFQYSxhQUhGO0FBYWJXLGlCQUFLLENBQ0ZiLElBREgsV0FDV0MsR0FEWCxHQUNrQjtBQUNkQyxrQkFBSSxFQUFFQSxJQURRO0FBRWRPLHFCQUFPLEVBQUU7QUFDUEMsc0JBQU0sRUFBRSxrQkFERDtBQUVQQyw2QkFBYSxtQkFBWU4sSUFBSSxDQUFDTyxLQUFqQjtBQUZOO0FBRkssYUFEbEIsRUFRR0UsSUFSSCxDQVFRLFVBQUNDLFFBQUQsRUFBYztBQUNsQlosc0JBQVEsQ0FBQ1ksUUFBRCxDQUFSO0FBQ0QsYUFWSCxXQVdTLFVBQUNDLEtBQUQsRUFBVztBQUNoQlosMkJBQWEsQ0FBQ1ksS0FBRCxDQUFiO0FBQ0QsYUFiSDs7QUFiYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBNkJmLFNBQVNWLE9BQVQsR0FBbUI7QUFDakIsTUFBTVcsR0FBRyxHQUFHLE1BQVo7QUFDQSxNQUFNQyxZQUFZLEdBQUcsRUFBckI7O0FBRUEsWUFBcUI7QUFDbkIsUUFBTUMsV0FBVyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCTixHQUFyQixDQUFYLENBQXBCOztBQUNBLFFBQUksQ0FBQ0UsV0FBTCxFQUFrQjtBQUNoQixhQUFPRCxZQUFQO0FBQ0Q7O0FBQ0QsV0FBT0MsV0FBVyxLQUFLLElBQWhCLEdBQXVCRCxZQUF2QixHQUFzQ0MsV0FBN0M7QUFDRCxHQU5ELE1BTU8sRUFFTjtBQUNGIiwiZmlsZSI6Ii4vVXRpbEZ1bmN0aW9ucy9wb3N0RnVuYy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gcG9zdCh1cmwsIGRhdGEsIGNhbGxCYWNrLCBlcnJvckNhbGxCYWNrKSB7XG4gIGNvbnN0IHVzZXIgPSBnZXRVc2VyKCk7XG5cbiAgY29uc3QgY29uZmlnID0ge1xuICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgdXJsLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dXNlci50b2tlbn1gLFxuICAgIH0sXG4gICAgZGF0YSxcbiAgfTtcblxuICBheGlvc1xuICAgIC5wb3N0KGAke3VybH1gLCB7XG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dXNlci50b2tlbn1gLFxuICAgICAgfSxcbiAgICB9KVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgY2FsbEJhY2socmVzcG9uc2UpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgZXJyb3JDYWxsQmFjayhlcnJvcik7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFVzZXIoKSB7XG4gIGNvbnN0IGtleSA9IFwidXNlclwiO1xuICBjb25zdCBkZWZhdWx0VmFsdWUgPSBcIlwiO1xuXG4gIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICBjb25zdCBzdG9yZWRWYWx1ZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSk7XG4gICAgaWYgKCFzdG9yZWRWYWx1ZSkge1xuICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHN0b3JlZFZhbHVlID09PSBudWxsID8gZGVmYXVsdFZhbHVlIDogc3RvcmVkVmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./UtilFunctions/postFunc.js\n");

/***/ }),

/***/ "./node_modules/axios/index.js":
false,

/***/ "./node_modules/axios/lib/adapters/xhr.js":
false,

/***/ "./node_modules/axios/lib/axios.js":
false,

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
false,

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
false,

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
false,

/***/ "./node_modules/axios/lib/core/Axios.js":
false,

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
false,

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
false,

/***/ "./node_modules/axios/lib/core/createError.js":
false,

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
false,

/***/ "./node_modules/axios/lib/core/enhanceError.js":
false,

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
false,

/***/ "./node_modules/axios/lib/core/settle.js":
false,

/***/ "./node_modules/axios/lib/core/transformData.js":
false,

/***/ "./node_modules/axios/lib/defaults.js":
false,

/***/ "./node_modules/axios/lib/helpers/bind.js":
false,

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
false,

/***/ "./node_modules/axios/lib/helpers/cookies.js":
false,

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
false,

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
false,

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
false,

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
false,

/***/ "./node_modules/axios/lib/helpers/spread.js":
false,

/***/ "./node_modules/axios/lib/utils.js":
false,

/***/ "./node_modules/process/browser.js":
false

})