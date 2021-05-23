(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2370:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["Z"] = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null));

/***/ }),

/***/ 2392:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ useLocalState; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: external "js-cookie"
var external_js_cookie_namespaceObject = require("js-cookie");;
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_namespaceObject);
;// CONCATENATED MODULE: ./custom-hooks/useLocalState.ts


function useLocalState(key, defaultValue) {
  const {
    0: value,
    1: setValueState
  } = (0,external_react_.useState)(() => {
    if (false) {}
  });
  (0,external_react_.useEffect)(() => {
    const listener = e => {
      if (e.storageArea === localStorage && e.key === key) {
        setValueState(JSON.parse(e.newValue));
      }
    };

    window.addEventListener("storage", listener);

    if (!isLocalStorageWorking()) {
      setInterval(() => {
        if (JSON.stringify(getCookie(key)) != JSON.stringify(value)) {
          setValueState(getCookie(key));
        }
      }, 500);
    }

    return () => {
      window.removeEventListener("storage", listener);
    };
  }, [key]);

  const setValue = newValue => {
    setValueState(currentValue => {
      let value = null;

      if (typeof newValue === "function") {
        value = newValue(currentValue);
      } else {
        value = newValue;
      }

      if (isLocalStorageWorking()) {
        localStorage.setItem(key, JSON.stringify(value));
      } else {
        setCookie(key, value);
      }

      return value;
    });
  };

  return [value, setValue];
}

const getValue = key => {
  if (isLocalStorageWorking()) {
    // return from local storage
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : value;
  } // return from cookie;


  return getCookie(key);
};

const isLocalStorageWorking = () => {
  return true;
  const key = "local-storage-test";
  const value = 19;
  localStorage.setItem(key, JSON.stringify(value));

  if (JSON.parse(localStorage.getItem(key)) == value) {
    console.log("working");
    return true;
  }

  console.log("not working");
  return false;
};

const setCookie = (key, value) => {
  external_js_cookie_default().set(key ? JSON.stringify(key) : key, value ? JSON.stringify(value) : value);
};

const getCookie = key => {
  const result = external_js_cookie_default().get(JSON.stringify(key));
  return result ? JSON.parse(result) : result;
};

/***/ }),

/***/ 6542:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ MyApp; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8604);
;// CONCATENATED MODULE: external "@material-ui/core/CssBaseline"
var CssBaseline_namespaceObject = require("@material-ui/core/CssBaseline");;
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_namespaceObject);
// EXTERNAL MODULE: ./src/theme.js + 1 modules
var theme = __webpack_require__(5152);
// EXTERNAL MODULE: ./custom-hooks/useLocalState.ts + 1 modules
var useLocalState = __webpack_require__(2392);
// EXTERNAL MODULE: ./Contexts/UserContext.tsx
var UserContext = __webpack_require__(2370);
;// CONCATENATED MODULE: ./pages/_app.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function MyApp(props) {
  const {
    Component,
    pageProps
  } = props;
  const [user, setUser] = (0,useLocalState/* default */.Z)("user", "");
  external_react_default().useEffect(() => {
    // Executing the below commented code breaks some of the styles after render
    // i dont know why but i have a slight guess
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Smartifier"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "minimum-scale=1, initial-scale=1, width=device-width"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(styles_.ThemeProvider, {
      theme: theme/* default */.Z,
      children: [/*#__PURE__*/jsx_runtime_.jsx((CssBaseline_default()), {}), /*#__PURE__*/jsx_runtime_.jsx(UserContext/* default.Provider */.Z.Provider, {
        value: {
          user: user,
          setUser: setUser
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
      })]
    })]
  });
}

/***/ }),

/***/ 5152:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ src_theme; }
});

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8604);
;// CONCATENATED MODULE: external "@material-ui/core/colors"
var colors_namespaceObject = require("@material-ui/core/colors");;
;// CONCATENATED MODULE: ./src/theme.js

 // Create a theme instance.

const theme = (0,styles_.createMuiTheme)({
  palette: {
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: colors_namespaceObject.red.A400
    },
    background: {
      default: '#fff'
    }
  }
});
/* harmony default export */ var src_theme = (theme);

/***/ }),

/***/ 8604:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/styles");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(6542));
module.exports = __webpack_exports__;

})();