"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1883],{4972:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=t(5893),s=t(1151),a=t(4866),o=t(5162);const l={},u="MySQL Proxy",c={id:"examples/mysqlproxy",title:"MySQL Proxy",description:"",source:"@site/docs/examples/mysqlproxy.mdx",sourceDirName:"examples",slug:"/examples/mysqlproxy",permalink:"/node-mysql2/pt-BR/docs/examples/mysqlproxy",draft:!1,unlisted:!1,editUrl:"https://github.com/sidorares/node-mysql2/tree/master/website/docs/examples/mysqlproxy.mdx",tags:[],version:"current",frontMatter:{},sidebar:"examples",previous:{title:"Execute",permalink:"/node-mysql2/pt-BR/docs/examples/execute"},next:{title:"Pass SHA",permalink:"/node-mysql2/pt-BR/docs/examples/pass-sha"}},i={},d=[];function m(e){const n={code:"code",h1:"h1",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"mysql-proxy",children:"MySQL Proxy"}),"\n",(0,r.jsx)(a.Z,{children:(0,r.jsx)(o.Z,{value:"index.js",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"'use strict';\n\nconst mysql = require('mysql2');\nconst ClientFlags = require('mysql2/lib/constants/client.js');\n\nconst server = mysql.createServer();\nserver.listen(3307);\n\nserver.on('connection', (conn) => {\n  console.log('connection');\n\n  conn.serverHandshake({\n    protocolVersion: 10,\n    serverVersion: 'node.js rocks',\n    connectionId: 1234,\n    statusFlags: 2,\n    characterSet: 8,\n    capabilityFlags: 0xffffff ^ ClientFlags.COMPRESS,\n  });\n\n  conn.on('field_list', (table, fields) => {\n    console.log('field list:', table, fields);\n    conn.writeEof();\n  });\n\n  const remote = mysql.createConnection({\n    user: 'root',\n    database: 'dbname',\n    host: 'server.example.com',\n    password: 'secret',\n  });\n\n  conn.on('query', (sql) => {\n    console.log(`proxying query: ${sql}`);\n    remote.query(sql, function (err) {\n      // overloaded args, either (err, result :object)\n      // or (err, rows :array, columns :array)\n      if (Array.isArray(arguments[1])) {\n        // response to a 'select', 'show' or similar\n        const rows = arguments[1],\n          columns = arguments[2];\n        console.log('rows', rows);\n        console.log('columns', columns);\n        conn.writeTextResult(rows, columns);\n      } else {\n        // response to an 'insert', 'update' or 'delete'\n        const result = arguments[1];\n        console.log('result', result);\n        conn.writeOk(result);\n      }\n    });\n  });\n\n  conn.on('end', remote.end.bind(remote));\n});\n"})})})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>o});t(7294);var r=t(512);const s={tabItem:"tabItem_Ymn6"};var a=t(5893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,o),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>q});var r=t(7294),s=t(512),a=t(2466),o=t(6550),l=t(469),u=t(1980),c=t(7392),i=t(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const s=(0,o.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u._X)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=m(e),[o,u]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,d]=f({queryString:t,groupId:s}),[b,h]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,i.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),y=(()=>{const e=c??b;return p({value:e,tabValues:a})?e:null})();(0,l.Z)((()=>{y&&u(y)}),[y]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),h(e)}),[d,h,a]),tabValues:a}}var h=t(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(5893);function x(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),i=e=>{const n=e.currentTarget,t=u.indexOf(n),s=l[t].value;s!==r&&(c(n),o(s))},d=e=>{let n=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>u.push(e),onKeyDown:d,onClick:i,...a,className:(0,s.Z)("tabs__item",y.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function w(e){const n=b(e);return(0,v.jsxs)("div",{className:(0,s.Z)("tabs-container",y.tabList),children:[(0,v.jsx)(x,{...e,...n}),(0,v.jsx)(g,{...e,...n})]})}function q(e){const n=(0,h.Z)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var r=t(7294);const s={},a=r.createContext(s);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);