webpackHotUpdate_N_E("pages/blog/posts",{

/***/ "./Components/Topics/Topic/Topic.tsx":
/*!*******************************************!*\
  !*** ./Components/Topics/Topic/Topic.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/Topics/Topic/Topic.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Topic = function Topic(_ref) {\n  _s();\n\n  var topic = _ref.topic,\n      position = _ref.position;\n  var classes = useStyles({\n    position: position\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: classes.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: classes.icon\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      href: \"/blog/topics/\".concat(topic.slug, \"/posts\"),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        style: {\n          textDecoration: \"none\"\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(TopicName, {\n          variant: \"subtitle1\",\n          children: topic.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Topic, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = Topic;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Topic);\nvar colors = [\"#97A5B8\", \"#9C95FD\", \"#F493FF\", \"#28E36E\", \"#FFE533\"];\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])({\n  container: {\n    display: \"flex\",\n    alignItems: \"center\",\n    paddingTop: 15,\n    paddingBottom: 15,\n    fontColor: \"blue\",\n    textTransform: \"capitalize\",\n    marginRight: \"10%\",\n    cursor: \"pointer\",\n    \"&:hover\": {\n      textDecoration: \"underline\"\n    }\n  },\n  icon: {\n    backgroundColor: function backgroundColor(props) {\n      var position = props.position;\n\n      if (position > colors.length) {\n        return colors[position % colors.length];\n      }\n\n      return colors[position];\n    },\n    height: 24,\n    width: 24,\n    borderRadius: \"50%\",\n    marginRight: 15\n  }\n});\nvar TopicName = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"withStyles\"])({\n  root: {\n    color: \"#96A4B7\",\n    fontWeight: 500,\n    cursor: \"pointer\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"]);\n\nvar _c;\n\n$RefreshReg$(_c, \"Topic\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Ub3BpY3MvVG9waWMvVG9waWMudHN4P2RlOWMiXSwibmFtZXMiOlsiVG9waWMiLCJ0b3BpYyIsInBvc2l0aW9uIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsImNvbnRhaW5lciIsImljb24iLCJzbHVnIiwidGV4dERlY29yYXRpb24iLCJuYW1lIiwiY29sb3JzIiwibWFrZVN0eWxlcyIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJmb250Q29sb3IiLCJ0ZXh0VHJhbnNmb3JtIiwibWFyZ2luUmlnaHQiLCJjdXJzb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwcm9wcyIsImxlbmd0aCIsImhlaWdodCIsIndpZHRoIiwiYm9yZGVyUmFkaXVzIiwiVG9waWNOYW1lIiwid2l0aFN0eWxlcyIsInJvb3QiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJUeXBvZ3JhcGh5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTs7QUFPQSxJQUFNQSxLQUF1QixHQUFHLFNBQTFCQSxLQUEwQixPQUF5QjtBQUFBOztBQUFBLE1BQXRCQyxLQUFzQixRQUF0QkEsS0FBc0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDdkQsTUFBTUMsT0FBTyxHQUFHQyxTQUFTLENBQUM7QUFBRUYsWUFBUSxFQUFSQTtBQUFGLEdBQUQsQ0FBekI7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUMsT0FBTyxDQUFDRSxTQUF4QjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFRixPQUFPLENBQUNHO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLHFFQUFDLGdEQUFEO0FBQU0sVUFBSSx5QkFBa0JMLEtBQUssQ0FBQ00sSUFBeEIsV0FBVjtBQUFBLDZCQUNFO0FBQUcsYUFBSyxFQUFFO0FBQUVDLHdCQUFjLEVBQUU7QUFBbEIsU0FBVjtBQUFBLCtCQUNFLHFFQUFDLFNBQUQ7QUFBVyxpQkFBTyxFQUFDLFdBQW5CO0FBQUEsb0JBQWdDUCxLQUFLLENBQUNRO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBVUQsQ0FiRDs7R0FBTVQsSztVQUNZSSxTOzs7S0FEWkosSztBQWVTQSxvRUFBZjtBQUVBLElBQU1VLE1BQWdCLEdBQUcsQ0FDdkIsU0FEdUIsRUFFdkIsU0FGdUIsRUFHdkIsU0FIdUIsRUFJdkIsU0FKdUIsRUFLdkIsU0FMdUIsQ0FBekI7QUFRQSxJQUFNTixTQUFTLEdBQUdPLG9FQUFVLENBQUM7QUFDM0JOLFdBQVMsRUFBRTtBQUNUTyxXQUFPLEVBQUUsTUFEQTtBQUVUQyxjQUFVLEVBQUUsUUFGSDtBQUdUQyxjQUFVLEVBQUUsRUFISDtBQUlUQyxpQkFBYSxFQUFFLEVBSk47QUFLVEMsYUFBUyxFQUFFLE1BTEY7QUFNVEMsaUJBQWEsRUFBRSxZQU5OO0FBT1RDLGVBQVcsRUFBRSxLQVBKO0FBUVRDLFVBQU0sRUFBRSxTQVJDO0FBU1QsZUFBVztBQUNUWCxvQkFBYyxFQUFFO0FBRFA7QUFURixHQURnQjtBQWMzQkYsTUFBSSxFQUFFO0FBQ0pjLG1CQUFlLEVBQUUseUJBQUNDLEtBQUQsRUFBaUM7QUFBQSxVQUN4Q25CLFFBRHdDLEdBQzNCbUIsS0FEMkIsQ0FDeENuQixRQUR3Qzs7QUFFaEQsVUFBSUEsUUFBUSxHQUFHUSxNQUFNLENBQUNZLE1BQXRCLEVBQThCO0FBQzVCLGVBQU9aLE1BQU0sQ0FBQ1IsUUFBUSxHQUFHUSxNQUFNLENBQUNZLE1BQW5CLENBQWI7QUFDRDs7QUFDRCxhQUFPWixNQUFNLENBQUNSLFFBQUQsQ0FBYjtBQUNELEtBUEc7QUFRSnFCLFVBQU0sRUFBRSxFQVJKO0FBU0pDLFNBQUssRUFBRSxFQVRIO0FBVUpDLGdCQUFZLEVBQUUsS0FWVjtBQVdKUCxlQUFXLEVBQUU7QUFYVDtBQWRxQixDQUFELENBQTVCO0FBNkJBLElBQU1RLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQztBQUMzQkMsTUFBSSxFQUFFO0FBQ0pDLFNBQUssRUFBRSxTQURIO0FBRUpDLGNBQVUsRUFBRSxHQUZSO0FBR0pYLFVBQU0sRUFBRTtBQUhKO0FBRHFCLENBQUQsQ0FBVixDQU1mWSw0REFOZSxDQUFsQiIsImZpbGUiOiIuL0NvbXBvbmVudHMvVG9waWNzL1RvcGljL1RvcGljLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VTdHlsZXMsIFR5cG9ncmFwaHksIHdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJVG9waWMgZnJvbSBcIi4uLy4uLy4uL01vZGVscy9JVG9waWNcIjtcblxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgdG9waWM6IElUb3BpYztcbiAgcG9zaXRpb246IG51bWJlcjtcbn1cblxuY29uc3QgVG9waWM6IFJlYWN0LkZDPElQcm9wcz4gPSAoeyB0b3BpYywgcG9zaXRpb24gfSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKHsgcG9zaXRpb24gfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0+PC9kaXY+XG4gICAgICA8TGluayBocmVmPXtgL2Jsb2cvdG9waWNzLyR7dG9waWMuc2x1Z30vcG9zdHNgfT5cbiAgICAgICAgPGEgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH19PlxuICAgICAgICAgIDxUb3BpY05hbWUgdmFyaWFudD1cInN1YnRpdGxlMVwiPnt0b3BpYy5uYW1lfTwvVG9waWNOYW1lPlxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb3BpYztcblxuY29uc3QgY29sb3JzOiBzdHJpbmdbXSA9IFtcbiAgXCIjOTdBNUI4XCIsXG4gIFwiIzlDOTVGRFwiLFxuICBcIiNGNDkzRkZcIixcbiAgXCIjMjhFMzZFXCIsXG4gIFwiI0ZGRTUzM1wiLFxuXTtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIGNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgcGFkZGluZ1RvcDogMTUsXG4gICAgcGFkZGluZ0JvdHRvbTogMTUsXG4gICAgZm9udENvbG9yOiBcImJsdWVcIixcbiAgICB0ZXh0VHJhbnNmb3JtOiBcImNhcGl0YWxpemVcIixcbiAgICBtYXJnaW5SaWdodDogXCIxMCVcIixcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICB0ZXh0RGVjb3JhdGlvbjogXCJ1bmRlcmxpbmVcIixcbiAgICB9LFxuICB9LFxuICBpY29uOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAocHJvcHM6IHsgcG9zaXRpb246IG51bWJlciB9KSA9PiB7XG4gICAgICBjb25zdCB7IHBvc2l0aW9uIH0gPSBwcm9wcztcbiAgICAgIGlmIChwb3NpdGlvbiA+IGNvbG9ycy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGNvbG9yc1twb3NpdGlvbiAlIGNvbG9ycy5sZW5ndGhdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbG9yc1twb3NpdGlvbl07XG4gICAgfSxcbiAgICBoZWlnaHQ6IDI0LFxuICAgIHdpZHRoOiAyNCxcbiAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG4gICAgbWFyZ2luUmlnaHQ6IDE1LFxuICB9LFxufSk7XG5cbmNvbnN0IFRvcGljTmFtZSA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgY29sb3I6IFwiIzk2QTRCN1wiLFxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICB9LFxufSkoVHlwb2dyYXBoeSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/Topics/Topic/Topic.tsx\n");

/***/ })

})