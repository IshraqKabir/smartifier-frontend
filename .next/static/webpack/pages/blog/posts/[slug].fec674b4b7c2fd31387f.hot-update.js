webpackHotUpdate_N_E("pages/blog/posts/[slug]",{

/***/ "./Components/Post/SinglePost/CommentsSection/Comment/Comment.tsx":
/*!************************************************************************!*\
  !*** ./Components/Post/SinglePost/CommentsSection/Comment/Comment.tsx ***!
  \************************************************************************/
/*! exports provided: CommentContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CommentContext\", function() { return CommentContext; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _CommentReact_CommentReact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CommentReact/CommentReact */ \"./Components/Post/SinglePost/CommentsSection/Comment/CommentReact/CommentReact.tsx\");\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/Post/SinglePost/CommentsSection/Comment/Comment.tsx\",\n    _this = undefined;\n\n\n\n\nvar CommentContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__[\"createContext\"])(null);\n\nvar Comment = function Comment(_ref) {\n  var _comment$user;\n\n  var comment = _ref.comment;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CommentContainer, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Avatar\"], {\n        src: \"\".concat(comment === null || comment === void 0 ? void 0 : comment.user.image_url),\n        style: {\n          height: 35,\n          width: 35,\n          borderRadius: \"50%\",\n          marginRight: \"16px\"\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CommentTextContaier, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(UserName, {\n          children: comment === null || comment === void 0 ? void 0 : (_comment$user = comment.user) === null || _comment$user === void 0 ? void 0 : _comment$user.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CommentText, {\n          children: comment === null || comment === void 0 ? void 0 : comment.comment\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CommentContext.Provider, {\n      value: {\n        comment: comment\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_CommentReact_CommentReact__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Comment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comment);\nvar Container = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    // borderBottom: \"1px solid grey\",\n    padding: \"0rem 0rem 2rem 0rem\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\nvar CommentContainer = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    marginTop: \"1rem\",\n    display: \"flex\",\n    alignItems: \"center\",\n    color: \"#808080\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\nvar CommentTextContaier = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    display: \"flex\",\n    flexDirection: \"column\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\nvar UserName = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    fontWeight: 700\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\nvar CommentText = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    lineHeight: 1.6\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\n\nvar _c;\n\n$RefreshReg$(_c, \"Comment\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qb3N0L1NpbmdsZVBvc3QvQ29tbWVudHNTZWN0aW9uL0NvbW1lbnQvQ29tbWVudC50c3g/ZDM2NCJdLCJuYW1lcyI6WyJDb21tZW50Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDb21tZW50IiwiY29tbWVudCIsInVzZXIiLCJpbWFnZV91cmwiLCJoZWlnaHQiLCJ3aWR0aCIsImJvcmRlclJhZGl1cyIsIm1hcmdpblJpZ2h0IiwibmFtZSIsIkNvbnRhaW5lciIsIndpdGhTdHlsZXMiLCJyb290IiwicGFkZGluZyIsIkJveCIsIkNvbW1lbnRDb250YWluZXIiLCJtYXJnaW5Ub3AiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImNvbG9yIiwiQ29tbWVudFRleHRDb250YWllciIsImZsZXhEaXJlY3Rpb24iLCJVc2VyTmFtZSIsImZvbnRXZWlnaHQiLCJDb21tZW50VGV4dCIsImxpbmVIZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFNTyxJQUFNQSxjQUFjLGdCQUFHQywyREFBYSxDQUFDLElBQUQsQ0FBcEM7O0FBRVAsSUFBTUMsT0FBeUIsR0FBRyxTQUE1QkEsT0FBNEIsT0FBaUI7QUFBQTs7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFFakQsc0JBQ0UscUVBQUMsU0FBRDtBQUFBLDRCQUNFLHFFQUFDLGdCQUFEO0FBQUEsOEJBQ0UscUVBQUMsd0RBQUQ7QUFDRSxXQUFHLFlBQUtBLE9BQUwsYUFBS0EsT0FBTCx1QkFBS0EsT0FBTyxDQUFFQyxJQUFULENBQWNDLFNBQW5CLENBREw7QUFFRSxhQUFLLEVBQUU7QUFDTEMsZ0JBQU0sRUFBRSxFQURIO0FBRUxDLGVBQUssRUFBRSxFQUZGO0FBR0xDLHNCQUFZLEVBQUUsS0FIVDtBQUlMQyxxQkFBVyxFQUFFO0FBSlI7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFVRSxxRUFBQyxtQkFBRDtBQUFBLGdDQUNFLHFFQUFDLFFBQUQ7QUFBQSxvQkFBV04sT0FBWCxhQUFXQSxPQUFYLHdDQUFXQSxPQUFPLENBQUVDLElBQXBCLGtEQUFXLGNBQWVNO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSxxRUFBQyxXQUFEO0FBQUEsb0JBQWNQLE9BQWQsYUFBY0EsT0FBZCx1QkFBY0EsT0FBTyxDQUFFQTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBZ0JFLHFFQUFDLGNBQUQsQ0FBZ0IsUUFBaEI7QUFBeUIsV0FBSyxFQUFFO0FBQUVBLGVBQU8sRUFBRUE7QUFBWCxPQUFoQztBQUFBLDZCQUNFLHFFQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBc0JELENBeEJEOztLQUFNRCxPO0FBMEJTQSxzRUFBZjtBQUVBLElBQU1TLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQztBQUMzQkMsTUFBSSxFQUFFO0FBQ0o7QUFDQUMsV0FBTyxFQUFFO0FBRkw7QUFEcUIsQ0FBRCxDQUFWLENBS2ZDLHFEQUxlLENBQWxCO0FBT0EsSUFBTUMsZ0JBQWdCLEdBQUdKLG9FQUFVLENBQUM7QUFDbENDLE1BQUksRUFBRTtBQUNKSSxhQUFTLEVBQUUsTUFEUDtBQUVKQyxXQUFPLEVBQUUsTUFGTDtBQUdKQyxjQUFVLEVBQUUsUUFIUjtBQUlKQyxTQUFLLEVBQUU7QUFKSDtBQUQ0QixDQUFELENBQVYsQ0FPdEJMLHFEQVBzQixDQUF6QjtBQVNBLElBQU1NLG1CQUFtQixHQUFHVCxvRUFBVSxDQUFDO0FBQ3JDQyxNQUFJLEVBQUU7QUFDSkssV0FBTyxFQUFFLE1BREw7QUFFSkksaUJBQWEsRUFBRTtBQUZYO0FBRCtCLENBQUQsQ0FBVixDQUt6QlAscURBTHlCLENBQTVCO0FBT0EsSUFBTVEsUUFBUSxHQUFHWCxvRUFBVSxDQUFDO0FBQzFCQyxNQUFJLEVBQUU7QUFDSlcsY0FBVSxFQUFFO0FBRFI7QUFEb0IsQ0FBRCxDQUFWLENBSWRULHFEQUpjLENBQWpCO0FBTUEsSUFBTVUsV0FBVyxHQUFHYixvRUFBVSxDQUFDO0FBQzdCQyxNQUFJLEVBQUU7QUFDSmEsY0FBVSxFQUFFO0FBRFI7QUFEdUIsQ0FBRCxDQUFWLENBSWpCWCxxREFKaUIsQ0FBcEIiLCJmaWxlIjoiLi9Db21wb25lbnRzL1Bvc3QvU2luZ2xlUG9zdC9Db21tZW50c1NlY3Rpb24vQ29tbWVudC9Db21tZW50LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF2YXRhciwgQm94LCB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IElQb3N0Q29tbWVudCBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vTW9kZWxzL0lQb3N0Q29tbWVudFwiO1xuaW1wb3J0IENvbW1lbnRSZWFjdCBmcm9tIFwiLi9Db21tZW50UmVhY3QvQ29tbWVudFJlYWN0XCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBjb21tZW50OiBJUG9zdENvbW1lbnQ7XG59XG5cbmV4cG9ydCBjb25zdCBDb21tZW50Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmNvbnN0IENvbW1lbnQ6IFJlYWN0LkZDPElQcm9wcz4gPSAoeyBjb21tZW50IH0pID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8Q29tbWVudENvbnRhaW5lcj5cbiAgICAgICAgPEF2YXRhclxuICAgICAgICAgIHNyYz17YCR7Y29tbWVudD8udXNlci5pbWFnZV91cmx9YH1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgaGVpZ2h0OiAzNSxcbiAgICAgICAgICAgIHdpZHRoOiAzNSxcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjE2cHhcIixcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8Q29tbWVudFRleHRDb250YWllcj5cbiAgICAgICAgICA8VXNlck5hbWU+e2NvbW1lbnQ/LnVzZXI/Lm5hbWV9PC9Vc2VyTmFtZT5cbiAgICAgICAgICA8Q29tbWVudFRleHQ+e2NvbW1lbnQ/LmNvbW1lbnR9PC9Db21tZW50VGV4dD5cbiAgICAgICAgPC9Db21tZW50VGV4dENvbnRhaWVyPlxuICAgICAgPC9Db21tZW50Q29udGFpbmVyPlxuICAgICAgPENvbW1lbnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGNvbW1lbnQ6IGNvbW1lbnQgfX0+XG4gICAgICAgIDxDb21tZW50UmVhY3QgLz5cbiAgICAgIDwvQ29tbWVudENvbnRleHQuUHJvdmlkZXI+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50O1xuXG5jb25zdCBDb250YWluZXIgPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIC8vIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgZ3JleVwiLFxuICAgIHBhZGRpbmc6IFwiMHJlbSAwcmVtIDJyZW0gMHJlbVwiLFxuICB9LFxufSkoQm94KTtcblxuY29uc3QgQ29tbWVudENvbnRhaW5lciA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgbWFyZ2luVG9wOiBcIjFyZW1cIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGNvbG9yOiBcIiM4MDgwODBcIixcbiAgfSxcbn0pKEJveCk7XG5cbmNvbnN0IENvbW1lbnRUZXh0Q29udGFpZXIgPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIH0sXG59KShCb3gpO1xuXG5jb25zdCBVc2VyTmFtZSA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgZm9udFdlaWdodDogNzAwLFxuICB9LFxufSkoQm94KTtcblxuY29uc3QgQ29tbWVudFRleHQgPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIGxpbmVIZWlnaHQ6IDEuNixcbiAgfSxcbn0pKEJveCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/Post/SinglePost/CommentsSection/Comment/Comment.tsx\n");

/***/ })

})