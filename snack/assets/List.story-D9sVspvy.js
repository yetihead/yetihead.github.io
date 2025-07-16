import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{r as e}from"./index-CJ_LmFaV.js";import{c as _,a as ae,b as se,E as a,G as re,V as ie,B as le,L as k,w as c,s,e as C,d as me}from"./styles.module-CAiWnKwq.js";import{P as ce}from"./index-CwHIobxP.js";import{L as y}from"./List-CSQrxlMY.js";import{B as D}from"./ButtonFilled-DhU1yp3w.js";import{B as pe}from"./ButtonOutline-CzsrdEVF.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-C9_U387z.js";import"./hooks-Cv-w_Cx5.js";import"./index-DUmpqB7p.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./useValueControl-C51frgGe.js";import"./index-JZGyZbA2.js";import"./Checkbox-uZV6WJ28.js";import"./index-B7wZyJkK.js";import"./constants-BObEONKm.js";import"./TogglePrivate-BTSew7b5.js";import"./index-3XDw48l5.js";import"./index-DtRrUciF.js";import"./TruncateString-BPmgFnBz.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-BNp3usZT.js";import"./PopoverPrivate-CnKgsFAm.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./Switch-CYqDG2NM.js";import"./index-BQAaeyfQ.js";import"./index-C7IVzcIX.js";import"./index-BLj3vrxU.js";import"./Dropdown-uG1Hplv7.js";import"./index-DLGJiw2b.js";import"./index-Baw9oej9.js";import"./LocaleProvider-CyhbxqE1.js";import"./index-BkOiuzeN.js";import"./IconPredefined-yX8Rdo-2.js";import"./Typography-DmSN6cv6.js";import"./ButtonTonal-BgeMe9qu.js";import"./utils-Ct1D1GSP.js";import"./Counter-dO15w468.js";import"./Sun-CLMO8Tpr.js";import"./constants-BAH7I9kc.js";import"./Divider-C1X9zrkx.js";import"./Spinner-DZPrD8kc.js";import"./Scroll-B3e6J9cA.js";import"./ButtonFunction-DkDZEdUd.js";import"./useButtonNavigation-CVCsehRW.js";import"./useClearButton-DMWmUR1d.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-C6kWfrUd.js";import"./index-zbp_5bxn.js";import"./ButtonSimple-3o_8XXbq.js";import"./Avatar-BnyePUFR.js";import"./StatusIndicator-3Vfyu6S9.js";const bt={title:"Components/List/List",component:y},z={single:"single",multiple:"multiple",none:"none"},B=()=>Math.floor(Math.random()*1e4),de=({showPinTopItems:R,showPinBottomItems:v,showSearch:U,showEmptyList:x,showFooter:j,showSwitch:p,showSwitchIcon:d,showGroups:g,showCollapsedList:$,showAsyncList:A,showEmptyState:u=a.None,showEmptyStateActionButton:E,selectionMode:r,truncateVariant:l,defaultValue:S,...n})=>{const I=e.useMemo(()=>S?r==="single"?S:[S]:r==="single"?void 0:[],[S,r]),[N,h]=e.useState(I),[F,H]=e.useState(()=>n.virtualized?B():0),[J,W]=e.useState();e.useEffect(()=>{h(I)},[I]);const[Y,K]=e.useState(),T=e.useMemo(()=>[...re,...n.virtualized?ie:[]].map(o=>({...o,truncate:{...o.truncate,variant:l},items:o.items.map(m=>({...m,switch:p,showSwitchIcon:d,content:{...m.content,truncate:{...m.content.truncate,variant:l}}}))})),[n.virtualized,p,d,l]),i=e.useMemo(()=>(x?[]:le).map(o=>({...o,switch:p,showSwitchIcon:d,content:{...o.content,truncate:{...o.content.truncate,variant:l}}})),[x,p,d,l]),[Q,M]=e.useState(k),[X,L]=e.useState(!1),[Z,ee]=e.useState(!0),O=e.useRef(null),te=e.useRef(null),b=e.useRef(),ne=async()=>{L(!0),setTimeout(()=>{M(o=>o.concat(k)),L(!1)},1e3)},f=e.useRef(null);e.useEffect(()=>{const o=m=>{m[0].isIntersecting&&(L(!0),ne())};return b.current=new IntersectionObserver(o),O.current&&b.current.observe(O.current),()=>{b.current&&b.current.disconnect()}},[A]);const P=e.useMemo(()=>c(g?T:i,"",v?i.length:0),[i,T,g,v]),oe=e.useMemo(()=>{switch(u){case a.NotFound:case a.NoData:return[];case a.DataError:case a.None:default:return P}},[u,P]);return A?t.jsx("div",{className:s.wrapper,children:t.jsxs("div",{className:s.listContainer,children:["Async List",t.jsx(y,{size:n.size,items:c(Q),scroll:!0,loading:Z&&X,scrollRef:O,scrollContainerRef:te,"data-test-id":n["data-test-id"],footerActiveElementsRefs:[f],footer:t.jsx(D,{ref:f,className:s.btn,label:"Reset",onClick:()=>{ee(!0),M([])}})})]})}):$?t.jsx("div",{className:s.wrapper,children:t.jsxs("div",{className:s.listContainer,children:["Collapsed List",t.jsx(y,{items:c(me),size:n.size,"data-test-id":n["data-test-id"],scroll:!0,...r!=="none"?{selection:{value:N,onChange:h,mode:r}}:{selection:void 0}})]})}):t.jsxs("div",{className:s.outerWrapper,children:[t.jsx("div",{className:s.wrapper,children:t.jsxs("div",{className:s.listContainer,children:["Customizable List",t.jsx(y,{...n,pinTop:R?c(i):void 0,pinBottom:v?c(i,"",(R?i.length:0)+(g?T:i).length):void 0,search:U?{value:Y,onChange:K,placeholder:"Placeholder"}:void 0,items:oe,...r!=="none"?{selection:{value:N,onChange:h,mode:r}}:{selection:void 0},footerActiveElementsRefs:j?[f]:void 0,collapse:{value:J,onChange:W},dataError:u===a.DataError||n.dataError,dataFiltered:n.dataFiltered??u===a.NotFound,noDataState:E?C:void 0,noResultsState:E?C:void 0,errorDataState:E?C:void 0,footer:j?t.jsx(pe,{tabIndex:-1,className:s.btn,ref:f,icon:t.jsx(ce,{}),label:"Edit","data-test-id":"list__custom-footer"}):void 0})]})}),n.virtualized&&t.jsx(D,{label:`Scroll to random large group item (${F})`,appearance:"primary",onClick:()=>{h(`large_items_${F}`),H(B())}}),t.jsx("div",{children:JSON.stringify(N)})]})},w={render:de,args:{virtualized:!1,scroll:!0,showPinTopItems:!0,showPinBottomItems:!0,showSearch:!0,showEmptyList:!1,showFooter:!0,showSwitch:!1,showSwitchIcon:!1,showGroups:!0,showEmptyState:a.None,showEmptyStateActionButton:!1,truncateVariant:"end",marker:!0,loading:!1,size:"s",showCollapsedList:!1,showAsyncList:!1,selectionMode:"single",hasListInFocusChain:!0,scrollToSelectedItem:!1,defaultValue:"",barHideStrategy:"never"},argTypes:{showPinTopItems:{name:"[Stories]: Show pinned top item",control:{type:"boolean"}},showPinBottomItems:{name:"[Stories]: Show pinned bottom item",control:{type:"boolean"}},showSearch:{name:"[Stories]: Show search",control:{type:"boolean"}},showEmptyList:{name:"[Stories]: Show empty list",control:{type:"boolean"}},showFooter:{name:"[Stories]: Show footer",control:{type:"boolean"}},showSwitch:{name:"[Stories]: Show switch in items",control:{type:"boolean"}},showSwitchIcon:{name:"[Stories]: Show icon in switches",control:{type:"boolean",if:{arg:"showSwitch",eq:!0}}},showGroups:{name:"[Stories]: Show group items",control:{type:"boolean"}},showCollapsedList:{name:"[Stories]: Show collapsed list",control:{type:"boolean"}},showAsyncList:{name:"[Stories]: Show async list",control:{type:"boolean"}},showEmptyState:{name:"[Stories]: Empty state",control:{type:"radio"},options:Object.values(a),defaultValue:a.None},showEmptyStateActionButton:{name:"[Stories]: Show empty state action button",control:{type:"boolean"},if:{arg:"showEmptyState",neq:a.None}},truncateVariant:{name:"[Stories]: Truncate variant",control:{type:"radio"},options:["end","middle"]},items:{table:{disable:!0}},pinTop:{table:{disable:!0}},pinBottom:{table:{disable:!0}},footer:{table:{disable:!0}},search:{table:{disable:!0}},scrollRef:{table:{disable:!0}},scrollContainerRef:{table:{disable:!0}},selection:{table:{disable:!0}},noDataState:{table:{disable:!0}},noResultsState:{table:{disable:!0}},errorDataState:{table:{disable:!0}},selectionMode:{name:"[Stories]: selection Mode",options:Object.keys(z),mapping:z,control:{type:"select"}},defaultValue:{name:"[Stories]: default value",control:{type:"text"}}},parameters:{readme:{sidebar:[`Latest version: ${_.version}`,ae,se]},packageName:_.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.0.0?node-id=41%3A7631&mode=design"}}};var V,G,q;w.parameters={...w.parameters,docs:{...(V=w.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: Template,
  args: {
    virtualized: false,
    scroll: true,
    showPinTopItems: true,
    showPinBottomItems: true,
    showSearch: true,
    showEmptyList: false,
    showFooter: true,
    showSwitch: false,
    showSwitchIcon: false,
    showGroups: true,
    showEmptyState: EmptyState.None,
    showEmptyStateActionButton: false,
    truncateVariant: 'end',
    marker: true,
    loading: false,
    size: 's',
    showCollapsedList: false,
    showAsyncList: false,
    selectionMode: 'single',
    hasListInFocusChain: true,
    scrollToSelectedItem: false,
    defaultValue: '',
    barHideStrategy: 'never'
  },
  argTypes: {
    showPinTopItems: {
      name: '[Stories]: Show pinned top item',
      control: {
        type: 'boolean'
      }
    },
    showPinBottomItems: {
      name: '[Stories]: Show pinned bottom item',
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
    showEmptyList: {
      name: '[Stories]: Show empty list',
      control: {
        type: 'boolean'
      }
    },
    showFooter: {
      name: '[Stories]: Show footer',
      control: {
        type: 'boolean'
      }
    },
    showSwitch: {
      name: '[Stories]: Show switch in items',
      control: {
        type: 'boolean'
      }
    },
    showSwitchIcon: {
      name: '[Stories]: Show icon in switches',
      control: {
        type: 'boolean',
        if: {
          arg: 'showSwitch',
          eq: true
        }
      }
    },
    showGroups: {
      name: '[Stories]: Show group items',
      control: {
        type: 'boolean'
      }
    },
    showCollapsedList: {
      name: '[Stories]: Show collapsed list',
      control: {
        type: 'boolean'
      }
    },
    showAsyncList: {
      name: '[Stories]: Show async list',
      control: {
        type: 'boolean'
      }
    },
    showEmptyState: {
      name: '[Stories]: Empty state',
      control: {
        type: 'radio'
      },
      options: Object.values(EmptyState),
      defaultValue: EmptyState.None
    },
    showEmptyStateActionButton: {
      name: '[Stories]: Show empty state action button',
      control: {
        type: 'boolean'
      },
      if: {
        arg: 'showEmptyState',
        neq: EmptyState.None
      }
    },
    truncateVariant: {
      name: '[Stories]: Truncate variant',
      control: {
        type: 'radio'
      },
      options: ['end', 'middle']
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
    selection: {
      table: {
        disable: true
      }
    },
    noDataState: {
      table: {
        disable: true
      }
    },
    noResultsState: {
      table: {
        disable: true
      }
    },
    errorDataState: {
      table: {
        disable: true
      }
    },
    selectionMode: {
      name: '[Stories]: selection Mode',
      options: Object.keys(STORY_SELECTION_MODE),
      mapping: STORY_SELECTION_MODE,
      control: {
        type: 'select'
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
}`,...(q=(G=w.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};export{bt as default,w as list};
