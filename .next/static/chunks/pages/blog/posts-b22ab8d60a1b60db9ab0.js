_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"/Cw6":function(t,e,i){"use strict";var n=i("nKUr"),o=(i("q1tI"),i("R/WZ")),a=i("ofer"),r=Object(o.a)({outerContainer:{backgroundColor:"inherit",position:"relative"},polygonBackground:{width:"100vw",height:300,background:"transparent linear-gradient(180deg, #028D9ADE 0%, #8F749CE6 100%) 0% 0% no-repeat padding-box",clipPath:"polygon(0% 0%, 0% 100%, 15.22% 69.33%, 32.07% 92.67%, 50.33% 70.00%, 60.89% 93%, 74.63% 77.67%, 87.26% 97.33%, 100% 100%, 100% 0%)",zIndex:-1},container:{width:"100vw",position:"absolute",top:0,left:0,paddingTop:50},titleContainer:{color:"white",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",textTransform:"capitalize"},mainContainer:{position:"absolute",top:250,left:0,paddingLeft:"5%",paddingRight:"5%",width:"100%"}});e.a=function(t){var e=t.title,i=t.children,o=void 0===i?null:i,c=r();return Object(n.jsxs)("div",{className:c.outerContainer,children:[Object(n.jsx)("div",{className:c.polygonBackground}),Object(n.jsx)("div",{className:c.container,children:Object(n.jsxs)("div",{className:c.titleContainer,children:[Object(n.jsx)(a.a,{variant:"h4",component:"h1",children:e}),o]})})]})}},"3pH+":function(t,e,i){"use strict";i.r(e),i.d(e,"__N_SSG",(function(){return a}));var n=i("nKUr"),o=(i("q1tI"),i("Udbz")),a=!0;e.default=function(t){var e=t.posts,i=t.topics,a=t.topPosts;return Object(n.jsx)(o.a,{posts:e,topics:i,topPosts:a})}},B8jG:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/posts",function(){return i("3pH+")}])},Udbz:function(t,e,i){"use strict";var n=i("nKUr"),o=i("R/WZ"),a=(i("q1tI"),i("gMP8")),r=i("ofer"),c=i("H2TA"),s=i("hlFM"),l=i("wb2y"),d=i("UDMw"),p=Object(o.a)({container:{display:"flex",alignItems:"center",flexWrap:"wrap",marginBlock:"auto"}}),j=function(t){var e=t.tags,i=p();return Object(n.jsx)("div",{className:i.container,children:e.map((function(t,e){return Object(n.jsx)(d.a,{tag:t,position:e},t.id)}))})},b=i("YFqc"),h=i.n(b),u=["#97A5B8","#9C95FD","#F493FF","#28E36E","#FFE533"],g=Object(o.a)({container:{display:"flex",flexDirection:"column",width:"100%"},topic:{color:"white",cursor:"pointer",width:150,borderRadius:10,textAlign:"center",textTransform:"capitalize",paddingTop:3,paddingBottom:3,backgroundColor:function(t){var e=t.position;return e>u.length?u[e%u.length]:u[e]},whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",paddingLeft:3,paddingRight:3,"&:hover":{textDecoration:"underline"}},postTitle:{display:"flex",alignItems:"center",width:"100%"},bottomContainer:{display:"flex",alignItems:"center",width:"100%",marginTop:20}}),x=function(t){var e=t.post,i=t.position,o=g({position:i});return Object(n.jsxs)(m,{children:[Object(n.jsx)(h.a,{href:"/blog/topics/".concat(e.topic[0].slug,"/posts"),children:Object(n.jsx)("a",{children:Object(n.jsx)("div",{className:o.topic,children:Object(n.jsx)(f,{variant:"subtitle2",children:e.topic[0].name})})})}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:o.postTitle,children:[Object(n.jsx)(h.a,{href:"/blog/posts/".concat(e.slug),children:Object(n.jsx)("a",{children:Object(n.jsx)(O,{variant:"h5",children:e.title})})}),Object(n.jsxs)(v,{variant:"subtitle2",children:["by ",e.user.name]})]}),Object(n.jsx)("div",{children:Object(n.jsx)(w,{children:"".concat(e.summary.substr(0,200),"[...][...]")})})]}),Object(n.jsxs)("div",{className:o.bottomContainer,children:[e.tags?Object(n.jsx)(j,{tags:e.tags}):null,Object(n.jsx)(C,{variant:"subtitle2",children:e.read_time})]}),Object(n.jsx)(N,{})]})},m=Object(c.a)({root:{display:"flex",flexDirection:"column",width:"100%"}})(s.a),f=Object(c.a)({root:{}})(r.a),O=Object(c.a)({root:{color:"#3798A7",marginTop:10,marginBottom:10,whiteSpace:"nowrap",textTransform:"capitalize",cursor:"pointer","&:hover":{textDecoration:"underline"}}})(r.a),w=Object(c.a)({root:{color:"#686868",lineHeight:1.5,textTransform:"capitalize",cursor:"pointer",paddingRight:"10%"}})(r.a),v=Object(c.a)({root:{whiteSpace:"nowrap",color:"#C5C5C5",marginLeft:"auto",marginTop:10}})(r.a),C=Object(c.a)({root:{whiteSpace:"nowrap",color:"#C5C5C5",marginLeft:"auto",marginTop:10}})(r.a),N=Object(c.a)({root:{marginTop:10,marginBottom:20}})(l.a),T=Object(o.a)({container:{flexGrow:1,display:"flex",flexDirection:"column"}}),y=function(t){var e=t.posts;if(0==e.length)return Object(n.jsx)(r.a,{color:"textSecondary",variant:"h6",children:"Sorry, no posts found."});var i=T();return Object(n.jsx)("div",{className:i.container,children:e.map((function(t,e){return Object(n.jsx)(x,{post:t,position:e},t.id)}))})},_=i("rWA8"),S=i("xHAS"),B=i("YPw8"),A=i("g4pe"),D=i.n(A),E=i("/Cw6"),k=Object(o.a)({pageContainer:{width:"100vw",backgroundColor:"white",overflowX:"hidden"},mainContainer:{width:"100%",paddingTop:40,paddingLeft:"5%",paddingRight:"5%",height:"auto",marginLeft:"auto",marginRight:"auto"},postsAndSidebarContainer:{display:"flex",justifyContent:"space-between",marginTop:10,marginBottom:10}});e.a=function(t){var e=t.posts,i=t.topics,o=t.topPosts,r=k();return Object(n.jsxs)("div",{className:r.pageContainer,children:[Object(n.jsx)("div",{children:Object(n.jsx)(D.a,{children:Object(n.jsx)("title",{children:"Smartifer Blog"})})}),Object(n.jsx)(a.a,{}),Object(n.jsx)(E.a,{title:"Smartifier Blog"}),Object(n.jsxs)("div",{className:r.mainContainer,children:[Object(n.jsx)(B.a,{topics:i}),Object(n.jsx)(_.a,{}),Object(n.jsxs)("div",{className:r.postsAndSidebarContainer,children:[Object(n.jsx)(y,{posts:e}),Object(n.jsx)(S.a,{topPosts:o})]})]})]})}}},[["B8jG",0,1,2,3,4,5,6,7]]]);