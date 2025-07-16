import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as C}from"./index-CJ_LmFaV.js";import{D as t,c as a,a as F,b as k,S as o,A as y,d as A}from"./constants-1C_264Y7.js";import{B as s}from"./ButtonFilled-DhU1yp3w.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DUmpqB7p.js";import"./KeyCode-CHzoJbuw.js";import"./objectWithoutProperties-3ReGGzEA.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./PopoverPrivate-CnKgsFAm.js";import"./index-JZGyZbA2.js";import"./isBrowser-C2N6XvuH.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./extends-CF3RwP-h.js";import"./useModalOpenState-DLLSq6cJ.js";import"./index-BQAaeyfQ.js";import"./Typography-DmSN6cv6.js";import"./QuestionTooltip-Dy38_KYX.js";import"./Tooltip-BNp3usZT.js";import"./index-B9oUDl45.js";import"./Scroll-B3e6J9cA.js";import"./utils-Ct1D1GSP.js";import"./Counter-dO15w468.js";import"./Sun-CLMO8Tpr.js";import"./constants-BAH7I9kc.js";const ne={title:"Components/Drawer",component:t},P=({title:d,titleTooltip:c,subtitle:l,image:u,content:g,sizePredefined:f,sizeCustom:x,...z})=>{const[S,w]=C.useState(!0),r=()=>w(j=>!j);return e.jsxs(e.Fragment,{children:[e.jsx(s,{label:"Toggle drawer",onClick:r}),e.jsxs(t,{...z,size:x||f,open:S,onClose:r,children:[e.jsx(t.Header,{title:d,titleTooltip:c,subtitle:l,image:u}),e.jsx(t.Body,{content:g}),e.jsx(t.Footer,{actions:e.jsx(e.Fragment,{children:e.jsx(s,{label:"custom button",onClick:r})})})]})]})},n={render:P,args:{...A,sizePredefined:o.S,sizeCustom:void 0},argTypes:{...y,sizePredefined:{name:"size predefined",control:{type:"radio"},options:Object.values(o),defaultValue:o.S,if:{arg:"sizeCustom",truthy:!1}},sizeCustom:{name:"size custom (string | number)",defaultValue:void 0,control:{type:"text"}}},parameters:{controls:{exclude:["size","nestedDrawer"]},readme:{sidebar:[`Latest version: ${a.version}`,F,k]},packageName:a.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A208969&mode=drawer"}}};var i,m,p;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...DEFAULT_ARGS,
    sizePredefined: SIZE.S,
    sizeCustom: undefined
  },
  argTypes: {
    ...ARG_TYPES,
    sizePredefined: {
      name: 'size predefined',
      control: {
        type: 'radio'
      },
      options: Object.values(SIZE),
      defaultValue: SIZE.S,
      if: {
        arg: 'sizeCustom',
        truthy: false
      }
    },
    sizeCustom: {
      name: 'size custom (string | number)',
      defaultValue: undefined,
      control: {
        type: 'text'
      }
    }
  },
  parameters: {
    controls: {
      exclude: ['size', 'nestedDrawer']
    },
    readme: {
      sidebar: [\`Latest version: \${componentPackage.version}\`, componentReadme, componentChangelog]
    },
    packageName: componentPackage.name,
    design: {
      name: 'Figma',
      type: 'figma',
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A208969&mode=drawer'
    }
  }
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{ne as default,n as drawerCustom};
