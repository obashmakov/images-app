(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{59:function(t,e,n){},67:function(t,e,n){},68:function(t,e,n){},69:function(t,e,n){},71:function(t,e,n){"use strict";n.r(e);var c=n(8),a=n(3),r=n(49),i=n.n(r),s=(n(59),n(16)),o=n(50),u=n(36),l=n(53);function j(){var t=Object(l.a)(["\n  query getPostList {\n    posts(paging: {limit: 12}) {\n      items {\n        id,\n        thumbnail\n      }\n    }\n  }\n"]);return j=function(){return t},t}var m=Object(s.gql)(j()),b=(n(67),n(68),function(){return Object(c.jsx)("div",{className:"loading",children:"Loading...Please wait"})}),p=function(){var t=Object(s.useQuery)(m).data,e=Object(a.useState)([]),n=Object(u.a)(e,2),r=n[0],i=n[1],o=Object(a.useState)(!1),l=Object(u.a)(o,2),j=l[0],p=l[1];return Object(a.useEffect)((function(){t?(i(t.posts.items),p(!1)):p(!0)}),[t]),Object(c.jsxs)(c.Fragment,{children:[j&&Object(c.jsx)(b,{}),r.length>0&&Object(c.jsx)("div",{className:"images",children:r.map((function(t){return Object(c.jsx)("img",{className:"images__image",src:"\n                https://uwatch.ams3.cdn.digitaloceanspaces.com/".concat(t.thumbnail,"\n              "),alt:"cybersport"},t.id)}))})]})},h=(n(69),Object(o.a)((function(t){var e=t.graphqlErrors;e&&e.map((function(t){var e=t.message;return alert("Graphql error ".concat(e))}))}))),O=Object(s.from)([h,new s.HttpLink({uri:"https://uwatch.live/graphql"})]),d=new s.ApolloClient({cache:new s.InMemoryCache,link:O}),f=function(){return Object(c.jsx)(s.ApolloProvider,{client:d,children:Object(c.jsx)("main",{className:"main",children:Object(c.jsx)(p,{})})})};i.a.render(Object(c.jsx)(f,{}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.02d9c032.chunk.js.map