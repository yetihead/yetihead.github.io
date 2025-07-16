import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{c as v}from"./index-DUmpqB7p.js";import{r as x}from"./index-CJ_LmFaV.js";import{c as i,a as h,b as f,s as n}from"./styles.module-DeFsMed0.js";import{S as r,A as g,a as o}from"./StatusIndicator-3Vfyu6S9.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./componentPropsProcessors-UJEZy8aQ.js";const F={title:"Components/Status/Status Indicator",component:r},y=({...u})=>{const m=Object.values(o),j=Object.values(g),t=v(n.cell,n.headerCell);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:n.wrapper,children:["Controlled:",e.jsx(r,{...u})]}),e.jsxs("div",{className:n.table,style:{"--columns":6},children:[e.jsx("div",{className:t}),m.map(a=>e.jsx("div",{className:t,children:a},a)),j.map(a=>e.jsxs(x.Fragment,{children:[e.jsx("div",{className:t,children:a}),m.map(c=>e.jsx("div",{className:n.cell,children:e.jsx(r,{size:c,appearance:a})},c))]},a))]})]})},s={render:y,args:{size:o.S,appearance:g.Primary},argTypes:{size:{options:Object.values(o),control:{type:"radio"}},appearance:{control:{type:"select"}}},parameters:{readme:{sidebar:[`Latest version: ${i.version}`,h,f]},packageName:i.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A21940&mode=design"}}};var p,l,d;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: Template,
  args: {
    size: SIZE.S,
    appearance: APPEARANCE.Primary
  },
  argTypes: {
    size: {
      options: Object.values(SIZE),
      control: {
        type: 'radio'
      }
    },
    appearance: {
      control: {
        type: 'select'
      }
    }
  },
  parameters: {
    readme: {
      sidebar: [\`Latest version: \${componentPackage.version}\`, componentReadme, componentChangelog]
    },
    packageName: componentPackage.name,
    design: {
      name: 'Figma',
      type: 'figma',
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A21940&mode=design'
    }
  }
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};export{F as default,s as statusIndicator};
