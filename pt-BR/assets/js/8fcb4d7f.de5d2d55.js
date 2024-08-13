"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9053],{3014:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>u,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var s=r(4848),t=r(8453),l=r(1470),o=r(9365),a=r(185),i=r(4443);const c={sidebar_position:1,tags:["query"]},u="SELECT",d={id:"examples/queries/simple-queries/select",title:"SELECT",description:"The examples below also work for the execute method.",source:"@site/docs/examples/queries/simple-queries/select.mdx",sourceDirName:"examples/queries/simple-queries",slug:"/examples/queries/simple-queries/select",permalink:"/node-mysql2/pt-BR/docs/examples/queries/simple-queries/select",draft:!1,unlisted:!1,editUrl:"https://github.com/sidorares/node-mysql2/tree/master/website/docs/examples/queries/simple-queries/select.mdx",tags:[{inline:!0,label:"query",permalink:"/node-mysql2/pt-BR/docs/tags/query"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["query"]},sidebar:"examples",previous:{title:"INSERT",permalink:"/node-mysql2/pt-BR/docs/examples/queries/simple-queries/insert"},next:{title:"UPDATE",permalink:"/node-mysql2/pt-BR/docs/examples/queries/simple-queries/update"}},h={},p=[{value:"query(sql)",id:"querysql",level:2},{value:"query(options)",id:"queryoptions",level:2},{value:"query(options) \u2014 Row as Array",id:"queryoptions--row-as-array",level:2},{value:"Glossary",id:"glossary",level:2},{value:"QueryOptions",id:"queryoptions-1",level:3}];function x(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"select",children:"SELECT"})}),"\n",(0,s.jsxs)(n.p,{children:["The examples below also work for the ",(0,s.jsx)(n.a,{href:"/docs/examples/queries/prepared-statements/select",children:(0,s.jsx)(n.code,{children:"execute"})})," method."]}),"\n",(0,s.jsx)(n.h2,{id:"querysql",children:"query(sql)"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"query(sql: string)"})}),"\n"]}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(o.A,{value:"promise.js",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"try {\n  const sql = 'SELECT * FROM `users` WHERE `name` = \"Page\" AND `age` > 45';\n\n  // highlight-next-line\n  const [rows, fields] = await connection.query(sql);\n\n  console.log(rows);\n  console.log(fields);\n} catch (err) {\n  console.log(err);\n}\n"})})}),(0,s.jsx)(o.A,{value:"callback.js",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const sql = 'SELECT * FROM `users` WHERE `name` = \"Page\" AND `age` > 45';\n\nconnection.query(sql, (err, rows, fields) => {\n  if (err instanceof Error) {\n    console.log(err);\n    return;\n  }\n\n  console.log(rows);\n  console.log(fields);\n});\n"})})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"rows"})," contains rows returned by server"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"fields"})," contains extra meta data about rows, if available"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["The connection used for the query (",(0,s.jsx)(n.code,{children:".query()"}),") can be obtained through the ",(0,s.jsx)(n.code,{children:"createConnection"}),", ",(0,s.jsx)(n.code,{children:"createPool"})," or ",(0,s.jsx)(n.code,{children:"createPoolCluster"})," methods."]})}),"\n",(0,s.jsx)("hr",{}),"\n",(0,s.jsx)(n.h2,{id:"queryoptions",children:"query(options)"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["query(options: ",(0,s.jsx)(n.a,{href:"#queryoptions",children:"QueryOptions"}),")"]})}),"\n"]}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(o.A,{value:"promise.js",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"try {\n  const sql = 'SELECT * FROM `users` WHERE `name` = \"Page\" AND `age` > 45';\n\n  // highlight-start\n  const [rows, fields] = await connection.query({\n    sql,\n    // ... other options\n  });\n  // highlight-end\n\n  console.log(rows);\n  console.log(fields);\n} catch (err) {\n  console.log(err);\n}\n"})})}),(0,s.jsx)(o.A,{value:"callback.js",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const sql = 'SELECT * FROM `users` WHERE `name` = \"Page\" AND `age` > 45';\n\nconnection.query(\n  {\n    sql,\n    // ... other options\n  },\n  (err, rows, fields) => {\n    if (err instanceof Error) {\n      console.log(err);\n      return;\n    }\n\n    console.log(rows);\n    console.log(fields);\n  }\n);\n"})})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"rows"})," contains rows returned by server"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"fields"})," contains extra meta data about rows, if available"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["The connection used for the query (",(0,s.jsx)(n.code,{children:".query()"}),") can be obtained through the ",(0,s.jsx)(n.code,{children:"createConnection"}),", ",(0,s.jsx)(n.code,{children:"createPool"})," or ",(0,s.jsx)(n.code,{children:"createPoolCluster"})," methods."]})}),"\n",(0,s.jsx)("hr",{}),"\n",(0,s.jsx)(n.h2,{id:"queryoptions--row-as-array",children:"query(options) \u2014 Row as Array"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["query(options: ",(0,s.jsx)(n.a,{href:"#queryoptions",children:"QueryOptions"}),")"]})}),"\n"]}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(o.A,{value:"promise.js",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"try {\n  const sql = 'SELECT * FROM `users` WHERE `name` = \"Page\" AND `age` > 45';\n\n  // highlight-start\n  const [rows, fields] = await connection.query({\n    sql,\n    rowsAsArray: true,\n    // ... other options\n  });\n  // highlight-end\n\n  console.log(rows);\n  console.log(fields);\n} catch (err) {\n  console.log(err);\n}\n"})})}),(0,s.jsx)(o.A,{value:"callback.js",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const sql = 'SELECT * FROM `users` WHERE `name` = \"Page\" AND `age` > 45';\n\nconnection.query(\n  {\n    sql,\n    rowsAsArray: true,\n    // ... other options\n  },\n  (err, rows, fields) => {\n    if (err instanceof Error) {\n      console.log(err);\n      return;\n    }\n\n    console.log(rows);\n    console.log(fields);\n  }\n);\n"})})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"rows"})," contains rows returned by server as array"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"fields"})," contains extra meta data about rows, if available"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["The connection used for the query (",(0,s.jsx)(n.code,{children:".query()"}),") can be obtained through the ",(0,s.jsx)(n.code,{children:"createConnection"}),", ",(0,s.jsx)(n.code,{children:"createPool"})," or ",(0,s.jsx)(n.code,{children:"createPoolCluster"})," methods."]})}),"\n",(0,s.jsx)("hr",{}),"\n",(0,s.jsx)(n.h2,{id:"glossary",children:"Glossary"}),"\n",(0,s.jsx)(n.h3,{id:"queryoptions-1",children:"QueryOptions"}),"\n",(0,s.jsx)(a.T,{title:"QueryOptions Specification",children:(0,s.jsx)(i.S,{language:"ts",url:"https://raw.githubusercontent.com/sidorares/node-mysql2/master/typings/mysql/lib/protocol/sequences/Query.d.ts",extractMethod:"QueryOptions",methodType:"interface"})})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>o});r(6540);var s=r(4164);const t={tabItem:"tabItem_Ymn6"};var l=r(4848);function o(e){let{children:n,hidden:r,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,o),hidden:r,children:n})}},1470:(e,n,r)=>{r.d(n,{A:()=>v});var s=r(6540),t=r(4164),l=r(3104),o=r(6347),a=r(205),i=r(7485),c=r(1682),u=r(679);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:t}}=e;return{value:n,label:r,attributes:s,default:t}}))}(r);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:r}=e;const t=(0,o.W6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,i.aZ)(l),(0,s.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(t.location.search);n.set(l,e),t.replace({...t.location,search:n.toString()})}),[l,t])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,l=h(e),[o,i]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:l}))),[c,d]=x({queryString:r,groupId:t}),[m,g]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,l]=(0,u.Dv)(r);return[t,(0,s.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:t}),j=(()=>{const e=c??m;return p({value:e,tabValues:l})?e:null})();(0,a.A)((()=>{j&&i(j)}),[j]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),g(e)}),[d,g,l]),tabValues:l}}var g=r(2303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(4848);function b(e){let{className:n,block:r,selectedValue:s,selectValue:o,tabValues:a}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const n=e.currentTarget,r=i.indexOf(n),t=a[r].value;t!==s&&(c(n),o(t))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;n=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;n=i[r]??i[i.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:a.map((e=>{let{value:n,label:r,attributes:l}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...l,className:(0,t.A)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":s===n}),children:r??n},n)}))})}function y(e){let{lazy:n,children:r,selectedValue:l}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===l));return e?(0,s.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function q(e){const n=m(e);return(0,f.jsxs)("div",{className:(0,t.A)("tabs-container",j.tabList),children:[(0,f.jsx)(b,{...n,...e}),(0,f.jsx)(y,{...n,...e})]})}function v(e){const n=(0,g.A)();return(0,f.jsx)(q,{...e,children:d(e.children)},String(n))}},4443:(e,n,r)=>{r.d(n,{S:()=>i});var s=r(6540),t=r(4586),l=r(1432),o=r(4848);const a=()=>(0,o.jsx)("span",{className:"loader"}),i=e=>{let{url:n,language:r,extractMethod:i,methodType:c}=e;const[u,d]=(0,s.useState)(""),[h,p]=(0,s.useState)(!0),[x,m]=(0,s.useState)(!0),{siteConfig:g}=(0,t.A)(),j=g.baseUrl.replace(/\/$/,""),f=/^\//.test(n)?`${j}${n}`:n;return(0,s.useEffect)((()=>{const e=new AbortController,n=e.signal;return fetch(f,{signal:n}).then((e=>e.text())).then((e=>{const n=i&&c?((e,n,r)=>{const s=e.split("\n"),t=`${r} ${n}`;let l=!1,o=0,a="";for(const i of s)if(i.includes(t)&&(l=!0),l&&(i.includes("{")&&o++,a+=i+"\n",i.includes("}")&&(o--,0===o)))break;return a.trim()||e})(e,i,c):e;d(n||e),p(!1),m(!1)})).catch((()=>{m(!0),p(!1)})),()=>{e.abort()}}),[f,i,c]),(0,o.jsx)(o.Fragment,{children:h?(0,o.jsx)(a,{}):(0,o.jsx)(o.Fragment,{children:x?(0,o.jsxs)("div",{children:["Unable to access the requested link: ",(0,o.jsx)("code",{children:f}),". Please verify the link or try again later."]}):(0,o.jsx)(l.A,{className:`language-${r}`,children:u})})})}},185:(e,n,r)=>{r.d(n,{T:()=>l});var s=r(1622),t=r(4848);const l=e=>{let{children:n,open:r,title:l}=e;return(0,t.jsx)(s.A,{open:r,className:"faq",summary:(0,t.jsx)("summary",{children:(0,t.jsx)("strong",{children:l})}),children:(0,t.jsx)("section",{children:n})})}}}]);