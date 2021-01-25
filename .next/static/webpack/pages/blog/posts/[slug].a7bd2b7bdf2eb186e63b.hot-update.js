webpackHotUpdate_N_E("pages/blog/posts/[slug]",{

/***/ "./Components/Post/SinglePost/PostBody/PostBodyImage/PostBodyImage.tsx":
/*!*****************************************************************************!*\
  !*** ./Components/Post/SinglePost/PostBody/PostBodyImage/PostBodyImage.tsx ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var material_ui_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui-image */ \"./node_modules/material-ui-image/lib/index.js\");\n/* harmony import */ var material_ui_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../url */ \"./url.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/Post/SinglePost/PostBody/PostBodyImage/PostBodyImage.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"makeStyles\"])({\n  conainter: {},\n  imageContainer: {\n    width: \"60%\",\n    paddingTop: \"75%\",\n    marginTop: \"-75%\",\n    paddingBlock: \"auto\",\n    display: \"flex\",\n    justifyContent: \"center\"\n  }\n});\n\nvar PostBodyImage = function PostBodyImage(_ref) {\n  _s();\n\n  var src = _ref.src,\n      caption = _ref.caption,\n      isWide = _ref.isWide;\n  var classes = useStyles();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: classes.container,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: classes.imageContainer,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(material_ui_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        src: \"\".concat(_url__WEBPACK_IMPORTED_MODULE_3__[\"backend_url\"]).concat(src),\n        alt: caption,\n        style: {\n          width: \"100%\",\n          height: \"100%\"\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(PostBodyImage, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = PostBodyImage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostBodyImage);\n\nvar _c;\n\n$RefreshReg$(_c, \"PostBodyImage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qb3N0L1NpbmdsZVBvc3QvUG9zdEJvZHkvUG9zdEJvZHlJbWFnZS9Qb3N0Qm9keUltYWdlLnRzeD8yOGU2Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJjb25haW50ZXIiLCJpbWFnZUNvbnRhaW5lciIsIndpZHRoIiwicGFkZGluZ1RvcCIsIm1hcmdpblRvcCIsInBhZGRpbmdCbG9jayIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIlBvc3RCb2R5SW1hZ2UiLCJzcmMiLCJjYXB0aW9uIiwiaXNXaWRlIiwiY2xhc3NlcyIsImNvbnRhaW5lciIsImJhY2tlbmRfdXJsIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQVFBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQztBQUMzQkMsV0FBUyxFQUFFLEVBRGdCO0FBSTNCQyxnQkFBYyxFQUFFO0FBQ2RDLFNBQUssRUFBRSxLQURPO0FBRWRDLGNBQVUsRUFBRSxLQUZFO0FBR2RDLGFBQVMsRUFBRSxNQUhHO0FBSWRDLGdCQUFZLEVBQUUsTUFKQTtBQUtkQyxXQUFPLEVBQUUsTUFMSztBQU1kQyxrQkFBYyxFQUFFO0FBTkY7QUFKVyxDQUFELENBQTVCOztBQWNBLElBQU1DLGFBQStCLEdBQUcsU0FBbENBLGFBQWtDLE9BQThCO0FBQUE7O0FBQUEsTUFBM0JDLEdBQTJCLFFBQTNCQSxHQUEyQjtBQUFBLE1BQXRCQyxPQUFzQixRQUF0QkEsT0FBc0I7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFDcEUsTUFBTUMsT0FBTyxHQUFHZCxTQUFTLEVBQXpCO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVjLE9BQU8sQ0FBQ0MsU0FBeEI7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBRUQsT0FBTyxDQUFDWCxjQUF4QjtBQUFBLDZCQUNFLHFFQUFDLHdEQUFEO0FBQ0UsV0FBRyxZQUFLYSxnREFBTCxTQUFtQkwsR0FBbkIsQ0FETDtBQUVFLFdBQUcsRUFBRUMsT0FGUDtBQUdFLGFBQUssRUFBRTtBQUFFUixlQUFLLEVBQUUsTUFBVDtBQUFpQmEsZ0JBQU0sRUFBRTtBQUF6QjtBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBV0QsQ0FkRDs7R0FBTVAsYTtVQUNZVixTOzs7S0FEWlUsYTtBQWdCU0EsNEVBQWYiLCJmaWxlIjoiLi9Db21wb25lbnRzL1Bvc3QvU2luZ2xlUG9zdC9Qb3N0Qm9keS9Qb3N0Qm9keUltYWdlL1Bvc3RCb2R5SW1hZ2UudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm1hdGVyaWFsLXVpLWltYWdlXCI7XG5pbXBvcnQgeyBiYWNrZW5kX3VybCB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi91cmxcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHNyYzogc3RyaW5nO1xuICBjYXB0aW9uPzogc3RyaW5nO1xuICBpc1dpZGU6IGJvb2xlYW47XG59XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICBjb25haW50ZXI6IHtcbiAgICAgIFxuICB9LFxuICBpbWFnZUNvbnRhaW5lcjoge1xuICAgIHdpZHRoOiBcIjYwJVwiLFxuICAgIHBhZGRpbmdUb3A6IFwiNzUlXCIsXG4gICAgbWFyZ2luVG9wOiBcIi03NSVcIixcbiAgICBwYWRkaW5nQmxvY2s6IFwiYXV0b1wiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICB9LFxufSk7XG5cbmNvbnN0IFBvc3RCb2R5SW1hZ2U6IFJlYWN0LkZDPElQcm9wcz4gPSAoeyBzcmMsIGNhcHRpb24sIGlzV2lkZSB9KSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZUNvbnRhaW5lcn0+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz17YCR7YmFja2VuZF91cmx9JHtzcmN9YH1cbiAgICAgICAgICBhbHQ9e2NhcHRpb259XG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RCb2R5SW1hZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/Post/SinglePost/PostBody/PostBodyImage/PostBodyImage.tsx\n");

/***/ })

})