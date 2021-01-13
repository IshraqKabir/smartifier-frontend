webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/Layout/Topbar/NavItems/NavItem/Login/Login.tsx":
/*!*******************************************************************!*\
  !*** ./Components/Layout/Topbar/NavItems/NavItem/Login/Login.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-google-login */ \"./node_modules/react-google-login/dist/google-login.js\");\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../url */ \"./url.js\");\n/* harmony import */ var _UtilFunctions_post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../UtilFunctions/post */ \"./UtilFunctions/post.js\");\n/* harmony import */ var _custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../custom-hooks/useLocalState */ \"./custom-hooks/useLocalState.ts\");\n\n\n\n\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/Layout/Topbar/NavItems/NavItem/Login/Login.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n // import User from \"./User/User\";\n\nvar Login = function Login() {\n  _s();\n\n  var _useLocalState = Object(_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"user\", \"\"),\n      _useLocalState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useLocalState, 2),\n      user = _useLocalState2[0],\n      setUser = _useLocalState2[1];\n\n  var responseGoogle = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(googleUser) {\n      var id_token, google_id;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (!googleUser.error) {\n                id_token = googleUser.tokenId;\n                google_id = parseInt(googleUser.profileObj.googleId);\n                Object(_UtilFunctions_post__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"\".concat(_url__WEBPACK_IMPORTED_MODULE_6__[\"backend_url\"], \"/api/auth/google/verify\"), {\n                  id_token: id_token,\n                  google_id: google_id\n                }, function (response) {\n                  setUser(response.data);\n                }, function () {});\n              }\n\n            case 1:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function responseGoogle(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], {\n    children: !user ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(react_google_login__WEBPACK_IMPORTED_MODULE_5__[\"GoogleLogin\"], {\n      clientId: \"540083931812-7bt05mqtrriog1f1kdpvotbvnr01iien.apps.googleusercontent.com\",\n      buttonText: \"Login\",\n      onSuccess: responseGoogle,\n      onFailure: responseGoogle,\n      cookiePolicy: \"single_host_origin\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"p\", {\n      children: \"Hello\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Login, \"Pp6R/N69RqhLcEBhydU6ZNCo3tQ=\", false, function () {\n  return [_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_8__[\"default\"]];\n});\n\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\nvar _c;\n\n$RefreshReg$(_c, \"Login\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9MYXlvdXQvVG9wYmFyL05hdkl0ZW1zL05hdkl0ZW0vTG9naW4vTG9naW4udHN4Pzg3MzQiXSwibmFtZXMiOlsiTG9naW4iLCJ1c2VMb2NhbFN0YXRlIiwidXNlciIsInNldFVzZXIiLCJyZXNwb25zZUdvb2dsZSIsImdvb2dsZVVzZXIiLCJlcnJvciIsImlkX3Rva2VuIiwidG9rZW5JZCIsImdvb2dsZV9pZCIsInBhcnNlSW50IiwicHJvZmlsZU9iaiIsImdvb2dsZUlkIiwicG9zdCIsImJhY2tlbmRfdXJsIiwicmVzcG9uc2UiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFFQTtDQUdBOztBQUVBLElBQU1BLEtBQW1CLEdBQUcsU0FBdEJBLEtBQXNCLEdBQU07QUFBQTs7QUFBQSx1QkFDUkMsMkVBQWEsQ0FBTSxNQUFOLEVBQWMsRUFBZCxDQURMO0FBQUE7QUFBQSxNQUN6QkMsSUFEeUI7QUFBQSxNQUNuQkMsT0FEbUI7O0FBR2hDLE1BQU1DLGNBQWM7QUFBQSxnTUFBRyxpQkFBT0MsVUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDckIsa0JBQUksQ0FBQ0EsVUFBVSxDQUFDQyxLQUFoQixFQUF1QjtBQUNmQyx3QkFEZSxHQUNKRixVQUFVLENBQUNHLE9BRFA7QUFFZkMseUJBRmUsR0FFSEMsUUFBUSxDQUFDTCxVQUFVLENBQUNNLFVBQVgsQ0FBc0JDLFFBQXZCLENBRkw7QUFJckJDLG1GQUFJLFdBQ0NDLGdEQURELDhCQUVGO0FBQUVQLDBCQUFRLEVBQUVBLFFBQVo7QUFBc0JFLDJCQUFTLEVBQUVBO0FBQWpDLGlCQUZFLEVBR0YsVUFBQ00sUUFBRCxFQUFjO0FBQ1paLHlCQUFPLENBQUNZLFFBQVEsQ0FBQ0MsSUFBVixDQUFQO0FBQ0QsaUJBTEMsRUFNRixZQUFNLENBQUUsQ0FOTixDQUFKO0FBUUQ7O0FBYm9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWRaLGNBQWM7QUFBQTtBQUFBO0FBQUEsS0FBcEI7O0FBaUJBLHNCQUNFO0FBQUEsY0FDRyxDQUFDRixJQUFELGdCQUNDLHFFQUFDLDhEQUFEO0FBQ0UsY0FBUSxFQUFDLDBFQURYO0FBRUUsZ0JBQVUsRUFBQyxPQUZiO0FBR0UsZUFBUyxFQUFFRSxjQUhiO0FBSUUsZUFBUyxFQUFFQSxjQUpiO0FBS0Usa0JBQVksRUFBRTtBQUxoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZ0JBU0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWSixtQkFERjtBQWVELENBbkNEOztHQUFNSixLO1VBQ29CQyxtRTs7O0tBRHBCRCxLO0FBcUNTQSxvRUFBZiIsImZpbGUiOiIuL0NvbXBvbmVudHMvTGF5b3V0L1RvcGJhci9OYXZJdGVtcy9OYXZJdGVtL0xvZ2luL0xvZ2luLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgR29vZ2xlTG9naW4gfSBmcm9tIFwicmVhY3QtZ29vZ2xlLWxvZ2luXCI7XG5cbmltcG9ydCB7IGJhY2tlbmRfdXJsIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL3VybFwiO1xuXG5pbXBvcnQgcG9zdCBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vVXRpbEZ1bmN0aW9ucy9wb3N0XCI7XG5pbXBvcnQgdXNlTG9jYWxTdGF0ZSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vY3VzdG9tLWhvb2tzL3VzZUxvY2FsU3RhdGVcIjtcblxuLy8gaW1wb3J0IFVzZXIgZnJvbSBcIi4vVXNlci9Vc2VyXCI7XG5cbmNvbnN0IExvZ2luOiBSZWFjdC5GQzx7fT4gPSAoKSA9PiB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZUxvY2FsU3RhdGU8YW55PihcInVzZXJcIiwgXCJcIik7XG5cbiAgY29uc3QgcmVzcG9uc2VHb29nbGUgPSBhc3luYyAoZ29vZ2xlVXNlcikgPT4ge1xuICAgIGlmICghZ29vZ2xlVXNlci5lcnJvcikge1xuICAgICAgY29uc3QgaWRfdG9rZW4gPSBnb29nbGVVc2VyLnRva2VuSWQ7XG4gICAgICBjb25zdCBnb29nbGVfaWQgPSBwYXJzZUludChnb29nbGVVc2VyLnByb2ZpbGVPYmouZ29vZ2xlSWQpO1xuXG4gICAgICBwb3N0KFxuICAgICAgICBgJHtiYWNrZW5kX3VybH0vYXBpL2F1dGgvZ29vZ2xlL3ZlcmlmeWAsXG4gICAgICAgIHsgaWRfdG9rZW46IGlkX3Rva2VuLCBnb29nbGVfaWQ6IGdvb2dsZV9pZCB9LFxuICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBzZXRVc2VyKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7fVxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7IXVzZXIgPyAoXG4gICAgICAgIDxHb29nbGVMb2dpblxuICAgICAgICAgIGNsaWVudElkPVwiNTQwMDgzOTMxODEyLTdidDA1bXF0cnJpb2cxZjFrZHB2b3Ridm5yMDFpaWVuLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tXCJcbiAgICAgICAgICBidXR0b25UZXh0PVwiTG9naW5cIlxuICAgICAgICAgIG9uU3VjY2Vzcz17cmVzcG9uc2VHb29nbGV9XG4gICAgICAgICAgb25GYWlsdXJlPXtyZXNwb25zZUdvb2dsZX1cbiAgICAgICAgICBjb29raWVQb2xpY3k9e1wic2luZ2xlX2hvc3Rfb3JpZ2luXCJ9XG4gICAgICAgIC8+XG4gICAgICApIDogKFxuICAgICAgICA8cD5IZWxsbzwvcD5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/Layout/Topbar/NavItems/NavItem/Login/Login.tsx\n");

/***/ })

})