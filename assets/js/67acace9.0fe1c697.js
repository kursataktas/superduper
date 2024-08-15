"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[8092],{6566:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=n(4848),i=n(8453),s=n(3935);const o={},c="Tutorials",a={id:"tutorials/intro",title:"Tutorials",description:"In this section we guide newcomers through the most",source:"@site/content/tutorials/intro.md",sourceDirName:"tutorials",slug:"/tutorials/intro",permalink:"/docs/tutorials/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/superduper-io/superduper/edit/main/docs/content/tutorials/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configure",permalink:"/docs/get_started/configuration"},next:{title:"Vector search",permalink:"/docs/tutorials/vector_search"}},l={},u=[];function d(e){const t={a:"a",h1:"h1",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"tutorials",children:"Tutorials"}),"\n",(0,r.jsx)(t.p,{children:"In this section we guide newcomers through the most\nbasic usage pattern in Superduper."}),"\n",(0,r.jsxs)(t.p,{children:["For more detailed, flexible and realistic use-cases,\nrefer to the ",(0,r.jsx)(t.a,{href:"/use_cases",children:"use-cases section"}),"."]}),"\n","\n","\n",(0,r.jsx)(s.A,{})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3935:(e,t,n)=>{n.d(t,{A:()=>g});n(6540);var r=n(870),i=n(5215),s=n(5358),o=n(877),c=n(3230),a=n(5225);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=n(4848);function d(e){let{href:t,children:n}=e;return(0,u.jsx)(s.A,{href:t,className:(0,r.A)("card padding--lg",l.cardContainer),children:n})}function h(e){let{href:t,icon:n,title:i,description:s}=e;return(0,u.jsxs)(d,{href:t,children:[(0,u.jsxs)(a.A,{as:"h2",className:(0,r.A)("text--truncate",l.cardTitle),title:i,children:[n," ",i]}),s&&(0,u.jsx)("p",{className:(0,r.A)("text--truncate",l.cardDescription),title:s,children:s})]})}function m(e){let{item:t}=e;const n=(0,i.Nr)(t);return n?(0,u.jsx)(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const n=(0,o.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.cC)(t.docId??void 0);return(0,u.jsx)(h,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(p,{item:t});case"category":return(0,u.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,i.$S)();return(0,u.jsx)(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(x,{...e});const s=(0,i.d1)(t);return(0,u.jsx)("section",{className:(0,r.A)("row",n),children:s.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(f,{item:e})},t)))})}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var r=n(6540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);