webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/Layout/Topbar/NavItems/NavItem/Login/User/User.tsx":
/*!***********************************************************************!*\
  !*** ./Components/Layout/Topbar/NavItems/NavItem/Login/User/User.tsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../custom-hooks/useLocalState */ \"./custom-hooks/useLocalState.ts\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons */ \"./node_modules/@material-ui/icons/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/Layout/Topbar/NavItems/NavItem/Login/User/User.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"makeStyles\"])({\n  userContainer: {\n    whiteSpace: \"nowrap\",\n    textTransform: \"capitalize\",\n    color: \"#3798A7\",\n    height: \"auto\",\n    width: \"auto\",\n    position: \"relative\"\n  },\n  profilePic: {\n    borderRadius: \"50%\",\n    overflow: \"hidden\",\n    height: 40,\n    width: 40,\n    display: \"flex\",\n    alignItems: \"center\"\n  },\n  userName: {\n    textTransform: \"capitalize\",\n    color: \"white\",\n    marginLeft: 5,\n    marginRight: 5\n  },\n  arrow: {\n    color: \"#3798A7\",\n    display: \"flex\",\n    alignItems: \"center\",\n    justifyContent: \"center\"\n  }\n});\n\nvar User = function User() {\n  _s();\n\n  var _user$name;\n\n  var _useLocalState = Object(_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"user\", \"\"),\n      _useLocalState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useLocalState, 2),\n      user = _useLocalState2[0],\n      setUser = _useLocalState2[1];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  var classes = useStyles();\n\n  var handleClick = function handleClick() {\n    setOpen(!open);\n  };\n\n  if (!user) return;\n\n  var logOut = function logOut() {};\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: classes.userContainer,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"ListItem\"], {\n      button: true,\n      onClick: handleClick,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"ListItemIcon\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: classes.profilePic,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Avatar\"], {\n            alt: \"\".concat(user === null || user === void 0 ? void 0 : user.name),\n            src: \"\".concat(user.image_url)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: classes.userName,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"ListItemText\"], {\n          primary: \"\".concat(user === null || user === void 0 ? void 0 : (_user$name = user.name) === null || _user$name === void 0 ? void 0 : _user$name.toLowerCase())\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: classes.arrow,\n        children: open ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__[\"ExpandLess\"], {\n          color: \"inherit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 13\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__[\"ExpandMore\"], {\n          color: \"inherit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Collapse\"], {\n      \"in\": open,\n      timeout: \"auto\",\n      unmountOnExit: true,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(CollapseContainer, {\n        onClick: function onClick() {\n          if (open) setOpen(false);\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(MenuItem, {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n            href: \"/user/profile\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(LinkText, {\n                children: \"Profile\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 95,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 94,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(MenuItem, {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(LinkText, {\n            children: \"Logout\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 100,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 68,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(User, \"DU+x7dM0Gb8KUoVD6GvgdhXhxO0=\", false, function () {\n  return [_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_3__[\"default\"], useStyles];\n});\n\n_c = User;\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\nvar CollapseContainer = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"withStyles\"])({\n  root: {\n    position: \"absolute\",\n    right: 0,\n    zIndex: 1000,\n    backgroundColor: \"#003085\",\n    color: \"white\",\n    width: \"auto\",\n    display: \"flex\",\n    flexDirection: \"column\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Box\"]);\nvar MenuItem = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"withStyles\"])({\n  root: {\n    width: \"100%\",\n    padding: \"1rem\",\n    borderBottom: \"1px solid white\",\n    color: \"white\",\n    cursor: \"pointer\",\n    textAlign: \"center\",\n    \"&:hover\": {\n      borderBottom: \"1px solid #3798A7\"\n    }\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Box\"]);\nvar LinkText = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"withStyles\"])({\n  root: {\n    color: \"white\",\n    \"&:hover\": {\n      color: \"#3798A7\"\n    }\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Typography\"]);\n\nvar _c;\n\n$RefreshReg$(_c, \"User\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9MYXlvdXQvVG9wYmFyL05hdkl0ZW1zL05hdkl0ZW0vTG9naW4vVXNlci9Vc2VyLnRzeD82ZmE1Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ1c2VyQ29udGFpbmVyIiwid2hpdGVTcGFjZSIsInRleHRUcmFuc2Zvcm0iLCJjb2xvciIsImhlaWdodCIsIndpZHRoIiwicG9zaXRpb24iLCJwcm9maWxlUGljIiwiYm9yZGVyUmFkaXVzIiwib3ZlcmZsb3ciLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsInVzZXJOYW1lIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiYXJyb3ciLCJqdXN0aWZ5Q29udGVudCIsIlVzZXIiLCJ1c2VMb2NhbFN0YXRlIiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwiY2xhc3NlcyIsImhhbmRsZUNsaWNrIiwibG9nT3V0IiwibmFtZSIsImltYWdlX3VybCIsInRvTG93ZXJDYXNlIiwiQ29sbGFwc2VDb250YWluZXIiLCJ3aXRoU3R5bGVzIiwicm9vdCIsInJpZ2h0IiwiekluZGV4IiwiYmFja2dyb3VuZENvbG9yIiwiZmxleERpcmVjdGlvbiIsIkJveCIsIk1lbnVJdGVtIiwicGFkZGluZyIsImJvcmRlckJvdHRvbSIsImN1cnNvciIsInRleHRBbGlnbiIsIkxpbmtUZXh0IiwiVHlwb2dyYXBoeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBWUE7QUFFQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQztBQUMzQkMsZUFBYSxFQUFFO0FBQ2JDLGNBQVUsRUFBRSxRQURDO0FBRWJDLGlCQUFhLEVBQUUsWUFGRjtBQUdiQyxTQUFLLEVBQUUsU0FITTtBQUliQyxVQUFNLEVBQUUsTUFKSztBQUtiQyxTQUFLLEVBQUUsTUFMTTtBQU1iQyxZQUFRLEVBQUU7QUFORyxHQURZ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QUFEb0IsQ0FBRCxDQUFWLENBWWRILHFEQVpjLENBQWpCO0FBY0EsSUFBTU0sUUFBUSxHQUFHWixvRUFBVSxDQUFDO0FBQzFCQyxNQUFJLEVBQUU7QUFDSjdCLFNBQUssRUFBRSxPQURIO0FBRUosZUFBVztBQUNUQSxXQUFLLEVBQUU7QUFERTtBQUZQO0FBRG9CLENBQUQsQ0FBVixDQU9keUMsNERBUGMsQ0FBakIiLCJmaWxlIjoiLi9Db21wb25lbnRzL0xheW91dC9Ub3BiYXIvTmF2SXRlbXMvTmF2SXRlbS9Mb2dpbi9Vc2VyL1VzZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlTG9jYWxTdGF0ZSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vY3VzdG9tLWhvb2tzL3VzZUxvY2FsU3RhdGVcIjtcblxuaW1wb3J0IHtcbiAgQXZhdGFyLFxuICBCb3gsXG4gIENvbGxhcHNlLFxuICBMaXN0SXRlbSxcbiAgTGlzdEl0ZW1JY29uLFxuICBMaXN0SXRlbVRleHQsXG4gIG1ha2VTdHlsZXMsXG4gIFR5cG9ncmFwaHksXG4gIHdpdGhTdHlsZXMsXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuXG5pbXBvcnQgeyBFeHBhbmRMZXNzLCBFeHBhbmRNb3JlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xuXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICB1c2VyQ29udGFpbmVyOiB7XG4gICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcbiAgICB0ZXh0VHJhbnNmb3JtOiBcImNhcGl0YWxpemVcIixcbiAgICBjb2xvcjogXCIjMzc5OEE3XCIsXG4gICAgaGVpZ2h0OiBcImF1dG9cIixcbiAgICB3aWR0aDogXCJhdXRvXCIsXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgfSxcbiAgcHJvZmlsZVBpYzoge1xuICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICBoZWlnaHQ6IDQwLFxuICAgIHdpZHRoOiA0MCxcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICB9LFxuICB1c2VyTmFtZToge1xuICAgIHRleHRUcmFuc2Zvcm06IFwiY2FwaXRhbGl6ZVwiLFxuICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgbWFyZ2luTGVmdDogNSxcbiAgICBtYXJnaW5SaWdodDogNSxcbiAgfSxcbiAgYXJyb3c6IHtcbiAgICBjb2xvcjogXCIjMzc5OEE3XCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgfSxcbn0pO1xuXG5jb25zdCBVc2VyOiBSZWFjdC5GQzx7fT4gPSAoKSA9PiB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZUxvY2FsU3RhdGU8YW55PihcInVzZXJcIiwgXCJcIik7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0T3Blbighb3Blbik7XG4gIH07XG5cbiAgaWYgKCF1c2VyKSByZXR1cm47XG5cbiAgY29uc3QgbG9nT3V0ID0gKCkgPT4ge1xuXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnVzZXJDb250YWluZXJ9PlxuICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XG4gICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucHJvZmlsZVBpY30+XG4gICAgICAgICAgICA8QXZhdGFyIGFsdD17YCR7dXNlcj8ubmFtZX1gfSBzcmM9e2Ake3VzZXIuaW1hZ2VfdXJsfWB9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy51c2VyTmFtZX0+XG4gICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtgJHt1c2VyPy5uYW1lPy50b0xvd2VyQ2FzZSgpfWB9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hcnJvd30+XG4gICAgICAgICAge29wZW4gPyAoXG4gICAgICAgICAgICA8RXhwYW5kTGVzcyBjb2xvcj1cImluaGVyaXRcIiAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8RXhwYW5kTW9yZSBjb2xvcj1cImluaGVyaXRcIiAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MaXN0SXRlbT5cbiAgICAgIDxDb2xsYXBzZSBpbj17b3Blbn0gdGltZW91dD1cImF1dG9cIiB1bm1vdW50T25FeGl0PlxuICAgICAgICA8Q29sbGFwc2VDb250YWluZXJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBpZiAob3Blbikgc2V0T3BlbihmYWxzZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxNZW51SXRlbT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdXNlci9wcm9maWxlYH0+XG4gICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgIDxMaW5rVGV4dD5Qcm9maWxlPC9MaW5rVGV4dD5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgPE1lbnVJdGVtPlxuICAgICAgICAgICAgPExpbmtUZXh0PkxvZ291dDwvTGlua1RleHQ+XG4gICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgPC9Db2xsYXBzZUNvbnRhaW5lcj5cbiAgICAgIDwvQ29sbGFwc2U+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuXG5jb25zdCBDb2xsYXBzZUNvbnRhaW5lciA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICByaWdodDogMCxcbiAgICB6SW5kZXg6IDEwMDAsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMDMwODVcIixcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgIHdpZHRoOiBcImF1dG9cIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICB9LFxufSkoQm94KTtcblxuY29uc3QgTWVudUl0ZW0gPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBwYWRkaW5nOiBcIjFyZW1cIixcbiAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkIHdoaXRlXCIsXG4gICAgY29sb3I6IFwid2hpdGVcIixcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCAjMzc5OEE3XCIsXG4gICAgfSxcbiAgfSxcbn0pKEJveCk7XG5cbmNvbnN0IExpbmtUZXh0ID0gd2l0aFN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBjb2xvcjogXCIjMzc5OEE3XCIsXG4gICAgfSxcbiAgfSxcbn0pKFR5cG9ncmFwaHkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/Layout/Topbar/NavItems/NavItem/Login/User/User.tsx\n");

/***/ })

})