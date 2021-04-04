webpackHotUpdate_N_E("pages/blog/posts/[slug]",{

/***/ "./Components/Post/SinglePost/CommentsSection/CommentsSection.tsx":
/*!************************************************************************!*\
  !*** ./Components/Post/SinglePost/CommentsSection/CommentsSection.tsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../custom-hooks/useLocalState */ \"./custom-hooks/useLocalState.ts\");\n/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../url */ \"./url.js\");\n/* harmony import */ var _SinglePost__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SinglePost */ \"./Components/Post/SinglePost/SinglePost.tsx\");\n/* harmony import */ var _Comment_Comment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Comment/Comment */ \"./Components/Post/SinglePost/CommentsSection/Comment/Comment.tsx\");\n\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/Post/SinglePost/CommentsSection/CommentsSection.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar CommentsSection = function CommentsSection() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_SinglePost__WEBPACK_IMPORTED_MODULE_7__[\"CommentsContext\"]),\n      comments = _useContext.comments,\n      postId = _useContext.postId;\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_SinglePost__WEBPACK_IMPORTED_MODULE_7__[\"CommentsCountContext\"]),\n      commentsCount = _useContext2.commentsCount;\n\n  var _useLocalState = Object(_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"user\", \"\"),\n      _useLocalState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useLocalState, 1),\n      user = _useLocalState2[0];\n\n  var getLikedCommentsIds = function getLikedCommentsIds() {\n    if (user.token) {\n      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(\"\".concat(_url__WEBPACK_IMPORTED_MODULE_6__[\"backend_url\"], \"/api/posts/\").concat(postId, \"/liked-comments-ids\"), {\n        headers: {}\n      });\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Container, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Heading, {\n      children: [\"Comments(\", commentsCount, \")\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, _this), comments && comments.map(function (comment) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Comment_Comment__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        comment: comment\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 18\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(CommentsSection, \"zhLjO7CcDooCHTRS9dIJoNI1wrQ=\", false, function () {\n  return [_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\n});\n\n_c = CommentsSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommentsSection);\nvar Heading = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])({\n  root: {\n    color: \"grey\",\n    fontWeight: 700\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"]);\nvar Container = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])({\n  root: {\n    margin: \"2rem 0rem\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"]);\n\nvar _c;\n\n$RefreshReg$(_c, \"CommentsSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qb3N0L1NpbmdsZVBvc3QvQ29tbWVudHNTZWN0aW9uL0NvbW1lbnRzU2VjdGlvbi50c3g/MGY0ZCJdLCJuYW1lcyI6WyJDb21tZW50c1NlY3Rpb24iLCJ1c2VDb250ZXh0IiwiQ29tbWVudHNDb250ZXh0IiwiY29tbWVudHMiLCJwb3N0SWQiLCJDb21tZW50c0NvdW50Q29udGV4dCIsImNvbW1lbnRzQ291bnQiLCJ1c2VMb2NhbFN0YXRlIiwidXNlciIsImdldExpa2VkQ29tbWVudHNJZHMiLCJ0b2tlbiIsImF4aW9zIiwiZ2V0IiwiYmFja2VuZF91cmwiLCJoZWFkZXJzIiwibWFwIiwiY29tbWVudCIsIkhlYWRpbmciLCJ3aXRoU3R5bGVzIiwicm9vdCIsImNvbG9yIiwiZm9udFdlaWdodCIsIkJveCIsIkNvbnRhaW5lciIsIm1hcmdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFBQTs7QUFBQSxvQkFDQ0Msd0RBQVUsQ0FBQ0MsMkRBQUQsQ0FEWDtBQUFBLE1BQ3BCQyxRQURvQixlQUNwQkEsUUFEb0I7QUFBQSxNQUNWQyxNQURVLGVBQ1ZBLE1BRFU7O0FBQUEscUJBRUZILHdEQUFVLENBQUNJLGdFQUFELENBRlI7QUFBQSxNQUVwQkMsYUFGb0IsZ0JBRXBCQSxhQUZvQjs7QUFBQSx1QkFJYkMsMkVBQWEsQ0FBQyxNQUFELEVBQVMsRUFBVCxDQUpBO0FBQUE7QUFBQSxNQUlyQkMsSUFKcUI7O0FBTTVCLE1BQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBTTtBQUNoQyxRQUFJRCxJQUFJLENBQUNFLEtBQVQsRUFBZ0I7QUFDZEMsa0RBQUssQ0FBQ0MsR0FBTixXQUFhQyxnREFBYix3QkFBc0NULE1BQXRDLDBCQUFtRTtBQUNqRVUsZUFBTyxFQUFFO0FBRHdELE9BQW5FO0FBS0Q7QUFDRixHQVJEOztBQVVBLHNCQUNFLHFFQUFDLFNBQUQ7QUFBQSw0QkFDRSxxRUFBQyxPQUFEO0FBQUEsOEJBQW1CUixhQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVHSCxRQUFRLElBQ1BBLFFBQVEsQ0FBQ1ksR0FBVCxDQUFhLFVBQUNDLE9BQUQsRUFBYTtBQUN4QiwwQkFBTyxxRUFBQyx3REFBRDtBQUFTLGVBQU8sRUFBRUE7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsS0FGRCxDQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBU0QsQ0F6QkQ7O0dBQU1oQixlO1VBSVdPLG1FOzs7S0FKWFAsZTtBQTJCU0EsOEVBQWY7QUFFQSxJQUFNaUIsT0FBTyxHQUFHQyxvRUFBVSxDQUFDO0FBQ3pCQyxNQUFJLEVBQUU7QUFDSkMsU0FBSyxFQUFFLE1BREg7QUFFSkMsY0FBVSxFQUFFO0FBRlI7QUFEbUIsQ0FBRCxDQUFWLENBS2JDLHFEQUxhLENBQWhCO0FBT0EsSUFBTUMsU0FBUyxHQUFHTCxvRUFBVSxDQUFDO0FBQzNCQyxNQUFJLEVBQUU7QUFDSkssVUFBTSxFQUFFO0FBREo7QUFEcUIsQ0FBRCxDQUFWLENBSWZGLHFEQUplLENBQWxCIiwiZmlsZSI6Ii4vQ29tcG9uZW50cy9Qb3N0L1NpbmdsZVBvc3QvQ29tbWVudHNTZWN0aW9uL0NvbW1lbnRzU2VjdGlvbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIHdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlTG9jYWxTdGF0ZSBmcm9tIFwiLi4vLi4vLi4vLi4vY3VzdG9tLWhvb2tzL3VzZUxvY2FsU3RhdGVcIjtcbmltcG9ydCB7IGJhY2tlbmRfdXJsIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3VybFwiO1xuaW1wb3J0IHsgQ29tbWVudHNDb250ZXh0LCBDb21tZW50c0NvdW50Q29udGV4dCB9IGZyb20gXCIuLi9TaW5nbGVQb3N0XCI7XG5pbXBvcnQgQ29tbWVudCBmcm9tIFwiLi9Db21tZW50L0NvbW1lbnRcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7fVxuXG5jb25zdCBDb21tZW50c1NlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IHsgY29tbWVudHMsIHBvc3RJZCB9ID0gdXNlQ29udGV4dChDb21tZW50c0NvbnRleHQpO1xuICBjb25zdCB7IGNvbW1lbnRzQ291bnQgfSA9IHVzZUNvbnRleHQoQ29tbWVudHNDb3VudENvbnRleHQpO1xuXG4gIGNvbnN0IFt1c2VyXSA9IHVzZUxvY2FsU3RhdGUoXCJ1c2VyXCIsIFwiXCIpO1xuXG4gIGNvbnN0IGdldExpa2VkQ29tbWVudHNJZHMgPSAoKSA9PiB7XG4gICAgaWYgKHVzZXIudG9rZW4pIHtcbiAgICAgIGF4aW9zLmdldChgJHtiYWNrZW5kX3VybH0vYXBpL3Bvc3RzLyR7cG9zdElkfS9saWtlZC1jb21tZW50cy1pZHNgLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxIZWFkaW5nPkNvbW1lbnRzKHtjb21tZW50c0NvdW50fSk8L0hlYWRpbmc+XG4gICAgICB7Y29tbWVudHMgJiZcbiAgICAgICAgY29tbWVudHMubWFwKChjb21tZW50KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxDb21tZW50IGNvbW1lbnQ9e2NvbW1lbnR9IC8+O1xuICAgICAgICB9KX1cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRzU2VjdGlvbjtcblxuY29uc3QgSGVhZGluZyA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgY29sb3I6IFwiZ3JleVwiLFxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgfSxcbn0pKEJveCk7XG5cbmNvbnN0IENvbnRhaW5lciA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgbWFyZ2luOiBcIjJyZW0gMHJlbVwiLFxuICB9LFxufSkoQm94KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/Post/SinglePost/CommentsSection/CommentsSection.tsx\n");

/***/ })

})