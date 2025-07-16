import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{r}from"./index-CJ_LmFaV.js";import{c as d,a as y,b as k,s,w as v,D as T}from"./styles.module-CAiWnKwq.js";import{P as E}from"./index-CwHIobxP.js";import{D as h}from"./DropList-sYSbfSyD.js";import{B as R}from"./ButtonFilled-DhU1yp3w.js";import{B as x}from"./ButtonOutline-CzsrdEVF.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-C9_U387z.js";import"./hooks-Cv-w_Cx5.js";import"./index-DUmpqB7p.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./useValueControl-C51frgGe.js";import"./index-JZGyZbA2.js";import"./Checkbox-uZV6WJ28.js";import"./index-B7wZyJkK.js";import"./constants-BObEONKm.js";import"./TogglePrivate-BTSew7b5.js";import"./index-3XDw48l5.js";import"./index-DtRrUciF.js";import"./TruncateString-BPmgFnBz.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-BNp3usZT.js";import"./PopoverPrivate-CnKgsFAm.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./Switch-CYqDG2NM.js";import"./index-BQAaeyfQ.js";import"./index-C7IVzcIX.js";import"./index-BLj3vrxU.js";import"./Dropdown-uG1Hplv7.js";import"./index-DLGJiw2b.js";import"./index-Baw9oej9.js";import"./LocaleProvider-CyhbxqE1.js";import"./index-BkOiuzeN.js";import"./IconPredefined-yX8Rdo-2.js";import"./Typography-DmSN6cv6.js";import"./ButtonTonal-BgeMe9qu.js";import"./utils-Ct1D1GSP.js";import"./Counter-dO15w468.js";import"./Sun-CLMO8Tpr.js";import"./constants-BAH7I9kc.js";import"./Divider-C1X9zrkx.js";import"./Spinner-DZPrD8kc.js";import"./Scroll-B3e6J9cA.js";import"./ButtonFunction-DkDZEdUd.js";import"./useButtonNavigation-CVCsehRW.js";import"./useClearButton-DMWmUR1d.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-C6kWfrUd.js";import"./index-zbp_5bxn.js";import"./ButtonSimple-3o_8XXbq.js";import"./Avatar-BnyePUFR.js";import"./StatusIndicator-3Vfyu6S9.js";const Ne={title:"Components/List/Droplist",component:h},u={single:"single",multiple:"multiple",none:"none"},C=({showFooter:m,showSearch:S,selectionMode:n,defaultValue:a,...e})=>{const l=r.useMemo(()=>a?n==="single"?a:[a]:n==="single"?void 0:[],[a,n]),[o,p]=r.useState(l);r.useEffect(()=>{p(l)},[l]);const[w,O]=r.useState(),c=r.useRef(null);return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:s.wrapper,style:{padding:4},children:t.jsx(h,{...e,className:s.droplistContainer,trigger:e.trigger,placement:e.placement,size:e.size,loading:e.loading,marker:e.marker,scroll:e.scroll,items:v(T),...n!=="none"?{selection:{value:o,onChange:p,mode:n}}:{selection:void 0},"data-test-id":e["data-test-id"],search:S?{value:w,onChange:O,placeholder:"Placeholder"}:void 0,footerActiveElementsRefs:m?[c]:void 0,footer:m?t.jsx(x,{className:s.btn,ref:c,icon:t.jsx(E,{}),label:"Edit","data-test-id":"list__custom-footer"}):void 0,children:t.jsx(R,{label:e.trigger,"data-test-id":"droplist-button-trigger"})})}),n!=="none"&&!!(n==="single"?o:o&&o.length>0)&&t.jsxs("div",{children:["Value: ",JSON.stringify(o,null,2)]})]})},i={render:C,args:{trigger:"click",placement:"bottom-start",widthStrategy:"gte",size:"s",marker:!0,scroll:!0,loading:!1,showFooter:!0,showSearch:!1,selectionMode:"single",closeDroplistOnItemClick:!1,untouchableScrollbars:!1,scrollToSelectedItem:!1,defaultValue:""},argTypes:{showFooter:{name:"[Stories]: Show footer",control:{type:"boolean"}},showSearch:{name:"[Stories]: Show search",control:{type:"boolean"}},triggerElemRef:{table:{disable:!0}},open:{table:{disable:!0}},onOpenChange:{table:{disable:!0}},items:{table:{disable:!0}},pinTop:{table:{disable:!0}},pinBottom:{table:{disable:!0}},footer:{table:{disable:!0}},selection:{table:{disable:!0}},selectionMode:{name:"[Story]: selection Mode",options:Object.keys(u),mapping:u,control:{type:"select"}},search:{table:{disable:!0}},scrollRef:{table:{disable:!0}},scrollContainerRef:{table:{disable:!0}},defaultValue:{name:"[Stories]: default value",control:{type:"text"}}},parameters:{readme:{sidebar:[`Latest version: ${d.version}`,y,k]},packageName:d.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.0.0?node-id=41%3A7631&mode=design"}}};var b,g,f;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: Template,
  args: {
    trigger: 'click',
    placement: 'bottom-start',
    widthStrategy: 'gte',
    size: 's',
    marker: true,
    scroll: true,
    loading: false,
    showFooter: true,
    showSearch: false,
    selectionMode: 'single',
    closeDroplistOnItemClick: false,
    untouchableScrollbars: false,
    scrollToSelectedItem: false,
    defaultValue: ''
  },
  argTypes: {
    showFooter: {
      name: '[Stories]: Show footer',
      control: {
        type: 'boolean'
      }
    },
    showSearch: {
      name: '[Stories]: Show search',
      control: {
        type: 'boolean'
      }
    },
    triggerElemRef: {
      table: {
        disable: true
      }
    },
    open: {
      table: {
        disable: true
      }
    },
    onOpenChange: {
      table: {
        disable: true
      }
    },
    items: {
      table: {
        disable: true
      }
    },
    pinTop: {
      table: {
        disable: true
      }
    },
    pinBottom: {
      table: {
        disable: true
      }
    },
    footer: {
      table: {
        disable: true
      }
    },
    selection: {
      table: {
        disable: true
      }
    },
    selectionMode: {
      name: '[Story]: selection Mode',
      options: Object.keys(STORY_SELECTION_MODE),
      mapping: STORY_SELECTION_MODE,
      control: {
        type: 'select'
      }
    },
    search: {
      table: {
        disable: true
      }
    },
    scrollRef: {
      table: {
        disable: true
      }
    },
    scrollContainerRef: {
      table: {
        disable: true
      }
    },
    defaultValue: {
      name: '[Stories]: default value',
      control: {
        type: 'text'
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
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.0.0?node-id=41%3A7631&mode=design'
    }
  }
}`,...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};export{Ne as default,i as droplist};
