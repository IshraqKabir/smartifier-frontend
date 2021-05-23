(function() {
var exports = {};
exports.id = 912;
exports.ids = [912];
exports.modules = {

/***/ 1863:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ auth_google; }
});

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: external "googleapis"
var external_googleapis_namespaceObject = require("googleapis");;
;// CONCATENATED MODULE: ./pages/api/auth/google.ts


/*******/

/* CONFIGURATION */

/*******/

const googleConfig = {
  clientId: process.env.GOOGLE_CLIENT_ID,
  // e.g. asdfghjkljhgfdsghjk.apps.googleusercontent.com
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  // e.g. _ASDFA%DFASDFASDFASD#FAD-
  redirect: process.env.GOOGLE_REDIRECT_URL // this must match your google api settings

};
const defaultScope = ["https://www.googleapis.com/auth/plus.me", "https://www.googleapis.com/auth/userinfo.email", "https://www.googleapis.com/auth/userinfo.profile"];
/*****/

/* HELPERS */

/*****/

function createConnection() {
  return new external_googleapis_namespaceObject.google.auth.OAuth2(googleConfig.clientId, googleConfig.clientSecret, googleConfig.redirect);
}

function getConnectionUrl(auth) {
  return auth.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: defaultScope
  });
}

function getGooglePlusApi(auth) {
  return google.plus({
    version: "v1",
    auth
  });
}
/****/

/* MAIN */

/****/

/**
 * Part 1: Create a Google URL and send to the client to log in the user.
 */


function urlGoogle() {
  const auth = createConnection();
  const url = getConnectionUrl(auth);
  return url;
}
/**
 * Part 2: Take the "code" parameter which Google gives us once when the user logs in, then get the user's email and id.
 */


async function getGoogleAccountFromCode(code) {
  const data = await external_axios_default().post(`https://oauth2.googleapis.com/token`, {
    code: code,
    client_id: googleConfig.clientId,
    client_secret: googleConfig.clientSecret,
    redirect_uri: googleConfig.redirect,
    grant_type: "authorization_code",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  }).then(res => res.data).catch(err => err); // const auth = createConnection();
  // const data = await auth.getToken(code);

  return {
    data
  };
}

/* harmony default export */ var auth_google = (async (req, res) => {
  const {
    get
  } = req.query;

  if (get === "link") {
    res.statusCode = 200;
    const url = urlGoogle();
    res.json({
      url
    });
  } else if (get === "user") {
    if (!req.query.code) {
      res.statusCode = 500;
    } else {
      const {
        code
      } = req.query;
      const user = await getGoogleAccountFromCode(code);
      res.statusCode = 200;
      res.json({
        user
      });
    }
  } else {
    res.statusCode = 500;
  }
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
var __webpack_exports__ = (__webpack_exec__(1863));
module.exports = __webpack_exports__;

})();