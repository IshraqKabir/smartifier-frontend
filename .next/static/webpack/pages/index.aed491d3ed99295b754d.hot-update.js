webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/Layout/Topbar/NavItems/NavItem/Login/User/User.tsx":
/*!***********************************************************************!*\
  !*** ./Components/Layout/Topbar/NavItems/NavItem/Login/User/User.tsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../custom-hooks/useLocalState */ \"./custom-hooks/useLocalState.ts\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons */ \"./node_modules/@material-ui/icons/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/Layout/Topbar/NavItems/NavItem/Login/User/User.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"makeStyles\"])({\n  userContainer: {\n    whiteSpace: \"nowrap\",\n    textTransform: \"capitalize\",\n    color: \"#3798A7\",\n    height: \"auto\",\n    width: \"auto\",\n    position: \"relative\"\n  },\n  profilePic: {\n    borderRadius: \"50%\",\n    overflow: \"hidden\",\n    height: 40,\n    width: 40,\n    display: \"flex\",\n    alignItems: \"center\"\n  },\n  userName: {\n    textTransform: \"capitalize\",\n    color: \"white\",\n    marginLeft: 5,\n    marginRight: 5\n  },\n  arrow: {\n    color: \"#3798A7\",\n    display: \"flex\",\n    alignItems: \"center\",\n    justifyContent: \"center\"\n  }\n});\n\nvar User = function User() {\n  _s();\n\n  var _user$name;\n\n  var _useLocalState = Object(_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"user\", \"\"),\n      _useLocalState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useLocalState, 1),\n      user = _useLocalState2[0];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  var classes = useStyles();\n\n  var handleClick = function handleClick() {\n    setOpen(!open);\n  };\n\n  if (!user) return;\n\n  var logOut = function logOut() {};\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: classes.userContainer,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"ListItem\"], {\n      button: true,\n      onClick: handleClick,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"ListItemIcon\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: classes.profilePic,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Avatar\"], {\n            alt: \"\".concat(user === null || user === void 0 ? void 0 : user.name),\n            src: \"\".concat(user.image_url)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: classes.userName,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"ListItemText\"], {\n          primary: \"\".concat(user === null || user === void 0 ? void 0 : (_user$name = user.name) === null || _user$name === void 0 ? void 0 : _user$name.toLowerCase())\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: classes.arrow,\n        children: open ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__[\"ExpandLess\"], {\n          color: \"inherit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 13\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__[\"ExpandMore\"], {\n          color: \"inherit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Collapse\"], {\n      \"in\": open,\n      timeout: \"auto\",\n      unmountOnExit: true,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(CollapseContainer, {\n        onClick: function onClick() {\n          if (open) setOpen(false);\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(MenuItem, {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n            href: \"/user/profile\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(LinkText, {\n                children: \"Profile\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 95,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 94,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(MenuItem, {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(LinkText, {\n            children: \"Logout\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 100,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 68,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(User, \"azWxJZ17ZS8rLs9/AB7XuuJCRtw=\", false, function () {\n  return [_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_3__[\"default\"], useStyles];\n});\n\n_c = User;\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\nvar CollapseContainer = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"withStyles\"])({\n  root: {\n    position: \"absolute\",\n    right: 0,\n    zIndex: 1000,\n    backgroundColor: \"#003085\",\n    color: \"white\",\n    width: \"auto\",\n    display: \"flex\",\n    flexDirection: \"column\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Box\"]);\nvar MenuItem = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"withStyles\"])({\n  root: {\n    width: \"100%\",\n    padding: \"1rem\",\n    borderBottom: \"1px solid white\",\n    color: \"white\",\n    cursor: \"pointer\",\n    textAlign: \"center\",\n    \"&:hover\": {\n      borderBottom: \"1px solid #3798A7\"\n    }\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Box\"]);\nvar LinkText = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"withStyles\"])({\n  root: {\n    color: \"white\",\n    \"&:hover\": {\n      color: \"#3798A7\"\n    }\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Typography\"]);\n\nvar _c;\n\n$RefreshReg$(_c, \"User\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9MYXlvdXQvVG9wYmFyL05hdkl0ZW1zL05hdkl0ZW0vTG9naW4vVXNlci9Vc2VyLnRzeD82ZmE1Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ1c2VyQ29udGFpbmVyIiwid2hpdGVTcGFjZSIsInRleHRUcmFuc2Zvcm0iLCJjb2xvciIsImhlaWdodCIsIndpZHRoIiwicG9zaXRpb24iLCJwcm9maWxlUGljIiwiYm9yZGVyUmFkaXVzIiwib3ZlcmZsb3ciLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsInVzZXJOYW1lIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiYXJyb3ciLCJqdXN0aWZ5Q29udGVudCIsIlVzZXIiLCJ1c2VMb2NhbFN0YXRlIiwidXNlciIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJjbGFzc2VzIiwiaGFuZGxlQ2xpY2siLCJsb2dPdXQiLCJuYW1lIiwiaW1hZ2VfdXJsIiwidG9Mb3dlckNhc2UiLCJDb2xsYXBzZUNvbnRhaW5lciIsIndpdGhTdHlsZXMiLCJyb290IiwicmlnaHQiLCJ6SW5kZXgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmbGV4RGlyZWN0aW9uIiwiQm94IiwiTWVudUl0ZW0iLCJwYWRkaW5nIiwiYm9yZGVyQm90dG9tIiwiY3Vyc29yIiwidGV4dEFsaWduIiwiTGlua1RleHQiLCJUeXBvZ3JhcGh5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFZQTtBQUVBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDO0FBQzNCQyxlQUFhLEVBQUU7QUFDYkMsY0FBVSxFQUFFLFFBREM7QUFFYkMsaUJBQWEsRUFBRSxZQUZGO0FBR2JDLFNBQUssRUFBRSxTQUhNO0FBSWJDLFVBQU0sRUFBRSxNQUpLO0FBS2JDLFNBQUssRUFBRSxNQUxNO0FBTWJDLFlBQVEsRUFBRTtBQU5HLEdBRFk7QUFTM0JDLFlB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Q0FBakI7QUFjQSxJQUFNTSxRQUFRLEdBQUdaLG9FQUFVLENBQUM7QUFDMUJDLE1BQUksRUFBRTtBQUNKNUIsU0FBSyxFQUFFLE9BREg7QUFFSixlQUFXO0FBQ1RBLFdBQUssRUFBRTtBQURFO0FBRlA7QUFEb0IsQ0FBRCxDQUFWLENBT2R3Qyw0REFQYyxDQUFqQiIsImZpbGUiOiIuL0NvbXBvbmVudHMvTGF5b3V0L1RvcGJhci9OYXZJdGVtcy9OYXZJdGVtL0xvZ2luL1VzZXIvVXNlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VMb2NhbFN0YXRlIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jdXN0b20taG9va3MvdXNlTG9jYWxTdGF0ZVwiO1xuXG5pbXBvcnQge1xuICBBdmF0YXIsXG4gIEJveCxcbiAgQ29sbGFwc2UsXG4gIExpc3RJdGVtLFxuICBMaXN0SXRlbUljb24sXG4gIExpc3RJdGVtVGV4dCxcbiAgbWFrZVN0eWxlcyxcbiAgVHlwb2dyYXBoeSxcbiAgd2l0aFN0eWxlcyxcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5cbmltcG9ydCB7IEV4cGFuZExlc3MsIEV4cGFuZE1vcmUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XG5cbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIHVzZXJDb250YWluZXI6IHtcbiAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxuICAgIHRleHRUcmFuc2Zvcm06IFwiY2FwaXRhbGl6ZVwiLFxuICAgIGNvbG9yOiBcIiMzNzk4QTdcIixcbiAgICBoZWlnaHQ6IFwiYXV0b1wiLFxuICAgIHdpZHRoOiBcImF1dG9cIixcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICB9LFxuICBwcm9maWxlUGljOiB7XG4gICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgIGhlaWdodDogNDAsXG4gICAgd2lkdGg6IDQwLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIH0sXG4gIHVzZXJOYW1lOiB7XG4gICAgdGV4dFRyYW5zZm9ybTogXCJjYXBpdGFsaXplXCIsXG4gICAgY29sb3I6IFwid2hpdGVcIixcbiAgICBtYXJnaW5MZWZ0OiA1LFxuICAgIG1hcmdpblJpZ2h0OiA1LFxuICB9LFxuICBhcnJvdzoge1xuICAgIGNvbG9yOiBcIiMzNzk4QTdcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICB9LFxufSk7XG5cbmNvbnN0IFVzZXI6IFJlYWN0LkZDPHt9PiA9ICgpID0+IHtcbiAgY29uc3QgW3VzZXJdID0gdXNlTG9jYWxTdGF0ZTxhbnk+KFwidXNlclwiLCBcIlwiKTtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBzZXRPcGVuKCFvcGVuKTtcbiAgfTtcblxuICBpZiAoIXVzZXIpIHJldHVybjtcblxuICBjb25zdCBsb2dPdXQgPSAoKSA9PiB7XG5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudXNlckNvbnRhaW5lcn0+XG4gICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9maWxlUGljfT5cbiAgICAgICAgICAgIDxBdmF0YXIgYWx0PXtgJHt1c2VyPy5uYW1lfWB9IHNyYz17YCR7dXNlci5pbWFnZV91cmx9YH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnVzZXJOYW1lfT5cbiAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2Ake3VzZXI/Lm5hbWU/LnRvTG93ZXJDYXNlKCl9YH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFycm93fT5cbiAgICAgICAgICB7b3BlbiA/IChcbiAgICAgICAgICAgIDxFeHBhbmRMZXNzIGNvbG9yPVwiaW5oZXJpdFwiIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxFeHBhbmRNb3JlIGNvbG9yPVwiaW5oZXJpdFwiIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xpc3RJdGVtPlxuICAgICAgPENvbGxhcHNlIGluPXtvcGVufSB0aW1lb3V0PVwiYXV0b1wiIHVubW91bnRPbkV4aXQ+XG4gICAgICAgIDxDb2xsYXBzZUNvbnRhaW5lclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGlmIChvcGVuKSBzZXRPcGVuKGZhbHNlKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPE1lbnVJdGVtPlxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC91c2VyL3Byb2ZpbGVgfT5cbiAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgPExpbmtUZXh0PlByb2ZpbGU8L0xpbmtUZXh0PlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICA8TWVudUl0ZW0+XG4gICAgICAgICAgICA8TGlua1RleHQ+TG9nb3V0PC9MaW5rVGV4dD5cbiAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICA8L0NvbGxhcHNlQ29udGFpbmVyPlxuICAgICAgPC9Db2xsYXBzZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG5cbmNvbnN0IENvbGxhcHNlQ29udGFpbmVyID0gd2l0aFN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgIHJpZ2h0OiAwLFxuICAgIHpJbmRleDogMTAwMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwMzA4NVwiLFxuICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgd2lkdGg6IFwiYXV0b1wiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIH0sXG59KShCb3gpO1xuXG5jb25zdCBNZW51SXRlbSA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIHBhZGRpbmc6IFwiMXJlbVwiLFxuICAgIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgd2hpdGVcIixcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkICMzNzk4QTdcIixcbiAgICB9LFxuICB9LFxufSkoQm94KTtcblxuY29uc3QgTGlua1RleHQgPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIGNvbG9yOiBcIiMzNzk4QTdcIixcbiAgICB9LFxuICB9LFxufSkoVHlwb2dyYXBoeSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/Layout/Topbar/NavItems/NavItem/Login/User/User.tsx\n");

/***/ })

})