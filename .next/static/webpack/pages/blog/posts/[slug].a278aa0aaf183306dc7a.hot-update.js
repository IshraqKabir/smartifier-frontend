webpackHotUpdate_N_E("pages/blog/posts/[slug]",{

/***/ "./Components/Post/SinglePost/CommentsSection/Comment/RepliesSection/ReplyBox/ReplyBox.tsx":
/*!*************************************************************************************************!*\
  !*** ./Components/Post/SinglePost/CommentsSection/Comment/RepliesSection/ReplyBox/ReplyBox.tsx ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../custom-hooks/useLocalState */ \"./custom-hooks/useLocalState.ts\");\n/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../url */ \"./url.js\");\n/* harmony import */ var _custom_hooks_useLoginAlert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../custom-hooks/useLoginAlert */ \"./custom-hooks/useLoginAlert.tsx\");\n\n\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/Post/SinglePost/CommentsSection/Comment/RepliesSection/ReplyBox/ReplyBox.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar MAX_CHARACTER_COUNT = 200;\n\nvar ReplyBox = function ReplyBox(_ref) {\n  _s();\n\n  var commentId = _ref.commentId,\n      setReplies = _ref.setReplies,\n      setComment = _ref.setComment;\n\n  var _useLocalState = Object(_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"user\", \"\"),\n      _useLocalState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useLocalState, 1),\n      user = _useLocalState2[0];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(\"\"),\n      reply = _useState[0],\n      setReply = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      isSending = _useState2[0],\n      setIsSending = _useState2[1];\n\n  var _useLoginAlert = Object(_custom_hooks_useLoginAlert__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(),\n      showLoginAlert = _useLoginAlert.showLoginAlert,\n      handleClickWhenLoggedOut = _useLoginAlert.handleClickWhenLoggedOut;\n\n  var classes = useStyles({\n    reply: reply\n  });\n\n  var handleSubmit = function handleSubmit() {\n    if (!user || !user.token) {\n      handleClickWhenLoggedOut();\n      return;\n    }\n\n    if (reply.length > MAX_CHARACTER_COUNT) return;\n\n    if (reply.length == 0) {\n      handleClickWhenLoggedOut();\n      return;\n    }\n\n    postReply();\n  };\n\n  var handleChange = function handleChange(e) {\n    setReply(e.target.value);\n  };\n\n  var handleEnter = function handleEnter(e) {\n    if (e.key === \"Enter\" && reply.length > 0) {\n      handleSubmit();\n    }\n  };\n\n  var postReply = function postReply() {\n    setIsSending(true);\n    axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(\"\".concat(_url__WEBPACK_IMPORTED_MODULE_8__[\"backend_url\"], \"/api/comment/reply/store\"), {\n      comment_id: commentId,\n      comment: reply\n    }, {\n      headers: {\n        Accept: \"application/json\",\n        Authorization: \"Bearer \".concat(user.token)\n      }\n    }).then(function (response) {\n      setIsSending(false);\n      setReplies(function (state) {\n        return [response.data].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state));\n      });\n      setReply(\"\");\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Container, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Avatar\"], {\n      src: user === null || user === void 0 ? void 0 : user.picture,\n      style: {\n        width: 35,\n        height: 35,\n        borderRadius: \"50%\",\n        marginRight: \"16px\"\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(InputContainer, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        placeholder: user ? \"Leave a reply to the comment!\" : \"Login to post a reply!\",\n        value: reply,\n        onChange: handleChange,\n        onKeyDown: handleEnter,\n        style: {\n          width: \"100%\",\n          padding: \"12px\",\n          marginRight: \"16px\",\n          border: \"1px solid black\"\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: classes.charactersCount,\n        children: \"\".concat(reply.length, \"/\").concat(MAX_CHARACTER_COUNT)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(ImageContainer, {\n      children: isSending ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"CircularProgress\"], {\n        size: 25,\n        color: \"inherit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 11\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        src: \"/assets/send_icon.svg\",\n        width: 25,\n        height: 25,\n        onClick: handleSubmit\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(LoginAlert, {\n      anchorOrigin: {\n        vertical: \"top\",\n        horizontal: \"center\"\n      },\n      open: showLoginAlert,\n      message: !user.token ? \"Login To Post A Reply!\" : reply.length == 0 ? \"Reply Cannot Be Empty\" : \"Some Error Occurred\"\n    }, commentId, false, {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 85,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ReplyBox, \"vIGBdgMEPfsmcvdTgNHFCtBQ5Wo=\", false, function () {\n  return [_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _custom_hooks_useLoginAlert__WEBPACK_IMPORTED_MODULE_9__[\"default\"], useStyles];\n});\n\n_c = ReplyBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReplyBox);\nvar Container = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"withStyles\"])({\n  root: {\n    width: \"100%\",\n    display: \"flex\",\n    marginTop: \"1.5rem\",\n    alignItems: \"center\",\n    marginBottom: \"1.5rem\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"]);\nvar ImageContainer = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"withStyles\"])({\n  root: {\n    display: \"inline-flex\",\n    width: 35,\n    alignItems: \"center\",\n    justifyContent: \"space-between\",\n    cursor: \"pointer\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"]);\nvar InputContainer = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"withStyles\"])({\n  root: {\n    position: \"relative\",\n    display: \"flex\",\n    alignItems: \"center\",\n    width: \"100%\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"]);\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"makeStyles\"])({\n  charactersCount: {\n    position: \"absolute\",\n    bottom: -22,\n    right: 20,\n    fontSize: \"0.8rem\",\n    fontWeight: 700,\n    color: function color(props) {\n      var reply = props.reply;\n\n      if (reply.length > MAX_CHARACTER_COUNT) {\n        return \"red\";\n      }\n\n      return \"grey\";\n    }\n  }\n});\nvar LoginAlert = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"withStyles\"])({\n  root: {\n    zIndex: 20000\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Snackbar\"]);\n\nvar _c;\n\n$RefreshReg$(_c, \"ReplyBox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qb3N0L1NpbmdsZVBvc3QvQ29tbWVudHNTZWN0aW9uL0NvbW1lbnQvUmVwbGllc1NlY3Rpb24vUmVwbHlCb3gvUmVwbHlCb3gudHN4PzZiYWIiXSwibmFtZXMiOlsiTUFYX0NIQVJBQ1RFUl9DT1VOVCIsIlJlcGx5Qm94IiwiY29tbWVudElkIiwic2V0UmVwbGllcyIsInNldENvbW1lbnQiLCJ1c2VMb2NhbFN0YXRlIiwidXNlciIsInVzZVN0YXRlIiwicmVwbHkiLCJzZXRSZXBseSIsImlzU2VuZGluZyIsInNldElzU2VuZGluZyIsInVzZUxvZ2luQWxlcnQiLCJzaG93TG9naW5BbGVydCIsImhhbmRsZUNsaWNrV2hlbkxvZ2dlZE91dCIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJoYW5kbGVTdWJtaXQiLCJ0b2tlbiIsImxlbmd0aCIsInBvc3RSZXBseSIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUVudGVyIiwia2V5IiwiYXhpb3MiLCJwb3N0IiwiYmFja2VuZF91cmwiLCJjb21tZW50X2lkIiwiY29tbWVudCIsImhlYWRlcnMiLCJBY2NlcHQiLCJBdXRob3JpemF0aW9uIiwidGhlbiIsInJlc3BvbnNlIiwic3RhdGUiLCJkYXRhIiwicGljdHVyZSIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luUmlnaHQiLCJwYWRkaW5nIiwiYm9yZGVyIiwiY2hhcmFjdGVyc0NvdW50IiwidmVydGljYWwiLCJob3Jpem9udGFsIiwiQ29udGFpbmVyIiwid2l0aFN0eWxlcyIsInJvb3QiLCJkaXNwbGF5IiwibWFyZ2luVG9wIiwiYWxpZ25JdGVtcyIsIm1hcmdpbkJvdHRvbSIsIkJveCIsIkltYWdlQ29udGFpbmVyIiwianVzdGlmeUNvbnRlbnQiLCJjdXJzb3IiLCJJbnB1dENvbnRhaW5lciIsInBvc2l0aW9uIiwibWFrZVN0eWxlcyIsImJvdHRvbSIsInJpZ2h0IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiY29sb3IiLCJwcm9wcyIsIkxvZ2luQWxlcnQiLCJ6SW5kZXgiLCJTbmFja2JhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVFBLElBQU1BLG1CQUFtQixHQUFHLEdBQTVCOztBQUVBLElBQU1DLFFBQTBCLEdBQUcsU0FBN0JBLFFBQTZCLE9BQTJDO0FBQUE7O0FBQUEsTUFBeENDLFNBQXdDLFFBQXhDQSxTQUF3QztBQUFBLE1BQTdCQyxVQUE2QixRQUE3QkEsVUFBNkI7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCOztBQUFBLHVCQUM3REMsMkVBQWEsQ0FBQyxNQUFELEVBQVMsRUFBVCxDQURnRDtBQUFBO0FBQUEsTUFDckVDLElBRHFFOztBQUFBLGtCQUVsREMsc0RBQVEsQ0FBUyxFQUFULENBRjBDO0FBQUEsTUFFckVDLEtBRnFFO0FBQUEsTUFFOURDLFFBRjhEOztBQUFBLG1CQUcxQ0Ysc0RBQVEsQ0FBVSxLQUFWLENBSGtDO0FBQUEsTUFHckVHLFNBSHFFO0FBQUEsTUFHMURDLFlBSDBEOztBQUFBLHVCQUl2QkMsMkVBQWEsRUFKVTtBQUFBLE1BSXBFQyxjQUpvRSxrQkFJcEVBLGNBSm9FO0FBQUEsTUFJcERDLHdCQUpvRCxrQkFJcERBLHdCQUpvRDs7QUFNNUUsTUFBTUMsT0FBTyxHQUFHQyxTQUFTLENBQUM7QUFBRVIsU0FBSyxFQUFMQTtBQUFGLEdBQUQsQ0FBekI7O0FBRUEsTUFBTVMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QixRQUFJLENBQUNYLElBQUQsSUFBUyxDQUFDQSxJQUFJLENBQUNZLEtBQW5CLEVBQTBCO0FBQ3hCSiw4QkFBd0I7QUFDeEI7QUFDRDs7QUFFRCxRQUFJTixLQUFLLENBQUNXLE1BQU4sR0FBZW5CLG1CQUFuQixFQUF3Qzs7QUFDeEMsUUFBSVEsS0FBSyxDQUFDVyxNQUFOLElBQWdCLENBQXBCLEVB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QU0sRUFBRSxDQUFDLEVBRk07QUFHZkMsU0FBSyxFQUFFLEVBSFE7QUFJZkMsWUFBUSxFQUFFLFFBSks7QUFLZkMsY0FBVSxFQUFFLEdBTEc7QUFNZkMsU0FBSyxFQUFFLGVBQUNDLEtBQUQsRUFBOEI7QUFBQSxVQUMzQjVELEtBRDJCLEdBQ2pCNEQsS0FEaUIsQ0FDM0I1RCxLQUQyQjs7QUFFbkMsVUFBSUEsS0FBSyxDQUFDVyxNQUFOLEdBQWVuQixtQkFBbkIsRUFBd0M7QUFDdEMsZUFBTyxLQUFQO0FBQ0Q7O0FBRUQsYUFBTyxNQUFQO0FBQ0Q7QUFiYztBQURVLENBQUQsQ0FBNUI7QUFrQkEsSUFBTXFFLFVBQVUsR0FBR25CLG9FQUFVLENBQUM7QUFDNUJDLE1BQUksRUFBRTtBQUNKbUIsVUFBTSxFQUFFO0FBREo7QUFEc0IsQ0FBRCxDQUFWLENBSWhCQywwREFKZ0IsQ0FBbkIiLCJmaWxlIjoiLi9Db21wb25lbnRzL1Bvc3QvU2luZ2xlUG9zdC9Db21tZW50c1NlY3Rpb24vQ29tbWVudC9SZXBsaWVzU2VjdGlvbi9SZXBseUJveC9SZXBseUJveC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBdmF0YXIsXG4gIEJveCxcbiAgQ2lyY3VsYXJQcm9ncmVzcyxcbiAgbWFrZVN0eWxlcyxcbiAgU25hY2tiYXIsXG4gIHdpdGhTdHlsZXMsXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHVzZUxvY2FsU3RhdGUgZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2N1c3RvbS1ob29rcy91c2VMb2NhbFN0YXRlXCI7XG5pbXBvcnQgeyBiYWNrZW5kX3VybCB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi91cmxcIjtcbmltcG9ydCBJUG9zdENvbW1lbnRSZXBseSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vTW9kZWxzL0lQb3N0Q29tbWVudFJlcGx5XCI7XG5pbXBvcnQgdXNlTG9naW5BbGVydCBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY3VzdG9tLWhvb2tzL3VzZUxvZ2luQWxlcnRcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGNvbW1lbnRJZDogc3RyaW5nO1xuICBzZXRSZXBsaWVzOiBGdW5jdGlvbjtcbiAgc2V0Q29tbWVudDogRnVuY3Rpb247XG59XG5cbmNvbnN0IE1BWF9DSEFSQUNURVJfQ09VTlQgPSAyMDA7XG5cbmNvbnN0IFJlcGx5Qm94OiBSZWFjdC5GQzxJUHJvcHM+ID0gKHsgY29tbWVudElkLCBzZXRSZXBsaWVzLCBzZXRDb21tZW50IH0pID0+IHtcbiAgY29uc3QgW3VzZXJdID0gdXNlTG9jYWxTdGF0ZShcInVzZXJcIiwgXCJcIik7XG4gIGNvbnN0IFtyZXBseSwgc2V0UmVwbHldID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3QgW2lzU2VuZGluZywgc2V0SXNTZW5kaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgeyBzaG93TG9naW5BbGVydCwgaGFuZGxlQ2xpY2tXaGVuTG9nZ2VkT3V0IH0gPSB1c2VMb2dpbkFsZXJ0KCk7XG5cbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcyh7IHJlcGx5IH0pO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcbiAgICBpZiAoIXVzZXIgfHwgIXVzZXIudG9rZW4pIHtcbiAgICAgIGhhbmRsZUNsaWNrV2hlbkxvZ2dlZE91dCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChyZXBseS5sZW5ndGggPiBNQVhfQ0hBUkFDVEVSX0NPVU5UKSByZXR1cm47XG4gICAgaWYgKHJlcGx5Lmxlbmd0aCA9PSAwKSB7XG4gICAgICBoYW5kbGVDbGlja1doZW5Mb2dnZWRPdXQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwb3N0UmVwbHkoKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgc2V0UmVwbHkoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUVudGVyID0gKGU6IGFueSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiICYmIHJlcGx5Lmxlbmd0aCA+IDApIHtcbiAgICAgIGhhbmRsZVN1Ym1pdCgpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBwb3N0UmVwbHkgPSAoKSA9PiB7XG4gICAgc2V0SXNTZW5kaW5nKHRydWUpO1xuICAgIGF4aW9zXG4gICAgICAucG9zdChcbiAgICAgICAgYCR7YmFja2VuZF91cmx9L2FwaS9jb21tZW50L3JlcGx5L3N0b3JlYCxcbiAgICAgICAge1xuICAgICAgICAgIGNvbW1lbnRfaWQ6IGNvbW1lbnRJZCxcbiAgICAgICAgICBjb21tZW50OiByZXBseSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dXNlci50b2tlbn1gLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBzZXRJc1NlbmRpbmcoZmFsc2UpO1xuXG4gICAgICAgIHNldFJlcGxpZXMoKHN0YXRlOiBJUG9zdENvbW1lbnRSZXBseVtdKSA9PiBbcmVzcG9uc2UuZGF0YSwgLi4uc3RhdGVdKTtcblxuICAgICAgICBzZXRSZXBseShcIlwiKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxBdmF0YXJcbiAgICAgICAgc3JjPXt1c2VyPy5waWN0dXJlfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHdpZHRoOiAzNSxcbiAgICAgICAgICBoZWlnaHQ6IDM1LFxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICAgICAgICBtYXJnaW5SaWdodDogXCIxNnB4XCIsXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPElucHV0Q29udGFpbmVyPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e1xuICAgICAgICAgICAgdXNlciA/IFwiTGVhdmUgYSByZXBseSB0byB0aGUgY29tbWVudCFcIiA6IFwiTG9naW4gdG8gcG9zdCBhIHJlcGx5IVwiXG4gICAgICAgICAgfVxuICAgICAgICAgIHZhbHVlPXtyZXBseX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlRW50ZXJ9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMTJweFwiLFxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMTZweFwiLFxuICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBibGFja1wiLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2hhcmFjdGVyc0NvdW50fVxuICAgICAgICA+e2Ake3JlcGx5Lmxlbmd0aH0vJHtNQVhfQ0hBUkFDVEVSX0NPVU5UfWB9PC9kaXY+XG4gICAgICA8L0lucHV0Q29udGFpbmVyPlxuICAgICAgPEltYWdlQ29udGFpbmVyPlxuICAgICAgICB7aXNTZW5kaW5nID8gKFxuICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIHNpemU9ezI1fSBjb2xvcj1cImluaGVyaXRcIiAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPXtgL2Fzc2V0cy9zZW5kX2ljb24uc3ZnYH1cbiAgICAgICAgICAgIHdpZHRoPXsyNX1cbiAgICAgICAgICAgIGhlaWdodD17MjV9XG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvSW1hZ2VDb250YWluZXI+XG5cbiAgICAgIDxMb2dpbkFsZXJ0XG4gICAgICAgIGtleT17Y29tbWVudElkfVxuICAgICAgICBhbmNob3JPcmlnaW49e3sgdmVydGljYWw6IFwidG9wXCIsIGhvcml6b250YWw6IFwiY2VudGVyXCIgfX1cbiAgICAgICAgb3Blbj17c2hvd0xvZ2luQWxlcnR9XG4gICAgICAgIG1lc3NhZ2U9e1xuICAgICAgICAgICF1c2VyLnRva2VuXG4gICAgICAgICAgICA/IFwiTG9naW4gVG8gUG9zdCBBIFJlcGx5IVwiXG4gICAgICAgICAgICA6IHJlcGx5Lmxlbmd0aCA9PSAwXG4gICAgICAgICAgICA/IFwiUmVwbHkgQ2Fubm90IEJlIEVtcHR5XCJcbiAgICAgICAgICAgIDogXCJTb21lIEVycm9yIE9jY3VycmVkXCJcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcGx5Qm94O1xuXG5jb25zdCBDb250YWluZXIgPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBtYXJnaW5Ub3A6IFwiMS41cmVtXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBtYXJnaW5Cb3R0b206IFwiMS41cmVtXCIsXG4gIH0sXG59KShCb3gpO1xuXG5jb25zdCBJbWFnZUNvbnRhaW5lciA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogXCJpbmxpbmUtZmxleFwiLFxuICAgIHdpZHRoOiAzNSxcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICB9LFxufSkoQm94KTtcblxuY29uc3QgSW5wdXRDb250YWluZXIgPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gIH0sXG59KShCb3gpO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgY2hhcmFjdGVyc0NvdW50OiB7XG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICBib3R0b206IC0yMixcbiAgICByaWdodDogMjAsXG4gICAgZm9udFNpemU6IFwiMC44cmVtXCIsXG4gICAgZm9udFdlaWdodDogNzAwLFxuICAgIGNvbG9yOiAocHJvcHM6IHsgcmVwbHk6IHN0cmluZyB9KSA9PiB7XG4gICAgICBjb25zdCB7IHJlcGx5IH0gPSBwcm9wcztcbiAgICAgIGlmIChyZXBseS5sZW5ndGggPiBNQVhfQ0hBUkFDVEVSX0NPVU5UKSB7XG4gICAgICAgIHJldHVybiBcInJlZFwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gXCJncmV5XCI7XG4gICAgfSxcbiAgfSxcbn0pO1xuXG5jb25zdCBMb2dpbkFsZXJ0ID0gd2l0aFN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICB6SW5kZXg6IDIwMDAwLFxuICB9LFxufSkoU25hY2tiYXIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/Post/SinglePost/CommentsSection/Comment/RepliesSection/ReplyBox/ReplyBox.tsx\n");

/***/ })

})