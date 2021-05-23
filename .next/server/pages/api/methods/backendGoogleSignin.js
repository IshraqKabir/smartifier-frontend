(function() {
var exports = {};
exports.id = 150;
exports.ids = [150];
exports.modules = {

/***/ 5512:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(591);


/* harmony default export */ __webpack_exports__["default"] = (async id_token => {
  const user = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${_url__WEBPACK_IMPORTED_MODULE_1__/* .backend_url */ .LL}/api/auth/google-signin`, {
    id_token: id_token
  }).then(response => {
    return {
      success: true,
      response: response.data,
      error: null
    };
  }).catch(err => {
    return {
      success: false,
      response: null,
      error: err
    };
  });
  return user;
});

/***/ }),

/***/ 591:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LL": function() { return /* binding */ backend_url; },
/* harmony export */   "a9": function() { return /* binding */ local_backend_url; }
/* harmony export */ });
const url = "https://smartifier.org"; // const url = "localhost:8000";
// export const backend_url = "localhost:8000";

const backend_url = "https://admin.smartifier.org"; // export const local_backend_url = "localhost:8000";

const local_backend_url = "https://admin.smartifier.org";
/* harmony default export */ __webpack_exports__["ZP"] = (url);

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(5512));
module.exports = __webpack_exports__;

})();