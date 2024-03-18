"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[9267],{9482:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var s=n(74848),r=n(28453);const a={sidebar_position:5},i="FAQ",o={id:"docs/faq",title:"FAQ",description:"Learn more about SuperDuperDB.",source:"@site/content/docs/faq.md",sourceDirName:"docs",slug:"/docs/faq",permalink:"/docs/docs/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/docs/faq.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Welcome to SuperDuperDB!",permalink:"/docs/docs/intro"},next:{title:"Get started",permalink:"/docs/category/get-started"}},c={},d=[];function l(e){const t={a:"a",code:"code",h1:"h1",p:"p",...(0,r.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"faq",children:"FAQ"}),"\n",(0,s.jsx)(t.p,{children:"Learn more about SuperDuperDB."}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Is SuperDuperDB a database?"}),(0,s.jsx)(t.p,{children:"No, SuperDuperDB is not a traditional standalone database. Instead, it is a versatile Python framework or tool designed to seamlessly integrate artificial intelligence capabilities into various databases. It supports a wide range of databases, including but not limited to MongoDB, MySQL, Postgres, and more. The focus is on enhancing database functionality with AI features rather than serving as a standalone database solution."})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Is SuperDuperDB a vector-database?"}),(0,s.jsx)(t.p,{children:"No, SuperDuperDB is not a vector-database. It is a versatile Python framework that excels in bringing AI into your favorite database."})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsxs)("summary",{children:["Is plugging ",(0,s.jsx)(t.code,{children:"superduperdb"})," directly into a database secure? What precautions are in place, and can I restrict access to specific tables, such as a users table?"]}),(0,s.jsxs)(t.p,{children:["To adhere to the principle of least privilege, SuperDuperDB requires read-only access to the tables you intend to ",(0,s.jsx)(t.code,{children:"index"}),"."]}),(0,s.jsx)(t.p,{children:"One option is maintaining your database as read-only and storing the index externally, such as on your filesystem. Alternatively, you can establish a new table dedicated to housing the index (e.g superduper_index). In this case, the requisite step would be granting us write access to that specific table."}),(0,s.jsxs)(t.p,{children:["For enhanced security, consider creating a new user specifically for SuperDuperDB. Grant this user read-only access to your data tables and read-write access exclusively to the ",(0,s.jsx)(t.code,{children:"superduper_index"})," table."]}),(0,s.jsxs)(t.p,{children:["If you value privacy as well, we recommend engaging in a more in-depth discussion within the project's Slack channel: ",(0,s.jsx)(t.a,{href:"https://join.slack.com/t/superduperdb/shared_invite/zt-1zuojj0k0-RjAYBs1TDsvEa7yaFGa6QA",children:"SuperDuperDB Slack"}),"."]})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:" What benefits does superduperdb offer for training AI models (such as Classification) compared to conventional methods? Are there any fundamental distinctions? "}),(0,s.jsx)(t.p,{children:"While the underlying algorithm for training remains unchanged, the key distinction lies in the enhanced connectivity between your model and the data stores."}),(0,s.jsx)(t.p,{children:"This improved connectivity enables users to easily customize their models for different data subsets, offering flexibility in model development."}),(0,s.jsx)(t.p,{children:"Likewise, SuperDuperDB offers numerous conveniences for streaming inference, including Change-Data-Capture support, enabling the fast release of real-time applications."})]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var s=n(96540);const r={},a=s.createContext(r);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);