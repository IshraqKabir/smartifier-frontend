(function() {
var exports = {};
exports.id = 673;
exports.ids = [673];
exports.modules = {

/***/ 7154:
/***/ (function(module) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ 5318:
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ 862:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(8);

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ 7316:
/***/ (function(module) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ 8:
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ 6579:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ PasswordField; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7985);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__);





function PasswordField({
  value,
  handleChange,
  touched,
  error,
  id = "password",
  label = "Password"
}) {
  const {
    0: showPassword,
    1: setShowPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
    variant: "outlined",
    fullWidth: true,
    style: {
      margin: "0.5rem 0rem"
    },
    error: touched && Boolean(error),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.InputLabel, {
      htmlFor: "outlined-adornment-password",
      children: label
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.OutlinedInput, {
      id: id,
      name: id,
      label: label,
      fullWidth: true,
      type: showPassword ? "text" : "password",
      value: value,
      onChange: handleChange,
      error: touched && Boolean(error),
      endAdornment: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.InputAdornment, {
        position: "end",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
          "aria-label": "toggle password visibility",
          onClick: () => setShowPassword(state => !state),
          edge: "end",
          children: showPassword ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__.Visibility, {}) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__.VisibilityOff, {})
        })
      }),
      labelWidth: 70
    }), touched && error && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
      variant: "caption",
      color: "error",
      children: error
    })]
  });
}

/***/ }),

/***/ 3097:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Topbar_Topbar; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1731);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./Components/Layout/Topbar/NavItems/NavItem/NavItem.tsx





const useStyles = (0,core_.makeStyles)({
  root: {
    color: "white",
    fontSize: "small",
    textTransform: "capitalize",
    cursor: "pointer",
    "&:hover": {
      transition: "0.3s",
      fontSize: 16
    },
    ["@media (max-width: 700px)"]: {
      marginRight: "1rem"
    }
  }
});

const NavItem = ({
  title,
  link,
  setShowLoading
}) => {
  const classes = useStyles();
  const router = (0,router_.useRouter)();

  const handleClick = () => {
    if (router.pathname !== link) setShowLoading(true);
    router.push(`${link}`);
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.root,
    onClick: handleClick,
    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: `${link}`,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        style: {
          textDecoration: "none",
          color: "white"
        },
        children: title
      })
    })
  });
};

/* harmony default export */ var NavItem_NavItem = (NavItem);
;// CONCATENATED MODULE: ./Components/Layout/Topbar/NavItems/NavItems.tsx





const NavItems_useStyles = (0,core_.makeStyles)({
  navItemsContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    color: "white",
    fontSize: "small",
    overflow: "hidden"
  }
});

const NavItems = ({
  setShowLoading
}) => {
  const classes = NavItems_useStyles();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.navItemsContainer,
    children: [/*#__PURE__*/jsx_runtime_.jsx(NavItem_NavItem, {
      title: "Home",
      link: "/",
      setShowLoading: setShowLoading
    }), /*#__PURE__*/jsx_runtime_.jsx(NavItem_NavItem, {
      title: "Quizzes",
      link: "/quizzes",
      setShowLoading: setShowLoading
    }), /*#__PURE__*/jsx_runtime_.jsx(NavItem_NavItem, {
      title: "Blog",
      link: "/blog/posts",
      setShowLoading: setShowLoading
    }), " "]
  });
};

/* harmony default export */ var NavItems_NavItems = (NavItems);
// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__(7985);
// EXTERNAL MODULE: ./Contexts/UserContext.tsx
var UserContext = __webpack_require__(2370);
// EXTERNAL MODULE: external "@material-ui/core/Dialog"
var Dialog_ = __webpack_require__(7693);
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog_);
;// CONCATENATED MODULE: ./Contexts/AuthModalContext.tsx

/* harmony default export */ var AuthModalContext = (/*#__PURE__*/(0,external_react_.createContext)(null));
;// CONCATENATED MODULE: ./Components/Auth/AuthModalHeader/AuthModalHeader.tsx





function AuthModalHeader() {
  const {
    currentTab,
    setCurrentTab
  } = (0,external_react_.useContext)(AuthModalContext);
  const classes = AuthModalHeader_useStyles({
    currentTab
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.container,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `${classes.singleHeader} ${classes.signin}`,
      onClick: () => {
        setCurrentTab("signin");
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
        variant: "subtitle1",
        style: {
          fontWeight: 600
        },
        children: "Log In"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `${classes.singleHeader} ${classes.signup}`,
      onClick: () => {
        setCurrentTab("signup");
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
        variant: "subtitle1",
        style: {
          fontWeight: 600
        },
        children: "Register"
      })
    })]
  });
}
const AuthModalHeader_useStyles = (0,core_.makeStyles)({
  container: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    cursor: "pointer"
  },
  singleHeader: {
    width: "50%",
    textAlign: "center",
    padding: "1rem",
    border: "1px solid lightgray"
  },
  signin: {
    backgroundColor: ({
      currentTab
    }) => {
      return currentTab === "signin" ? "inherit" : "#f5f5f5";
    }
  },
  signup: {
    backgroundColor: ({
      currentTab
    }) => {
      return currentTab === "signup" ? "inherit" : "#f5f5f5";
    }
  }
});
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(7717);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./repository/Auth/emailSignIn.tsx

async function emailSignin(email, password) {
  const response = await external_axios_default().post(`/api/auth/email-signin`, {
    email,
    password
  }).then(response => {
    return response.data;
  });
  return response;
}
;// CONCATENATED MODULE: ./repository/Auth/emailSignup.tsx

async function emailSignup(data) {
  const response = await external_axios_default().post(`/api/auth/email-signup`, data).then(response => {
    return response.data;
  });
  return response;
}
;// CONCATENATED MODULE: ./repository/Auth/resetPassword.tsx

async function resetPassword(email, code, password, confirmPassword) {
  const response = await external_axios_default().post(`/api/auth/reset-password`, {
    email,
    code,
    password,
    confirmPassword
  }).then(response => {
    return response.data;
  });
  return response;
}
;// CONCATENATED MODULE: ./repository/Auth/sendEmailVerificationMail.tsx

async function sendEmailVerificationMail(email, password) {
  const response = await external_axios_default().post(`/api/auth/send-email-verification-mail`, {
    email,
    password
  }).then(response => {
    return response.data;
  });
  return response;
}
;// CONCATENATED MODULE: ./repository/Auth/sendPasswordResetMail.tsx

async function sendPasswordResetmail(email) {
  const response = await external_axios_default().post(`/api/auth/send-password-reset-mail`, {
    email
  }).then(response => {
    return response.data;
  });
  return response;
}
;// CONCATENATED MODULE: ./repository/Auth/verifyEmail.tsx

async function verifyEmail(email, password, code) {
  const response = await external_axios_default().post(`/api/auth/verify-email`, {
    email,
    password,
    code
  }).then(response => {
    return response.data;
  });
  return response;
}
;// CONCATENATED MODULE: ./Components/Auth/useAuthModal.tsx








