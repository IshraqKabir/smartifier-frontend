webpackHotUpdate_N_E("pages/user/profile",{

/***/ "./Components/Layout/Topbar/NavItems/NavItem/Login/Login.tsx":
/*!*******************************************************************!*\
  !*** ./Components/Layout/Topbar/NavItems/NavItem/Login/Login.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../custom-hooks/useLocalState */ \"./custom-hooks/useLocalState.ts\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons */ \"./node_modules/@material-ui/icons/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/Layout/Topbar/NavItems/NavItem/Login/Login.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Login = function Login() {\n  _s();\n\n  var _useLocalState = Object(_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"user\", \"\"),\n      _useLocalState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useLocalState, 2),\n      user = _useLocalState2[0],\n      setUser = _useLocalState2[1];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(\"\"),\n      url = _useState[0],\n      setUrl = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      open = _useState2[0],\n      setOpen = _useState2[1];\n\n  var classes = useStyles({\n    user: user\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    if (user) return;\n    axios__WEBPACK_IMPORTED_MODULE_3___default()({\n      method: \"get\",\n      url: \"/api/auth/google?get=link\"\n    }).then(function (res) {\n      setUrl(res.data.url);\n    });\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    if (!user) {\n      axios__WEBPACK_IMPORTED_MODULE_3___default()({\n        method: \"get\",\n        url: \"/api/auth/google?get=link\"\n      }).then(function (res) {\n        setUrl(res.data.url);\n      });\n    }\n  }, [user]);\n\n  var logOut = function logOut() {\n    setUser(\"\");\n  };\n\n  var handleClick = function handleClick() {\n    if (!user && !url) return;\n\n    if (!user && url) {\n      window.location.href = url.toString();\n    } else if (user) {\n      setOpen(!open);\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: classes.container,\n    onClick: handleClick,\n    children: [!user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: classes.googleLogoContainer,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(GoogleLogo, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }, _this), user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: classes.profilePic,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Avatar\"], {\n        alt: \"\".concat(user === null || user === void 0 ? void 0 : user.name),\n        src: \"\".concat(user.image_url)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n      className: classes.text,\n      children: !user && !url && \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n      className: classes.text,\n      children: !user && url && \"Sign in with Google\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n      className: classes.text,\n      children: user && \"\".concat(user.name.toLowerCase())\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: classes.arrow,\n      children: open ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__[\"ExpandLess\"], {\n        color: \"inherit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 17\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__[\"ExpandMore\"], {\n        color: \"inherit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 50\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }, _this), open && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: classes.collapseContainer,\n      onClick: function onClick() {\n        if (open) setOpen(false);\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: classes.menuItem,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n          href: \"/user/profile\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n              className: classes.linkText,\n              children: \"Profile\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 82,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 81,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: classes.menuItem,\n        onClick: function onClick() {\n          return logOut();\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: classes.linkText,\n          children: \"Logout\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 54,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Login, \"vUjpaadnULY2PoyN57pjBqkBROU=\", false, function () {\n  return [_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_5__[\"default\"], useStyles];\n});\n\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])({\n  container: {\n    display: \"flex\",\n    alignItems: \"center\",\n    minWidth: 200,\n    justifyContent: \"space-between\",\n    padding: \"1rem 1rem 1rem 0.5rem\",\n    borderRadius: 5,\n    position: \"relative\",\n    cursor: \"pointer\",\n    backgroundColor: function backgroundColor(props) {\n      var user = props.user;\n      return user ? \"inherit\" : \"white\";\n    }\n  },\n  text: {\n    color: function color(props) {\n      var user = props.user;\n      return user ? \"white\" : \"black\";\n    },\n    fontSize: 18,\n    fontWeight: 500,\n    textTransform: \"capitalize\",\n    margin: \"0px 10px 0px 5px\"\n  },\n  googleLogoContainer: {\n    marginRight: 5,\n    width: 20,\n    height: 20,\n    \"float\": \"left\",\n    display: \"flex\",\n    alignItems: \"center\"\n  },\n  profilePic: {\n    borderRadius: \"50%\",\n    overflow: \"hidden\",\n    height: 40,\n    width: 40,\n    display: \"flex\",\n    alignItems: \"center\"\n  },\n  arrow: {\n    color: \"#3798A7\",\n    display: \"flex\",\n    alignItems: \"center\",\n    justifyContent: \"center\"\n  },\n  collapseContainer: {\n    position: \"absolute\",\n    top: 50,\n    right: 0,\n    zIndex: 1000,\n    backgroundColor: \"#003085\",\n    color: \"white\",\n    width: \"auto\",\n    display: \"flex\",\n    flexDirection: \"column\"\n  },\n  menuItem: {\n    width: \"100%\",\n    height: \"100%\",\n    padding: 16,\n    borderBottom: \"1px solid white\",\n    color: \"white\",\n    cursor: \"pointer\",\n    textAlign: \"center\",\n    \"&:hover\": {\n      borderBottom: \"1px solid #3798A7\"\n    }\n  },\n  linkText: {\n    color: \"white\",\n    \"&:hover\": {\n      color: \"#3798A7\"\n    }\n  }\n});\n\nvar GoogleLogo = function GoogleLogo() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"svg\", {\n    width: \"20\",\n    height: \"20\",\n    viewBox: \"0 0 256 262\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    preserveAspectRatio: \"xMidYMid\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"path\", {\n      d: \"M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027\",\n      fill: \"#4285F4\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 184,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"path\", {\n      d: \"M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1\",\n      fill: \"#34A853\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 188,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"path\", {\n      d: \"M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782\",\n      fill: \"#FBBC05\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 192,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"path\", {\n      d: \"M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251\",\n      fill: \"#EB4335\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 196,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 177,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = GoogleLogo;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Login\");\n$RefreshReg$(_c2, \"GoogleLogo\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9MYXlvdXQvVG9wYmFyL05hdkl0ZW1zL05hdkl0ZW0vTG9naW4vTG9naW4udHN4Pzg3MzQiXSwibmFtZXMiOlsiTG9naW4iLCJ1c2VMb2NhbFN0YXRlIiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsInVybCIsInNldFVybCIsIm9wZW4iLCJzZXRPcGVuIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInVzZUVmZmVjdCIsImF4aW9zIiwibWV0aG9kIiwidGhlbiIsInJlcyIsImRhdGEiLCJsb2dPdXQiLCJoYW5kbGVDbGljayIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInRvU3RyaW5nIiwiY29udGFpbmVyIiwiZ29vZ2xlTG9nb0NvbnRhaW5lciIsInByb2ZpbGVQaWMiLCJuYW1lIiwiaW1hZ2VfdXJsIiwidGV4dCIsInRvTG93ZXJDYXNlIiwiYXJyb3ciLCJjb2xsYXBzZUNvbnRhaW5lciIsIm1lbnVJdGVtIiwibGlua1RleHQiLCJtYWtlU3R5bGVzIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJtaW5XaWR0aCIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsInBvc2l0aW9uIiwiY3Vyc29yIiwiYmFja2dyb3VuZENvbG9yIiwicHJvcHMiLCJjb2xvciIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInRleHRUcmFuc2Zvcm0iLCJtYXJnaW4iLCJtYXJnaW5SaWdodCIsIndpZHRoIiwiaGVpZ2h0Iiwib3ZlcmZsb3ciLCJ0b3AiLCJyaWdodCIsInpJbmRleCIsImZsZXhEaXJlY3Rpb24iLCJib3JkZXJCb3R0b20iLCJ0ZXh0QWxpZ24iLCJHb29nbGVMb2dvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFJQSxJQUFNQSxLQUF1QixHQUFHLFNBQTFCQSxLQUEwQixHQUFNO0FBQUE7O0FBQUEsdUJB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LFVBTHRCO0FBQUEsNEJBT0U7QUFDRSxPQUFDLEVBQUMsNExBREo7QUFFRSxVQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEYsZUFXRTtBQUNFLE9BQUMsRUFBQywyTkFESjtBQUVFLFVBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFYRixlQWVFO0FBQ0UsT0FBQyxFQUFDLG1NQURKO0FBRUUsVUFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWZGLGVBbUJFO0FBQ0UsT0FBQyxFQUFDLDhMQURKO0FBRUUsVUFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBCRCxDQTNCRDs7TUFBTUEsVSIsImZpbGUiOiIuL0NvbXBvbmVudHMvTGF5b3V0L1RvcGJhci9OYXZJdGVtcy9OYXZJdGVtL0xvZ2luL0xvZ2luLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF2YXRhciwgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VMb2NhbFN0YXRlIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9jdXN0b20taG9va3MvdXNlTG9jYWxTdGF0ZVwiO1xuXG5pbXBvcnQgeyBFeHBhbmRMZXNzLCBFeHBhbmRNb3JlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHt9XG5cbmNvbnN0IExvZ2luOiBSZWFjdC5GQzxJUHJvcHM+ID0gKCkgPT4ge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VMb2NhbFN0YXRlKFwidXNlclwiLCBcIlwiKTtcbiAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlPFN0cmluZz4oXCJcIik7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKHsgdXNlciB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1c2VyKSByZXR1cm47XG5cbiAgICBheGlvcyh7XG4gICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICB1cmw6IFwiL2FwaS9hdXRoL2dvb2dsZT9nZXQ9bGlua1wiLFxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgc2V0VXJsKHJlcy5kYXRhLnVybCk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghdXNlcikge1xuICAgICAgYXhpb3Moe1xuICAgICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICAgIHVybDogXCIvYXBpL2F1dGgvZ29vZ2xlP2dldD1saW5rXCIsXG4gICAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgc2V0VXJsKHJlcy5kYXRhLnVybCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFt1c2VyXSk7XG5cbiAgY29uc3QgbG9nT3V0ID0gKCkgPT4ge1xuICAgIHNldFVzZXIoXCJcIik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgaWYgKCF1c2VyICYmICF1cmwpIHJldHVybjtcbiAgICBpZiAoIXVzZXIgJiYgdXJsKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybC50b1N0cmluZygpO1xuICAgIH0gZWxzZSBpZiAodXNlcikge1xuICAgICAgc2V0T3Blbighb3Blbik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfSBvbkNsaWNrPXtoYW5kbGVDbGlja30+XG4gICAgICB7IXVzZXIgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5nb29nbGVMb2dvQ29udGFpbmVyfT5cbiAgICAgICAgICA8R29vZ2xlTG9nbyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICB7dXNlciAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2ZpbGVQaWN9PlxuICAgICAgICAgIDxBdmF0YXIgYWx0PXtgJHt1c2VyPy5uYW1lfWB9IHNyYz17YCR7dXNlci5pbWFnZV91cmx9YH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PnshdXNlciAmJiAhdXJsICYmIFwiTG9hZGluZy4uLlwifTwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT57IXVzZXIgJiYgdXJsICYmIFwiU2lnbiBpbiB3aXRoIEdvb2dsZVwifTwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT57dXNlciAmJiBgJHt1c2VyLm5hbWUudG9Mb3dlckNhc2UoKX1gfTwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFycm93fT5cbiAgICAgICAge29wZW4gPyA8RXhwYW5kTGVzcyBjb2xvcj1cImluaGVyaXRcIiAvPiA6IDxFeHBhbmRNb3JlIGNvbG9yPVwiaW5oZXJpdFwiIC8+fVxuICAgICAgPC9kaXY+XG4gICAgICB7b3BlbiAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY29sbGFwc2VDb250YWluZXJ9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgaWYgKG9wZW4pIHNldE9wZW4oZmFsc2UpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVJdGVtfT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdXNlci9wcm9maWxlYH0+XG4gICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtUZXh0fT5Qcm9maWxlPC9kaXY+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51SXRlbX0gb25DbGljaz17KCkgPT4gbG9nT3V0KCl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGlua1RleHR9PkxvZ291dDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIGNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgbWluV2lkdGg6IDIwMCxcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgcGFkZGluZzogXCIxcmVtIDFyZW0gMXJlbSAwLjVyZW1cIixcbiAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogKHByb3BzOiB7IHVzZXI6IGFueSB9KSA9PiB7XG4gICAgICBjb25zdCB7IHVzZXIgfSA9IHByb3BzO1xuICAgICAgcmV0dXJuIHVzZXIgPyBcImluaGVyaXRcIiA6IFwid2hpdGVcIjtcbiAgICB9LFxuICB9LFxuICB0ZXh0OiB7XG4gICAgY29sb3I6IChwcm9wczogeyB1c2VyOiBhbnkgfSkgPT4ge1xuICAgICAgY29uc3QgeyB1c2VyIH0gPSBwcm9wcztcbiAgICAgIHJldHVybiB1c2VyID8gXCJ3aGl0ZVwiIDogXCJibGFja1wiO1xuICAgIH0sXG4gICAgZm9udFNpemU6IDE4LFxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICB0ZXh0VHJhbnNmb3JtOiBcImNhcGl0YWxpemVcIixcbiAgICBtYXJnaW46IFwiMHB4IDEwcHggMHB4IDVweFwiLFxuICB9LFxuICBnb29nbGVMb2dvQ29udGFpbmVyOiB7XG4gICAgbWFyZ2luUmlnaHQ6IDUsXG4gICAgd2lkdGg6IDIwLFxuICAgIGhlaWdodDogMjAsXG4gICAgZmxvYXQ6IFwibGVmdFwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIH0sXG4gIHByb2ZpbGVQaWM6IHtcbiAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgaGVpZ2h0OiA0MCxcbiAgICB3aWR0aDogNDAsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgfSxcbiAgYXJyb3c6IHtcbiAgICBjb2xvcjogXCIjMzc5OEE3XCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgfSxcbiAgY29sbGFwc2VDb250YWluZXI6IHtcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgIHRvcDogNTAsXG4gICAgcmlnaHQ6IDAsXG4gICAgekluZGV4OiAxMDAwLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDAzMDg1XCIsXG4gICAgY29sb3I6IFwid2hpdGVcIixcbiAgICB3aWR0aDogXCJhdXRvXCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgfSxcbiAgbWVudUl0ZW06IHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICBwYWRkaW5nOiAxNixcbiAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkIHdoaXRlXCIsXG4gICAgY29sb3I6IFwid2hpdGVcIixcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCAjMzc5OEE3XCIsXG4gICAgfSxcbiAgfSxcbiAgbGlua1RleHQ6IHtcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBjb2xvcjogXCIjMzc5OEE3XCIsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5jb25zdCBHb29nbGVMb2dvID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMjBcIlxuICAgICAgaGVpZ2h0PVwiMjBcIlxuICAgICAgdmlld0JveD1cIjAgMCAyNTYgMjYyXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkXCJcbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTI1NS44NzggMTMzLjQ1MWMwLTEwLjczNC0uODcxLTE4LjU2Ny0yLjc1Ni0yNi42OUgxMzAuNTV2NDguNDQ4aDcxLjk0N2MtMS40NSAxMi4wNC05LjI4MyAzMC4xNzItMjYuNjkgNDIuMzU2bC0uMjQ0IDEuNjIyIDM4Ljc1NSAzMC4wMjMgMi42ODUuMjY4YzI0LjY1OS0yMi43NzQgMzguODc1LTU2LjI4MiAzOC44NzUtOTYuMDI3XCJcbiAgICAgICAgZmlsbD1cIiM0Mjg1RjRcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTMwLjU1IDI2MS4xYzM1LjI0OCAwIDY0LjgzOS0xMS42MDUgODYuNDUzLTMxLjYyMmwtNDEuMTk2LTMxLjkxM2MtMTEuMDI0IDcuNjg4LTI1LjgyIDEzLjA1NS00NS4yNTcgMTMuMDU1LTM0LjUyMyAwLTYzLjgyNC0yMi43NzMtNzQuMjY5LTU0LjI1bC0xLjUzMS4xMy00MC4yOTggMzEuMTg3LS41MjcgMS40NjVDMzUuMzkzIDIzMS43OTggNzkuNDkgMjYxLjEgMTMwLjU1IDI2MS4xXCJcbiAgICAgICAgZmlsbD1cIiMzNEE4NTNcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNNTYuMjgxIDE1Ni4zN2MtMi43NTYtOC4xMjMtNC4zNTEtMTYuODI3LTQuMzUxLTI1LjgyIDAtOC45OTQgMS41OTUtMTcuNjk3IDQuMjA2LTI1LjgybC0uMDczLTEuNzNMMTUuMjYgNzEuMzEybC0xLjMzNS42MzVDNS4wNzcgODkuNjQ0IDAgMTA5LjUxNyAwIDEzMC41NXM1LjA3NyA0MC45MDUgMTMuOTI1IDU4LjYwMmw0Mi4zNTYtMzIuNzgyXCJcbiAgICAgICAgZmlsbD1cIiNGQkJDMDVcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTMwLjU1IDUwLjQ3OWMyNC41MTQgMCA0MS4wNSAxMC41ODkgNTAuNDc5IDE5LjQzOGwzNi44NDQtMzUuOTc0QzE5NS4yNDUgMTIuOTEgMTY1Ljc5OCAwIDEzMC41NSAwIDc5LjQ5IDAgMzUuMzkzIDI5LjMwMSAxMy45MjUgNzEuOTQ3bDQyLjIxMSAzMi43ODNjMTAuNTktMzEuNDc3IDM5Ljg5MS01NC4yNTEgNzQuNDE0LTU0LjI1MVwiXG4gICAgICAgIGZpbGw9XCIjRUI0MzM1XCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/Layout/Topbar/NavItems/NavItem/Login/Login.tsx\n");

/***/ })

})