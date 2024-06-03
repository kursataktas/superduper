"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[282],{9537:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>o,frontMatter:()=>d,metadata:()=>c,toc:()=>l});var s=n(4848),t=n(8453);const d={},i=void 0,c={id:"api/backends/ibis/query",title:"query",description:"superduperdb.backends.ibis.query",source:"@site/content/api/backends/ibis/query.md",sourceDirName:"api/backends/ibis",slug:"/api/backends/ibis/query",permalink:"/docs/api/backends/ibis/query",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/api/backends/ibis/query.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"field_types",permalink:"/docs/api/backends/ibis/field_types"},next:{title:"artifacts",permalink:"/docs/api/backends/local/artifacts"}},a={},l=[{value:"<code>parse_query</code>",id:"parse_query",level:2},{value:"<code>IbisQuery</code>",id:"ibisquery",level:2},{value:"<code>RawSQL</code>",id:"rawsql",level:2}];function h(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"superduperdb.backends.ibis.query"})})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/SuperDuperDB/superduperdb/blob/main/superduperdb/backends/ibis/query.py",children:"Source code"})}),"\n",(0,s.jsx)(r.h2,{id:"parse_query",children:(0,s.jsx)(r.code,{children:"parse_query"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:"parse_query(query,\n     documents: Sequence[Dict] = (),\n     db: Optional[ForwardRef('Datalayer')] = None)\n"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Parameter"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"query"}),(0,s.jsx)(r.td,{children:"The query to parse."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"documents"}),(0,s.jsx)(r.td,{children:"The documents to query."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"db"}),(0,s.jsx)(r.td,{children:"The datalayer to use to execute the query."})]})]})]}),"\n",(0,s.jsx)(r.p,{children:"Parse a string query into a query object."}),"\n",(0,s.jsx)(r.h2,{id:"ibisquery",children:(0,s.jsx)(r.code,{children:"IbisQuery"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:"IbisQuery(self,\n     identifier: str,\n     db: dataclasses.InitVar[typing.Optional[ForwardRef('Datalayer')]] = None,\n     uuid: str = <factory>,\n     *,\n     parts: Sequence[Union[Tuple,\n     str]] = ()) -> None\n"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Parameter"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"identifier"}),(0,s.jsx)(r.td,{children:"Identifier of the leaf."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"db"}),(0,s.jsx)(r.td,{children:"Datalayer instance."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"uuid"}),(0,s.jsx)(r.td,{children:"UUID of the leaf."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"parts"}),(0,s.jsx)(r.td,{children:"The parts of the query."})]})]})]}),"\n",(0,s.jsx)(r.p,{children:"A query that can be executed on an Ibis database."}),"\n",(0,s.jsx)(r.h2,{id:"rawsql",children:(0,s.jsx)(r.code,{children:"RawSQL"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:"RawSQL(self,\n     query: str,\n     id_field: str = 'id') -> None\n"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Parameter"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"query"}),(0,s.jsx)(r.td,{children:"The raw SQL query"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"id_field"}),(0,s.jsx)(r.td,{children:"The field to use as the primary id"})]})]})]}),"\n",(0,s.jsx)(r.p,{children:"Raw SQL query."})]})}function o(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>c});var s=n(6540);const t={},d=s.createContext(t);function i(e){const r=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(d.Provider,{value:r},e.children)}}}]);