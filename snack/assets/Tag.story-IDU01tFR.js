import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{c as T}from"./index-DUmpqB7p.js";import{r as c}from"./index-CJ_LmFaV.js";import{c as d,a as M,b as O,s as n}from"./styles.module-DnOdHm-Y.js";import{S as b,A as j}from"./constants-BaREPXw5.js";import{T as i}from"./Tag-CalHVeMA.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./index-BQAaeyfQ.js";import"./Tooltip-BNp3usZT.js";import"./PopoverPrivate-CnKgsFAm.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./index-JZGyZbA2.js";import"./isBrowser-C2N6XvuH.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";const J={title:"Components/Tag/Tag",component:i},o={Default:"default",Removable:"removable",Link:"link"},S=({storyMode:l,...a})=>{const m=Object.values(b),h=Object.values(j),[v,y]=c.useState(!0),s=T(n.cell,n.headerCell);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:n.wrapper,children:["Controlled:",v&&e.jsx(i,{...a,href:l===o.Link?(a==null?void 0:a.href)||"#":void 0,onDelete:l===o.Removable?()=>y(!1):void 0})]}),e.jsxs("div",{className:n.table,style:{"--columns":3},children:[e.jsx("div",{className:s}),m.map(t=>e.jsx("div",{className:s,children:t},t)),h.map(t=>e.jsxs(c.Fragment,{children:[e.jsx("div",{className:s,children:t}),m.map(p=>e.jsx("div",{className:n.cell,children:e.jsx(i,{size:p,appearance:t,label:"Label text",onClick:k=>{k.preventDefault()}})},p))]},t))]})]})},r={render:S,args:{storyMode:o.Default,label:"Tag Label",href:"https://cloud.ru",target:"_blank",tooltip:{tip:"Tag tooltip",placement:"bottom"}},argTypes:{size:{options:Object.values(b),control:{type:"radio"}},storyMode:{name:"[Stories]: Story mode",options:Object.values(o),control:{type:"radio"}},showTooltip:{name:"[Stories] show tooltip",type:"boolean"},onDelete:{if:{arg:"storyMode",eq:o.Removable}},href:{if:{arg:"storyMode",eq:o.Link}},onClick:{if:{arg:"storyMode",eq:o.Link}},target:{if:{arg:"storyMode",eq:o.Link}},tooltip:{if:{arg:"showTooltip",eq:!0}}},parameters:{readme:{sidebar:[`Latest version: ${d.version}`,M,O]},packageName:d.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A24551&mode=design"}}};var g,f,u;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: Template,
  args: {
    storyMode: STORY_MODE.Default,
    label: 'Tag Label',
    href: 'https://cloud.ru',
    target: '_blank',
    tooltip: {
      tip: 'Tag tooltip',
      placement: 'bottom'
    }
  },
  argTypes: {
    size: {
      options: Object.values(SIZE),
      control: {
        type: 'radio'
      }
    },
    storyMode: {
      name: '[Stories]: Story mode',
      options: Object.values(STORY_MODE),
      control: {
        type: 'radio'
      }
    },
    showTooltip: {
      name: '[Stories] show tooltip',
      type: 'boolean'
    },
    onDelete: {
      if: {
        arg: 'storyMode',
        eq: STORY_MODE.Removable
      }
    },
    href: {
      if: {
        arg: 'storyMode',
        eq: STORY_MODE.Link
      }
    },
    onClick: {
      if: {
        arg: 'storyMode',
        eq: STORY_MODE.Link
      }
    },
    target: {
      if: {
        arg: 'storyMode',
        eq: STORY_MODE.Link
      }
    },
    tooltip: {
      if: {
        arg: 'showTooltip',
        eq: true
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
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A24551&mode=design'
    }
  }
}`,...(u=(f=r.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};export{J as default,r as tag};
