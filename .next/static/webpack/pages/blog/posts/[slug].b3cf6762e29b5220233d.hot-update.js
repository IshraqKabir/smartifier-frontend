webpackHotUpdate_N_E("pages/blog/posts/[slug]",{

/***/ "./Components/Post/SinglePost/PostBody/PostBodyImage/PostBodyImage.tsx":
/*!*****************************************************************************!*\
  !*** ./Components/Post/SinglePost/PostBody/PostBodyImage/PostBodyImage.tsx ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var material_ui_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui-image */ \"./node_modules/material-ui-image/lib/index.js\");\n/* harmony import */ var material_ui_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../url */ \"./url.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/Post/SinglePost/PostBody/PostBodyImage/PostBodyImage.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"makeStyles\"])({\n  container: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    display: \"flex\",\n    justifyContent: \"center\",\n    marginBlock: 50\n  }, \"@media (max-width: 500px)\", {\n    marginBloc: 25\n  }),\n  imageContainer: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    width: \"60%\",\n    paddingTop: \"100%\",\n    marginTop: \"-100%\",\n    paddingBlock: \"auto\"\n  }, \"@media (max-width: 500px)\", {\n    width: \"100%\"\n  })\n});\n\nvar PostBodyImage = function PostBodyImage(_ref) {\n  _s();\n\n  var src = _ref.src,\n      caption = _ref.caption,\n      isWide = _ref.isWide;\n  var classes = useStyles();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: classes.container,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: classes.imageContainer,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(material_ui_image__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        src: \"\".concat(_url__WEBPACK_IMPORTED_MODULE_4__[\"backend_url\"]).concat(src),\n        alt: caption,\n        style: {\n          width: \"100%\",\n          height: \"100%\"\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(PostBodyImage, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = PostBodyImage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostBodyImage);\nvar Caption = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"withStyles\"])({\n  root: {\n    fontSize: 12,\n    color: \"#686868\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Typography\"]);\n\nvar _c;\n\n$RefreshReg$(_c, \"PostBodyImage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qb3N0L1NpbmdsZVBvc3QvUG9zdEJvZHkvUG9zdEJvZHlJbWFnZS9Qb3N0Qm9keUltYWdlLnRzeD8yOGU2Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJjb250YWluZXIiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW5CbG9jayIsIm1hcmdpbkJsb2MiLCJpbWFnZUNvbnRhaW5lciIsIndpZHRoIiwicGFkZGluZ1RvcCIsIm1hcmdpblRvcCIsInBhZGRpbmdCbG9jayIsIlBvc3RCb2R5SW1hZ2UiLCJzcmMiLCJjYXB0aW9uIiwiaXNXaWRlIiwiY2xhc3NlcyIsImJhY2tlbmRfdXJsIiwiaGVpZ2h0IiwiQ2FwdGlvbiIsIndpdGhTdHlsZXMiLCJyb290IiwiZm9udFNpemUiLCJjb2xvciIsIlR5cG9ncmFwaHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFRQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUM7QUFDM0JDLFdBQVMsRUFBRTtBQUNUQyxXQUFPLEVBQUUsTUFERjtBQUVQQyxrQkFBYyxFQUFFLFFBRlQ7QUFHUEMsZUFBVyxFQUFFO0FBSE4sS0FJTiwyQkFKTSxFQUl3QjtBQUMzQkMsY0FBVSxFQUFFO0FBRGUsR0FKeEIsQ0FEa0I7QUFTM0JDLGdCQUFjLEVBQUU7QUFDZEMsU0FBSyxFQUFFLEtBREs7QUFFWkMsY0FBVSxFQUFFLE1BRkE7QUFHWkMsYUFBUyxFQUFFLE9BSEM7QUFJWkMsZ0JBQVksRUFBRTtBQUpGLEtBS1gsMkJBTFcsRUFLbUI7QUFDM0JILFNBQUssRUFBRTtBQURvQixHQUxuQjtBQVRhLENBQUQsQ0FBNUI7O0FBb0JBLElBQU1JLGFBQStCLEdBQUcsU0FBbENBLGFBQWtDLE9BQThCO0FBQUE7O0FBQUEsTUFBM0JDLEdBQTJCLFFBQTNCQSxHQUEyQjtBQUFBLE1BQXRCQyxPQUFzQixRQUF0QkEsT0FBc0I7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFDcEUsTUFBTUMsT0FBTyxHQUFHaEIsU0FBUyxFQUF6QjtBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFFZ0IsT0FBTyxDQUFDZCxTQUF4QjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFYyxPQUFPLENBQUNULGNBQXhCO0FBQUEsNkJBQ0UscUVBQUMsd0RBQUQ7QUFDRSxXQUFHLFlBQUtVLGdEQUFMLFNBQW1CSixHQUFuQixDQURMO0FBRUUsV0FBRyxFQUFFQyxPQUZQO0FBR0UsYUFBSyxFQUFFO0FBQUVOLGVBQUssRUFBRSxNQUFUO0FBQWlCVSxnQkFBTSxFQUFFO0FBQXpCO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFXRCxDQWREOztHQUFNTixhO1VBQ1laLFM7OztLQURaWSxhO0FBZ0JTQSw0RUFBZjtBQUVBLElBQU1PLE9BQU8sR0FBR0Msb0VBQVUsQ0FBQztBQUN2QkMsTUFBSSxFQUFFO0FBQ0ZDLFlBQVEsRUFBRSxFQURSO0FBRUZDLFNBQUssRUFBRTtBQUZMO0FBRGlCLENBQUQsQ0FBVixDQUtiQyw0REFMYSxDQUFoQiIsImZpbGUiOiIuL0NvbXBvbmVudHMvUG9zdC9TaW5nbGVQb3N0L1Bvc3RCb2R5L1Bvc3RCb2R5SW1hZ2UvUG9zdEJvZHlJbWFnZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBJbWFnZSBmcm9tIFwibWF0ZXJpYWwtdWktaW1hZ2VcIjtcbmltcG9ydCB7IGJhY2tlbmRfdXJsIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3VybFwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcywgVHlwb2dyYXBoeSwgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgc3JjOiBzdHJpbmc7XG4gIGNhcHRpb24/OiBzdHJpbmc7XG4gIGlzV2lkZTogYm9vbGVhbjtcbn1cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIGNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIG1hcmdpbkJsb2NrOiA1MCxcbiAgICBbXCJAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpXCJdOiB7XG4gICAgICAgIG1hcmdpbkJsb2M6IDI1LFxuICAgIH1cbiAgfSxcbiAgaW1hZ2VDb250YWluZXI6IHtcbiAgICB3aWR0aDogXCI2MCVcIixcbiAgICBwYWRkaW5nVG9wOiBcIjEwMCVcIixcbiAgICBtYXJnaW5Ub3A6IFwiLTEwMCVcIixcbiAgICBwYWRkaW5nQmxvY2s6IFwiYXV0b1wiLFxuICAgIFtcIkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweClcIl06IHtcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIH1cbiAgfSxcbn0pO1xuXG5jb25zdCBQb3N0Qm9keUltYWdlOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHsgc3JjLCBjYXB0aW9uLCBpc1dpZGUgfSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VDb250YWluZXJ9PlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzcmM9e2Ake2JhY2tlbmRfdXJsfSR7c3JjfWB9XG4gICAgICAgICAgYWx0PXtjYXB0aW9ufVxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0Qm9keUltYWdlO1xuXG5jb25zdCBDYXB0aW9uID0gd2l0aFN0eWxlcyh7XG4gICAgcm9vdDoge1xuICAgICAgICBmb250U2l6ZTogMTIsXG4gICAgICAgIGNvbG9yOiBcIiM2ODY4NjhcIixcbiAgICB9XG59KShUeXBvZ3JhcGh5KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/Post/SinglePost/PostBody/PostBodyImage/PostBodyImage.tsx\n");

/***/ })

})