const ERROR_ALERT = "Something went wrong. Please Try again.";
function useAuthModal(setUser, closeModal) {
  const {
    0: currentTab,
    1: setCurrentTabState
  } = (0,external_react_.useState)("signin");
  const {
    0: email,
    1: setEmail
  } = (0,external_react_.useState)("");
  const {
    0: password,
    1: setPassword
  } = (0,external_react_.useState)("");
  const {
    0: userAlreadyExists,
    1: setUserAlreadyExists
  } = (0,external_react_.useState)(false);
  const {
    0: signinTabError,
    1: setSigninTabError
  } = (0,external_react_.useState)("");
  const {
    0: verifyEmailTabError,
    1: setVerifyEmailTabError
  } = (0,external_react_.useState)("");
  const {
    0: forgotPasswordTabError,
    1: setForgotPasswordTabError
  } = (0,external_react_.useState)("");
  const {
    0: resetPasswordTabError,
    1: setResetPasswordTabError
  } = (0,external_react_.useState)("");
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,external_react_.useState)(false);

  const setCurrentTab = tab => {
    if (isLoading) return;
    setCurrentTabState(tab);
  };

  const signinFormik = (0,external_formik_.useFormik)({
    initialValues: {
      email: "",
      password: ""
    },
    validate: signinValidate,
    onSubmit: async values => {
      if (isLoading) return;
      setIsLoading(true);
      const user = await emailSignin(values.email, values.password);
      setIsLoading(false);

      if ((user === null || user === void 0 ? void 0 : user.user) == "invalid_credentials") {
        setSigninTabError("Invalid Credentials");
        return;
      } else if ((user === null || user === void 0 ? void 0 : user.user) == "user_not_found") {
        setSigninTabError("Email Not Found. Please Register.");
        return;
      } else if ((user === null || user === void 0 ? void 0 : user.user) == "unauthorized") {
        alert(ERROR_ALERT);
        return;
      } else if ((user === null || user === void 0 ? void 0 : user.user) == "not_verified") {
        goToVerifyEmailTab(values.email, values.password);
        return;
      }

      if (user !== null && user !== void 0 && user.success) {
        setUser(user === null || user === void 0 ? void 0 : user.user);
        return;
      } else {
        alert(ERROR_ALERT);
        return;
      }
    }
  });

  const goToVerifyEmailTab = (email, password) => {
    if (isLoading) return;
    setEmail(email);
    setPassword(password);
    setCurrentTab("verify_email");
  };

  const goToResetPasswordTab = email => {
    if (isLoading) return;
    setEmail(email);
    setCurrentTab("reset_password");
  };

  const signupFormik = (0,external_formik_.useFormik)({
    initialValues: {
      email: "",
      name: "",
      companyName: "",
      clubName: "",
      contactNumber: "880",
      password: "",
      confirmPassword: ""
    },
    validate: signupValidate,
    onSubmit: async values => {
      if (isLoading) return;
      const data = {
        email: values.email,
        name: values.name,
        company_name: values.companyName,
        club_name: values.clubName,
        contact_number: values.contactNumber,
        password: values.password,
        confirm_password: values.confirmPassword
      };
      setIsLoading(true);
      const response = await emailSignup(data);
      setIsLoading(false);

      if (!response.success) {
        alert("Some went wrong. Please try again.");
        return;
      }

      if ((response === null || response === void 0 ? void 0 : response.response) == "user_not_created") {
        alert("Some went wrong. Please try again.");
        return;
      }

      if ((response === null || response === void 0 ? void 0 : response.response) == "user_already_exists") {
        setUserAlreadyExists(true);
        return;
      }

      if ((response === null || response === void 0 ? void 0 : response.response) == "not_verified") {
        goToVerifyEmailTab(values.email, values.password);
        return;
      }

      alert("Something went wrong. Please try again.");
    }
  });
  const verifyEmailFormik = (0,external_formik_.useFormik)({
    initialValues: {
      code: ""
    },
    validate: verifyEmailValidate,
    onSubmit: async values => {
      if (isLoading) return;
      setIsLoading(true);
      const {
        response
      } = await verifyEmail(email, password, values.code);
      setIsLoading(false);

      if (!(response !== null && response !== void 0 && response.verified)) {
        if ((response === null || response === void 0 ? void 0 : response.status) == "invalid_code") {
          console.log("yay");
          setVerifyEmailTabError("Code did not match!");
          return;
        }

        if ((response === null || response === void 0 ? void 0 : response.status) == "time_over") {
          setVerifyEmailTabError(`Time over! We have senet the verification code to your mail, ${email}. Please enter it again.`);
          verifyEmailFormik.resetForm();
          return;
        }

        if ((response === null || response === void 0 ? void 0 : response.status) == "code_not_set") {
          setCurrentTab("signin");
          alert("Please login again!");
          return;
        }

        return;
      }

      setUser(response === null || response === void 0 ? void 0 : response.user);
    }
  });
  const forgotPasswordFormik = (0,external_formik_.useFormik)({
    initialValues: {
      email: ""
    },
    validate: verifyForgotPassword,
    onSubmit: async values => {
      if (isLoading) return;
      setIsLoading(true);
      const {
        success,
        response
      } = await sendPasswordResetmail(values.email);
      setIsLoading(false);

      if (!success) {
        alert("Some went wrong. Please try again.");
        return;
      }

      if (response == "user_not_found") {
        setForgotPasswordTabError("Email not found. Please make sure you have already registered your email with us.");
        return;
      }

      if (response == "sent") {
        goToResetPasswordTab(values.email);
        return;
      }
    }
  });
  const resetPasswordFormik = (0,external_formik_.useFormik)({
    initialValues: {
      code: "",
      password: "",
      confirmPassword: ""
    },
    validate: verifyResetPassword,
    onSubmit: async values => {
      if (isLoading) return;
      setIsLoading(true);
      const {
        response,
        success
      } = await resetPassword(email, values.code, values.password, values.confirmPassword);
      setIsLoading(false);

      if (!success) {
        alert("Some went wrong. Please try again.");
        return;
      }

      if (response == "user_not_found") {
        setResetPasswordTabError("Email not found. Please make sure you have already registered your email with us.");
        return;
      }

      if (response == "invalid_code") {
        setResetPasswordTabError("Invalid Verification Code.");
        return;
      }

      if (response == "time_over") {
        setResetPasswordTabError("Your verification code has expired. We have sent another verficiation code to your email.");
        return;
      }

      if (response == "something_went_wrong" || response == "code_not_set") {
        alert(ERROR_ALERT);
        setCurrentTab("signin");
        return;
      }

      if (response == "password_changed") {
        alert("Success!");
        setCurrentTab("signin");
        return;
      }
    }
  });

  const resendEmailVerifyMail = (email, password) => {
    if (isLoading) return;
    sendEmailVerificationMail(email, password);
  };

  const resendPasswordResetMail = email => {
    if (isLoading) return;
    if (currentTab !== "reset_password") return;
    sendPasswordResetmail(email);
  };

  return {
    currentTab,
    setCurrentTab,
    signinFormik,
    email,
    password,
    signupFormik,
    userAlreadyExists,
    verifyEmailFormik,
    forgotPasswordFormik,
    resetPasswordFormik,
    signinTabError,
    verifyEmailTabError,
    forgotPasswordTabError,
    resetPasswordTabError,
    resendPasswordResetMail,
    resendEmailVerifyMail,
    isLoading
  };
}

function signinValidate(values) {
  var _values$password;

  const errors = {};

  if (!values.email) {
    errors.email = "Email Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid Email Format.";
  }

  if (!values.password || ((_values$password = values.password) === null || _values$password === void 0 ? void 0 : _values$password.length) < 8) {
    errors.password = "Password has to be atleast 8 characters long.";
  }

  return errors;
}

function signupValidate(values) {
  var _values$password2, _values$name;

  const errors = {};

  if (!values.email) {
    errors.email = "Email Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid Email Format.";
  }

  if (!values.password || ((_values$password2 = values.password) === null || _values$password2 === void 0 ? void 0 : _values$password2.length) < 8) {
    errors.password = "Password has to be atleast 8 characters long.";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm password can not be empty.";
  } else if (values.confirmPassword != values.password) {
    errors.confirmPassword = "Passwords do not match.";
  }

  const FULL_NAME_LENGTH = 8;

  if (!values.name || ((_values$name = values.name) === null || _values$name === void 0 ? void 0 : _values$name.length) <= FULL_NAME_LENGTH) {
    errors.name = `Full Name has to be atleast ${FULL_NAME_LENGTH} characters long.`;
  }

  if (!values.companyName) {
    errors.companyName = `Company name cannot be empty.`;
  }

  if (!values.clubName) {
    errors.clubName = `Club name cannot be empty.`;
  }

  if (!values.contactNumber) {
    errors.contactNumber = `Phone number can not be empty.`;
  }

  if (values.contactNumber.length != 13) {
    errors.contactNumber = `Invalid phone number.`;
  }

  return errors;
}

const verifyEmailValidate = values => {
  const errors = {};

  if (!values.code) {
    errors.code = `Verification code cannot be empty.`;
  }

  return errors;
};

const verifyForgotPassword = values => {
  const errors = {};

  if (!values.email) {
    errors.email = "Email Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid Email Format.";
  }

  return errors;
};

function verifyResetPassword(values) {
  var _values$password3;

  const errors = {};

  if (!values.code) {
    errors.code = `Verification code cannot be empty.`;
  }

  if (!values.password || ((_values$password3 = values.password) === null || _values$password3 === void 0 ? void 0 : _values$password3.length) <= 8) {
    errors.password = "Password has to be atleast 8 characters long.";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm password can not be empty.";
  } else if (values.confirmPassword != values.password) {
    errors.confirmPassword = "Passwords do not match.";
  }

  return errors;
}
// EXTERNAL MODULE: ./Components/AuthForm/PasswordField/PasswordField.tsx
var PasswordField = __webpack_require__(6579);
;// CONCATENATED MODULE: external "react-google-button"
var external_react_google_button_namespaceObject = require("react-google-button");;
var external_react_google_button_default = /*#__PURE__*/__webpack_require__.n(external_react_google_button_namespaceObject);
// EXTERNAL MODULE: ./custom-hooks/useLocalState.ts + 1 modules
var useLocalState = __webpack_require__(2392);
;// CONCATENATED MODULE: ./Components/GoogleLoginButton/GoogleLoginButton.tsx







const GoogleLoginButton = () => {
  const {
    0: url,
    1: setUrl
  } = (0,external_react_.useState)("");
  const [user] = (0,useLocalState/* default */.Z)("user", "");
  (0,external_react_.useEffect)(() => {
    if (user) return;
    external_axios_default()({
      method: "get",
      url: "/api/auth/google?get=link"
    }).then(res => {
      setUrl(res.data.url);
    });
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(Container, {
    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
      href: `${url}`,
      style: {
        textDecoration: "none"
      },
      target: "_blank",
      children: /*#__PURE__*/jsx_runtime_.jsx((external_react_google_button_default()), {
        label: url ? "Continue with Google" : "Loading..."
      })
    })
  });
};

/* harmony default export */ var GoogleLoginButton_GoogleLoginButton = (GoogleLoginButton);
const Container = (0,core_.withStyles)({
  root: {}
})(core_.Box);
const Loading = (0,core_.withStyles)({
  root: {
    color: "white",
    textTransform: "capitalize"
  }
})(core_.Typography);
;// CONCATENATED MODULE: ./Components/Auth/SigninTab/SigninTab.tsx







