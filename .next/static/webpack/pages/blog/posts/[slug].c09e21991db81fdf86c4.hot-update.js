webpackHotUpdate_N_E("pages/blog/posts/[slug]",{

/***/ "./Components/Search/Search.tsx":
/*!**************************************!*\
  !*** ./Components/Search/Search.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/Search/Search.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"makeStyles\"])({\n  container: {\n    width: \"100%\",\n    marginBlock: 30\n  },\n  search: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    width: \"100%\",\n    maxWidth: 414,\n    marginLeft: \"auto\",\n    background: \"#0380A7D4 0% 0% no-repeat padding-box\",\n    textAlign: \"center\",\n    borderRadius: 40,\n    paddingBlock: 5,\n    cursor: \"pointer\"\n  }, \"@media (max-width: 750px)\", {\n    maxWidth: \"100%\"\n  }),\n  modalContainer: {\n    position: \"fixed\",\n    top: 0,\n    right: 0,\n    bottom: 0,\n    left: 0,\n    backgroundColor: \"black\",\n    opacity: 0.4,\n    zIndex: 200\n  }\n});\nvar SearchText = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"withStyles\"])({\n  root: {\n    textTransform: \"capitalize\",\n    color: \"#CFCFCF\",\n    \"&:hover\": {\n      color: \"white\"\n    }\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"]);\n\nvar Search = function Search() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  var classes = useStyles();\n\n  var handleOpen = function handleOpen() {\n    setOpen(true);\n  };\n\n  var handleClose = function handleClose() {\n    setOpen(false);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: classes.container,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: classes.search,\n      onClick: handleOpen,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(SearchText, {\n        children: \"Search\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 67,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Search, \"sAdzNhf/eEVWcoR6sLHcRgUAoMI=\", false, function () {\n  return [useStyles];\n});\n\n_c = Search;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\n\nvar _c;\n\n$RefreshReg$(_c, \"Search\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9TZWFyY2gvU2VhcmNoLnRzeD9hZDYwIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJjb250YWluZXIiLCJ3aWR0aCIsIm1hcmdpbkJsb2NrIiwic2VhcmNoIiwibWF4V2lkdGgiLCJtYXJnaW5MZWZ0IiwiYmFja2dyb3VuZCIsInRleHRBbGlnbiIsImJvcmRlclJhZGl1cyIsInBhZGRpbmdCbG9jayIsImN1cnNvciIsIm1vZGFsQ29udGFpbmVyIiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvcGFjaXR5IiwiekluZGV4IiwiU2VhcmNoVGV4dCIsIndpdGhTdHlsZXMiLCJyb290IiwidGV4dFRyYW5zZm9ybSIsImNvbG9yIiwiVHlwb2dyYXBoeSIsIlNlYXJjaCIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJjbGFzc2VzIiwiaGFuZGxlT3BlbiIsImhhbmRsZUNsb3NlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFXQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUM7QUFDM0JDLFdBQVMsRUFBRTtBQUNUQyxTQUFLLEVBQUUsTUFERTtBQUVUQyxlQUFXLEVBQUU7QUFGSixHQURnQjtBQUszQkMsUUFBTSxFQUFFO0FBQ05GLFNBQUssRUFBRSxNQURIO0FBRUpHLFlBQVEsRUFBRSxHQUZOO0FBR0pDLGNBQVUsRUFBRSxNQUhSO0FBSUpDLGNBQVUsRUFBRSx1Q0FKUjtBQUtKQyxhQUFTLEVBQUUsUUFMUDtBQU1KQyxnQkFBWSxFQUFFLEVBTlY7QUFPSkMsZ0JBQVksRUFBRSxDQVBWO0FBUUpDLFVBQU0sRUFBRTtBQVJKLEtBU0gsMkJBVEcsRUFTMkI7QUFDN0JOLFlBQVEsRUFBRTtBQURtQixHQVQzQixDQUxxQjtBQWtCM0JPLGdCQUFjLEVBQUU7QUFDZEMsWUFBUSxFQUFFLE9BREk7QUFFZEMsT0FBRyxFQUFFLENBRlM7QUFHZEMsU0FBSyxFQUFFLENBSE87QUFJZEMsVUFBTSxFQUFFLENBSk07QUFLZEMsUUFBSSxFQUFFLENBTFE7QUFNZEMsbUJBQWUsRUFBRSxPQU5IO0FBT2RDLFdBQU8sRUFBRSxHQVBLO0FBUWRDLFVBQU0sRUFBRTtBQVJNO0FBbEJXLENBQUQsQ0FBNUI7QUE4QkEsSUFBTUMsVUFBVSxHQUFHQyxvRUFBVSxDQUFDO0FBQzVCQyxNQUFJLEVBQUU7QUFDSkMsaUJBQWEsRUFBRSxZQURYO0FBRUpDLFNBQUssRUFBRSxTQUZIO0FBR0osZUFBVztBQUNUQSxXQUFLLEVBQUU7QUFERTtBQUhQO0FBRHNCLENBQUQsQ0FBVixDQVFoQkMsNERBUmdCLENBQW5COztBQVVBLElBQU1DLE1BQXdCLEdBQUcsU0FBM0JBLE1BQTJCLEdBQU07QUFBQTs7QUFBQSxrQkFDYkMsc0RBQVEsQ0FBVSxLQUFWLENBREs7QUFBQSxNQUM5QkMsSUFEOEI7QUFBQSxNQUN4QkMsT0FEd0I7O0FBR3JDLE1BQU1DLE9BQU8sR0FBR2hDLFNBQVMsRUFBekI7O0FBRUEsTUFBTWlDLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkJGLFdBQU8sQ0FBQyxJQUFELENBQVA7QUFDRCxHQUZEOztBQUlBLE1BQU1HLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJILFdBQU8sQ0FBQyxLQUFELENBQVA7QUFDRCxHQUZEOztBQUlBLHNCQUNFO0FBQUssYUFBUyxFQUFFQyxPQUFPLENBQUM5QixTQUF4QjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFOEIsT0FBTyxDQUFDM0IsTUFBeEI7QUFBZ0MsYUFBTyxFQUFFNEIsVUFBekM7QUFBQSw2QkFDRSxxRUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVFELENBckJEOztHQUFNTCxNO1VBR1k1QixTOzs7S0FIWjRCLE07QUF1QlNBLHFFQUFmIiwiZmlsZSI6Ii4vQ29tcG9uZW50cy9TZWFyY2gvU2VhcmNoLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcywgVHlwb2dyYXBoeSwgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IERpYWxvZyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xuaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9ucyc7XG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50JztcbmltcG9ydCBEaWFsb2dDb250ZW50VGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50VGV4dCc7XG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xuaW1wb3J0IFNsaWRlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NsaWRlJztcbmltcG9ydCB7IFRyYW5zaXRpb25Qcm9wcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3RyYW5zaXRpb25zJztcblxuaW50ZXJmYWNlIElQcm9wcyB7fVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgY29udGFpbmVyOiB7XG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIG1hcmdpbkJsb2NrOiAzMCxcbiAgfSxcbiAgc2VhcmNoOiB7XG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIG1heFdpZHRoOiA0MTQsXG4gICAgbWFyZ2luTGVmdDogXCJhdXRvXCIsXG4gICAgYmFja2dyb3VuZDogXCIjMDM4MEE3RDQgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94XCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIGJvcmRlclJhZGl1czogNDAsXG4gICAgcGFkZGluZ0Jsb2NrOiA1LFxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgW1wiQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KVwiXToge1xuICAgICAgbWF4V2lkdGg6IFwiMTAwJVwiLFxuICAgIH0sXG4gIH0sXG4gIG1vZGFsQ29udGFpbmVyOiB7XG4gICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICB0b3A6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIsXG4gICAgb3BhY2l0eTogMC40LFxuICAgIHpJbmRleDogMjAwLFxuICB9LFxufSk7XG5cbmNvbnN0IFNlYXJjaFRleHQgPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIHRleHRUcmFuc2Zvcm06IFwiY2FwaXRhbGl6ZVwiLFxuICAgIGNvbG9yOiBcIiNDRkNGQ0ZcIixcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICB9LFxuICB9LFxufSkoVHlwb2dyYXBoeSk7XG5cbmNvbnN0IFNlYXJjaDogUmVhY3QuRkM8SVByb3BzPiA9ICgpID0+IHtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xuICAgIHNldE9wZW4odHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0T3BlbihmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNofSBvbkNsaWNrPXtoYW5kbGVPcGVufT5cbiAgICAgICAgPFNlYXJjaFRleHQ+U2VhcmNoPC9TZWFyY2hUZXh0PlxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/Search/Search.tsx\n");

/***/ })

})