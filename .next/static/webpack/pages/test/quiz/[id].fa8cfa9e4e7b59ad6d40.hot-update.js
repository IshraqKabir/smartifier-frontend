webpackHotUpdate_N_E("pages/test/quiz/[id]",{

/***/ "./Components/QuizTest/Questions/SingleQuestion/Question/Question.tsx":
/*!****************************************************************************!*\
  !*** ./Components/QuizTest/Questions/SingleQuestion/Question/Question.tsx ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Question; });\n/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../url */ \"./url.js\");\n/* harmony import */ var _SingleQuestion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SingleQuestion */ \"./Components/QuizTest/Questions/SingleQuestion/SingleQuestion.tsx\");\n/* harmony import */ var _Options_Options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Options/Options */ \"./Components/QuizTest/Questions/SingleQuestion/Question/Options/Options.tsx\");\n\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/QuizTest/Questions/SingleQuestion/Question/Question.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Question(_ref) {\n  _s();\n\n  var _question$image, _question$image2;\n\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref);\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useContext\"])(_SingleQuestion__WEBPACK_IMPORTED_MODULE_5__[\"QuestionContext\"]),\n      question = _useContext.question;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Container, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(QuestionContainer, {\n      children: [(question === null || question === void 0 ? void 0 : question.question) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(QuestionTitleContainer, {\n        children: [(question === null || question === void 0 ? void 0 : question.answer_type) == \"checkboxes\" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(QuestionTitle, {\n          variant: \"caption\",\n          children: \"*Multiple Answers May Be Correct.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 15\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(QuestionTitle, {\n          variant: \"subtitle1\",\n          children: \"Q. \".concat(question === null || question === void 0 ? void 0 : question.question)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 11\n      }, this), (question === null || question === void 0 ? void 0 : (_question$image = question.image) === null || _question$image === void 0 ? void 0 : _question$image.image_link) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Avatar\"], {\n        src: \"\".concat(_url__WEBPACK_IMPORTED_MODULE_4__[\"backend_url\"], \"/storage/\").concat(question === null || question === void 0 ? void 0 : (_question$image2 = question.image) === null || _question$image2 === void 0 ? void 0 : _question$image2.image_link),\n        variant: \"square\",\n        style: {\n          height: 200,\n          width: 200,\n          margin: \"0.2rem 0\"\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 11\n      }, this), (question === null || question === void 0 ? void 0 : question.options) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Options_Options__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 31\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Question, \"ufudCmQtCXPPM2sPfHbjInvAJtw=\");\n\n_c = Question;\nvar Container = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])({\n  root: {\n    width: \"100%\",\n    height: \"50vh\",\n    overflowY: \"scroll\",\n    overflowX: \"hidden\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"]);\nvar QuestionTitle = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])({\n  root: {\n    fontWeight: 600,\n    padding: \"0 0.5rem\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"]);\nvar QuestionTitleContainer = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])({\n  root: {\n    display: \"flex\",\n    flexDirection: \"column\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"]);\nvar QuestionContainer = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"withStyles\"])({\n  root: {\n    display: \"flex\",\n    flexDirection: \"column\",\n    alignItems: \"center\",\n    justifyContent: \"center\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"]);\n\nvar _c;\n\n$RefreshReg$(_c, \"Question\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9RdWl6VGVzdC9RdWVzdGlvbnMvU2luZ2xlUXVlc3Rpb24vUXVlc3Rpb24vUXVlc3Rpb24udHN4PzFiNzUiXSwibmFtZXMiOlsiUXVlc3Rpb24iLCJ1c2VDb250ZXh0IiwiUXVlc3Rpb25Db250ZXh0IiwicXVlc3Rpb24iLCJhbnN3ZXJfdHlwZSIsImltYWdlIiwiaW1hZ2VfbGluayIsImJhY2tlbmRfdXJsIiwiaGVpZ2h0Iiwid2lkdGgiLCJtYXJnaW4iLCJvcHRpb25zIiwiQ29udGFpbmVyIiwid2l0aFN0eWxlcyIsInJvb3QiLCJvdmVyZmxvd1kiLCJvdmVyZmxvd1giLCJCb3giLCJRdWVzdGlvblRpdGxlIiwiZm9udFdlaWdodCIsInBhZGRpbmciLCJUeXBvZ3JhcGh5IiwiUXVlc3Rpb25UaXRsZUNvbnRhaW5lciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiUXVlc3Rpb25Db250YWluZXIiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUllLFNBQVNBLFFBQVQsT0FBOEI7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSxvQkFDdEJDLHdEQUFVLENBQUNDLCtEQUFELENBRFk7QUFBQSxNQUNuQ0MsUUFEbUMsZUFDbkNBLFFBRG1DOztBQUczQyxzQkFDRSxxRUFBQyxTQUFEO0FBQUEsMkJBQ0UscUVBQUMsaUJBQUQ7QUFBQSxpQkFDRyxDQUFBQSxRQUFRLFNBQVIsSUFBQUEsUUFBUSxXQUFSLFlBQUFBLFFBQVEsQ0FBRUEsUUFBVixrQkFDQyxxRUFBQyxzQkFBRDtBQUFBLG1CQUNHLENBQUFBLFFBQVEsU0FBUixJQUFBQSxRQUFRLFdBQVIsWUFBQUEsUUFBUSxDQUFFQyxXQUFWLEtBQXlCLFlBQXpCLGlCQUNDLHFFQUFDLGFBQUQ7QUFBZSxpQkFBTyxFQUFDLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBTUUscUVBQUMsYUFBRDtBQUFlLGlCQUFPLEVBQUMsV0FBdkI7QUFBQSxpQ0FDU0QsUUFEVCxhQUNTQSxRQURULHVCQUNTQSxRQUFRLENBQUVBLFFBRG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixFQWFHLENBQUFBLFFBQVEsU0FBUixJQUFBQSxRQUFRLFdBQVIsK0JBQUFBLFFBQVEsQ0FBRUUsS0FBVixvRUFBaUJDLFVBQWpCLGtCQUNDLHFFQUFDLHdEQUFEO0FBQ0UsV0FBRyxZQUFLQyxnREFBTCxzQkFBNEJKLFFBQTVCLGFBQTRCQSxRQUE1QiwyQ0FBNEJBLFFBQVEsQ0FBRUUsS0FBdEMscURBQTRCLGlCQUFpQkMsVUFBN0MsQ0FETDtBQUVFLGVBQU8sRUFBQyxRQUZWO0FBR0UsYUFBSyxFQUFFO0FBQUVFLGdCQUFNLEVBQUUsR0FBVjtBQUFlQyxlQUFLLEVBQUUsR0FBdEI7QUFBMkJDLGdCQUFNLEVBQUU7QUFBbkM7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZEosRUFvQkcsQ0FBQVAsUUFBUSxTQUFSLElBQUFBLFFBQVEsV0FBUixZQUFBQSxRQUFRLENBQUVRLE9BQVYsa0JBQXFCLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FwQnhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBCRDs7R0E3QnVCWCxROztLQUFBQSxRO0FBK0J4QixJQUFNWSxTQUFTLEdBQUdDLG9FQUFVLENBQUM7QUFDM0JDLE1BQUksRUFBRTtBQUNKTCxTQUFLLEVBQUUsTUFESDtBQUVKRCxVQUFNLEVBQUUsTUFGSjtBQUdKTyxhQUFTLEVBQUUsUUFIUDtBQUlKQyxhQUFTLEVBQUU7QUFKUDtBQURxQixDQUFELENBQVYsQ0FPZkMscURBUGUsQ0FBbEI7QUFTQSxJQUFNQyxhQUFhLEdBQUdMLG9FQUFVLENBQUM7QUFDL0JDLE1BQUksRUFBRTtBQUNKSyxjQUFVLEVBQUUsR0FEUjtBQUVKQyxXQUFPLEVBQUU7QUFGTDtBQUR5QixDQUFELENBQVYsQ0FLbkJDLDREQUxtQixDQUF0QjtBQU9BLElBQU1DLHNCQUFzQixHQUFHVCxvRUFBVSxDQUFDO0FBQ3hDQyxNQUFJLEVBQUU7QUFDSlMsV0FBTyxFQUFFLE1BREw7QUFFSkMsaUJBQWEsRUFBRTtBQUZYO0FBRGtDLENBQUQsQ0FBVixDQUs1QlAscURBTDRCLENBQS9CO0FBT0EsSUFBTVEsaUJBQWlCLEdBQUdaLG9FQUFVLENBQUM7QUFDbkNDLE1BQUksRUFBRTtBQUNKUyxXQUFPLEVBQUUsTUFETDtBQUVKQyxpQkFBYSxFQUFFLFFBRlg7QUFHSkUsY0FBVSxFQUFFLFFBSFI7QUFJSkMsa0JBQWMsRUFBRTtBQUpaO0FBRDZCLENBQUQsQ0FBVixDQU92QlYscURBUHVCLENBQTFCIiwiZmlsZSI6Ii4vQ29tcG9uZW50cy9RdWl6VGVzdC9RdWVzdGlvbnMvU2luZ2xlUXVlc3Rpb24vUXVlc3Rpb24vUXVlc3Rpb24udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXZhdGFyLCBCb3gsIFR5cG9ncmFwaHksIHdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBiYWNrZW5kX3VybCB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi91cmxcIjtcbmltcG9ydCB7IFF1ZXN0aW9uQ29udGV4dCB9IGZyb20gXCIuLi9TaW5nbGVRdWVzdGlvblwiO1xuaW1wb3J0IE9wdGlvbnMgZnJvbSBcIi4vT3B0aW9ucy9PcHRpb25zXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge31cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVlc3Rpb24oe306IElQcm9wcykge1xuICBjb25zdCB7IHF1ZXN0aW9uIH0gPSB1c2VDb250ZXh0KFF1ZXN0aW9uQ29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFF1ZXN0aW9uQ29udGFpbmVyPlxuICAgICAgICB7cXVlc3Rpb24/LnF1ZXN0aW9uICYmIChcbiAgICAgICAgICA8UXVlc3Rpb25UaXRsZUNvbnRhaW5lcj5cbiAgICAgICAgICAgIHtxdWVzdGlvbj8uYW5zd2VyX3R5cGUgPT0gXCJjaGVja2JveGVzXCIgJiYgKFxuICAgICAgICAgICAgICA8UXVlc3Rpb25UaXRsZSB2YXJpYW50PVwiY2FwdGlvblwiPlxuICAgICAgICAgICAgICAgICpNdWx0aXBsZSBBbnN3ZXJzIE1heSBCZSBDb3JyZWN0LlxuICAgICAgICAgICAgICA8L1F1ZXN0aW9uVGl0bGU+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPFF1ZXN0aW9uVGl0bGUgdmFyaWFudD1cInN1YnRpdGxlMVwiPlxuICAgICAgICAgICAgICB7YFEuICR7cXVlc3Rpb24/LnF1ZXN0aW9ufWB9XG4gICAgICAgICAgICA8L1F1ZXN0aW9uVGl0bGU+XG4gICAgICAgICAgPC9RdWVzdGlvblRpdGxlQ29udGFpbmVyPlxuICAgICAgICApfVxuICAgICAgICB7cXVlc3Rpb24/LmltYWdlPy5pbWFnZV9saW5rICYmIChcbiAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICBzcmM9e2Ake2JhY2tlbmRfdXJsfS9zdG9yYWdlLyR7cXVlc3Rpb24/LmltYWdlPy5pbWFnZV9saW5rfWB9XG4gICAgICAgICAgICB2YXJpYW50PVwic3F1YXJlXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogMjAwLCB3aWR0aDogMjAwLCBtYXJnaW46IFwiMC4ycmVtIDBcIiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHtxdWVzdGlvbj8ub3B0aW9ucyAmJiA8T3B0aW9ucyAvPn1cbiAgICAgIDwvUXVlc3Rpb25Db250YWluZXI+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbmNvbnN0IENvbnRhaW5lciA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIGhlaWdodDogXCI1MHZoXCIsXG4gICAgb3ZlcmZsb3dZOiBcInNjcm9sbFwiLFxuICAgIG92ZXJmbG93WDogXCJoaWRkZW5cIixcbiAgfSxcbn0pKEJveCk7XG5cbmNvbnN0IFF1ZXN0aW9uVGl0bGUgPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICBwYWRkaW5nOiBcIjAgMC41cmVtXCIsXG4gIH0sXG59KShUeXBvZ3JhcGh5KTtcblxuY29uc3QgUXVlc3Rpb25UaXRsZUNvbnRhaW5lciA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgfSxcbn0pKEJveCk7XG5cbmNvbnN0IFF1ZXN0aW9uQ29udGFpbmVyID0gd2l0aFN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gIH0sXG59KShCb3gpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/QuizTest/Questions/SingleQuestion/Question/Question.tsx\n");

/***/ })

})