function SigninTab() {
  const {
    signinFormik,
    signinTabError,
    setCurrentTab
  } = (0,external_react_.useContext)(AuthModalContext);
  const classes = SigninTab_useStyles();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.googleButtonContainer,
      children: /*#__PURE__*/jsx_runtime_.jsx(GoogleLoginButton_GoogleLoginButton, {})
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      onSubmit: signinFormik.handleSubmit,
      children: [/*#__PURE__*/jsx_runtime_.jsx(core_.TextField, {
        fullWidth: true,
        margin: "normal",
        variant: "outlined",
        id: "email",
        name: "email",
        label: "Email",
        value: signinFormik.values.email,
        onChange: signinFormik.handleChange,
        error: signinFormik.touched.email && Boolean(signinFormik.errors.email),
        helperText: signinFormik.touched.email && signinFormik.errors.email
      }), /*#__PURE__*/jsx_runtime_.jsx(PasswordField/* default */.Z, {
        value: signinFormik.values.password,
        handleChange: signinFormik.handleChange,
        touched: signinFormik.touched.password,
        error: signinFormik.errors.password
      }), signinTabError && /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
        variant: "subtitle2",
        color: "error",
        children: signinTabError
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
        variant: "subtitle2",
        style: {
          margin: "0.5rem 0"
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          style: {
            textDecoration: "underline",
            cursor: "pointer"
          },
          onClick: () => {
            setCurrentTab("forgot_password");
          },
          children: "Forgot password?"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.Button, {
        variant: "contained",
        fullWidth: true,
        type: "submit",
        style: {
          marginTop: "0.5rem",
          backgroundColor: "#3f51b5",
          color: "white"
        },
        children: "Login"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Typography, {
      variant: "subtitle2",
      style: {
        margin: "1rem 0 0 0"
      },
      children: ["Dont have an account?", " ", /*#__PURE__*/jsx_runtime_.jsx("a", {
        style: {
          textDecoration: "underline",
          cursor: "pointer"
        },
        onClick: () => {
          setCurrentTab("signup");
        },
        children: "Create Account"
      })]
    })]
  });
}
const SigninTab_useStyles = (0,core_.makeStyles)({
  googleButtonContainer: {
    margin: "1rem 0",
    display: "flex",
    width: "100%",
    justifyContent: "center"
  }
});
;// CONCATENATED MODULE: ./Components/Auth/useResendMail.ts

const SECONDS_TO_WAIT = 30;
function useResendMail() {
  const {
    0: showResendLink,
    1: setShowResendLink
  } = (0,external_react_.useState)(false);
  const {
    0: secondsRemaining,
    1: setSecondsRemaining
  } = (0,external_react_.useState)(SECONDS_TO_WAIT);
  (0,external_react_.useEffect)(() => {
    setInterval(() => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(second => second - 1);
      }
    }, 1000);
  }, []);
  (0,external_react_.useEffect)(() => {
    if (secondsRemaining < 2) {
      setShowResendLink(true);
    }
  }, [secondsRemaining]);

  const handleSend = () => {
    setShowResendLink(false);
    setSecondsRemaining(SECONDS_TO_WAIT);
  };

  return {
    showResendLink,
    secondsRemaining,
    handleSend
  };
}
;// CONCATENATED MODULE: ./Components/Auth/VerifyEmailTab/VerifyEmailTab.tsx






function VerifyEmailTab({}) {
  const {
    email,
    password,
    verifyEmailFormik,
    verifyEmailTabError,
    resendEmailVerifyMail
  } = (0,external_react_.useContext)(AuthModalContext);
  const classes = VerifyEmailTab_useStyles();
  const {
    showResendLink,
    secondsRemaining,
    handleSend
  } = useResendMail();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.container,
    children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
      variant: "h6",
      style: {
        textAlign: "center"
      },
      children: "Email Verification."
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Typography, {
      variant: "subtitle1",
      style: {
        textAlign: "center",
        lineHeight: "1.3rem",
        margin: "0.5rem 0"
      },
      children: ["Your email is not verified by us yet. Dont worry, we have sent a verification code to your email, ", /*#__PURE__*/jsx_runtime_.jsx("b", {
        children: email
      }), ". Please enter the code below to verify your account and start your journey!"]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      onSubmit: verifyEmailFormik.handleSubmit,
      children: [/*#__PURE__*/jsx_runtime_.jsx(core_.TextField, {
        fullWidth: true,
        margin: "normal",
        variant: "outlined",
        id: "code",
        name: "code",
        label: "Verification Code",
        value: verifyEmailFormik.values.code,
        onChange: verifyEmailFormik.handleChange,
        error: verifyEmailFormik.touched.code && Boolean(verifyEmailFormik.errors.code),
        helperText: verifyEmailFormik.touched.code && verifyEmailFormik.errors.code
      }), verifyEmailTabError && /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
        variant: "subtitle2",
        color: "error",
        children: verifyEmailTabError
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.Button, {
        variant: "contained",
        fullWidth: true,
        type: "submit",
        style: {
          marginTop: "0.5rem",
          backgroundColor: "#3f51b5",
          color: "white"
        },
        children: "Verify"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Typography, {
      variant: "subtitle2",
      style: {
        margin: "1rem 0 0 0"
      },
      children: ["Did not get the mail?", " ", showResendLink ? /*#__PURE__*/jsx_runtime_.jsx("a", {
        style: {
          textDecoration: "underline",
          cursor: "pointer"
        },
        onClick: () => {
          resendEmailVerifyMail(email, password);
          handleSend();
        },
        children: "Resend Verfication Code"
      }) : `You can retry in ${secondsRemaining} ${secondsRemaining > 1 ? "seconds" : "second"}`]
    })]
  });
}
const VerifyEmailTab_useStyles = (0,core_.makeStyles)({
  container: {}
});
;// CONCATENATED MODULE: ./Components/Auth/SignupTab/SignupTab.tsx







function SignupTab() {
  const {
    signupFormik,
    userAlreadyExists,
    setCurrentTab
  } = (0,external_react_.useContext)(AuthModalContext);
  const classes = SignupTab_useStyles();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.googleButtonContainer,
      children: /*#__PURE__*/jsx_runtime_.jsx(GoogleLoginButton_GoogleLoginButton, {})
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Typography, {
      variant: "subtitle2",
      style: {
        margin: "1rem 0 0 0"
      },
      children: ["Already have an account?", " ", /*#__PURE__*/jsx_runtime_.jsx("a", {
        style: {
          textDecoration: "underline",
          cursor: "pointer"
        },
        onClick: () => {
          setCurrentTab("signin");
        },
        children: "Log In"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      onSubmit: signupFormik.handleSubmit,
      children: [/*#__PURE__*/jsx_runtime_.jsx(core_.TextField, {
        fullWidth: true,
        margin: "normal",
        variant: "outlined",
        id: "email",
        name: "email",
        label: "Email",
        value: signupFormik.values.email,
        onChange: signupFormik.handleChange,
        error: signupFormik.touched.email && Boolean(signupFormik.errors.email),
        helperText: signupFormik.touched.email && signupFormik.errors.email
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.TextField, {
        fullWidth: true,
        margin: "normal",
        variant: "outlined",
        id: "name",
        name: "name",
        label: "Full Name",
        value: signupFormik.values.name,
        onChange: signupFormik.handleChange,
        error: signupFormik.touched.name && Boolean(signupFormik.errors.name),
        helperText: signupFormik.touched.name && signupFormik.errors.name
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.TextField, {
        fullWidth: true,
        margin: "normal",
        variant: "outlined",
        id: "companyName",
        name: "companyName",
        label: "Company Name",
        value: signupFormik.values.companyName,
        onChange: signupFormik.handleChange,
        error: signupFormik.touched.companyName && Boolean(signupFormik.errors.companyName),
        helperText: signupFormik.touched.companyName && signupFormik.errors.companyName
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.TextField, {
        fullWidth: true,
        margin: "normal",
        variant: "outlined",
        id: "clubName",
        name: "clubName",
        label: "Club Name",
        value: signupFormik.values.clubName,
        onChange: signupFormik.handleChange,
        error: signupFormik.touched.clubName && Boolean(signupFormik.errors.clubName),
        helperText: signupFormik.touched.clubName && signupFormik.errors.clubName
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.TextField, {
        fullWidth: true,
        margin: "normal",
        variant: "outlined",
        id: "contactNumber",
        name: "contactNumber",
        label: "Phone Number",
        value: signupFormik.values.contactNumber,
        onChange: e => {
          if (!e.target.value) {
            return;
          }

          if (!e.target.value.startsWith("880", 0)) {
            return;
          }

          if (!Number.isInteger(parseInt(e.target.value[e.target.value.length - 1]))) {
            return;
          }

          if (e.target.value.length > 13) {
            return;
          }

          signupFormik.handleChange(e);
        },
        error: signupFormik.touched.contactNumber && Boolean(signupFormik.errors.contactNumber),
        helperText: signupFormik.touched.contactNumber && signupFormik.errors.contactNumber
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
        variant: "subtitle2",
        children: "*Setting a strong password is important for your data security!"
      }), /*#__PURE__*/jsx_runtime_.jsx(PasswordField/* default */.Z, {
        value: signupFormik.values.password,
        handleChange: signupFormik.handleChange,
        touched: signupFormik.touched.password,
        error: signupFormik.errors.password
      }), /*#__PURE__*/jsx_runtime_.jsx(PasswordField/* default */.Z, {
        value: signupFormik.values.confirmPassword,
        handleChange: signupFormik.handleChange,
        touched: signupFormik.touched.confirmPassword,
        error: signupFormik.errors.confirmPassword,
        id: "confirmPassword",
        label: "Confirm Password"
      }), userAlreadyExists && /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
        variant: "subtitle2",
        color: "error",
        children: "There is already a user associated with this email. Please login."
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.Button, {
        variant: "contained",
        fullWidth: true,
        type: "submit",
        style: {
          marginTop: "0.5rem",
          backgroundColor: "#3f51b5",
          color: "white"
        },
        children: "Register"
      })]
    })]
  });
}
const SignupTab_useStyles = (0,core_.makeStyles)({
  button: {
    backgroundColor: "#000566",
    marginTop: "0.5rem"
  },
  googleButtonContainer: {
    margin: "1rem 0",
    display: "flex",
    width: "100%",
    justifyContent: "center"
  }
});
;// CONCATENATED MODULE: ./Components/Auth/ForgotPasswordTab/ForgotPasswordTab.tsx





function ForgotPasswordTab({}) {
  const {
    forgotPasswordFormik,
    forgotPasswordTabError
  } = (0,external_react_.useContext)(AuthModalContext);
  const classes = ForgotPasswordTab_useStyles();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.container,
    children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
      variant: "h6",
      style: {
        textAlign: "center"
      },
      children: "Password Reset."
    }), /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
      variant: "subtitle1",
      style: {
        textAlign: "center",
        lineHeight: "1.3rem",
        margin: "0.5rem 0"
      },
      children: "Please enter your email so we can send a verification code to your email."
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      onSubmit: forgotPasswordFormik.handleSubmit,
      children: [/*#__PURE__*/jsx_runtime_.jsx(core_.TextField, {
        fullWidth: true,
        margin: "normal",
        variant: "outlined",
        id: "email",
        name: "email",
        label: "Email",
        value: forgotPasswordFormik.values.email,
        onChange: forgotPasswordFormik.handleChange,
        error: forgotPasswordFormik.touched.email && Boolean(forgotPasswordFormik.errors.email),
        helperText: forgotPasswordFormik.touched.email && forgotPasswordFormik.errors.email
      }), forgotPasswordTabError && /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
        variant: "subtitle2",
        color: "error",
        children: forgotPasswordTabError
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.Button, {
        variant: "contained",
        fullWidth: true,
        type: "submit",
        style: {
          marginTop: "0.5rem",
          backgroundColor: "#3f51b5",
          color: "white"
        },
        children: "Send Code"
      })]
    })]
  });
}
const ForgotPasswordTab_useStyles = (0,core_.makeStyles)({
  container: {}
});
;// CONCATENATED MODULE: ./Components/Auth/ResetPasswordTab/ResetPasswordTab.tsx







