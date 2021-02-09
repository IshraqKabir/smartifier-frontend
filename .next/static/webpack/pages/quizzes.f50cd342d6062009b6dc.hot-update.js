webpackHotUpdate_N_E("pages/quizzes",{

/***/ "./Components/Quizzes/Quiz/Quiz.tsx":
/*!******************************************!*\
  !*** ./Components/Quizzes/Quiz/Quiz.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../custom-hooks/useLocalState */ \"./custom-hooks/useLocalState.ts\");\n/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../url */ \"./url.js\");\n\n\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/Quizzes/Quiz/Quiz.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _root;\n\n\n\n\n\n\n\nvar Quiz = function Quiz(_ref) {\n  _s();\n\n  var _quiz$image;\n\n  var quiz = _ref.quiz,\n      setShowLoginAlert = _ref.setShowLoginAlert;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n\n  var _useLocalState = Object(_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"user\", \"\"),\n      _useLocalState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useLocalState, 1),\n      user = _useLocalState2[0];\n\n  var handleClick = function handleClick() {\n    if (!user.token) {\n      setShowLoginAlert(true);\n      setTimeout(function () {\n        setShowLoginAlert(false);\n      }, 3000);\n      return;\n    }\n\n    router.push(\"/test/quiz/\".concat(quiz.id));\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Container, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Avatar\"], {\n      src: \"\".concat(_url__WEBPACK_IMPORTED_MODULE_7__[\"backend_url\"], \"/storage/\").concat(quiz === null || quiz === void 0 ? void 0 : (_quiz$image = quiz.image) === null || _quiz$image === void 0 ? void 0 : _quiz$image.image_link),\n      alt: quiz.title,\n      style: {\n        width: 90,\n        height: 90\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(TitleButtonContainer, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Title, {\n        children: quiz.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Button, {\n        onClick: function onClick() {\n          return handleClick();\n        },\n        children: \"Take the Quiz\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Quiz, \"cb8K/116e7FGGoC9d+YOeEjASkY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"], _custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_6__[\"default\"]];\n});\n\n_c = Quiz;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quiz);\nvar Container = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"withStyles\"])({\n  root: (_root = {\n    width: \"80%\",\n    position: \"relative\",\n    background: \"transparent linear-gradient(180deg, #966BC2 0%, #437BBE6E 100%) 0% 0% no-repeat padding-box\",\n    marginTop: 30,\n    borderRadius: 15,\n    padding: \"40px 50px\"\n  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_root, \"@media (max-width: 600px)\", {\n    width: \"95%\"\n  }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_root, \"display\", \"flex\"), _root)\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"]);\nvar TitleButtonContainer = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"withStyles\"])({\n  root: {\n    width: \"100%\",\n    display: \"flex\",\n    flexDirection: \"column\",\n    marginLeft: 50\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"]);\nvar Title = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"withStyles\"])({\n  root: {\n    fontSize: \"1.2rem\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"]);\nvar Button = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"withStyles\"])({\n  root: {\n    maxWidth: 400,\n    marginTop: 20,\n    cursor: \"pointer\",\n    width: \"100%\",\n    padding: \"10px 0px\",\n    borderRadius: 10,\n    textAlign: \"center\",\n    background: \"transparent linear-gradient(180deg, #995FD4 0%, #1F29356E 100%) 0% 0% no-repeat padding-box\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Box\"]);\n\nvar _c;\n\n$RefreshReg$(_c, \"Quiz\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9RdWl6emVzL1F1aXovUXVpei50c3g/MDJhMyJdLCJuYW1lcyI6WyJRdWl6IiwicXVpeiIsInNldFNob3dMb2dpbkFsZXJ0Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlTG9jYWxTdGF0ZSIsInVzZXIiLCJoYW5kbGVDbGljayIsInRva2VuIiwic2V0VGltZW91dCIsInB1c2giLCJpZCIsImJhY2tlbmRfdXJsIiwiaW1hZ2UiLCJpbWFnZV9saW5rIiwidGl0bGUiLCJ3aWR0aCIsImhlaWdodCIsIkNvbnRhaW5lciIsIndpdGhTdHlsZXMiLCJyb290IiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kIiwibWFyZ2luVG9wIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsIkJveCIsIlRpdGxlQnV0dG9uQ29udGFpbmVyIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW5MZWZ0IiwiVGl0bGUiLCJmb250U2l6ZSIsIlR5cG9ncmFwaHkiLCJCdXR0b24iLCJtYXhXaWR0aCIsImN1cnNvciIsInRleHRBbGlnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFTQSxJQUFNQSxJQUFzQixHQUFHLFNBQXpCQSxJQUF5QixPQUFpQztBQUFBOztBQUFBOztBQUFBLE1BQTlCQyxJQUE4QixRQUE5QkEsSUFBOEI7QUFBQSxNQUF4QkMsaUJBQXdCLFFBQXhCQSxpQkFBd0I7QUFDOUQsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEOEQsdUJBRy9DQywyRUFBYSxDQUFDLE1BQUQsRUFBUyxFQUFULENBSGtDO0FBQUE7QUFBQSxNQUd2REMsSUFIdUQ7O0FBSzlELE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEIsUUFBSSxDQUFDRCxJQUFJLENBQUNFLEtBQVYsRUFBaUI7QUFDZk4sdUJBQWlCLENBQUMsSUFBRCxDQUFqQjtBQUNBTyxnQkFBVSxDQUFDLFlBQU07QUFDZlAseUJBQWlCLENBQUMsS0FBRCxDQUFqQjtBQUNELE9BRlMsRUFFUCxJQUZPLENBQVY7QUFHQTtBQUNEOztBQUNEQyxVQUFNLENBQUNPLElBQVAsc0JBQTBCVCxJQUFJLENBQUNVLEVBQS9CO0FBQ0QsR0FURDs7QUFXQSxzQkFDRSxxRUFBQyxTQUFEO0FBQUEsNEJBQ0UscUVBQUMsd0RBQUQ7QUFDRSxTQUFHLFlBQUtDLGdEQUFMLHNCQUE0QlgsSUFBNUIsYUFBNEJBLElBQTVCLHNDQUE0QkEsSUFBSSxDQUFFWSxLQUFsQyxnREFBNEIsWUFBYUMsVUFBekMsQ0FETDtBQUVFLFNBQUcsRUFBRWIsSUFBSSxDQUFDYyxLQUZaO0FBR0UsV0FBSyxFQUFFO0FBQUVDLGFBQUssRUFBRSxFQUFUO0FBQWFDLGNBQU0sRUFBRTtBQUFyQjtBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQU1FLHFFQUFDLG9CQUFEO0FBQUEsOEJBQ0UscUVBQUMsS0FBRDtBQUFBLGtCQUFRaEIsSUFBSSxDQUFDYztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLHFFQUFDLE1BQUQ7QUFBUSxlQUFPLEVBQUU7QUFBQSxpQkFBTVIsV0FBVyxFQUFqQjtBQUFBLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFhRCxDQTdCRDs7R0FBTVAsSTtVQUNXSSxxRCxFQUVBQyxtRTs7O0tBSFhMLEk7QUErQlNBLG1FQUFmO0FBRUEsSUFBTWtCLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQztBQUMzQkMsTUFBSTtBQUNGSixTQUFLLEVBQUUsS0FETDtBQUVGSyxZQUFRLEVBQUUsVUFGUjtBQUdGQyxjQUFVLEVBQ1IsNkZBSkE7QUFLRkMsYUFBUyxFQUFFLEVBTFQ7QUFNRkMsZ0JBQVksRUFBRSxFQU5aO0FBT0ZDLFdBQU8sRUFBRTtBQVBQLHNHQVFELDJCQVJDLEVBUTZCO0FBQzdCVCxTQUFLLEVBQUU7QUFEc0IsR0FSN0IsK0dBV08sTUFYUDtBQUR1QixDQUFELENBQVYsQ0FjZlUscURBZGUsQ0FBbEI7QUFnQkEsSUFBTUMsb0JBQW9CLEdBQUdSLG9FQUFVLENBQUM7QUFDdENDLE1BQUksRUFBRTtBQUNKSixTQUFLLEVBQUUsTUFESDtBQUVKWSxXQUFPLEVBQUUsTUFGTDtBQUdKQyxpQkFBYSxFQUFFLFFBSFg7QUFJSkMsY0FBVSxFQUFFO0FBSlI7QUFEZ0MsQ0FBRCxDQUFWLENBTzFCSixxREFQMEIsQ0FBN0I7QUFTQSxJQUFNSyxLQUFLLEdBQUdaLG9FQUFVLENBQUM7QUFDdkJDLE1BQUksRUFBRTtBQUNKWSxZQUFRLEVBQUU7QUFETjtBQURpQixDQUFELENBQVYsQ0FJWEMsNERBSlcsQ0FBZDtBQU1BLElBQU1DLE1BQU0sR0FBR2Ysb0VBQVUsQ0FBQztBQUN4QkMsTUFBSSxFQUFFO0FBQ0plLFlBQVEsRUFBRSxHQUROO0FBRUpaLGFBQVMsRUFBRSxFQUZQO0FBR0phLFVBQU0sRUFBRSxTQUhKO0FBSUpwQixTQUFLLEVBQUUsTUFKSDtBQUtKUyxXQUFPLEVBQUUsVUFMTDtBQU1KRCxnQkFBWSxFQUFFLEVBTlY7QUFPSmEsYUFBUyxFQUFFLFFBUFA7QUFRSmYsY0FBVSxFQUNSO0FBVEU7QUFEa0IsQ0FBRCxDQUFWLENBWVpJLHFEQVpZLENBQWYiLCJmaWxlIjoiLi9Db21wb25lbnRzL1F1aXp6ZXMvUXVpei9RdWl6LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF2YXRhciwgQm94LCBUeXBvZ3JhcGh5LCB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VMb2NhbFN0YXRlIGZyb20gXCIuLi8uLi8uLi9jdXN0b20taG9va3MvdXNlTG9jYWxTdGF0ZVwiO1xuaW1wb3J0IElRdWl6IGZyb20gXCIuLi8uLi8uLi9Nb2RlbHMvSVF1aXpcIjtcbmltcG9ydCB1cmwsIHsgYmFja2VuZF91cmwgfSBmcm9tIFwiLi4vLi4vLi4vdXJsXCI7XG5cbmltcG9ydCBTaGFyZUxpbmsgZnJvbSBcInJlYWN0LWZhY2Vib29rLXNoYXJlLWxpbmtcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHF1aXo6IElRdWl6O1xuICBzZXRTaG93TG9naW5BbGVydDogRnVuY3Rpb247XG59XG5cbmNvbnN0IFF1aXo6IFJlYWN0LkZDPElQcm9wcz4gPSAoeyBxdWl6LCBzZXRTaG93TG9naW5BbGVydCB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IFt1c2VyXSA9IHVzZUxvY2FsU3RhdGUoXCJ1c2VyXCIsIFwiXCIpO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIGlmICghdXNlci50b2tlbikge1xuICAgICAgc2V0U2hvd0xvZ2luQWxlcnQodHJ1ZSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0U2hvd0xvZ2luQWxlcnQoZmFsc2UpO1xuICAgICAgfSwgMzAwMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJvdXRlci5wdXNoKGAvdGVzdC9xdWl6LyR7cXVpei5pZH1gKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8QXZhdGFyXG4gICAgICAgIHNyYz17YCR7YmFja2VuZF91cmx9L3N0b3JhZ2UvJHtxdWl6Py5pbWFnZT8uaW1hZ2VfbGlua31gfVxuICAgICAgICBhbHQ9e3F1aXoudGl0bGV9XG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiA5MCwgaGVpZ2h0OiA5MCB9fVxuICAgICAgLz5cbiAgICAgIDxUaXRsZUJ1dHRvbkNvbnRhaW5lcj5cbiAgICAgICAgPFRpdGxlPntxdWl6LnRpdGxlfTwvVGl0bGU+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soKX0+VGFrZSB0aGUgUXVpejwvQnV0dG9uPlxuICAgICAgPC9UaXRsZUJ1dHRvbkNvbnRhaW5lcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFF1aXo7XG5cbmNvbnN0IENvbnRhaW5lciA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgd2lkdGg6IFwiODAlXCIsXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICBiYWNrZ3JvdW5kOlxuICAgICAgXCJ0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjOTY2QkMyIDAlLCAjNDM3QkJFNkUgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94XCIsXG4gICAgbWFyZ2luVG9wOiAzMCxcbiAgICBib3JkZXJSYWRpdXM6IDE1LFxuICAgIHBhZGRpbmc6IFwiNDBweCA1MHB4XCIsXG4gICAgW1wiQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KVwiXToge1xuICAgICAgd2lkdGg6IFwiOTUlXCIsXG4gICAgfSxcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgfSxcbn0pKEJveCk7XG5cbmNvbnN0IFRpdGxlQnV0dG9uQ29udGFpbmVyID0gd2l0aFN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBtYXJnaW5MZWZ0OiA1MCxcbiAgfSxcbn0pKEJveCk7XG5cbmNvbnN0IFRpdGxlID0gd2l0aFN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBmb250U2l6ZTogXCIxLjJyZW1cIixcbiAgfSxcbn0pKFR5cG9ncmFwaHkpO1xuXG5jb25zdCBCdXR0b24gPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIG1heFdpZHRoOiA0MDAsXG4gICAgbWFyZ2luVG9wOiAyMCxcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBwYWRkaW5nOiBcIjEwcHggMHB4XCIsXG4gICAgYm9yZGVyUmFkaXVzOiAxMCxcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgYmFja2dyb3VuZDpcbiAgICAgIFwidHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzk5NUZENCAwJSwgIzFGMjkzNTZFIDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveFwiLFxuICB9LFxufSkoQm94KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/Quizzes/Quiz/Quiz.tsx\n");

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/create.js":
false,

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
false,

