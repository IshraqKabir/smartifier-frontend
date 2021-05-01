webpackHotUpdate_N_E("pages/test/[id]/result",{

/***/ "./Components/QuizTestResult/Badge/Badge.tsx":
/*!***************************************************!*\
  !*** ./Components/QuizTestResult/Badge/Badge.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Badge; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../url */ \"./url.js\");\n/* harmony import */ var _useBadge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useBadge */ \"./Components/QuizTestResult/Badge/useBadge.tsx\");\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/QuizTestResult/Badge/Badge.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction Badge(_ref) {\n  _s();\n\n  var testId = _ref.testId;\n\n  var _useBadge = Object(_useBadge__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(testId),\n      isLoading = _useBadge.isLoading,\n      badgeImageLink = _useBadge.badgeImageLink;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Title, {\n      variant: \"h5\",\n      children: \"Quiz Badge\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Divider, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(LoadingContainer, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CircularProgress\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n        variant: \"subtitle1\",\n        children: \"Getting Your Badge Ready. Please wait.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }, this), !isLoading && badgeImageLink && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ImageContainer, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Avatar\"], {\n        src: \"\".concat(_url__WEBPACK_IMPORTED_MODULE_3__[\"backend_url\"], \"/storage/\").concat(badgeImageLink),\n        variant: \"square\",\n        style: {\n          height: 300,\n          width: 300\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }, this), !isLoading && error( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n      variant: \"subtitle1\",\n      color: \"warning\",\n      children: error\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }, this))]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Badge, \"w+SdSWnHHQn2xUs2V1Nnr+8Huwc=\", false, function () {\n  return [_useBadge__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n});\n\n_c = Badge;\nvar Container = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    width: \"100%\",\n    border: \"1px solid #e6e6e4\",\n    borderRadius: \"7px 7px 0px 0px\",\n    backgroundColor: \"white\",\n    display: \"flex\",\n    flexDirection: \"column\",\n    alignItems: \"center\",\n    marginTop: \"1rem\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\nvar LoadingContainer = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    display: \"flex\",\n    flexDirection: \"column\",\n    alignItems: \"center\",\n    padding: \"1rem\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\nvar Title = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    padding: \"0.7rem\",\n    textTransform: \"capitalize\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"]);\nvar Divider = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    width: \"100%\",\n    height: 2,\n    backgroundColor: \"#e6e6e4\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\nvar ImageContainer = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {}\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\n\nvar _c;\n\n$RefreshReg$(_c, \"Badge\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9RdWl6VGVzdFJlc3VsdC9CYWRnZS9CYWRnZS50c3g/OWU2YiJdLCJuYW1lcyI6WyJCYWRnZSIsInRlc3RJZCIsInVzZUJhZGdlIiwiaXNMb2FkaW5nIiwiYmFkZ2VJbWFnZUxpbmsiLCJiYWNrZW5kX3VybCIsImhlaWdodCIsIndpZHRoIiwiZXJyb3IiLCJDb250YWluZXIiLCJ3aXRoU3R5bGVzIiwicm9vdCIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm1hcmdpblRvcCIsIkJveCIsIkxvYWRpbmdDb250YWluZXIiLCJwYWRkaW5nIiwiVGl0bGUiLCJ0ZXh0VHJhbnNmb3JtIiwiVHlwb2dyYXBoeSIsIkRpdmlkZXIiLCJJbWFnZUNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQU1lLFNBQVNBLEtBQVQsT0FBbUM7QUFBQTs7QUFBQSxNQUFsQkMsTUFBa0IsUUFBbEJBLE1BQWtCOztBQUFBLGtCQUNWQyx5REFBUSxDQUFDRCxNQUFELENBREU7QUFBQSxNQUN4Q0UsU0FEd0MsYUFDeENBLFNBRHdDO0FBQUEsTUFDN0JDLGNBRDZCLGFBQzdCQSxjQUQ2Qjs7QUFHaEQsc0JBQ0UscUVBQUMsU0FBRDtBQUFBLDRCQUNFLHFFQUFDLEtBQUQ7QUFBTyxhQUFPLEVBQUMsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsRUFHR0QsU0FBUyxpQkFDUixxRUFBQyxnQkFBRDtBQUFBLDhCQUNFLHFFQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLHFFQUFDLDREQUFEO0FBQVksZUFBTyxFQUFDLFdBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkosRUFZRyxDQUFDQSxTQUFELElBQWNDLGNBQWQsaUJBQ0MscUVBQUMsY0FBRDtBQUFBLDZCQUNFLHFFQUFDLHdEQUFEO0FBQ0UsV0FBRyxZQUFLQyxnREFBTCxzQkFBNEJELGNBQTVCLENBREw7QUFFRSxlQUFPLEVBQUMsUUFGVjtBQUdFLGFBQUssRUFBRTtBQUFFRSxnQkFBTSxFQUFFLEdBQVY7QUFBZUMsZUFBSyxFQUFFO0FBQXRCO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiSixFQXNCRyxDQUFDSixTQUFELElBQ0NLLEtBQUssZUFDSCxxRUFBQyw0REFBRDtBQUFZLGFBQU8sRUFBQyxXQUFwQjtBQUFnQyxXQUFLLEVBQUMsU0FBdEM7QUFBQSxnQkFDR0E7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREcsQ0F2QlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUErQkQ7O0dBbEN1QlIsSztVQUNnQkUsaUQ7OztLQURoQkYsSztBQW9DeEIsSUFBTVMsU0FBUyxHQUFHQyxvRUFBVSxDQUFDO0FBQzNCQyxNQUFJLEVBQUU7QUFDSkosU0FBSyxFQUFFLE1BREg7QUFFSkssVUFBTSxFQUFFLG1CQUZKO0FBR0pDLGdCQUFZLEVBQUUsaUJBSFY7QUFJSkMsbUJBQWUsRUFBRSxPQUpiO0FBS0pDLFdBQU8sRUFBRSxNQUxMO0FBTUpDLGlCQUFhLEVBQUUsUUFOWDtBQU9KQyxjQUFVLEVBQUUsUUFQUjtBQVFKQyxhQUFTLEVBQUU7QUFSUDtBQURxQixDQUFELENBQVYsQ0FXZkMscURBWGUsQ0FBbEI7QUFhQSxJQUFNQyxnQkFBZ0IsR0FBR1Ysb0VBQVUsQ0FBQztBQUNsQ0MsTUFBSSxFQUFFO0FBQ0pJLFdBQU8sRUFBRSxNQURMO0FBRUpDLGlCQUFhLEVBQUUsUUFGWDtBQUdKQyxjQUFVLEVBQUUsUUFIUjtBQUlKSSxXQUFPLEVBQUU7QUFKTDtBQUQ0QixDQUFELENBQVYsQ0FPdEJGLHFEQVBzQixDQUF6QjtBQVNBLElBQU1HLEtBQUssR0FBR1osb0VBQVUsQ0FBQztBQUN2QkMsTUFBSSxFQUFFO0FBQ0pVLFdBQU8sRUFBRSxRQURMO0FBRUpFLGlCQUFhLEVBQUU7QUFGWDtBQURpQixDQUFELENBQVYsQ0FLWEMsNERBTFcsQ0FBZDtBQU9BLElBQU1DLE9BQU8sR0FBR2Ysb0VBQVUsQ0FBQztBQUN6QkMsTUFBSSxFQUFFO0FBQ0pKLFNBQUssRUFBRSxNQURIO0FBRUpELFVBQU0sRUFBRSxDQUZKO0FBR0pRLG1CQUFlLEVBQUU7QUFIYjtBQURtQixDQUFELENBQVYsQ0FNYksscURBTmEsQ0FBaEI7QUFRQSxJQUFNTyxjQUFjLEdBQUdoQixvRUFBVSxDQUFDO0FBQ2hDQyxNQUFJLEVBQUU7QUFEMEIsQ0FBRCxDQUFWLENBRXBCUSxxREFGb0IsQ0FBdkIiLCJmaWxlIjoiLi9Db21wb25lbnRzL1F1aXpUZXN0UmVzdWx0L0JhZGdlL0JhZGdlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEF2YXRhcixcbiAgQm94LFxuICBDaXJjdWxhclByb2dyZXNzLFxuICBUeXBvZ3JhcGh5LFxuICB3aXRoU3R5bGVzLFxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGJhY2tlbmRfdXJsIH0gZnJvbSBcIi4uLy4uLy4uL3VybFwiO1xuaW1wb3J0IHVzZUJhZGdlIGZyb20gXCIuL3VzZUJhZGdlXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICB0ZXN0SWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFkZ2UoeyB0ZXN0SWQgfTogSVByb3BzKSB7XG4gIGNvbnN0IHsgaXNMb2FkaW5nLCBiYWRnZUltYWdlTGluayB9ID0gdXNlQmFkZ2UodGVzdElkKTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8VGl0bGUgdmFyaWFudD1cImg1XCI+UXVpeiBCYWRnZTwvVGl0bGU+XG4gICAgICA8RGl2aWRlciAvPlxuICAgICAge2lzTG9hZGluZyAmJiAoXG4gICAgICAgIDxMb2FkaW5nQ29udGFpbmVyPlxuICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIC8+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiPlxuICAgICAgICAgICAgR2V0dGluZyBZb3VyIEJhZGdlIFJlYWR5LiBQbGVhc2Ugd2FpdC5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvTG9hZGluZ0NvbnRhaW5lcj5cbiAgICAgICl9XG5cbiAgICAgIHshaXNMb2FkaW5nICYmIGJhZGdlSW1hZ2VMaW5rICYmIChcbiAgICAgICAgPEltYWdlQ29udGFpbmVyPlxuICAgICAgICAgIDxBdmF0YXJcbiAgICAgICAgICAgIHNyYz17YCR7YmFja2VuZF91cmx9L3N0b3JhZ2UvJHtiYWRnZUltYWdlTGlua31gfVxuICAgICAgICAgICAgdmFyaWFudD1cInNxdWFyZVwiXG4gICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDMwMCwgd2lkdGg6IDMwMCB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSW1hZ2VDb250YWluZXI+XG4gICAgICApfVxuXG4gICAgICB7IWlzTG9hZGluZyAmJlxuICAgICAgICBlcnJvcihcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJ3YXJuaW5nXCI+XG4gICAgICAgICAgICB7ZXJyb3J9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICApfVxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuXG5jb25zdCBDb250YWluZXIgPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNlNmU2ZTRcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiN3B4IDdweCAwcHggMHB4XCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIG1hcmdpblRvcDogXCIxcmVtXCIsXG4gIH0sXG59KShCb3gpO1xuXG5jb25zdCBMb2FkaW5nQ29udGFpbmVyID0gd2l0aFN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgcGFkZGluZzogXCIxcmVtXCIsXG4gIH0sXG59KShCb3gpO1xuXG5jb25zdCBUaXRsZSA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgcGFkZGluZzogXCIwLjdyZW1cIixcbiAgICB0ZXh0VHJhbnNmb3JtOiBcImNhcGl0YWxpemVcIixcbiAgfSxcbn0pKFR5cG9ncmFwaHkpO1xuXG5jb25zdCBEaXZpZGVyID0gd2l0aFN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgaGVpZ2h0OiAyLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjZTZlNmU0XCIsXG4gIH0sXG59KShCb3gpO1xuXG5jb25zdCBJbWFnZUNvbnRhaW5lciA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7fSxcbn0pKEJveCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/QuizTestResult/Badge/Badge.tsx\n");

/***/ })

})