webpackHotUpdate_N_E("pages/test/[id]/result",{

/***/ "./Components/QuizTestResult/Badge/Badge.tsx":
/*!***************************************************!*\
  !*** ./Components/QuizTestResult/Badge/Badge.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Badge; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../url */ \"./url.js\");\n/* harmony import */ var _useBadge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useBadge */ \"./Components/QuizTestResult/Badge/useBadge.tsx\");\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/QuizTestResult/Badge/Badge.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction Badge(_ref) {\n  _s();\n\n  var testId = _ref.testId;\n\n  var _useBadge = Object(_useBadge__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(testId),\n      isLoading = _useBadge.isLoading,\n      badgeImageLink = _useBadge.badgeImageLink;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Title, {\n      variant: \"h5\",\n      children: \"Quiz Badge\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Divider, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(LoadingContainer, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CircularProgress\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n        variant: \"subtitle1\",\n        children: \"Getting Your Badge Ready. Please wait.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }, this), !isLoading && badgeImageLink && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ImageContainer, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Avatar\"], {\n        src: \"\".concat(_url__WEBPACK_IMPORTED_MODULE_3__[\"backend_url\"], \"/storage/\").concat(badgeImageLink),\n        variant: \"square\",\n        style: {\n          height: 300,\n          width: 300\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }, this), !isLoading && error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n      variant: \"subtitle1\",\n      color: \"warning\",\n      children: error\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Badge, \"w+SdSWnHHQn2xUs2V1Nnr+8Huwc=\", false, function () {\n  return [_useBadge__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n});\n\n_c = Badge;\nvar Container = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    width: \"100%\",\n    border: \"1px solid #e6e6e4\",\n    borderRadius: \"7px 7px 0px 0px\",\n    backgroundColor: \"white\",\n    display: \"flex\",\n    flexDirection: \"column\",\n    alignItems: \"center\",\n    marginTop: \"1rem\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\nvar LoadingContainer = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    display: \"flex\",\n    flexDirection: \"column\",\n    alignItems: \"center\",\n    padding: \"1rem\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\nvar Title = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    padding: \"0.7rem\",\n    textTransform: \"capitalize\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"]);\nvar Divider = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    width: \"100%\",\n    height: 2,\n    backgroundColor: \"#e6e6e4\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\nvar ImageContainer = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {}\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\n\nvar _c;\n\n$RefreshReg$(_c, \"Badge\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9RdWl6VGVzdFJlc3VsdC9CYWRnZS9CYWRnZS50c3g/OWU2YiJdLCJuYW1lcyI6WyJCYWRnZSIsInRlc3RJZCIsInVzZUJhZGdlIiwiaXNMb2FkaW5nIiwiYmFkZ2VJbWFnZUxpbmsiLCJiYWNrZW5kX3VybCIsImhlaWdodCIsIndpZHRoIiwiZXJyb3IiLCJDb250YWluZXIiLCJ3aXRoU3R5bGVzIiwicm9vdCIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm1hcmdpblRvcCIsIkJveCIsIkxvYWRpbmdDb250YWluZXIiLCJwYWRkaW5nIiwiVGl0bGUiLCJ0ZXh0VHJhbnNmb3JtIiwiVHlwb2dyYXBoeSIsIkRpdmlkZXIiLCJJbWFnZUNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQU1lLFNBQVNBLEtBQVQsT0FBbUM7QUFBQTs7QUFBQSxNQUFsQkMsTUFBa0IsUUFBbEJBLE1BQWtCOztBQUFBLGtCQUNWQyx5REFBUSxDQUFDRCxNQUFELENBREU7QUFBQSxNQUN4Q0UsU0FEd0MsYUFDeENBLFNBRHdDO0FBQUEsTUFDN0JDLGNBRDZCLGFBQzdCQSxjQUQ2Qjs7QUFHaEQsc0JBQ0UscUVBQUMsU0FBRDtBQUFBLDRCQUNFLHFFQUFDLEtBQUQ7QUFBTyxhQUFPLEVBQUMsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsRUFHR0QsU0FBUyxpQkFDUixxRUFBQyxnQkFBRDtBQUFBLDhCQUNFLHFFQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLHFFQUFDLDREQUFEO0FBQVksZUFBTyxFQUFDLFdBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkosRUFZRyxDQUFDQSxTQUFELElBQWNDLGNBQWQsaUJBQ0MscUVBQUMsY0FBRDtBQUFBLDZCQUNFLHFFQUFDLHdEQUFEO0FBQ0UsV0FBRyxZQUFLQyxnREFBTCxzQkFBNEJELGNBQTVCLENBREw7QUFFRSxlQUFPLEVBQUMsUUFGVjtBQUdFLGFBQUssRUFBRTtBQUFFRSxnQkFBTSxFQUFFLEdBQVY7QUFBZUMsZUFBSyxFQUFFO0FBQXRCO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiSixFQXNCRyxDQUFDSixTQUFELElBQWNLLEtBQWQsaUJBQ0MscUVBQUMsNERBQUQ7QUFBWSxhQUFPLEVBQUMsV0FBcEI7QUFBZ0MsV0FBSyxFQUFDLFNBQXRDO0FBQUEsZ0JBQ0dBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQThCRDs7R0FqQ3VCUixLO1VBQ2dCRSxpRDs7O0tBRGhCRixLO0FBbUN4QixJQUFNUyxTQUFTLEdBQUdDLG9FQUFVLENBQUM7QUFDM0JDLE1BQUksRUFBRTtBQUNKSixTQUFLLEVBQUUsTUFESDtBQUVKSyxVQUFNLEVBQUUsbUJBRko7QUFHSkMsZ0JBQVksRUFBRSxpQkFIVjtBQUlKQyxtQkFBZSxFQUFFLE9BSmI7QUFLSkMsV0FBTyxFQUFFLE1BTEw7QUFNSkMsaUJBQWEsRUFBRSxRQU5YO0FBT0pDLGNBQVUsRUFBRSxRQVBSO0FBUUpDLGFBQVMsRUFBRTtBQVJQO0FBRHFCLENBQUQsQ0FBVixDQVdmQyxxREFYZSxDQUFsQjtBQWFBLElBQU1DLGdCQUFnQixHQUFHVixvRUFBVSxDQUFDO0FBQ2xDQyxNQUFJLEVBQUU7QUFDSkksV0FBTyxFQUFFLE1BREw7QUFFSkMsaUJBQWEsRUFBRSxRQUZYO0FBR0pDLGNBQVUsRUFBRSxRQUhSO0FBSUpJLFdBQU8sRUFBRTtBQUpMO0FBRDRCLENBQUQsQ0FBVixDQU90QkYscURBUHNCLENBQXpCO0FBU0EsSUFBTUcsS0FBSyxHQUFHWixvRUFBVSxDQUFDO0FBQ3ZCQyxNQUFJLEVBQUU7QUFDSlUsV0FBTyxFQUFFLFFBREw7QUFFSkUsaUJBQWEsRUFBRTtBQUZYO0FBRGlCLENBQUQsQ0FBVixDQUtYQyw0REFMVyxDQUFkO0FBT0EsSUFBTUMsT0FBTyxHQUFHZixvRUFBVSxDQUFDO0FBQ3pCQyxNQUFJLEVBQUU7QUFDSkosU0FBSyxFQUFFLE1BREg7QUFFSkQsVUFBTSxFQUFFLENBRko7QUFHSlEsbUJBQWUsRUFBRTtBQUhiO0FBRG1CLENBQUQsQ0FBVixDQU1iSyxxREFOYSxDQUFoQjtBQVFBLElBQU1PLGNBQWMsR0FBR2hCLG9FQUFVLENBQUM7QUFDaENDLE1BQUksRUFBRTtBQUQwQixDQUFELENBQVYsQ0FFcEJRLHFEQUZvQixDQUF2QiIsImZpbGUiOiIuL0NvbXBvbmVudHMvUXVpelRlc3RSZXN1bHQvQmFkZ2UvQmFkZ2UudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQXZhdGFyLFxuICBCb3gsXG4gIENpcmN1bGFyUHJvZ3Jlc3MsXG4gIFR5cG9ncmFwaHksXG4gIHdpdGhTdHlsZXMsXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYmFja2VuZF91cmwgfSBmcm9tIFwiLi4vLi4vLi4vdXJsXCI7XG5pbXBvcnQgdXNlQmFkZ2UgZnJvbSBcIi4vdXNlQmFkZ2VcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHRlc3RJZDogbnVtYmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYWRnZSh7IHRlc3RJZCB9OiBJUHJvcHMpIHtcbiAgY29uc3QgeyBpc0xvYWRpbmcsIGJhZGdlSW1hZ2VMaW5rIH0gPSB1c2VCYWRnZSh0ZXN0SWQpO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxUaXRsZSB2YXJpYW50PVwiaDVcIj5RdWl6IEJhZGdlPC9UaXRsZT5cbiAgICAgIDxEaXZpZGVyIC8+XG4gICAgICB7aXNMb2FkaW5nICYmIChcbiAgICAgICAgPExvYWRpbmdDb250YWluZXI+XG4gICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MgLz5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCI+XG4gICAgICAgICAgICBHZXR0aW5nIFlvdXIgQmFkZ2UgUmVhZHkuIFBsZWFzZSB3YWl0LlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9Mb2FkaW5nQ29udGFpbmVyPlxuICAgICAgKX1cblxuICAgICAgeyFpc0xvYWRpbmcgJiYgYmFkZ2VJbWFnZUxpbmsgJiYgKFxuICAgICAgICA8SW1hZ2VDb250YWluZXI+XG4gICAgICAgICAgPEF2YXRhclxuICAgICAgICAgICAgc3JjPXtgJHtiYWNrZW5kX3VybH0vc3RvcmFnZS8ke2JhZGdlSW1hZ2VMaW5rfWB9XG4gICAgICAgICAgICB2YXJpYW50PVwic3F1YXJlXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogMzAwLCB3aWR0aDogMzAwIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbWFnZUNvbnRhaW5lcj5cbiAgICAgICl9XG5cbiAgICAgIHshaXNMb2FkaW5nICYmIGVycm9yICYmIChcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIGNvbG9yPVwid2FybmluZ1wiPlxuICAgICAgICAgIHtlcnJvcn1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgKX1cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cblxuY29uc3QgQ29udGFpbmVyID0gd2l0aFN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjZTZlNmU0XCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjdweCA3cHggMHB4IDBweFwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBtYXJnaW5Ub3A6IFwiMXJlbVwiLFxuICB9LFxufSkoQm94KTtcblxuY29uc3QgTG9hZGluZ0NvbnRhaW5lciA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIHBhZGRpbmc6IFwiMXJlbVwiLFxuICB9LFxufSkoQm94KTtcblxuY29uc3QgVGl0bGUgPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIHBhZGRpbmc6IFwiMC43cmVtXCIsXG4gICAgdGV4dFRyYW5zZm9ybTogXCJjYXBpdGFsaXplXCIsXG4gIH0sXG59KShUeXBvZ3JhcGh5KTtcblxuY29uc3QgRGl2aWRlciA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIGhlaWdodDogMixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2U2ZTZlNFwiLFxuICB9LFxufSkoQm94KTtcblxuY29uc3QgSW1hZ2VDb250YWluZXIgPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge30sXG59KShCb3gpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/QuizTestResult/Badge/Badge.tsx\n");

/***/ })

})