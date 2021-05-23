(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[703],{5477:function(e,r,n){"use strict";var t=n(2122),a=n(2949),o=n(7294),i=(n(5697),n(6010)),s=n(4670),c=n(3871),l=44,u=o.forwardRef((function(e,r){var n=e.classes,s=e.className,u=e.color,d=void 0===u?"primary":u,m=e.disableShrink,h=void 0!==m&&m,p=e.size,f=void 0===p?40:p,v=e.style,g=e.thickness,b=void 0===g?3.6:g,x=e.value,w=void 0===x?0:x,y=e.variant,N=void 0===y?"indeterminate":y,k=(0,a.Z)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),Z={},C={},j={};if("determinate"===N||"static"===N){var _=2*Math.PI*((l-b)/2);Z.strokeDasharray=_.toFixed(3),j["aria-valuenow"]=Math.round(w),Z.strokeDashoffset="".concat(((100-w)/100*_).toFixed(3),"px"),C.transform="rotate(-90deg)"}return o.createElement("div",(0,t.Z)({className:(0,i.Z)(n.root,s,"inherit"!==d&&n["color".concat((0,c.Z)(d))],{determinate:n.determinate,indeterminate:n.indeterminate,static:n.static}[N]),style:(0,t.Z)({width:f,height:f},C,v),ref:r,role:"progressbar"},j,k),o.createElement("svg",{className:n.svg,viewBox:"".concat(22," ").concat(22," ").concat(l," ").concat(l)},o.createElement("circle",{className:(0,i.Z)(n.circle,h&&n.circleDisableShrink,{determinate:n.circleDeterminate,indeterminate:n.circleIndeterminate,static:n.circleStatic}[N]),style:Z,cx:l,cy:l,r:(l-b)/2,fill:"none",strokeWidth:b})))}));r.Z=(0,s.Z)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},determinate:{transition:e.transitions.create("transform")},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},circleDeterminate:{transition:e.transitions.create("stroke-dashoffset")},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(u)},6579:function(e,r,n){"use strict";n.d(r,{Z:function(){return h}});var t=n(5893),a=n(7294),o=n(6445),i=n(3700),s=n(6718),c=n(7397),l=n(7812),u=n(2318),d=n(1270),m=n(1738);function h(e){var r=e.value,n=e.handleChange,h=e.touched,p=e.error,f=e.id,v=void 0===f?"password":f,g=e.label,b=void 0===g?"Password":g,x=(0,a.useState)(!1),w=x[0],y=x[1];return(0,t.jsxs)(o.Z,{variant:"outlined",fullWidth:!0,style:{margin:"0.5rem 0rem"},error:h&&Boolean(p),children:[(0,t.jsx)(i.Z,{htmlFor:"outlined-adornment-password",children:b}),(0,t.jsx)(s.Z,{id:v,name:v,label:b,fullWidth:!0,type:w?"text":"password",value:r,onChange:n,error:h&&Boolean(p),endAdornment:(0,t.jsx)(c.Z,{position:"end",children:(0,t.jsx)(l.Z,{"aria-label":"toggle password visibility",onClick:function(){return y((function(e){return!e}))},edge:"end",children:w?(0,t.jsx)(d.Z,{}):(0,t.jsx)(m.Z,{})})}),labelWidth:70}),h&&p&&(0,t.jsx)(u.Z,{variant:"caption",color:"error",children:p})]})}},2370:function(e,r,n){"use strict";var t=n(7294);r.Z=(0,t.createContext)(null)},729:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return E}});var t=n(5893),a=n(7757),o=n.n(a),i=n(2137),s=n(6814),c=n(7294),l=n(3681),u=n(5477),d=n(2318),m=n(6334),h=n(282),p=n(1120),f=n(4670),v=n(7748),g=n(9669),b=n.n(g);function x(e){return w.apply(this,arguments)}function w(){return(w=(0,i.Z)(o().mark((function e(r){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b().get("/api/auth/google?get=user&code=".concat(r)).then((function(e){return e.data}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return N.apply(this,arguments)}function N(){return(N=(0,i.Z)(o().mark((function e(r){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b().post("/api/auth/google-signin",{id_token:r}).then((function(e){return e.data}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return Z.apply(this,arguments)}function Z(){return(Z=(0,i.Z)(o().mark((function e(r){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b().post("/api/auth/google-signup",r).then((function(e){return e.data}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var C=n(1163),j=n(2370),_=n(155),P=n(5675),S=n(6579),D=n(7513),E=function(e){(0,s.Z)(e);var r=(0,C.useRouter)().query.code,n=(0,c.useContext)(j.Z).setUser,a=(0,c.useState)(""),p=a[0],f=a[1],v=(0,c.useState)(!1),g=v[0],b=v[1],w=(0,c.useState)(!1),N=w[0],Z=w[1];(0,c.useEffect)((function(){r&&_(r)}),[r]);var _=function(){var e=(0,i.Z)(o().mark((function e(r){var t,a,i,s,c,l;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(r);case 2:if(i=e.sent,s=null===i||void 0===i||null===(t=i.user)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.id_token){e.next=8;break}return window.history.back(),R(),e.abrupt("return");case 8:return f(s),e.next=11,y(s);case 11:if(c=e.sent,null!==(l=c.response)&&void 0!==l&&l.success){e.next=16;break}return R(),e.abrupt("return");case 16:if("user_not_found"!=(null===l||void 0===l?void 0:l.response)){e.next=19;break}return Z(!0),e.abrupt("return");case 19:null!==l&&void 0!==l&&l.response&&(n(null===l||void 0===l?void 0:l.response),window.location.replace("/"));case 20:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),E=(0,D.TA)({initialValues:{name:"",companyName:"",clubName:"",contactNumber:"880",password:"",confirmPassword:""},validate:B,onSubmit:function(){var e=(0,i.Z)(o().mark((function e(r){var t,a,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!g){e.next=2;break}return e.abrupt("return");case 2:return t={id_token:p,name:r.name,company_name:r.companyName,club_name:r.clubName,contact_number:r.contactNumber,password:r.password,confirm_password:r.confirmPassword},b(!0),e.next=6,k(t);case 6:if(a=e.sent,i=a.response,b(!1),i.success&&"user_not_created"!=(null===i||void 0===i?void 0:i.response)){e.next=12;break}return alert("Some went wrong. Please try again."),e.abrupt("return");case 12:n(null===i||void 0===i?void 0:i.response),window.location.replace("/");case 14:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}),R=function(){window.history.back()},A=W();return(0,t.jsxs)(t.Fragment,{children:[g&&(0,t.jsx)(l.Z,{}),(0,t.jsxs)(I,{children:[!N&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(T,{variant:"h6",children:"Please wait while we sign you in..."}),(0,t.jsx)(T,{children:"Redirecting you to smartifier.org..."}),(0,t.jsx)(u.Z,{})]}),N&&(0,t.jsxs)("div",{className:A.container,children:[(0,t.jsx)("div",{className:A.topbarContainer,children:(0,t.jsx)("div",{children:(0,t.jsx)(P.default,{src:"/assets/new_logo.png",alt:"Smartifier Logo",height:45,width:135})})}),(0,t.jsxs)("div",{className:A.formContainer,children:[g&&(0,t.jsx)(l.Z,{}),(0,t.jsx)(d.Z,{variant:"h5",style:{textAlign:"center",margin:"1rem 0"},children:"Register Your Account With Us!"}),(0,t.jsxs)("form",{onSubmit:E.handleSubmit,children:[(0,t.jsx)(m.Z,{fullWidth:!0,margin:"normal",variant:"outlined",id:"name",name:"name",label:"Full Name",value:E.values.name,onChange:E.handleChange,error:E.touched.name&&Boolean(E.errors.name),helperText:E.touched.name&&E.errors.name}),(0,t.jsx)(m.Z,{fullWidth:!0,margin:"normal",variant:"outlined",id:"companyName",name:"companyName",label:"Company Name",value:E.values.companyName,onChange:E.handleChange,error:E.touched.companyName&&Boolean(E.errors.companyName),helperText:E.touched.companyName&&E.errors.companyName}),(0,t.jsx)(m.Z,{fullWidth:!0,margin:"normal",variant:"outlined",id:"clubName",name:"clubName",label:"Club Name",value:E.values.clubName,onChange:E.handleChange,error:E.touched.clubName&&Boolean(E.errors.clubName),helperText:E.touched.clubName&&E.errors.clubName}),(0,t.jsx)(m.Z,{fullWidth:!0,margin:"normal",variant:"outlined",id:"contactNumber",name:"contactNumber",label:"Phone Number",value:E.values.contactNumber,onChange:function(e){e.target.value&&e.target.value.startsWith("880",0)&&Number.isInteger(parseInt(e.target.value[e.target.value.length-1]))&&(e.target.value.length>13||E.handleChange(e))},error:E.touched.contactNumber&&Boolean(E.errors.contactNumber),helperText:E.touched.contactNumber&&E.errors.contactNumber}),(0,t.jsx)(d.Z,{variant:"subtitle2",children:"*Setting a strong password is important for your data security!"}),(0,t.jsx)(S.Z,{value:E.values.password,handleChange:E.handleChange,touched:E.touched.password,error:E.errors.password}),(0,t.jsx)(S.Z,{value:E.values.confirmPassword,handleChange:E.handleChange,touched:E.touched.confirmPassword,error:E.errors.confirmPassword,id:"confirmPassword",label:"Confirm Password"}),(0,t.jsx)(h.Z,{variant:"contained",fullWidth:!0,type:"submit",style:{marginTop:"0.5rem",backgroundColor:"#3f51b5",color:"white"},children:"Register"})]})]})]})]})]})},W=(0,p.Z)({topbarContainer:{position:"fixed",top:0,left:0,right:0,height:100,borderBottomRightRadius:15,display:"flex",justifyContent:"space-between",alignItems:"center",paddingLeft:"2.5%",paddingRight:"2.5%",zIndex:_.Z.normal,background:"transparent linear-gradient(180deg, #003EAA 0%, #002461E0 100%) 0% 0% no-repeat padding-box"},container:{display:"flex",width:"100vw",minHeight:"100vh",flexDirection:"column",alignItems:"center",padding:"5rem 0rem 0rem 0rem",backgroundColor:"#f0f2f5"},formContainer:{marginTop:"5rem",width:"min(97%, 700px)",display:"flex",backgroundColor:"inherit",borderRadius:5,overflow:"hidden",boxShadow:"0px 0px 8px 0px #2b579a",flexDirection:"column",padding:"1rem"}}),I=(0,f.Z)({root:{width:"100vw",display:"flex",flexDirection:"column",alignItems:"center"}})(v.Z),T=(0,f.Z)({root:{textAlign:"center",marginTop:30,marginBottom:10}})(d.Z);function B(e){var r,n,t={};(!e.password||(null===(r=e.password)||void 0===r?void 0:r.length)<8)&&(t.password="Password has to be atleast 8 characters long."),e.confirmPassword?e.confirmPassword!=e.password&&(t.confirmPassword="Passwords do not match."):t.confirmPassword="Confirm password can not be empty.";return(!e.name||(null===(n=e.name)||void 0===n?void 0:n.length)<=8)&&(t.name="Full Name has to be atleast ".concat(8," characters long.")),e.companyName||(t.companyName="Company name cannot be empty."),e.clubName||(t.clubName="Club name cannot be empty."),e.contactNumber||(t.contactNumber="Phone number can not be empty."),13!=e.contactNumber.length&&(t.contactNumber="Invalid phone number."),t}},155:function(e,r){"use strict";r.Z={normal:50,high:100,higher:150,highest:200}},5479:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/authresp/google",function(){return n(729)}])}},function(e){e.O(0,[774,351,670,510],(function(){return r=5479,e(e.s=r);var r}));var r=e.O();_N_E=r}]);