function ResetPasswordTab() {
  const {
    resetPasswordFormik,
    email,
    resetPasswordTabError,
    resendPasswordResetMail
  } = (0,external_react_.useContext)(AuthModalContext);
  const {
    showResendLink,
    secondsRemaining,
    handleSend
  } = useResendMail();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
      variant: "h6",
      style: {
        textAlign: "center"
      },
      children: "Password Reset"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Typography, {
      variant: "subtitle1",
      style: {
        textAlign: "center",
        lineHeight: "1.3rem",
        margin: "0.5rem 0"
      },
      children: ["We have sent a verification code to your email, ", /*#__PURE__*/jsx_runtime_.jsx("b", {
        children: email
      }), ". Please enter the code below to change your account's password."]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      onSubmit: resetPasswordFormik.handleSubmit,
      children: [/*#__PURE__*/jsx_runtime_.jsx(core_.TextField, {
        fullWidth: true,
        margin: "normal",
        variant: "outlined",
        id: "code",
        name: "code",
        label: "Verfication Code",
        value: resetPasswordFormik.values.code,
        onChange: resetPasswordFormik.handleChange,
        error: resetPasswordFormik.touched.code && Boolean(resetPasswordFormik.errors.code),
        helperText: resetPasswordFormik.touched.code && resetPasswordFormik.errors.code
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
        variant: "subtitle2",
        children: "*Setting a strong password is important for your data security!"
      }), /*#__PURE__*/jsx_runtime_.jsx(PasswordField/* default */.Z, {
        value: resetPasswordFormik.values.password,
        handleChange: resetPasswordFormik.handleChange,
        touched: resetPasswordFormik.touched.password,
        error: resetPasswordFormik.errors.password
      }), /*#__PURE__*/jsx_runtime_.jsx(PasswordField/* default */.Z, {
        value: resetPasswordFormik.values.confirmPassword,
        handleChange: resetPasswordFormik.handleChange,
        touched: resetPasswordFormik.touched.confirmPassword,
        error: resetPasswordFormik.errors.confirmPassword,
        id: "confirmPassword",
        label: "Confirm Password"
      }), resetPasswordTabError && /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
        variant: "subtitle2",
        color: "error",
        children: resetPasswordTabError
      }), /*#__PURE__*/jsx_runtime_.jsx(core_.Button, {
        variant: "contained",
        fullWidth: true,
        type: "submit",
        style: {
          marginTop: "0.5rem",
          backgroundColor: "#3f51b5",
          color: "white"
        },
        children: "Change Password"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Typography, {
      variant: "subtitle2",
      style: {
        margin: "1rem 0 0 0"
      },
      children: ["Did not get the mail?", " ", showResendLink ? /*#__PURE__*/jsx_runtime_.jsx("a", {
        style: {
          textDecoration: "underline",
          cursor: "pointer"
        },
        onClick: () => {
          resendPasswordResetMail(email);
          handleSend();
        },
        children: "Resend Verfication Code"
      }) : `You can retry in ${secondsRemaining} ${secondsRemaining > 1 ? "seconds" : "second"}`]
    })]
  });
}
;// CONCATENATED MODULE: ./Components/Auth/AuthModal.tsx














function AuthModal({
  isOpen,
  closeModal
}) {
  const {
    setUser
  } = (0,external_react_.useContext)(UserContext/* default */.Z);
  const {
    currentTab,
    setCurrentTab,
    signinFormik,
    signupFormik,
    userAlreadyExists,
    email,
    password,
    verifyEmailFormik,
    forgotPasswordFormik,
    resetPasswordFormik,
    signinTabError,
    verifyEmailTabError,
    forgotPasswordTabError,
    resetPasswordTabError,
    resendPasswordResetMail,
    resendEmailVerifyMail,
    isLoading
  } = useAuthModal(setUser, closeModal);
  const classes = AuthModal_useStyles();
  return /*#__PURE__*/jsx_runtime_.jsx((Dialog_default()), {
    "aria-labelledby": "customized-dialog-title",
    open: isOpen,
    disableBackdropClick: false,
    onBackdropClick: () => {
      if (isLoading) return;
      closeModal();
    },
    children: /*#__PURE__*/jsx_runtime_.jsx(AuthModalContext.Provider, {
      value: {
        currentTab,
        setCurrentTab,
        signinFormik,
        signupFormik,
        userAlreadyExists,
        email,
        password,
        verifyEmailFormik,
        forgotPasswordFormik,
        resetPasswordFormik,
        signinTabError,
        verifyEmailTabError,
        forgotPasswordTabError,
        resetPasswordTabError,
        resendPasswordResetMail,
        resendEmailVerifyMail
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.container,
        children: [currentTab !== "verify_email" && currentTab !== "reset_password" && /*#__PURE__*/jsx_runtime_.jsx(AuthModalHeader, {}), isLoading && /*#__PURE__*/jsx_runtime_.jsx("div", {
          style: {
            width: "100%"
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(core_.LinearProgress, {})
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: classes.tabContainer,
          children: [currentTab === "signin" && /*#__PURE__*/jsx_runtime_.jsx(SigninTab, {}), currentTab === "signup" && /*#__PURE__*/jsx_runtime_.jsx(SignupTab, {}), currentTab === "verify_email" && /*#__PURE__*/jsx_runtime_.jsx(VerifyEmailTab, {}), currentTab === "forgot_password" && /*#__PURE__*/jsx_runtime_.jsx(ForgotPasswordTab, {}), currentTab === "reset_password" && /*#__PURE__*/jsx_runtime_.jsx(ResetPasswordTab, {})]
        })]
      })
    })
  });
}
const AuthModal_useStyles = (0,core_.makeStyles)({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  tabContainer: {
    display: "flex",
    padding: "1rem",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
});
;// CONCATENATED MODULE: ./Components/Layout/Topbar/NavItems/NavItem/Login/Login.tsx









const Login = () => {
  const {
    user,
    setUser
  } = (0,external_react_.useContext)(UserContext/* default */.Z);
  const {
    0: open,
    1: setOpen
  } = (0,external_react_.useState)(false);
  const {
    0: authModalOpen,
    1: setAuthModalOpen
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    if (user) {
      closeModal();
    }
  }, [user]);
  const classes = Login_useStyles({
    user
  });

  const logOut = () => {
    // axios.post(`/api/auth/logout`)
    setUser("");
    location.reload();
  };

  const handleClick = () => {
    if (user) {
      setOpen(state => !state);
    }

    if (!user && !authModalOpen) {
      setAuthModalOpen(true);
      return;
    }
  };

  const closeModal = () => {
    setAuthModalOpen(false);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.container,
    children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
      className: classes.text,
      onClick: handleClick,
      children: !user && "Sign In"
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: classes.text,
      onClick: handleClick,
      children: user && `${user.name.toLowerCase()}`
    }), /*#__PURE__*/jsx_runtime_.jsx(AuthModal, {
      isOpen: authModalOpen,
      closeModal: closeModal
    }), user && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.arrow,
      onClick: handleClick,
      children: open ? /*#__PURE__*/jsx_runtime_.jsx(icons_.ExpandLess, {
        color: "inherit"
      }) : /*#__PURE__*/jsx_runtime_.jsx(icons_.ExpandMore, {
        color: "inherit"
      })
    }), open && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.collapseContainer,
      onClick: () => {
        if (open) setOpen(false);
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.menuItem,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: `/user/profile`,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            style: {
              textDecoration: "none"
            },
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.linkText,
              children: "Profile"
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.menuItem,
        onClick: () => logOut(),
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.linkText,
          children: "Logout"
        })
      })]
    })]
  });
};

/* harmony default export */ var Login_Login = (Login);
const Login_useStyles = (0,core_.makeStyles)({
  container: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "space-between",
    padding: "0.5rem 0.5rem 0.5rem 0.25rem",
    borderRadius: 5,
    position: "relative",
    cursor: "pointer",
    backgroundColor: "inherit"
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: props => {
      const {
        user
      } = props;
      return user ? 400 : 600;
    },
    textTransform: "capitalize",
    textDecoration: "none",
    whiteSpace: "nowrap",
    overflow: "hidden"
  },
  googleLogoContainer: {
    marginRight: 5,
    marginLeft: 5,
    width: 20,
    height: 20,
    float: "left",
    display: "flex",
    alignItems: "center"
  },
  profilePic: {
    borderRadius: "50%",
    overflow: "hidden",
    height: 40,
    width: 40,
    display: "flex",
    alignItems: "center"
  },
  arrow: {
    color: "#3798A7",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  collapseContainer: {
    position: "absolute",
    top: 50,
    right: 0,
    zIndex: 1000,
    backgroundColor: "#003085",
    color: "white",
    width: "auto",
    display: "flex",
    flexDirection: "column"
  },
  menuItem: {
    width: "100%",
    height: "100%",
    padding: 16,
    borderBottom: "1px solid white",
    color: "white",
    cursor: "pointer",
    textAlign: "center",
    "&:hover": {
      borderBottom: "1px solid #3798A7"
    }
  },
  linkText: {
    color: "white",
    "&:hover": {
      color: "#3798A7"
    }
  }
});

