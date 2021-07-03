(this["webpackJsonpreact-website"]=this["webpackJsonpreact-website"]||[]).push([[0],{36:function(e,t,s){},43:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){},71:function(e,t,s){},72:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(29),r=s.n(n),i=s(2),l=s(19),o=function(e,t){switch(t.type){case"LOGIN_START":return{user:null,isFetching:!0,error:!1};case"LOGIN_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"LOGIN_FAILURE":return{user:null,isFetching:!1,error:!0};case"UPDATE_START":return Object(l.a)(Object(l.a)({},e),{},{isFetching:!0});case"UPDATE_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"UPDATE_FAILURE":return{user:e.user,isFetching:!1,error:!0};case"LOGOUT":return{user:null,isFetching:!1,error:!1};default:return e}},j=s(0),u={user:JSON.parse(localStorage.getItem("user"))||null,isFetching:!1,error:!1},b=Object(a.createContext)(u),p=function(e){var t=e.children,s=Object(a.useReducer)(o,u),c=Object(i.a)(s,2),n=c[0],r=c[1];return Object(a.useEffect)((function(){localStorage.setItem("user",JSON.stringify(n.user))}),[n.user]),Object(j.jsx)(b.Provider,{value:{user:n.user,isFetching:n.isFetching,error:n.error,dispatch:r},children:t})},d=s(5);s(36);function m(){var e=Object(a.useContext)(b),t=e.user,s=e.dispatch;return Object(j.jsxs)("div",{className:"top",children:[Object(j.jsxs)("div",{className:"topLeft",children:[Object(j.jsx)("i",{className:"topIcon fab fa-facebook-square"}),Object(j.jsx)("i",{className:"topIcon fab fa-twitter-square"}),Object(j.jsx)("i",{className:"topIcon fab fa-linkedin"}),Object(j.jsx)("i",{className:"topIcon fab fa-instagram-square"})]}),Object(j.jsx)("div",{className:"topMiddle",children:Object(j.jsxs)("ul",{className:"topList",children:[Object(j.jsx)("li",{className:"topListItem",children:Object(j.jsx)(d.b,{to:"/",className:"link",children:"HOME"})}),Object(j.jsx)("li",{className:"topListItem",children:Object(j.jsx)(d.b,{to:"/about",className:"link",children:"ABOUT"})}),Object(j.jsx)("li",{className:"topListItem",children:Object(j.jsx)(d.b,{to:"/",className:"link",children:"CONTACT"})}),Object(j.jsx)("li",{className:"topListItem",children:Object(j.jsx)(d.b,{to:"/write",className:"link",children:"WRITE"})}),Object(j.jsx)("li",{className:"topListItem",children:Object(j.jsx)(d.b,{to:"/",className:"link",onClick:function(){s({type:"LOGOUT"})},children:t&&"LOGOUT"})})]})}),Object(j.jsxs)("div",{className:"topRight",children:[t?Object(j.jsx)(d.b,{to:"/settings",className:"link",children:Object(j.jsx)("img",{className:"topImage",src:"http://localhost:5000/images/"+t.profilePic,alt:"profile_img"})}):Object(j.jsxs)("ul",{className:"topList",children:[Object(j.jsx)("li",{className:"topListItem",children:Object(j.jsx)(d.b,{className:"link",to:"/login",children:"LOGIN"})}),Object(j.jsx)("li",{className:"topListItem",children:Object(j.jsx)(d.b,{className:"link",to:"/register",children:"REGISTER"})})]}),Object(j.jsx)("i",{className:"topSearchIcon fas fa-search"})]})]})}var O=s(4),h=s.n(O),x=s(8);s(43);function f(){return Object(j.jsxs)("div",{className:"header",children:[Object(j.jsxs)("div",{className:"headerTitles",children:[Object(j.jsx)("span",{className:"headerTitleSm",children:"React & Node"}),Object(j.jsx)("span",{className:"headerTitleLg",children:"Blog"})]}),Object(j.jsx)("img",{className:"headerImg",src:"https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",alt:"header_img"})]})}s(44),s(45),s(46);function g(e){var t=e.post;return Object(j.jsxs)("div",{className:"post",children:[t.photo&&Object(j.jsx)("img",{className:"postImg",src:"http://localhost:5000/images/"+t.photo,alt:""}),Object(j.jsxs)("div",{className:"postInfo",children:[Object(j.jsx)("div",{className:"postCats",children:t.categories.map((function(e){return Object(j.jsx)("span",{className:"postCat",children:e.name})}))}),Object(j.jsx)(d.b,{to:"/post/".concat(t._id),className:"link",children:Object(j.jsx)("span",{className:"postTitle",children:t.title})}),Object(j.jsx)("hr",{}),Object(j.jsx)("span",{className:"postDate",children:new Date(t.createdAt).toDateString()})]}),Object(j.jsx)("div",{className:"postDesc",children:t.desc})]})}function N(e){var t=e.posts;return Object(j.jsx)("div",{className:"posts",children:t.map((function(e){return Object(j.jsx)(g,{post:e})}))})}var v=s(7),w=s.n(v);s(65);function I(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),s=t[0],c=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(x.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("/categories");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(j.jsxs)("div",{className:"sidebar",children:[Object(j.jsxs)("div",{className:"sidebarItem",children:[Object(j.jsx)("span",{className:"sidebarTitle",children:"ABOUT ME"}),Object(j.jsx)("img",{src:"https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg",alt:""}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adip lorem ipsum Lorem ipsum dolor sit amet orem ipsum dolor sit amet"})]}),Object(j.jsxs)("div",{className:"sidebarItem",children:[Object(j.jsx)("span",{className:"sidebarTitle",children:"CATAGORIES"}),Object(j.jsx)("ul",{className:"sidebarList",children:s.map((function(e){return Object(j.jsx)(d.b,{className:"link",to:"/?cat=".concat(e.name),children:Object(j.jsx)("li",{className:"sidebarListItem",children:e.name})})}))})]}),Object(j.jsxs)("div",{className:"sidebarItem",children:[Object(j.jsx)("span",{className:"sidebarTitle",children:"FOLLOW US"}),Object(j.jsxs)("div",{className:"sidebarSocial",children:[Object(j.jsx)("i",{className:"sidebarIcon fab fa-facebook-square"}),Object(j.jsx)("i",{className:"sidebarIcon fab fa-twitter-square"}),Object(j.jsx)("i",{className:"sidebarIcon fab fa-linkedin"}),Object(j.jsx)("i",{className:"sidebarIcon fab fa-instagram-square"})]})]})]})}var y=s(3);function S(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),s=t[0],c=t[1],n=Object(y.f)().search;return Object(a.useEffect)((function(){(function(){var e=Object(x.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("/posts"+n);case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]),Object(j.jsxs)("div",{children:[Object(j.jsx)(f,{}),Object(j.jsxs)("div",{className:"home",children:[Object(j.jsx)(N,{posts:s}),Object(j.jsx)(I,{})]})]})}s(66),s(67);function k(){var e=Object(y.f)().pathname.split("/")[2],t=Object(a.useState)({}),s=Object(i.a)(t,2),c=s[0],n=s[1],r=Object(a.useContext)(b).user,l=Object(a.useState)(""),o=Object(i.a)(l,2),u=o[0],p=o[1],m=Object(a.useState)(""),O=Object(i.a)(m,2),f=O[0],g=O[1],N=Object(a.useState)(!1),v=Object(i.a)(N,2),I=v[0],S=v[1];Object(a.useEffect)((function(){(function(){var t=Object(x.a)(h.a.mark((function t(){var s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.a.get("/posts/"+e);case 2:s=t.sent,n(s.data),p(s.data.title),g(s.data.desc);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]);var k=function(){var e=Object(x.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.delete("/posts/".concat(c._id),{data:{username:r.username}});case 3:window.location.replace("/"),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(x.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.put("/posts/".concat(c._id),{username:r.username,title:u,desc:f});case 3:S(!1),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"singlePost",children:Object(j.jsxs)("div",{className:"singlePostWrapper",children:[c.photo&&Object(j.jsx)("img",{src:"http://localhost:5000/images/"+c.photo,className:"singlePostImg",alt:""}),I?Object(j.jsx)("input",{type:"text",value:u,className:"singlePostTitleInput",autoFocus:!0,onChange:function(e){return p(e.target.value)}}):Object(j.jsxs)("h1",{className:"singlePostTitle",children:[u,c.username===(null===r||void 0===r?void 0:r.username)&&Object(j.jsxs)("div",{className:"singlePostEdit",children:[Object(j.jsx)("i",{className:"singlePostIcon far fa-edit",onClick:function(){return S(!0)}}),Object(j.jsx)("i",{className:"singlePostIcon far fa-trash-alt",onClick:k})]})]}),Object(j.jsxs)("div",{className:"singlePostInfo",children:[Object(j.jsxs)("span",{className:"singlePostAuthor",children:["Author:",Object(j.jsx)(d.b,{to:"/?user=".concat(c.username),className:"link",children:Object(j.jsxs)("b",{children:[" ",c.username]})})]}),Object(j.jsx)("span",{className:"singlePostDate",children:new Date(c.createdAt).toDateString()})]}),I?Object(j.jsx)("textarea",{className:"singlePostDescInput",value:f,onChange:function(e){return g(e.target.value)}}):Object(j.jsx)("p",{className:"singlePostDesc",children:f}),I&&Object(j.jsx)("button",{className:"singlePostButton",onClick:T,children:"Update"})]})})}function T(){return Object(j.jsxs)("div",{className:"single",children:[Object(j.jsx)(k,{}),Object(j.jsx)(I,{})]})}s(68);function L(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(""),r=Object(i.a)(n,2),l=r[0],o=r[1],u=Object(a.useState)(null),p=Object(i.a)(u,2),d=p[0],m=p[1],O=Object(a.useContext)(b).user,f=function(){var e=Object(x.a)(h.a.mark((function e(t){var a,c,n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a={username:O.username,title:s,desc:l},!d){e.next=15;break}return c=new FormData,n=Date.now()+d.name,c.append("name",n),c.append("file",d),a.photo=n,e.prev=8,e.next=11,w.a.post("/upload",c);case 11:e.next=15;break;case 13:e.prev=13,e.t0=e.catch(8);case 15:return e.prev=15,e.next=18,w.a.post("/posts",a);case 18:r=e.sent,window.location.replace("/post/"+r.data._id),e.next=24;break;case 22:e.prev=22,e.t1=e.catch(15);case 24:case"end":return e.stop()}}),e,null,[[8,13],[15,22]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"write",children:[d&&Object(j.jsx)("img",{className:"writeImg",src:URL.createObjectURL(d),alt:""}),Object(j.jsxs)("form",{className:"writeForm",onSubmit:f,children:[Object(j.jsxs)("div",{className:"writeFormGroup",children:[Object(j.jsx)("label",{htmlFor:"fileInput",children:Object(j.jsx)("i",{className:"fas fa-plus writeIcon"})}),Object(j.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:function(e){return m(e.target.files[0])}}),Object(j.jsx)("input",{type:"text",placeholder:"Title",autoFocus:!0,className:"writeInput",onChange:function(e){return c(e.target.value)}})]}),Object(j.jsx)("div",{className:"writeFormGroup",children:Object(j.jsx)("textarea",{type:"text",placeholder:"Tell Your Story...",className:"writeInput writeText",onChange:function(e){o(e.target.value)}})}),Object(j.jsx)("button",{className:"writeSubmit",type:"submit",children:"Publish"})]})]})}s(69);function C(){var e=Object(a.useContext)(b),t=e.user,s=e.dispatch,c=Object(a.useState)(null),n=Object(i.a)(c,2),r=n[0],l=n[1],o=Object(a.useState)(""),u=Object(i.a)(o,2),p=u[0],d=u[1],m=Object(a.useState)(""),O=Object(i.a)(m,2),f=O[0],g=O[1],N=Object(a.useState)(""),v=Object(i.a)(N,2),y=v[0],S=v[1],k=Object(a.useState)(!1),T=Object(i.a)(k,2),L=T[0],C=T[1],F=function(){var e=Object(x.a)(h.a.mark((function e(a){var c,n,i,l;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),s({type:"UPDATE_START"}),c={userId:t._id,username:p,email:y,password:f},!r){e.next=16;break}return n=new FormData,i=Date.now()+r.name,n.append("name",i),n.append("file",r),c.profilePic=i,e.prev=9,e.next=12,w.a.post("/upload",n);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.prev=16,e.next=19,w.a.put("/users/"+t._id,c);case 19:l=e.sent,C(!0),s({type:"UPDATE_SUCCESS",payload:l.data}),e.next=27;break;case 24:e.prev=24,e.t1=e.catch(16),s({type:"UPDATE_FAILURE"});case 27:case"end":return e.stop()}}),e,null,[[9,14],[16,24]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"settings",children:[Object(j.jsxs)("div",{className:"settingsWrapper",children:[Object(j.jsxs)("div",{className:"settingsTitle",children:[Object(j.jsx)("span",{className:"settingsTitleUpdate",children:"Update Your Account"}),Object(j.jsx)("span",{className:"settingsTitleDelete",children:"Delete Account"})]}),Object(j.jsxs)("form",{className:"settingsForm",onSubmit:F,children:[Object(j.jsx)("label",{children:"Profile Picture"}),Object(j.jsxs)("div",{className:"settingsPP",children:[Object(j.jsx)("img",{src:r?URL.createObjectURL(r):"http://localhost:5000/images/"+t.profilePic,alt:""}),Object(j.jsx)("label",{htmlFor:"fileInput",children:Object(j.jsx)("i",{className:"settingsPPIcon fa fa-user-circle"})}),Object(j.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:function(e){return l(e.target.files[0])}})]}),Object(j.jsx)("label",{htmlFor:"username",children:"User Name"}),Object(j.jsx)("input",{type:"text",placeholder:t.username,id:"username",onChange:function(e){return d(e.target.value)}}),Object(j.jsx)("label",{htmlFor:"email",children:"Email"}),Object(j.jsx)("input",{type:"email",placeholder:t.email,id:"email",onChange:function(e){return S(e.target.value)}}),Object(j.jsx)("label",{htmlFor:"pass",children:"Password"}),Object(j.jsx)("input",{type:"password",id:"pass",className:"passw",onChange:function(e){return g(e.target.value)}}),Object(j.jsx)("button",{className:"settingsSubmitButton",type:"submit",children:"Update"}),L&&Object(j.jsx)("span",{style:{color:"green",textAlign:"center",marginTop:"20px"},children:"Profile has been updated..."})]})]}),Object(j.jsx)(I,{})]})}s(70);function F(){var e=Object(a.useRef)(),t=Object(a.useRef)(),s=Object(a.useContext)(b),c=s.dispatch,n=s.isFetching,r=function(){var s=Object(x.a)(h.a.mark((function s(a){var n;return h.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return a.preventDefault(),c({type:"LOGIN_START"}),s.prev=2,s.next=5,w.a.post("/auth/login",{username:e.current.value,password:t.current.value});case 5:n=s.sent,c({type:"LOGIN_SUCCESS",payload:n.data}),s.next=12;break;case 9:s.prev=9,s.t0=s.catch(2),c({type:"LOGIN_FAILURE"});case 12:case"end":return s.stop()}}),s,null,[[2,9]])})));return function(e){return s.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"login",children:[Object(j.jsx)("span",{className:"loginTitle",children:"Login"}),Object(j.jsxs)("form",{className:"loginForm",onSubmit:r,children:[Object(j.jsx)("label",{htmlFor:"email",children:"User name"}),Object(j.jsx)("input",{className:"loginInput",type:"text",id:"email",placeholder:"Enter your username...",ref:e}),Object(j.jsx)("label",{htmlFor:"pass",children:"Password"}),Object(j.jsx)("input",{className:"loginInput",type:"password",id:"pass",placeholder:"Enter your password...",ref:t}),Object(j.jsx)("button",{className:"loginButton",type:"submit",disabled:n,children:"Login"})]}),Object(j.jsx)("button",{className:"loginRegisterButton",children:Object(j.jsx)(d.b,{className:"link",to:"/register",children:"Register"})})]})}s(71);function P(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(""),r=Object(i.a)(n,2),l=r[0],o=r[1],u=Object(a.useState)(""),b=Object(i.a)(u,2),p=b[0],m=b[1],O=Object(a.useState)(!1),f=Object(i.a)(O,2),g=f[0],N=f[1],v=function(){var e=Object(x.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),N(!1),e.prev=2,e.next=5,w.a.post("/auth/register",{username:s,email:l,password:p});case 5:e.sent.data&&window.location.replace("/login"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),N(!0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"register",children:[Object(j.jsx)("span",{className:"registerTitle",children:"Register"}),Object(j.jsxs)("form",{className:"registerForm",onSubmit:v,children:[Object(j.jsx)("label",{htmlFor:"username",children:"Username"}),Object(j.jsx)("input",{className:"registerInput",type:"text",id:"username",placeholder:"Enter your username...",onChange:function(e){return c(e.target.value)}}),Object(j.jsx)("label",{htmlFor:"email",children:"Email"}),Object(j.jsx)("input",{className:"registerInput",type:"text",id:"email",placeholder:"Enter your email...",onChange:function(e){return o(e.target.value)}}),Object(j.jsx)("label",{htmlFor:"pass",children:"Password"}),Object(j.jsx)("input",{className:"registerInput",type:"password",id:"pass",placeholder:"Enter your password...",onChange:function(e){return m(e.target.value)}}),Object(j.jsx)("button",{className:"registerButton",type:"submit",children:"Register"})]}),Object(j.jsx)("button",{className:"registerLoginButton",children:Object(j.jsx)(d.b,{className:"link",to:"/login",children:"Login"})}),g&&Object(j.jsx)("span",{style:{marginTop:"15px",color:"red"},children:"Something went wrong(Username already taken)"})]})}function E(){return Object(j.jsx)("div",{children:Object(j.jsx)(I,{})})}var U=function(){var e=Object(a.useContext)(b).user;return Object(j.jsxs)(d.a,{children:[Object(j.jsx)(m,{}),Object(j.jsxs)(y.c,{children:[Object(j.jsx)(y.a,{exact:!0,path:"/",children:Object(j.jsx)(S,{})}),Object(j.jsx)(y.a,{path:"/register",children:e?Object(j.jsx)(S,{}):Object(j.jsx)(P,{})}),Object(j.jsx)(y.a,{path:"/login",children:e?Object(j.jsx)(S,{}):Object(j.jsx)(F,{})}),Object(j.jsx)(y.a,{path:"/about",children:Object(j.jsx)(E,{})}),Object(j.jsx)(y.a,{path:"/write",children:e?Object(j.jsx)(L,{}):Object(j.jsx)(P,{})}),Object(j.jsx)(y.a,{path:"/settings",children:e?Object(j.jsx)(C,{}):Object(j.jsx)(P,{})}),Object(j.jsx)(y.a,{path:"/post/:postId",children:Object(j.jsx)(T,{})})]})]})};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(p,{children:Object(j.jsx)(U,{})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.47b163d7.chunk.js.map