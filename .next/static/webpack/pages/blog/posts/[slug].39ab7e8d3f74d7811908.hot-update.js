webpackHotUpdate_N_E("pages/blog/posts/[slug]",{

/***/ "./Components/Search/Search.tsx":
/*!**************************************!*\
  !*** ./Components/Search/Search.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Dialog */ \"./node_modules/@material-ui/core/esm/Dialog/index.js\");\n\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/Search/Search.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"makeStyles\"])({\n  container: {\n    width: \"100%\",\n    marginBlock: 30\n  },\n  search: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    width: \"100%\",\n    maxWidth: 414,\n    marginLeft: \"auto\",\n    background: \"#0380A7D4 0% 0% no-repeat padding-box\",\n    textAlign: \"center\",\n    borderRadius: 40,\n    paddingBlock: 5,\n    cursor: \"pointer\"\n  }, \"@media (max-width: 750px)\", {\n    maxWidth: \"100%\"\n  }),\n  modalContainer: {\n    position: \"fixed\",\n    top: 0,\n    right: 0,\n    bottom: 0,\n    left: 0,\n    backgroundColor: \"black\",\n    opacity: 0.4,\n    zIndex: 200\n  },\n  modalContent: {\n    top: 100\n  }\n});\nvar SearchText = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"withStyles\"])({\n  root: {\n    textTransform: \"capitalize\",\n    color: \"#CFCFCF\",\n    \"&:hover\": {\n      color: \"white\"\n    }\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"]);\n\nvar Search = function Search() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  var classes = useStyles();\n\n  var handleOpen = function handleOpen() {\n    setOpen(true);\n  };\n\n  var handleClose = function handleClose() {\n    setOpen(false);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: classes.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: classes.search,\n      onClick: handleOpen,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(SearchText, {\n        children: \"Search\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      open: open,\n      keepMounted: true,\n      onClose: handleClose,\n      \"aria-labelledby\": \"alert-dialog-slide-title\",\n      \"aria-describedby\": \"alert-dialog-slide-description\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: classes.modalContent,\n        children: \"a s;dlfkjla; jsdfla jsdflkjalksd fj a s;dlfkjla; jsdfla jsdflkjalksd fj a s;dlfkjla; jsdfla jsdflkjalksd fj a s;dlfkjla; jsdfla jsdflkjalksd fj a s;dlfkjla; jsdfla jsdflkjalksd fj a s;dlfkjla; jsdfla jsdflkjalksd fj a s;dlfkjla; jsdfla jsdflkjalksd fj a s;dlfkjla; jsdfla jsdflkjalksd fj a s;dlfkjla; jsdfla jsdflkjalksd fj a s;dlfkjla; jsdfla jsdflkjalksd fj a s;dlfkjla; jsdfla jsdflkjalksd fj\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 64,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Search, \"sAdzNhf/eEVWcoR6sLHcRgUAoMI=\", false, function () {\n  return [useStyles];\n});\n\n_c = Search;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\n\nvar _c;\n\n$RefreshReg$(_c, \"Search\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9TZWFyY2gvU2VhcmNoLnRzeD9hZDYwIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJjb250YWluZXIiLCJ3aWR0aCIsIm1hcmdpbkJsb2NrIiwic2VhcmNoIiwibWF4V2lkdGgiLCJtYXJnaW5MZWZ0IiwiYmFja2dyb3VuZCIsInRleHRBbGlnbiIsImJvcmRlclJhZGl1cyIsInBhZGRpbmdCbG9jayIsImN1cnNvciIsIm1vZGFsQ29udGFpbmVyIiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvcGFjaXR5IiwiekluZGV4IiwibW9kYWxDb250ZW50IiwiU2VhcmNoVGV4dCIsIndpdGhTdHlsZXMiLCJyb290IiwidGV4dFRyYW5zZm9ybSIsImNvbG9yIiwiVHlwb2dyYXBoeSIsIlNlYXJjaCIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJjbGFzc2VzIiwiaGFuZGxlT3BlbiIsImhhbmRsZUNsb3NlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUM7QUFDM0JDLFdBQVMsRUFBRTtBQUNUQyxTQUFLLEVBQUUsTUFERTtBQUVUQyxlQUFXLEVBQUU7QUFGSixHQURnQjtBQUszQkMsUUFBTSxFQUFFO0FBQ05GLFNBQUssRUFBRSxNQURIO0FBRUpHLFlBQVEsRUFBRSxHQUZOO0FBR0pDLGNBQVUsRUFBRSxNQUhSO0FBSUpDLGNBQVUsRUFBRSx1Q0FKUjtBQUtKQyxhQUFTLEVBQUUsUUFMUDtBQU1KQyxnQkFBWSxFQUFFLEVBTlY7QUFPSkMsZ0JBQVksRUFBRSxDQVBWO0FBUUpDLFVBQU0sRUFBRTtBQVJKLEtBU0gsMkJBVEcsRUFTMkI7QUFDN0JOLFlBQVEsRUFBRTtBQURtQixHQVQzQixDQUxxQjtBQWtCM0JPLGdCQUFjLEVBQUU7QUFDZEMsWUFBUSxFQUFFLE9BREk7QUFFZEMsT0FBRyxFQUFFLENBRlM7QUFHZEMsU0FBSyxFQUFFLENBSE87QUFJZEMsVUFBTSxFQUFFLENBSk07QUFLZEMsUUFBSSxFQUFFLENBTFE7QUFNZEMsbUJBQWUsRUFBRSxPQU5IO0FBT2RDLFdBQU8sRUFBRSxHQVBLO0FBUWRDLFVBQU0sRUFBRTtBQVJNLEdBbEJXO0FBNEIzQkMsY0FBWSxFQUFFO0FBQ1pQLE9BQUcsRUFBRTtBQURPO0FBNUJhLENBQUQsQ0FBNUI7QUFpQ0EsSUFBTVEsVUFBVSxHQUFHQyxvRUFBVSxDQUFDO0FBQzVCQyxNQUFJLEVBQUU7QUFDSkMsaUJBQWEsRUFBRSxZQURYO0FBRUpDLFNBQUssRUFBRSxTQUZIO0FBR0osZUFBVztBQUNUQSxXQUFLLEVBQUU7QUFERTtBQUhQO0FBRHNCLENBQUQsQ0FBVixDQVFoQkMsNERBUmdCLENBQW5COztBQVVBLElBQU1DLE1BQXdCLEdBQUcsU0FBM0JBLE1BQTJCLEdBQU07QUFBQTs7QUFBQSxrQkFDYkMsc0RBQVEsQ0FBVSxLQUFWLENBREs7QUFBQSxNQUM5QkMsSUFEOEI7QUFBQSxNQUN4QkMsT0FEd0I7O0FBR3JDLE1BQU1DLE9BQU8sR0FBR2pDLFNBQVMsRUFBekI7O0FBRUEsTUFBTWtDLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkJGLFdBQU8sQ0FBQyxJQUFELENBQVA7QUFDRCxHQUZEOztBQUlBLE1BQU1HLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJILFdBQU8sQ0FBQyxLQUFELENBQVA7QUFDRCxHQUZEOztBQUlBLHNCQUNFO0FBQUssYUFBUyxFQUFFQyxPQUFPLENBQUMvQixTQUF4QjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFK0IsT0FBTyxDQUFDNUIsTUFBeEI7QUFBZ0MsYUFBTyxFQUFFNkIsVUFBekM7QUFBQSw2QkFDRSxxRUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUUscUVBQUMsZ0VBQUQ7QUFDRSxVQUFJLEVBQUVILElBRFI7QUFFRSxpQkFBVyxNQUZiO0FBR0UsYUFBTyxFQUFFSSxXQUhYO0FBSUUseUJBQWdCLDBCQUpsQjtBQUtFLDBCQUFpQixnQ0FMbkI7QUFBQSw2QkFPRTtBQUFLLGlCQUFTLEVBQUVGLE9BQU8sQ0FBQ1gsWUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE0QkQsQ0F6Q0Q7O0dBQU1PLE07VUFHWTdCLFM7OztLQUhaNkIsTTtBQTJDU0EscUVBQWYiLCJmaWxlIjoiLi9Db21wb25lbnRzL1NlYXJjaC9TZWFyY2gudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBUeXBvZ3JhcGh5LCB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgRGlhbG9nIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7fVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgY29udGFpbmVyOiB7XG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIG1hcmdpbkJsb2NrOiAzMCxcbiAgfSxcbiAgc2VhcmNoOiB7XG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIG1heFdpZHRoOiA0MTQsXG4gICAgbWFyZ2luTGVmdDogXCJhdXRvXCIsXG4gICAgYmFja2dyb3VuZDogXCIjMDM4MEE3RDQgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94XCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIGJvcmRlclJhZGl1czogNDAsXG4gICAgcGFkZGluZ0Jsb2NrOiA1LFxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgW1wiQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KVwiXToge1xuICAgICAgbWF4V2lkdGg6IFwiMTAwJVwiLFxuICAgIH0sXG4gIH0sXG4gIG1vZGFsQ29udGFpbmVyOiB7XG4gICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICB0b3A6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIsXG4gICAgb3BhY2l0eTogMC40LFxuICAgIHpJbmRleDogMjAwLFxuICB9LFxuICBtb2RhbENvbnRlbnQ6IHtcbiAgICB0b3A6IDEwMCwgXG4gIH1cbn0pO1xuXG5jb25zdCBTZWFyY2hUZXh0ID0gd2l0aFN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICB0ZXh0VHJhbnNmb3JtOiBcImNhcGl0YWxpemVcIixcbiAgICBjb2xvcjogXCIjQ0ZDRkNGXCIsXG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgfSxcbiAgfSxcbn0pKFR5cG9ncmFwaHkpO1xuXG5jb25zdCBTZWFyY2g6IFJlYWN0LkZDPElQcm9wcz4gPSAoKSA9PiB7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcbiAgICBzZXRPcGVuKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHNldE9wZW4oZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaH0gb25DbGljaz17aGFuZGxlT3Blbn0+XG4gICAgICAgIDxTZWFyY2hUZXh0PlNlYXJjaDwvU2VhcmNoVGV4dD5cbiAgICAgIDwvZGl2PlxuICAgICAgPERpYWxvZ1xuICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICBrZWVwTW91bnRlZFxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiYWxlcnQtZGlhbG9nLXNsaWRlLXRpdGxlXCJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImFsZXJ0LWRpYWxvZy1zbGlkZS1kZXNjcmlwdGlvblwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsQ29udGVudH0+XG4gICAgICAgICAgYSBzO2RsZmtqbGE7IGpzZGZsYSBqc2RmbGtqYWxrc2QgZmpcbiAgICAgICAgICBhIHM7ZGxma2psYTsganNkZmxhIGpzZGZsa2phbGtzZCBmalxuICAgICAgICAgIGEgcztkbGZramxhOyBqc2RmbGEganNkZmxramFsa3NkIGZqXG4gICAgICAgICAgYSBzO2RsZmtqbGE7IGpzZGZsYSBqc2RmbGtqYWxrc2QgZmpcbiAgICAgICAgICBhIHM7ZGxma2psYTsganNkZmxhIGpzZGZsa2phbGtzZCBmalxuICAgICAgICAgIGEgcztkbGZramxhOyBqc2RmbGEganNkZmxramFsa3NkIGZqXG4gICAgICAgICAgYSBzO2RsZmtqbGE7IGpzZGZsYSBqc2RmbGtqYWxrc2QgZmpcbiAgICAgICAgICBhIHM7ZGxma2psYTsganNkZmxhIGpzZGZsa2phbGtzZCBmalxuICAgICAgICAgIGEgcztkbGZramxhOyBqc2RmbGEganNkZmxramFsa3NkIGZqXG4gICAgICAgICAgYSBzO2RsZmtqbGE7IGpzZGZsYSBqc2RmbGtqYWxrc2QgZmpcbiAgICAgICAgICBhIHM7ZGxma2psYTsganNkZmxhIGpzZGZsa2phbGtzZCBmalxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRGlhbG9nPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/Search/Search.tsx\n");

/***/ })

})