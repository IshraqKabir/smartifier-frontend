webpackHotUpdate_N_E("pages/blog/posts/[slug]",{

/***/ "./Components/Post/SinglePost/CommentsSection/Comment/Comment.tsx":
/*!************************************************************************!*\
  !*** ./Components/Post/SinglePost/CommentsSection/Comment/Comment.tsx ***!
  \************************************************************************/
/*! exports provided: CommentContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CommentContext\", function() { return CommentContext; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _CommentReact_CommentReact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CommentReact/CommentReact */ \"./Components/Post/SinglePost/CommentsSection/Comment/CommentReact/CommentReact.tsx\");\n/* harmony import */ var _RepliesSection_RepliesSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RepliesSection/RepliesSection */ \"./Components/Post/SinglePost/CommentsSection/Comment/RepliesSection/RepliesSection.tsx\");\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/Post/SinglePost/CommentsSection/Comment/Comment.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar CommentContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__[\"createContext\"])(null);\n\nvar Comment = function Comment(_ref) {\n  _s();\n\n  var _comment$user;\n\n  var comment = _ref.comment;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n      showReply = _useState[0],\n      setShowReply = _useState[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CommentContainer, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Avatar\"], {\n        src: \"\".concat(comment === null || comment === void 0 ? void 0 : comment.user.image_url),\n        style: {\n          height: 35,\n          width: 35,\n          borderRadius: \"50%\",\n          marginRight: \"16px\"\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CommentTextContaier, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(UserName, {\n          children: comment === null || comment === void 0 ? void 0 : (_comment$user = comment.user) === null || _comment$user === void 0 ? void 0 : _comment$user.name.toLocaleLowerCase()\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CommentText, {\n          children: comment === null || comment === void 0 ? void 0 : comment.comment\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CommentContext.Provider, {\n      value: {\n        comment: comment,\n        setShowReply: setShowReply\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_CommentReact_CommentReact__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, _this), showReply && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_RepliesSection_RepliesSection__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 23\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Comment, \"wy57M3SyW6EOpY3tx2xf2Ps0kx0=\");\n\n_c = Comment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comment);\nvar Container = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    // borderBottom: \"1px solid grey\",\n    padding: \"0rem 0rem 2rem 0rem\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\nvar CommentContainer = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    marginTop: \"1rem\",\n    display: \"flex\",\n    alignItems: \"center\",\n    color: \"#808080\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\nvar CommentTextContaier = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    display: \"flex\",\n    flexDirection: \"column\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\nvar UserName = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    fontWeight: 700,\n    textTransform: \"capitalize\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\nvar CommentText = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    lineHeight: 1.6\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\n\nvar _c;\n\n$RefreshReg$(_c, \"Comment\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qb3N0L1NpbmdsZVBvc3QvQ29tbWVudHNTZWN0aW9uL0NvbW1lbnQvQ29tbWVudC50c3g/ZDM2NCJdLCJuYW1lcyI6WyJDb21tZW50Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDb21tZW50IiwiY29tbWVudCIsInVzZVN0YXRlIiwic2hvd1JlcGx5Iiwic2V0U2hvd1JlcGx5IiwidXNlciIsImltYWdlX3VybCIsImhlaWdodCIsIndpZHRoIiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luUmlnaHQiLCJuYW1lIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJDb250YWluZXIiLCJ3aXRoU3R5bGVzIiwicm9vdCIsInBhZGRpbmciLCJCb3giLCJDb21tZW50Q29udGFpbmVyIiwibWFyZ2luVG9wIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJjb2xvciIsIkNvbW1lbnRUZXh0Q29udGFpZXIiLCJmbGV4RGlyZWN0aW9uIiwiVXNlck5hbWUiLCJmb250V2VpZ2h0IiwidGV4dFRyYW5zZm9ybSIsIkNvbW1lbnRUZXh0IiwibGluZUhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFNTyxJQUFNQSxjQUFjLGdCQUFHQywyREFBYSxDQUFDLElBQUQsQ0FBcEM7O0FBRVAsSUFBTUMsT0FBeUIsR0FBRyxTQUE1QkEsT0FBNEIsT0FBaUI7QUFBQTs7QUFBQTs7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7O0FBQUEsa0JBQ2ZDLHNEQUFRLENBQVUsSUFBVixDQURPO0FBQUEsTUFDMUNDLFNBRDBDO0FBQUEsTUFDL0JDLFlBRCtCOztBQUVqRCxzQkFDRSxxRUFBQyxTQUFEO0FBQUEsNEJBQ0UscUVBQUMsZ0JBQUQ7QUFBQSw4QkFDRSxxRUFBQyx3REFBRDtBQUNFLFdBQUcsWUFBS0gsT0FBTCxhQUFLQSxPQUFMLHVCQUFLQSxPQUFPLENBQUVJLElBQVQsQ0FBY0MsU0FBbkIsQ0FETDtBQUVFLGFBQUssRUFBRTtBQUNMQyxnQkFBTSxFQUFFLEVBREg7QUFFTEMsZUFBSyxFQUFFLEVBRkY7QUFHTEMsc0JBQVksRUFBRSxLQUhUO0FBSUxDLHFCQUFXLEVBQUU7QUFKUjtBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQVVFLHFFQUFDLG1CQUFEO0FBQUEsZ0NBQ0UscUVBQUMsUUFBRDtBQUFBLG9CQUFXVCxPQUFYLGFBQVdBLE9BQVgsd0NBQVdBLE9BQU8sQ0FBRUksSUFBcEIsa0RBQVcsY0FBZU0sSUFBZixDQUFvQkMsaUJBQXBCO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLHFFQUFDLFdBQUQ7QUFBQSxvQkFBY1gsT0FBZCxhQUFjQSxPQUFkLHVCQUFjQSxPQUFPLENBQUVBO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFnQkUscUVBQUMsY0FBRCxDQUFnQixRQUFoQjtBQUNFLFdBQUssRUFBRTtBQUFFQSxlQUFPLEVBQUVBLE9BQVg7QUFBb0JHLG9CQUFZLEVBQUVBO0FBQWxDLE9BRFQ7QUFBQSw4QkFHRSxxRUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsRUFJR0QsU0FBUyxpQkFBSSxxRUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlCRCxDQTNCRDs7R0FBTUgsTzs7S0FBQUEsTztBQTZCU0Esc0VBQWY7QUFFQSxJQUFNYSxTQUFTLEdBQUdDLG9FQUFVLENBQUM7QUFDM0JDLE1BQUksRUFBRTtBQUNKO0FBQ0FDLFdBQU8sRUFBRTtBQUZMO0FBRHFCLENBQUQsQ0FBVixDQUtmQyxxREFMZSxDQUFsQjtBQU9BLElBQU1DLGdCQUFnQixHQUFHSixvRUFBVSxDQUFDO0FBQ2xDQyxNQUFJLEVBQUU7QUFDSkksYUFBUyxFQUFFLE1BRFA7QUFFSkMsV0FBTyxFQUFFLE1BRkw7QUFHSkMsY0FBVSxFQUFFLFFBSFI7QUFJSkMsU0FBSyxFQUFFO0FBSkg7QUFENEIsQ0FBRCxDQUFWLENBT3RCTCxxREFQc0IsQ0FBekI7QUFTQSxJQUFNTSxtQkFBbUIsR0FBR1Qsb0VBQVUsQ0FBQztBQUNyQ0MsTUFBSSxFQUFFO0FBQ0pLLFdBQU8sRUFBRSxNQURMO0FBRUpJLGlCQUFhLEVBQUU7QUFGWDtBQUQrQixDQUFELENBQVYsQ0FLekJQLHFEQUx5QixDQUE1QjtBQU9BLElBQU1RLFFBQVEsR0FBR1gsb0VBQVUsQ0FBQztBQUMxQkMsTUFBSSxFQUFFO0FBQ0pXLGNBQVUsRUFBRSxHQURSO0FBRUpDLGlCQUFhLEVBQUU7QUFGWDtBQURvQixDQUFELENBQVYsQ0FLZFYscURBTGMsQ0FBakI7QUFPQSxJQUFNVyxXQUFXLEdBQUdkLG9FQUFVLENBQUM7QUFDN0JDLE1BQUksRUFBRTtBQUNKYyxjQUFVLEVBQUU7QUFEUjtBQUR1QixDQUFELENBQVYsQ0FJakJaLHFEQUppQixDQUFwQiIsImZpbGUiOiIuL0NvbXBvbmVudHMvUG9zdC9TaW5nbGVQb3N0L0NvbW1lbnRzU2VjdGlvbi9Db21tZW50L0NvbW1lbnQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXZhdGFyLCBCb3gsIHdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IElQb3N0Q29tbWVudCBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vTW9kZWxzL0lQb3N0Q29tbWVudFwiO1xuaW1wb3J0IENvbW1lbnRSZWFjdCBmcm9tIFwiLi9Db21tZW50UmVhY3QvQ29tbWVudFJlYWN0XCI7XG5pbXBvcnQgUmVwbGllc1NlY3Rpb24gZnJvbSBcIi4vUmVwbGllc1NlY3Rpb24vUmVwbGllc1NlY3Rpb25cIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGNvbW1lbnQ6IElQb3N0Q29tbWVudDtcbn1cblxuZXhwb3J0IGNvbnN0IENvbW1lbnRDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcblxuY29uc3QgQ29tbWVudDogUmVhY3QuRkM8SVByb3BzPiA9ICh7IGNvbW1lbnQgfSkgPT4ge1xuICBjb25zdCBbc2hvd1JlcGx5LCBzZXRTaG93UmVwbHldID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxDb21tZW50Q29udGFpbmVyPlxuICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgc3JjPXtgJHtjb21tZW50Py51c2VyLmltYWdlX3VybH1gfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBoZWlnaHQ6IDM1LFxuICAgICAgICAgICAgd2lkdGg6IDM1LFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMTZweFwiLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxDb21tZW50VGV4dENvbnRhaWVyPlxuICAgICAgICAgIDxVc2VyTmFtZT57Y29tbWVudD8udXNlcj8ubmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpfTwvVXNlck5hbWU+XG4gICAgICAgICAgPENvbW1lbnRUZXh0Pntjb21tZW50Py5jb21tZW50fTwvQ29tbWVudFRleHQ+XG4gICAgICAgIDwvQ29tbWVudFRleHRDb250YWllcj5cbiAgICAgIDwvQ29tbWVudENvbnRhaW5lcj5cbiAgICAgIDxDb21tZW50Q29udGV4dC5Qcm92aWRlclxuICAgICAgICB2YWx1ZT17eyBjb21tZW50OiBjb21tZW50LCBzZXRTaG93UmVwbHk6IHNldFNob3dSZXBseSB9fVxuICAgICAgPlxuICAgICAgICA8Q29tbWVudFJlYWN0IC8+XG4gICAgICAgIHtzaG93UmVwbHkgJiYgPFJlcGxpZXNTZWN0aW9uIC8+fVxuICAgICAgPC9Db21tZW50Q29udGV4dC5Qcm92aWRlcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnQ7XG5cbmNvbnN0IENvbnRhaW5lciA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgLy8gYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCBncmV5XCIsXG4gICAgcGFkZGluZzogXCIwcmVtIDByZW0gMnJlbSAwcmVtXCIsXG4gIH0sXG59KShCb3gpO1xuXG5jb25zdCBDb21tZW50Q29udGFpbmVyID0gd2l0aFN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBtYXJnaW5Ub3A6IFwiMXJlbVwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgY29sb3I6IFwiIzgwODA4MFwiLFxuICB9LFxufSkoQm94KTtcblxuY29uc3QgQ29tbWVudFRleHRDb250YWllciA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgfSxcbn0pKEJveCk7XG5cbmNvbnN0IFVzZXJOYW1lID0gd2l0aFN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgdGV4dFRyYW5zZm9ybTogXCJjYXBpdGFsaXplXCIsXG4gIH0sXG59KShCb3gpO1xuXG5jb25zdCBDb21tZW50VGV4dCA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgbGluZUhlaWdodDogMS42LFxuICB9LFxufSkoQm94KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/Post/SinglePost/CommentsSection/Comment/Comment.tsx\n");

/***/ })

})