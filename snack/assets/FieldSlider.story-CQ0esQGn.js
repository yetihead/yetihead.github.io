import{j as s}from"./jsx-runtime-BTJTZTIL.js";import{r as l}from"./index-CJ_LmFaV.js";import{c as j,a as Fe,b as ye,I as M,C as Ee,P as ge,s as Se}from"./styles.module-BfAkJGR3.js";import{m as be}from"./index-B7wZyJkK.js";import{S as he}from"./constants-9uwKbtvo.js";import{S as Be}from"./Slider-BUo1QnCT.js";import{u as Ae}from"./useValueControl-CNLw7ht-.js";import{u as ve,a as Ce}from"./usePrefix-BmEKZSSL.js";import{u as Te}from"./PopoverPrivate-CnKgsFAm.js";import{F as xe,C as _e,V as Ie}from"./FieldDecorator-CLLFAGM0.js";import{e as De}from"./componentPropsProcessors-UJEZy8aQ.js";import{F as qe}from"./FieldContainerPrivate-C57rtyBq.js";import{I as Ve}from"./InputPrivate-C6kWfrUd.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-B_WE0pTs.js";import"./Sprite-DoNyyhE0.js";import"./sprite.symbol-DpN2ERsh.js";import"./index-C-NxZ9RO.js";import"./index-Dz039XZe.js";import"./index-HYofs7FJ.js";import"./index-DtRrUciF.js";import"./index-BLj3vrxU.js";import"./index-BKaanG2n.js";import"./index-DLGJiw2b.js";import"./index-C7IVzcIX.js";import"./index-CX1lIXbQ.js";import"./index-BQAaeyfQ.js";import"./index-DLRniMSR.js";import"./index-BJ2Oj32Z.js";import"./index-0zxx_KqD.js";import"./index-NU8U5csw.js";import"./index-I1zimRE2.js";import"./index-BIeLB8C9.js";import"./index-BcKv4fI4.js";import"./index-CIcT2jya.js";import"./index-3XDw48l5.js";import"./index-6PN_JoHT.js";import"./index-C9_U387z.js";import"./index-CwHIobxP.js";import"./index-B9oUDl45.js";import"./index-Baw9oej9.js";import"./index-BJDjEDgt.js";import"./index-Drk0xmYR.js";import"./index-zbp_5bxn.js";import"./index-DUmpqB7p.js";import"./KeyCode-CHzoJbuw.js";import"./objectWithoutProperties-3ReGGzEA.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./extends-CF3RwP-h.js";import"./useSwipeable-DMbEt_5P.js";import"./Tooltip-BNp3usZT.js";import"./index-JZGyZbA2.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./isBrowser-C2N6XvuH.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./TruncateString-BPmgFnBz.js";const O=(u,n)=>n?typeof u=="number"?n(u):u.map(n).join(" – "):typeof u=="number"?String(u):u.join(" – "),P=(u,n)=>Math.abs(n-u),N=(u,n,a)=>n.reduce((t,i)=>{const o=P(u,a(i));return o<t.lowestDiff?{lowestDiff:o,mark:i}:t},{lowestDiff:P(u,a(n[0])),mark:n[0]}),ke=(u,n,a)=>{const t=[];let i=u;for(;i<=n;)t.push(parseFloat(i.toFixed(10))),i+=a;return t};function Me(u){return!!(u&&typeof u=="object"&&"label"in u)}const Ne="_sliderWrapper_1mhoy_1",we="_slider_1mhoy_1",Re="_fieldContainer_1mhoy_29",w={sliderWrapper:Ne,slider:we,fieldContainer:Re},L=(u,n,a,t)=>u?t||[n,a]:t??n,C=l.forwardRef(({id:u,name:n,min:a,max:t,step:i,marks:o,showScaleBar:T=!0,value:F,range:p=!1,disabled:c=!1,readonly:y=!1,onChange:W,onFocus:z,onBlur:b,className:J,label:$,labelTooltip:Q,labelTooltipPlacement:U,required:Z,caption:ee,hint:ue,showHintIcon:te,size:h=he.S,textInputFormatter:x,unbindInputFromMarks:ne,postfixIcon:ae,prefix:re,postfix:oe,...ie},le)=>{const[B=L(p,a,t,F),_]=Ae({value:F,defaultValue:L(p,a,t,F),onChange:W}),[I,S]=l.useState(O(B,x)),R=l.useRef(null),D=ve({prefix:re,disabled:c}),q=Ce({postfix:oe,disabled:c}),E=l.useCallback(e=>{const r=o[e];return Me(r)?r.label:r},[o]),se=l.useMemo(()=>Object.keys(o).every(e=>e===E(e)),[E,o]),pe=e=>{const r=parseFloat(e);e&&Number.isNaN(r)||S(e)},de=e=>{const r=m=>{S(String(E(m))),_(Number(m))},g=Object.keys(o).map(m=>({key:m,value:parseFloat(String(E(m)))})),f=g.find(m=>m.value===e);if(f){r(f.key);return}const d=parseFloat(String(E(a))),V=parseFloat(String(E(t)));if(e<d){r(a);return}if(e>V){r(t);return}const{mark:k}=N(e,g,m=>m.value);r(k.key)},me=e=>{const r=d=>{S(String(d)),_(d)};if(e<=a){r(a);return}if(e>=t){r(t);return}if(i===null){const d=Object.keys(o).map(Number);if(d.includes(e)){S(String(e)),r(e);return}const{mark:V}=N(e,d,k=>k);r(V);return}const g=ke(a,t,i);if(g.includes(e)){r(e);return}const{mark:f}=N(e,g,d=>d);r(f)},A=Te(()=>{if(p)return;const e=parseFloat(I),r=parseFloat(String(E(a))),g=Number.isNaN(r)?a:r,f=I?e:g;Number.isNaN(f)||(se||ne?me(f):de(f))}),ce=e=>{b==null||b(e),A()},fe=e=>{e.key==="Enter"&&A()};return l.useEffect(()=>{S(O(B,x))},[B,x]),l.useEffect(()=>{A()},[o,a,t,A]),s.jsxs(xe,{className:J,label:$,labelTooltip:Q,labelTooltipPlacement:U,labelFor:u,disabled:c,required:Z,caption:ee,hint:ue,showHintIcon:te,readonly:y,size:h,...De(ie),children:[s.jsx(qe,{className:w.fieldContainer,size:h,validationState:Ie.Default,disabled:c,readonly:y,variant:_e.SingleLine,inputRef:R,prefix:D.show&&D.render({key:D.id}),postfix:s.jsxs(s.Fragment,{children:[q.show&&q.render({key:q.id}),ae]}),children:s.jsx(Ve,{ref:be(le,R),"data-size":h,value:I,onChange:p?void 0:pe,onFocus:z,onBlur:p?b:ce,onKeyDown:fe,disabled:c,readonly:p?!0:y,type:"text",id:u,name:n,"data-test-id":"field-slider__input"})}),s.jsx("div",{className:w.sliderWrapper,children:s.jsx("div",{className:w.slider,"data-size":h,children:s.jsx(Be,{range:p,min:a,max:t,step:i,value:B,onChange:_,marks:T?o:void 0,disabled:y||c,"data-test-id":"field-slider__slider"})})})]})});try{C.displayName="FieldSlider",C.__docgenInfo={description:"",displayName:"FieldSlider",props:{"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},postfixIcon:{defaultValue:null,description:"Иконка-постфикс для поля",name:"postfixIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},showScaleBar:{defaultValue:{value:"true"},description:"Отображение линейки",name:"showScaleBar",required:!1,type:{name:"boolean"}},textInputFormatter:{defaultValue:null,description:"Функция для форматирования значений в текстовом поле",name:"textInputFormatter",required:!1,type:{name:"TextInputFormatter"}},unbindInputFromMarks:{defaultValue:null,description:"Отвязать текстовое поле от значений на линейке",name:"unbindInputFromMarks",required:!1,type:{name:"boolean"}},prefix:{defaultValue:null,description:"Произвольный префикс для поля",name:"prefix",required:!1,type:{name:"ReactNode"}},postfix:{defaultValue:null,description:"Произвольный постфикс для поля",name:"postfix",required:!1,type:{name:"ReactNode"}},id:{defaultValue:null,description:"Значение html-атрибута id",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"Значение html-атрибута name",name:"name",required:!1,type:{name:"string"}},onFocus:{defaultValue:null,description:"Колбек обработки получения фокуса",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onBlur:{defaultValue:null,description:"Колбек обработки потери фокуса",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},disabled:{defaultValue:{value:"false"},description:"Является ли поле деактивированным",name:"disabled",required:!1,type:{name:"boolean"}},readonly:{defaultValue:{value:"false"},description:"Является ли поле доступным только для чтения",name:"readonly",required:!1,type:{name:"boolean"}},tipFormatter:{defaultValue:null,description:"",name:"tipFormatter",required:!1,type:{name:"((value: string | number) => ReactNode)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},caption:{defaultValue:null,description:"Подпись справа от лейбла",name:"caption",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Лейбл",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"s"},description:"Размер",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},labelTooltip:{defaultValue:null,description:"Всплывающая подсказка лейбла",name:"labelTooltip",required:!1,type:{name:"ReactNode"}},required:{defaultValue:null,description:"Является ли поле обязательным",name:"required",required:!1,type:{name:"boolean"}},hint:{defaultValue:null,description:"Подсказка внизу",name:"hint",required:!1,type:{name:"string"}},showHintIcon:{defaultValue:null,description:"Отображать иконку подсказки",name:"showHintIcon",required:!1,type:{name:"boolean"}},labelTooltipPlacement:{defaultValue:{value:"top"},description:"Расположение подсказки лейбла",name:"labelTooltipPlacement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"right"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"top"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom"'},{value:'"bottom-start"'},{value:'"bottom-end"'}]}}}}}catch{}const Gu={title:"Components/Fields/Field Slider",component:C},H={10:"1gb",20:"2gb",30:"4gb",50:"16gb"},je={10:"10",20:"20",30:"30",40:"40",50:"50"},K={linear:"linear","non-linear":"non-linear"},Oe=({size:u,range:n,moveByMarks:a,storyMarks:t,step:i,...o})=>{const[T,F]=l.useState(o.value);l.useEffect(()=>{if(n&&typeof o.value=="number"){F([10,30]);return}F(o.value)},[o.value,n]);const p=l.useMemo(()=>{switch(t){case"non-linear":return H;case"linear":default:return je}},[t]),c=l.useCallback(y=>{switch(t){case"non-linear":return H[y];case"linear":default:return String(y)}},[t]);return s.jsx("div",{className:Se.wrapper,"data-size":u,children:s.jsx(C,{...o,size:u,range:n,value:T,onChange:F,marks:p,step:a?null:i,textInputFormatter:c})})},v={render:Oe,args:{id:"slider",value:10,min:10,max:50,step:1,range:!1,showScaleBar:!0,moveByMarks:!0,storyMarks:"linear",readonly:!1,disabled:!1,label:"Label text",labelTooltip:"Tooltip description",required:!1,caption:"Caption",hint:"Hint text",size:"s",postfixIcon:M.PlaceholderSVG,prefix:"",postfix:""},argTypes:{...ge,labelTooltip:Ee.labelTooltip,moveByMarks:{name:"[Story]: change value only by marks",type:"boolean",if:{arg:"showScaleBar",eq:!0}},storyMarks:{name:"[Story]: example marks",options:Object.keys(K),mapping:K,control:{type:"radio"},if:{arg:"showScaleBar",eq:!0}},postfixIcon:{name:"postfixIcon",options:Object.keys(M),mapping:M,control:{type:"select"}}},parameters:{readme:{sidebar:[`Latest version: ${j.version}`,Fe,ye]},packageName:j.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-2.0.0?type=design&node-id=41%3A38747&mode=design&t=8dDi5X6Lfgs6Cxji-1"}}};var G,X,Y;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: Template,
  args: {
    id: 'slider',
    value: 10,
    min: 10,
    max: 50,
    step: 1,
    range: false,
    showScaleBar: true,
    moveByMarks: true,
    storyMarks: 'linear',
    readonly: false,
    disabled: false,
    label: 'Label text',
    labelTooltip: 'Tooltip description',
    required: false,
    caption: 'Caption',
    hint: 'Hint text',
    size: 's',
    postfixIcon: ICONS['PlaceholderSVG'],
    prefix: '',
    postfix: ''
  },
  argTypes: {
    ...PREFIX_POSTFIX_ARG_TYPES,
    labelTooltip: COMMON_ARG_TYPES.labelTooltip,
    moveByMarks: {
      name: '[Story]: change value only by marks',
      type: 'boolean',
      if: {
        arg: 'showScaleBar',
        eq: true
      }
    },
    storyMarks: {
      name: '[Story]: example marks',
      options: Object.keys(STORY_MARKS),
      mapping: STORY_MARKS,
      control: {
        type: 'radio'
      },
      if: {
        arg: 'showScaleBar',
        eq: true
      }
    },
    postfixIcon: {
      name: 'postfixIcon',
      options: Object.keys(ICONS),
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
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-2.0.0?type=design&node-id=41%3A38747&mode=design&t=8dDi5X6Lfgs6Cxji-1'
    }
  }
}`,...(Y=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};export{Gu as default,v as fieldSlider};
