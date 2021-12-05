(this["webpackJsonpsquiz-it"]=this["webpackJsonpsquiz-it"]||[]).push([[0],{36:function(n,e,t){},61:function(n,e,t){"use strict";t.r(e);var r,c,i,o,a,s,u,d,l,b,j,f,p,x=t(1),O=t.n(x),h=t(26),m=t.n(h),g=(t(36),t(2)),v=t(3),y=Object(v.a)(r||(r=Object(g.a)(["\n  @import url(//fonts.googleapis.com/css?family=Roboto);\n  @import url(//fonts.googleapis.com/css?family=Open+Sans);\n\n  body {\n    margin: 0;\n    padding: 0;\n    color: #333;\n    font-family: 'Roboto', 'Open Sans';    \n  }\n"]))),C=v.b.div(c||(c=Object(g.a)(["\n  display: flex;\n  margin: auto;\n  flex-direction: column;\n  @media (min-width: 768px) {\n    flex-direction: row;\n  }\n"]))),k=v.b.div(i||(i=Object(g.a)(["\n  width: 100%;\n  @media (min-width: 768px) {\n    width: 70%;\n  }\n"]))),w=v.b.ol(o||(o=Object(g.a)(["\n  margin: 0;\n  padding: 0;\n"]))),S=v.b.div(a||(a=Object(g.a)(["\n  display: grid;\n  grid-template-columns: 20% 20% 40% 20%;\n  background-color: #f0f0f0;\n  border-bottom: 1px solid #c0c0c0;\n"]))),z=v.b.h3(s||(s=Object(g.a)(["\n  text-align: center;\n  font-size: 12px;\n  font-weight: bold;\n\n  @media (min-width: 768px) {\n    font-size: 14px;\n  }\n"]))),E=t(0),F=function(n){n.props;return Object(E.jsxs)(S,{children:[Object(E.jsx)(z,{children:"name"}),Object(E.jsx)(z,{children:"country"}),Object(E.jsx)(z,{children:"industry"}),Object(E.jsx)(z,{children:"employees"})]})},P=v.b.li(u||(u=Object(g.a)(["\n  padding: 20px 0;\n  display: grid;\n  align-items: center;\n  grid-template-columns: 20% 20% 40% 20%;\n  border-bottom: 1px solid #e0e0e0;\n  background-color: #f8f8f8;\n  \n  @media (min-width: 768px) {\n    padding: 20px 20px;\n    font-size: 14px;\n  }\n"]))),B=v.b.p(d||(d=Object(g.a)(["\n  margin: 0;\n  text-align: center;\n  font-size: 12px;\n  @media (min-width: 768px) {\n    font-size: 14px;\n  }\n"]))),L=function(n){var e=n.props;return Object(E.jsxs)(P,{children:[Object(E.jsx)(B,{children:e.name}),Object(E.jsx)(B,{children:e.country}),Object(E.jsx)(B,{children:e.industry}),Object(E.jsx)(B,{children:e.numberOfEmployees})]})},T=t(5),q=O.a.createContext(),A=O.a.createContext(),I=O.a.createContext(),J=O.a.createContext(),N=O.a.createContext(),R=function(){return Object(x.useContext)(A)},D=function(){return Object(x.useContext)(J)},M=function(){return Object(x.useContext)(I)},V=function(n){var e=n.children,t=Object(x.useState)([]),r=Object(T.a)(t,2),c=r[0],i=r[1],o=Object(x.useState)([]),a=Object(T.a)(o,2),s=a[0],u=a[1];return Object(E.jsx)(A.Provider,{value:c,children:Object(E.jsx)(q.Provider,{value:function(n){i(n)},children:Object(E.jsx)(J.Provider,{value:s,children:Object(E.jsx)(I.Provider,{value:function(n){u(n)},children:Object(E.jsx)(N.Provider,{value:function(){u(c)},children:e})})})})})},G=function(){var n=D();return Object(E.jsxs)(k,{children:[Object(E.jsx)(F,{}),Object(E.jsx)(w,{children:n.map((function(n){return Object(E.jsx)(L,{props:n},n.id)}))})]})},H=t(15),K=v.b.div(l||(l=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: #f0f0f0;\n  width: 100%;\n  padding-bottom: 20px;\n  @media (min-width: 768px) {\n    width: 30%;\n    padding: 0;\n  }\n"]))),Q=v.b.div(b||(b=Object(g.a)(["\n  cursor: pointer;\n  padding: 20px;\n  font-weight: bold;\n  background-color: #dadada;\n\n  &:hover {\n    background-color: #cacaca;\n    transition: all .4s ease;\n  }\n\n  &:active {\n    background-color: #2b93ba;\n  }\n"]))),U=function(n){var e=n.title,t=n.handleClick,r=n.isToggle;return Object(E.jsx)(Q,{onClick:t,isToggle:r,children:e})},W=v.b.ul(j||(j=Object(g.a)(["\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n"]))),X=v.b.li(f||(f=Object(g.a)(["\n  padding: 20px;\n  font-weight: bold;\n  background-color: #e0e0e0;\n"]))),Y=v.b.li(p||(p=Object(g.a)(["\n  padding: 10px 10px 10px 20px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #e7e7e7;\n    transition: all .4s ease;\n  }\n"]))),Z=function(n){var e=n.itemsList,t=n.handleClick,r=n.title;return Object(E.jsxs)(W,{children:[Object(E.jsx)(X,{children:r}),function(){var n=0;return e.map((function(e){return n++,Object(E.jsx)(Y,{onClick:t,children:e},n)}))}()]})},$=t(6),_=t.n($),nn=[],en=[],tn=function(){var n=Object(x.useState)(!1),e=Object(T.a)(n,2),t=e[0],r=e[1],c=Object(x.useState)(!1),i=Object(T.a)(c,2),o=i[0],a=i[1],s=R(),u=D(),d=M(),l=Object(x.useContext)(N),b=Object(H.a)(new Set(s.map((function(n){return n.country})))).sort(),j=Object(H.a)(new Set(s.map((function(n){return n.industry})))).sort(),f=function(n){var e=n.target.firstChild.nodeValue;!function(n){var e=n.target;e.value=!e.value,e.style.background=1===e.value?"#45C3F2":"#f0f0f0"}(n),function(n){b.includes(n)?nn.some((function(e){return e.country===n}))?_.a.remove(nn,(function(e){return e.country===n})):nn.push(s.find((function(e){return e.country===n}))):en.some((function(e){return e.industry===n}))?_.a.remove(en,(function(e){return e.industry===n})):en.push(s.find((function(e){return e.industry===n}))),nn.length<=0&&en.length<=0?l():d(_.a.union(nn,en))}(e)};return Object(E.jsxs)(K,{children:[Object(E.jsx)(U,{handleClick:function(n){r(!t),t||d(_.a.sortBy(u,(function(n){return n.name}))),t&&d(_.a.sortBy(u,(function(n){return n.name})).reverse())},title:"Sort by Name"}),Object(E.jsx)(U,{handleClick:function(n){a(!o),o||d(_.a.sortBy(u,(function(n){return n.numberOfEmployees}))),o&&d(_.a.sortBy(u,(function(n){return n.numberOfEmployees})).reverse())},title:"Sort by Employees"}),Object(E.jsx)(Z,{itemsList:b,handleClick:f,title:"Filter by Countries"}),Object(E.jsx)(Z,{itemsList:j,handleClick:f,title:"Filter by Industries"})]})},rn=t(14),cn=t.n(rn),on=t(30),an=t(31),sn=t.n(an),un=function(n){var e=Object(x.useState)([]),t=Object(T.a)(e,2),r=t[0],c=t[1];return Object(x.useEffect)((function(){if(n){var e=function(){var e=Object(on.a)(cn.a.mark((function e(){var t;return cn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,sn.a.get(n);case 3:t=e.sent,c(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}}),[n]),{data:r}},dn=function(){var n=R(),e=Object(x.useContext)(q),t=M(),r=un("https://my.api.mockaroo.com/squiz.json?key=1e81f470").data;Object(x.useEffect)((function(){e(r)}),[r]),Object(x.useEffect)((function(){t(n)}),[n]);return Object(E.jsxs)("div",{className:"App",children:[Object(E.jsx)(y,{}),Object(E.jsx)(C,{children:Array.isArray(n)&&n.length>0?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(tn,{props:n}),Object(E.jsx)(G,{})]}):Object(E.jsx)("div",{children:"Loading data"})})]})},ln=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,62)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,i=e.getLCP,o=e.getTTFB;t(n),r(n),c(n),i(n),o(n)}))};m.a.render(Object(E.jsx)(O.a.StrictMode,{children:Object(E.jsx)(V,{children:Object(E.jsx)(dn,{})})}),document.getElementById("root")),ln()}},[[61,1,2]]]);
//# sourceMappingURL=main.eca5f790.chunk.js.map