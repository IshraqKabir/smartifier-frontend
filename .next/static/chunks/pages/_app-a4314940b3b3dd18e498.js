(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6808:function(e,n,t){var r,o;!function(i){if(void 0===(o="function"===typeof(r=i)?r.call(n,t,n,e):r)||(e.exports=o),!0,e.exports=i(),!!0){var c=window.Cookies,u=window.Cookies=i();u.noConflict=function(){return window.Cookies=c,u}}}((function(){function e(){for(var e=0,n={};e<arguments.length;e++){var t=arguments[e];for(var r in t)n[r]=t[r]}return n}function n(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function t(r){function o(){}function i(n,t,i){if("undefined"!==typeof document){"number"===typeof(i=e({path:"/"},o.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var c=JSON.stringify(t);/^[\{\[]/.test(c)&&(t=c)}catch(f){}t=r.write?r.write(t,n):encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var u="";for(var a in i)i[a]&&(u+="; "+a,!0!==i[a]&&(u+="="+i[a].split(";")[0]));return document.cookie=n+"="+t+u}}function c(e,t){if("undefined"!==typeof document){for(var o={},i=document.cookie?document.cookie.split("; "):[],c=0;c<i.length;c++){var u=i[c].split("="),a=u.slice(1).join("=");t||'"'!==a.charAt(0)||(a=a.slice(1,-1));try{var f=n(u[0]);if(a=(r.read||r)(a,f)||n(a),t)try{a=JSON.parse(a)}catch(s){}if(o[f]=a,e===f)break}catch(s){}}return e?o[e]:o}}return o.set=i,o.get=function(e){return c(e,!1)},o.getJSON=function(e){return c(e,!0)},o.remove=function(n,t){i(n,"",e(t,{expires:-1}))},o.defaults={},o.withConverter=t,o}((function(){}))}))},2370:function(e,n,t){"use strict";var r=t(7294);n.Z=(0,r.createContext)(null)},3316:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(7294),o=t(6808),i=t.n(o);function c(e,n){var t=(0,r.useState)((function(){return u(e)})),o=t[0],i=t[1];(0,r.useEffect)((function(){var n=function(n){n.storageArea===localStorage&&n.key===e&&i(JSON.parse(n.newValue))};return window.addEventListener("storage",n),a()||setInterval((function(){JSON.stringify(s(e))!=JSON.stringify(o)&&i(s(e))}),500),function(){window.removeEventListener("storage",n)}}),[e]);return[o,function(n){i((function(t){var r=null;return r="function"===typeof n?n(t):n,a()?localStorage.setItem(e,JSON.stringify(r)):f(e,r),r}))}]}var u=function(e){if(a()){var n=localStorage.getItem(e);return n?JSON.parse(n):n}return s(e)},a=function(){return!0},f=function(e,n){i().set(e?JSON.stringify(e):e,n?JSON.stringify(n):n)},s=function(e){var n=i().get(JSON.stringify(e));return n?JSON.parse(n):n}},3345:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return C}});var r=t(6156),o=t(5893),i=t(4699),c=t(7294),u=t(9008),a=t(2122),f=(t(5697),t(3800)),s=t(159),l=t(7076);var p=function(e){var n=e.children,t=e.theme,r=(0,s.Z)(),o=c.useMemo((function(){var e=null===r?t:function(e,n){return"function"===typeof n?n(e):(0,a.Z)({},e,n)}(r,t);return null!=e&&(e[l.Z]=null!==r),e}),[t,r]);return c.createElement(f.Z.Provider,{value:o},n)},d=t(4670),g={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},v=function(e){return(0,a.Z)({color:e.palette.text.primary},e.typography.body2,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}})};var m=(0,d.Z)((function(e){return{"@global":{html:g,"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,a.Z)({margin:0},v(e),{"&::backdrop":{backgroundColor:e.palette.background.default}})}}}),{name:"MuiCssBaseline"})((function(e){var n=e.children,t=void 0===n?null:n;return e.classes,c.createElement(c.Fragment,null,t)})),y=t(4506),h=t(907),b=(0,y.Z)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:h.Z.A400},background:{default:"#fff"}}}),w=(t(1853),t(3316)),O=t(2370);function S(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?S(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function C(e){var n=e.Component,t=e.pageProps,r=(0,w.Z)("user",""),a=(0,i.Z)(r,2),f=a[0],s=a[1];return c.useEffect((function(){var e=document.querySelector("#jss-server-side");e&&e.parentElement.removeChild(e)}),[]),(0,o.jsxs)(c.Fragment,{children:[(0,o.jsxs)(u.default,{children:[(0,o.jsx)("title",{children:"Smartifier"}),(0,o.jsx)("meta",{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width"})]}),(0,o.jsxs)(p,{theme:b,children:[(0,o.jsx)(m,{}),(0,o.jsx)(O.Z.Provider,{value:{user:f,setUser:s},children:(0,o.jsx)(n,x({},t))})]})]})}},6363:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(3345)}])},1853:function(){},9008:function(e,n,t){e.exports=t(7947)}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,351,670],(function(){return n(6363),n(2441)}));var t=e.O();_N_E=t}]);