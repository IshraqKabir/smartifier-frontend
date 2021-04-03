webpackHotUpdate_N_E("pages/blog/posts/[slug]",{

/***/ "./Components/Post/SinglePost/CommentBox/CommentBox.tsx":
/*!**************************************************************!*\
  !*** ./Components/Post/SinglePost/CommentBox/CommentBox.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../custom-hooks/useLocalState */ \"./custom-hooks/useLocalState.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../url */ \"./url.js\");\n/* harmony import */ var _SinglePost__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../SinglePost */ \"./Components/Post/SinglePost/SinglePost.tsx\");\n\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/Post/SinglePost/CommentBox/CommentBox.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar MAX_CHARACTER_COUNT = 200;\n\nvar CommentBox = function CommentBox(_ref) {\n  _s();\n\n  var postId = _ref.postId;\n\n  var _useLocalState = Object(_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"user\", \"\"),\n      _useLocalState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useLocalState, 1),\n      user = _useLocalState2[0];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      comment = _useState[0],\n      setComment = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      isSending = _useState2[0],\n      setIsSending = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      showLoginAlert = _useState3[0],\n      setShowLoginAlert = _useState3[1];\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useContext\"])(_SinglePost__WEBPACK_IMPORTED_MODULE_8__[\"CommentsCountContext\"]),\n      setCommentsCount = _useContext.setCommentsCount;\n\n  var classes = useStyles({\n    comment: comment\n  });\n\n  var handleSubmit = function handleSubmit() {\n    if (!user.token) {\n      showAlert();\n      return;\n    }\n\n    if (comment.length > MAX_CHARACTER_COUNT) return;\n\n    if (comment.length == 0) {\n      showAlert();\n    }\n  };\n\n  var handleChange = function handleChange(e) {\n    setComment(e.target.value);\n  };\n\n  var handleEnter = function handleEnter(e) {\n    if (e.key === \"Enter\" && comment.length > 0) {\n      handleSubmit();\n    }\n  };\n\n  var postComment = function postComment() {\n    axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(\"\".concat(_url__WEBPACK_IMPORTED_MODULE_7__[\"backend_url\"], \"/api/post/comment/store\"), {\n      post_id: postId,\n      comment: comment\n    }, {\n      headers: {\n        Accept: \"application/json\",\n        Authorization: \"Bearer \".concat(user.token)\n      }\n    }).then(function (response) {\n      console.log(response.data);\n      setCommentsCount(function (count) {\n        return count + 1;\n      });\n    });\n  };\n\n  var showAlert = function showAlert() {\n    setShowLoginAlert(true);\n    setTimeout(function () {\n      setShowLoginAlert(false);\n    }, 3000);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Container, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Avatar\"], {\n      src: user === null || user === void 0 ? void 0 : user.picture,\n      style: {\n        width: 35,\n        height: 35,\n        borderRadius: \"50%\",\n        marginRight: \"16px\"\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(InputContainer, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        placeholder: user.token ? \"Tell us what you think about this post...\" : \"Login to post a comment!\",\n        value: comment,\n        onChange: handleChange,\n        onKeyDown: handleEnter,\n        style: {\n          width: \"100%\",\n          padding: \"12px\",\n          marginRight: \"16px\",\n          border: \"1px solid black\"\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: classes.charactersCount,\n        children: \"\".concat(comment.length, \"/\").concat(MAX_CHARACTER_COUNT)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(ImageContainer, {\n      children: isSending ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"CircularProgress\"], {\n        size: 25,\n        color: \"inherit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 11\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        src: \"/assets/send_icon.svg\",\n        width: 25,\n        height: 25,\n        onClick: handleSubmit\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(LoginAlert, {\n      anchorOrigin: {\n        vertical: \"top\",\n        horizontal: \"center\"\n      },\n      open: showLoginAlert,\n      message: !user.token ? \"Login To Post A Comment!\" : comment.length == 0 ? \"Comment Cannot Be Empty\" : \"Some Error Occurred\"\n    }, postId, false, {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 84,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(CommentBox, \"XEczvVXBeBgaf11s0W2IUzA61Gc=\", false, function () {\n  return [_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_4__[\"default\"], useStyles];\n});\n\n_c = CommentBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommentBox);\nvar Container = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])({\n  root: {\n    width: \"100%\",\n    display: \"flex\",\n    marginTop: \"1.5rem\",\n    alignItems: \"center\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"]);\nvar ImageContainer = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])({\n  root: {\n    display: \"inline-flex\",\n    width: 35,\n    alignItems: \"center\",\n    justifyContent: \"space-between\",\n    cursor: \"pointer\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"]);\nvar InputContainer = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])({\n  root: {\n    position: \"relative\",\n    display: \"flex\",\n    alignItems: \"center\",\n    width: \"100%\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"]);\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])({\n  charactersCount: {\n    position: \"absolute\",\n    bottom: -22,\n    right: 20,\n    fontSize: \"0.8rem\",\n    fontWeight: 700,\n    color: function color(props) {\n      var comment = props.comment;\n\n      if (comment.length > MAX_CHARACTER_COUNT) {\n        return \"red\";\n      }\n\n      return \"grey\";\n    }\n  }\n});\nvar LoginAlert = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])({\n  root: {\n    zIndex: 20000\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Snackbar\"]);\n\nvar _c;\n\n$RefreshReg$(_c, \"CommentBox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qb3N0L1NpbmdsZVBvc3QvQ29tbWVudEJveC9Db21tZW50Qm94LnRzeD80OGFkIl0sIm5hbWVzIjpbIk1BWF9DSEFSQUNURVJfQ09VTlQiLCJDb21tZW50Qm94IiwicG9zdElkIiwidXNlTG9jYWxTdGF0ZSIsInVzZXIiLCJ1c2VTdGF0ZSIsImNvbW1lbnQiLCJzZXRDb21tZW50IiwiaXNTZW5kaW5nIiwic2V0SXNTZW5kaW5nIiwic2hvd0xvZ2luQWxlcnQiLCJzZXRTaG93TG9naW5BbGVydCIsInVzZUNvbnRleHQiLCJDb21tZW50c0NvdW50Q29udGV4dCIsInNldENvbW1lbnRzQ291bnQiLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwiaGFuZGxlU3VibWl0IiwidG9rZW4iLCJzaG93QWxlcnQiLCJsZW5ndGgiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVFbnRlciIsImtleSIsInBvc3RDb21tZW50IiwiYXhpb3MiLCJwb3N0IiwiYmFja2VuZF91cmwiLCJwb3N0X2lkIiwiaGVhZGVycyIsIkFjY2VwdCIsIkF1dGhvcml6YXRpb24iLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImNvdW50Iiwic2V0VGltZW91dCIsInBpY3R1cmUiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsIm1hcmdpblJpZ2h0IiwicGFkZGluZyIsImJvcmRlciIsImNoYXJhY3RlcnNDb3VudCIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsIkNvbnRhaW5lciIsIndpdGhTdHlsZXMiLCJyb290IiwiZGlzcGxheSIsIm1hcmdpblRvcCIsImFsaWduSXRlbXMiLCJCb3giLCJJbWFnZUNvbnRhaW5lciIsImp1c3RpZnlDb250ZW50IiwiY3Vyc29yIiwiSW5wdXRDb250YWluZXIiLCJwb3NpdGlvbiIsIm1ha2VTdHlsZXMiLCJib3R0b20iLCJyaWdodCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImNvbG9yIiwicHJvcHMiLCJMb2dpbkFsZXJ0IiwiekluZGV4IiwiU25hY2tiYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBUUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBTUEsSUFBTUEsbUJBQW1CLEdBQUcsR0FBNUI7O0FBRUEsSUFBTUMsVUFBNEIsR0FBRyxTQUEvQkEsVUFBK0IsT0FBZ0I7QUFBQTs7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBQUEsdUJBQ3BDQywyRUFBYSxDQUFDLE1BQUQsRUFBUyxFQUFULENBRHVCO0FBQUE7QUFBQSxNQUM1Q0MsSUFENEM7O0FBQUEsa0JBRXJCQyxzREFBUSxDQUFTLEVBQVQsQ0FGYTtBQUFBLE1BRTVDQyxPQUY0QztBQUFBLE1BRW5DQyxVQUZtQzs7QUFBQSxtQkFHakJGLHNEQUFRLENBQVUsS0FBVixDQUhTO0FBQUEsTUFHNUNHLFNBSDRDO0FBQUEsTUFHakNDLFlBSGlDOztBQUFBLG1CQUlQSixzREFBUSxDQUFVLEtBQVYsQ0FKRDtBQUFBLE1BSTVDSyxjQUo0QztBQUFBLE1BSTVCQyxpQkFKNEI7O0FBQUEsb0JBTXRCQyx3REFBVSxDQUFDQyxnRUFBRCxDQU5ZO0FBQUEsTUFNM0NDLGdCQU4yQyxlQU0zQ0EsZ0JBTjJDOztBQVFuRCxNQUFNQyxPQUFPLEdBQUdDLFNBQVMsQ0FBQztBQUFFVixXQUFPLEVBQVBBO0FBQUYsR0FBRCxDQUF6Qjs7QUFFQSxNQUFNVyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLFFBQUksQ0FBQ2IsSUFBSSxDQUFDYyxLQUFWLEVBQWlCO0FBQ2ZDLGVBQVM7QUFDVDtBQUNEOztBQUVELFFBQUliLE9BQU8sQ0FBQ2MsTUFBUixHQUFpQnBCLG1CQUFyQixFQUEwQzs7QUFDMUMsUUFBSU0sT0FBTyxDQUFDYyxNQUFSLElBQWtCLENBQXRCLEVBQXlCO0FBQ3ZCRCxlQUFTO0FBQ1Y7QUFDRixHQVZEOztBQVlBLE1BQU1FLFlBQVksR0FB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RWZFLFVBQU0sRUFBRSxDQUFDLEVBRk07QUFHZkMsU0FBSyxFQUFFLEVBSFE7QUFJZkMsWUFBUSxFQUFFLFFBSks7QUFLZkMsY0FBVSxFQUFFLEdBTEc7QUFNZkMsU0FBSyxFQUFFLGVBQUNDLEtBQUQsRUFBZ0M7QUFBQSxVQUM3QmhFLE9BRDZCLEdBQ2pCZ0UsS0FEaUIsQ0FDN0JoRSxPQUQ2Qjs7QUFFckMsVUFBSUEsT0FBTyxDQUFDYyxNQUFSLEdBQWlCcEIsbUJBQXJCLEVBQTBDO0FBQ3hDLGVBQU8sS0FBUDtBQUNEOztBQUVELGFBQU8sTUFBUDtBQUNEO0FBYmM7QUFEVSxDQUFELENBQTVCO0FBa0JBLElBQU11RSxVQUFVLEdBQUdsQixvRUFBVSxDQUFDO0FBQzVCQyxNQUFJLEVBQUU7QUFDSmtCLFVBQU0sRUFBRTtBQURKO0FBRHNCLENBQUQsQ0FBVixDQUloQkMsMERBSmdCLENBQW5CIiwiZmlsZSI6Ii4vQ29tcG9uZW50cy9Qb3N0L1NpbmdsZVBvc3QvQ29tbWVudEJveC9Db21tZW50Qm94LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEF2YXRhcixcbiAgQm94LFxuICBDaXJjdWxhclByb2dyZXNzLFxuICBtYWtlU3R5bGVzLFxuICBTbmFja2JhcixcbiAgd2l0aFN0eWxlcyxcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VMb2NhbFN0YXRlIGZyb20gXCIuLi8uLi8uLi8uLi9jdXN0b20taG9va3MvdXNlTG9jYWxTdGF0ZVwiO1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGJhY2tlbmRfdXJsIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3VybFwiO1xuaW1wb3J0IHsgQ29tbWVudHNDb3VudENvbnRleHQgfSBmcm9tIFwiLi4vU2luZ2xlUG9zdFwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgcG9zdElkOiBzdHJpbmc7XG59XG5cbmNvbnN0IE1BWF9DSEFSQUNURVJfQ09VTlQgPSAyMDA7XG5cbmNvbnN0IENvbW1lbnRCb3g6IFJlYWN0LkZDPElQcm9wcz4gPSAoeyBwb3N0SWQgfSkgPT4ge1xuICBjb25zdCBbdXNlcl0gPSB1c2VMb2NhbFN0YXRlKFwidXNlclwiLCBcIlwiKTtcbiAgY29uc3QgW2NvbW1lbnQsIHNldENvbW1lbnRdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3QgW2lzU2VuZGluZywgc2V0SXNTZW5kaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW3Nob3dMb2dpbkFsZXJ0LCBzZXRTaG93TG9naW5BbGVydF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3QgeyBzZXRDb21tZW50c0NvdW50IH0gPSB1c2VDb250ZXh0KENvbW1lbnRzQ291bnRDb250ZXh0KTtcblxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKHsgY29tbWVudCB9KTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XG4gICAgaWYgKCF1c2VyLnRva2VuKSB7XG4gICAgICBzaG93QWxlcnQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY29tbWVudC5sZW5ndGggPiBNQVhfQ0hBUkFDVEVSX0NPVU5UKSByZXR1cm47XG4gICAgaWYgKGNvbW1lbnQubGVuZ3RoID09IDApIHtcbiAgICAgIHNob3dBbGVydCgpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgc2V0Q29tbWVudChlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRW50ZXIgPSAoZTogYW55KSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIgJiYgY29tbWVudC5sZW5ndGggPiAwKSB7XG4gICAgICBoYW5kbGVTdWJtaXQoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcG9zdENvbW1lbnQgPSAoKSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KFxuICAgICAgICBgJHtiYWNrZW5kX3VybH0vYXBpL3Bvc3QvY29tbWVudC9zdG9yZWAsXG4gICAgICAgIHtcbiAgICAgICAgICBwb3N0X2lkOiBwb3N0SWQsXG4gICAgICAgICAgY29tbWVudDogY29tbWVudCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dXNlci50b2tlbn1gLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgc2V0Q29tbWVudHNDb3VudCgoY291bnQpID0+IGNvdW50ICsgMSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzaG93QWxlcnQgPSAoKSA9PiB7XG4gICAgc2V0U2hvd0xvZ2luQWxlcnQodHJ1ZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRTaG93TG9naW5BbGVydChmYWxzZSk7XG4gICAgfSwgMzAwMCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEF2YXRhclxuICAgICAgICBzcmM9e3VzZXI/LnBpY3R1cmV9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgd2lkdGg6IDM1LFxuICAgICAgICAgIGhlaWdodDogMzUsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjE2cHhcIixcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8SW5wdXRDb250YWluZXI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17XG4gICAgICAgICAgICB1c2VyLnRva2VuXG4gICAgICAgICAgICAgID8gXCJUZWxsIHVzIHdoYXQgeW91IHRoaW5rIGFib3V0IHRoaXMgcG9zdC4uLlwiXG4gICAgICAgICAgICAgIDogXCJMb2dpbiB0byBwb3N0IGEgY29tbWVudCFcIlxuICAgICAgICAgIH1cbiAgICAgICAgICB2YWx1ZT17Y29tbWVudH1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlRW50ZXJ9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMTJweFwiLFxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMTZweFwiLFxuICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBibGFja1wiLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2hhcmFjdGVyc0NvdW50fVxuICAgICAgICA+e2Ake2NvbW1lbnQubGVuZ3RofS8ke01BWF9DSEFSQUNURVJfQ09VTlR9YH08L2Rpdj5cbiAgICAgIDwvSW5wdXRDb250YWluZXI+XG4gICAgICA8SW1hZ2VDb250YWluZXI+XG4gICAgICAgIHtpc1NlbmRpbmcgPyAoXG4gICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3Mgc2l6ZT17MjV9IGNvbG9yPVwiaW5oZXJpdFwiIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9e2AvYXNzZXRzL3NlbmRfaWNvbi5zdmdgfVxuICAgICAgICAgICAgd2lkdGg9ezI1fVxuICAgICAgICAgICAgaGVpZ2h0PXsyNX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9JbWFnZUNvbnRhaW5lcj5cblxuICAgICAgPExvZ2luQWxlcnRcbiAgICAgICAga2V5PXtwb3N0SWR9XG4gICAgICAgIGFuY2hvck9yaWdpbj17eyB2ZXJ0aWNhbDogXCJ0b3BcIiwgaG9yaXpvbnRhbDogXCJjZW50ZXJcIiB9fVxuICAgICAgICBvcGVuPXtzaG93TG9naW5BbGVydH1cbiAgICAgICAgbWVzc2FnZT17XG4gICAgICAgICAgIXVzZXIudG9rZW5cbiAgICAgICAgICAgID8gXCJMb2dpbiBUbyBQb3N0IEEgQ29tbWVudCFcIlxuICAgICAgICAgICAgOiBjb21tZW50Lmxlbmd0aCA9PSAwXG4gICAgICAgICAgICA/IFwiQ29tbWVudCBDYW5ub3QgQmUgRW1wdHlcIlxuICAgICAgICAgICAgOiBcIlNvbWUgRXJyb3IgT2NjdXJyZWRcIlxuICAgICAgICB9XG4gICAgICAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudEJveDtcblxuY29uc3QgQ29udGFpbmVyID0gd2l0aFN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgbWFyZ2luVG9wOiBcIjEuNXJlbVwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIH0sXG59KShCb3gpO1xuXG5jb25zdCBJbWFnZUNvbnRhaW5lciA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogXCJpbmxpbmUtZmxleFwiLFxuICAgIHdpZHRoOiAzNSxcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICB9LFxufSkoQm94KTtcblxuY29uc3QgSW5wdXRDb250YWluZXIgPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gIH0sXG59KShCb3gpO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgY2hhcmFjdGVyc0NvdW50OiB7XG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICBib3R0b206IC0yMixcbiAgICByaWdodDogMjAsXG4gICAgZm9udFNpemU6IFwiMC44cmVtXCIsXG4gICAgZm9udFdlaWdodDogNzAwLFxuICAgIGNvbG9yOiAocHJvcHM6IHsgY29tbWVudDogc3RyaW5nIH0pID0+IHtcbiAgICAgIGNvbnN0IHsgY29tbWVudCB9ID0gcHJvcHM7XG4gICAgICBpZiAoY29tbWVudC5sZW5ndGggPiBNQVhfQ0hBUkFDVEVSX0NPVU5UKSB7XG4gICAgICAgIHJldHVybiBcInJlZFwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gXCJncmV5XCI7XG4gICAgfSxcbiAgfSxcbn0pO1xuXG5jb25zdCBMb2dpbkFsZXJ0ID0gd2l0aFN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICB6SW5kZXg6IDIwMDAwLFxuICB9LFxufSkoU25hY2tiYXIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/Post/SinglePost/CommentBox/CommentBox.tsx\n");

/***/ })

})