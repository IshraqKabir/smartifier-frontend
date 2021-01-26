webpackHotUpdate_N_E("pages/blog/posts/[slug]",{

/***/ "./Components/Post/SinglePost/PostBody/PostBodyImage/PostBodyImage.tsx":
/*!*****************************************************************************!*\
  !*** ./Components/Post/SinglePost/PostBody/PostBodyImage/PostBodyImage.tsx ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../url */ \"./url.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/Post/SinglePost/PostBody/PostBodyImage/PostBodyImage.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"makeStyles\"])({\n  container: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    display: \"flex\",\n    flexDirection: \"column\",\n    justifyContent: \"center\",\n    alignItems: \"center\",\n    marginBlock: 50\n  }, \"@media (max-width: 500px)\", {\n    marginBlock: 25\n  }),\n  imageContainer: {\n    width: \"80%\",\n    display: \"flex\",\n    alignItems: \"center\",\n    justifyContent: \"center\"\n  }\n});\n\nvar PostBodyImage = function PostBodyImage(_ref) {\n  _s();\n\n  var src = _ref.src,\n      caption = _ref.caption,\n      isWide = _ref.isWide;\n  var classes = useStyles();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: classes.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: classes.imageContainer,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Avatar\"], {\n        src: \"\".concat(_url__WEBPACK_IMPORTED_MODULE_3__[\"backend_url\"]).concat(src),\n        alt: caption,\n        variant: \"square\",\n        style: {\n          width: \"100%\",\n          height: \"100%\"\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, _this), caption ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Caption, {\n      children: [\"Caption: \", caption]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 18\n    }, _this) : null]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(PostBodyImage, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = PostBodyImage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostBodyImage);\nvar Caption = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"withStyles\"])({\n  root: {\n    fontSize: 12,\n    color: \"#686868\",\n    marginTop: 5\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"Typography\"]);\n\nvar _c;\n\n$RefreshReg$(_c, \"PostBodyImage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qb3N0L1NpbmdsZVBvc3QvUG9zdEJvZHkvUG9zdEJvZHlJbWFnZS9Qb3N0Qm9keUltYWdlLnRzeD8yOGU2Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJjb250YWluZXIiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIm1hcmdpbkJsb2NrIiwiaW1hZ2VDb250YWluZXIiLCJ3aWR0aCIsIlBvc3RCb2R5SW1hZ2UiLCJzcmMiLCJjYXB0aW9uIiwiaXNXaWRlIiwiY2xhc3NlcyIsImJhY2tlbmRfdXJsIiwiaGVpZ2h0IiwiQ2FwdGlvbiIsIndpdGhTdHlsZXMiLCJyb290IiwiZm9udFNpemUiLCJjb2xvciIsIm1hcmdpblRvcCIsIlR5cG9ncmFwaHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTtBQVFBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQztBQUMzQkMsV0FBUyxFQUFFO0FBQ1RDLFdBQU8sRUFBRSxNQURGO0FBRVBDLGlCQUFhLEVBQUUsUUFGUjtBQUdQQyxrQkFBYyxFQUFFLFFBSFQ7QUFJUEMsY0FBVSxFQUFFLFFBSkw7QUFLUEMsZUFBVyxFQUFFO0FBTE4sS0FNTiwyQkFOTSxFQU13QjtBQUM3QkEsZUFBVyxFQUFFO0FBRGdCLEdBTnhCLENBRGtCO0FBVzNCQyxnQkFBYyxFQUFFO0FBQ2RDLFNBQUssRUFBRSxLQURPO0FBRWROLFdBQU8sRUFBRSxNQUZLO0FBR2RHLGNBQVUsRUFBRSxRQUhFO0FBSWRELGtCQUFjLEVBQUU7QUFKRjtBQVhXLENBQUQsQ0FBNUI7O0FBbUJBLElBQU1LLGFBQStCLEdBQUcsU0FBbENBLGFBQWtDLE9BQThCO0FBQUE7O0FBQUEsTUFBM0JDLEdBQTJCLFFBQTNCQSxHQUEyQjtBQUFBLE1BQXRCQyxPQUFzQixRQUF0QkEsT0FBc0I7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFDcEUsTUFBTUMsT0FBTyxHQUFHZCxTQUFTLEVBQXpCO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVjLE9BQU8sQ0FBQ1osU0FBeEI7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRVksT0FBTyxDQUFDTixjQUF4QjtBQUFBLDZCQUNFLHFFQUFDLHdEQUFEO0FBQ0UsV0FBRyxZQUFLTyxnREFBTCxTQUFtQkosR0FBbkIsQ0FETDtBQUVFLFdBQUcsRUFBRUMsT0FGUDtBQUdFLGVBQU8sRUFBQyxRQUhWO0FBSUUsYUFBSyxFQUFFO0FBQUVILGVBQUssRUFBRSxNQUFUO0FBQWlCTyxnQkFBTSxFQUFFO0FBQXpCO0FBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQVNHSixPQUFPLGdCQUFHLHFFQUFDLE9BQUQ7QUFBQSw4QkFBbUJBLE9BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFILEdBQTJDLElBVHJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBYUQsQ0FoQkQ7O0dBQU1GLGE7VUFDWVYsUzs7O0tBRFpVLGE7QUFrQlNBLDRFQUFmO0FBRUEsSUFBTU8sT0FBTyxHQUFHQyxvRUFBVSxDQUFDO0FBQ3pCQyxNQUFJLEVBQUU7QUFDSkMsWUFBUSxFQUFFLEVBRE47QUFFSkMsU0FBSyxFQUFFLFNBRkg7QUFHSkMsYUFBUyxFQUFFO0FBSFA7QUFEbUIsQ0FBRCxDQUFWLENBTWJDLDREQU5hLENBQWhCIiwiZmlsZSI6Ii4vQ29tcG9uZW50cy9Qb3N0L1NpbmdsZVBvc3QvUG9zdEJvZHkvUG9zdEJvZHlJbWFnZS9Qb3N0Qm9keUltYWdlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEltYWdlIGZyb20gXCJtYXRlcmlhbC11aS1pbWFnZVwiO1xuaW1wb3J0IHsgYmFja2VuZF91cmwgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vdXJsXCI7XG5pbXBvcnQgeyBBdmF0YXIsIG1ha2VTdHlsZXMsIFR5cG9ncmFwaHksIHdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHNyYzogc3RyaW5nO1xuICBjYXB0aW9uPzogc3RyaW5nO1xuICBpc1dpZGU6IGJvb2xlYW47XG59XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICBjb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgbWFyZ2luQmxvY2s6IDUwLFxuICAgIFtcIkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweClcIl06IHtcbiAgICAgIG1hcmdpbkJsb2NrOiAyNSxcbiAgICB9LFxuICB9LFxuICBpbWFnZUNvbnRhaW5lcjoge1xuICAgIHdpZHRoOiBcIjgwJVwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gIH0sXG59KTtcblxuY29uc3QgUG9zdEJvZHlJbWFnZTogUmVhY3QuRkM8SVByb3BzPiA9ICh7IHNyYywgY2FwdGlvbiwgaXNXaWRlIH0pID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlQ29udGFpbmVyfT5cbiAgICAgICAgPEF2YXRhclxuICAgICAgICAgIHNyYz17YCR7YmFja2VuZF91cmx9JHtzcmN9YH1cbiAgICAgICAgICBhbHQ9e2NhcHRpb259XG4gICAgICAgICAgdmFyaWFudD1cInNxdWFyZVwiXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtjYXB0aW9uID8gPENhcHRpb24+Q2FwdGlvbjoge2NhcHRpb259PC9DYXB0aW9uPiA6IG51bGx9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0Qm9keUltYWdlO1xuXG5jb25zdCBDYXB0aW9uID0gd2l0aFN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBmb250U2l6ZTogMTIsXG4gICAgY29sb3I6IFwiIzY4Njg2OFwiLFxuICAgIG1hcmdpblRvcDogNSxcbiAgfSxcbn0pKFR5cG9ncmFwaHkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/Post/SinglePost/PostBody/PostBodyImage/PostBodyImage.tsx\n");

/***/ })

})