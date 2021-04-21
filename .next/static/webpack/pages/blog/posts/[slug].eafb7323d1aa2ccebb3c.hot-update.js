webpackHotUpdate_N_E("pages/blog/posts/[slug]",{

/***/ "./Components/Post/SinglePost/CommentBox/CommentBox.tsx":
/*!**************************************************************!*\
  !*** ./Components/Post/SinglePost/CommentBox/CommentBox.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../custom-hooks/useLocalState */ \"./custom-hooks/useLocalState.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../url */ \"./url.js\");\n/* harmony import */ var _SinglePost__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../SinglePost */ \"./Components/Post/SinglePost/SinglePost.tsx\");\n/* harmony import */ var _custom_hooks_useLoginAlert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../custom-hooks/useLoginAlert */ \"./custom-hooks/useLoginAlert.tsx\");\n\n\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/Post/SinglePost/CommentBox/CommentBox.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar MAX_CHARACTER_COUNT = 200;\n\nvar CommentBox = function CommentBox(_ref) {\n  _s();\n\n  var postId = _ref.postId;\n\n  var _useLocalState = Object(_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"user\", \"\"),\n      _useLocalState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useLocalState, 1),\n      user = _useLocalState2[0];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(\"\"),\n      comment = _useState[0],\n      setComment = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      isSending = _useState2[0],\n      setIsSending = _useState2[1];\n\n  var _useLoginAlert = Object(_custom_hooks_useLoginAlert__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(),\n      showLoginAlert = _useLoginAlert.showLoginAlert,\n      handleClickWhenLoggedOut = _useLoginAlert.handleClickWhenLoggedOut;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_SinglePost__WEBPACK_IMPORTED_MODULE_9__[\"CommentsCountContext\"]),\n      setCommentsCount = _useContext.setCommentsCount;\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_SinglePost__WEBPACK_IMPORTED_MODULE_9__[\"CommentsContext\"]),\n      setComments = _useContext2.setComments;\n\n  var classes = useStyles({\n    comment: comment\n  });\n\n  var handleSubmit = function handleSubmit() {\n    if (!(user === null || user === void 0 ? void 0 : user.token)) {\n      showAlert();\n      return;\n    }\n\n    if (comment.length > MAX_CHARACTER_COUNT) return;\n\n    if (comment.length == 0) {\n      showAlert();\n      return;\n    }\n\n    postComment();\n  };\n\n  var handleChange = function handleChange(e) {\n    setComment(e.target.value);\n  };\n\n  var handleEnter = function handleEnter(e) {\n    if (e.key === \"Enter\" && comment.length > 0) {\n      handleSubmit();\n    }\n  };\n\n  var postComment = function postComment() {\n    setIsSending(true);\n    axios__WEBPACK_IMPORTED_MODULE_7___default.a.post(\"\".concat(_url__WEBPACK_IMPORTED_MODULE_8__[\"backend_url\"], \"/api/post/comment/store\"), {\n      post_id: postId,\n      comment: comment\n    }, {\n      headers: {\n        Accept: \"application/json\",\n        Authorization: \"Bearer \".concat(user === null || user === void 0 ? void 0 : user.token)\n      }\n    }).then(function (response) {\n      setIsSending(false);\n      setCommentsCount(function (count) {\n        return count + 1;\n      });\n      setComments(function (comments) {\n        return [response.data].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(comments));\n      });\n      setComment(\"\");\n    });\n  };\n\n  var showAlert = function showAlert() {\n    setShowLoginAlert(true);\n    setTimeout(function () {\n      setShowLoginAlert(false);\n    }, 3000);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Container, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Avatar\"], {\n      src: user === null || user === void 0 ? void 0 : user.picture,\n      style: {\n        width: 35,\n        height: 35,\n        borderRadius: \"50%\",\n        marginRight: \"16px\"\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(InputContainer, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        placeholder: user ? \"Tell us what you think about this post!\" : \"Login to post a comment!\",\n        value: comment,\n        onChange: handleChange,\n        onKeyDown: handleEnter,\n        style: {\n          width: \"100%\",\n          padding: \"12px\",\n          marginRight: \"16px\",\n          border: \"1px solid black\"\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: classes.charactersCount,\n        children: \"\".concat(comment.length, \"/\").concat(MAX_CHARACTER_COUNT)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(ImageContainer, {\n      children: isSending ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"CircularProgress\"], {\n        size: 25,\n        color: \"inherit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 130,\n        columnNumber: 11\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        src: \"/assets/send_icon.svg\",\n        width: 25,\n        height: 25,\n        onClick: handleSubmit\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 132,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(LoginAlert, {\n      anchorOrigin: {\n        vertical: \"top\",\n        horizontal: \"center\"\n      },\n      open: showLoginAlert,\n      message: !(user === null || user === void 0 ? void 0 : user.token) ? \"Login To Post A Comment!\" : comment.length == 0 ? \"Comment Cannot Be Empty\" : \"Some Error Occurred\"\n    }, postId, false, {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 96,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(CommentBox, \"8jHqm/wwHpAyRahV90O6R/W83uQ=\", false, function () {\n  return [_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _custom_hooks_useLoginAlert__WEBPACK_IMPORTED_MODULE_10__[\"default\"], useStyles];\n});\n\n_c = CommentBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommentBox);\nvar Container = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"withStyles\"])({\n  root: {\n    width: \"100%\",\n    display: \"flex\",\n    marginTop: \"1.5rem\",\n    alignItems: \"center\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"]);\nvar ImageContainer = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"withStyles\"])({\n  root: {\n    display: \"inline-flex\",\n    width: 35,\n    alignItems: \"center\",\n    justifyContent: \"space-between\",\n    cursor: \"pointer\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"]);\nvar InputContainer = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"withStyles\"])({\n  root: {\n    position: \"relative\",\n    display: \"flex\",\n    alignItems: \"center\",\n    width: \"100%\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"]);\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"makeStyles\"])({\n  charactersCount: {\n    position: \"absolute\",\n    bottom: -22,\n    right: 20,\n    fontSize: \"0.8rem\",\n    fontWeight: 700,\n    color: function color(props) {\n      var comment = props.comment;\n\n      if (comment.length > MAX_CHARACTER_COUNT) {\n        return \"red\";\n      }\n\n      return \"grey\";\n    }\n  }\n});\nvar LoginAlert = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"withStyles\"])({\n  root: {\n    zIndex: 20000\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Snackbar\"]);\n\nvar _c;\n\n$RefreshReg$(_c, \"CommentBox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qb3N0L1NpbmdsZVBvc3QvQ29tbWVudEJveC9Db21tZW50Qm94LnRzeD80OGFkIl0sIm5hbWVzIjpbIk1BWF9DSEFSQUNURVJfQ09VTlQiLCJDb21tZW50Qm94IiwicG9zdElkIiwidXNlTG9jYWxTdGF0ZSIsInVzZXIiLCJ1c2VTdGF0ZSIsImNvbW1lbnQiLCJzZXRDb21tZW50IiwiaXNTZW5kaW5nIiwic2V0SXNTZW5kaW5nIiwidXNlTG9naW5BbGVydCIsInNob3dMb2dpbkFsZXJ0IiwiaGFuZGxlQ2xpY2tXaGVuTG9nZ2VkT3V0IiwidXNlQ29udGV4dCIsIkNvbW1lbnRzQ291bnRDb250ZXh0Iiwic2V0Q29tbWVudHNDb3VudCIsIkNvbW1lbnRzQ29udGV4dCIsInNldENvbW1lbnRzIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsImhhbmRsZVN1Ym1pdCIsInRva2VuIiwic2hvd0FsZXJ0IiwibGVuZ3RoIiwicG9zdENvbW1lbnQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVFbnRlciIsImtleSIsImF4aW9zIiwicG9zdCIsImJhY2tlbmRfdXJsIiwicG9zdF9pZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJBdXRob3JpemF0aW9uIiwidGhlbiIsInJlc3BvbnNlIiwiY291bnQiLCJjb21tZW50cyIsImRhdGEiLCJzZXRTaG93TG9naW5BbGVydCIsInNldFRpbWVvdXQiLCJwaWN0dXJlIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJtYXJnaW5SaWdodCIsInBhZGRpbmciLCJib3JkZXIiLCJjaGFyYWN0ZXJzQ291bnQiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJDb250YWluZXIiLCJ3aXRoU3R5bGVzIiwicm9vdCIsImRpc3BsYXkiLCJtYXJnaW5Ub3AiLCJhbGlnbkl0ZW1zIiwiQm94IiwiSW1hZ2VDb250YWluZXIiLCJqdXN0aWZ5Q29udGVudCIsImN1cnNvciIsIklucHV0Q29udGFpbmVyIiwicG9zaXRpb24iLCJtYWtlU3R5bGVzIiwiYm90dG9tIiwicmlnaHQiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJjb2xvciIsInByb3BzIiwiTG9naW5BbGVydCIsInpJbmRleCIsIlNuYWNrYmFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUEsSUFBTUEsbUJBQW1CLEdBQUcsR0FBNUI7O0FBRUEsSUFBTUMsVUFBNEIsR0FBRyxTQUEvQkEsVUFBK0IsT0FBZ0I7QUFBQTs7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBQUEsdUJBQ3BDQywyRUFBYSxDQUFDLE1BQUQsRUFBUyxFQUFULENBRHVCO0FBQUE7QUFBQSxNQUM1Q0MsSUFENEM7O0FBQUEsa0JBRXJCQyxzREFBUSxDQUFTLEVBQVQsQ0FGYTtBQUFBLE1BRTVDQyxPQUY0QztBQUFBLE1BRW5DQyxVQUZtQzs7QUFBQSxtQkFHakJGLHNEQUFRLENBQVUsS0FBVixDQUhTO0FBQUEsTUFHNUNHLFNBSDRDO0FBQUEsTUFHakNDLFlBSGlDOztBQUFBLHVCQUlFQyw0RUFBYSxFQUpmO0FBQUEsTUFJM0NDLGNBSjJDLGtCQUkzQ0EsY0FKMkM7QUFBQSxNQUkzQkMsd0JBSjJCLGtCQUkzQkEsd0JBSjJCOztBQUFBLG9CQU10QkMsd0RBQVUsQ0FBQ0MsZ0VBQUQsQ0FOWTtBQUFBLE1BTTNDQyxnQkFOMkMsZUFNM0NBLGdCQU4yQzs7QUFBQSxxQkFPM0JGLHdEQUFVLENBQUNHLDJEQUFELENBUGlCO0FBQUEsTUFPM0NDLFdBUDJDLGdCQU8zQ0EsV0FQMkM7O0FBU25ELE1BQU1DLE9BQU8sR0FBR0MsU0FBUyxDQUFDO0FBQUViLFdBQU8sRUFBUEE7QUFBRixHQUFELENBQXpCOztBQUVBLE1BQU1jLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekIsUUFBSSxFQUFDaEIsSUFBRCxhQUFDQSxJQUFELHVC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QUFDaENDLE1BQUksRUFBRTtBQUNKQyxXQUFPLEVBQUUsYUFETDtBQUVKWixTQUFLLEVBQUUsRUFGSDtBQUdKYyxjQUFVLEVBQUUsUUFIUjtBQUlKRyxrQkFBYyxFQUFFLGVBSlo7QUFLSkMsVUFBTSxFQUFFO0FBTEo7QUFEMEIsQ0FBRCxDQUFWLENBUXBCSCxxREFSb0IsQ0FBdkI7QUFVQSxJQUFNSSxjQUFjLEdBQUdULG9FQUFVLENBQUM7QUFDaENDLE1BQUksRUFBRTtBQUNKUyxZQUFRLEVBQUUsVUFETjtBQUVKUixXQUFPLEVBQUUsTUFGTDtBQUdKRSxjQUFVLEVBQUUsUUFIUjtBQUlKZCxTQUFLLEVBQUU7QUFKSDtBQUQwQixDQUFELENBQVYsQ0FPcEJlLHFEQVBvQixDQUF2QjtBQVNBLElBQU0xQyxTQUFTLEdBQUdnRCxvRUFBVSxDQUFDO0FBQzNCZixpQkFBZSxFQUFFO0FBQ2ZjLFlBQVEsRUFBRSxVQURLO0FBRWZFLFVBQU0sRUFBRSxDQUFDLEVBRk07QUFHZkMsU0FBSyxFQUFFLEVBSFE7QUFJZkMsWUFBUSxFQUFFLFFBSks7QUFLZkMsY0FBVSxFQUFFLEdBTEc7QUFNZkMsU0FBSyxFQUFFLGVBQUNDLEtBQUQsRUFBZ0M7QUFBQSxVQUM3Qm5FLE9BRDZCLEdBQ2pCbUUsS0FEaUIsQ0FDN0JuRSxPQUQ2Qjs7QUFFckMsVUFBSUEsT0FBTyxDQUFDaUIsTUFBUixHQUFpQnZCLG1CQUFyQixFQUEwQztBQUN4QyxlQUFPLEtBQVA7QUFDRDs7QUFFRCxhQUFPLE1BQVA7QUFDRDtBQWJjO0FBRFUsQ0FBRCxDQUE1QjtBQWtCQSxJQUFNMEUsVUFBVSxHQUFHbEIsb0VBQVUsQ0FBQztBQUM1QkMsTUFBSSxFQUFFO0FBQ0prQixVQUFNLEVBQUU7QUFESjtBQURzQixDQUFELENBQVYsQ0FJaEJDLDBEQUpnQixDQUFuQiIsImZpbGUiOiIuL0NvbXBvbmVudHMvUG9zdC9TaW5nbGVQb3N0L0NvbW1lbnRCb3gvQ29tbWVudEJveC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBdmF0YXIsXG4gIEJveCxcbiAgQ2lyY3VsYXJQcm9ncmVzcyxcbiAgbWFrZVN0eWxlcyxcbiAgU25hY2tiYXIsXG4gIHdpdGhTdHlsZXMsXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlTG9jYWxTdGF0ZSBmcm9tIFwiLi4vLi4vLi4vLi4vY3VzdG9tLWhvb2tzL3VzZUxvY2FsU3RhdGVcIjtcblxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBiYWNrZW5kX3VybCB9IGZyb20gXCIuLi8uLi8uLi8uLi91cmxcIjtcbmltcG9ydCB7IENvbW1lbnRzQ29udGV4dCwgQ29tbWVudHNDb3VudENvbnRleHQgfSBmcm9tIFwiLi4vU2luZ2xlUG9zdFwiO1xuaW1wb3J0IHVzZUxvZ2luQWxlcnQgZnJvbSBcIi4uLy4uLy4uLy4uL2N1c3RvbS1ob29rcy91c2VMb2dpbkFsZXJ0XCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBwb3N0SWQ6IHN0cmluZztcbn1cblxuY29uc3QgTUFYX0NIQVJBQ1RFUl9DT1VOVCA9IDIwMDtcblxuY29uc3QgQ29tbWVudEJveDogUmVhY3QuRkM8SVByb3BzPiA9ICh7IHBvc3RJZCB9KSA9PiB7XG4gIGNvbnN0IFt1c2VyXSA9IHVzZUxvY2FsU3RhdGUoXCJ1c2VyXCIsIFwiXCIpO1xuICBjb25zdCBbY29tbWVudCwgc2V0Q29tbWVudF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbaXNTZW5kaW5nLCBzZXRJc1NlbmRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCB7IHNob3dMb2dpbkFsZXJ0LCBoYW5kbGVDbGlja1doZW5Mb2dnZWRPdXQgfSA9IHVzZUxvZ2luQWxlcnQoKTtcblxuICBjb25zdCB7IHNldENvbW1lbnRzQ291bnQgfSA9IHVzZUNvbnRleHQoQ29tbWVudHNDb3VudENvbnRleHQpO1xuICBjb25zdCB7IHNldENvbW1lbnRzIH0gPSB1c2VDb250ZXh0KENvbW1lbnRzQ29udGV4dCk7XG5cbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcyh7IGNvbW1lbnQgfSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xuICAgIGlmICghdXNlcj8udG9rZW4pIHtcbiAgICAgIHNob3dBbGVydCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjb21tZW50Lmxlbmd0aCA+IE1BWF9DSEFSQUNURVJfQ09VTlQpIHJldHVybjtcbiAgICBpZiAoY29tbWVudC5sZW5ndGggPT0gMCkge1xuICAgICAgc2hvd0FsZXJ0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcG9zdENvbW1lbnQoKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgc2V0Q29tbWVudChlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRW50ZXIgPSAoZTogYW55KSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIgJiYgY29tbWVudC5sZW5ndGggPiAwKSB7XG4gICAgICBoYW5kbGVTdWJtaXQoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcG9zdENvbW1lbnQgPSAoKSA9PiB7XG4gICAgc2V0SXNTZW5kaW5nKHRydWUpO1xuICAgIGF4aW9zXG4gICAgICAucG9zdChcbiAgICAgICAgYCR7YmFja2VuZF91cmx9L2FwaS9wb3N0L2NvbW1lbnQvc3RvcmVgLFxuICAgICAgICB7XG4gICAgICAgICAgcG9zdF9pZDogcG9zdElkLFxuICAgICAgICAgIGNvbW1lbnQ6IGNvbW1lbnQsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3VzZXI/LnRva2VufWAsXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHNldElzU2VuZGluZyhmYWxzZSk7XG4gICAgICAgIHNldENvbW1lbnRzQ291bnQoKGNvdW50OiBudW1iZXIpID0+IGNvdW50ICsgMSk7XG5cbiAgICAgICAgc2V0Q29tbWVudHMoKGNvbW1lbnRzKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIFtyZXNwb25zZS5kYXRhLCAuLi5jb21tZW50c107XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldENvbW1lbnQoXCJcIik7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzaG93QWxlcnQgPSAoKSA9PiB7XG4gICAgc2V0U2hvd0xvZ2luQWxlcnQodHJ1ZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRTaG93TG9naW5BbGVydChmYWxzZSk7XG4gICAgfSwgMzAwMCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEF2YXRhclxuICAgICAgICBzcmM9e3VzZXI/LnBpY3R1cmV9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgd2lkdGg6IDM1LFxuICAgICAgICAgIGhlaWdodDogMzUsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjE2cHhcIixcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8SW5wdXRDb250YWluZXI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17XG4gICAgICAgICAgICB1c2VyXG4gICAgICAgICAgICAgID8gXCJUZWxsIHVzIHdoYXQgeW91IHRoaW5rIGFib3V0IHRoaXMgcG9zdCFcIlxuICAgICAgICAgICAgICA6IFwiTG9naW4gdG8gcG9zdCBhIGNvbW1lbnQhXCJcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFsdWU9e2NvbW1lbnR9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICBvbktleURvd249e2hhbmRsZUVudGVyfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjEycHhcIixcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjE2cHhcIixcbiAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgYmxhY2tcIixcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNoYXJhY3RlcnNDb3VudH1cbiAgICAgICAgPntgJHtjb21tZW50Lmxlbmd0aH0vJHtNQVhfQ0hBUkFDVEVSX0NPVU5UfWB9PC9kaXY+XG4gICAgICA8L0lucHV0Q29udGFpbmVyPlxuICAgICAgPEltYWdlQ29udGFpbmVyPlxuICAgICAgICB7aXNTZW5kaW5nID8gKFxuICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIHNpemU9ezI1fSBjb2xvcj1cImluaGVyaXRcIiAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPXtgL2Fzc2V0cy9zZW5kX2ljb24uc3ZnYH1cbiAgICAgICAgICAgIHdpZHRoPXsyNX1cbiAgICAgICAgICAgIGhlaWdodD17MjV9XG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvSW1hZ2VDb250YWluZXI+XG5cbiAgICAgIDxMb2dpbkFsZXJ0XG4gICAgICAgIGtleT17cG9zdElkfVxuICAgICAgICBhbmNob3JPcmlnaW49e3sgdmVydGljYWw6IFwidG9wXCIsIGhvcml6b250YWw6IFwiY2VudGVyXCIgfX1cbiAgICAgICAgb3Blbj17c2hvd0xvZ2luQWxlcnR9XG4gICAgICAgIG1lc3NhZ2U9e1xuICAgICAgICAgICF1c2VyPy50b2tlblxuICAgICAgICAgICAgPyBcIkxvZ2luIFRvIFBvc3QgQSBDb21tZW50IVwiXG4gICAgICAgICAgICA6IGNvbW1lbnQubGVuZ3RoID09IDBcbiAgICAgICAgICAgID8gXCJDb21tZW50IENhbm5vdCBCZSBFbXB0eVwiXG4gICAgICAgICAgICA6IFwiU29tZSBFcnJvciBPY2N1cnJlZFwiXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50Qm94O1xuXG5jb25zdCBDb250YWluZXIgPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBtYXJnaW5Ub3A6IFwiMS41cmVtXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgfSxcbn0pKEJveCk7XG5cbmNvbnN0IEltYWdlQ29udGFpbmVyID0gd2l0aFN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiBcImlubGluZS1mbGV4XCIsXG4gICAgd2lkdGg6IDM1LFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gIH0sXG59KShCb3gpO1xuXG5jb25zdCBJbnB1dENvbnRhaW5lciA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgfSxcbn0pKEJveCk7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICBjaGFyYWN0ZXJzQ291bnQ6IHtcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgIGJvdHRvbTogLTIyLFxuICAgIHJpZ2h0OiAyMCxcbiAgICBmb250U2l6ZTogXCIwLjhyZW1cIixcbiAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgY29sb3I6IChwcm9wczogeyBjb21tZW50OiBzdHJpbmcgfSkgPT4ge1xuICAgICAgY29uc3QgeyBjb21tZW50IH0gPSBwcm9wcztcbiAgICAgIGlmIChjb21tZW50Lmxlbmd0aCA+IE1BWF9DSEFSQUNURVJfQ09VTlQpIHtcbiAgICAgICAgcmV0dXJuIFwicmVkXCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBcImdyZXlcIjtcbiAgICB9LFxuICB9LFxufSk7XG5cbmNvbnN0IExvZ2luQWxlcnQgPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIHpJbmRleDogMjAwMDAsXG4gIH0sXG59KShTbmFja2Jhcik7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/Post/SinglePost/CommentBox/CommentBox.tsx\n");

/***/ })

})