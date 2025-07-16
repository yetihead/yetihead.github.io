import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{T as e,c as o,a as d,b as g,s as y,D as i}from"./DemoComponent-CWczxiF4.js";import"./index-ChsGqxH_.js";import"./Typography-DmSN6cv6.js";import"./index-DUmpqB7p.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-CJ_LmFaV.js";import"./componentPropsProcessors-UJEZy8aQ.js";const C={title:"Components/Timeline/Timeline Item",component:e},S=({contentTitle:p,contentDescription:m,showOpposite:c,...l})=>t.jsx("div",{className:y.wrapper,children:t.jsx(e,{...l,content:t.jsx(i,{title:p,description:m}),opposite:c?t.jsx(i,{title:"Opposite",description:"Description"}):void 0})}),n={render:S,args:{contentPosition:e.contentPositions.Right,role:e.roles.Start,lineStyle:e.lineStyles.Default,dotVariant:e.dotVariants.Default,dotAppearance:e.dotAppearances.Primary,contentTitle:"Content title",contentDescription:"Description",showOpposite:!1},argTypes:{contentTitle:{name:"[Story]: Content title",type:"string"},contentDescription:{name:"[Story]: Content description",type:"string"},showOpposite:{name:"[Story]: Show opposite",type:"boolean"}},parameters:{readme:{sidebar:[`Latest version: ${o.version}`,d,g]},packageName:o.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A30522&mode=design"}}};var a,r,s;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: Template,
  args: {
    contentPosition: TrackItem.contentPositions.Right,
    role: TrackItem.roles.Start,
    lineStyle: TrackItem.lineStyles.Default,
    dotVariant: TrackItem.dotVariants.Default,
    dotAppearance: TrackItem.dotAppearances.Primary,
    contentTitle: 'Content title',
    contentDescription: 'Description',
    showOpposite: false
  },
  argTypes: {
    contentTitle: {
      name: '[Story]: Content title',
      type: 'string'
    },
    contentDescription: {
      name: '[Story]: Content description',
      type: 'string'
    },
    showOpposite: {
      name: '[Story]: Show opposite',
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};export{C as default,n as timelineItem};
