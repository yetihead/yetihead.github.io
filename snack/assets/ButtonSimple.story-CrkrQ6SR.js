import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as h}from"./index-CJ_LmFaV.js";import{c as s,a as T,b as C,S,C as O,d as _,T as k,e as a,f as t,B as i}from"./Layout-aAHuHf8h.js";import{B as n}from"./ButtonSimple-3o_8XXbq.js";import{P as m}from"./index-C9_U387z.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-B_WE0pTs.js";import"./Sprite-DoNyyhE0.js";import"./sprite.symbol-DpN2ERsh.js";import"./index-C-NxZ9RO.js";import"./index-Dz039XZe.js";import"./index-HYofs7FJ.js";import"./index-DtRrUciF.js";import"./index-BLj3vrxU.js";import"./index-BKaanG2n.js";import"./index-DLGJiw2b.js";import"./index-C7IVzcIX.js";import"./index-CX1lIXbQ.js";import"./index-BQAaeyfQ.js";import"./index-DLRniMSR.js";import"./index-BJ2Oj32Z.js";import"./index-0zxx_KqD.js";import"./index-NU8U5csw.js";import"./index-I1zimRE2.js";import"./index-BIeLB8C9.js";import"./index-BcKv4fI4.js";import"./index-CIcT2jya.js";import"./index-3XDw48l5.js";import"./index-6PN_JoHT.js";import"./index-CwHIobxP.js";import"./index-B9oUDl45.js";import"./index-Baw9oej9.js";import"./index-BJDjEDgt.js";import"./index-Drk0xmYR.js";import"./index-zbp_5bxn.js";import"./Counter-dO15w468.js";import"./index-DUmpqB7p.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./utils-Ct1D1GSP.js";import"./Sun-CLMO8Tpr.js";import"./constants-BAH7I9kc.js";const ue={title:"Components/Button/Button Simple",component:n},R=({testMode:d,...r})=>{const[x,g]=h.useState(0),u=j=>{r.onClick&&r.onClick(j),g(f=>f+1)},b=d?1:0;return e.jsxs(e.Fragment,{children:[e.jsx(_,{children:e.jsx(n,{...r,onClick:u})}),e.jsxs(k,{children:[e.jsxs(a,{children:[e.jsx(t,{children:"Icon Only"}),e.jsx(t,{children:e.jsx(n,{...i,icon:e.jsx(m,{}),label:void 0})})]}),e.jsxs(a,{children:[e.jsx(t,{children:"Label Only"}),e.jsx(t,{children:e.jsx(n,{...i,icon:void 0,label:"Label Text"})})]}),e.jsxs(a,{children:[e.jsx(t,{children:"Label + Icon"}),e.jsx(t,{children:e.jsx(n,{...i,icon:e.jsx(m,{}),label:"Label Text"})})]})]}),e.jsxs("div",{style:{opacity:b},children:[e.jsx("span",{children:"Controlled button presses: "}),e.jsx("span",{"data-test-id":"count",children:x})]})]})},o={render:R,args:{label:"Label text",disabled:!1,loading:!1,icon:"none",type:"button",appearance:"neutral",size:"s",fullWidth:!1,testMode:!1},argTypes:{...O,...S},parameters:{readme:{sidebar:[`Latest version: ${s.version}`,T,C]},packageName:s.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=9%3A3976&mode=design"}}};var p,l,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Label text',
    disabled: false,
    loading: false,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: 'none',
    type: 'button',
    appearance: 'neutral',
    size: 's',
    fullWidth: false,
    testMode: false
  },
  argTypes: {
    ...COMMON_ARG_TYPES,
    ...STORY_WITH_COUNTER_ARG_TYPES
  },
  parameters: {
    readme: {
      sidebar: [\`Latest version: \${componentPackage.version}\`, componentReadme, componentChangelog]
    },
    packageName: componentPackage.name,
    design: {
      name: 'Figma',
      type: 'figma',
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=9%3A3976&mode=design'
    }
  }
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};export{o as buttonSimple,ue as default};
