import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{r as o}from"./index-CJ_LmFaV.js";import{c as r,a as g,b as d,s as l}from"./styles.module-DuzKh8W7.js";import{P as p}from"./PaginationSlider-DaNlcIcS.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./getRange-CHNeUywO.js";import"./componentPropsProcessors-UJEZy8aQ.js";const j={title:"Components/Pagination/Pagination Slider",component:p},f=({...e})=>{const[c,n]=o.useState(e.page);return o.useEffect(()=>{n(e.page)},[e.total,e.page]),t.jsx("div",{className:l.wrapper,children:t.jsx(p,{...e,page:c,onChange:n})})},a={render:f,args:{total:10,page:1},argTypes:{},parameters:{readme:{sidebar:[`Latest version: ${r.version}`,g,d]},packageName:r.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A17288&mode=design"}}};var m,s,i;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: Template,
  args: {
    total: 10,
    page: 1
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
}`,...(i=(s=a.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};export{j as default,a as paginationSlider};
