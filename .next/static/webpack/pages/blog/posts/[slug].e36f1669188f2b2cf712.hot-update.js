webpackHotUpdate_N_E("pages/blog/posts/[slug]",{

/***/ "./Components/Post/SinglePost/CommentBox/CommentBox.tsx":
/*!**************************************************************!*\
  !*** ./Components/Post/SinglePost/CommentBox/CommentBox.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../custom-hooks/useLocalState */ \"./custom-hooks/useLocalState.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../url */ \"./url.js\");\n/* harmony import */ var _SinglePost__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../SinglePost */ \"./Components/Post/SinglePost/SinglePost.tsx\");\n\n\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/Post/SinglePost/CommentBox/CommentBox.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar MAX_CHARACTER_COUNT = 200;\n\nvar CommentBox = function CommentBox(_ref) {\n  _s();\n\n  var postId = _ref.postId;\n\n  var _useLocalState = Object(_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"user\", \"\"),\n      _useLocalState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useLocalState, 1),\n      user = _useLocalState2[0];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(\"\"),\n      comment = _useState[0],\n      setComment = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      isSending = _useState2[0],\n      setIsSending = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      showLoginAlert = _useState3.showLoginAlert;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_SinglePost__WEBPACK_IMPORTED_MODULE_9__[\"CommentsCountContext\"]),\n      setCommentsCount = _useContext.setCommentsCount;\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_SinglePost__WEBPACK_IMPORTED_MODULE_9__[\"CommentsContext\"]),\n      setComments = _useContext2.setComments;\n\n  var classes = useStyles({\n    comment: comment\n  });\n\n  var handleSubmit = function handleSubmit() {\n    if (!(user === null || user === void 0 ? void 0 : user.token)) {\n      showAlert();\n      return;\n    }\n\n    if (comment.length > MAX_CHARACTER_COUNT) return;\n\n    if (comment.length == 0) {\n      showAlert();\n      return;\n    }\n\n    postComment();\n  };\n\n  var handleChange = function handleChange(e) {\n    setComment(e.target.value);\n  };\n\n  var handleEnter = function handleEnter(e) {\n    if (e.key === \"Enter\" && comment.length > 0) {\n      handleSubmit();\n    }\n  };\n\n  var postComment = function postComment() {\n    setIsSending(true);\n    axios__WEBPACK_IMPORTED_MODULE_7___default.a.post(\"\".concat(_url__WEBPACK_IMPORTED_MODULE_8__[\"backend_url\"], \"/api/post/comment/store\"), {\n      post_id: postId,\n      comment: comment\n    }, {\n      headers: {\n        Accept: \"application/json\",\n        Authorization: \"Bearer \".concat(user === null || user === void 0 ? void 0 : user.token)\n      }\n    }).then(function (response) {\n      setIsSending(false);\n      setCommentsCount(function (count) {\n        return count + 1;\n      });\n      setComments(function (comments) {\n        return [response.data].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(comments));\n      });\n      setComment(\"\");\n    });\n  };\n\n  var showAlert = function showAlert() {\n    setShowLoginAlert(true);\n    setTimeout(function () {\n      setShowLoginAlert(false);\n    }, 3000);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Container, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Avatar\"], {\n      src: user === null || user === void 0 ? void 0 : user.picture,\n      style: {\n        width: 35,\n        height: 35,\n        borderRadius: \"50%\",\n        marginRight: \"16px\"\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(InputContainer, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        placeholder: user ? \"Tell us what you think about this post!\" : \"Login to post a comment!\",\n        value: comment,\n        onChange: handleChange,\n        onKeyDown: handleEnter,\n        style: {\n          width: \"100%\",\n          padding: \"12px\",\n          marginRight: \"16px\",\n          border: \"1px solid black\"\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: classes.charactersCount,\n        children: \"\".concat(comment.length, \"/\").concat(MAX_CHARACTER_COUNT)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(ImageContainer, {\n      children: isSending ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"CircularProgress\"], {\n        size: 25,\n        color: \"inherit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 11\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        src: \"/assets/send_icon.svg\",\n        width: 25,\n        height: 25,\n        onClick: handleSubmit\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 131,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(LoginAlert, {\n      anchorOrigin: {\n        vertical: \"top\",\n        horizontal: \"center\"\n      },\n      open: showLoginAlert,\n      message: !(user === null || user === void 0 ? void 0 : user.token) ? \"Login To Post A Comment!\" : comment.length == 0 ? \"Comment Cannot Be Empty\" : \"Some Error Occurred\"\n    }, postId, false, {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 95,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(CommentBox, \"rXhTyLy9iPjZrtmEwnyl6NrUg7Q=\", false, function () {\n  return [_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_5__[\"default\"], useStyles];\n});\n\n_c = CommentBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommentBox);\nvar Container = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"withStyles\"])({\n  root: {\n    width: \"100%\",\n    display: \"flex\",\n    marginTop: \"1.5rem\",\n    alignItems: \"center\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"]);\nvar ImageContainer = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"withStyles\"])({\n  root: {\n    display: \"inline-flex\",\n    width: 35,\n    alignItems: \"center\",\n    justifyContent: \"space-between\",\n    cursor: \"pointer\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"]);\nvar InputContainer = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"withStyles\"])({\n  root: {\n    position: \"relative\",\n    display: \"flex\",\n    alignItems: \"center\",\n    width: \"100%\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"]);\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"makeStyles\"])({\n  charactersCount: {\n    position: \"absolute\",\n    bottom: -22,\n    right: 20,\n    fontSize: \"0.8rem\",\n    fontWeight: 700,\n    color: function color(props) {\n      var comment = props.comment;\n\n      if (comment.length > MAX_CHARACTER_COUNT) {\n        return \"red\";\n      }\n\n      return \"grey\";\n    }\n  }\n});\nvar LoginAlert = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"withStyles\"])({\n  root: {\n    zIndex: 20000\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Snackbar\"]);\n\nvar _c;\n\n$RefreshReg$(_c, \"CommentBox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qb3N0L1NpbmdsZVBvc3QvQ29tbWVudEJveC9Db21tZW50Qm94LnRzeD80OGFkIl0sIm5hbWVzIjpbIk1BWF9DSEFSQUNURVJfQ09VTlQiLCJDb21tZW50Qm94IiwicG9zdElkIiwidXNlTG9jYWxTdGF0ZSIsInVzZXIiLCJ1c2VTdGF0ZSIsImNvbW1lbnQiLCJzZXRDb21tZW50IiwiaXNTZW5kaW5nIiwic2V0SXNTZW5kaW5nIiwic2hvd0xvZ2luQWxlcnQiLCJ1c2VDb250ZXh0IiwiQ29tbWVudHNDb3VudENvbnRleHQiLCJzZXRDb21tZW50c0NvdW50IiwiQ29tbWVudHNDb250ZXh0Iiwic2V0Q29tbWVudHMiLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwiaGFuZGxlU3VibWl0IiwidG9rZW4iLCJzaG93QWxlcnQiLCJsZW5ndGgiLCJwb3N0Q29tbWVudCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUVudGVyIiwia2V5IiwiYXhpb3MiLCJwb3N0IiwiYmFja2VuZF91cmwiLCJwb3N0X2lkIiwiaGVhZGVycyIsIkFjY2VwdCIsIkF1dGhvcml6YXRpb24iLCJ0aGVuIiwicmVzcG9uc2UiLCJjb3VudCIsImNvbW1lbnRzIiwiZGF0YSIsInNldFNob3dMb2dpbkFsZXJ0Iiwic2V0VGltZW91dCIsInBpY3R1cmUiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsIm1hcmdpblJpZ2h0IiwicGFkZGluZyIsImJvcmRlciIsImNoYXJhY3RlcnNDb3VudCIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsIkNvbnRhaW5lciIsIndpdGhTdHlsZXMiLCJyb290IiwiZGlzcGxheSIsIm1hcmdpblRvcCIsImFsaWduSXRlbXMiLCJCb3giLCJJbWFnZUNvbnRhaW5lciIsImp1c3RpZnlDb250ZW50IiwiY3Vyc29yIiwiSW5wdXRDb250YWluZXIiLCJwb3NpdGlvbiIsIm1ha2VTdHlsZXMiLCJib3R0b20iLCJyaWdodCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImNvbG9yIiwicHJvcHMiLCJMb2dpbkFsZXJ0IiwiekluZGV4IiwiU25hY2tiYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFRQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFNQSxJQUFNQSxtQkFBbUIsR0FBRyxHQUE1Qjs7QUFFQSxJQUFNQyxVQUE0QixHQUFHLFNBQS9CQSxVQUErQixPQUFnQjtBQUFBOztBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFBQSx1QkFDcENDLDJFQUFhLENBQUMsTUFBRCxFQUFTLEVBQVQsQ0FEdUI7QUFBQTtBQUFBLE1BQzVDQyxJQUQ0Qzs7QUFBQSxrQkFFckJDLHNEQUFRLENBQVMsRUFBVCxDQUZhO0FBQUEsTUFFNUNDLE9BRjRDO0FBQUEsTUFFbkNDLFVBRm1DOztBQUFBLG1CQUdqQkYsc0RBQVEsQ0FBVSxLQUFWLENBSFM7QUFBQSxNQUc1Q0csU0FINEM7QUFBQSxNQUdqQ0MsWUFIaUM7O0FBQUEsbUJBSXRCSixzREFBUSxDQUFVLEtBQVYsQ0FKYztBQUFBLE1BSTNDSyxjQUoyQyxjQUkzQ0EsY0FKMkM7O0FBQUEsb0JBTXRCQyx3REFBVSxDQUFDQyxnRUFBRCxDQU5ZO0FBQUEsTUFNM0NDLGdCQU4yQyxlQU0zQ0EsZ0JBTjJDOztBQUFBLHFCQU8zQkYsd0RBQVUsQ0FBQ0csMkRBQUQsQ0FQaUI7QUFBQSxNQU8zQ0MsV0FQMkMsZ0JBTzNDQSxXQVAyQzs7QUFTbkQsTUFBTUMsT0FBTyxHQUFHQyxTQUFTLENBQUM7QUFBRVgsV0FBTyxFQUFQQTtBQUFGLEdBQUQsQ0FBekI7O0FBRUEsTUFBTVksWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QixRQUFJLEVBQUNkLElBQUQsYUFBQ0EsSUFBRCx1QkFBQ0EsSUFBSSxDQUFFZSxLQUFQLENBQUosRUFBa0I7QUFDaEJDLGVBQVM7QUFDVDtBQUNEOztBQUVELFFBQUlkLE9BQU8sQ0FB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QUUsZUFKWjtBQUtKQyxVQUFNLEVBQUU7QUFMSjtBQUQwQixDQUFELENBQVYsQ0FRcEJILHFEQVJvQixDQUF2QjtBQVVBLElBQU1JLGNBQWMsR0FBR1Qsb0VBQVUsQ0FBQztBQUNoQ0MsTUFBSSxFQUFFO0FBQ0pTLFlBQVEsRUFBRSxVQUROO0FBRUpSLFdBQU8sRUFBRSxNQUZMO0FBR0pFLGNBQVUsRUFBRSxRQUhSO0FBSUpkLFNBQUssRUFBRTtBQUpIO0FBRDBCLENBQUQsQ0FBVixDQU9wQmUscURBUG9CLENBQXZCO0FBU0EsSUFBTTFDLFNBQVMsR0FBR2dELG9FQUFVLENBQUM7QUFDM0JmLGlCQUFlLEVBQUU7QUFDZmMsWUFBUSxFQUFFLFVBREs7QUFFZkUsVUFBTSxFQUFFLENBQUMsRUFGTTtBQUdmQyxTQUFLLEVBQUUsRUFIUTtBQUlmQyxZQUFRLEVBQUUsUUFKSztBQUtmQyxjQUFVLEVBQUUsR0FMRztBQU1mQyxTQUFLLEVBQUUsZUFBQ0MsS0FBRCxFQUFnQztBQUFBLFVBQzdCakUsT0FENkIsR0FDakJpRSxLQURpQixDQUM3QmpFLE9BRDZCOztBQUVyQyxVQUFJQSxPQUFPLENBQUNlLE1BQVIsR0FBaUJyQixtQkFBckIsRUFBMEM7QUFDeEMsZUFBTyxLQUFQO0FBQ0Q7O0FBRUQsYUFBTyxNQUFQO0FBQ0Q7QUFiYztBQURVLENBQUQsQ0FBNUI7QUFrQkEsSUFBTXdFLFVBQVUsR0FBR2xCLG9FQUFVLENBQUM7QUFDNUJDLE1BQUksRUFBRTtBQUNKa0IsVUFBTSxFQUFFO0FBREo7QUFEc0IsQ0FBRCxDQUFWLENBSWhCQywwREFKZ0IsQ0FBbkIiLCJmaWxlIjoiLi9Db21wb25lbnRzL1Bvc3QvU2luZ2xlUG9zdC9Db21tZW50Qm94L0NvbW1lbnRCb3gudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQXZhdGFyLFxuICBCb3gsXG4gIENpcmN1bGFyUHJvZ3Jlc3MsXG4gIG1ha2VTdHlsZXMsXG4gIFNuYWNrYmFyLFxuICB3aXRoU3R5bGVzLFxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZUxvY2FsU3RhdGUgZnJvbSBcIi4uLy4uLy4uLy4uL2N1c3RvbS1ob29rcy91c2VMb2NhbFN0YXRlXCI7XG5cbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgYmFja2VuZF91cmwgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdXJsXCI7XG5pbXBvcnQgeyBDb21tZW50c0NvbnRleHQsIENvbW1lbnRzQ291bnRDb250ZXh0IH0gZnJvbSBcIi4uL1NpbmdsZVBvc3RcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHBvc3RJZDogc3RyaW5nO1xufVxuXG5jb25zdCBNQVhfQ0hBUkFDVEVSX0NPVU5UID0gMjAwO1xuXG5jb25zdCBDb21tZW50Qm94OiBSZWFjdC5GQzxJUHJvcHM+ID0gKHsgcG9zdElkIH0pID0+IHtcbiAgY29uc3QgW3VzZXJdID0gdXNlTG9jYWxTdGF0ZShcInVzZXJcIiwgXCJcIik7XG4gIGNvbnN0IFtjb21tZW50LCBzZXRDb21tZW50XSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IFtpc1NlbmRpbmcsIHNldElzU2VuZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IHsgc2hvd0xvZ2luQWxlcnQsICB9ID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGNvbnN0IHsgc2V0Q29tbWVudHNDb3VudCB9ID0gdXNlQ29udGV4dChDb21tZW50c0NvdW50Q29udGV4dCk7XG4gIGNvbnN0IHsgc2V0Q29tbWVudHMgfSA9IHVzZUNvbnRleHQoQ29tbWVudHNDb250ZXh0KTtcblxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKHsgY29tbWVudCB9KTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XG4gICAgaWYgKCF1c2VyPy50b2tlbikge1xuICAgICAgc2hvd0FsZXJ0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGNvbW1lbnQubGVuZ3RoID4gTUFYX0NIQVJBQ1RFUl9DT1VOVCkgcmV0dXJuO1xuICAgIGlmIChjb21tZW50Lmxlbmd0aCA9PSAwKSB7XG4gICAgICBzaG93QWxlcnQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwb3N0Q29tbWVudCgpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICBzZXRDb21tZW50KGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVFbnRlciA9IChlOiBhbnkpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIiAmJiBjb21tZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgIGhhbmRsZVN1Ym1pdCgpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBwb3N0Q29tbWVudCA9ICgpID0+IHtcbiAgICBzZXRJc1NlbmRpbmcodHJ1ZSk7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KFxuICAgICAgICBgJHtiYWNrZW5kX3VybH0vYXBpL3Bvc3QvY29tbWVudC9zdG9yZWAsXG4gICAgICAgIHtcbiAgICAgICAgICBwb3N0X2lkOiBwb3N0SWQsXG4gICAgICAgICAgY29tbWVudDogY29tbWVudCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dXNlcj8udG9rZW59YCxcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICApXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgc2V0SXNTZW5kaW5nKGZhbHNlKTtcbiAgICAgICAgc2V0Q29tbWVudHNDb3VudCgoY291bnQ6IG51bWJlcikgPT4gY291bnQgKyAxKTtcblxuICAgICAgICBzZXRDb21tZW50cygoY29tbWVudHMpID0+IHtcbiAgICAgICAgICByZXR1cm4gW3Jlc3BvbnNlLmRhdGEsIC4uLmNvbW1lbnRzXTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0Q29tbWVudChcIlwiKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHNob3dBbGVydCA9ICgpID0+IHtcbiAgICBzZXRTaG93TG9naW5BbGVydCh0cnVlKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFNob3dMb2dpbkFsZXJ0KGZhbHNlKTtcbiAgICB9LCAzMDAwKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8QXZhdGFyXG4gICAgICAgIHNyYz17dXNlcj8ucGljdHVyZX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB3aWR0aDogMzUsXG4gICAgICAgICAgaGVpZ2h0OiAzNSxcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMTZweFwiLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxJbnB1dENvbnRhaW5lcj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtcbiAgICAgICAgICAgIHVzZXJcbiAgICAgICAgICAgICAgPyBcIlRlbGwgdXMgd2hhdCB5b3UgdGhpbmsgYWJvdXQgdGhpcyBwb3N0IVwiXG4gICAgICAgICAgICAgIDogXCJMb2dpbiB0byBwb3N0IGEgY29tbWVudCFcIlxuICAgICAgICAgIH1cbiAgICAgICAgICB2YWx1ZT17Y29tbWVudH1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlRW50ZXJ9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMTJweFwiLFxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMTZweFwiLFxuICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBibGFja1wiLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2hhcmFjdGVyc0NvdW50fVxuICAgICAgICA+e2Ake2NvbW1lbnQubGVuZ3RofS8ke01BWF9DSEFSQUNURVJfQ09VTlR9YH08L2Rpdj5cbiAgICAgIDwvSW5wdXRDb250YWluZXI+XG4gICAgICA8SW1hZ2VDb250YWluZXI+XG4gICAgICAgIHtpc1NlbmRpbmcgPyAoXG4gICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3Mgc2l6ZT17MjV9IGNvbG9yPVwiaW5oZXJpdFwiIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9e2AvYXNzZXRzL3NlbmRfaWNvbi5zdmdgfVxuICAgICAgICAgICAgd2lkdGg9ezI1fVxuICAgICAgICAgICAgaGVpZ2h0PXsyNX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9JbWFnZUNvbnRhaW5lcj5cblxuICAgICAgPExvZ2luQWxlcnRcbiAgICAgICAga2V5PXtwb3N0SWR9XG4gICAgICAgIGFuY2hvck9yaWdpbj17eyB2ZXJ0aWNhbDogXCJ0b3BcIiwgaG9yaXpvbnRhbDogXCJjZW50ZXJcIiB9fVxuICAgICAgICBvcGVuPXtzaG93TG9naW5BbGVydH1cbiAgICAgICAgbWVzc2FnZT17XG4gICAgICAgICAgIXVzZXI/LnRva2VuXG4gICAgICAgICAgICA/IFwiTG9naW4gVG8gUG9zdCBBIENvbW1lbnQhXCJcbiAgICAgICAgICAgIDogY29tbWVudC5sZW5ndGggPT0gMFxuICAgICAgICAgICAgPyBcIkNvbW1lbnQgQ2Fubm90IEJlIEVtcHR5XCJcbiAgICAgICAgICAgIDogXCJTb21lIEVycm9yIE9jY3VycmVkXCJcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRCb3g7XG5cbmNvbnN0IENvbnRhaW5lciA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIG1hcmdpblRvcDogXCIxLjVyZW1cIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICB9LFxufSkoQm94KTtcblxuY29uc3QgSW1hZ2VDb250YWluZXIgPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIixcbiAgICB3aWR0aDogMzUsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgfSxcbn0pKEJveCk7XG5cbmNvbnN0IElucHV0Q29udGFpbmVyID0gd2l0aFN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICB9LFxufSkoQm94KTtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIGNoYXJhY3RlcnNDb3VudDoge1xuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgYm90dG9tOiAtMjIsXG4gICAgcmlnaHQ6IDIwLFxuICAgIGZvbnRTaXplOiBcIjAuOHJlbVwiLFxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICBjb2xvcjogKHByb3BzOiB7IGNvbW1lbnQ6IHN0cmluZyB9KSA9PiB7XG4gICAgICBjb25zdCB7IGNvbW1lbnQgfSA9IHByb3BzO1xuICAgICAgaWYgKGNvbW1lbnQubGVuZ3RoID4gTUFYX0NIQVJBQ1RFUl9DT1VOVCkge1xuICAgICAgICByZXR1cm4gXCJyZWRcIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFwiZ3JleVwiO1xuICAgIH0sXG4gIH0sXG59KTtcblxuY29uc3QgTG9naW5BbGVydCA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgekluZGV4OiAyMDAwMCxcbiAgfSxcbn0pKFNuYWNrYmFyKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/Post/SinglePost/CommentBox/CommentBox.tsx\n");

/***/ })

})