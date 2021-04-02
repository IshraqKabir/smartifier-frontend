webpackHotUpdate_N_E("pages/blog/posts/[slug]",{

/***/ "./Components/Post/SinglePost/LCSStatus/LCSStatus.tsx":
/*!************************************************************!*\
  !*** ./Components/Post/SinglePost/LCSStatus/LCSStatus.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Comments_Comments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Comments/Comments */ \"./Components/Post/SinglePost/LCSStatus/Comments/Comments.tsx\");\n/* harmony import */ var _Likes_Likes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Likes/Likes */ \"./Components/Post/SinglePost/LCSStatus/Likes/Likes.tsx\");\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/Post/SinglePost/LCSStatus/LCSStatus.tsx\",\n    _this = undefined;\n\n\n\n\n\n\nvar LCSStatus = function LCSStatus(_ref) {\n  var post = _ref.post;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Likes_Likes__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      post: post\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Comments_Comments__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      post: post\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = LCSStatus;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LCSStatus);\nvar imageStyle = {\n  width: \"23px\",\n  height: \"23px\",\n  marginRight: \"16px\",\n  alignSelf: \"center\",\n  backgroundColor: \"lightgray\",\n  borderRadius: \"50%\",\n  padding: \"5px\",\n  cursor: \"pointer\"\n};\nvar Container = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    width: \"100%\",\n    padding: \"8px 0\",\n    borderTop: \"1px solid black\",\n    borderBottom: \"1px solid black\",\n    margin: \"16px\",\n    display: \"flex\",\n    color: \"#808080\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\nvar Button = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    maxWidth: \"240px\",\n    display: \"flex\",\n    alignItems: \"center\",\n    marginRight: \"16px\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\nvar Number = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    display: \"inline-block\",\n    marginRight: 8\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\n\nvar _c;\n\n$RefreshReg$(_c, \"LCSStatus\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qb3N0L1NpbmdsZVBvc3QvTENTU3RhdHVzL0xDU1N0YXR1cy50c3g/MDAwZSJdLCJuYW1lcyI6WyJMQ1NTdGF0dXMiLCJwb3N0IiwiaW1hZ2VTdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luUmlnaHQiLCJhbGlnblNlbGYiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwiY3Vyc29yIiwiQ29udGFpbmVyIiwid2l0aFN0eWxlcyIsInJvb3QiLCJib3JkZXJUb3AiLCJib3JkZXJCb3R0b20iLCJtYXJnaW4iLCJkaXNwbGF5IiwiY29sb3IiLCJCb3giLCJCdXR0b24iLCJtYXhXaWR0aCIsImFsaWduSXRlbXMiLCJOdW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFNQSxJQUFNQSxTQUEyQixHQUFHLFNBQTlCQSxTQUE4QixPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ2hELHNCQUNFLHFFQUFDLFNBQUQ7QUFBQSw0QkFDRSxxRUFBQyxvREFBRDtBQUFPLFVBQUksRUFBRUE7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSxxRUFBQywwREFBRDtBQUFVLFVBQUksRUFBRUE7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBTUQsQ0FQRDs7S0FBTUQsUztBQVNTQSx3RUFBZjtBQUVBLElBQU1FLFVBQVUsR0FBRztBQUNqQkMsT0FBSyxFQUFFLE1BRFU7QUFFakJDLFFBQU0sRUFBRSxNQUZTO0FBR2pCQyxhQUFXLEVBQUUsTUFISTtBQUlqQkMsV0FBUyxFQUFFLFFBSk07QUFLakJDLGlCQUFlLEVBQUUsV0FMQTtBQU1qQkMsY0FBWSxFQUFFLEtBTkc7QUFPakJDLFNBQU8sRUFBRSxLQVBRO0FBUWpCQyxRQUFNLEVBQUU7QUFSUyxDQUFuQjtBQVdBLElBQU1DLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQztBQUMzQkMsTUFBSSxFQUFFO0FBQ0pWLFNBQUssRUFBRSxNQURIO0FBRUpNLFdBQU8sRUFBRSxPQUZMO0FBR0pLLGFBQVMsRUFBRSxpQkFIUDtBQUlKQyxnQkFBWSxFQUFFLGlCQUpWO0FBS0pDLFVBQU0sRUFBRSxNQUxKO0FBTUpDLFdBQU8sRUFBRSxNQU5MO0FBT0pDLFNBQUssRUFBRTtBQVBIO0FBRHFCLENBQUQsQ0FBVixDQVVmQyxxREFWZSxDQUFsQjtBQVlBLElBQU1DLE1BQU0sR0FBR1Isb0VBQVUsQ0FBQztBQUN4QkMsTUFBSSxFQUFFO0FBQ0pRLFlBQVEsRUFBRSxPQUROO0FBRUpKLFdBQU8sRUFBRSxNQUZMO0FBR0pLLGNBQVUsRUFBRSxRQUhSO0FBSUpqQixlQUFXLEVBQUU7QUFKVDtBQURrQixDQUFELENBQVYsQ0FPWmMscURBUFksQ0FBZjtBQVNBLElBQU1JLE1BQU0sR0FBR1gsb0VBQVUsQ0FBQztBQUN4QkMsTUFBSSxFQUFFO0FBQ0pJLFdBQU8sRUFBRSxjQURMO0FBRUpaLGVBQVcsRUFBRTtBQUZUO0FBRGtCLENBQUQsQ0FBVixDQUtaYyxxREFMWSxDQUFmIiwiZmlsZSI6Ii4vQ29tcG9uZW50cy9Qb3N0L1NpbmdsZVBvc3QvTENTU3RhdHVzL0xDU1N0YXR1cy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdmF0YXIsIEJveCwgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IElQb3N0IGZyb20gXCIuLi8uLi8uLi8uLi9Nb2RlbHMvSVBvc3RcIjtcbmltcG9ydCBDb21tZW50cyBmcm9tIFwiLi9Db21tZW50cy9Db21tZW50c1wiO1xuaW1wb3J0IExpa2VzIGZyb20gXCIuL0xpa2VzL0xpa2VzXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBwb3N0OiBJUG9zdDtcbn1cblxuY29uc3QgTENTU3RhdHVzOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHsgcG9zdCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxMaWtlcyBwb3N0PXtwb3N0fSAvPlxuICAgICAgPENvbW1lbnRzIHBvc3Q9e3Bvc3R9IC8+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMQ1NTdGF0dXM7XG5cbmNvbnN0IGltYWdlU3R5bGUgPSB7XG4gIHdpZHRoOiBcIjIzcHhcIixcbiAgaGVpZ2h0OiBcIjIzcHhcIixcbiAgbWFyZ2luUmlnaHQ6IFwiMTZweFwiLFxuICBhbGlnblNlbGY6IFwiY2VudGVyXCIsXG4gIGJhY2tncm91bmRDb2xvcjogXCJsaWdodGdyYXlcIixcbiAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICBwYWRkaW5nOiBcIjVweFwiLFxuICBjdXJzb3I6IFwicG9pbnRlclwiLFxufTtcblxuY29uc3QgQ29udGFpbmVyID0gd2l0aFN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgcGFkZGluZzogXCI4cHggMFwiLFxuICAgIGJvcmRlclRvcDogXCIxcHggc29saWQgYmxhY2tcIixcbiAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkIGJsYWNrXCIsXG4gICAgbWFyZ2luOiBcIjE2cHhcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBjb2xvcjogXCIjODA4MDgwXCIsXG4gIH0sXG59KShCb3gpO1xuXG5jb25zdCBCdXR0b24gPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIG1heFdpZHRoOiBcIjI0MHB4XCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBtYXJnaW5SaWdodDogXCIxNnB4XCIsXG4gIH0sXG59KShCb3gpO1xuXG5jb25zdCBOdW1iZXIgPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgbWFyZ2luUmlnaHQ6IDgsXG4gIH0sXG59KShCb3gpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/Post/SinglePost/LCSStatus/LCSStatus.tsx\n");

/***/ })

})