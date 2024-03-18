"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[2109],{25316:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var s=t(74848),o=t(28453);const a={sidebar_position:2,tags:["quickstart"]},r="Connecting to the Database",c={id:"docs/setup/connecting",title:"Connecting to the Database",description:"In this document we instantiate the variable db based on configuration and overrides.",source:"@site/content/docs/setup/connecting.md",sourceDirName:"docs/setup",slug:"/docs/setup/connecting",permalink:"/docs/docs/setup/connecting",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/docs/setup/connecting.md",tags:[{label:"quickstart",permalink:"/docs/tags/quickstart"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["quickstart"]},sidebar:"tutorialSidebar",previous:{title:"How-To Guide",permalink:"/docs/docs/walkthrough/tutorial_walkthrough"},next:{title:"Setting up tables and encodings",permalink:"/docs/docs/walkthrough/data_encodings_and_schemas"}},d={},i=[];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"connecting-to-the-database",children:"Connecting to the Database"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["In this document we instantiate the variable ",(0,s.jsx)(n.code,{children:"db"})," based on configuration and overrides.\nIn the remainder of the documentation, we reuse this variable without comment"]})}),"\n",(0,s.jsxs)(n.p,{children:["The simplest way to connect to ",(0,s.jsx)(n.code,{children:"superduperdb"})," is with:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from superduperdb import superduper\ndb = superduper()\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This command uses settings inherited from ",(0,s.jsx)(n.a,{href:"/docs/docs/setup/configuration",children:"the configurations set previously"}),".\nIn order to connect to a different database, one can do:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"db = superduper('mongodb://localhost:27018')\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Additional configurations can be injected with ",(0,s.jsx)(n.code,{children:"**kwargs"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"db = superduper('mongodb://localhost:27018', artifact_store='filesystem://./data')\n"})}),"\n",(0,s.jsxs)(n.p,{children:["... or by passing a modified ",(0,s.jsx)(n.code,{children:"CFG"})," object."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from superduperdb import CFG\n\nCFG.artifact_store = 'filesystem://./data'\ndb = superduper('mongodb://localhost:27018', CFG=CFG)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"db"})," object is an instance of ",(0,s.jsx)(n.code,{children:"superduperdb.base.datalayer.Datalayer"}),".\nThe ",(0,s.jsx)(n.code,{children:"Datalayer"})," class handles AI models and communicates with the databackend and associated components. Read more ",(0,s.jsx)(n.a,{href:"/docs/docs/fundamentals/datalayer_overview",children:"here"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var s=t(96540);const o={},a=s.createContext(o);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);