(this.webpackJsonpprofiles=this.webpackJsonpprofiles||[]).push([[0],{40:function(e,s,i){},54:function(e,s,i){},74:function(e,s,i){},75:function(e,s,i){},77:function(e,s,i){},78:function(e,s,i){},79:function(e,s,i){},86:function(e,s,i){},88:function(e,s,i){"use strict";i.r(s);var c=i(1),t=i.n(c),l=i(24),n=i.n(l),a=(i(54),i(6)),r=i(7),d=i(29),j=i.n(d),o=i(42),b=i(43),x=i.n(b).a.create({baseURL:"http://192.168.0.110:4000/"});x.interceptors.request.use(function(){var e=Object(o.a)(j.a.mark((function e(s){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s);case 1:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),(function(e){return Promise.reject(e)}));var u=x,h=i(14),O=i(3),v=(i(74),i(75),i(0)),m=function(e){return Object(v.jsx)("div",{children:Object(v.jsx)("div",{className:"comming-soon",children:"Comming Soon"})})},f=(i(77),function(e){var s,i,t,l,n,a=Object(c.useState)(!1),d=Object(r.a)(a,2),j=d[0],o=d[1],b=Object(c.useState)([]),x=Object(r.a)(b,2),u=x[0],h=x[1],O=Object(c.useState)([]),m=Object(r.a)(O,2),f=m[0],p=m[1];Object(c.useEffect)((function(){var s=e.location.pathname.split("/"),i=s[s.length-1];p(i)}),[e.location.pathname]),Object(c.useEffect)((function(){if((null===e||void 0===e?void 0:e.users.length)>0){var s=0,i=e.users.filter((function(i){var c,t,l,n,a,r,d,j;switch(null===(c=e.user)||void 0===c?void 0:c.id){case 1:j=i.id===(null===(t=e.user)||void 0===t?void 0:t.id)+1||i.id===(null===(l=e.user)||void 0===l?void 0:l.id)+2;break;case e.users.length:j=i.id===(null===(n=e.user)||void 0===n?void 0:n.id)-2||i.id===(null===(a=e.user)||void 0===a?void 0:a.id)-1;break;default:j=i.id===(null===(r=e.user)||void 0===r?void 0:r.id)+1||i.id===(null===(d=e.user)||void 0===d?void 0:d.id)-1}return j&&s++,j&&s<=2}));h(i)}}),[e.user]);return Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"15px"},children:[Object(v.jsx)("div",{style:{fontSize:"1.2rem"},children:function(){switch(f){case"posts":return"Posts";case"gallery":return"Gallery";case"todo":return"ToDo";default:return"Profile"}}()}),Object(v.jsxs)("div",{style:{display:"flex",cursor:"pointer"},onClick:function(){return o(!j)},children:[Object(v.jsx)("img",{className:"profile-pic-style",style:{marginTop:"5px"},src:null===(s=e.user)||void 0===s?void 0:s.profilepicture}),Object(v.jsx)("div",{style:{fontSize:"1.2rem"},children:null===(i=e.user)||void 0===i?void 0:i.name})]})]}),Object(v.jsx)("div",{style:{position:"relative"},children:j&&Object(v.jsxs)("div",{className:"modal-div",children:[Object(v.jsx)("img",{className:"active-profile-pic-style",src:null===(t=e.user)||void 0===t?void 0:t.profilepicture}),Object(v.jsx)("div",{children:null===(l=e.user)||void 0===l?void 0:l.name}),Object(v.jsx)("div",{style:{color:"#aeb8b4"},children:null===(n=e.user)||void 0===n?void 0:n.email}),Object(v.jsx)("div",{className:"line margin-vertical"}),u&&u.map((function(s,i){return Object(v.jsxs)("div",{className:"other-users-container",children:[Object(v.jsxs)("div",{style:{display:"flex"},className:"cursor",onClick:function(){o(!1),e.history.push("/home/".concat(s.id,"/"))},children:[Object(v.jsx)("img",{className:"profile-pic-style",src:null===s||void 0===s?void 0:s.profilepicture}),Object(v.jsx)("div",{children:s.name})]}),1!==i&&Object(v.jsx)("div",{className:"line margin-vertical"})]},s.id)})),Object(v.jsx)("button",{className:"sign-out",onClick:function(){return e.history.push("/user-profiles")},children:"Sign out"})]})}),Object(v.jsx)("div",{className:"line"})]})}),p=(i(78),i.p+"static/media/map.7d5d1fc5.png"),y=function(e){var s=e.user;return Object(v.jsxs)("div",{style:{display:"flex"},children:[console.log(s),Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"column",paddingTop:"30px",minWidth:"35%"},children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(v.jsx)("img",{className:"profile-pic",src:s.profilepicture})}),Object(v.jsx)("div",{className:"name",children:s.name}),Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(v.jsxs)("div",{style:{display:"flex"},children:[Object(v.jsx)("div",{className:"flex details-headings",children:"Username : "}),Object(v.jsx)("div",{className:"details-values",children:s.username})]}),Object(v.jsxs)("div",{style:{display:"flex"},children:[Object(v.jsx)("div",{className:"flex details-headings",children:"e-mail : "}),Object(v.jsx)("div",{className:"details-values",children:s.email})]}),Object(v.jsxs)("div",{style:{display:"flex"},children:[Object(v.jsx)("div",{className:"flex details-headings",children:"Phone : "}),Object(v.jsx)("div",{className:"details-values",children:s.phone})]}),Object(v.jsxs)("div",{style:{display:"flex"},children:[Object(v.jsx)("div",{className:"flex details-headings",children:"Website : "}),Object(v.jsx)("div",{className:"details-values",children:s.website})]})]}),Object(v.jsx)("div",{className:"line"})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{style:{color:"#aeb8b4",textAlign:"center"},children:"Company"}),Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(v.jsxs)("div",{style:{display:"flex"},children:[Object(v.jsx)("div",{className:"flex details-headings",children:"Name : "}),Object(v.jsx)("div",{className:"details-values",children:s.company.name})]}),Object(v.jsxs)("div",{style:{display:"flex"},children:[Object(v.jsx)("div",{className:"flex details-headings",children:"catchphrase : "}),Object(v.jsx)("div",{className:"details-values",children:s.company.catchPhrase})]}),Object(v.jsxs)("div",{style:{display:"flex"},children:[Object(v.jsx)("div",{className:"flex details-headings",children:"bs : "}),Object(v.jsx)("div",{className:"details-values",children:s.company.bs})]})]})]})]}),Object(v.jsx)("div",{className:"line-vertical"}),Object(v.jsxs)("div",{style:{paddingTop:"30px"},children:[Object(v.jsx)("div",{style:{color:"#aeb8b4"},children:"Address"}),Object(v.jsxs)("div",{style:{display:"flex"},children:[Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"column",flex:"1"},children:[Object(v.jsxs)("div",{style:{display:"flex"},children:[Object(v.jsx)("div",{className:"flex details-headings",children:"Street : "}),Object(v.jsx)("div",{className:"details-values",children:s.address.street})]}),Object(v.jsxs)("div",{style:{display:"flex"},children:[Object(v.jsx)("div",{className:"flex details-headings",children:"Suite : "}),Object(v.jsx)("div",{className:"details-values",children:s.address.suite})]}),Object(v.jsxs)("div",{style:{display:"flex"},children:[Object(v.jsx)("div",{className:"flex details-headings",children:"City : "}),Object(v.jsx)("div",{className:"details-values",children:s.address.city})]}),Object(v.jsxs)("div",{style:{display:"flex"},children:[Object(v.jsx)("div",{className:"flex details-headings",children:"Zipcode : "}),Object(v.jsx)("div",{className:"details-values",children:s.address.zipcode})]})]}),Object(v.jsx)("div",{style:{flex:"1"}})]}),Object(v.jsxs)("div",{style:{width:"100%",position:"relative"},children:[Object(v.jsx)("img",{src:p,style:{borderRadius:"20px",marginLeft:"50px",marginTop:"20px",width:"90%",height:"45vh",objectFit:"cover"}}),Object(v.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end",fontSize:"10px",position:"absolute",bottom:"-30px",right:"0px"},children:[Object(v.jsxs)("div",{style:{marginRight:"20px"},children:[Object(v.jsx)("div",{style:{color:"#aeb8b4"},children:"Lat:"}),s.address.geo.lat]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{style:{color:"#aeb8b4"},children:"Long:"}),s.address.geo.lng]})]})]})]})]})},N=i(23),g=(i(40),i(46)),w=i.n(g),k=i(47),C=i.n(k),S=i(48),P=i.n(S),T=(i(79),i(44)),D=i.n(T),L=function(){return Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("div",{className:"sender",children:Object(v.jsx)("div",{className:"message",children:"Hi vinay, Hope you are doing good"})}),Object(v.jsx)("div",{className:"reciever",children:Object(v.jsx)("div",{className:"message",children:"yeah, I'm good. How are you doing"})}),Object(v.jsx)("div",{className:"sender",children:Object(v.jsx)("div",{className:"message",children:"Greate, The reason why I have contacted you is regarding insurance"})}),Object(v.jsx)("div",{className:"send",children:Object(v.jsx)(D.a,{})})]})},E=i(45),B=i.n(E),z=function(e){var s=e.user,i=e.closeUserChatBox;return Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{style:{display:"flex"},className:"user-chat user-chat-heading",children:[Object(v.jsxs)("div",{style:{display:"flex"},children:[Object(v.jsx)("img",{src:s.profilepicture,className:"profile-pic-style"}),Object(v.jsx)("div",{style:{color:"white"},children:s.name})]}),Object(v.jsx)("div",{className:"cursor",onClick:function(){return i(s.id)},children:Object(v.jsx)(B.a,{className:"close"})})]}),Object(v.jsx)(L,{})]})},F=function(e){var s=Object(c.useState)(!1),i=Object(r.a)(s,2),t=i[0],l=i[1],n=Object(c.useState)([]),a=Object(r.a)(n,2),d=a[0],j=a[1],o=Object(c.useState)(0),b=Object(r.a)(o,2),x=b[0],u=b[1],h=function(e){u((function(){return x-1}));var s=Object(N.a)(d);s=s.filter((function(s){return s.id!=e})),j(Object(N.a)(s))};return Object(v.jsxs)("div",{className:"chat-container",children:[t&&d.map((function(e){return Object(v.jsx)(z,{user:e,closeUserChatBox:h})})),Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{className:"chat-header cursor",onClick:function(){return l(!t)},children:[Object(v.jsxs)("div",{style:{display:"flex"},children:[Object(v.jsx)(w.a,{fontSize:"small",className:"chat-icon"}),Object(v.jsx)("div",{style:{color:"white",fontWeight:"600"},children:"Chat"})]}),t?Object(v.jsx)(P.a,{className:"expand-icon"}):Object(v.jsx)(C.a,{className:"expand-icon"})]}),t&&Object(v.jsx)("div",{className:"users",children:e.users.map((function(s){if(e.user.id!==s.id)return Object(v.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},className:"cursor",onClick:function(){return function(e){if(-1===d.indexOf(e)){u((function(){return x+1}));var s=d.length,i=Object(N.a)(d);console.log(x,s,x%3),s>0?i[x%2]=e:i[0]=e,console.log(i),j(Object(N.a)(i))}}(s)},children:[Object(v.jsxs)("div",{style:{display:"flex"},children:[Object(v.jsx)("div",{children:Object(v.jsx)("img",{src:s.profilepicture,className:"profile-pic-style"})}),Object(v.jsx)("div",{children:s.name})]}),1===Math.floor(2*Math.random())?Object(v.jsx)("div",{className:"online dot",children:" "}):Object(v.jsx)("div",{className:"offline dot",children:" "})]},s.id)}))})]})]})},R=i(22),A=i.n(R),H=i(102),I=Object(O.f)((function(e){var s=Object(c.useState)(e.users),i=Object(r.a)(s,2),t=i[0],l=i[1],n=Object(c.useState)(),d=Object(r.a)(n,2),j=d[0],o=d[1],b=Object(c.useState)({}),x=Object(r.a)(b,2),u=x[0],p=x[1];Object(c.useEffect)((function(){l(e.users)}),[e.users]);return Object(c.useEffect)((function(){var s=e.location.pathname.split("/");o(s[s.length-1])}),[e.location.pathname]),Object(c.useEffect)((function(){!function(e){if(t.length>0){var s=t.filter((function(s){return s.id==e}));p(s[0])}}(e.match.params.id)}),[e.match.params.id,t]),Object(v.jsxs)("div",{style:{display:"flex",padding:"35px",position:"relative"},children:[Object(v.jsx)("div",{className:"menu-container",children:Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"column",color:"white",width:"100%",margin:"20px"},children:[Object(v.jsx)(h.b,{className:"link",to:"".concat(e.match.url,"/profile"),children:Object(v.jsx)("div",{className:"profile"===j||""===j?"active-link":"links",children:Object(v.jsxs)("div",{className:"menu-item",children:[Object(v.jsx)("div",{children:"Profile"}),("profile"==j||""===j)&&Object(v.jsx)(A.a,{className:"arrow-icon"})]})})}),Object(v.jsx)("div",{className:"line"}),Object(v.jsx)(h.b,{className:"link",to:"".concat(e.match.url,"/posts"),children:Object(v.jsx)("div",{className:"posts"!=j?"links":"active-link",children:Object(v.jsxs)("div",{className:"menu-item",children:[Object(v.jsx)("div",{children:"Posts"}),"posts"==j&&Object(v.jsx)(A.a,{className:"arrow-icon"})]})})}),Object(v.jsx)("div",{className:"line"}),Object(v.jsx)(h.b,{className:"link",to:"".concat(e.match.url,"/gallery"),children:Object(v.jsx)("div",{className:"gallery"!=j?"links":"active-link",children:Object(v.jsxs)("div",{className:"menu-item",children:[Object(v.jsx)("div",{children:"Gallery"}),"gallery"==j&&Object(v.jsx)(A.a,{className:"arrow-icon"})]})})}),Object(v.jsx)("div",{className:"line"}),Object(v.jsx)(h.b,{className:"link",to:"".concat(e.match.url,"/todo"),children:Object(v.jsx)("div",{className:"todo"!=j?"links":"active-link",children:Object(v.jsxs)("div",{className:"menu-item",children:[Object(v.jsx)("div",{children:"ToDo"}),"todo"==j&&Object(v.jsx)(A.a,{className:"arrow-icon"})]})})})]})}),Object(v.jsxs)("div",{style:{width:"80vw",height:"100vh",marginLeft:"30px",marginRight:"30px"},children:[Object(v.jsx)(f,Object(a.a)(Object(a.a)({},e),{},{user:u,users:t})),0===Object.keys(u).length?Object(v.jsx)("div",{className:"center",children:Object(v.jsx)(H.a,{})}):Object(v.jsxs)("div",{children:[Object(v.jsxs)(O.c,{children:[Object(v.jsx)(O.a,{path:"/home/:id/posts",render:function(e){return Object(v.jsx)(m,Object(a.a)({},e))}}),Object(v.jsx)(O.a,{path:"/home/:id/gallery",render:function(e){return Object(v.jsx)(m,Object(a.a)({},e))}}),Object(v.jsx)(O.a,{path:"/home/:id/todo",render:function(e){return Object(v.jsx)(m,Object(a.a)({},e))}}),Object(v.jsx)(O.a,{path:"/home/:id/",render:function(e){return Object(v.jsx)(y,Object(a.a)(Object(a.a)({},e),{},{user:u}))}})]}),Object(v.jsx)(O.a,{path:"/home/:id/",render:function(e){return Object(v.jsx)(F,Object(a.a)(Object(a.a)({},e),{},{user:u,users:t}))}})]})]})]})})),M=(i(86),function(e){var s=e.users;return Object(v.jsxs)("div",{className:"main-container",children:[Object(v.jsx)("div",{class:"custom-shape-divider-top-1622811132",children:Object(v.jsx)("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none",children:Object(v.jsx)("path",{d:"M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z",class:"shape-fill"})})}),Object(v.jsxs)("div",{className:"users-container",children:[Object(v.jsx)("div",{className:"title",children:"Select an account "}),Object(v.jsx)("div",{className:"users-list",children:s.length>0&&s.map((function(e){var s=e.id,i=e.name,c=e.profilepicture;return Object(v.jsxs)("li",{children:[Object(v.jsxs)(h.b,{to:"/home/".concat(s,"/profile"),className:"link",style:{display:"flex"},children:[Object(v.jsx)("img",{src:c,className:"profile-pic-style"}),Object(v.jsx)("div",{children:i})]}),Object(v.jsx)("div",{className:"line"})]},s)}))})]})]})});var U=function(e){var s=Object(c.useState)([]),i=Object(r.a)(s,2),t=i[0],l=i[1];return Object(c.useEffect)((function(){u.get("https://panorbit.in/api/users.json").then((function(e){var s;console.log(null===(s=e.data)||void 0===s?void 0:s.users),l((function(){var s;return null===(s=e.data)||void 0===s?void 0:s.users}))}))}),[]),Object(v.jsx)(h.a,{children:Object(v.jsxs)("div",{children:[Object(v.jsx)(O.a,{exact:!0,path:"/user-profiles",render:function(e){return Object(v.jsx)(M,Object(a.a)(Object(a.a)({},e),{},{users:t}))}}),Object(v.jsx)(O.a,{path:"/home/:id",render:function(e){return Object(v.jsx)(I,Object(a.a)(Object(a.a)({},e),{},{users:t}))}})]})})},G=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,103)).then((function(s){var i=s.getCLS,c=s.getFID,t=s.getFCP,l=s.getLCP,n=s.getTTFB;i(e),c(e),t(e),l(e),n(e)}))};n.a.render(Object(v.jsx)(t.a.StrictMode,{children:Object(v.jsx)(U,{})}),document.getElementById("root")),G()}},[[88,1,2]]]);
//# sourceMappingURL=main.e45a5d7b.chunk.js.map