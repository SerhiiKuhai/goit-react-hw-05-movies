"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{247:function(n,t,r){r.r(t),r.d(t,{Cast:function(){return s}});var e=r(439),i=r(791),a=r(378),c=r(825),o=r(467),u=r(184),p=r(87).useParams,s=function(){var n=p().movieId,t="https://api.themoviedb.org/3/movie/".concat(n,"/credits?language=en-US"),r=(0,i.useState)([]),s=(0,e.Z)(r,2),l=s[0],h=s[1];return(0,i.useEffect)((function(){(0,a.J)(t).then((function(n){h(n)})).catch((function(n){return console.error(n)}))}),[t]),l&&(0,u.jsx)(o.W,{children:(0,u.jsx)(c.r,{children:l.cast&&l.cast.map((function(n){return(0,u.jsxs)(c.P,{children:[null!==n.profile_path&&(0,u.jsx)("img",{width:"100px",height:"150px",src:"https://image.tmdb.org/t/p/w500/".concat(n.profile_path),alt:n.name}),(0,u.jsx)("h3",{children:n.name}),(0,u.jsx)("p",{children:n.character})]},n.id)}))})})}},467:function(n,t,r){r.d(t,{W:function(){return o},e:function(){return u}});var e,i,a=r(168),c=r(686),o=c.Z.div(e||(e=(0,a.Z)(["\n  display: bloc;\n  max-width: 90%;\n  padding: 4% 10%;\n\n  margin-bottom: 20px;\n  margin-left: auto;\n  margin-right: auto;\n\n  color: #010101;\n\n  background-color: rgb(235, 235, 235);\n  box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);\n"]))),u=c.Z.div(i||(i=(0,a.Z)(["\n  display: flex;\n  margin-top: 10px;\n  gap: 20px;\n  background-color: rgb(235, 235, 235);\n"])))},825:function(n,t,r){r.d(t,{P:function(){return u},r:function(){return o}});var e,i,a=r(168),c=r(686),o=c.Z.ul(e||(e=(0,a.Z)(["\n  display: block;\n  margin-bottom: 10px;\n  padding: 0px;\n"]))),u=c.Z.li(i||(i=(0,a.Z)(["\n  display: flex;\n  align-items: center;\n  margin-left: 20px;\n  margin-bottom: 5px;\n  gap: 10px;\n"])))},378:function(n,t,r){r.d(t,{J:function(){return c}});var e=r(861),i=r(687),a=r.n(i);function c(n){return o.apply(this,arguments)}function o(){return(o=(0,e.Z)(a().mark((function n(t){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTc4ZGQ2OWNiMmJmYjVkNjY5MmZjZmI4ZTMwMDA2MiIsInN1YiI6IjY0OTc0ZDNlZWI3OWMyMDBjNTZkNzIwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lOL2nEX5xQqOUvs2EEZKNZBmeuN-zokX2Enf8lSL4ZA"}},n.next=3,fetch(t,r).then((function(n){return n.json()}));case 3:return e=n.sent,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=247.8f2a1b31.chunk.js.map