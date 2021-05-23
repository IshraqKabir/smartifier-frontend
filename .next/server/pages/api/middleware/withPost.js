(function() {
var exports = {};
exports.id = 638;
exports.ids = [638];
exports.modules = {

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(708));
module.exports = __webpack_exports__;

})();