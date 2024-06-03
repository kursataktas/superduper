"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[723],{3536:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(4848),r=t(8453),s=t(9489),l=t(7227);const o={sidebar_label:"Get useful sample data"},u="Get useful sample data",i={id:"reusable_snippets/get_useful_sample_data",title:"get_useful_sample_data",description:"",source:"@site/content/reusable_snippets/get_useful_sample_data.md",sourceDirName:"reusable_snippets",slug:"/reusable_snippets/get_useful_sample_data",permalink:"/docs/reusable_snippets/get_useful_sample_data",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/reusable_snippets/get_useful_sample_data.md",tags:[],version:"current",frontMatter:{sidebar_label:"Get useful sample data"},sidebar:"tutorialSidebar",previous:{title:"Create datatype",permalink:"/docs/reusable_snippets/create_datatype"},next:{title:"Insert data",permalink:"/docs/reusable_snippets/insert_data"}},d={},c=[];function p(e){const a={code:"code",h1:"h1",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"get-useful-sample-data",children:"Get useful sample data"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(l.A,{value:"Text",label:"Text",default:!0,children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:"!curl -O https://superduperdb-public-demo.s3.amazonaws.com/text.json\nimport json\n\nwith open('text.json', 'r') as f:\n    data = json.load(f)\nsample_datapoint = \"What is mongodb?\"\n\n"})})}),(0,n.jsx)(l.A,{value:"labeled_text",label:"labeled_text",default:!0,children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:'!curl -O https://superduperdb-public-demo.s3.amazonaws.com/text_classification.json\nimport json\n\nwith open("text_classification.json", "r") as f:\n    data = json.load(f)\nsample_datapoint = data[-1]        \n'})})}),(0,n.jsx)(l.A,{value:"PDF",label:"PDF",default:!0,children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:"!curl -O https://superduperdb-public-demo.s3.amazonaws.com/pdfs.zip && unzip -o pdfs.zip\nimport os\n\ndata = [f'pdfs/{x}' for x in os.listdir('./pdfs')]\n\nsample_datapoint = data[-1]        \n"})})}),(0,n.jsx)(l.A,{value:"Image",label:"Image",default:!0,children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:"!curl -O https://superduperdb-public-demo.s3.amazonaws.com/images.zip && unzip images.zip\nimport os\nfrom PIL import Image\n\ndata = [f'images/{x}' for x in os.listdir('./images')]\ndata = [ Image.open(path) for path in data]\nsample_datapoint = data[-1]\n\nfrom superduperdb.ext.pillow import pil_image\nchunked_model_datatype = pil_image        \n"})})}),(0,n.jsx)(l.A,{value:"labeled_image",label:"labeled_image",default:!0,children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:"!curl -O https://superduperdb-public-demo.s3.amazonaws.com/images_classification.zip && unzip images.zip\nimport json\nfrom PIL import Image\n\nwith open('images/images.json', 'r') as f:\n    data = json.load(f)\n\ndata = [{'x': Image.open(d['image_path']), 'y': d['label']} for d in data]\nsample_datapoint = data[-1]        \n"})})}),(0,n.jsx)(l.A,{value:"Video",label:"Video",default:!0,children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:"!curl -O https://superduperdb-public-demo.s3.amazonaws.com/videos.zip && unzip videos.zip\nimport os\n\ndata = [f'videos/{x}' for x in os.listdir('./videos')]\nsample_datapoint = data[-1]\n\nfrom superduperdb.ext.pillow import pil_image\nchunked_model_datatype = pil_image        \n"})})}),(0,n.jsx)(l.A,{value:"Audio",label:"Audio",default:!0,children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:"!curl -O https://superduperdb-public-demo.s3.amazonaws.com/audio.zip && unzip audio.zip\nimport os\n\ndata = [f'audios/{x}' for x in os.listdir('./audios')]\nsample_datapoint = data[-1]        \n"})})})]})]})}function m(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},7227:(e,a,t)=>{t.d(a,{A:()=>l});t(6540);var n=t(870);const r={tabItem:"tabItem_Ymn6"};var s=t(4848);function l(e){let{children:a,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,l),hidden:t,children:a})}},9489:(e,a,t)=>{t.d(a,{A:()=>y});var n=t(6540),r=t(870),s=t(4245),l=t(6347),o=t(6494),u=t(2814),i=t(5167),d=t(1269);function c(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=a??function(e){return c(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}(t);return function(e){const a=(0,i.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function m(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function f(e){let{queryString:a=!1,groupId:t}=e;const r=(0,l.W6)(),s=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,u.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const a=new URLSearchParams(r.location.search);a.set(s,e),r.replace({...r.location,search:a.toString()})}),[s,r])]}function b(e){const{defaultValue:a,queryString:t=!1,groupId:r}=e,s=p(e),[l,u]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:s}))),[i,c]=f({queryString:t,groupId:r}),[b,h]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,s]=(0,d.Dv)(t);return[r,(0,n.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),g=(()=>{const e=i??b;return m({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{g&&u(g)}),[g]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),c(e),h(e)}),[c,h,s]),tabValues:s}}var h=t(1062);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(4848);function _(e){let{className:a,block:t,selectedValue:n,selectValue:l,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.a_)(),d=e=>{const a=e.currentTarget,t=u.indexOf(a),r=o[t].value;r!==n&&(i(a),l(r))},c=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}a?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},a),children:o.map((e=>{let{value:a,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===a?0:-1,"aria-selected":n===a,ref:e=>u.push(e),onKeyDown:c,onClick:d,...s,className:(0,r.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":n===a}),children:t??a},a)}))})}function v(e){let{lazy:a,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=s.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==r})))})}function j(e){const a=b(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,x.jsx)(_,{...e,...a}),(0,x.jsx)(v,{...e,...a})]})}function y(e){const a=(0,h.A)();return(0,x.jsx)(j,{...e,children:c(e.children)},String(a))}},8453:(e,a,t)=>{t.d(a,{R:()=>l,x:()=>o});var n=t(6540);const r={},s=n.createContext(r);function l(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);