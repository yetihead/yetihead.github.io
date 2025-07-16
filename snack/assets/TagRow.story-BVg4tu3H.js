import{j as c}from"./jsx-runtime-BTJTZTIL.js";import{r as l}from"./index-CJ_LmFaV.js";import{c as d,a as A,b as M,s as x}from"./styles.module-DnOdHm-Y.js";import{A as E,S as g}from"./constants-BaREPXw5.js";import{T as y}from"./TagRow-DZB29rdX.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DUmpqB7p.js";import"./Tag-CalHVeMA.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./index-BQAaeyfQ.js";import"./Tooltip-BNp3usZT.js";import"./PopoverPrivate-CnKgsFAm.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./index-JZGyZbA2.js";import"./isBrowser-C2N6XvuH.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./Dropdown-uG1Hplv7.js";import"./Scroll-B3e6J9cA.js";const u=Object.values(E),f=({amountToGenerate:i,char:a,charLimit:p,includeTooltip:r})=>{let o=0,e=1;const t=[];for(;t.length<i;){const n=t.length+1,m=`tag${n}`.padEnd(e+`tag${n}`.length,a);t.push({label:m,appearance:u[o],tooltip:r?{tip:`Tooltip for ${m}. You can set custom props.`}:void 0}),o++,e++,o>u.length&&(o=0),e>p&&(e=1)}return t},X={title:"Components/Tag/Tag Row",component:y},k=({removableMode:i,demoTagsAmount:a,fullWidthMode:p,showTooltips:r,...o})=>{const e=l.useMemo(()=>({amountToGenerate:a,char:"x",charLimit:5,includeTooltip:r}),[a,r]),[t,n]=l.useState(f(e)),m=v=>n(S=>S.filter(({label:T})=>T!==v));return l.useEffect(()=>{n(f(e))},[e]),c.jsx("div",{className:x.tagRowWrapper,"data-full-width":p,children:c.jsx(y,{...o,items:t,onItemRemove:i?m:void 0})})},s={render:k,args:{removableMode:!1,demoTagsAmount:50,size:g.Xs,moreButtonLabel:"More: ",rowLimit:2,fullWidthMode:!1},argTypes:{size:{options:Object.values(g),control:{type:"radio"}},removableMode:{name:"[Story]: Show remove mode",control:{type:"boolean"}},demoTagsAmount:{name:"[Story]: Amount of demo tags",control:{type:"number"}},fullWidthMode:{name:"[Story]: Full width mode",control:{type:"boolean"}},showTooltips:{name:"[Stories] show tooltips",type:"boolean"}},parameters:{readme:{sidebar:[`Latest version: ${d.version}`,A,M]},packageName:d.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A24551&mode=design"}}};var h,b,w;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: Template,
  args: {
    removableMode: false,
    demoTagsAmount: 50,
    size: SIZE.Xs,
    moreButtonLabel: 'More: ',
    rowLimit: 2,
    fullWidthMode: false
  },
  argTypes: {
    size: {
      options: Object.values(SIZE),
      control: {
        type: 'radio'
      }
    },
    removableMode: {
      name: '[Story]: Show remove mode',
      control: {
        type: 'boolean'
      }
    },
    demoTagsAmount: {
      name: '[Story]: Amount of demo tags',
      control: {
        type: 'number'
      }
    },
    fullWidthMode: {
      name: '[Story]: Full width mode',
      control: {
        type: 'boolean'
      }
    },
    showTooltips: {
      name: '[Stories] show tooltips',
      type: 'boolean'
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
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A24551&mode=design'
    }
  }
}`,...(w=(b=s.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};export{X as default,s as tagRow};
