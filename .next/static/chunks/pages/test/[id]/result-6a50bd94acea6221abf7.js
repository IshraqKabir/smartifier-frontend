_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[23],{"8QYO":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test/[id]/result",function(){return r("xiiG")}])},Gw4m:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"c",(function(){return n}));var i="https://admin.smartifier.org",n="https://admin.smartifier.org";t.b="https://smartifier.org"},"HaE+":function(e,t,r){"use strict";function i(e,t,r,i,n,o,a){try{var c=e[o](a),s=c.value}catch(l){return void r(l)}c.done?t(s):Promise.resolve(s).then(i,n)}function n(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function c(e){i(a,n,o,c,s,"next",e)}function s(e){i(a,n,o,c,s,"throw",e)}c(void 0)}))}}r.d(t,"a",(function(){return n}))},iae6:function(e,t,r){"use strict";var i=r("wx14"),n=r("Ff2n"),o=r("q1tI"),a=(r("17x9"),r("iuhU")),c=r("H2TA"),s=r("NqtD"),l=44,d=o.forwardRef((function(e,t){var r=e.classes,c=e.className,d=e.color,u=void 0===d?"primary":d,b=e.disableShrink,v=void 0!==b&&b,h=e.size,j=void 0===h?40:h,m=e.style,p=e.thickness,f=void 0===p?3.6:p,x=e.value,g=void 0===x?0:x,O=e.variant,w=void 0===O?"indeterminate":O,y=Object(n.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),k={},q={},_={};if("determinate"===w||"static"===w){var D=2*Math.PI*((l-f)/2);k.strokeDasharray=D.toFixed(3),_["aria-valuenow"]=Math.round(g),k.strokeDashoffset="".concat(((100-g)/100*D).toFixed(3),"px"),q.transform="rotate(-90deg)"}return o.createElement("div",Object(i.a)({className:Object(a.a)(r.root,c,"inherit"!==u&&r["color".concat(Object(s.a)(u))],{determinate:r.determinate,indeterminate:r.indeterminate,static:r.static}[w]),style:Object(i.a)({width:j,height:j},q,m),ref:t,role:"progressbar"},_,y),o.createElement("svg",{className:r.svg,viewBox:"".concat(22," ").concat(22," ").concat(l," ").concat(l)},o.createElement("circle",{className:Object(a.a)(r.circle,v&&r.circleDisableShrink,{determinate:r.circleDeterminate,indeterminate:r.circleIndeterminate,static:r.circleStatic}[w]),style:k,cx:l,cy:l,r:(l-f)/2,fill:"none",strokeWidth:f})))}));t.a=Object(c.a)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},determinate:{transition:e.transitions.create("transform")},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},circleDeterminate:{transition:e.transitions.create("stroke-dashoffset")},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(d)},xiiG:function(e,t,r){"use strict";r.r(t),r.d(t,"__N_SSP",(function(){return ce})),r.d(t,"default",(function(){return se}));var i=r("ODXe"),n=r("nKUr"),o=r("ofer"),a=r("gMP8"),c=r("iae6"),s=r("H2TA"),l=r("hlFM"),d=r("q1tI"),u=r("469l"),b=r("Gw4m"),v=r("+p0v"),h=r("o0o1"),j=r.n(h),m=r("HaE+"),p=r("PhsX"),f=r("vDqi"),x=r.n(f);function g(e,t){return O.apply(this,arguments)}function O(){return(O=Object(m.a)(j.a.mark((function e(t,r){var i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,x.a.get("".concat(b.a,"/api/quiz-test/").concat(t,"/get-badge-image-link"),{headers:{Authorization:"Bearer ".concat(r)}}).then((function(e){return e.data})).catch((function(e){return{error:e}}));case 4:return i=e.sent,e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){var t=Object(p.a)("user",""),r=Object(i.a)(t,1)[0],n=Object(d.useState)(!1),o=n[0],a=n[1],c=Object(d.useState)(""),s=c[0],l=c[1],u=Object(d.useState)(""),b=u[0],v=u[1];function h(){return(h=Object(m.a)(j.a.mark((function t(){var i;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(!0),t.next=3,g(e,null===r||void 0===r?void 0:r.token);case 3:if(i=t.sent,a(!1),i.error&&v("Something went wrong. Please contact our support."),"not_quiz"!=i&&"failed"!=i){t.next=9;break}return v("Some Error has occured, sorry. Please contact our support."),t.abrupt("return");case 9:if("badge_not_ready_yet"!=i){t.next=12;break}return v("Sorry, we are still working on your badge."),t.abrupt("return");case 12:l(i);case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(d.useEffect)((function(){r&&function(){h.apply(this,arguments)}()}),[]),{isLoading:o,error:b,badgeImageLink:s}}function y(e){var t=e.testId,r=w(t),i=r.isLoading,a=r.error,s=r.badgeImageLink;return Object(n.jsxs)(k,{children:[Object(n.jsx)(_,{variant:"h5",children:"Quiz Badge"}),Object(n.jsx)(D,{}),i&&Object(n.jsxs)(q,{children:[Object(n.jsx)(c.a,{}),Object(n.jsx)(o.a,{variant:"subtitle1",children:"Getting Your Badge Ready. Please wait."})]}),!i&&s&&Object(n.jsxs)(z,{children:[Object(n.jsx)(u.a,{src:"".concat(b.a,"/storage/").concat(s),variant:"square",style:{width:"min(450px, 95%)",height:"100%"}}),Object(n.jsx)(C,{children:Object(n.jsx)(v.a,{title:"Share Your Badge On Facebook",link:"".concat(b.b,"/share/fb/badge/").concat(t),color:"black",variant:"subtitle1"})})]}),!i&&a&&Object(n.jsx)(o.a,{variant:"subtitle1",color:"error",children:a})]})}var k=Object(s.a)({root:{width:"100%",border:"1px solid #e6e6e4",borderRadius:"7px 7px 0px 0px",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"center",marginTop:"2rem",position:"relative"}})(l.a),q=Object(s.a)({root:{display:"flex",flexDirection:"column",alignItems:"center",padding:"1rem"}})(l.a),_=Object(s.a)({root:{padding:"0.7rem",textTransform:"capitalize"}})(o.a),D=Object(s.a)({root:{width:"100%",height:2,backgroundColor:"#e6e6e4"}})(l.a),z=Object(s.a)({root:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyItems:"center",padding:"1rem 0",marginBottom:"2rem"}})(l.a),C=Object(s.a)({root:{color:"black",fontSize:"1rem",position:"absolute",right:"0.5rem",bottom:"0.5rem"}})(l.a);function I(e){var t,r,i=e.test,a=e.quiz,c=(null===a||void 0===a?void 0:a.is_assessment)?"assessment":"quiz",s="Congratulations! You have passed the ".concat(c," on\n  \u2018").concat(null===a||void 0===a?void 0:a.title,"\u2019. Do remember to share your badge on social\n  media for personal branding."),l="Thank you for participating in the quiz on\n  \u2018".concat(null===a||void 0===a?void 0:a.title,"\u2019! Please retake the quiz and try to get your\n  badge by scoring more than ").concat(null===a||void 0===a?void 0:a.passing_percentage,"% marks.");return Object(n.jsxs)(S,{children:[Object(n.jsx)(A,{variant:"h5",children:"".concat(null===a||void 0===a?void 0:a.title," ").concat(c)}),Object(n.jsx)(T,{}),Object(n.jsxs)(P,{children:[Object(n.jsxs)(o.a,{variant:"subtitle1",children:["Score: ",Object(n.jsx)("b",{children:"".concat(null===i||void 0===i?void 0:i.percentage,"%")})]}),Object(n.jsxs)(o.a,{variant:"subtitle1",children:["Total Questions: ",Object(n.jsx)("b",{children:"".concat(null===a||void 0===a?void 0:a.total_questions_count)})]}),Object(n.jsxs)(o.a,{variant:"subtitle1",children:["Right Answers:"," ",Object(n.jsx)("b",{children:"".concat(null===i||void 0===i||null===(t=i.questions)||void 0===t||null===(r=t.correct_questions)||void 0===r?void 0:r.length)})]})]}),Object(n.jsx)(N,{variant:"subtitle1",children:(null===i||void 0===i?void 0:i.has_passed)?s:l}),Object(n.jsx)(E,{onClick:function(){window.location.href="/test/quiz/".concat(null===a||void 0===a?void 0:a.id)},children:Object(n.jsx)(R,{children:"Retake"})})]})}var S=Object(s.a)({root:{width:"100%",border:"1px solid #e6e6e4",borderRadius:"7px 7px 0px 0px",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"center"}})(l.a),A=Object(s.a)({root:{padding:"0.7rem",textTransform:"capitalize"}})(o.a),T=Object(s.a)({root:{width:"100%",height:2,backgroundColor:"#e6e6e4"}})(l.a),N=Object(s.a)({root:{fontWeight:500,margin:"1rem 0",textAlign:"center"}})(o.a),P=Object(s.a)({root:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",margin:"1rem 0",padding:"1rem",border:"1px solid lightgray",borderRadius:7,width:"min(600px, 97%)"}})(l.a),E=Object(s.a)({root:{float:"right",margin:"1rem 0.5rem 0.5rem auto",right:10,color:"white",backgroundColor:"#0e62cb",padding:"0.4rem 1rem",cursor:"pointer","&:hover":{backgroundColor:"#09448e"}}})(l.a),R=Object(s.a)({root:{fontWeight:600,textTransform:"capitalize"}})(o.a);function L(e,t){return B.apply(this,arguments)}function B(){return(B=Object(m.a)(j.a.mark((function e(t,r){var i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("".concat(b.a,"/api/quiz-test/").concat(t,"/get-result-info"),{headers:{Authorization:"Bearer ".concat(r)}}).then((function(e){return e.data}));case 2:return i=e.sent,e.abrupt("return",i);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(e){var t=Object(p.a)("user",""),r=Object(i.a)(t,1)[0],n=Object(d.useState)(!1),o=n[0],a=n[1],c=Object(d.useState)(!0),s=c[0],l=c[1],u=Object(d.useState)(),b=u[0],v=u[1],h=Object(d.useState)(),f=h[0],x=h[1];function g(){return(g=Object(m.a)(j.a.mark((function t(){var i;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:return a(!0),t.next=5,L(e,null===r||void 0===r?void 0:r.token);case 5:i=t.sent,l(null===i||void 0===i?void 0:i.is_authorized),v(null===i||void 0===i?void 0:i.test),x(null===i||void 0===i?void 0:i.quiz),a(!1),console.log(i);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(d.useEffect)((function(){!function(){g.apply(this,arguments)}()}),[]),{isLoading:o,isAuthorized:s,test:b,quiz:f}}var M=r("R/WZ"),W=r("5AJ6"),F=Object(W.a)(d.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"}),"CheckCircleOutlined");function G(e){var t,r,i=e.option,o=H();return Object(n.jsxs)("div",{className:o.container,children:[Object(n.jsx)(X,{children:Object(n.jsx)(F,{color:"inherit"})}),Object(n.jsxs)("div",{className:o.titleAndImageContainer,children:[(null===i||void 0===i?void 0:i.title)&&Object(n.jsx)(Q,{children:null===i||void 0===i?void 0:i.title}),(null===i||void 0===i||null===(t=i.image)||void 0===t?void 0:t.image_link)&&Object(n.jsx)(u.a,{src:"".concat(b.a,"/storage/").concat(null===i||void 0===i||null===(r=i.image)||void 0===r?void 0:r.image_link),variant:"square",style:{height:200,width:200,margin:"0.2rem 0"}})]})]})}var H=Object(M.a)({container:{borderTop:"1px solid gray",padding:"0.1rem 0rem",display:"flex",alignItems:"center",cursor:"pointer",width:"100%"},titleAndImageContainer:{width:"100%",padding:"0.5rem 0",display:"flex",flexDirection:"column",alignItems:"center"}}),Q=Object(s.a)({root:{}})(o.a),X=Object(s.a)({root:{color:"green"}})(l.a);function J(e){var t=e.options;return Object(n.jsx)(U,{children:t&&t.map((function(e){if(null===e||void 0===e?void 0:e.is_right)return Object(n.jsx)(G,{option:e},null===e||void 0===e?void 0:e.id)}))})}var U=Object(s.a)({root:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"#eef3f7",marginTop:"0.5rem",padding:"0 0.5rem"}})(l.a);function $(e){var t,r,i=e.question,o=e.isAnsweredCorrectly;return Object(n.jsx)(K,{children:Object(n.jsxs)(Z,{children:[(null===i||void 0===i?void 0:i.question)&&Object(n.jsx)(V,{variant:"subtitle1",children:"Q. ".concat(null===i||void 0===i?void 0:i.question)}),(null===i||void 0===i||null===(t=i.image)||void 0===t?void 0:t.image_link)&&Object(n.jsx)(u.a,{src:"".concat(b.a,"/storage/").concat(null===i||void 0===i||null===(r=i.image)||void 0===r?void 0:r.image_link),variant:"square",style:{height:200,width:200,margin:"0.2rem auto"}}),o&&(null===i||void 0===i?void 0:i.options)&&Object(n.jsx)(J,{options:null===i||void 0===i?void 0:i.options})]})})}var K=Object(s.a)({root:{width:"98%",margin:"2rem 0",overflowY:"scroll",overflowX:"hidden",border:"1px solid #e6e6e4",borderRadius:"7px 7px 0px 0px",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"center"}})(l.a),V=Object(s.a)({root:{fontWeight:600,padding:"0 0.5rem"}})(o.a),Z=Object(s.a)({root:{display:"flex",width:"100%",flexDirection:"column",justifyContent:"center"}})(l.a);function ee(e){var t=e.questions,r=e.isAnsweredCorrectly;return Object(n.jsxs)(te,{children:[Object(n.jsx)(re,{variant:"h5",children:"".concat(r?"Correct":"Wrong"," Answers")}),Object(n.jsx)(ie,{}),null===t||void 0===t?void 0:t.map((function(e){return Object(n.jsx)($,{question:e,isAnsweredCorrectly:r},null===e||void 0===e?void 0:e.id)}))]})}var te=Object(s.a)({root:{width:"100%",border:"1px solid #e6e6e4",borderRadius:"7px 7px 0px 0px",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"center",margin:"2rem 0"}})(l.a),re=Object(s.a)({root:{padding:"0.7rem",textTransform:"capitalize"}})(o.a),ie=Object(s.a)({root:{width:"100%",height:2,backgroundColor:"#e6e6e4"}})(l.a);function ne(e){var t,r,i,a,s,l,d=Y(e.testId),u=d.isLoading,b=d.isAuthorized,v=d.test,h=d.quiz;return Object(n.jsx)(oe,{children:Object(n.jsxs)(ae,{children:[u&&Object(n.jsx)(c.a,{}),!u&&!b&&Object(n.jsx)(o.a,{variant:"h6",color:"error",children:"Sorry, You Are Not Authorized To View This Test's Result"}),!u&&b&&v&&Object(n.jsx)(I,{test:v,quiz:h}),!u&&b&&!(null===h||void 0===h?void 0:h.is_assessment)&&v&&(null===v||void 0===v?void 0:v.has_passed)&&Object(n.jsx)(y,{testId:null===v||void 0===v?void 0:v.id}),!u&&b&&v&&(null===v||void 0===v?void 0:v.questions)&&(null===v||void 0===v||null===(t=v.questions)||void 0===t?void 0:t.correct_questions)&&Object(n.jsx)(ee,{questions:null===v||void 0===v||null===(r=v.questions)||void 0===r?void 0:r.correct_questions,isAnsweredCorrectly:!0}),!u&&b&&v&&(null===v||void 0===v?void 0:v.questions)&&(null===v||void 0===v||null===(i=v.questions)||void 0===i?void 0:i.wrong_questions)&&(null===v||void 0===v||null===(a=v.questions)||void 0===a||null===(s=a.wrong_questions)||void 0===s?void 0:s.length)>0&&Object(n.jsx)(ee,{questions:null===v||void 0===v||null===(l=v.questions)||void 0===l?void 0:l.wrong_questions,isAnsweredCorrectly:!1})]})})}var oe=Object(s.a)({root:{width:"100vw",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",padding:"3rem 0rem",backgroundColor:"#f3f2ee"}})(l.a),ae=Object(s.a)({root:{width:"min(1000px, 98%)",display:"flex",flexDirection:"column",alignItems:"center"}})(l.a),ce=!0;function se(e){var t=e.testId,r=Object(p.a)("user",""),c=Object(i.a)(r,1)[0];return Object(n.jsxs)("div",{children:[Object(n.jsx)(a.a,{}),c?Object(n.jsx)(ne,{testId:t}):Object(n.jsx)(o.a,{variant:"h6",color:"error",children:"Please Login To Continue"})]})}}},[["8QYO",0,1,2,3,4,5,10]]]);