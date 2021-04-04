webpackHotUpdate_N_E("pages/blog/posts/[slug]",{

/***/ "./Components/Post/SinglePost/CommentsSection/Comment/Comment.tsx":
/*!************************************************************************!*\
  !*** ./Components/Post/SinglePost/CommentsSection/Comment/Comment.tsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _CommentReact_CommentReact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CommentReact/CommentReact */ \"./Components/Post/SinglePost/CommentsSection/Comment/CommentReact/CommentReact.tsx\");\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/Post/SinglePost/CommentsSection/Comment/Comment.tsx\",\n    _this = undefined;\n\n\n\n\nvar CommentContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__[\"createContext\"])(null);\n\nvar Comment = function Comment(_ref) {\n  var _comment$user;\n\n  var comment = _ref.comment;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CommentContainer, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Avatar\"], {\n        src: \"\".concat(comment === null || comment === void 0 ? void 0 : comment.user.image_url),\n        style: {\n          height: 35,\n          width: 35,\n          borderRadius: \"50%\",\n          marginRight: \"16px\"\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CommentTextContaier, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(UserName, {\n          children: comment === null || comment === void 0 ? void 0 : (_comment$user = comment.user) === null || _comment$user === void 0 ? void 0 : _comment$user.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CommentText, {\n          children: comment === null || comment === void 0 ? void 0 : comment.comment\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CommentContext.Provider, {\n      value: {\n        comments: comments\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_CommentReact_CommentReact__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Comment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comment);\nvar Container = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    borderBottom: \"1px solid grey\",\n    padding: \"0rem 0rem 2rem 0rem\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\nvar CommentContainer = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    marginTop: \"1rem\",\n    display: \"flex\",\n    alignItems: \"center\",\n    color: \"#808080\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\nvar CommentTextContaier = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    display: \"flex\",\n    flexDirection: \"column\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\nvar UserName = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    fontWeight: 700\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\nvar CommentText = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    lineHeight: 1.6\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\n\nvar _c;\n\n$RefreshReg$(_c, \"Comment\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qb3N0L1NpbmdsZVBvc3QvQ29tbWVudHNTZWN0aW9uL0NvbW1lbnQvQ29tbWVudC50c3g/ZDM2NCJdLCJuYW1lcyI6WyJDb21tZW50Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDb21tZW50IiwiY29tbWVudCIsInVzZXIiLCJpbWFnZV91cmwiLCJoZWlnaHQiLCJ3aWR0aCIsImJvcmRlclJhZGl1cyIsIm1hcmdpblJpZ2h0IiwibmFtZSIsImNvbW1lbnRzIiwiQ29udGFpbmVyIiwid2l0aFN0eWxlcyIsInJvb3QiLCJib3JkZXJCb3R0b20iLCJwYWRkaW5nIiwiQm94IiwiQ29tbWVudENvbnRhaW5lciIsIm1hcmdpblRvcCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiY29sb3IiLCJDb21tZW50VGV4dENvbnRhaWVyIiwiZmxleERpcmVjdGlvbiIsIlVzZXJOYW1lIiwiZm9udFdlaWdodCIsIkNvbW1lbnRUZXh0IiwibGluZUhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBTUEsSUFBTUEsY0FBYyxnQkFBR0MsMkRBQWEsQ0FBQyxJQUFELENBQXBDOztBQUVBLElBQU1DLE9BQXlCLEdBQUcsU0FBNUJBLE9BQTRCLE9BQWlCO0FBQUE7O0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQ2pELHNCQUNFLHFFQUFDLFNBQUQ7QUFBQSw0QkFDRSxxRUFBQyxnQkFBRDtBQUFBLDhCQUNFLHFFQUFDLHdEQUFEO0FBQ0UsV0FBRyxZQUFLQSxPQUFMLGFBQUtBLE9BQUwsdUJBQUtBLE9BQU8sQ0FBRUMsSUFBVCxDQUFjQyxTQUFuQixDQURMO0FBRUUsYUFBSyxFQUFFO0FBQ0xDLGdCQUFNLEVBQUUsRUFESDtBQUVMQyxlQUFLLEVBQUUsRUFGRjtBQUdMQyxzQkFBWSxFQUFFLEtBSFQ7QUFJTEMscUJBQVcsRUFBRTtBQUpSO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBVUUscUVBQUMsbUJBQUQ7QUFBQSxnQ0FDRSxxRUFBQyxRQUFEO0FBQUEsb0JBQVdOLE9BQVgsYUFBV0EsT0FBWCx3Q0FBV0EsT0FBTyxDQUFFQyxJQUFwQixrREFBVyxjQUFlTTtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUscUVBQUMsV0FBRDtBQUFBLG9CQUFjUCxPQUFkLGFBQWNBLE9BQWQsdUJBQWNBLE9BQU8sQ0FBRUE7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQWdCRSxxRUFBQyxjQUFELENBQWdCLFFBQWhCO0FBQXlCLFdBQUssRUFBRTtBQUFFUSxnQkFBUSxFQUFFQTtBQUFaLE9BQWhDO0FBQUEsNkJBQ0UscUVBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzQkQsQ0F2QkQ7O0tBQU1ULE87QUF5QlNBLHNFQUFmO0FBRUEsSUFBTVUsU0FBUyxHQUFHQyxvRUFBVSxDQUFDO0FBQzNCQyxNQUFJLEVBQUU7QUFDSkMsZ0JBQVksRUFBRSxnQkFEVjtBQUVKQyxXQUFPLEVBQUU7QUFGTDtBQURxQixDQUFELENBQVYsQ0FLZkMscURBTGUsQ0FBbEI7QUFPQSxJQUFNQyxnQkFBZ0IsR0FBR0wsb0VBQVUsQ0FBQztBQUNsQ0MsTUFBSSxFQUFFO0FBQ0pLLGFBQVMsRUFBRSxNQURQO0FBRUpDLFdBQU8sRUFBRSxNQUZMO0FBR0pDLGNBQVUsRUFBRSxRQUhSO0FBSUpDLFNBQUssRUFBRTtBQUpIO0FBRDRCLENBQUQsQ0FBVixDQU90QkwscURBUHNCLENBQXpCO0FBU0EsSUFBTU0sbUJBQW1CLEdBQUdWLG9FQUFVLENBQUM7QUFDckNDLE1BQUksRUFBRTtBQUNKTSxXQUFPLEVBQUUsTUFETDtBQUVKSSxpQkFBYSxFQUFFO0FBRlg7QUFEK0IsQ0FBRCxDQUFWLENBS3pCUCxxREFMeUIsQ0FBNUI7QUFPQSxJQUFNUSxRQUFRLEdBQUdaLG9FQUFVLENBQUM7QUFDMUJDLE1BQUksRUFBRTtBQUNKWSxjQUFVLEVBQUU7QUFEUjtBQURvQixDQUFELENBQVYsQ0FJZFQscURBSmMsQ0FBakI7QUFNQSxJQUFNVSxXQUFXLEdBQUdkLG9FQUFVLENBQUM7QUFDN0JDLE1BQUksRUFBRTtBQUNKYyxjQUFVLEVBQUU7QUFEUjtBQUR1QixDQUFELENBQVYsQ0FJakJYLHFEQUppQixDQUFwQiIsImZpbGUiOiIuL0NvbXBvbmVudHMvUG9zdC9TaW5nbGVQb3N0L0NvbW1lbnRzU2VjdGlvbi9Db21tZW50L0NvbW1lbnQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXZhdGFyLCBCb3gsIHdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSVBvc3RDb21tZW50IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9Nb2RlbHMvSVBvc3RDb21tZW50XCI7XG5pbXBvcnQgQ29tbWVudFJlYWN0IGZyb20gXCIuL0NvbW1lbnRSZWFjdC9Db21tZW50UmVhY3RcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGNvbW1lbnQ6IElQb3N0Q29tbWVudDtcbn1cblxuY29uc3QgQ29tbWVudENvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xuXG5jb25zdCBDb21tZW50OiBSZWFjdC5GQzxJUHJvcHM+ID0gKHsgY29tbWVudCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxDb21tZW50Q29udGFpbmVyPlxuICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgc3JjPXtgJHtjb21tZW50Py51c2VyLmltYWdlX3VybH1gfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBoZWlnaHQ6IDM1LFxuICAgICAgICAgICAgd2lkdGg6IDM1LFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMTZweFwiLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxDb21tZW50VGV4dENvbnRhaWVyPlxuICAgICAgICAgIDxVc2VyTmFtZT57Y29tbWVudD8udXNlcj8ubmFtZX08L1VzZXJOYW1lPlxuICAgICAgICAgIDxDb21tZW50VGV4dD57Y29tbWVudD8uY29tbWVudH08L0NvbW1lbnRUZXh0PlxuICAgICAgICA8L0NvbW1lbnRUZXh0Q29udGFpZXI+XG4gICAgICA8L0NvbW1lbnRDb250YWluZXI+XG4gICAgICA8Q29tbWVudENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgY29tbWVudHM6IGNvbW1lbnRzIH19PlxuICAgICAgICA8Q29tbWVudFJlYWN0IC8+XG4gICAgICA8L0NvbW1lbnRDb250ZXh0LlByb3ZpZGVyPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudDtcblxuY29uc3QgQ29udGFpbmVyID0gd2l0aFN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkIGdyZXlcIixcbiAgICBwYWRkaW5nOiBcIjByZW0gMHJlbSAycmVtIDByZW1cIixcbiAgfSxcbn0pKEJveCk7XG5cbmNvbnN0IENvbW1lbnRDb250YWluZXIgPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIG1hcmdpblRvcDogXCIxcmVtXCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBjb2xvcjogXCIjODA4MDgwXCIsXG4gIH0sXG59KShCb3gpO1xuXG5jb25zdCBDb21tZW50VGV4dENvbnRhaWVyID0gd2l0aFN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICB9LFxufSkoQm94KTtcblxuY29uc3QgVXNlck5hbWUgPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgfSxcbn0pKEJveCk7XG5cbmNvbnN0IENvbW1lbnRUZXh0ID0gd2l0aFN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBsaW5lSGVpZ2h0OiAxLjYsXG4gIH0sXG59KShCb3gpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/Post/SinglePost/CommentsSection/Comment/Comment.tsx\n");

/***/ })

})