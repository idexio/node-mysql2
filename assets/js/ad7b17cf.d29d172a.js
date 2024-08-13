"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1560],{5700:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=t(4848),a=t(8453),s=t(1470),o=t(9365);const l={},c="await \u2014 co",i={id:"examples/promise-wrapper/co-await",title:"await \u2014 co",description:"",source:"@site/docs/examples/promise-wrapper/co-await.mdx",sourceDirName:"examples/promise-wrapper",slug:"/examples/promise-wrapper/co-await",permalink:"/node-mysql2/docs/examples/promise-wrapper/co-await",draft:!1,unlisted:!1,editUrl:"https://github.com/sidorares/node-mysql2/tree/master/website/docs/examples/promise-wrapper/co-await.mdx",tags:[],version:"current",frontMatter:{},sidebar:"examples",previous:{title:"Binlog Watcher",permalink:"/node-mysql2/docs/examples/binlog-watcher"},next:{title:"MySQL Proxy",permalink:"/node-mysql2/docs/examples/tests/mysql-proxy"}},u={},d=[];function p(e){const n={code:"code",h1:"h1",header:"header",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"await--co",children:"await \u2014 co"})}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(o.A,{value:"await.js",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"'use strict';\n\nconst mysql = require('mysql2/promise');\n\nasync function test() {\n  const c = await mysql.createConnection({\n    port: 3306,\n    user: 'testuser',\n    namedPlaceholders: true,\n    password: 'testpassword',\n  });\n  console.log('connected!');\n  const [rows, fields] = await c.query('show databases');\n  console.log(rows);\n\n  try {\n    const [rows, fields] = await c.query('some invalid sql here');\n  } catch (e) {\n    console.log('caught exception!', e);\n  }\n\n  console.log(await c.execute('select sleep(0.5)'));\n  console.log('after first sleep');\n  console.log(await c.execute('select sleep(0.5)'));\n  console.log('after second sleep');\n  let start = +new Date();\n  console.log(\n    await Promise.all([\n      c.execute('select sleep(2.5)'),\n      c.execute('select sleep(2.5)'),\n    ])\n  );\n  console.log(\n    'after 2+3 parallel sleep which is in fact not parallel because commands are queued per connection'\n  );\n  let end = +new Date();\n  console.log(end - start);\n  await c.end();\n\n  const p = mysql.createPool({\n    port: 3306,\n    user: 'testuser',\n    namedPlaceholders: true,\n    password: 'testpassword',\n  });\n  console.log(await p.execute('select sleep(0.5)'));\n  console.log('after first pool sleep');\n  start = +new Date();\n  console.log(\n    await Promise.all([\n      p.execute('select sleep(2.5)'),\n      p.execute('select sleep(2.5)'),\n    ])\n  );\n  console.log('after 2+3 parallel pool sleep');\n  end = +new Date();\n  console.log(end - start);\n  await p.end();\n}\n\ntest()\n  .then(() => {\n    console.log('done');\n  })\n  .catch((err) => {\n    console.log('error!', err);\n    throw err;\n  });\n"})})}),(0,r.jsx)(o.A,{value:"co.js",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"'use strict';\n\nconst mysql = require('mysql2/promise');\nconst co = require('co');\n\nco(function* () {\n  const c = yield mysql.createConnection({\n    port: 3306,\n    user: 'root',\n    namedPlaceholders: true,\n  });\n  const rows = yield c.query('show databases');\n  console.log(rows);\n  console.log(yield c.execute('select 1+:toAdd as qqq', { toAdd: 10 }));\n  yield c.end();\n})\n  .then(function () {\n    console.log('done');\n  })\n  .catch(function (err) {\n    console.log(err);\n    throw err;\n  });\n"})})}),(0,r.jsx)(o.A,{value:".babelrc",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "plugins": ["transform-async-to-generator"]\n}\n'})})}),(0,r.jsx)(o.A,{value:"package.json",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "name": "promise-co-await",\n  "version": "1.0.0",\n  "description": "",\n  "main": "await.js",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "author": "",\n  "license": "ISC",\n  "dependencies": {\n    "babel-cli": "^6.9.0"\n  }\n}\n'})})})]})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var r=t(4164);const a={tabItem:"tabItem_Ymn6"};var s=t(4848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>j});var r=t(6540),a=t(4164),s=t(3104),o=t(6347),l=t(205),c=t(7485),i=t(1682),u=t(679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,i.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=p(e),[o,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[i,d]=h({queryString:t,groupId:a}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),w=(()=>{const e=i??f;return m({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{w&&c(w)}),[w]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=t(2303);const w={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(4848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),a=l[t].value;a!==r&&(i(n),o(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",w.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",w.tabList),children:[(0,g.jsx)(x,{...n,...e}),(0,g.jsx)(v,{...n,...e})]})}function j(e){const n=(0,b.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var r=t(6540);const a={},s=r.createContext(a);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);