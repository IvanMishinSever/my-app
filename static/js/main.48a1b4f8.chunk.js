(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,a,t){},11:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t(1),c=t.n(n),i=t(3),r=t.n(i),o=(t(9),t.p+"static/media/logo.103b5fa1.svg"),l=(t(10),{dolphin:{image:"/my-app/images/dolphin.jpg",facts:["Dolphins have been shown to give distinct names to each other!","Dolphins are known to display their own culture!","Dolphins have two stomachs!"]},lobster:{image:"/my-app/images/lobster.jpg",facts:["Lobsters taste with their legs!","Lobsters chew with their stomachs!","Lobsters can live as long as 100 years."]},starfish:{image:"/my-app/images/starfish.jpg",facts:["Starfish can have up to 40 arms!","Starfish have no brain and no blood!","Starfish can regenerate their own arms!"]}}),h=Object(s.jsx)("img",{className:"background",alt:"ocean",src:"/my-app/images/ocean.jpg"}),p=[];for(var g in l)p.push(Object(s.jsx)("img",{onClick:m,className:"animal",alt:g,src:l[g].image,"aria-label":g,role:"button"},g));function m(e){var a=e.target.alt;console.log(e.target),e.target.style.visibility="hidden";var t=Math.floor(Math.random()*l[a].facts.length);console.log(l[a]),document.getElementById("fact").innerHTML=l[a].facts[t]}var d=function(){return Object(s.jsxs)("div",{className:"App",children:[h,Object(s.jsxs)("header",{className:"App-header",children:[Object(s.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),Object(s.jsxs)("p",{children:["Edit ",Object(s.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(s.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]}),Object(s.jsx)("p",{id:"fact"}),Object(s.jsxs)("div",{className:"animals",children:[p[2],p[1],p[0]]}),Object(s.jsx)("h1",{children:"Click an animal for a fun fact"})]})},j=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,12)).then((function(a){var t=a.getCLS,s=a.getFID,n=a.getFCP,c=a.getLCP,i=a.getTTFB;t(e),s(e),n(e),c(e),i(e)}))};r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(d,{})}),document.getElementById("root")),j()},9:function(e,a,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.48a1b4f8.chunk.js.map