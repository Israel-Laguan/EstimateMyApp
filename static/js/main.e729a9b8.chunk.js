(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{74:function(e,t,n){e.exports=n(92)},92:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(17),c=n.n(l);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(68),i=n(21),u=n(112),m=n(102),d=n(11),f=Object(a.createContext)(),s=f.Provider,p=function(e){var t=e.children,n=void 0===t?void 0:t,l=Object(a.useState)(""),c=Object(d.a)(l,2),o=c[0],i=c[1],u=Object(a.useState)(""),m=Object(d.a)(u,2),f=m[0],p=m[1],b=Object(a.useState)(""),g=Object(d.a)(b,2),v=g[0],E=g[1],h=Object(a.useState)({}),j=Object(d.a)(h,2),x=j[0],w=j[1];return r.a.createElement(s,{value:{state:{pageName:o,clientID:f,projectType:v,project:x},actions:{setState:function(e,t){switch(e){case"pageName":i(t);break;case"clientID":p(t);break;case"projectType":E(t);break;case"project":w(t);break;default:console.error("setState with incorrect key. Check trace.")}},submitProject:function(){console.log("A revoir, project settings!")}}}},n)},b=n(9),g=n(1);function v(){var e=Object(b.a)([""]);return v=function(){return e},e}function E(){var e=Object(b.a)(["\n  width: 33.333%;\n  text-align: right;\n\n  svg {\n    margin-right: 20px;\n  }\n"]);return E=function(){return e},e}function h(){var e=Object(b.a)(["\n  width: 33.333%;\n  text-align: center;\n"]);return h=function(){return e},e}function j(){var e=Object(b.a)(["\n  width: 33.333%;\n  text-align: left;\n"]);return j=function(){return e},e}function x(){var e=Object(b.a)(["\n  max-width: 1010px;\n  padding: 26px 20px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  margin: 0 auto;\n"]);return x=function(){return e},e}function w(){var e=Object(b.a)(["\n  background-color: #fff;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);\n"]);return w=function(){return e},e}var O=g.default.div(w()),y=g.default.div(x()),S=g.default.div(j()),k=g.default.div(h()),C=g.default.div(E()),z=g.default.a(v()),N=function(){return r.a.createElement(O,null,r.a.createElement(y,null,r.a.createElement(S,null,r.a.createElement(z,{href:"http://www.google.com"},"Root")),r.a.createElement(k,null,"j"),r.a.createElement(C,null,"l")))},P=function(e){var t=e.children,n=void 0===t?void 0:t;return r.a.createElement(p,null,r.a.createElement(u.a,{theme:m.a,full:!0},r.a.createElement(N,null),n))};function R(){var e=Object(b.a)(["\n  text-align: left;\n"]);return R=function(){return e},e}function A(){var e=Object(b.a)(["\n  display: flex;\n  justify-content: center;\n"]);return A=function(){return e},e}function D(){var e=Object(b.a)(["\n  margin-right: 25px;\n"]);return D=function(){return e},e}function I(){var e=Object(b.a)([""]);return I=function(){return e},e}function T(){var e=Object(b.a)(["\n  background-color: transparent;\n  border: 1px solid #dbdbdb;\n  color: #262626;\n  border-radius: 4px;\n  cursor: pointer;\n  font-weight: 600;\n  padding: 5px 9px;\n  text-transform: capitalize;\n  font-size: 14px;\n  margin-left: 20px;\n"]);return T=function(){return e},e}function W(){var e=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return W=function(){return e},e}function q(){var e=Object(b.a)(["\n  border-radius: 50%;\n  width: 150px;\n  border: 1px solid #ccc;\n  padding: 5px;\n"]);return q=function(){return e},e}function J(){var e=Object(b.a)(["\n  display: flex;\n  align-items: end;\n  justify-content: center;\n  flex-direction: column;\n"]);return J=function(){return e},e}function B(){var e=Object(b.a)(["\n  margin-right: 40px;\n  width: 300px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return B=function(){return e},e}function F(){var e=Object(b.a)(["\n  display: flex;\n"]);return F=function(){return e},e}function G(){var e=Object(b.a)(["\n  max-width: 1010px;\n  width: 100%;\n  margin: 20px auto;\n"]);return G=function(){return e},e}var M=g.default.div(G()),$=g.default.div(F()),H=g.default.div(B()),K=g.default.div(J()),L=(g.default.img(q()),g.default.div(W()),g.default.div(T()),g.default.h3(I()),g.default.p(D()),g.default.div(A()),g.default.div(R()),n(45)),Q=n(113),U=n(116),V=n(111),X=n(119),Y=n(117);var Z=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)("Root Choose Styles"),o=Object(d.a)(c,2),i=o[0],u=o[1],m=Object(a.useState)(""),s=Object(d.a)(m,2),p=s[0],b=s[1],g=Object(a.useState)({}),v=Object(d.a)(g,2),E=v[0],h=v[1],j=Object(a.useContext)(f).actions.setState,x=function(){var e={};return n||(e.name="required"),i||(e.type="required"),e};return r.a.createElement(L.a,{align:"center"},r.a.createElement(L.a,{width:"medium",margin:"large"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log("Submit: \n",n,i),h(x),E||(j("pageName",n),console.log("submitted"))}},r.a.createElement(Q.a,{label:"Name of your Software",error:E.name},r.a.createElement(U.a,{name:"name",placeholder:"Jot something",onChange:function(e){return l(e.target.value)}})),r.a.createElement(Q.a,{label:"Project Type",error:E.type},r.a.createElement(V.a,{name:"type",options:["Root Choose Styles","Remake Existing Software","I have all the Assets Needed"],value:"Root Choose Styles",onChange:function(e){return u(e.value)}})),r.a.createElement(Q.a,{label:"Description"},r.a.createElement(X.a,{name:"description",value:p||"",onChange:function(e){return b(e.target.value)}})),r.a.createElement(L.a,{tag:"footer",margin:{top:"medium"},align:"center"},r.a.createElement(Y.a,{type:"submit",primary:!0,label:"Next"})))))},_=n(105),ee=n(115),te=n(118),ne=n(106),ae=n(107),re=n(108),le=n(109),ce=n(110),oe=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],l=t[1];return r.a.createElement(M,{name:"Profile Container \ud83d\udcbc"},r.a.createElement("h1",null,"Estimate My App"),r.a.createElement("p",null,"Select the items below which best describe your app and the features you require."),r.a.createElement(_.a,{animate:!0},r.a.createElement(ee.a,{label:"\ud83d\udcbc General information"},r.a.createElement(L.a,{direction:"row",pad:"small",background:"light-2",justify:"center"},r.a.createElement(L.a,{align:"center",justify:"center",width:"small"},r.a.createElement(ne.a,{color:"plain",size:"xlarge"})),r.a.createElement(Z,null))),r.a.createElement(ee.a,{label:"\ud83d\udcbb/\ud83d\udcf1/\ud83e\udd16 Type of Software"},r.a.createElement(L.a,{pad:"medium",background:"light-2"},r.a.createElement(te.a,null,"What kind of software do you want?"),r.a.createElement(L.a,{direction:"row",border:{color:n||"brand",size:"large"},pad:"medium",background:n},r.a.createElement(L.a,null,r.a.createElement(Y.a,{primary:!0,color:"yellow",icon:r.a.createElement(ae.a,{size:"xlarge"}),label:r.a.createElement("p",null,"Single Page Website"),onClick:function(){return l("yellow")}})),r.a.createElement(L.a,null,r.a.createElement(Y.a,{primary:!0,color:"neutral-3",icon:r.a.createElement(r.a.Fragment,null,r.a.createElement(re.a,{size:"xlarge",color:"plain"}),"or",r.a.createElement(le.a,{size:"xlarge",color:"plain"})),label:r.a.createElement("p",null,"App"),onClick:function(){return l("neutral-3")}})),r.a.createElement(L.a,null,r.a.createElement(Y.a,{primary:!0,color:"neutral-1",icon:r.a.createElement(ce.a,{size:"xlarge"}),label:r.a.createElement("p",null,"Other/Custom Software"),onClick:function(){return l("neutral-1")}})))))),r.a.createElement($,null,r.a.createElement(H,null,"Preview"),r.a.createElement(K,null,"Settings")))},ie=function(){return r.a.createElement(o.a,null,r.a.createElement(P,null,r.a.createElement(i.a,{path:"/",exact:!0,component:function(){return r.a.createElement(oe,null)}})))};c.a.render(r.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[74,1,2]]]);
//# sourceMappingURL=main.e729a9b8.chunk.js.map