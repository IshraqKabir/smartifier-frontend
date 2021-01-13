webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/Layout/Topbar/NavItems/NavItem/Login/User/User.tsx":
/*!***********************************************************************!*\
  !*** ./Components/Layout/Topbar/NavItems/NavItem/Login/User/User.tsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../custom-hooks/useLocalState */ \"./custom-hooks/useLocalState.ts\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons */ \"./node_modules/@material-ui/icons/esm/index.js\");\n\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/Layout/Topbar/NavItems/NavItem/Login/User/User.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"makeStyles\"])({\n  userContainer: {\n    \"float\": \"right\",\n    whiteSpace: \"nowrap\",\n    textTransform: \"capitalize\",\n    color: \"#3798A7\"\n  },\n  profilePic: {\n    borderRadius: \"50%\",\n    overflow: \"hidden\",\n    height: 40,\n    width: 40,\n    display: \"flex\",\n    alignItems: \"center\"\n  },\n  userName: {\n    color: \"white\",\n    marginLeft: 5,\n    marginRight: 5\n  }\n});\n\nvar User = function User() {\n  _s();\n\n  var _user$name;\n\n  var _useLocalState = Object(_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"user\", \"\"),\n      _useLocalState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useLocalState, 1),\n      user = _useLocalState2[0];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  var classes = useStyles();\n\n  var handleClick = function handleClick() {\n    setOpen(!open);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: classes.userContainer,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"ListItem\"], {\n      button: true,\n      onClick: handleClick,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"ListItemIcon\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: classes.profilePic,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_5___default.a, {\n            src: \"\".concat(user === null || user === void 0 ? void 0 : user.image_url),\n            width: \"100%\",\n            height: \"100%\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: classes.userName,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"ListItemText\"], {\n          primary: \"\".concat(user === null || user === void 0 ? void 0 : (_user$name = user.name) === null || _user$name === void 0 ? void 0 : _user$name.toLowerCase())\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, _this), open ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__[\"ExpandLess\"], {\n        color: \"inherit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 17\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__[\"ExpandMore\"], {\n        color: \"inherit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 50\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(User, \"azWxJZ17ZS8rLs9/AB7XuuJCRtw=\", false, function () {\n  return [_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_3__[\"default\"], useStyles];\n});\n\n_c = User;\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\n\nvar _c;\n\n$RefreshReg$(_c, \"User\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9MYXlvdXQvVG9wYmFyL05hdkl0ZW1zL05hdkl0ZW0vTG9naW4vVXNlci9Vc2VyLnRzeD82ZmE1Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ1c2VyQ29udGFpbmVyIiwid2hpdGVTcGFjZSIsInRleHRUcmFuc2Zvcm0iLCJjb2xvciIsInByb2ZpbGVQaWMiLCJib3JkZXJSYWRpdXMiLCJvdmVyZmxvdyIsImhlaWdodCIsIndpZHRoIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJ1c2VyTmFtZSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsIlVzZXIiLCJ1c2VMb2NhbFN0YXRlIiwidXNlciIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJjbGFzc2VzIiwiaGFuZGxlQ2xpY2siLCJpbWFnZV91cmwiLCJuYW1lIiwidG9Mb3dlckNhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQU9BO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUM7QUFDM0JDLGVBQWEsRUFBRTtBQUNiLGFBQU8sT0FETTtBQUViQyxjQUFVLEVBQUUsUUFGQztBQUdiQyxpQkFBYSxFQUFFLFlBSEY7QUFJYkMsU0FBSyxFQUFFO0FBSk0sR0FEWTtBQU8zQkMsWUFBVSxFQUFFO0FBQ1ZDLGdCQUFZLEVBQUUsS0FESjtBQUVWQyxZQUFRLEVBQUUsUUFGQTtBQUdWQyxVQUFNLEVBQUUsRUFIRTtBQUlWQyxTQUFLLEVBQUUsRUFKRztBQUtWQyxXQUFPLEVBQUUsTUFMQztBQU1WQyxjQUFVLEVBQUU7QUFORixHQVBlO0FBZTNCQyxVQUFRLEVBQUU7QUFDUlIsU0FBSyxFQUFFLE9BREM7QUFFUlMsY0FBVSxFQUFFLENBRko7QUFHUkMsZUFBVyxFQUFFO0FBSEw7QUFmaUIsQ0FBRCxDQUE1Qjs7QUFzQkEsSUFBTUMsSUFBa0IsR0FBRyxTQUFyQkEsSUFBcUIsR0FBTTtBQUFBOztBQUFBOztBQUFBLHVCQUNoQkMsMkVBQWEsQ0FBTSxNQUFOLEVBQWMsRUFBZCxDQURHO0FBQUE7QUFBQSxNQUN4QkMsSUFEd0I7O0FBQUEsa0JBRVBDLHNEQUFRLENBQVUsS0FBVixDQUZEO0FBQUEsTUFFeEJDLElBRndCO0FBQUEsTUFFbEJDLE9BRmtCOztBQUkvQixNQUFNQyxPQUFPLEdBQUd0QixTQUFTLEVBQXpCOztBQUVBLE1BQU11QixXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCRixXQUFPLENBQUMsQ0FBQ0QsSUFBRixDQUFQO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUUsT0FBTyxDQUFDcEIsYUFBeEI7QUFBQSwyQkFDRSxxRUFBQywwREFBRDtBQUFVLFlBQU0sTUFBaEI7QUFBaUIsYUFBTyxFQUFFcUIsV0FBMUI7QUFBQSw4QkFDRSxxRUFBQyw4REFBRDtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBRUQsT0FBTyxDQUFDaEIsVUFBeEI7QUFBQSxpQ0FDSSxxRUFBQyxpREFBRDtBQUNFLGVBQUcsWUFBS1ksSUFBTCxhQUFLQSxJQUFMLHVCQUFLQSxJQUFJLENBQUVNLFNBQVgsQ0FETDtBQUVFLGlCQUFLLEVBQUUsTUFGVDtBQUdFLGtCQUFNLEVBQUU7QUFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQVVFO0FBQUssaUJBQVMsRUFBRUYsT0FBTyxDQUFDVCxRQUF4QjtBQUFBLCtCQUNFLHFFQUFDLDhEQUFEO0FBQWMsaUJBQU8sWUFBS0ssSUFBTCxhQUFLQSxJQUFMLHFDQUFLQSxJQUFJLENBQUVPLElBQVgsK0NBQUssV0FBWUMsV0FBWixFQUFMO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkYsRUFhR04sSUFBSSxnQkFBRyxxRUFBQyw2REFBRDtBQUFZLGFBQUssRUFBQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUgsZ0JBQW9DLHFFQUFDLDZEQUFEO0FBQVksYUFBSyxFQUFDO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUJELENBN0JEOztHQUFNSixJO1VBQ1dDLG1FLEVBR0NqQixTOzs7S0FKWmdCLEk7QUErQlNBLG1FQUFmIiwiZmlsZSI6Ii4vQ29tcG9uZW50cy9MYXlvdXQvVG9wYmFyL05hdkl0ZW1zL05hdkl0ZW0vTG9naW4vVXNlci9Vc2VyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZUxvY2FsU3RhdGUgZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2N1c3RvbS1ob29rcy91c2VMb2NhbFN0YXRlXCI7XG5cbmltcG9ydCB7XG4gIExpc3RJdGVtLFxuICBMaXN0SXRlbUljb24sXG4gIExpc3RJdGVtVGV4dCxcbiAgbWFrZVN0eWxlcyxcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5cbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgRXhwYW5kTGVzcywgRXhwYW5kTW9yZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIHVzZXJDb250YWluZXI6IHtcbiAgICBmbG9hdDogXCJyaWdodFwiLFxuICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG4gICAgdGV4dFRyYW5zZm9ybTogXCJjYXBpdGFsaXplXCIsXG4gICAgY29sb3I6IFwiIzM3OThBN1wiLFxuICB9LFxuICBwcm9maWxlUGljOiB7XG4gICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgIGhlaWdodDogNDAsXG4gICAgd2lkdGg6IDQwLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIH0sXG4gIHVzZXJOYW1lOiB7XG4gICAgY29sb3I6IFwid2hpdGVcIixcbiAgICBtYXJnaW5MZWZ0OiA1LFxuICAgIG1hcmdpblJpZ2h0OiA1LFxuICB9LFxufSk7XG5cbmNvbnN0IFVzZXI6IFJlYWN0LkZDPHt9PiA9ICgpID0+IHtcbiAgY29uc3QgW3VzZXJdID0gdXNlTG9jYWxTdGF0ZTxhbnk+KFwidXNlclwiLCBcIlwiKTtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBzZXRPcGVuKCFvcGVuKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnVzZXJDb250YWluZXJ9PlxuICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XG4gICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucHJvZmlsZVBpY30+XG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHNyYz17YCR7dXNlcj8uaW1hZ2VfdXJsfWB9XG4gICAgICAgICAgICAgICAgd2lkdGg9e1wiMTAwJVwifVxuICAgICAgICAgICAgICAgIGhlaWdodD17XCIxMDAlXCJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy51c2VyTmFtZX0+XG4gICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtgJHt1c2VyPy5uYW1lPy50b0xvd2VyQ2FzZSgpfWB9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7b3BlbiA/IDxFeHBhbmRMZXNzIGNvbG9yPVwiaW5oZXJpdFwiIC8+IDogPEV4cGFuZE1vcmUgY29sb3I9XCJpbmhlcml0XCIgLz59XG4gICAgICA8L0xpc3RJdGVtPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/Layout/Topbar/NavItems/NavItem/Login/User/User.tsx\n");

/***/ })

})