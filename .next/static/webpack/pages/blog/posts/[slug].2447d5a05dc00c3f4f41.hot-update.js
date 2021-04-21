webpackHotUpdate_N_E("pages/blog/posts/[slug]",{

/***/ "./Components/Post/SinglePost/CommentsSection/Comment/RepliesSection/ReplyBox/ReplyBox.tsx":
/*!*************************************************************************************************!*\
  !*** ./Components/Post/SinglePost/CommentsSection/Comment/RepliesSection/ReplyBox/ReplyBox.tsx ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../custom-hooks/useLocalState */ \"./custom-hooks/useLocalState.ts\");\n/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../url */ \"./url.js\");\n\n\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/Post/SinglePost/CommentsSection/Comment/RepliesSection/ReplyBox/ReplyBox.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar MAX_CHARACTER_COUNT = 200;\n\nvar ReplyBox = function ReplyBox(_ref) {\n  _s();\n\n  var commentId = _ref.commentId,\n      setReplies = _ref.setReplies,\n      setComment = _ref.setComment;\n\n  var _useLocalState = Object(_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"user\", \"\"),\n      _useLocalState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useLocalState, 1),\n      user = _useLocalState2[0];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(\"\"),\n      reply = _useState[0],\n      setReply = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      isSending = _useState2[0],\n      setIsSending = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      showLoginAlert = _useState3.showLoginAlert;\n\n  var classes = useStyles({\n    reply: reply\n  });\n\n  var handleSubmit = function handleSubmit() {\n    if (!user || !user.token) {\n      showAlert();\n      return;\n    }\n\n    if (reply.length > MAX_CHARACTER_COUNT) return;\n\n    if (reply.length == 0) {\n      showAlert();\n      return;\n    }\n\n    postReply();\n  };\n\n  var handleChange = function handleChange(e) {\n    setReply(e.target.value);\n  };\n\n  var handleEnter = function handleEnter(e) {\n    if (e.key === \"Enter\" && reply.length > 0) {\n      handleSubmit();\n    }\n  };\n\n  var postReply = function postReply() {\n    setIsSending(true);\n    axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(\"\".concat(_url__WEBPACK_IMPORTED_MODULE_8__[\"backend_url\"], \"/api/comment/reply/store\"), {\n      comment_id: commentId,\n      comment: reply\n    }, {\n      headers: {\n        Accept: \"application/json\",\n        Authorization: \"Bearer \".concat(user.token)\n      }\n    }).then(function (response) {\n      setIsSending(false);\n      setReplies(function (state) {\n        return [response.data].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state));\n      });\n      setReply(\"\");\n    });\n  };\n\n  var showAlert = function showAlert() {\n    setShowLoginAlert(true);\n    setTimeout(function () {\n      setShowLoginAlert(false);\n    }, 3000);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Container, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Avatar\"], {\n      src: user === null || user === void 0 ? void 0 : user.picture,\n      style: {\n        width: 35,\n        height: 35,\n        borderRadius: \"50%\",\n        marginRight: \"16px\"\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(InputContainer, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        placeholder: user ? \"Leave a reply to the comment!\" : \"Login to post a reply!\",\n        value: reply,\n        onChange: handleChange,\n        onKeyDown: handleEnter,\n        style: {\n          width: \"100%\",\n          padding: \"12px\",\n          marginRight: \"16px\",\n          border: \"1px solid black\"\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: classes.charactersCount,\n        children: \"\".concat(reply.length, \"/\").concat(MAX_CHARACTER_COUNT)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(ImageContainer, {\n      children: isSending ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"CircularProgress\"], {\n        size: 25,\n        color: \"inherit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 11\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        src: \"/assets/send_icon.svg\",\n        width: 25,\n        height: 25,\n        onClick: handleSubmit\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(LoginAlert, {\n      anchorOrigin: {\n        vertical: \"top\",\n        horizontal: \"center\"\n      },\n      open: showLoginAlert,\n      message: !user.token ? \"Login To Post A Reply!\" : reply.length == 0 ? \"Reply Cannot Be Empty\" : \"Some Error Occurred\"\n    }, commentId, false, {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 92,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ReplyBox, \"RLANs9pZ2FXwEx0jV8Y35EGyyEc=\", false, function () {\n  return [_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_7__[\"default\"], useStyles];\n});\n\n_c = ReplyBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReplyBox);\nvar Container = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"withStyles\"])({\n  root: {\n    width: \"100%\",\n    display: \"flex\",\n    marginTop: \"1.5rem\",\n    alignItems: \"center\",\n    marginBottom: \"1.5rem\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"]);\nvar ImageContainer = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"withStyles\"])({\n  root: {\n    display: \"inline-flex\",\n    width: 35,\n    alignItems: \"center\",\n    justifyContent: \"space-between\",\n    cursor: \"pointer\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"]);\nvar InputContainer = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"withStyles\"])({\n  root: {\n    position: \"relative\",\n    display: \"flex\",\n    alignItems: \"center\",\n    width: \"100%\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"]);\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"makeStyles\"])({\n  charactersCount: {\n    position: \"absolute\",\n    bottom: -22,\n    right: 20,\n    fontSize: \"0.8rem\",\n    fontWeight: 700,\n    color: function color(props) {\n      var reply = props.reply;\n\n      if (reply.length > MAX_CHARACTER_COUNT) {\n        return \"red\";\n      }\n\n      return \"grey\";\n    }\n  }\n});\nvar LoginAlert = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"withStyles\"])({\n  root: {\n    zIndex: 20000\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Snackbar\"]);\n\nvar _c;\n\n$RefreshReg$(_c, \"ReplyBox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qb3N0L1NpbmdsZVBvc3QvQ29tbWVudHNTZWN0aW9uL0NvbW1lbnQvUmVwbGllc1NlY3Rpb24vUmVwbHlCb3gvUmVwbHlCb3gudHN4PzZiYWIiXSwibmFtZXMiOlsiTUFYX0NIQVJBQ1RFUl9DT1VOVCIsIlJlcGx5Qm94IiwiY29tbWVudElkIiwic2V0UmVwbGllcyIsInNldENvbW1lbnQiLCJ1c2VMb2NhbFN0YXRlIiwidXNlciIsInVzZVN0YXRlIiwicmVwbHkiLCJzZXRSZXBseSIsImlzU2VuZGluZyIsInNldElzU2VuZGluZyIsInNob3dMb2dpbkFsZXJ0IiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsImhhbmRsZVN1Ym1pdCIsInRva2VuIiwic2hvd0FsZXJ0IiwibGVuZ3RoIiwicG9zdFJlcGx5IiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlRW50ZXIiLCJrZXkiLCJheGlvcyIsInBvc3QiLCJiYWNrZW5kX3VybCIsImNvbW1lbnRfaWQiLCJjb21tZW50IiwiaGVhZGVycyIsIkFjY2VwdCIsIkF1dGhvcml6YXRpb24iLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0ZSIsImRhdGEiLCJzZXRTaG93TG9naW5BbGVydCIsInNldFRpbWVvdXQiLCJwaWN0dXJlIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJtYXJnaW5SaWdodCIsInBhZGRpbmciLCJib3JkZXIiLCJjaGFyYWN0ZXJzQ291bnQiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJDb250YWluZXIiLCJ3aXRoU3R5bGVzIiwicm9vdCIsImRpc3BsYXkiLCJtYXJnaW5Ub3AiLCJhbGlnbkl0ZW1zIiwibWFyZ2luQm90dG9tIiwiQm94IiwiSW1hZ2VDb250YWluZXIiLCJqdXN0aWZ5Q29udGVudCIsImN1cnNvciIsIklucHV0Q29udGFpbmVyIiwicG9zaXRpb24iLCJtYWtlU3R5bGVzIiwiYm90dG9tIiwicmlnaHQiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJjb2xvciIsInByb3BzIiwiTG9naW5BbGVydCIsInpJbmRleCIsIlNuYWNrYmFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBVUEsSUFBTUEsbUJBQW1CLEdBQUcsR0FBNUI7O0FBRUEsSUFBTUMsUUFBMEIsR0FBRyxTQUE3QkEsUUFBNkIsT0FBMkM7QUFBQTs7QUFBQSxNQUF4Q0MsU0FBd0MsUUFBeENBLFNBQXdDO0FBQUEsTUFBN0JDLFVBQTZCLFFBQTdCQSxVQUE2QjtBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7O0FBQUEsdUJBQzdEQywyRUFBYSxDQUFDLE1BQUQsRUFBUyxFQUFULENBRGdEO0FBQUE7QUFBQSxNQUNyRUMsSUFEcUU7O0FBQUEsa0JBRWxEQyxzREFBUSxDQUFTLEVBQVQsQ0FGMEM7QUFBQSxNQUVyRUMsS0FGcUU7QUFBQSxNQUU5REMsUUFGOEQ7O0FBQUEsbUJBRzFDRixzREFBUSxDQUFVLEtBQVYsQ0FIa0M7QUFBQSxNQUdyRUcsU0FIcUU7QUFBQSxNQUcxREMsWUFIMEQ7O0FBQUEsbUJBSWxESixzREFBUSxDQUFVLEtBQVYsQ0FKMEM7QUFBQSxNQUlyRUssY0FKcUUsY0FJckVBLGNBSnFFOztBQU01RSxNQUFNQyxPQUFPLEdBQUdDLFNBQVMsQ0FBQztBQUFFTixTQUFLLEVBQUxBO0FBQUYsR0FBRCxDQUF6Qjs7QUFFQSxNQUFNTyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLFFBQUksQ0FBQ1QsSUFBRCxJQUFTLENBQUNBLElBQUksQ0FBQ1UsS0FBbkIsRUFBMEI7QUFDeEJDLGVBQVM7QUFDVDtBQUNEOztBQUVELFFBQUlULEtBQUssQ0FBQ1UsTUFBTixHQUFlbEIsbUJBQW5CLEVBQXdDOztBQUN4QyxRQUFJUSxLQUFLLENBQUNVLE1BQU4sSUFBZ0IsQ0FBcEIsRUFBdUI7QUFDckJELGVBQVM7QUFDVDtBQUNEOztBQUVE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LENBQVYsQ0FPcEJnQixxREFQb0IsQ0FBdkI7QUFTQSxJQUFNM0MsU0FBUyxHQUFHaUQsb0VBQVUsQ0FBQztBQUMzQmhCLGlCQUFlLEVBQUU7QUFDZmUsWUFBUSxFQUFFLFVBREs7QUFFZkUsVUFBTSxFQUFFLENBQUMsRUFGTTtBQUdmQyxTQUFLLEVBQUUsRUFIUTtBQUlmQyxZQUFRLEVBQUUsUUFKSztBQUtmQyxjQUFVLEVBQUUsR0FMRztBQU1mQyxTQUFLLEVBQUUsZUFBQ0MsS0FBRCxFQUE4QjtBQUFBLFVBQzNCN0QsS0FEMkIsR0FDakI2RCxLQURpQixDQUMzQjdELEtBRDJCOztBQUVuQyxVQUFJQSxLQUFLLENBQUNVLE1BQU4sR0FBZWxCLG1CQUFuQixFQUF3QztBQUN0QyxlQUFPLEtBQVA7QUFDRDs7QUFFRCxhQUFPLE1BQVA7QUFDRDtBQWJjO0FBRFUsQ0FBRCxDQUE1QjtBQWtCQSxJQUFNc0UsVUFBVSxHQUFHbkIsb0VBQVUsQ0FBQztBQUM1QkMsTUFBSSxFQUFFO0FBQ0ptQixVQUFNLEVBQUU7QUFESjtBQURzQixDQUFELENBQVYsQ0FJaEJDLDBEQUpnQixDQUFuQiIsImZpbGUiOiIuL0NvbXBvbmVudHMvUG9zdC9TaW5nbGVQb3N0L0NvbW1lbnRzU2VjdGlvbi9Db21tZW50L1JlcGxpZXNTZWN0aW9uL1JlcGx5Qm94L1JlcGx5Qm94LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEF2YXRhcixcbiAgQm94LFxuICBDaXJjdWxhclByb2dyZXNzLFxuICBtYWtlU3R5bGVzLFxuICBTbmFja2JhcixcbiAgd2l0aFN0eWxlcyxcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgdXNlTG9jYWxTdGF0ZSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY3VzdG9tLWhvb2tzL3VzZUxvY2FsU3RhdGVcIjtcbmltcG9ydCB7IGJhY2tlbmRfdXJsIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3VybFwiO1xuaW1wb3J0IElQb3N0Q29tbWVudFJlcGx5IGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9Nb2RlbHMvSVBvc3RDb21tZW50UmVwbHlcIjtcbmltcG9ydCBJUG9zdENvbW1lbnQgZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL01vZGVscy9JUG9zdENvbW1lbnRcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGNvbW1lbnRJZDogc3RyaW5nO1xuICBzZXRSZXBsaWVzOiBGdW5jdGlvbjtcbiAgc2V0Q29tbWVudDogRnVuY3Rpb247XG59XG5cbmNvbnN0IE1BWF9DSEFSQUNURVJfQ09VTlQgPSAyMDA7XG5cbmNvbnN0IFJlcGx5Qm94OiBSZWFjdC5GQzxJUHJvcHM+ID0gKHsgY29tbWVudElkLCBzZXRSZXBsaWVzLCBzZXRDb21tZW50IH0pID0+IHtcbiAgY29uc3QgW3VzZXJdID0gdXNlTG9jYWxTdGF0ZShcInVzZXJcIiwgXCJcIik7XG4gIGNvbnN0IFtyZXBseSwgc2V0UmVwbHldID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3QgW2lzU2VuZGluZywgc2V0SXNTZW5kaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3Qge3Nob3dMb2dpbkFsZXJ0LH0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcyh7IHJlcGx5IH0pO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcbiAgICBpZiAoIXVzZXIgfHwgIXVzZXIudG9rZW4pIHtcbiAgICAgIHNob3dBbGVydCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChyZXBseS5sZW5ndGggPiBNQVhfQ0hBUkFDVEVSX0NPVU5UKSByZXR1cm47XG4gICAgaWYgKHJlcGx5Lmxlbmd0aCA9PSAwKSB7XG4gICAgICBzaG93QWxlcnQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwb3N0UmVwbHkoKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgc2V0UmVwbHkoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUVudGVyID0gKGU6IGFueSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiICYmIHJlcGx5Lmxlbmd0aCA+IDApIHtcbiAgICAgIGhhbmRsZVN1Ym1pdCgpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBwb3N0UmVwbHkgPSAoKSA9PiB7XG4gICAgc2V0SXNTZW5kaW5nKHRydWUpO1xuICAgIGF4aW9zXG4gICAgICAucG9zdChcbiAgICAgICAgYCR7YmFja2VuZF91cmx9L2FwaS9jb21tZW50L3JlcGx5L3N0b3JlYCxcbiAgICAgICAge1xuICAgICAgICAgIGNvbW1lbnRfaWQ6IGNvbW1lbnRJZCxcbiAgICAgICAgICBjb21tZW50OiByZXBseSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dXNlci50b2tlbn1gLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBzZXRJc1NlbmRpbmcoZmFsc2UpO1xuXG4gICAgICAgIHNldFJlcGxpZXMoKHN0YXRlOiBJUG9zdENvbW1lbnRSZXBseVtdKSA9PiBbcmVzcG9uc2UuZGF0YSwgLi4uc3RhdGVdKTtcblxuICAgICAgICBzZXRSZXBseShcIlwiKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHNob3dBbGVydCA9ICgpID0+IHtcbiAgICBzZXRTaG93TG9naW5BbGVydCh0cnVlKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFNob3dMb2dpbkFsZXJ0KGZhbHNlKTtcbiAgICB9LCAzMDAwKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8QXZhdGFyXG4gICAgICAgIHNyYz17dXNlcj8ucGljdHVyZX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB3aWR0aDogMzUsXG4gICAgICAgICAgaGVpZ2h0OiAzNSxcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMTZweFwiLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxJbnB1dENvbnRhaW5lcj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtcbiAgICAgICAgICAgIHVzZXIgPyBcIkxlYXZlIGEgcmVwbHkgdG8gdGhlIGNvbW1lbnQhXCIgOiBcIkxvZ2luIHRvIHBvc3QgYSByZXBseSFcIlxuICAgICAgICAgIH1cbiAgICAgICAgICB2YWx1ZT17cmVwbHl9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICBvbktleURvd249e2hhbmRsZUVudGVyfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjEycHhcIixcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjE2cHhcIixcbiAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgYmxhY2tcIixcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNoYXJhY3RlcnNDb3VudH1cbiAgICAgICAgPntgJHtyZXBseS5sZW5ndGh9LyR7TUFYX0NIQVJBQ1RFUl9DT1VOVH1gfTwvZGl2PlxuICAgICAgPC9JbnB1dENvbnRhaW5lcj5cbiAgICAgIDxJbWFnZUNvbnRhaW5lcj5cbiAgICAgICAge2lzU2VuZGluZyA/IChcbiAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyBzaXplPXsyNX0gY29sb3I9XCJpbmhlcml0XCIgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz17YC9hc3NldHMvc2VuZF9pY29uLnN2Z2B9XG4gICAgICAgICAgICB3aWR0aD17MjV9XG4gICAgICAgICAgICBoZWlnaHQ9ezI1fVxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L0ltYWdlQ29udGFpbmVyPlxuXG4gICAgICA8TG9naW5BbGVydFxuICAgICAgICBrZXk9e2NvbW1lbnRJZH1cbiAgICAgICAgYW5jaG9yT3JpZ2luPXt7IHZlcnRpY2FsOiBcInRvcFwiLCBob3Jpem9udGFsOiBcImNlbnRlclwiIH19XG4gICAgICAgIG9wZW49e3Nob3dMb2dpbkFsZXJ0fVxuICAgICAgICBtZXNzYWdlPXtcbiAgICAgICAgICAhdXNlci50b2tlblxuICAgICAgICAgICAgPyBcIkxvZ2luIFRvIFBvc3QgQSBSZXBseSFcIlxuICAgICAgICAgICAgOiByZXBseS5sZW5ndGggPT0gMFxuICAgICAgICAgICAgPyBcIlJlcGx5IENhbm5vdCBCZSBFbXB0eVwiXG4gICAgICAgICAgICA6IFwiU29tZSBFcnJvciBPY2N1cnJlZFwiXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXBseUJveDtcblxuY29uc3QgQ29udGFpbmVyID0gd2l0aFN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgbWFyZ2luVG9wOiBcIjEuNXJlbVwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgbWFyZ2luQm90dG9tOiBcIjEuNXJlbVwiLFxuICB9LFxufSkoQm94KTtcblxuY29uc3QgSW1hZ2VDb250YWluZXIgPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIixcbiAgICB3aWR0aDogMzUsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgfSxcbn0pKEJveCk7XG5cbmNvbnN0IElucHV0Q29udGFpbmVyID0gd2l0aFN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICB9LFxufSkoQm94KTtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIGNoYXJhY3RlcnNDb3VudDoge1xuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgYm90dG9tOiAtMjIsXG4gICAgcmlnaHQ6IDIwLFxuICAgIGZvbnRTaXplOiBcIjAuOHJlbVwiLFxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICBjb2xvcjogKHByb3BzOiB7IHJlcGx5OiBzdHJpbmcgfSkgPT4ge1xuICAgICAgY29uc3QgeyByZXBseSB9ID0gcHJvcHM7XG4gICAgICBpZiAocmVwbHkubGVuZ3RoID4gTUFYX0NIQVJBQ1RFUl9DT1VOVCkge1xuICAgICAgICByZXR1cm4gXCJyZWRcIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFwiZ3JleVwiO1xuICAgIH0sXG4gIH0sXG59KTtcblxuY29uc3QgTG9naW5BbGVydCA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgekluZGV4OiAyMDAwMCxcbiAgfSxcbn0pKFNuYWNrYmFyKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/Post/SinglePost/CommentsSection/Comment/RepliesSection/ReplyBox/ReplyBox.tsx\n");

/***/ })

})