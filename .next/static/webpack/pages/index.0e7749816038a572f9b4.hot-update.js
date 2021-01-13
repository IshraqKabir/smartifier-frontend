webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/Layout/Topbar/NavItems/NavItem/Login/Login.tsx":
/*!*******************************************************************!*\
  !*** ./Components/Layout/Topbar/NavItems/NavItem/Login/Login.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-google-login */ \"./node_modules/react-google-login/dist/google-login.js\");\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../url */ \"./url.js\");\n/* harmony import */ var _UtilFunctions_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../UtilFunctions/post */ \"./UtilFunctions/post.js\");\n/* harmony import */ var _custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../custom-hooks/useLocalState */ \"./custom-hooks/useLocalState.ts\");\n\n\n\n\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/Layout/Topbar/NavItems/NavItem/Login/Login.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"makeStyles\"])({\n  userContainer: {}\n});\n\nvar Login = function Login() {\n  _s();\n\n  var _useLocalState = Object(_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(\"user\", \"\"),\n      _useLocalState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useLocalState, 2),\n      user = _useLocalState2[0],\n      setUser = _useLocalState2[1];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  var classes = useStyles();\n\n  var responseGoogle = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(googleUser) {\n      var id_token, google_id;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (!googleUser.error) {\n                id_token = googleUser.tokenId;\n                google_id = parseInt(googleUser.profileObj.googleId);\n                Object(_UtilFunctions_post__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"\".concat(_url__WEBPACK_IMPORTED_MODULE_7__[\"backend_url\"], \"/api/auth/google/verify\"), {\n                  id_token: id_token,\n                  google_id: google_id\n                }, function (response) {\n                  setUser(response.data);\n                }, function () {});\n              }\n\n            case 1:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function responseGoogle(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  console.log(user.image_url);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], {\n    children: !user ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(react_google_login__WEBPACK_IMPORTED_MODULE_6__[\"GoogleLogin\"], {\n      clientId: \"540083931812-7bt05mqtrriog1f1kdpvotbvnr01iien.apps.googleusercontent.com\",\n      buttonText: \"Login\",\n      onSuccess: responseGoogle,\n      onFailure: responseGoogle,\n      cookiePolicy: \"single_host_origin\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n      className: classes.userContainer\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }, _this) // <div className={classes.userContainer}>\n    //   <div className={classes.profilePic}>\n    //     <Image src={user.image_url} width={\"100%\"} height={\"100%\"} />\n    //   </div>\n    //   <Typography variant=\"caption\">{user.name.toLowerCase()}</Typography>\n    // </div>\n\n  }, void 0, false);\n};\n\n_s(Login, \"nEUxAkK5m24ac9S9tpCaX7ZbeHU=\", false, function () {\n  return [_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_9__[\"default\"], useStyles];\n});\n\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\nvar _c;\n\n$RefreshReg$(_c, \"Login\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9MYXlvdXQvVG9wYmFyL05hdkl0ZW1zL05hdkl0ZW0vTG9naW4vTG9naW4udHN4Pzg3MzQiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInVzZXJDb250YWluZXIiLCJMb2dpbiIsInVzZUxvY2FsU3RhdGUiLCJ1c2VyIiwic2V0VXNlciIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJjbGFzc2VzIiwicmVzcG9uc2VHb29nbGUiLCJnb29nbGVVc2VyIiwiZXJyb3IiLCJpZF90b2tlbiIsInRva2VuSWQiLCJnb29nbGVfaWQiLCJwYXJzZUludCIsInByb2ZpbGVPYmoiLCJnb29nbGVJZCIsInBvc3QiLCJiYWNrZW5kX3VybCIsInJlc3BvbnNlIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJpbWFnZV91cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFJQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUM7QUFDM0JDLGVBQWEsRUFBRTtBQURZLENBQUQsQ0FBNUI7O0FBTUEsSUFBTUMsS0FBbUIsR0FBRyxTQUF0QkEsS0FBc0IsR0FBTTtBQUFBOztBQUFBLHVCQUNSQywyRUFBYSxDQUFNLE1BQU4sRUFBYyxFQUFkLENBREw7QUFBQTtBQUFBLE1BQ3pCQyxJQUR5QjtBQUFBLE1BQ25CQyxPQURtQjs7QUFBQSxrQkFFUkMsc0RBQVEsRUFGQTtBQUFBLE1BRXpCQyxJQUZ5QjtBQUFBLE1BRW5CQyxPQUZtQjs7QUFJaEMsTUFBTUMsT0FBTyxHQUFHVixTQUFTLEVBQXpCOztBQUVBLE1BQU1XLGNBQWM7QUFBQSxnTUFBRyxpQkFBT0MsVUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDckIsa0JBQUksQ0FBQ0EsVUFBVSxDQUFDQyxLQUFoQixFQUF1QjtBQUNmQyx3QkFEZSxHQUNKRixVQUFVLENBQUNHLE9BRFA7QUFFZkMseUJBRmUsR0FFSEMsUUFBUSxDQUFDTCxVQUFVLENBQUNNLFVBQVgsQ0FBc0JDLFFBQXZCLENBRkw7QUFJckJDLG1GQUFJLFdBQ0NDLGdEQURELDhCQUVGO0FBQUVQLDBCQUFRLEVBQUVBLFFBQVo7QUFBc0JFLDJCQUFTLEVBQUVBO0FBQWpDLGlCQUZFLEVBR0YsVUFBQ00sUUFBRCxFQUFjO0FBQ1poQix5QkFBTyxDQUFDZ0IsUUFBUSxDQUFDQyxJQUFWLENBQVA7QUFDRCxpQkFMQyxFQU1GLFlBQU0sQ0FBRSxDQU5OLENBQUo7QUFRRDs7QUFib0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBZFosY0FBYztBQUFBO0FBQUE7QUFBQSxLQUFwQjs7QUFnQkFhLFNBQU8sQ0FBQ0MsR0FBUixDQUFZcEIsSUFBSSxDQUFDcUIsU0FBakI7QUFFQSxzQkFDRTtBQUFBLGNBQ0csQ0FBQ3JCLElBQUQsZ0JBQ0MscUVBQUMsOERBQUQ7QUFDRSxjQUFRLEVBQUMsMEVBRFg7QUFFRSxnQkFBVSxFQUFDLE9BRmI7QUFHRSxlQUFTLEVBQUVNLGNBSGI7QUFJRSxlQUFTLEVBQUVBLGNBSmI7QUFLRSxrQkFBWSxFQUFFO0FBTGhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxnQkFTQztBQUFLLGVBQVMsRUFBRUQsT0FBTyxDQUFDUjtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEQsQ0FZQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBbEJKLG1CQURGO0FBdUJELENBL0NEOztHQUFNQyxLO1VBQ29CQyxtRSxFQUdSSixTOzs7S0FKWkcsSztBQWlEU0Esb0VBQWYiLCJmaWxlIjoiLi9Db21wb25lbnRzL0xheW91dC9Ub3BiYXIvTmF2SXRlbXMvTmF2SXRlbS9Mb2dpbi9Mb2dpbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcywgVHlwb2dyYXBoeSwgdXNlVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcblxuaW1wb3J0IHsgR29vZ2xlTG9naW4gfSBmcm9tIFwicmVhY3QtZ29vZ2xlLWxvZ2luXCI7XG5cbmltcG9ydCB7IGJhY2tlbmRfdXJsIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL3VybFwiO1xuXG5pbXBvcnQgcG9zdCBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vVXRpbEZ1bmN0aW9ucy9wb3N0XCI7XG5pbXBvcnQgdXNlTG9jYWxTdGF0ZSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vY3VzdG9tLWhvb2tzL3VzZUxvY2FsU3RhdGVcIjtcblxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICB1c2VyQ29udGFpbmVyOiB7XG5cbiAgfVxufSk7XG5cbmNvbnN0IExvZ2luOiBSZWFjdC5GQzx7fT4gPSAoKSA9PiB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZUxvY2FsU3RhdGU8YW55PihcInVzZXJcIiwgXCJcIik7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KCkgIFxuICBcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IHJlc3BvbnNlR29vZ2xlID0gYXN5bmMgKGdvb2dsZVVzZXIpID0+IHtcbiAgICBpZiAoIWdvb2dsZVVzZXIuZXJyb3IpIHtcbiAgICAgIGNvbnN0IGlkX3Rva2VuID0gZ29vZ2xlVXNlci50b2tlbklkO1xuICAgICAgY29uc3QgZ29vZ2xlX2lkID0gcGFyc2VJbnQoZ29vZ2xlVXNlci5wcm9maWxlT2JqLmdvb2dsZUlkKTtcblxuICAgICAgcG9zdChcbiAgICAgICAgYCR7YmFja2VuZF91cmx9L2FwaS9hdXRoL2dvb2dsZS92ZXJpZnlgLFxuICAgICAgICB7IGlkX3Rva2VuOiBpZF90b2tlbiwgZ29vZ2xlX2lkOiBnb29nbGVfaWQgfSxcbiAgICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgc2V0VXNlcihyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge31cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnNvbGUubG9nKHVzZXIuaW1hZ2VfdXJsKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7IXVzZXIgPyAoXG4gICAgICAgIDxHb29nbGVMb2dpblxuICAgICAgICAgIGNsaWVudElkPVwiNTQwMDgzOTMxODEyLTdidDA1bXF0cnJpb2cxZjFrZHB2b3Ridm5yMDFpaWVuLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tXCJcbiAgICAgICAgICBidXR0b25UZXh0PVwiTG9naW5cIlxuICAgICAgICAgIG9uU3VjY2Vzcz17cmVzcG9uc2VHb29nbGV9XG4gICAgICAgICAgb25GYWlsdXJlPXtyZXNwb25zZUdvb2dsZX1cbiAgICAgICAgICBjb29raWVQb2xpY3k9e1wic2luZ2xlX2hvc3Rfb3JpZ2luXCJ9XG4gICAgICAgIC8+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy51c2VyQ29udGFpbmVyfT5cbiAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnVzZXJDb250YWluZXJ9PlxuICAgICAgICAvLyAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2ZpbGVQaWN9PlxuICAgICAgICAvLyAgICAgPEltYWdlIHNyYz17dXNlci5pbWFnZV91cmx9IHdpZHRoPXtcIjEwMCVcIn0gaGVpZ2h0PXtcIjEwMCVcIn0gLz5cbiAgICAgICAgLy8gICA8L2Rpdj5cbiAgICAgICAgLy8gICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiPnt1c2VyLm5hbWUudG9Mb3dlckNhc2UoKX08L1R5cG9ncmFwaHk+XG4gICAgICAgIC8vIDwvZGl2PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/Layout/Topbar/NavItems/NavItem/Login/Login.tsx\n");

/***/ })

})