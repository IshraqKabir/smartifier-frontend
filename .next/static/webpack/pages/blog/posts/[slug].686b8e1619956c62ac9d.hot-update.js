webpackHotUpdate_N_E("pages/blog/posts/[slug]",{

/***/ "./Components/Post/SinglePost/CommentsSection/Comment/RepliesSection/ReplyBox/ReplyBox.tsx":
/*!*************************************************************************************************!*\
  !*** ./Components/Post/SinglePost/CommentsSection/Comment/RepliesSection/ReplyBox/ReplyBox.tsx ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../custom-hooks/useLocalState */ \"./custom-hooks/useLocalState.ts\");\n/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../url */ \"./url.js\");\n\n\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/Post/SinglePost/CommentsSection/Comment/RepliesSection/ReplyBox/ReplyBox.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar MAX_CHARACTER_COUNT = 200;\n\nvar ReplyBox = function ReplyBox(_ref) {\n  _s();\n\n  var commentId = _ref.commentId,\n      setReplies = _ref.setReplies,\n      setComment = _ref.setComment;\n\n  var _useLocalState = Object(_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"user\", \"\"),\n      _useLocalState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useLocalState, 1),\n      user = _useLocalState2[0];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(\"\"),\n      reply = _useState[0],\n      setReply = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      isSending = _useState2[0],\n      setIsSending = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      showLoginAlert = _useState3[0],\n      setShowLoginAlert = _useState3[1];\n\n  var classes = useStyles({\n    reply: reply\n  });\n\n  var handleSubmit = function handleSubmit() {\n    if (!user.token) {\n      showAlert();\n      return;\n    }\n\n    if (reply.length > MAX_CHARACTER_COUNT) return;\n\n    if (reply.length == 0) {\n      showAlert();\n      return;\n    }\n\n    postReply();\n  };\n\n  var handleChange = function handleChange(e) {\n    setReply(e.target.value);\n  };\n\n  var handleEnter = function handleEnter(e) {\n    if (e.key === \"Enter\" && reply.length > 0) {\n      handleSubmit();\n    }\n  };\n\n  var postReply = function postReply() {\n    setIsSending(true);\n    axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(\"\".concat(_url__WEBPACK_IMPORTED_MODULE_8__[\"backend_url\"], \"/api/comment/reply/store\"), {\n      comment_id: commentId,\n      comment: reply\n    }, {\n      headers: {\n        Accept: \"application/json\",\n        Authorization: \"Bearer \".concat(user.token)\n      }\n    }).then(function (response) {\n      setIsSending(false);\n      setReplies(function (state) {\n        return [response.data].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state));\n      });\n      setComment(function (state) {\n        var comment = state;\n      });\n      setReply(\"\");\n    });\n  };\n\n  var showAlert = function showAlert() {\n    setShowLoginAlert(true);\n    setTimeout(function () {\n      setShowLoginAlert(false);\n    }, 3000);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Container, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Avatar\"], {\n      src: user === null || user === void 0 ? void 0 : user.picture,\n      style: {\n        width: 35,\n        height: 35,\n        borderRadius: \"50%\",\n        marginRight: \"16px\"\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(InputContainer, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        placeholder: user ? \"Tell us what you think about this post!\" : \"Login to post a reply!\",\n        value: reply,\n        onChange: handleChange,\n        onKeyDown: handleEnter,\n        style: {\n          width: \"100%\",\n          padding: \"12px\",\n          marginRight: \"16px\",\n          border: \"1px solid black\"\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: classes.charactersCount,\n        children: \"\".concat(reply.length, \"/\").concat(MAX_CHARACTER_COUNT)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(ImageContainer, {\n      children: isSending ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"CircularProgress\"], {\n        size: 25,\n        color: \"inherit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 130,\n        columnNumber: 11\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        src: \"/assets/send_icon.svg\",\n        width: 25,\n        height: 25,\n        onClick: handleSubmit\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 132,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(LoginAlert, {\n      anchorOrigin: {\n        vertical: \"top\",\n        horizontal: \"center\"\n      },\n      open: showLoginAlert,\n      message: !user.token ? \"Login To Post A Reply!\" : reply.length == 0 ? \"Reply Cannot Be Empty\" : \"Some Error Occurred\"\n    }, commentId, false, {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 96,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ReplyBox, \"HeQmFcfXJ73MjN1ALubVoBiaomE=\", false, function () {\n  return [_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_7__[\"default\"], useStyles];\n});\n\n_c = ReplyBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReplyBox);\nvar Container = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"withStyles\"])({\n  root: {\n    width: \"100%\",\n    display: \"flex\",\n    marginTop: \"1.5rem\",\n    alignItems: \"center\",\n    marginBottom: \"1.5rem\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"]);\nvar ImageContainer = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"withStyles\"])({\n  root: {\n    display: \"inline-flex\",\n    width: 35,\n    alignItems: \"center\",\n    justifyContent: \"space-between\",\n    cursor: \"pointer\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"]);\nvar InputContainer = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"withStyles\"])({\n  root: {\n    position: \"relative\",\n    display: \"flex\",\n    alignItems: \"center\",\n    width: \"100%\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"]);\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"makeStyles\"])({\n  charactersCount: {\n    position: \"absolute\",\n    bottom: -22,\n    right: 20,\n    fontSize: \"0.8rem\",\n    fontWeight: 700,\n    color: function color(props) {\n      var reply = props.reply;\n\n      if (reply.length > MAX_CHARACTER_COUNT) {\n        return \"red\";\n      }\n\n      return \"grey\";\n    }\n  }\n});\nvar LoginAlert = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"withStyles\"])({\n  root: {\n    zIndex: 20000\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Snackbar\"]);\n\nvar _c;\n\n$RefreshReg$(_c, \"ReplyBox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qb3N0L1NpbmdsZVBvc3QvQ29tbWVudHNTZWN0aW9uL0NvbW1lbnQvUmVwbGllc1NlY3Rpb24vUmVwbHlCb3gvUmVwbHlCb3gudHN4PzZiYWIiXSwibmFtZXMiOlsiTUFYX0NIQVJBQ1RFUl9DT1VOVCIsIlJlcGx5Qm94IiwiY29tbWVudElkIiwic2V0UmVwbGllcyIsInNldENvbW1lbnQiLCJ1c2VMb2NhbFN0YXRlIiwidXNlciIsInVzZVN0YXRlIiwicmVwbHkiLCJzZXRSZXBseSIsImlzU2VuZGluZyIsInNldElzU2VuZGluZyIsInNob3dMb2dpbkFsZXJ0Iiwic2V0U2hvd0xvZ2luQWxlcnQiLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwiaGFuZGxlU3VibWl0IiwidG9rZW4iLCJzaG93QWxlcnQiLCJsZW5ndGgiLCJwb3N0UmVwbHkiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVFbnRlciIsImtleSIsImF4aW9zIiwicG9zdCIsImJhY2tlbmRfdXJsIiwiY29tbWVudF9pZCIsImNvbW1lbnQiLCJoZWFkZXJzIiwiQWNjZXB0IiwiQXV0aG9yaXphdGlvbiIsInRoZW4iLCJyZXNwb25zZSIsInN0YXRlIiwiZGF0YSIsInNldFRpbWVvdXQiLCJwaWN0dXJlIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJtYXJnaW5SaWdodCIsInBhZGRpbmciLCJib3JkZXIiLCJjaGFyYWN0ZXJzQ291bnQiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJDb250YWluZXIiLCJ3aXRoU3R5bGVzIiwicm9vdCIsImRpc3BsYXkiLCJtYXJnaW5Ub3AiLCJhbGlnbkl0ZW1zIiwibWFyZ2luQm90dG9tIiwiQm94IiwiSW1hZ2VDb250YWluZXIiLCJqdXN0aWZ5Q29udGVudCIsImN1cnNvciIsIklucHV0Q29udGFpbmVyIiwicG9zaXRpb24iLCJtYWtlU3R5bGVzIiwiYm90dG9tIiwicmlnaHQiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJjb2xvciIsInByb3BzIiwiTG9naW5BbGVydCIsInpJbmRleCIsIlNuYWNrYmFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBVUEsSUFBTUEsbUJBQW1CLEdBQUcsR0FBNUI7O0FBRUEsSUFBTUMsUUFBMEIsR0FBRyxTQUE3QkEsUUFBNkIsT0FBMkM7QUFBQTs7QUFBQSxNQUF4Q0MsU0FBd0MsUUFBeENBLFNBQXdDO0FBQUEsTUFBN0JDLFVBQTZCLFFBQTdCQSxVQUE2QjtBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7O0FBQUEsdUJBQzdEQywyRUFBYSxDQUFDLE1BQUQsRUFBUyxFQUFULENBRGdEO0FBQUE7QUFBQSxNQUNyRUMsSUFEcUU7O0FBQUEsa0JBRWxEQyxzREFBUSxDQUFTLEVBQVQsQ0FGMEM7QUFBQSxNQUVyRUMsS0FGcUU7QUFBQSxNQUU5REMsUUFGOEQ7O0FBQUEsbUJBRzFDRixzREFBUSxDQUFVLEtBQVYsQ0FIa0M7QUFBQSxNQUdyRUcsU0FIcUU7QUFBQSxNQUcxREMsWUFIMEQ7O0FBQUEsbUJBSWhDSixzREFBUSxDQUFVLEtBQVYsQ0FKd0I7QUFBQSxNQUlyRUssY0FKcUU7QUFBQSxNQUlyREMsaUJBSnFEOztBQU01RSxNQUFNQyxPQUFPLEdBQUdDLFNBQVMsQ0FBQztBQUFFUCxTQUFLLEVBQUxBO0FBQUYsR0FBRCxDQUF6Qjs7QUFFQSxNQUFNUSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLFFBQUksQ0FBQ1YsSUFBSSxDQUFDVyxLQUFWLEVBQWlCO0FBQ2ZDLGVBQVM7QUFDVDtBQUNEOztBQUVELFFBQUlWLEtBQUssQ0FBQ1csTUFBTixHQUFlbkIsbUJBQW5CLEVBQXdDOztBQUN4QyxRQUFJUSxLQUFLLENBQUNXLE1BQU4sSUFBZ0IsQ0FBcEIsRUFBdUI7QUFDckJELGVBQVM7QUFDVDtBQUNEOztBQUVERSxhQUFTO0FBQ1Ys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LFdBQU8sRUFBRSxNQUZMO0FBR0pFLGNBQVUsRUFBRSxRQUhSO0FBSUpkLFNBQUssRUFBRTtBQUpIO0FBRDBCLENBQUQsQ0FBVixDQU9wQmdCLHFEQVBvQixDQUF2QjtBQVNBLElBQU0xQyxTQUFTLEdBQUdnRCxvRUFBVSxDQUFDO0FBQzNCaEIsaUJBQWUsRUFBRTtBQUNmZSxZQUFRLEVBQUUsVUFESztBQUVmRSxVQUFNLEVBQUUsQ0FBQyxFQUZNO0FBR2ZDLFNBQUssRUFBRSxFQUhRO0FBSWZDLFlBQVEsRUFBRSxRQUpLO0FBS2ZDLGNBQVUsRUFBRSxHQUxHO0FBTWZDLFNBQUssRUFBRSxlQUFDQyxLQUFELEVBQThCO0FBQUEsVUFDM0I3RCxLQUQyQixHQUNqQjZELEtBRGlCLENBQzNCN0QsS0FEMkI7O0FBRW5DLFVBQUlBLEtBQUssQ0FBQ1csTUFBTixHQUFlbkIsbUJBQW5CLEVBQXdDO0FBQ3RDLGVBQU8sS0FBUDtBQUNEOztBQUVELGFBQU8sTUFBUDtBQUNEO0FBYmM7QUFEVSxDQUFELENBQTVCO0FBa0JBLElBQU1zRSxVQUFVLEdBQUduQixvRUFBVSxDQUFDO0FBQzVCQyxNQUFJLEVBQUU7QUFDSm1CLFVBQU0sRUFBRTtBQURKO0FBRHNCLENBQUQsQ0FBVixDQUloQkMsMERBSmdCLENBQW5CIiwiZmlsZSI6Ii4vQ29tcG9uZW50cy9Qb3N0L1NpbmdsZVBvc3QvQ29tbWVudHNTZWN0aW9uL0NvbW1lbnQvUmVwbGllc1NlY3Rpb24vUmVwbHlCb3gvUmVwbHlCb3gudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQXZhdGFyLFxuICBCb3gsXG4gIENpcmN1bGFyUHJvZ3Jlc3MsXG4gIG1ha2VTdHlsZXMsXG4gIFNuYWNrYmFyLFxuICB3aXRoU3R5bGVzLFxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB1c2VMb2NhbFN0YXRlIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jdXN0b20taG9va3MvdXNlTG9jYWxTdGF0ZVwiO1xuaW1wb3J0IHsgYmFja2VuZF91cmwgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXJsXCI7XG5pbXBvcnQgSVBvc3RDb21tZW50UmVwbHkgZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL01vZGVscy9JUG9zdENvbW1lbnRSZXBseVwiO1xuaW1wb3J0IElQb3N0Q29tbWVudCBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vTW9kZWxzL0lQb3N0Q29tbWVudFwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgY29tbWVudElkOiBzdHJpbmc7XG4gIHNldFJlcGxpZXM6IEZ1bmN0aW9uO1xuICBzZXRDb21tZW50OiBGdW5jdGlvbjtcbn1cblxuY29uc3QgTUFYX0NIQVJBQ1RFUl9DT1VOVCA9IDIwMDtcblxuY29uc3QgUmVwbHlCb3g6IFJlYWN0LkZDPElQcm9wcz4gPSAoeyBjb21tZW50SWQsIHNldFJlcGxpZXMsIHNldENvbW1lbnQgfSkgPT4ge1xuICBjb25zdCBbdXNlcl0gPSB1c2VMb2NhbFN0YXRlKFwidXNlclwiLCBcIlwiKTtcbiAgY29uc3QgW3JlcGx5LCBzZXRSZXBseV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbaXNTZW5kaW5nLCBzZXRJc1NlbmRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbc2hvd0xvZ2luQWxlcnQsIHNldFNob3dMb2dpbkFsZXJ0XSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKHsgcmVwbHkgfSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xuICAgIGlmICghdXNlci50b2tlbikge1xuICAgICAgc2hvd0FsZXJ0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHJlcGx5Lmxlbmd0aCA+IE1BWF9DSEFSQUNURVJfQ09VTlQpIHJldHVybjtcbiAgICBpZiAocmVwbHkubGVuZ3RoID09IDApIHtcbiAgICAgIHNob3dBbGVydCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHBvc3RSZXBseSgpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICBzZXRSZXBseShlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRW50ZXIgPSAoZTogYW55KSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIgJiYgcmVwbHkubGVuZ3RoID4gMCkge1xuICAgICAgaGFuZGxlU3VibWl0KCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHBvc3RSZXBseSA9ICgpID0+IHtcbiAgICBzZXRJc1NlbmRpbmcodHJ1ZSk7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KFxuICAgICAgICBgJHtiYWNrZW5kX3VybH0vYXBpL2NvbW1lbnQvcmVwbHkvc3RvcmVgLFxuICAgICAgICB7XG4gICAgICAgICAgY29tbWVudF9pZDogY29tbWVudElkLFxuICAgICAgICAgIGNvbW1lbnQ6IHJlcGx5LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt1c2VyLnRva2VufWAsXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHNldElzU2VuZGluZyhmYWxzZSk7XG5cbiAgICAgICAgc2V0UmVwbGllcygoc3RhdGU6IElQb3N0Q29tbWVudFJlcGx5W10pID0+IFtyZXNwb25zZS5kYXRhLCAuLi5zdGF0ZV0pO1xuXG4gICAgICAgIHNldENvbW1lbnQoKHN0YXRlOiBJUG9zdENvbW1lbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBjb21tZW50OiBJUG9zdENvbW1lbnQgPSBzdGF0ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0UmVwbHkoXCJcIik7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzaG93QWxlcnQgPSAoKSA9PiB7XG4gICAgc2V0U2hvd0xvZ2luQWxlcnQodHJ1ZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRTaG93TG9naW5BbGVydChmYWxzZSk7XG4gICAgfSwgMzAwMCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEF2YXRhclxuICAgICAgICBzcmM9e3VzZXI/LnBpY3R1cmV9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgd2lkdGg6IDM1LFxuICAgICAgICAgIGhlaWdodDogMzUsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjE2cHhcIixcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8SW5wdXRDb250YWluZXI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17XG4gICAgICAgICAgICB1c2VyXG4gICAgICAgICAgICAgID8gXCJUZWxsIHVzIHdoYXQgeW91IHRoaW5rIGFib3V0IHRoaXMgcG9zdCFcIlxuICAgICAgICAgICAgICA6IFwiTG9naW4gdG8gcG9zdCBhIHJlcGx5IVwiXG4gICAgICAgICAgfVxuICAgICAgICAgIHZhbHVlPXtyZXBseX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlRW50ZXJ9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMTJweFwiLFxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMTZweFwiLFxuICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBibGFja1wiLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2hhcmFjdGVyc0NvdW50fVxuICAgICAgICA+e2Ake3JlcGx5Lmxlbmd0aH0vJHtNQVhfQ0hBUkFDVEVSX0NPVU5UfWB9PC9kaXY+XG4gICAgICA8L0lucHV0Q29udGFpbmVyPlxuICAgICAgPEltYWdlQ29udGFpbmVyPlxuICAgICAgICB7aXNTZW5kaW5nID8gKFxuICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIHNpemU9ezI1fSBjb2xvcj1cImluaGVyaXRcIiAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPXtgL2Fzc2V0cy9zZW5kX2ljb24uc3ZnYH1cbiAgICAgICAgICAgIHdpZHRoPXsyNX1cbiAgICAgICAgICAgIGhlaWdodD17MjV9XG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvSW1hZ2VDb250YWluZXI+XG5cbiAgICAgIDxMb2dpbkFsZXJ0XG4gICAgICAgIGtleT17Y29tbWVudElkfVxuICAgICAgICBhbmNob3JPcmlnaW49e3sgdmVydGljYWw6IFwidG9wXCIsIGhvcml6b250YWw6IFwiY2VudGVyXCIgfX1cbiAgICAgICAgb3Blbj17c2hvd0xvZ2luQWxlcnR9XG4gICAgICAgIG1lc3NhZ2U9e1xuICAgICAgICAgICF1c2VyLnRva2VuXG4gICAgICAgICAgICA/IFwiTG9naW4gVG8gUG9zdCBBIFJlcGx5IVwiXG4gICAgICAgICAgICA6IHJlcGx5Lmxlbmd0aCA9PSAwXG4gICAgICAgICAgICA/IFwiUmVwbHkgQ2Fubm90IEJlIEVtcHR5XCJcbiAgICAgICAgICAgIDogXCJTb21lIEVycm9yIE9jY3VycmVkXCJcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcGx5Qm94O1xuXG5jb25zdCBDb250YWluZXIgPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBtYXJnaW5Ub3A6IFwiMS41cmVtXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBtYXJnaW5Cb3R0b206IFwiMS41cmVtXCIsXG4gIH0sXG59KShCb3gpO1xuXG5jb25zdCBJbWFnZUNvbnRhaW5lciA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogXCJpbmxpbmUtZmxleFwiLFxuICAgIHdpZHRoOiAzNSxcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICB9LFxufSkoQm94KTtcblxuY29uc3QgSW5wdXRDb250YWluZXIgPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gIH0sXG59KShCb3gpO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgY2hhcmFjdGVyc0NvdW50OiB7XG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICBib3R0b206IC0yMixcbiAgICByaWdodDogMjAsXG4gICAgZm9udFNpemU6IFwiMC44cmVtXCIsXG4gICAgZm9udFdlaWdodDogNzAwLFxuICAgIGNvbG9yOiAocHJvcHM6IHsgcmVwbHk6IHN0cmluZyB9KSA9PiB7XG4gICAgICBjb25zdCB7IHJlcGx5IH0gPSBwcm9wcztcbiAgICAgIGlmIChyZXBseS5sZW5ndGggPiBNQVhfQ0hBUkFDVEVSX0NPVU5UKSB7XG4gICAgICAgIHJldHVybiBcInJlZFwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gXCJncmV5XCI7XG4gICAgfSxcbiAgfSxcbn0pO1xuXG5jb25zdCBMb2dpbkFsZXJ0ID0gd2l0aFN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICB6SW5kZXg6IDIwMDAwLFxuICB9LFxufSkoU25hY2tiYXIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/Post/SinglePost/CommentsSection/Comment/RepliesSection/ReplyBox/ReplyBox.tsx\n");

/***/ })

})