(this["webpackJsonplearn-twitter"]=this["webpackJsonplearn-twitter"]||[]).push([[0],{28:function(e,t,a){e.exports=a(44)},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),u=a.n(c),l=a(4),i=a(12),o=a(1),s=Object(n.memo)((function(e){var t=e.user;return r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.b,{to:"/",replace:!0},"\ud648")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/profile",replace:!0},t.displayName," \ud504\ub85c\ud544"))))})),m=a(13),p=a(14);a(37),a(39),a(45);p.initializeApp({apiKey:"AIzaSyAzFe2mBz0F0l_Ful9Fvspd3X8wGsB1ouA",authDomain:"learn-twitter.firebaseapp.com",databaseURL:"https://learn-twitter.firebaseio.com",projectId:"learn-twitter",storageBucket:"learn-twitter.appspot.com",messagingSenderId:"986434629110",appId:"1:986434629110:web:32fdec44c4c2bc0196ebd7"});var b=p,d=p.auth(),f=p.firestore(),v=p.storage(),E=a(2),O=a.n(E),j=a(7),h=Object(n.memo)((function(e){var t=e.twit,a=e.isOwner,c=Object(n.useState)(t.text),u=Object(l.a)(c,2),i=u[0],o=u[1],s=Object(n.useState)(!1),m=Object(l.a)(s,2),p=m[0],b=m[1],d=Object(n.useCallback)(function(){var e=Object(j.a)(O.a.mark((function e(a){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,f.doc("twits/".concat(t.id)).update({text:i});case 4:b(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),[t.id,i]),E=Object(n.useCallback)((function(e){var t=e.target.value;o(t)}),[]),h=Object(n.useCallback)((function(){return b((function(e){return!e}))}),[]),g=Object(n.useCallback)(Object(j.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this twit?")){e.next=12;break}return e.prev=2,e.next=5,f.doc("twits/".concat(t.id)).delete();case 5:return e.next=7,v.refFromURL(t.imageUrl).delete();case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[2,9]])}))),[t.id,t.imageUrl]);return r.a.createElement("li",null,p&&a?r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:d},r.a.createElement("input",{type:"text",required:!0,placeholder:"Edit your twit",value:i,onChange:E}),r.a.createElement("button",{type:"submit"},"Update")),r.a.createElement("button",{onClick:h},"Cancel")):r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,t.text),t.imageUrl&&r.a.createElement("img",{src:t.imageUrl,alt:"Twit",width:"100px"}),a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:h},"Edit"),r.a.createElement("button",{onClick:g},"Delete"))))})),g=a(47),w=function(e){var t=e.user,a=Object(n.useState)(""),c=Object(l.a)(a,2),u=c[0],i=c[1],o=Object(n.useState)(null),s=Object(l.a)(o,2),m=s[0],p=s[1],b=Object(n.useCallback)(function(){var e=Object(j.a)(O.a.mark((function e(a){var n,r,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n=null,e.prev=2,!m){e.next=11;break}return r=v.ref().child("".concat(t.uid,"/").concat(Object(g.a)())),e.next=7,r.putString(m,"data_url");case 7:return c=e.sent,e.next=10,c.ref.getDownloadURL();case 10:n=e.sent;case 11:return e.next=13,f.collection("twits").add({uid:t.uid,createdAt:Date.now(),text:u,imageUrl:n});case 13:i(""),p(null),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(2),console.error(e.t0.message);case 20:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(t){return e.apply(this,arguments)}}(),[t.uid,m,u,i]),d=Object(n.useCallback)((function(e){var t=e.target.value;i(t)}),[i]),E=Object(n.useCallback)((function(e){var t=e.target.files,a=new FileReader;a.readAsDataURL(t[0]),a.addEventListener("loadend",(function(e){var t=e.currentTarget.result;p(t)}))}),[]),h=Object(n.useCallback)((function(){p(null)}),[]);return r.a.createElement("form",{onSubmit:b},r.a.createElement("input",{type:"text",placeholder:"What's on your mind?",maxLength:120,required:!0,value:u,onChange:d}),r.a.createElement("input",{type:"file",accept:"image/*",onChange:E}),r.a.createElement("button",{type:"submit"},"Twit"),m&&r.a.createElement("div",null,r.a.createElement("img",{src:m,alt:"Preview",width:"100px"}),r.a.createElement("button",{onClick:h},"Clear")))},k=Object(n.memo)((function(e){var t=e.user,a=Object(n.useState)([]),c=Object(l.a)(a,2),u=c[0],i=c[1];return Object(n.useEffect)((function(){f.collection("twits").onSnapshot((function(e){i(e.docs.map((function(e){return Object(m.a)(Object(m.a)({},e.data()),{},{id:e.id})})))}))}),[]),r.a.createElement("div",null,r.a.createElement(w,{user:t}),r.a.createElement("ul",null,u.map((function(e){return r.a.createElement(h,{key:e.id,twit:e,isOwner:e.uid===t.uid})}))))})),x=Object(n.memo)((function(e){var t=e.user,a=e.updateUser,c=Object(n.useState)(t.displayName),u=Object(l.a)(c,2),i=u[0],s=u[1],m=Object(o.f)(),p=Object(n.useCallback)(Object(j.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.signOut();case 3:m.push("/"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])}))),[m]),b=Object(n.useCallback)((function(e){var t=e.target.value;s(t)}),[]),f=Object(n.useCallback)(function(){var e=Object(j.a)(O.a.mark((function e(n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),t.displayName===i){e.next=5;break}return e.next=4,t.updateProfile({displayName:i});case 4:a();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t,i,a]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:f},r.a.createElement("input",{type:"text",placeholder:"Display Name",value:i,onChange:b}),r.a.createElement("button",{type:"submit"},"Update Profile")),r.a.createElement("button",{onClick:p},"\ub85c\uadf8\uc544\uc6c3"))})),C=a(18),y={email:"",password:""},S=function(){var e=Object(n.useState)(y),t=Object(l.a)(e,2),a=t[0],c=t[1],u=Object(n.useState)(!0),i=Object(l.a)(u,2),o=i[0],s=i[1],p=Object(n.useState)(""),b=Object(l.a)(p,2),f=b[0],v=b[1],E=a.email,h=a.password,g=Object(n.useCallback)((function(){return s((function(e){return!e}))}),[]),w=Object(n.useCallback)((function(e){var t=e.target,n=t.name,r=t.value;c(Object(m.a)(Object(m.a)({},a),{},Object(C.a)({},n,r)))}),[a]),k=Object(n.useCallback)(function(){var e=Object(j.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=null,e.prev=2,!o){e.next=9;break}return e.next=6,d.createUserWithEmailAndPassword(E,h);case 6:a=e.sent,e.next=12;break;case 9:return e.next=11,d.signInWithEmailAndPassword(E,h);case 11:a=e.sent;case 12:console.log(a),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),v(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),[o,E,h]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:k},r.a.createElement("input",{type:"email",name:"email",value:E,placeholder:"Email",required:!0,onChange:w}),r.a.createElement("input",{type:"password",name:"password",value:h,placeholder:"Password",required:!0,onChange:w}),r.a.createElement("button",{type:"submit"},o?"Create Account":"Login"),f),r.a.createElement("span",{onClick:g},o?"Signin":"Create Account"))},U=Object(n.memo)((function(){var e=Object(n.useCallback)(function(){var e=Object(j.a)(O.a.mark((function e(t){var a,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.name,n=null,"google"===a?n=new b.auth.GoogleAuthProvider:"github"===a&&(n=new b.auth.GithubAuthProvider),e.prev=3,e.next=6,d.signInWithPopup(n);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),console.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[3,8]])})));return function(t){return e.apply(this,arguments)}}(),[]);return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement("div",null,r.a.createElement("button",{name:"google",onClick:e},"Continue with Google"),r.a.createElement("button",{name:"github",onClick:e},"Continue with GitHub")))})),A=Object(n.memo)((function(e){var t=e.user,a=e.updateUser;return r.a.createElement(i.a,null,t&&r.a.createElement(s,{user:t}),r.a.createElement(o.c,null,t?r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(k,{user:t})),r.a.createElement(o.a,{exact:!0,path:"/profile"},r.a.createElement(x,{user:t,updateUser:a}))):r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(U,null))))}));var F=Object(n.memo)((function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],u=Object(n.useState)(null),i=Object(l.a)(u,2),o=i[0],s=i[1];Object(n.useEffect)((function(){d.onAuthStateChanged((function(e){s(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),c(!0)}))}),[]);var m=Object(n.useCallback)((function(){var e=d.currentUser;s({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})}),[]);return r.a.createElement(r.a.Fragment,null,a?r.a.createElement(A,{user:o,updateUser:m}):"Loading...")}));u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.c0aab1d4.chunk.js.map