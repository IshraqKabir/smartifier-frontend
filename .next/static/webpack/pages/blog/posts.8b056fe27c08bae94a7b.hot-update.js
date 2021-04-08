webpackHotUpdate_N_E("pages/blog/posts",{

/***/ "./Components/Layout/Topbar/NavItems/NavItem/NavItem.tsx":
/*!***************************************************************!*\
  !*** ./Components/Layout/Topbar/NavItems/NavItem/NavItem.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/Components/Layout/Topbar/NavItems/NavItem/NavItem.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])({\n  root: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    color: \"white\",\n    fontSize: \"small\",\n    textTransform: \"capitalize\",\n    cursor: \"pointer\",\n    \"&:hover\": {\n      transition: \"0.3s\",\n      fontSize: 16\n    }\n  }, \"@media (max-width: 700px)\", {\n    marginRight: \"1rem\"\n  })\n});\n\nvar NavItem = function NavItem(_ref) {\n  _s();\n\n  var title = _ref.title,\n      link = _ref.link,\n      setShowLoading = _ref.setShowLoading;\n  var classes = useStyles();\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n\n  var handleClick = function handleClick() {\n    if (router.pathname !== link) setShowLoading(true);\n    router.push(\"\".concat(link));\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: classes.root,\n    onClick: handleClick,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      href: \"\".concat(link),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(NavItem, \"y+nxznVgQ96pr4dCg1EC6WdujUg=\", false, function () {\n  return [useStyles, next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = NavItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavItem);\n\nvar _c;\n\n$RefreshReg$(_c, \"NavItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9MYXlvdXQvVG9wYmFyL05hdkl0ZW1zL05hdkl0ZW0vTmF2SXRlbS50c3g/NTg3MiJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsImNvbG9yIiwiZm9udFNpemUiLCJ0ZXh0VHJhbnNmb3JtIiwiY3Vyc29yIiwidHJhbnNpdGlvbiIsIm1hcmdpblJpZ2h0IiwiTmF2SXRlbSIsInRpdGxlIiwibGluayIsInNldFNob3dMb2FkaW5nIiwiY2xhc3NlcyIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZUNsaWNrIiwicGF0aG5hbWUiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQVFBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQztBQUMzQkMsTUFBSSxFQUFFO0FBQ0pDLFNBQUssRUFBRSxPQURMO0FBRUZDLFlBQVEsRUFBRSxPQUZSO0FBR0ZDLGlCQUFhLEVBQUUsWUFIYjtBQUlGQyxVQUFNLEVBQUUsU0FKTjtBQUtGLGVBQVc7QUFDVEMsZ0JBQVUsRUFBRSxNQURIO0FBRVRILGNBQVEsRUFBRTtBQUZEO0FBTFQsS0FTRCwyQkFUQyxFQVM2QjtBQUM3QkksZUFBVyxFQUFFO0FBRGdCLEdBVDdCO0FBRHVCLENBQUQsQ0FBNUI7O0FBZ0JBLElBQU1DLE9BQXlCLEdBQUcsU0FBNUJBLE9BQTRCLE9BQXFDO0FBQUE7O0FBQUEsTUFBbENDLEtBQWtDLFFBQWxDQSxLQUFrQztBQUFBLE1BQTNCQyxJQUEyQixRQUEzQkEsSUFBMkI7QUFBQSxNQUFyQkMsY0FBcUIsUUFBckJBLGNBQXFCO0FBQ3JFLE1BQU1DLE9BQU8sR0FBR2IsU0FBUyxFQUF6QjtBQUVBLE1BQU1jLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRUEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QixRQUFJRixNQUFNLENBQUNHLFFBQVAsS0FBb0JOLElBQXhCLEVBQThCQyxjQUFjLENBQUMsSUFBRCxDQUFkO0FBQzlCRSxVQUFNLENBQUNJLElBQVAsV0FBZVAsSUFBZjtBQUNELEdBSEQ7O0FBS0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUVFLE9BQU8sQ0FBQ1gsSUFBeEI7QUFBOEIsV0FBTyxFQUFFYyxXQUF2QztBQUFBLDJCQUNFLHFFQUFDLGdEQUFEO0FBQU0sVUFBSSxZQUFLTCxJQUFMLENBQVY7QUFBQSw2QkFDRTtBQUFBLGtCQUFJRDtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBT0QsQ0FqQkQ7O0dBQU1ELE87VUFDWVQsUyxFQUVEZSxxRDs7O0tBSFhOLE87QUFtQlNBLHNFQUFmIiwiZmlsZSI6Ii4vQ29tcG9uZW50cy9MYXlvdXQvVG9wYmFyL05hdkl0ZW1zL05hdkl0ZW0vTmF2SXRlbS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgdGl0bGU6IFN0cmluZztcbiAgbGluazogU3RyaW5nO1xuICBzZXRTaG93TG9hZGluZzogRnVuY3Rpb247XG59XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICByb290OiB7XG4gICAgY29sb3I6IFwid2hpdGVcIixcbiAgICBmb250U2l6ZTogXCJzbWFsbFwiLFxuICAgIHRleHRUcmFuc2Zvcm06IFwiY2FwaXRhbGl6ZVwiLFxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIHRyYW5zaXRpb246IFwiMC4zc1wiLFxuICAgICAgZm9udFNpemU6IDE2LFxuICAgIH0sXG4gICAgW1wiQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KVwiXToge1xuICAgICAgbWFyZ2luUmlnaHQ6IFwiMXJlbVwiLFxuICAgIH0sXG4gIH0sXG59KTtcblxuY29uc3QgTmF2SXRlbTogUmVhY3QuRkM8SVByb3BzPiA9ICh7IHRpdGxlLCBsaW5rLCBzZXRTaG93TG9hZGluZyB9KSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBpZiAocm91dGVyLnBhdGhuYW1lICE9PSBsaW5rKSBzZXRTaG93TG9hZGluZyh0cnVlKTtcbiAgICByb3V0ZXIucHVzaChgJHtsaW5rfWApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgICAgPExpbmsgaHJlZj17YCR7bGlua31gfT5cbiAgICAgICAgPGE+e3RpdGxlfTwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkl0ZW07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/Layout/Topbar/NavItems/NavItem/NavItem.tsx\n");

/***/ })

})