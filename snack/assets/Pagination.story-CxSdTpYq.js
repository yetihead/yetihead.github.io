import{j as o}from"./jsx-runtime-BTJTZTIL.js";import{r}from"./index-CJ_LmFaV.js";import{c as m,a as f,b as u,s as h}from"./styles.module-DuzKh8W7.js";import{P as g}from"./Pagination-Bj4q9qOZ.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./getRange-CHNeUywO.js";import"./index-BKaanG2n.js";import"./index-DLGJiw2b.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./ButtonFunction-DkDZEdUd.js";import"./index-DUmpqB7p.js";import"./utils-Ct1D1GSP.js";import"./Counter-dO15w468.js";import"./Sun-CLMO8Tpr.js";import"./constants-BAH7I9kc.js";const R={title:"Components/Pagination/Pagination",component:g},x=({...e})=>{const[c,n]=r.useState(e.page),d=(l,t)=>{n(l),t==null||t.preventDefault()};return r.useEffect(()=>{n(e.page)},[e.total,e.page]),o.jsx("div",{className:h.wrapper,children:o.jsx(g,{...e,page:c,onChange:d})})},a={render:x,args:{total:10,page:1,maxLength:7,size:"s",variant:"button",hrefFormatter:e=>`/cases/${e}`},argTypes:{},parameters:{readme:{sidebar:[`Latest version: ${m.version}`,f,u]},packageName:m.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A17288&mode=design"}}};var s,i,p;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: Template,
  args: {
    total: 10,
    page: 1,
    maxLength: 7,
    size: 's',
    variant: 'button',
    hrefFormatter: (page: number) => \`/cases/\${page}\`
  },
  argTypes: {},
  parameters: {
    readme: {
      sidebar: [\`Latest version: \${componentPackage.version}\`, componentReadme, componentChangelog]
    },
    packageName: componentPackage.name,
    design: {
      name: 'Figma',
      type: 'figma',
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A17288&mode=design'
    }
  }
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};export{R as default,a as pagination};
