(this.webpackJsonpprofiles=this.webpackJsonpprofiles||[]).push([[0],{36:function(e,s,c){},50:function(e,s,c){},70:function(e,s,c){},71:function(e,s,c){},73:function(e,s,c){},74:function(e,s,c){},75:function(e,s,c){},82:function(e,s,c){},84:function(e,s,c){"use strict";c.r(s);var i=c(1),t=c.n(i),l=c(21),a=c.n(l),n=(c(50),c(5)),r=c(7),d=c(25),j=c.n(d),o=c(38),b=c(39),x=c.n(b).a.create({baseURL:"http://192.168.0.110:4000/"});x.interceptors.request.use(function(){var e=Object(o.a)(j.a.mark((function e(s){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s);case 1:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),(function(e){return Promise.reject(e)}));var h=x,u=c(12),O=c(3),v=(c(70),c(71),c(0)),m=function(e){return Object(v.jsx)("div",{children:Object(v.jsx)("div",{className:"comming-soon",children:"Comming Soon"})})},f=(c(73),function(e){var s=Object(i.useState)(!1),c=Object(r.a)(s,2),t=c[0],l=c[1],a=Object(i.useState)([]),n=Object(r.a)(a,2),d=n[0],j=n[1];return Object(i.useEffect)((function(){if((null===e||void 0===e?void 0:e.users.length)>0){var s=0,c=e.users.filter((function(c){var i;switch(console.log(c.id>e.user.id,s),e.user.id){case 1:i=c.id===e.user.id+1||c.id===e.user.id+2;break;case e.users.length:i=c.id===e.user.id-2||c.id===e.user.id-1;break;default:i=c.id===e.user.id+1||c.id===e.user.id-1}return i&&s++,i&&s<=2}));j(c)}}),[e.user]),Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"15px"},children:[Object(v.jsx)("div",{style:{fontSize:"1.2rem"},children:e.heading}),Object(v.jsxs)("div",{style:{display:"flex",cursor:"pointer"},onClick:function(){return l(!t)},children:[Object(v.jsx)("img",{className:"profile-pic-style",style:{marginTop:"5px"},src:e.user.profilepicture}),Object(v.jsx)("div",{style:{fontSize:"1.2rem"},children:e.user.name})]})]}),Object(v.jsx)("div",{style:{position:"relative"},children:t&&Object(v.jsxs)("div",{className:"modal-div",children:[console.log("props///",e),Object(v.jsx)("img",{className:"active-profile-pic-style",src:e.user.profilepicture}),Object(v.jsx)("div",{children:e.user.name}),Object(v.jsx)("div",{style:{color:"#aeb8b4"},children:e.user.email}),Object(v.jsx)("div",{className:"line margin-vertical"}),d&&d.map((function(s,c){return Object(v.jsxs)("div",{className:"other-users-container",children:[Object(v.jsxs)("div",{style:{display:"flex"},className:"cursor",onClick:function(){l(!1),e.history.push("/home/".concat(s.id))},children:[Object(v.jsx)("img",{className:"profile-pic-style",src:s.profilepicture}),Object(v.jsx)("div",{children:s.name})]}),1!==c&&Object(v.jsx)("div",{className:"line margin-vertical"})]},s.id)})),console.log("p",e),Object(v.jsx)("button",{className:"sign-out",onClick:function(){return e.history.push("/")},children:"Sign out"})]})}),Object(v.jsx)("div",{className:"line"})]})}),p=(c(74),c.p+"static/media/map.7d5d1fc5.png"),y=function(e){var s=e.user;return Object(v.jsxs)("div",{style:{display:"flex"},children:[console.log(s),Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"column",paddingTop:"30px",minWidth:"35%"},children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(v.jsx)("img",{className:"profile-pic",src:s.profilepicture})}),Object(v.jsx)("div",{className:"name",children:s.name}),Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(v.jsxs)("div",{style:{display:"flex"},children:[Object(v.jsx)("div",{className:"flex details-headings",children:"Username : "}),Object(v.jsx)("div",{className:"details-values",children:s.username})]}),Object(v.jsxs)("div",{style:{display:"flex"},children:[Object(v.jsx)("div",{className:"flex details-headings",children:"e-mail : "}),Object(v.jsx)("div",{className:"details-values",children:s.email})]}),Object(v.jsxs)("div",{style:{display:"flex"},children:[Object(v.jsx)("div",{className:"flex details-headings",children:"Phone : "}),Object(v.jsx)("div",{className:"details-values",children:s.phone})]}),Object(v.jsxs)("div",{style:{display:"flex"},children:[Object(v.jsx)("div",{className:"flex details-headings",children:"Website : "}),Object(v.jsx)("div",{className:"details-values",children:s.website})]})]}),Object(v.jsx)("div",{className:"line"})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{style:{color:"#aeb8b4",textAlign:"center"},children:"Company"}),Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(v.jsxs)("div",{style:{display:"flex"},children:[Object(v.jsx)("div",{className:"flex details-headings",children:"Name : "}),Object(v.jsx)("div",{className:"details-values",children:s.company.name})]}),Object(v.jsxs)("div",{style:{display:"flex"},children:[Object(v.jsx)("div",{className:"flex details-headings",children:"catchphrase : "}),Object(v.jsx)("div",{className:"details-values",children:s.company.catchPhrase})]}),Object(v.jsxs)("div",{style:{display:"flex"},children:[Object(v.jsx)("div",{className:"flex details-headings",children:"bs : "}),Object(v.jsx)("div",{className:"details-values",children:s.company.bs})]})]})]})]}),Object(v.jsx)("div",{className:"line-vertical"}),Object(v.jsxs)("div",{style:{paddingTop:"30px"},children:[Object(v.jsx)("div",{style:{color:"#aeb8b4"},children:"Address"}),Object(v.jsxs)("div",{style:{display:"flex"},children:[Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"column",flex:"1"},children:[Object(v.jsxs)("div",{style:{display:"flex"},children:[Object(v.jsx)("div",{className:"flex details-headings",children:"Street : "}),Object(v.jsx)("div",{className:"details-values",children:s.address.street})]}),Object(v.jsxs)("div",{style:{display:"flex"},children:[Object(v.jsx)("div",{className:"flex details-headings",children:"Suite : "}),Object(v.jsx)("div",{className:"details-values",children:s.address.suite})]}),Object(v.jsxs)("div",{style:{display:"flex"},children:[Object(v.jsx)("div",{className:"flex details-headings",children:"City : "}),Object(v.jsx)("div",{className:"details-values",children:s.address.city})]}),Object(v.jsxs)("div",{style:{display:"flex"},children:[Object(v.jsx)("div",{className:"flex details-headings",children:"Zipcode : "}),Object(v.jsx)("div",{className:"details-values",children:s.address.zipcode})]})]}),Object(v.jsx)("div",{style:{flex:"1"}})]}),Object(v.jsxs)("div",{style:{width:"100%",position:"relative"},children:[Object(v.jsx)("img",{src:p,style:{borderRadius:"20px",marginLeft:"50px",marginTop:"20px",width:"90%",height:"45vh",objectFit:"cover"}}),Object(v.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end",fontSize:"10px",position:"absolute",bottom:"-30px",right:"0px"},children:[Object(v.jsxs)("div",{style:{marginRight:"20px"},children:[Object(v.jsx)("div",{style:{color:"#aeb8b4"},children:"Lat:"}),s.address.geo.lat]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{style:{color:"#aeb8b4"},children:"Long:"}),s.address.geo.lng]})]})]})]})]})},g=c(20),N=(c(36),c(42)),w=c.n(N),k=c(43),C=c.n(k),S=c(44),P=c.n(S),T=(c(75),c(40)),D=c.n(T),L=function(){return Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("div",{className:"sender",children:Object(v.jsx)("div",{className:"message",children:"Hi vinay, Hope you are doing good"})}),Object(v.jsx)("div",{className:"reciever",children:Object(v.jsx)("div",{className:"message",children:"yeah, I'm good. How are you doing"})}),Object(v.jsx)("div",{className:"sender",children:Object(v.jsx)("div",{className:"message",children:"Greate, The reason why I have contacted you is regarding insurance"})}),Object(v.jsx)("div",{className:"send",children:Object(v.jsx)(D.a,{})})]})},B=c(41),z=c.n(B),E=function(e){var s=e.user,c=e.closeUserChatBox;return Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{style:{display:"flex"},className:"user-chat user-chat-heading",children:[Object(v.jsxs)("div",{style:{display:"flex"},children:[Object(v.jsx)("img",{src:s.profilepicture,className:"profile-pic-style"}),Object(v.jsx)("div",{style:{color:"white"},children:s.name})]}),Object(v.jsx)("div",{className:"cursor",onClick:function(){return c(s.id)},children:Object(v.jsx)(z.a,{className:"close"})})]}),Object(v.jsx)(L,{})]})},F=function(e){var s=Object(i.useState)(!1),c=Object(r.a)(s,2),t=c[0],l=c[1],a=Object(i.useState)([]),n=Object(r.a)(a,2),d=n[0],j=n[1],o=Object(i.useState)(0),b=Object(r.a)(o,2),x=b[0],h=b[1],u=function(e){h((function(){return x-1}));var s=Object(g.a)(d);s=s.filter((function(s){return s.id!=e})),j(Object(g.a)(s))};return Object(v.jsxs)("div",{className:"chat-container",children:[t&&d.map((function(e){return Object(v.jsx)(E,{user:e,closeUserChatBox:u})})),Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{className:"chat-header cursor",onClick:function(){return l(!t)},children:[Object(v.jsxs)("div",{style:{display:"flex"},children:[Object(v.jsx)(w.a,{fontSize:"small",className:"chat-icon"}),Object(v.jsx)("div",{style:{color:"white",fontWeight:"600"},children:"Chat"})]}),t?Object(v.jsx)(P.a,{className:"expand-icon"}):Object(v.jsx)(C.a,{className:"expand-icon"})]}),t&&Object(v.jsx)("div",{className:"users",children:e.users.map((function(s){if(e.user.id!==s.id)return Object(v.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},className:"cursor",onClick:function(){return function(e){if(-1===d.indexOf(e)){h((function(){return x+1}));var s=d.length,c=Object(g.a)(d);console.log(x,s,x%3),s>0?c[x%2]=e:c[0]=e,console.log(c),j(Object(g.a)(c))}}(s)},children:[Object(v.jsxs)("div",{style:{display:"flex"},children:[Object(v.jsx)("div",{children:Object(v.jsx)("img",{src:s.profilepicture,className:"profile-pic-style"})}),Object(v.jsx)("div",{children:s.name})]}),1===Math.floor(2*Math.random())?Object(v.jsx)("div",{className:"online dot",children:" "}):Object(v.jsx)("div",{className:"offline dot",children:" "})]},s.id)}))})]})]})},R=c(19),A=c.n(R),H=Object(O.f)((function(e){var s=Object(i.useState)(e.users),c=Object(r.a)(s,2),t=c[0],l=(c[1],Object(i.useState)()),a=Object(r.a)(l,2),d=a[0],j=a[1],o=function(e){if(console.log(t),t.length>0){var s=t.filter((function(s){return s.id==e}));return console.log("tmep",s),s}};Object(i.useEffect)((function(){var s=e.location.pathname.split("/");j(s[s.length-1]),console.log("path",d)}),[e.location.pathname]);var b=Object(i.useState)(o(e.match.params.id)[0]),x=Object(r.a)(b,2),h=x[0],p=x[1];return Object(i.useEffect)((function(){p(o(e.match.params.id)[0]),console.log("chhh",e.match.params.id)}),[e.match.params.id]),Object(v.jsxs)("div",{style:{display:"flex",padding:"35px",position:"relative"},children:[Object(v.jsxs)("div",{className:"menu-container",children:[console.log("props?????????",e),Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"column",color:"white",width:"100%",margin:"20px"},children:[Object(v.jsx)(u.b,{className:"link",to:"".concat(e.match.url,"/profile"),children:Object(v.jsx)("div",{className:"profile"!=d||d>0?"links":"active-link",children:Object(v.jsxs)("div",{className:"menu-item",children:[Object(v.jsx)("div",{children:"Profile"}),"profile"==d&&Object(v.jsx)(A.a,{className:"arrow-icon"})]})})}),Object(v.jsx)("div",{className:"line"}),Object(v.jsx)(u.b,{className:"link",to:"".concat(e.match.url,"/posts"),children:Object(v.jsx)("div",{className:"posts"!=d?"links":"active-link",children:Object(v.jsxs)("div",{className:"menu-item",children:[Object(v.jsx)("div",{children:"Posts"}),"posts"==d&&Object(v.jsx)(A.a,{className:"arrow-icon"})]})})}),Object(v.jsx)("div",{className:"line"}),Object(v.jsx)(u.b,{className:"link",to:"".concat(e.match.url,"/gallery"),children:Object(v.jsx)("div",{className:"gallery"!=d?"links":"active-link",children:Object(v.jsxs)("div",{className:"menu-item",children:[Object(v.jsx)("div",{children:"Gallery"}),"gallery"==d&&Object(v.jsx)(A.a,{className:"arrow-icon"})]})})}),Object(v.jsx)("div",{className:"line"}),Object(v.jsx)(u.b,{className:"link",to:"".concat(e.match.url,"/todo"),children:Object(v.jsx)("div",{className:"todo"!=d?"links":"active-link",children:Object(v.jsxs)("div",{className:"menu-item",children:[Object(v.jsx)("div",{children:"ToDo"}),"todo"==d&&Object(v.jsx)(A.a,{className:"arrow-icon"})]})})})]})]}),Object(v.jsxs)("div",{style:{width:"80vw",height:"100vh",marginLeft:"30px",marginRight:"30px"},children:[Object(v.jsxs)(O.c,{children:[Object(v.jsx)(O.a,{path:"/home/:id/posts",render:function(e){return Object(v.jsxs)("div",{children:[Object(v.jsx)(f,{heading:"Posts",user:h,users:t}),Object(v.jsx)(m,Object(n.a)({},e))]})}}),Object(v.jsx)(O.a,{path:"/home/:id/gallery",render:function(e){return Object(v.jsxs)("div",{children:[Object(v.jsx)(f,{heading:"Gallery",user:h,users:t}),Object(v.jsx)(m,Object(n.a)({},e))]})}}),Object(v.jsx)(O.a,{path:"/home/:id/todo",render:function(e){return Object(v.jsxs)("div",{children:[Object(v.jsx)(f,{heading:"ToDo",user:h,users:t}),Object(v.jsx)(m,Object(n.a)({},e))]})}}),Object(v.jsx)(O.a,{path:"/home/:id/",render:function(e){return Object(v.jsxs)("div",{children:[Object(v.jsx)(f,Object(n.a)(Object(n.a)({heading:"Profile"},e),{},{user:h,users:t})),Object(v.jsx)(y,Object(n.a)(Object(n.a)({},e),{},{user:h}))]})}})]}),Object(v.jsx)(O.a,{path:"/home/:id/",render:function(e){return Object(v.jsx)(F,Object(n.a)(Object(n.a)({},e),{},{user:h,users:t}))}})]})]})})),I=(c(82),function(e){var s=e.users;return Object(v.jsxs)("div",{className:"main-container",children:[Object(v.jsx)("div",{class:"custom-shape-divider-top-1622811132",children:Object(v.jsx)("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none",children:Object(v.jsx)("path",{d:"M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z",class:"shape-fill"})})}),Object(v.jsxs)("div",{className:"users-container",children:[Object(v.jsx)("div",{className:"title",children:"Select an account "}),Object(v.jsx)("div",{className:"users-list",children:s.length>0&&s.map((function(e){var s=e.id,c=e.name,i=e.profilepicture;return Object(v.jsxs)("li",{children:[Object(v.jsxs)(u.b,{to:"/home/".concat(s,"/profile"),className:"link",style:{display:"flex"},children:[Object(v.jsx)("img",{src:i,className:"profile-pic-style"}),Object(v.jsx)("div",{children:c})]}),Object(v.jsx)("div",{className:"line"})]},s)}))})]})]})});var M=function(e){var s=Object(i.useState)([]),c=Object(r.a)(s,2),t=c[0],l=c[1];return Object(i.useEffect)((function(){h.get("https://panorbit.in/api/users.json").then((function(e){var s;console.log(null===(s=e.data)||void 0===s?void 0:s.users),l((function(){var s;return null===(s=e.data)||void 0===s?void 0:s.users}))}))}),[]),Object(v.jsx)(u.a,{children:Object(v.jsxs)("div",{children:[Object(v.jsx)(O.a,{exact:!0,path:"/",render:function(e){return Object(v.jsx)(I,Object(n.a)(Object(n.a)({},e),{},{users:t}))}}),Object(v.jsx)(O.a,{path:"/home/:id",render:function(e){return Object(v.jsx)(H,Object(n.a)(Object(n.a)({},e),{},{users:t}))}})]})})},U=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,96)).then((function(s){var c=s.getCLS,i=s.getFID,t=s.getFCP,l=s.getLCP,a=s.getTTFB;c(e),i(e),t(e),l(e),a(e)}))};a.a.render(Object(v.jsx)(t.a.StrictMode,{children:Object(v.jsx)(M,{})}),document.getElementById("root")),U()}},[[84,1,2]]]);
//# sourceMappingURL=main.64f16aac.chunk.js.map