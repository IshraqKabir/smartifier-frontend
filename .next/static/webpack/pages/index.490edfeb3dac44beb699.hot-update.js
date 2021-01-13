webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/Layout/Topbar/Topbar.tsx":
/*!*********************************************!*\
  !*** ./Components/Layout/Topbar/Topbar.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _NavItems_NavItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavItems/NavItems */ \"./Components/Layout/Topbar/NavItems/NavItems.tsx\");\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/Layout/Topbar/Topbar.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])({\n  root: {\n    display: \"flex\",\n    alignItems: \"center\",\n    background: \"transparent linear-gradient(180deg, #003EAA 0%, #002461E0 100%) 0% 0% no-repeat padding-box\",\n    width: \"100%\",\n    borderRadius: \"0 0 30px 0\"\n  }\n});\nvar useImageStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])({\n  root: {\n    paddingLeft: \"5%\",\n    width: 100\n  }\n});\n\nvar Topbar = function Topbar() {\n  _s();\n\n  var classes = useStyles();\n  var imageClasses = useImageStyles();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: classes.root,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: imageClasses.root,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        src: \"/assets/logo.png\",\n        height: 100,\n        width: 100\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_NavItems_NavItems__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Topbar, \"lCp0R7mzlcI6wKS97z67TeSuNYY=\", false, function () {\n  return [useStyles, useImageStyles];\n});\n\n_c = Topbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Topbar);\n\nvar _c;\n\n$RefreshReg$(_c, \"Topbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9MYXlvdXQvVG9wYmFyL1RvcGJhci50c3g/ODBjMyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiYmFja2dyb3VuZCIsIndpZHRoIiwiYm9yZGVyUmFkaXVzIiwidXNlSW1hZ2VTdHlsZXMiLCJwYWRkaW5nTGVmdCIsIlRvcGJhciIsImNsYXNzZXMiLCJpbWFnZUNsYXNzZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDO0FBQzNCQyxNQUFJLEVBQUU7QUFDSkMsV0FBTyxFQUFFLE1BREw7QUFFSkMsY0FBVSxFQUFFLFFBRlI7QUFHSkMsY0FBVSxFQUNSLDZGQUpFO0FBS0pDLFNBQUssRUFBRSxNQUxIO0FBTUpDLGdCQUFZLEVBQUU7QUFOVjtBQURxQixDQUFELENBQTVCO0FBV0EsSUFBTUMsY0FBYyxHQUFHUCxvRUFBVSxDQUFDO0FBQ2hDQyxNQUFJLEVBQUU7QUFDSk8sZUFBVyxFQUFFLElBRFQ7QUFFSkgsU0FBSyxFQUFFO0FBRkg7QUFEMEIsQ0FBRCxDQUFqQzs7QUFPQSxJQUFNSSxNQUFvQixHQUFHLFNBQXZCQSxNQUF1QixHQUFNO0FBQUE7O0FBQ2pDLE1BQU1DLE9BQU8sR0FBR1gsU0FBUyxFQUF6QjtBQUNBLE1BQU1ZLFlBQVksR0FBR0osY0FBYyxFQUFuQztBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFFRyxPQUFPLENBQUNULElBQXhCO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVVLFlBQVksQ0FBQ1YsSUFBN0I7QUFBQSw2QkFDRSxxRUFBQyxpREFBRDtBQUFPLFdBQUcsRUFBQyxrQkFBWDtBQUE4QixjQUFNLEVBQUUsR0FBdEM7QUFBMkMsYUFBSyxFQUFFO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFRRCxDQVpEOztHQUFNUSxNO1VBQ1lWLFMsRUFDS1EsYzs7O0tBRmpCRSxNO0FBY1NBLHFFQUFmIiwiZmlsZSI6Ii4vQ29tcG9uZW50cy9MYXlvdXQvVG9wYmFyL1RvcGJhci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IE5hdkl0ZW0gZnJvbSBcIi4vTmF2SXRlbXMvTmF2SXRlbS9OYXZJdGVtXCI7XG5pbXBvcnQgTmF2SXRlbXMgZnJvbSBcIi4vTmF2SXRlbXMvTmF2SXRlbXNcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGJhY2tncm91bmQ6XG4gICAgICBcInRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMwMDNFQUEgMCUsICMwMDI0NjFFMCAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3hcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjAgMCAzMHB4IDBcIixcbiAgfSxcbn0pO1xuXG5jb25zdCB1c2VJbWFnZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICByb290OiB7XG4gICAgcGFkZGluZ0xlZnQ6IFwiNSVcIixcbiAgICB3aWR0aDogMTAwLFxuICB9LFxufSk7XG5cbmNvbnN0IFRvcGJhcjogUmVhY3QuRkM8e30+ID0gKCkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IGltYWdlQ2xhc3NlcyA9IHVzZUltYWdlU3R5bGVzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtpbWFnZUNsYXNzZXMucm9vdH0+XG4gICAgICAgIDxJbWFnZSBzcmM9XCIvYXNzZXRzL2xvZ28ucG5nXCIgaGVpZ2h0PXsxMDB9IHdpZHRoPXsxMDB9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxOYXZJdGVtcyAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9wYmFyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/Layout/Topbar/Topbar.tsx\n");

/***/ })

})