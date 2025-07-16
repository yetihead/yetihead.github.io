import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{a as n,g as E,A as N,c as A,d as f,e as k,f as w,s as B}from"./styles.module-jp0EwD6i.js";import{c as P}from"./index-DUmpqB7p.js";import{C as h}from"./index-BQAaeyfQ.js";import{e as T}from"./componentPropsProcessors-UJEZy8aQ.js";import{T as j}from"./TruncateString-BPmgFnBz.js";import{L}from"./Link-CwRw2bLJ.js";import{P as D}from"./index-C9_U387z.js";import"./index-ChsGqxH_.js";import"./Sun-CLMO8Tpr.js";import"./constants-BAH7I9kc.js";import"./index-C-NxZ9RO.js";import"./index-CJ_LmFaV.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-BNp3usZT.js";import"./PopoverPrivate-CnKgsFAm.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./index-JZGyZbA2.js";const a={InvertNeutral:"invert-neutral",Primary:"primary",Red:"red",Yellow:"yellow",Green:"green",Blue:"blue"},o={[n.Neutral]:a.InvertNeutral,[n.Primary]:a.Primary,[n.Error]:a.Red,[n.Warning]:a.Yellow,[n.Success]:a.Green,[n.Info]:a.Blue},V="_alertTop_1vmw8_1",F="_icon_1vmw8_30",S="_title_1vmw8_58",R="_description_1vmw8_85",b="_contentWrapper_1vmw8_113",q="_contentLayout_1vmw8_120",I="_textLayout_1vmw8_127",O="_actions_1vmw8_131",u={alertTop:V,icon:F,title:S,description:R,contentWrapper:b,contentLayout:q,textLayout:I,actions:O};function p({icon:r=!0,title:i,description:s,link:l,onClose:d,truncate:m,appearance:t=n.Neutral,action:_,className:y,...C}){return e.jsxs("div",{className:P(u.alertTop,y),...T(C),"data-color":o[t],children:[e.jsxs("div",{className:u.contentWrapper,children:[r&&e.jsx("div",{className:u.icon,"data-color":o[t],"data-test-id":"alert-top__icon",children:E(t,24)}),e.jsxs("div",{className:u.contentLayout,children:[e.jsxs("div",{className:u.textLayout,children:[i&&e.jsx("div",{className:u.title,"data-color":o[t],"data-test-id":"alert-top__title",children:e.jsx(j,{text:i,maxLines:(m==null?void 0:m.title)??1})}),e.jsx("span",{className:u.description,"data-color":o[t],"data-test-id":"alert-top__description",children:s})]}),l&&e.jsx("span",{children:e.jsx(L,{...l,appearance:N[t],textMode:"on-accent",size:"m","data-test-id":"alert-top__link"})})]})]}),e.jsxs("div",{className:u.actions,children:[_&&e.jsx(A,{..._,appearance:o[t],variant:"tonal"}),d&&e.jsx(A,{onClick:d,appearance:o[t],icon:e.jsx(h,{}),variant:"tonal",dataTestId:"alert-top__close-button"})]})]})}try{p.displayName="AlertTop",p.__docgenInfo={description:"Компонент для отображения уведомления вверху экрана.",displayName:"AlertTop",props:{"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"true"},description:"Отображать иконку",name:"icon",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"Заголовок",name:"title",required:!1,type:{name:"string"}},truncate:{defaultValue:{value:"'{ <br>title: 1 }'"},description:"Максимальное кол-во строк\n<br> - `title` - в заголовке",name:"truncate",required:!1,type:{name:"{ title?: number; }"}},description:{defaultValue:null,description:"Описание",name:"description",required:!0,type:{name:"ReactNode"}},link:{defaultValue:null,description:"Cсылка",name:"link",required:!1,type:{name:'PickLinkProps<LinkElement, "text" | "appearance" | "as">'}},action:{defaultValue:null,description:"Кнопка дополнительного действия",name:"action",required:!1,type:{name:"AlertButtonProps"}},onClose:{defaultValue:null,description:"Колбек закрытия",name:"onClose",required:!1,type:{name:"(() => void)"}},appearance:{defaultValue:{value:"neutral"},description:"Внешний вид",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"primary"'},{value:'"error"'},{value:'"warning"'},{value:'"success"'},{value:'"info"'}]}},className:{defaultValue:null,description:"CSS-класс",name:"className",required:!1,type:{name:"string"}}}}}catch{}const le={title:"Components/Alert/AlertTop",component:p},G=({link:r,showCloseButton:i,...s})=>e.jsx("div",{className:B.wrapper,children:e.jsx(p,{...s,link:r?{text:r,href:"#",onClick:l=>{l.preventDefault()}}:void 0,onClose:i?s.onClose:void 0})}),c={render:G,args:{title:"Title",description:"Description",icon:!0,link:"Link text",appearance:n.Success,action:{text:"Button Text",icon:e.jsx(D,{}),onClick:()=>{}},onClose:()=>{},showCloseButton:!0},argTypes:{showCloseButton:{name:"[Stories]: showCloseButton"},onClose:{table:{disable:!0}},description:{type:"string"},link:{type:"string"}},parameters:{readme:{sidebar:[`Latest version: ${f.version}`,k,w]},packageName:f.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A182904&mode=design"}}};var v,g,x;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: 'Title',
    description: 'Description',
    icon: true,
    link: 'Link text',
    appearance: APPEARANCE.Success,
    action: {
      text: 'Button Text',
      icon: <Icons.PlaceholderSVG />,
      onClick: () => {}
    },
    onClose: () => {},
    showCloseButton: true
  },
  argTypes: {
    showCloseButton: {
      name: '[Stories]: showCloseButton'
    },
    onClose: {
      table: {
        disable: true
      }
    },
    description: {
      type: 'string'
    },
    link: {
      type: 'string'
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
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A182904&mode=design'
    }
  }
}`,...(x=(g=c.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};export{c as alertTop,le as default};
