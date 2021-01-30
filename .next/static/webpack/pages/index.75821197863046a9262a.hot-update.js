webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/Layout/Topbar/NavItems/NavItem/Login/Login.tsx":
/*!*******************************************************************!*\
  !*** ./Components/Layout/Topbar/NavItems/NavItem/Login/Login.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../custom-hooks/useLocalState */ \"./custom-hooks/useLocalState.ts\");\n/* harmony import */ var _User_User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./User/User */ \"./Components/Layout/Topbar/NavItems/NavItem/Login/User/User.tsx\");\n\n\n\n\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/Layout/Topbar/NavItems/NavItem/Login/Login.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Login = function Login() {\n  _s();\n\n  var _useLocalState = Object(_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"user\", \"\"),\n      _useLocalState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useLocalState, 2),\n      user = _useLocalState2[0],\n      setUser = _useLocalState2[1];\n\n  var onSignIn = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(googleUser) {\n      var profile, id_token, google_id;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (!googleUser.error) {\n                profile = googleUser.getBasicProfile();\n                id_token = googleUser.tokenId;\n                google_id = parseInt(profile.getId()); // post(\n                //   `${backend_url}/api/auth/google/verify`,\n                //   { id_token: id_token, google_id: google_id },\n                //   (response: any) => {\n                //     setUser(response.data);\n                //   },\n                //   () => {}\n                // );\n              }\n\n            case 1:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function onSignIn(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var onFail = function onFail(_ref2) {\n    var error = _ref2.error;\n    console.log(error);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var w = window;\n    var gapi = w.gapi;\n    gapi.load(\"auth2\", function () {\n      var auth2 = gapi.auth2.init({\n        client_id: \"540083931812-7bt05mqtrriog1f1kdpvotbvnr01iien\"\n      });\n      gapi.signin2.render(\"signin-button\", {\n        width: \"100%\",\n        height: 40,\n        longtitle: false,\n        onsuccess: onSignIn,\n        onfailure: onFail\n      });\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], {\n    children: !user ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n      id: \"signin-button\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 21\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_User_User__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 54\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Login, \"UtPNrv+35dj6HUYxQzJ8/RVG6E4=\", false, function () {\n  return [_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\n});\n\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\nvar _c;\n\n$RefreshReg$(_c, \"Login\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9MYXlvdXQvVG9wYmFyL05hdkl0ZW1zL05hdkl0ZW0vTG9naW4vTG9naW4udHN4Pzg3MzQiXSwibmFtZXMiOlsiTG9naW4iLCJ1c2VMb2NhbFN0YXRlIiwidXNlciIsInNldFVzZXIiLCJvblNpZ25JbiIsImdvb2dsZVVzZXIiLCJlcnJvciIsInByb2ZpbGUiLCJnZXRCYXNpY1Byb2ZpbGUiLCJpZF90b2tlbiIsInRva2VuSWQiLCJnb29nbGVfaWQiLCJwYXJzZUludCIsImdldElkIiwib25GYWlsIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsInciLCJ3aW5kb3ciLCJnYXBpIiwibG9hZCIsImF1dGgyIiwiaW5pdCIsImNsaWVudF9pZCIsInNpZ25pbjIiLCJyZW5kZXIiLCJ3aWR0aCIsImhlaWdodCIsImxvbmd0aXRsZSIsIm9uc3VjY2VzcyIsIm9uZmFpbHVyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU1BOztBQUlBLElBQU1BLEtBQXVCLEdBQUcsU0FBMUJBLEtBQTBCLEdBQU07QUFBQTs7QUFBQSx1QkFDWkMsMkVBQWEsQ0FBTSxNQUFOLEVBQWMsRUFBZCxDQUREO0FBQUE7QUFBQSxNQUM3QkMsSUFENkI7QUFBQSxNQUN2QkMsT0FEdUI7O0FBR3BDLE1BQU1DLFFBQVE7QUFBQSxnTUFBRyxpQkFBT0MsVUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZixrQkFBSSxDQUFDQSxVQUFVLENBQUNDLEtBQWhCLEVBQXVCO0FBQ2ZDLHVCQURlLEdBQ0xGLFVBQVUsQ0FBQ0csZUFBWCxFQURLO0FBRWZDLHdCQUZlLEdBRUpKLFVBQVUsQ0FBQ0ssT0FGUDtBQUdmQyx5QkFIZSxHQUdIQyxRQUFRLENBQUNMLE9BQU8sQ0FBQ00sS0FBUixFQUFELENBSEwsRUFLckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOztBQWRjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVJULFFBQVE7QUFBQTtBQUFBO0FBQUEsS0FBZDs7QUFpQkEsTUFBTVUsTUFBTSxHQUFHLFNBQVRBLE1BQVMsUUFBZTtBQUFBLFFBQVpSLEtBQVksU0FBWkEsS0FBWTtBQUM1QlMsV0FBTyxDQUFDQyxHQUFSLENBQVlWLEtBQVo7QUFDRCxHQUZEOztBQUlBVyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxDQUFNLEdBQUdDLE1BQWY7QUFEYyxRQUVOQyxJQUZNLEdBRUdGLENBRkgsQ0FFTkUsSUFGTTtBQUlkQSxRQUFJLENBQUNDLElBQUwsQ0FBVSxPQUFWLEVBQW1CLFlBQU07QUFDdkIsVUFBTUMsS0FBSyxHQUFHRixJQUFJLENBQUNFLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQjtBQUM1QkMsaUJBQVMsRUFBRTtBQURpQixPQUFoQixDQUFkO0FBSUFKLFVBQUksQ0FBQ0ssT0FBTCxDQUFhQyxNQUFiLENBQW9CLGVBQXBCLEVBQXFDO0FBQ25DQyxhQUFLLEVBQUUsTUFENEI7QUFFbkNDLGNBQU0sRUFBRSxFQUYyQjtBQUduQ0MsaUJBQVMsRUFBRSxLQUh3QjtBQUluQ0MsaUJBQVMsRUFBRTFCLFFBSndCO0FBS25DMkIsaUJBQVMsRUFBRWpCO0FBTHdCLE9BQXJDO0FBT0QsS0FaRDtBQWFELEdBakJRLEVBaUJOLEVBakJNLENBQVQ7QUFtQkEsc0JBQU87QUFBQSxjQUFHLENBQUNaLElBQUQsZ0JBQVE7QUFBSyxRQUFFLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVIsZ0JBQXlDLHFFQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNUMsbUJBQVA7QUFDRCxDQTVDRDs7R0FBTUYsSztVQUNvQkMsbUU7OztLQURwQkQsSztBQThDU0Esb0VBQWYiLCJmaWxlIjoiLi9Db21wb25lbnRzL0xheW91dC9Ub3BiYXIvTmF2SXRlbXMvTmF2SXRlbS9Mb2dpbi9Mb2dpbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlTG9jYWxTdGF0ZSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vY3VzdG9tLWhvb2tzL3VzZUxvY2FsU3RhdGVcIjtcblxuaW1wb3J0IHsgYmFja2VuZF91cmwgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vdXJsXCI7XG5cbmltcG9ydCBwb3N0IGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9VdGlsRnVuY3Rpb25zL3Bvc3RcIjtcblxuaW1wb3J0IFVzZXIgZnJvbSBcIi4vVXNlci9Vc2VyXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge31cblxuY29uc3QgTG9naW46IFJlYWN0LkZDPElQcm9wcz4gPSAoKSA9PiB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZUxvY2FsU3RhdGU8YW55PihcInVzZXJcIiwgXCJcIik7XG5cbiAgY29uc3Qgb25TaWduSW4gPSBhc3luYyAoZ29vZ2xlVXNlcjogYW55KSA9PiB7XG4gICAgaWYgKCFnb29nbGVVc2VyLmVycm9yKSB7XG4gICAgICBjb25zdCBwcm9maWxlID0gZ29vZ2xlVXNlci5nZXRCYXNpY1Byb2ZpbGUoKTtcbiAgICAgIGNvbnN0IGlkX3Rva2VuID0gZ29vZ2xlVXNlci50b2tlbklkO1xuICAgICAgY29uc3QgZ29vZ2xlX2lkID0gcGFyc2VJbnQocHJvZmlsZS5nZXRJZCgpKTtcblxuICAgICAgLy8gcG9zdChcbiAgICAgIC8vICAgYCR7YmFja2VuZF91cmx9L2FwaS9hdXRoL2dvb2dsZS92ZXJpZnlgLFxuICAgICAgLy8gICB7IGlkX3Rva2VuOiBpZF90b2tlbiwgZ29vZ2xlX2lkOiBnb29nbGVfaWQgfSxcbiAgICAgIC8vICAgKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgIC8vICAgICBzZXRVc2VyKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgLy8gICB9LFxuICAgICAgLy8gICAoKSA9PiB7fVxuICAgICAgLy8gKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb25GYWlsID0gKHsgZXJyb3IgfSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHc6IGFueSA9IHdpbmRvdztcbiAgICBjb25zdCB7IGdhcGkgfSA9IHc7XG5cbiAgICBnYXBpLmxvYWQoXCJhdXRoMlwiLCAoKSA9PiB7XG4gICAgICBjb25zdCBhdXRoMiA9IGdhcGkuYXV0aDIuaW5pdCh7XG4gICAgICAgIGNsaWVudF9pZDogXCI1NDAwODM5MzE4MTItN2J0MDVtcXRycmlvZzFmMWtkcHZvdGJ2bnIwMWlpZW5cIixcbiAgICAgIH0pO1xuXG4gICAgICBnYXBpLnNpZ25pbjIucmVuZGVyKFwic2lnbmluLWJ1dHRvblwiLCB7XG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgaGVpZ2h0OiA0MCxcbiAgICAgICAgbG9uZ3RpdGxlOiBmYWxzZSxcbiAgICAgICAgb25zdWNjZXNzOiBvblNpZ25JbixcbiAgICAgICAgb25mYWlsdXJlOiBvbkZhaWwsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiA8PnshdXNlciA/IDxkaXYgaWQ9XCJzaWduaW4tYnV0dG9uXCI+PC9kaXY+IDogPFVzZXIgLz59PC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/Layout/Topbar/NavItems/NavItem/Login/Login.tsx\n");

/***/ }),

/***/ "./UtilFunctions/post.js":
false,

/***/ "./node_modules/axios/index.js":
false,

/***/ "./node_modules/axios/lib/adapters/xhr.js":
false,

/***/ "./node_modules/axios/lib/axios.js":
false,

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
false,

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
false,

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
false,

/***/ "./node_modules/axios/lib/core/Axios.js":
false,

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
false,

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
false,

/***/ "./node_modules/axios/lib/core/createError.js":
false,

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
false,

/***/ "./node_modules/axios/lib/core/enhanceError.js":
false,

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
false,

/***/ "./node_modules/axios/lib/core/settle.js":
false,

/***/ "./node_modules/axios/lib/core/transformData.js":
false,

/***/ "./node_modules/axios/lib/defaults.js":
false,

/***/ "./node_modules/axios/lib/helpers/bind.js":
false,

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
false,

/***/ "./node_modules/axios/lib/helpers/cookies.js":
false,

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
false,

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
false,

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
false,

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
false,

/***/ "./node_modules/axios/lib/helpers/spread.js":
false,

/***/ "./node_modules/axios/lib/utils.js":
false,

/***/ "./node_modules/process/browser.js":
false,

/***/ "./url.js":
false

})