/***/ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
false,

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
false,

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
false,

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
false,

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
false,

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
false,

/***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
false,

/***/ "./node_modules/core-js/library/fn/object/create.js":
false,

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
false,

/***/ "./node_modules/core-js/library/fn/object/set-prototype-of.js":
false,

/***/ "./node_modules/core-js/library/fn/symbol/index.js":
false,

/***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
false,

/***/ "./node_modules/core-js/library/modules/_a-function.js":
false,

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
false,

/***/ "./node_modules/core-js/library/modules/_an-object.js":
false,

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
false,

/***/ "./node_modules/core-js/library/modules/_cof.js":
false,

/***/ "./node_modules/core-js/library/modules/_core.js":
false,

/***/ "./node_modules/core-js/library/modules/_ctx.js":
false,

/***/ "./node_modules/core-js/library/modules/_defined.js":
false,

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
false,

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
false,

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
false,

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
false,

/***/ "./node_modules/core-js/library/modules/_export.js":
false,

/***/ "./node_modules/core-js/library/modules/_fails.js":
false,

/***/ "./node_modules/core-js/library/modules/_global.js":
false,

/***/ "./node_modules/core-js/library/modules/_has.js":
false,

/***/ "./node_modules/core-js/library/modules/_hide.js":
false,

/***/ "./node_modules/core-js/library/modules/_html.js":
false,

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
false,

