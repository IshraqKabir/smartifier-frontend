webpackHotUpdate_N_E("pages/test/[id]/result",{

/***/ "./Components/QuizTestResult/Badge/useBadge.tsx":
/*!******************************************************!*\
  !*** ./Components/QuizTestResult/Badge/useBadge.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useBadge; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../custom-hooks/useLocalState */ \"./custom-hooks/useLocalState.ts\");\n/* harmony import */ var _repository_QuizTest_getBadgeImageLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../repository/QuizTest/getBadgeImageLink */ \"./repository/QuizTest/getBadgeImageLink.tsx\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction useBadge(testId) {\n  _s();\n\n  var _useLocalState = Object(_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"user\", \"\"),\n      _useLocalState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useLocalState, 1),\n      user = _useLocalState2[0];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      isLoading = _useState[0],\n      setIsLoading = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      badgeImageLink = _useState2[0],\n      setBadgeImageLink = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      error = _useState3[0],\n      setError = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    if (user) fetchBadgeImageLink();\n  }, []);\n\n  function fetchBadgeImageLink() {\n    return _fetchBadgeImageLink.apply(this, arguments);\n  }\n\n  function _fetchBadgeImageLink() {\n    _fetchBadgeImageLink = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var response;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              setIsLoading(true);\n              _context.next = 3;\n              return Object(_repository_QuizTest_getBadgeImageLink__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(testId, user === null || user === void 0 ? void 0 : user.token);\n\n            case 3:\n              response = _context.sent;\n              console.log(response);\n\n              if (response != \"not_quiz\" || response != \"failed\" || response != \"badge_not_ready_yet\") {}\n\n              setIsLoading(false);\n\n            case 7:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _fetchBadgeImageLink.apply(this, arguments);\n  }\n\n  return {\n    isLoading: isLoading,\n    error: error,\n    badgeImageLink: badgeImageLink\n  };\n}\n\n_s(useBadge, \"osEQ0mZaIQW7wWJap9qJCp3i6t4=\", false, function () {\n  return [_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9RdWl6VGVzdFJlc3VsdC9CYWRnZS91c2VCYWRnZS50c3g/Yzg5NSJdLCJuYW1lcyI6WyJ1c2VCYWRnZSIsInRlc3RJZCIsInVzZUxvY2FsU3RhdGUiLCJ1c2VyIiwidXNlU3RhdGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJiYWRnZUltYWdlTGluayIsInNldEJhZGdlSW1hZ2VMaW5rIiwiZXJyb3IiLCJzZXRFcnJvciIsInVzZUVmZmVjdCIsImZldGNoQmFkZ2VJbWFnZUxpbmsiLCJnZXRCYWRnZUltYWdlTGluayIsInRva2VuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxDQUFrQkMsTUFBbEIsRUFBa0M7QUFBQTs7QUFBQSx1QkFDaENDLDJFQUFhLENBQUMsTUFBRCxFQUFTLEVBQVQsQ0FEbUI7QUFBQTtBQUFBLE1BQ3hDQyxJQUR3Qzs7QUFBQSxrQkFFYkMsc0RBQVEsQ0FBVSxLQUFWLENBRks7QUFBQSxNQUV4Q0MsU0FGd0M7QUFBQSxNQUU3QkMsWUFGNkI7O0FBQUEsbUJBR0hGLHNEQUFRLENBQVMsRUFBVCxDQUhMO0FBQUEsTUFHeENHLGNBSHdDO0FBQUEsTUFHeEJDLGlCQUh3Qjs7QUFBQSxtQkFJckJKLHNEQUFRLENBQVMsRUFBVCxDQUphO0FBQUEsTUFJeENLLEtBSndDO0FBQUEsTUFJakNDLFFBSmlDOztBQU0vQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSVIsSUFBSixFQUFVUyxtQkFBbUI7QUFDOUIsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFOK0MsV0FVaENBLG1CQVZnQztBQUFBO0FBQUE7O0FBQUE7QUFBQSw0TUFVL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0VOLDBCQUFZLENBQUMsSUFBRCxDQUFaO0FBREY7QUFBQSxxQkFFeUJPLHNGQUFpQixDQUFDWixNQUFELEVBQVNFLElBQVQsYUFBU0EsSUFBVCx1QkFBU0EsSUFBSSxDQUFFVyxLQUFmLENBRjFDOztBQUFBO0FBRVFDLHNCQUZSO0FBR0VDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjs7QUFDQSxrQkFDRUEsUUFBUSxJQUFJLFVBQVosSUFDQUEsUUFBUSxJQUFJLFFBRFosSUFFQUEsUUFBUSxJQUFJLHFCQUhkLEVBSUUsQ0FDRDs7QUFFRFQsMEJBQVksQ0FBQyxLQUFELENBQVo7O0FBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FWK0M7QUFBQTtBQUFBOztBQXdCL0MsU0FBTztBQUNMRCxhQUFTLEVBQVRBLFNBREs7QUFFTEksU0FBSyxFQUFMQSxLQUZLO0FBR0xGLGtCQUFjLEVBQWRBO0FBSEssR0FBUDtBQUtEOztHQTdCdUJQLFE7VUFDUEUsbUUiLCJmaWxlIjoiLi9Db21wb25lbnRzL1F1aXpUZXN0UmVzdWx0L0JhZGdlL3VzZUJhZGdlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VMb2NhbFN0YXRlIGZyb20gXCIuLi8uLi8uLi9jdXN0b20taG9va3MvdXNlTG9jYWxTdGF0ZVwiO1xuaW1wb3J0IGdldEJhZGdlSW1hZ2VMaW5rIGZyb20gXCIuLi8uLi8uLi9yZXBvc2l0b3J5L1F1aXpUZXN0L2dldEJhZGdlSW1hZ2VMaW5rXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUJhZGdlKHRlc3RJZDogbnVtYmVyKSB7XG4gIGNvbnN0IFt1c2VyXSA9IHVzZUxvY2FsU3RhdGUoXCJ1c2VyXCIsIFwiXCIpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbYmFkZ2VJbWFnZUxpbmssIHNldEJhZGdlSW1hZ2VMaW5rXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1c2VyKSBmZXRjaEJhZGdlSW1hZ2VMaW5rKCk7XG4gIH0sIFtdKTtcblxuICBhc3luYyBmdW5jdGlvbiBmZXRjaEJhZGdlSW1hZ2VMaW5rKCkge1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldEJhZGdlSW1hZ2VMaW5rKHRlc3RJZCwgdXNlcj8udG9rZW4pO1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICBpZiAoXG4gICAgICByZXNwb25zZSAhPSBcIm5vdF9xdWl6XCIgfHxcbiAgICAgIHJlc3BvbnNlICE9IFwiZmFpbGVkXCIgfHxcbiAgICAgIHJlc3BvbnNlICE9IFwiYmFkZ2Vfbm90X3JlYWR5X3lldFwiXG4gICAgKSB7XG4gICAgfVxuXG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaXNMb2FkaW5nLFxuICAgIGVycm9yLFxuICAgIGJhZGdlSW1hZ2VMaW5rLFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/QuizTestResult/Badge/useBadge.tsx\n");

/***/ })

})