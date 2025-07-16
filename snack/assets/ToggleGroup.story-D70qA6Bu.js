import{j as r}from"./jsx-runtime-BTJTZTIL.js";import{r as i}from"./index-CJ_LmFaV.js";import{c as l,a as _,b as h}from"./README-DSZRkzMb.js";import{a as g}from"./constants-BObEONKm.js";import{u as k,T as u}from"./hooks-C5DVcyBY.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-JZGyZbA2.js";const T="_checked_1wjxn_2",f="_unchecked_1wjxn_16",x="_toggleGroup_1wjxn_30",s={checked:T,unchecked:f,toggleGroup:x};function c({id:e,label:a}){const{isChecked:t,handleClick:n}=k({value:e});return r.jsx("button",{"data-test-id":`item-${e}`,"data-checked":t,className:t?s.checked:s.unchecked,onClick:n,children:a},a)}try{c.displayName="ToggleCard",c.__docgenInfo={description:"",displayName:"ToggleCard",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}}}}}catch{}const I={title:"Components/Toggles/Toggle Group",component:u},C=[{id:"1",label:"item1"},{id:"2",label:"item2"},{id:"3",label:"item3"},{id:"4",label:"item4"}],b=({selectionMode:e=g.Single})=>{const[a,t]=i.useState(void 0);return i.useEffect(()=>{t(void 0)},[e]),r.jsx(u,{selectionMode:e,value:a,onChange:t,children:r.jsx("div",{className:s.toggleGroup,children:C.map(n=>r.jsx(c,{...n},n.id))})})},o={render:b,args:{selectionMode:g.Multiple},argTypes:{},parameters:{readme:{sidebar:[`Latest version: ${l.version}`,_,h]},packageName:l.name}};var m,d,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: Template,
  args: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    selectionMode: SELECTION_MODE.Multiple
  },
  argTypes: {},
  parameters: {
    readme: {
      sidebar: [\`Latest version: \${componentPackage.version}\`, componentReadme, componentChangelog]
    },
    packageName: componentPackage.name
  }
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};export{I as default,o as toggleGroup};
