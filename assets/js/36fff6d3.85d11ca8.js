"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[6440],{38044:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var s=t(85893),o=t(11151);const r={sidebar_position:1},i="Community support",d={id:"docs/data_integrations/supported_query_APIs",title:"Community support",description:"In order to specify the action of models on the data, we provide an interface to pythonic ecosystem query APIs.",source:"@site/content/docs/data_integrations/supported_query_APIs.md",sourceDirName:"docs/data_integrations",slug:"/docs/data_integrations/supported_query_APIs",permalink:"/docs/docs/data_integrations/supported_query_APIs",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/docs/data_integrations/supported_query_APIs.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1}},c={},a=[{value:"Hybrid API",id:"hybrid-api",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"community-support",children:"Community support"}),"\n",(0,s.jsx)(n.p,{children:"In order to specify the action of models on the data, we provide an interface to pythonic ecosystem query APIs.\nIn particular, we provide wrappers to these projects to create database queries:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://pymongo.readthedocs.io/en/stable/",children:(0,s.jsx)(n.code,{children:"pymongo"})})," for MongoDB"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://ibis-project.org/",children:(0,s.jsx)(n.code,{children:"ibis"})})," for SQL databases"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ibis"})," also allows users to use raw SQL in their workflows."]}),"\n",(0,s.jsxs)(n.p,{children:["Queries in these two-worlds can be built by importing the table/collection class from\neach data backend. With ",(0,s.jsx)(n.code,{children:"pymongo"}),", one can write:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from superduperdb.backends.mongodb import Collection\n\nproducts = Collection('products')\n\nquery = products.find({'brand': 'Nike'}, {'_id': 1}).limit(10)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.code,{children:"ibis"}),", one would write:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from superduperdb.backends.ibis import Table\n\nproducts = Table('products')\n\nquery = products.filter(products.brand == 'Nike').select('id').limit(10)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"hybrid-api",children:"Hybrid API"}),"\n",(0,s.jsxs)(n.p,{children:["On top of the native features of ",(0,s.jsx)(n.code,{children:"pymongo"})," and ",(0,s.jsx)(n.code,{children:"ibis"}),", ",(0,s.jsx)(n.code,{children:"superduperdb"})," builds several novel features:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Additional ways to query the database with the outputs of machine learning models","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Query model-outputs directly"}),"\n",(0,s.jsx)(n.li,{children:"Vector-search"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Ways to encode and query more sophisticated data-types using the ",(0,s.jsx)(n.code,{children:"Document"}),"-",(0,s.jsx)(n.code,{children:"Encoder"})," pattern."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>i});var s=t(67294);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);