webpackHotUpdate_N_E("pages/test/[id]/result",{

/***/ "./Components/QuizTestResult/Badge/Badge.tsx":
/*!***************************************************!*\
  !*** ./Components/QuizTestResult/Badge/Badge.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Badge; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../url */ \"./url.js\");\n/* harmony import */ var _useBadge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useBadge */ \"./Components/QuizTestResult/Badge/useBadge.tsx\");\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/QuizTestResult/Badge/Badge.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction Badge(_ref) {\n  _s();\n\n  var testId = _ref.testId;\n\n  var _useBadge = Object(_useBadge__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(testId),\n      isLoading = _useBadge.isLoading,\n      error = _useBadge.error,\n      badgeImageLink = _useBadge.badgeImageLink;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Title, {\n      variant: \"h5\",\n      children: \"Quiz Badge\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Divider, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(LoadingContainer, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CircularProgress\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n        variant: \"subtitle1\",\n        children: \"Getting Your Badge Ready. Please wait.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }, this), !isLoading && badgeImageLink && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ImageContainer, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Avatar\"], {\n        src: \"\".concat(_url__WEBPACK_IMPORTED_MODULE_3__[\"backend_url\"], \"/storage/\").concat(badgeImageLink),\n        variant: \"square\",\n        style: {\n          width: \"min(450px, 95%)\",\n          height: \"100%\"\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"\".concat(_url__WEBPACK_IMPORTED_MODULE_3__[\"backend_url\"], \"/storage/\").concat(badgeImageLink),\n        download: \"newname\",\n        target: \"_blank\",\n        \"class\": \"et_pb_button\",\n        style: \"color: #dd9933;\",\n        children: \"Download Link\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }, this), !isLoading && error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n      variant: \"subtitle1\",\n      color: \"error\",\n      children: error\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Badge, \"ommZPmMg8PagndDcQHPtGv7vnFA=\", false, function () {\n  return [_useBadge__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n});\n\n_c = Badge;\nvar Container = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    width: \"100%\",\n    border: \"1px solid #e6e6e4\",\n    borderRadius: \"7px 7px 0px 0px\",\n    backgroundColor: \"white\",\n    display: \"flex\",\n    flexDirection: \"column\",\n    alignItems: \"center\",\n    marginTop: \"1rem\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\nvar LoadingContainer = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    display: \"flex\",\n    flexDirection: \"column\",\n    alignItems: \"center\",\n    padding: \"1rem\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\nvar Title = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    padding: \"0.7rem\",\n    textTransform: \"capitalize\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"]);\nvar Divider = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    width: \"100%\",\n    height: 2,\n    backgroundColor: \"#e6e6e4\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\nvar ImageContainer = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    width: \"100%\",\n    display: \"flex\",\n    flexDirection: \"column\",\n    alignItems: \"center\",\n    justifyItems: \"center\",\n    padding: \"1rem 0\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\n\nvar _c;\n\n$RefreshReg$(_c, \"Badge\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9RdWl6VGVzdFJlc3VsdC9CYWRnZS9CYWRnZS50c3g/OWU2YiJdLCJuYW1lcyI6WyJCYWRnZSIsInRlc3RJZCIsInVzZUJhZGdlIiwiaXNMb2FkaW5nIiwiZXJyb3IiLCJiYWRnZUltYWdlTGluayIsImJhY2tlbmRfdXJsIiwid2lkdGgiLCJoZWlnaHQiLCJDb250YWluZXIiLCJ3aXRoU3R5bGVzIiwicm9vdCIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm1hcmdpblRvcCIsIkJveCIsIkxvYWRpbmdDb250YWluZXIiLCJwYWRkaW5nIiwiVGl0bGUiLCJ0ZXh0VHJhbnNmb3JtIiwiVHlwb2dyYXBoeSIsIkRpdmlkZXIiLCJJbWFnZUNvbnRhaW5lciIsImp1c3RpZnlJdGVtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQU1lLFNBQVNBLEtBQVQsT0FBbUM7QUFBQTs7QUFBQSxNQUFsQkMsTUFBa0IsUUFBbEJBLE1BQWtCOztBQUFBLGtCQUNIQyx5REFBUSxDQUFDRCxNQUFELENBREw7QUFBQSxNQUN4Q0UsU0FEd0MsYUFDeENBLFNBRHdDO0FBQUEsTUFDN0JDLEtBRDZCLGFBQzdCQSxLQUQ2QjtBQUFBLE1BQ3RCQyxjQURzQixhQUN0QkEsY0FEc0I7O0FBR2hELHNCQUNFLHFFQUFDLFNBQUQ7QUFBQSw0QkFDRSxxRUFBQyxLQUFEO0FBQU8sYUFBTyxFQUFDLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLHFFQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLEVBR0dGLFNBQVMsaUJBQ1IscUVBQUMsZ0JBQUQ7QUFBQSw4QkFDRSxxRUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSxxRUFBQyw0REFBRDtBQUFZLGVBQU8sRUFBQyxXQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKLEVBWUcsQ0FBQ0EsU0FBRCxJQUFjRSxjQUFkLGlCQUNDLHFFQUFDLGNBQUQ7QUFBQSw4QkFDRSxxRUFBQyx3REFBRDtBQUNFLFdBQUcsWUFBS0MsZ0RBQUwsc0JBQTRCRCxjQUE1QixDQURMO0FBRUUsZUFBTyxFQUFDLFFBRlY7QUFHRSxhQUFLLEVBQUU7QUFBRUUsZUFBSyxFQUFFLGlCQUFUO0FBQTRCQyxnQkFBTSxFQUFFO0FBQXBDO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBTUU7QUFDRSxZQUFJLFlBQUtGLGdEQUFMLHNCQUE0QkQsY0FBNUIsQ0FETjtBQUVFLGdCQUFRLEVBQUMsU0FGWDtBQUdFLGNBQU0sRUFBQyxRQUhUO0FBSUUsaUJBQU0sY0FKUjtBQUtFLGFBQUssRUFBQyxpQkFMUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJKLEVBK0JHLENBQUNGLFNBQUQsSUFBY0MsS0FBZCxpQkFDQyxxRUFBQyw0REFBRDtBQUFZLGFBQU8sRUFBQyxXQUFwQjtBQUFnQyxXQUFLLEVBQUMsT0FBdEM7QUFBQSxnQkFDR0E7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUNEOztHQTFDdUJKLEs7VUFDdUJFLGlEOzs7S0FEdkJGLEs7QUE0Q3hCLElBQU1TLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQztBQUMzQkMsTUFBSSxFQUFFO0FBQ0pKLFNBQUssRUFBRSxNQURIO0FBRUpLLFVBQU0sRUFBRSxtQkFGSjtBQUdKQyxnQkFBWSxFQUFFLGlCQUhWO0FBSUpDLG1CQUFlLEVBQUUsT0FKYjtBQUtKQyxXQUFPLEVBQUUsTUFMTDtBQU1KQyxpQkFBYSxFQUFFLFFBTlg7QUFPSkMsY0FBVSxFQUFFLFFBUFI7QUFRSkMsYUFBUyxFQUFFO0FBUlA7QUFEcUIsQ0FBRCxDQUFWLENBV2ZDLHFEQVhlLENBQWxCO0FBYUEsSUFBTUMsZ0JBQWdCLEdBQUdWLG9FQUFVLENBQUM7QUFDbENDLE1BQUksRUFBRTtBQUNKSSxXQUFPLEVBQUUsTUFETDtBQUVKQyxpQkFBYSxFQUFFLFFBRlg7QUFHSkMsY0FBVSxFQUFFLFFBSFI7QUFJSkksV0FBTyxFQUFFO0FBSkw7QUFENEIsQ0FBRCxDQUFWLENBT3RCRixxREFQc0IsQ0FBekI7QUFTQSxJQUFNRyxLQUFLLEdBQUdaLG9FQUFVLENBQUM7QUFDdkJDLE1BQUksRUFBRTtBQUNKVSxXQUFPLEVBQUUsUUFETDtBQUVKRSxpQkFBYSxFQUFFO0FBRlg7QUFEaUIsQ0FBRCxDQUFWLENBS1hDLDREQUxXLENBQWQ7QUFPQSxJQUFNQyxPQUFPLEdBQUdmLG9FQUFVLENBQUM7QUFDekJDLE1BQUksRUFBRTtBQUNKSixTQUFLLEVBQUUsTUFESDtBQUVKQyxVQUFNLEVBQUUsQ0FGSjtBQUdKTSxtQkFBZSxFQUFFO0FBSGI7QUFEbUIsQ0FBRCxDQUFWLENBTWJLLHFEQU5hLENBQWhCO0FBUUEsSUFBTU8sY0FBYyxHQUFHaEIsb0VBQVUsQ0FBQztBQUNoQ0MsTUFBSSxFQUFFO0FBQ0pKLFNBQUssRUFBRSxNQURIO0FBRUpRLFdBQU8sRUFBRSxNQUZMO0FBR0pDLGlCQUFhLEVBQUUsUUFIWDtBQUlKQyxjQUFVLEVBQUUsUUFKUjtBQUtKVSxnQkFBWSxFQUFFLFFBTFY7QUFNSk4sV0FBTyxFQUFFO0FBTkw7QUFEMEIsQ0FBRCxDQUFWLENBU3BCRixxREFUb0IsQ0FBdkIiLCJmaWxlIjoiLi9Db21wb25lbnRzL1F1aXpUZXN0UmVzdWx0L0JhZGdlL0JhZGdlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEF2YXRhcixcbiAgQm94LFxuICBDaXJjdWxhclByb2dyZXNzLFxuICBUeXBvZ3JhcGh5LFxuICB3aXRoU3R5bGVzLFxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGJhY2tlbmRfdXJsIH0gZnJvbSBcIi4uLy4uLy4uL3VybFwiO1xuaW1wb3J0IHVzZUJhZGdlIGZyb20gXCIuL3VzZUJhZGdlXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICB0ZXN0SWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFkZ2UoeyB0ZXN0SWQgfTogSVByb3BzKSB7XG4gIGNvbnN0IHsgaXNMb2FkaW5nLCBlcnJvciwgYmFkZ2VJbWFnZUxpbmsgfSA9IHVzZUJhZGdlKHRlc3RJZCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFRpdGxlIHZhcmlhbnQ9XCJoNVwiPlF1aXogQmFkZ2U8L1RpdGxlPlxuICAgICAgPERpdmlkZXIgLz5cbiAgICAgIHtpc0xvYWRpbmcgJiYgKFxuICAgICAgICA8TG9hZGluZ0NvbnRhaW5lcj5cbiAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyAvPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIj5cbiAgICAgICAgICAgIEdldHRpbmcgWW91ciBCYWRnZSBSZWFkeS4gUGxlYXNlIHdhaXQuXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0xvYWRpbmdDb250YWluZXI+XG4gICAgICApfVxuXG4gICAgICB7IWlzTG9hZGluZyAmJiBiYWRnZUltYWdlTGluayAmJiAoXG4gICAgICAgIDxJbWFnZUNvbnRhaW5lcj5cbiAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICBzcmM9e2Ake2JhY2tlbmRfdXJsfS9zdG9yYWdlLyR7YmFkZ2VJbWFnZUxpbmt9YH1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzcXVhcmVcIlxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwibWluKDQ1MHB4LCA5NSUpXCIsIGhlaWdodDogXCIxMDAlXCIgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPXtgJHtiYWNrZW5kX3VybH0vc3RvcmFnZS8ke2JhZGdlSW1hZ2VMaW5rfWB9XG4gICAgICAgICAgICBkb3dubG9hZD1cIm5ld25hbWVcIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIGNsYXNzPVwiZXRfcGJfYnV0dG9uXCJcbiAgICAgICAgICAgIHN0eWxlPVwiY29sb3I6ICNkZDk5MzM7XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBEb3dubG9hZCBMaW5rXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0ltYWdlQ29udGFpbmVyPlxuICAgICAgKX1cblxuICAgICAgeyFpc0xvYWRpbmcgJiYgZXJyb3IgJiYgKFxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29sb3I9XCJlcnJvclwiPlxuICAgICAgICAgIHtlcnJvcn1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgKX1cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cblxuY29uc3QgQ29udGFpbmVyID0gd2l0aFN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjZTZlNmU0XCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjdweCA3cHggMHB4IDBweFwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBtYXJnaW5Ub3A6IFwiMXJlbVwiLFxuICB9LFxufSkoQm94KTtcblxuY29uc3QgTG9hZGluZ0NvbnRhaW5lciA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIHBhZGRpbmc6IFwiMXJlbVwiLFxuICB9LFxufSkoQm94KTtcblxuY29uc3QgVGl0bGUgPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIHBhZGRpbmc6IFwiMC43cmVtXCIsXG4gICAgdGV4dFRyYW5zZm9ybTogXCJjYXBpdGFsaXplXCIsXG4gIH0sXG59KShUeXBvZ3JhcGh5KTtcblxuY29uc3QgRGl2aWRlciA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIGhlaWdodDogMixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2U2ZTZlNFwiLFxuICB9LFxufSkoQm94KTtcblxuY29uc3QgSW1hZ2VDb250YWluZXIgPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAganVzdGlmeUl0ZW1zOiBcImNlbnRlclwiLFxuICAgIHBhZGRpbmc6IFwiMXJlbSAwXCIsXG4gIH0sXG59KShCb3gpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/QuizTestResult/Badge/Badge.tsx\n");

/***/ })

})