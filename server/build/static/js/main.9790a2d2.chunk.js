(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{119:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(56),l=c.n(s),i=(c(64),c(13)),a=c(2),b=c(21),o=c(27),d=c.n(o),j={get:function(e){return d.a.get("/data/".concat(e)).then((function(e){return e.data})).catch((function(e){console.log(e)}))},create:function(){return d.a.post("/tubs").then((function(e){return e.data.uri}))}},u=c(0),x=function(){var e=Object(a.f)(),t=Object(n.useState)(!1),c=Object(b.a)(t,2),r=c[0],s=c[1];return Object(u.jsxs)("div",{className:"pt-10 text-xl flex flex-col items-center ",children:[Object(u.jsx)("p",{className:"inline-block font-bold text-2xl",children:"Welcome!"}),Object(u.jsx)("p",{className:"mt-8 inline-block ",children:"Request Tub is a place where you can send your API calls or webhooks to gain valuable insight on their structure."}),Object(u.jsx)("p",{className:"mt-8 inline-block ",children:"Tubs are ephemeral and disappear after 48 hours, and hold only the latest 20 requests."}),Object(u.jsx)("p",{className:"mt-8 inline-block ",children:'Click "Create Tub" to get started!'}),Object(u.jsx)("button",{disabled:r,className:"mt-8 bg-blue-500 hover:bg-blue-700 disabled:bg-gray-300 disabled:border-gray-500 text-white font-bold py-2 px-4 border border-blue-700 rounded",onClick:function(t){t.preventDefault(),s(!0),j.create().then((function(t){e.push("/tub/".concat(t))}))},children:"Create Tub"})]})},h=function(e){var t=e.data,c=(t=JSON.parse(t)).headers,n=t.method,r=t.timestamp,s=t.body,l=t.query_params,i=!!c["content-type"]&&"application/json"===c["content-type"],a="ml-8 text-xs truncate";return Object(u.jsx)("div",{className:"p-3 mt-3 w-11/12 bg-indigo-200 border-2 border-indigo-400 rounded inline-block",children:Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:["timestamp: ",Object(u.jsxs)("code",{children:[r,Object(u.jsx)("br",{})]})]}),Object(u.jsxs)("li",{children:["method: ",Object(u.jsx)("code",{children:n})," ",Object(u.jsx)("br",{})]}),Object(u.jsxs)("li",{children:["headers: ",Object(u.jsx)("br",{}),Object(u.jsx)("code",{children:Object(u.jsx)("ul",{children:Object.keys(c).map((function(e){return Object(u.jsxs)("li",{className:a,children:[" ",e,": ",c[e],Object(u.jsx)("br",{})," "]},e)}))})})]}),Object(u.jsxs)("li",{children:["query parameters: ",Object(u.jsx)("br",{}),Object(u.jsx)("code",{children:Object(u.jsx)("ul",{children:Object.keys(l).map((function(e){return Object(u.jsxs)("li",{className:a,children:[e,": ",l[e]]},e)}))})})]}),Object(u.jsxs)("li",{children:["body: ",i?Object(u.jsx)("code",{style:{whiteSpace:"pre"},children:JSON.stringify(s,null,2)}):String(s)]})]})})},O=c(58),p=c(59),m=c.n(p),f=function(e){var t=e.slug,c=Object(n.useState)(null),r=Object(b.a)(c,2),s=r[0],l=r[1],i=Object(a.f)(),o="/".concat(t);return Object(n.useEffect)((function(){var e=m()("/");return e.emit("NewClient",t),e.on("UpdateTub",(function(e){var t=e.requests;l(t)})),function(){return e.disconnect()}}),[t]),Object(n.useEffect)((function(){j.get(t).then((function(e){if(e){var t=e.requests;l(t)}else i.push("/")}))}),[i,t]),Object(u.jsxs)("main",{children:[Object(u.jsx)("h3",{className:"mt-8 text-center text-2xl",children:"Tub API URL:"}),Object(u.jsx)("h4",{className:"mt-2 text-center text-2xl mb-1.5",children:Object(u.jsx)("code",{id:"requestURL",className:"bg-gray-300 border-2 border-gray-400 hover:bg-gray-400 hover:border-gray-500 p-2 rounded",children:o})}),Object(u.jsx)(O.CopyToClipboard,{text:o,children:Object(u.jsx)("button",{className:"block mt-4 mx-auto bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 border border-purple-700 rounded",children:"Copy URL"})}),Object(u.jsx)("div",{className:"flex flex-col items-center",children:s&&s.map((function(e){return Object(u.jsx)(h,{data:JSON.stringify(e)},e.timestamp)}))})]})},g=function(){return Object(u.jsx)("h1",{className:" bg-purple-200 text-purple-900 text-center border-black font-bold p-6 text-5xl",children:Object(u.jsx)(i.b,{to:"/",className:"hover:text-indigo-500",children:"Request Tub"})})},y=function(){var e,t=Object(a.g)("/tub/:slug"),c=null===t||void 0===t||null===(e=t.params)||void 0===e?void 0:e.slug;return Object(u.jsxs)("div",{children:[Object(u.jsx)(g,{}),Object(u.jsxs)(a.c,{children:[Object(u.jsx)(a.a,{path:"/tub/:slug",children:Object(u.jsx)(f,{slug:c})}),Object(u.jsx)(a.a,{path:"/",children:Object(u.jsx)(x,{})})]})]})};l.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(i.a,{children:Object(u.jsx)(y,{})})}),document.getElementById("root"))},64:function(e,t,c){}},[[119,1,2]]]);
//# sourceMappingURL=main.9790a2d2.chunk.js.map