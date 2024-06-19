"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[6704],{1790:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var r=n(4848),a=n(8453),l=n(9489),s=n(7227);const i={sidebar_label:"Create Listener"},o="Create Listener",u={id:"reusable_snippets/create_listener",title:"create_listener",description:"Two ways to define listener",source:"@site/content/reusable_snippets/create_listener.md",sourceDirName:"reusable_snippets",slug:"/reusable_snippets/create_listener",permalink:"/docs/reusable_snippets/create_listener",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/reusable_snippets/create_listener.md",tags:[],version:"current",frontMatter:{sidebar_label:"Create Listener"}},c={},d=[{value:"Two ways to define listener",id:"two-ways-to-define-listener",level:2},{value:"Data passed into the model",id:"data-passed-into-the-model",level:2}];function p(e){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"create-listener",children:"Create Listener"}),"\n",(0,r.jsx)(t.h2,{id:"two-ways-to-define-listener",children:"Two ways to define listener"}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(s.A,{value:"Listener",label:"Listener",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from superduperdb import Listener\ndb.apply(\n    Listener(\n        key='key_name',\n        model=model,\n        select=select,\n    )\n)        \n"})})}),(0,r.jsx)(s.A,{value:"model.to_linstener",label:"model.to_linstener",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"db.apply(model.to_listener(key='key_name', select=select))        \n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"data-passed-into-the-model",children:"Data passed into the model"}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(s.A,{value:"Single Field",label:"Single Field",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"# Model predict function definition: model.predict(x)\n# Data example in database: {\"key_name\": 10}\n# Then the listener will call model.predict(10)\nfrom superduperdb import Listener\ndb.apply(\n    Listener(\n        key='key_name',\n        model=model,\n        select=select,\n    )\n)        \n"})})}),(0,r.jsx)(s.A,{value:"Multiple fields(*args)",label:"Multiple fields(*args)",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"# Model predict function definition: model.predict(x1, x2)\n# Data example in database: {\"key_name_1\": 10, \"key_name_2\": 100}\n# Then the listener will call model.predict(10, 100)\nfrom superduperdb import Listener\ndb.apply(\n    Listener(\n        key=['key_name_1', 'key_name_2'],\n        model=model,\n        select=select,\n    )\n)        \n"})})}),(0,r.jsx)(s.A,{value:"Multiple fields(*kwargs)",label:"Multiple fields(*kwargs)",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'# Model predict function definition: model.predict(x1, x2)\n# Data example in database: {"key_name_1": 10, "key_name_2": 100}\n# Then the listener will call model.predict(x1=10, x2=100)\nfrom superduperdb import Listener\ndb.apply(\n    Listener(\n        key={"key_name_1": "x1", "key_name_2": "x2"},\n        model=model,\n        select=select,\n    )\n)        \n'})})})]})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},7227:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var r=n(870);const a={tabItem:"tabItem_Ymn6"};var l=n(4848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:t})}},9489:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(6540),a=n(870),l=n(4245),s=n(6347),i=n(6494),o=n(2814),u=n(5167),c=n(1269);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=p(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,d]=h({queryString:n,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),y=(()=>{const e=u??f;return m({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{y&&o(y)}),[y]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=n(1062);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(4848);function x(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),a=i[n].value;a!==r&&(u(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...l,className:(0,a.A)("tabs__item",y.tabItem,l?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function _(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",y.tabList),children:[(0,v.jsx)(x,{...e,...t}),(0,v.jsx)(g,{...e,...t})]})}function w(e){const t=(0,b.A)();return(0,v.jsx)(_,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var r=n(6540);const a={},l=r.createContext(a);function s(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);