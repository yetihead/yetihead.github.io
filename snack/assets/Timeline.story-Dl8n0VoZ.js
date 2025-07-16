import{j as n}from"./jsx-runtime-BTJTZTIL.js";import{T as t,n as P,c as m,a as v,b as S,s as j,D as u}from"./DemoComponent-CWczxiF4.js";import{c as w}from"./index-DUmpqB7p.js";import{e as E}from"./componentPropsProcessors-UJEZy8aQ.js";import"./index-ChsGqxH_.js";import"./Typography-DmSN6cv6.js";import"./index-CJ_LmFaV.js";import"./_commonjsHelpers-D6-XlEtG.js";const _=(e,i)=>e<1?t.roles.Start:e<i-1?t.roles.Center:t.roles.End,b=(e,i,a,o)=>{if(a)return a;if(!o)return e;switch(e){case t.contentPositions.Right:return i%2?t.contentPositions.Left:t.contentPositions.Right;case t.contentPositions.Left:return i%2?t.contentPositions.Right:t.contentPositions.Left;default:return P(e)}},x="_timeline_16dgb_1",T="_timelineWrapper_16dgb_7",c={timeline:x,timelineWrapper:T};function r({items:e,fullWidth:i,contentPosition:a=t.contentPositions.Right,alternate:o,className:l,...y}){return n.jsx("div",{className:c.timelineWrapper,"data-full-width":i||void 0,"data-test-id":"timeline-track",children:n.jsx("div",{className:w(c.timeline,l),...E(y),children:e.map(({contentPosition:D,...C},p)=>n.jsx(t,{contentPosition:b(a,p,D,o),role:_(p,e.length),alternateMode:o,...C},p))})})}try{r.displayName="Timeline",r.__docgenInfo={description:"",displayName:"Timeline",props:{"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"Пункты таймлайна",name:"items",required:!0,type:{name:"TimelineItem[]"}},contentPosition:{defaultValue:{value:"right"},description:"Положение контента",name:"contentPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},alternate:{defaultValue:null,description:"Перемешать положение контента",name:"alternate",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:null,description:"Сделать таймлайн во всю ширину",name:"fullWidth",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"CSS-класс для элемента с контентом",name:"className",required:!1,type:{name:"string"}}}}}catch{}const L={title:"Components/Timeline/Timeline",component:r},k=()=>n.jsx("span",{children:"Opposite"}),h=[{content:n.jsx(u,{title:"Start",description:"Description"},"start"),dotAppearance:"primary"},{content:n.jsx(u,{title:"Center",description:"Description"},"center"),lineStyle:"dashed"},{content:n.jsx(u,{title:"Sub Center",description:"Some very long description compared to others"},"subCenter"),lineStyle:"dashed",dotVariant:"subEvent",dotAppearance:"red"},{content:n.jsx(u,{title:"End",description:"Description"},"end")}],A=h.map(e=>({...e,opposite:n.jsx(k,{})})),F=({showOpposite:e,contentPosition:i,fullWidth:a,alternate:o,...l})=>n.jsx("div",{className:j.wrapper,children:n.jsx(r,{...l,contentPosition:i,items:e?A:h,fullWidth:a,alternate:o})}),s={render:F,args:{alternate:!1,fullWidth:!1,showOpposite:!1,contentPosition:"right"},argTypes:{showOpposite:{name:"[Story]: Show opposite content",type:"boolean"}},parameters:{readme:{sidebar:[`Latest version: ${m.version}`,v,S]},packageName:m.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A30522&mode=design"}}};var d,f,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: Template,
  args: {
    alternate: false,
    fullWidth: false,
    showOpposite: false,
    contentPosition: 'right'
  },
  argTypes: {
    showOpposite: {
      name: '[Story]: Show opposite content',
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
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A30522&mode=design'
    }
  }
}`,...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};export{L as default,s as timeline};
