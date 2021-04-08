webpackHotUpdate_N_E("pages/blog/posts/[slug]",{

/***/ "./Components/Layout/Topbar/NavItems/NavItem/Login/Login.tsx":
/*!*******************************************************************!*\
  !*** ./Components/Layout/Topbar/NavItems/NavItem/Login/Login.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../custom-hooks/useLocalState */ \"./custom-hooks/useLocalState.ts\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons */ \"./node_modules/@material-ui/icons/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/Layout/Topbar/NavItems/NavItem/Login/Login.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Login = function Login() {\n  _s();\n\n  var _useLocalState = Object(_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"user\", \"\"),\n      _useLocalState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useLocalState, 2),\n      user = _useLocalState2[0],\n      setUser = _useLocalState2[1];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(\"\"),\n      url = _useState[0],\n      setUrl = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      open = _useState2[0],\n      setOpen = _useState2[1];\n\n  var classes = useStyles({\n    user: user\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    if (user) return;\n    axios__WEBPACK_IMPORTED_MODULE_3___default()({\n      method: \"get\",\n      url: \"/api/auth/google?get=link\"\n    }).then(function (res) {\n      setUrl(res.data.url);\n    });\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    if (!user) {\n      axios__WEBPACK_IMPORTED_MODULE_3___default()({\n        method: \"get\",\n        url: \"/api/auth/google?get=link\"\n      }).then(function (res) {\n        setUrl(res.data.url);\n      });\n    }\n  }, [user]);\n\n  var logOut = function logOut() {\n    setUser(\"\");\n    location.reload();\n  };\n\n  var handleClick = function handleClick(event) {\n    if (!user && !url) return;\n\n    if (!user && url) {\n      event.preventDefault(); // window.location.href = url.toString();\n\n      window.open(url.toString());\n    } else if (user) {\n      setOpen(!open);\n    }\n  };\n\n  var Element = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: classes.container,\n    onClick: handleClick,\n    children: [!user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: classes.googleLogoContainer,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(GoogleLogo, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }, _this), user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: classes.profilePic,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Avatar\"], {\n        alt: \"\".concat(user === null || user === void 0 ? void 0 : user.name),\n        src: \"\".concat(user.picture),\n        style: {\n          height: 35,\n          width: 35\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n      className: classes.text,\n      children: !user && !url && \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n      className: classes.text,\n      children: !user && url && \"Sign in with Google\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n      className: classes.text,\n      children: user && \"\".concat(user.name.toLowerCase())\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, _this), user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: classes.arrow,\n      children: open ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__[\"ExpandLess\"], {\n        color: \"inherit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 13\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__[\"ExpandMore\"], {\n        color: \"inherit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 13\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }, _this), open && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: classes.collapseContainer,\n      onClick: function onClick() {\n        if (open) setOpen(false);\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: classes.menuItem,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n          href: \"/user/profile\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n            style: {\n              textDecoration: \"none\"\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n              className: classes.linkText,\n              children: \"Profile\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 95,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: classes.menuItem,\n        onClick: function onClick() {\n          return logOut();\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: classes.linkText,\n          children: \"Logout\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 5\n  }, _this);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: user ? Element : url ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n      href: url.toString(),\n      children: Element\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 31\n    }, _this) : Element\n  }, void 0, false);\n};\n\n_s(Login, \"vUjpaadnULY2PoyN57pjBqkBROU=\", false, function () {\n  return [_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_5__[\"default\"], useStyles];\n});\n\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])({\n  container: {\n    display: \"flex\",\n    alignItems: \"center\",\n    minWidth: 150,\n    justifyContent: \"space-between\",\n    padding: \"0.5rem 0.5rem 0.5rem 0.25rem\",\n    borderRadius: 5,\n    position: \"relative\",\n    cursor: \"pointer\",\n    backgroundColor: function backgroundColor(props) {\n      var user = props.user;\n      return user ? \"inherit\" : \"white\";\n    }\n  },\n  text: {\n    color: function color(props) {\n      var user = props.user;\n      return user ? \"white\" : \"black\";\n    },\n    fontSize: 14,\n    fontWeight: 500,\n    textTransform: \"capitalize\",\n    margin: \"0px 5px 0px 2px\",\n    whiteSpace: \"nowrap\",\n    overflow: \"hidden\"\n  },\n  googleLogoContainer: {\n    marginRight: 5,\n    marginLeft: 5,\n    width: 20,\n    height: 20,\n    \"float\": \"left\",\n    display: \"flex\",\n    alignItems: \"center\"\n  },\n  profilePic: {\n    borderRadius: \"50%\",\n    overflow: \"hidden\",\n    height: 40,\n    width: 40,\n    display: \"flex\",\n    alignItems: \"center\"\n  },\n  arrow: {\n    color: \"#3798A7\",\n    display: \"flex\",\n    alignItems: \"center\",\n    justifyContent: \"center\"\n  },\n  collapseContainer: {\n    position: \"absolute\",\n    top: 50,\n    right: 0,\n    zIndex: 1000,\n    backgroundColor: \"#003085\",\n    color: \"white\",\n    width: \"auto\",\n    display: \"flex\",\n    flexDirection: \"column\"\n  },\n  menuItem: {\n    width: \"100%\",\n    height: \"100%\",\n    padding: 16,\n    borderBottom: \"1px solid white\",\n    color: \"white\",\n    cursor: \"pointer\",\n    textAlign: \"center\",\n    \"&:hover\": {\n      borderBottom: \"1px solid #3798A7\"\n    }\n  },\n  linkText: {\n    color: \"white\",\n    \"&:hover\": {\n      color: \"#3798A7\"\n    }\n  }\n});\n\nvar GoogleLogo = function GoogleLogo() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"svg\", {\n    width: \"20\",\n    height: \"20\",\n    viewBox: \"0 0 256 262\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    preserveAspectRatio: \"xMidYMid\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"path\", {\n      d: \"M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027\",\n      fill: \"#4285F4\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 206,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"path\", {\n      d: \"M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1\",\n      fill: \"#34A853\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 210,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"path\", {\n      d: \"M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782\",\n      fill: \"#FBBC05\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 214,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"path\", {\n      d: \"M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251\",\n      fill: \"#EB4335\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 218,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 199,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = GoogleLogo;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Login\");\n$RefreshReg$(_c2, \"GoogleLogo\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9MYXlvdXQvVG9wYmFyL05hdkl0ZW1zL05hdkl0ZW0vTG9naW4vTG9naW4udHN4Pzg3MzQiXSwibmFtZXMiOlsiTG9naW4iLCJ1c2VMb2NhbFN0YXRlIiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsInVybCIsInNldFVybCIsIm9wZW4iLCJzZXRPcGVuIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInVzZUVmZmVjdCIsImF4aW9zIiwibWV0aG9kIiwidGhlbiIsInJlcyIsImRhdGEiLCJsb2dPdXQiLCJsb2NhdGlvbiIsInJlbG9hZCIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIndpbmRvdyIsInRvU3RyaW5nIiwiRWxlbWVudCIsImNvbnRhaW5lciIsImdvb2dsZUxvZ29Db250YWluZXIiLCJwcm9maWxlUGljIiwibmFtZSIsInBpY3R1cmUiLCJoZWlnaHQiLCJ3aWR0aCIsInRleHQiLCJ0b0xvd2VyQ2FzZSIsImFycm93IiwiY29sbGFwc2VDb250YWluZXIiLCJtZW51SXRlbSIsInRleHREZWNvcmF0aW9uIiwibGlua1RleHQiLCJtYWtlU3R5bGVzIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJtaW5XaWR0aCIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsInBvc2l0aW9uIiwiY3Vyc29yIiwiYmFja2dyb3VuZENvbG9yIiwicHJvcHMiLCJjb2xvciIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInRleHRUcmFuc2Zvcm0iLCJtYXJnaW4iLCJ3aGl0ZVNwYWNlIiwib3ZlcmZsb3ciLCJtYXJnaW5SaWdodCIsIm1hcmdpbkxlZnQiLCJ0b3AiLCJyaWdodCIsInpJbmRleCIsImZsZXhEaXJlY3Rpb24iLCJib3JkZXJCb3R0b20iLCJ0ZXh0QWxpZ24iLCJHb29nbGVMb2dvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBSUEsSUFBTUEsS0FBdUIsR0FBRyxTQUExQkEsS0FBMEIsR0FBTTtBQUFBOztBQUFBLHVCQUNaQywyRUFBYSxDQUFDLE1BQUQsRUFBUyxFQUFULENBREQ7QUFBQTtBQUFBLE1BQzdCQyxJQUQ2QjtBQUFBLE1BQ3ZCQyxPQUR1Qjs7QUFBQSxrQkFFZEMsc0RBQVEsQ0FBUyxFQUFULENBRk07QUFBQSxNQUU3QkMsR0FGNkI7QUFBQSxNQUV4QkMsTUFGd0I7O0FBQUEsbUJBR1pGLHNEQUFRLENBQVUsS0FBVixDQUhJO0FBQUEsTUFHN0JHLElBSDZCO0FBQUEsTUFHdkJDLE9BSHVCOztBQUtwQyxNQUFNQyxPQUFPLEdBQUdDLFNBQVMsQ0FBQztBQUFFUixRQUFJLEVBQUpBO0FBQUYsR0FBRCxDQUF6QjtBQUVBUyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJVCxJQUFKLEVBQVU7QUFFVlUsZ0RBQUssQ0FBQztBQUNKQyxZQUFNLEVBQUUsS0FESjtBQUVKUixTQUFHLEVBQUU7QUFGRCxLQUFELENBQUwsQ0FHR1MsSUFISCxDQUdRLFVBQUNDLEdBQUQsRUFBUztBQUNmVCxZQUFNLENBQUNTLEdBQUcsQ0FBQ0MsSUFBSixDQUFTWCxHQUFWLENBQU47QUFDRCxLQUxEO0FBTUQsR0FUUSxFQVNOLEVBVE0sQ0FBVDtBQVdBTSx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJLENBQUNULElBQUwsRUFBVztBQUNUVSxrREFBSyxDQUFDO0FBQ0pDLGNBQU0sRUFBRSxLQURKO0FBRUpSLFdBQUcsRUFBRTtBQUZELE9BQUQsQ0FBTCxDQUdHUyxJQUhILENBR1EsVUFBQ0MsR0FBRCxFQUFTO0FBQ2ZULGNBQU0sQ0FBQ1MsR0FBRyxDQUFDQyxJQUFKLENBQVNYLEdBQVYsQ0FBTjtBQUNELE9BTEQ7QUFNRDtBQUNGLEdBVFEsRUFTTixDQUFDSCxJQUFELENBVE0sQ0FBVDs7QUFXQSxNQUFNZSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ25CZCxXQUFPLENBQUMsRUFBRCxDQUFQO0FBQ0FlLFlBQVEsQ0FBQ0MsTUFBVDtBQUNELEdBSEQ7O0FBS0EsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0FBQzdCLFFBQUksQ0FBQ25CLElBQUQsSUFBUyxDQUFDRyxHQUFkLEVBQW1COztBQUNuQixRQUFJLENBQUNILElBQUQsSUFBU0csR0FBYixFQUFrQjtBQUNoQmdCLFdBQUssQ0FBQ0MsY0FBTixHQURnQixDQUVoQjs7QUFDQUMsWUFBTSxDQUFDaEIsSUFBUCxDQUFZRixHQUFHLENBQUNtQixRQUFKLEVBQVo7QUFDRCxLQUpELE1BSU8sSUFBSXRCLElBQUosRUFBVTtBQUNmTSxhQUFPLENBQUMsQ0FBQ0QsSUFBRixDQUFQO0FBQ0Q7QUFDRixHQVREOztBQVdBLE1BQU1rQixPQUFPLGdCQUNYO0FBQUssYUFBUyxFQUFFaEIsT0FBTyxDQUFDaUIsU0FBeEI7QUFBbUMsV0FBTyxFQUFFTixXQUE1QztBQUFBLGVBQ0csQ0FBQ2xCLElBQUQsaUJBQ0M7QUFBSyxlQUFTLEVBQUVPLE9BQU8sQ0FBQ2tCLG1CQUF4QjtBQUFBLDZCQUNFLHFFQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixFQU1HekIsSUFBSSxpQkFDSDtBQUFLLGVBQVMsRUFBRU8sT0FBTyxDQUFDbUIsVUFBeEI7QUFBQSw2QkFDRSxxRUFBQyx3REFBRDtBQUNFLFdBQUcsWUFBSzFCLElBQUwsYUFBS0EsSUFBTCx1QkFBS0EsSUFBSSxDQUFFMkIsSUFBWCxDQURMO0FBRUUsV0FBRyxZQUFLM0IsSUFBSSxDQUFDNEIsT0FBVixDQUZMO0FBR0UsYUFBSyxFQUFFO0FBQUVDLGdCQUFNLEVBQUUsRUFBVjtBQUFjQyxlQUFLLEVBQUU7QUFBckI7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBKLGVBZUU7QUFBRyxlQUFTLEVBQUV2QixPQUFPLENBQUN3QixJQUF0QjtBQUFBLGdCQUE2QixDQUFDL0IsSUFBRCxJQUFTLENBQUNHLEdBQVYsSUFBaUI7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWZGLGVBZ0JFO0FBQUcsZUFBUyxFQUFFSSxPQUFPLENBQUN3QixJQUF0QjtBQUFBLGdCQUE2QixDQUFDL0IsSUFBRCxJQUFTRyxHQUFULElBQWdCO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQkYsZUFpQkU7QUFBRyxlQUFTLEVBQUVJLE9BQU8sQ0FBQ3dCLElBQXRCO0FBQUEsZ0JBQTZCL0IsSUFBSSxjQUFPQSxJQUFJLENBQUMyQixJQUFMLENBQVVLLFdBQVYsRUFBUDtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakJGLEVBbUJHaEMsSUFBSSxpQkFDSDtBQUFLLGVBQVMsRUFBRU8sT0FBTyxDQUFDMEIsS0FBeEI7QUFBQSxnQkFDRzVCLElBQUksZ0JBQ0gscUVBQUMsNkRBQUQ7QUFBWSxhQUFLLEVBQUM7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURHLGdCQUdILHFFQUFDLDZEQUFEO0FBQVksYUFBSyxFQUFDO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBcEJKLEVBNEJHQSxJQUFJLGlCQUNIO0FBQ0UsZUFBUyxFQUFFRSxPQUFPLENBQUMyQixpQkFEckI7QUFFRSxhQUFPLEVBQUUsbUJBQU07QUFDYixZQUFJN0IsSUFBSixFQUFVQyxPQUFPLENBQUMsS0FBRCxDQUFQO0FBQ1gsT0FKSDtBQUFBLDhCQU1FO0FBQUssaUJBQVMsRUFBRUMsT0FBTyxDQUFDNEIsUUFBeEI7QUFBQSwrQkFDRSxxRUFBQyxnREFBRDtBQUFNLGNBQUksaUJBQVY7QUFBQSxpQ0FDRTtBQUFHLGlCQUFLLEVBQUU7QUFBRUMsNEJBQWMsRUFBRTtBQUFsQixhQUFWO0FBQUEsbUNBQ0U7QUFBSyx1QkFBUyxFQUFFN0IsT0FBTyxDQUFDOEIsUUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORixlQWFFO0FBQUssaUJBQVMsRUFBRTlCLE9BQU8sQ0FBQzRCLFFBQXhCO0FBQWtDLGVBQU8sRUFBRTtBQUFBLGlCQUFNcEIsTUFBTSxFQUFaO0FBQUEsU0FBM0M7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUVSLE9BQU8sQ0FBQzhCLFFBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTdCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjs7QUFtREEsc0JBQ0U7QUFBQSxjQUNHckMsSUFBSSxHQUFHdUIsT0FBSCxHQUFhcEIsR0FBRyxnQkFBRztBQUFHLFVBQUksRUFBRUEsR0FBRyxDQUFDbUIsUUFBSixFQUFUO0FBQUEsZ0JBQTBCQztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQUgsR0FBNENBO0FBRG5FLG1CQURGO0FBS0QsQ0FyR0Q7O0dBQU16QixLO1VBQ29CQyxtRSxFQUlSUyxTOzs7S0FMWlYsSztBQXVHU0Esb0VBQWY7QUFFQSxJQUFNVSxTQUFTLEdBQUc4QixvRUFBVSxDQUFDO0FBQzNCZCxXQUFTLEVBQUU7QUFDVGUsV0FBTyxFQUFFLE1BREE7QUFFVEMsY0FBVSxFQUFFLFFBRkg7QUFHVEMsWUFBUSxFQUFFLEdBSEQ7QUFJVEMsa0JBQWMsRUFBRSxlQUpQO0FBS1RDLFdBQU8sRUFBRSw4QkFMQTtBQU1UQyxnQkFBWSxFQUFFLENBTkw7QUFPVEMsWUFBUSxFQUFFLFVBUEQ7QUFRVEMsVUFBTSxFQUFFLFNBUkM7QUFTVEMsbUJBQWUsRUFBRSx5QkFBQ0MsS0FBRCxFQUEwQjtBQUFBLFVBQ2pDaEQsSUFEaUMsR0FDeEJnRCxLQUR3QixDQUNqQ2hELElBRGlDO0FBRXpDLGFBQU9BLElBQUksR0FBRyxTQUFILEdBQWUsT0FBMUI7QUFDRDtBQVpRLEdBRGdCO0FBZTNCK0IsTUFBSSxFQUFFO0FBQ0prQixTQUFLLEVBQUUsZUFBQ0QsS0FBRCxFQUEwQjtBQUFBLFVBQ3ZCaEQsSUFEdUIsR0FDZGdELEtBRGMsQ0FDdkJoRCxJQUR1QjtBQUUvQixhQUFPQSxJQUFJLEdBQUcsT0FBSCxHQUFhLE9BQXhCO0FBQ0QsS0FKRztBQUtKa0QsWUFBUSxFQUFFLEVBTE47QUFNSkMsY0FBVSxFQUFFLEdBTlI7QUFPSkMsaUJBQWEsRUFBRSxZQVBYO0FBUUpDLFVBQU0sRUFBRSxpQkFSSjtBQVNKQyxjQUFVLEVBQUUsUUFUUjtBQVVKQyxZQUFRLEVBQUU7QUFWTixHQWZxQjtBQTJCM0I5QixxQkFBbUIsRUFBRTtBQUNuQitCLGVBQVcsRUFBRSxDQURNO0FBRW5CQyxjQUFVLEVBQUUsQ0FGTztBQUduQjNCLFNBQUssRUFBRSxFQUhZO0FBSW5CRCxVQUFNLEVBQUUsRUFKVztBQUtuQixhQUFPLE1BTFk7QUFNbkJVLFdBQU8sRUFBRSxNQU5VO0FBT25CQyxjQUFVLEVBQUU7QUFQTyxHQTNCTTtBQW9DM0JkLFlBQVUsRUFBRTtBQUNWa0IsZ0JBQVksRUFBRSxLQURKO0FBRVZXLFlBQVEsRUFBRSxRQUZBO0FBR1YxQixVQUFNLEVBQUUsRUFIRTtBQUlWQyxTQUFLLEVBQUUsRUFKRztBQUtWUyxXQUFPLEVBQUUsTUFMQztBQU1WQyxjQUFVLEVBQUU7QUFORixHQXBDZTtBQTRDM0JQLE9BQUssRUFBRTtBQUNMZ0IsU0FBSyxFQUFFLFNBREY7QUFFTFYsV0FBTyxFQUFFLE1BRko7QUFHTEMsY0FBVSxFQUFFLFFBSFA7QUFJTEUsa0JBQWMsRUFBRTtBQUpYLEdBNUNvQjtBQWtEM0JSLG1CQUFpQixFQUFFO0FBQ2pCVyxZQUFRLEVBQUUsVUFETztBQUVqQmEsT0FBRyxFQUFFLEVBRlk7QUFHakJDLFNBQUssRUFBRSxDQUhVO0FBSWpCQyxVQUFNLEVBQUUsSUFKUztBQUtqQmIsbUJBQWUsRUFBRSxTQUxBO0FBTWpCRSxTQUFLLEVBQUUsT0FOVTtBQU9qQm5CLFNBQUssRUFBRSxNQVBVO0FBUWpCUyxXQUFPLEVBQUUsTUFSUTtBQVNqQnNCLGlCQUFhLEVBQUU7QUFURSxHQWxEUTtBQTZEM0IxQixVQUFRLEVBQUU7QUFDUkwsU0FBSyxFQUFFLE1BREM7QUFFUkQsVUFBTSxFQUFFLE1BRkE7QUFHUmMsV0FBTyxFQUFFLEVBSEQ7QUFJUm1CLGdCQUFZLEVBQUUsaUJBSk47QUFLUmIsU0FBSyxFQUFFLE9BTEM7QUFNUkgsVUFBTSxFQUFFLFNBTkE7QUFPUmlCLGFBQVMsRUFBRSxRQVBIO0FBUVIsZUFBVztBQUNURCxrQkFBWSxFQUFFO0FBREw7QUFSSCxHQTdEaUI7QUF5RTNCekIsVUFBUSxFQUFFO0FBQ1JZLFNBQUssRUFBRSxPQURDO0FBRVIsZUFBVztBQUNUQSxXQUFLLEVBQUU7QUFERTtBQUZIO0FBekVpQixDQUFELENBQTVCOztBQWlGQSxJQUFNZSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCLHNCQUNFO0FBQ0UsU0FBSyxFQUFDLElBRFI7QUFFRSxVQUFNLEVBQUMsSUFGVDtBQUdFLFdBQU8sRUFBQyxhQUhWO0FBSUUsU0FBSyxFQUFDLDRCQUpSO0FBS0UsdUJBQW1CLEVBQUMsVUFMdEI7QUFBQSw0QkFPRTtBQUNFLE9BQUMsRUFBQyw0TEFESjtBQUVFLFVBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRixlQVdFO0FBQ0UsT0FBQyxFQUFDLDJOQURKO0FBRUUsVUFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhGLGVBZUU7QUFDRSxPQUFDLEVBQUMsbU1BREo7QUFFRSxVQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZkYsZUFtQkU7QUFDRSxPQUFDLEVBQUMsOExBREo7QUFFRSxVQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMEJELENBM0JEOztNQUFNQSxVIiwiZmlsZSI6Ii4vQ29tcG9uZW50cy9MYXlvdXQvVG9wYmFyL05hdkl0ZW1zL05hdkl0ZW0vTG9naW4vTG9naW4udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXZhdGFyLCBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZUxvY2FsU3RhdGUgZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL2N1c3RvbS1ob29rcy91c2VMb2NhbFN0YXRlXCI7XG5cbmltcG9ydCB7IEV4cGFuZExlc3MsIEV4cGFuZE1vcmUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge31cblxuY29uc3QgTG9naW46IFJlYWN0LkZDPElQcm9wcz4gPSAoKSA9PiB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZUxvY2FsU3RhdGUoXCJ1c2VyXCIsIFwiXCIpO1xuICBjb25zdCBbdXJsLCBzZXRVcmxdID0gdXNlU3RhdGU8U3RyaW5nPihcIlwiKTtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoeyB1c2VyIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVzZXIpIHJldHVybjtcblxuICAgIGF4aW9zKHtcbiAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgIHVybDogXCIvYXBpL2F1dGgvZ29vZ2xlP2dldD1saW5rXCIsXG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICBzZXRVcmwocmVzLmRhdGEudXJsKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICBheGlvcyh7XG4gICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgdXJsOiBcIi9hcGkvYXV0aC9nb29nbGU/Z2V0PWxpbmtcIixcbiAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBzZXRVcmwocmVzLmRhdGEudXJsKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3VzZXJdKTtcblxuICBjb25zdCBsb2dPdXQgPSAoKSA9PiB7XG4gICAgc2V0VXNlcihcIlwiKTtcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xuICAgIGlmICghdXNlciAmJiAhdXJsKSByZXR1cm47XG4gICAgaWYgKCF1c2VyICYmIHVybCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsLnRvU3RyaW5nKCk7XG4gICAgICB3aW5kb3cub3Blbih1cmwudG9TdHJpbmcoKSk7XG4gICAgfSBlbHNlIGlmICh1c2VyKSB7XG4gICAgICBzZXRPcGVuKCFvcGVuKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgRWxlbWVudCA9IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgIHshdXNlciAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmdvb2dsZUxvZ29Db250YWluZXJ9PlxuICAgICAgICAgIDxHb29nbGVMb2dvIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHt1c2VyICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucHJvZmlsZVBpY30+XG4gICAgICAgICAgPEF2YXRhclxuICAgICAgICAgICAgYWx0PXtgJHt1c2VyPy5uYW1lfWB9XG4gICAgICAgICAgICBzcmM9e2Ake3VzZXIucGljdHVyZX1gfVxuICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAzNSwgd2lkdGg6IDM1IH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PnshdXNlciAmJiAhdXJsICYmIFwiTG9hZGluZy4uLlwifTwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT57IXVzZXIgJiYgdXJsICYmIFwiU2lnbiBpbiB3aXRoIEdvb2dsZVwifTwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT57dXNlciAmJiBgJHt1c2VyLm5hbWUudG9Mb3dlckNhc2UoKX1gfTwvcD5cblxuICAgICAge3VzZXIgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hcnJvd30+XG4gICAgICAgICAge29wZW4gPyAoXG4gICAgICAgICAgICA8RXhwYW5kTGVzcyBjb2xvcj1cImluaGVyaXRcIiAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8RXhwYW5kTW9yZSBjb2xvcj1cImluaGVyaXRcIiAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHtvcGVuICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb2xsYXBzZUNvbnRhaW5lcn1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBpZiAob3Blbikgc2V0T3BlbihmYWxzZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVJdGVtfT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdXNlci9wcm9maWxlYH0+XG4gICAgICAgICAgICAgIDxhIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIn19PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtUZXh0fT5Qcm9maWxlPC9kaXY+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51SXRlbX0gb25DbGljaz17KCkgPT4gbG9nT3V0KCl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGlua1RleHR9PkxvZ291dDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3VzZXIgPyBFbGVtZW50IDogdXJsID8gPGEgaHJlZj17dXJsLnRvU3RyaW5nKCl9PntFbGVtZW50fTwvYT4gOiBFbGVtZW50fVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICBjb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIG1pbldpZHRoOiAxNTAsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIHBhZGRpbmc6IFwiMC41cmVtIDAuNXJlbSAwLjVyZW0gMC4yNXJlbVwiLFxuICAgIGJvcmRlclJhZGl1czogNSxcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiAocHJvcHM6IHsgdXNlcjogYW55IH0pID0+IHtcbiAgICAgIGNvbnN0IHsgdXNlciB9ID0gcHJvcHM7XG4gICAgICByZXR1cm4gdXNlciA/IFwiaW5oZXJpdFwiIDogXCJ3aGl0ZVwiO1xuICAgIH0sXG4gIH0sXG4gIHRleHQ6IHtcbiAgICBjb2xvcjogKHByb3BzOiB7IHVzZXI6IGFueSB9KSA9PiB7XG4gICAgICBjb25zdCB7IHVzZXIgfSA9IHByb3BzO1xuICAgICAgcmV0dXJuIHVzZXIgPyBcIndoaXRlXCIgOiBcImJsYWNrXCI7XG4gICAgfSxcbiAgICBmb250U2l6ZTogMTQsXG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIHRleHRUcmFuc2Zvcm06IFwiY2FwaXRhbGl6ZVwiLFxuICAgIG1hcmdpbjogXCIwcHggNXB4IDBweCAycHhcIixcbiAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICB9LFxuICBnb29nbGVMb2dvQ29udGFpbmVyOiB7XG4gICAgbWFyZ2luUmlnaHQ6IDUsXG4gICAgbWFyZ2luTGVmdDogNSxcbiAgICB3aWR0aDogMjAsXG4gICAgaGVpZ2h0OiAyMCxcbiAgICBmbG9hdDogXCJsZWZ0XCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgfSxcbiAgcHJvZmlsZVBpYzoge1xuICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICBoZWlnaHQ6IDQwLFxuICAgIHdpZHRoOiA0MCxcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICB9LFxuICBhcnJvdzoge1xuICAgIGNvbG9yOiBcIiMzNzk4QTdcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICB9LFxuICBjb2xsYXBzZUNvbnRhaW5lcjoge1xuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgdG9wOiA1MCxcbiAgICByaWdodDogMCxcbiAgICB6SW5kZXg6IDEwMDAsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMDMwODVcIixcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgIHdpZHRoOiBcImF1dG9cIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICB9LFxuICBtZW51SXRlbToge1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgIHBhZGRpbmc6IDE2LFxuICAgIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgd2hpdGVcIixcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkICMzNzk4QTdcIixcbiAgICB9LFxuICB9LFxuICBsaW5rVGV4dDoge1xuICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIGNvbG9yOiBcIiMzNzk4QTdcIixcbiAgICB9LFxuICB9LFxufSk7XG5cbmNvbnN0IEdvb2dsZUxvZ28gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIyMFwiXG4gICAgICBoZWlnaHQ9XCIyMFwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI1NiAyNjJcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWRcIlxuICAgID5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMjU1Ljg3OCAxMzMuNDUxYzAtMTAuNzM0LS44NzEtMTguNTY3LTIuNzU2LTI2LjY5SDEzMC41NXY0OC40NDhoNzEuOTQ3Yy0xLjQ1IDEyLjA0LTkuMjgzIDMwLjE3Mi0yNi42OSA0Mi4zNTZsLS4yNDQgMS42MjIgMzguNzU1IDMwLjAyMyAyLjY4NS4yNjhjMjQuNjU5LTIyLjc3NCAzOC44NzUtNTYuMjgyIDM4Ljg3NS05Ni4wMjdcIlxuICAgICAgICBmaWxsPVwiIzQyODVGNFwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xMzAuNTUgMjYxLjFjMzUuMjQ4IDAgNjQuODM5LTExLjYwNSA4Ni40NTMtMzEuNjIybC00MS4xOTYtMzEuOTEzYy0xMS4wMjQgNy42ODgtMjUuODIgMTMuMDU1LTQ1LjI1NyAxMy4wNTUtMzQuNTIzIDAtNjMuODI0LTIyLjc3My03NC4yNjktNTQuMjVsLTEuNTMxLjEzLTQwLjI5OCAzMS4xODctLjUyNyAxLjQ2NUMzNS4zOTMgMjMxLjc5OCA3OS40OSAyNjEuMSAxMzAuNTUgMjYxLjFcIlxuICAgICAgICBmaWxsPVwiIzM0QTg1M1wiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk01Ni4yODEgMTU2LjM3Yy0yLjc1Ni04LjEyMy00LjM1MS0xNi44MjctNC4zNTEtMjUuODIgMC04Ljk5NCAxLjU5NS0xNy42OTcgNC4yMDYtMjUuODJsLS4wNzMtMS43M0wxNS4yNiA3MS4zMTJsLTEuMzM1LjYzNUM1LjA3NyA4OS42NDQgMCAxMDkuNTE3IDAgMTMwLjU1czUuMDc3IDQwLjkwNSAxMy45MjUgNTguNjAybDQyLjM1Ni0zMi43ODJcIlxuICAgICAgICBmaWxsPVwiI0ZCQkMwNVwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0xMzAuNTUgNTAuNDc5YzI0LjUxNCAwIDQxLjA1IDEwLjU4OSA1MC40NzkgMTkuNDM4bDM2Ljg0NC0zNS45NzRDMTk1LjI0NSAxMi45MSAxNjUuNzk4IDAgMTMwLjU1IDAgNzkuNDkgMCAzNS4zOTMgMjkuMzAxIDEzLjkyNSA3MS45NDdsNDIuMjExIDMyLjc4M2MxMC41OS0zMS40NzcgMzkuODkxLTU0LjI1MSA3NC40MTQtNTQuMjUxXCJcbiAgICAgICAgZmlsbD1cIiNFQjQzMzVcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/Layout/Topbar/NavItems/NavItem/Login/Login.tsx\n");

/***/ })

})