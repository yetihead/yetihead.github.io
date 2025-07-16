import{r}from"./index-CJ_LmFaV.js";import{j as u}from"./jsx-runtime-BTJTZTIL.js";import{D as P}from"./index-DLRniMSR.js";import{U as j}from"./index-zbp_5bxn.js";import{T as U}from"./index-Drk0xmYR.js";import{B as f}from"./ButtonFunction-DkDZEdUd.js";import{c as I}from"./index-DUmpqB7p.js";import{T as M}from"./TruncateString-BPmgFnBz.js";import{e as V}from"./componentPropsProcessors-UJEZy8aQ.js";import{t as C}from"./helpers-DNSUdh_x.js";import{g as K}from"./_commonjsHelpers-D6-XlEtG.js";import{D as z}from"./DropZone-DEn-2Ph3.js";const q=r.createContext({});function v(){return r.useContext(q)}const X=r.createContext({focused:!1,setFocused:()=>{}});function J(){return r.useContext(X)}function Dn(n){if(!n)return n;const t=n.split(".");return t.pop(),t.length===1&&t[0]===""?n:t.join(".")}function Z(n){var t;return(t=n==null?void 0:n.split(".").pop())==null?void 0:t.toLocaleUpperCase()}function Y(n){return n.type.match(/image\/(png|jpg|jpeg|gif|webp|bmp|svg)/i)}function _n(n){const[t,o]=r.useState(void 0),[e,d]=r.useState(!1);return r.useEffect(()=>{if(n&&Y(n)){const i=new FileReader;i.onloadstart=()=>{d(!0)},i.onloadend=()=>{d(!1);const{result:c}=i;c&&o(c.toString())},i.readAsDataURL(n)}else o(void 0)},[n]),{imageData:t,loading:e}}const k="attachment",h={icon:`${k}__icon`,image:`${k}__image`,loading:`${k}__loading`,retryAction:`${k}__retry-action`,deleteAction:`${k}__delete-action`,downloadAction:`${k}__download-action`,title:`${k}__title`,description:`${k}__description`,error:`${k}__error`},$="_actions_1aog0_1",W="_retryAction_1aog0_6",w={actions:$,retryAction:W},nn=()=>{};function D({hideDelete:n,hideDownload:t,hideRetry:o}){const{onDelete:e,onDownload:d,file:i,disabled:c,onRetry:s}=v(),{setFocused:g=nn}=J(),A=d&&!t,G=e&&!n,E=s&&!o,b=()=>{g(!0)},l=()=>{g(!1)},H=a=>{s==null||s(),a.stopPropagation()},O=a=>{d==null||d(i),a.stopPropagation()},L=a=>{e==null||e(i),a.stopPropagation()};return!A&&!G?null:u.jsxs("div",{className:w.actions,children:[A&&u.jsx(f,{disabled:c,size:"xs",icon:u.jsx(P,{}),onClick:O,onFocus:b,onBlur:l,"data-test-id":h.downloadAction}),E&&u.jsx(f,{disabled:c,size:"xs",icon:u.jsx(j,{}),onClick:H,onFocus:b,onBlur:l,className:w.retryAction,"data-test-id":h.retryAction}),G&&u.jsx(f,{disabled:c,size:"xs",icon:u.jsx(U,{}),onClick:L,onFocus:b,onBlur:l,"data-test-id":h.deleteAction})]})}try{D.displayName="Actions",D.__docgenInfo={description:"",displayName:"Actions",props:{hideDownload:{defaultValue:null,description:"",name:"hideDownload",required:!1,type:{name:"boolean"}},hideDelete:{defaultValue:null,description:"",name:"hideDelete",required:!1,type:{name:"boolean"}},hideRetry:{defaultValue:null,description:"",name:"hideRetry",required:!1,type:{name:"boolean"}}}}}catch{}function p({text:n,className:t,maxLines:o=1,...e}){const{truncateVariant:d}=v();return n?u.jsx("div",{className:t,children:u.jsx(M,{text:n,maxLines:o,variant:d,...V(e)})}):null}try{p.displayName="Text",p.__docgenInfo={description:"",displayName:"Text",props:{text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!0,type:{name:"string"}},maxLines:{defaultValue:{value:"1"},description:"",name:"maxLines",required:!1,type:{name:"number"}},"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}}}}}catch{}const tn="_content_1nvre_1",en="_title_1nvre_16",cn="_description_1nvre_24",an="_error_1nvre_25",N={content:tn,title:en,description:cn,error:an};function _({title:n,description:t,error:o,className:e,align:d="left"}){const{size:i,truncate:c={}}=v();return u.jsxs("div",{className:I(N.content,e),"data-size":i,"data-align":d,children:[u.jsx(p,{className:N.title,text:n,"data-test-id":h.title,maxLines:c==null?void 0:c.title}),u.jsx(p,{className:N.description,text:t,"data-test-id":h.description,maxLines:c==null?void 0:c.description}),u.jsx(p,{className:N.error,text:o,"data-test-id":h.error,maxLines:c==null?void 0:c.error})]})}try{_.displayName="TextBlock",_.__docgenInfo={description:"",displayName:"TextBlock",props:{className:{defaultValue:null,description:"CSS-класс для элемента с контентом",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:{value:"fileName"},description:"Заголовок",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:{value:"fileExtension"},description:"Описание",name:"description",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"Сообщение об ошибке",name:"error",required:!1,type:{name:"string"}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'}]}}}}}catch{}const sn=`# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 0.4.18 (2025-07-15)

### Only dependencies have been changed
* [@snack-uikit/button@0.19.14](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
* [@snack-uikit/card@0.19.13](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)
* [@snack-uikit/icon-predefined@0.7.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icon-predefined/CHANGELOG.md)
* [@snack-uikit/loaders@0.9.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/loaders/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.6.25](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)
* [@snack-uikit/utils@3.10.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)





## 0.4.17 (2025-07-10)

### Only dependencies have been changed
* [@snack-uikit/card@0.19.12](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)
* [@snack-uikit/icons@0.27.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.6.24](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)





## 0.4.16 (2025-07-10)

### Only dependencies have been changed
* [@snack-uikit/button@0.19.13](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
* [@snack-uikit/card@0.19.11](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.4.15 (2025-07-09)

### Only dependencies have been changed
* [@snack-uikit/card@0.19.10](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.4.14 (2025-07-07)

### Only dependencies have been changed
* [@snack-uikit/card@0.19.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.4.13 (2025-07-07)

### Only dependencies have been changed
* [@snack-uikit/button@0.19.12](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
* [@snack-uikit/card@0.19.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)
* [@snack-uikit/icon-predefined@0.7.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icon-predefined/CHANGELOG.md)
* [@snack-uikit/icons@0.27.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
* [@snack-uikit/loaders@0.9.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/loaders/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.6.23](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)
* [@snack-uikit/utils@3.9.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)





## 0.4.12 (2025-06-27)

### Only dependencies have been changed
* [@snack-uikit/card@0.19.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)
* [@snack-uikit/icons@0.27.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.6.22](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)





## 0.4.11 (2025-06-23)

### Only dependencies have been changed
* [@snack-uikit/card@0.19.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.4.10 (2025-06-19)

### Only dependencies have been changed
* [@snack-uikit/card@0.19.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.6.21](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)





## 0.4.9 (2025-06-16)

### Only dependencies have been changed
* [@snack-uikit/card@0.19.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)
* [@snack-uikit/icons@0.26.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.6.20](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)





## 0.4.8 (2025-06-16)

### Only dependencies have been changed
* [@snack-uikit/card@0.19.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.4.7 (2025-05-29)

### Only dependencies have been changed
* [@snack-uikit/card@0.19.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.4.6 (2025-05-26)

### Only dependencies have been changed
* [@snack-uikit/card@0.19.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.4.5 (2025-05-21)

### Only dependencies have been changed
* [@snack-uikit/card@0.19.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.4.4 (2025-05-16)

### Only dependencies have been changed
* [@snack-uikit/button@0.19.11](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
* [@snack-uikit/card@0.18.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)
* [@snack-uikit/icon-predefined@0.7.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icon-predefined/CHANGELOG.md)
* [@snack-uikit/icons@0.26.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
* [@snack-uikit/loaders@0.9.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/loaders/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.6.19](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)
* [@snack-uikit/utils@3.8.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)





## 0.4.3 (2025-05-14)

### Only dependencies have been changed
* [@snack-uikit/card@0.18.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.4.2 (2025-05-14)

### Only dependencies have been changed
* [@snack-uikit/card@0.18.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.4.1 (2025-05-12)

### Only dependencies have been changed
* [@snack-uikit/button@0.19.10](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
* [@snack-uikit/card@0.18.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)
* [@snack-uikit/loaders@0.9.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/loaders/CHANGELOG.md)





# 0.4.0 (2025-04-23)


### Features

* **PDS-2086:** add nonce prop for scrollbars ([9bf1fb6](https://github.com/cloud-ru-tech/snack-uikit/commit/9bf1fb63a43d27fe0190a20c94ef2ee68f67f40f))





## 0.3.40 (2025-04-07)

### Only dependencies have been changed
* [@snack-uikit/card@0.17.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.3.39 (2025-03-19)

### Only dependencies have been changed
* [@snack-uikit/card@0.16.32](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)
* [@snack-uikit/icons@0.26.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.6.18](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)





## 0.3.38 (2025-03-17)

### Only dependencies have been changed
* [@snack-uikit/card@0.16.31](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.6.17](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)





## 0.3.37 (2025-03-17)

### Only dependencies have been changed
* [@snack-uikit/button@0.19.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
* [@snack-uikit/card@0.16.30](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)
* [@snack-uikit/icon-predefined@0.7.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icon-predefined/CHANGELOG.md)
* [@snack-uikit/icons@0.26.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
* [@snack-uikit/loaders@0.9.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/loaders/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.6.16](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)
* [@snack-uikit/utils@3.8.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)





## 0.3.36 (2025-03-14)

### Only dependencies have been changed
* [@snack-uikit/card@0.16.29](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)
* [@snack-uikit/icons@0.26.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.6.15](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)





## 0.3.35 (2025-03-13)

### Only dependencies have been changed
* [@snack-uikit/card@0.16.28](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.3.34 (2025-03-13)

### Only dependencies have been changed
* [@snack-uikit/card@0.16.27](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)
* [@snack-uikit/icons@0.25.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.6.14](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)





## 0.3.33 (2025-03-06)

### Only dependencies have been changed
* [@snack-uikit/card@0.16.26](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.3.32 (2025-03-05)

### Only dependencies have been changed
* [@snack-uikit/card@0.16.25](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.3.31 (2025-03-05)

### Only dependencies have been changed
* [@snack-uikit/card@0.16.24](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.6.13](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)





## 0.3.30 (2025-03-04)

### Only dependencies have been changed
* [@snack-uikit/card@0.16.23](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)
* [@snack-uikit/icons@0.25.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.6.12](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)





## 0.3.29 (2025-03-04)

### Only dependencies have been changed
* [@snack-uikit/card@0.16.22](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)
* [@snack-uikit/icons@0.25.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.6.11](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)





## 0.3.28 (2025-03-04)

### Only dependencies have been changed
* [@snack-uikit/button@0.19.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
* [@snack-uikit/card@0.16.21](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)
* [@snack-uikit/icon-predefined@0.7.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icon-predefined/CHANGELOG.md)
* [@snack-uikit/icons@0.24.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
* [@snack-uikit/loaders@0.9.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/loaders/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.6.10](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)
* [@snack-uikit/utils@3.8.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)





## 0.3.27 (2025-02-25)

### Only dependencies have been changed
* [@snack-uikit/card@0.16.20](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.3.26 (2025-02-10)

### Only dependencies have been changed
* [@snack-uikit/card@0.16.19](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.6.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)





## 0.3.25 (2025-02-06)

### Only dependencies have been changed
* [@snack-uikit/card@0.16.18](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.6.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)





## 0.3.24 (2025-02-05)

### Only dependencies have been changed
* [@snack-uikit/button@0.19.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
* [@snack-uikit/card@0.16.17](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.3.23 (2025-02-04)

### Only dependencies have been changed
* [@snack-uikit/card@0.16.16](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.6.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)





## 0.3.22 (2025-02-04)

### Only dependencies have been changed
* [@snack-uikit/card@0.16.15](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.3.21 (2025-01-23)

### Only dependencies have been changed
* [@snack-uikit/button@0.19.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
* [@snack-uikit/card@0.16.14](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)
* [@snack-uikit/icon-predefined@0.7.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icon-predefined/CHANGELOG.md)
* [@snack-uikit/icons@0.24.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
* [@snack-uikit/loaders@0.9.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/loaders/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.6.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)
* [@snack-uikit/utils@3.7.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)





## 0.3.20 (2025-01-22)

### Only dependencies have been changed
* [@snack-uikit/card@0.16.13](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.3.19 (2025-01-20)

### Only dependencies have been changed
* [@snack-uikit/card@0.16.12](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.6.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)





## 0.3.18 (2024-12-26)


### Bug Fixes

* **FF-5734:** eslint fixes ([5ce6f1f](https://github.com/cloud-ru-tech/snack-uikit/commit/5ce6f1f22d3ac3dd367cbdd184e5873e67837c8b))





## 0.3.17 (2024-12-25)

### Only dependencies have been changed
* [@snack-uikit/card@0.16.10](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.6.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)





## 0.3.16 (2024-12-20)

### Only dependencies have been changed
* [@snack-uikit/card@0.16.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.3.15 (2024-12-18)

### Only dependencies have been changed
* [@snack-uikit/card@0.16.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.3.14 (2024-12-17)

### Only dependencies have been changed
* [@snack-uikit/button@0.19.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
* [@snack-uikit/card@0.16.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)
* [@snack-uikit/loaders@0.9.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/loaders/CHANGELOG.md)





## 0.3.13 (2024-12-12)

### Only dependencies have been changed
* [@snack-uikit/button@0.19.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
* [@snack-uikit/card@0.16.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)
* [@snack-uikit/icon-predefined@0.7.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icon-predefined/CHANGELOG.md)
* [@snack-uikit/icons@0.24.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
* [@snack-uikit/loaders@0.8.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/loaders/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.6.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)
* [@snack-uikit/utils@3.6.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)





## 0.3.12 (2024-12-12)

### Only dependencies have been changed
* [@snack-uikit/card@0.16.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.3.11 (2024-12-04)

### Only dependencies have been changed
* [@snack-uikit/card@0.16.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.3.10 (2024-11-29)

### Only dependencies have been changed
* [@snack-uikit/card@0.16.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.3.9 (2024-11-19)

### Only dependencies have been changed
* [@snack-uikit/card@0.16.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.3.8 (2024-11-14)

### Only dependencies have been changed
* [@snack-uikit/card@0.16.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.3.7 (2024-11-14)

### Only dependencies have been changed
* [@snack-uikit/card@0.16.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.3.6 (2024-11-14)


### Dependencies

* **FF-5678:** up deps classnames/uncontrollable ([8f0d645](https://github.com/cloud-ru-tech/snack-uikit/commit/8f0d645fc7eb8eaf95660cd0ae7d4b550821059b))





## 0.3.5 (2024-11-12)

### Only dependencies have been changed
* [@snack-uikit/button@0.19.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
* [@snack-uikit/card@0.15.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)
* [@snack-uikit/loaders@0.8.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/loaders/CHANGELOG.md)





## 0.3.4 (2024-11-08)

### Only dependencies have been changed
* [@snack-uikit/card@0.15.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.3.3 (2024-11-08)

### Only dependencies have been changed
* [@snack-uikit/card@0.15.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.3.2 (2024-11-05)

### Only dependencies have been changed
* [@snack-uikit/card@0.15.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.3.1 (2024-10-31)

### Only dependencies have been changed
* [@snack-uikit/button@0.19.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
* [@snack-uikit/card@0.14.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)
* [@snack-uikit/loaders@0.7.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/loaders/CHANGELOG.md)





# 0.3.0 (2024-10-28)


### Features

* **FF-5782:** sass use/forward approach ([3e53869](https://github.com/cloud-ru-tech/snack-uikit/commit/3e53869ace864a7718e434b7f410c15dbd911cd5))





# 0.2.0 (2024-10-28)


### Features

* **FF-5502:** add cjs build ([ffada28](https://github.com/cloud-ru-tech/snack-uikit/commit/ffada28bfdc37ea760eb1c8759342e680bdf8dd6))





## 0.1.28 (2024-10-23)

### Only dependencies have been changed
* [@snack-uikit/card@0.12.42](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.1.27 (2024-10-16)

### Only dependencies have been changed
* [@snack-uikit/card@0.12.41](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.1.26 (2024-10-14)

### Only dependencies have been changed
* [@snack-uikit/card@0.12.40](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.1.25 (2024-09-27)

### Only dependencies have been changed
* [@snack-uikit/card@0.12.39](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.1.24 (2024-09-26)

### Only dependencies have been changed
* [@snack-uikit/card@0.12.38](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.4.24](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)





## 0.1.23 (2024-09-24)

### Only dependencies have been changed
* [@snack-uikit/card@0.12.37](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.4.23](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)





## 0.1.22 (2024-09-23)

### Only dependencies have been changed
* [@snack-uikit/button@0.17.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
* [@snack-uikit/card@0.12.36](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)
* [@snack-uikit/icon-predefined@0.5.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icon-predefined/CHANGELOG.md)
* [@snack-uikit/icons@0.22.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
* [@snack-uikit/loaders@0.5.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/loaders/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.4.22](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)
* [@snack-uikit/utils@3.4.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)





## 0.1.21 (2024-09-06)

### Only dependencies have been changed
* [@snack-uikit/card@0.12.35](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.4.21](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)





## 0.1.20 (2024-08-21)

### Only dependencies have been changed
* [@snack-uikit/card@0.12.34](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.1.19 (2024-08-14)

### Only dependencies have been changed
* [@snack-uikit/button@0.17.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
* [@snack-uikit/card@0.12.33](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.1.18 (2024-08-13)

### Only dependencies have been changed
* [@snack-uikit/card@0.12.32](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.1.17 (2024-08-07)

### Only dependencies have been changed
* [@snack-uikit/card@0.12.31](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.1.16 (2024-08-07)

### Only dependencies have been changed
* [@snack-uikit/card@0.12.30](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.1.15 (2024-08-06)

### Only dependencies have been changed
* [@snack-uikit/button@0.17.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
* [@snack-uikit/card@0.12.29](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.1.14 (2024-07-29)

### Only dependencies have been changed
* [@snack-uikit/card@0.12.28](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.1.13 (2024-07-19)

### Only dependencies have been changed
* [@snack-uikit/card@0.12.27](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)
* [@snack-uikit/icons@0.22.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.4.20](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)





## 0.1.12 (2024-07-19)

### Only dependencies have been changed
* [@snack-uikit/card@0.12.26](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.1.11 (2024-07-09)

### Only dependencies have been changed
* [@snack-uikit/card@0.12.25](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.1.10 (2024-06-27)

### Only dependencies have been changed
* [@snack-uikit/card@0.12.24](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.4.19](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)





## 0.1.9 (2024-06-26)

### Only dependencies have been changed
* [@snack-uikit/card@0.12.23](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.1.8 (2024-06-20)

### Only dependencies have been changed
* [@snack-uikit/card@0.12.22](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.4.18](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)





## 0.1.7 (2024-06-11)

### Only dependencies have been changed
* [@snack-uikit/card@0.12.21](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.1.6 (2024-06-11)

### Only dependencies have been changed
* [@snack-uikit/button@0.17.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
* [@snack-uikit/card@0.12.20](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.1.5 (2024-06-06)

### Only dependencies have been changed
* [@snack-uikit/card@0.12.19](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.1.4 (2024-05-31)

### Only dependencies have been changed
* [@snack-uikit/card@0.12.18](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.4.17](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)





## 0.1.3 (2024-05-30)

### Only dependencies have been changed
* [@snack-uikit/card@0.12.17](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.4.16](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)





## 0.1.2 (2024-05-23)

### Only dependencies have been changed
* [@snack-uikit/card@0.12.16](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)





## 0.1.1 (2024-05-23)

### Only dependencies have been changed
* [@snack-uikit/card@0.12.15](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/card/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.4.15](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)





# 0.1.0 (2024-05-17)


### Features

* **PDS-172:** add attachment ([fecc3a2](https://github.com/cloud-ru-tech/snack-uikit/commit/fecc3a2aa922d06827f115a8a020da8615985a16))





## CHANGELOG

### v0.0.0

- Initial version
`,un="@snack-uikit/attachment",on="0.4.18",F={name:un,version:on},dn='# Attachment\n\n## Installation\n\n`npm i @snack-uikit/attachment`\n\n[Changelog](./CHANGELOG.md)\n\n[//]: DOCUMENTATION_SECTION_START\n[//]: THIS_SECTION_IS_AUTOGENERATED_PLEASE_DONT_EDIT_IT\n## AttachmentSquare\n### Props\n| name | type | default value | description |\n|------|------|---------------|-------------|\n| file | `File` | - | Файл |\n| onDownload | `(file?: File) => void` | - | Колбек на клик по кнопке скачивания |\n| onDelete | `(file?: File) => void` | - | Колбек на клик по кнопке удаления |\n| onRetry | `() => void` | - | Колбек на клик по кнопке повторения |\n| title | `string` | fileName | Заголовок |\n| description | `string` | fileExtension | Описание |\n| error | `string` | - | Сообщение об ошибке |\n| truncateVariant | "end" \\| "middle" | - | Вариант обрезания строки: <br> - `End` - с конца; <br> - `Middle` - по середине |\n| loading | `boolean` | - | Управление состоянием загрузки |\n| icon | `JSXElementConstructor<{ size?: number; className?: string; }>` | - | Иконка для файла @defaultIcon FileSVG |\n| size | enum Size: `"s"`, `"m"` | s | Размер |\n| checked | `boolean` | - | Управление состоянием выбран/не выбран |\n| disabled | `boolean` | - | Управление состоянием интерактивности |\n| onClick | `(e: MouseEvent<HTMLDivElement \\| HTMLAnchorElement, MouseEvent>) => void` | - | Колбек на клик по карточке |\n| className | `string` | - | CSS-класс для элемента с контентом |\n## Attachment\n### Props\n| name | type | default value | description |\n|------|------|---------------|-------------|\n| file | `File` | - | Файл |\n| onDownload | `(file?: File) => void` | - | Колбек на клик по кнопке скачивания |\n| onDelete | `(file?: File) => void` | - | Колбек на клик по кнопке удаления |\n| onRetry | `() => void` | - | Колбек на клик по кнопке повторения |\n| title | `string` | fileName | Заголовок |\n| description | `string` | fileExtension | Описание |\n| error | `string` | - | Сообщение об ошибке |\n| truncateVariant | "end" \\| "middle" | - | Вариант обрезания строки: <br> - `End` - с конца; <br> - `Middle` - по середине |\n| loading | `boolean` | - | Управление состоянием загрузки |\n| icon | `JSXElementConstructor<{ size?: number; className?: string; }>` | - | Иконка для файла @defaultIcon FileSVG |\n| size | enum Size: `"s"`, `"m"` | s | Размер |\n| checked | `boolean` | - | Управление состоянием выбран/не выбран |\n| disabled | `boolean` | - | Управление состоянием интерактивности |\n| onClick | `(e: MouseEvent<HTMLDivElement \\| HTMLAnchorElement, MouseEvent>) => void` | - | Колбек на клик по карточке |\n| className | `string` | - | CSS-класс для элемента с контентом |\n| truncate | `{ title?: number; description?: number; error?: number; }` | - |  |\n\n\n[//]: DOCUMENTATION_SECTION_END\n',m={Attachment:"attachment",ClickAction:"onClick",DeleteAction:"onDelete",DownloadAction:"onDownload",RetryAction:"onRetry"},rn={exampleFile:"pdf",showDelete:!0,showDownload:!0,showRetry:!0,title:"Title",description:"Description",error:"",showClick:!0,size:"s",loading:!1,checked:!1,disabled:!1,truncateVariant:"end","data-test-id":m.Attachment},kn="data:image/jpeg;base64,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",ln="_wrapper_728ka_1",hn="_filesContainer_728ka_12",x={wrapper:ln,filesContainer:hn};var y,Q;function bn(){return Q||(Q=1,y=function(n,t,o,e){var d=typeof e<"u"?[e,n]:[n],i=new Blob(d,{type:o||"application/octet-stream"});if(typeof window.navigator.msSaveBlob<"u")window.navigator.msSaveBlob(i,t);else{var c=window.URL&&window.URL.createObjectURL?window.URL.createObjectURL(i):window.webkitURL.createObjectURL(i),s=document.createElement("a");s.style.display="none",s.href=c,s.setAttribute("download",t),typeof s.download>"u"&&s.setAttribute("target","_blank"),document.body.appendChild(s),s.click(),setTimeout(function(){document.body.removeChild(s),window.URL.revokeObjectURL(c)},200)}}),y}var mn=bn();const pn=K(mn);function gn({content:n,path:t,fileName:o}){if(n&&pn(n,o),t){const e=Object.assign(document.createElement("a"),{target:"_blank",href:t,download:o});e.click(),e.remove()}}function An(n){const t=["B","KB","MB","GB","TB","PB","EB","ZB","YB"];if(n===0)return`0 ${t[0]}`;const o=2,e=1024,d=o,i=Math.floor(Math.log(n)/Math.log(e));return`${parseFloat((n/e**i).toFixed(d))} ${t[i]}`}function S(n){return function({exampleFile:o,showDelete:e,showDownload:d,showClick:i,showRetry:c,...s}){const[g,A]=r.useState({}),[G,E]=r.useState([]),[b,l]=r.useState(!1),[H,O]=r.useState(!1);r.useEffect(()=>{O(s.checked??!1)},[s.checked]);const L=()=>{l(!0),fetch(kn).then(a=>a.blob()).then(a=>A({img:new File([a],"Picture.jpg",{type:"image/jpg"}),pdf:new File([a],"File.pdf",{type:"application/pdf"})})).finally(()=>{l(!1)})};return r.useEffect(()=>{L()},[]),u.jsxs("div",{className:x.wrapper,children:[u.jsx(n,{...s,loading:b||s.loading,file:g[o],checked:H,onClick:i?()=>{C.userAction.neutral({label:"onClick","data-test-id":m.ClickAction}),O(a=>!a)}:void 0,onDelete:e?()=>{C.userAction.neutral({label:"onDelete","data-test-id":m.DeleteAction})}:void 0,onDownload:d?()=>{C.userAction.neutral({label:"onDownload","data-test-id":m.DownloadAction})}:void 0,onRetry:c?()=>{C.userAction.neutral({label:"onRetry","data-test-id":m.RetryAction})}:void 0}),u.jsx(z,{title:"Drop files here",onFilesUpload:E}),u.jsx("div",{className:x.filesContainer,children:G.map(a=>{var B;return u.jsx(n,{file:a,onDownload:()=>{gn({content:a,fileName:a.name})},description:`${(B=Z(a.name))==null?void 0:B.toUpperCase()}, ${An(a.size)}`,onDelete:()=>E(T=>T.filter(R=>R.name!==a.name))},a.name)})})]})}}const Fn=rn,xn={exampleFile:{name:"[Story]: Show example file",options:["img","pdf"],control:{type:"radio"}},onClick:{table:{disable:!0}},onDelete:{table:{disable:!0}},onDownload:{table:{disable:!0}},onRetry:{table:{disable:!0}},file:{table:{disable:!0}},icon:{table:{disable:!0}},truncate:{table:{disable:!0}}},Qn={readme:{sidebar:[`Latest version: ${F.version}`,dn,sn]},packageName:F.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/design/jtGxAPvFJOMir7V0eQFukN/branch/OSnyUq4zigaHiTkL1egWTB/Snack-UI-Kit-3.0.0?m=auto&node-id=6075%3A208643&t=B12jkbmMhhHAG3cv-1"}};try{S.displayName="TemplateStory",S.__docgenInfo={description:"",displayName:"TemplateStory",props:{}}}catch{}export{q as A,Qn as D,h as T,_n as a,Z as b,_ as c,D as d,xn as e,Fn as f,Dn as g,S as h,X as i,v as u};
