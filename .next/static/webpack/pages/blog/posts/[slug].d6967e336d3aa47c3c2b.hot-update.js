webpackHotUpdate_N_E("pages/blog/posts/[slug]",{

/***/ "./Components/Post/SinglePost/CommentsSection/Comment/CommentReact/Replies/Replies.tsx":
/*!*********************************************************************************************!*\
  !*** ./Components/Post/SinglePost/CommentsSection/Comment/CommentReact/Replies/Replies.tsx ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Comment */ \"./Components/Post/SinglePost/CommentsSection/Comment/Comment.tsx\");\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/Post/SinglePost/CommentsSection/Comment/CommentReact/Replies/Replies.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Replies = function Replies() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_Comment__WEBPACK_IMPORTED_MODULE_3__[\"CommentContext\"]),\n      comment = _useContext.comment,\n      repliesCount = _useContext.repliesCount,\n      setShowReply = _useContext.setShowReply; // const [repliesCount, setRepliesCount] = useState<number>(\n  //   comment?.replies_count ? comment?.replies_count : 0\n  // );\n\n\n  var handleClick = function handleClick() {\n    setShowReply(function (state) {\n      return !state;\n    });\n  };\n\n  console.log(\"yay\");\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Button, {\n    onClick: handleClick,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Avatar\"], {\n      src: \"https://img.icons8.com/fluent-systems-regular/34/000000/comments--v2.png\",\n      style: {\n        width: \"23px\",\n        height: \"23px\",\n        marginRight: \"16px\",\n        alignSelf: \"center\",\n        backgroundColor: \"lightgrey\",\n        borderRadius: \"50%\",\n        padding: \"5px\",\n        cursor: \"pointer\"\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Number, {\n      children: repliesCount\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: repliesCount > 1 ? \"Replies\" : \"Reply\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Replies, \"Sfn5OPh4K4Dbg7212zfqV03lAcE=\");\n\n_c = Replies;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Replies);\nvar Button = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    maxWidth: \"240px\",\n    display: \"flex\",\n    alignItems: \"center\",\n    marginRight: \"16px\",\n    cursor: \"pointer\",\n    margin: \"1rem 0rem 0.3rem 0rem\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\nvar Number = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    display: \"inline-block\",\n    marginRight: 8\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\n\nvar _c;\n\n$RefreshReg$(_c, \"Replies\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qb3N0L1NpbmdsZVBvc3QvQ29tbWVudHNTZWN0aW9uL0NvbW1lbnQvQ29tbWVudFJlYWN0L1JlcGxpZXMvUmVwbGllcy50c3g/Yjg5YiJdLCJuYW1lcyI6WyJSZXBsaWVzIiwidXNlQ29udGV4dCIsIkNvbW1lbnRDb250ZXh0IiwiY29tbWVudCIsInJlcGxpZXNDb3VudCIsInNldFNob3dSZXBseSIsImhhbmRsZUNsaWNrIiwic3RhdGUiLCJjb25zb2xlIiwibG9nIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW5SaWdodCIsImFsaWduU2VsZiIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJjdXJzb3IiLCJCdXR0b24iLCJ3aXRoU3R5bGVzIiwicm9vdCIsIm1heFdpZHRoIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJtYXJnaW4iLCJCb3giLCJOdW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUEsT0FBeUIsR0FBRyxTQUE1QkEsT0FBNEIsR0FBTTtBQUFBOztBQUFBLG9CQUNVQyx3REFBVSxDQUFDQyx1REFBRCxDQURwQjtBQUFBLE1BQzlCQyxPQUQ4QixlQUM5QkEsT0FEOEI7QUFBQSxNQUNyQkMsWUFEcUIsZUFDckJBLFlBRHFCO0FBQUEsTUFDUEMsWUFETyxlQUNQQSxZQURPLEVBRXRDO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QkQsZ0JBQVksQ0FBQyxVQUFDRSxLQUFEO0FBQUEsYUFBb0IsQ0FBQ0EsS0FBckI7QUFBQSxLQUFELENBQVo7QUFDRCxHQUZEOztBQUlBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaO0FBRUEsc0JBQ0UscUVBQUMsTUFBRDtBQUFRLFdBQU8sRUFBRUgsV0FBakI7QUFBQSw0QkFDRSxxRUFBQyx3REFBRDtBQUNFLFNBQUcsNEVBREw7QUFFRSxXQUFLLEVBQUU7QUFDTEksYUFBSyxFQUFFLE1BREY7QUFFTEMsY0FBTSxFQUFFLE1BRkg7QUFHTEMsbUJBQVcsRUFBRSxNQUhSO0FBSUxDLGlCQUFTLEVBQUUsUUFKTjtBQUtMQyx1QkFBZSxFQUFFLFdBTFo7QUFNTEMsb0JBQVksRUFBRSxLQU5UO0FBT0xDLGVBQU8sRUFBRSxLQVBKO0FBUUxDLGNBQU0sRUFBRTtBQVJIO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBZUUscUVBQUMsTUFBRDtBQUFBLGdCQUFTYjtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFmRixlQWdCRTtBQUFBLGdCQUFJQSxZQUFZLEdBQUcsQ0FBZixHQUFtQixTQUFuQixHQUErQjtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb0JELENBaENEOztHQUFNSixPOztLQUFBQSxPO0FBa0NTQSxzRUFBZjtBQUVBLElBQU1rQixNQUFNLEdBQUdDLG9FQUFVLENBQUM7QUFDeEJDLE1BQUksRUFBRTtBQUNKQyxZQUFRLEVBQUUsT0FETjtBQUVKQyxXQUFPLEVBQUUsTUFGTDtBQUdKQyxjQUFVLEVBQUUsUUFIUjtBQUlKWCxlQUFXLEVBQUUsTUFKVDtBQUtKSyxVQUFNLEVBQUUsU0FMSjtBQU1KTyxVQUFNLEVBQUU7QUFOSjtBQURrQixDQUFELENBQVYsQ0FTWkMscURBVFksQ0FBZjtBQVdBLElBQU1DLE1BQU0sR0FBR1Asb0VBQVUsQ0FBQztBQUN4QkMsTUFBSSxFQUFFO0FBQ0pFLFdBQU8sRUFBRSxjQURMO0FBRUpWLGVBQVcsRUFBRTtBQUZUO0FBRGtCLENBQUQsQ0FBVixDQUtaYSxxREFMWSxDQUFmIiwiZmlsZSI6Ii4vQ29tcG9uZW50cy9Qb3N0L1NpbmdsZVBvc3QvQ29tbWVudHNTZWN0aW9uL0NvbW1lbnQvQ29tbWVudFJlYWN0L1JlcGxpZXMvUmVwbGllcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdmF0YXIsIEJveCwgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb21tZW50Q29udGV4dCB9IGZyb20gXCIuLi8uLi9Db21tZW50XCI7XG5cbmludGVyZmFjZSBJUHJvcHMge31cblxuY29uc3QgUmVwbGllczogUmVhY3QuRkM8SVByb3BzPiA9ICgpID0+IHtcbiAgY29uc3QgeyBjb21tZW50LCByZXBsaWVzQ291bnQsIHNldFNob3dSZXBseSB9ID0gdXNlQ29udGV4dChDb21tZW50Q29udGV4dCk7XG4gIC8vIGNvbnN0IFtyZXBsaWVzQ291bnQsIHNldFJlcGxpZXNDb3VudF0gPSB1c2VTdGF0ZTxudW1iZXI+KFxuICAvLyAgIGNvbW1lbnQ/LnJlcGxpZXNfY291bnQgPyBjb21tZW50Py5yZXBsaWVzX2NvdW50IDogMFxuICAvLyApO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHNldFNob3dSZXBseSgoc3RhdGU6IGJvb2xlYW4pID0+ICFzdGF0ZSk7XG4gIH07XG5cbiAgY29uc29sZS5sb2coXCJ5YXlcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgIDxBdmF0YXJcbiAgICAgICAgc3JjPXtgaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9mbHVlbnQtc3lzdGVtcy1yZWd1bGFyLzM0LzAwMDAwMC9jb21tZW50cy0tdjIucG5nYH1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB3aWR0aDogXCIyM3B4XCIsXG4gICAgICAgICAgaGVpZ2h0OiBcIjIzcHhcIixcbiAgICAgICAgICBtYXJnaW5SaWdodDogXCIxNnB4XCIsXG4gICAgICAgICAgYWxpZ25TZWxmOiBcImNlbnRlclwiLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJsaWdodGdyZXlcIixcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG4gICAgICAgICAgcGFkZGluZzogXCI1cHhcIixcbiAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICB9fVxuICAgICAgLz5cblxuICAgICAgPE51bWJlcj57cmVwbGllc0NvdW50fTwvTnVtYmVyPlxuICAgICAgPHA+e3JlcGxpZXNDb3VudCA+IDEgPyBcIlJlcGxpZXNcIiA6IFwiUmVwbHlcIn08L3A+XG4gICAgPC9CdXR0b24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXBsaWVzO1xuXG5jb25zdCBCdXR0b24gPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIG1heFdpZHRoOiBcIjI0MHB4XCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBtYXJnaW5SaWdodDogXCIxNnB4XCIsXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICBtYXJnaW46IFwiMXJlbSAwcmVtIDAuM3JlbSAwcmVtXCIsXG4gIH0sXG59KShCb3gpO1xuXG5jb25zdCBOdW1iZXIgPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgbWFyZ2luUmlnaHQ6IDgsXG4gIH0sXG59KShCb3gpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/Post/SinglePost/CommentsSection/Comment/CommentReact/Replies/Replies.tsx\n");

/***/ })

})