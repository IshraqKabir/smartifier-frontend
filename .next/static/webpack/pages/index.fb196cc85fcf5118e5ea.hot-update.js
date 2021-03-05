webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/Layout/Topbar/NavItems/NavItem/Login/Login.tsx":
/*!*******************************************************************!*\
  !*** ./Components/Layout/Topbar/NavItems/NavItem/Login/Login.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../custom-hooks/useLocalState */ \"./custom-hooks/useLocalState.ts\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons */ \"./node_modules/@material-ui/icons/esm/index.js\");\n\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/Layout/Topbar/NavItems/NavItem/Login/Login.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Login = function Login() {\n  _s();\n\n  var _useLocalState = Object(_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"user\", \"\"),\n      _useLocalState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useLocalState, 2),\n      user = _useLocalState2[0],\n      setUser = _useLocalState2[1];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(\"\"),\n      url = _useState[0],\n      setUrl = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      open = _useState2[0],\n      setOpen = _useState2[1];\n\n  var classes = useStyles({\n    user: user\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    if (user) return;\n    axios__WEBPACK_IMPORTED_MODULE_3___default()({\n      method: \"get\",\n      url: \"/api/auth/google?get=link\"\n    }).then(function (res) {\n      setUrl(res.data.url);\n    });\n  }, []);\n\n  var logOut = function logOut() {\n    setUser(\"\");\n  };\n\n  var handleClick = function handleClick() {\n    if (!user && !url) return;\n\n    if (!user && url) {\n      window.location.href = url.toString();\n    } else if (user) {\n      setOpen(!open);\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: classes.container,\n    onClick: handleClick,\n    children: [!user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: classes.googleLogoContainer,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(GoogleLogo, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }, _this), user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: classes.profilePic,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Avatar\"], {\n        alt: \"\".concat(user === null || user === void 0 ? void 0 : user.name),\n        src: \"\".concat(user.image_url)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n      className: classes.text,\n      children: !user && !url && \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n      className: classes.text,\n      children: !user && url && \"Sign in with Google\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n      className: classes.text,\n      children: user && \"\".concat(user.name.toLowerCase())\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: classes.arrow,\n      children: open ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__[\"ExpandLess\"], {\n        color: \"inherit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 17\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__[\"ExpandMore\"], {\n        color: \"inherit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 50\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: classes.collapseContainer\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Login, \"nWAbG0tHruHov/r91ImDUPknU0E=\", false, function () {\n  return [_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_5__[\"default\"], useStyles];\n});\n\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])({\n  container: {\n    display: \"flex\",\n    alignItems: \"center\",\n    minWidth: 200,\n    justifyContent: \"space-between\",\n    padding: \"1rem 1rem 1rem 0.5rem\",\n    borderRadius: 5,\n    position: \"relative\",\n    cursor: \"pointer\",\n    backgroundColor: function backgroundColor(props) {\n      var user = props.user;\n      return user ? \"inherit\" : \"white\";\n    }\n  },\n  text: {\n    color: function color(props) {\n      var user = props.user;\n      return user ? \"white\" : \"black\";\n    },\n    fontSize: 18,\n    fontWeight: 500,\n    textTransform: \"capitalize\",\n    margin: \"0px 10px 0px 0px\"\n  },\n  googleLogoContainer: {\n    marginRight: 5,\n    width: 20,\n    height: 20,\n    \"float\": \"left\",\n    display: \"flex\",\n    alignItems: \"center\"\n  },\n  profilePic: {\n    borderRadius: \"50%\",\n    overflow: \"hidden\",\n    height: 40,\n    width: 40,\n    display: \"flex\",\n    alignItems: \"center\"\n  },\n  arrow: {\n    color: \"#3798A7\",\n    display: \"flex\",\n    alignItems: \"center\",\n    justifyContent: \"center\"\n  },\n  collapseContainer: {\n    position: \"absolute\",\n    right: 0,\n    zIndex: 1000,\n    backgroundColor: \"#003085\",\n    color: \"white\",\n    width: \"auto\",\n    display: \"flex\",\n    flexDirection: \"column\"\n  }\n});\n\nvar GoogleLogo = function GoogleLogo() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"svg\", {\n    width: \"20\",\n    height: \"20\",\n    viewBox: \"0 0 256 262\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    preserveAspectRatio: \"xMidYMid\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"path\", {\n      d: \"M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027\",\n      fill: \"#4285F4\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"path\", {\n      d: \"M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1\",\n      fill: \"#34A853\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"path\", {\n      d: \"M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782\",\n      fill: \"#FBBC05\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"path\", {\n      d: \"M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251\",\n      fill: \"#EB4335\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 131,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = GoogleLogo;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Login\");\n$RefreshReg$(_c2, \"GoogleLogo\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9MYXlvdXQvVG9wYmFyL05hdkl0ZW1zL05hdkl0ZW0vTG9naW4vTG9naW4udHN4Pzg3MzQiXSwibmFtZXMiOlsiTG9naW4iLCJ1c2VMb2NhbFN0YXRlIiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsInVybCIsInNldFVybCIsIm9wZW4iLCJzZXRPcGVuIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInVzZUVmZmVjdCIsImF4aW9zIiwibWV0aG9kIiwidGhlbiIsInJlcyIsImRhdGEiLCJsb2dPdXQiLCJoYW5kbGVDbGljayIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInRvU3RyaW5nIiwiY29udGFpbmVyIiwiZ29vZ2xlTG9nb0NvbnRhaW5lciIsInByb2ZpbGVQaWMiLCJuYW1lIiwiaW1hZ2VfdXJsIiwidGV4dCIsInRvTG93ZXJDYXNlIiwiYXJyb3ciLCJjb2xsYXBzZUNvbnRhaW5lciIsIm1ha2VTdHlsZXMiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsIm1pbldpZHRoIiwianVzdGlmeUNvbnRlbnQiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwicG9zaXRpb24iLCJjdXJzb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwcm9wcyIsImNvbG9yIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwidGV4dFRyYW5zZm9ybSIsIm1hcmdpbiIsIm1hcmdpblJpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJvdmVyZmxvdyIsInJpZ2h0IiwiekluZGV4IiwiZmxleERpcmVjdGlvbiIsIkdvb2dsZUxvZ28iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7O0FBSUEsSUFBTUEsS0FBdUIsR0FBRyxTQUExQkEsS0FBMEIsR0FBTTtBQUFBOztBQUFBLHVCQUNaQywyRUFBYSxDQUFDLE1BQUQsRUFBUyxFQUFULENBREQ7QUFBQTtBQUFBLE1BQzdCQyxJQUQ2QjtBQUFB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QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBCRCxDQTNCRDs7TUFBTUEsVSIsImZpbGUiOiIuL0NvbXBvbmVudHMvTGF5b3V0L1RvcGJhci9OYXZJdGVtcy9OYXZJdGVtL0xvZ2luL0xvZ2luLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF2YXRhciwgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VMb2NhbFN0YXRlIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9jdXN0b20taG9va3MvdXNlTG9jYWxTdGF0ZVwiO1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuL1VzZXIvVXNlclwiO1xuaW1wb3J0IHsgRXhwYW5kTGVzcywgRXhwYW5kTW9yZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7fVxuXG5jb25zdCBMb2dpbjogUmVhY3QuRkM8SVByb3BzPiA9ICgpID0+IHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlTG9jYWxTdGF0ZShcInVzZXJcIiwgXCJcIik7XG4gIGNvbnN0IFt1cmwsIHNldFVybF0gPSB1c2VTdGF0ZTxTdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcyh7IHVzZXIgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodXNlcikgcmV0dXJuO1xuXG4gICAgYXhpb3Moe1xuICAgICAgbWV0aG9kOiBcImdldFwiLFxuICAgICAgdXJsOiBcIi9hcGkvYXV0aC9nb29nbGU/Z2V0PWxpbmtcIixcbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIHNldFVybChyZXMuZGF0YS51cmwpO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgbG9nT3V0ID0gKCkgPT4ge1xuICAgIHNldFVzZXIoXCJcIik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgaWYgKCF1c2VyICYmICF1cmwpIHJldHVybjtcbiAgICBpZiAoIXVzZXIgJiYgdXJsKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybC50b1N0cmluZygpO1xuICAgIH0gZWxzZSBpZiAodXNlcikge1xuICAgICAgc2V0T3Blbighb3Blbik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfSBvbkNsaWNrPXtoYW5kbGVDbGlja30+XG4gICAgICB7IXVzZXIgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5nb29nbGVMb2dvQ29udGFpbmVyfT5cbiAgICAgICAgICA8R29vZ2xlTG9nbyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICB7dXNlciAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2ZpbGVQaWN9PlxuICAgICAgICAgIDxBdmF0YXIgYWx0PXtgJHt1c2VyPy5uYW1lfWB9IHNyYz17YCR7dXNlci5pbWFnZV91cmx9YH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PnshdXNlciAmJiAhdXJsICYmIFwiTG9hZGluZy4uLlwifTwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT57IXVzZXIgJiYgdXJsICYmIFwiU2lnbiBpbiB3aXRoIEdvb2dsZVwifTwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT57dXNlciAmJiBgJHt1c2VyLm5hbWUudG9Mb3dlckNhc2UoKX1gfTwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFycm93fT5cbiAgICAgICAge29wZW4gPyA8RXhwYW5kTGVzcyBjb2xvcj1cImluaGVyaXRcIiAvPiA6IDxFeHBhbmRNb3JlIGNvbG9yPVwiaW5oZXJpdFwiIC8+fVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb2xsYXBzZUNvbnRhaW5lcn0+XG4gICAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIGNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgbWluV2lkdGg6IDIwMCxcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgcGFkZGluZzogXCIxcmVtIDFyZW0gMXJlbSAwLjVyZW1cIixcbiAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogKHByb3BzOiB7IHVzZXI6IGFueSB9KSA9PiB7XG4gICAgICBjb25zdCB7IHVzZXIgfSA9IHByb3BzO1xuICAgICAgcmV0dXJuIHVzZXIgPyBcImluaGVyaXRcIiA6IFwid2hpdGVcIjtcbiAgICB9LFxuICB9LFxuICB0ZXh0OiB7XG4gICAgY29sb3I6IChwcm9wczogeyB1c2VyOiBhbnkgfSkgPT4ge1xuICAgICAgY29uc3QgeyB1c2VyIH0gPSBwcm9wcztcbiAgICAgIHJldHVybiB1c2VyID8gXCJ3aGl0ZVwiIDogXCJibGFja1wiO1xuICAgIH0sXG4gICAgZm9udFNpemU6IDE4LFxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICB0ZXh0VHJhbnNmb3JtOiBcImNhcGl0YWxpemVcIixcbiAgICBtYXJnaW46IFwiMHB4IDEwcHggMHB4IDBweFwiLFxuICB9LFxuICBnb29nbGVMb2dvQ29udGFpbmVyOiB7XG4gICAgbWFyZ2luUmlnaHQ6IDUsXG4gICAgd2lkdGg6IDIwLFxuICAgIGhlaWdodDogMjAsXG4gICAgZmxvYXQ6IFwibGVmdFwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIH0sXG4gIHByb2ZpbGVQaWM6IHtcbiAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgaGVpZ2h0OiA0MCxcbiAgICB3aWR0aDogNDAsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgfSxcbiAgYXJyb3c6IHtcbiAgICBjb2xvcjogXCIjMzc5OEE3XCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgfSxcbiAgY29sbGFwc2VDb250YWluZXI6IHtcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgIHJpZ2h0OiAwLFxuICAgIHpJbmRleDogMTAwMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwMzA4NVwiLFxuICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgd2lkdGg6IFwiYXV0b1wiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIH0sXG59KTtcblxuY29uc3QgR29vZ2xlTG9nbyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB3aWR0aD1cIjIwXCJcbiAgICAgIGhlaWdodD1cIjIwXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjU2IDI2MlwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZFwiXG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0yNTUuODc4IDEzMy40NTFjMC0xMC43MzQtLjg3MS0xOC41NjctMi43NTYtMjYuNjlIMTMwLjU1djQ4LjQ0OGg3MS45NDdjLTEuNDUgMTIuMDQtOS4yODMgMzAuMTcyLTI2LjY5IDQyLjM1NmwtLjI0NCAxLjYyMiAzOC43NTUgMzAuMDIzIDIuNjg1LjI2OGMyNC42NTktMjIuNzc0IDM4Ljg3NS01Ni4yODIgMzguODc1LTk2LjAyN1wiXG4gICAgICAgIGZpbGw9XCIjNDI4NUY0XCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTEzMC41NSAyNjEuMWMzNS4yNDggMCA2NC44MzktMTEuNjA1IDg2LjQ1My0zMS42MjJsLTQxLjE5Ni0zMS45MTNjLTExLjAyNCA3LjY4OC0yNS44MiAxMy4wNTUtNDUuMjU3IDEzLjA1NS0zNC41MjMgMC02My44MjQtMjIuNzczLTc0LjI2OS01NC4yNWwtMS41MzEuMTMtNDAuMjk4IDMxLjE4Ny0uNTI3IDEuNDY1QzM1LjM5MyAyMzEuNzk4IDc5LjQ5IDI2MS4xIDEzMC41NSAyNjEuMVwiXG4gICAgICAgIGZpbGw9XCIjMzRBODUzXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTU2LjI4MSAxNTYuMzdjLTIuNzU2LTguMTIzLTQuMzUxLTE2LjgyNy00LjM1MS0yNS44MiAwLTguOTk0IDEuNTk1LTE3LjY5NyA0LjIwNi0yNS44MmwtLjA3My0xLjczTDE1LjI2IDcxLjMxMmwtMS4zMzUuNjM1QzUuMDc3IDg5LjY0NCAwIDEwOS41MTcgMCAxMzAuNTVzNS4wNzcgNDAuOTA1IDEzLjkyNSA1OC42MDJsNDIuMzU2LTMyLjc4MlwiXG4gICAgICAgIGZpbGw9XCIjRkJCQzA1XCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTEzMC41NSA1MC40NzljMjQuNTE0IDAgNDEuMDUgMTAuNTg5IDUwLjQ3OSAxOS40MzhsMzYuODQ0LTM1Ljk3NEMxOTUuMjQ1IDEyLjkxIDE2NS43OTggMCAxMzAuNTUgMCA3OS40OSAwIDM1LjM5MyAyOS4zMDEgMTMuOTI1IDcxLjk0N2w0Mi4yMTEgMzIuNzgzYzEwLjU5LTMxLjQ3NyAzOS44OTEtNTQuMjUxIDc0LjQxNC01NC4yNTFcIlxuICAgICAgICBmaWxsPVwiI0VCNDMzNVwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/Layout/Topbar/NavItems/NavItem/Login/Login.tsx\n");

/***/ })

})