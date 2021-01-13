webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/Layout/Topbar/NavItems/NavItem/Login/Login.tsx":
/*!*******************************************************************!*\
  !*** ./Components/Layout/Topbar/NavItems/NavItem/Login/Login.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-google-login */ \"./node_modules/react-google-login/dist/google-login.js\");\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../url */ \"./url.js\");\n/* harmony import */ var _UtilFunctions_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../UtilFunctions/post */ \"./UtilFunctions/post.js\");\n/* harmony import */ var _custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../custom-hooks/useLocalState */ \"./custom-hooks/useLocalState.ts\");\n\n\n\n\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/Layout/Topbar/NavItems/NavItem/Login/Login.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"makeStyles\"])({\n  userContainer: {}\n});\n\nvar Login = function Login() {\n  _s();\n\n  var _useLocalState = Object(_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(\"user\", \"\"),\n      _useLocalState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useLocalState, 2),\n      user = _useLocalState2[0],\n      setUser = _useLocalState2[1];\n\n  use;\n  var classes = useStyles();\n\n  var responseGoogle = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(googleUser) {\n      var id_token, google_id;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (!googleUser.error) {\n                id_token = googleUser.tokenId;\n                google_id = parseInt(googleUser.profileObj.googleId);\n                Object(_UtilFunctions_post__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"\".concat(_url__WEBPACK_IMPORTED_MODULE_7__[\"backend_url\"], \"/api/auth/google/verify\"), {\n                  id_token: id_token,\n                  google_id: google_id\n                }, function (response) {\n                  setUser(response.data);\n                }, function () {});\n              }\n\n            case 1:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function responseGoogle(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  console.log(user.image_url);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], {\n    children: !user ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(react_google_login__WEBPACK_IMPORTED_MODULE_6__[\"GoogleLogin\"], {\n      clientId: \"540083931812-7bt05mqtrriog1f1kdpvotbvnr01iien.apps.googleusercontent.com\",\n      buttonText: \"Login\",\n      onSuccess: responseGoogle,\n      onFailure: responseGoogle,\n      cookiePolicy: \"single_host_origin\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n      className: classes.userContainer\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }, _this) // <div className={classes.userContainer}>\n    //   <div className={classes.profilePic}>\n    //     <Image src={user.image_url} width={\"100%\"} height={\"100%\"} />\n    //   </div>\n    //   <Typography variant=\"caption\">{user.name.toLowerCase()}</Typography>\n    // </div>\n\n  }, void 0, false);\n};\n\n_s(Login, \"xpc4owr56ciCoF/nbx2q02gEXZI=\", false, function () {\n  return [_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_9__[\"default\"], useStyles];\n});\n\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\nvar _c;\n\n$RefreshReg$(_c, \"Login\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9MYXlvdXQvVG9wYmFyL05hdkl0ZW1zL05hdkl0ZW0vTG9naW4vTG9naW4udHN4Pzg3MzQiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInVzZXJDb250YWluZXIiLCJMb2dpbiIsInVzZUxvY2FsU3RhdGUiLCJ1c2VyIiwic2V0VXNlciIsInVzZSIsImNsYXNzZXMiLCJyZXNwb25zZUdvb2dsZSIsImdvb2dsZVVzZXIiLCJlcnJvciIsImlkX3Rva2VuIiwidG9rZW5JZCIsImdvb2dsZV9pZCIsInBhcnNlSW50IiwicHJvZmlsZU9iaiIsImdvb2dsZUlkIiwicG9zdCIsImJhY2tlbmRfdXJsIiwicmVzcG9uc2UiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImltYWdlX3VybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUlBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQztBQUMzQkMsZUFBYSxFQUFFO0FBRFksQ0FBRCxDQUE1Qjs7QUFNQSxJQUFNQyxLQUFtQixHQUFHLFNBQXRCQSxLQUFzQixHQUFNO0FBQUE7O0FBQUEsdUJBQ1JDLDJFQUFhLENBQU0sTUFBTixFQUFjLEVBQWQsQ0FETDtBQUFBO0FBQUEsTUFDekJDLElBRHlCO0FBQUEsTUFDbkJDLE9BRG1COztBQUVoQ0MsS0FBRztBQUVILE1BQU1DLE9BQU8sR0FBR1IsU0FBUyxFQUF6Qjs7QUFFQSxNQUFNUyxjQUFjO0FBQUEsZ01BQUcsaUJBQU9DLFVBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3JCLGtCQUFJLENBQUNBLFVBQVUsQ0FBQ0MsS0FBaEIsRUFBdUI7QUFDZkMsd0JBRGUsR0FDSkYsVUFBVSxDQUFDRyxPQURQO0FBRWZDLHlCQUZlLEdBRUhDLFFBQVEsQ0FBQ0wsVUFBVSxDQUFDTSxVQUFYLENBQXNCQyxRQUF2QixDQUZMO0FBSXJCQyxtRkFBSSxXQUNDQyxnREFERCw4QkFFRjtBQUFFUCwwQkFBUSxFQUFFQSxRQUFaO0FBQXNCRSwyQkFBUyxFQUFFQTtBQUFqQyxpQkFGRSxFQUdGLFVBQUNNLFFBQUQsRUFBYztBQUNaZCx5QkFBTyxDQUFDYyxRQUFRLENBQUNDLElBQVYsQ0FBUDtBQUNELGlCQUxDLEVBTUYsWUFBTSxDQUFFLENBTk4sQ0FBSjtBQVFEOztBQWJvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFkWixjQUFjO0FBQUE7QUFBQTtBQUFBLEtBQXBCOztBQWdCQWEsU0FBTyxDQUFDQyxHQUFSLENBQVlsQixJQUFJLENBQUNtQixTQUFqQjtBQUVBLHNCQUNFO0FBQUEsY0FDRyxDQUFDbkIsSUFBRCxnQkFDQyxxRUFBQyw4REFBRDtBQUNFLGNBQVEsRUFBQywwRUFEWDtBQUVFLGdCQUFVLEVBQUMsT0FGYjtBQUdFLGVBQVMsRUFBRUksY0FIYjtBQUlFLGVBQVMsRUFBRUEsY0FKYjtBQUtFLGtCQUFZLEVBQUU7QUFMaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGdCQVNDO0FBQUssZUFBUyxFQUFFRCxPQUFPLENBQUNOO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFURCxDQVlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFsQkosbUJBREY7QUF1QkQsQ0EvQ0Q7O0dBQU1DLEs7VUFDb0JDLG1FLEVBR1JKLFM7OztLQUpaRyxLO0FBaURTQSxvRUFBZiIsImZpbGUiOiIuL0NvbXBvbmVudHMvTGF5b3V0L1RvcGJhci9OYXZJdGVtcy9OYXZJdGVtL0xvZ2luL0xvZ2luLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMsIFR5cG9ncmFwaHksIHVzZVRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5cbmltcG9ydCB7IEdvb2dsZUxvZ2luIH0gZnJvbSBcInJlYWN0LWdvb2dsZS1sb2dpblwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5pbXBvcnQgeyBiYWNrZW5kX3VybCB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi91cmxcIjtcblxuaW1wb3J0IHBvc3QgZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL1V0aWxGdW5jdGlvbnMvcG9zdFwiO1xuaW1wb3J0IHVzZUxvY2FsU3RhdGUgZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL2N1c3RvbS1ob29rcy91c2VMb2NhbFN0YXRlXCI7XG5cbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgdXNlckNvbnRhaW5lcjoge1xuXG4gIH1cbn0pO1xuXG5jb25zdCBMb2dpbjogUmVhY3QuRkM8e30+ID0gKCkgPT4ge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VMb2NhbFN0YXRlPGFueT4oXCJ1c2VyXCIsIFwiXCIpO1xuICB1c2VcbiAgXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICBjb25zdCByZXNwb25zZUdvb2dsZSA9IGFzeW5jIChnb29nbGVVc2VyKSA9PiB7XG4gICAgaWYgKCFnb29nbGVVc2VyLmVycm9yKSB7XG4gICAgICBjb25zdCBpZF90b2tlbiA9IGdvb2dsZVVzZXIudG9rZW5JZDtcbiAgICAgIGNvbnN0IGdvb2dsZV9pZCA9IHBhcnNlSW50KGdvb2dsZVVzZXIucHJvZmlsZU9iai5nb29nbGVJZCk7XG5cbiAgICAgIHBvc3QoXG4gICAgICAgIGAke2JhY2tlbmRfdXJsfS9hcGkvYXV0aC9nb29nbGUvdmVyaWZ5YCxcbiAgICAgICAgeyBpZF90b2tlbjogaWRfdG9rZW4sIGdvb2dsZV9pZDogZ29vZ2xlX2lkIH0sXG4gICAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHNldFVzZXIocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHt9XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICBjb25zb2xlLmxvZyh1c2VyLmltYWdlX3VybCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgeyF1c2VyID8gKFxuICAgICAgICA8R29vZ2xlTG9naW5cbiAgICAgICAgICBjbGllbnRJZD1cIjU0MDA4MzkzMTgxMi03YnQwNW1xdHJyaW9nMWYxa2Rwdm90YnZucjAxaWllbi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbVwiXG4gICAgICAgICAgYnV0dG9uVGV4dD1cIkxvZ2luXCJcbiAgICAgICAgICBvblN1Y2Nlc3M9e3Jlc3BvbnNlR29vZ2xlfVxuICAgICAgICAgIG9uRmFpbHVyZT17cmVzcG9uc2VHb29nbGV9XG4gICAgICAgICAgY29va2llUG9saWN5PXtcInNpbmdsZV9ob3N0X29yaWdpblwifVxuICAgICAgICAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudXNlckNvbnRhaW5lcn0+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnVzZXJDb250YWluZXJ9PlxuICAgICAgICAvLyAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2ZpbGVQaWN9PlxuICAgICAgICAvLyAgICAgPEltYWdlIHNyYz17dXNlci5pbWFnZV91cmx9IHdpZHRoPXtcIjEwMCVcIn0gaGVpZ2h0PXtcIjEwMCVcIn0gLz5cbiAgICAgICAgLy8gICA8L2Rpdj5cbiAgICAgICAgLy8gICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiPnt1c2VyLm5hbWUudG9Mb3dlckNhc2UoKX08L1R5cG9ncmFwaHk+XG4gICAgICAgIC8vIDwvZGl2PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/Layout/Topbar/NavItems/NavItem/Login/Login.tsx\n");

/***/ })

})