const GoogleLogo = () => {
  return /*#__PURE__*/_jsxs("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 256 262",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "xMidYMid",
    children: [/*#__PURE__*/_jsx("path", {
      d: "M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027",
      fill: "#4285F4"
    }), /*#__PURE__*/_jsx("path", {
      d: "M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1",
      fill: "#34A853"
    }), /*#__PURE__*/_jsx("path", {
      d: "M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782",
      fill: "#FBBC05"
    }), /*#__PURE__*/_jsx("path", {
      d: "M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251",
      fill: "#EB4335"
    })]
  });
};
// EXTERNAL MODULE: ./theme/zIndexes.tsx
var zIndexes = __webpack_require__(155);
;// CONCATENATED MODULE: ./Components/Layout/Topbar/Topbar.tsx








const Topbar_useStyles = (0,core_.makeStyles)({
  topbarContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    borderBottomRightRadius: 15,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "2.5%",
    paddingRight: "2.5%",
    zIndex: zIndexes/* default.normal */.Z.normal,
    background: "transparent linear-gradient(180deg, #003EAA 0%, #002461E0 100%) 0% 0% no-repeat padding-box"
  },
  placeholder: {
    position: "relative",
    top: 0,
    left: 0,
    marginRight: 100,
    width: "100%",
    height: 100,
    background: "transparent linear-gradient(180deg, #000266 0%, #032C73 57%, #00163B 100%, #003A67 100%) 0% 0% no-repeat padding-box"
  },
  outerContainer: {
    display: "flex",
    flexDirection: "column"
  },
  mobileNavItems: {
    backgroundColor: "rgba(0, 34, 94, 0.8)",
    padding: "0.5rem 1rem",
    color: "white",
    position: "fixed",
    top: 100,
    left: 0,
    right: 0,
    zIndex: 40,
    // overflowX: "scroll",
    ["@media (min-width: 700px)"]: {
      display: "none"
    }
  },
  pcNavItems: {
    width: "60%",
    ["@media (max-width: 700px)"]: {
      display: "none"
    }
  }
});

const Topbar = () => {
  const {
    0: showLoading,
    1: setShowLoading
  } = (0,external_react_.useState)(false);
  const classes = Topbar_useStyles();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.outerContainer,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.placeholder
    }), showLoading && /*#__PURE__*/jsx_runtime_.jsx(core_.LinearProgress, {
      color: "primary"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.outerContainer,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.topbarContainer,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: "/assets/new_logo.png",
            alt: "Smartifier Logo",
            height: 45,
            width: 135
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.pcNavItems,
          children: /*#__PURE__*/jsx_runtime_.jsx(NavItems_NavItems, {
            setShowLoading: setShowLoading
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Login_Login, {})]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.mobileNavItems,
        children: /*#__PURE__*/jsx_runtime_.jsx(NavItems_NavItems, {
          setShowLoading: setShowLoading
        })
      })]
    })]
  });
};

/* harmony default export */ var Topbar_Topbar = (Topbar);

/***/ }),

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

/***/ 6255:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(5318);

__webpack_unused_export__ = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(7316));

var _extends2 = _interopRequireDefault(__webpack_require__(7154));

var _react = _interopRequireDefault(__webpack_require__(9297));

var _head = _interopRequireDefault(__webpack_require__(5273));

var _toBase = __webpack_require__(5519);

var _imageConfig = __webpack_require__(444);

var _useIntersection = __webpack_require__(5749);

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default"} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const percentSizes = [...sizes.matchAll(/(^|\s)(1?\d?\d)vw/g)].map(m => parseInt(m[2]));

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (false) {}

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (false) {}
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    src: src,
    decoding: "async",
    sizes: sizes,
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (false) {}

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ 6071:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireWildcard = __webpack_require__(862);

__webpack_unused_export__ = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(9297));

var _router = __webpack_require__(1689);

var _router2 = __webpack_require__(2441);

var _useIntersection = __webpack_require__(5749);

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ 6528:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ 8391:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ 7599:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(5318);

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(2238));

var _requestIdleCallback = __webpack_require__(8391); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ 2441:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(862);

var _interopRequireDefault = __webpack_require__(5318);

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(9297));

var _router2 = _interopRequireWildcard(__webpack_require__(1689));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(8417);

var _withRouter = _interopRequireDefault(__webpack_require__(3168));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ 5749:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(9297);

var _requestIdleCallback = __webpack_require__(8391);

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ 3168:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(5318);

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(9297));

var _router = __webpack_require__(2441);

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ 1253:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ 7332:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ 1689:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(6528);

var _routeLoader = __webpack_require__(7599);

var _denormalizePagePath = __webpack_require__(9320);

var _normalizeLocalePath = __webpack_require__(1253);

var _mitt = _interopRequireDefault(__webpack_require__(7332));

var _utils = __webpack_require__(3937);

var _isDynamic = __webpack_require__(3288);

var _parseRelativeUrl = __webpack_require__(4436);

var _querystring = __webpack_require__(4915);

var _resolveRewrites = _interopRequireDefault(__webpack_require__(4453));

var _routeMatcher = __webpack_require__(7451);

var _routeRegex = __webpack_require__(8193);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration = (/* unused pure expression or super */ null && ( false && 0));
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {} // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (false) {}

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && !this.isPreview && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ 7687:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(4915));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ 3288:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ 4436:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(3937);

var _querystring = __webpack_require__(4915);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL( true ? 'http://n' : 0);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ 4915:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ 7451:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ 8193:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ 3937:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(7687);
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ 5652:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _id_; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1731);
// EXTERNAL MODULE: ./Components/Layout/Topbar/Topbar.tsx + 21 modules
var Topbar = __webpack_require__(3097);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./url.js
var url = __webpack_require__(591);
;// CONCATENATED MODULE: ./Components/QuizTest/Questions/SingleQuestion/Question/Options/Option/useOption.tsx

function useOption(optionId, question, answers, setAnswers) {
  const {
    0: isChecked,
    1: setIsChecked
  } = (0,external_react_.useState)(getIsOptionChecked(optionId, question, answers));
  (0,external_react_.useEffect)(() => {
    setIsChecked(getIsOptionChecked(optionId, question, answers));
  }, [answers]);

  const handleClick = () => {
    setAnswers(optionId, question);
  };

  return {
    isChecked,
    handleClick
  };
}

function getIsOptionChecked(optionId, question, answers) {
  var _answers$question$id;

  if (!answers) {
    return false;
  }

  if (!answers[question === null || question === void 0 ? void 0 : question.id]) {
    return false;
  }

  if (!Array.isArray(answers[question === null || question === void 0 ? void 0 : question.id])) {
    return false;
  }

  let checked = false;
  (_answers$question$id = answers[question === null || question === void 0 ? void 0 : question.id]) === null || _answers$question$id === void 0 ? void 0 : _answers$question$id.forEach(option => {
    if ((option === null || option === void 0 ? void 0 : option.optionId) == optionId) {
      checked = true;
    }
  });
  return checked;
}
;// CONCATENATED MODULE: ./Components/QuizTest/Questions/SingleQuestion/Question/Options/Option/Option.tsx








function Option({
  option
}) {
  var _option$image, _option$image2;

  const {
    answers,
    setAnswers
  } = (0,external_react_.useContext)(QuizTestStateContext);
  const {
    question
  } = (0,external_react_.useContext)(QuestionContext);
  const {
    isChecked,
    handleClick
  } = useOption(option === null || option === void 0 ? void 0 : option.id, question, answers, setAnswers);
  const shouldCenter = (option === null || option === void 0 ? void 0 : option.image) != null ? true : false;
  const classes = useStyles({
    shouldCenter
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.container,
    onClick: handleClick,
    children: [(question === null || question === void 0 ? void 0 : question.answer_type) === "multiple_choice" && /*#__PURE__*/jsx_runtime_.jsx(core_.Radio, {
      checked: isChecked
    }), (question === null || question === void 0 ? void 0 : question.answer_type) === "checkboxes" && /*#__PURE__*/jsx_runtime_.jsx(core_.Checkbox, {
      checked: isChecked
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.titleAndImageContainer,
      children: [(option === null || option === void 0 ? void 0 : option.title) && /*#__PURE__*/jsx_runtime_.jsx(Title, {
        children: option === null || option === void 0 ? void 0 : option.title
      }), (option === null || option === void 0 ? void 0 : (_option$image = option.image) === null || _option$image === void 0 ? void 0 : _option$image.image_link) && /*#__PURE__*/jsx_runtime_.jsx(core_.Avatar, {
        src: `${url/* backend_url */.LL}/storage/${option === null || option === void 0 ? void 0 : (_option$image2 = option.image) === null || _option$image2 === void 0 ? void 0 : _option$image2.image_link}`,
        variant: "square",
        style: {
          height: 200,
          width: 200,
          margin: "0.2rem 0"
        }
      })]
    })]
  });
}
const useStyles = (0,core_.makeStyles)({
  container: {
    borderTop: "1px solid gray",
    padding: "0.1rem 0rem",
    display: "flex",
    alignItems: "center",
    cursor: "pointer"
  },
  titleAndImageContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: ({
      shouldCenter
    }) => {
      return shouldCenter ? "center" : "";
    }
  }
});
const Title = (0,core_.withStyles)({
  root: {}
})(core_.Typography);
;// CONCATENATED MODULE: ./Components/QuizTest/Questions/SingleQuestion/Question/Options/TextAnswer/useTextAnswer.tsx

