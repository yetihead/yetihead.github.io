import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{c as y}from"./index-DUmpqB7p.js";import{r as h}from"./index-CJ_LmFaV.js";import{c as m,a as j,b as S,s as l}from"./styles.module-DeFsMed0.js";import{a as p,A as d,S as N}from"./StatusIndicator-3Vfyu6S9.js";import{S as k}from"./Spinner-DZPrD8kc.js";import{e as _}from"./componentPropsProcessors-UJEZy8aQ.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./constants-BAH7I9kc.js";const t={Xs:"xs",S:"s"},A={[t.Xs]:p.Xs,[t.S]:p.S},P={[t.Xs]:"xxs",[t.S]:"xs"},E="_container_1si0d_1",C="_label_1si0d_8",g={container:E,label:C};function o({label:i,size:s=t.Xs,appearance:u=d.Primary,hasBackground:n,loading:a,className:r,...b}){return e.jsxs("div",{className:y(g.container,r),..._(b),"data-size":s,"data-has-background":n||void 0,"data-appearance":a?d.Neutral:u,children:[a?e.jsx(k,{size:P[s]}):e.jsx(N,{appearance:u,size:A[s]}),e.jsx("span",{className:g.label,children:i})]})}try{o.displayName="Status",o.__docgenInfo={description:"",displayName:"Status",props:{"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Текст",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:{value:"xs"},description:"Размер",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"xs"'}]}},appearance:{defaultValue:{value:"primary"},description:"Внешний вид",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"primary"'},{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"green"'},{value:'"blue"'},{value:'"violet"'},{value:'"pink"'}]}},hasBackground:{defaultValue:null,description:"Наличие фона",name:"hasBackground",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const Z={title:"Components/Status/Status",component:o},I=({...i})=>{const s=Object.values(t),u=Object.values(d),n=y(l.cell,l.headerCell);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:l.wrapper,children:["Controlled:",e.jsx(o,{...i})]}),e.jsxs("div",{className:l.table,style:{"--columns":5},children:[e.jsx("div",{className:n,style:{gridRow:"1 / 3"}}),e.jsx("div",{className:n,style:{gridColumn:"2 / 4"},children:"No background"}),e.jsx("div",{className:n,style:{gridColumn:"4 / 6"},children:"Background"}),s.map(a=>e.jsx("div",{className:n,children:a},a)),s.map(a=>e.jsx("div",{className:n,children:a},a)),u.map(a=>e.jsxs(h.Fragment,{children:[e.jsx("div",{className:n,children:a}),s.map(r=>e.jsx("div",{className:l.cell,children:e.jsx(o,{size:r,appearance:a,hasBackground:!1,label:"Label text"})},r)),s.map(r=>e.jsx("div",{className:l.cell,children:e.jsx(o,{size:r,appearance:a,hasBackground:!0,label:"Label text"})},r))]},a))]})]})},c={render:I,args:{size:t.S,appearance:d.Primary,label:"Label text",hasBackground:!1,loading:!1},argTypes:{size:{options:Object.values(t),control:{type:"radio"}},appearance:{control:{type:"select"}}},parameters:{readme:{sidebar:[`Latest version: ${m.version}`,j,S]},packageName:m.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A21940&mode=design"}}};var v,x,f;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: Template,
  args: {
    size: SIZE.S,
    appearance: APPEARANCE.Primary,
    label: 'Label text',
    hasBackground: false,
    loading: false
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
}`,...(f=(x=c.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};export{Z as default,c as status};
