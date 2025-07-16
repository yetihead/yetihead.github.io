import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{A as s,g as k,a as v,b as B,c as p,d as y,e as P,f as N,s as j}from"./styles.module-jp0EwD6i.js";import{c as w}from"./index-DUmpqB7p.js";import{C as V}from"./index-BQAaeyfQ.js";import{e as b}from"./componentPropsProcessors-UJEZy8aQ.js";import{T as S}from"./TruncateString-BPmgFnBz.js";import{L}from"./Link-CwRw2bLJ.js";import{P as _}from"./index-C9_U387z.js";import"./index-ChsGqxH_.js";import"./Sun-CLMO8Tpr.js";import"./constants-BAH7I9kc.js";import"./index-C-NxZ9RO.js";import"./index-CJ_LmFaV.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-BNp3usZT.js";import"./PopoverPrivate-CnKgsFAm.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./index-JZGyZbA2.js";const O="_alert_1r46a_1",D="_alertOutline_1r46a_44",F="_body_1r46a_85",T="_icon_1r46a_97",q="_contentLayout_1r46a_132",R="_title_1r46a_145",G="_description_1r46a_165",I="_footer_1r46a_186",n={alert:O,alertOutline:D,body:F,icon:T,contentLayout:q,title:R,description:G,footer:I};function c({icon:o=!0,title:l,truncate:i,link:r,description:m,onClose:f,appearance:a=v.Neutral,className:x,actions:u,outline:E,size:t="m",...h}){return e.jsxs("div",{className:w(n.alert,{[n.alertOutline]:E},x),...b(h),"data-color":s[a],"data-size":t,children:[e.jsxs("div",{className:n.body,"data-size":t,children:[o&&e.jsx("div",{className:n.icon,"data-color":s[a],"data-test-id":"alert__icon","data-size":t,children:k(a,t==="s"?16:24)}),e.jsxs("div",{className:n.contentLayout,"data-size":t,children:[l&&e.jsx(S,{text:l,maxLines:(i==null?void 0:i.title)??1,className:n.title,"data-test-id":"alert__title","data-size":t}),e.jsx("span",{"data-test-id":"alert__description",className:n.description,"data-size":t,children:m}),r&&e.jsx("span",{children:e.jsx(L,{...r,appearance:B[a],textMode:"default",size:t,"data-test-id":"alert__link"})})]}),f&&e.jsx(p,{onClick:f,appearance:s[a],icon:e.jsx(V,{}),size:t,variant:"simple",dataTestId:"alert__close-button"})]}),u&&e.jsxs("div",{className:n.footer,"data-size":t,children:[u.primary&&e.jsx(p,{...u.primary,appearance:s[a],variant:"simple",size:t}),(u==null?void 0:u.secondary)&&e.jsx(p,{...u.secondary,appearance:s[a],variant:"simple",size:t})]})]})}try{c.displayName="Alert",c.__docgenInfo={description:"Компонент для отображения уведомления.",displayName:"Alert",props:{"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"true"},description:"Отображать иконку",name:"icon",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"Заголовок",name:"title",required:!1,type:{name:"string"}},truncate:{defaultValue:{value:"'{ <br>title: 1 }'"},description:"Максимальное кол-во строк\n<br> - `title` - в заголовке",name:"truncate",required:!1,type:{name:"{ title?: number; }"}},description:{defaultValue:null,description:"Описание",name:"description",required:!0,type:{name:"ReactNode"}},link:{defaultValue:null,description:"Cсылка",name:"link",required:!1,type:{name:'PickLinkProps<LinkElement, "text" | "appearance" | "as">'}},onClose:{defaultValue:null,description:"Колбек закрытия",name:"onClose",required:!1,type:{name:"(() => void)"}},appearance:{defaultValue:{value:"neutral"},description:"Внешний вид",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"primary"'},{value:'"error"'},{value:'"warning"'},{value:'"success"'},{value:'"info"'}]}},outline:{defaultValue:null,description:"Внешний бордер",name:"outline",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"m"},description:"Размер",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},className:{defaultValue:null,description:"CSS-класс",name:"className",required:!1,type:{name:"string"}},actions:{defaultValue:null,description:"Кнопки в футере алерта",name:"actions",required:!1,type:{name:'{ primary: Omit<AlertButtonProps, "appearance">; secondary?: Omit<AlertButtonProps, "appearance">; }'}}}}}catch{}const de={title:"Components/Alert/Alert",component:c},M=({link:o,showCloseButton:l,showActionButtons:i,...r})=>e.jsx("div",{className:j.wrapper,children:e.jsx(c,{...r,link:o?{text:o,href:"#",onClick:m=>{m.preventDefault()}}:void 0,onClose:l?r.onClose:void 0,actions:i?r.actions:void 0})}),d={render:M,args:{title:"Title",description:"Title description",icon:!0,link:"Link text",appearance:v.Error,showCloseButton:!0,showActionButtons:!0,outline:!0,size:"m",onClose:()=>{},actions:{primary:{text:"Primary",onClick:()=>{},icon:e.jsx(_,{}),loading:!1},secondary:{text:"Secondary",onClick:()=>{},icon:e.jsx(_,{}),loading:!0}}},argTypes:{showCloseButton:{name:"[Stories]: showCloseButton"},showActionButtons:{name:"[Stories]: showActionButtons"},link:{type:"string"},description:{type:"string"},onClose:{table:{disable:!0}}},parameters:{readme:{sidebar:[`Latest version: ${y.version}`,P,N]},packageName:y.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A183757&mode=design"}}};var A,g,C;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: Template,
  args: {
    title: 'Title',
    description: 'Title description',
    icon: true,
    link: 'Link text',
    appearance: APPEARANCE.Error,
    showCloseButton: true,
    showActionButtons: true,
    outline: true,
    size: 'm',
    onClose: () => {},
    actions: {
      primary: {
        text: 'Primary',
        onClick: () => {},
        icon: <PlaceholderSVG />,
        loading: false
      },
      secondary: {
        text: 'Secondary',
        onClick: () => {},
        icon: <PlaceholderSVG />,
        loading: true
      }
    }
  },
  argTypes: {
    showCloseButton: {
      name: '[Stories]: showCloseButton'
    },
    showActionButtons: {
      name: '[Stories]: showActionButtons'
    },
    link: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    onClose: {
      table: {
        disable: true
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
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A183757&mode=design'
    }
  }
}`,...(C=(g=d.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};export{d as alert,de as default};