function useTextAnswer(question, answers, setAnswers) {
  const {
    0: text,
    1: setText
  } = (0,external_react_.useState)(getTextValue());

  function getTextValue() {
    var _answers$$;

    if (!answers || !answers[`${question === null || question === void 0 ? void 0 : question.id}`] || !answers[`${question === null || question === void 0 ? void 0 : question.id}`][0]) {
      return "";
    }

    return (_answers$$ = answers[`${question === null || question === void 0 ? void 0 : question.id}`][0]) === null || _answers$$ === void 0 ? void 0 : _answers$$.text;
  }

  function handleChange(e) {
    var _e$target, _question$options$, _e$target2;

    setText(e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value);
    setAnswers(question === null || question === void 0 ? void 0 : (_question$options$ = question.options[0]) === null || _question$options$ === void 0 ? void 0 : _question$options$.id, question, e === null || e === void 0 ? void 0 : (_e$target2 = e.target) === null || _e$target2 === void 0 ? void 0 : _e$target2.value);
  }

  return {
    text,
    handleChange
  };
}
;// CONCATENATED MODULE: ./Components/QuizTest/Questions/SingleQuestion/Question/Options/TextAnswer/TextAnswer.tsx






function TextAnswer({}) {
  const {
    answers,
    setAnswers
  } = (0,external_react_.useContext)(QuizTestStateContext);
  const {
    question
  } = (0,external_react_.useContext)(QuestionContext);
  const {
    text,
    handleChange
  } = useTextAnswer(question, answers, setAnswers);
  return /*#__PURE__*/jsx_runtime_.jsx(Container, {
    children: /*#__PURE__*/jsx_runtime_.jsx(core_.TextField, {
      id: `${question === null || question === void 0 ? void 0 : question.id}-value`,
      label: "Answer",
      variant: "outlined",
      value: text,
      onChange: handleChange,
      fullWidth: true
    })
  });
}
const Container = (0,core_.withStyles)({
  root: {
    width: "100%",
    paddingTop: "1rem"
  }
})(core_.Box);
;// CONCATENATED MODULE: ./Components/QuizTest/Questions/SingleQuestion/Question/Options/Options.tsx







function Options({}) {
  const {
    question
  } = (0,external_react_.useContext)(QuestionContext);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Options_Container, {
    children: [(question === null || question === void 0 ? void 0 : question.options) && (question === null || question === void 0 ? void 0 : question.answer_type) != "short_paragraph" && (question === null || question === void 0 ? void 0 : question.options.map(option => {
      return /*#__PURE__*/jsx_runtime_.jsx(Option, {
        option: option
      }, option === null || option === void 0 ? void 0 : option.id);
    })), (question === null || question === void 0 ? void 0 : question.answer_type) == "short_paragraph" && /*#__PURE__*/jsx_runtime_.jsx(TextAnswer, {})]
  });
}
const Options_Container = (0,core_.withStyles)({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#eef3f7",
    marginTop: "0.5rem",
    padding: "0 0.5rem"
  }
})(core_.Box);
;// CONCATENATED MODULE: ./Components/QuizTest/Questions/SingleQuestion/Question/Question.tsx







function Question({}) {
  var _question$image, _question$image2;

  const {
    question
  } = (0,external_react_.useContext)(QuestionContext);
  return /*#__PURE__*/jsx_runtime_.jsx(Question_Container, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(QuestionContainer, {
      children: [(question === null || question === void 0 ? void 0 : question.question) && /*#__PURE__*/(0,jsx_runtime_.jsxs)(QuestionTitleContainer, {
        children: [(question === null || question === void 0 ? void 0 : question.answer_type) == "checkboxes" && /*#__PURE__*/jsx_runtime_.jsx(QuestionTitle, {
          variant: "caption",
          children: "*Multiple Answers Might Be Correct."
        }), /*#__PURE__*/jsx_runtime_.jsx(QuestionTitle, {
          variant: "subtitle1",
          children: `Q. ${question === null || question === void 0 ? void 0 : question.question}`
        })]
      }), (question === null || question === void 0 ? void 0 : (_question$image = question.image) === null || _question$image === void 0 ? void 0 : _question$image.image_link) && /*#__PURE__*/jsx_runtime_.jsx(core_.Avatar, {
        src: `${url/* backend_url */.LL}/storage/${question === null || question === void 0 ? void 0 : (_question$image2 = question.image) === null || _question$image2 === void 0 ? void 0 : _question$image2.image_link}`,
        variant: "square",
        style: {
          height: 200,
          width: 200,
          margin: "0.2rem 0"
        }
      }), (question === null || question === void 0 ? void 0 : question.options) && /*#__PURE__*/jsx_runtime_.jsx(Options, {})]
    })
  });
}
const Question_Container = (0,core_.withStyles)({
  root: {
    width: "100%",
    height: "50vh",
    overflowY: "scroll",
    overflowX: "hidden"
  }
})(core_.Box);
const QuestionTitle = (0,core_.withStyles)({
  root: {
    fontWeight: 600,
    padding: "0 0.5rem"
  }
})(core_.Typography);
const QuestionTitleContainer = (0,core_.withStyles)({
  root: {
    display: "flex",
    flexDirection: "column"
  }
})(core_.Box);
const QuestionContainer = (0,core_.withStyles)({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
})(core_.Box);
;// CONCATENATED MODULE: ./Components/QuizTest/Questions/SingleQuestion/useSingleQuestion.tsx

function useSingleQuestion(index, currentQuestionIndex) {
  const {
    0: isVisible,
    1: setIsVisible
  } = (0,external_react_.useState)(index == currentQuestionIndex);
  const {
    0: direction,
    1: setDirection
  } = (0,external_react_.useState)("right");
  (0,external_react_.useEffect)(() => {
    if (currentQuestionIndex > index) {
      setDirection("right");
    } else if (currentQuestionIndex < index) {
      setDirection("left");
    }

    setIsVisible(index == currentQuestionIndex);
  }, [currentQuestionIndex]);
  return {
    isVisible,
    direction
  };
}
;// CONCATENATED MODULE: ./Components/QuizTest/Questions/SingleQuestion/SingleQuestion.tsx






const QuestionContext = /*#__PURE__*/(0,external_react_.createContext)(null);
function SingleQuestion({
  question,
  index
}) {
  const {
    currentQuestionIndex
  } = (0,external_react_.useContext)(QuizTestStateContext);
  const {
    isVisible,
    direction
  } = useSingleQuestion(index, currentQuestionIndex);
  return /*#__PURE__*/jsx_runtime_.jsx(core_.Fade, {
    in: isVisible,
    timeout: 250,
    children: isVisible ? /*#__PURE__*/jsx_runtime_.jsx(SingleQuestion_Container, {
      children: /*#__PURE__*/jsx_runtime_.jsx(QuestionContext.Provider, {
        value: {
          question
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(Question, {})
      })
    }) : /*#__PURE__*/jsx_runtime_.jsx("div", {})
  });
}
const SingleQuestion_Container = (0,core_.withStyles)({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "0.5rem 1rem",
    transition: "1s"
  }
})(core_.Box);
;// CONCATENATED MODULE: ./Components/QuizTest/Questions/QuestionBottomBar/QuestionCountAndTimer/QuestionCountAndTimer.tsx





function QuestionCountAndTimer() {
  const {
    questionCount,
    currentQuestionIndex,
    timeRemaining,
    secondsRemaining
  } = (0,external_react_.useContext)(QuizTestStateContext);
  const classes = QuestionCountAndTimer_useStyles({
    secondsRemaining
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(QuestionCountAndTimer_Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(QuestionCount, {
      variant: "subtitle2",
      children: `Q.${currentQuestionIndex + 1}/${questionCount}`
    }), /*#__PURE__*/jsx_runtime_.jsx(TimeRemaining, {
      variant: "subtitle2",
      className: classes.timeRemaining,
      children: timeRemaining
    })]
  });
}
const QuestionCountAndTimer_Container = (0,core_.withStyles)({
  root: {
    float: "left",
    display: "flex",
    alignItems: "center"
  }
})(core_.Box);
const QuestionCount = (0,core_.withStyles)({
  root: {
    marginRight: "1rem",
    fontWeight: 600
  }
})(core_.Typography);
const TimeRemaining = (0,core_.withStyles)({
  root: {
    fontWeight: 600
  }
})(core_.Typography);
const QuestionCountAndTimer_useStyles = (0,core_.makeStyles)({
  timeRemaining: {
    color: ({
      secondsRemaining
    }) => {
      return secondsRemaining > 60 ? "black" : "red";
    }
  }
});
;// CONCATENATED MODULE: ./Components/QuizTest/Questions/QuestionBottomBar/QuestionBottomBar.tsx






