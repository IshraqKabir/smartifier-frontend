webpackHotUpdate_N_E("pages/quizzes",{

/***/ "./Components/Layout/Topbar/Topbar.tsx":
/*!*********************************************!*\
  !*** ./Components/Layout/Topbar/Topbar.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _NavItems_NavItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavItems/NavItems */ \"./Components/Layout/Topbar/NavItems/NavItems.tsx\");\n/* harmony import */ var _NavItems_NavItem_Login_Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavItems/NavItem/Login/Login */ \"./Components/Layout/Topbar/NavItems/NavItem/Login/Login.tsx\");\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/Layout/Topbar/Topbar.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])({\n  topbarContainer: {\n    position: \"fixed\",\n    top: 0,\n    left: 0,\n    right: 0,\n    maxHeight: 100,\n    borderBottomRightRadius: 15,\n    display: \"flex\",\n    justifyContent: \"space-between\",\n    alignItems: \"center\",\n    paddingLeft: \"2.5%\",\n    paddingRight: \"2.5%\",\n    zIndex: 4000,\n    background: \"transparent linear-gradient(180deg, #003EAA 0%, #002461E0 100%) 0% 0% no-repeat padding-box\"\n  },\n  placeholder: {\n    position: \"relative\",\n    top: 0,\n    left: 0,\n    marginRight: 100,\n    width: \"100%\",\n    height: 100,\n    background: \"transparent linear-gradient(180deg, #000266 0%, #032C73 57%, #00163B 100%, #003A67 100%) 0% 0% no-repeat padding-box\"\n  },\n  outerContainer: {\n    display: \"flex\",\n    flexDirection: \"column\"\n  }\n});\n\nvar Topbar = function Topbar() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      showLoading = _useState[0],\n      setShowLoading = _useState[1];\n\n  var classes = useStyles();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: classes.outerContainer,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: classes.placeholder\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, _this), showLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"LinearProgress\"], {\n      color: \"primary\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 23\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: classes.outerContainer,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: classes.topbarContainer,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {\n            src: \"/assets/logo.png\",\n            alt: \"Smartifier Logo\",\n            height: 100,\n            width: 100\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavItems_NavItems__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          setShowLoading: setShowLoading\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavItems_NavItem_Login_Login__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: classes.mobileNavItems,\n        children: \"yoo\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Topbar, \"DS+eiV+bb/6DGvARHsWqYKYwFjs=\", false, function () {\n  return [useStyles];\n});\n\n_c = Topbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Topbar);\n\nvar _c;\n\n$RefreshReg$(_c, \"Topbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9MYXlvdXQvVG9wYmFyL1RvcGJhci50c3g/ODBjMyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidG9wYmFyQ29udGFpbmVyIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJtYXhIZWlnaHQiLCJib3JkZXJCb3R0b21SaWdodFJhZGl1cyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsInpJbmRleCIsImJhY2tncm91bmQiLCJwbGFjZWhvbGRlciIsIm1hcmdpblJpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJvdXRlckNvbnRhaW5lciIsImZsZXhEaXJlY3Rpb24iLCJUb3BiYXIiLCJ1c2VTdGF0ZSIsInNob3dMb2FkaW5nIiwic2V0U2hvd0xvYWRpbmciLCJjbGFzc2VzIiwibW9iaWxlTmF2SXRlbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDO0FBQzNCQyxpQkFBZSxFQUFFO0FBQ2ZDLFlBQVEsRUFBRSxPQURLO0FBRWZDLE9BQUcsRUFBRSxDQUZVO0FBR2ZDLFFBQUksRUFBRSxDQUhTO0FBSWZDLFNBQUssRUFBRSxDQUpRO0FBS2ZDLGFBQVMsRUFBRSxHQUxJO0FBTWZDLDJCQUF1QixFQUFFLEVBTlY7QUFPZkMsV0FBTyxFQUFFLE1BUE07QUFRZkMsa0JBQWMsRUFBRSxlQVJEO0FBU2ZDLGNBQVUsRUFBRSxRQVRHO0FBVWZDLGVBQVcsRUFBRSxNQVZFO0FBV2ZDLGdCQUFZLEVBQUUsTUFYQztBQVlmQyxVQUFNLEVBQUUsSUFaTztBQWFmQyxjQUFVLEVBQ1I7QUFkYSxHQURVO0FBaUIzQkMsYUFBVyxFQUFFO0FBQ1hiLFlBQVEsRUFBRSxVQURDO0FBRVhDLE9BQUcsRUFBRSxDQUZNO0FBR1hDLFFBQUksRUFBRSxDQUhLO0FBSVhZLGVBQVcsRUFBRSxHQUpGO0FBS1hDLFNBQUssRUFBRSxNQUxJO0FBTVhDLFVBQU0sRUFBRSxHQU5HO0FBT1hKLGNBQVUsRUFDUjtBQVJTLEdBakJjO0FBMkIzQkssZ0JBQWMsRUFBRTtBQUNkWCxXQUFPLEVBQUUsTUFESztBQUVkWSxpQkFBYSxFQUFFO0FBRkQ7QUEzQlcsQ0FBRCxDQUE1Qjs7QUFpQ0EsSUFBTUMsTUFBb0IsR0FBRyxTQUF2QkEsTUFBdUIsR0FBTTtBQUFBOztBQUFBLGtCQUNLQyxzREFBUSxDQUFVLEtBQVYsQ0FEYjtBQUFBLE1BQzFCQyxXQUQwQjtBQUFBLE1BQ2JDLGNBRGE7O0FBR2pDLE1BQU1DLE9BQU8sR0FBRzFCLFNBQVMsRUFBekI7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBRTBCLE9BQU8sQ0FBQ04sY0FBeEI7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRU0sT0FBTyxDQUFDVjtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFR1EsV0FBVyxpQkFBSSxxRUFBQyxnRUFBRDtBQUFnQixXQUFLLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZsQixlQUdFO0FBQUssZUFBUyxFQUFFRSxPQUFPLENBQUNOLGNBQXhCO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFFTSxPQUFPLENBQUN4QixlQUF4QjtBQUFBLGdDQUNFO0FBQUEsaUNBQ0UscUVBQUMsaURBQUQ7QUFDRSxlQUFHLEVBQUMsa0JBRE47QUFFRSxlQUFHLEVBQUMsaUJBRk47QUFHRSxrQkFBTSxFQUFFLEdBSFY7QUFJRSxpQkFBSyxFQUFFO0FBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFTRSxxRUFBQywwREFBRDtBQUFVLHdCQUFjLEVBQUV1QjtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRGLGVBVUUscUVBQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQWFFO0FBQUssaUJBQVMsRUFBRUMsT0FBTyxDQUFDQyxjQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdUJELENBNUJEOztHQUFNTCxNO1VBR1l0QixTOzs7S0FIWnNCLE07QUE4QlNBLHFFQUFmIiwiZmlsZSI6Ii4vQ29tcG9uZW50cy9MYXlvdXQvVG9wYmFyL1RvcGJhci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgTGluZWFyUHJvZ3Jlc3MsIG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IE5hdkl0ZW1zIGZyb20gXCIuL05hdkl0ZW1zL05hdkl0ZW1zXCI7XG5pbXBvcnQgTG9naW4gZnJvbSBcIi4vTmF2SXRlbXMvTmF2SXRlbS9Mb2dpbi9Mb2dpblwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgdG9wYmFyQ29udGFpbmVyOiB7XG4gICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgICBtYXhIZWlnaHQ6IDEwMCxcbiAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogMTUsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgcGFkZGluZ0xlZnQ6IFwiMi41JVwiLFxuICAgIHBhZGRpbmdSaWdodDogXCIyLjUlXCIsXG4gICAgekluZGV4OiA0MDAwLFxuICAgIGJhY2tncm91bmQ6XG4gICAgICBcInRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMwMDNFQUEgMCUsICMwMDI0NjFFMCAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3hcIixcbiAgfSxcbiAgcGxhY2Vob2xkZXI6IHtcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIG1hcmdpblJpZ2h0OiAxMDAsXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIGhlaWdodDogMTAwLFxuICAgIGJhY2tncm91bmQ6XG4gICAgICBcInRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMwMDAyNjYgMCUsICMwMzJDNzMgNTclLCAjMDAxNjNCIDEwMCUsICMwMDNBNjcgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94XCIsXG4gIH0sXG4gIG91dGVyQ29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgfSxcbn0pO1xuXG5jb25zdCBUb3BiYXI6IFJlYWN0LkZDPHt9PiA9ICgpID0+IHtcbiAgY29uc3QgW3Nob3dMb2FkaW5nLCBzZXRTaG93TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMub3V0ZXJDb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGxhY2Vob2xkZXJ9PjwvZGl2PlxuICAgICAge3Nob3dMb2FkaW5nICYmIDxMaW5lYXJQcm9ncmVzcyBjb2xvcj1cInByaW1hcnlcIiAvPn1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm91dGVyQ29udGFpbmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudG9wYmFyQ29udGFpbmVyfT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvbG9nby5wbmdcIlxuICAgICAgICAgICAgICBhbHQ9XCJTbWFydGlmaWVyIExvZ29cIlxuICAgICAgICAgICAgICBoZWlnaHQ9ezEwMH1cbiAgICAgICAgICAgICAgd2lkdGg9ezEwMH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPE5hdkl0ZW1zIHNldFNob3dMb2FkaW5nPXtzZXRTaG93TG9hZGluZ30gLz5cbiAgICAgICAgICA8TG9naW4gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1vYmlsZU5hdkl0ZW1zfT5cbiAgICAgICAgICB5b29cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvcGJhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/Layout/Topbar/Topbar.tsx\n");

/***/ })

})