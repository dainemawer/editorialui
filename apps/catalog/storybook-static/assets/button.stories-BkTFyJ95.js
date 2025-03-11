import{j as r}from"./jsx-runtime-BjG_zV1W.js";function a({title:t,children:o,href:u}){return r.jsxs("a",{className:"ui-group ui-rounded-lg ui-border ui-border-transparent ui-px-5 ui-py-4 ui-transition-colors hover:ui-border-neutral-700 hover:ui-bg-neutral-800/30",href:`${u}?utm_source=create-turbo&utm_medium=with-tailwind&utm_campaign=create-turbo"`,rel:"noopener noreferrer",target:"_blank",children:[r.jsxs("h2",{className:"ui-mb-3 ui-text-2xl ui-font-semibold",children:[t," ",r.jsx("span",{className:"ui-inline-block ui-transition-transform group-hover:ui-translate-x-1 motion-reduce:ui-transform-none",children:"->"})]}),r.jsx("p",{className:"ui-m-0 ui-max-w-[30ch] ui-text-sm ui-opacity-50",children:o})]})}a.__docgenInfo={description:"",methods:[],displayName:"Card",props:{title:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},href:{required:!0,tsType:{name:"string"},description:""}}};const m={component:a,argTypes:{}},e={render:t=>r.jsx(a,{...t,children:"Im a card"}),name:"Card",args:{title:"Card",href:"https://example.com"}};var n,i,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: props => <Card {...props}>
      Im a card
    </Card>,
  name: "Card",
  args: {
    title: "Card",
    href: "https://example.com"
  }
}`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const c=["Primary"];export{e as Primary,c as __namedExportsOrder,m as default};
