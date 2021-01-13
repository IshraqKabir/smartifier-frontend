webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/Layout/Topbar/NavItems/NavItem/Login/User/User.tsx":
/*!***********************************************************************!*\
  !*** ./Components/Layout/Topbar/NavItems/NavItem/Login/User/User.tsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../custom-hooks/useLocalState */ \"./custom-hooks/useLocalState.ts\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons */ \"./node_modules/@material-ui/icons/esm/index.js\");\n\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/Layout/Topbar/NavItems/NavItem/Login/User/User.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"makeStyles\"])({\n  userContainer: {\n    \"float\": \"right\",\n    whiteSpace: \"nowrap\",\n    textTransform: \"capitalize\",\n    color: \"white\"\n  },\n  profilePic: {\n    borderRadius: \"50%\",\n    overflow: \"hidden\",\n    height: 50,\n    width: 50,\n    display: \"flex\",\n    alignItems: \"center\"\n  },\n  userName: {\n    marginLeft: 2,\n    marginRigth: 20\n  }\n});\n\nvar Login = function Login() {\n  _s();\n\n  var _user$name;\n\n  var _useLocalState = Object(_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"user\", \"\"),\n      _useLocalState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useLocalState, 1),\n      user = _useLocalState2[0];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  var classes = useStyles();\n\n  var handleClick = function handleClick() {\n    setOpen(!open);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: classes.userContainer,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"ListItem\"], {\n      button: true,\n      onClick: handleClick,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"ListItemIcon\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: classes.profilePic,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_5___default.a, {\n            src: \"\".concat(user === null || user === void 0 ? void 0 : user.image_url),\n            width: \"100%\",\n            height: \"100%\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: classes.userName,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"ListItemText\"], {\n          primary: \"\".concat(user === null || user === void 0 ? void 0 : (_user$name = user.name) === null || _user$name === void 0 ? void 0 : _user$name.toLowerCase())\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, _this), open ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__[\"ExpandLess\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 17\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__[\"ExpandMore\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 34\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Login, \"azWxJZ17ZS8rLs9/AB7XuuJCRtw=\", false, function () {\n  return [_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_3__[\"default\"], useStyles];\n});\n\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\nvar _c;\n\n$RefreshReg$(_c, \"Login\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9MYXlvdXQvVG9wYmFyL05hdkl0ZW1zL05hdkl0ZW0vTG9naW4vVXNlci9Vc2VyLnRzeD82ZmE1Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ1c2VyQ29udGFpbmVyIiwid2hpdGVTcGFjZSIsInRleHRUcmFuc2Zvcm0iLCJjb2xvciIsInByb2ZpbGVQaWMiLCJib3JkZXJSYWRpdXMiLCJvdmVyZmxvdyIsImhlaWdodCIsIndpZHRoIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJ1c2VyTmFtZSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWd0aCIsIkxvZ2luIiwidXNlTG9jYWxTdGF0ZSIsInVzZXIiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwiY2xhc3NlcyIsImhhbmRsZUNsaWNrIiwiaW1hZ2VfdXJsIiwibmFtZSIsInRvTG93ZXJDYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFPQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDO0FBQzNCQyxlQUFhLEVBQUU7QUFDYixhQUFPLE9BRE07QUFFYkMsY0FBVSxFQUFFLFFBRkM7QUFHYkMsaUJBQWEsRUFBRSxZQUhGO0FBSWJDLFNBQUssRUFBRTtBQUpNLEdBRFk7QUFPM0JDLFlBQVUsRUFBRTtBQUNWQyxnQkFBWSxFQUFFLEtBREo7QUFFVkMsWUFBUSxFQUFFLFFBRkE7QUFHVkMsVUFBTSxFQUFFLEVBSEU7QUFJVkMsU0FBSyxFQUFFLEVBSkc7QUFLVkMsV0FBTyxFQUFFLE1BTEM7QUFNVkMsY0FBVSxFQUFFO0FBTkYsR0FQZTtBQWUzQkMsVUFBUSxFQUFFO0FBQ1JDLGNBQVUsRUFBRSxDQURKO0FBRVJDLGVBQVcsRUFBRTtBQUZMO0FBZmlCLENBQUQsQ0FBNUI7O0FBcUJBLElBQU1DLEtBQW1CLEdBQUcsU0FBdEJBLEtBQXNCLEdBQU07QUFBQTs7QUFBQTs7QUFBQSx1QkFDakJDLDJFQUFhLENBQU0sTUFBTixFQUFjLEVBQWQsQ0FESTtBQUFBO0FBQUEsTUFDekJDLElBRHlCOztBQUFBLGtCQUVSQyxzREFBUSxDQUFVLEtBQVYsQ0FGQTtBQUFBLE1BRXpCQyxJQUZ5QjtBQUFBLE1BRW5CQyxPQUZtQjs7QUFJaEMsTUFBTUMsT0FBTyxHQUFHdEIsU0FBUyxFQUF6Qjs7QUFFQSxNQUFNdUIsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QkYsV0FBTyxDQUFDLENBQUNELElBQUYsQ0FBUDtBQUNELEdBRkQ7O0FBSUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVFLE9BQU8sQ0FBQ3BCLGFBQXhCO0FBQUEsMkJBQ0UscUVBQUMsMERBQUQ7QUFBVSxZQUFNLE1BQWhCO0FBQWlCLGFBQU8sRUFBRXFCLFdBQTFCO0FBQUEsOEJBQ0UscUVBQUMsOERBQUQ7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUVELE9BQU8sQ0FBQ2hCLFVBQXhCO0FBQUEsaUNBQ0UscUVBQUMsaURBQUQ7QUFBTyxlQUFHLFlBQUtZLElBQUwsYUFBS0EsSUFBTCx1QkFBS0EsSUFBSSxDQUFFTSxTQUFYLENBQVY7QUFBa0MsaUJBQUssRUFBRSxNQUF6QztBQUFpRCxrQkFBTSxFQUFFO0FBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBTUU7QUFBSyxpQkFBUyxFQUFFRixPQUFPLENBQUNULFFBQXhCO0FBQUEsK0JBQ0UscUVBQUMsOERBQUQ7QUFBYyxpQkFBTyxZQUFLSyxJQUFMLGFBQUtBLElBQUwscUNBQUtBLElBQUksQ0FBRU8sSUFBWCwrQ0FBSyxXQUFZQyxXQUFaLEVBQUw7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORixFQVNHTixJQUFJLGdCQUFHLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSCxnQkFBb0IscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVQzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFlRCxDQXpCRDs7R0FBTUosSztVQUNXQyxtRSxFQUdDakIsUzs7O0tBSlpnQixLO0FBMkJTQSxvRUFBZiIsImZpbGUiOiIuL0NvbXBvbmVudHMvTGF5b3V0L1RvcGJhci9OYXZJdGVtcy9OYXZJdGVtL0xvZ2luL1VzZXIvVXNlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VMb2NhbFN0YXRlIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9jdXN0b20taG9va3MvdXNlTG9jYWxTdGF0ZVwiO1xuXG5pbXBvcnQge1xuICBMaXN0SXRlbSxcbiAgTGlzdEl0ZW1JY29uLFxuICBMaXN0SXRlbVRleHQsXG4gIG1ha2VTdHlsZXMsXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IEV4cGFuZExlc3MsIEV4cGFuZE1vcmUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICB1c2VyQ29udGFpbmVyOiB7XG4gICAgZmxvYXQ6IFwicmlnaHRcIixcbiAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxuICAgIHRleHRUcmFuc2Zvcm06IFwiY2FwaXRhbGl6ZVwiLFxuICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gIH0sXG4gIHByb2ZpbGVQaWM6IHtcbiAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgaGVpZ2h0OiA1MCxcbiAgICB3aWR0aDogNTAsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgfSxcbiAgdXNlck5hbWU6IHtcbiAgICBtYXJnaW5MZWZ0OiAyLFxuICAgIG1hcmdpblJpZ3RoOiAyMCxcbiAgfSxcbn0pO1xuXG5jb25zdCBMb2dpbjogUmVhY3QuRkM8e30+ID0gKCkgPT4ge1xuICBjb25zdCBbdXNlcl0gPSB1c2VMb2NhbFN0YXRlPGFueT4oXCJ1c2VyXCIsIFwiXCIpO1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHNldE9wZW4oIW9wZW4pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudXNlckNvbnRhaW5lcn0+XG4gICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9maWxlUGljfT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2Ake3VzZXI/LmltYWdlX3VybH1gfSB3aWR0aD17XCIxMDAlXCJ9IGhlaWdodD17XCIxMDAlXCJ9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy51c2VyTmFtZX0+XG4gICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtgJHt1c2VyPy5uYW1lPy50b0xvd2VyQ2FzZSgpfWB9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7b3BlbiA/IDxFeHBhbmRMZXNzIC8+IDogPEV4cGFuZE1vcmUgLz59XG4gICAgICA8L0xpc3RJdGVtPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/Layout/Topbar/NavItems/NavItem/Login/User/User.tsx\n");

/***/ })

})