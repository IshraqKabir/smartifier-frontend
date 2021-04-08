webpackHotUpdate_N_E("pages/blog/posts/[slug]",{

/***/ "./Components/Layout/Topbar/NavItems/NavItem/Login/Login.tsx":
/*!*******************************************************************!*\
  !*** ./Components/Layout/Topbar/NavItems/NavItem/Login/Login.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../custom-hooks/useLocalState */ \"./custom-hooks/useLocalState.ts\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons */ \"./node_modules/@material-ui/icons/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/Layout/Topbar/NavItems/NavItem/Login/Login.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Login = function Login() {\n  _s();\n\n  var _useLocalState = Object(_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"user\", \"\"),\n      _useLocalState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useLocalState, 2),\n      user = _useLocalState2[0],\n      setUser = _useLocalState2[1];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(\"\"),\n      url = _useState[0],\n      setUrl = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      open = _useState2[0],\n      setOpen = _useState2[1];\n\n  var classes = useStyles({\n    user: user\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    if (user) return;\n    axios__WEBPACK_IMPORTED_MODULE_3___default()({\n      method: \"get\",\n      url: \"/api/auth/google?get=link\"\n    }).then(function (res) {\n      setUrl(res.data.url);\n    });\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    if (!user) {\n      axios__WEBPACK_IMPORTED_MODULE_3___default()({\n        method: \"get\",\n        url: \"/api/auth/google?get=link\"\n      }).then(function (res) {\n        setUrl(res.data.url);\n      });\n    }\n  }, [user]);\n\n  var logOut = function logOut() {\n    setUser(\"\");\n    location.reload();\n  };\n\n  var handleClick = function handleClick(event) {\n    if (!user && !url) return;\n\n    if (!user && url) {\n      event.preventDefault(); // window.location.href = url.toString();\n\n      window.open(url.toString());\n    } else if (user) {\n      setOpen(!open);\n    }\n  };\n\n  var Element = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: classes.container,\n    onClick: handleClick,\n    children: [!user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: classes.googleLogoContainer,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(GoogleLogo, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }, _this), user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: classes.profilePic,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Avatar\"], {\n        alt: \"\".concat(user === null || user === void 0 ? void 0 : user.name),\n        src: \"\".concat(user.picture),\n        style: {\n          height: 35,\n          width: 35\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n      className: classes.text,\n      children: !user && !url && \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n      className: classes.text,\n      children: !user && url && \"Sign in with Google\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n      className: classes.text,\n      children: user && \"\".concat(user.name.toLowerCase())\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, _this), user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: classes.arrow,\n      children: open ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__[\"ExpandLess\"], {\n        color: \"inherit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 13\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__[\"ExpandMore\"], {\n        color: \"inherit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 13\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }, _this), open && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: classes.collapseContainer,\n      onClick: function onClick() {\n        if (open) setOpen(false);\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: classes.menuItem,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n          href: \"/user/profile\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n            style: {},\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n              className: classes.linkText,\n              children: \"Profile\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 95,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: classes.menuItem,\n        onClick: function onClick() {\n          return logOut();\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: classes.linkText,\n          children: \"Logout\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 5\n  }, _this);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: user ? Element : url ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n      href: url.toString(),\n      children: Element\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 31\n    }, _this) : Element\n  }, void 0, false);\n};\n\n_s(Login, \"vUjpaadnULY2PoyN57pjBqkBROU=\", false, function () {\n  return [_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_5__[\"default\"], useStyles];\n});\n\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])({\n  container: {\n    display: \"flex\",\n    alignItems: \"center\",\n    minWidth: 150,\n    justifyContent: \"space-between\",\n    padding: \"0.5rem 0.5rem 0.5rem 0.25rem\",\n    borderRadius: 5,\n    position: \"relative\",\n    cursor: \"pointer\",\n    backgroundColor: function backgroundColor(props) {\n      var user = props.user;\n      return user ? \"inherit\" : \"white\";\n    }\n  },\n  text: {\n    color: function color(props) {\n      var user = props.user;\n      return user ? \"white\" : \"black\";\n    },\n    fontSize: 14,\n    fontWeight: 500,\n    textTransform: \"capitalize\",\n    margin: \"0px 5px 0px 2px\",\n    whiteSpace: \"nowrap\",\n    overflow: \"hidden\"\n  },\n  googleLogoContainer: {\n    marginRight: 5,\n    marginLeft: 5,\n    width: 20,\n    height: 20,\n    \"float\": \"left\",\n    display: \"flex\",\n    alignItems: \"center\"\n  },\n  profilePic: {\n    borderRadius: \"50%\",\n    overflow: \"hidden\",\n    height: 40,\n    width: 40,\n    display: \"flex\",\n    alignItems: \"center\"\n  },\n  arrow: {\n    color: \"#3798A7\",\n    display: \"flex\",\n    alignItems: \"center\",\n    justifyContent: \"center\"\n  },\n  collapseContainer: {\n    position: \"absolute\",\n    top: 50,\n    right: 0,\n    zIndex: 1000,\n    backgroundColor: \"#003085\",\n    color: \"white\",\n    width: \"auto\",\n    display: \"flex\",\n    flexDirection: \"column\"\n  },\n  menuItem: {\n    width: \"100%\",\n    height: \"100%\",\n    padding: 16,\n    borderBottom: \"1px solid white\",\n    color: \"white\",\n    cursor: \"pointer\",\n    textAlign: \"center\",\n    \"&:hover\": {\n      borderBottom: \"1px solid #3798A7\"\n    }\n  },\n  linkText: {\n    color: \"white\",\n    \"&:hover\": {\n      color: \"#3798A7\"\n    }\n  }\n});\n\nvar GoogleLogo = function GoogleLogo() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"svg\", {\n    width: \"20\",\n    height: \"20\",\n    viewBox: \"0 0 256 262\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    preserveAspectRatio: \"xMidYMid\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"path\", {\n      d: \"M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027\",\n      fill: \"#4285F4\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 206,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"path\", {\n      d: \"M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1\",\n      fill: \"#34A853\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 210,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"path\", {\n      d: \"M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782\",\n      fill: \"#FBBC05\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 214,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"path\", {\n      d: \"M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251\",\n      fill: \"#EB4335\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 218,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 199,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = GoogleLogo;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Login\");\n$RefreshReg$(_c2, \"GoogleLogo\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9MYXlvdXQvVG9wYmFyL05hdkl0ZW1zL05hdkl0ZW0vTG9naW4vTG9naW4udHN4Pzg3MzQiXSwibmFtZXMiOlsiTG9naW4iLCJ1c2VMb2NhbFN0YXRlIiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsInVybCIsInNldFVybCIsIm9wZW4iLCJzZXRPcGVuIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInVzZUVmZmVjdCIsImF4aW9zIiwibWV0aG9kIiwidGhlbiIsInJlcyIsImRhdGEiLCJsb2dPdXQiLCJsb2NhdGlvbiIsInJlbG9hZCIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIndpbmRvdyIsInRvU3RyaW5nIiwiRWxlbWVudCIsImNvbnRhaW5lciIsImdvb2dsZUxvZ29Db250YWluZXIiLCJwcm9maWxlUGljIiwibmFtZSIsInBpY3R1cmUiLCJoZWlnaHQiLCJ3aWR0aCIsInRleHQiLCJ0b0xvd2VyQ2FzZSIsImFycm93IiwiY29sbGFwc2VDb250YWluZXIiLCJtZW51SXRlbSIsImxpbmtUZXh0IiwibWFrZVN0eWxlcyIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwibWluV2lkdGgiLCJqdXN0aWZ5Q29udGVudCIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJwb3NpdGlvbiIsImN1cnNvciIsImJhY2tncm91bmRDb2xvciIsInByb3BzIiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ0ZXh0VHJhbnNmb3JtIiwibWFyZ2luIiwid2hpdGVTcGFjZSIsIm92ZXJmbG93IiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0IiwidG9wIiwicmlnaHQiLCJ6SW5kZXgiLCJmbGV4RGlyZWN0aW9uIiwiYm9yZGVyQm90dG9tIiwidGV4dEFsaWduIiwiR29vZ2xlTG9nbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFF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QUE2RDNCekIsVUFBUSxFQUFFO0FBQ1JMLFNBQUssRUFBRSxNQURDO0FBRVJELFVBQU0sRUFBRSxNQUZBO0FBR1JhLFdBQU8sRUFBRSxFQUhEO0FBSVJtQixnQkFBWSxFQUFFLGlCQUpOO0FBS1JiLFNBQUssRUFBRSxPQUxDO0FBTVJILFVBQU0sRUFBRSxTQU5BO0FBT1JpQixhQUFTLEVBQUUsUUFQSDtBQVFSLGVBQVc7QUFDVEQsa0JBQVksRUFBRTtBQURMO0FBUkgsR0E3RGlCO0FBeUUzQnpCLFVBQVEsRUFBRTtBQUNSWSxTQUFLLEVBQUUsT0FEQztBQUVSLGVBQVc7QUFDVEEsV0FBSyxFQUFFO0FBREU7QUFGSDtBQXpFaUIsQ0FBRCxDQUE1Qjs7QUFpRkEsSUFBTWUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QixzQkFDRTtBQUNFLFNBQUssRUFBQyxJQURSO0FBRUUsVUFBTSxFQUFDLElBRlQ7QUFHRSxXQUFPLEVBQUMsYUFIVjtBQUlFLFNBQUssRUFBQyw0QkFKUjtBQUtFLHVCQUFtQixFQUFDLFVBTHRCO0FBQUEsNEJBT0U7QUFDRSxPQUFDLEVBQUMsNExBREo7QUFFRSxVQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEYsZUFXRTtBQUNFLE9BQUMsRUFBQywyTkFESjtBQUVFLFVBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFYRixlQWVFO0FBQ0UsT0FBQyxFQUFDLG1NQURKO0FBRUUsVUFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWZGLGVBbUJFO0FBQ0UsT0FBQyxFQUFDLDhMQURKO0FBRUUsVUFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBCRCxDQTNCRDs7TUFBTUEsVSIsImZpbGUiOiIuL0NvbXBvbmVudHMvTGF5b3V0L1RvcGJhci9OYXZJdGVtcy9OYXZJdGVtL0xvZ2luL0xvZ2luLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF2YXRhciwgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VMb2NhbFN0YXRlIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9jdXN0b20taG9va3MvdXNlTG9jYWxTdGF0ZVwiO1xuXG5pbXBvcnQgeyBFeHBhbmRMZXNzLCBFeHBhbmRNb3JlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHt9XG5cbmNvbnN0IExvZ2luOiBSZWFjdC5GQzxJUHJvcHM+ID0gKCkgPT4ge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VMb2NhbFN0YXRlKFwidXNlclwiLCBcIlwiKTtcbiAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlPFN0cmluZz4oXCJcIik7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKHsgdXNlciB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1c2VyKSByZXR1cm47XG5cbiAgICBheGlvcyh7XG4gICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICB1cmw6IFwiL2FwaS9hdXRoL2dvb2dsZT9nZXQ9bGlua1wiLFxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgc2V0VXJsKHJlcy5kYXRhLnVybCk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghdXNlcikge1xuICAgICAgYXhpb3Moe1xuICAgICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICAgIHVybDogXCIvYXBpL2F1dGgvZ29vZ2xlP2dldD1saW5rXCIsXG4gICAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgc2V0VXJsKHJlcy5kYXRhLnVybCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFt1c2VyXSk7XG5cbiAgY29uc3QgbG9nT3V0ID0gKCkgPT4ge1xuICAgIHNldFVzZXIoXCJcIik7XG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoIXVzZXIgJiYgIXVybCkgcmV0dXJuO1xuICAgIGlmICghdXNlciAmJiB1cmwpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybC50b1N0cmluZygpO1xuICAgICAgd2luZG93Lm9wZW4odXJsLnRvU3RyaW5nKCkpO1xuICAgIH0gZWxzZSBpZiAodXNlcikge1xuICAgICAgc2V0T3Blbighb3Blbik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IEVsZW1lbnQgPSAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfSBvbkNsaWNrPXtoYW5kbGVDbGlja30+XG4gICAgICB7IXVzZXIgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5nb29nbGVMb2dvQ29udGFpbmVyfT5cbiAgICAgICAgICA8R29vZ2xlTG9nbyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICB7dXNlciAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2ZpbGVQaWN9PlxuICAgICAgICAgIDxBdmF0YXJcbiAgICAgICAgICAgIGFsdD17YCR7dXNlcj8ubmFtZX1gfVxuICAgICAgICAgICAgc3JjPXtgJHt1c2VyLnBpY3R1cmV9YH1cbiAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogMzUsIHdpZHRoOiAzNSB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT57IXVzZXIgJiYgIXVybCAmJiBcIkxvYWRpbmcuLi5cIn08L3A+XG4gICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+eyF1c2VyICYmIHVybCAmJiBcIlNpZ24gaW4gd2l0aCBHb29nbGVcIn08L3A+XG4gICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+e3VzZXIgJiYgYCR7dXNlci5uYW1lLnRvTG93ZXJDYXNlKCl9YH08L3A+XG5cbiAgICAgIHt1c2VyICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYXJyb3d9PlxuICAgICAgICAgIHtvcGVuID8gKFxuICAgICAgICAgICAgPEV4cGFuZExlc3MgY29sb3I9XCJpbmhlcml0XCIgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEV4cGFuZE1vcmUgY29sb3I9XCJpbmhlcml0XCIgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICB7b3BlbiAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY29sbGFwc2VDb250YWluZXJ9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgaWYgKG9wZW4pIHNldE9wZW4oZmFsc2UpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51SXRlbX0+XG4gICAgICAgICAgICA8TGluayBocmVmPXtgL3VzZXIvcHJvZmlsZWB9PlxuICAgICAgICAgICAgICA8YSBzdHlsZT17eyB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rVGV4dH0+UHJvZmlsZTwvZGl2PlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWVudUl0ZW19IG9uQ2xpY2s9eygpID0+IGxvZ091dCgpfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtUZXh0fT5Mb2dvdXQ8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHt1c2VyID8gRWxlbWVudCA6IHVybCA/IDxhIGhyZWY9e3VybC50b1N0cmluZygpfT57RWxlbWVudH08L2E+IDogRWxlbWVudH1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgY29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBtaW5XaWR0aDogMTUwLFxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBwYWRkaW5nOiBcIjAuNXJlbSAwLjVyZW0gMC41cmVtIDAuMjVyZW1cIixcbiAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogKHByb3BzOiB7IHVzZXI6IGFueSB9KSA9PiB7XG4gICAgICBjb25zdCB7IHVzZXIgfSA9IHByb3BzO1xuICAgICAgcmV0dXJuIHVzZXIgPyBcImluaGVyaXRcIiA6IFwid2hpdGVcIjtcbiAgICB9LFxuICB9LFxuICB0ZXh0OiB7XG4gICAgY29sb3I6IChwcm9wczogeyB1c2VyOiBhbnkgfSkgPT4ge1xuICAgICAgY29uc3QgeyB1c2VyIH0gPSBwcm9wcztcbiAgICAgIHJldHVybiB1c2VyID8gXCJ3aGl0ZVwiIDogXCJibGFja1wiO1xuICAgIH0sXG4gICAgZm9udFNpemU6IDE0LFxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICB0ZXh0VHJhbnNmb3JtOiBcImNhcGl0YWxpemVcIixcbiAgICBtYXJnaW46IFwiMHB4IDVweCAwcHggMnB4XCIsXG4gICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcbiAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgfSxcbiAgZ29vZ2xlTG9nb0NvbnRhaW5lcjoge1xuICAgIG1hcmdpblJpZ2h0OiA1LFxuICAgIG1hcmdpbkxlZnQ6IDUsXG4gICAgd2lkdGg6IDIwLFxuICAgIGhlaWdodDogMjAsXG4gICAgZmxvYXQ6IFwibGVmdFwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIH0sXG4gIHByb2ZpbGVQaWM6IHtcbiAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgaGVpZ2h0OiA0MCxcbiAgICB3aWR0aDogNDAsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgfSxcbiAgYXJyb3c6IHtcbiAgICBjb2xvcjogXCIjMzc5OEE3XCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgfSxcbiAgY29sbGFwc2VDb250YWluZXI6IHtcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgIHRvcDogNTAsXG4gICAgcmlnaHQ6IDAsXG4gICAgekluZGV4OiAxMDAwLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDAzMDg1XCIsXG4gICAgY29sb3I6IFwid2hpdGVcIixcbiAgICB3aWR0aDogXCJhdXRvXCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgfSxcbiAgbWVudUl0ZW06IHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICBwYWRkaW5nOiAxNixcbiAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkIHdoaXRlXCIsXG4gICAgY29sb3I6IFwid2hpdGVcIixcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCAjMzc5OEE3XCIsXG4gICAgfSxcbiAgfSxcbiAgbGlua1RleHQ6IHtcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBjb2xvcjogXCIjMzc5OEE3XCIsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5jb25zdCBHb29nbGVMb2dvID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHdpZHRoPVwiMjBcIlxuICAgICAgaGVpZ2h0PVwiMjBcIlxuICAgICAgdmlld0JveD1cIjAgMCAyNTYgMjYyXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkXCJcbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTI1NS44NzggMTMzLjQ1MWMwLTEwLjczNC0uODcxLTE4LjU2Ny0yLjc1Ni0yNi42OUgxMzAuNTV2NDguNDQ4aDcxLjk0N2MtMS40NSAxMi4wNC05LjI4MyAzMC4xNzItMjYuNjkgNDIuMzU2bC0uMjQ0IDEuNjIyIDM4Ljc1NSAzMC4wMjMgMi42ODUuMjY4YzI0LjY1OS0yMi43NzQgMzguODc1LTU2LjI4MiAzOC44NzUtOTYuMDI3XCJcbiAgICAgICAgZmlsbD1cIiM0Mjg1RjRcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTMwLjU1IDI2MS4xYzM1LjI0OCAwIDY0LjgzOS0xMS42MDUgODYuNDUzLTMxLjYyMmwtNDEuMTk2LTMxLjkxM2MtMTEuMDI0IDcuNjg4LTI1LjgyIDEzLjA1NS00NS4yNTcgMTMuMDU1LTM0LjUyMyAwLTYzLjgyNC0yMi43NzMtNzQuMjY5LTU0LjI1bC0xLjUzMS4xMy00MC4yOTggMzEuMTg3LS41MjcgMS40NjVDMzUuMzkzIDIzMS43OTggNzkuNDkgMjYxLjEgMTMwLjU1IDI2MS4xXCJcbiAgICAgICAgZmlsbD1cIiMzNEE4NTNcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNNTYuMjgxIDE1Ni4zN2MtMi43NTYtOC4xMjMtNC4zNTEtMTYuODI3LTQuMzUxLTI1LjgyIDAtOC45OTQgMS41OTUtMTcuNjk3IDQuMjA2LTI1LjgybC0uMDczLTEuNzNMMTUuMjYgNzEuMzEybC0xLjMzNS42MzVDNS4wNzcgODkuNjQ0IDAgMTA5LjUxNyAwIDEzMC41NXM1LjA3NyA0MC45MDUgMTMuOTI1IDU4LjYwMmw0Mi4zNTYtMzIuNzgyXCJcbiAgICAgICAgZmlsbD1cIiNGQkJDMDVcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTMwLjU1IDUwLjQ3OWMyNC41MTQgMCA0MS4wNSAxMC41ODkgNTAuNDc5IDE5LjQzOGwzNi44NDQtMzUuOTc0QzE5NS4yNDUgMTIuOTEgMTY1Ljc5OCAwIDEzMC41NSAwIDc5LjQ5IDAgMzUuMzkzIDI5LjMwMSAxMy45MjUgNzEuOTQ3bDQyLjIxMSAzMi43ODNjMTAuNTktMzEuNDc3IDM5Ljg5MS01NC4yNTEgNzQuNDE0LTU0LjI1MVwiXG4gICAgICAgIGZpbGw9XCIjRUI0MzM1XCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/Layout/Topbar/NavItems/NavItem/Login/Login.tsx\n");

/***/ })

})