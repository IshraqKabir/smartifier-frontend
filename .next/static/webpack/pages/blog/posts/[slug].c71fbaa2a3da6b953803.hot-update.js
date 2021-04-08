webpackHotUpdate_N_E("pages/blog/posts/[slug]",{

/***/ "./Components/Sidebar/PostSuggestion/PostSuggestion.tsx":
/*!**************************************************************!*\
  !*** ./Components/Sidebar/PostSuggestion/PostSuggestion.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/Sidebar/PostSuggestion/PostSuggestion.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"makeStyles\"])({\n  container: {\n    marginBottom: 5\n  }\n});\n\nvar PostSuggestion = function PostSuggestion(_ref) {\n  _s();\n\n  var post = _ref.post;\n  var classes = useStyles();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: classes.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      href: \"/blog/posts/\".concat(post.slug),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n        style: {\n          textDecoration: \"none\"\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(LinkText, {\n          children: post.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(PostDivider, {\n      light: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(PostSuggestion, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = PostSuggestion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostSuggestion);\nvar LinkText = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"withStyles\"])({\n  root: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    textTransform: \"capitalize\",\n    marginBottom: 10\n  }, \"&:hover\", {\n    textDecoration: \"underline\"\n  })\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Typography\"]);\nvar PostDivider = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"withStyles\"])({\n  root: {\n    margin: 0\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Divider\"]);\n\nvar _c;\n\n$RefreshReg$(_c, \"PostSuggestion\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9TaWRlYmFyL1Bvc3RTdWdnZXN0aW9uL1Bvc3RTdWdnZXN0aW9uLnRzeD80MzgzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJjb250YWluZXIiLCJtYXJnaW5Cb3R0b20iLCJQb3N0U3VnZ2VzdGlvbiIsInBvc3QiLCJjbGFzc2VzIiwic2x1ZyIsInRleHREZWNvcmF0aW9uIiwidGl0bGUiLCJMaW5rVGV4dCIsIndpdGhTdHlsZXMiLCJyb290IiwidGV4dFRyYW5zZm9ybSIsIlR5cG9ncmFwaHkiLCJQb3N0RGl2aWRlciIsIm1hcmdpbiIsIkRpdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0E7QUFNQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUM7QUFDM0JDLFdBQVMsRUFBRTtBQUNUQyxnQkFBWSxFQUFFO0FBREw7QUFEZ0IsQ0FBRCxDQUE1Qjs7QUFNQSxJQUFNQyxjQUFnQyxHQUFHLFNBQW5DQSxjQUFtQyxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ3JELE1BQU1DLE9BQU8sR0FBR04sU0FBUyxFQUF6QjtBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFFTSxPQUFPLENBQUNKLFNBQXhCO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLHdCQUFpQkcsSUFBSSxDQUFDRSxJQUF0QixDQUFWO0FBQUEsNkJBQ0U7QUFBRyxhQUFLLEVBQUU7QUFBRUMsd0JBQWMsRUFBRTtBQUFsQixTQUFWO0FBQUEsK0JBQ0UscUVBQUMsUUFBRDtBQUFBLG9CQUFXSCxJQUFJLENBQUNJO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBTUUscUVBQUMsV0FBRDtBQUFhLFdBQUs7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBVUQsQ0FiRDs7R0FBTUwsYztVQUNZSixTOzs7S0FEWkksYztBQWVTQSw2RUFBZjtBQUVBLElBQU1NLFFBQVEsR0FBR0Msb0VBQVUsQ0FBQztBQUMxQkMsTUFBSSxFQUFFO0FBQ0pDLGlCQUFhLEVBQUUsWUFEYjtBQUVGVixnQkFBWSxFQUFFO0FBRlosS0FHRCxTQUhDLEVBR1c7QUFDWEssa0JBQWMsRUFBRTtBQURMLEdBSFg7QUFEc0IsQ0FBRCxDQUFWLENBUWRNLDREQVJjLENBQWpCO0FBVUEsSUFBTUMsV0FBVyxHQUFHSixvRUFBVSxDQUFDO0FBQUVDLE1BQUksRUFBRTtBQUFFSSxVQUFNLEVBQUU7QUFBVjtBQUFSLENBQUQsQ0FBVixDQUFvQ0MseURBQXBDLENBQXBCIiwiZmlsZSI6Ii4vQ29tcG9uZW50cy9TaWRlYmFyL1Bvc3RTdWdnZXN0aW9uL1Bvc3RTdWdnZXN0aW9uLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJUG9zdFN1Z2dlc3Rpb24gZnJvbSBcIi4uLy4uLy4uL01vZGVscy9JUG9zdFN1Z2dlc3Rpb25cIjtcblxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgRGl2aWRlciwgbWFrZVN0eWxlcywgVHlwb2dyYXBoeSwgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgcG9zdDogSVBvc3RTdWdnZXN0aW9uO1xufVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgY29udGFpbmVyOiB7XG4gICAgbWFyZ2luQm90dG9tOiA1LFxuICB9LFxufSk7XG5cbmNvbnN0IFBvc3RTdWdnZXN0aW9uOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHsgcG9zdCB9KSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICA8TGluayBocmVmPXtgL2Jsb2cvcG9zdHMvJHtwb3N0LnNsdWd9YH0+XG4gICAgICAgIDxhIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9fT5cbiAgICAgICAgICA8TGlua1RleHQ+e3Bvc3QudGl0bGV9PC9MaW5rVGV4dD5cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPFBvc3REaXZpZGVyIGxpZ2h0IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0U3VnZ2VzdGlvbjtcblxuY29uc3QgTGlua1RleHQgPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIHRleHRUcmFuc2Zvcm06IFwiY2FwaXRhbGl6ZVwiLFxuICAgIG1hcmdpbkJvdHRvbTogMTAsXG4gICAgW1wiJjpob3ZlclwiXToge1xuICAgICAgdGV4dERlY29yYXRpb246IFwidW5kZXJsaW5lXCIsXG4gICAgfSxcbiAgfSxcbn0pKFR5cG9ncmFwaHkpO1xuXG5jb25zdCBQb3N0RGl2aWRlciA9IHdpdGhTdHlsZXMoeyByb290OiB7IG1hcmdpbjogMCB9IH0pKERpdmlkZXIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/Sidebar/PostSuggestion/PostSuggestion.tsx\n");

/***/ })

})