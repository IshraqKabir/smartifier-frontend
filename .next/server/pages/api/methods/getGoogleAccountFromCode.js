(function() {
var exports = {};
exports.id = 57;
exports.ids = [57,881];
exports.modules = {

/***/ 1209:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const googleConfig = {
  clientId: process.env.GOOGLE_CLIENT_ID,
  // e.g. asdfghjkljhgfdsghjk.apps.googleusercontent.com
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  // e.g. _ASDFA%DFASDFASDFASD#FAD-
  redirect: process.env.GOOGLE_REDIRECT_URL // this must match your google api settings

};
/* harmony default export */ __webpack_exports__["default"] = (googleConfig);

/***/ }),

/***/ 8991:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_api_config_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1209);


/* harmony default export */ __webpack_exports__["default"] = (async code => {
  const data = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`https://oauth2.googleapis.com/token`, {
    code: code,
    client_id: _pages_api_config_google__WEBPACK_IMPORTED_MODULE_1__.default.clientId,
    client_secret: _pages_api_config_google__WEBPACK_IMPORTED_MODULE_1__.default.clientSecret,
    redirect_uri: _pages_api_config_google__WEBPACK_IMPORTED_MODULE_1__.default.redirect,
    grant_type: "authorization_code",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  }).then(res => res.data).catch(err => err); // const auth = createConnection();
  // const data = await auth.getToken(code);

  return {
    data
  };
});

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
var __webpack_exports__ = (__webpack_exec__(8991));
module.exports = __webpack_exports__;

})();