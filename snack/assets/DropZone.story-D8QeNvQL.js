import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as c}from"./index-CJ_LmFaV.js";import{B as l}from"./constants-CL23RHFn.js";import{c as r,a as g,b as x,d as j}from"./styles.module-D2R58pvH.js";import{D as i}from"./DropZone-DEn-2Ph3.js";import{U as f}from"./constants-BAbqYu0L.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./brand.module-Bbx_dckN.js";import"./useDrag-Bz7dis9r.js";import"./index-DUmpqB7p.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./index-D3kvmOHM.js";const S={title:"Components/Drop Zone/Drop Zone",component:i},u=({...m})=>{const[p,d]=c.useState([]);return e.jsxs("div",{className:j.wrapper,children:[e.jsx(i,{...m,onFilesUpload:d}),p.map(n=>e.jsxs("div",{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Name:"})," ",n.name]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Size:"})," ",n.size]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Type:"})," ",n.type]}),e.jsx("br",{})]},n.name))]})},s={render:u,args:{title:"Title",description:"Description",disabled:!1,mode:f.Multiple},argTypes:{description:{type:"string"}},parameters:{readme:{sidebar:[`Latest version: ${r.version}`,g,x]},packageName:r.name,badges:[l.STABLE],design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A146267&mode=design"}}};var a,o,t;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: 'Title',
    description: 'Description',
    disabled: false,
    mode: UPLOAD_MODE.Multiple
  },
  argTypes: {
    description: {
      type: 'string'
    }
  },
  parameters: {
    readme: {
      sidebar: [\`Latest version: \${componentPackage.version}\`, componentReadme, componentChangelog]
    },
    packageName: componentPackage.name,
    badges: [BADGE.STABLE],
    design: {
      name: 'Figma',
      type: 'figma',
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A146267&mode=design'
    }
  }
}`,...(t=(o=s.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};export{S as default,s as dropZone};
