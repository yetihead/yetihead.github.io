import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{c as C}from"./index-DUmpqB7p.js";import{r as l}from"./index-CJ_LmFaV.js";import{c as p,a as k,b,s as o}from"./styles.module-bRfLg_JI.js";import{S as x,V as v}from"./constants-BIigMBdG.js";import{C as N}from"./constants-BtWJHGHL.js";import{C as m}from"./ChipToggle-ByWNmm4-.js";import{P as S}from"./index-C9_U387z.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-B_WE0pTs.js";import"./Sprite-DoNyyhE0.js";import"./sprite.symbol-DpN2ERsh.js";import"./index-C-NxZ9RO.js";import"./index-Dz039XZe.js";import"./index-HYofs7FJ.js";import"./index-DtRrUciF.js";import"./index-BLj3vrxU.js";import"./index-BKaanG2n.js";import"./index-DLGJiw2b.js";import"./index-C7IVzcIX.js";import"./index-CX1lIXbQ.js";import"./index-BQAaeyfQ.js";import"./index-DLRniMSR.js";import"./index-BJ2Oj32Z.js";import"./index-0zxx_KqD.js";import"./index-NU8U5csw.js";import"./index-I1zimRE2.js";import"./index-BIeLB8C9.js";import"./index-BcKv4fI4.js";import"./index-CIcT2jya.js";import"./index-3XDw48l5.js";import"./index-6PN_JoHT.js";import"./index-CwHIobxP.js";import"./index-B9oUDl45.js";import"./index-Baw9oej9.js";import"./index-BJDjEDgt.js";import"./index-Drk0xmYR.js";import"./index-zbp_5bxn.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./Sun-CLMO8Tpr.js";import"./constants-BAH7I9kc.js";import"./TruncateString-BPmgFnBz.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-BNp3usZT.js";import"./PopoverPrivate-CnKgsFAm.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./index-JZGyZbA2.js";const Ne={title:"Components/Chips/ChipToggle",component:m},u=["Default","Checked","Loading","Disabled","Checked + Loading"],A=Array(u.length).fill(Object.values(v)).flatMap(t=>t),d=()=>{};function r(t){return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:o.cell,children:e.jsx(m,{label:"Label text",onChange:d,...t})}),e.jsx("div",{className:o.cell,children:e.jsx(m,{label:"Label text",icon:e.jsx(S,{}),onChange:d,...t})})]})}const T=({...t})=>{const[j,c]=l.useState(t.checked);l.useEffect(()=>{c(t.checked)},[t.checked]);const s=C(o.cell,o.headerCell);return e.jsxs("div",{className:o.pageWrapper,children:[e.jsxs("div",{className:o.wrapper,children:["Controlled:",e.jsx(m,{...t,checked:j,onChange:c})]}),e.jsxs("div",{className:o.table,children:[e.jsx("div",{className:s,style:{gridRow:"1 / 3"}}),u.map((a,i)=>e.jsx("div",{className:s,style:{gridColumnStart:i*2+2,gridColumnEnd:i*2+4},children:a},a)),A.map((a,i)=>e.jsx("div",{className:s,children:a},a+i)),Object.values(x).map(a=>e.jsxs(l.Fragment,{children:[e.jsx("div",{className:s,children:a}),e.jsx(r,{size:a,checked:!1}),e.jsx(r,{size:a,checked:!0}),e.jsx(r,{size:a,checked:!1,loading:!0}),e.jsx(r,{size:a,checked:!1,disabled:!0}),e.jsx(r,{size:a,checked:!0,loading:!0})]},a))]})]})},n={render:T,args:{label:"Label text",size:x.S,disabled:!1,loading:!1,checked:!1,"data-test-id":"chip-toggle",tabIndex:void 0,className:void 0,onChange:void 0},argTypes:N,parameters:{readme:{sidebar:[`Latest version: ${p.version}`,k,b]},packageName:p.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A152239&mode=design"}}};var g,h,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Label text',
    size: SIZE.S,
    disabled: false,
    loading: false,
    checked: false,
    'data-test-id': 'chip-toggle',
    tabIndex: undefined,
    className: undefined,
    onChange: undefined
  },
  argTypes: COMMON_ARG_TYPES,
  parameters: {
    readme: {
      sidebar: [\`Latest version: \${componentPackage.version}\`, componentReadme, componentChangelog]
    },
    packageName: componentPackage.name,
    design: {
      name: 'Figma',
      type: 'figma',
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A152239&mode=design'
    }
  }
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};export{n as chipToggle,Ne as default};
