(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/Cw6":function(t,n,e){"use strict";var i=e("nKUr"),o=(e("q1tI"),e("R/WZ")),a=e("ofer"),r=Object(o.a)({outerContainer:{backgroundColor:"inherit",position:"relative"},polygonBackground:{width:"100vw",height:300,background:"transparent linear-gradient(180deg, #028D9ADE 0%, #8F749CE6 100%) 0% 0% no-repeat padding-box",clipPath:"polygon(0% 0%, 0% 100%, 15.22% 69.33%, 32.07% 92.67%, 50.33% 70.00%, 60.89% 93%, 74.63% 77.67%, 87.26% 97.33%, 100% 100%, 100% 0%)",zIndex:-1},container:{width:"100vw",position:"absolute",top:0,left:0,paddingTop:50},titleContainer:{color:"white",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",textTransform:"capitalize"},mainContainer:{position:"absolute",top:250,left:0,paddingLeft:"5%",paddingRight:"5%",width:"100%"}});n.a=function(t){var n=t.title,e=t.children,o=void 0===e?null:e,s=r();return Object(i.jsxs)("div",{className:s.outerContainer,children:[Object(i.jsx)("div",{className:s.polygonBackground}),Object(i.jsx)("div",{className:s.container,children:Object(i.jsxs)("div",{className:s.titleContainer,children:[Object(i.jsx)(a.a,{variant:"h4",component:"h1",children:n}),o]})})]})}},"0PSK":function(t,n,e){"use strict";var i=e("q1tI"),o=e.n(i);n.a=o.a.createContext(null)},"4Hym":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"a",(function(){return o}));var i=function(t){return t.scrollTop};function o(t,n){var e=t.timeout,i=t.style,o=void 0===i?{}:i;return{duration:o.transitionDuration||"number"===typeof e?e:e[n.mode]||0,delay:o.transitionDelay}}},dRu9:function(t,n,e){"use strict";var i=e("zLVn"),o=e("dI71"),a=(e("17x9"),e("q1tI")),r=e.n(a),s=e("i8i4"),u=e.n(s),c=!1,l=e("0PSK"),p="unmounted",d="exited",h="entering",f="entered",x="exiting",E=function(t){function n(n,e){var i;i=t.call(this,n,e)||this;var o,a=e&&!e.isMounting?n.enter:n.appear;return i.appearStatus=null,n.in?a?(o=d,i.appearStatus=h):o=f:o=n.unmountOnExit||n.mountOnEnter?p:d,i.state={status:o},i.nextCallback=null,i}Object(o.a)(n,t),n.getDerivedStateFromProps=function(t,n){return t.in&&n.status===p?{status:d}:null};var e=n.prototype;return e.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},e.componentDidUpdate=function(t){var n=null;if(t!==this.props){var e=this.state.status;this.props.in?e!==h&&e!==f&&(n=h):e!==h&&e!==f||(n=x)}this.updateStatus(!1,n)},e.componentWillUnmount=function(){this.cancelNextCallback()},e.getTimeouts=function(){var t,n,e,i=this.props.timeout;return t=n=e=i,null!=i&&"number"!==typeof i&&(t=i.exit,n=i.enter,e=void 0!==i.appear?i.appear:n),{exit:t,enter:n,appear:e}},e.updateStatus=function(t,n){void 0===t&&(t=!1),null!==n?(this.cancelNextCallback(),n===h?this.performEnter(t):this.performExit()):this.props.unmountOnExit&&this.state.status===d&&this.setState({status:p})},e.performEnter=function(t){var n=this,e=this.props.enter,i=this.context?this.context.isMounting:t,o=this.props.nodeRef?[i]:[u.a.findDOMNode(this),i],a=o[0],r=o[1],s=this.getTimeouts(),l=i?s.appear:s.enter;!t&&!e||c?this.safeSetState({status:f},(function(){n.props.onEntered(a)})):(this.props.onEnter(a,r),this.safeSetState({status:h},(function(){n.props.onEntering(a,r),n.onTransitionEnd(l,(function(){n.safeSetState({status:f},(function(){n.props.onEntered(a,r)}))}))})))},e.performExit=function(){var t=this,n=this.props.exit,e=this.getTimeouts(),i=this.props.nodeRef?void 0:u.a.findDOMNode(this);n&&!c?(this.props.onExit(i),this.safeSetState({status:x},(function(){t.props.onExiting(i),t.onTransitionEnd(e.exit,(function(){t.safeSetState({status:d},(function(){t.props.onExited(i)}))}))}))):this.safeSetState({status:d},(function(){t.props.onExited(i)}))},e.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},e.safeSetState=function(t,n){n=this.setNextCallback(n),this.setState(t,n)},e.setNextCallback=function(t){var n=this,e=!0;return this.nextCallback=function(i){e&&(e=!1,n.nextCallback=null,t(i))},this.nextCallback.cancel=function(){e=!1},this.nextCallback},e.onTransitionEnd=function(t,n){this.setNextCallback(n);var e=this.props.nodeRef?this.props.nodeRef.current:u.a.findDOMNode(this),i=null==t&&!this.props.addEndListener;if(e&&!i){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[e,this.nextCallback],a=o[0],r=o[1];this.props.addEndListener(a,r)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},e.render=function(){var t=this.state.status;if(t===p)return null;var n=this.props,e=n.children,o=(n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef,Object(i.a)(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.a.createElement(l.a.Provider,{value:null},"function"===typeof e?e(t,o):r.a.cloneElement(r.a.Children.only(e),o))},n}(r.a.Component);function m(){}E.contextType=l.a,E.propTypes={},E.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:m,onEntering:m,onEntered:m,onExit:m,onExiting:m,onExited:m},E.UNMOUNTED=p,E.EXITED=d,E.ENTERING=h,E.ENTERED=f,E.EXITING=x;n.a=E},kKAo:function(t,n,e){"use strict";var i=e("Ff2n"),o=e("wx14"),a=e("q1tI"),r=(e("17x9"),e("iuhU")),s=e("H2TA"),u=a.forwardRef((function(t,n){var e=t.classes,s=t.className,u=t.component,c=void 0===u?"div":u,l=t.square,p=void 0!==l&&l,d=t.elevation,h=void 0===d?1:d,f=t.variant,x=void 0===f?"elevation":f,E=Object(i.a)(t,["classes","className","component","square","elevation","variant"]);return a.createElement(c,Object(o.a)({className:Object(r.a)(e.root,s,"outlined"===x?e.outlined:e["elevation".concat(h)],!p&&e.rounded),ref:n},E))}));n.a=Object(s.a)((function(t){var n={};return t.shadows.forEach((function(t,e){n["elevation".concat(e)]={boxShadow:t}})),Object(o.a)({root:{backgroundColor:t.palette.background.paper,color:t.palette.text.primary,transition:t.transitions.create("box-shadow")},rounded:{borderRadius:t.shape.borderRadius},outlined:{border:"1px solid ".concat(t.palette.divider)}},n)}),{name:"MuiPaper"})(u)}}]);