function QuestionBottomBar({}) {
  const {
    goToNextQuestion,
    goToPreviousQuestion,
    showNext,
    showPrevious
  } = (0,external_react_.useContext)(QuizTestStateContext);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(QuestionBottomBar_Container, {
    children: [showNext && /*#__PURE__*/jsx_runtime_.jsx(Button, {
      onClick: goToNextQuestion,
      children: /*#__PURE__*/jsx_runtime_.jsx(ButtonText, {
        variant: "caption",
        color: "inherit",
        children: "Next"
      })
    }), showPrevious && /*#__PURE__*/jsx_runtime_.jsx(Button, {
      onClick: goToPreviousQuestion,
      children: /*#__PURE__*/jsx_runtime_.jsx(ButtonText, {
        variant: "caption",
        color: "inherit",
        children: "Prev"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(QuestionCountAndTimer, {})]
  });
}
const QuestionBottomBar_Container = (0,core_.withStyles)({
  root: {
    backgroundColor: "#f0f2f5",
    padding: "0.5rem"
  }
})(core_.Box);
const Button = (0,core_.withStyles)({
  root: {
    float: "right",
    color: "white",
    backgroundColor: "#0e62cb",
    padding: "0.2rem",
    margin: "auto 0.2rem",
    borderRadius: 5,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#09448e"
    }
  }
})(core_.Box);
const ButtonText = (0,core_.withStyles)({
  root: {
    fontWeight: 600,
    textTransform: "capitalize"
  }
})(core_.Typography);
// EXTERNAL MODULE: ./custom-hooks/useLocalState.ts + 1 modules
var useLocalState = __webpack_require__(2392);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./repository/QuizTest/submitTest.tsx


async function submitTest(testId, answers, token) {
  if (!answers) return;
  const response = await external_axios_default().post(`${url/* local_backend_url */.a9}/api/quiz-test/answers/store`, {
    test_id: testId,
    options: answers
  }, {
    headers: {
      Accept: "Application/json",
      Authorization: `Bearer ${token}`
    }
  }).then(response => {
    return response.data;
  }).catch(() => {
    return {
      error: "network error"
    };
  });
  return response;
}
;// CONCATENATED MODULE: ./Components/QuizTest/Questions/useTestState.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function useTestState(quizId, questions, test, duration) {
  const [user] = (0,useLocalState/* default */.Z)("user", "");
  const [answers, setAnswersState] = (0,useLocalState/* default */.Z)(`${user === null || user === void 0 ? void 0 : user.email}-test${test === null || test === void 0 ? void 0 : test.id}-answers`, {});
  const {
    0: currentQuestionIndex,
    1: setCurrentQuestionIndex
  } = (0,external_react_.useState)(0);
  const {
    0: progress,
    1: setProgress
  } = (0,external_react_.useState)(getProgress());
  const {
    0: secondsRemaining,
    1: setSecondsRemaining
  } = (0,external_react_.useState)(() => {
    if (!test) return 600;
    return getTimeRemainingInSeconds(test === null || test === void 0 ? void 0 : test.created_at, duration.toString());
  });
  const {
    0: timeRemaining,
    1: setTimeRemaing
  } = (0,external_react_.useState)("");
  const {
    0: showSubmitButton,
    1: setShowSubmitButton
  } = (0,external_react_.useState)(false);
  const {
    0: isSubmitting,
    1: setIsSubmitting
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    setInterval(() => {
      setSecondsRemaining(getTimeRemainingInSeconds(test === null || test === void 0 ? void 0 : test.created_at, duration));
    }, 500);
  }, []);
  (0,external_react_.useEffect)(() => {
    if (secondsRemaining <= 0) {
      handleSubmit();
      setTimeRemaing("Test Finished");
    } else {
      setTimeRemaing(parseSecondsToClock(secondsRemaining));
    }
  }, [secondsRemaining]);
  (0,external_react_.useEffect)(() => {
    setProgress(getProgress());

    if (currentQuestionIndex == (questions === null || questions === void 0 ? void 0 : questions.length) - 1) {
      setShowSubmitButton(true);
    } else {
      setShowSubmitButton(false);
    }
  }, [currentQuestionIndex]);

  const setAnswers = (optionId, question, text) => {
    setAnswersState(state => {
      let tempAnswers = _objectSpread({}, state);

      if (question.answer_type === "multiple_choice") {
        const options = tempAnswers[`${question === null || question === void 0 ? void 0 : question.id}`];

        if (!options || Array.isArray(options) && !options[0]) {
          tempAnswers = _objectSpread(_objectSpread({}, state), {}, {
            [`${question === null || question === void 0 ? void 0 : question.id}`]: [{
              optionId: optionId
            }]
          });
        }

        if (options && Array.isArray(options) && options[0]) {
          var _options$;

          if (((_options$ = options[0]) === null || _options$ === void 0 ? void 0 : _options$.optionId) == optionId) {
            tempAnswers = _objectSpread(_objectSpread({}, state), {}, {
              [`${question === null || question === void 0 ? void 0 : question.id}`]: []
            });
          } else {
            tempAnswers = _objectSpread(_objectSpread({}, state), {}, {
              [`${question === null || question === void 0 ? void 0 : question.id}`]: [{
                optionId: optionId
              }]
            });
          }
        }
      } else if ((question === null || question === void 0 ? void 0 : question.answer_type) === "checkboxes") {
        const options = tempAnswers[`${question === null || question === void 0 ? void 0 : question.id}`];

        if (!options || Array.isArray(options) && !options[0]) {
          tempAnswers = _objectSpread(_objectSpread({}, state), {}, {
            [`${question === null || question === void 0 ? void 0 : question.id}`]: [{
              optionId: optionId
            }]
          });
        }

        if (options && Array.isArray(options)) {
          let includes = false;
          options === null || options === void 0 ? void 0 : options.forEach(option => {
            if ((option === null || option === void 0 ? void 0 : option.optionId) == optionId) {
              includes = true;
            }
          });

          if (includes) {
            tempAnswers = _objectSpread(_objectSpread({}, state), {}, {
              [`${question === null || question === void 0 ? void 0 : question.id}`]: options === null || options === void 0 ? void 0 : options.filter(option => {
                return (option === null || option === void 0 ? void 0 : option.optionId) != optionId;
              })
            });
          } else {
            tempAnswers = _objectSpread(_objectSpread({}, state), {}, {
              [`${question === null || question === void 0 ? void 0 : question.id}`]: [...options, {
                optionId: optionId
              }]
            });
          }
        }
      } else if ((question === null || question === void 0 ? void 0 : question.answer_type) === "short_paragraph") {
        if (!text) return _objectSpread({}, tempAnswers);
        tempAnswers = _objectSpread(_objectSpread({}, state), {}, {
          [`${question === null || question === void 0 ? void 0 : question.id}`]: [{
            optionId: optionId,
            text: text
          }]
        });
      }

      return _objectSpread({}, tempAnswers);
    });
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex >= (questions === null || questions === void 0 ? void 0 : questions.length) - 1) return;
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex <= 0) return;
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const showPrevious = currentQuestionIndex != 0;
  const showNext = currentQuestionIndex < (questions === null || questions === void 0 ? void 0 : questions.length) - 1;

  function getProgress() {
    if ((questions === null || questions === void 0 ? void 0 : questions.length) == 0) return 100;
    return (currentQuestionIndex + 1) * 100 / (questions === null || questions === void 0 ? void 0 : questions.length);
  }

  async function handleSubmit() {
    var _Object$values;

    if (!answers) alert("Not enough answers to submit!");
    setIsSubmitting(true);
    const processedAnswers = [];
    (_Object$values = Object.values(answers)) === null || _Object$values === void 0 ? void 0 : _Object$values.forEach(answer => {
      if (answer && Array.isArray(answer)) {
        answer === null || answer === void 0 ? void 0 : answer.forEach(option => {
          if (option !== null && option !== void 0 && option.optionId) {
            processedAnswers.push({
              optionId: option === null || option === void 0 ? void 0 : option.optionId,
              text: option !== null && option !== void 0 && option.text ? option === null || option === void 0 ? void 0 : option.text : ""
            });
          }
        });
      }
    });
    const response = await submitTest(test === null || test === void 0 ? void 0 : test.id, processedAnswers, user === null || user === void 0 ? void 0 : user.token);

    if (response.error || response == "error") {
      alert("Something went wrong. Please refresh and submit the test.");
      return;
    }

    setAnswersState({});
    window.location.href = `/test/${test === null || test === void 0 ? void 0 : test.id}/result`;
    setIsSubmitting(false);
  }

  return {
    answers,
    setAnswers,
    progress,
    currentQuestionIndex,
    goToNextQuestion,
    goToPreviousQuestion,
    showPrevious,
    showNext,
    timeRemaining,
    secondsRemaining,
    showSubmitButton,
    isSubmitting,
    handleSubmit
  };
}

function getTimeRemainingInSeconds(start_time, duration) {
  const totalDurationInSeconds = getSecondsFromDuration(duration);
  const start = new Date(`${start_time}`);
  const now = new Date();
  const end = new Date(`${start_time}`);
  end.setTime(start.getTime() + totalDurationInSeconds * 1000);
  const secondsLeft = (end.getTime() - now.getTime()) / 1000;
  return Math.floor(secondsLeft);
}

function getSecondsFromDuration(duration) {
  const [hours, mins, seconds] = duration.split(":");
  let totalSeconds = 0;
  totalSeconds += parseInt(hours) * 60 * 60;
  totalSeconds += parseInt(mins) * 60;
  totalSeconds += parseInt(seconds);
  return totalSeconds;
}

function parseSecondsToClock(secondsRemaining) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = Math.floor(secondsRemaining % 60);
  return `${mins < 10 ? `0${mins}` : mins}:${seconds < 10 ? `0${seconds}` : seconds}`;
}
;// CONCATENATED MODULE: ./Components/QuizTest/Questions/QuestionsProgressBar/QuestionsProgressBar.tsx


function QuestionsProgressBar({
  progress
}) {
  const classes = QuestionsProgressBar_useStyles({
    progress
  });
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes === null || classes === void 0 ? void 0 : classes.container,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes === null || classes === void 0 ? void 0 : classes.progress
    })
  });
}
const QuestionsProgressBar_useStyles = (0,core_.makeStyles)({
  container: {
    width: "100%",
    backgroundColor: "#d7d7dc",
    margin: 0
  },
  progress: {
    width: ({
      progress
    }) => {
      return `${progress}%`;
    },
    padding: "0.5rem 0",
    transition: "width 0.5s ease-in-out",
    background: "transparent linear-gradient(180deg, #003EAA 0%, #002461E0 100%) 0% 0% no-repeat padding-box"
  }
});
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8604);
;// CONCATENATED MODULE: external "@material-ui/core/Button"
var Button_namespaceObject = require("@material-ui/core/Button");;
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_namespaceObject);
;// CONCATENATED MODULE: ./Components/QuizTest/Submit/useSubmit.tsx

