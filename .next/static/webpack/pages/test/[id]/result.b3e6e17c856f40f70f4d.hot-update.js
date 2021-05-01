webpackHotUpdate_N_E("pages/test/[id]/result",{

/***/ "./Components/QuizTestResult/Badge/Badge.tsx":
/*!***************************************************!*\
  !*** ./Components/QuizTestResult/Badge/Badge.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Badge; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _useBadge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useBadge */ \"./Components/QuizTestResult/Badge/useBadge.tsx\");\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/QuizTestResult/Badge/Badge.tsx\",\n    _s = $RefreshSig$();\n\n\n\nfunction Badge(_ref) {\n  _s();\n\n  var _quizInfo;\n\n  var testId = _ref.testId;\n\n  var _useBadge = Object(_useBadge__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(testId),\n      isLoading = _useBadge.isLoading,\n      badgeImageLink = _useBadge.badgeImageLink;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Title, {\n      variant: \"h5\",\n      children: \"Quiz Badge\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Divider, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(LoadingContainer, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CircularProgress\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n        variant: \"subtitle1\",\n        children: \"Getting Your Badge Ready. Please wait.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }, this), !isLoading && badgeImageLink && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ImageContainer, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Avatar, {\n        src: \"\".concat(backend_url, \"/storage/\").concat((_quizInfo = quizInfo) === null || _quizInfo === void 0 ? void 0 : _quizInfo.image_link),\n        variant: \"square\",\n        style: {\n          height: 100,\n          width: 100\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Badge, \"w+SdSWnHHQn2xUs2V1Nnr+8Huwc=\", false, function () {\n  return [_useBadge__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c = Badge;\nvar Container = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    width: \"100%\",\n    border: \"1px solid #e6e6e4\",\n    borderRadius: \"7px 7px 0px 0px\",\n    backgroundColor: \"white\",\n    display: \"flex\",\n    flexDirection: \"column\",\n    alignItems: \"center\",\n    marginTop: \"1rem\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\nvar LoadingContainer = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    display: \"flex\",\n    flexDirection: \"column\",\n    alignItems: \"center\",\n    padding: \"1rem\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\nvar Title = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    padding: \"0.7rem\",\n    textTransform: \"capitalize\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"]);\nvar Divider = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    width: \"100%\",\n    height: 2,\n    backgroundColor: \"#e6e6e4\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\n\nvar _c;\n\n$RefreshReg$(_c, \"Badge\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9RdWl6VGVzdFJlc3VsdC9CYWRnZS9CYWRnZS50c3g/OWU2YiJdLCJuYW1lcyI6WyJCYWRnZSIsInRlc3RJZCIsInVzZUJhZGdlIiwiaXNMb2FkaW5nIiwiYmFkZ2VJbWFnZUxpbmsiLCJiYWNrZW5kX3VybCIsInF1aXpJbmZvIiwiaW1hZ2VfbGluayIsImhlaWdodCIsIndpZHRoIiwiQ29udGFpbmVyIiwid2l0aFN0eWxlcyIsInJvb3QiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJtYXJnaW5Ub3AiLCJCb3giLCJMb2FkaW5nQ29udGFpbmVyIiwicGFkZGluZyIsIlRpdGxlIiwidGV4dFRyYW5zZm9ybSIsIlR5cG9ncmFwaHkiLCJEaXZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBTUE7QUFNZSxTQUFTQSxLQUFULE9BQW1DO0FBQUE7O0FBQUE7O0FBQUEsTUFBbEJDLE1BQWtCLFFBQWxCQSxNQUFrQjs7QUFBQSxrQkFDVkMseURBQVEsQ0FBQ0QsTUFBRCxDQURFO0FBQUEsTUFDeENFLFNBRHdDLGFBQ3hDQSxTQUR3QztBQUFBLE1BQzdCQyxjQUQ2QixhQUM3QkEsY0FENkI7O0FBR2hELHNCQUNFLHFFQUFDLFNBQUQ7QUFBQSw0QkFDRSxxRUFBQyxLQUFEO0FBQU8sYUFBTyxFQUFDLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLHFFQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLEVBR0dELFNBQVMsaUJBQ1IscUVBQUMsZ0JBQUQ7QUFBQSw4QkFDRSxxRUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSxxRUFBQyw0REFBRDtBQUFZLGVBQU8sRUFBQyxXQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKLEVBWUcsQ0FBQ0EsU0FBRCxJQUFjQyxjQUFkLGlCQUNDLHFFQUFDLGNBQUQ7QUFBQSw2QkFDRSxxRUFBQyxNQUFEO0FBQ0UsV0FBRyxZQUFLQyxXQUFMLG1DQUE0QkMsUUFBNUIsOENBQTRCLFVBQVVDLFVBQXRDLENBREw7QUFFRSxlQUFPLEVBQUMsUUFGVjtBQUdFLGFBQUssRUFBRTtBQUFFQyxnQkFBTSxFQUFFLEdBQVY7QUFBZUMsZUFBSyxFQUFFO0FBQXRCO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdCRDs7R0EzQnVCVCxLO1VBQ2dCRSxpRDs7O0tBRGhCRixLO0FBNkJ4QixJQUFNVSxTQUFTLEdBQUdDLG9FQUFVLENBQUM7QUFDM0JDLE1BQUksRUFBRTtBQUNKSCxTQUFLLEVBQUUsTUFESDtBQUVKSSxVQUFNLEVBQUUsbUJBRko7QUFHSkMsZ0JBQVksRUFBRSxpQkFIVjtBQUlKQyxtQkFBZSxFQUFFLE9BSmI7QUFLSkMsV0FBTyxFQUFFLE1BTEw7QUFNSkMsaUJBQWEsRUFBRSxRQU5YO0FBT0pDLGNBQVUsRUFBRSxRQVBSO0FBUUpDLGFBQVMsRUFBRTtBQVJQO0FBRHFCLENBQUQsQ0FBVixDQVdmQyxxREFYZSxDQUFsQjtBQWFBLElBQU1DLGdCQUFnQixHQUFHVixvRUFBVSxDQUFDO0FBQ2xDQyxNQUFJLEVBQUU7QUFDSkksV0FBTyxFQUFFLE1BREw7QUFFSkMsaUJBQWEsRUFBRSxRQUZYO0FBR0pDLGNBQVUsRUFBRSxRQUhSO0FBSUpJLFdBQU8sRUFBRTtBQUpMO0FBRDRCLENBQUQsQ0FBVixDQU90QkYscURBUHNCLENBQXpCO0FBU0EsSUFBTUcsS0FBSyxHQUFHWixvRUFBVSxDQUFDO0FBQ3ZCQyxNQUFJLEVBQUU7QUFDSlUsV0FBTyxFQUFFLFFBREw7QUFFSkUsaUJBQWEsRUFBRTtBQUZYO0FBRGlCLENBQUQsQ0FBVixDQUtYQyw0REFMVyxDQUFkO0FBT0EsSUFBTUMsT0FBTyxHQUFHZixvRUFBVSxDQUFDO0FBQ3pCQyxNQUFJLEVBQUU7QUFDSkgsU0FBSyxFQUFFLE1BREg7QUFFSkQsVUFBTSxFQUFFLENBRko7QUFHSk8sbUJBQWUsRUFBRTtBQUhiO0FBRG1CLENBQUQsQ0FBVixDQU1iSyxxREFOYSxDQUFoQiIsImZpbGUiOiIuL0NvbXBvbmVudHMvUXVpelRlc3RSZXN1bHQvQmFkZ2UvQmFkZ2UudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQm94LFxuICBDaXJjdWxhclByb2dyZXNzLFxuICBUeXBvZ3JhcGh5LFxuICB3aXRoU3R5bGVzLFxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB1c2VCYWRnZSBmcm9tIFwiLi91c2VCYWRnZVwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgdGVzdElkOiBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhZGdlKHsgdGVzdElkIH06IElQcm9wcykge1xuICBjb25zdCB7IGlzTG9hZGluZywgYmFkZ2VJbWFnZUxpbmsgfSA9IHVzZUJhZGdlKHRlc3RJZCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFRpdGxlIHZhcmlhbnQ9XCJoNVwiPlF1aXogQmFkZ2U8L1RpdGxlPlxuICAgICAgPERpdmlkZXIgLz5cbiAgICAgIHtpc0xvYWRpbmcgJiYgKFxuICAgICAgICA8TG9hZGluZ0NvbnRhaW5lcj5cbiAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyAvPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIj5cbiAgICAgICAgICAgIEdldHRpbmcgWW91ciBCYWRnZSBSZWFkeS4gUGxlYXNlIHdhaXQuXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0xvYWRpbmdDb250YWluZXI+XG4gICAgICApfVxuXG4gICAgICB7IWlzTG9hZGluZyAmJiBiYWRnZUltYWdlTGluayAmJiAoXG4gICAgICAgIDxJbWFnZUNvbnRhaW5lcj5cbiAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICBzcmM9e2Ake2JhY2tlbmRfdXJsfS9zdG9yYWdlLyR7cXVpekluZm8/LmltYWdlX2xpbmt9YH1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzcXVhcmVcIlxuICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAxMDAsIHdpZHRoOiAxMDAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0ltYWdlQ29udGFpbmVyPlxuICAgICAgKX1cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cblxuY29uc3QgQ29udGFpbmVyID0gd2l0aFN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjZTZlNmU0XCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjdweCA3cHggMHB4IDBweFwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBtYXJnaW5Ub3A6IFwiMXJlbVwiLFxuICB9LFxufSkoQm94KTtcblxuY29uc3QgTG9hZGluZ0NvbnRhaW5lciA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIHBhZGRpbmc6IFwiMXJlbVwiLFxuICB9LFxufSkoQm94KTtcblxuY29uc3QgVGl0bGUgPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIHBhZGRpbmc6IFwiMC43cmVtXCIsXG4gICAgdGV4dFRyYW5zZm9ybTogXCJjYXBpdGFsaXplXCIsXG4gIH0sXG59KShUeXBvZ3JhcGh5KTtcblxuY29uc3QgRGl2aWRlciA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIGhlaWdodDogMixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2U2ZTZlNFwiLFxuICB9LFxufSkoQm94KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/QuizTestResult/Badge/Badge.tsx\n");

/***/ })

})