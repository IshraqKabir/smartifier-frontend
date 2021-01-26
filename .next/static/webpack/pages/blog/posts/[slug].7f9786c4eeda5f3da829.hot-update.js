webpackHotUpdate_N_E("pages/blog/posts/[slug]",{

/***/ "./Components/Post/SinglePost/PostBody/PostBodyImage/PostBodyImage.tsx":
/*!*****************************************************************************!*\
  !*** ./Components/Post/SinglePost/PostBody/PostBodyImage/PostBodyImage.tsx ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../url */ \"./url.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/Post/SinglePost/PostBody/PostBodyImage/PostBodyImage.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"makeStyles\"])({\n  container: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    display: \"flex\",\n    justifyContent: \"center\",\n    marginBlock: 50\n  }, \"@media (max-width: 500px)\", {\n    marginBlock: 25\n  }),\n  imageContainer: {}\n});\n\nvar PostBodyImage = function PostBodyImage(_ref) {\n  _s();\n\n  var src = _ref.src,\n      caption = _ref.caption,\n      isWide = _ref.isWide;\n  var classes = useStyles();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: classes.container,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: classes.imageContainer,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Avatar\"], {\n        src: \"\".concat(_url__WEBPACK_IMPORTED_MODULE_3__[\"backend_url\"]).concat(src),\n        alt: caption,\n        style: {\n          width: \"100%\",\n          height: \"100%\"\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, _this), caption ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Caption, {\n        children: [\"Caption: \", caption]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 20\n      }, _this) : null]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(PostBodyImage, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = PostBodyImage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostBodyImage);\nvar Caption = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"withStyles\"])({\n  root: {\n    fontSize: 12,\n    color: \"#686868\",\n    marginTop: 5\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Typography\"]);\n\nvar _c;\n\n$RefreshReg$(_c, \"PostBodyImage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qb3N0L1NpbmdsZVBvc3QvUG9zdEJvZHkvUG9zdEJvZHlJbWFnZS9Qb3N0Qm9keUltYWdlLnRzeD8yOGU2Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJjb250YWluZXIiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW5CbG9jayIsImltYWdlQ29udGFpbmVyIiwiUG9zdEJvZHlJbWFnZSIsInNyYyIsImNhcHRpb24iLCJpc1dpZGUiLCJjbGFzc2VzIiwiYmFja2VuZF91cmwiLCJ3aWR0aCIsImhlaWdodCIsIkNhcHRpb24iLCJ3aXRoU3R5bGVzIiwicm9vdCIsImZvbnRTaXplIiwiY29sb3IiLCJtYXJnaW5Ub3AiLCJUeXBvZ3JhcGh5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0E7QUFRQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUM7QUFDM0JDLFdBQVMsRUFBRTtBQUNUQyxXQUFPLEVBQUUsTUFERjtBQUVQQyxrQkFBYyxFQUFFLFFBRlQ7QUFHUEMsZUFBVyxFQUFFO0FBSE4sS0FJTiwyQkFKTSxFQUl3QjtBQUM3QkEsZUFBVyxFQUFFO0FBRGdCLEdBSnhCLENBRGtCO0FBUzNCQyxnQkFBYyxFQUFFO0FBVFcsQ0FBRCxDQUE1Qjs7QUFZQSxJQUFNQyxhQUErQixHQUFHLFNBQWxDQSxhQUFrQyxPQUE4QjtBQUFBOztBQUFBLE1BQTNCQyxHQUEyQixRQUEzQkEsR0FBMkI7QUFBQSxNQUF0QkMsT0FBc0IsUUFBdEJBLE9BQXNCO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhO0FBQ3BFLE1BQU1DLE9BQU8sR0FBR1gsU0FBUyxFQUF6QjtBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFFVyxPQUFPLENBQUNULFNBQXhCO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUVTLE9BQU8sQ0FBQ0wsY0FBeEI7QUFBQSw4QkFDRSxxRUFBQyx3REFBRDtBQUNFLFdBQUcsWUFBS00sZ0RBQUwsU0FBbUJKLEdBQW5CLENBREw7QUFFRSxXQUFHLEVBQUVDLE9BRlA7QUFHRSxhQUFLLEVBQUU7QUFBRUksZUFBSyxFQUFFLE1BQVQ7QUFBaUJDLGdCQUFNLEVBQUU7QUFBekI7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFNR0wsT0FBTyxnQkFBRyxxRUFBQyxPQUFEO0FBQUEsZ0NBQW1CQSxPQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSCxHQUEyQyxJQU5yRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFZRCxDQWZEOztHQUFNRixhO1VBQ1lQLFM7OztLQURaTyxhO0FBaUJTQSw0RUFBZjtBQUVBLElBQU1RLE9BQU8sR0FBR0Msb0VBQVUsQ0FBQztBQUN6QkMsTUFBSSxFQUFFO0FBQ0pDLFlBQVEsRUFBRSxFQUROO0FBRUpDLFNBQUssRUFBRSxTQUZIO0FBR0pDLGFBQVMsRUFBRTtBQUhQO0FBRG1CLENBQUQsQ0FBVixDQU1iQyw0REFOYSxDQUFoQiIsImZpbGUiOiIuL0NvbXBvbmVudHMvUG9zdC9TaW5nbGVQb3N0L1Bvc3RCb2R5L1Bvc3RCb2R5SW1hZ2UvUG9zdEJvZHlJbWFnZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBJbWFnZSBmcm9tIFwibWF0ZXJpYWwtdWktaW1hZ2VcIjtcbmltcG9ydCB7IGJhY2tlbmRfdXJsIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3VybFwiO1xuaW1wb3J0IHsgQXZhdGFyLCBtYWtlU3R5bGVzLCBUeXBvZ3JhcGh5LCB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBzcmM6IHN0cmluZztcbiAgY2FwdGlvbj86IHN0cmluZztcbiAgaXNXaWRlOiBib29sZWFuO1xufVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgY29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgbWFyZ2luQmxvY2s6IDUwLFxuICAgIFtcIkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweClcIl06IHtcbiAgICAgIG1hcmdpbkJsb2NrOiAyNSxcbiAgICB9LFxuICB9LFxuICBpbWFnZUNvbnRhaW5lcjoge30sXG59KTtcblxuY29uc3QgUG9zdEJvZHlJbWFnZTogUmVhY3QuRkM8SVByb3BzPiA9ICh7IHNyYywgY2FwdGlvbiwgaXNXaWRlIH0pID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlQ29udGFpbmVyfT5cbiAgICAgICAgPEF2YXRhclxuICAgICAgICAgIHNyYz17YCR7YmFja2VuZF91cmx9JHtzcmN9YH1cbiAgICAgICAgICBhbHQ9e2NhcHRpb259XG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19XG4gICAgICAgIC8+XG4gICAgICAgIHtjYXB0aW9uID8gPENhcHRpb24+Q2FwdGlvbjoge2NhcHRpb259PC9DYXB0aW9uPiA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RCb2R5SW1hZ2U7XG5cbmNvbnN0IENhcHRpb24gPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIGZvbnRTaXplOiAxMixcbiAgICBjb2xvcjogXCIjNjg2ODY4XCIsXG4gICAgbWFyZ2luVG9wOiA1LFxuICB9LFxufSkoVHlwb2dyYXBoeSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/Post/SinglePost/PostBody/PostBodyImage/PostBodyImage.tsx\n");

/***/ })

})