(this["webpackJsonpanime-api"]=this["webpackJsonpanime-api"]||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(6),s=n.n(c),i=(n(11),n(2)),o=n.n(i),u=n(3),j=n(4),l=n(0);var h=function(){return Object(l.jsx)("header",{children:Object(l.jsxs)("h1",{children:["A",Object(l.jsx)("strong",{children:"nimeL"}),"ist"]})})};var d=function(e){var t=e.topAnime;return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{children:"Top 10"}),Object(l.jsx)("div",{className:"slider",children:Object(l.jsxs)("div",{className:"slide-track",children:[t.map((function(e){return Object(l.jsx)("div",{className:"slide",children:Object(l.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(l.jsx)("img",{src:e.image_url,alt:""})})},e.rank)})),t.map((function(e){return Object(l.jsx)("div",{className:"slide",children:Object(l.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(l.jsx)("img",{src:e.image_url,alt:""})})},e.rank)}))]})})]})};var m=function(e){var t=e.anime;return Object(l.jsxs)("article",{className:"anime-card",children:[Object(l.jsx)("a",{href:t.url,target:"_blank",rel:"noreferrer",children:Object(l.jsx)("img",{src:t.image_url,alt:t.title},t.key)},t.mal_id),Object(l.jsxs)("div",{className:"anime-info",children:[Object(l.jsx)("h3",{children:t.title}),Object(l.jsx)("span",{children:t.score})]},t.key),Object(l.jsx)("a",{href:t.url,target:"_blank",rel:"noreferrer",children:Object(l.jsxs)("div",{className:"anime-over",children:[Object(l.jsx)("h2",{children:"Overview:"}),Object(l.jsx)("p",{className:"messageScore",children:function(e){if(e>0)return e<5?"I do notrecommend it.":e>=5&&e<8?"You may have fun.":e>8?"Great, this is one of the best anime":"nothing to say"}(t.score)}),Object(l.jsx)("p",{children:t.synopsis})]})},t.key)]},t.key)};var b=function(e){return Object(l.jsxs)("main",{children:[Object(l.jsx)("div",{className:"main-head",children:Object(l.jsx)("form",{className:"search-box",onSubmit:e.HandleSearch,children:Object(l.jsx)("input",{type:"search",placeholder:"Search any anime..",required:!0,value:e.search,onChange:function(t){return e.setSearch(t.target.value)}})})}),Object(l.jsx)("h3",{className:"messageSearch",children:e.message}),Object(l.jsx)("div",{className:"anime-container",children:e.animeList.map((function(e){return Object(l.jsx)(m,{anime:e},e.mal_id)}))})]})},f="https://api.jikan.moe/v3",O=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(f,"/top/anime/1/bypopularity")).then((function(e){return e.json()}));case 2:return t=e.sent,e.abrupt("return",t.top.slice(0,10));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(f,"/search/anime?q=").concat(t,"&order_by=title&sort=asc&limit=10")).then((function(e){return e.json()}));case 2:return n=e.sent,r=n.results,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var x=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)([]),s=Object(j.a)(c,2),i=s[0],m=s[1],f=Object(r.useState)(""),x=Object(j.a)(f,2),v=x[0],g=x[1],y=Object(r.useState)(""),k=Object(j.a)(y,2),N=k[0],S=k[1],w=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:t=e.sent,m(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t);case 2:(n=e.sent)?(A(n),a(n)):alert("We dont found anything");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(e){var t=0,n=0,r="";if(e){e.forEach((function(e){t+=e.score,n+=1}));var a=t/n;n>0&&(a<5?r="I do notrecommend it.":a>=5&&a<8?r="You may have fun.":a>8&&(r="Great, this is one of the best anime"),S(r))}else S(r="nothing there")};return Object(r.useEffect)((function(){w()}),[]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(h,{}),Object(l.jsxs)("div",{className:"content-wrap",children:[Object(l.jsx)(d,{topAnime:i}),Object(l.jsx)(b,{HandleSearch:function(e){e.preventDefault(),_(v)},search:v,setSearch:g,animeList:n,message:N})]})]})};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)("div",{className:"container-1",children:Object(l.jsx)(x,{})})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.e07eb872.chunk.js.map