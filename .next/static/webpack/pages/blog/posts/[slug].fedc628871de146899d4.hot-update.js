webpackHotUpdate_N_E("pages/blog/posts/[slug]",{

/***/ "./Components/Post/SinglePost/CommentBox/CommentBox.tsx":
/*!**************************************************************!*\
  !*** ./Components/Post/SinglePost/CommentBox/CommentBox.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../custom-hooks/useLocalState */ \"./custom-hooks/useLocalState.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../url */ \"./url.js\");\n/* harmony import */ var _SinglePost__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../SinglePost */ \"./Components/Post/SinglePost/SinglePost.tsx\");\n\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/Post/SinglePost/CommentBox/CommentBox.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar MAX_CHARACTER_COUNT = 200;\n\nvar CommentBox = function CommentBox(_ref) {\n  _s();\n\n  var postId = _ref.postId;\n\n  var _useLocalState = Object(_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"user\", \"\"),\n      _useLocalState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useLocalState, 1),\n      user = _useLocalState2[0];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      comment = _useState[0],\n      setComment = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      isSending = _useState2[0],\n      setIsSending = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      showLoginAlert = _useState3[0],\n      setShowLoginAlert = _useState3[1];\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useContext\"])(_SinglePost__WEBPACK_IMPORTED_MODULE_8__[\"CommentsCountContext\"]),\n      setCommentsCount = _useContext.setCommentsCount;\n\n  var classes = useStyles({\n    comment: comment\n  });\n\n  var handleSubmit = function handleSubmit() {\n    setCommentsCount(function (count) {\n      return count + 1;\n    });\n\n    if (!user.token) {\n      setShowLoginAlert(true);\n      setTimeout(function () {\n        setShowLoginAlert(false);\n      }, 3000);\n      return;\n    }\n\n    if (comment.length > MAX_CHARACTER_COUNT) return; // return;\n\n    axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(\"\".concat(_url__WEBPACK_IMPORTED_MODULE_7__[\"backend_url\"], \"/api/post/comment/store\"), {\n      post_id: postId,\n      comment: comment\n    }, {\n      headers: {\n        Accept: \"application/json\",\n        Authorization: \"Bearer \".concat(user.token)\n      }\n    }).then(function (response) {\n      console.log(response.data);\n    });\n  };\n\n  var handleChange = function handleChange(e) {\n    setComment(e.target.value);\n  };\n\n  var handleEnter = function handleEnter(e) {\n    if (e.key === \"Enter\" && comment.length > 0) {\n      handleSubmit();\n    }\n  };\n\n  var postComment = function postComment() {};\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Container, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Avatar\"], {\n      src: user === null || user === void 0 ? void 0 : user.picture,\n      style: {\n        width: 35,\n        height: 35,\n        borderRadius: \"50%\",\n        marginRight: \"16px\"\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(InputContainer, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        placeholder: user.token ? \"Tell us what you think about this post...\" : \"Login to post a comment!\",\n        value: comment,\n        onChange: handleChange,\n        onKeyDown: handleEnter,\n        style: {\n          width: \"100%\",\n          padding: \"12px\",\n          marginRight: \"16px\",\n          border: \"1px solid black\"\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: classes.charactersCount,\n        children: \"\".concat(comment.length, \"/\").concat(MAX_CHARACTER_COUNT)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(ImageContainer, {\n      children: isSending ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"CircularProgress\"], {\n        size: 25,\n        color: \"inherit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 11\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        src: \"/assets/send_icon.svg\",\n        width: 25,\n        height: 25,\n        onClick: handleSubmit\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(LoginAlert, {\n      anchorOrigin: {\n        vertical: \"top\",\n        horizontal: \"center\"\n      },\n      open: showLoginAlert,\n      message: \"Please Login To Post A Comment.\"\n    }, postId, false, {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 78,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(CommentBox, \"XEczvVXBeBgaf11s0W2IUzA61Gc=\", false, function () {\n  return [_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_4__[\"default\"], useStyles];\n});\n\n_c = CommentBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommentBox);\nvar Container = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])({\n  root: {\n    width: \"100%\",\n    display: \"flex\",\n    marginTop: \"1.5rem\",\n    alignItems: \"center\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"]);\nvar ImageContainer = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])({\n  root: {\n    display: \"inline-flex\",\n    width: 35,\n    alignItems: \"center\",\n    justifyContent: \"space-between\",\n    cursor: \"pointer\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"]);\nvar InputContainer = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])({\n  root: {\n    position: \"relative\",\n    display: \"flex\",\n    alignItems: \"center\",\n    width: \"100%\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"]);\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])({\n  charactersCount: {\n    position: \"absolute\",\n    bottom: -22,\n    right: 20,\n    fontSize: \"0.8rem\",\n    fontWeight: 700,\n    color: function color(props) {\n      var comment = props.comment;\n\n      if (comment.length > MAX_CHARACTER_COUNT) {\n        return \"red\";\n      }\n\n      return \"grey\";\n    }\n  }\n});\nvar LoginAlert = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])({\n  root: {\n    zIndex: 20000\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Snackbar\"]);\n\nvar _c;\n\n$RefreshReg$(_c, \"CommentBox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qb3N0L1NpbmdsZVBvc3QvQ29tbWVudEJveC9Db21tZW50Qm94LnRzeD80OGFkIl0sIm5hbWVzIjpbIk1BWF9DSEFSQUNURVJfQ09VTlQiLCJDb21tZW50Qm94IiwicG9zdElkIiwidXNlTG9jYWxTdGF0ZSIsInVzZXIiLCJ1c2VTdGF0ZSIsImNvbW1lbnQiLCJzZXRDb21tZW50IiwiaXNTZW5kaW5nIiwic2V0SXNTZW5kaW5nIiwic2hvd0xvZ2luQWxlcnQiLCJzZXRTaG93TG9naW5BbGVydCIsInVzZUNvbnRleHQiLCJDb21tZW50c0NvdW50Q29udGV4dCIsInNldENvbW1lbnRzQ291bnQiLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwiaGFuZGxlU3VibWl0IiwiY291bnQiLCJ0b2tlbiIsInNldFRpbWVvdXQiLCJsZW5ndGgiLCJheGlvcyIsInBvc3QiLCJiYWNrZW5kX3VybCIsInBvc3RfaWQiLCJoZWFkZXJzIiwiQWNjZXB0IiwiQXV0aG9yaXphdGlvbiIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlRW50ZXIiLCJrZXkiLCJwb3N0Q29tbWVudCIsInBpY3R1cmUiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsIm1hcmdpblJpZ2h0IiwicGFkZGluZyIsImJvcmRlciIsImNoYXJhY3RlcnNDb3VudCIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsIkNvbnRhaW5lciIsIndpdGhTdHlsZXMiLCJyb290IiwiZGlzcGxheSIsIm1hcmdpblRvcCIsImFsaWduSXRlbXMiLCJCb3giLCJJbWFnZUNvbnRhaW5lciIsImp1c3RpZnlDb250ZW50IiwiY3Vyc29yIiwiSW5wdXRDb250YWluZXIiLCJwb3NpdGlvbiIsIm1ha2VTdHlsZXMiLCJib3R0b20iLCJyaWdodCIsImZvbnRTaXplIiwiZm9udFdl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QUFyQixFQUEwQztBQUN4QyxlQUFPLEtBQVA7QUFDRDs7QUFFRCxhQUFPLE1BQVA7QUFDRDtBQWJjO0FBRFUsQ0FBRCxDQUE1QjtBQWtCQSxJQUFNc0UsVUFBVSxHQUFHbEIsb0VBQVUsQ0FBQztBQUM1QkMsTUFBSSxFQUFFO0FBQ0prQixVQUFNLEVBQUU7QUFESjtBQURzQixDQUFELENBQVYsQ0FJaEJDLDBEQUpnQixDQUFuQiIsImZpbGUiOiIuL0NvbXBvbmVudHMvUG9zdC9TaW5nbGVQb3N0L0NvbW1lbnRCb3gvQ29tbWVudEJveC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBdmF0YXIsXG4gIEJveCxcbiAgQ2lyY3VsYXJQcm9ncmVzcyxcbiAgbWFrZVN0eWxlcyxcbiAgU25hY2tiYXIsXG4gIHdpdGhTdHlsZXMsXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlTG9jYWxTdGF0ZSBmcm9tIFwiLi4vLi4vLi4vLi4vY3VzdG9tLWhvb2tzL3VzZUxvY2FsU3RhdGVcIjtcblxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBiYWNrZW5kX3VybCB9IGZyb20gXCIuLi8uLi8uLi8uLi91cmxcIjtcbmltcG9ydCB7IENvbW1lbnRzQ291bnRDb250ZXh0IH0gZnJvbSBcIi4uL1NpbmdsZVBvc3RcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHBvc3RJZDogc3RyaW5nO1xufVxuXG5jb25zdCBNQVhfQ0hBUkFDVEVSX0NPVU5UID0gMjAwO1xuXG5jb25zdCBDb21tZW50Qm94OiBSZWFjdC5GQzxJUHJvcHM+ID0gKHsgcG9zdElkIH0pID0+IHtcbiAgY29uc3QgW3VzZXJdID0gdXNlTG9jYWxTdGF0ZShcInVzZXJcIiwgXCJcIik7XG4gIGNvbnN0IFtjb21tZW50LCBzZXRDb21tZW50XSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IFtpc1NlbmRpbmcsIHNldElzU2VuZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtzaG93TG9naW5BbGVydCwgc2V0U2hvd0xvZ2luQWxlcnRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGNvbnN0IHsgc2V0Q29tbWVudHNDb3VudCB9ID0gdXNlQ29udGV4dChDb21tZW50c0NvdW50Q29udGV4dCk7XG5cbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcyh7IGNvbW1lbnQgfSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xuICAgIHNldENvbW1lbnRzQ291bnQoKGNvdW50KSA9PiBjb3VudCArIDEpO1xuICAgIGlmICghdXNlci50b2tlbikge1xuICAgICAgc2V0U2hvd0xvZ2luQWxlcnQodHJ1ZSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0U2hvd0xvZ2luQWxlcnQoZmFsc2UpO1xuICAgICAgfSwgMzAwMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGNvbW1lbnQubGVuZ3RoID4gTUFYX0NIQVJBQ1RFUl9DT1VOVCkgcmV0dXJuO1xuICAgIC8vIHJldHVybjtcblxuICAgIGF4aW9zXG4gICAgICAucG9zdChcbiAgICAgICAgYCR7YmFja2VuZF91cmx9L2FwaS9wb3N0L2NvbW1lbnQvc3RvcmVgLFxuICAgICAgICB7XG4gICAgICAgICAgcG9zdF9pZDogcG9zdElkLFxuICAgICAgICAgIGNvbW1lbnQ6IGNvbW1lbnQsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3VzZXIudG9rZW59YCxcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICApXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgc2V0Q29tbWVudChlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRW50ZXIgPSAoZTogYW55KSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIgJiYgY29tbWVudC5sZW5ndGggPiAwKSB7XG4gICAgICBoYW5kbGVTdWJtaXQoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcG9zdENvbW1lbnQgPSAoKSA9PiB7fTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8QXZhdGFyXG4gICAgICAgIHNyYz17dXNlcj8ucGljdHVyZX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB3aWR0aDogMzUsXG4gICAgICAgICAgaGVpZ2h0OiAzNSxcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMTZweFwiLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxJbnB1dENvbnRhaW5lcj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtcbiAgICAgICAgICAgIHVzZXIudG9rZW5cbiAgICAgICAgICAgICAgPyBcIlRlbGwgdXMgd2hhdCB5b3UgdGhpbmsgYWJvdXQgdGhpcyBwb3N0Li4uXCJcbiAgICAgICAgICAgICAgOiBcIkxvZ2luIHRvIHBvc3QgYSBjb21tZW50IVwiXG4gICAgICAgICAgfVxuICAgICAgICAgIHZhbHVlPXtjb21tZW50fVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVFbnRlcn1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgcGFkZGluZzogXCIxMnB4XCIsXG4gICAgICAgICAgICBtYXJnaW5SaWdodDogXCIxNnB4XCIsXG4gICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGJsYWNrXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGFyYWN0ZXJzQ291bnR9XG4gICAgICAgID57YCR7Y29tbWVudC5sZW5ndGh9LyR7TUFYX0NIQVJBQ1RFUl9DT1VOVH1gfTwvZGl2PlxuICAgICAgPC9JbnB1dENvbnRhaW5lcj5cbiAgICAgIDxJbWFnZUNvbnRhaW5lcj5cbiAgICAgICAge2lzU2VuZGluZyA/IChcbiAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyBzaXplPXsyNX0gY29sb3I9XCJpbmhlcml0XCIgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz17YC9hc3NldHMvc2VuZF9pY29uLnN2Z2B9XG4gICAgICAgICAgICB3aWR0aD17MjV9XG4gICAgICAgICAgICBoZWlnaHQ9ezI1fVxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L0ltYWdlQ29udGFpbmVyPlxuXG4gICAgICA8TG9naW5BbGVydFxuICAgICAgICBrZXk9e3Bvc3RJZH1cbiAgICAgICAgYW5jaG9yT3JpZ2luPXt7IHZlcnRpY2FsOiBcInRvcFwiLCBob3Jpem9udGFsOiBcImNlbnRlclwiIH19XG4gICAgICAgIG9wZW49e3Nob3dMb2dpbkFsZXJ0fVxuICAgICAgICBtZXNzYWdlPVwiUGxlYXNlIExvZ2luIFRvIFBvc3QgQSBDb21tZW50LlwiXG4gICAgICAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudEJveDtcblxuY29uc3QgQ29udGFpbmVyID0gd2l0aFN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgbWFyZ2luVG9wOiBcIjEuNXJlbVwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIH0sXG59KShCb3gpO1xuXG5jb25zdCBJbWFnZUNvbnRhaW5lciA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogXCJpbmxpbmUtZmxleFwiLFxuICAgIHdpZHRoOiAzNSxcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICB9LFxufSkoQm94KTtcblxuY29uc3QgSW5wdXRDb250YWluZXIgPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gIH0sXG59KShCb3gpO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgY2hhcmFjdGVyc0NvdW50OiB7XG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICBib3R0b206IC0yMixcbiAgICByaWdodDogMjAsXG4gICAgZm9udFNpemU6IFwiMC44cmVtXCIsXG4gICAgZm9udFdlaWdodDogNzAwLFxuICAgIGNvbG9yOiAocHJvcHM6IHsgY29tbWVudDogc3RyaW5nIH0pID0+IHtcbiAgICAgIGNvbnN0IHsgY29tbWVudCB9ID0gcHJvcHM7XG4gICAgICBpZiAoY29tbWVudC5sZW5ndGggPiBNQVhfQ0hBUkFDVEVSX0NPVU5UKSB7XG4gICAgICAgIHJldHVybiBcInJlZFwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gXCJncmV5XCI7XG4gICAgfSxcbiAgfSxcbn0pO1xuXG5jb25zdCBMb2dpbkFsZXJ0ID0gd2l0aFN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICB6SW5kZXg6IDIwMDAwLFxuICB9LFxufSkoU25hY2tiYXIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/Post/SinglePost/CommentBox/CommentBox.tsx\n");

/***/ })

})