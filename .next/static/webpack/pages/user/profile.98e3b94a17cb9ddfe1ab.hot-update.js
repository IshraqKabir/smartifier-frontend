webpackHotUpdate_N_E("pages/user/profile",{

/***/ "./Components/Layout/Topbar/NavItems/NavItem/Login/User/User.tsx":
/*!***********************************************************************!*\
  !*** ./Components/Layout/Topbar/NavItems/NavItem/Login/User/User.tsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../custom-hooks/useLocalState */ \"./custom-hooks/useLocalState.ts\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons */ \"./node_modules/@material-ui/icons/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/Layout/Topbar/NavItems/NavItem/Login/User/User.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"makeStyles\"])({\n  userContainer: {\n    whiteSpace: \"nowrap\",\n    textTransform: \"capitalize\",\n    color: \"#3798A7\",\n    height: \"auto\",\n    width: \"auto\",\n    position: \"relative\"\n  },\n  profilePic: {\n    borderRadius: \"50%\",\n    overflow: \"hidden\",\n    height: 40,\n    width: 40,\n    display: \"flex\",\n    alignItems: \"center\"\n  },\n  userName: {\n    textTransform: \"capitalize\",\n    color: \"white\",\n    marginLeft: 5,\n    marginRight: 5\n  },\n  arrow: {\n    color: \"#3798A7\",\n    display: \"flex\",\n    alignItems: \"center\",\n    justifyContent: \"center\"\n  }\n});\n\nvar User = function User() {\n  _s();\n\n  var _user$name;\n\n  var _useLocalState = Object(_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"user\", \"\"),\n      _useLocalState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useLocalState, 2),\n      user = _useLocalState2[0],\n      setUser = _useLocalState2[1];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  var classes = useStyles();\n\n  var handleClick = function handleClick() {\n    setOpen(!open);\n  };\n\n  if (!user) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {}, void 0, false);\n\n  var logOut = function logOut() {\n    setUser(\"\");\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: classes.userContainer,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"ListItem\"], {\n      button: true,\n      onClick: handleClick,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"ListItemIcon\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: classes.profilePic,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Avatar\"], {\n            alt: \"\".concat(user === null || user === void 0 ? void 0 : user.name),\n            src: \"\".concat(user.image_url)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: classes.userName,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"ListItemText\"], {\n          primary: \"\".concat(user === null || user === void 0 ? void 0 : (_user$name = user.name) === null || _user$name === void 0 ? void 0 : _user$name.toLowerCase())\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: classes.arrow,\n        children: open ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__[\"ExpandLess\"], {\n          color: \"inherit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 13\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__[\"ExpandMore\"], {\n          color: \"inherit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Collapse\"], {\n      \"in\": open,\n      timeout: \"auto\",\n      unmountOnExit: true,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(CollapseContainer, {\n        onClick: function onClick() {\n          if (open) setOpen(false);\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(MenuItem, {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n            href: \"/user/profile\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(LinkText, {\n                children: \"Profile\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 95,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 94,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(MenuItem, {\n          onClick: function onClick() {\n            return logOut();\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(LinkText, {\n            children: \"Logout\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 100,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 68,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(User, \"DU+x7dM0Gb8KUoVD6GvgdhXhxO0=\", false, function () {\n  return [_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_3__[\"default\"], useStyles];\n});\n\n_c = User;\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\nvar CollapseContainer = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"withStyles\"])({\n  root: {\n    position: \"absolute\",\n    right: 0,\n    zIndex: 1000,\n    backgroundColor: \"#003085\",\n    color: \"white\",\n    width: \"auto\",\n    display: \"flex\",\n    flexDirection: \"column\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Box\"]);\nvar MenuItem = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"withStyles\"])({\n  root: {\n    width: \"100%\",\n    padding: \"1rem\",\n    borderBottom: \"1px solid white\",\n    color: \"white\",\n    cursor: \"pointer\",\n    textAlign: \"center\",\n    \"&:hover\": {\n      borderBottom: \"1px solid #3798A7\"\n    }\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Box\"]);\nvar LinkText = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"withStyles\"])({\n  root: {\n    color: \"white\",\n    \"&:hover\": {\n      color: \"#3798A7\"\n    }\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Typography\"]);\n\nvar _c;\n\n$RefreshReg$(_c, \"User\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9MYXlvdXQvVG9wYmFyL05hdkl0ZW1zL05hdkl0ZW0vTG9naW4vVXNlci9Vc2VyLnRzeD82ZmE1Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ1c2VyQ29udGFpbmVyIiwid2hpdGVTcGFjZSIsInRleHRUcmFuc2Zvcm0iLCJjb2xvciIsImhlaWdodCIsIndpZHRoIiwicG9zaXRpb24iLCJwcm9maWxlUGljIiwiYm9yZGVyUmFkaXVzIiwib3ZlcmZsb3ciLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsInVzZXJOYW1lIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiYXJyb3ciLCJqdXN0aWZ5Q29udGVudCIsIlVzZXIiLCJ1c2VMb2NhbFN0YXRlIiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwiY2xhc3NlcyIsImhhbmRsZUNsaWNrIiwibG9nT3V0IiwibmFtZSIsImltYWdlX3VybCIsInRvTG93ZXJDYXNlIiwiQ29sbGFwc2VDb250YWluZXIiLCJ3aXRoU3R5bGVzIiwicm9vdCIsInJpZ2h0IiwiekluZGV4IiwiYmFja2dyb3VuZENvbG9yIiwiZmxleERpcmVjdGlvbiIsIkJveCIsIk1lbnVJdGVtIiwicGFkZGluZyIsImJvcmRlckJvdHRvbSIsImN1cnNvciIsInRleHRBbGlnbiIsIkxpbmtUZXh0IiwiVHlwb2dyYXBoeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQVlBO0FBRUE7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUM7QUFDM0JDLGVBQWEsRUFBRTtBQUNiQyxjQUFVLEVBQUUsUUFEQztBQUViQyxpQkFBYSxFQUFFLFlBRkY7QUFHYkMsU0FBSyxFQUFFLFNBSE07QUFJYkMsVUFBTSxFQUFFLE1BSks7QUFLYkMsU0FBSyxFQUFFLE1BTE07QUFNYkMsWUFBUSxFQUFFO0FBTkcsR0FE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QUUsT0FKSDtBQUtKc0MsVUFBTSxFQUFFLFNBTEo7QUFNSkMsYUFBUyxFQUFFLFFBTlA7QUFPSixlQUFXO0FBQ1RGLGtCQUFZLEVBQUU7QUFETDtBQVBQO0FBRG9CLENBQUQsQ0FBVixDQVlkSCxxREFaYyxDQUFqQjtBQWNBLElBQU1NLFFBQVEsR0FBR1osb0VBQVUsQ0FBQztBQUMxQkMsTUFBSSxFQUFFO0FBQ0o3QixTQUFLLEVBQUUsT0FESDtBQUVKLGVBQVc7QUFDVEEsV0FBSyxFQUFFO0FBREU7QUFGUDtBQURvQixDQUFELENBQVYsQ0FPZHlDLDREQVBjLENBQWpCIiwiZmlsZSI6Ii4vQ29tcG9uZW50cy9MYXlvdXQvVG9wYmFyL05hdkl0ZW1zL05hdkl0ZW0vTG9naW4vVXNlci9Vc2VyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZUxvY2FsU3RhdGUgZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2N1c3RvbS1ob29rcy91c2VMb2NhbFN0YXRlXCI7XG5cbmltcG9ydCB7XG4gIEF2YXRhcixcbiAgQm94LFxuICBDb2xsYXBzZSxcbiAgTGlzdEl0ZW0sXG4gIExpc3RJdGVtSWNvbixcbiAgTGlzdEl0ZW1UZXh0LFxuICBtYWtlU3R5bGVzLFxuICBUeXBvZ3JhcGh5LFxuICB3aXRoU3R5bGVzLFxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcblxuaW1wb3J0IHsgRXhwYW5kTGVzcywgRXhwYW5kTW9yZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcblxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgdXNlckNvbnRhaW5lcjoge1xuICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG4gICAgdGV4dFRyYW5zZm9ybTogXCJjYXBpdGFsaXplXCIsXG4gICAgY29sb3I6IFwiIzM3OThBN1wiLFxuICAgIGhlaWdodDogXCJhdXRvXCIsXG4gICAgd2lkdGg6IFwiYXV0b1wiLFxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gIH0sXG4gIHByb2ZpbGVQaWM6IHtcbiAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgaGVpZ2h0OiA0MCxcbiAgICB3aWR0aDogNDAsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgfSxcbiAgdXNlck5hbWU6IHtcbiAgICB0ZXh0VHJhbnNmb3JtOiBcImNhcGl0YWxpemVcIixcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgIG1hcmdpbkxlZnQ6IDUsXG4gICAgbWFyZ2luUmlnaHQ6IDUsXG4gIH0sXG4gIGFycm93OiB7XG4gICAgY29sb3I6IFwiIzM3OThBN1wiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gIH0sXG59KTtcblxuY29uc3QgVXNlcjogUmVhY3QuRkM8e30+ID0gKCkgPT4ge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VMb2NhbFN0YXRlPGFueT4oXCJ1c2VyXCIsIFwiXCIpO1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHNldE9wZW4oIW9wZW4pO1xuICB9O1xuXG4gIGlmICghdXNlcikgcmV0dXJuIDw+PC8+O1xuXG4gIGNvbnN0IGxvZ091dCA9ICgpID0+IHtcbiAgICBzZXRVc2VyKFwiXCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudXNlckNvbnRhaW5lcn0+XG4gICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9maWxlUGljfT5cbiAgICAgICAgICAgIDxBdmF0YXIgYWx0PXtgJHt1c2VyPy5uYW1lfWB9IHNyYz17YCR7dXNlci5pbWFnZV91cmx9YH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnVzZXJOYW1lfT5cbiAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2Ake3VzZXI/Lm5hbWU/LnRvTG93ZXJDYXNlKCl9YH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFycm93fT5cbiAgICAgICAgICB7b3BlbiA/IChcbiAgICAgICAgICAgIDxFeHBhbmRMZXNzIGNvbG9yPVwiaW5oZXJpdFwiIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxFeHBhbmRNb3JlIGNvbG9yPVwiaW5oZXJpdFwiIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xpc3RJdGVtPlxuICAgICAgPENvbGxhcHNlIGluPXtvcGVufSB0aW1lb3V0PVwiYXV0b1wiIHVubW91bnRPbkV4aXQ+XG4gICAgICAgIDxDb2xsYXBzZUNvbnRhaW5lclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGlmIChvcGVuKSBzZXRPcGVuKGZhbHNlKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPE1lbnVJdGVtPlxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC91c2VyL3Byb2ZpbGVgfT5cbiAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgPExpbmtUZXh0PlByb2ZpbGU8L0xpbmtUZXh0PlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17KCkgPT4gbG9nT3V0KCl9PlxuICAgICAgICAgICAgPExpbmtUZXh0PkxvZ291dDwvTGlua1RleHQ+XG4gICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgPC9Db2xsYXBzZUNvbnRhaW5lcj5cbiAgICAgIDwvQ29sbGFwc2U+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuXG5jb25zdCBDb2xsYXBzZUNvbnRhaW5lciA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICByaWdodDogMCxcbiAgICB6SW5kZXg6IDEwMDAsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMDMwODVcIixcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgIHdpZHRoOiBcImF1dG9cIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICB9LFxufSkoQm94KTtcblxuY29uc3QgTWVudUl0ZW0gPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBwYWRkaW5nOiBcIjFyZW1cIixcbiAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkIHdoaXRlXCIsXG4gICAgY29sb3I6IFwid2hpdGVcIixcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCAjMzc5OEE3XCIsXG4gICAgfSxcbiAgfSxcbn0pKEJveCk7XG5cbmNvbnN0IExpbmtUZXh0ID0gd2l0aFN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBjb2xvcjogXCIjMzc5OEE3XCIsXG4gICAgfSxcbiAgfSxcbn0pKFR5cG9ncmFwaHkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/Layout/Topbar/NavItems/NavItem/Login/User/User.tsx\n");

/***/ })

})