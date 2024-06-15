"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[8293],{2947:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=t(4848),r=t(8453),a=t(3935);const i={},c="Apply API",s={id:"apply_api/component",title:"Apply API",description:"In this section we re-use the datalayer variable db without further explanation.",source:"@site/content/apply_api/component.md",sourceDirName:"apply_api",slug:"/apply_api/component",permalink:"/docs/apply_api/component",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/apply_api/component.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Execute",permalink:"/docs/core_api/execute"},next:{title:"Model",permalink:"/docs/apply_api/model"}},l={},d=[{value:"1. Create a component",id:"1-create-a-component",level:3},{value:"2. Apply the component to the datalayer",id:"2-apply-the-component-to-the-datalayer",level:3},{value:"3. Reload the component (if necessary)",id:"3-reload-the-component-if-necessary",level:3},{value:"4. Export the component (to share/ migrate)",id:"4-export-the-component-to-share-migrate",level:3},{value:"Read more",id:"read-more",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"apply-api",children:"Apply API"}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["In this section we re-use the datalayer variable ",(0,o.jsx)(n.code,{children:"db"})," without further explanation.\nRead more about how to build it ",(0,o.jsx)(n.a,{href:"../core_api/connect",children:"here"})," and what it is ",(0,o.jsx)(n.a,{href:"../fundamentals/datalayer_overview",children:"here"}),"."]})}),"\n",(0,o.jsx)(n.p,{children:"AI functionality in SuperDuperDB revolves around creating AI models,\nand configuring them to interact with data via the datalayer."}),"\n",(0,o.jsxs)(n.p,{children:["There are many decisions to be made and configured; for this SuperDuperDB\nprovides the ",(0,o.jsx)(n.code,{children:"Component"})," abstraction."]}),"\n",(0,o.jsx)(n.p,{children:"The typical process is:"}),"\n",(0,o.jsx)(n.h3,{id:"1-create-a-component",children:"1. Create a component"}),"\n",(0,o.jsx)(n.p,{children:"Build your components, potentially including other subcomponents."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"from superduperdb import <ComponentClass>\n\ncomponent = <ComponentClass>(\n    'identifier',\n    **kwargs   # can include other components\n)\n"})}),"\n",(0,o.jsx)(n.h3,{id:"2-apply-the-component-to-the-datalayer",children:"2. Apply the component to the datalayer"}),"\n",(0,o.jsxs)(n.p,{children:['"Applying" the component the ',(0,o.jsx)(n.code,{children:"db"})," datalayer, also\napplies all sub-components. So only 1 call is needed."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"db.apply(component)\n"})}),"\n",(0,o.jsx)(n.h3,{id:"3-reload-the-component-if-necessary",children:"3. Reload the component (if necessary)"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:".apply"})," command saves everything necessary to reload the component\nin the SuperDuperDB system."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"reloaded = db.load('type_id', 'identifier')   # `type_id`\n"})}),"\n",(0,o.jsx)(n.h3,{id:"4-export-the-component-to-share-migrate",children:"4. Export the component (to share/ migrate)"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:".export"})," command saves the entirety of the component's parameters,\ninline code and artifacts in a directory:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"component.export('my_component')\n"})}),"\n",(0,o.jsx)(n.p,{children:'The directory structure looks like this.\nIt contains the meta-data of the component as\nwell as a "mini-artifact-store". Together\nthese items make the export completely portable.'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"my_component\n|_component.json // meta-data and imports of component\n|_blobs   // directory of blobs used in the component\n| |_234374364783643764\n| |_574759874238947320\n|_files   // directory of files used in the component\n  |_182372983721897389\n  |_982378978978978798\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You can read about the serialization mechanism ",(0,o.jsx)(n.a,{href:"../production/yaml_formalism.md",children:"here"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"read-more",children:"Read more"}),"\n","\n","\n",(0,o.jsx)(a.A,{})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},3935:(e,n,t)=>{t.d(n,{A:()=>f});t(6540);var o=t(870),r=t(5215),a=t(5358),i=t(877),c=t(3230),s=t(5225);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=t(4848);function p(e){let{href:n,children:t}=e;return(0,d.jsx)(a.A,{href:n,className:(0,o.A)("card padding--lg",l.cardContainer),children:t})}function h(e){let{href:n,icon:t,title:r,description:a}=e;return(0,d.jsxs)(p,{href:n,children:[(0,d.jsxs)(s.A,{as:"h2",className:(0,o.A)("text--truncate",l.cardTitle),title:r,children:[t," ",r]}),a&&(0,d.jsx)("p",{className:(0,o.A)("text--truncate",l.cardDescription),title:a,children:a})]})}function m(e){let{item:n}=e;const t=(0,r.Nr)(n);return t?(0,d.jsx)(h,{href:t,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??(0,c.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function u(e){let{item:n}=e;const t=(0,i.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,r.cC)(n.docId??void 0);return(0,d.jsx)(h,{href:n.href,icon:t,title:n.label,description:n.description??o?.description})}function x(e){let{item:n}=e;switch(n.type){case"link":return(0,d.jsx)(u,{item:n});case"category":return(0,d.jsx)(m,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function y(e){let{className:n}=e;const t=(0,r.$S)();return(0,d.jsx)(f,{items:t.items,className:n})}function f(e){const{items:n,className:t}=e;if(!n)return(0,d.jsx)(y,{...e});const a=(0,r.d1)(n);return(0,d.jsx)("section",{className:(0,o.A)("row",t),children:a.map(((e,n)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(x,{item:e})},n)))})}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var o=t(6540);const r={},a=o.createContext(r);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);