_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"3N1g":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/games",function(){return a("hERr")}])},hERr:function(e,t,a){"use strict";a.r(t);var n=a("nKUr"),o=a("cpVT"),r=a("q1tI"),i=a("g4pe"),c=a.n(i),l=a("YFqc"),s=a.n(l),d=a("5CWz"),p=a("qFKJ"),u=a("O/l+"),b=a("ofer"),m=a("wx14"),h=a("Ff2n"),g=(a("17x9"),a("iuhU")),f=a("5AJ6"),j=Object(f.a)(r.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),y=a("H2TA"),O=a("ye/S"),v=a("bfFb"),x=a("NqtD"),C=a("VD++");function k(e){return"Backspace"===e.key||"Delete"===e.key}var w=r.forwardRef((function(e,t){var a=e.avatar,n=e.classes,o=e.className,i=e.clickable,c=e.color,l=void 0===c?"default":c,s=e.component,d=e.deleteIcon,p=e.disabled,u=void 0!==p&&p,b=e.icon,f=e.label,y=e.onClick,O=e.onDelete,w=e.onKeyDown,E=e.onKeyUp,R=e.size,S=void 0===R?"medium":R,N=e.variant,T=void 0===N?"default":N,P=Object(h.a)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),I=r.useRef(null),D=Object(v.a)(I,t),$=function(e){e.stopPropagation(),O&&O(e)},L=!(!1===i||!y)||i,z="small"===S,A=s||(L?C.a:"div"),H=A===C.a?{component:"div"}:{},_=null;if(O){var M=Object(g.a)("default"!==l&&("default"===T?n["deleteIconColor".concat(Object(x.a)(l))]:n["deleteIconOutlinedColor".concat(Object(x.a)(l))]),z&&n.deleteIconSmall);_=d&&r.isValidElement(d)?r.cloneElement(d,{className:Object(g.a)(d.props.className,n.deleteIcon,M),onClick:$}):r.createElement(j,{className:Object(g.a)(n.deleteIcon,M),onClick:$})}var B=null;a&&r.isValidElement(a)&&(B=r.cloneElement(a,{className:Object(g.a)(n.avatar,a.props.className,z&&n.avatarSmall,"default"!==l&&n["avatarColor".concat(Object(x.a)(l))])}));var q=null;return b&&r.isValidElement(b)&&(q=r.cloneElement(b,{className:Object(g.a)(n.icon,b.props.className,z&&n.iconSmall,"default"!==l&&n["iconColor".concat(Object(x.a)(l))])})),r.createElement(A,Object(m.a)({role:L||O?"button":void 0,className:Object(g.a)(n.root,o,"default"!==l&&[n["color".concat(Object(x.a)(l))],L&&n["clickableColor".concat(Object(x.a)(l))],O&&n["deletableColor".concat(Object(x.a)(l))]],"default"!==T&&[n.outlined,{primary:n.outlinedPrimary,secondary:n.outlinedSecondary}[l]],u&&n.disabled,z&&n.sizeSmall,L&&n.clickable,O&&n.deletable),"aria-disabled":!!u||void 0,tabIndex:L||O?0:void 0,onClick:y,onKeyDown:function(e){e.currentTarget===e.target&&k(e)&&e.preventDefault(),w&&w(e)},onKeyUp:function(e){e.currentTarget===e.target&&(O&&k(e)?O(e):"Escape"===e.key&&I.current&&I.current.blur()),E&&E(e)},ref:D},H,P),B||q,r.createElement("span",{className:Object(g.a)(n.label,z&&n.labelSmall)},f),_)})),E=Object(y.a)((function(e){var t="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],a=Object(O.c)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(t),backgroundColor:t,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(O.b)(t,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:Object(O.b)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:Object(O.b)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:Object(O.b)(t,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:Object(O.b)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:Object(O.b)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(O.c)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(O.c)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(O.c)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:a,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(O.c)(a,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:Object(O.c)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:Object(O.c)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:Object(O.c)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:Object(O.c)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}}),{name:"MuiChip"})(w),R=a("Z3vd"),S=Object(f.a)(r.createElement("path",{d:"M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"}),"NearMe"),N=a("R/WZ"),T=a("7+CT"),P=a("hUtz"),I=a("DSFK"),D=a("25BE"),$=a("BsWD"),L=a("PYwp");var z=a("ODXe"),A=(a("TOwV"),a("dRu9")),H=a("wpWl"),_=a("4Hym"),M=a("tr08"),B=r.forwardRef((function(e,t){var a=e.children,n=e.classes,o=e.className,i=e.collapsedHeight,c=void 0===i?"0px":i,l=e.component,s=void 0===l?"div":l,d=e.disableStrictModeCompat,p=void 0!==d&&d,u=e.in,b=e.onEnter,f=e.onEntered,j=e.onEntering,y=e.onExit,O=e.onExited,x=e.onExiting,C=e.style,k=e.timeout,w=void 0===k?H.b.standard:k,E=e.TransitionComponent,R=void 0===E?A.a:E,S=Object(h.a)(e,["children","classes","className","collapsedHeight","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),N=Object(M.a)(),T=r.useRef(),P=r.useRef(null),I=r.useRef(),D="number"===typeof c?"".concat(c,"px"):c;r.useEffect((function(){return function(){clearTimeout(T.current)}}),[]);var $=N.unstable_strictMode&&!p,L=r.useRef(null),B=Object(v.a)(t,$?L:void 0),q=function(e){return function(t,a){if(e){var n=$?[L.current,t]:[t,a],o=Object(z.a)(n,2),r=o[0],i=o[1];void 0===i?e(r):e(r,i)}}},F=q((function(e,t){e.style.height=D,b&&b(e,t)})),V=q((function(e,t){var a=P.current?P.current.clientHeight:0,n=Object(_.a)({style:C,timeout:w},{mode:"enter"}).duration;if("auto"===w){var o=N.transitions.getAutoHeightDuration(a);e.style.transitionDuration="".concat(o,"ms"),I.current=o}else e.style.transitionDuration="string"===typeof n?n:"".concat(n,"ms");e.style.height="".concat(a,"px"),j&&j(e,t)})),W=q((function(e,t){e.style.height="auto",f&&f(e,t)})),K=q((function(e){var t=P.current?P.current.clientHeight:0;e.style.height="".concat(t,"px"),y&&y(e)})),U=q(O),J=q((function(e){var t=P.current?P.current.clientHeight:0,a=Object(_.a)({style:C,timeout:w},{mode:"exit"}).duration;if("auto"===w){var n=N.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(n,"ms"),I.current=n}else e.style.transitionDuration="string"===typeof a?a:"".concat(a,"ms");e.style.height=D,x&&x(e)}));return r.createElement(R,Object(m.a)({in:u,onEnter:F,onEntered:W,onEntering:V,onExit:K,onExited:U,onExiting:J,addEndListener:function(e,t){var a=$?e:t;"auto"===w&&(T.current=setTimeout(a,I.current||0))},nodeRef:$?L:void 0,timeout:"auto"===w?null:w},S),(function(e,t){return r.createElement(s,Object(m.a)({className:Object(g.a)(n.container,o,{entered:n.entered,exited:!u&&"0px"===D&&n.hidden}[e]),style:Object(m.a)({minHeight:D},C),ref:B},t),r.createElement("div",{className:n.wrapper,ref:P},r.createElement("div",{className:n.wrapperInner},a)))}))}));B.muiSupportAuto=!0;var q=Object(y.a)((function(e){return{container:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(B),F=a("kKAo");var V=r.createContext({}),W=a("yCxk"),K=r.forwardRef((function(e,t){var a,n=e.children,o=e.classes,i=e.className,c=e.defaultExpanded,l=void 0!==c&&c,s=e.disabled,d=void 0!==s&&s,p=e.expanded,u=e.onChange,b=e.square,f=void 0!==b&&b,j=e.TransitionComponent,y=void 0===j?q:j,O=e.TransitionProps,v=Object(h.a)(e,["children","classes","className","defaultExpanded","disabled","expanded","onChange","square","TransitionComponent","TransitionProps"]),x=Object(W.a)({controlled:p,default:l,name:"Accordion",state:"expanded"}),C=Object(z.a)(x,2),k=C[0],w=C[1],E=r.useCallback((function(e){w(!k),u&&u(e,!k)}),[k,u,w]),R=r.Children.toArray(n),S=(a=R,Object(I.a)(a)||Object(D.a)(a)||Object($.a)(a)||Object(L.a)()),N=S[0],T=S.slice(1),P=r.useMemo((function(){return{expanded:k,disabled:d,toggle:E}}),[k,d,E]);return r.createElement(F.a,Object(m.a)({className:Object(g.a)(o.root,i,k&&o.expanded,d&&o.disabled,!f&&o.rounded),ref:t,square:f},v),r.createElement(V.Provider,{value:P},N),r.createElement(y,Object(m.a)({in:k,timeout:"auto"},O),r.createElement("div",{"aria-labelledby":N.props.id,id:N.props["aria-controls"],role:"region"},T)))})),U=Object(y.a)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{position:"relative",transition:e.transitions.create(["margin"],t),"&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-child":{"&:before":{display:"none"}},"&$expanded":{margin:"16px 0","&:first-child":{marginTop:0},"&:last-child":{marginBottom:0},"&:before":{opacity:0}},"&$expanded + &":{"&:before":{display:"none"}},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},rounded:{borderRadius:0,"&:first-child":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-child":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},expanded:{},disabled:{}}}),{name:"MuiAccordion"})(K),J=a("PsDL"),G=r.forwardRef((function(e,t){var a=e.children,n=e.classes,o=e.className,i=e.expandIcon,c=e.IconButtonProps,l=e.onBlur,s=e.onClick,d=e.onFocusVisible,p=Object(h.a)(e,["children","classes","className","expandIcon","IconButtonProps","onBlur","onClick","onFocusVisible"]),u=r.useState(!1),b=u[0],f=u[1],j=r.useContext(V),y=j.disabled,O=void 0!==y&&y,v=j.expanded,x=j.toggle;return r.createElement(C.a,Object(m.a)({focusRipple:!1,disableRipple:!0,disabled:O,component:"div","aria-expanded":v,className:Object(g.a)(n.root,o,O&&n.disabled,v&&n.expanded,b&&n.focused),onFocusVisible:function(e){f(!0),d&&d(e)},onBlur:function(e){f(!1),l&&l(e)},onClick:function(e){x&&x(e),s&&s(e)},ref:t},p),r.createElement("div",{className:Object(g.a)(n.content,v&&n.expanded)},a),i&&r.createElement(J.a,Object(m.a)({className:Object(g.a)(n.expandIcon,v&&n.expanded),edge:"end",component:"div",tabIndex:null,role:null,"aria-hidden":!0},c),i))})),X=Object(y.a)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{display:"flex",minHeight:48,transition:e.transitions.create(["min-height","background-color"],t),padding:e.spacing(0,2),"&:hover:not($disabled)":{cursor:"pointer"},"&$expanded":{minHeight:64},"&$focused":{backgroundColor:e.palette.action.focus},"&$disabled":{opacity:e.palette.action.disabledOpacity}},expanded:{},focused:{},disabled:{},content:{display:"flex",flexGrow:1,transition:e.transitions.create(["margin"],t),margin:"12px 0","&$expanded":{margin:"20px 0"}},expandIcon:{transform:"rotate(0deg)",transition:e.transitions.create("transform",t),"&:hover":{backgroundColor:"transparent"},"&$expanded":{transform:"rotate(180deg)"}}}}),{name:"MuiAccordionSummary"})(G),Y=r.forwardRef((function(e,t){var a=e.classes,n=e.className,o=Object(h.a)(e,["classes","className"]);return r.createElement("div",Object(m.a)({className:Object(g.a)(a.root,n),ref:t},o))})),Q=Object(y.a)((function(e){return{root:{display:"flex",padding:e.spacing(1,2,2)}}}),{name:"MuiAccordionDetails"})(Y),Z=function(e){var t=e.summary,a=e.list,o=e.expanded,r=e.onChange,i=e.ariaControls,c=e.id;return Object(n.jsxs)(U,{square:!0,expanded:o,onChange:function(){return r()},children:[Object(n.jsx)(X,{"aria-controls":i,id:c,children:Object(n.jsx)(b.a,{children:t})}),Object(n.jsx)(Q,{children:Object(n.jsx)(b.a,{children:Object(n.jsx)("ul",{children:a.map((function(e,t){return Object(n.jsx)("li",{children:e},t)}))})})})]})};function ee(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function te(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(a),!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ee(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ae=Object(N.a)((function(e){return{toolbar:te({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)}}}));t.default=function(){Object(r.useContext)(T.a);var e=ae(),t=Object(r.useState)("panel1"),a=t[0],o=t[1],i=Object(r.useCallback)((function(e){o(e)}),[]);return Object(n.jsxs)(r.Fragment,{children:[Object(n.jsx)(c.a,{children:Object(n.jsx)("title",{children:"Platina the Wolf"})}),Object(n.jsxs)("div",{style:{display:"flex",minHeight:"100vh"},children:[Object(n.jsx)(d.a,{}),Object(n.jsx)(u.a,{}),Object(n.jsx)(p.a,{}),Object(n.jsxs)(P.f,{children:[Object(n.jsx)("div",{className:e.toolbar}),Object(n.jsx)(P.c,{children:Object(n.jsxs)(P.e,{children:[Object(n.jsx)("h2",{children:"Platina the Wolf - The Heir of the Light"}),Object(n.jsxs)(b.a,{paragraph:!0,children:["Aliada \xe0 dois humanos, Platina parte para uma jornada em busca de poder para retomar o trono que \xe9 seu por direito.",Object(n.jsx)("br",{}),"Guie sua aventura pelos quatro cantos de Gaia e vivencie grandes batalhas, aventuras e emo\xe7\xf5es."]}),Object(n.jsx)(E,{icon:Object(n.jsx)(S,{}),label:"Vers\xe3o: 0.8.0",color:"secondary"}),Object(n.jsx)(P.g,{}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"Changelog"}),Object(n.jsx)(Z,{summary:"0.10.0",list:["Novo boss e m\xe1scara opcionais: Death","Ajustes em sprites shadow e rage","Ajustes nas categorias e elementos das habilidades","Ajustes nas fraquezas de classes e fraquezas individuais","Ajustes das habilidades das m\xe1scaras na forma rage e shadow","Agora \xe9 poss\xedvel alcan\xe7ar alguns locais atrav\xe9s da nata\xe7\xe3o"],expanded:"panel1"===a,onChange:function(){return i("panel1")},ariaControls:"panel1d-content",id:"panel1d-header"}),Object(n.jsx)(Z,{summary:"0.9.0",list:["Novo boss e m\xe1scara opcionais: Pyromancer","Miss\xe3o paralela 1: Orochi"],expanded:"panel1"===a,onChange:function(){return i("panel1")},ariaControls:"panel1d-content",id:"panel1d-header"}),Object(n.jsx)(Z,{summary:"0.8.0",list:["Mudan\xe7a de equipamento ao utilizar uma m\xe1scara"],expanded:"panel1"===a,onChange:function(){return i("panel1")},ariaControls:"panel1d-content",id:"panel1d-header"}),Object(n.jsx)(Z,{summary:"0.7.0",list:["Remo\xe7\xe3o de alguns di\xe1logos"],expanded:"panel2"===a,onChange:function(){return i("panel2")},ariaControls:"panel2d-content",id:"panel2d-header"})]}),Object(n.jsx)(P.g,{}),Object(n.jsx)("h3",{children:"Download"}),Object(n.jsxs)("div",{className:"button-group",children:[Object(n.jsx)(R.a,{variant:"contained",color:"secondary",href:"https://mega.nz/file/zl1yTSYT#9mDv9yNkHL_0S2CMF4LJiLpTgW00NjePwt6T7oeiUP8",target:"_blank",rel:"noopener noreferrer",children:"Windows"}),Object(n.jsx)(R.a,{variant:"contained",color:"secondary",href:"https://mega.nz/file/ewNRRSiD#Ce6hIyMPmk0N-h_INsqFQnulVrBhCQU-6u1n77keRtg",target:"_blank",rel:"noopener noreferrer",children:"Linux"}),Object(n.jsx)(s.a,{href:"/games/platina-the-wolf-and-the-heir-of-the-light",children:Object(n.jsx)(R.a,{variant:"contained",color:"secondary",component:"a",children:"Web"})}),Object(n.jsx)(R.a,{variant:"contained",color:"secondary",component:"a",disabled:!0,children:"Android"})]})]})})]})]})]})}}},[["3N1g",0,1,2,3,4]]]);