(function() {
var exports = {};
exports.id = 351;
exports.ids = [351,685,638];
exports.modules = {

/***/ 8832:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _middleware_withPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(708);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8883);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _methods_backendVerifyEmail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7155);




const api = async (req, res) => {
  const {
    body
  } = req;
  const {
    email,
    password,
    code
  } = body;
  const {
    response: user,
    success,
    error
  } = await (0,_methods_backendVerifyEmail__WEBPACK_IMPORTED_MODULE_1__.default)(email, password, code);

  if (success == false) {
    return res.status(200).json({
      success: false,
      error: error
    });
  }

  if (success && user !== null && user !== void 0 && user.verified) {
    res.setHeader("Set-Cookie", cookie__WEBPACK_IMPORTED_MODULE_0___default().serialize("token", user === null || user === void 0 ? void 0 : user.token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/"
    }));
  } // delete user["token"];


  return res.status(200).json({
    success: true,
    response: user
  });
};

/* harmony default export */ __webpack_exports__["default"] = ((0,_middleware_withPost__WEBPACK_IMPORTED_MODULE_2__.default)(api));

/***/ }),

/***/ 7155:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(591);


/* harmony default export */ __webpack_exports__["default"] = (async (email, password, code) => {
  const user = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${_url__WEBPACK_IMPORTED_MODULE_1__/* .backend_url */ .LL}/api/auth/verify-email`, {
    email,
    password,
    code
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

/***/ 708:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const withPost = handler => {
  return async (req, res) => {
    const {
      method
    } = req;

    if (method !== 'POST') {
      return res.status(400).json({
        success: false,
        message: "Only POST requests are allowed "
      });
    }

    return handler(req, res);
  };
};

/* harmony default export */ __webpack_exports__["default"] = (withPost);

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

/***/ }),

/***/ 8883:
/***/ (function(module) {

"use strict";
module.exports = require("cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(8832));
module.exports = __webpack_exports__;

})();