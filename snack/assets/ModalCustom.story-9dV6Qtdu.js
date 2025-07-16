import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{r as A}from"./index-CJ_LmFaV.js";import{M as o,c as p,a as S,b as k,A as l,C as r,d as E,D as _,g as G}from"./utils-CKXleIth.js";import{B as d}from"./ButtonFilled-DhU1yp3w.js";import{B as L}from"./ButtonTonal-BgeMe9qu.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DUmpqB7p.js";import"./index-DdXvKv-Q.js";import"./index-Chjiymov.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./index-BQAaeyfQ.js";import"./IconPredefined-yX8Rdo-2.js";import"./Typography-DmSN6cv6.js";import"./QuestionTooltip-Dy38_KYX.js";import"./index-JZGyZbA2.js";import"./PopoverPrivate-CnKgsFAm.js";import"./index-Bxu_udwM.js";import"./isBrowser-C2N6XvuH.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./Tooltip-BNp3usZT.js";import"./index-B9oUDl45.js";import"./Scroll-B3e6J9cA.js";import"./useModalOpenState-DLLSq6cJ.js";import"./index-B_WE0pTs.js";import"./Sprite-DoNyyhE0.js";import"./sprite.symbol-DpN2ERsh.js";import"./index-C-NxZ9RO.js";import"./index-Dz039XZe.js";import"./index-HYofs7FJ.js";import"./index-DtRrUciF.js";import"./index-BLj3vrxU.js";import"./index-BKaanG2n.js";import"./index-DLGJiw2b.js";import"./index-C7IVzcIX.js";import"./index-CX1lIXbQ.js";import"./index-DLRniMSR.js";import"./index-BJ2Oj32Z.js";import"./index-0zxx_KqD.js";import"./index-NU8U5csw.js";import"./index-I1zimRE2.js";import"./index-BIeLB8C9.js";import"./index-BcKv4fI4.js";import"./index-CIcT2jya.js";import"./index-3XDw48l5.js";import"./index-6PN_JoHT.js";import"./index-C9_U387z.js";import"./index-CwHIobxP.js";import"./index-Baw9oej9.js";import"./index-BJDjEDgt.js";import"./index-Drk0xmYR.js";import"./index-zbp_5bxn.js";import"./utils-Ct1D1GSP.js";import"./Counter-dO15w468.js";import"./Sun-CLMO8Tpr.js";import"./constants-BAH7I9kc.js";const{useArgs:w}=__STORYBOOK_MODULE_PREVIEW_API__,Vt={title:"Components/Modal",component:o},F=({title:s,titleTooltip:e,subtitle:n,headerAlign:f,picture:y,content:N,bodyAlign:T,disclaimer:j,footerAlign:x,showIcon:b,showImage:O,...i})=>{const[I,h]=A.useState(!0),m=()=>h(C=>!C);return t.jsxs(t.Fragment,{children:[t.jsx(d,{label:"Toggle modal",onClick:m,"data-test-id":"toggle-modal"}),t.jsxs(o,{...i,open:I,onClose:m,"data-test-id":"modal",children:[t.jsx(o.Header,{align:f,title:s,titleTooltip:e,subtitle:n,picture:G({picture:y,showImage:O,showIcon:b,icon:i.icon})}),t.jsx(o.Body,{content:N,align:T}),t.jsx(o.Footer,{align:x,disclaimer:j,actions:t.jsxs(t.Fragment,{children:[t.jsx(d,{label:"Custom button",size:"s","data-test-id":"approve-button"}),t.jsx(L,{label:"Cancel button",size:"s"})]})})]})]})},a={render:F,decorators:[s=>{const[e,n]=w();return A.useEffect(()=>{e.showImage&&n({showIcon:!1})},[n,e.showImage]),t.jsx(s,{...e})}],args:{..._,disclaimer:"Custom disclaimer text",headerAlign:"default",bodyAlign:"default",footerAlign:"default"},argTypes:{...E,disclaimer:{type:"string"},headerAlign:{defaultValue:"default",options:Object.keys(r),mapping:r,control:{type:"select"}},bodyAlign:{defaultValue:"default",options:Object.keys(r),mapping:r,control:{type:"select"}},footerAlign:{defaultValue:"default",options:Object.keys(l),mapping:l,control:{type:"select"}}},parameters:{readme:{sidebar:[`Latest version: ${p.version}`,S,k]},packageName:p.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A205426&mode=design"},controls:{exclude:["align"]}}};var c,g,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: Template,
  decorators: [Story => {
    const [storyArgs, setStoryArgs] = useArgs<StoryProps>();
    useEffect(() => {
      if (storyArgs.showImage) {
        setStoryArgs({
          showIcon: false
        });
      }
    }, [setStoryArgs, storyArgs.showImage]);
    return <Story {...storyArgs} />;
  }],
  args: {
    ...DEFAULT_ARGS,
    disclaimer: 'Custom disclaimer text',
    headerAlign: 'default',
    bodyAlign: 'default',
    footerAlign: 'default'
  },
  argTypes: {
    ...ARG_TYPES,
    disclaimer: {
      type: 'string'
    },
    headerAlign: {
      defaultValue: 'default',
      options: Object.keys(CONTENT_ALIGN),
      mapping: CONTENT_ALIGN,
      control: {
        type: 'select'
      }
    },
    bodyAlign: {
      defaultValue: 'default',
      options: Object.keys(CONTENT_ALIGN),
      mapping: CONTENT_ALIGN,
      control: {
        type: 'select'
      }
    },
    footerAlign: {
      defaultValue: 'default',
      options: Object.keys(ALIGN),
      mapping: ALIGN,
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
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A205426&mode=design'
    },
    controls: {
      exclude: ['align']
    }
  }
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};export{Vt as default,a as modalCustom};
