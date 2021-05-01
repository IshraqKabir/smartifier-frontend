webpackHotUpdate_N_E("pages/test/[id]/result",{

/***/ "./Components/QuizTestResult/Badge/useBadge.tsx":
/*!******************************************************!*\
  !*** ./Components/QuizTestResult/Badge/useBadge.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useBadge; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../custom-hooks/useLocalState */ \"./custom-hooks/useLocalState.ts\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\nfunction useBadge(testId) {\n  _s();\n\n  var _useLocalState = Object(_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"user\", \"\"),\n      _useLocalState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useLocalState, 1),\n      user = _useLocalState2[0];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      isLoading = _useState[0],\n      setIsLoading = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      badgeImageLink = _useState2[0],\n      setBadgeImageLink = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    if (user) fetchBadgeImageLink();\n  }, []);\n\n  function fetchBadgeImageLink() {\n    return _fetchBadgeImageLink.apply(this, arguments);\n  }\n\n  function _fetchBadgeImageLink() {\n    _fetchBadgeImageLink = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              setIsLoading(true); // const response = await getBadgeImageLink(testId, user?.token);\n              // console.log(response);\n              // setIsLoading(false);\n\n            case 1:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _fetchBadgeImageLink.apply(this, arguments);\n  }\n\n  return {\n    isLoading: isLoading\n  };\n}\n\n_s(useBadge, \"bS4299E+UPRXoWDxBBrALHU2y7Y=\", false, function () {\n  return [_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9RdWl6VGVzdFJlc3VsdC9CYWRnZS91c2VCYWRnZS50c3g/Yzg5NSJdLCJuYW1lcyI6WyJ1c2VCYWRnZSIsInRlc3RJZCIsInVzZUxvY2FsU3RhdGUiLCJ1c2VyIiwidXNlU3RhdGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJiYWRnZUltYWdlTGluayIsInNldEJhZGdlSW1hZ2VMaW5rIiwidXNlRWZmZWN0IiwiZmV0Y2hCYWRnZUltYWdlTGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdlLFNBQVNBLFFBQVQsQ0FBa0JDLE1BQWxCLEVBQWtDO0FBQUE7O0FBQUEsdUJBQ2hDQywyRUFBYSxDQUFDLE1BQUQsRUFBUyxFQUFULENBRG1CO0FBQUE7QUFBQSxNQUN4Q0MsSUFEd0M7O0FBQUEsa0JBRWJDLHNEQUFRLENBQVUsS0FBVixDQUZLO0FBQUEsTUFFeENDLFNBRndDO0FBQUEsTUFFN0JDLFlBRjZCOztBQUFBLG1CQUdIRixzREFBUSxDQUFTLEVBQVQsQ0FITDtBQUFBLE1BR3hDRyxjQUh3QztBQUFBLE1BR3hCQyxpQkFId0I7O0FBSy9DQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJTixJQUFKLEVBQVVPLG1CQUFtQjtBQUM5QixHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUwrQyxXQVNoQ0EsbUJBVGdDO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDRNQVMvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0VKLDBCQUFZLENBQUMsSUFBRCxDQUFaLENBREYsQ0FFRTtBQUNBO0FBQ0E7O0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FUK0M7QUFBQTtBQUFBOztBQWdCL0MsU0FBTztBQUNMRCxhQUFTLEVBQVRBO0FBREssR0FBUDtBQUdEOztHQW5CdUJMLFE7VUFDUEUsbUUiLCJmaWxlIjoiLi9Db21wb25lbnRzL1F1aXpUZXN0UmVzdWx0L0JhZGdlL3VzZUJhZGdlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VMb2NhbFN0YXRlIGZyb20gXCIuLi8uLi8uLi9jdXN0b20taG9va3MvdXNlTG9jYWxTdGF0ZVwiO1xuaW1wb3J0IGdldEJhZGdlSW1hZ2VMaW5rIGZyb20gXCIuLi8uLi8uLi9yZXBvc2l0b3J5L1F1aXpUZXN0L2dldEJhZGdlSW1hZ2VMaW5rXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUJhZGdlKHRlc3RJZDogbnVtYmVyKSB7XG4gIGNvbnN0IFt1c2VyXSA9IHVzZUxvY2FsU3RhdGUoXCJ1c2VyXCIsIFwiXCIpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbYmFkZ2VJbWFnZUxpbmssIHNldEJhZGdlSW1hZ2VMaW5rXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodXNlcikgZmV0Y2hCYWRnZUltYWdlTGluaygpO1xuICB9LCBbXSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hCYWRnZUltYWdlTGluaygpIHtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgLy8gY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRCYWRnZUltYWdlTGluayh0ZXN0SWQsIHVzZXI/LnRva2VuKTtcbiAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgLy8gc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaXNMb2FkaW5nLFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/QuizTestResult/Badge/useBadge.tsx\n");

/***/ }),

/***/ "./repository/QuizTest/getBadgeImageLink.tsx":
false

})