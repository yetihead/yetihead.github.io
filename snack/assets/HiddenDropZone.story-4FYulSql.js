import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as h}from"./index-CJ_LmFaV.js";import{B as D}from"./constants-CL23RHFn.js";import{c as l,a as x,b as A,d as p}from"./styles.module-D2R58pvH.js";import{c as m}from"./index-DUmpqB7p.js";import{u as j,P as F}from"./useDrag-Bz7dis9r.js";import{U as N}from"./constants-BAbqYu0L.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./brand.module-Bbx_dckN.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./index-D3kvmOHM.js";const _="_wrapper_1g5pa_1",B="_dropZone_1g5pa_6",v="_hidden_1g5pa_12",y="_children_1g5pa_17",s={wrapper:_,dropZone:B,hidden:v,children:y};function i(a){const{disabled:n=!1,children:t,className:u,...E}=a,{events:o,isOver:d}=j(n);return e.jsxs("div",{className:m(s.wrapper,u),...o,children:[d&&!n&&e.jsx(F,{className:s.dropZone,...o,...E,isOver:!0}),e.jsx("div",{className:m(s.children,d&&s.hidden),children:t})]})}try{i.displayName="HiddenDropZone",i.__docgenInfo={description:"Компонент - скрытая дропзона",displayName:"HiddenDropZone",props:{"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"CSS-класс",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"Заголовок",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"Описание",name:"description",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"Деактивирован ли компонент",name:"disabled",required:!1,type:{name:"boolean"}},mode:{defaultValue:{value:"multiple"},description:"Режим",name:"mode",required:!1,type:{name:"enum",value:[{value:'"single"'},{value:'"multiple"'}]}},onFilesUpload:{defaultValue:null,description:"Колбек загрузки файла",name:"onFilesUpload",required:!0,type:{name:"(files: File[]) => void"}},accept:{defaultValue:null,description:"Показывает пользователю в открывшемся диалоговом окне файлы типов, которые вы указываете в значении атрибута",name:"accept",required:!1,type:{name:"string"}}}}}catch{}const M={title:"Components/Drop Zone/Hidden Drop Zone",component:i},b=({...a})=>{const[n,t]=h.useState([]);return e.jsxs("div",{children:[e.jsx(i,{...a,onFilesUpload:t,children:e.jsx("div",{id:"form",className:p.card,children:e.jsxs("form",{className:p.form,children:[e.jsx("label",{htmlFor:"firstName",children:"Имя"}),e.jsx("input",{id:"firstName"}),e.jsx("label",{htmlFor:"lastName",children:"Фамилия"}),e.jsx("input",{id:"lastName"})]})})}),n.map(u=>e.jsxs("div",{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Name:"})," ",u.name]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Size:"})," ",u.size]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Type:"})," ",u.type]}),e.jsx("br",{})]},u.name))]})},r={render:b,args:{title:"Title",description:"Description",disabled:!1,mode:N.Multiple},argTypes:{description:{type:"string"}},parameters:{readme:{sidebar:[`Latest version: ${l.version}`,x,A]},packageName:l.name,badges:[D.STABLE],design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A146267&mode=design"}}};var c,g,f;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: 'Title',
    description: 'Description',
    disabled: false,
    mode: UPLOAD_MODE.Multiple
  },
  argTypes: {
    description: {
      type: 'string'
    }
  },
  parameters: {
    readme: {
      sidebar: [\`Latest version: \${componentPackage.version}\`, componentReadme, componentChangelog]
    },
    packageName: componentPackage.name,
    badges: [BADGE.STABLE],
    design: {
      name: 'Figma',
      type: 'figma',
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A146267&mode=design'
    }
  }
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};export{M as default,r as hiddenDropZone};
