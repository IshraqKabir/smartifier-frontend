webpackHotUpdate_N_E("pages/blog/posts/[slug]",{

/***/ "./Components/Post/SinglePost/CommentsSection/Comment/RepliesSection/Reply/Reply.tsx":
/*!*******************************************************************************************!*\
  !*** ./Components/Post/SinglePost/CommentsSection/Comment/RepliesSection/Reply/Reply.tsx ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/Post/SinglePost/CommentsSection/Comment/RepliesSection/Reply/Reply.tsx\",\n    _this = undefined;\n\n\n\n\nvar Reply = function Reply(_ref) {\n  var _reply$user, _reply$user2;\n\n  var reply = _ref.reply;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Avatar\"], {\n      src: \"\".concat(reply === null || reply === void 0 ? void 0 : (_reply$user = reply.user) === null || _reply$user === void 0 ? void 0 : _reply$user.image_url),\n      style: {\n        height: 35,\n        width: 35,\n        borderRadius: \"50%\",\n        marginRight: \"16px\"\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ReplyTextContainer, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(UserName, {\n        children: reply === null || reply === void 0 ? void 0 : (_reply$user2 = reply.user) === null || _reply$user2 === void 0 ? void 0 : _reply$user2.name.toLowerCase()\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ReplyText, {\n        children: reply === null || reply === void 0 ? void 0 : reply.comment\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Reply;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Reply);\nvar Container = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    marginTop: \"1rem\",\n    display: \"flex\",\n    alignItems: \"center\",\n    color: \"#808080\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\nvar ReplyTextContainer = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    display: \"flex\",\n    flexDirection: \"column\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\nvar UserName = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    fontWeight: 700,\n    textTransform: \"capitalize\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\nvar ReplyText = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    lineHeight: 1.6\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\n\nvar _c;\n\n$RefreshReg$(_c, \"Reply\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qb3N0L1NpbmdsZVBvc3QvQ29tbWVudHNTZWN0aW9uL0NvbW1lbnQvUmVwbGllc1NlY3Rpb24vUmVwbHkvUmVwbHkudHN4PzA1OTQiXSwibmFtZXMiOlsiUmVwbHkiLCJyZXBseSIsInVzZXIiLCJpbWFnZV91cmwiLCJoZWlnaHQiLCJ3aWR0aCIsImJvcmRlclJhZGl1cyIsIm1hcmdpblJpZ2h0IiwibmFtZSIsInRvTG93ZXJDYXNlIiwiY29tbWVudCIsIkNvbnRhaW5lciIsIndpdGhTdHlsZXMiLCJyb290IiwibWFyZ2luVG9wIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJjb2xvciIsIkJveCIsIlJlcGx5VGV4dENvbnRhaW5lciIsImZsZXhEaXJlY3Rpb24iLCJVc2VyTmFtZSIsImZvbnRXZWlnaHQiLCJ0ZXh0VHJhbnNmb3JtIiwiUmVwbHlUZXh0IiwibGluZUhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQU9BLElBQU1BLEtBQXVCLEdBQUcsU0FBMUJBLEtBQTBCLE9BQWU7QUFBQTs7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDN0Msc0JBQ0UscUVBQUMsU0FBRDtBQUFBLDRCQUNFLHFFQUFDLHdEQUFEO0FBQ0UsU0FBRyxZQUFLQSxLQUFMLGFBQUtBLEtBQUwsc0NBQUtBLEtBQUssQ0FBRUMsSUFBWixnREFBSyxZQUFhQyxTQUFsQixDQURMO0FBRUUsV0FBSyxFQUFFO0FBQ0xDLGNBQU0sRUFBRSxFQURIO0FBRUxDLGFBQUssRUFBRSxFQUZGO0FBR0xDLG9CQUFZLEVBQUUsS0FIVDtBQUlMQyxtQkFBVyxFQUFFO0FBSlI7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFVRSxxRUFBQyxrQkFBRDtBQUFBLDhCQUNFLHFFQUFDLFFBQUQ7QUFBQSxrQkFBV04sS0FBWCxhQUFXQSxLQUFYLHVDQUFXQSxLQUFLLENBQUVDLElBQWxCLGlEQUFXLGFBQWFNLElBQWIsQ0FBa0JDLFdBQWxCO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUscUVBQUMsU0FBRDtBQUFBLGtCQUFZUixLQUFaLGFBQVlBLEtBQVosdUJBQVlBLEtBQUssQ0FBRVM7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaUJELENBbEJEOztLQUFNVixLO0FBb0JTQSxvRUFBZjtBQUVBLElBQU1XLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQztBQUMzQkMsTUFBSSxFQUFFO0FBQ0pDLGFBQVMsRUFBRSxNQURQO0FBRUpDLFdBQU8sRUFBRSxNQUZMO0FBR0pDLGNBQVUsRUFBRSxRQUhSO0FBSUpDLFNBQUssRUFBRTtBQUpIO0FBRHFCLENBQUQsQ0FBVixDQU9mQyxxREFQZSxDQUFsQjtBQVNBLElBQU1DLGtCQUFrQixHQUFHUCxvRUFBVSxDQUFDO0FBQ3BDQyxNQUFJLEVBQUU7QUFDSkUsV0FBTyxFQUFFLE1BREw7QUFFSkssaUJBQWEsRUFBRTtBQUZYO0FBRDhCLENBQUQsQ0FBVixDQUt4QkYscURBTHdCLENBQTNCO0FBT0EsSUFBTUcsUUFBUSxHQUFHVCxvRUFBVSxDQUFDO0FBQzFCQyxNQUFJLEVBQUU7QUFDSlMsY0FBVSxFQUFFLEdBRFI7QUFFSkMsaUJBQWEsRUFBRTtBQUZYO0FBRG9CLENBQUQsQ0FBVixDQUtkTCxxREFMYyxDQUFqQjtBQU9BLElBQU1NLFNBQVMsR0FBR1osb0VBQVUsQ0FBQztBQUMzQkMsTUFBSSxFQUFFO0FBQ0pZLGNBQVUsRUFBRTtBQURSO0FBRHFCLENBQUQsQ0FBVixDQUlmUCxxREFKZSxDQUFsQiIsImZpbGUiOiIuL0NvbXBvbmVudHMvUG9zdC9TaW5nbGVQb3N0L0NvbW1lbnRzU2VjdGlvbi9Db21tZW50L1JlcGxpZXNTZWN0aW9uL1JlcGx5L1JlcGx5LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF2YXRhciwgQm94LCB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSVBvc3RDb21tZW50UmVwbHkgZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL01vZGVscy9JUG9zdENvbW1lbnRSZXBseVwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgcmVwbHk6IElQb3N0Q29tbWVudFJlcGx5O1xufVxuXG5jb25zdCBSZXBseTogUmVhY3QuRkM8SVByb3BzPiA9ICh7IHJlcGx5IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEF2YXRhclxuICAgICAgICBzcmM9e2Ake3JlcGx5Py51c2VyPy5pbWFnZV91cmx9YH1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBoZWlnaHQ6IDM1LFxuICAgICAgICAgIHdpZHRoOiAzNSxcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMTZweFwiLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxSZXBseVRleHRDb250YWluZXI+XG4gICAgICAgIDxVc2VyTmFtZT57cmVwbHk/LnVzZXI/Lm5hbWUudG9Mb3dlckNhc2UoKX08L1VzZXJOYW1lPlxuICAgICAgICA8UmVwbHlUZXh0PntyZXBseT8uY29tbWVudH08L1JlcGx5VGV4dD5cbiAgICAgIDwvUmVwbHlUZXh0Q29udGFpbmVyPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVwbHk7XG5cbmNvbnN0IENvbnRhaW5lciA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgbWFyZ2luVG9wOiBcIjFyZW1cIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGNvbG9yOiBcIiM4MDgwODBcIixcbiAgfSxcbn0pKEJveCk7XG5cbmNvbnN0IFJlcGx5VGV4dENvbnRhaW5lciA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgfSxcbn0pKEJveCk7XG5cbmNvbnN0IFVzZXJOYW1lID0gd2l0aFN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgdGV4dFRyYW5zZm9ybTogXCJjYXBpdGFsaXplXCIsXG4gIH0sXG59KShCb3gpO1xuXG5jb25zdCBSZXBseVRleHQgPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIGxpbmVIZWlnaHQ6IDEuNixcbiAgfSxcbn0pKEJveCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/Post/SinglePost/CommentsSection/Comment/RepliesSection/Reply/Reply.tsx\n");

/***/ })

})