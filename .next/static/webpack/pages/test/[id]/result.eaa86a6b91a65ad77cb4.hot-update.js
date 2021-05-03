webpackHotUpdate_N_E("pages/test/[id]/result",{

/***/ "./Components/QuizTestResult/TestInfo/TestInfo.tsx":
/*!*********************************************************!*\
  !*** ./Components/QuizTestResult/TestInfo/TestInfo.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TestInfo; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/QuizTestResult/TestInfo/TestInfo.tsx\";\n\nfunction TestInfo(_ref) {\n  var _test$questions, _test$questions$corre;\n\n  var test = _ref.test,\n      quiz = _ref.quiz;\n  var assessmentOrQuiz = (quiz === null || quiz === void 0 ? void 0 : quiz.is_assessment) ? \"assessment\" : \"quiz\";\n  var passedText = \"Congratulations! You have passed the quiz on\\n  \\u2018\\u2019. Do remember to share your badge on social\\n  media for personal branding.\"; // const passedText = `Congratulations! You have passed the ${assessmentOrQuiz} on\n  // ‘${quiz?.title}’.`;\n\n  var failedText = \"Thank you for participating in the quiz on\\n  \\u2018\".concat(quiz === null || quiz === void 0 ? void 0 : quiz.title, \"\\u2019! Please retake the quiz and try to get your\\n  badge by scoring more than \").concat(quiz === null || quiz === void 0 ? void 0 : quiz.passing_percentage, \"% marks.\");\n\n  var handleClick = function handleClick() {\n    window.location.href = \"/test/quiz/\".concat(quiz === null || quiz === void 0 ? void 0 : quiz.id);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Title, {\n      variant: \"h5\",\n      children: \"\".concat(quiz === null || quiz === void 0 ? void 0 : quiz.title, \" \").concat(assessmentOrQuiz)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Divider, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ScoreContainer, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n        variant: \"subtitle1\",\n        children: [\"Score: \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n          children: \"\".concat(test === null || test === void 0 ? void 0 : test.percentage, \"%\")\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 18\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n        variant: \"subtitle1\",\n        children: [\"Total Questions: \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n          children: \"\".concat(quiz === null || quiz === void 0 ? void 0 : quiz.total_questions_count)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 28\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n        variant: \"subtitle1\",\n        children: [\"Right Answers:\", \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n          children: \"\".concat(test === null || test === void 0 ? void 0 : (_test$questions = test.questions) === null || _test$questions === void 0 ? void 0 : (_test$questions$corre = _test$questions.correct_questions) === null || _test$questions$corre === void 0 ? void 0 : _test$questions$corre.length)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(HasPassedText, {\n      variant: \"subtitle1\",\n      children: (test === null || test === void 0 ? void 0 : test.has_passed) ? passedText : failedText\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(RetakeButton, {\n      onClick: handleClick,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(RetakeButtonText, {\n        children: \"Retake\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, this);\n}\n_c = TestInfo;\nvar Container = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    width: \"100%\",\n    border: \"1px solid #e6e6e4\",\n    borderRadius: \"7px 7px 0px 0px\",\n    backgroundColor: \"white\",\n    display: \"flex\",\n    flexDirection: \"column\",\n    alignItems: \"center\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\nvar Title = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    padding: \"0.7rem\",\n    textTransform: \"capitalize\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"]);\nvar Divider = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    width: \"100%\",\n    height: 2,\n    backgroundColor: \"#e6e6e4\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\nvar HasPassedText = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    fontWeight: 500,\n    margin: \"1rem 0\",\n    textAlign: \"center\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"]);\nvar ScoreContainer = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    display: \"flex\",\n    flexDirection: \"column\",\n    alignItems: \"center\",\n    justifyContent: \"center\",\n    margin: \"1rem 0\",\n    padding: \"1rem\",\n    border: \"1px solid lightgray\",\n    borderRadius: 7,\n    width: \"min(600px, 97%)\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\nvar RetakeButton = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    \"float\": \"right\",\n    margin: \"0rem 0.5rem 0.5rem auto\",\n    right: 10,\n    color: \"white\",\n    backgroundColor: \"#0e62cb\",\n    padding: \"0.4rem 1rem\",\n    cursor: \"pointer\",\n    \"&:hover\": {\n      backgroundColor: \"#09448e\"\n    }\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"]);\nvar RetakeButtonText = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    fontWeight: 600,\n    textTransform: \"capitalize\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"]);\n\nvar _c;\n\n$RefreshReg$(_c, \"TestInfo\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9RdWl6VGVzdFJlc3VsdC9UZXN0SW5mby9UZXN0SW5mby50c3g/MmI4NiJdLCJuYW1lcyI6WyJUZXN0SW5mbyIsInRlc3QiLCJxdWl6IiwiYXNzZXNzbWVudE9yUXVpeiIsImlzX2Fzc2Vzc21lbnQiLCJwYXNzZWRUZXh0IiwiZmFpbGVkVGV4dCIsInRpdGxlIiwicGFzc2luZ19wZXJjZW50YWdlIiwiaGFuZGxlQ2xpY2siLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJpZCIsInBlcmNlbnRhZ2UiLCJ0b3RhbF9xdWVzdGlvbnNfY291bnQiLCJxdWVzdGlvbnMiLCJjb3JyZWN0X3F1ZXN0aW9ucyIsImxlbmd0aCIsImhhc19wYXNzZWQiLCJDb250YWluZXIiLCJ3aXRoU3R5bGVzIiwicm9vdCIsIndpZHRoIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwiQm94IiwiVGl0bGUiLCJwYWRkaW5nIiwidGV4dFRyYW5zZm9ybSIsIlR5cG9ncmFwaHkiLCJEaXZpZGVyIiwiaGVpZ2h0IiwiSGFzUGFzc2VkVGV4dCIsImZvbnRXZWlnaHQiLCJtYXJnaW4iLCJ0ZXh0QWxpZ24iLCJTY29yZUNvbnRhaW5lciIsImp1c3RpZnlDb250ZW50IiwiUmV0YWtlQnV0dG9uIiwicmlnaHQiLCJjb2xvciIsImN1cnNvciIsIlJldGFrZUJ1dHRvblRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQVNlLFNBQVNBLFFBQVQsT0FBMEM7QUFBQTs7QUFBQSxNQUF0QkMsSUFBc0IsUUFBdEJBLElBQXNCO0FBQUEsTUFBaEJDLElBQWdCLFFBQWhCQSxJQUFnQjtBQUN2RCxNQUFNQyxnQkFBZ0IsR0FBRyxDQUFBRCxJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRUUsYUFBTixJQUFzQixZQUF0QixHQUFxQyxNQUE5RDtBQUVBLE1BQU1DLFVBQVUsNElBQWhCLENBSHVELENBT3ZEO0FBQ0E7O0FBRUEsTUFBTUMsVUFBVSxpRUFDYkosSUFEYSxhQUNiQSxJQURhLHVCQUNiQSxJQUFJLENBQUVLLEtBRE8sOEZBRWFMLElBRmIsYUFFYUEsSUFGYix1QkFFYUEsSUFBSSxDQUFFTSxrQkFGbkIsYUFBaEI7O0FBSUEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QkMsVUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQix3QkFBcUNWLElBQXJDLGFBQXFDQSxJQUFyQyx1QkFBcUNBLElBQUksQ0FBRVcsRUFBM0M7QUFDRCxHQUZEOztBQUlBLHNCQUNFLHFFQUFDLFNBQUQ7QUFBQSw0QkFDRSxxRUFBQyxLQUFEO0FBQU8sYUFBTyxFQUFDLElBQWY7QUFBQSwwQkFBd0JYLElBQXhCLGFBQXdCQSxJQUF4Qix1QkFBd0JBLElBQUksQ0FBRUssS0FBOUIsY0FBdUNKLGdCQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLHFFQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0UscUVBQUMsY0FBRDtBQUFBLDhCQUNFLHFFQUFDLDREQUFEO0FBQVksZUFBTyxFQUFDLFdBQXBCO0FBQUEsMkNBQ1M7QUFBQSw4QkFBT0YsSUFBUCxhQUFPQSxJQUFQLHVCQUFPQSxJQUFJLENBQUVhLFVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUUscUVBQUMsNERBQUQ7QUFBWSxlQUFPLEVBQUMsV0FBcEI7QUFBQSxxREFDbUI7QUFBQSw4QkFBT1osSUFBUCxhQUFPQSxJQUFQLHVCQUFPQSxJQUFJLENBQUVhLHFCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUFPRSxxRUFBQyw0REFBRDtBQUFZLGVBQU8sRUFBQyxXQUFwQjtBQUFBLHFDQUNpQixHQURqQixlQUVFO0FBQUEsOEJBQU9kLElBQVAsYUFBT0EsSUFBUCwwQ0FBT0EsSUFBSSxDQUFFZSxTQUFiLDZFQUFPLGdCQUFpQkMsaUJBQXhCLDBEQUFPLHNCQUFvQ0MsTUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBZUUscUVBQUMsYUFBRDtBQUFlLGFBQU8sRUFBQyxXQUF2QjtBQUFBLGdCQUNHLENBQUFqQixJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRWtCLFVBQU4sSUFBbUJkLFVBQW5CLEdBQWdDQztBQURuQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZkYsZUFrQkUscUVBQUMsWUFBRDtBQUFjLGFBQU8sRUFBRUcsV0FBdkI7QUFBQSw2QkFDRSxxRUFBQyxnQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF3QkQ7S0ExQ3VCVCxRO0FBNEN4QixJQUFNb0IsU0FBUyxHQUFHQyxvRUFBVSxDQUFDO0FBQzNCQyxNQUFJLEVBQUU7QUFDSkMsU0FBSyxFQUFFLE1BREg7QUFFSkMsVUFBTSxFQUFFLG1CQUZKO0FBR0pDLGdCQUFZLEVBQUUsaUJBSFY7QUFJSkMsbUJBQWUsRUFBRSxPQUpiO0FBS0pDLFdBQU8sRUFBRSxNQUxMO0FBTUpDLGlCQUFhLEVBQUUsUUFOWDtBQU9KQyxjQUFVLEVBQUU7QUFQUjtBQURxQixDQUFELENBQVYsQ0FVZkMscURBVmUsQ0FBbEI7QUFZQSxJQUFNQyxLQUFLLEdBQUdWLG9FQUFVLENBQUM7QUFDdkJDLE1BQUksRUFBRTtBQUNKVSxXQUFPLEVBQUUsUUFETDtBQUVKQyxpQkFBYSxFQUFFO0FBRlg7QUFEaUIsQ0FBRCxDQUFWLENBS1hDLDREQUxXLENBQWQ7QUFPQSxJQUFNQyxPQUFPLEdBQUdkLG9FQUFVLENBQUM7QUFDekJDLE1BQUksRUFBRTtBQUNKQyxTQUFLLEVBQUUsTUFESDtBQUVKYSxVQUFNLEVBQUUsQ0FGSjtBQUdKVixtQkFBZSxFQUFFO0FBSGI7QUFEbUIsQ0FBRCxDQUFWLENBTWJJLHFEQU5hLENBQWhCO0FBUUEsSUFBTU8sYUFBYSxHQUFHaEIsb0VBQVUsQ0FBQztBQUMvQkMsTUFBSSxFQUFFO0FBQ0pnQixjQUFVLEVBQUUsR0FEUjtBQUVKQyxVQUFNLEVBQUUsUUFGSjtBQUdKQyxhQUFTLEVBQUU7QUFIUDtBQUR5QixDQUFELENBQVYsQ0FNbkJOLDREQU5tQixDQUF0QjtBQVFBLElBQU1PLGNBQWMsR0FBR3BCLG9FQUFVLENBQUM7QUFDaENDLE1BQUksRUFBRTtBQUNKSyxXQUFPLEVBQUUsTUFETDtBQUVKQyxpQkFBYSxFQUFFLFFBRlg7QUFHSkMsY0FBVSxFQUFFLFFBSFI7QUFJSmEsa0JBQWMsRUFBRSxRQUpaO0FBS0pILFVBQU0sRUFBRSxRQUxKO0FBTUpQLFdBQU8sRUFBRSxNQU5MO0FBT0pSLFVBQU0sRUFBRSxxQkFQSjtBQVFKQyxnQkFBWSxFQUFFLENBUlY7QUFTSkYsU0FBSyxFQUFFO0FBVEg7QUFEMEIsQ0FBRCxDQUFWLENBWXBCTyxxREFab0IsQ0FBdkI7QUFjQSxJQUFNYSxZQUFZLEdBQUd0QixvRUFBVSxDQUFDO0FBQzlCQyxNQUFJLEVBQUU7QUFDSixhQUFPLE9BREg7QUFFSmlCLFVBQU0sRUFBRSx5QkFGSjtBQUdKSyxTQUFLLEVBQUUsRUFISDtBQUlKQyxTQUFLLEVBQUUsT0FKSDtBQUtKbkIsbUJBQWUsRUFBRSxTQUxiO0FBTUpNLFdBQU8sRUFBRSxhQU5MO0FBT0pjLFVBQU0sRUFBRSxTQVBKO0FBUUosZUFBVztBQUNUcEIscUJBQWUsRUFBRTtBQURSO0FBUlA7QUFEd0IsQ0FBRCxDQUFWLENBYWxCSSxxREFia0IsQ0FBckI7QUFlQSxJQUFNaUIsZ0JBQWdCLEdBQUcxQixvRUFBVSxDQUFDO0FBQ2xDQyxNQUFJLEVBQUU7QUFDSmdCLGNBQVUsRUFBRSxHQURSO0FBRUpMLGlCQUFhLEVBQUU7QUFGWDtBQUQ0QixDQUFELENBQVYsQ0FLdEJDLDREQUxzQixDQUF6QiIsImZpbGUiOiIuL0NvbXBvbmVudHMvUXVpelRlc3RSZXN1bHQvVGVzdEluZm8vVGVzdEluZm8udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBUeXBvZ3JhcGh5LCB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgSVF1aXogZnJvbSBcIi4uLy4uLy4uL01vZGVscy9JUXVpelwiO1xuaW1wb3J0IElUZXN0IGZyb20gXCIuLi8uLi8uLi9Nb2RlbHMvSVRlc3RcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHRlc3Q6IElUZXN0O1xuICBxdWl6OiBJUXVpejtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVzdEluZm8oeyB0ZXN0LCBxdWl6IH06IElQcm9wcykge1xuICBjb25zdCBhc3Nlc3NtZW50T3JRdWl6ID0gcXVpej8uaXNfYXNzZXNzbWVudCA/IFwiYXNzZXNzbWVudFwiIDogXCJxdWl6XCI7XG5cbiAgY29uc3QgcGFzc2VkVGV4dCA9IGBDb25ncmF0dWxhdGlvbnMhIFlvdSBoYXZlIHBhc3NlZCB0aGUgcXVpeiBvblxuICDigJjigJkuIERvIHJlbWVtYmVyIHRvIHNoYXJlIHlvdXIgYmFkZ2Ugb24gc29jaWFsXG4gIG1lZGlhIGZvciBwZXJzb25hbCBicmFuZGluZy5gO1xuXG4gIC8vIGNvbnN0IHBhc3NlZFRleHQgPSBgQ29uZ3JhdHVsYXRpb25zISBZb3UgaGF2ZSBwYXNzZWQgdGhlICR7YXNzZXNzbWVudE9yUXVpen0gb25cbiAgLy8g4oCYJHtxdWl6Py50aXRsZX3igJkuYDtcblxuICBjb25zdCBmYWlsZWRUZXh0ID0gYFRoYW5rIHlvdSBmb3IgcGFydGljaXBhdGluZyBpbiB0aGUgcXVpeiBvblxuICDigJgke3F1aXo/LnRpdGxlfeKAmSEgUGxlYXNlIHJldGFrZSB0aGUgcXVpeiBhbmQgdHJ5IHRvIGdldCB5b3VyXG4gIGJhZGdlIGJ5IHNjb3JpbmcgbW9yZSB0aGFuICR7cXVpej8ucGFzc2luZ19wZXJjZW50YWdlfSUgbWFya3MuYDtcblxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAvdGVzdC9xdWl6LyR7cXVpej8uaWR9YDtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8VGl0bGUgdmFyaWFudD1cImg1XCI+e2Ake3F1aXo/LnRpdGxlfSAke2Fzc2Vzc21lbnRPclF1aXp9YH08L1RpdGxlPlxuICAgICAgPERpdmlkZXIgLz5cbiAgICAgIDxTY29yZUNvbnRhaW5lcj5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiPlxuICAgICAgICAgIFNjb3JlOiA8Yj57YCR7dGVzdD8ucGVyY2VudGFnZX0lYH08L2I+XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiPlxuICAgICAgICAgIFRvdGFsIFF1ZXN0aW9uczogPGI+e2Ake3F1aXo/LnRvdGFsX3F1ZXN0aW9uc19jb3VudH1gfTwvYj5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCI+XG4gICAgICAgICAgUmlnaHQgQW5zd2Vyczp7XCIgXCJ9XG4gICAgICAgICAgPGI+e2Ake3Rlc3Q/LnF1ZXN0aW9ucz8uY29ycmVjdF9xdWVzdGlvbnM/Lmxlbmd0aH1gfTwvYj5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9TY29yZUNvbnRhaW5lcj5cbiAgICAgIDxIYXNQYXNzZWRUZXh0IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIj5cbiAgICAgICAge3Rlc3Q/Lmhhc19wYXNzZWQgPyBwYXNzZWRUZXh0IDogZmFpbGVkVGV4dH1cbiAgICAgIDwvSGFzUGFzc2VkVGV4dD5cbiAgICAgIDxSZXRha2VCdXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgICAgICA8UmV0YWtlQnV0dG9uVGV4dD5SZXRha2U8L1JldGFrZUJ1dHRvblRleHQ+XG4gICAgICA8L1JldGFrZUJ1dHRvbj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cblxuY29uc3QgQ29udGFpbmVyID0gd2l0aFN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjZTZlNmU0XCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjdweCA3cHggMHB4IDBweFwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgfSxcbn0pKEJveCk7XG5cbmNvbnN0IFRpdGxlID0gd2l0aFN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBwYWRkaW5nOiBcIjAuN3JlbVwiLFxuICAgIHRleHRUcmFuc2Zvcm06IFwiY2FwaXRhbGl6ZVwiLFxuICB9LFxufSkoVHlwb2dyYXBoeSk7XG5cbmNvbnN0IERpdmlkZXIgPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBoZWlnaHQ6IDIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNlNmU2ZTRcIixcbiAgfSxcbn0pKEJveCk7XG5cbmNvbnN0IEhhc1Bhc3NlZFRleHQgPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICBtYXJnaW46IFwiMXJlbSAwXCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICB9LFxufSkoVHlwb2dyYXBoeSk7XG5cbmNvbnN0IFNjb3JlQ29udGFpbmVyID0gd2l0aFN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgbWFyZ2luOiBcIjFyZW0gMFwiLFxuICAgIHBhZGRpbmc6IFwiMXJlbVwiLFxuICAgIGJvcmRlcjogXCIxcHggc29saWQgbGlnaHRncmF5XCIsXG4gICAgYm9yZGVyUmFkaXVzOiA3LFxuICAgIHdpZHRoOiBcIm1pbig2MDBweCwgOTclKVwiLFxuICB9LFxufSkoQm94KTtcblxuY29uc3QgUmV0YWtlQnV0dG9uID0gd2l0aFN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBmbG9hdDogXCJyaWdodFwiLFxuICAgIG1hcmdpbjogXCIwcmVtIDAuNXJlbSAwLjVyZW0gYXV0b1wiLFxuICAgIHJpZ2h0OiAxMCxcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjMGU2MmNiXCIsXG4gICAgcGFkZGluZzogXCIwLjRyZW0gMXJlbVwiLFxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDk0NDhlXCIsXG4gICAgfSxcbiAgfSxcbn0pKEJveCk7XG5cbmNvbnN0IFJldGFrZUJ1dHRvblRleHQgPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICB0ZXh0VHJhbnNmb3JtOiBcImNhcGl0YWxpemVcIixcbiAgfSxcbn0pKFR5cG9ncmFwaHkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/QuizTestResult/TestInfo/TestInfo.tsx\n");

/***/ })

})