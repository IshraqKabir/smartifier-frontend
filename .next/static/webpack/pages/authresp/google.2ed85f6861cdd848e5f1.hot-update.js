webpackHotUpdate_N_E("pages/authresp/google",{

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
false,

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
false,

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
false,

/***/ "./node_modules/next/dist/client/route-loader.js":
false,

/***/ "./node_modules/next/dist/client/router.js":
false,

/***/ "./node_modules/next/dist/client/with-router.js":
false,

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
false,

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
false,

/***/ "./node_modules/next/router.js":
false,

/***/ "./node_modules/regenerator-runtime/runtime.js":
false,

/***/ "./node_modules/webpack/buildin/module.js":
false,

/***/ "./pages/authresp/google.tsx":
/*!***********************************!*\
  !*** ./pages/authresp/google.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../url */ \"./url.js\");\n/* harmony import */ var _custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../custom-hooks/useLocalState */ \"./custom-hooks/useLocalState.ts\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n\n\n\n\nvar _jsxFileName = \"/home/ishraqkabir/workspace/smartifier-frontend/pages/authresp/google.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Google = function Google() {\n  _s();\n\n  var router = useRouter();\n  var code = router.query.code;\n\n  var _useLocalState = Object(_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"user\", \"\"),\n      _useLocalState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useLocalState, 2),\n      user = _useLocalState2[0],\n      setUser = _useLocalState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (code) {\n      axios__WEBPACK_IMPORTED_MODULE_3___default()({\n        method: \"get\",\n        url: \"/api/auth/google?get=user&code=\".concat(code)\n      }).then(function (res) {\n        var id_token = res.data.user.data.id_token;\n        axios__WEBPACK_IMPORTED_MODULE_3___default()({\n          method: \"GET\",\n          url: \"https://oauth2.googleapis.com/tokeninfo?id_token=\".concat(id_token)\n        }).then(function (response) {\n          console.log(response.data);\n          var _response$data = response.data,\n              email = _response$data.email,\n              email_verified = _response$data.email_verified,\n              at_hash = _response$data.at_hash,\n              name = _response$data.name,\n              picture = _response$data.picture;\n          axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(\"\".concat(_url__WEBPACK_IMPORTED_MODULE_4__[\"local_backend_url\"], \"/api/auth/googleSignIn\"), {\n            id_token: id_token,\n            email: email,\n            at_hash: at_hash,\n            email_verified: email_verified === \"true\" ? true : false,\n            name: name,\n            picture: picture\n          }).then(function (response) {\n            var token = response.data;\n            var user = {\n              email: email,\n              name: name,\n              picture: picture,\n              token: token\n            };\n            console.log(user);\n            setUser(user);\n          })[\"catch\"](function (error) {\n            return setUser(\"\");\n          });\n        });\n      });\n    }\n  }, [code]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"LinearProgress\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Container, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Title, {\n        variant: \"h6\",\n        children: \"Please wait while we sign you in...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Title, {\n        children: \"Redirecting you to smartifier.org...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"CircularProgress\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Google, \"I8aHtubSf0CKljcs63vY8YN01os=\", true, function () {\n  return [_custom_hooks_useLocalState__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\n});\n\n_c = Google;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Google);\nvar Container = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"withStyles\"])({\n  root: {\n    width: \"100vw\",\n    display: \"flex\",\n    flexDirection: \"column\",\n    alignItems: \"center\"\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Box\"]);\nvar Title = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"withStyles\"])({\n  root: {\n    textAlign: \"center\",\n    marginTop: 30,\n    marginBottom: 10\n  }\n})(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"Typography\"]);\n\nvar _c;\n\n$RefreshReg$(_c, \"Google\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aHJlc3AvZ29vZ2xlLnRzeD9mZmQ2Il0sIm5hbWVzIjpbIkdvb2dsZSIsInJvdXRlciIsInVzZVJvdXRlciIsImNvZGUiLCJxdWVyeSIsInVzZUxvY2FsU3RhdGUiLCJ1c2VyIiwic2V0VXNlciIsInVzZUVmZmVjdCIsImF4aW9zIiwibWV0aG9kIiwidXJsIiwidGhlbiIsInJlcyIsImlkX3Rva2VuIiwiZGF0YSIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImVtYWlsIiwiZW1haWxfdmVyaWZpZWQiLCJhdF9oYXNoIiwibmFtZSIsInBpY3R1cmUiLCJwb3N0IiwibG9jYWxfYmFja2VuZF91cmwiLCJ0b2tlbiIsImVycm9yIiwiQ29udGFpbmVyIiwid2l0aFN0eWxlcyIsInJvb3QiLCJ3aWR0aCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIkJveCIsIlRpdGxlIiwidGV4dEFsaWduIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiVHlwb2dyYXBoeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBV0EsSUFBTUEsTUFBd0IsR0FBRyxTQUEzQkEsTUFBMkIsR0FBTTtBQUFBOztBQUNyQyxNQUFNQyxNQUFNLEdBQUdDLFNBQVMsRUFBeEI7QUFEcUMsTUFFN0JDLElBRjZCLEdBRXBCRixNQUFNLENBQUNHLEtBRmEsQ0FFN0JELElBRjZCOztBQUFBLHVCQUliRSwyRUFBYSxDQUFDLE1BQUQsRUFBUyxFQUFULENBSkE7QUFBQTtBQUFBLE1BSTlCQyxJQUo4QjtBQUFBLE1BSXhCQyxPQUp3Qjs7QUFNckNDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlMLElBQUosRUFBVTtBQUNSTSxrREFBSyxDQUFDO0FBQ0pDLGNBQU0sRUFBRSxLQURKO0FBRUpDLFdBQUcsMkNBQW9DUixJQUFwQztBQUZDLE9BQUQsQ0FBTCxDQUdH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bnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBsb2NhbF9iYWNrZW5kX3VybCB9IGZyb20gXCIuLi8uLi91cmxcIjtcbmltcG9ydCB1c2VMb2NhbFN0YXRlIGZyb20gXCIuLi8uLi9jdXN0b20taG9va3MvdXNlTG9jYWxTdGF0ZVwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBDaXJjdWxhclByb2dyZXNzLFxuICBMaW5lYXJQcm9ncmVzcyxcbiAgVHlwb2dyYXBoeSxcbiAgd2l0aFN0eWxlcyxcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5cblxuaW50ZXJmYWNlIElQcm9wcyB7fVxuXG5jb25zdCBHb29nbGU6IFJlYWN0LkZDPElQcm9wcz4gPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGNvZGUgfSA9IHJvdXRlci5xdWVyeTtcblxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VMb2NhbFN0YXRlKFwidXNlclwiLCBcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb2RlKSB7XG4gICAgICBheGlvcyh7XG4gICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgdXJsOiBgL2FwaS9hdXRoL2dvb2dsZT9nZXQ9dXNlciZjb2RlPSR7Y29kZX1gLFxuICAgICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkX3Rva2VuID0gcmVzLmRhdGEudXNlci5kYXRhLmlkX3Rva2VuO1xuXG4gICAgICAgIGF4aW9zKHtcbiAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgdXJsOiBgaHR0cHM6Ly9vYXV0aDIuZ29vZ2xlYXBpcy5jb20vdG9rZW5pbmZvP2lkX3Rva2VuPSR7aWRfdG9rZW59YCxcbiAgICAgICAgfSkudGhlbigocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgZW1haWxfdmVyaWZpZWQsXG4gICAgICAgICAgICBhdF9oYXNoLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHBpY3R1cmUsXG4gICAgICAgICAgfSA9IHJlc3BvbnNlLmRhdGE7XG5cbiAgICAgICAgICBheGlvc1xuICAgICAgICAgICAgLnBvc3QoYCR7bG9jYWxfYmFja2VuZF91cmx9L2FwaS9hdXRoL2dvb2dsZVNpZ25JbmAsIHtcbiAgICAgICAgICAgICAgaWRfdG9rZW46IGlkX3Rva2VuLFxuICAgICAgICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgICAgICAgIGF0X2hhc2g6IGF0X2hhc2gsXG4gICAgICAgICAgICAgIGVtYWlsX3ZlcmlmaWVkOiBlbWFpbF92ZXJpZmllZCA9PT0gXCJ0cnVlXCIgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgIHBpY3R1cmU6IHBpY3R1cmUsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHRva2VuID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgICAgICAgICBjb25zdCB1c2VyOiBhbnkgPSB7XG4gICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgcGljdHVyZTogcGljdHVyZSxcbiAgICAgICAgICAgICAgICB0b2tlbjogdG9rZW4sXG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgY29uc29sZS5sb2codXNlcik7XG5cbiAgICAgICAgICAgICAgc2V0VXNlcih1c2VyKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBzZXRVc2VyKFwiXCIpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtjb2RlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExpbmVhclByb2dyZXNzIC8+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8VGl0bGUgdmFyaWFudD1cImg2XCI+UGxlYXNlIHdhaXQgd2hpbGUgd2Ugc2lnbiB5b3UgaW4uLi48L1RpdGxlPlxuICAgICAgICA8VGl0bGU+UmVkaXJlY3RpbmcgeW91IHRvIHNtYXJ0aWZpZXIub3JnLi4uPC9UaXRsZT5cbiAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MgLz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR29vZ2xlO1xuXG5jb25zdCBDb250YWluZXIgPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIHdpZHRoOiBcIjEwMHZ3XCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICB9LFxufSkoQm94KTtcblxuY29uc3QgVGl0bGUgPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDogeyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1hcmdpblRvcDogMzAsIG1hcmdpbkJvdHRvbTogMTAgfSxcbn0pKFR5cG9ncmFwaHkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/authresp/google.tsx\n");

/***/ })

})