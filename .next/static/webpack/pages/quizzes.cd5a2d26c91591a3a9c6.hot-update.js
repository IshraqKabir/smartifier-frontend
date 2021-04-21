webpackHotUpdate_N_E("pages/quizzes",{

/***/ "./custom-hooks/useLoginAlert.tsx":
/*!****************************************!*\
  !*** ./custom-hooks/useLoginAlert.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\n\n\nvar useLoginAlert = function useLoginAlert() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      showLoginAlert = _useState[0],\n      setShowLoginAlert = _useState[1];\n\n  var handleClickWhenLoggedOut = function handleClickWhenLoggedOut() {\n    setShowLoginAlert(true);\n    setTimeout(function () {\n      setShowLoginAlert(false);\n    }, 3000);\n  };\n\n  var close = function close() {\n    setShowLoginAlert(false);\n  };\n\n  return {\n    user: user,\n    showLoginAlert: showLoginAlert,\n    close: close,\n    handleClickWhenLoggedOut: handleClickWhenLoggedOut\n  };\n};\n\n_s(useLoginAlert, \"HZaphWqigPoJe1bwM6X6jVCA/ig=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useLoginAlert);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY3VzdG9tLWhvb2tzL3VzZUxvZ2luQWxlcnQudHN4P2EyOTQiXSwibmFtZXMiOlsidXNlTG9naW5BbGVydCIsInVzZVN0YXRlIiwic2hvd0xvZ2luQWxlcnQiLCJzZXRTaG93TG9naW5BbGVydCIsImhhbmRsZUNsaWNrV2hlbkxvZ2dlZE91dCIsInNldFRpbWVvdXQiLCJjbG9zZSIsInVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBR0EsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQUEsa0JBQ2tCQyxzREFBUSxDQUFVLEtBQVYsQ0FEMUI7QUFBQSxNQUNuQkMsY0FEbUI7QUFBQSxNQUNIQyxpQkFERzs7QUFHMUIsTUFBTUMsd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUEyQixHQUFNO0FBQ3JDRCxxQkFBaUIsQ0FBQyxJQUFELENBQWpCO0FBQ0FFLGNBQVUsQ0FBQyxZQUFNO0FBQ2ZGLHVCQUFpQixDQUFDLEtBQUQsQ0FBakI7QUFDRCxLQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0QsR0FMRDs7QUFPQSxNQUFNRyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQ2xCSCxxQkFBaUIsQ0FBQyxLQUFELENBQWpCO0FBQ0QsR0FGRDs7QUFJQSxTQUFPO0FBQUVJLFFBQUksRUFBSkEsSUFBRjtBQUFRTCxrQkFBYyxFQUFkQSxjQUFSO0FBQXdCSSxTQUFLLEVBQUxBLEtBQXhCO0FBQStCRiw0QkFBd0IsRUFBeEJBO0FBQS9CLEdBQVA7QUFDRCxDQWZEOztHQUFNSixhOztBQWlCU0EsNEVBQWYiLCJmaWxlIjoiLi9jdXN0b20taG9va3MvdXNlTG9naW5BbGVydC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZUxvY2FsU3RhdGUgZnJvbSBcIi4vdXNlTG9jYWxTdGF0ZVwiO1xuXG5jb25zdCB1c2VMb2dpbkFsZXJ0ID0gKCkgPT4ge1xuICBjb25zdCBbc2hvd0xvZ2luQWxlcnQsIHNldFNob3dMb2dpbkFsZXJ0XSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVDbGlja1doZW5Mb2dnZWRPdXQgPSAoKSA9PiB7XG4gICAgc2V0U2hvd0xvZ2luQWxlcnQodHJ1ZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRTaG93TG9naW5BbGVydChmYWxzZSk7XG4gICAgfSwgMzAwMCk7XG4gIH07XG5cbiAgY29uc3QgY2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0U2hvd0xvZ2luQWxlcnQoZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiB7IHVzZXIsIHNob3dMb2dpbkFsZXJ0LCBjbG9zZSwgaGFuZGxlQ2xpY2tXaGVuTG9nZ2VkT3V0IH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VMb2dpbkFsZXJ0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./custom-hooks/useLoginAlert.tsx\n");

/***/ })

})