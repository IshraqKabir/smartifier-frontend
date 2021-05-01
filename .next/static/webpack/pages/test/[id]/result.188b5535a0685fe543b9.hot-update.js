webpackHotUpdate_N_E("pages/test/[id]/result",{

/***/ "./Components/QuizTestResult/Badge/Badge.tsx":
/*!***************************************************!*\
  !*** ./Components/QuizTestResult/Badge/Badge.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Badge; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _useBadge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useBadge */ \"./Components/QuizTestResult/Badge/useBadge.tsx\");\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/QuizTestResult/Badge/Badge.tsx\",\n    _s = $RefreshSig$();\n\n\n\nfunction Badge(_ref) {\n  _s();\n\n  var testId = _ref.testId;\n\n  var _useBadge = Object(_useBadge__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(testId),\n      isLoading = _useBadge.isLoading,\n      badgeImageLink = _useBadge.badgeImageLink;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Title, {\n      variant: \"h5\",\n      children: \"Quiz Badge\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Divider, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(LoadingContainer, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CircularProgress\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n        variant: \"subtitle1\",\n        children: \"Getting Your Badge Ready. Please wait.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }, this), !isLoading && badgeImageLink && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ImageContainer, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Avatar, {\n        src: \"\".concat(backend_url, \"/storage/\").concat(badgeImageLink),\n        variant: \"square\",\n        style: {\n          height: 300,\n          width: 300\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Badge, \"w+SdSWnHHQn2xUs2V1Nnr+8Huwc=\", false, function () {\n  return [_useBadge__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c = Badge;\nvar Container = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    width: \"100%\",\n    border: \"1px solid #e6e6e4\",\n    borderRadius: \"7px 7px 0px 0px\",\n    backgroundColor: \"white\",\n    display: \"flex\",\n    flexDirection: \"column\",\n    alignItems: \"center\",\n    marginTop: \"1rem\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\nvar LoadingContainer = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    display: \"flex\",\n    flexDirection: \"column\",\n    alignItems: \"center\",\n    padding: \"1rem\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\nvar Title = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    padding: \"0.7rem\",\n    textTransform: \"capitalize\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"]);\nvar Divider = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    width: \"100%\",\n    height: 2,\n    backgroundColor: \"#e6e6e4\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\nvar ImageContainer = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {}\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\n\nvar _c;\n\n$RefreshReg$(_c, \"Badge\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9RdWl6VGVzdFJlc3VsdC9CYWRnZS9CYWRnZS50c3g/OWU2YiJdLCJuYW1lcyI6WyJCYWRnZSIsInRlc3RJZCIsInVzZUJhZGdlIiwiaXNMb2FkaW5nIiwiYmFkZ2VJbWFnZUxpbmsiLCJiYWNrZW5kX3VybCIsImhlaWdodCIsIndpZHRoIiwiQ29udGFpbmVyIiwid2l0aFN0eWxlcyIsInJvb3QiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJtYXJnaW5Ub3AiLCJCb3giLCJMb2FkaW5nQ29udGFpbmVyIiwicGFkZGluZyIsIlRpdGxlIiwidGV4dFRyYW5zZm9ybSIsIlR5cG9ncmFwaHkiLCJEaXZpZGVyIiwiSW1hZ2VDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFNQTtBQU1lLFNBQVNBLEtBQVQsT0FBbUM7QUFBQTs7QUFBQSxNQUFsQkMsTUFBa0IsUUFBbEJBLE1BQWtCOztBQUFBLGtCQUNWQyx5REFBUSxDQUFDRCxNQUFELENBREU7QUFBQSxNQUN4Q0UsU0FEd0MsYUFDeENBLFNBRHdDO0FBQUEsTUFDN0JDLGNBRDZCLGFBQzdCQSxjQUQ2Qjs7QUFHaEQsc0JBQ0UscUVBQUMsU0FBRDtBQUFBLDRCQUNFLHFFQUFDLEtBQUQ7QUFBTyxhQUFPLEVBQUMsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsRUFHR0QsU0FBUyxpQkFDUixxRUFBQyxnQkFBRDtBQUFBLDhCQUNFLHFFQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLHFFQUFDLDREQUFEO0FBQVksZUFBTyxFQUFDLFdBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkosRUFZRyxDQUFDQSxTQUFELElBQWNDLGNBQWQsaUJBQ0MscUVBQUMsY0FBRDtBQUFBLDZCQUNFLHFFQUFDLE1BQUQ7QUFDRSxXQUFHLFlBQUtDLFdBQUwsc0JBQTRCRCxjQUE1QixDQURMO0FBRUUsZUFBTyxFQUFDLFFBRlY7QUFHRSxhQUFLLEVBQUU7QUFBRUUsZ0JBQU0sRUFBRSxHQUFWO0FBQWVDLGVBQUssRUFBRTtBQUF0QjtBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF3QkQ7O0dBM0J1QlAsSztVQUNnQkUsaUQ7OztLQURoQkYsSztBQTZCeEIsSUFBTVEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDO0FBQzNCQyxNQUFJLEVBQUU7QUFDSkgsU0FBSyxFQUFFLE1BREg7QUFFSkksVUFBTSxFQUFFLG1CQUZKO0FBR0pDLGdCQUFZLEVBQUUsaUJBSFY7QUFJSkMsbUJBQWUsRUFBRSxPQUpiO0FBS0pDLFdBQU8sRUFBRSxNQUxMO0FBTUpDLGlCQUFhLEVBQUUsUUFOWDtBQU9KQyxjQUFVLEVBQUUsUUFQUjtBQVFKQyxhQUFTLEVBQUU7QUFSUDtBQURxQixDQUFELENBQVYsQ0FXZkMscURBWGUsQ0FBbEI7QUFhQSxJQUFNQyxnQkFBZ0IsR0FBR1Ysb0VBQVUsQ0FBQztBQUNsQ0MsTUFBSSxFQUFFO0FBQ0pJLFdBQU8sRUFBRSxNQURMO0FBRUpDLGlCQUFhLEVBQUUsUUFGWDtBQUdKQyxjQUFVLEVBQUUsUUFIUjtBQUlKSSxXQUFPLEVBQUU7QUFKTDtBQUQ0QixDQUFELENBQVYsQ0FPdEJGLHFEQVBzQixDQUF6QjtBQVNBLElBQU1HLEtBQUssR0FBR1osb0VBQVUsQ0FBQztBQUN2QkMsTUFBSSxFQUFFO0FBQ0pVLFdBQU8sRUFBRSxRQURMO0FBRUpFLGlCQUFhLEVBQUU7QUFGWDtBQURpQixDQUFELENBQVYsQ0FLWEMsNERBTFcsQ0FBZDtBQU9BLElBQU1DLE9BQU8sR0FBR2Ysb0VBQVUsQ0FBQztBQUN6QkMsTUFBSSxFQUFFO0FBQ0pILFNBQUssRUFBRSxNQURIO0FBRUpELFVBQU0sRUFBRSxDQUZKO0FBR0pPLG1CQUFlLEVBQUU7QUFIYjtBQURtQixDQUFELENBQVYsQ0FNYksscURBTmEsQ0FBaEI7QUFRQSxJQUFNTyxjQUFjLEdBQUdoQixvRUFBVSxDQUFDO0FBQ2hDQyxNQUFJLEVBQUU7QUFEMEIsQ0FBRCxDQUFWLENBRXBCUSxxREFGb0IsQ0FBdkIiLCJmaWxlIjoiLi9Db21wb25lbnRzL1F1aXpUZXN0UmVzdWx0L0JhZGdlL0JhZGdlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEJveCxcbiAgQ2lyY3VsYXJQcm9ncmVzcyxcbiAgVHlwb2dyYXBoeSxcbiAgd2l0aFN0eWxlcyxcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgdXNlQmFkZ2UgZnJvbSBcIi4vdXNlQmFkZ2VcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHRlc3RJZDogbnVtYmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYWRnZSh7IHRlc3RJZCB9OiBJUHJvcHMpIHtcbiAgY29uc3QgeyBpc0xvYWRpbmcsIGJhZGdlSW1hZ2VMaW5rIH0gPSB1c2VCYWRnZSh0ZXN0SWQpO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxUaXRsZSB2YXJpYW50PVwiaDVcIj5RdWl6IEJhZGdlPC9UaXRsZT5cbiAgICAgIDxEaXZpZGVyIC8+XG4gICAgICB7aXNMb2FkaW5nICYmIChcbiAgICAgICAgPExvYWRpbmdDb250YWluZXI+XG4gICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MgLz5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCI+XG4gICAgICAgICAgICBHZXR0aW5nIFlvdXIgQmFkZ2UgUmVhZHkuIFBsZWFzZSB3YWl0LlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9Mb2FkaW5nQ29udGFpbmVyPlxuICAgICAgKX1cblxuICAgICAgeyFpc0xvYWRpbmcgJiYgYmFkZ2VJbWFnZUxpbmsgJiYgKFxuICAgICAgICA8SW1hZ2VDb250YWluZXI+XG4gICAgICAgICAgPEF2YXRhclxuICAgICAgICAgICAgc3JjPXtgJHtiYWNrZW5kX3VybH0vc3RvcmFnZS8ke2JhZGdlSW1hZ2VMaW5rfWB9XG4gICAgICAgICAgICB2YXJpYW50PVwic3F1YXJlXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogMzAwLCB3aWR0aDogMzAwIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbWFnZUNvbnRhaW5lcj5cbiAgICAgICl9XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbmNvbnN0IENvbnRhaW5lciA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIGJvcmRlcjogXCIxcHggc29saWQgI2U2ZTZlNFwiLFxuICAgIGJvcmRlclJhZGl1czogXCI3cHggN3B4IDBweCAwcHhcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgbWFyZ2luVG9wOiBcIjFyZW1cIixcbiAgfSxcbn0pKEJveCk7XG5cbmNvbnN0IExvYWRpbmdDb250YWluZXIgPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBwYWRkaW5nOiBcIjFyZW1cIixcbiAgfSxcbn0pKEJveCk7XG5cbmNvbnN0IFRpdGxlID0gd2l0aFN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBwYWRkaW5nOiBcIjAuN3JlbVwiLFxuICAgIHRleHRUcmFuc2Zvcm06IFwiY2FwaXRhbGl6ZVwiLFxuICB9LFxufSkoVHlwb2dyYXBoeSk7XG5cbmNvbnN0IERpdmlkZXIgPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBoZWlnaHQ6IDIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNlNmU2ZTRcIixcbiAgfSxcbn0pKEJveCk7XG5cbmNvbnN0IEltYWdlQ29udGFpbmVyID0gd2l0aFN0eWxlcyh7XG4gIHJvb3Q6IHt9LFxufSkoQm94KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/QuizTestResult/Badge/Badge.tsx\n");

/***/ })

})