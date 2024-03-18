"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[8257],{739:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var s=t(74848),a=t(28453);const i={sidebar_position:3},r="SQL",d={id:"docs/data_integrations/sql",title:"SQL",description:"superduperdb supports SQL databases via the ibis project.",source:"@site/content/docs/data_integrations/sql.md",sourceDirName:"docs/data_integrations",slug:"/docs/data_integrations/sql",permalink:"/docs/docs/data_integrations/sql",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/docs/data_integrations/sql.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"MongoDB",permalink:"/docs/docs/data_integrations/mongodb"},next:{title:"MySQL",permalink:"/docs/docs/data_integrations/mysql"}},o={},c=[{value:"Setup",id:"setup",level:2},{value:"Inserting data",id:"inserting-data",level:2},{value:"Selecting data",id:"selecting-data",level:2},{value:"Vector-search",id:"vector-search",level:3},{value:"Support for raw-sql",id:"support-for-raw-sql",level:3},{value:"Updating data",id:"updating-data",level:2},{value:"Deleting data",id:"deleting-data",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"sql",children:"SQL"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"superduperdb"})," supports SQL databases via the ",(0,s.jsxs)(n.a,{href:"https://ibis-project.org/",children:[(0,s.jsx)(n.code,{children:"ibis"})," project"]}),".\nWith ",(0,s.jsx)(n.code,{children:"superduperdb"}),", queries may be built which conform to the ",(0,s.jsx)(n.code,{children:"ibis"})," API, with additional\nsupport for complex data-types and vector-searches."]}),"\n",(0,s.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsx)(n.p,{children:"The first step in working with an SQL table, is to define a table and schema"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from superduperdb.backends.ibis.query import Table\nfrom superduperdb.backends.ibis.field_types import dtype\nfrom superduperdb import Encoder, Schema\n\nmy_enc = Encoder('my-enc')\n\nschema = Schema('my-schema', fields={'img': my_enc, 'text': dtype('str'), 'rating': dtype('int')})\n\ndb = superduper()\n\nt = Table('my-table', schema=schema)\n\ndb.add(t)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"inserting-data",children:"Inserting data"}),"\n",(0,s.jsxs)(n.p,{children:["Table data must correspond to the ",(0,s.jsx)(n.code,{children:"Schema"})," for that table:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import pandas\n\npandas.DataFrame([\n    PIL.Image.open('image.jpg'), 'some text', 4,\n    PIL.Image.open('other_image.jpg'), 'some other text', 3,\n])\n\nt.insert(dataframe)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"selecting-data",children:"Selecting data"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"superduperdb"})," supports selecting data via the ",(0,s.jsx)(n.code,{children:"ibis"})," query API."]}),"\n",(0,s.jsx)(n.p,{children:"The following are equivalent:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"db.execute(\n    t.filter(t.rating > 3).limit(5).select(t.image)\n)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"vector-search",children:"Vector-search"}),"\n",(0,s.jsxs)(n.p,{children:["Vector-searches are supported via the ",(0,s.jsx)(n.code,{children:"like"})," operator:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"db.execute(\n    t.like({'text': 'something like this'}, vector_index='my-index')\n     .filter(t.rating > 3)\n     .limit(5)\n     .select(t.image, t.id)\n)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Vector-searches are either first or last in a chain of operations:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"db.execute(\n    t.filter(t.rating > 3)\n     .limit(5)\n     .select(t.image, t.id)\n     .like({'text': 'something like this'}, vector_index='my-index')\n)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"support-for-raw-sql",children:"Support for raw-sql"}),"\n",(0,s.jsx)(n.p,{children:"... the first query above is equivalent to:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from superduperdb.backends.ibis.query import RawSQL\n\ndb.execute(RawSQL('SELECT img FROM my-table WHERE rating > 3 LIMIT 5;'))\n"})}),"\n",(0,s.jsx)(n.p,{children:"... the second will be equivalent to:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from superduperdb.backends.ibis.query import RawSQL\n\nraw_sql = RawSQL(\n    '''\n    SELECT img FROM my-table \n    LIKE text = 'something like this'\n    WHERE rating > 3\n    LIMIT 5;\n    '''\n    )\n\ndb.execute(raw_sql)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"updating-data",children:"Updating data"}),"\n",(0,s.jsxs)(n.p,{children:["Updates are not covered for ",(0,s.jsx)(n.code,{children:"superduperdb"})," SQL integrations."]}),"\n",(0,s.jsx)(n.h2,{id:"deleting-data",children:"Deleting data"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"db.databackend.drop_table('my-table')\n"})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>d});var s=t(96540);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);