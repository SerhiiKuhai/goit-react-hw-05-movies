"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(e,n,t){t.r(n),t.d(n,{Reviews:function(){return s}});var r=t(439),c=t(791),i=t(378),u=t(184),o=t(87).useParams,s=function(){var e=o().movieId,n="https://api.themoviedb.org/3/movie/".concat(e,"/reviews?language=en-US&page=1"),t=(0,c.useState)([]),s=(0,r.Z)(t,2),a=s[0],h=s[1];return(0,c.useEffect)((function(){(0,i.J)(n).then((function(e){h(e)})).catch((function(e){return console.error(e)}))}),[n]),a.total_results?(0,u.jsx)("ul",{children:a.results&&a.results.map((function(e){return(0,u.jsxs)("li",{children:[(0,u.jsx)("h3",{children:e.author}),(0,u.jsx)("p",{children:e.content})]},e.id)}))}):(0,u.jsx)("p",{children:"We don't have any reviews for this movie."})}},378:function(e,n,t){t.d(n,{J:function(){return u}});var r=t(861),c=t(687),i=t.n(c);function u(e){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTc4ZGQ2OWNiMmJmYjVkNjY5MmZjZmI4ZTMwMDA2MiIsInN1YiI6IjY0OTc0ZDNlZWI3OWMyMDBjNTZkNzIwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lOL2nEX5xQqOUvs2EEZKNZBmeuN-zokX2Enf8lSL4ZA"}},e.next=3,fetch(n,t).then((function(e){return e.json()}));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=186.b3b8a7b2.chunk.js.map