/***/ "./node_modules/core-js/library/modules/_iobject.js":
false,

/***/ "./node_modules/core-js/library/modules/_is-array.js":
false,

/***/ "./node_modules/core-js/library/modules/_is-object.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
false,

/***/ "./node_modules/core-js/library/modules/_iterators.js":
false,

/***/ "./node_modules/core-js/library/modules/_library.js":
false,

/***/ "./node_modules/core-js/library/modules/_meta.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-create.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
false,

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
false,

/***/ "./node_modules/core-js/library/modules/_redefine.js":
false,

/***/ "./node_modules/core-js/library/modules/_set-proto.js":
false,

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
false,

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
false,

/***/ "./node_modules/core-js/library/modules/_shared.js":
false,

/***/ "./node_modules/core-js/library/modules/_string-at.js":
false,

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
false,

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
false,

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
false,

/***/ "./node_modules/core-js/library/modules/_to-length.js":
false,

/***/ "./node_modules/core-js/library/modules/_to-object.js":
false,

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
false,

/***/ "./node_modules/core-js/library/modules/_uid.js":
false,

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
false,

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
false,

/***/ "./node_modules/core-js/library/modules/_wks.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.create.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
false,

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
false,

/***/ "./node_modules/react-facebook-share-link/dist/index.js":
false

})