function useSubmit() {
  const {
    0: open,
    1: setOpen
  } = (0,external_react_.useState)(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return {
    open,
    handleOpen,
    handleClose
  };
}
;// CONCATENATED MODULE: ./Components/QuizTest/Submit/SubmitDialog/SubmitDialog.tsx





function SubmitDialog({
  onClose,
  open
}) {
  const {
    isSubmitting,
    handleSubmit
  } = (0,external_react_.useContext)(QuizTestStateContext);
  return /*#__PURE__*/jsx_runtime_.jsx(core_.Dialog, {
    onClose: onClose,
    "aria-labelledby": "simple-dialog-title",
    open: open,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(DialogueContaier, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(SubmitDialog_Title, {
        children: "Are you sure you want to submit the test?"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ButtonsContainer, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(WarningButton, {
          onClick: handleSubmit,
          children: isSubmitting ? "Submitting..." : "Yes"
        }), /*#__PURE__*/jsx_runtime_.jsx(core_.Button, {
          onClick: onClose,
          children: "No"
        })]
      })]
    })
  });
}
const DialogueContaier = (0,core_.withStyles)({
  root: {
    padding: "2rem"
  }
})(core_.Box);
const SubmitDialog_Title = (0,core_.withStyles)({
  root: {
    fontWeight: 600,
    fontSize: "1.3rem",
    margin: "1rem auto"
  }
})(core_.Box);
const ButtonsContainer = (0,core_.withStyles)({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  }
})(core_.Box);
const WarningButton = (0,core_.withStyles)({
  root: {
    backgroundColor: "red",
    color: "white",
    "&:hover": {
      color: "red"
    }
  }
})(core_.Button);
;// CONCATENATED MODULE: ./Components/QuizTest/Submit/Submit.tsx







function Submit() {
  const {
    open,
    handleOpen,
    handleClose
  } = useSubmit();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx(SubmitButton, {
      variant: "outlined",
      fullWidth: true,
      onClick: handleOpen,
      children: "Submit"
    }), /*#__PURE__*/jsx_runtime_.jsx(SubmitDialog, {
      open: open,
      onClose: handleClose
    })]
  });
}
const SubmitButton = (0,styles_.withStyles)({
  root: {
    color: "#0f3a86",
    border: "1px solid #0f3a86",
    marginBottom: "2rem",
    marginTop: "0.5rem"
  }
})((Button_default()));
;// CONCATENATED MODULE: ./Components/QuizTest/Questions/Questions.tsx









const QuizTestStateContext = /*#__PURE__*/(0,external_react_.createContext)(null);
function Questions({
  quizTitle,
  questions,
  isAssessment,
  quizId,
  test,
  duration
}) {
  const {
    answers,
    setAnswers,
    currentQuestionIndex,
    goToNextQuestion,
    goToPreviousQuestion,
    progress,
    showPrevious,
    showNext,
    timeRemaining,
    secondsRemaining,
    showSubmitButton,
    isSubmitting,
    handleSubmit
  } = useTestState(quizId, questions, test, duration);
  return /*#__PURE__*/jsx_runtime_.jsx(QuizTestStateContext.Provider, {
    value: {
      answers,
      setAnswers,
      currentQuestionIndex,
      goToNextQuestion,
      goToPreviousQuestion,
      showPrevious,
      showNext,
      questionCount: questions === null || questions === void 0 ? void 0 : questions.length,
      timeRemaining,
      secondsRemaining,
      isSubmitting,
      handleSubmit
    },
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(OuterContainer, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(QuestionsContainer, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {
          children: /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
            variant: "h6",
            color: "inherit",
            children: `${quizTitle} ${isAssessment ? "assessment" : "quiz"}`
          })
        }), questions && (questions === null || questions === void 0 ? void 0 : questions.map((question, index) => {
          return /*#__PURE__*/jsx_runtime_.jsx(SingleQuestion, {
            index: index,
            question: question
          }, question === null || question === void 0 ? void 0 : question.id);
        })), /*#__PURE__*/jsx_runtime_.jsx(QuestionsProgressBar, {
          progress: progress
        }), /*#__PURE__*/jsx_runtime_.jsx(QuestionBottomBar, {})]
      }), showSubmitButton && /*#__PURE__*/jsx_runtime_.jsx(Submit, {})]
    })
  });
}
const QuestionsContainer = (0,core_.withStyles)({
  root: {
    backgroundColor: "inherit",
    width: "100%",
    borderRadius: 5,
    overflow: "hidden",
    boxShadow: "0px 0px 8px 0px #2b579a",
    display: "flex",
    flexDirection: "column"
  }
})(core_.Box);
const OuterContainer = (0,core_.withStyles)({
  root: {
    width: "min(97%, 700px)",
    display: "flex",
    flexDirection: "column"
  }
})(core_.Box);
const Header = (0,core_.withStyles)({
  root: {
    width: "100%",
    textAlign: "center",
    color: "white",
    padding: "0.5rem 0",
    background: "transparent linear-gradient(180deg, #003EAA 0%, #002461E0 100%) 0% 0% no-repeat padding-box",
    textTransform: "capitalize"
  }
})(core_.Box);
;// CONCATENATED MODULE: ./repository/QuizTest/startTest.tsx


async function startTest(quizId, token) {
  if (!quizId) return;
  const quizStatus = await external_axios_default().post(`${url/* backend_url */.LL}/api/quiz-test/start`, {
    quiz_id: quizId
  }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(response => {
    return response.data;
  });
  return quizStatus;
}
;// CONCATENATED MODULE: ./Components/QuizTest/useQuizTest.tsx



function useQuizTest(quizId) {
  const [user] = (0,useLocalState/* default */.Z)("user", "");
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,external_react_.useState)(false);
  const {
    0: testStatus,
    1: setTestStatus
  } = (0,external_react_.useState)("");
  const {
    0: quiz,
    1: setQuiz
  } = (0,external_react_.useState)();
  const {
    0: test,
    1: setTest
  } = (0,external_react_.useState)();
  (0,external_react_.useEffect)(() => {
    if (!user || !(user !== null && user !== void 0 && user.token)) return;
    fetchStartTest();
  }, []);

  const fetchStartTest = async () => {
    setIsLoading(true);
    const response = await startTest(quizId, user === null || user === void 0 ? void 0 : user.token);
    setTestStatus(response === null || response === void 0 ? void 0 : response.status);
    setQuiz(response === null || response === void 0 ? void 0 : response.quiz);
    setTest(response === null || response === void 0 ? void 0 : response.test);
    setIsLoading(false);
  };

  return {
    isLoading,
    testStatus,
    quiz,
    test
  };
}
;// CONCATENATED MODULE: ./Components/QuizTest/QuizTest.tsx





function QuizTest({
  quizId
}) {
  const {
    quiz,
    test,
    testStatus,
    isLoading
  } = useQuizTest(quizId);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(QuizTest_Container, {
    children: [isLoading && /*#__PURE__*/jsx_runtime_.jsx(core_.CircularProgress, {}), testStatus === "highest_attempt_count_reached" && /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
      variant: "h6",
      color: "error",
      children: "You have reached the highest attempt count."
    }), !isLoading && testStatus !== "highest_attempt_count_reached" && quiz && /*#__PURE__*/jsx_runtime_.jsx(Questions, {
      questions: quiz === null || quiz === void 0 ? void 0 : quiz.questions,
      quizTitle: quiz === null || quiz === void 0 ? void 0 : quiz.title,
      isAssessment: (quiz === null || quiz === void 0 ? void 0 : quiz.assessment) !== null ? quiz.assessment : false,
      quizId: quiz === null || quiz === void 0 ? void 0 : quiz.id,
      duration: quiz === null || quiz === void 0 ? void 0 : quiz.duration,
      test: test
    })]
  });
}
const QuizTest_Container = (0,core_.withStyles)({
  root: {
    display: "flex",
    width: "100vw",
    minHeight: "calc(100vh - 100px)",
    flexDirection: "column",
    alignItems: "center",
    padding: "5rem 0rem 0rem 0rem",
    backgroundColor: "#f0f2f5"
  }
})(core_.Box);
;// CONCATENATED MODULE: ./pages/test/quiz/[id].tsx







const getServerSideProps = async context => {
  const {
    id
  } = context.params;
  return {
    props: {
      quizId: id
    }
  };
};

const Page = ({
  quizId
}) => {
  const [user] = (0,useLocalState/* default */.Z)("user", "");
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Topbar/* default */.Z, {}), !user ? /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
      variant: "h6",
      color: "error",
      children: "Please Login To Continue"
    }) : /*#__PURE__*/jsx_runtime_.jsx(QuizTest, {
      quizId: quizId
    })]
  });
};

/* harmony default export */ var _id_ = (Page);

/***/ }),

/***/ 155:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ({
  normal: 50,
  high: 100,
  higher: 150,
  highest: 200
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

/***/ 9320:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ 5675:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(6255)


/***/ }),

/***/ 1664:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(6071)


/***/ }),

/***/ 1731:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core");;

/***/ }),

/***/ 7693:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/Dialog");;

/***/ }),

/***/ 8604:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/styles");;

/***/ }),

/***/ 7985:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons");;

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 7717:
/***/ (function(module) {

"use strict";
module.exports = require("formik");;

/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(5652));
module.exports = __webpack_exports__;

})();