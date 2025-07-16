import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{c as r}from"./index-DUmpqB7p.js";import{r as j}from"./index-CJ_LmFaV.js";import{c as m,a as h,b as f,s as a}from"./styles.module-o4wPbaKz.js";import{c as i,t as l}from"./helpers-DNSUdh_x.js";import{B as c}from"./ButtonFilled-DhU1yp3w.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./index-Chjiymov.js";import"./LocaleProvider-CyhbxqE1.js";import"./index-C7IVzcIX.js";import"./index-BLj3vrxU.js";import"./index-BQAaeyfQ.js";import"./Scroll-B3e6J9cA.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./ProgressBar-DoG3l5ps.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./index-6PN_JoHT.js";import"./index-C-NxZ9RO.js";import"./index-zbp_5bxn.js";import"./TruncateString-BPmgFnBz.js";import"./Tooltip-BNp3usZT.js";import"./PopoverPrivate-CnKgsFAm.js";import"./index-JZGyZbA2.js";import"./Link-CwRw2bLJ.js";import"./Sun-CLMO8Tpr.js";import"./constants-BAH7I9kc.js";import"./utils-Ct1D1GSP.js";import"./Counter-dO15w468.js";const v={Neutral:"neutral",Success:"success",Error:"error",Warning:"warning"},ee={title:"Components/Toaster/Toast UserAction",component:i},t=r(a.cell,a.headerCell),N=Object.values(v);function k({...x}){const{appearance:u="neutral",...s}=x;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:a.wrapper,children:[e.jsx(c,{label:"Open toast controlled","data-test-id":"toast-trigger",onClick:()=>l.userAction[u](s)}),e.jsx(c,{label:"Dismiss Toasters","data-test-id":"toast-trigger",onClick:()=>l.userAction.dismiss()})]}),e.jsxs("div",{className:a.table,style:{gridTemplateColumns:"repeat(3, 1fr)"},children:[e.jsx("div",{className:t,style:{gridRow:"1/3"}}),e.jsx("div",{className:t,style:{gridColumn:"2/4"},children:"Appearance"}),e.jsx("div",{className:t,children:"Label Only"}),e.jsx("div",{className:t,children:"With icon"}),N.map(n=>e.jsxs(j.Fragment,{children:[e.jsx("div",{className:t,children:n}),e.jsx("div",{className:r(a.cell),children:e.jsx(i,{...s,appearance:n,"data-test-id":"",link:void 0,loading:!1})}),e.jsx("div",{className:r(a.cell),children:e.jsx(i,{...s,appearance:n,"data-test-id":"",loading:!1})})]},n)),e.jsx("div",{className:t,children:"Loading"}),e.jsx("div",{className:r(a.cell),children:e.jsx(i,{...s,"data-test-id":"",link:void 0,loading:!0})}),e.jsx("div",{className:r(a.cell),children:e.jsx(i,{...s,"data-test-id":"",loading:!0})})]})]})}const o={render:k,args:{appearance:"neutral",loading:!1,label:"Label",link:{text:"Link text",href:"#"}},parameters:{readme:{sidebar:[`Latest version: ${m.version}`,h,f]},packageName:m.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A197658&mode=design"}}};var d,p,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: Template,
  args: {
    appearance: 'neutral',
    loading: false,
    label: 'Label',
    link: {
      text: 'Link text',
      href: '#'
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
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A197658&mode=design'
    }
  }
}`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};export{ee as default,o as toastUserAction};
