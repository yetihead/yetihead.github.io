import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as f}from"./index-CJ_LmFaV.js";import{c as i,a as C,b as O,I as p,C as j,d as x}from"./Layout-aAHuHf8h.js";import{B as m,S as E}from"./ButtonElevated-C2aDT4P2.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-B_WE0pTs.js";import"./Sprite-DoNyyhE0.js";import"./sprite.symbol-DpN2ERsh.js";import"./index-C-NxZ9RO.js";import"./index-Dz039XZe.js";import"./index-HYofs7FJ.js";import"./index-DtRrUciF.js";import"./index-BLj3vrxU.js";import"./index-BKaanG2n.js";import"./index-DLGJiw2b.js";import"./index-C7IVzcIX.js";import"./index-CX1lIXbQ.js";import"./index-BQAaeyfQ.js";import"./index-DLRniMSR.js";import"./index-BJ2Oj32Z.js";import"./index-0zxx_KqD.js";import"./index-NU8U5csw.js";import"./index-I1zimRE2.js";import"./index-BIeLB8C9.js";import"./index-BcKv4fI4.js";import"./index-CIcT2jya.js";import"./index-3XDw48l5.js";import"./index-6PN_JoHT.js";import"./index-C9_U387z.js";import"./index-CwHIobxP.js";import"./index-B9oUDl45.js";import"./index-Baw9oej9.js";import"./index-BJDjEDgt.js";import"./index-Drk0xmYR.js";import"./index-zbp_5bxn.js";import"./Counter-dO15w468.js";import"./index-DUmpqB7p.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./utils-Ct1D1GSP.js";import"./Sun-CLMO8Tpr.js";import"./constants-BAH7I9kc.js";const o={...p};delete o.none;const de={title:"Components/Button/Button Elevated",component:m},k=({testMode:c,...n})=>{const[l,d]=f.useState(0),g=b=>{n.onClick&&n.onClick(b),d(S=>S+1)},u=c?1:0;return e.jsxs(e.Fragment,{children:[e.jsx(x,{children:e.jsx(m,{...n,onClick:g})}),e.jsxs("div",{style:{opacity:u},children:[e.jsx("span",{children:"Controlled button presses: "}),e.jsx("span",{"data-test-id":"count",children:l})]})]})},t={render:k,args:{disabled:!1,loading:!1,icon:Object.entries(o)[0][0],size:"s",testMode:!1},argTypes:{...j,appearance:{table:{disable:!0}},size:{options:Object.values(E),control:{type:"radio"}},icon:{name:"[Stories]: Show icon examples",options:Object.keys(o),mapping:p,control:{type:"select"}}},parameters:{readme:{sidebar:[`Latest version: ${i.version}`,C,O]},packageName:i.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=9%3A8268&mode=design"}}};var r,a,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: Template,
  args: {
    disabled: false,
    loading: false,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: Object.entries(REQUIRED_ICONS)[0][0],
    size: 's',
    testMode: false
  },
  argTypes: {
    ...COMMON_ARG_TYPES,
    appearance: {
      table: {
        disable: true
      }
    },
    size: {
      options: Object.values(SIZE),
      control: {
        type: 'radio'
      }
    },
    icon: {
      name: '[Stories]: Show icon examples',
      options: Object.keys(REQUIRED_ICONS),
      mapping: ICONS,
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
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=9%3A8268&mode=design'
    }
  }
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};export{t as buttonElevated,de as default};
