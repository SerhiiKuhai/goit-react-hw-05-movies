"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[828],{467:function(n,r,e){e.d(r,{W:function(){return c},e:function(){return s}});var i,t,o=e(168),a=e(686),c=a.Z.div(i||(i=(0,o.Z)(["\n  display: bloc;\n  max-width: 90%;\n  padding: 4% 10%;\n\n  margin-bottom: 20px;\n  margin-left: auto;\n  margin-right: auto;\n\n  color: #010101;\n\n  background-color: rgb(235, 235, 235);\n  box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);\n"]))),s=a.Z.div(t||(t=(0,o.Z)(["\n  display: flex;\n  margin-top: 10px;\n  gap: 20px;\n  background-color: rgb(235, 235, 235);\n"])))},825:function(n,r,e){e.d(r,{P:function(){return s},r:function(){return c}});var i,t,o=e(168),a=e(686),c=a.Z.ul(i||(i=(0,o.Z)(["\n  display: block;\n  margin-bottom: 10px;\n  padding: 0px;\n"]))),s=a.Z.li(t||(t=(0,o.Z)(["\n  display: flex;\n  align-items: center;\n  margin-left: 20px;\n  margin-bottom: 5px;\n  gap: 10px;\n"])))},627:function(n,r,e){e.d(r,{AR:function(){return s},V1:function(){return d},WR:function(){return l}});var i,t,o,a=e(168),c=e(686),s=c.Z.h1(i||(i=(0,a.Z)(["\n  color: rgba(0, 0, 0, 0.8);\n  padding: 16px;\n  padding-top: 0;\n  margin: 0;\n"]))),l=c.Z.h2(t||(t=(0,a.Z)(["\n  color: rgba(0, 0, 0, 0.8);\n  padding: 16px;\n  margin: 0;\n"]))),d=c.Z.h3(o||(o=(0,a.Z)(["\n  color: rgba(0, 0, 0, 0.8);\n  padding: 16px;\n  margin: 0;\n"])))},828:function(n,r,e){e.r(r);var i=e(439),t=e(791),o=e(689),a=e(87),c=e(378),s=e(825),l=e(627),d=e(467),u=e(184);r.default=function(){var n,r,e=(0,t.useState)([]),p=(0,i.Z)(e,2),h=p[0],x=p[1],g=(0,o.TH)(),f=(0,t.useRef)(null!==(n=null===(r=g.state)||void 0===r?void 0:r.from)&&void 0!==n?n:"/"),m=(0,o.UO)().movieId,j="https://api.themoviedb.org/3/movie/".concat(m,"?language=en-US");return(0,t.useEffect)((function(){(0,c.J)(j).then((function(n){x(n)})).catch((function(n){return console.error(n)}))}),[j]),h&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(d.W,{children:[(0,u.jsx)(a.Link,{to:f.current,children:"\u2190 Go back"}),(0,u.jsxs)(d.e,{children:[null!==h.backdrop_path&&(0,u.jsx)("img",{width:"250px",height:"250px",src:"https://image.tmdb.org/t/p/original/".concat(h.backdrop_path),alt:h.original_title}),(0,u.jsxs)("div",{children:[(0,u.jsx)(l.AR,{children:h.original_title}),(0,u.jsxs)("p",{children:["User Scrore: ",Math.round(10*h.vote_average),"%"]}),(0,u.jsx)(l.WR,{children:"Overview"}),(0,u.jsx)("p",{children:h.overview}),(0,u.jsx)(l.WR,{children:"Genres"}),(0,u.jsx)(s.r,{children:h.genres&&h.genres.map((function(n){return(0,u.jsxs)(s.P,{children:[" ",n.name]},n.id)}))})]})]})]}),(0,u.jsxs)(d.W,{children:[(0,u.jsx)(l.V1,{children:"Additional information"}),(0,u.jsxs)(s.r,{children:[(0,u.jsx)(s.P,{children:(0,u.jsx)(a.Link,{to:"cast",children:"Cast"})}),(0,u.jsx)(s.P,{children:(0,u.jsx)(a.Link,{to:"reviews",children:"Reviews"})})]})]}),(0,u.jsx)(t.Suspense,{fallback:(0,u.jsx)("div",{children:"Loading..."}),children:(0,u.jsx)(o.j3,{})})]})}},378:function(n,r,e){e.d(r,{J:function(){return a}});var i=e(861),t=e(687),o=e.n(t);function a(n){return c.apply(this,arguments)}function c(){return(c=(0,i.Z)(o().mark((function n(r){var e,i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTc4ZGQ2OWNiMmJmYjVkNjY5MmZjZmI4ZTMwMDA2MiIsInN1YiI6IjY0OTc0ZDNlZWI3OWMyMDBjNTZkNzIwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lOL2nEX5xQqOUvs2EEZKNZBmeuN-zokX2Enf8lSL4ZA"}},n.next=3,fetch(r,e).then((function(n){return n.json()}));case 3:return i=n.sent,n.abrupt("return",i);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=828.faba2be3.chunk.js.map