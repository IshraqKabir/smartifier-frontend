module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/auth/google.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/auth/google.ts":
/*!**********************************!*\
  !*** ./pages/api/auth/google.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! googleapis */ \"googleapis\");\n/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(googleapis__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/*******/\n\n/* CONFIGURATION */\n\n/*******/\n\nconst googleConfig = {\n  clientId: process.env.GOOGLE_CLIENT_ID,\n  // e.g. asdfghjkljhgfdsghjk.apps.googleusercontent.com\n  clientSecret: process.env.GOOGLE_CLIENT_SECRET,\n  // e.g. _ASDFA%DFASDFASDFASD#FAD-\n  redirect: process.env.GOOGLE_REDIRECT_URL // this must match your google api settings\n\n};\nconst defaultScope = [\"https://www.googleapis.com/auth/plus.me\", \"https://www.googleapis.com/auth/userinfo.email\", \"https://www.googleapis.com/auth/userinfo.profile\"];\n/*****/\n\n/* HELPERS */\n\n/*****/\n\nfunction createConnection() {\n  return new googleapis__WEBPACK_IMPORTED_MODULE_1__[\"google\"].auth.OAuth2(googleConfig.clientId, googleConfig.clientSecret, googleConfig.redirect);\n}\n\nfunction getConnectionUrl(auth) {\n  return auth.generateAuthUrl({\n    access_type: \"offline\",\n    prompt: \"consent\",\n    scope: defaultScope\n  });\n}\n\nfunction getGooglePlusApi(auth) {\n  return googleapis__WEBPACK_IMPORTED_MODULE_1__[\"google\"].plus({\n    version: \"v1\",\n    auth\n  });\n}\n/****/\n\n/* MAIN */\n\n/****/\n\n/**\n * Part 1: Create a Google URL and send to the client to log in the user.\n */\n\n\nfunction urlGoogle() {\n  const auth = createConnection();\n  const url = getConnectionUrl(auth);\n  return url;\n}\n/**\n * Part 2: Take the \"code\" parameter which Google gives us once when the user logs in, then get the user's email and id.\n */\n\n\nasync function getGoogleAccountFromCode(code) {\n  const data = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`https://oauth2.googleapis.com/token`, {\n    code: code,\n    client_id: googleConfig.clientId,\n    client_secret: googleConfig.clientSecret,\n    redirect_uri: googleConfig.redirect,\n    grant_type: \"authorization_code\",\n    headers: {\n      \"Content-Type\": \"application/x-www-form-urlencoded\"\n    }\n  }).then(res => res.data).catch(err => err); // const auth = createConnection();\n  // const data = await auth.getToken(code);\n\n  return {\n    data\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const {\n    get\n  } = req.query;\n\n  if (get === \"link\") {\n    res.statusCode = 200;\n    const url = urlGoogle();\n    res.json({\n      url\n    });\n  } else if (get === \"user\") {\n    if (!req.query.code) {\n      res.statusCode = 500;\n    } else {\n      const {\n        code\n      } = req.query;\n      const user = await getGoogleAccountFromCode(code);\n      res.statusCode = 200;\n      res.json({\n        user\n      });\n    }\n  } else {\n    res.statusCode = 500;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9nb29nbGUudHM/OWM4MSJdLCJuYW1lcyI6WyJnb29nbGVDb25maWciLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJyZWRpcmVjdCIsIkdPT0dMRV9SRURJUkVDVF9VUkwiLCJkZWZhdWx0U2NvcGUiLCJjcmVhdGVDb25uZWN0aW9uIiwiZ29vZ2xlIiwiYXV0aCIsIk9BdXRoMiIsImdldENvbm5lY3Rpb25VcmwiLCJnZW5lcmF0ZUF1dGhVcmwiLCJhY2Nlc3NfdHlwZSIsInByb21wdCIsInNjb3BlIiwiZ2V0R29vZ2xlUGx1c0FwaSIsInBsdXMiLCJ2ZXJzaW9uIiwidXJsR29vZ2xlIiwidXJsIiwiZ2V0R29vZ2xlQWNjb3VudEZyb21Db2RlIiwiY29kZSIsImRhdGEiLCJheGlvcyIsInBvc3QiLCJjbGllbnRfaWQiLCJjbGllbnRfc2VjcmV0IiwicmVkaXJlY3RfdXJpIiwiZ3JhbnRfdHlwZSIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwiY2F0Y2giLCJlcnIiLCJyZXEiLCJnZXQiLCJxdWVyeSIsInN0YXR1c0NvZGUiLCJqc29uIiwidXNlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUc7QUFDbkJDLFVBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGdCQURIO0FBQ3FCO0FBQ3hDQyxjQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxvQkFGUDtBQUU2QjtBQUNoREMsVUFBUSxFQUFFTCxPQUFPLENBQUNDLEdBQVIsQ0FBWUssbUJBSEgsQ0FHd0I7O0FBSHhCLENBQXJCO0FBTUEsTUFBTUMsWUFBWSxHQUFHLENBQ25CLHlDQURtQixFQUVuQixnREFGbUIsRUFHbkIsa0RBSG1CLENBQXJCO0FBTUE7O0FBQ0E7O0FBQ0E7O0FBRUEsU0FBU0MsZ0JBQVQsR0FBNEI7QUFDMUIsU0FBTyxJQUFJQyxpREFBTSxDQUFDQyxJQUFQLENBQVlDLE1BQWhCLENBQ0xiLFlBQVksQ0FBQ0MsUUFEUixFQUVMRCxZQUFZLENBQUNLLFlBRlIsRUFHTEwsWUFBWSxDQUFDTyxRQUhSLENBQVA7QUFLRDs7QUFFRCxTQUFTTyxnQkFBVCxDQUEwQkYsSUFBMUIsRUFBZ0M7QUFDOUIsU0FBT0EsSUFBSSxDQUFDRyxlQUFMLENBQXFCO0FBQzFCQyxlQUFXLEVBQUUsU0FEYTtBQUUxQkMsVUFBTSxFQUFFLFNBRmtCO0FBRzFCQyxTQUFLLEVBQUVUO0FBSG1CLEdBQXJCLENBQVA7QUFLRDs7QUFFRCxTQUFTVSxnQkFBVCxDQUEwQlAsSUFBMUIsRUFBZ0M7QUFDOUIsU0FBT0QsaURBQU0sQ0FBQ1MsSUFBUCxDQUFZO0FBQUVDLFdBQU8sRUFBRSxJQUFYO0FBQWlCVDtBQUFqQixHQUFaLENBQVA7QUFDRDtBQUVEOztBQUNBOztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU1UsU0FBVCxHQUFxQjtBQUNuQixRQUFNVixJQUFJLEdBQUdGLGdCQUFnQixFQUE3QjtBQUNBLFFBQU1hLEdBQUcsR0FBR1QsZ0JBQWdCLENBQUNGLElBQUQsQ0FBNUI7QUFDQSxTQUFPVyxHQUFQO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7OztBQUNBLGVBQWVDLHdCQUFmLENBQXdDQyxJQUF4QyxFQUE4QztBQUM1QyxRQUFNQyxJQUFJLEdBQUcsTUFBTUMsNENBQUssQ0FDckJDLElBRGdCLENBQ1YscUNBRFUsRUFDNEI7QUFDM0NILFFBQUksRUFBRUEsSUFEcUM7QUFFM0NJLGFBQVMsRUFBRTdCLFlBQVksQ0FBQ0MsUUFGbUI7QUFHM0M2QixpQkFBYSxFQUFFOUIsWUFBWSxDQUFDSyxZQUhlO0FBSTNDMEIsZ0JBQVksRUFBRS9CLFlBQVksQ0FBQ08sUUFKZ0I7QUFLM0N5QixjQUFVLEVBQUUsb0JBTCtCO0FBTTNDQyxXQUFPLEVBQUU7QUFDUCxzQkFBZ0I7QUFEVDtBQU5rQyxHQUQ1QixFQVdoQkMsSUFYZ0IsQ0FXVkMsR0FBRCxJQUFTQSxHQUFHLENBQUNULElBWEYsRUFZaEJVLEtBWmdCLENBWVRDLEdBQUQsSUFBU0EsR0FaQyxDQUFuQixDQUQ0QyxDQWU1QztBQUNBOztBQUNBLFNBQU87QUFBRVg7QUFBRixHQUFQO0FBQ0Q7O0FBRWMsc0VBQU9ZLEdBQVAsRUFBWUgsR0FBWixLQUFvQjtBQUNqQyxRQUFNO0FBQUVJO0FBQUYsTUFBVUQsR0FBRyxDQUFDRSxLQUFwQjs7QUFFQSxNQUFJRCxHQUFHLEtBQUssTUFBWixFQUFvQjtBQUNsQkosT0FBRyxDQUFDTSxVQUFKLEdBQWlCLEdBQWpCO0FBQ0EsVUFBTWxCLEdBQUcsR0FBR0QsU0FBUyxFQUFyQjtBQUNBYSxPQUFHLENBQUNPLElBQUosQ0FBUztBQUFFbkI7QUFBRixLQUFUO0FBQ0QsR0FKRCxNQUlPLElBQUlnQixHQUFHLEtBQUssTUFBWixFQUFvQjtBQUN6QixRQUFJLENBQUNELEdBQUcsQ0FBQ0UsS0FBSixDQUFVZixJQUFmLEVBQXFCO0FBQ25CVSxTQUFHLENBQUNNLFVBQUosR0FBaUIsR0FBakI7QUFDRCxLQUZELE1BRU87QUFDTCxZQUFNO0FBQUVoQjtBQUFGLFVBQVdhLEdBQUcsQ0FBQ0UsS0FBckI7QUFFQSxZQUFNRyxJQUFJLEdBQUcsTUFBTW5CLHdCQUF3QixDQUFDQyxJQUFELENBQTNDO0FBRUFVLFNBQUcsQ0FBQ00sVUFBSixHQUFpQixHQUFqQjtBQUNBTixTQUFHLENBQUNPLElBQUosQ0FBUztBQUFFQztBQUFGLE9BQVQ7QUFDRDtBQUNGLEdBWE0sTUFXQTtBQUNMUixPQUFHLENBQUNNLFVBQUosR0FBaUIsR0FBakI7QUFDRDtBQUNGLENBckJEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2F1dGgvZ29vZ2xlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgZ29vZ2xlIH0gZnJvbSBcImdvb2dsZWFwaXNcIjtcblxuLyoqKioqKiovXG4vKiBDT05GSUdVUkFUSU9OICovXG4vKioqKioqKi9cblxuY29uc3QgZ29vZ2xlQ29uZmlnID0ge1xuICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCwgLy8gZS5nLiBhc2RmZ2hqa2xqaGdmZHNnaGprLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tXG4gIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsIC8vIGUuZy4gX0FTREZBJURGQVNERkFTREZBU0QjRkFELVxuICByZWRpcmVjdDogcHJvY2Vzcy5lbnYuR09PR0xFX1JFRElSRUNUX1VSTCwgLy8gdGhpcyBtdXN0IG1hdGNoIHlvdXIgZ29vZ2xlIGFwaSBzZXR0aW5nc1xufTtcblxuY29uc3QgZGVmYXVsdFNjb3BlID0gW1xuICBcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvcGx1cy5tZVwiLFxuICBcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvdXNlcmluZm8uZW1haWxcIixcbiAgXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3VzZXJpbmZvLnByb2ZpbGVcIixcbl07XG5cbi8qKioqKi9cbi8qIEhFTFBFUlMgKi9cbi8qKioqKi9cblxuZnVuY3Rpb24gY3JlYXRlQ29ubmVjdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBnb29nbGUuYXV0aC5PQXV0aDIoXG4gICAgZ29vZ2xlQ29uZmlnLmNsaWVudElkLFxuICAgIGdvb2dsZUNvbmZpZy5jbGllbnRTZWNyZXQsXG4gICAgZ29vZ2xlQ29uZmlnLnJlZGlyZWN0XG4gICk7XG59XG5cbmZ1bmN0aW9uIGdldENvbm5lY3Rpb25VcmwoYXV0aCkge1xuICByZXR1cm4gYXV0aC5nZW5lcmF0ZUF1dGhVcmwoe1xuICAgIGFjY2Vzc190eXBlOiBcIm9mZmxpbmVcIixcbiAgICBwcm9tcHQ6IFwiY29uc2VudFwiLFxuICAgIHNjb3BlOiBkZWZhdWx0U2NvcGUsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRHb29nbGVQbHVzQXBpKGF1dGgpIHtcbiAgcmV0dXJuIGdvb2dsZS5wbHVzKHsgdmVyc2lvbjogXCJ2MVwiLCBhdXRoIH0pO1xufVxuXG4vKioqKi9cbi8qIE1BSU4gKi9cbi8qKioqL1xuXG4vKipcbiAqIFBhcnQgMTogQ3JlYXRlIGEgR29vZ2xlIFVSTCBhbmQgc2VuZCB0byB0aGUgY2xpZW50IHRvIGxvZyBpbiB0aGUgdXNlci5cbiAqL1xuZnVuY3Rpb24gdXJsR29vZ2xlKCkge1xuICBjb25zdCBhdXRoID0gY3JlYXRlQ29ubmVjdGlvbigpO1xuICBjb25zdCB1cmwgPSBnZXRDb25uZWN0aW9uVXJsKGF1dGgpO1xuICByZXR1cm4gdXJsO1xufVxuXG4vKipcbiAqIFBhcnQgMjogVGFrZSB0aGUgXCJjb2RlXCIgcGFyYW1ldGVyIHdoaWNoIEdvb2dsZSBnaXZlcyB1cyBvbmNlIHdoZW4gdGhlIHVzZXIgbG9ncyBpbiwgdGhlbiBnZXQgdGhlIHVzZXIncyBlbWFpbCBhbmQgaWQuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldEdvb2dsZUFjY291bnRGcm9tQ29kZShjb2RlKSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvc1xuICAgIC5wb3N0KGBodHRwczovL29hdXRoMi5nb29nbGVhcGlzLmNvbS90b2tlbmAsIHtcbiAgICAgIGNvZGU6IGNvZGUsXG4gICAgICBjbGllbnRfaWQ6IGdvb2dsZUNvbmZpZy5jbGllbnRJZCxcbiAgICAgIGNsaWVudF9zZWNyZXQ6IGdvb2dsZUNvbmZpZy5jbGllbnRTZWNyZXQsXG4gICAgICByZWRpcmVjdF91cmk6IGdvb2dsZUNvbmZpZy5yZWRpcmVjdCxcbiAgICAgIGdyYW50X3R5cGU6IFwiYXV0aG9yaXphdGlvbl9jb2RlXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXG4gICAgICB9LFxuICAgIH0pXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmRhdGEpXG4gICAgLmNhdGNoKChlcnIpID0+IGVycik7XG5cbiAgLy8gY29uc3QgYXV0aCA9IGNyZWF0ZUNvbm5lY3Rpb24oKTtcbiAgLy8gY29uc3QgZGF0YSA9IGF3YWl0IGF1dGguZ2V0VG9rZW4oY29kZSk7XG4gIHJldHVybiB7IGRhdGEgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHsgZ2V0IH0gPSByZXEucXVlcnk7XG5cbiAgaWYgKGdldCA9PT0gXCJsaW5rXCIpIHtcbiAgICByZXMuc3RhdHVzQ29kZSA9IDIwMDtcbiAgICBjb25zdCB1cmwgPSB1cmxHb29nbGUoKTtcbiAgICByZXMuanNvbih7IHVybCB9KTtcbiAgfSBlbHNlIGlmIChnZXQgPT09IFwidXNlclwiKSB7XG4gICAgaWYgKCFyZXEucXVlcnkuY29kZSkge1xuICAgICAgcmVzLnN0YXR1c0NvZGUgPSA1MDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgY29kZSB9ID0gcmVxLnF1ZXJ5O1xuXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0R29vZ2xlQWNjb3VudEZyb21Db2RlKGNvZGUpO1xuXG4gICAgICByZXMuc3RhdHVzQ29kZSA9IDIwMDtcbiAgICAgIHJlcy5qc29uKHsgdXNlciB9KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzLnN0YXR1c0NvZGUgPSA1MDA7XG4gIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/auth/google.ts\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "googleapis":
/*!*****************************!*\
  !*** external "googleapis" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"googleapis\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJnb29nbGVhcGlzXCI/MzExYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJnb29nbGVhcGlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ29vZ2xlYXBpc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///googleapis\n");

/***/ })

/******/ });