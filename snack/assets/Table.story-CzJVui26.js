import{j as R}from"./jsx-runtime-BTJTZTIL.js";import{r as y,R as Ue}from"./index-CJ_LmFaV.js";import{t as _o}from"./helpers-DNSUdh_x.js";import{c as ms}from"./index-DTH25FFD.js";import{C as bs}from"./index-DtRrUciF.js";import{C as ks}from"./index-CX1lIXbQ.js";import{T as ti}from"./TruncateString-BPmgFnBz.js";import{B as ni}from"./ButtonFunction-DkDZEdUd.js";import{T as vs}from"./TagRow-DZB29rdX.js";import{r as Pn}from"./index-Bxu_udwM.js";import{c as gn}from"./index-DUmpqB7p.js";import{S as br}from"./Skeleton-Cf0sBfNU.js";import{i as Gn}from"./isBrowser-C2N6XvuH.js";import{u as Cs}from"./index-JZGyZbA2.js";import{R as Go}from"./Radio-HZq3S8or.js";import{C as Oo}from"./Checkbox-uZV6WJ28.js";import{C as ys}from"./index-DLGJiw2b.js";import{F as Es}from"./index-0zxx_KqD.js";import{F as Ss,a as ws}from"./index-I1zimRE2.js";import{u as ii}from"./LocaleProvider-CyhbxqE1.js";import{S as xs}from"./SkeletonText-DP-re6Ou.js";import{C as As}from"./index-BQAaeyfQ.js";import{S as kr}from"./index-Baw9oej9.js";import{a as _s}from"./Toolbar-Dt8v7W5Y.js";import{D as Gs}from"./index-DLRniMSR.js";import{D as Xa}from"./DropList-sYSbfSyD.js";import{A as Os,a as Fs,F as Ds}from"./index-Dz039XZe.js";import{I as Wi}from"./index-BkOiuzeN.js";import{P as Ns}from"./Pagination-Bj4q9qOZ.js";import{C as Rs}from"./index-DT_qDkzI.js";import{T as Ls}from"./Typography-DmSN6cv6.js";import{M as Hs}from"./index-NU8U5csw.js";import{m as Ts}from"./hooks-Cv-w_Cx5.js";import{u as Is}from"./useIsomorphicLayoutEffect-BAXQmlEq.js";import{e as Ms}from"./componentPropsProcessors-UJEZy8aQ.js";import{S as Ps}from"./Scroll-B3e6J9cA.js";import{T as Bs}from"./index-Drk0xmYR.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-Chjiymov.js";import"./index-DdXvKv-Q.js";import"./index-C7IVzcIX.js";import"./index-BLj3vrxU.js";import"./ProgressBar-DoG3l5ps.js";import"./index-6PN_JoHT.js";import"./index-C-NxZ9RO.js";import"./index-zbp_5bxn.js";import"./Link-CwRw2bLJ.js";import"./Sun-CLMO8Tpr.js";import"./constants-BAH7I9kc.js";import"./Tooltip-BNp3usZT.js";import"./PopoverPrivate-CnKgsFAm.js";import"./utils-Ct1D1GSP.js";import"./Counter-dO15w468.js";import"./constants-BaREPXw5.js";import"./Tag-CalHVeMA.js";import"./Dropdown-uG1Hplv7.js";import"./constants-BObEONKm.js";import"./TogglePrivate-BTSew7b5.js";import"./index-B7wZyJkK.js";import"./index-3XDw48l5.js";import"./ChipChoiceRow-Dm6BRtqr.js";import"./constants-BIigMBdG.js";import"./index-CwHIobxP.js";import"./Divider-C1X9zrkx.js";import"./useValueControl-C51frgGe.js";import"./IconPredefined-yX8Rdo-2.js";import"./ButtonTonal-BgeMe9qu.js";import"./ButtonFilled-DhU1yp3w.js";import"./getRange-CHNeUywO.js";import"./index-BKaanG2n.js";import"./FuzzySearch-C8qpdhmO.js";import"./Calendar-4GuDSEHX.js";import"./TimePickerBase-C7FkWbU9.js";import"./List-CSQrxlMY.js";import"./TimePicker-BwqZufRQ.js";import"./Switch-CYqDG2NM.js";import"./Spinner-DZPrD8kc.js";import"./useButtonNavigation-CVCsehRW.js";import"./useClearButton-DMWmUR1d.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-C6kWfrUd.js";class Fo{constructor(n,t,i,a){this.filterKey=n,this.validate=t,this.parser=JSON.parse,this.serializer=JSON.stringify,this.getFilter=()=>{try{const r=this.getFromSource(),o=r?this.parser(r):null;return o&&this.validate(o)?o:null}catch{return null}},this.setFilter=r=>{const o=this.serializer(r);this.setToSource(o)},i&&(this.parser=i),a&&(this.serializer=a)}}class Vs extends Fo{getFromSource(){return Gn()&&new URL(window.location.href).searchParams.get(this.filterKey)||""}setToSource(n){if(Gn()){const t=new URL(window.location.href);t.searchParams.set(this.filterKey,n),history.replaceState({},"",t)}}}class zs extends Fo{getFromSource(){return Gn()&&localStorage.getItem(this.filterKey)||""}setToSource(n){Gn()&&localStorage.setItem(this.filterKey,n)}}const vr=({source:e})=>{const n=y.useCallback(i=>{e&&e.setFilter(i)},[e]);return{getData:y.useCallback(()=>e==null?void 0:e.getFilter(),[e]),setData:n}},$s=({options:e,parser:n,serializer:t})=>{const i=y.useMemo(()=>e?new Vs(e.filterQueryKey,e.validateData,n,t):void 0,[e,n,t]),a=y.useMemo(()=>e?new zs(e.filterLocalStorageKey,e.validateData):void 0,[e]),{getData:r,setData:o}=vr({source:i}),{getData:u,setData:s}=vr({source:a}),c=y.useCallback(g=>{o(g),s(g)},[o,s]);return{getDefaultFilter:y.useCallback(()=>{const g=u();return g||r()},[r,u]),setDataToStorages:c}},js=`# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 0.36.19 (2025-07-15)

### Only dependencies have been changed
* [@snack-uikit/button@0.19.14](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
* [@snack-uikit/chips@0.27.16](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
* [@snack-uikit/icon-predefined@0.7.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icon-predefined/CHANGELOG.md)
* [@snack-uikit/info-block@0.6.30](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
* [@snack-uikit/list@0.31.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
* [@snack-uikit/pagination@0.10.17](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
* [@snack-uikit/scroll@0.10.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/scroll/CHANGELOG.md)
* [@snack-uikit/skeleton@0.6.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/skeleton/CHANGELOG.md)
* [@snack-uikit/toggles@0.13.19](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
* [@snack-uikit/toolbar@0.13.17](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.6.25](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)
* [@snack-uikit/typography@0.8.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/typography/CHANGELOG.md)
* [@snack-uikit/utils@3.10.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)





## 0.36.18 (2025-07-10)

### Only dependencies have been changed
* [@snack-uikit/chips@0.27.15](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
* [@snack-uikit/icons@0.27.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
* [@snack-uikit/info-block@0.6.29](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
* [@snack-uikit/list@0.31.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
* [@snack-uikit/pagination@0.10.16](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
* [@snack-uikit/toggles@0.13.18](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
* [@snack-uikit/toolbar@0.13.16](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.6.24](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)





## 0.36.17 (2025-07-10)

### Only dependencies have been changed
* [@snack-uikit/button@0.19.13](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
* [@snack-uikit/chips@0.27.14](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
* [@snack-uikit/info-block@0.6.28](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
* [@snack-uikit/list@0.31.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
* [@snack-uikit/pagination@0.10.15](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
* [@snack-uikit/toolbar@0.13.15](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)





## 0.36.16 (2025-07-09)

### Only dependencies have been changed
* [@snack-uikit/chips@0.27.13](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
* [@snack-uikit/list@0.31.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
* [@snack-uikit/toolbar@0.13.14](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)





## 0.36.15 (2025-07-07)

### Only dependencies have been changed
* [@snack-uikit/chips@0.27.12](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
* [@snack-uikit/list@0.31.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
* [@snack-uikit/toolbar@0.13.13](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)





## 0.36.14 (2025-07-07)

### Only dependencies have been changed
* [@snack-uikit/button@0.19.12](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
* [@snack-uikit/chips@0.27.11](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
* [@snack-uikit/icon-predefined@0.7.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icon-predefined/CHANGELOG.md)
* [@snack-uikit/icons@0.27.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
* [@snack-uikit/info-block@0.6.27](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
* [@snack-uikit/list@0.31.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
* [@snack-uikit/pagination@0.10.14](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
* [@snack-uikit/scroll@0.10.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/scroll/CHANGELOG.md)
* [@snack-uikit/skeleton@0.6.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/skeleton/CHANGELOG.md)
* [@snack-uikit/toggles@0.13.17](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
* [@snack-uikit/toolbar@0.13.12](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.6.23](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)
* [@snack-uikit/typography@0.8.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/typography/CHANGELOG.md)
* [@snack-uikit/utils@3.9.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)





## 0.36.13 (2025-06-27)

### Only dependencies have been changed
* [@snack-uikit/chips@0.27.10](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
* [@snack-uikit/icons@0.27.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
* [@snack-uikit/info-block@0.6.26](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
* [@snack-uikit/list@0.30.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
* [@snack-uikit/pagination@0.10.13](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
* [@snack-uikit/toggles@0.13.16](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
* [@snack-uikit/toolbar@0.13.11](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.6.22](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)





## 0.36.12 (2025-06-23)

### Only dependencies have been changed
* [@snack-uikit/chips@0.27.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
* [@snack-uikit/list@0.30.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
* [@snack-uikit/toolbar@0.13.10](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)





## 0.36.11 (2025-06-19)

### Only dependencies have been changed
* [@snack-uikit/chips@0.27.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
* [@snack-uikit/info-block@0.6.25](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
* [@snack-uikit/list@0.29.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
* [@snack-uikit/toolbar@0.13.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.6.21](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)





## 0.36.10 (2025-06-19)


### Bug Fixes

* **FF-0000:** table state control ([4059c7b](https://github.com/cloud-ru-tech/snack-uikit/commit/4059c7bb77e37cf1bb761583db960f93e0e24abb))





## 0.36.9 (2025-06-16)


### Bug Fixes

* **FF-0000:** rowSelection.onChange callback ([e5f537d](https://github.com/cloud-ru-tech/snack-uikit/commit/e5f537d8dcc26cda4bde8afd59b4ef334006f4af))





## 0.36.8 (2025-06-16)

### Only dependencies have been changed
* [@snack-uikit/chips@0.27.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
* [@snack-uikit/icons@0.26.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
* [@snack-uikit/info-block@0.6.24](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
* [@snack-uikit/list@0.29.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
* [@snack-uikit/pagination@0.10.12](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
* [@snack-uikit/toggles@0.13.15](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
* [@snack-uikit/toolbar@0.13.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
* [@snack-uikit/truncate-string@0.6.20](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)





## 0.36.7 (2025-06-16)

### Only dependencies have been changed
* [@snack-uikit/chips@0.27.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
* [@snack-uikit/list@0.29.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
* [@snack-uikit/toolbar@0.13.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)





## 0.36.6 (2025-05-29)

### Only dependencies have been changed
* [@snack-uikit/toolbar@0.13.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)





## 0.36.5 (2025-05-26)

### Only dependencies have been changed

- [@snack-uikit/chips@0.27.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.29.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.13.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.36.4 (2025-05-16)

### Only dependencies have been changed

- [@snack-uikit/button@0.19.11](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
- [@snack-uikit/chips@0.27.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/icon-predefined@0.7.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icon-predefined/CHANGELOG.md)
- [@snack-uikit/icons@0.26.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
- [@snack-uikit/info-block@0.6.23](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.29.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/pagination@0.10.11](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/scroll@0.10.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/scroll/CHANGELOG.md)
- [@snack-uikit/skeleton@0.6.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/skeleton/CHANGELOG.md)
- [@snack-uikit/toggles@0.13.14](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.13.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.6.19](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)
- [@snack-uikit/typography@0.8.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/typography/CHANGELOG.md)
- [@snack-uikit/utils@3.8.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)

## 0.36.3 (2025-05-14)

### Only dependencies have been changed

- [@snack-uikit/chips@0.27.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.29.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.13.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.36.2 (2025-05-14)

### Only dependencies have been changed

- [@snack-uikit/chips@0.27.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.29.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.13.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.36.1 (2025-05-12)

### Only dependencies have been changed

- [@snack-uikit/button@0.19.10](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
- [@snack-uikit/chips@0.27.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/info-block@0.6.22](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.28.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/pagination@0.10.10](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/toolbar@0.13.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

# 0.36.0 (2025-04-23)

### Features

- **PDS-2086:** add nonce prop for scrollbars ([9bf1fb6](https://github.com/cloud-ru-tech/snack-uikit/commit/9bf1fb63a43d27fe0190a20c94ef2ee68f67f40f))

## 0.35.4 (2025-04-22)

### Bug Fixes

- **PDS-1971:** table fixes - column order, settings label, refactoring ([a1c34a3](https://github.com/cloud-ru-tech/snack-uikit/commit/a1c34a3783a0a0bf95253529d958ad69421819ce))

## 0.35.3 (2025-04-15)

### Bug Fixes

- **PDS-1889:** fixed header align in table ([2b7e448](https://github.com/cloud-ru-tech/snack-uikit/commit/2b7e448df3254396b7cb04e78feba24a4cee9629))

## 0.35.2 (2025-04-10)

### Bug Fixes

- **FF-6387:** add deep search for tree ([d1e9b97](https://github.com/cloud-ru-tech/snack-uikit/commit/d1e9b970205565a64245073dfe624f60fc9d5628))

## 0.35.1 (2025-04-07)

### Only dependencies have been changed

- [@snack-uikit/toolbar@0.12.13](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

# 0.35.0 (2025-03-26)

### Bug Fixes

- **PDS-1971:** newValue renaming ([37b4eb9](https://github.com/cloud-ru-tech/snack-uikit/commit/37b4eb9b11bb13db122edf3d8e2fea9b4b8e8b25))
- **PDS-1971:** useColumnSettings return compose as object ([61b3799](https://github.com/cloud-ru-tech/snack-uikit/commit/61b3799acd59e31546e6da44641d5a01738d55e5))

### Features

- **PDS-1971:** add columnSettings to savedState and mode of initvalue ([72863cf](https://github.com/cloud-ru-tech/snack-uikit/commit/72863cfdc7a2ae81b709755792615067b425efa2))

## 0.34.9 (2025-03-19)

### Only dependencies have been changed

- [@snack-uikit/chips@0.26.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/icons@0.26.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
- [@snack-uikit/info-block@0.6.21](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.27.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/pagination@0.10.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/toggles@0.13.13](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.12.12](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.6.18](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.34.8 (2025-03-17)

### Only dependencies have been changed

- [@snack-uikit/chips@0.26.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/info-block@0.6.20](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.27.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.12.11](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.6.17](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.34.7 (2025-03-17)

### Only dependencies have been changed

- [@snack-uikit/button@0.19.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
- [@snack-uikit/chips@0.26.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/icon-predefined@0.7.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icon-predefined/CHANGELOG.md)
- [@snack-uikit/icons@0.26.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
- [@snack-uikit/info-block@0.6.19](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.27.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/pagination@0.10.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/scroll@0.9.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/scroll/CHANGELOG.md)
- [@snack-uikit/skeleton@0.6.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/skeleton/CHANGELOG.md)
- [@snack-uikit/toggles@0.13.12](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.12.10](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.6.16](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)
- [@snack-uikit/typography@0.8.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/typography/CHANGELOG.md)
- [@snack-uikit/utils@3.8.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)

## 0.34.6 (2025-03-14)

### Only dependencies have been changed

- [@snack-uikit/chips@0.26.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/icons@0.26.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
- [@snack-uikit/info-block@0.6.18](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.27.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/pagination@0.10.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/toggles@0.13.11](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.12.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.6.15](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.34.5 (2025-03-13)

### Only dependencies have been changed

- [@snack-uikit/chips@0.26.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.27.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toggles@0.13.10](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.12.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.34.4 (2025-03-13)

### Only dependencies have been changed

- [@snack-uikit/chips@0.26.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/icons@0.25.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
- [@snack-uikit/info-block@0.6.17](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.27.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/pagination@0.10.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/toggles@0.13.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.12.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.6.14](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.34.3 (2025-03-12)

### Bug Fixes

- **PDS-1483:** invalid behavior with disabled columns sort by drag fixed ([4d4fc57](https://github.com/cloud-ru-tech/snack-uikit/commit/4d4fc5770f204378c37333a9d9fdf5f05520de48))
- **PDS-1483:** invalid columns order without id fixed ([c35ce70](https://github.com/cloud-ru-tech/snack-uikit/commit/c35ce70c162fcac4bf87f376ef3ed44cb230470a))

## 0.34.2 (2025-03-11)

### Only dependencies have been changed

- [@snack-uikit/chips@0.26.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/toolbar@0.12.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.34.1 (2025-03-07)

### Bug Fixes

- **PDS-1483:** translation and initial column filters open state improvements for table ([d4ef555](https://github.com/cloud-ru-tech/snack-uikit/commit/d4ef5552a9a7883b01cdabcb96a22f1ee08d8d29))

# 0.34.0 (2025-03-06)

### Features

- **PDS-1483:** table columns reorder by drag and columns settings ([80d43af](https://github.com/cloud-ru-tech/snack-uikit/commit/80d43af40c6acca38e2d788fcfa4fbd944818059))

## 0.33.4 (2025-03-05)

### Only dependencies have been changed

- [@snack-uikit/chips@0.26.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.27.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.12.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.33.3 (2025-03-05)

### Only dependencies have been changed

- [@snack-uikit/chips@0.26.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.26.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.12.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.6.13](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.33.2 (2025-03-04)

### Only dependencies have been changed

- [@snack-uikit/chips@0.25.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/icons@0.25.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
- [@snack-uikit/info-block@0.6.16](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.26.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/pagination@0.10.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/toggles@0.13.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.12.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.6.12](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.33.1 (2025-03-04)

### Only dependencies have been changed

- [@snack-uikit/chips@0.25.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/icons@0.25.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
- [@snack-uikit/info-block@0.6.15](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.26.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/pagination@0.10.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/toggles@0.13.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.12.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.6.11](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

# 0.33.0 (2025-03-04)

### Features

- **PDS-681:** add save filter ([1406c6c](https://github.com/cloud-ru-tech/snack-uikit/commit/1406c6c447f337b5140135f8741b52ed1a0dfbf0))

# 0.32.0 (2025-03-03)

### Features

- **PDS-483:** table rowAutoHeight prop, removed default truncate when auto-height enabled ([0da9a86](https://github.com/cloud-ru-tech/snack-uikit/commit/0da9a861737fc35ba873a1795419d49c6cae51d1))

## 0.31.1 (2025-03-03)

### Only dependencies have been changed

- [@snack-uikit/chips@0.25.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/toolbar@0.11.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

# 0.31.0 (2025-02-27)

### Features

- **FF-6236:** infinite scroll in table ([09afb22](https://github.com/cloud-ru-tech/snack-uikit/commit/09afb2234211802c86722e36e17b9161f912b9e8))

# 0.30.0 (2025-02-26)

### Features

- **PDS-1487:** freeze columns size on resize ([f5f5694](https://github.com/cloud-ru-tech/snack-uikit/commit/f5f56948a5e0ba42f071a66e2de225465f67e980))

# 0.29.0 (2025-02-25)

### Features

- **PDS-569:** table bulk rows multiselect with shift key ([e5802e3](https://github.com/cloud-ru-tech/snack-uikit/commit/e5802e390c0beeb0d4cae20235f3e82fccb83b24))

## 0.28.7 (2025-02-25)

### Only dependencies have been changed

- [@snack-uikit/chips@0.25.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.26.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.11.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.28.6 (2025-02-24)

### Only dependencies have been changed

- [@snack-uikit/toolbar@0.11.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.28.5 (2025-02-10)

### Bug Fixes

- **PDS-1081:** make type for filters in generic non required ([136ea97](https://github.com/cloud-ru-tech/snack-uikit/commit/136ea971801290030eb6ad68bfcb8c06b2b3e732))

## 0.28.4 (2025-02-10)

### Only dependencies have been changed

- [@snack-uikit/chips@0.25.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/info-block@0.6.13](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.25.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.11.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.6.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.28.3 (2025-02-06)

### Bug Fixes

- **PDS-1081:** make type for filters in generic non required ([91371ec](https://github.com/cloud-ru-tech/snack-uikit/commit/91371ec7a78d2cf0f1caf545911cc578b95f2ee9))

## 0.28.2 (2025-02-06)

### Only dependencies have been changed

- [@snack-uikit/chips@0.25.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/info-block@0.6.12](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.24.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.11.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.6.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.28.1 (2025-02-05)

### Only dependencies have been changed

- [@snack-uikit/toolbar@0.11.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

# 0.28.0 (2025-02-05)

### BREAKING CHANGES

- **PDS-1081:** change columnFilters type to ChipChoiceRowProps, add suppressSearch prop ([5fb3278](https://github.com/cloud-ru-tech/snack-uikit/commit/5fb327801a846d837346773ed7d4747e78832b19))

## 0.27.3 (2025-02-04)

### Only dependencies have been changed

- [@snack-uikit/chips@0.24.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/info-block@0.6.10](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.24.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.10.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.6.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.27.2 (2025-02-04)

### Only dependencies have been changed

- [@snack-uikit/chips@0.24.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.24.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.10.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.27.1 (2025-01-31)

### Bug Fixes

- **PDS-1461:** update after token change ([3324d1d](https://github.com/cloud-ru-tech/snack-uikit/commit/3324d1da07b8d0e26186046d859985774fc06ce6))

# 0.27.0 (2025-01-23)

### BREAKING CHANGES

- **PDS-926:** add bulkActions prop, remove onDelete and toolbarBefore props ([e9e9afd](https://github.com/cloud-ru-tech/snack-uikit/commit/e9e9afdd0e69ed505bee6157151879fe01bcaf57))

## 0.26.7 (2025-01-22)

### Only dependencies have been changed

- [@snack-uikit/chips@0.24.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.23.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.9.18](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.26.6 (2025-01-20)

### Only dependencies have been changed

- [@snack-uikit/chips@0.23.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/info-block@0.6.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.22.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toggles@0.13.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.9.17](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.6.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.26.5 (2025-01-15)

### Bug Fixes

- **FF-5532:** table search filter pagination bug fixed ([36f8799](https://github.com/cloud-ru-tech/snack-uikit/commit/36f879940a2d2244f98456ae890c708a748e275e))

## 0.26.4 (2025-01-13)

### Only dependencies have been changed

- [@snack-uikit/chips@0.23.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)

## 0.26.3 (2024-12-26)

### Bug Fixes

- **FF-5734:** eslint fixes ([5ce6f1f](https://github.com/cloud-ru-tech/snack-uikit/commit/5ce6f1f22d3ac3dd367cbdd184e5873e67837c8b))

## 0.26.2 (2024-12-25)

### Only dependencies have been changed

- [@snack-uikit/chips@0.23.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.22.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.9.15](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.6.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.26.1 (2024-12-25)

### Only dependencies have been changed

- [@snack-uikit/chips@0.23.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)

# 0.26.0 (2024-12-24)

### Features

- **PDS-671:** add tree cell ([794a3c2](https://github.com/cloud-ru-tech/snack-uikit/commit/794a3c246789147cb8c59d347a692550628b3081))

## 0.25.17 (2024-12-18)

### Only dependencies have been changed

- [@snack-uikit/pagination@0.10.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)

## 0.25.16 (2024-12-18)

### Only dependencies have been changed

- [@snack-uikit/chips@0.22.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.22.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.9.14](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.25.15 (2024-12-17)

### Only dependencies have been changed

- [@snack-uikit/button@0.19.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
- [@snack-uikit/chips@0.22.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/info-block@0.6.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.21.11](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/pagination@0.9.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/toolbar@0.9.13](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.25.14 (2024-12-12)

### Only dependencies have been changed

- [@snack-uikit/button@0.19.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
- [@snack-uikit/chips@0.22.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/icon-predefined@0.7.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icon-predefined/CHANGELOG.md)
- [@snack-uikit/icons@0.24.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
- [@snack-uikit/info-block@0.6.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.21.10](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/pagination@0.9.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/scroll@0.9.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/scroll/CHANGELOG.md)
- [@snack-uikit/skeleton@0.6.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/skeleton/CHANGELOG.md)
- [@snack-uikit/toggles@0.13.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.9.12](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.6.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)
- [@snack-uikit/typography@0.8.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/typography/CHANGELOG.md)
- [@snack-uikit/utils@3.6.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)

## 0.25.13 (2024-12-12)

### Only dependencies have been changed

- [@snack-uikit/chips@0.22.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.21.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.9.11](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.25.12 (2024-12-04)

### Only dependencies have been changed

- [@snack-uikit/toolbar@0.9.10](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.25.11 (2024-11-29)

### Only dependencies have been changed

- [@snack-uikit/chips@0.22.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/info-block@0.6.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.21.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/skeleton@0.6.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/skeleton/CHANGELOG.md)
- [@snack-uikit/toolbar@0.9.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/typography@0.8.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/typography/CHANGELOG.md)

## 0.25.10 (2024-11-26)

### Only dependencies have been changed

- [@snack-uikit/chips@0.22.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)

## 0.25.9 (2024-11-19)

### Only dependencies have been changed

- [@snack-uikit/chips@0.21.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.21.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.9.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.25.8 (2024-11-14)

### Only dependencies have been changed

- [@snack-uikit/chips@0.21.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.21.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.9.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.25.7 (2024-11-14)

### Dependencies

- **FF-5678:** up deps classnames/uncontrollable ([8f0d645](https://github.com/cloud-ru-tech/snack-uikit/commit/8f0d645fc7eb8eaf95660cd0ae7d4b550821059b))

## 0.25.6 (2024-11-12)

### Only dependencies have been changed

- [@snack-uikit/button@0.19.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
- [@snack-uikit/chips@0.20.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/info-block@0.6.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.21.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/pagination@0.9.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/toolbar@0.9.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.25.5 (2024-11-11)

### Only dependencies have been changed

- [@snack-uikit/chips@0.20.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)

## 0.25.4 (2024-11-08)

### Only dependencies have been changed

- [@snack-uikit/chips@0.19.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.21.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.9.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.25.3 (2024-11-08)

### Only dependencies have been changed

- [@snack-uikit/chips@0.19.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.21.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.9.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.25.2 (2024-11-05)

### Only dependencies have been changed

- [@snack-uikit/chips@0.19.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.21.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toggles@0.13.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.9.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.25.1 (2024-10-31)

### Bug Fixes

- **PDS-438:** stylelint update ([9d40d4e](https://github.com/cloud-ru-tech/snack-uikit/commit/9d40d4eb445eeaaca5a2dc1f6421d496f86aeac3))

# 0.25.0 (2024-10-28)

### Features

- **FF-5782:** sass use/forward approach ([3e53869](https://github.com/cloud-ru-tech/snack-uikit/commit/3e53869ace864a7718e434b7f410c15dbd911cd5))

# 0.24.0 (2024-10-28)

### Features

- **FF-5502:** add cjs build ([ffada28](https://github.com/cloud-ru-tech/snack-uikit/commit/ffada28bfdc37ea760eb1c8759342e680bdf8dd6))

## 0.23.8 (2024-10-23)

### Only dependencies have been changed

- [@snack-uikit/chips@0.16.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.18.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.63](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.23.7 (2024-10-16)

### Bug Fixes

- **PDS-755:** fix error icon in table notification list ([e4b0409](https://github.com/cloud-ru-tech/snack-uikit/commit/e4b040948862f54ed219558a9023d816c4d4fa3f))

## 0.23.6 (2024-10-14)

### Only dependencies have been changed

- [@snack-uikit/chips@0.16.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.17.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.61](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.23.5 (2024-10-08)

### Only dependencies have been changed

- [@snack-uikit/chips@0.16.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)

## 0.23.4 (2024-09-27)

### Only dependencies have been changed

- [@snack-uikit/chips@0.15.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.17.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.60](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.23.3 (2024-09-26)

### Only dependencies have been changed

- [@snack-uikit/chips@0.15.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.16.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/scroll@0.6.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/scroll/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.59](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.4.24](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.23.2 (2024-09-24)

### Only dependencies have been changed

- [@snack-uikit/chips@0.15.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/info-block@0.4.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.16.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.58](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.4.23](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.23.1 (2024-09-23)

### Bug Fixes

- **PDS-480:** remove direct usage of browser api elements ([1231ff7](https://github.com/cloud-ru-tech/snack-uikit/commit/1231ff7ab7a1b210b579a7b694633ef23bffcf44))

# 0.23.0 (2024-09-12)

### BREAKING CHANGES

- **FF-5443:** extracted export functions from component ([eba84e2](https://github.com/cloud-ru-tech/snack-uikit/commit/eba84e2a67efba27300c0a952890ea3cb61c8794))

## 0.22.2 (2024-09-06)

### Only dependencies have been changed

- [@snack-uikit/chips@0.15.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/info-block@0.4.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.16.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.56](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.4.21](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.22.1 (2024-08-23)

### Only dependencies have been changed

- [@snack-uikit/chips@0.15.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)

# 0.22.0 (2024-08-22)

### Features

- **DPS-0000:** add row value to renderDescription ([752d6f2](https://github.com/cloud-ru-tech/snack-uikit/commit/752d6f2399fb734e3ffd9b9c0c79b3c2b735960c))

## 0.21.1 (2024-08-21)

### Only dependencies have been changed

- [@snack-uikit/chips@0.14.21](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.16.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.55](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

# 0.21.0 (2024-08-19)

### Features

- **PDS-516:** add saving resize mode ([e3c0137](https://github.com/cloud-ru-tech/snack-uikit/commit/e3c0137c6ff88bb4ea262f8509add7707ba65431))

## 0.20.13 (2024-08-15)

### Only dependencies have been changed

- [@snack-uikit/pagination@0.7.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)

## 0.20.12 (2024-08-14)

### Only dependencies have been changed

- [@snack-uikit/button@0.17.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
- [@snack-uikit/chips@0.14.20](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/info-block@0.4.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.15.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/pagination@0.6.12](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.54](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.20.11 (2024-08-13)

### Only dependencies have been changed

- [@snack-uikit/chips@0.14.19](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.15.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toggles@0.10.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.53](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.20.10 (2024-08-07)

### Only dependencies have been changed

- [@snack-uikit/chips@0.14.18](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.15.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.52](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.20.9 (2024-08-07)

### Only dependencies have been changed

- [@snack-uikit/chips@0.14.17](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.15.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.51](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.20.8 (2024-08-06)

### Only dependencies have been changed

- [@snack-uikit/button@0.17.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
- [@snack-uikit/chips@0.14.16](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/info-block@0.4.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.14.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/pagination@0.6.11](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.50](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.20.7 (2024-08-02)

### Bug Fixes

- **PDS-227:** fix status column ([b906c30](https://github.com/cloud-ru-tech/snack-uikit/commit/b906c30d574a8cec4b70cfc6b309a2443a41a019))

## 0.20.6 (2024-07-31)

### Bug Fixes

- **FF-3788:** updated typescript to v5 ([89e3338](https://github.com/cloud-ru-tech/snack-uikit/commit/89e3338a3ef4df24e4c20d9a9c8cd16e7934ba63))

## 0.20.5 (2024-07-29)

### Only dependencies have been changed

- [@snack-uikit/chips@0.14.15](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.14.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toggles@0.10.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.49](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.20.4 (2024-07-25)

### Bug Fixes

- **FF-5318:** fixed table actions dropdown trigger ([270b67b](https://github.com/cloud-ru-tech/snack-uikit/commit/270b67bba666723b8ac2aaeeb0061230c8c8400a))

## 0.20.3 (2024-07-19)

### Only dependencies have been changed

- [@snack-uikit/chips@0.14.14](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/icons@0.22.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
- [@snack-uikit/info-block@0.4.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.14.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/pagination@0.6.10](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/toggles@0.10.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.48](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.4.20](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.20.2 (2024-07-19)

### Only dependencies have been changed

- [@snack-uikit/chips@0.14.13](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.14.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.47](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.20.1 (2024-07-12)

### Bug Fixes

- **FF-5031:** enhance export format ([f310a4c](https://github.com/cloud-ru-tech/snack-uikit/commit/f310a4cea7ff077776258f4ef4356cad7afab51a))

# 0.20.0 (2024-07-10)

### Bug Fixes

- **FF-5031:** fix results value view vith non empty filteredTopRows ([49fd328](https://github.com/cloud-ru-tech/snack-uikit/commit/49fd32812bc4a253af8331c649b3dd6b26cde795))

### Features

- **FF-5031:** activate autoResetPageIndex option ([9491074](https://github.com/cloud-ru-tech/snack-uikit/commit/9491074d85507a413c7202fe6050488f0de03dd4))
- **FF-5031:** add pagination.optionsRender; fix loading skeleton count ([0f518f5](https://github.com/cloud-ru-tech/snack-uikit/commit/0f518f592945b53eb2be18fad50f87251c85b902))
- **FF-5031:** fix pinned rows selection from toolbar checkbox ([caa0633](https://github.com/cloud-ru-tech/snack-uikit/commit/caa063317ee2b98e1b1e7915d1a159f909699ffa))

### BREAKING CHANGES

- **FF-5031:** expand export settings - add formats and filter settings ([b0a6f5a](https://github.com/cloud-ru-tech/snack-uikit/commit/b0a6f5a3650a68762cf0570c1ca7c36de0f201a2))

## 0.19.6 (2024-07-09)

### Only dependencies have been changed

- [@snack-uikit/toolbar@0.7.46](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.19.5 (2024-06-27)

### Only dependencies have been changed

- [@snack-uikit/chips@0.14.12](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/info-block@0.4.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.13.10](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.45](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.4.19](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.19.4 (2024-06-26)

### Only dependencies have been changed

- [@snack-uikit/chips@0.14.11](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.13.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.44](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.19.3 (2024-06-20)

### Bug Fixes

- **FF-001:** fix sort mouseUp action -> moved to onClick ([97f6da6](https://github.com/cloud-ru-tech/snack-uikit/commit/97f6da6804b1326f88beeae50a7af8eabb77f9b9))

## 0.19.2 (2024-06-11)

### Only dependencies have been changed

- [@snack-uikit/chips@0.14.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.13.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toggles@0.10.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.42](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.19.1 (2024-06-11)

### Only dependencies have been changed

- [@snack-uikit/button@0.17.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
- [@snack-uikit/chips@0.14.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/info-block@0.4.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.13.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/pagination@0.6.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.41](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

# 0.19.0 (2024-06-06)

### Features

- **PDS-287:** add row pinning functionality to table ([f33a911](https://github.com/cloud-ru-tech/snack-uikit/commit/f33a9116d78de8ab09a01a0db22999e09c7fd773))

## 0.18.1 (2024-06-06)

### Only dependencies have been changed

- [@snack-uikit/chips@0.14.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/info-block@0.4.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.13.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.40](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

# 0.18.0 (2024-06-03)

### Features

- **FF-0000:** fix search props ([2db9032](https://github.com/cloud-ru-tech/snack-uikit/commit/2db903299800ce149e6ebf69c9770cc16875a1f8))

## 0.17.9 (2024-05-31)

### Only dependencies have been changed

- [@snack-uikit/chips@0.14.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.13.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.39](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.4.17](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.17.8 (2024-05-30)

### Only dependencies have been changed

- [@snack-uikit/chips@0.14.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/info-block@0.3.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.13.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/scroll@0.6.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/scroll/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.38](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.4.16](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.17.7 (2024-05-27)

### Bug Fixes

- **FF-000:** reset search in serverTable on search prop change ([bb7706f](https://github.com/cloud-ru-tech/snack-uikit/commit/bb7706f888bc279eb21443f4b0a789d537915af3))

## 0.17.6 (2024-05-23)

### Only dependencies have been changed

- [@snack-uikit/chips@0.14.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.13.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toggles@0.9.10](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.37](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.17.5 (2024-05-23)

### Only dependencies have been changed

- [@snack-uikit/chips@0.14.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.13.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.36](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.4.15](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.17.4 (2024-05-21)

### Bug Fixes

- **FF-4717:** do not reset page index when manual pagination is enabled ([8873460](https://github.com/cloud-ru-tech/snack-uikit/commit/8873460c458c75ec19e6e27a1f15e208a8e36c9c))
- **FF-4717:** fix simple search when fuzzy filter is disabled ([cec391a](https://github.com/cloud-ru-tech/snack-uikit/commit/cec391a8127228c425a0bc88d3da31b991e13e20))

## 0.17.3 (2024-05-14)

### Bug Fixes

- **PDS-135:** prevent loop in page number changing ([2da818f](https://github.com/cloud-ru-tech/snack-uikit/commit/2da818f89c175782eeb2323f30e9f3459594fece))

## 0.17.2 (2024-05-13)

### Only dependencies have been changed

- [@snack-uikit/chips@0.14.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)

## 0.17.1 (2024-05-13)

### Only dependencies have been changed

- [@snack-uikit/chips@0.14.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.13.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.35](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

# 0.17.0 (2024-05-08)

### Bug Fixes

- **PDS-135:** change column sizing when header changes ([985fee7](https://github.com/cloud-ru-tech/snack-uikit/commit/985fee74f695cfc7c19dba2a1c73202a83295bc8))
- **PDS-135:** fix first resize of columns, add reset of column size on double-click ([3094130](https://github.com/cloud-ru-tech/snack-uikit/commit/309413044ddacafe077f16686469d73fa676ded5))
- **PDS-135:** keep page number when data is updated ([76b0b74](https://github.com/cloud-ru-tech/snack-uikit/commit/76b0b7448f112575bb35b413ac3db54ab938f70e))
- **PDS-135:** right-pinned column does not change its place when resizing ([60b96b4](https://github.com/cloud-ru-tech/snack-uikit/commit/60b96b4dd652d5bc106d1d9b5ed1cc5ec9925d67))
- **PDS-190:** redundant scroll, click on resize handler ([e520169](https://github.com/cloud-ru-tech/snack-uikit/commit/e5201697109c0dbb4e09034401367026c312fe9a))
- **PDS-197:** fix copyCell flex behaviour ([cb3c2a5](https://github.com/cloud-ru-tech/snack-uikit/commit/cb3c2a516431cd1877756c3e3cc2f8e42b47ce83))

### Features

- **PDS-135:** add enableFuzzySearch prop ([cf203f3](https://github.com/cloud-ru-tech/snack-uikit/commit/cf203f33f27bcd34927de0090c3b7f5a8046fdab))
- **PDS-208:** add headerAlign prop ([066fb90](https://github.com/cloud-ru-tech/snack-uikit/commit/066fb90898ed542d1763f23556b30a494b63c2b9))

### BREAKING CHANGES

- **PDS-135:** add full api from list to actions ([aae4ed3](https://github.com/cloud-ru-tech/snack-uikit/commit/aae4ed341d2e397b079e810a9b38762d9a96d952))

## 0.16.8 (2024-05-08)

### Only dependencies have been changed

- [@snack-uikit/chips@0.13.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/icons@0.21.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
- [@snack-uikit/info-block@0.3.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.11.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/pagination@0.6.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/tag@0.9.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/tag/CHANGELOG.md)
- [@snack-uikit/toggles@0.9.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.33](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.4.14](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.16.7 (2024-04-27)

### Only dependencies have been changed

- [@snack-uikit/chips@0.13.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.11.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.32](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.16.6 (2024-04-27)

### Only dependencies have been changed

- [@snack-uikit/chips@0.13.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.11.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.31](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.16.5 (2024-04-25)

### Only dependencies have been changed

- [@snack-uikit/chips@0.13.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.11.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/pagination@0.6.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.30](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.16.4 (2024-04-24)

### Only dependencies have been changed

- [@snack-uikit/toolbar@0.7.29](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.16.3 (2024-04-23)

### Only dependencies have been changed

- [@snack-uikit/button@0.17.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
- [@snack-uikit/chips@0.13.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/icon-predefined@0.5.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icon-predefined/CHANGELOG.md)
- [@snack-uikit/info-block@0.3.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.11.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/pagination@0.6.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/scroll@0.5.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/scroll/CHANGELOG.md)
- [@snack-uikit/skeleton@0.3.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/skeleton/CHANGELOG.md)
- [@snack-uikit/tag@0.9.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/tag/CHANGELOG.md)
- [@snack-uikit/toggles@0.9.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.28](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.4.13](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)
- [@snack-uikit/typography@0.6.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/typography/CHANGELOG.md)
- [@snack-uikit/utils@3.3.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)

## 0.16.2 (2024-04-22)

### Only dependencies have been changed

- [@snack-uikit/chips@0.12.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/tag@0.9.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/tag/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.27](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.16.1 (2024-04-22)

### Only dependencies have been changed

- [@snack-uikit/list@0.11.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.26](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

# 0.16.0 (2024-04-17)

### Features

- **PDS-134:** add data-test-id prop to rowActions item ([c5d5bb2](https://github.com/cloud-ru-tech/snack-uikit/commit/c5d5bb2747ace1bb016cf7b468aab307ce68f888))

## 0.15.1 (2024-04-08)

### Only dependencies have been changed

- [@snack-uikit/list@0.10.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.25](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

# 0.15.0 (2024-03-28)

### Features

- **PDS-0000:** add getRowId prop into table ([3e1a0a7](https://github.com/cloud-ru-tech/snack-uikit/commit/3e1a0a72fe6b54b24275cf553779063b01c62149))

## 0.14.18 (2024-03-26)

### Only dependencies have been changed

- [@snack-uikit/chips@0.12.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/info-block@0.3.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.9.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/tag@0.8.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/tag/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.24](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.4.12](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.14.17 (2024-03-22)

### Only dependencies have been changed

- [@snack-uikit/chips@0.12.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.9.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.23](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.4.11](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.14.16 (2024-03-19)

### Only dependencies have been changed

- [@snack-uikit/list@0.8.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.22](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.14.15 (2024-03-11)

### Only dependencies have been changed

- [@snack-uikit/list@0.8.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.21](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.14.14 (2024-03-07)

### Only dependencies have been changed

- [@snack-uikit/list@0.7.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.20](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.14.13 (2024-03-02)

### Only dependencies have been changed

- [@snack-uikit/chips@0.12.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)

## 0.14.12 (2024-03-01)

### Only dependencies have been changed

- [@snack-uikit/chips@0.12.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)

## 0.14.11 (2024-02-29)

### Only dependencies have been changed

- [@snack-uikit/chips@0.12.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.7.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toggles@0.9.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.19](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.14.10 (2024-02-29)

### Only dependencies have been changed

- [@snack-uikit/chips@0.12.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/info-block@0.3.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.7.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.18](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.4.10](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.14.9 (2024-02-28)

### Only dependencies have been changed

- [@snack-uikit/button@0.17.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
- [@snack-uikit/chips@0.12.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/icon-predefined@0.5.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icon-predefined/CHANGELOG.md)
- [@snack-uikit/info-block@0.3.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.6.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/pagination@0.6.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.17](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.14.8 (2024-02-27)

### Bug Fixes

- **FF-3424:** fix table global search ([b5ebe5b](https://github.com/cloud-ru-tech/snack-uikit/commit/b5ebe5b227fbfaefdd1ce1dda858794f1ca546da))

## 0.14.7 (2024-02-27)

### Only dependencies have been changed

- [@snack-uikit/list@0.5.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.15](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.14.6 (2024-02-26)

### Bug Fixes

- **FF-4334:** add props for manual sort, pagination, filter; add scroll ref props ([06c57b0](https://github.com/cloud-ru-tech/snack-uikit/commit/06c57b0320f75d5e81ae1bbac0b3157cded96a5d))

## 0.14.5 (2024-02-23)

### Only dependencies have been changed

- [@snack-uikit/chips@0.11.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.4.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/tag@0.8.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/tag/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.13](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.14.4 (2024-02-22)

### Only dependencies have been changed

- [@snack-uikit/chips@0.11.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/info-block@0.2.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/info-block/CHANGELOG.md)
- [@snack-uikit/list@0.3.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/scroll@0.5.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/scroll/CHANGELOG.md)
- [@snack-uikit/tag@0.7.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/tag/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.12](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.14.3 (2024-02-20)

### Bug Fixes

- **FF-4297:** apply system-layer tokens ([7c8fd4b](https://github.com/cloud-ru-tech/snack-uikit/commit/7c8fd4b5334360b2fc31da92973b6835ffa287af))

## 0.14.2 (2024-02-13)

### Bug Fixes

- **FF-0000:** table actions ([da9a808](https://github.com/cloud-ru-tech/snack-uikit/commit/da9a8086bd09f7eee6cabee46a5b1bed932732ab))

## 0.14.1 (2024-02-12)

### Bug Fixes

- **FF-4205:** table default cell for columnDefs ([84cfc41](https://github.com/cloud-ru-tech/snack-uikit/commit/84cfc41d43a605500ec3ef1757e5fb4515d40457))
- **FF-4205:** update locale usage ([bd4095b](https://github.com/cloud-ru-tech/snack-uikit/commit/bd4095bc875c2efc95a0549a366d5b40dd424741))

# 0.14.0 (2024-02-09)

### Bug Fixes

- **FF-0000:** add box-sizing to empty state ([8557d32](https://github.com/cloud-ru-tech/snack-uikit/commit/8557d32b57ee0d21c3f9aba6681502012405c22d))

### Features

- **FF-4242:** add table errorDataState ([3e9a33f](https://github.com/cloud-ru-tech/snack-uikit/commit/3e9a33fa83845adf36970d018e0e7e65f59b41ac))
- **FF-4242:** copy cell processes click event full width ([da55c4c](https://github.com/cloud-ru-tech/snack-uikit/commit/da55c4c2aca3d406a34fa2806344dc68cf83b5cb))

## 0.13.3 (2024-02-09)

### Bug Fixes

- **FF-4242:** add padding to emptyState ([13b0413](https://github.com/cloud-ru-tech/snack-uikit/commit/13b041350962a172c71eaad4f3de544c6b9800c6))

## 0.13.2 (2024-02-09)

### Only dependencies have been changed

- [@snack-uikit/chips@0.11.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/locale@0.2.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/locale/CHANGELOG.md)

## 0.13.1 (2024-02-08)

### Only dependencies have been changed

- [@snack-uikit/chips@0.11.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.3.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/locale@0.2.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/locale/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

# 0.13.0 (2024-02-07)

### Bug Fixes

- **FF-4187:** change local no data to InfoBlock ([542cf0d](https://github.com/cloud-ru-tech/snack-uikit/commit/542cf0de8fed7f4ab5e2bca3afff1318b30a6043))

### Features

- **FF-4241:** add ServerTable; add CopyCell ([2cf16c1](https://github.com/cloud-ru-tech/snack-uikit/commit/2cf16c15e72a93f20d40c1bc54d7708c1a273079))

## 0.12.1 (2024-02-07)

### Only dependencies have been changed

- [@snack-uikit/chips@0.11.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/locale@0.1.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/locale/CHANGELOG.md)

# 0.12.0 (2024-02-06)

### Features

- **FF-4166:** add table locales ([d59b6c0](https://github.com/cloud-ru-tech/snack-uikit/commit/d59b6c08ef6811ad65fa0718266025afc62b4434))

## 0.11.7 (2024-02-05)

### Only dependencies have been changed

- [@snack-uikit/chips@0.10.11](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/icons@0.20.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
- [@snack-uikit/list@0.2.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/pagination@0.6.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/tag@0.7.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/tag/CHANGELOG.md)
- [@snack-uikit/toggles@0.9.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.4.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.11.6 (2024-02-05)

### Only dependencies have been changed

- [@snack-uikit/button@0.16.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
- [@snack-uikit/chips@0.10.10](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/pagination@0.6.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.11.5 (2024-02-02)

### Only dependencies have been changed

- [@snack-uikit/chips@0.10.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)

## 0.11.4 (2024-02-02)

### Only dependencies have been changed

- [@snack-uikit/list@0.2.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.11.3 (2024-02-01)

### Only dependencies have been changed

- [@snack-uikit/chips@0.10.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.1.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/tag@0.7.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/tag/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.4.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.11.2 (2024-01-31)

### Only dependencies have been changed

- [@snack-uikit/chips@0.10.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/list@0.1.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/tag@0.7.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/tag/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.11.1 (2024-01-30)

### Only dependencies have been changed

- [@snack-uikit/list@0.1.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/list/CHANGELOG.md)
- [@snack-uikit/toolbar@0.7.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

# 0.11.0 (2024-01-30)

### BREAKING CHANGES

- **FF-4075:** change usage droplist to list package ([4ce6391](https://github.com/cloud-ru-tech/snack-uikit/commit/4ce63915e838a46a3776e8e21393695a37d2fdd3))

## 0.10.2 (2024-01-23)

### Only dependencies have been changed

- [@snack-uikit/chips@0.10.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/droplist@0.12.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/droplist/CHANGELOG.md)
- [@snack-uikit/icons@0.20.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
- [@snack-uikit/pagination@0.6.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/toggles@0.9.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.6.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.4.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.10.1 (2024-01-18)

### Only dependencies have been changed

- [@snack-uikit/toolbar@0.6.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

# 0.10.0 (2024-01-18)

### Features

- **FF-4102:** update toolbar usage, add 'toolbarBeforeSearch' prop ([6acf0ba](https://github.com/cloud-ru-tech/snack-uikit/commit/6acf0ba5bfb1afaaa485857f3058b65a92f6c75c))

# 0.9.0 (2024-01-16)

### Features

- **FF-4093:** table columns resizing ([8cae511](https://github.com/cloud-ru-tech/snack-uikit/commit/8cae5116f73f079ce3087099253390f2e79034fe))

## 0.8.9 (2023-12-29)

### Bug Fixes

- **FF-3960:** change child components size ([2ce2369](https://github.com/cloud-ru-tech/snack-uikit/commit/2ce2369d6f8c05f8688d61f8c53df4956196b52c))

## 0.8.8 (2023-12-28)

### Only dependencies have been changed

- [@snack-uikit/button@0.15.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
- [@snack-uikit/chips@0.10.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/droplist@0.12.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/droplist/CHANGELOG.md)
- [@snack-uikit/icon-predefined@0.4.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icon-predefined/CHANGELOG.md)
- [@snack-uikit/pagination@0.6.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/toggles@0.9.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.5.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.4.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)
- [@snack-uikit/typography@0.6.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/typography/CHANGELOG.md)

## 0.8.7 (2023-12-26)

### Bug Fixes

- **FF-0:** table xlsx dep ([039504a](https://github.com/cloud-ru-tech/snack-uikit/commit/039504aa7a5b4b0793d6b6cb1ce676905eba704b))

## 0.8.6 (2023-12-25)

### Only dependencies have been changed

- [@snack-uikit/chips@0.10.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/droplist@0.12.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/droplist/CHANGELOG.md)
- [@snack-uikit/toolbar@0.5.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.4.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.8.5 (2023-12-25)

### Bug Fixes

- **FF-4014:** fix infinite width without limits & export some types ([4dc82d3](https://github.com/cloud-ru-tech/snack-uikit/commit/4dc82d334f1cbb0b604d31687e60cfe338c4e679))

## 0.8.4 (2023-12-25)

### Bug Fixes

- **FF-0000:** table bundeled dep ([e4b5566](https://github.com/cloud-ru-tech/snack-uikit/commit/e4b5566237573de52c88eaf56a018d51edc6f6c2))

## 0.8.3 (2023-12-22)

### Bug Fixes

- **FF-0000:** table vendor deps ([6ef48af](https://github.com/cloud-ru-tech/snack-uikit/commit/6ef48afd4cbd260a4948209bcf6d721e14221b52))

## 0.8.2 (2023-12-18)

### Dependencies

- **FF-3874:** update deps ([2a5e15e](https://github.com/cloud-ru-tech/snack-uikit/commit/2a5e15e27473df717ceccef6d92824bf0e79cd26))

## 0.8.1 (2023-12-14)

### Only dependencies have been changed

- [@snack-uikit/chips@0.10.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/droplist@0.12.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/droplist/CHANGELOG.md)
- [@snack-uikit/icons@0.19.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
- [@snack-uikit/pagination@0.5.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/toggles@0.9.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.5.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.4.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

# 0.8.0 (2023-12-14)

### BREAKING CHANGES

- **FF-3729:** replace enum with unions ([910db4a](https://github.com/cloud-ru-tech/snack-uikit/commit/910db4aa8231ccbc58e538e5c5c1f461b1dec275))

## 0.7.2 (2023-12-07)

### Only dependencies have been changed

- [@snack-uikit/chips@0.9.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/droplist@0.11.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/droplist/CHANGELOG.md)
- [@snack-uikit/toolbar@0.4.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.7.1 (2023-12-06)

### Bug Fixes

- **FF-3646:** fix refresh button render in case without onRefresh callback in props ([d99a0e6](https://github.com/cloud-ru-tech/snack-uikit/commit/d99a0e6ef75d6c0d5c49f0c06259c92584821a04))

# 0.7.0 (2023-12-06)

### Bug Fixes

- **FF-0000:** remove extractDataProps ([9d676b9](https://github.com/cloud-ru-tech/snack-uikit/commit/9d676b9df214167bfd1b7ce9f1590891ca62f9a3))
- **FF-3409:** fix RowActionsCell button ([9704aba](https://github.com/cloud-ru-tech/snack-uikit/commit/9704aba6527f0e6fce0e90982aeca62adff57d34))
- **FF-3578:** element order in export functions ([a6d5487](https://github.com/cloud-ru-tech/snack-uikit/commit/a6d5487636d931fbd748ad70e76a8dd62b23b374))
- **FF-3643:** add manual pagination control ([9d9b732](https://github.com/cloud-ru-tech/snack-uikit/commit/9d9b732258e06bd586f9cb06feec93bbc16e38b1))
- **FF-3643:** fix onDelete/onCheck action ([b46ebe5](https://github.com/cloud-ru-tech/snack-uikit/commit/b46ebe5a123aed64e3aecf2bf8fc2165ce9deb60))
- **FF-3643:** fix radio selection view ([918c07f](https://github.com/cloud-ru-tech/snack-uikit/commit/918c07fefb3db21eb03501105a9a89703e72ec84))
- **FF-3711:** fix align sort icon in header ([c527892](https://github.com/cloud-ru-tech/snack-uikit/commit/c52789250585c3d778743175ad6168dfe816e172))
- **FF-3712:** chips usage update ([dee75b1](https://github.com/cloud-ru-tech/snack-uikit/commit/dee75b1725afdc1a90d734b55c3d18f4f168664f))

### Features

- **FF-2653:** add Table package ([29ec955](https://github.com/cloud-ru-tech/snack-uikit/commit/29ec9557279d88bf7bb281bbd524ba747d1b817b))
- **FF-3309:** table additions ([e6936f0](https://github.com/cloud-ru-tech/snack-uikit/commit/e6936f08e5b2d59fca98ab184aa1a2c5aa769ddc))
- **FF-3326:** use useKeyboardNavigation from Droplist package instead of local implementation ([9615d55](https://github.com/cloud-ru-tech/snack-uikit/commit/9615d5589ee6743ad7fc24c95e1fb96a9ab42752))
- **FF-3392:** added csv,xlsx export functions ([d4f1a68](https://github.com/cloud-ru-tech/snack-uikit/commit/d4f1a68e0ec8c47ab3f3865c13846d4a097b386a))
- **FF-3409:** replace ButtonLight to ButtonFunction ([e76a1db](https://github.com/cloud-ru-tech/snack-uikit/commit/e76a1dbf2e2db07a9197c413619e4df6f5976246))
- **FF-3711:** update rows volume chip view ([bbd7a80](https://github.com/cloud-ru-tech/snack-uikit/commit/bbd7a80b3bfd273f182cc1e8f9e96bf9d3e924df))

### BREAKING CHANGES

- **FF-3823:** move to snack-uikit scope ([ac9e30d](https://github.com/cloud-ru-tech/snack-uikit/commit/ac9e30d574d529b2bf4f5184b70c511c981a6032))

## 0.6.4 (2023-12-05)

### Only dependencies have been changed

- [@snack-uikit/chips@0.8.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)

## 0.6.3 (2023-11-29)

### Only dependencies have been changed

- [@snack-uikit/chips@0.8.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/droplist@0.10.12](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/droplist/CHANGELOG.md)
- [@snack-uikit/toolbar@0.3.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.6.2 (2023-11-22)

### Bug Fixes

- **FF-3711:** fix align sort icon in header ([c527892](https://github.com/cloud-ru-tech/snack-uikit/commit/c52789250585c3d778743175ad6168dfe816e172))

## 0.6.1 (2023-11-22)

### Only dependencies have been changed

- [@snack-uikit/chips@0.8.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/droplist@0.10.11](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/droplist/CHANGELOG.md)
- [@snack-uikit/toggles@0.7.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.3.6](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

# 0.6.0 (2023-11-21)

### Features

- **FF-3711:** update rows volume chip view ([bbd7a80](https://github.com/cloud-ru-tech/snack-uikit/commit/bbd7a80b3bfd273f182cc1e8f9e96bf9d3e924df))

## 0.5.10 (2023-11-21)

### Only dependencies have been changed

- [@snack-uikit/chips@0.8.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/droplist@0.10.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/droplist/CHANGELOG.md)
- [@snack-uikit/toggles@0.6.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.3.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.5.9 (2023-11-16)

### Only dependencies have been changed

- [@snack-uikit/chips@0.7.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/droplist@0.10.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/droplist/CHANGELOG.md)
- [@snack-uikit/toolbar@0.3.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.2.16](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.5.8 (2023-11-16)

### Only dependencies have been changed

- [@snack-uikit/chips@0.7.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/droplist@0.10.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/droplist/CHANGELOG.md)
- [@snack-uikit/toggles@0.6.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.3.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)

## 0.5.7 (2023-11-16)

### Bug Fixes

- **FF-3712:** chips usage update ([dee75b1](https://github.com/cloud-ru-tech/snack-uikit/commit/dee75b1725afdc1a90d734b55c3d18f4f168664f))

## 0.5.6 (2023-11-14)

### Bug Fixes

- **FF-3643:** fix radio selection view ([918c07f](https://github.com/cloud-ru-tech/snack-uikit/commit/918c07fefb3db21eb03501105a9a89703e72ec84))

## 0.5.5 (2023-11-09)

### Bug Fixes

- **FF-3643:** add manual pagination control ([9d9b732](https://github.com/cloud-ru-tech/snack-uikit/commit/9d9b732258e06bd586f9cb06feec93bbc16e38b1))
- **FF-3643:** fix onDelete/onCheck action ([b46ebe5](https://github.com/cloud-ru-tech/snack-uikit/commit/b46ebe5a123aed64e3aecf2bf8fc2165ce9deb60))

## 0.5.4 (2023-11-09)

### Only dependencies have been changed

- [@snack-uikit/chips@0.6.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/droplist@0.10.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/droplist/CHANGELOG.md)
- [@snack-uikit/icons@0.18.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
- [@snack-uikit/pagination@0.4.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/toggles@0.5.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.2.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.2.15](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.5.3 (2023-11-08)

### Only dependencies have been changed

- [@snack-uikit/button@0.13.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
- [@snack-uikit/chips@0.6.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/chips/CHANGELOG.md)
- [@snack-uikit/droplist@0.10.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/droplist/CHANGELOG.md)
- [@snack-uikit/icon-predefined@0.2.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icon-predefined/CHANGELOG.md)
- [@snack-uikit/pagination@0.4.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/pagination/CHANGELOG.md)
- [@snack-uikit/scroll@0.3.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/scroll/CHANGELOG.md)
- [@snack-uikit/skeleton@0.2.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/skeleton/CHANGELOG.md)
- [@snack-uikit/toggles@0.5.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/toolbar@0.2.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toolbar/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.2.14](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)
- [@snack-uikit/typography@0.4.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/typography/CHANGELOG.md)
- [@snack-uikit/utils@2.0.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)

## 0.5.2 (2023-10-31)

### Bug Fixes

- **FF-0000:** remove extractDataProps ([9d676b9](https://github.com/cloud-ru-tech/snack-uikit/commit/9d676b9df214167bfd1b7ce9f1590891ca62f9a3))

## 0.5.1 (2023-10-28)

### Bug Fixes

- **FF-3578:** element order in export functions ([a6d5487](https://github.com/cloud-ru-tech/snack-uikit/commit/a6d5487636d931fbd748ad70e76a8dd62b23b374))

# 0.5.0 (2023-10-26)

### Features

- **FF-3309:** table additions ([e6936f0](https://github.com/cloud-ru-tech/snack-uikit/commit/e6936f08e5b2d59fca98ab184aa1a2c5aa769ddc))

## 0.4.1 (2023-10-25)

### Only dependencies have been changed

- [@snack-uikit/button@0.13.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
- [@snack-uikit/droplist@0.10.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/droplist/CHANGELOG.md)
- [@snack-uikit/loaders@0.3.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/loaders/CHANGELOG.md)
- [@snack-uikit/scroll@0.3.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/scroll/CHANGELOG.md)
- [@snack-uikit/toggles@0.5.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.2.11](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)
- [@snack-uikit/typography@0.4.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/typography/CHANGELOG.md)
- [@snack-uikit/utils@1.3.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/utils/CHANGELOG.md)

# 0.4.0 (2023-10-18)

### Features

- **FF-3326:** use useKeyboardNavigation from Droplist package instead of local implementation ([9615d55](https://github.com/cloud-ru-tech/snack-uikit/commit/9615d5589ee6743ad7fc24c95e1fb96a9ab42752))

## 0.3.5 (2023-10-16)

### Only dependencies have been changed

- [@snack-uikit/droplist@0.9.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/droplist/CHANGELOG.md)
- [@snack-uikit/icons@0.17.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
- [@snack-uikit/toggles@0.5.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.2.10](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.3.4 (2023-10-13)

### Only dependencies have been changed

- [@snack-uikit/droplist@0.9.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/droplist/CHANGELOG.md)
- [@snack-uikit/toggles@0.5.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)

## 0.3.3 (2023-10-13)

### Only dependencies have been changed

- [@snack-uikit/droplist@0.9.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/droplist/CHANGELOG.md)
- [@snack-uikit/scroll@0.3.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/scroll/CHANGELOG.md)
- [@snack-uikit/toggles@0.5.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.2.9](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)
- [@snack-uikit/typography@0.4.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/typography/CHANGELOG.md)

## 0.3.2 (2023-10-12)

### Only dependencies have been changed

- [@snack-uikit/button@0.13.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
- [@snack-uikit/droplist@0.9.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/droplist/CHANGELOG.md)
- [@snack-uikit/loaders@0.3.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/loaders/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.2.8](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.3.1 (2023-10-12)

### Only dependencies have been changed

- [@snack-uikit/droplist@0.9.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/droplist/CHANGELOG.md)
- [@snack-uikit/toggles@0.5.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.2.7](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

# 0.3.0 (2023-10-11)

### Features

- **FF-3392:** added csv,xlsx export functions ([d4f1a68](https://github.com/cloud-ru-tech/snack-uikit/commit/d4f1a68e0ec8c47ab3f3865c13846d4a097b386a))

## 0.2.3 (2023-10-11)

### Bug Fixes

- **FF-3409:** fix RowActionsCell button ([9704aba](https://github.com/cloud-ru-tech/snack-uikit/commit/9704aba6527f0e6fce0e90982aeca62adff57d34))

## 0.2.2 (2023-10-06)

### Only dependencies have been changed

- [@snack-uikit/button@0.12.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/button/CHANGELOG.md)
- [@snack-uikit/droplist@0.8.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/droplist/CHANGELOG.md)
- [@snack-uikit/loaders@0.3.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/loaders/CHANGELOG.md)
- [@snack-uikit/scroll@0.3.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/scroll/CHANGELOG.md)
- [@snack-uikit/toggles@0.4.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.2.5](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)
- [@snack-uikit/typography@0.4.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/typography/CHANGELOG.md)

## 0.2.1 (2023-10-05)

### Only dependencies have been changed

- [@snack-uikit/droplist@0.8.2](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/droplist/CHANGELOG.md)

# 0.2.0 (2023-10-05)

### Features

- **FF-3409:** replace ButtonLight to ButtonFunction ([e76a1db](https://github.com/cloud-ru-tech/snack-uikit/commit/e76a1dbf2e2db07a9197c413619e4df6f5976246))

## 0.1.2 (2023-09-28)

### Only dependencies have been changed

- [@snack-uikit/droplist@0.8.1](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/droplist/CHANGELOG.md)
- [@snack-uikit/icons@0.15.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/icons/CHANGELOG.md)
- [@snack-uikit/toggles@0.4.3](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/toggles/CHANGELOG.md)
- [@snack-uikit/truncate-string@0.2.4](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/truncate-string/CHANGELOG.md)

## 0.1.1 (2023-09-28)

### Only dependencies have been changed

- [@snack-uikit/droplist@0.8.0](https://github.com/cloud-ru-tech/snack-uikit/blob/master/packages/droplist/CHANGELOG.md)

# 0.1.0 (2023-09-25)

### Features

- **FF-2653:** add Table package ([29ec955](https://github.com/cloud-ru-tech/snack-uikit/commit/29ec9557279d88bf7bb281bbd524ba747d1b817b))

## CHANGELOG

### v0.0.0

- Initial version
`,Us="@snack-uikit/table",qs="0.36.19",Cr={name:Us,version:qs},Ws=`# Table

## Installation

\`npm i @snack-uikit/table\`

[Changelog](./CHANGELOG.md)

## TODO:

- multiple row selection with Shift key pressed

## Примечание

> Для оптимальной работы таблицы используйте \`useMemo\` для \`columnDefinitions\`
> или выносите их определение за компонент

## Example

\`\`\`typescript jsx
import { Table } from '@snack-uikit/table';

// ...

type TableData = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  status: string;
}

const columnDefinitions: ColumnDefinition<TableData>[] = [
  Table.getStatusColumnDef<Person>({
    accessorKey: 'status',
    mapStatusToAppearance: {
      pending: Table.statusAppearances.Blue,
      success: Table.statusAppearances.Green,
      // ... etc
    },
    header: 'Статус',
    renderDescription: (value: string) => t(translations.statuses[value]),
    size: 250,
  }),
  {
    accessorKey: 'id',
  },
  {
    // id, size - обязательны при передаче pinned
    id: 'firstName',
    size: 140,
    pinned: 'left',
    accessorKey: 'firstName',
    header: 'Имя',
    enableSorting: true,
    sortDescFirst: true,
  },
  {
    accessorKey: 'lastName',
    header: 'Фамилия',
    cell: ctx => <div className='custom'>{ctx.getValue<string>()}</div>,
    maxSize: 200,
    enableSorting: false,
  },
  {
    accessorKey: 'age',
    header: ctx => \`Можно добавить хедер так: \${ctx.column.id}\`,
    minSize: 40,
  },
  Table.getRowActionsColumnDef({
    pinned: true,
    actionsGenerator: () => [
      {
        option: 'Действие с иконкой',
        icon: <PlaceholderSVG />,
        onClick: handleRowActionClick,
      },
      {
        option: 'Другое действие',
        onClick: handleRowActionClick,
      },
    ],
  })
];

// ...

<Table
  columnDefinitions={columnDefinitions}
  data={data}
  rowSelection={{
    enable: true, // false выключает выбор всех строк (состояние disabled)
    // или можно передать функцию для вычисления
    // enable: row => !['Pending', 'Loading'].includes(row.original.status),
    onChange: handleRowSelection,
  }}
/>
\`\`\`

[//]: DOCUMENTATION_SECTION_START
[//]: THIS_SECTION_IS_AUTOGENERATED_PLEASE_DONT_EDIT_IT
## CopyCell
### Props
| name | type | default value | description |
|------|------|---------------|-------------|
| value | \`string \\| number\` | - |  |
## Table
Компонент таблицы
### Props
| name | type | default value | description |
|------|------|---------------|-------------|
| columnDefinitions* | \`ColumnDefinition<TData>[]\` | - | Определение внешнего вида и функционала колонок |
| data* | \`TData[]\` | - | Данные для отрисовки |
| keepPinnedRows | \`boolean\` | - | Параметр отвечает за отображение закрепленных строк на всех страницах таблицы |
| copyPinnedRows | \`boolean\` | - | Параметр отвечает за сохранение закрепленных строк в теле таблицы |
| enableSelectPinned | \`boolean\` | - | Параметр отвечает за чекбокс выбора закрепленных строк |
| sorting | \`{ initialState?: SortingState; state?: SortingState; onChange?(state: SortingState): void; }\` | - | Параметры отвечают за возможность сортировки, их стоит использовать если нужно отслеживать состояние <br> <strong>initialState</strong>: Начальное состояние сортировки <br> <strong>state</strong>: Состояние сортировки, жестко устанавливаемое снаружи <br> <strong>onChange</strong>: Колбэк на изменение сортировки |
| columnsSettings | \`{ enableDrag?: boolean; enableSettingsMenu?: boolean; }\` | - | Параметры отвечают за настройки колонок <br> <strong>enableDrag</strong>: Включение сортировки порядка столбцов вручную перетаскиванием <br> <strong>enableSettingsMenu</strong>: Включение настроек показа колонок <br> |
| expanding | \`{ getSubRows: (element: TData) => TData[]; expandingColumnDefinition: TreeColumnDefinitionProps<TData>; }\` | - | Параметр отвечает за общие настройки раскрывающихся строк |
| rowSelection | \`{ initialState?: RowSelectionState; state?: RowSelectionState; enable?: boolean \\| ((row: Row<TData>) => boolean); multiRow?: boolean; onChange?(state: RowSelectionState): void; }\` | - | Параметры отвечают за возможность выбора строк <br> <strong>initialState</strong>: Начальное состояние выбора строк <br> <strong>state</strong>: Состояние выбора строк, жестко устанавливаемое снаружи <br> <strong>enable</strong>: Колбэк определяющий можно ли выбрать строку <br> <strong>multiRow</strong>: Мульти-выбор строк (включен по-умолчанию, когда включается выбор) <br> <strong>onChange</strong>: Колбэк на выбор строк |
| search | \`{ initialState?: string; state?: string; placeholder?: string; loading?: boolean; onChange?(value: string): void; }\` | 'Search'<br> <strong>loading</strong>: Состояние загрузки в строке поиска <br> <strong>onChange</strong>: Колбэк на изменение данных в строке поиска | Параметры отвечают за глобальный поиск в таблице <br> <strong>initialState</strong>: Начальное состояние строки поиска <br> <strong>state</strong>: Состояние строки поиска, жестко устанавливаемое снаружи <br> <strong>placeholder</strong>: Placeholder строки поиска |
| enableFuzzySearch | \`boolean\` | - | Включить нечеткий поиск |
| rowAutoHeight | \`boolean\` | - |  |
| pageSize | \`number\` | 10 | Максимальное кол-во строк на страницу |
| onRowClick | \`RowClickHandler<TData>\` | - | Колбэк клика по строке |
| className | \`string\` | - | CSS-класс |
| loading | \`boolean\` | - | Состояние загрузки |
| onRefresh | \`() => void\` | - | Колбек обновления данных |
| outline | \`boolean\` | - | Внешний бордер для тулбара и таблицы |
| columnFilters | \`Omit<ChipChoiceRowProps<TFilters>, "size" \\| "data-test-id"> & { open?: boolean; onOpenChange?(isOpen: boolean): void; } & { initialOpen?: boolean; }\` | - | Фильтры |
| dataFiltered | \`boolean\` | - | Флаг, показывающий что данные были отфильтрованы при пустых данных |
| dataError | \`boolean\` | - | Флаг, показывающий что произошла ошибка запроса при пустых данных |
| noDataState | \`EmptyStateProps\` | - | Экран при отстутствии данных |
| noResultsState | \`EmptyStateProps\` | - | Экран при отстутствии результатов поиска или фильтров |
| errorDataState | \`EmptyStateProps\` | - | Экран при ошибке запроса |
| suppressToolbar | \`boolean\` | - | Отключение тулбара |
| suppressSearch | \`boolean\` | - | Отключение поиска |
| bulkActions | \`BulkAction[]\` | - | Список действия для массовых операций |
| moreActions | \`Action[]\` | - | Элементы выпадающего списка кнопки с действиями |
| toolbarAfter | \`ReactNode\` | - | Дополнительный слот в \`Toolbar\` после строки поиска |
| exportSettings | \`{ fileName: string; filterData?: boolean; exportToCSV?(args: ExportProps<TData>): void; exportToXLSX?(args: ExportProps<TData>): void; }\` | - | Настройки экспорта в тулбаре |
| manualSorting | \`boolean\` | - |  |
| manualFiltering | \`boolean\` | - |  |
| getRowId | \`(originalRow: TData, index: number, parent?: Row<TData>) => string\` | - | Дополнительная функция используется для получения уникального идентификатора для любой заданной строки |
| scrollRef | \`RefObject<HTMLElement>\` | - | Ссылка на элемент, обозначающий самый конец прокручиваемого списка |
| scrollContainerRef | \`RefObject<HTMLElement>\` | - | Ссылка на контейнер, который скроллится |
| rowPinning | \`Pick<RowPinningState, "top">\` | {     top: [],   } | Определение какие строки должны быть закреплены в таблице |
| savedState | \`{ id: string; filterQueryKey?: string; resize?: boolean; columnSettings?: boolean; }\` | - | Конфиг для сохранения состояния в localStorage. <br> Поле id должно быть уникальным для разных таблиц в рамках приложения. <br> Для корректной работы необходимо наличие id в конфиге columnDefinitions |
| pagination | \`{ state?: PaginationState; options?: number[]; optionsLabel?: string; onChange?(state: PaginationState): void; optionsRender?(value: string \\| number, idx: number): string \\| number; }\` | 'Rows volume: ' <br> <strong>onChange</strong>: Колбэк на изменение пагинации | Параметры отвечают за пагинацию в таблице <br> <strong>state</strong>: Состояние строки поиска, жестко устанавливаемое снаружи <br> <strong>options</strong>: Варианты в выпадающем селекторе для установки кол-ва строк на страницу <br> <strong>optionsLabel</strong>: Текст для селектора кол-ва строк на страницу |
| autoResetPageIndex | \`boolean\` | - | Автоматический сброс пагинации к первой странице при изменении данных или состояния (e.g фильтры, сортировки, и т.д) |
| pageCount | \`number\` | - | Кол-во страниц (используется для внешнего управления) |
| infiniteLoading | \`boolean\` | - | Режим работы "бесконечной" загрузки |
| suppressPagination | \`boolean\` | - | Отключение пагинации |
| manualPagination | \`boolean\` | - |  |
## Table.getStatusColumnDef
Вспомогательная функция для создания ячейки со статусом
### Props
| name | type | default value | description |
|------|------|---------------|-------------|
| mapStatusToAppearance* | \`MapStatusToAppearanceFnType\` | - | Маппинг значений статуса на цвета |
| accessorKey* | \`string\` | - | Имя ключа соответствующее полю в data |
| enableSorting | \`boolean\` | true | Включение/выключение сортировки |
| renderDescription | \`(cellValue: string, row: TData) => string\` | - | Функция для отрисовки текста, если не передана, то будет отрисован только индикатор статуса |
| size | \`number\` | - | Размер ячейки |
| minSize | \`number\` | - |  |
| maxSize | \`number\` | - |  |
| header | \`string \\| (string & ReactElement<any, string \\| JSXElementConstructor<any>>) \\| (string & Iterable<ReactNode>) \\| ... 9 more ... \\| (((props: HeaderContext<...>) => any) & ((ctx: HeaderContext<...>) => ReactNode))\` | - | Заголовок колонки |
| enableResizing | \`boolean\` | - | Включение/выключение ресайза колонки |
## Table.getRowActionsColumnDef
Вспомогательная функция для создания ячейки с дополнительными действиями у строки
### Props
| name | type | default value | description |
|------|------|---------------|-------------|
| actionsGenerator* | \`ActionsGenerator<TData>\` | - | Действия для строки |
| pinned | \`boolean\` | - | Закрепление колонки справа в таблице |
## ServerTable
### Props
| name | type | default value | description |
|------|------|---------------|-------------|
| onChangePage* | \`(offset: number, limit: number) => void\` | - |  |
| columnDefinitions* | \`ColumnDefinition<TData>[]\` | - | Определение внешнего вида и функционала колонок |
| className | \`string\` | - | CSS-класс |
| onRefresh | \`() => void\` | - | Колбек обновления данных |
| moreActions | \`Action[]\` | - | Элементы выпадающего списка кнопки с действиями |
| bulkActions | \`BulkAction[]\` | - | Список действия для массовых операций |
| keepPinnedRows | \`boolean\` | false | Параметр отвечает за отображение закрепленных строк на всех страницах таблицы |
| copyPinnedRows | \`boolean\` | false | Параметр отвечает за сохранение закрепленных строк в теле таблицы |
| enableSelectPinned | \`boolean\` | - | Параметр отвечает за чекбокс выбора закрепленных строк |
| sorting | \`{ initialState?: SortingState; state?: SortingState; onChange?(state: SortingState): void; }\` | - | Параметры отвечают за возможность сортировки, их стоит использовать если нужно отслеживать состояние <br> <strong>initialState</strong>: Начальное состояние сортировки <br> <strong>state</strong>: Состояние сортировки, жестко устанавливаемое снаружи <br> <strong>onChange</strong>: Колбэк на изменение сортировки |
| columnsSettings | \`{ enableDrag?: boolean; enableSettingsMenu?: boolean; }\` | - | Параметры отвечают за настройки колонок <br> <strong>enableDrag</strong>: Включение сортировки порядка столбцов вручную перетаскиванием <br> <strong>enableSettingsMenu</strong>: Включение настроек показа колонок <br> |
| expanding | \`{ getSubRows: (element: TData) => TData[]; expandingColumnDefinition: TreeColumnDefinitionProps<TData>; }\` | - | Параметр отвечает за общие настройки раскрывающихся строк |
| rowSelection | \`{ initialState?: RowSelectionState; state?: RowSelectionState; enable?: boolean \\| ((row: Row<TData>) => boolean); multiRow?: boolean; onChange?(state: RowSelectionState): void; }\` | - | Параметры отвечают за возможность выбора строк <br> <strong>initialState</strong>: Начальное состояние выбора строк <br> <strong>state</strong>: Состояние выбора строк, жестко устанавливаемое снаружи <br> <strong>enable</strong>: Колбэк определяющий можно ли выбрать строку <br> <strong>multiRow</strong>: Мульти-выбор строк (включен по-умолчанию, когда включается выбор) <br> <strong>onChange</strong>: Колбэк на выбор строк |
| enableFuzzySearch | \`boolean\` | - | Включить нечеткий поиск |
| rowAutoHeight | \`boolean\` | - |  |
| onRowClick | \`RowClickHandler<TData>\` | - | Колбэк клика по строке |
| loading | \`boolean\` | - | Состояние загрузки |
| outline | \`boolean\` | - | Внешний бордер для тулбара и таблицы |
| columnFilters | \`Omit<ChipChoiceRowProps<TFilters>, "size" \\| "data-test-id"> & { open?: boolean; onOpenChange?(isOpen: boolean): void; } & { initialOpen?: boolean; }\` | - | Фильтры |
| dataFiltered | \`boolean\` | - | Флаг, показывающий что данные были отфильтрованы при пустых данных |
| dataError | \`boolean\` | - | Флаг, показывающий что произошла ошибка запроса при пустых данных |
| noDataState | \`EmptyStateProps\` | - | Экран при отстутствии данных |
| noResultsState | \`EmptyStateProps\` | - | Экран при отстутствии результатов поиска или фильтров |
| errorDataState | \`EmptyStateProps\` | - | Экран при ошибке запроса |
| suppressToolbar | \`boolean\` | - | Отключение тулбара |
| suppressSearch | \`boolean\` | - | Отключение поиска |
| toolbarAfter | \`ReactNode\` | - | Дополнительный слот в \`Toolbar\` после строки поиска |
| exportSettings | \`{ fileName: string; filterData?: boolean; exportToCSV?(args: ExportProps<TData>): void; exportToXLSX?(args: ExportProps<TData>): void; }\` | - | Настройки экспорта в тулбаре |
| manualSorting | \`boolean\` | true |  |
| manualFiltering | \`boolean\` | true |  |
| getRowId | \`(originalRow: TData, index: number, parent?: Row<TData>) => string\` | - | Дополнительная функция используется для получения уникального идентификатора для любой заданной строки |
| scrollRef | \`RefObject<HTMLElement>\` | - | Ссылка на элемент, обозначающий самый конец прокручиваемого списка |
| scrollContainerRef | \`RefObject<HTMLElement>\` | - | Ссылка на контейнер, который скроллится |
| rowPinning | \`Pick<RowPinningState, "top">\` | - | Определение какие строки должны быть закреплены в таблице |
| savedState | \`{ id: string; filterQueryKey?: string; resize?: boolean; columnSettings?: boolean; }\` | - | Конфиг для сохранения состояния в localStorage. <br> Поле id должно быть уникальным для разных таблиц в рамках приложения. <br> Для корректной работы необходимо наличие id в конфиге columnDefinitions |
| autoResetPageIndex | \`boolean\` | - | Автоматический сброс пагинации к первой странице при изменении данных или состояния (e.g фильтры, сортировки, и т.д) |
| suppressPagination | \`boolean\` | - | Отключение пагинации |
| manualPagination | \`boolean\` | true |  |
| infiniteLoading | \`never\` | - |  |
| items | \`TData[]\` | - | Данные для отрисовки |
| total | \`number\` | 10 | Общее кол-во строк |
| limit | \`number\` | 10 | Кол-во строк на страницу |
| offset | \`number\` | - | Смещение |
| search | \`{ initialValue?: string; state: string; placeholder?: string; loading?: boolean; onChange(value: string): void; }\` | 'Search...'<br> <strong>loading</strong>: Состояние загрузки в строке поиска <br> <strong>onChange</strong>: Колбэк на изменение данных в строке поиска | Параметры отвечают за глобальный поиск в таблице <br> <strong>initialState</strong>: Начальное состояние строки поиска <br> <strong>state</strong>: Состояние строки поиска, жестко устанавливаемое снаружи <br> <strong>placeholder</strong>: Placeholder строки поиска |
| pagination | \`{ options?: number[]; optionsLabel?: string; }\` | 'Rows volume' <br> | Параметры отвечают за пагинацию в таблице <br> <strong>options</strong>: Варианты в выпадающем селекторе для установки кол-ва строк на страницу<br> <strong>optionsLabel</strong>: Текст для селектора кол-ва строк на страницу |
## ServerTable.getRowActionsColumnDef
Вспомогательная функция для создания ячейки с дополнительными действиями у строки
### Props
| name | type | default value | description |
|------|------|---------------|-------------|
| actionsGenerator* | \`ActionsGenerator<TData>\` | - | Действия для строки |
| pinned | \`boolean\` | - | Закрепление колонки справа в таблице |
## ServerTable.getStatusColumnDef
Вспомогательная функция для создания ячейки со статусом
### Props
| name | type | default value | description |
|------|------|---------------|-------------|
| mapStatusToAppearance* | \`MapStatusToAppearanceFnType\` | - | Маппинг значений статуса на цвета |
| accessorKey* | \`string\` | - | Имя ключа соответствующее полю в data |
| enableSorting | \`boolean\` | true | Включение/выключение сортировки |
| renderDescription | \`(cellValue: string, row: TData) => string\` | - | Функция для отрисовки текста, если не передана, то будет отрисован только индикатор статуса |
| size | \`number\` | - | Размер ячейки |
| minSize | \`number\` | - |  |
| maxSize | \`number\` | - |  |
| header | \`string \\| (string & ReactElement<any, string \\| JSXElementConstructor<any>>) \\| (string & Iterable<ReactNode>) \\| ... 9 more ... \\| (((props: HeaderContext<...>) => any) & ((ctx: HeaderContext<...>) => ReactNode))\` | - | Заголовок колонки |
| enableResizing | \`boolean\` | - | Включение/выключение ресайза колонки |
## exportToCSV
### Props
| name | type | default value | description |
|------|------|---------------|-------------|
| columnDefinitions* | \`ColumnDefinition<TData>[]\` | - |  |
| data* | \`TData[]\` | - |  |
| fileName | \`string\` | Table |  |
## exportToXLSX
### Props
| name | type | default value | description |
|------|------|---------------|-------------|
| columnDefinitions* | \`ColumnDefinition<TData>[]\` | - |  |
| data* | \`TData[]\` | - |  |
| fileName | \`string\` | Table |  |


[//]: DOCUMENTATION_SECTION_END
`;function Xs(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return y.useMemo(()=>i=>{n.forEach(a=>a(i))},n)}const Vi=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Dn(e){const n=Object.prototype.toString.call(e);return n==="[object Window]"||n==="[object global]"}function Ka(e){return"nodeType"in e}function We(e){var n,t;return e?Dn(e)?e:Ka(e)&&(n=(t=e.ownerDocument)==null?void 0:t.defaultView)!=null?n:window:window}function Ya(e){const{Document:n}=We(e);return e instanceof n}function ai(e){return Dn(e)?!1:e instanceof We(e).HTMLElement}function Do(e){return e instanceof We(e).SVGElement}function Nn(e){return e?Dn(e)?e.document:Ka(e)?Ya(e)?e:ai(e)||Do(e)?e.ownerDocument:document:document:document}const Nt=Vi?y.useLayoutEffect:y.useEffect;function Ja(e){const n=y.useRef(e);return Nt(()=>{n.current=e}),y.useCallback(function(){for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return n.current==null?void 0:n.current(...i)},[])}function Ks(){const e=y.useRef(null),n=y.useCallback((i,a)=>{e.current=setInterval(i,a)},[]),t=y.useCallback(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[]);return[n,t]}function Yn(e,n){n===void 0&&(n=[e]);const t=y.useRef(e);return Nt(()=>{t.current!==e&&(t.current=e)},n),t}function ri(e,n){const t=y.useRef();return y.useMemo(()=>{const i=e(t.current);return t.current=i,i},[...n])}function wi(e){const n=Ja(e),t=y.useRef(null),i=y.useCallback(a=>{a!==t.current&&(n==null||n(a,t.current)),t.current=a},[]);return[t,i]}function ba(e){const n=y.useRef();return y.useEffect(()=>{n.current=e},[e]),n.current}let Xi={};function oi(e,n){return y.useMemo(()=>{if(n)return n;const t=Xi[e]==null?0:Xi[e]+1;return Xi[e]=t,e+"-"+t},[e,n])}function No(e){return function(n){for(var t=arguments.length,i=new Array(t>1?t-1:0),a=1;a<t;a++)i[a-1]=arguments[a];return i.reduce((r,o)=>{const u=Object.entries(o);for(const[s,c]of u){const l=r[s];l!=null&&(r[s]=l+e*c)}return r},{...n})}}const An=No(1),xi=No(-1);function Ys(e){return"clientX"in e&&"clientY"in e}function Za(e){if(!e)return!1;const{KeyboardEvent:n}=We(e.target);return n&&e instanceof n}function Js(e){if(!e)return!1;const{TouchEvent:n}=We(e.target);return n&&e instanceof n}function ka(e){if(Js(e)){if(e.touches&&e.touches.length){const{clientX:n,clientY:t}=e.touches[0];return{x:n,y:t}}else if(e.changedTouches&&e.changedTouches.length){const{clientX:n,clientY:t}=e.changedTouches[0];return{x:n,y:t}}}return Ys(e)?{x:e.clientX,y:e.clientY}:null}const Jn=Object.freeze({Translate:{toString(e){if(!e)return;const{x:n,y:t}=e;return"translate3d("+(n?Math.round(n):0)+"px, "+(t?Math.round(t):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:n,scaleY:t}=e;return"scaleX("+n+") scaleY("+t+")"}},Transform:{toString(e){if(e)return[Jn.Translate.toString(e),Jn.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:n,duration:t,easing:i}=e;return n+" "+t+"ms "+i}}}),yr="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function Zs(e){return e.matches(yr)?e:e.querySelector(yr)}const Qs={display:"none"};function ec(e){let{id:n,value:t}=e;return Ue.createElement("div",{id:n,style:Qs},t)}function tc(e){let{id:n,announcement:t,ariaLiveType:i="assertive"}=e;const a={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return Ue.createElement("div",{id:n,style:a,role:"status","aria-live":i,"aria-atomic":!0},t)}function nc(){const[e,n]=y.useState("");return{announce:y.useCallback(i=>{i!=null&&n(i)},[]),announcement:e}}const Ro=y.createContext(null);function ic(e){const n=y.useContext(Ro);y.useEffect(()=>{if(!n)throw new Error("useDndMonitor must be used within a children of <DndContext>");return n(e)},[e,n])}function ac(){const[e]=y.useState(()=>new Set),n=y.useCallback(i=>(e.add(i),()=>e.delete(i)),[e]);return[y.useCallback(i=>{let{type:a,event:r}=i;e.forEach(o=>{var u;return(u=o[a])==null?void 0:u.call(o,r)})},[e]),n]}const rc={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},oc={onDragStart(e){let{active:n}=e;return"Picked up draggable item "+n.id+"."},onDragOver(e){let{active:n,over:t}=e;return t?"Draggable item "+n.id+" was moved over droppable area "+t.id+".":"Draggable item "+n.id+" is no longer over a droppable area."},onDragEnd(e){let{active:n,over:t}=e;return t?"Draggable item "+n.id+" was dropped over droppable area "+t.id:"Draggable item "+n.id+" was dropped."},onDragCancel(e){let{active:n}=e;return"Dragging was cancelled. Draggable item "+n.id+" was dropped."}};function uc(e){let{announcements:n=oc,container:t,hiddenTextDescribedById:i,screenReaderInstructions:a=rc}=e;const{announce:r,announcement:o}=nc(),u=oi("DndLiveRegion"),[s,c]=y.useState(!1);if(y.useEffect(()=>{c(!0)},[]),ic(y.useMemo(()=>({onDragStart(g){let{active:b}=g;r(n.onDragStart({active:b}))},onDragMove(g){let{active:b,over:h}=g;n.onDragMove&&r(n.onDragMove({active:b,over:h}))},onDragOver(g){let{active:b,over:h}=g;r(n.onDragOver({active:b,over:h}))},onDragEnd(g){let{active:b,over:h}=g;r(n.onDragEnd({active:b,over:h}))},onDragCancel(g){let{active:b,over:h}=g;r(n.onDragCancel({active:b,over:h}))}}),[r,n])),!s)return null;const l=Ue.createElement(Ue.Fragment,null,Ue.createElement(ec,{id:i,value:a.draggable}),Ue.createElement(tc,{id:u,announcement:o}));return t?Pn.createPortal(l,t):l}var ye;(function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"})(ye||(ye={}));function Ai(){}function Ki(e,n){return y.useMemo(()=>({sensor:e,options:n??{}}),[e,n])}function sc(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return y.useMemo(()=>[...n].filter(i=>i!=null),[...n])}const _t=Object.freeze({x:0,y:0});function cc(e,n){return Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2))}function lc(e,n){let{data:{value:t}}=e,{data:{value:i}}=n;return t-i}function dc(e,n){let{data:{value:t}}=e,{data:{value:i}}=n;return i-t}function hc(e,n){if(!e||e.length===0)return null;const[t]=e;return t[n]}function Er(e,n,t){return n===void 0&&(n=e.left),t===void 0&&(t=e.top),{x:n+e.width*.5,y:t+e.height*.5}}const gc=e=>{let{collisionRect:n,droppableRects:t,droppableContainers:i}=e;const a=Er(n,n.left,n.top),r=[];for(const o of i){const{id:u}=o,s=t.get(u);if(s){const c=cc(Er(s),a);r.push({id:u,data:{droppableContainer:o,value:c}})}}return r.sort(lc)};function fc(e,n){const t=Math.max(n.top,e.top),i=Math.max(n.left,e.left),a=Math.min(n.left+n.width,e.left+e.width),r=Math.min(n.top+n.height,e.top+e.height),o=a-i,u=r-t;if(i<a&&t<r){const s=n.width*n.height,c=e.width*e.height,l=o*u,g=l/(s+c-l);return Number(g.toFixed(4))}return 0}const pc=e=>{let{collisionRect:n,droppableRects:t,droppableContainers:i}=e;const a=[];for(const r of i){const{id:o}=r,u=t.get(o);if(u){const s=fc(u,n);s>0&&a.push({id:o,data:{droppableContainer:r,value:s}})}}return a.sort(dc)};function mc(e,n,t){return{...e,scaleX:n&&t?n.width/t.width:1,scaleY:n&&t?n.height/t.height:1}}function Lo(e,n){return e&&n?{x:e.left-n.left,y:e.top-n.top}:_t}function bc(e){return function(t){for(var i=arguments.length,a=new Array(i>1?i-1:0),r=1;r<i;r++)a[r-1]=arguments[r];return a.reduce((o,u)=>({...o,top:o.top+e*u.y,bottom:o.bottom+e*u.y,left:o.left+e*u.x,right:o.right+e*u.x}),{...t})}}const kc=bc(1);function vc(e){if(e.startsWith("matrix3d(")){const n=e.slice(9,-1).split(/, /);return{x:+n[12],y:+n[13],scaleX:+n[0],scaleY:+n[5]}}else if(e.startsWith("matrix(")){const n=e.slice(7,-1).split(/, /);return{x:+n[4],y:+n[5],scaleX:+n[0],scaleY:+n[3]}}return null}function Cc(e,n,t){const i=vc(n);if(!i)return e;const{scaleX:a,scaleY:r,x:o,y:u}=i,s=e.left-o-(1-a)*parseFloat(t),c=e.top-u-(1-r)*parseFloat(t.slice(t.indexOf(" ")+1)),l=a?e.width/a:e.width,g=r?e.height/r:e.height;return{width:l,height:g,top:c,right:s+l,bottom:c+g,left:s}}const yc={ignoreTransform:!1};function Rn(e,n){n===void 0&&(n=yc);let t=e.getBoundingClientRect();if(n.ignoreTransform){const{transform:c,transformOrigin:l}=We(e).getComputedStyle(e);c&&(t=Cc(t,c,l))}const{top:i,left:a,width:r,height:o,bottom:u,right:s}=t;return{top:i,left:a,width:r,height:o,bottom:u,right:s}}function Sr(e){return Rn(e,{ignoreTransform:!0})}function Ec(e){const n=e.innerWidth,t=e.innerHeight;return{top:0,left:0,right:n,bottom:t,width:n,height:t}}function Sc(e,n){return n===void 0&&(n=We(e).getComputedStyle(e)),n.position==="fixed"}function wc(e,n){n===void 0&&(n=We(e).getComputedStyle(e));const t=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(a=>{const r=n[a];return typeof r=="string"?t.test(r):!1})}function Qa(e,n){const t=[];function i(a){if(n!=null&&t.length>=n||!a)return t;if(Ya(a)&&a.scrollingElement!=null&&!t.includes(a.scrollingElement))return t.push(a.scrollingElement),t;if(!ai(a)||Do(a)||t.includes(a))return t;const r=We(e).getComputedStyle(a);return a!==e&&wc(a,r)&&t.push(a),Sc(a,r)?t:i(a.parentNode)}return e?i(e):t}function Ho(e){const[n]=Qa(e,1);return n??null}function Yi(e){return!Vi||!e?null:Dn(e)?e:Ka(e)?Ya(e)||e===Nn(e).scrollingElement?window:ai(e)?e:null:null}function To(e){return Dn(e)?e.scrollX:e.scrollLeft}function Io(e){return Dn(e)?e.scrollY:e.scrollTop}function va(e){return{x:To(e),y:Io(e)}}var we;(function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"})(we||(we={}));function Mo(e){return!Vi||!e?!1:e===document.scrollingElement}function Po(e){const n={x:0,y:0},t=Mo(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},i={x:e.scrollWidth-t.width,y:e.scrollHeight-t.height},a=e.scrollTop<=n.y,r=e.scrollLeft<=n.x,o=e.scrollTop>=i.y,u=e.scrollLeft>=i.x;return{isTop:a,isLeft:r,isBottom:o,isRight:u,maxScroll:i,minScroll:n}}const xc={x:.2,y:.2};function Ac(e,n,t,i,a){let{top:r,left:o,right:u,bottom:s}=t;i===void 0&&(i=10),a===void 0&&(a=xc);const{isTop:c,isBottom:l,isLeft:g,isRight:b}=Po(e),h={x:0,y:0},E={x:0,y:0},C={height:n.height*a.y,width:n.width*a.x};return!c&&r<=n.top+C.height?(h.y=we.Backward,E.y=i*Math.abs((n.top+C.height-r)/C.height)):!l&&s>=n.bottom-C.height&&(h.y=we.Forward,E.y=i*Math.abs((n.bottom-C.height-s)/C.height)),!b&&u>=n.right-C.width?(h.x=we.Forward,E.x=i*Math.abs((n.right-C.width-u)/C.width)):!g&&o<=n.left+C.width&&(h.x=we.Backward,E.x=i*Math.abs((n.left+C.width-o)/C.width)),{direction:h,speed:E}}function _c(e){if(e===document.scrollingElement){const{innerWidth:r,innerHeight:o}=window;return{top:0,left:0,right:r,bottom:o,width:r,height:o}}const{top:n,left:t,right:i,bottom:a}=e.getBoundingClientRect();return{top:n,left:t,right:i,bottom:a,width:e.clientWidth,height:e.clientHeight}}function Bo(e){return e.reduce((n,t)=>An(n,va(t)),_t)}function Gc(e){return e.reduce((n,t)=>n+To(t),0)}function Oc(e){return e.reduce((n,t)=>n+Io(t),0)}function Fc(e,n){if(n===void 0&&(n=Rn),!e)return;const{top:t,left:i,bottom:a,right:r}=n(e);Ho(e)&&(a<=0||r<=0||t>=window.innerHeight||i>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}const Dc=[["x",["left","right"],Gc],["y",["top","bottom"],Oc]];class er{constructor(n,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const i=Qa(t),a=Bo(i);this.rect={...n},this.width=n.width,this.height=n.height;for(const[r,o,u]of Dc)for(const s of o)Object.defineProperty(this,s,{get:()=>{const c=u(i),l=a[r]-c;return this.rect[s]+l},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class Vn{constructor(n){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(t=>{var i;return(i=this.target)==null?void 0:i.removeEventListener(...t)})},this.target=n}add(n,t,i){var a;(a=this.target)==null||a.addEventListener(n,t,i),this.listeners.push([n,t,i])}}function Nc(e){const{EventTarget:n}=We(e);return e instanceof n?e:Nn(e)}function Ji(e,n){const t=Math.abs(e.x),i=Math.abs(e.y);return typeof n=="number"?Math.sqrt(t**2+i**2)>n:"x"in n&&"y"in n?t>n.x&&i>n.y:"x"in n?t>n.x:"y"in n?i>n.y:!1}var dt;(function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"})(dt||(dt={}));function wr(e){e.preventDefault()}function Rc(e){e.stopPropagation()}var ne;(function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter",e.Tab="Tab"})(ne||(ne={}));const Vo={start:[ne.Space,ne.Enter],cancel:[ne.Esc],end:[ne.Space,ne.Enter,ne.Tab]},Lc=(e,n)=>{let{currentCoordinates:t}=n;switch(e.code){case ne.Right:return{...t,x:t.x+25};case ne.Left:return{...t,x:t.x-25};case ne.Down:return{...t,y:t.y+25};case ne.Up:return{...t,y:t.y-25}}};class tr{constructor(n){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=n;const{event:{target:t}}=n;this.props=n,this.listeners=new Vn(Nn(t)),this.windowListeners=new Vn(We(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(dt.Resize,this.handleCancel),this.windowListeners.add(dt.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(dt.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:n,onStart:t}=this.props,i=n.node.current;i&&Fc(i),t(_t)}handleKeyDown(n){if(Za(n)){const{active:t,context:i,options:a}=this.props,{keyboardCodes:r=Vo,coordinateGetter:o=Lc,scrollBehavior:u="smooth"}=a,{code:s}=n;if(r.end.includes(s)){this.handleEnd(n);return}if(r.cancel.includes(s)){this.handleCancel(n);return}const{collisionRect:c}=i.current,l=c?{x:c.left,y:c.top}:_t;this.referenceCoordinates||(this.referenceCoordinates=l);const g=o(n,{active:t,context:i.current,currentCoordinates:l});if(g){const b=xi(g,l),h={x:0,y:0},{scrollableAncestors:E}=i.current;for(const C of E){const w=n.code,{isTop:S,isRight:D,isLeft:N,isBottom:V,maxScroll:L,minScroll:q}=Po(C),O=_c(C),P={x:Math.min(w===ne.Right?O.right-O.width/2:O.right,Math.max(w===ne.Right?O.left:O.left+O.width/2,g.x)),y:Math.min(w===ne.Down?O.bottom-O.height/2:O.bottom,Math.max(w===ne.Down?O.top:O.top+O.height/2,g.y))},H=w===ne.Right&&!D||w===ne.Left&&!N,j=w===ne.Down&&!V||w===ne.Up&&!S;if(H&&P.x!==g.x){const M=C.scrollLeft+b.x,X=w===ne.Right&&M<=L.x||w===ne.Left&&M>=q.x;if(X&&!b.y){C.scrollTo({left:M,behavior:u});return}X?h.x=C.scrollLeft-M:h.x=w===ne.Right?C.scrollLeft-L.x:C.scrollLeft-q.x,h.x&&C.scrollBy({left:-h.x,behavior:u});break}else if(j&&P.y!==g.y){const M=C.scrollTop+b.y,X=w===ne.Down&&M<=L.y||w===ne.Up&&M>=q.y;if(X&&!b.x){C.scrollTo({top:M,behavior:u});return}X?h.y=C.scrollTop-M:h.y=w===ne.Down?C.scrollTop-L.y:C.scrollTop-q.y,h.y&&C.scrollBy({top:-h.y,behavior:u});break}}this.handleMove(n,An(xi(g,this.referenceCoordinates),h))}}}handleMove(n,t){const{onMove:i}=this.props;n.preventDefault(),i(t)}handleEnd(n){const{onEnd:t}=this.props;n.preventDefault(),this.detach(),t()}handleCancel(n){const{onCancel:t}=this.props;n.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}tr.activators=[{eventName:"onKeyDown",handler:(e,n,t)=>{let{keyboardCodes:i=Vo,onActivation:a}=n,{active:r}=t;const{code:o}=e.nativeEvent;if(i.start.includes(o)){const u=r.activatorNode.current;return u&&e.target!==u?!1:(e.preventDefault(),a==null||a({event:e.nativeEvent}),!0)}return!1}}];function xr(e){return!!(e&&"distance"in e)}function Ar(e){return!!(e&&"delay"in e)}class nr{constructor(n,t,i){var a;i===void 0&&(i=Nc(n.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=n,this.events=t;const{event:r}=n,{target:o}=r;this.props=n,this.events=t,this.document=Nn(o),this.documentListeners=new Vn(this.document),this.listeners=new Vn(i),this.windowListeners=new Vn(We(o)),this.initialCoordinates=(a=ka(r))!=null?a:_t,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:n,props:{options:{activationConstraint:t,bypassActivationConstraint:i}}}=this;if(this.listeners.add(n.move.name,this.handleMove,{passive:!1}),this.listeners.add(n.end.name,this.handleEnd),n.cancel&&this.listeners.add(n.cancel.name,this.handleCancel),this.windowListeners.add(dt.Resize,this.handleCancel),this.windowListeners.add(dt.DragStart,wr),this.windowListeners.add(dt.VisibilityChange,this.handleCancel),this.windowListeners.add(dt.ContextMenu,wr),this.documentListeners.add(dt.Keydown,this.handleKeydown),t){if(i!=null&&i({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(Ar(t)){this.timeoutId=setTimeout(this.handleStart,t.delay),this.handlePending(t);return}if(xr(t)){this.handlePending(t);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(n,t){const{active:i,onPending:a}=this.props;a(i,n,this.initialCoordinates,t)}handleStart(){const{initialCoordinates:n}=this,{onStart:t}=this.props;n&&(this.activated=!0,this.documentListeners.add(dt.Click,Rc,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(dt.SelectionChange,this.removeTextSelection),t(n))}handleMove(n){var t;const{activated:i,initialCoordinates:a,props:r}=this,{onMove:o,options:{activationConstraint:u}}=r;if(!a)return;const s=(t=ka(n))!=null?t:_t,c=xi(a,s);if(!i&&u){if(xr(u)){if(u.tolerance!=null&&Ji(c,u.tolerance))return this.handleCancel();if(Ji(c,u.distance))return this.handleStart()}if(Ar(u)&&Ji(c,u.tolerance))return this.handleCancel();this.handlePending(u,c);return}n.cancelable&&n.preventDefault(),o(s)}handleEnd(){const{onAbort:n,onEnd:t}=this.props;this.detach(),this.activated||n(this.props.active),t()}handleCancel(){const{onAbort:n,onCancel:t}=this.props;this.detach(),this.activated||n(this.props.active),t()}handleKeydown(n){n.code===ne.Esc&&this.handleCancel()}removeTextSelection(){var n;(n=this.document.getSelection())==null||n.removeAllRanges()}}const Hc={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}};class zo extends nr{constructor(n){const{event:t}=n,i=Nn(t.target);super(n,Hc,i)}}zo.activators=[{eventName:"onPointerDown",handler:(e,n)=>{let{nativeEvent:t}=e,{onActivation:i}=n;return!t.isPrimary||t.button!==0?!1:(i==null||i({event:t}),!0)}}];const Tc={move:{name:"mousemove"},end:{name:"mouseup"}};var Ca;(function(e){e[e.RightClick=2]="RightClick"})(Ca||(Ca={}));class $o extends nr{constructor(n){super(n,Tc,Nn(n.event.target))}}$o.activators=[{eventName:"onMouseDown",handler:(e,n)=>{let{nativeEvent:t}=e,{onActivation:i}=n;return t.button===Ca.RightClick?!1:(i==null||i({event:t}),!0)}}];const Zi={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}};class jo extends nr{constructor(n){super(n,Zi)}static setup(){return window.addEventListener(Zi.move.name,n,{capture:!1,passive:!1}),function(){window.removeEventListener(Zi.move.name,n)};function n(){}}}jo.activators=[{eventName:"onTouchStart",handler:(e,n)=>{let{nativeEvent:t}=e,{onActivation:i}=n;const{touches:a}=t;return a.length>1?!1:(i==null||i({event:t}),!0)}}];var zn;(function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"})(zn||(zn={}));var _i;(function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"})(_i||(_i={}));function Ic(e){let{acceleration:n,activator:t=zn.Pointer,canScroll:i,draggingRect:a,enabled:r,interval:o=5,order:u=_i.TreeOrder,pointerCoordinates:s,scrollableAncestors:c,scrollableAncestorRects:l,delta:g,threshold:b}=e;const h=Pc({delta:g,disabled:!r}),[E,C]=Ks(),w=y.useRef({x:0,y:0}),S=y.useRef({x:0,y:0}),D=y.useMemo(()=>{switch(t){case zn.Pointer:return s?{top:s.y,bottom:s.y,left:s.x,right:s.x}:null;case zn.DraggableRect:return a}},[t,a,s]),N=y.useRef(null),V=y.useCallback(()=>{const q=N.current;if(!q)return;const O=w.current.x*S.current.x,P=w.current.y*S.current.y;q.scrollBy(O,P)},[]),L=y.useMemo(()=>u===_i.TreeOrder?[...c].reverse():c,[u,c]);y.useEffect(()=>{if(!r||!c.length||!D){C();return}for(const q of L){if((i==null?void 0:i(q))===!1)continue;const O=c.indexOf(q),P=l[O];if(!P)continue;const{direction:H,speed:j}=Ac(q,P,D,n,b);for(const M of["x","y"])h[M][H[M]]||(j[M]=0,H[M]=0);if(j.x>0||j.y>0){C(),N.current=q,E(V,o),w.current=j,S.current=H;return}}w.current={x:0,y:0},S.current={x:0,y:0},C()},[n,V,i,C,r,o,JSON.stringify(D),JSON.stringify(h),E,c,L,l,JSON.stringify(b)])}const Mc={x:{[we.Backward]:!1,[we.Forward]:!1},y:{[we.Backward]:!1,[we.Forward]:!1}};function Pc(e){let{delta:n,disabled:t}=e;const i=ba(n);return ri(a=>{if(t||!i||!a)return Mc;const r={x:Math.sign(n.x-i.x),y:Math.sign(n.y-i.y)};return{x:{[we.Backward]:a.x[we.Backward]||r.x===-1,[we.Forward]:a.x[we.Forward]||r.x===1},y:{[we.Backward]:a.y[we.Backward]||r.y===-1,[we.Forward]:a.y[we.Forward]||r.y===1}}},[t,n,i])}function Bc(e,n){const t=n!=null?e.get(n):void 0,i=t?t.node.current:null;return ri(a=>{var r;return n==null?null:(r=i??a)!=null?r:null},[i,n])}function Vc(e,n){return y.useMemo(()=>e.reduce((t,i)=>{const{sensor:a}=i,r=a.activators.map(o=>({eventName:o.eventName,handler:n(o.handler,i)}));return[...t,...r]},[]),[e,n])}var Zn;(function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"})(Zn||(Zn={}));var ya;(function(e){e.Optimized="optimized"})(ya||(ya={}));const _r=new Map;function zc(e,n){let{dragging:t,dependencies:i,config:a}=n;const[r,o]=y.useState(null),{frequency:u,measure:s,strategy:c}=a,l=y.useRef(e),g=w(),b=Yn(g),h=y.useCallback(function(S){S===void 0&&(S=[]),!b.current&&o(D=>D===null?S:D.concat(S.filter(N=>!D.includes(N))))},[b]),E=y.useRef(null),C=ri(S=>{if(g&&!t)return _r;if(!S||S===_r||l.current!==e||r!=null){const D=new Map;for(let N of e){if(!N)continue;if(r&&r.length>0&&!r.includes(N.id)&&N.rect.current){D.set(N.id,N.rect.current);continue}const V=N.node.current,L=V?new er(s(V),V):null;N.rect.current=L,L&&D.set(N.id,L)}return D}return S},[e,r,t,g,s]);return y.useEffect(()=>{l.current=e},[e]),y.useEffect(()=>{g||h()},[t,g]),y.useEffect(()=>{r&&r.length>0&&o(null)},[JSON.stringify(r)]),y.useEffect(()=>{g||typeof u!="number"||E.current!==null||(E.current=setTimeout(()=>{h(),E.current=null},u))},[u,g,h,...i]),{droppableRects:C,measureDroppableContainers:h,measuringScheduled:r!=null};function w(){switch(c){case Zn.Always:return!1;case Zn.BeforeDragging:return t;default:return!t}}}function Uo(e,n){return ri(t=>e?t||(typeof n=="function"?n(e):e):null,[n,e])}function $c(e,n){return Uo(e,n)}function jc(e){let{callback:n,disabled:t}=e;const i=Ja(n),a=y.useMemo(()=>{if(t||typeof window>"u"||typeof window.MutationObserver>"u")return;const{MutationObserver:r}=window;return new r(i)},[i,t]);return y.useEffect(()=>()=>a==null?void 0:a.disconnect(),[a]),a}function zi(e){let{callback:n,disabled:t}=e;const i=Ja(n),a=y.useMemo(()=>{if(t||typeof window>"u"||typeof window.ResizeObserver>"u")return;const{ResizeObserver:r}=window;return new r(i)},[t]);return y.useEffect(()=>()=>a==null?void 0:a.disconnect(),[a]),a}function Uc(e){return new er(Rn(e),e)}function Gr(e,n,t){n===void 0&&(n=Uc);const[i,a]=y.useState(null);function r(){a(s=>{if(!e)return null;if(e.isConnected===!1){var c;return(c=s??t)!=null?c:null}const l=n(e);return JSON.stringify(s)===JSON.stringify(l)?s:l})}const o=jc({callback(s){if(e)for(const c of s){const{type:l,target:g}=c;if(l==="childList"&&g instanceof HTMLElement&&g.contains(e)){r();break}}}}),u=zi({callback:r});return Nt(()=>{r(),e?(u==null||u.observe(e),o==null||o.observe(document.body,{childList:!0,subtree:!0})):(u==null||u.disconnect(),o==null||o.disconnect())},[e]),i}function qc(e){const n=Uo(e);return Lo(e,n)}const Or=[];function Wc(e){const n=y.useRef(e),t=ri(i=>e?i&&i!==Or&&e&&n.current&&e.parentNode===n.current.parentNode?i:Qa(e):Or,[e]);return y.useEffect(()=>{n.current=e},[e]),t}function Xc(e){const[n,t]=y.useState(null),i=y.useRef(e),a=y.useCallback(r=>{const o=Yi(r.target);o&&t(u=>u?(u.set(o,va(o)),new Map(u)):null)},[]);return y.useEffect(()=>{const r=i.current;if(e!==r){o(r);const u=e.map(s=>{const c=Yi(s);return c?(c.addEventListener("scroll",a,{passive:!0}),[c,va(c)]):null}).filter(s=>s!=null);t(u.length?new Map(u):null),i.current=e}return()=>{o(e),o(r)};function o(u){u.forEach(s=>{const c=Yi(s);c==null||c.removeEventListener("scroll",a)})}},[a,e]),y.useMemo(()=>e.length?n?Array.from(n.values()).reduce((r,o)=>An(r,o),_t):Bo(e):_t,[e,n])}function Fr(e,n){n===void 0&&(n=[]);const t=y.useRef(null);return y.useEffect(()=>{t.current=null},n),y.useEffect(()=>{const i=e!==_t;i&&!t.current&&(t.current=e),!i&&t.current&&(t.current=null)},[e]),t.current?xi(e,t.current):_t}function Kc(e){y.useEffect(()=>{if(!Vi)return;const n=e.map(t=>{let{sensor:i}=t;return i.setup==null?void 0:i.setup()});return()=>{for(const t of n)t==null||t()}},e.map(n=>{let{sensor:t}=n;return t}))}function Yc(e,n){return y.useMemo(()=>e.reduce((t,i)=>{let{eventName:a,handler:r}=i;return t[a]=o=>{r(o,n)},t},{}),[e,n])}function qo(e){return y.useMemo(()=>e?Ec(e):null,[e])}const Dr=[];function Jc(e,n){n===void 0&&(n=Rn);const[t]=e,i=qo(t?We(t):null),[a,r]=y.useState(Dr);function o(){r(()=>e.length?e.map(s=>Mo(s)?i:new er(n(s),s)):Dr)}const u=zi({callback:o});return Nt(()=>{u==null||u.disconnect(),o(),e.forEach(s=>u==null?void 0:u.observe(s))},[e]),a}function Zc(e){if(!e)return null;if(e.children.length>1)return e;const n=e.children[0];return ai(n)?n:e}function Qc(e){let{measure:n}=e;const[t,i]=y.useState(null),a=y.useCallback(c=>{for(const{target:l}of c)if(ai(l)){i(g=>{const b=n(l);return g?{...g,width:b.width,height:b.height}:b});break}},[n]),r=zi({callback:a}),o=y.useCallback(c=>{const l=Zc(c);r==null||r.disconnect(),l&&(r==null||r.observe(l)),i(l?n(l):null)},[n,r]),[u,s]=wi(o);return y.useMemo(()=>({nodeRef:u,rect:t,setRef:s}),[t,u,s])}const el=[{sensor:zo,options:{}},{sensor:tr,options:{}}],tl={current:{}},Ei={draggable:{measure:Sr},droppable:{measure:Sr,strategy:Zn.WhileDragging,frequency:ya.Optimized},dragOverlay:{measure:Rn}};class $n extends Map{get(n){var t;return n!=null&&(t=super.get(n))!=null?t:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(n=>{let{disabled:t}=n;return!t})}getNodeFor(n){var t,i;return(t=(i=this.get(n))==null?void 0:i.node.current)!=null?t:void 0}}const nl={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new $n,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Ai},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Ei,measureDroppableContainers:Ai,windowRect:null,measuringScheduled:!1},il={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Ai,draggableNodes:new Map,over:null,measureDroppableContainers:Ai},$i=y.createContext(il),Wo=y.createContext(nl);function al(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new $n}}}function rl(e,n){switch(n.type){case ye.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:n.initialCoordinates,active:n.active}};case ye.DragMove:return e.draggable.active==null?e:{...e,draggable:{...e.draggable,translate:{x:n.coordinates.x-e.draggable.initialCoordinates.x,y:n.coordinates.y-e.draggable.initialCoordinates.y}}};case ye.DragEnd:case ye.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case ye.RegisterDroppable:{const{element:t}=n,{id:i}=t,a=new $n(e.droppable.containers);return a.set(i,t),{...e,droppable:{...e.droppable,containers:a}}}case ye.SetDroppableDisabled:{const{id:t,key:i,disabled:a}=n,r=e.droppable.containers.get(t);if(!r||i!==r.key)return e;const o=new $n(e.droppable.containers);return o.set(t,{...r,disabled:a}),{...e,droppable:{...e.droppable,containers:o}}}case ye.UnregisterDroppable:{const{id:t,key:i}=n,a=e.droppable.containers.get(t);if(!a||i!==a.key)return e;const r=new $n(e.droppable.containers);return r.delete(t),{...e,droppable:{...e.droppable,containers:r}}}default:return e}}function ol(e){let{disabled:n}=e;const{active:t,activatorEvent:i,draggableNodes:a}=y.useContext($i),r=ba(i),o=ba(t==null?void 0:t.id);return y.useEffect(()=>{if(!n&&!i&&r&&o!=null){if(!Za(r)||document.activeElement===r.target)return;const u=a.get(o);if(!u)return;const{activatorNode:s,node:c}=u;if(!s.current&&!c.current)return;requestAnimationFrame(()=>{for(const l of[s.current,c.current]){if(!l)continue;const g=Zs(l);if(g){g.focus();break}}})}},[i,n,a,o,r]),null}function ul(e,n){let{transform:t,...i}=n;return e!=null&&e.length?e.reduce((a,r)=>r({transform:a,...i}),t):t}function sl(e){return y.useMemo(()=>({draggable:{...Ei.draggable,...e==null?void 0:e.draggable},droppable:{...Ei.droppable,...e==null?void 0:e.droppable},dragOverlay:{...Ei.dragOverlay,...e==null?void 0:e.dragOverlay}}),[e==null?void 0:e.draggable,e==null?void 0:e.droppable,e==null?void 0:e.dragOverlay])}function cl(e){let{activeNode:n,measure:t,initialRect:i,config:a=!0}=e;const r=y.useRef(!1),{x:o,y:u}=typeof a=="boolean"?{x:a,y:a}:a;Nt(()=>{if(!o&&!u||!n){r.current=!1;return}if(r.current||!i)return;const c=n==null?void 0:n.node.current;if(!c||c.isConnected===!1)return;const l=t(c),g=Lo(l,i);if(o||(g.x=0),u||(g.y=0),r.current=!0,Math.abs(g.x)>0||Math.abs(g.y)>0){const b=Ho(c);b&&b.scrollBy({top:g.y,left:g.x})}},[n,o,u,i,t])}const Xo=y.createContext({..._t,scaleX:1,scaleY:1});var Xt;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"})(Xt||(Xt={}));const ll=y.memo(function(n){var t,i,a,r;let{id:o,accessibility:u,autoScroll:s=!0,children:c,sensors:l=el,collisionDetection:g=pc,measuring:b,modifiers:h,...E}=n;const C=y.useReducer(rl,void 0,al),[w,S]=C,[D,N]=ac(),[V,L]=y.useState(Xt.Uninitialized),q=V===Xt.Initialized,{draggable:{active:O,nodes:P,translate:H},droppable:{containers:j}}=w,M=O!=null?P.get(O):null,X=y.useRef({initial:null,translated:null}),Z=y.useMemo(()=>{var me;return O!=null?{id:O,data:(me=M==null?void 0:M.data)!=null?me:tl,rect:X}:null},[O,M]),ie=y.useRef(null),[ve,it]=y.useState(null),[ue,ce]=y.useState(null),se=Yn(E,Object.values(E)),mt=oi("DndDescribedBy",o),Ke=y.useMemo(()=>j.getEnabled(),[j]),ae=sl(b),{droppableRects:he,measureDroppableContainers:Me,measuringScheduled:Pe}=zc(Ke,{dragging:q,dependencies:[H.x,H.y],config:ae.droppable}),pe=Bc(P,O),bt=y.useMemo(()=>ue?ka(ue):null,[ue]),Ye=te(),ee=$c(pe,ae.draggable.measure);cl({activeNode:O!=null?P.get(O):null,config:Ye.layoutShiftCompensation,initialRect:ee,measure:ae.draggable.measure});const Q=Gr(pe,ae.draggable.measure,ee),Be=Gr(pe?pe.parentElement:null),Ve=y.useRef({activatorEvent:null,active:null,activeNode:pe,collisionRect:null,collisions:null,droppableRects:he,draggableNodes:P,draggingNode:null,draggingNodeRect:null,droppableContainers:j,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),Gt=j.getNodeFor((t=Ve.current.over)==null?void 0:t.id),He=Qc({measure:ae.dragOverlay.measure}),at=(i=He.nodeRef.current)!=null?i:pe,rt=q?(a=He.rect)!=null?a:Q:null,kt=!!(He.nodeRef.current&&He.rect),vt=qc(kt?null:Q),Lt=qo(at?We(at):null),ot=Wc(q?Gt??pe:null),Je=Jc(ot),Ht=ul(h,{transform:{x:H.x-vt.x,y:H.y-vt.y,scaleX:1,scaleY:1},activatorEvent:ue,active:Z,activeNodeRect:Q,containerNodeRect:Be,draggingNodeRect:rt,over:Ve.current.over,overlayNodeRect:He.rect,scrollableAncestors:ot,scrollableAncestorRects:Je,windowRect:Lt}),ut=bt?An(bt,H):null,Ae=Xc(ot),Ct=Fr(Ae),an=Fr(Ae,[Q]),st=An(Ht,Ct),_e=rt?kc(rt,Ht):null,Tt=Z&&_e?g({active:Z,collisionRect:_e,droppableRects:he,droppableContainers:Ke,pointerCoordinates:ut}):null,rn=hc(Tt,"id"),[ze,Te]=y.useState(null),fn=kt?Ht:An(Ht,an),pn=mc(fn,(r=ze==null?void 0:ze.rect)!=null?r:null,Q),Ze=y.useRef(null),mn=y.useCallback((me,be)=>{let{sensor:Ge,options:ct}=be;if(ie.current==null)return;const Oe=P.get(ie.current);if(!Oe)return;const ke=me.nativeEvent,Ee=new Ge({active:ie.current,activeNode:Oe,event:ke,options:ct,context:Ve,onAbort(fe){if(!P.get(fe))return;const{onDragAbort:Fe}=se.current,$e={id:fe};Fe==null||Fe($e),D({type:"onDragAbort",event:$e})},onPending(fe,Qe,Fe,$e){if(!P.get(fe))return;const{onDragPending:et}=se.current,d={id:fe,constraint:Qe,initialCoordinates:Fe,offset:$e};et==null||et(d),D({type:"onDragPending",event:d})},onStart(fe){const Qe=ie.current;if(Qe==null)return;const Fe=P.get(Qe);if(!Fe)return;const{onDragStart:$e}=se.current,Ot={activatorEvent:ke,active:{id:Qe,data:Fe.data,rect:X}};Pn.unstable_batchedUpdates(()=>{$e==null||$e(Ot),L(Xt.Initializing),S({type:ye.DragStart,initialCoordinates:fe,active:Qe}),D({type:"onDragStart",event:Ot}),it(Ze.current),ce(ke)})},onMove(fe){S({type:ye.DragMove,coordinates:fe})},onEnd:yt(ye.DragEnd),onCancel:yt(ye.DragCancel)});Ze.current=Ee;function yt(fe){return async function(){const{active:Fe,collisions:$e,over:Ot,scrollAdjustedTranslate:et}=Ve.current;let d=null;if(Fe&&et){const{cancelDrop:k}=se.current;d={activatorEvent:ke,active:Fe,collisions:$e,delta:et,over:Ot},fe===ye.DragEnd&&typeof k=="function"&&await Promise.resolve(k(d))&&(fe=ye.DragCancel)}ie.current=null,Pn.unstable_batchedUpdates(()=>{S({type:fe}),L(Xt.Uninitialized),Te(null),it(null),ce(null),Ze.current=null;const k=fe===ye.DragEnd?"onDragEnd":"onDragCancel";if(d){const f=se.current[k];f==null||f(d),D({type:k,event:d})}})}}},[P]),on=y.useCallback((me,be)=>(Ge,ct)=>{const Oe=Ge.nativeEvent,ke=P.get(ct);if(ie.current!==null||!ke||Oe.dndKit||Oe.defaultPrevented)return;const Ee={active:ke};me(Ge,be.options,Ee)===!0&&(Oe.dndKit={capturedBy:be.sensor},ie.current=ct,mn(Ge,be))},[P,mn]),un=Vc(l,on);Kc(l),Nt(()=>{Q&&V===Xt.Initializing&&L(Xt.Initialized)},[Q,V]),y.useEffect(()=>{const{onDragMove:me}=se.current,{active:be,activatorEvent:Ge,collisions:ct,over:Oe}=Ve.current;if(!be||!Ge)return;const ke={active:be,activatorEvent:Ge,collisions:ct,delta:{x:st.x,y:st.y},over:Oe};Pn.unstable_batchedUpdates(()=>{me==null||me(ke),D({type:"onDragMove",event:ke})})},[st.x,st.y]),y.useEffect(()=>{const{active:me,activatorEvent:be,collisions:Ge,droppableContainers:ct,scrollAdjustedTranslate:Oe}=Ve.current;if(!me||ie.current==null||!be||!Oe)return;const{onDragOver:ke}=se.current,Ee=ct.get(rn),yt=Ee&&Ee.rect.current?{id:Ee.id,rect:Ee.rect.current,data:Ee.data,disabled:Ee.disabled}:null,fe={active:me,activatorEvent:be,collisions:Ge,delta:{x:Oe.x,y:Oe.y},over:yt};Pn.unstable_batchedUpdates(()=>{Te(yt),ke==null||ke(fe),D({type:"onDragOver",event:fe})})},[rn]),Nt(()=>{Ve.current={activatorEvent:ue,active:Z,activeNode:pe,collisionRect:_e,collisions:Tt,droppableRects:he,draggableNodes:P,draggingNode:at,draggingNodeRect:rt,droppableContainers:j,over:ze,scrollableAncestors:ot,scrollAdjustedTranslate:st},X.current={initial:rt,translated:_e}},[Z,pe,Tt,_e,P,at,rt,he,j,ze,ot,st]),Ic({...Ye,delta:H,draggingRect:_e,pointerCoordinates:ut,scrollableAncestors:ot,scrollableAncestorRects:Je});const sn=y.useMemo(()=>({active:Z,activeNode:pe,activeNodeRect:Q,activatorEvent:ue,collisions:Tt,containerNodeRect:Be,dragOverlay:He,draggableNodes:P,droppableContainers:j,droppableRects:he,over:ze,measureDroppableContainers:Me,scrollableAncestors:ot,scrollableAncestorRects:Je,measuringConfiguration:ae,measuringScheduled:Pe,windowRect:Lt}),[Z,pe,Q,ue,Tt,Be,He,P,j,he,ze,Me,ot,Je,ae,Pe,Lt]),bn=y.useMemo(()=>({activatorEvent:ue,activators:un,active:Z,activeNodeRect:Q,ariaDescribedById:{draggable:mt},dispatch:S,draggableNodes:P,over:ze,measureDroppableContainers:Me}),[ue,un,Z,Q,S,mt,P,ze,Me]);return Ue.createElement(Ro.Provider,{value:N},Ue.createElement($i.Provider,{value:bn},Ue.createElement(Wo.Provider,{value:sn},Ue.createElement(Xo.Provider,{value:pn},c)),Ue.createElement(ol,{disabled:(u==null?void 0:u.restoreFocus)===!1})),Ue.createElement(uc,{...u,hiddenTextDescribedById:mt}));function te(){const me=(ve==null?void 0:ve.autoScrollEnabled)===!1,be=typeof s=="object"?s.enabled===!1:s===!1,Ge=q&&!me&&!be;return typeof s=="object"?{...s,enabled:Ge}:{enabled:Ge}}}),dl=y.createContext(null),Nr="button",hl="Draggable";function gl(e){let{id:n,data:t,disabled:i=!1,attributes:a}=e;const r=oi(hl),{activators:o,activatorEvent:u,active:s,activeNodeRect:c,ariaDescribedById:l,draggableNodes:g,over:b}=y.useContext($i),{role:h=Nr,roleDescription:E="draggable",tabIndex:C=0}=a??{},w=(s==null?void 0:s.id)===n,S=y.useContext(w?Xo:dl),[D,N]=wi(),[V,L]=wi(),q=Yc(o,n),O=Yn(t);Nt(()=>(g.set(n,{id:n,key:r,node:D,activatorNode:V,data:O}),()=>{const H=g.get(n);H&&H.key===r&&g.delete(n)}),[g,n]);const P=y.useMemo(()=>({role:h,tabIndex:C,"aria-disabled":i,"aria-pressed":w&&h===Nr?!0:void 0,"aria-roledescription":E,"aria-describedby":l.draggable}),[i,h,C,w,E,l.draggable]);return{active:s,activatorEvent:u,activeNodeRect:c,attributes:P,isDragging:w,listeners:i?void 0:q,node:D,over:b,setNodeRef:N,setActivatorNodeRef:L,transform:S}}function fl(){return y.useContext(Wo)}const pl="Droppable",ml={timeout:25};function bl(e){let{data:n,disabled:t=!1,id:i,resizeObserverConfig:a}=e;const r=oi(pl),{active:o,dispatch:u,over:s,measureDroppableContainers:c}=y.useContext($i),l=y.useRef({disabled:t}),g=y.useRef(!1),b=y.useRef(null),h=y.useRef(null),{disabled:E,updateMeasurementsFor:C,timeout:w}={...ml,...a},S=Yn(C??i),D=y.useCallback(()=>{if(!g.current){g.current=!0;return}h.current!=null&&clearTimeout(h.current),h.current=setTimeout(()=>{c(Array.isArray(S.current)?S.current:[S.current]),h.current=null},w)},[w]),N=zi({callback:D,disabled:E||!o}),V=y.useCallback((P,H)=>{N&&(H&&(N.unobserve(H),g.current=!1),P&&N.observe(P))},[N]),[L,q]=wi(V),O=Yn(n);return y.useEffect(()=>{!N||!L.current||(N.disconnect(),g.current=!1,N.observe(L.current))},[L,N]),y.useEffect(()=>(u({type:ye.RegisterDroppable,element:{id:i,key:r,disabled:t,node:L,rect:b,data:O}}),()=>u({type:ye.UnregisterDroppable,key:r,id:i})),[i]),y.useEffect(()=>{t!==l.current.disabled&&(u({type:ye.SetDroppableDisabled,id:i,key:r,disabled:t}),l.current.disabled=t)},[i,r,t,u]),{active:o,rect:b,isOver:(s==null?void 0:s.id)===i,node:L,over:s,setNodeRef:q}}/**
   * table-core
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */function Jt(e,n){return typeof e=="function"?e(n):e}function nt(e,n){return t=>{n.setState(i=>({...i,[e]:Jt(t,i[e])}))}}function Gi(e){return e instanceof Function}function kl(e){return Array.isArray(e)&&e.every(n=>typeof n=="number")}function vl(e,n){const t=[],i=a=>{a.forEach(r=>{t.push(r);const o=n(r);o!=null&&o.length&&i(o)})};return i(e),t}function K(e,n,t){let i=[],a;return r=>{let o;t.key&&t.debug&&(o=Date.now());const u=e(r);if(!(u.length!==i.length||u.some((l,g)=>i[g]!==l)))return a;i=u;let c;if(t.key&&t.debug&&(c=Date.now()),a=n(...u),t==null||t.onChange==null||t.onChange(a),t.key&&t.debug&&t!=null&&t.debug()){const l=Math.round((Date.now()-o)*100)/100,g=Math.round((Date.now()-c)*100)/100,b=g/16,h=(E,C)=>{for(E=String(E);E.length<C;)E=" "+E;return E};console.info(`%c⏱ ${h(g,5)} /${h(l,5)} ms`,`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0,Math.min(120-120*b,120))}deg 100% 31%);`,t==null?void 0:t.key)}return a}}function Y(e,n,t,i){return{debug:()=>{var a;return(a=e==null?void 0:e.debugAll)!=null?a:e[n]},key:!1,onChange:i}}function Cl(e,n,t,i){var a,r;const u={...e._getDefaultColumnDef(),...n},s=u.accessorKey;let c=(a=(r=u.id)!=null?r:s?s.replace(".","_"):void 0)!=null?a:typeof u.header=="string"?u.header:void 0,l;if(u.accessorFn?l=u.accessorFn:s&&(s.includes(".")?l=b=>{let h=b;for(const C of s.split(".")){var E;h=(E=h)==null?void 0:E[C]}return h}:l=b=>b[u.accessorKey]),!c)throw new Error;let g={id:`${String(c)}`,accessorFn:l,parent:i,depth:t,columnDef:u,columns:[],getFlatColumns:K(()=>[!0],()=>{var b;return[g,...(b=g.columns)==null?void 0:b.flatMap(h=>h.getFlatColumns())]},Y(e.options,"debugColumns")),getLeafColumns:K(()=>[e._getOrderColumnsFn()],b=>{var h;if((h=g.columns)!=null&&h.length){let E=g.columns.flatMap(C=>C.getLeafColumns());return b(E)}return[g]},Y(e.options,"debugColumns"))};for(const b of e._features)b.createColumn==null||b.createColumn(g,e);return g}const De="debugHeaders";function Rr(e,n,t){var i;let r={id:(i=t.id)!=null?i:n.id,column:n,index:t.index,isPlaceholder:!!t.isPlaceholder,placeholderId:t.placeholderId,depth:t.depth,subHeaders:[],colSpan:0,rowSpan:0,headerGroup:null,getLeafHeaders:()=>{const o=[],u=s=>{s.subHeaders&&s.subHeaders.length&&s.subHeaders.map(u),o.push(s)};return u(r),o},getContext:()=>({table:e,header:r,column:n})};return e._features.forEach(o=>{o.createHeader==null||o.createHeader(r,e)}),r}const yl={createTable:e=>{e.getHeaderGroups=K(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.left,e.getState().columnPinning.right],(n,t,i,a)=>{var r,o;const u=(r=i==null?void 0:i.map(g=>t.find(b=>b.id===g)).filter(Boolean))!=null?r:[],s=(o=a==null?void 0:a.map(g=>t.find(b=>b.id===g)).filter(Boolean))!=null?o:[],c=t.filter(g=>!(i!=null&&i.includes(g.id))&&!(a!=null&&a.includes(g.id)));return di(n,[...u,...c,...s],e)},Y(e.options,De)),e.getCenterHeaderGroups=K(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.left,e.getState().columnPinning.right],(n,t,i,a)=>(t=t.filter(r=>!(i!=null&&i.includes(r.id))&&!(a!=null&&a.includes(r.id))),di(n,t,e,"center")),Y(e.options,De)),e.getLeftHeaderGroups=K(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.left],(n,t,i)=>{var a;const r=(a=i==null?void 0:i.map(o=>t.find(u=>u.id===o)).filter(Boolean))!=null?a:[];return di(n,r,e,"left")},Y(e.options,De)),e.getRightHeaderGroups=K(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.right],(n,t,i)=>{var a;const r=(a=i==null?void 0:i.map(o=>t.find(u=>u.id===o)).filter(Boolean))!=null?a:[];return di(n,r,e,"right")},Y(e.options,De)),e.getFooterGroups=K(()=>[e.getHeaderGroups()],n=>[...n].reverse(),Y(e.options,De)),e.getLeftFooterGroups=K(()=>[e.getLeftHeaderGroups()],n=>[...n].reverse(),Y(e.options,De)),e.getCenterFooterGroups=K(()=>[e.getCenterHeaderGroups()],n=>[...n].reverse(),Y(e.options,De)),e.getRightFooterGroups=K(()=>[e.getRightHeaderGroups()],n=>[...n].reverse(),Y(e.options,De)),e.getFlatHeaders=K(()=>[e.getHeaderGroups()],n=>n.map(t=>t.headers).flat(),Y(e.options,De)),e.getLeftFlatHeaders=K(()=>[e.getLeftHeaderGroups()],n=>n.map(t=>t.headers).flat(),Y(e.options,De)),e.getCenterFlatHeaders=K(()=>[e.getCenterHeaderGroups()],n=>n.map(t=>t.headers).flat(),Y(e.options,De)),e.getRightFlatHeaders=K(()=>[e.getRightHeaderGroups()],n=>n.map(t=>t.headers).flat(),Y(e.options,De)),e.getCenterLeafHeaders=K(()=>[e.getCenterFlatHeaders()],n=>n.filter(t=>{var i;return!((i=t.subHeaders)!=null&&i.length)}),Y(e.options,De)),e.getLeftLeafHeaders=K(()=>[e.getLeftFlatHeaders()],n=>n.filter(t=>{var i;return!((i=t.subHeaders)!=null&&i.length)}),Y(e.options,De)),e.getRightLeafHeaders=K(()=>[e.getRightFlatHeaders()],n=>n.filter(t=>{var i;return!((i=t.subHeaders)!=null&&i.length)}),Y(e.options,De)),e.getLeafHeaders=K(()=>[e.getLeftHeaderGroups(),e.getCenterHeaderGroups(),e.getRightHeaderGroups()],(n,t,i)=>{var a,r,o,u,s,c;return[...(a=(r=n[0])==null?void 0:r.headers)!=null?a:[],...(o=(u=t[0])==null?void 0:u.headers)!=null?o:[],...(s=(c=i[0])==null?void 0:c.headers)!=null?s:[]].map(l=>l.getLeafHeaders()).flat()},Y(e.options,De))}};function di(e,n,t,i){var a,r;let o=0;const u=function(b,h){h===void 0&&(h=1),o=Math.max(o,h),b.filter(E=>E.getIsVisible()).forEach(E=>{var C;(C=E.columns)!=null&&C.length&&u(E.columns,h+1)},0)};u(e);let s=[];const c=(b,h)=>{const E={depth:h,id:[i,`${h}`].filter(Boolean).join("_"),headers:[]},C=[];b.forEach(w=>{const S=[...C].reverse()[0],D=w.column.depth===E.depth;let N,V=!1;if(D&&w.column.parent?N=w.column.parent:(N=w.column,V=!0),S&&(S==null?void 0:S.column)===N)S.subHeaders.push(w);else{const L=Rr(t,N,{id:[i,h,N.id,w==null?void 0:w.id].filter(Boolean).join("_"),isPlaceholder:V,placeholderId:V?`${C.filter(q=>q.column===N).length}`:void 0,depth:h,index:C.length});L.subHeaders.push(w),C.push(L)}E.headers.push(w),w.headerGroup=E}),s.push(E),h>0&&c(C,h-1)},l=n.map((b,h)=>Rr(t,b,{depth:o,index:h}));c(l,o-1),s.reverse();const g=b=>b.filter(E=>E.column.getIsVisible()).map(E=>{let C=0,w=0,S=[0];E.subHeaders&&E.subHeaders.length?(S=[],g(E.subHeaders).forEach(N=>{let{colSpan:V,rowSpan:L}=N;C+=V,S.push(L)})):C=1;const D=Math.min(...S);return w=w+D,E.colSpan=C,E.rowSpan=w,{colSpan:C,rowSpan:w}});return g((a=(r=s[0])==null?void 0:r.headers)!=null?a:[]),s}const hi={size:150,minSize:20,maxSize:Number.MAX_SAFE_INTEGER},Qi=()=>({startOffset:null,startSize:null,deltaOffset:null,deltaPercentage:null,isResizingColumn:!1,columnSizingStart:[]}),El={getDefaultColumnDef:()=>hi,getInitialState:e=>({columnSizing:{},columnSizingInfo:Qi(),...e}),getDefaultOptions:e=>({columnResizeMode:"onEnd",columnResizeDirection:"ltr",onColumnSizingChange:nt("columnSizing",e),onColumnSizingInfoChange:nt("columnSizingInfo",e)}),createColumn:(e,n)=>{e.getSize=()=>{var t,i,a;const r=n.getState().columnSizing[e.id];return Math.min(Math.max((t=e.columnDef.minSize)!=null?t:hi.minSize,(i=r??e.columnDef.size)!=null?i:hi.size),(a=e.columnDef.maxSize)!=null?a:hi.maxSize)},e.getStart=K(t=>[t,jn(n,t),n.getState().columnSizing],(t,i)=>i.slice(0,e.getIndex(t)).reduce((a,r)=>a+r.getSize(),0),Y(n.options,"debugColumns")),e.getAfter=K(t=>[t,jn(n,t),n.getState().columnSizing],(t,i)=>i.slice(e.getIndex(t)+1).reduce((a,r)=>a+r.getSize(),0),Y(n.options,"debugColumns")),e.resetSize=()=>{n.setColumnSizing(t=>{let{[e.id]:i,...a}=t;return a})},e.getCanResize=()=>{var t,i;return((t=e.columnDef.enableResizing)!=null?t:!0)&&((i=n.options.enableColumnResizing)!=null?i:!0)},e.getIsResizing=()=>n.getState().columnSizingInfo.isResizingColumn===e.id},createHeader:(e,n)=>{e.getSize=()=>{let t=0;const i=a=>{if(a.subHeaders.length)a.subHeaders.forEach(i);else{var r;t+=(r=a.column.getSize())!=null?r:0}};return i(e),t},e.getStart=()=>{if(e.index>0){const t=e.headerGroup.headers[e.index-1];return t.getStart()+t.getSize()}return 0},e.getResizeHandler=t=>{const i=n.getColumn(e.column.id),a=i==null?void 0:i.getCanResize();return r=>{if(!i||!a||(r.persist==null||r.persist(),ea(r)&&r.touches&&r.touches.length>1))return;const o=e.getSize(),u=e?e.getLeafHeaders().map(S=>[S.column.id,S.column.getSize()]):[[i.id,i.getSize()]],s=ea(r)?Math.round(r.touches[0].clientX):r.clientX,c={},l=(S,D)=>{typeof D=="number"&&(n.setColumnSizingInfo(N=>{var V,L;const q=n.options.columnResizeDirection==="rtl"?-1:1,O=(D-((V=N==null?void 0:N.startOffset)!=null?V:0))*q,P=Math.max(O/((L=N==null?void 0:N.startSize)!=null?L:0),-.999999);return N.columnSizingStart.forEach(H=>{let[j,M]=H;c[j]=Math.round(Math.max(M+M*P,0)*100)/100}),{...N,deltaOffset:O,deltaPercentage:P}}),(n.options.columnResizeMode==="onChange"||S==="end")&&n.setColumnSizing(N=>({...N,...c})))},g=S=>l("move",S),b=S=>{l("end",S),n.setColumnSizingInfo(D=>({...D,isResizingColumn:!1,startOffset:null,startSize:null,deltaOffset:null,deltaPercentage:null,columnSizingStart:[]}))},h=t||typeof document<"u"?document:null,E={moveHandler:S=>g(S.clientX),upHandler:S=>{h==null||h.removeEventListener("mousemove",E.moveHandler),h==null||h.removeEventListener("mouseup",E.upHandler),b(S.clientX)}},C={moveHandler:S=>(S.cancelable&&(S.preventDefault(),S.stopPropagation()),g(S.touches[0].clientX),!1),upHandler:S=>{var D;h==null||h.removeEventListener("touchmove",C.moveHandler),h==null||h.removeEventListener("touchend",C.upHandler),S.cancelable&&(S.preventDefault(),S.stopPropagation()),b((D=S.touches[0])==null?void 0:D.clientX)}},w=Sl()?{passive:!1}:!1;ea(r)?(h==null||h.addEventListener("touchmove",C.moveHandler,w),h==null||h.addEventListener("touchend",C.upHandler,w)):(h==null||h.addEventListener("mousemove",E.moveHandler,w),h==null||h.addEventListener("mouseup",E.upHandler,w)),n.setColumnSizingInfo(S=>({...S,startOffset:s,startSize:o,deltaOffset:0,deltaPercentage:0,columnSizingStart:u,isResizingColumn:i.id}))}}},createTable:e=>{e.setColumnSizing=n=>e.options.onColumnSizingChange==null?void 0:e.options.onColumnSizingChange(n),e.setColumnSizingInfo=n=>e.options.onColumnSizingInfoChange==null?void 0:e.options.onColumnSizingInfoChange(n),e.resetColumnSizing=n=>{var t;e.setColumnSizing(n?{}:(t=e.initialState.columnSizing)!=null?t:{})},e.resetHeaderSizeInfo=n=>{var t;e.setColumnSizingInfo(n?Qi():(t=e.initialState.columnSizingInfo)!=null?t:Qi())},e.getTotalSize=()=>{var n,t;return(n=(t=e.getHeaderGroups()[0])==null?void 0:t.headers.reduce((i,a)=>i+a.getSize(),0))!=null?n:0},e.getLeftTotalSize=()=>{var n,t;return(n=(t=e.getLeftHeaderGroups()[0])==null?void 0:t.headers.reduce((i,a)=>i+a.getSize(),0))!=null?n:0},e.getCenterTotalSize=()=>{var n,t;return(n=(t=e.getCenterHeaderGroups()[0])==null?void 0:t.headers.reduce((i,a)=>i+a.getSize(),0))!=null?n:0},e.getRightTotalSize=()=>{var n,t;return(n=(t=e.getRightHeaderGroups()[0])==null?void 0:t.headers.reduce((i,a)=>i+a.getSize(),0))!=null?n:0}}};let gi=null;function Sl(){if(typeof gi=="boolean")return gi;let e=!1;try{const n={get passive(){return e=!0,!1}},t=()=>{};window.addEventListener("test",t,n),window.removeEventListener("test",t)}catch{e=!1}return gi=e,gi}function ea(e){return e.type==="touchstart"}const wl={getInitialState:e=>({expanded:{},...e}),getDefaultOptions:e=>({onExpandedChange:nt("expanded",e),paginateExpandedRows:!0}),createTable:e=>{let n=!1,t=!1;e._autoResetExpanded=()=>{var i,a;if(!n){e._queue(()=>{n=!0});return}if((i=(a=e.options.autoResetAll)!=null?a:e.options.autoResetExpanded)!=null?i:!e.options.manualExpanding){if(t)return;t=!0,e._queue(()=>{e.resetExpanded(),t=!1})}},e.setExpanded=i=>e.options.onExpandedChange==null?void 0:e.options.onExpandedChange(i),e.toggleAllRowsExpanded=i=>{i??!e.getIsAllRowsExpanded()?e.setExpanded(!0):e.setExpanded({})},e.resetExpanded=i=>{var a,r;e.setExpanded(i?{}:(a=(r=e.initialState)==null?void 0:r.expanded)!=null?a:{})},e.getCanSomeRowsExpand=()=>e.getPrePaginationRowModel().flatRows.some(i=>i.getCanExpand()),e.getToggleAllRowsExpandedHandler=()=>i=>{i.persist==null||i.persist(),e.toggleAllRowsExpanded()},e.getIsSomeRowsExpanded=()=>{const i=e.getState().expanded;return i===!0||Object.values(i).some(Boolean)},e.getIsAllRowsExpanded=()=>{const i=e.getState().expanded;return typeof i=="boolean"?i===!0:!(!Object.keys(i).length||e.getRowModel().flatRows.some(a=>!a.getIsExpanded()))},e.getExpandedDepth=()=>{let i=0;return(e.getState().expanded===!0?Object.keys(e.getRowModel().rowsById):Object.keys(e.getState().expanded)).forEach(r=>{const o=r.split(".");i=Math.max(i,o.length)}),i},e.getPreExpandedRowModel=()=>e.getSortedRowModel(),e.getExpandedRowModel=()=>(!e._getExpandedRowModel&&e.options.getExpandedRowModel&&(e._getExpandedRowModel=e.options.getExpandedRowModel(e)),e.options.manualExpanding||!e._getExpandedRowModel?e.getPreExpandedRowModel():e._getExpandedRowModel())},createRow:(e,n)=>{e.toggleExpanded=t=>{n.setExpanded(i=>{var a;const r=i===!0?!0:!!(i!=null&&i[e.id]);let o={};if(i===!0?Object.keys(n.getRowModel().rowsById).forEach(u=>{o[u]=!0}):o=i,t=(a=t)!=null?a:!r,!r&&t)return{...o,[e.id]:!0};if(r&&!t){const{[e.id]:u,...s}=o;return s}return i})},e.getIsExpanded=()=>{var t;const i=n.getState().expanded;return!!((t=n.options.getIsRowExpanded==null?void 0:n.options.getIsRowExpanded(e))!=null?t:i===!0||i!=null&&i[e.id])},e.getCanExpand=()=>{var t,i,a;return(t=n.options.getRowCanExpand==null?void 0:n.options.getRowCanExpand(e))!=null?t:((i=n.options.enableExpanding)!=null?i:!0)&&!!((a=e.subRows)!=null&&a.length)},e.getIsAllParentsExpanded=()=>{let t=!0,i=e;for(;t&&i.parentId;)i=n.getRow(i.parentId,!0),t=i.getIsExpanded();return t},e.getToggleExpandedHandler=()=>{const t=e.getCanExpand();return()=>{t&&e.toggleExpanded()}}}},Ko=(e,n,t)=>{var i;const a=t.toLowerCase();return!!(!((i=e.getValue(n))==null||(i=i.toString())==null||(i=i.toLowerCase())==null)&&i.includes(a))};Ko.autoRemove=e=>xt(e);const Yo=(e,n,t)=>{var i;return!!(!((i=e.getValue(n))==null||(i=i.toString())==null)&&i.includes(t))};Yo.autoRemove=e=>xt(e);const Jo=(e,n,t)=>{var i;return((i=e.getValue(n))==null||(i=i.toString())==null?void 0:i.toLowerCase())===(t==null?void 0:t.toLowerCase())};Jo.autoRemove=e=>xt(e);const Zo=(e,n,t)=>{var i;return(i=e.getValue(n))==null?void 0:i.includes(t)};Zo.autoRemove=e=>xt(e)||!(e!=null&&e.length);const Qo=(e,n,t)=>!t.some(i=>{var a;return!((a=e.getValue(n))!=null&&a.includes(i))});Qo.autoRemove=e=>xt(e)||!(e!=null&&e.length);const eu=(e,n,t)=>t.some(i=>{var a;return(a=e.getValue(n))==null?void 0:a.includes(i)});eu.autoRemove=e=>xt(e)||!(e!=null&&e.length);const tu=(e,n,t)=>e.getValue(n)===t;tu.autoRemove=e=>xt(e);const nu=(e,n,t)=>e.getValue(n)==t;nu.autoRemove=e=>xt(e);const ir=(e,n,t)=>{let[i,a]=t;const r=e.getValue(n);return r>=i&&r<=a};ir.resolveFilterValue=e=>{let[n,t]=e,i=typeof n!="number"?parseFloat(n):n,a=typeof t!="number"?parseFloat(t):t,r=n===null||Number.isNaN(i)?-1/0:i,o=t===null||Number.isNaN(a)?1/0:a;if(r>o){const u=r;r=o,o=u}return[r,o]};ir.autoRemove=e=>xt(e)||xt(e[0])&&xt(e[1]);const Mt={includesString:Ko,includesStringSensitive:Yo,equalsString:Jo,arrIncludes:Zo,arrIncludesAll:Qo,arrIncludesSome:eu,equals:tu,weakEquals:nu,inNumberRange:ir};function xt(e){return e==null||e===""}const xl={getDefaultColumnDef:()=>({filterFn:"auto"}),getInitialState:e=>({columnFilters:[],globalFilter:void 0,...e}),getDefaultOptions:e=>({onColumnFiltersChange:nt("columnFilters",e),onGlobalFilterChange:nt("globalFilter",e),filterFromLeafRows:!1,maxLeafRowFilterDepth:100,globalFilterFn:"auto",getColumnCanGlobalFilter:n=>{var t;const i=(t=e.getCoreRowModel().flatRows[0])==null||(t=t._getAllCellsByColumnId()[n.id])==null?void 0:t.getValue();return typeof i=="string"||typeof i=="number"}}),createColumn:(e,n)=>{e.getAutoFilterFn=()=>{const t=n.getCoreRowModel().flatRows[0],i=t==null?void 0:t.getValue(e.id);return typeof i=="string"?Mt.includesString:typeof i=="number"?Mt.inNumberRange:typeof i=="boolean"||i!==null&&typeof i=="object"?Mt.equals:Array.isArray(i)?Mt.arrIncludes:Mt.weakEquals},e.getFilterFn=()=>{var t,i;return Gi(e.columnDef.filterFn)?e.columnDef.filterFn:e.columnDef.filterFn==="auto"?e.getAutoFilterFn():(t=(i=n.options.filterFns)==null?void 0:i[e.columnDef.filterFn])!=null?t:Mt[e.columnDef.filterFn]},e.getCanFilter=()=>{var t,i,a;return((t=e.columnDef.enableColumnFilter)!=null?t:!0)&&((i=n.options.enableColumnFilters)!=null?i:!0)&&((a=n.options.enableFilters)!=null?a:!0)&&!!e.accessorFn},e.getCanGlobalFilter=()=>{var t,i,a,r;return((t=e.columnDef.enableGlobalFilter)!=null?t:!0)&&((i=n.options.enableGlobalFilter)!=null?i:!0)&&((a=n.options.enableFilters)!=null?a:!0)&&((r=n.options.getColumnCanGlobalFilter==null?void 0:n.options.getColumnCanGlobalFilter(e))!=null?r:!0)&&!!e.accessorFn},e.getIsFiltered=()=>e.getFilterIndex()>-1,e.getFilterValue=()=>{var t;return(t=n.getState().columnFilters)==null||(t=t.find(i=>i.id===e.id))==null?void 0:t.value},e.getFilterIndex=()=>{var t,i;return(t=(i=n.getState().columnFilters)==null?void 0:i.findIndex(a=>a.id===e.id))!=null?t:-1},e.setFilterValue=t=>{n.setColumnFilters(i=>{const a=e.getFilterFn(),r=i==null?void 0:i.find(l=>l.id===e.id),o=Jt(t,r?r.value:void 0);if(Lr(a,o,e)){var u;return(u=i==null?void 0:i.filter(l=>l.id!==e.id))!=null?u:[]}const s={id:e.id,value:o};if(r){var c;return(c=i==null?void 0:i.map(l=>l.id===e.id?s:l))!=null?c:[]}return i!=null&&i.length?[...i,s]:[s]})},e._getFacetedRowModel=n.options.getFacetedRowModel&&n.options.getFacetedRowModel(n,e.id),e.getFacetedRowModel=()=>e._getFacetedRowModel?e._getFacetedRowModel():n.getPreFilteredRowModel(),e._getFacetedUniqueValues=n.options.getFacetedUniqueValues&&n.options.getFacetedUniqueValues(n,e.id),e.getFacetedUniqueValues=()=>e._getFacetedUniqueValues?e._getFacetedUniqueValues():new Map,e._getFacetedMinMaxValues=n.options.getFacetedMinMaxValues&&n.options.getFacetedMinMaxValues(n,e.id),e.getFacetedMinMaxValues=()=>{if(e._getFacetedMinMaxValues)return e._getFacetedMinMaxValues()}},createRow:(e,n)=>{e.columnFilters={},e.columnFiltersMeta={}},createTable:e=>{e.getGlobalAutoFilterFn=()=>Mt.includesString,e.getGlobalFilterFn=()=>{var n,t;const{globalFilterFn:i}=e.options;return Gi(i)?i:i==="auto"?e.getGlobalAutoFilterFn():(n=(t=e.options.filterFns)==null?void 0:t[i])!=null?n:Mt[i]},e.setColumnFilters=n=>{const t=e.getAllLeafColumns(),i=a=>{var r;return(r=Jt(n,a))==null?void 0:r.filter(o=>{const u=t.find(s=>s.id===o.id);if(u){const s=u.getFilterFn();if(Lr(s,o.value,u))return!1}return!0})};e.options.onColumnFiltersChange==null||e.options.onColumnFiltersChange(i)},e.setGlobalFilter=n=>{e.options.onGlobalFilterChange==null||e.options.onGlobalFilterChange(n)},e.resetGlobalFilter=n=>{e.setGlobalFilter(n?void 0:e.initialState.globalFilter)},e.resetColumnFilters=n=>{var t,i;e.setColumnFilters(n?[]:(t=(i=e.initialState)==null?void 0:i.columnFilters)!=null?t:[])},e.getPreFilteredRowModel=()=>e.getCoreRowModel(),e.getFilteredRowModel=()=>(!e._getFilteredRowModel&&e.options.getFilteredRowModel&&(e._getFilteredRowModel=e.options.getFilteredRowModel(e)),e.options.manualFiltering||!e._getFilteredRowModel?e.getPreFilteredRowModel():e._getFilteredRowModel()),e._getGlobalFacetedRowModel=e.options.getFacetedRowModel&&e.options.getFacetedRowModel(e,"__global__"),e.getGlobalFacetedRowModel=()=>e.options.manualFiltering||!e._getGlobalFacetedRowModel?e.getPreFilteredRowModel():e._getGlobalFacetedRowModel(),e._getGlobalFacetedUniqueValues=e.options.getFacetedUniqueValues&&e.options.getFacetedUniqueValues(e,"__global__"),e.getGlobalFacetedUniqueValues=()=>e._getGlobalFacetedUniqueValues?e._getGlobalFacetedUniqueValues():new Map,e._getGlobalFacetedMinMaxValues=e.options.getFacetedMinMaxValues&&e.options.getFacetedMinMaxValues(e,"__global__"),e.getGlobalFacetedMinMaxValues=()=>{if(e._getGlobalFacetedMinMaxValues)return e._getGlobalFacetedMinMaxValues()}}};function Lr(e,n,t){return(e&&e.autoRemove?e.autoRemove(n,t):!1)||typeof n>"u"||typeof n=="string"&&!n}const Al=(e,n,t)=>t.reduce((i,a)=>{const r=a.getValue(e);return i+(typeof r=="number"?r:0)},0),_l=(e,n,t)=>{let i;return t.forEach(a=>{const r=a.getValue(e);r!=null&&(i>r||i===void 0&&r>=r)&&(i=r)}),i},Gl=(e,n,t)=>{let i;return t.forEach(a=>{const r=a.getValue(e);r!=null&&(i<r||i===void 0&&r>=r)&&(i=r)}),i},Ol=(e,n,t)=>{let i,a;return t.forEach(r=>{const o=r.getValue(e);o!=null&&(i===void 0?o>=o&&(i=a=o):(i>o&&(i=o),a<o&&(a=o)))}),[i,a]},Fl=(e,n)=>{let t=0,i=0;if(n.forEach(a=>{let r=a.getValue(e);r!=null&&(r=+r)>=r&&(++t,i+=r)}),t)return i/t},Dl=(e,n)=>{if(!n.length)return;const t=n.map(r=>r.getValue(e));if(!kl(t))return;if(t.length===1)return t[0];const i=Math.floor(t.length/2),a=t.sort((r,o)=>r-o);return t.length%2!==0?a[i]:(a[i-1]+a[i])/2},Nl=(e,n)=>Array.from(new Set(n.map(t=>t.getValue(e))).values()),Rl=(e,n)=>new Set(n.map(t=>t.getValue(e))).size,Ll=(e,n)=>n.length,ta={sum:Al,min:_l,max:Gl,extent:Ol,mean:Fl,median:Dl,unique:Nl,uniqueCount:Rl,count:Ll},Hl={getDefaultColumnDef:()=>({aggregatedCell:e=>{var n,t;return(n=(t=e.getValue())==null||t.toString==null?void 0:t.toString())!=null?n:null},aggregationFn:"auto"}),getInitialState:e=>({grouping:[],...e}),getDefaultOptions:e=>({onGroupingChange:nt("grouping",e),groupedColumnMode:"reorder"}),createColumn:(e,n)=>{e.toggleGrouping=()=>{n.setGrouping(t=>t!=null&&t.includes(e.id)?t.filter(i=>i!==e.id):[...t??[],e.id])},e.getCanGroup=()=>{var t,i,a,r;return(t=(i=(a=(r=e.columnDef.enableGrouping)!=null?r:!0)!=null?a:n.options.enableGrouping)!=null?i:!0)!=null?t:!!e.accessorFn},e.getIsGrouped=()=>{var t;return(t=n.getState().grouping)==null?void 0:t.includes(e.id)},e.getGroupedIndex=()=>{var t;return(t=n.getState().grouping)==null?void 0:t.indexOf(e.id)},e.getToggleGroupingHandler=()=>{const t=e.getCanGroup();return()=>{t&&e.toggleGrouping()}},e.getAutoAggregationFn=()=>{const t=n.getCoreRowModel().flatRows[0],i=t==null?void 0:t.getValue(e.id);if(typeof i=="number")return ta.sum;if(Object.prototype.toString.call(i)==="[object Date]")return ta.extent},e.getAggregationFn=()=>{var t,i;if(!e)throw new Error;return Gi(e.columnDef.aggregationFn)?e.columnDef.aggregationFn:e.columnDef.aggregationFn==="auto"?e.getAutoAggregationFn():(t=(i=n.options.aggregationFns)==null?void 0:i[e.columnDef.aggregationFn])!=null?t:ta[e.columnDef.aggregationFn]}},createTable:e=>{e.setGrouping=n=>e.options.onGroupingChange==null?void 0:e.options.onGroupingChange(n),e.resetGrouping=n=>{var t,i;e.setGrouping(n?[]:(t=(i=e.initialState)==null?void 0:i.grouping)!=null?t:[])},e.getPreGroupedRowModel=()=>e.getFilteredRowModel(),e.getGroupedRowModel=()=>(!e._getGroupedRowModel&&e.options.getGroupedRowModel&&(e._getGroupedRowModel=e.options.getGroupedRowModel(e)),e.options.manualGrouping||!e._getGroupedRowModel?e.getPreGroupedRowModel():e._getGroupedRowModel())},createRow:(e,n)=>{e.getIsGrouped=()=>!!e.groupingColumnId,e.getGroupingValue=t=>{if(e._groupingValuesCache.hasOwnProperty(t))return e._groupingValuesCache[t];const i=n.getColumn(t);return i!=null&&i.columnDef.getGroupingValue?(e._groupingValuesCache[t]=i.columnDef.getGroupingValue(e.original),e._groupingValuesCache[t]):e.getValue(t)},e._groupingValuesCache={}},createCell:(e,n,t,i)=>{e.getIsGrouped=()=>n.getIsGrouped()&&n.id===t.groupingColumnId,e.getIsPlaceholder=()=>!e.getIsGrouped()&&n.getIsGrouped(),e.getIsAggregated=()=>{var a;return!e.getIsGrouped()&&!e.getIsPlaceholder()&&!!((a=t.subRows)!=null&&a.length)}}};function Tl(e,n,t){if(!(n!=null&&n.length)||!t)return e;const i=e.filter(r=>!n.includes(r.id));return t==="remove"?i:[...n.map(r=>e.find(o=>o.id===r)).filter(Boolean),...i]}const Il={getInitialState:e=>({columnOrder:[],...e}),getDefaultOptions:e=>({onColumnOrderChange:nt("columnOrder",e)}),createColumn:(e,n)=>{e.getIndex=K(t=>[jn(n,t)],t=>t.findIndex(i=>i.id===e.id),Y(n.options,"debugColumns")),e.getIsFirstColumn=t=>{var i;return((i=jn(n,t)[0])==null?void 0:i.id)===e.id},e.getIsLastColumn=t=>{var i;const a=jn(n,t);return((i=a[a.length-1])==null?void 0:i.id)===e.id}},createTable:e=>{e.setColumnOrder=n=>e.options.onColumnOrderChange==null?void 0:e.options.onColumnOrderChange(n),e.resetColumnOrder=n=>{var t;e.setColumnOrder(n?[]:(t=e.initialState.columnOrder)!=null?t:[])},e._getOrderColumnsFn=K(()=>[e.getState().columnOrder,e.getState().grouping,e.options.groupedColumnMode],(n,t,i)=>a=>{let r=[];if(!(n!=null&&n.length))r=a;else{const o=[...n],u=[...a];for(;u.length&&o.length;){const s=o.shift(),c=u.findIndex(l=>l.id===s);c>-1&&r.push(u.splice(c,1)[0])}r=[...r,...u]}return Tl(r,t,i)},Y(e.options,"debugTable"))}},Ea=0,Sa=10,na=()=>({pageIndex:Ea,pageSize:Sa}),Ml={getInitialState:e=>({...e,pagination:{...na(),...e==null?void 0:e.pagination}}),getDefaultOptions:e=>({onPaginationChange:nt("pagination",e)}),createTable:e=>{let n=!1,t=!1;e._autoResetPageIndex=()=>{var i,a;if(!n){e._queue(()=>{n=!0});return}if((i=(a=e.options.autoResetAll)!=null?a:e.options.autoResetPageIndex)!=null?i:!e.options.manualPagination){if(t)return;t=!0,e._queue(()=>{e.resetPageIndex(),t=!1})}},e.setPagination=i=>{const a=r=>Jt(i,r);return e.options.onPaginationChange==null?void 0:e.options.onPaginationChange(a)},e.resetPagination=i=>{var a;e.setPagination(i?na():(a=e.initialState.pagination)!=null?a:na())},e.setPageIndex=i=>{e.setPagination(a=>{let r=Jt(i,a.pageIndex);const o=typeof e.options.pageCount>"u"||e.options.pageCount===-1?Number.MAX_SAFE_INTEGER:e.options.pageCount-1;return r=Math.max(0,Math.min(r,o)),{...a,pageIndex:r}})},e.resetPageIndex=i=>{var a,r;e.setPageIndex(i?Ea:(a=(r=e.initialState)==null||(r=r.pagination)==null?void 0:r.pageIndex)!=null?a:Ea)},e.resetPageSize=i=>{var a,r;e.setPageSize(i?Sa:(a=(r=e.initialState)==null||(r=r.pagination)==null?void 0:r.pageSize)!=null?a:Sa)},e.setPageSize=i=>{e.setPagination(a=>{const r=Math.max(1,Jt(i,a.pageSize)),o=a.pageSize*a.pageIndex,u=Math.floor(o/r);return{...a,pageIndex:u,pageSize:r}})},e.setPageCount=i=>e.setPagination(a=>{var r;let o=Jt(i,(r=e.options.pageCount)!=null?r:-1);return typeof o=="number"&&(o=Math.max(-1,o)),{...a,pageCount:o}}),e.getPageOptions=K(()=>[e.getPageCount()],i=>{let a=[];return i&&i>0&&(a=[...new Array(i)].fill(null).map((r,o)=>o)),a},Y(e.options,"debugTable")),e.getCanPreviousPage=()=>e.getState().pagination.pageIndex>0,e.getCanNextPage=()=>{const{pageIndex:i}=e.getState().pagination,a=e.getPageCount();return a===-1?!0:a===0?!1:i<a-1},e.previousPage=()=>e.setPageIndex(i=>i-1),e.nextPage=()=>e.setPageIndex(i=>i+1),e.getPrePaginationRowModel=()=>e.getExpandedRowModel(),e.getPaginationRowModel=()=>(!e._getPaginationRowModel&&e.options.getPaginationRowModel&&(e._getPaginationRowModel=e.options.getPaginationRowModel(e)),e.options.manualPagination||!e._getPaginationRowModel?e.getPrePaginationRowModel():e._getPaginationRowModel()),e.getPageCount=()=>{var i;return(i=e.options.pageCount)!=null?i:Math.ceil(e.getPrePaginationRowModel().rows.length/e.getState().pagination.pageSize)}}},ia=()=>({left:[],right:[]}),aa=()=>({top:[],bottom:[]}),Pl={getInitialState:e=>({columnPinning:ia(),rowPinning:aa(),...e}),getDefaultOptions:e=>({onColumnPinningChange:nt("columnPinning",e),onRowPinningChange:nt("rowPinning",e)}),createColumn:(e,n)=>{e.pin=t=>{const i=e.getLeafColumns().map(a=>a.id).filter(Boolean);n.setColumnPinning(a=>{var r,o;if(t==="right"){var u,s;return{left:((u=a==null?void 0:a.left)!=null?u:[]).filter(g=>!(i!=null&&i.includes(g))),right:[...((s=a==null?void 0:a.right)!=null?s:[]).filter(g=>!(i!=null&&i.includes(g))),...i]}}if(t==="left"){var c,l;return{left:[...((c=a==null?void 0:a.left)!=null?c:[]).filter(g=>!(i!=null&&i.includes(g))),...i],right:((l=a==null?void 0:a.right)!=null?l:[]).filter(g=>!(i!=null&&i.includes(g)))}}return{left:((r=a==null?void 0:a.left)!=null?r:[]).filter(g=>!(i!=null&&i.includes(g))),right:((o=a==null?void 0:a.right)!=null?o:[]).filter(g=>!(i!=null&&i.includes(g)))}})},e.getCanPin=()=>e.getLeafColumns().some(i=>{var a,r,o;return((a=i.columnDef.enablePinning)!=null?a:!0)&&((r=(o=n.options.enableColumnPinning)!=null?o:n.options.enablePinning)!=null?r:!0)}),e.getIsPinned=()=>{const t=e.getLeafColumns().map(u=>u.id),{left:i,right:a}=n.getState().columnPinning,r=t.some(u=>i==null?void 0:i.includes(u)),o=t.some(u=>a==null?void 0:a.includes(u));return r?"left":o?"right":!1},e.getPinnedIndex=()=>{var t,i;const a=e.getIsPinned();return a?(t=(i=n.getState().columnPinning)==null||(i=i[a])==null?void 0:i.indexOf(e.id))!=null?t:-1:0}},createRow:(e,n)=>{e.pin=(t,i,a)=>{const r=i?e.getLeafRows().map(s=>{let{id:c}=s;return c}):[],o=a?e.getParentRows().map(s=>{let{id:c}=s;return c}):[],u=new Set([...o,e.id,...r]);n.setRowPinning(s=>{var c,l;if(t==="bottom"){var g,b;return{top:((g=s==null?void 0:s.top)!=null?g:[]).filter(C=>!(u!=null&&u.has(C))),bottom:[...((b=s==null?void 0:s.bottom)!=null?b:[]).filter(C=>!(u!=null&&u.has(C))),...Array.from(u)]}}if(t==="top"){var h,E;return{top:[...((h=s==null?void 0:s.top)!=null?h:[]).filter(C=>!(u!=null&&u.has(C))),...Array.from(u)],bottom:((E=s==null?void 0:s.bottom)!=null?E:[]).filter(C=>!(u!=null&&u.has(C)))}}return{top:((c=s==null?void 0:s.top)!=null?c:[]).filter(C=>!(u!=null&&u.has(C))),bottom:((l=s==null?void 0:s.bottom)!=null?l:[]).filter(C=>!(u!=null&&u.has(C)))}})},e.getCanPin=()=>{var t;const{enableRowPinning:i,enablePinning:a}=n.options;return typeof i=="function"?i(e):(t=i??a)!=null?t:!0},e.getIsPinned=()=>{const t=[e.id],{top:i,bottom:a}=n.getState().rowPinning,r=t.some(u=>i==null?void 0:i.includes(u)),o=t.some(u=>a==null?void 0:a.includes(u));return r?"top":o?"bottom":!1},e.getPinnedIndex=()=>{var t,i;const a=e.getIsPinned();if(!a)return-1;const r=(t=n._getPinnedRows(a))==null?void 0:t.map(o=>{let{id:u}=o;return u});return(i=r==null?void 0:r.indexOf(e.id))!=null?i:-1},e.getCenterVisibleCells=K(()=>[e._getAllVisibleCells(),n.getState().columnPinning.left,n.getState().columnPinning.right],(t,i,a)=>{const r=[...i??[],...a??[]];return t.filter(o=>!r.includes(o.column.id))},Y(n.options,"debugRows")),e.getLeftVisibleCells=K(()=>[e._getAllVisibleCells(),n.getState().columnPinning.left,,],(t,i)=>(i??[]).map(r=>t.find(o=>o.column.id===r)).filter(Boolean).map(r=>({...r,position:"left"})),Y(n.options,"debugRows")),e.getRightVisibleCells=K(()=>[e._getAllVisibleCells(),n.getState().columnPinning.right],(t,i)=>(i??[]).map(r=>t.find(o=>o.column.id===r)).filter(Boolean).map(r=>({...r,position:"right"})),Y(n.options,"debugRows"))},createTable:e=>{e.setColumnPinning=n=>e.options.onColumnPinningChange==null?void 0:e.options.onColumnPinningChange(n),e.resetColumnPinning=n=>{var t,i;return e.setColumnPinning(n?ia():(t=(i=e.initialState)==null?void 0:i.columnPinning)!=null?t:ia())},e.getIsSomeColumnsPinned=n=>{var t;const i=e.getState().columnPinning;if(!n){var a,r;return!!((a=i.left)!=null&&a.length||(r=i.right)!=null&&r.length)}return!!((t=i[n])!=null&&t.length)},e.getLeftLeafColumns=K(()=>[e.getAllLeafColumns(),e.getState().columnPinning.left],(n,t)=>(t??[]).map(i=>n.find(a=>a.id===i)).filter(Boolean),Y(e.options,"debugColumns")),e.getRightLeafColumns=K(()=>[e.getAllLeafColumns(),e.getState().columnPinning.right],(n,t)=>(t??[]).map(i=>n.find(a=>a.id===i)).filter(Boolean),Y(e.options,"debugColumns")),e.getCenterLeafColumns=K(()=>[e.getAllLeafColumns(),e.getState().columnPinning.left,e.getState().columnPinning.right],(n,t,i)=>{const a=[...t??[],...i??[]];return n.filter(r=>!a.includes(r.id))},Y(e.options,"debugColumns")),e.setRowPinning=n=>e.options.onRowPinningChange==null?void 0:e.options.onRowPinningChange(n),e.resetRowPinning=n=>{var t,i;return e.setRowPinning(n?aa():(t=(i=e.initialState)==null?void 0:i.rowPinning)!=null?t:aa())},e.getIsSomeRowsPinned=n=>{var t;const i=e.getState().rowPinning;if(!n){var a,r;return!!((a=i.top)!=null&&a.length||(r=i.bottom)!=null&&r.length)}return!!((t=i[n])!=null&&t.length)},e._getPinnedRows=K(n=>[e.getRowModel().rows,e.getState().rowPinning[n],n],(n,t,i)=>{var a;return((a=e.options.keepPinnedRows)==null||a?(t??[]).map(o=>{const u=e.getRow(o,!0);return u.getIsAllParentsExpanded()?u:null}):(t??[]).map(o=>n.find(u=>u.id===o))).filter(Boolean).map(o=>({...o,position:i}))},Y(e.options,"debugRows")),e.getTopRows=()=>e._getPinnedRows("top"),e.getBottomRows=()=>e._getPinnedRows("bottom"),e.getCenterRows=K(()=>[e.getRowModel().rows,e.getState().rowPinning.top,e.getState().rowPinning.bottom],(n,t,i)=>{const a=new Set([...t??[],...i??[]]);return n.filter(r=>!a.has(r.id))},Y(e.options,"debugRows"))}},Bl={getInitialState:e=>({rowSelection:{},...e}),getDefaultOptions:e=>({onRowSelectionChange:nt("rowSelection",e),enableRowSelection:!0,enableMultiRowSelection:!0,enableSubRowSelection:!0}),createTable:e=>{e.setRowSelection=n=>e.options.onRowSelectionChange==null?void 0:e.options.onRowSelectionChange(n),e.resetRowSelection=n=>{var t;return e.setRowSelection(n?{}:(t=e.initialState.rowSelection)!=null?t:{})},e.toggleAllRowsSelected=n=>{e.setRowSelection(t=>{n=typeof n<"u"?n:!e.getIsAllRowsSelected();const i={...t},a=e.getPreGroupedRowModel().flatRows;return n?a.forEach(r=>{r.getCanSelect()&&(i[r.id]=!0)}):a.forEach(r=>{delete i[r.id]}),i})},e.toggleAllPageRowsSelected=n=>e.setRowSelection(t=>{const i=typeof n<"u"?n:!e.getIsAllPageRowsSelected(),a={...t};return e.getRowModel().rows.forEach(r=>{wa(a,r.id,i,!0,e)}),a}),e.getPreSelectedRowModel=()=>e.getCoreRowModel(),e.getSelectedRowModel=K(()=>[e.getState().rowSelection,e.getCoreRowModel()],(n,t)=>Object.keys(n).length?ra(e,t):{rows:[],flatRows:[],rowsById:{}},Y(e.options,"debugTable")),e.getFilteredSelectedRowModel=K(()=>[e.getState().rowSelection,e.getFilteredRowModel()],(n,t)=>Object.keys(n).length?ra(e,t):{rows:[],flatRows:[],rowsById:{}},Y(e.options,"debugTable")),e.getGroupedSelectedRowModel=K(()=>[e.getState().rowSelection,e.getSortedRowModel()],(n,t)=>Object.keys(n).length?ra(e,t):{rows:[],flatRows:[],rowsById:{}},Y(e.options,"debugTable")),e.getIsAllRowsSelected=()=>{const n=e.getFilteredRowModel().flatRows,{rowSelection:t}=e.getState();let i=!!(n.length&&Object.keys(t).length);return i&&n.some(a=>a.getCanSelect()&&!t[a.id])&&(i=!1),i},e.getIsAllPageRowsSelected=()=>{const n=e.getPaginationRowModel().flatRows.filter(a=>a.getCanSelect()),{rowSelection:t}=e.getState();let i=!!n.length;return i&&n.some(a=>!t[a.id])&&(i=!1),i},e.getIsSomeRowsSelected=()=>{var n;const t=Object.keys((n=e.getState().rowSelection)!=null?n:{}).length;return t>0&&t<e.getFilteredRowModel().flatRows.length},e.getIsSomePageRowsSelected=()=>{const n=e.getPaginationRowModel().flatRows;return e.getIsAllPageRowsSelected()?!1:n.filter(t=>t.getCanSelect()).some(t=>t.getIsSelected()||t.getIsSomeSelected())},e.getToggleAllRowsSelectedHandler=()=>n=>{e.toggleAllRowsSelected(n.target.checked)},e.getToggleAllPageRowsSelectedHandler=()=>n=>{e.toggleAllPageRowsSelected(n.target.checked)}},createRow:(e,n)=>{e.toggleSelected=(t,i)=>{const a=e.getIsSelected();n.setRowSelection(r=>{var o;if(t=typeof t<"u"?t:!a,e.getCanSelect()&&a===t)return r;const u={...r};return wa(u,e.id,t,(o=i==null?void 0:i.selectChildren)!=null?o:!0,n),u})},e.getIsSelected=()=>{const{rowSelection:t}=n.getState();return ar(e,t)},e.getIsSomeSelected=()=>{const{rowSelection:t}=n.getState();return xa(e,t)==="some"},e.getIsAllSubRowsSelected=()=>{const{rowSelection:t}=n.getState();return xa(e,t)==="all"},e.getCanSelect=()=>{var t;return typeof n.options.enableRowSelection=="function"?n.options.enableRowSelection(e):(t=n.options.enableRowSelection)!=null?t:!0},e.getCanSelectSubRows=()=>{var t;return typeof n.options.enableSubRowSelection=="function"?n.options.enableSubRowSelection(e):(t=n.options.enableSubRowSelection)!=null?t:!0},e.getCanMultiSelect=()=>{var t;return typeof n.options.enableMultiRowSelection=="function"?n.options.enableMultiRowSelection(e):(t=n.options.enableMultiRowSelection)!=null?t:!0},e.getToggleSelectedHandler=()=>{const t=e.getCanSelect();return i=>{var a;t&&e.toggleSelected((a=i.target)==null?void 0:a.checked)}}}},wa=(e,n,t,i,a)=>{var r;const o=a.getRow(n,!0);t?(o.getCanMultiSelect()||Object.keys(e).forEach(u=>delete e[u]),o.getCanSelect()&&(e[n]=!0)):delete e[n],i&&(r=o.subRows)!=null&&r.length&&o.getCanSelectSubRows()&&o.subRows.forEach(u=>wa(e,u.id,t,i,a))};function ra(e,n){const t=e.getState().rowSelection,i=[],a={},r=function(o,u){return o.map(s=>{var c;const l=ar(s,t);if(l&&(i.push(s),a[s.id]=s),(c=s.subRows)!=null&&c.length&&(s={...s,subRows:r(s.subRows)}),l)return s}).filter(Boolean)};return{rows:r(n.rows),flatRows:i,rowsById:a}}function ar(e,n){var t;return(t=n[e.id])!=null?t:!1}function xa(e,n,t){var i;if(!((i=e.subRows)!=null&&i.length))return!1;let a=!0,r=!1;return e.subRows.forEach(o=>{if(!(r&&!a)&&(o.getCanSelect()&&(ar(o,n)?r=!0:a=!1),o.subRows&&o.subRows.length)){const u=xa(o,n);u==="all"?r=!0:(u==="some"&&(r=!0),a=!1)}}),a?"all":r?"some":!1}const Aa=/([0-9]+)/gm,Vl=(e,n,t)=>iu(en(e.getValue(t)).toLowerCase(),en(n.getValue(t)).toLowerCase()),zl=(e,n,t)=>iu(en(e.getValue(t)),en(n.getValue(t))),$l=(e,n,t)=>rr(en(e.getValue(t)).toLowerCase(),en(n.getValue(t)).toLowerCase()),jl=(e,n,t)=>rr(en(e.getValue(t)),en(n.getValue(t))),Ul=(e,n,t)=>{const i=e.getValue(t),a=n.getValue(t);return i>a?1:i<a?-1:0},ql=(e,n,t)=>rr(e.getValue(t),n.getValue(t));function rr(e,n){return e===n?0:e>n?1:-1}function en(e){return typeof e=="number"?isNaN(e)||e===1/0||e===-1/0?"":String(e):typeof e=="string"?e:""}function iu(e,n){const t=e.split(Aa).filter(Boolean),i=n.split(Aa).filter(Boolean);for(;t.length&&i.length;){const a=t.shift(),r=i.shift(),o=parseInt(a,10),u=parseInt(r,10),s=[o,u].sort();if(isNaN(s[0])){if(a>r)return 1;if(r>a)return-1;continue}if(isNaN(s[1]))return isNaN(o)?-1:1;if(o>u)return 1;if(u>o)return-1}return t.length-i.length}const Tn={alphanumeric:Vl,alphanumericCaseSensitive:zl,text:$l,textCaseSensitive:jl,datetime:Ul,basic:ql},Wl={getInitialState:e=>({sorting:[],...e}),getDefaultColumnDef:()=>({sortingFn:"auto",sortUndefined:1}),getDefaultOptions:e=>({onSortingChange:nt("sorting",e),isMultiSortEvent:n=>n.shiftKey}),createColumn:(e,n)=>{e.getAutoSortingFn=()=>{const t=n.getFilteredRowModel().flatRows.slice(10);let i=!1;for(const a of t){const r=a==null?void 0:a.getValue(e.id);if(Object.prototype.toString.call(r)==="[object Date]")return Tn.datetime;if(typeof r=="string"&&(i=!0,r.split(Aa).length>1))return Tn.alphanumeric}return i?Tn.text:Tn.basic},e.getAutoSortDir=()=>{const t=n.getFilteredRowModel().flatRows[0];return typeof(t==null?void 0:t.getValue(e.id))=="string"?"asc":"desc"},e.getSortingFn=()=>{var t,i;if(!e)throw new Error;return Gi(e.columnDef.sortingFn)?e.columnDef.sortingFn:e.columnDef.sortingFn==="auto"?e.getAutoSortingFn():(t=(i=n.options.sortingFns)==null?void 0:i[e.columnDef.sortingFn])!=null?t:Tn[e.columnDef.sortingFn]},e.toggleSorting=(t,i)=>{const a=e.getNextSortingOrder(),r=typeof t<"u"&&t!==null;n.setSorting(o=>{const u=o==null?void 0:o.find(h=>h.id===e.id),s=o==null?void 0:o.findIndex(h=>h.id===e.id);let c=[],l,g=r?t:a==="desc";if(o!=null&&o.length&&e.getCanMultiSort()&&i?u?l="toggle":l="add":o!=null&&o.length&&s!==o.length-1?l="replace":u?l="toggle":l="replace",l==="toggle"&&(r||a||(l="remove")),l==="add"){var b;c=[...o,{id:e.id,desc:g}],c.splice(0,c.length-((b=n.options.maxMultiSortColCount)!=null?b:Number.MAX_SAFE_INTEGER))}else l==="toggle"?c=o.map(h=>h.id===e.id?{...h,desc:g}:h):l==="remove"?c=o.filter(h=>h.id!==e.id):c=[{id:e.id,desc:g}];return c})},e.getFirstSortDir=()=>{var t,i;return((t=(i=e.columnDef.sortDescFirst)!=null?i:n.options.sortDescFirst)!=null?t:e.getAutoSortDir()==="desc")?"desc":"asc"},e.getNextSortingOrder=t=>{var i,a;const r=e.getFirstSortDir(),o=e.getIsSorted();return o?o!==r&&((i=n.options.enableSortingRemoval)==null||i)&&(!(t&&(a=n.options.enableMultiRemove)!=null)||a)?!1:o==="desc"?"asc":"desc":r},e.getCanSort=()=>{var t,i;return((t=e.columnDef.enableSorting)!=null?t:!0)&&((i=n.options.enableSorting)!=null?i:!0)&&!!e.accessorFn},e.getCanMultiSort=()=>{var t,i;return(t=(i=e.columnDef.enableMultiSort)!=null?i:n.options.enableMultiSort)!=null?t:!!e.accessorFn},e.getIsSorted=()=>{var t;const i=(t=n.getState().sorting)==null?void 0:t.find(a=>a.id===e.id);return i?i.desc?"desc":"asc":!1},e.getSortIndex=()=>{var t,i;return(t=(i=n.getState().sorting)==null?void 0:i.findIndex(a=>a.id===e.id))!=null?t:-1},e.clearSorting=()=>{n.setSorting(t=>t!=null&&t.length?t.filter(i=>i.id!==e.id):[])},e.getToggleSortingHandler=()=>{const t=e.getCanSort();return i=>{t&&(i.persist==null||i.persist(),e.toggleSorting==null||e.toggleSorting(void 0,e.getCanMultiSort()?n.options.isMultiSortEvent==null?void 0:n.options.isMultiSortEvent(i):!1))}}},createTable:e=>{e.setSorting=n=>e.options.onSortingChange==null?void 0:e.options.onSortingChange(n),e.resetSorting=n=>{var t,i;e.setSorting(n?[]:(t=(i=e.initialState)==null?void 0:i.sorting)!=null?t:[])},e.getPreSortedRowModel=()=>e.getGroupedRowModel(),e.getSortedRowModel=()=>(!e._getSortedRowModel&&e.options.getSortedRowModel&&(e._getSortedRowModel=e.options.getSortedRowModel(e)),e.options.manualSorting||!e._getSortedRowModel?e.getPreSortedRowModel():e._getSortedRowModel())}},Xl={getInitialState:e=>({columnVisibility:{},...e}),getDefaultOptions:e=>({onColumnVisibilityChange:nt("columnVisibility",e)}),createColumn:(e,n)=>{e.toggleVisibility=t=>{e.getCanHide()&&n.setColumnVisibility(i=>({...i,[e.id]:t??!e.getIsVisible()}))},e.getIsVisible=()=>{var t,i;return(t=(i=n.getState().columnVisibility)==null?void 0:i[e.id])!=null?t:!0},e.getCanHide=()=>{var t,i;return((t=e.columnDef.enableHiding)!=null?t:!0)&&((i=n.options.enableHiding)!=null?i:!0)},e.getToggleVisibilityHandler=()=>t=>{e.toggleVisibility==null||e.toggleVisibility(t.target.checked)}},createRow:(e,n)=>{e._getAllVisibleCells=K(()=>[e.getAllCells(),n.getState().columnVisibility],t=>t.filter(i=>i.column.getIsVisible()),Y(n.options,"debugRows")),e.getVisibleCells=K(()=>[e.getLeftVisibleCells(),e.getCenterVisibleCells(),e.getRightVisibleCells()],(t,i,a)=>[...t,...i,...a],Y(n.options,"debugRows"))},createTable:e=>{const n=(t,i)=>K(()=>[i(),i().filter(a=>a.getIsVisible()).map(a=>a.id).join("_")],a=>a.filter(r=>r.getIsVisible==null?void 0:r.getIsVisible()),Y(e.options,"debugColumns"));e.getVisibleFlatColumns=n("getVisibleFlatColumns",()=>e.getAllFlatColumns()),e.getVisibleLeafColumns=n("getVisibleLeafColumns",()=>e.getAllLeafColumns()),e.getLeftVisibleLeafColumns=n("getLeftVisibleLeafColumns",()=>e.getLeftLeafColumns()),e.getRightVisibleLeafColumns=n("getRightVisibleLeafColumns",()=>e.getRightLeafColumns()),e.getCenterVisibleLeafColumns=n("getCenterVisibleLeafColumns",()=>e.getCenterLeafColumns()),e.setColumnVisibility=t=>e.options.onColumnVisibilityChange==null?void 0:e.options.onColumnVisibilityChange(t),e.resetColumnVisibility=t=>{var i;e.setColumnVisibility(t?{}:(i=e.initialState.columnVisibility)!=null?i:{})},e.toggleAllColumnsVisible=t=>{var i;t=(i=t)!=null?i:!e.getIsAllColumnsVisible(),e.setColumnVisibility(e.getAllLeafColumns().reduce((a,r)=>({...a,[r.id]:t||!(r.getCanHide!=null&&r.getCanHide())}),{}))},e.getIsAllColumnsVisible=()=>!e.getAllLeafColumns().some(t=>!(t.getIsVisible!=null&&t.getIsVisible())),e.getIsSomeColumnsVisible=()=>e.getAllLeafColumns().some(t=>t.getIsVisible==null?void 0:t.getIsVisible()),e.getToggleAllColumnsVisibilityHandler=()=>t=>{var i;e.toggleAllColumnsVisible((i=t.target)==null?void 0:i.checked)}}};function jn(e,n){return n?n==="center"?e.getCenterVisibleLeafColumns():n==="left"?e.getLeftVisibleLeafColumns():e.getRightVisibleLeafColumns():e.getVisibleLeafColumns()}const Hr=[yl,Xl,Il,Pl,xl,Wl,Hl,wl,Ml,Bl,El];function Kl(e){var n;(e.debugAll||e.debugTable)&&console.info("Creating Table Instance...");let t={_features:Hr};const i=t._features.reduce((l,g)=>Object.assign(l,g.getDefaultOptions==null?void 0:g.getDefaultOptions(t)),{}),a=l=>t.options.mergeOptions?t.options.mergeOptions(i,l):{...i,...l};let o={...{},...(n=e.initialState)!=null?n:{}};t._features.forEach(l=>{var g;o=(g=l.getInitialState==null?void 0:l.getInitialState(o))!=null?g:o});const u=[];let s=!1;const c={_features:Hr,options:{...i,...e},initialState:o,_queue:l=>{u.push(l),s||(s=!0,Promise.resolve().then(()=>{for(;u.length;)u.shift()();s=!1}).catch(g=>setTimeout(()=>{throw g})))},reset:()=>{t.setState(t.initialState)},setOptions:l=>{const g=Jt(l,t.options);t.options=a(g)},getState:()=>t.options.state,setState:l=>{t.options.onStateChange==null||t.options.onStateChange(l)},_getRowId:(l,g,b)=>{var h;return(h=t.options.getRowId==null?void 0:t.options.getRowId(l,g,b))!=null?h:`${b?[b.id,g].join("."):g}`},getCoreRowModel:()=>(t._getCoreRowModel||(t._getCoreRowModel=t.options.getCoreRowModel(t)),t._getCoreRowModel()),getRowModel:()=>t.getPaginationRowModel(),getRow:(l,g)=>{let b=(g?t.getPrePaginationRowModel():t.getRowModel()).rowsById[l];if(!b&&(b=t.getCoreRowModel().rowsById[l],!b))throw new Error;return b},_getDefaultColumnDef:K(()=>[t.options.defaultColumn],l=>{var g;return l=(g=l)!=null?g:{},{header:b=>{const h=b.header.column.columnDef;return h.accessorKey?h.accessorKey:h.accessorFn?h.id:null},cell:b=>{var h,E;return(h=(E=b.renderValue())==null||E.toString==null?void 0:E.toString())!=null?h:null},...t._features.reduce((b,h)=>Object.assign(b,h.getDefaultColumnDef==null?void 0:h.getDefaultColumnDef()),{}),...l}},Y(e,"debugColumns")),_getColumnDefs:()=>t.options.columns,getAllColumns:K(()=>[t._getColumnDefs()],l=>{const g=function(b,h,E){return E===void 0&&(E=0),b.map(C=>{const w=Cl(t,C,E,h),S=C;return w.columns=S.columns?g(S.columns,w,E+1):[],w})};return g(l)},Y(e,"debugColumns")),getAllFlatColumns:K(()=>[t.getAllColumns()],l=>l.flatMap(g=>g.getFlatColumns()),Y(e,"debugColumns")),_getAllFlatColumnsById:K(()=>[t.getAllFlatColumns()],l=>l.reduce((g,b)=>(g[b.id]=b,g),{}),Y(e,"debugColumns")),getAllLeafColumns:K(()=>[t.getAllColumns(),t._getOrderColumnsFn()],(l,g)=>{let b=l.flatMap(h=>h.getLeafColumns());return g(b)},Y(e,"debugColumns")),getColumn:l=>t._getAllFlatColumnsById()[l]};Object.assign(t,c);for(let l=0;l<t._features.length;l++){const g=t._features[l];g==null||g.createTable==null||g.createTable(t)}return t}function Yl(e,n,t,i){const a=()=>{var o;return(o=r.getValue())!=null?o:e.options.renderFallbackValue},r={id:`${n.id}_${t.id}`,row:n,column:t,getValue:()=>n.getValue(i),renderValue:a,getContext:K(()=>[e,t,n,r],(o,u,s,c)=>({table:o,column:u,row:s,cell:c,getValue:c.getValue,renderValue:c.renderValue}),Y(e.options,"debugCells"))};return e._features.forEach(o=>{o.createCell==null||o.createCell(r,t,n,e)},{}),r}const or=(e,n,t,i,a,r,o)=>{let u={id:n,index:i,original:t,depth:a,parentId:o,_valuesCache:{},_uniqueValuesCache:{},getValue:s=>{if(u._valuesCache.hasOwnProperty(s))return u._valuesCache[s];const c=e.getColumn(s);if(c!=null&&c.accessorFn)return u._valuesCache[s]=c.accessorFn(u.original,i),u._valuesCache[s]},getUniqueValues:s=>{if(u._uniqueValuesCache.hasOwnProperty(s))return u._uniqueValuesCache[s];const c=e.getColumn(s);if(c!=null&&c.accessorFn)return c.columnDef.getUniqueValues?(u._uniqueValuesCache[s]=c.columnDef.getUniqueValues(u.original,i),u._uniqueValuesCache[s]):(u._uniqueValuesCache[s]=[u.getValue(s)],u._uniqueValuesCache[s])},renderValue:s=>{var c;return(c=u.getValue(s))!=null?c:e.options.renderFallbackValue},subRows:[],getLeafRows:()=>vl(u.subRows,s=>s.subRows),getParentRow:()=>u.parentId?e.getRow(u.parentId,!0):void 0,getParentRows:()=>{let s=[],c=u;for(;;){const l=c.getParentRow();if(!l)break;s.push(l),c=l}return s.reverse()},getAllCells:K(()=>[e.getAllLeafColumns()],s=>s.map(c=>Yl(e,u,c,c.id)),Y(e.options,"debugRows")),_getAllCellsByColumnId:K(()=>[u.getAllCells()],s=>s.reduce((c,l)=>(c[l.column.id]=l,c),{}),Y(e.options,"debugRows"))};for(let s=0;s<e._features.length;s++){const c=e._features[s];c==null||c.createRow==null||c.createRow(u,e)}return u};function au(){return e=>K(()=>[e.options.data],n=>{const t={rows:[],flatRows:[],rowsById:{}},i=function(a,r,o){r===void 0&&(r=0);const u=[];for(let c=0;c<a.length;c++){const l=or(e,e._getRowId(a[c],c,o),a[c],c,r,void 0,o==null?void 0:o.id);if(t.flatRows.push(l),t.rowsById[l.id]=l,u.push(l),e.options.getSubRows){var s;l.originalSubRows=e.options.getSubRows(a[c],c),(s=l.originalSubRows)!=null&&s.length&&(l.subRows=i(l.originalSubRows,r+1,l))}}return u};return t.rows=i(n),t},Y(e.options,"debugTable","getRowModel",()=>e._autoResetPageIndex()))}function Jl(e,n,t){return t.options.filterFromLeafRows?Zl(e,n,t):Ql(e,n,t)}function Zl(e,n,t){var i;const a=[],r={},o=(i=t.options.maxLeafRowFilterDepth)!=null?i:100,u=function(s,c){c===void 0&&(c=0);const l=[];for(let b=0;b<s.length;b++){var g;let h=s[b];const E=or(t,h.id,h.original,h.index,h.depth,void 0,h.parentId);if(E.columnFilters=h.columnFilters,(g=h.subRows)!=null&&g.length&&c<o){if(E.subRows=u(h.subRows,c+1),h=E,n(h)&&!E.subRows.length){l.push(h),r[h.id]=h,a.push(h);continue}if(n(h)||E.subRows.length){l.push(h),r[h.id]=h,a.push(h);continue}}else h=E,n(h)&&(l.push(h),r[h.id]=h,a.push(h))}return l};return{rows:u(e),flatRows:a,rowsById:r}}function Ql(e,n,t){var i;const a=[],r={},o=(i=t.options.maxLeafRowFilterDepth)!=null?i:100,u=function(s,c){c===void 0&&(c=0);const l=[];for(let b=0;b<s.length;b++){let h=s[b];if(n(h)){var g;if((g=h.subRows)!=null&&g.length&&c<o){const C=or(t,h.id,h.original,h.index,h.depth,void 0,h.parentId);C.subRows=u(h.subRows,c+1),h=C}l.push(h),a.push(h),r[h.id]=h}}return l};return{rows:u(e),flatRows:a,rowsById:r}}function e0(){return e=>K(()=>[e.getPreFilteredRowModel(),e.getState().columnFilters,e.getState().globalFilter],(n,t,i)=>{if(!n.rows.length||!(t!=null&&t.length)&&!i){for(let b=0;b<n.flatRows.length;b++)n.flatRows[b].columnFilters={},n.flatRows[b].columnFiltersMeta={};return n}const a=[],r=[];(t??[]).forEach(b=>{var h;const E=e.getColumn(b.id);if(!E)return;const C=E.getFilterFn();C&&a.push({id:b.id,filterFn:C,resolvedValue:(h=C.resolveFilterValue==null?void 0:C.resolveFilterValue(b.value))!=null?h:b.value})});const o=t.map(b=>b.id),u=e.getGlobalFilterFn(),s=e.getAllLeafColumns().filter(b=>b.getCanGlobalFilter());i&&u&&s.length&&(o.push("__global__"),s.forEach(b=>{var h;r.push({id:b.id,filterFn:u,resolvedValue:(h=u.resolveFilterValue==null?void 0:u.resolveFilterValue(i))!=null?h:i})}));let c,l;for(let b=0;b<n.flatRows.length;b++){const h=n.flatRows[b];if(h.columnFilters={},a.length)for(let E=0;E<a.length;E++){c=a[E];const C=c.id;h.columnFilters[C]=c.filterFn(h,C,c.resolvedValue,w=>{h.columnFiltersMeta[C]=w})}if(r.length){for(let E=0;E<r.length;E++){l=r[E];const C=l.id;if(l.filterFn(h,C,l.resolvedValue,w=>{h.columnFiltersMeta[C]=w})){h.columnFilters.__global__=!0;break}}h.columnFilters.__global__!==!0&&(h.columnFilters.__global__=!1)}}const g=b=>{for(let h=0;h<o.length;h++)if(b.columnFilters[o[h]]===!1)return!1;return!0};return Jl(n.rows,g,e)},Y(e.options,"debugTable","getFilteredRowModel",()=>e._autoResetPageIndex()))}function t0(){return e=>K(()=>[e.getState().sorting,e.getPreSortedRowModel()],(n,t)=>{if(!t.rows.length||!(n!=null&&n.length))return t;const i=e.getState().sorting,a=[],r=i.filter(s=>{var c;return(c=e.getColumn(s.id))==null?void 0:c.getCanSort()}),o={};r.forEach(s=>{const c=e.getColumn(s.id);c&&(o[s.id]={sortUndefined:c.columnDef.sortUndefined,invertSorting:c.columnDef.invertSorting,sortingFn:c.getSortingFn()})});const u=s=>{const c=s.map(l=>({...l}));return c.sort((l,g)=>{for(let h=0;h<r.length;h+=1){var b;const E=r[h],C=o[E.id],w=(b=E==null?void 0:E.desc)!=null?b:!1;let S=0;if(C.sortUndefined){const D=l.getValue(E.id),N=g.getValue(E.id),V=D===void 0,L=N===void 0;(V||L)&&(S=V&&L?0:V?C.sortUndefined:-C.sortUndefined)}if(S===0&&(S=C.sortingFn(l,g,E.id)),S!==0)return w&&(S*=-1),C.invertSorting&&(S*=-1),S}return l.index-g.index}),c.forEach(l=>{var g;a.push(l),(g=l.subRows)!=null&&g.length&&(l.subRows=u(l.subRows))}),c};return{rows:u(t.rows),flatRows:a,rowsById:t.rowsById}},Y(e.options,"debugTable","getSortedRowModel",()=>e._autoResetPageIndex()))}function n0(){return e=>K(()=>[e.getState().expanded,e.getPreExpandedRowModel(),e.options.paginateExpandedRows],(n,t,i)=>!t.rows.length||n!==!0&&!Object.keys(n??{}).length||!i?t:ru(t),Y(e.options,"debugTable"))}function ru(e){const n=[],t=i=>{var a;n.push(i),(a=i.subRows)!=null&&a.length&&i.getIsExpanded()&&i.subRows.forEach(t)};return e.rows.forEach(t),{rows:n,flatRows:e.flatRows,rowsById:e.rowsById}}function i0(e){return n=>K(()=>[n.getState().pagination,n.getPrePaginationRowModel(),n.options.paginateExpandedRows?void 0:n.getState().expanded],(t,i)=>{if(!i.rows.length)return i;const{pageSize:a,pageIndex:r}=t;let{rows:o,flatRows:u,rowsById:s}=i;const c=a*r,l=c+a;o=o.slice(c,l);let g;n.options.paginateExpandedRows?g={rows:o,flatRows:u,rowsById:s}:g=ru({rows:o,flatRows:u,rowsById:s}),g.flatRows=[];const b=h=>{g.flatRows.push(h),h.subRows.length&&h.subRows.forEach(b)};return g.rows.forEach(b),g},Y(n.options,"debugTable"))}/**
   * react-table
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */function _a(e,n){return e?a0(e)?y.createElement(e,n):e:null}function a0(e){return r0(e)||typeof e=="function"||o0(e)}function r0(e){return typeof e=="function"&&(()=>{const n=Object.getPrototypeOf(e);return n.prototype&&n.prototype.isReactComponent})()}function o0(e){return typeof e=="object"&&typeof e.$$typeof=="symbol"&&["react.memo","react.forward_ref"].includes(e.$$typeof.description)}function ou(e){const n={state:{},onStateChange:()=>{},renderFallbackValue:null,...e},[t]=y.useState(()=>({current:Kl(n)})),[i,a]=y.useState(()=>t.current.initialState);return t.current.setOptions(r=>({...r,...e,state:{...i,...e.state},onStateChange:o=>{a(o),e.onStateChange==null||e.onStateChange(o)}})),t.current}const Vt={Left:"left",Right:"right"},Re={headerSortIndicator:"table__header__sort-indicator",headerRow:"table__header-row",headerCell:"table__header-cell",bodyRow:"table__body-row",bodyCell:"table__body-cell",pinnedCells:"table__pinned-cells",rowSelect:"table__row-select",tree:{node:"tree__node",chevron:"tree__chevron",checkbox:"tree__checkbox",radio:"tree__radio"},rowActions:{droplistTrigger:"table__body-row__droplistTrigger",droplist:"table__body-row__actions-droplist"},statusIndicator:"table__status-indicator",statusLabel:"table__status-label",toolbar:"table__toolbar"},Oi=10,u0=[],s0=[],c0={};var ui=(e=>(e.Status="snack_predefined_statusColumn",e.Selection="selectionCell",e.RowActions="rowActions",e))(ui||{});const l0=["snack_predefined_statusColumn","selectionCell","rowActions"],uu=y.createContext({updateCellMap:()=>{}}),d0=e=>{const[n,t]=y.useState({}),i=y.useCallback(({columnId:r,size:o,cellId:u})=>{t(s=>({...s,[r]:{...s[r],[u]:o}}))},[]),a=y.useMemo(()=>Object.entries(n).reduce((r,[o,u])=>{const s=Math.max(...Object.values(u));return{...r,[o]:s}},{}),[n]);return y.useEffect(()=>{e.setColumnSizing(r=>({...r,...a}))},[a,e]),{updateCellMap:i}},h0=10,g0=(e,n)=>{const{updateCellMap:t}=y.useContext(uu),i=y.useRef(null);return y.useEffect(()=>{var a;return t({columnId:e,size:(((a=i.current)==null?void 0:a.clientWidth)||0)+h0,cellId:n.id}),()=>{t({columnId:e,size:0,cellId:n.id})}},[e,n,t]),{ref:i}};function ur(e,n,t){const i=e.slice();return i.splice(t<0?i.length+t:t,0,i.splice(n,1)[0]),i}function f0(e,n){return e.reduce((t,i,a)=>{const r=n.get(i);return r&&(t[a]=r),t},Array(e.length))}function fi(e){return e!==null&&e>=0}function p0(e,n){if(e===n)return!0;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==n[t])return!1;return!0}function m0(e){return typeof e=="boolean"?{draggable:e,droppable:e}:e}const pi={scaleX:1,scaleY:1},su=e=>{var n;let{rects:t,activeNodeRect:i,activeIndex:a,overIndex:r,index:o}=e;const u=(n=t[a])!=null?n:i;if(!u)return null;const s=b0(t,o,a);if(o===a){const c=t[r];return c?{x:a<r?c.left+c.width-(u.left+u.width):c.left-u.left,y:0,...pi}:null}return o>a&&o<=r?{x:-u.width-s,y:0,...pi}:o<a&&o>=r?{x:u.width+s,y:0,...pi}:{x:0,y:0,...pi}};function b0(e,n,t){const i=e[n],a=e[n-1],r=e[n+1];return!i||!a&&!r?0:t<n?a?i.left-(a.left+a.width):r.left-(i.left+i.width):r?r.left-(i.left+i.width):i.left-(a.left+a.width)}const cu=e=>{let{rects:n,activeIndex:t,overIndex:i,index:a}=e;const r=ur(n,i,t),o=n[a],u=r[a];return!u||!o?null:{x:u.left-o.left,y:u.top-o.top,scaleX:u.width/o.width,scaleY:u.height/o.height}},lu="Sortable",du=Ue.createContext({activeIndex:-1,containerId:lu,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:cu,disabled:{draggable:!1,droppable:!1}});function hu(e){let{children:n,id:t,items:i,strategy:a=cu,disabled:r=!1}=e;const{active:o,dragOverlay:u,droppableRects:s,over:c,measureDroppableContainers:l}=fl(),g=oi(lu,t),b=u.rect!==null,h=y.useMemo(()=>i.map(q=>typeof q=="object"&&"id"in q?q.id:q),[i]),E=o!=null,C=o?h.indexOf(o.id):-1,w=c?h.indexOf(c.id):-1,S=y.useRef(h),D=!p0(h,S.current),N=w!==-1&&C===-1||D,V=m0(r);Nt(()=>{D&&E&&l(h)},[D,h,E,l]),y.useEffect(()=>{S.current=h},[h]);const L=y.useMemo(()=>({activeIndex:C,containerId:g,disabled:V,disableTransforms:N,items:h,overIndex:w,useDragOverlay:b,sortedRects:f0(h,s),strategy:a}),[C,g,V.draggable,V.droppable,N,h,w,s,b,a]);return Ue.createElement(du.Provider,{value:L},n)}const k0=e=>{let{id:n,items:t,activeIndex:i,overIndex:a}=e;return ur(t,i,a).indexOf(n)},v0=e=>{let{containerId:n,isSorting:t,wasDragging:i,index:a,items:r,newIndex:o,previousItems:u,previousContainerId:s,transition:c}=e;return!c||!i||u!==r&&a===o?!1:t?!0:o!==a&&n===s},C0={duration:200,easing:"ease"},gu="transform",y0=Jn.Transition.toString({property:gu,duration:0,easing:"linear"}),E0={roleDescription:"sortable"};function S0(e){let{disabled:n,index:t,node:i,rect:a}=e;const[r,o]=y.useState(null),u=y.useRef(t);return Nt(()=>{if(!n&&t!==u.current&&i.current){const s=a.current;if(s){const c=Rn(i.current,{ignoreTransform:!0}),l={x:s.left-c.left,y:s.top-c.top,scaleX:s.width/c.width,scaleY:s.height/c.height};(l.x||l.y)&&o(l)}}t!==u.current&&(u.current=t)},[n,t,i,a]),y.useEffect(()=>{r&&o(null)},[r]),r}function sr(e){let{animateLayoutChanges:n=v0,attributes:t,disabled:i,data:a,getNewIndex:r=k0,id:o,strategy:u,resizeObserverConfig:s,transition:c=C0}=e;const{items:l,containerId:g,activeIndex:b,disabled:h,disableTransforms:E,sortedRects:C,overIndex:w,useDragOverlay:S,strategy:D}=y.useContext(du),N=w0(i,h),V=l.indexOf(o),L=y.useMemo(()=>({sortable:{containerId:g,index:V,items:l},...a}),[g,a,V,l]),q=y.useMemo(()=>l.slice(l.indexOf(o)),[l,o]),{rect:O,node:P,isOver:H,setNodeRef:j}=bl({id:o,data:L,disabled:N.droppable,resizeObserverConfig:{updateMeasurementsFor:q,...s}}),{active:M,activatorEvent:X,activeNodeRect:Z,attributes:ie,setNodeRef:ve,listeners:it,isDragging:ue,over:ce,setActivatorNodeRef:se,transform:mt}=gl({id:o,data:L,attributes:{...E0,...t},disabled:N.draggable}),Ke=Xs(j,ve),ae=!!M,he=ae&&!E&&fi(b)&&fi(w),Me=!S&&ue,Pe=Me&&he?mt:null,bt=he?Pe??(u??D)({rects:C,activeNodeRect:Z,activeIndex:b,overIndex:w,index:V}):null,Ye=fi(b)&&fi(w)?r({id:o,items:l,activeIndex:b,overIndex:w}):V,ee=M==null?void 0:M.id,Q=y.useRef({activeId:ee,items:l,newIndex:Ye,containerId:g}),Be=l!==Q.current.items,Ve=n({active:M,containerId:g,isDragging:ue,isSorting:ae,id:o,index:V,items:l,newIndex:Q.current.newIndex,previousItems:Q.current.items,previousContainerId:Q.current.containerId,transition:c,wasDragging:Q.current.activeId!=null}),Gt=S0({disabled:!Ve,index:V,node:P,rect:O});return y.useEffect(()=>{ae&&Q.current.newIndex!==Ye&&(Q.current.newIndex=Ye),g!==Q.current.containerId&&(Q.current.containerId=g),l!==Q.current.items&&(Q.current.items=l)},[ae,Ye,g,l]),y.useEffect(()=>{if(ee===Q.current.activeId)return;if(ee!=null&&Q.current.activeId==null){Q.current.activeId=ee;return}const at=setTimeout(()=>{Q.current.activeId=ee},50);return()=>clearTimeout(at)},[ee]),{active:M,activeIndex:b,attributes:ie,data:L,rect:O,index:V,newIndex:Ye,items:l,isOver:H,isSorting:ae,isDragging:ue,listeners:it,node:P,overIndex:w,over:ce,setNodeRef:Ke,setActivatorNodeRef:se,setDroppableNodeRef:j,setDraggableNodeRef:ve,transform:Gt??bt,transition:He()};function He(){if(Gt||Be&&Q.current.newIndex===V)return y0;if(!(Me&&!Za(X)||!c)&&(ae||Ve))return Jn.Transition.toString({...c,property:gu})}}function w0(e,n){var t,i;return typeof e=="boolean"?{draggable:e,droppable:!1}:{draggable:(t=e==null?void 0:e.draggable)!=null?t:n.draggable,droppable:(i=e==null?void 0:e.droppable)!=null?i:n.droppable}}ne.Down,ne.Right,ne.Up,ne.Left;const fu=y.createContext({dropListOpened:!1,setDropListOpen(){}}),x0=()=>y.useContext(fu),pu=y.createContext({table:{}}),mu=()=>y.useContext(pu);function Tr(e){return e.some(n=>n.headers.length)}function A0(){const{table:e}=mu(),n=e._getColumnDefs(),t=e.getIsSomeColumnsPinned(),{columnOrder:i}=e.getState();return y.useMemo(()=>{if(!t)return{unpinned:e.getHeaderGroups()};const a=e.getLeftHeaderGroups(),r=e.getRightHeaderGroups();return{leftPinned:Tr(a)?a:void 0,rightPinned:Tr(r)?r:void 0,unpinned:e.getCenterHeaderGroups()}},[e,t,n,i])}function _0(e){const{table:n}=mu(),t=n.getIsSomeColumnsPinned(),i=n._getColumnDefs(),{columnOrder:a}=n.getState();return y.useMemo(()=>{if(!t)return{unpinned:e.getVisibleCells()};const r=e.getLeftVisibleCells(),o=e.getRightVisibleCells();return{leftPinned:r.length?r:void 0,rightPinned:o.length?o:void 0,unpinned:e.getCenterVisibleCells()}},[e,t,i,a])}function bu(e,n){const t=e.column,{isDragging:i,transform:a}=sr({id:t.id}),r=t.columnDef.minSize,o=t.columnDef.maxSize,u=`var(--table-column-${t.id}-size)`,s=`var(--table-column-${t.id}-flex)`,c="headerGroup"in e;return y.useMemo(()=>{const l={minWidth:r,width:u,maxWidth:o,flexShrink:s};return n!=null&&n.isDraggable&&(l.opacity=i?.8:1,l.position="relative",l.transform=Jn.Translate.toString(a),l.transition="width transform 0.2s ease-in-out",l.zIndex=i?1:void 0,c&&(l.whiteSpace="nowrap")),l},[n==null?void 0:n.isDraggable,s,i,c,o,r,a,u])}const G0="_tableCell_joxhi_1",O0={tableCell:G0},Fi=y.forwardRef(({onClick:e,onMouseUp:n,className:t,style:i,children:a,role:r="cell",...o},u)=>R.jsx("div",{role:r,onClick:e,onMouseUp:n,className:gn(O0.tableCell,t),style:i,ref:u,...o,children:a}));try{Fi.displayName="Cell",Fi.__docgenInfo={description:"",displayName:"Cell",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"MouseEventHandler"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},role:{defaultValue:{value:"cell"},description:"",name:"role",required:!1,type:{name:"enum",value:[{value:'"cell"'},{value:'"columnheader"'}]}}}}}catch{}const F0="_tableBodyCell_bg2ik_1",D0={tableBodyCell:F0};function Un({cell:e,className:n,rowAutoHeight:t,isDraggable:i,...a}){const r=e.column.columnDef,o=bu(e,{isDraggable:i}),{setNodeRef:u}=sr({id:e.column.id});return R.jsx(Fi,{...a,ref:i?u:void 0,style:o,className:gn(D0.tableBodyCell,n,r.cellClassName),"data-row-auto-height":t||void 0,"data-align":r.align,"data-no-padding":r.noBodyCellPadding||void 0,"data-column-id":e.column.id,"data-test-id":Re.bodyCell,children:_a(r.cell,e.getContext())})}try{Un.displayName="BodyCell",Un.__docgenInfo={description:"",displayName:"BodyCell",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"enum",value:[{value:'"cell"'},{value:'"columnheader"'}]}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"MouseEventHandler"}},cell:{defaultValue:null,description:"",name:"cell",required:!0,type:{name:"Cell<TData, unknown>"}},rowAutoHeight:{defaultValue:null,description:"",name:"rowAutoHeight",required:!1,type:{name:"boolean"}},isDraggable:{defaultValue:null,description:"",name:"isDraggable",required:!1,type:{name:"boolean"}}}}}catch{}const N0="_rowActionsCell_1fcgm_1",R0="_rowActionsCellWrap_1fcgm_20",ku={rowActionsCell:N0,rowActionsCellWrap:R0};function L0({row:e,actions:n}){const{dropListOpened:t,setDropListOpen:i}=x0(),a=y.useCallback((s,c)=>Ts(s)?{...s,onClick(l){var g;(g=s.onClick)==null||g.call(s,l),c(l)}}:{...s,items:s.items.map(l=>a(l,c))},[]),r=!e.getCanSelect(),o=s=>{s.stopPropagation()},u=y.useMemo(()=>n.map(s=>a(s,()=>i(!1))),[n,a,i]);return R.jsx("div",{onClick:o,className:ku.rowActionsCellWrap,"data-open":t||void 0,children:!r&&!!n.length&&R.jsx(Xa,{trigger:"click",open:t,onOpenChange:i,placement:"bottom-end",size:"m","data-test-id":Re.rowActions.droplist,items:u,children:R.jsx(ni,{icon:R.jsx(Hs,{size:24}),"data-test-id":Re.rowActions.droplistTrigger})})})}function Ga({actionsGenerator:e,pinned:n}){return{id:ui.RowActions,pinned:n?Vt.Right:void 0,size:40,meta:{skipOnExport:!0},noBodyCellPadding:!0,cellClassName:ku.rowActionsCell,enableResizing:!1,cell:t=>R.jsx(L0,{row:t.row,actions:e(t)})}}try{Ga.displayName="getRowActionsColumnDef",Ga.__docgenInfo={description:"Вспомогательная функция для создания ячейки с дополнительными действиями у строки",displayName:"getRowActionsColumnDef",props:{actionsGenerator:{defaultValue:null,description:"Действия для строки",name:"actionsGenerator",required:!0,type:{name:"ActionsGenerator<TData>"}},pinned:{defaultValue:null,description:"Закрепление колонки справа в таблице",name:"pinned",required:!1,type:{name:"boolean"}}}}}catch{}function Oa(e){switch(e){case"asc":return R.jsx(Fs,{size:16});case"desc":return R.jsx(Os,{size:16});default:return null}}const Fa=e=>{e.stopPropagation()};try{Oa.displayName="getSortingIcon",Oa.__docgenInfo={description:"",displayName:"getSortingIcon",props:{}}}catch{}try{Fa.displayName="stopEventPropagation",Fa.__docgenInfo={description:"",displayName:"stopEventPropagation",props:{}}}catch{}const H0="_tableHeaderResizeHandle_3b69r_1",T0="_tableHeaderResizeIndicator_3b69r_27",I0="_tableHeaderCell_3b69r_49",M0="_tableHeaderCellDragWrapper_3b69r_114",P0="_tableHeaderCellMain_3b69r_121",B0="_tableHeaderCellName_3b69r_132",V0="_tableHeaderIcon_3b69r_143",Yt={tableHeaderResizeHandle:H0,tableHeaderResizeIndicator:T0,tableHeaderCell:I0,tableHeaderCellDragWrapper:M0,tableHeaderCellMain:P0,tableHeaderCellName:B0,tableHeaderIcon:V0};function z0({header:e,cellRef:n}){var s;const t=e.getContext().table.getState().columnSizingInfo,{minSize:i,maxSize:a}=e.column.columnDef,{startSize:r,deltaOffset:o}=t;let u=0;if(r!==null&&o!==null){const c=((s=n.current)==null?void 0:s.offsetWidth)||0,l=Math.max(r,c),g=o<0?i:a;let b=0;g!==void 0&&o!==0&&(b=o<0?-(l-g):g-l,u=o<0?Math.max(o,b):Math.min(Math.abs(o),b))}return u}function Da({header:e,cellRef:n}){const t=e.column.getIsResizing(),i=e.getResizeHandler(),a=o=>{if(o.detail===2){e.column.resetSize();return}i(o)},r=t?z0({header:e,cellRef:n}):0;return R.jsxs(R.Fragment,{children:[R.jsx("div",{role:"button",tabIndex:0,className:gn(Yt.tableHeaderIcon,Yt.tableHeaderResizeHandle),"data-resizing":t||void 0,onMouseDown:a,onTouchStart:i,onMouseUp:Fa}),t&&R.jsx("div",{"data-test-id":"table__header-cell-resize-handle-moving-part",className:Yt.tableHeaderResizeIndicator,style:{"--offset":`${r}px`}})]})}try{Da.displayName="ResizeHandle",Da.__docgenInfo={description:"",displayName:"ResizeHandle",props:{header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"Header<TData, unknown>"}},cellRef:{defaultValue:null,description:"",name:"cellRef",required:!0,type:{name:"RefObject<HTMLDivElement>"}}}}}catch{}function qn({header:e,pinPosition:n,className:t,rowAutoHeight:i,isDraggable:a}){const r=y.useRef(null),o=e.column.getCanSort(),u=e.column.getCanResize(),s=u&&e.column.getIsResizing(),c=o&&(e.column.getIsSorted()||void 0),l=Oa(c),b=e.getContext().table.getState().columnSizingInfo.isResizingColumn,h=e.column.columnDef,E=bu(e,{isDraggable:a}),{attributes:C,listeners:w,setNodeRef:S,isDragging:D}=sr({id:e.column.id}),N=L=>{var q;if(!b)return(q=e.column.getToggleSortingHandler())==null?void 0:q(L)},V=y.useMemo(()=>!a||l0.includes(e.column.id)?{}:{...C,...w},[C,e.column.id,a,w]);return R.jsxs(Fi,{style:E,onClick:N,"data-sortable":o||void 0,"data-draggable":a||void 0,"data-no-padding":h.noHeaderCellPadding||void 0,"data-no-offset":h.noHeaderCellBorderOffset||void 0,"data-test-id":Re.headerCell,"data-header-id":e.id,"data-resizing":s||void 0,"data-pin-position":n||void 0,"data-row-auto-height":i||void 0,role:"columnheader",className:gn(Yt.tableHeaderCell,t,h.headerClassName),ref:L=>(a&&S(L),r),children:[R.jsx("div",{className:Yt.tableHeaderCellDragWrapper,"data-dragging":a&&D||void 0,...V,children:R.jsxs("div",{className:Yt.tableHeaderCellMain,"data-align":h.headerAlign||void 0,children:[h.header&&R.jsx("div",{className:Yt.tableHeaderCellName,children:i?_a(h.header,e.getContext()):R.jsx(ti,{text:_a(h.header,e.getContext())})}),!!l&&R.jsx("div",{className:Yt.tableHeaderIcon,"data-sort-direction":c,"data-test-id":Re.headerSortIndicator,children:l})]})}),!!u&&R.jsx(Da,{header:e,cellRef:r})]})}try{qn.displayName="HeaderCell",qn.__docgenInfo={description:"",displayName:"HeaderCell",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"enum",value:[{value:'"cell"'},{value:'"columnheader"'}]}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"MouseEventHandler"}},header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"Header<TData, unknown>"}},pinPosition:{defaultValue:null,description:"",name:"pinPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},rowAutoHeight:{defaultValue:null,description:"",name:"rowAutoHeight",required:!1,type:{name:"boolean"}},isDraggable:{defaultValue:null,description:"",name:"isDraggable",required:!1,type:{name:"boolean"}}}}}catch{}const $0="_selectionCell_zxen9_1",j0="_selectionCellHeader_zxen9_11",Ir={selectionCell:$0,selectionCellHeader:j0};function U0(e,n,t){const i=[],a={[n]:!1,[t]:!1},r=[n,t];for(const o of e){if(r.includes(o.id)){if(t===""){i.push(o);break}a[o.id]=!0}if((a[n]||a[t])&&!o.getIsGrouped()&&i.push(o),a[n]&&a[t])break}return i}function Na(e){let n="";return{id:ui.Selection,pinned:Vt.Left,noBodyCellPadding:!0,size:40,headerClassName:Ir.selectionCellHeader,enableResizing:!1,cell:({row:t,table:i})=>{if(!t.getCanSelect()||!e&&t.getIsPinned())return null;const{enableMultiRowSelection:r}=i.options,o=typeof r=="boolean"?r:!0,u=t.getIsSelected(),s=c=>{var l,g;if(c.stopPropagation(),(l=globalThis.getSelection())==null||l.removeAllRanges(),c.shiftKey){const{rows:b,rowsById:h}=i.getRowModel(),E=U0(b,t.id,b.map(S=>S.id).includes(n)?n:""),C=!((g=h[t.id])!=null&&g.getIsSelected())||!1,w=E.reduce((S,D)=>(S[D.index]=C,S),{});i.setRowSelection(S=>({...S,...w}))}else t.toggleSelected(!u);n=t.id};return R.jsx("div",{onClick:s,className:Ir.selectionCell,"data-test-id":Re.rowSelect,children:o?R.jsx(Oo,{size:"s",checked:u}):R.jsx(Go,{size:"s",checked:u})})},meta:{skipOnExport:!0}}}try{Na.displayName="getSelectionCellColumnDef",Na.__docgenInfo={description:"",displayName:"getSelectionCellColumnDef",props:{}}}catch{}const cr={Primary:"primary",Neutral:"neutral",Red:"red",Orange:"orange",Yellow:"yellow",Green:"green",Blue:"blue",Violet:"violet",Pink:"pink",Loading:"loading"},Mr=16,q0="_statusCell_mb94x_1",W0="_statusCellLabel_mb94x_14",X0="_statusCellIndicator_mb94x_20",oa={statusCell:q0,statusCellLabel:W0,statusCellIndicator:X0};function K0({appearance:e,label:n}){const t=e===cr.Loading;return R.jsxs("div",{className:oa.statusCell,"data-no-label":!n||void 0,children:[R.jsx("div",{"data-appearance":t?void 0:e,className:oa.statusCellIndicator,"data-loading":t||void 0,"data-test-id":Re.statusIndicator}),n&&R.jsx("div",{className:oa.statusCellLabel,"data-test-id":Re.statusLabel,children:R.jsx(Ls.LightLabelS,{children:R.jsx(ti,{text:n})})})]})}function Ra({header:e,accessorKey:n,mapStatusToAppearance:t,renderDescription:i,size:a,maxSize:r,minSize:o,enableSorting:u=!0,enableResizing:s}){const c=!!i;return{id:ui.Status,pinned:Vt.Left,noBodyCellPadding:!0,noHeaderCellPadding:!c,noHeaderCellBorderOffset:c,size:c?a:Mr,minSize:u||c?Math.max(Mr,o||0):1,maxSize:r,meta:{skipOnExport:!0},accessorKey:n,enableSorting:u,header:c?e:void 0,enableResizing:s??c,accessorFn:l=>i&&Object.hasOwn(l,n)?i(l[n],l):void 0,cell:l=>{const g=typeof l.row.original=="object"&&Object.hasOwn(l.row.original,n)?l.row.original[n]:l.getValue(),b=t(g);return R.jsx(K0,{appearance:b,label:i?i(g,l.row.original):void 0})}}}try{Ra.displayName="getStatusColumnDef",Ra.__docgenInfo={description:"Вспомогательная функция для создания ячейки со статусом",displayName:"getStatusColumnDef",props:{accessorKey:{defaultValue:null,description:"Имя ключа соответствующее полю в data",name:"accessorKey",required:!0,type:{name:"string"}},mapStatusToAppearance:{defaultValue:null,description:"Маппинг значений статуса на цвета",name:"mapStatusToAppearance",required:!0,type:{name:"MapStatusToAppearanceFnType"}},enableSorting:{defaultValue:{value:"true"},description:"Включение/выключение сортировки",name:"enableSorting",required:!1,type:{name:"boolean"}},renderDescription:{defaultValue:null,description:"Функция для отрисовки текста, если не передана, то будет отрисован только индикатор статуса",name:"renderDescription",required:!1,type:{name:"((cellValue: string, row: TData) => string)"}},size:{defaultValue:null,description:"Размер ячейки",name:"size",required:!1,type:{name:"number"}},minSize:{defaultValue:null,description:"",name:"minSize",required:!1,type:{name:"number"}},maxSize:{defaultValue:null,description:"",name:"maxSize",required:!1,type:{name:"number"}},header:{defaultValue:null,description:"Заголовок колонки",name:"header",required:!1,type:{name:"string | (string & ReactElement<any, string | JSXElementConstructor<any>>) | (string & Iterable<ReactNode>) | ... 10 more ..."}},enableResizing:{defaultValue:null,description:"Включение/выключение ресайза колонки",name:"enableResizing",required:!1,type:{name:"boolean"}}}}}catch{}const Y0="_copyCell_1b06y_1",J0="_copyButton_1b06y_10",Pr={copyCell:Y0,copyButton:J0};function La({value:e}){const[n,t]=y.useState(!1),i=y.useRef(),a=()=>t(!0),r=()=>t(!1),o=u=>{u.stopPropagation(),e&&ms(String(e),{format:"text/plain"}),a(),clearTimeout(i.current),i.current=setTimeout(r,1e3)};return y.useEffect(()=>()=>{r(),clearTimeout(i.current)},[]),R.jsxs("div",{className:Pr.copyCell,onClick:o,role:"presentation",children:[R.jsx(ti,{text:String(e),maxLines:1}),R.jsx(ni,{"data-test-id":"button-copy-value",type:"button",icon:n?R.jsx(bs,{}):R.jsx(ks,{}),size:"xs",className:Pr.copyButton})]})}try{La.displayName="CopyCell",La.__docgenInfo={description:"",displayName:"CopyCell",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number"}}}}}catch{}const Br="snack_predefined_TreeColumn",Z0="_treeCellContainer_m2qt6_1",Q0="_treeCell_m2qt6_1",ed="_cellUserToggleIcon_m2qt6_21",td="_treeNodeContent_m2qt6_27",nd="_userContent_m2qt6_57",id="_line_m2qt6_62",ad="_firstLine_m2qt6_66",rd="_cellExpandButton_m2qt6_70",od="_treeCheckboxWrap_m2qt6_82",Pt={treeCellContainer:Z0,treeCell:Q0,cellUserToggleIcon:ed,treeNodeContent:td,userContent:nd,line:id,firstLine:ad,cellExpandButton:rd,treeCheckboxWrap:od},ud="_treeLine_1l5c8_1",sd={treeLine:ud};function Di({halfHeight:e,horizontal:n,visible:t,className:i}){return R.jsx("div",{className:gn(sd.treeLine,i),"data-horizontal":n||void 0,"data-half-height":e||void 0,"data-visible":t||void 0})}try{Di.displayName="TreeLine",Di.__docgenInfo={description:"",displayName:"TreeLine",props:{halfHeight:{defaultValue:null,description:"",name:"halfHeight",required:!1,type:{name:"boolean"}},visible:{defaultValue:null,description:"",name:"visible",required:!1,type:{name:"boolean"}},horizontal:{defaultValue:null,description:"",name:"horizontal",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}function Ha({showToggle:e=!1,icon:n=R.jsx(Es,{size:24}),expandedIcon:t=R.jsx(Ss,{size:24}),collapsedIcon:i=R.jsx(ws,{size:24}),header:a,accessorKey:r}){return{id:Br,pinned:Vt.Left,accessorKey:r,noBodyCellPadding:!0,noHeaderCellPadding:!1,enableResizing:!0,size:150,maxSize:Number.MAX_SAFE_INTEGER,meta:{skipOnExport:!1},enableSorting:!1,header:a,cell:function({row:u,cell:s}){var H;const c=u.getIsExpanded(),l=u.getCanExpand(),g=u.getCanMultiSelect(),b=u.getParentRow(),h=u.getCanSelect(),E=u.getIsAllSubRowsSelected(),C=u.getIsSomeSelected(),w=u.getIsSelected(),S=((H=b==null?void 0:b.subRows.at(-1))==null?void 0:H.id)===u.id,D=u.depth,{ref:N}=g0(Br,s),V=y.useMemo(()=>{var M;const j=[];for(let X=D;X>=0;X--)j[X]=X===D?u:(M=j.at(X+1))==null?void 0:M.getParentRow();return j.map((X,Z)=>{var ve;if(!X||j.length===Z+1)return!0;const ie=j[Z+1];return(ie==null?void 0:ie.id)!==((ve=X.subRows.at(-1))==null?void 0:ve.id)||(u==null?void 0:u.id)===(ie==null?void 0:ie.id)})},[u,D]),L=y.useMemo(()=>Array.from({length:D},(j,M)=>R.jsx(Di,{visible:V.at(M),className:M!==0?Pt.line:Pt.firstLine,halfHeight:M===D-1&&S},M)),[D,V,S]);y.useEffect(()=>{if(!(!g||!l||!h)){if(E&&!w){u.toggleSelected(!0,{selectChildren:!1});return}if(w&&!E&&C){u.toggleSelected(!1,{selectChildren:!1});return}}},[E,C,u,w,g,l,h]);const q=y.useCallback(j=>{if(j.stopPropagation(),g){const M=!E&&!w,X=E||C||M;u.toggleSelected(M,{selectChildren:X});return}u.toggleSelected(!w,{selectChildren:!1})},[g,u,E,C,w]),O=y.useCallback(j=>{j.stopPropagation(),u.toggleExpanded()},[u]),P=typeof s.row.original=="object"&&Object.hasOwn(s.row.original,r)?s.row.original[r]:s.getValue();return R.jsx("div",{role:"presentation","data-test-id":Re.tree.node,className:Pt.treeCellContainer,onClick:q,children:R.jsxs("div",{className:Pt.treeCell,ref:N,children:[L,!!b&&R.jsx(Di,{horizontal:!0,visible:!0}),l&&R.jsx(ni,{size:"xs","data-test-id":Re.tree.chevron,icon:R.jsx(ys,{}),onClick:O,className:Pt.cellExpandButton,"data-expanded":c||void 0}),R.jsxs("div",{className:Pt.treeNodeContent,"data-disabled":!h||void 0,"data-selected":w||void 0,"data-multiselect":g||void 0,children:[e&&R.jsx("div",{tabIndex:-1,className:Pt.treeCheckboxWrap,children:g?R.jsx(Oo,{size:"s",disabled:!h,checked:w,"data-test-id":Re.tree.checkbox,indeterminate:C&&!E}):R.jsx(Go,{size:"s",disabled:!h,"data-test-id":Re.tree.radio,checked:w})}),R.jsxs("div",{role:"presentation",onClick:O,className:Pt.cellUserToggleIcon,children:[l&&c&&t,l&&!c&&i]}),R.jsxs("div",{role:"presentation",className:Pt.userContent,children:[!l&&n,R.jsx(ti,{text:P})]})]})]})})}}}try{Ha.displayName="getTreeColumnDef",Ha.__docgenInfo={description:"Вспомогательная функция для создания ячейки со статусом",displayName:"getTreeColumnDef",props:{accessorKey:{defaultValue:null,description:"Имя ключа соответствующее полю в data",name:"accessorKey",required:!0,type:{name:"string"}},expandedIcon:{defaultValue:{value:"<FolderOpenSVG size={24} />"},description:"Иконка элемента-родителя в открытом состоянии",name:"expandedIcon",required:!1,type:{name:"ReactNode"}},collapsedIcon:{defaultValue:{value:"<FolderSVG size={24} />"},description:"Иконка элемента-родителя в закрытом состоянии",name:"collapsedIcon",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:{value:"<FileSVG size={24} />"},description:"Иконка дочернего",name:"icon",required:!1,type:{name:"ReactNode"}},showToggle:{defaultValue:{value:"false"},description:"Иконка дочернего элемента",name:"showToggle",required:!1,type:{name:"boolean"}},header:{defaultValue:null,description:"Рендер функция заголовка колонки",name:"header",required:!1,type:{name:"string | (string & ReactElement<any, string | JSXElementConstructor<any>>) | (string & Iterable<ReactNode>) | ... 10 more ..."}},renderDescription:{defaultValue:null,description:"Заголовок колонки",name:"renderDescription",required:!1,type:{name:"((cellValue: string, row: TData) => string)"}}}}}catch{}const cd="_tableRow_o5tsw_1",ld="_rowPinnedCells_o5tsw_19",dd="_bodyRow_o5tsw_59",hd="_tableHeader_o5tsw_110",ji={tableRow:cd,rowPinnedCells:ld,bodyRow:dd,tableHeader:hd};function On({position:e,children:n}){return R.jsx("div",{"data-position":e,"data-test-id":Re.pinnedCells,className:ji.rowPinnedCells,children:n})}try{On.displayName="PinnedCells",On.__docgenInfo={description:"",displayName:"PinnedCells",props:{position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}function Ni({onClick:e,children:n,className:t,rowAutoHeight:i,...a}){return R.jsx("div",{onClick:e,className:gn(ji.tableRow,t),"data-auto-height":i||void 0,role:"row",...a,children:n})}try{Ni.displayName="Row",Ni.__docgenInfo={description:"",displayName:"Row",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},rowAutoHeight:{defaultValue:null,description:"",name:"rowAutoHeight",required:!1,type:{name:"boolean"}}}}}catch{}function wn({row:e,onRowClick:n,rowAutoHeight:t,columnOrder:i,enableColumnsOrderSortByDrag:a}){const{leftPinned:r,rightPinned:o,unpinned:u}=_0(e),[s,c]=y.useState(!1),l=!e.getCanSelect(),g=b=>{l||n==null||n(b,{id:e.id,data:e.original,selected:e.getIsSelected(),toggleSelected:e.toggleSelected})};return R.jsx(fu.Provider,{value:{dropListOpened:s,setDropListOpen:c},children:R.jsxs(Ni,{onClick:g,"data-clickable":!!n||void 0,"data-disabled":l||void 0,"data-selected":e.getIsSelected()||e.getIsSomeSelected()&&!e.getCanMultiSelect()&&!e.getIsExpanded()||void 0,"data-actions-opened":s||void 0,"data-test-id":Re.bodyRow,"data-row-id":e.id,className:ji.bodyRow,rowAutoHeight:t,children:[r&&R.jsx(On,{position:Vt.Left,children:r.map(b=>R.jsx(Un,{cell:b,rowAutoHeight:t},b.id))}),u.map(b=>R.jsx(hu,{items:i,strategy:su,children:R.jsx(Un,{cell:b,rowAutoHeight:t,isDraggable:a},b.id)},b.id)),o&&R.jsx(On,{position:Vt.Right,children:o.map(b=>R.jsx(Un,{cell:b,rowAutoHeight:t,isDraggable:a},b.id))})]})})}try{wn.displayName="BodyRow",wn.__docgenInfo={description:"",displayName:"BodyRow",props:{rowAutoHeight:{defaultValue:null,description:"",name:"rowAutoHeight",required:!1,type:{name:"boolean"}},row:{defaultValue:null,description:"",name:"row",required:!0,type:{name:"Row<TData>"}},onRowClick:{defaultValue:null,description:"",name:"onRowClick",required:!1,type:{name:"RowClickHandler<TData>"}},columnOrder:{defaultValue:null,description:"",name:"columnOrder",required:!0,type:{name:"ColumnOrder"}},enableColumnsOrderSortByDrag:{defaultValue:null,description:"",name:"enableColumnsOrderSortByDrag",required:!1,type:{name:"boolean"}}}}}catch{}function Ri({rowAutoHeight:e,columnOrder:n,enableColumnsOrderSortByDrag:t}){const{leftPinned:i,unpinned:a,rightPinned:r}=A0();return R.jsxs(Ni,{className:ji.tableHeader,"data-test-id":Re.headerRow,rowAutoHeight:e,children:[i&&R.jsx(On,{position:Vt.Left,children:i.map(o=>o.headers.map(u=>u.isPlaceholder?null:R.jsx(qn,{header:u,rowAutoHeight:e},u.id)))}),R.jsx(hu,{items:n,strategy:su,children:a.map(o=>o.headers.map(u=>R.jsx(qn,{header:u,rowAutoHeight:e,isDraggable:t&&n.length>1},u.id)))}),r&&R.jsx(On,{position:Vt.Right,children:r.map(o=>o.headers.map(u=>u.isPlaceholder?null:R.jsx(qn,{header:u,pinPosition:Vt.Right,rowAutoHeight:e},u.id)))})]})}try{Ri.displayName="HeaderRow",Ri.__docgenInfo={description:"",displayName:"HeaderRow",props:{rowAutoHeight:{defaultValue:null,description:"",name:"rowAutoHeight",required:!1,type:{name:"boolean"}},columnOrder:{defaultValue:null,description:"",name:"columnOrder",required:!0,type:{name:"ColumnOrder"}},enableColumnsOrderSortByDrag:{defaultValue:null,description:"",name:"enableColumnsOrderSortByDrag",required:!1,type:{name:"boolean"}}}}}catch{}function Ta({settings:e,data:n,columnDefinitions:t,topRows:i,centerRows:a}){const[r,o]=y.useState(!1),{t:u}=ii("Table"),{fileName:s,filterData:c=!0}=e,l=y.useMemo(()=>{let g=n;return c&&(g=[...i,...a].map(b=>b.original)),g},[a,n,c,i]);return R.jsx(Xa,{trigger:"clickAndFocusVisible",open:r,onOpenChange:o,scroll:!0,placement:"bottom-end",items:[{content:{option:u("export")+"CSV"},onClick:()=>{var g;(g=e.exportToCSV)==null||g.call(e,{fileName:s,columnDefinitions:t,data:l}),o(!1)},hidden:!e.exportToCSV},{content:{option:u("export")+"XLSX"},onClick:()=>{var g;(g=e.exportToXLSX)==null||g.call(e,{fileName:s,columnDefinitions:t,data:l}),o(!1)},hidden:!e.exportToXLSX}],children:R.jsx(ni,{size:"m",icon:R.jsx(Gs,{})})})}try{Ta.displayName="ExportButton",Ta.__docgenInfo={description:"",displayName:"ExportButton",props:{data:{defaultValue:null,description:"Данные для отрисовки",name:"data",required:!0,type:{name:"TData[]"}},columnDefinitions:{defaultValue:null,description:"Определение внешнего вида и функционала колонок",name:"columnDefinitions",required:!0,type:{name:"ColumnDefinition<TData>[]"}},settings:{defaultValue:null,description:"",name:"settings",required:!0,type:{name:"{ fileName: string; filterData?: boolean | undefined; exportToCSV?(args: ExportProps<TData>): void; exportToXLSX?(args: ExportProps<TData>): void; }"}},topRows:{defaultValue:null,description:"",name:"topRows",required:!0,type:{name:"Row<TData>[]"}},centerRows:{defaultValue:null,description:"",name:"centerRows",required:!0,type:{name:"Row<TData>[]"}}}}}catch{}function Vr(e){return e.id?e.id:"accessorKey"in e&&e.accessorKey?String(e.accessorKey):typeof e.header=="string"?e.header:void 0}const gd="_tableEmptyStateWrapper_sjme0_1",fd={tableEmptyStateWrapper:gd};function Ia({dataError:e,dataFiltered:n,tableRowsLength:t,emptyStates:i}){return t?null:R.jsxs("div",{className:fd.tableEmptyStateWrapper,children:[e&&R.jsx(Wi,{...i.errorDataState,size:"m",align:"vertical"}),!e&&n&&R.jsx(Wi,{...i.noResultsState,size:"m",align:"vertical"}),!e&&!n&&R.jsx(Wi,{...i.noDataState,size:"m",align:"vertical"})]})}try{Ia.displayName="TableEmptyState",Ia.__docgenInfo={description:"",displayName:"TableEmptyState",props:{emptyStates:{defaultValue:null,description:"",name:"emptyStates",required:!0,type:{name:"{ noDataState: EmptyStateProps; noResultsState: EmptyStateProps; errorDataState: EmptyStateProps; }"}},dataError:{defaultValue:null,description:"",name:"dataError",required:!1,type:{name:"boolean"}},dataFiltered:{defaultValue:null,description:"",name:"dataFiltered",required:!1,type:{name:"boolean"}},tableRowsLength:{defaultValue:null,description:"",name:"tableRowsLength",required:!0,type:{name:"number"}}}}}catch{}function pd({noDataState:e,noResultsState:n,errorDataState:t}){const{t:i}=ii("Table");return y.useMemo(()=>{const a={icon:{icon:kr,appearance:"neutral",decor:!0},title:i("noData.title"),...e},r={icon:{icon:kr,appearance:"neutral",decor:!0},title:i("noResults.title"),description:i("noResults.description"),...n},o={icon:{icon:As,appearance:"neutral",decor:!0},title:i("errorData.title"),description:i("errorData.description"),...t};return{noDataState:a,noResultsState:r,errorDataState:o}},[t,e,n,i])}const md="_footer_1y40y_1",bd="_pagination_1y40y_9",zr={footer:md,pagination:bd};function Ma({table:e,options:n,optionsLabel:t,optionsRender:i}){const{t:a}=ii("Table"),r=t??a("rowsOptionsLabel"),o=y.useCallback(l=>{e.setPageIndex(l-1)},[e]),u=y.useCallback(l=>{e.setPageSize(Number(l))},[e]),s=y.useMemo(()=>n==null?void 0:n.sort((l,g)=>l-g).map((l,g)=>({label:String(i?i(l,g):l),value:String(l)})),[n,i]),c=e.getState().pagination;return e.getPageCount()<=1&&!s?null:R.jsxs("div",{className:zr.footer,children:[e.getPageCount()>1&&R.jsx(Ns,{total:e.getPageCount(),page:c.pageIndex+1,onChange:o,size:"xs",className:zr.pagination}),s&&e.getRowModel().rows.length>=Number(s[0].value)&&R.jsx(Rs.Single,{value:String(c.pageSize),onChange:u,placement:"top-end",options:s,label:r,widthStrategy:"auto",size:"xs"})]})}try{Ma.displayName="TablePagination",Ma.__docgenInfo={description:"",displayName:"TablePagination",props:{table:{defaultValue:null,description:"",name:"table",required:!0,type:{name:"Table<TData>"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"number[]"}},optionsLabel:{defaultValue:null,description:"",name:"optionsLabel",required:!1,type:{name:"string"}},optionsRender:{defaultValue:null,description:"",name:"optionsRender",required:!1,type:{name:"((value: number, idx: number) => string | number)"}},pageCount:{defaultValue:null,description:"",name:"pageCount",required:!1,type:{name:"number"}}}}}catch{}const kd="_columnsSettings_18ghj_1",vd={columnsSettings:kd};function Pa({columnsSettings:e,enabledColumns:n,setEnabledColumns:t}){return R.jsx(Xa,{className:vd.columnsSettings,items:e,selection:{value:n,onChange:t,mode:"multiple"},placement:"bottom-end","data-test-id":"table__column-settings-droplist",children:R.jsx(ni,{size:"m","data-test-id":"table__column-settings",icon:R.jsx(Ds,{})})})}try{Pa.displayName="ColumnsSettings",Pa.__docgenInfo={description:"",displayName:"ColumnsSettings",props:{enabledColumns:{defaultValue:null,description:"",name:"enabledColumns",required:!0,type:{name:"string[]"}},setEnabledColumns:{defaultValue:null,description:"",name:"setEnabledColumns",required:!0,type:{name:"(enabledColumns: string[]) => void"}},columnsSettings:{defaultValue:null,description:"",name:"columnsSettings",required:!0,type:{name:"[GroupSelectItem]"}}}}}catch{}/**
   * match-sorter-utils
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */const vu={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ù:"u",ú:"u",û:"u",ü:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z"},Cd=Object.keys(vu).join("|"),yd=new RegExp(Cd,"g");function Ed(e){return e.replace(yd,n=>vu[n])}/**
 * @name match-sorter
 * @license MIT license.
 * @copyright (c) 2099 Kent C. Dodds
 * @author Kent C. Dodds <me@kentcdodds.com> (https://kentcdodds.com)
 */const je={CASE_SENSITIVE_EQUAL:7,EQUAL:6,STARTS_WITH:5,WORD_STARTS_WITH:4,CONTAINS:3,ACRONYM:2,MATCHES:1,NO_MATCH:0};function Sd(e,n,t){var i;if(t=t||{},t.threshold=(i=t.threshold)!=null?i:je.MATCHES,!t.accessors){const o=$r(e,n,t);return{rankedValue:e,rank:o,accessorIndex:-1,accessorThreshold:t.threshold,passed:o>=t.threshold}}const a=_d(e,t.accessors),r={rankedValue:e,rank:je.NO_MATCH,accessorIndex:-1,accessorThreshold:t.threshold,passed:!1};for(let o=0;o<a.length;o++){const u=a[o];let s=$r(u.itemValue,n,t);const{minRanking:c,maxRanking:l,threshold:g=t.threshold}=u.attributes;s<c&&s>=je.MATCHES?s=c:s>l&&(s=l),s=Math.min(s,l),s>=g&&s>r.rank&&(r.rank=s,r.passed=!0,r.accessorIndex=o,r.accessorThreshold=g,r.rankedValue=u.itemValue)}return r}function $r(e,n,t){return e=jr(e,t),n=jr(n,t),n.length>e.length?je.NO_MATCH:e===n?je.CASE_SENSITIVE_EQUAL:(e=e.toLowerCase(),n=n.toLowerCase(),e===n?je.EQUAL:e.startsWith(n)?je.STARTS_WITH:e.includes(` ${n}`)?je.WORD_STARTS_WITH:e.includes(n)?je.CONTAINS:n.length===1?je.NO_MATCH:wd(e).includes(n)?je.ACRONYM:xd(e,n))}function wd(e){let n="";return e.split(" ").forEach(i=>{i.split("-").forEach(r=>{n+=r.substr(0,1)})}),n}function xd(e,n){let t=0,i=0;function a(s,c,l){for(let g=l,b=c.length;g<b;g++)if(c[g]===s)return t+=1,g+1;return-1}function r(s){const c=1/s,l=t/n.length;return je.MATCHES+l*c}const o=a(n[0],e,0);if(o<0)return je.NO_MATCH;i=o;for(let s=1,c=n.length;s<c;s++){const l=n[s];if(i=a(l,e,i),!(i>-1))return je.NO_MATCH}const u=i-o;return r(u)}function jr(e,n){let{keepDiacritics:t}=n;return e=`${e}`,t||(e=Ed(e)),e}function Ad(e,n){let t=n;typeof n=="object"&&(t=n.accessor);const i=t(e);return i==null?[]:Array.isArray(i)?i:[String(i)]}function _d(e,n){const t=[];for(let i=0,a=n.length;i<a;i++){const r=n[i],o=Gd(r),u=Ad(e,r);for(let s=0,c=u.length;s<c;s++)t.push({itemValue:u[s],attributes:o})}return t}const Ur={maxRanking:1/0,minRanking:-1/0};function Gd(e){return typeof e=="function"?Ur:{...Ur,...e}}const Od=(e,n,t,i)=>{const a=Sd(e.getValue(n),t);return i({itemRank:a}),a.passed},ua=e=>typeof e=="string"&&!isNaN(Number(new Date(e))),Fd=e=>Object.fromEntries(Object.entries(e).map(([n,t])=>ua(t)?[n,new Date(t)]:Array.isArray(t)&&t.some(ua)?[n,t.map(i=>ua(i)?new Date(i):i)]:[n,t])),Dd="_table_gmnkh_1",Nd="_header_gmnkh_21",Rd="_tableContent_gmnkh_28",Ld="_toolbar_gmnkh_32",Hd="_skeleton_gmnkh_44",Td="_wrapper_gmnkh_48",Id="_scrollStub_gmnkh_55",Md="_topRowWrapper_gmnkh_61",qt={table:Dd,header:Nd,tableContent:Rd,toolbar:Ld,skeleton:Hd,wrapper:Td,scrollStub:Id,topRowWrapper:Md};function Ba({pageSize:e,columnDefinitions:n,columnPinning:t}){const i=y.useMemo(()=>Array.from({length:e}).map(()=>"")||[],[e]),a=y.useMemo(()=>n.map(o=>({...o,cell:()=>R.jsx(xs,{className:qt.skeleton,lines:1,width:"100%"})})),[n]);return{loadingTable:ou({data:i,columns:a,state:{columnPinning:t},getCoreRowModel:au()})}}try{Ba.displayName="useLoadingTable",Ba.__docgenInfo={description:"",displayName:"useLoadingTable",props:{columnDefinitions:{defaultValue:null,description:"",name:"columnDefinitions",required:!0,type:{name:"ColumnDefinition<TData>[]"}},pageSize:{defaultValue:null,description:"",name:"pageSize",required:!0,type:{name:"number"}},columnPinning:{defaultValue:null,description:"",name:"columnPinning",required:!0,type:{name:"ColumnPinningState"}}}}}catch{}function xn(e,n){const[t,i]=Cs(e==null?void 0:e.state,(e==null?void 0:e.state)??(e==null?void 0:e.initialState)??n,e==null?void 0:e.onChange);return[t,r=>{i(typeof r=="function"?r(t):r)}]}const Pd=e=>{let{transform:n}=e;return{...n,y:0}},Cu="RESIZED_COLUMN_KEY";function Bd({id:e,columnId:n}){var i;const t=JSON.parse(localStorage.getItem(e||"")||"null");if(t)return(i=t.resizeState)==null?void 0:i[`${Cu}-${n}`]}function Vd({id:e,columnId:n,size:t}){const i=JSON.parse(localStorage.getItem(e)||"null"),a=(i==null?void 0:i.resizeState)||{};a[`${Cu}-${n}`]=t,localStorage.setItem(e,JSON.stringify({...i||{},resizeState:a}))}function dn(e){return"id"in e&&e.id?e.id:e.accessorKey}function zd(e){return{sizeKey:`--table-column-${e}-size`,flexKey:`--table-column-${e}-flex`}}function $d(e){if(Gn()){const n=document.querySelector(`[data-header-id="${e}"]`),t=n==null?void 0:n.querySelector('[data-test-id="table__header-cell-resize-handle-moving-part"]');if(n){const{width:i}=n.getBoundingClientRect();if(t){const a=parseInt(t.style.getPropertyValue("--offset"));return i+a}return i}}return 0}function yu({columnDefinitions:e,enableSelection:n,enableSelectPinned:t,expanding:i}){let a=e;return n&&!i&&(a=[Na(t),...a]),i&&(a=[Ha(i.expandingColumnDefinition),...a]),a}function jd(e){return function(t,i){const a=e.findIndex(o=>o===dn(t)),r=e.findIndex(o=>o===dn(i));return a-r}}const Eu=e=>Array.isArray(e)&&e.every(n=>typeof n=="string");function Ud(e){return e.reduce((n,t)=>{switch(t.pinned){case"left":n.left.push(t);break;case"right":n.right.push(t);break;default:n.unpinned.push(t)}return n},{left:[],right:[],unpinned:[]})}const Va=e=>`${e}_columnOrder`;function qd(e,n){const t=e.filter(i=>i.pinned!=="left"&&i.pinned!=="right").map(dn);if(n!=null&&n.columnSettings){const i=JSON.parse(localStorage.getItem(Va(n.id))||"null"),a=Eu(i)?i:null;if(a!==null)return[...a,...t.filter(r=>!(a!=null&&a.includes(r)))];localStorage.setItem(Va(n.id),JSON.stringify(t))}return t}const Wd={activationConstraint:{distance:5}};function Xd({tableColumns:e,savedState:n,columnSettings:t}){const[i,a]=y.useState(()=>qd(e,n)),r=y.useCallback(l=>{let g;l instanceof Function?g=l(i):g=l,n!=null&&n.columnSettings&&localStorage.setItem(Va(n.id),JSON.stringify(g)),a(g)},[i,n]),o=y.useCallback(({active:l,over:g})=>{if(!l||!g)return;const b=l.id.toString(),h=g.id.toString();b!==h&&i.includes(h)&&r(E=>{const C=E.indexOf(b),w=E.indexOf(h);return ur(E,C,w)})},[i,r]),u=sc(Ki($o,Wd),Ki(jo,{}),Ki(tr,{})),s=!!(t!=null&&t.enableDrag),c=y.useMemo(()=>s?{collisionDetection:gc,modifiers:[Pd],onDragEnd:o,sensors:u}:{},[s,o,u]);return{columnOrder:i,setColumnOrder:r,dndContextProps:c,enableColumnsOrderSortByDrag:s}}function Su(e){var n;return("id"in e||"accessorKey"in e)&&"columnSettings"in e&&((n=e.columnSettings)==null?void 0:n.mode)!=="hidden"}function Kd(e){var n;return"columnSettings"in e&&e.columnSettings!==void 0?((n=e.columnSettings)==null?void 0:n.mode)!=="defaultFalse":!0}function Yd(e){if("columnSettings"in e&&e.columnSettings!==void 0){const{mode:n}=e.columnSettings;if(!n)return!0;switch(n){case"hidden":return!1;case"defaultTrue":case"defaultFalse":default:return!0}}return!0}function Jd(e){var n;return{id:dn(e),content:{option:(n=e.columnSettings)==null?void 0:n.label},switch:!0,showSwitchIcon:!0}}function sa(e,n){return e.filter(Su).sort(jd(n)).map(Jd)}function Zd({pinnedGroups:e,columnOrder:n,areAllColumnsEnabled:t,t:i}){return[{divider:!1,items:[{divider:!1,items:sa(e.left,n),type:"group"},{divider:!0,items:sa(e.unpinned,n),type:"group"},{divider:!0,items:sa(e.right,n),type:"group"}],selectButtonLabel:i(t?"groupSelectButton.hide":"groupSelectButton.show"),label:i("settingsHeaderLabel"),mode:"primary",type:"group-select"}]}function Qd(e){const n=JSON.parse(localStorage.getItem(e)||"null");return Eu(n)?n:null}function eh(e,n,t){const i=Qd(t);return e.filter(a=>{const r=dn(a);return i&&(n!=null&&n.columnSettings)?!!i.find(o=>o===r):Kd(a)}).map(dn)}function th({columnDefinitions:e,columnsSettings:n,pinnedGroups:t,savedState:i,rowSelection:a,enableSelectPinned:r,expanding:o}){const{t:u}=ii("Table"),s=`${i==null?void 0:i.id}_columnSettings`,c=y.useMemo(()=>e.filter(Yd),[e]),[l,g]=y.useState(()=>eh(c,i,s)),b=y.useCallback(N=>{i!=null&&i.columnSettings&&localStorage.setItem(s,JSON.stringify(N)),g(N)},[s,i==null?void 0:i.columnSettings]),h=!!(n!=null&&n.enableSettingsMenu),E=y.useMemo(()=>h?e.filter(N=>Su(N)?l.includes(dn(N)):!0):e,[e,l,h]),C=!!(a!=null&&a.enable),w=y.useMemo(()=>yu({columnDefinitions:E,enableSelection:C,enableSelectPinned:r,expanding:o}),[r,C,E,o]),S=l.length===c.length,D=y.useCallback(N=>Zd({pinnedGroups:t,columnOrder:N,areAllColumnsEnabled:S,t:u}),[S,t,u]);return{enabledColumns:l,setEnabledColumns:b,enabledColumnsDefinitions:E,enabledTableColumns:w,getColumnsSettings:D,areColumnsSettingsEnabled:h}}function nh({manualPagination:e,pagination:n,maximumAvailablePage:t,onPaginationChange:i,autoResetPageIndex:a}){y.useEffect(()=>{if(a)return;const{pageIndex:r}=n;!e&&r>0&&r>=t&&i({...n,pageIndex:0})},[t,e,i,n,a])}function ih(e){return e?"initialOpen"in e&&typeof e.initialOpen=="boolean"?e.initialOpen:!0:!1}function ah({columnFilters:e}){const[n,t]=y.useState(()=>ih(e)),[i,a]=xn({state:e==null?void 0:e.value,initialState:e==null?void 0:e.defaultValue,onChange:e==null?void 0:e.onChange},void 0),[r,o]=xn({state:e==null?void 0:e.visibleFilters,initialState:[],onChange:e==null?void 0:e.onVisibleFiltersChange},s0),u=y.useMemo(()=>{if(e)return{open:n,onOpenChange:t,...e,value:i,onChange:a,visibleFilters:r,onVisibleFiltersChange:o}},[e,n,i,a,r,o]);return{filter:i,setFilter:a,patchedFilter:u,setFilterVisibility:o}}const wu=";",rh=/^\[.+]$/,oh=/(\w+)\[([^\]]+)]([^;]+)?/g,qr={filter:"filter",sort:"sort"},uh={offset:"offset",limit:"limit"},sh=["in","ni"];var ch=function(e,n){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,i=Object.getOwnPropertySymbols(e);a<i.length;a++)n.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(t[i[a]]=e[i[a]]);return t};function lh(e){return rh.test(e)}function dh(e){return e.reduce((n,t,i)=>{const a=i!==0&&i!==e.length?wu:"",{field:r,direction:o}=t;return`${n}${a}${r}[${o}]`},"")}function hh(e){return e.reduce((n,t,i)=>{const a=i!==0&&i!==e.length?wu:"",{field:r,condition:o,value:u}=t;let s=u;return sh.includes(o)&&Array.isArray(u)&&(s=`[${u.join(",")}]`),`${n}${a}${r}[${o}]${s}`},"")}function xu(e){return typeof e=="number"?!isNaN(e):typeof e=="string"||Array.isArray(e)?e.length!==0:e!==void 0}function gh(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function fh(e){var n,t;const{pagination:i}=e,a=ch(e,["pagination"]),r=Object.assign(Object.assign({},i),a);!((n=e.filter)===null||n===void 0)&&n.length&&(r.filter=hh(e.filter)),!((t=e.sort)===null||t===void 0)&&t.length&&(r.sort=dh(e.sort));const o=Object.entries(r).reduce((u,[s,c])=>{const l=u.length?"&":"";return`${u}${l}${s}=${c}`},"");return encodeURIComponent(o)}function ph(e){return Object.values(uh).includes(e)}function ca(e){if(lh(e))try{return JSON.parse(e)}catch{return e.replace(/[[\]]/g,"").split(",").map(i=>i.trim())}const n=Number(e);return isNaN(n)?e:n}function Au(e){return Object.keys(e).reduce((n,t)=>{const i=t;let a=e[i];return xu(a)&&(gh(a)&&(a=Au(a)),n[i]=a),n},{})}function mh(e){const n=e||{};function t(){return Au(n)}function i(){return fh(t())}return e!==void 0?{toObject:t,toString:i}:{filter(a){return n.filter||(n.filter=[]),n.filter.push(a),this},sort(a){return n.sort||(n.sort=[]),n.sort.push(a),this},pagination(a){return n.pagination=a,this},search(a){return n.search=a,this},toObject:t,toString:i}}function bh(e){return e.length?decodeURIComponent(e).split("&").reduce((i,a)=>{const[r,o]=a.split("=");if(xu(o)){const u=Array.from(o.matchAll(oh),([,s,c,l])=>[s,c,l]);if(r===qr.sort)return u.length&&(i[r]=u.map(([s,c])=>({field:s,direction:c}))),i;if(r===qr.filter)return u.length&&(i[r]=u.map(([s,c,l])=>({field:s,condition:c,value:ca(l)})).filter(({value:s})=>s!==void 0)),i;if(ph(r))return i.pagination||(i.pagination={}),i.pagination[r]=ca(o),i;i[r]=ca(o)}return i},{}):void 0}const kh=e=>({limit:e.pageSize,offset:e.pageSize*e.pageIndex}),vh=e=>e.map(n=>({field:n.id,direction:n.desc?"d":"a"})),Wr=e=>e instanceof Date?e.toISOString():e,Ch=e=>{if(e)return Object.entries(e).filter(([n,t])=>t!==void 0).map(([n,t])=>Array.isArray(t)?{value:t.map(Wr),condition:"in",field:n}:{value:Wr(t),condition:"eq",field:n})},yh=e=>mh({pagination:kh(e.pagination),search:e.search,sort:vh(e.sorting),filter:Ch(e.filter)}).toString(),Eh=e=>!e||!e.offset||!e.limit?{pageSize:Oi,pageIndex:0}:{pageSize:e.limit||Oi,pageIndex:Math.floor(e.offset/e.limit)},Sh=(e=[])=>e.map(n=>({id:n.field,desc:n.direction==="d"})),wh=e=>{if(e)return Object.fromEntries(e.map(n=>[n.field,n.value]))},xh=e=>{var t;const n=bh(e);return{pagination:Eh(n==null?void 0:n.pagination),search:((t=n==null?void 0:n.search)==null?void 0:t.toString())||"",sorting:Sh(n==null?void 0:n.sort),filter:wh(n==null?void 0:n.filter)}},Ah=e=>typeof(e==null?void 0:e.pageSize)=="number"&&typeof(e==null?void 0:e.pageIndex)=="number",_h=e=>e==null?void 0:e.every(n=>typeof(n==null?void 0:n.id)=="string"&&typeof(n==null?void 0:n.desc)=="boolean"),Gh=(e,n)=>typeof e=="object"&&e!==null&&Object.keys(e).every(t=>!!n.find(i=>i.id===t)),Oh=({options:e,filterSettings:n})=>{const t=y.useCallback(c=>{const l=Ah(c==null?void 0:c.pagination),g=_h(c==null?void 0:c.sorting),b=typeof(c==null?void 0:c.search)=="string",h=!!(n&&Gh(c.filter,n));return l&&g&&b&&h},[n]),i=e==null?void 0:e.filterQueryKey,a=e!=null&&e.id?`${e==null?void 0:e.id}_filter`:"",r=y.useMemo(()=>i?{filterQueryKey:i,filterLocalStorageKey:a,validateData:t}:void 0,[i,t,a]),{getDefaultFilter:o,setDataToStorages:u}=$s({options:r,serializer:yh,parser:xh});return{defaultFilter:y.useMemo(o,[o]),setDataToStorages:u}};function qe({data:e,rowPinning:n={top:[]},columnDefinitions:t,keepPinnedRows:i=!1,copyPinnedRows:a=!1,enableSelectPinned:r=!1,rowSelection:o,search:u,sorting:s,columnFilters:c,pagination:l,className:g,onRowClick:b,onRefresh:h,pageSize:E=Oi,pageCount:C,loading:w=!1,infiniteLoading:S=!1,outline:D=!1,moreActions:N,exportSettings:V,dataFiltered:L,dataError:q,noDataState:O,noResultsState:P,errorDataState:H,suppressToolbar:j=!1,suppressSearch:M=!1,toolbarAfter:X,suppressPagination:Z=!1,manualSorting:ie=!1,manualPagination:ve=!1,manualFiltering:it=!1,autoResetPageIndex:ue=!1,scrollRef:ce,scrollContainerRef:se,getRowId:mt,enableFuzzySearch:Ke,savedState:ae,expanding:he,bulkActions:Me,rowAutoHeight:Pe,columnsSettings:pe,...bt}){const{setDataToStorages:Ye,defaultFilter:ee}=Oh({options:ae,filterSettings:c==null?void 0:c.filters}),[Q,Be]=xn(u,""),[Ve,Gt]=xn(o,c0),He=y.useMemo(()=>({pageIndex:0,pageSize:E}),[E]),[at,rt]=xn(s,u0),[kt,vt]=xn(l,He),{filter:Lt,patchedFilter:ot,setFilter:Je,setFilterVisibility:Ht}=ah({columnFilters:c});y.useEffect(()=>{Ye({pagination:kt,sorting:at,filter:Lt,search:Q||""})},[kt,at,Lt,Ye,Q]),Is(()=>{ee&&(ee.pagination&&vt(ee.pagination),ee.search&&Be(ee.search),ee.sorting&&rt(ee.sorting),ee.filter&&Je(Fd(ee.filter)),ee.filter&&Ht(Object.keys(ee.filter)))},[ee]);const ut=!!(o!=null&&o.enable),Ae=y.useMemo(()=>yu({columnDefinitions:t,enableSelection:ut,enableSelectPinned:r,expanding:he}),[t,ut,r,he]),Ct=y.useMemo(()=>Ud(Ae),[Ae]),{enabledColumns:an,setEnabledColumns:st,getColumnsSettings:_e,enabledTableColumns:Tt,enabledColumnsDefinitions:rn,areColumnsSettingsEnabled:ze}=th({columnDefinitions:t,pinnedGroups:Ct,savedState:ae,columnsSettings:pe,rowSelection:o,enableSelectPinned:r,expanding:he}),{columnOrder:Te,setColumnOrder:fn,dndContextProps:pn,enableColumnsOrderSortByDrag:Ze}=Xd({tableColumns:Ae,savedState:ae,columnSettings:pe}),{t:mn}=ii("Table"),on=S||ve,un=y.useMemo(()=>_e(Te),[Te,_e]),sn=y.useMemo(()=>{const p=v=>v.reduce((_,F)=>{const x=Vr(F);return x&&_.push(x),_},[]);return{left:p(Ct.left),right:p(Ct.right)}},[Ct]),bn=y.useCallback(p=>{const v=p.getParentRow(),_=v?v.getCanSelect():!0;let F=!0;return(o==null?void 0:o.enable)!==void 0&&(F=typeof o.enable=="boolean"?o.enable:o.enable(p)),_&&F},[o]),te=ou({data:e,columns:Tt,state:{columnPinning:sn,columnOrder:Ze?Te:void 0,globalFilter:Q,rowSelection:Ve,sorting:at,pagination:kt,rowPinning:he?{top:[]}:n},pageCount:C,defaultColumn:{enableSorting:!1,enableResizing:!1,minSize:40,cell:p=>Pe?p.getValue():R.jsx(ti,{text:String(p.getValue()),maxLines:1})},onColumnOrderChange:Ze?fn:void 0,manualSorting:ie,manualPagination:on,manualFiltering:it,globalFilterFn:Ke?Od:"includesString",onGlobalFilterChange:Be,getRowId:mt,onRowSelectionChange:Gt,enableGrouping:!0,enableRowSelection:bn,enableMultiRowSelection:o==null?void 0:o.multiRow,enableFilters:!0,getSubRows:he==null?void 0:he.getSubRows,filterFromLeafRows:!!he,enableSubRowSelection:!0,getFilteredRowModel:e0(),getExpandedRowModel:n0(),enableColumnResizing:!0,paginateExpandedRows:on,enableSorting:!0,enableMultiSort:!0,onSortingChange:rt,getSortedRowModel:t0(),onPaginationChange:vt,autoResetPageIndex:ue,getPaginationRowModel:i0(),getCoreRowModel:au(),columnResizeMode:"onEnd",keepPinnedRows:i});y.useEffect(()=>{he||te.toggleAllRowsExpanded(!1)},[he,te]);const{loadingTable:me}=Ba({pageSize:Math.min(Math.max(E,5),Oi),columnDefinitions:rn,columnPinning:sn}),be=y.useCallback(()=>{te.resetRowSelection(),h==null||h()},[h,te]),Ge=y.useMemo(()=>ut?Me==null?void 0:Me.map(p=>({...p,onClick:()=>{var v;return(v=p.onClick)==null?void 0:v.call(p,te.getState().rowSelection,te.resetRowSelection)}})):void 0,[Me,ut,te]),ct=y.useCallback(()=>{if(!w&&!r&&te.getTopRows().length){const p=te.getCenterRows(),v=te.getIsSomePageRowsSelected();if(p.every(F=>F.getIsSelected())){te.resetRowSelection();return}p.forEach(F=>F.toggleSelected(v?!0:void 0));return}if(!w&&(o!=null&&o.multiRow)){te.toggleAllPageRowsSelected();return}},[w,o==null?void 0:o.multiRow,te,r]),Oe=y.useRef(),ke=te.getFlatHeaders(),Ee=y.useMemo(()=>{var x;const p=te._getColumnDefs(),v={},_={},F=ke.findIndex(({column:G})=>G.getIsResizing());for(let G=0;G<ke.length;G++){const A=ke[G],{sizeKey:I,flexKey:B}=zd(A.id),U=p.find(T=>Vr(A)===T.id);if(A.id===ui.Status&&!(U!=null&&U.header)&&!(U!=null&&U.enableSorting))v[I]="var(--size-table-cell-status-indicator-horizontal)",v[B]="100%";else{const T=U==null?void 0:U.size;let z=T?`${T}px`:"100%";const J=(x=Oe.current)==null?void 0:x[I],oe=(U==null?void 0:U.enableResizing)&&(ae==null?void 0:ae.id)&&(ae==null?void 0:ae.resize)!==!1;if(oe){const ge=Bd({id:ae.id,columnId:A.id});ge&&(z=ge)}let re=z;if(A.column.getCanResize()){const ge=A.getSize(),cn=A.column.columnDef.size;if(ge!==cn||G<F&&J==="100%"){const jt=J==="100%"?$d(A.id):ge;_[A.id]=jt,re=`${jt}px`}}oe&&Vd({id:ae.id,columnId:A.id,size:re}),v[I]=re,v[B]=re==="100%"?"unset":"0"}}return{vars:v,realSizes:_}},[te.getState().columnSizingInfo.isResizingColumn,ke,te.getTotalSize()]);y.useEffect(()=>{Object.keys(Ee.realSizes).length&&te.setColumnSizing(p=>({...p,...Ee.realSizes})),Oe.current=Ee.vars},[Ee,te]);const yt=te.getRowModel().rows,fe=te.getCenterRows(),Qe=te.getFilteredRowModel().rows,Fe=Qe.map(p=>p.id),$e=te.getTopRows(),Ot=me.getRowModel().rows,et=te.getState().globalFilter?$e.filter(p=>Fe.includes(p.id)):$e,d=a?yt:fe,k=pd({noDataState:O,noResultsState:P,errorDataState:H});nh({manualPagination:on,maximumAvailablePage:C||Qe.length/kt.pageSize,pagination:kt,onPaginationChange:vt,autoResetPageIndex:ue});const{updateCellMap:f}=d0(te),m=!j;return R.jsxs("div",{className:gn(qt.wrapper,g),...Ms(bt),children:[m&&R.jsx("div",{className:qt.header,children:R.jsx(_s,{search:M?void 0:{value:Q,onChange:Be,loading:u==null?void 0:u.loading,placeholder:(u==null?void 0:u.placeholder)||mn("searchPlaceholder")},className:qt.toolbar,onRefresh:h?be:void 0,bulkActions:Ge,selectionMode:o!=null&&o.multiRow?"multiple":"single",checked:te.getIsAllPageRowsSelected(),indeterminate:te.getIsSomePageRowsSelected(),onCheck:ut?ct:void 0,outline:D,after:X||V||ze?R.jsxs(R.Fragment,{children:[X,V&&R.jsx(Ta,{settings:V,columnDefinitions:t,data:e,topRows:et,centerRows:d}),ze&&R.jsx(Pa,{columnsSettings:un,enabledColumns:an,setEnabledColumns:st})]}):void 0,moreActions:N,filterRow:ot,"data-test-id":Re.toolbar})}),R.jsxs(Ps,{size:"s",className:qt.table,ref:se,"data-outline":D||void 0,children:[R.jsx("div",{className:qt.tableContent,style:Ee.vars,children:R.jsx(uu.Provider,{value:{updateCellMap:f},children:R.jsx(ll,{...pn,children:R.jsx(pu.Provider,{value:{table:te},children:(!S||!e.length)&&w?R.jsxs(br,{loading:!0,children:[R.jsx(Ri,{rowAutoHeight:Pe,columnOrder:Te}),Ot.map(p=>R.jsx(wn,{row:p,rowAutoHeight:Pe,columnOrder:Te},p.id))]}):R.jsxs(R.Fragment,{children:[d.length||et.length?R.jsx(Ri,{rowAutoHeight:Pe,columnOrder:Te,enableColumnsOrderSortByDrag:Ze}):null,et.length?R.jsx("div",{className:qt.topRowWrapper,children:et.map(p=>R.jsx(wn,{row:p,onRowClick:b,rowAutoHeight:Pe,columnOrder:Te,enableColumnsOrderSortByDrag:Ze},p.id))}):null,d.map(p=>R.jsx(wn,{row:p,onRowClick:b,rowAutoHeight:Pe,columnOrder:Te,enableColumnsOrderSortByDrag:Ze},p.id)),e.length>0&&S&&w&&!q&&R.jsx(br,{loading:!0,children:Ot.slice(0,3).map(p=>R.jsx(wn,{row:p,columnOrder:Te,enableColumnsOrderSortByDrag:Ze},p.id))}),R.jsx(Ia,{emptyStates:k,dataError:q,dataFiltered:L||!!te.getState().globalFilter,tableRowsLength:yt.length+et.length})]})})})})}),R.jsx("div",{className:qt.scrollStub,ref:ce})]}),!S&&!Z&&R.jsx(Ma,{table:te,options:l==null?void 0:l.options,optionsLabel:l==null?void 0:l.optionsLabel,pageCount:C,optionsRender:l==null?void 0:l.optionsRender})]})}qe.getStatusColumnDef=Ra;qe.statusAppearances=cr;qe.getRowActionsColumnDef=Ga;try{qe.displayName="Table",qe.__docgenInfo={description:"Компонент таблицы",displayName:"Table",props:{"data-test-id":{defaultValue:null,description:"",name:"data-test-id",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Данные для отрисовки",name:"data",required:!0,type:{name:"TData[]"}},columnDefinitions:{defaultValue:null,description:"Определение внешнего вида и функционала колонок",name:"columnDefinitions",required:!0,type:{name:"ColumnDefinition<TData>[]"}},keepPinnedRows:{defaultValue:{value:"false"},description:"Параметр отвечает за отображение закрепленных строк на всех страницах таблицы",name:"keepPinnedRows",required:!1,type:{name:"boolean"}},copyPinnedRows:{defaultValue:{value:"false"},description:"Параметр отвечает за сохранение закрепленных строк в теле таблицы",name:"copyPinnedRows",required:!1,type:{name:"boolean"}},enableSelectPinned:{defaultValue:{value:"false"},description:"Параметр отвечает за чекбокс выбора закрепленных строк",name:"enableSelectPinned",required:!1,type:{name:"boolean"}},sorting:{defaultValue:null,description:`Параметры отвечают за возможность сортировки, их стоит использовать если нужно отслеживать состояние <br>
<strong>initialState</strong>: Начальное состояние сортировки <br>
<strong>state</strong>: Состояние сортировки, жестко устанавливаемое снаружи <br>
<strong>onChange</strong>: Колбэк на изменение сортировки`,name:"sorting",required:!1,type:{name:"{ initialState?: SortingState; state?: SortingState; onChange?(state: SortingState): void; } | undefined"}},columnsSettings:{defaultValue:null,description:`Параметры отвечают за настройки колонок <br>
<strong>enableDrag</strong>: Включение сортировки порядка столбцов вручную перетаскиванием <br>
<strong>enableSettingsMenu</strong>: Включение настроек показа колонок <br>`,name:"columnsSettings",required:!1,type:{name:"{ enableDrag?: boolean; enableSettingsMenu?: boolean; } | undefined"}},expanding:{defaultValue:null,description:"Параметр отвечает за общие настройки раскрывающихся строк",name:"expanding",required:!1,type:{name:"{ getSubRows: (element: TData) => TData[]; expandingColumnDefinition: TreeColumnDefinitionProps<TData>; }"}},rowSelection:{defaultValue:null,description:`Параметры отвечают за возможность выбора строк <br>
<strong>initialState</strong>: Начальное состояние выбора строк <br>
<strong>state</strong>: Состояние выбора строк, жестко устанавливаемое снаружи <br>
<strong>enable</strong>: Колбэк определяющий можно ли выбрать строку <br>
<strong>multiRow</strong>: Мульти-выбор строк (включен по-умолчанию, когда включается выбор) <br>
<strong>onChange</strong>: Колбэк на выбор строк`,name:"rowSelection",required:!1,type:{name:"{ initialState?: RowSelectionState; state?: RowSelectionState; enable?: boolean | ((row: Row<TData>) => boolean) | undefined; multiRow?: boolean | undefined; onChange?(state: RowSelectionState): void; } | undefined"}},search:{defaultValue:{value:`'Search'<br>
<strong>loading</strong>: Состояние загрузки в строке поиска <br>
<strong>onChange</strong>: Колбэк на изменение данных в строке поиска`},description:`Параметры отвечают за глобальный поиск в таблице <br>
<strong>initialState</strong>: Начальное состояние строки поиска <br>
<strong>state</strong>: Состояние строки поиска, жестко устанавливаемое снаружи <br>
<strong>placeholder</strong>: Placeholder строки поиска`,name:"search",required:!1,type:{name:"{ initialState?: string; state?: string; placeholder?: string | undefined; loading?: boolean | undefined; onChange?(value: string): void; } | undefined"}},enableFuzzySearch:{defaultValue:null,description:"Включить нечеткий поиск",name:"enableFuzzySearch",required:!1,type:{name:"boolean"}},rowAutoHeight:{defaultValue:null,description:"",name:"rowAutoHeight",required:!1,type:{name:"boolean"}},pageSize:{defaultValue:{value:"10"},description:"Максимальное кол-во строк на страницу",name:"pageSize",required:!1,type:{name:"number"}},onRowClick:{defaultValue:null,description:"Колбэк клика по строке",name:"onRowClick",required:!1,type:{name:"RowClickHandler<TData>"}},className:{defaultValue:null,description:"CSS-класс",name:"className",required:!1,type:{name:"string"}},loading:{defaultValue:{value:"false"},description:"Состояние загрузки",name:"loading",required:!1,type:{name:"boolean"}},onRefresh:{defaultValue:null,description:"Колбек обновления данных",name:"onRefresh",required:!1,type:{name:"(() => void)"}},outline:{defaultValue:{value:"false"},description:"Внешний бордер для тулбара и таблицы",name:"outline",required:!1,type:{name:"boolean"}},columnFilters:{defaultValue:null,description:"Фильтры",name:"columnFilters",required:!1,type:{name:'(Omit<ChipChoiceRowProps<TFilters>, "data-test-id" | "size"> & { open?: boolean; onOpenChange?(isOpen: boolean): void; } & { ...; })'}},dataFiltered:{defaultValue:null,description:"Флаг, показывающий что данные были отфильтрованы при пустых данных",name:"dataFiltered",required:!1,type:{name:"boolean"}},dataError:{defaultValue:null,description:"Флаг, показывающий что произошла ошибка запроса при пустых данных",name:"dataError",required:!1,type:{name:"boolean"}},noDataState:{defaultValue:null,description:"Экран при отстутствии данных",name:"noDataState",required:!1,type:{name:"EmptyStateProps"}},noResultsState:{defaultValue:null,description:"Экран при отстутствии результатов поиска или фильтров",name:"noResultsState",required:!1,type:{name:"EmptyStateProps"}},errorDataState:{defaultValue:null,description:"Экран при ошибке запроса",name:"errorDataState",required:!1,type:{name:"EmptyStateProps"}},suppressToolbar:{defaultValue:{value:"false"},description:"Отключение тулбара",name:"suppressToolbar",required:!1,type:{name:"boolean"}},suppressSearch:{defaultValue:{value:"false"},description:"Отключение поиска",name:"suppressSearch",required:!1,type:{name:"boolean"}},bulkActions:{defaultValue:null,description:"Список действия для массовых операций",name:"bulkActions",required:!1,type:{name:"BulkAction[]"}},moreActions:{defaultValue:null,description:"Элементы выпадающего списка кнопки с действиями",name:"moreActions",required:!1,type:{name:"Action[]"}},toolbarAfter:{defaultValue:null,description:"Дополнительный слот в `Toolbar` после строки поиска",name:"toolbarAfter",required:!1,type:{name:"ReactNode"}},exportSettings:{defaultValue:null,description:"Настройки экспорта в тулбаре",name:"exportSettings",required:!1,type:{name:"{ fileName: string; filterData?: boolean; exportToCSV?(args: ExportProps<TData>): void; exportToXLSX?(args: ExportProps<TData>): void; }"}},manualSorting:{defaultValue:{value:"false"},description:"",name:"manualSorting",required:!1,type:{name:"boolean"}},manualFiltering:{defaultValue:{value:"false"},description:"",name:"manualFiltering",required:!1,type:{name:"boolean"}},getRowId:{defaultValue:null,description:"Дополнительная функция используется для получения уникального идентификатора для любой заданной строки",name:"getRowId",required:!1,type:{name:"((originalRow: TData, index: number, parent?: Row<TData>) => string)"}},scrollRef:{defaultValue:null,description:"Ссылка на элемент, обозначающий самый конец прокручиваемого списка",name:"scrollRef",required:!1,type:{name:"RefObject<HTMLElement>"}},scrollContainerRef:{defaultValue:null,description:"Ссылка на контейнер, который скроллится",name:"scrollContainerRef",required:!1,type:{name:"RefObject<HTMLElement>"}},rowPinning:{defaultValue:{value:`{
    top: [],
  }`},description:"Определение какие строки должны быть закреплены в таблице",name:"rowPinning",required:!1,type:{name:'Pick<RowPinningState, "top">'}},savedState:{defaultValue:null,description:`Конфиг для сохранения состояния в localStorage. <br>
Поле id должно быть уникальным для разных таблиц в рамках приложения. <br>
Для корректной работы необходимо наличие id в конфиге columnDefinitions`,name:"savedState",required:!1,type:{name:"{ id: string; filterQueryKey?: string; resize?: boolean; columnSettings?: boolean | undefined; } | undefined"}},pagination:{defaultValue:{value:`'Rows volume: ' <br>
<strong>onChange</strong>: Колбэк на изменение пагинации`},description:`Параметры отвечают за пагинацию в таблице <br>
<strong>state</strong>: Состояние строки поиска, жестко устанавливаемое снаружи <br>
<strong>options</strong>: Варианты в выпадающем селекторе для установки кол-ва строк на страницу <br>
<strong>optionsLabel</strong>: Текст для селектора кол-ва строк на страницу`,name:"pagination",required:!1,type:{name:"{ state?: PaginationState; options?: number[]; optionsLabel?: string | undefined; onChange?(state: PaginationState): void; optionsRender?(value: string | number, idx: number): string | number; } | undefined"}},autoResetPageIndex:{defaultValue:{value:"false"},description:`Автоматический сброс пагинации к первой странице при изменении данных или состояния
(e.g фильтры, сортировки, и т.д)`,name:"autoResetPageIndex",required:!1,type:{name:"boolean"}},pageCount:{defaultValue:null,description:"Кол-во страниц (используется для внешнего управления)",name:"pageCount",required:!1,type:{name:"number"}},infiniteLoading:{defaultValue:{value:"false"},description:'Режим работы "бесконечной" загрузки',name:"infiniteLoading",required:!1,type:{name:"boolean"}},suppressPagination:{defaultValue:{value:"false"},description:"Отключение пагинации",name:"suppressPagination",required:!1,type:{name:"boolean"}},manualPagination:{defaultValue:null,description:"",name:"manualPagination",required:!1,type:{name:"boolean"}}}}}catch{}try{qe.getStatusColumnDef.displayName="Table.getStatusColumnDef",qe.getStatusColumnDef.__docgenInfo={description:"Вспомогательная функция для создания ячейки со статусом",displayName:"Table.getStatusColumnDef",props:{accessorKey:{defaultValue:null,description:"Имя ключа соответствующее полю в data",name:"accessorKey",required:!0,type:{name:"string"}},mapStatusToAppearance:{defaultValue:null,description:"Маппинг значений статуса на цвета",name:"mapStatusToAppearance",required:!0,type:{name:"MapStatusToAppearanceFnType"}},enableSorting:{defaultValue:{value:"true"},description:"Включение/выключение сортировки",name:"enableSorting",required:!1,type:{name:"boolean"}},renderDescription:{defaultValue:null,description:"Функция для отрисовки текста, если не передана, то будет отрисован только индикатор статуса",name:"renderDescription",required:!1,type:{name:"((cellValue: string, row: TData) => string)"}},size:{defaultValue:null,description:"Размер ячейки",name:"size",required:!1,type:{name:"number"}},minSize:{defaultValue:null,description:"",name:"minSize",required:!1,type:{name:"number"}},maxSize:{defaultValue:null,description:"",name:"maxSize",required:!1,type:{name:"number"}},header:{defaultValue:null,description:"Заголовок колонки",name:"header",required:!1,type:{name:"string | (string & ReactElement<any, string | JSXElementConstructor<any>>) | (string & Iterable<ReactNode>) | ... 10 more ..."}},enableResizing:{defaultValue:null,description:"Включение/выключение ресайза колонки",name:"enableResizing",required:!1,type:{name:"boolean"}}}}}catch{}try{qe.getRowActionsColumnDef.displayName="Table.getRowActionsColumnDef",qe.getRowActionsColumnDef.__docgenInfo={description:"Вспомогательная функция для создания ячейки с дополнительными действиями у строки",displayName:"Table.getRowActionsColumnDef",props:{actionsGenerator:{defaultValue:null,description:"Действия для строки",name:"actionsGenerator",required:!0,type:{name:"ActionsGenerator<TData>"}},pinned:{defaultValue:null,description:"Закрепление колонки справа в таблице",name:"pinned",required:!1,type:{name:"boolean"}}}}}catch{}/*! xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */var mi=function(n){return String.fromCharCode(n)},ht="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function Xr(e){for(var n="",t=0,i=0,a=0,r=0,o=0,u=0,s=0,c=0;c<e.length;)t=e.charCodeAt(c++),r=t>>2,i=e.charCodeAt(c++),o=(t&3)<<4|i>>4,a=e.charCodeAt(c++),u=(i&15)<<2|a>>6,s=a&63,isNaN(i)?u=s=64:isNaN(a)&&(s=64),n+=ht.charAt(r)+ht.charAt(o)+ht.charAt(u)+ht.charAt(s);return n}function Fh(e){for(var n="",t=0,i=0,a=0,r=0,o=0,u=0,s=0,c=0;c<e.length;)t=e[c++],r=t>>2,i=e[c++],o=(t&3)<<4|i>>4,a=e[c++],u=(i&15)<<2|a>>6,s=a&63,isNaN(i)?u=s=64:isNaN(a)&&(s=64),n+=ht.charAt(r)+ht.charAt(o)+ht.charAt(u)+ht.charAt(s);return n}function Kr(e){var n="",t=0,i=0,a=0,r=0,o=0,u=0,s=0;if(e.slice(0,5)=="data:"){var c=e.slice(0,1024).indexOf(";base64,");c>-1&&(e=e.slice(c+8))}e=e.replace(/[^\w\+\/\=]/g,"");for(var c=0;c<e.length;)r=ht.indexOf(e.charAt(c++)),o=ht.indexOf(e.charAt(c++)),t=r<<2|o>>4,n+=String.fromCharCode(t),u=ht.indexOf(e.charAt(c++)),i=(o&15)<<4|u>>2,u!==64&&(n+=String.fromCharCode(i)),s=ht.indexOf(e.charAt(c++)),a=(u&3)<<6|s,s!==64&&(n+=String.fromCharCode(a));return n}var le=function(){return typeof Buffer<"u"&&typeof process<"u"&&typeof process.versions<"u"&&!!process.versions.node}(),tn=function(){if(typeof Buffer<"u"){var e=!Buffer.from;if(!e)try{Buffer.from("foo","utf8")}catch{e=!0}return e?function(n,t){return t?new Buffer(n,t):new Buffer(n)}:Buffer.from.bind(Buffer)}return function(){}}(),Li=function(){if(typeof Buffer>"u")return!1;var e=tn([65,0]);if(!e)return!1;var n=e.toString("utf16le");return n.length==1}();function Fn(e){return le?Buffer.alloc?Buffer.alloc(e):new Buffer(e):typeof Uint8Array<"u"?new Uint8Array(e):new Array(e)}function Yr(e){return le?Buffer.allocUnsafe?Buffer.allocUnsafe(e):new Buffer(e):typeof Uint8Array<"u"?new Uint8Array(e):new Array(e)}var Kt=function(n){return le?tn(n,"binary"):n.split("").map(function(t){return t.charCodeAt(0)&255})};function lr(e){if(typeof ArrayBuffer>"u")return Kt(e);for(var n=new ArrayBuffer(e.length),t=new Uint8Array(n),i=0;i!=e.length;++i)t[i]=e.charCodeAt(i)&255;return n}function Dh(e){if(Array.isArray(e))return e.map(function(i){return String.fromCharCode(i)}).join("");for(var n=[],t=0;t<e.length;++t)n[t]=String.fromCharCode(e[t]);return n.join("")}function Nh(e){if(typeof Uint8Array>"u")throw new Error("Unsupported");return new Uint8Array(e)}var yn=le?function(e){return Buffer.concat(e.map(function(n){return Buffer.isBuffer(n)?n:tn(n)}))}:function(e){if(typeof Uint8Array<"u"){var n=0,t=0;for(n=0;n<e.length;++n)t+=e[n].length;var i=new Uint8Array(t),a=0;for(n=0,t=0;n<e.length;t+=a,++n)a=e[n].length,e[n]instanceof Uint8Array?i.set(e[n],t):typeof e[n]=="string"?i.set(new Uint8Array(Kt(e[n])),t):i.set(new Uint8Array(e[n]),t);return i}return[].concat.apply([],e.map(function(r){return Array.isArray(r)?r:[].slice.call(r)}))};function Rh(e){for(var n=[],t=0,i=e.length+250,a=Fn(e.length+255),r=0;r<e.length;++r){var o=e.charCodeAt(r);if(o<128)a[t++]=o;else if(o<2048)a[t++]=192|o>>6&31,a[t++]=128|o&63;else if(o>=55296&&o<57344){o=(o&1023)+64;var u=e.charCodeAt(++r)&1023;a[t++]=240|o>>8&7,a[t++]=128|o>>2&63,a[t++]=128|u>>6&15|(o&3)<<4,a[t++]=128|u&63}else a[t++]=224|o>>12&15,a[t++]=128|o>>6&63,a[t++]=128|o&63;t>i&&(n.push(a.slice(0,t)),t=0,a=Fn(65535),i=65530)}return n.push(a.slice(0,t)),yn(n)}var Wn=/\u0000/g,bi=/[\u0001-\u0006]/g;function _n(e){for(var n="",t=e.length-1;t>=0;)n+=e.charAt(t--);return n}function St(e,n){var t=""+e;return t.length>=n?t:Le("0",n-t.length)+t}function dr(e,n){var t=""+e;return t.length>=n?t:Le(" ",n-t.length)+t}function Hi(e,n){var t=""+e;return t.length>=n?t:t+Le(" ",n-t.length)}function Lh(e,n){var t=""+Math.round(e);return t.length>=n?t:Le("0",n-t.length)+t}function Hh(e,n){var t=""+e;return t.length>=n?t:Le("0",n-t.length)+t}var Jr=Math.pow(2,32);function kn(e,n){if(e>Jr||e<-Jr)return Lh(e,n);var t=Math.round(e);return Hh(t,n)}function Ti(e,n){return n=n||0,e.length>=7+n&&(e.charCodeAt(n)|32)===103&&(e.charCodeAt(n+1)|32)===101&&(e.charCodeAt(n+2)|32)===110&&(e.charCodeAt(n+3)|32)===101&&(e.charCodeAt(n+4)|32)===114&&(e.charCodeAt(n+5)|32)===97&&(e.charCodeAt(n+6)|32)===108}var Zr=[["Sun","Sunday"],["Mon","Monday"],["Tue","Tuesday"],["Wed","Wednesday"],["Thu","Thursday"],["Fri","Friday"],["Sat","Saturday"]],la=[["J","Jan","January"],["F","Feb","February"],["M","Mar","March"],["A","Apr","April"],["M","May","May"],["J","Jun","June"],["J","Jul","July"],["A","Aug","August"],["S","Sep","September"],["O","Oct","October"],["N","Nov","November"],["D","Dec","December"]];function Th(e){return e||(e={}),e[0]="General",e[1]="0",e[2]="0.00",e[3]="#,##0",e[4]="#,##0.00",e[9]="0%",e[10]="0.00%",e[11]="0.00E+00",e[12]="# ?/?",e[13]="# ??/??",e[14]="m/d/yy",e[15]="d-mmm-yy",e[16]="d-mmm",e[17]="mmm-yy",e[18]="h:mm AM/PM",e[19]="h:mm:ss AM/PM",e[20]="h:mm",e[21]="h:mm:ss",e[22]="m/d/yy h:mm",e[37]="#,##0 ;(#,##0)",e[38]="#,##0 ;[Red](#,##0)",e[39]="#,##0.00;(#,##0.00)",e[40]="#,##0.00;[Red](#,##0.00)",e[45]="mm:ss",e[46]="[h]:mm:ss",e[47]="mmss.0",e[48]="##0.0E+0",e[49]="@",e[56]='"上午/下午 "hh"時"mm"分"ss"秒 "',e}var At={0:"General",1:"0",2:"0.00",3:"#,##0",4:"#,##0.00",9:"0%",10:"0.00%",11:"0.00E+00",12:"# ?/?",13:"# ??/??",14:"m/d/yy",15:"d-mmm-yy",16:"d-mmm",17:"mmm-yy",18:"h:mm AM/PM",19:"h:mm:ss AM/PM",20:"h:mm",21:"h:mm:ss",22:"m/d/yy h:mm",37:"#,##0 ;(#,##0)",38:"#,##0 ;[Red](#,##0)",39:"#,##0.00;(#,##0.00)",40:"#,##0.00;[Red](#,##0.00)",45:"mm:ss",46:"[h]:mm:ss",47:"mmss.0",48:"##0.0E+0",49:"@",56:'"上午/下午 "hh"時"mm"分"ss"秒 "'},Qr={5:37,6:38,7:39,8:40,23:0,24:0,25:0,26:0,27:14,28:14,29:14,30:14,31:14,50:14,51:14,52:14,53:14,54:14,55:14,56:14,57:14,58:14,59:1,60:2,61:3,62:4,67:9,68:10,69:12,70:13,71:14,72:14,73:15,74:16,75:17,76:20,77:21,78:22,79:45,80:46,81:47,82:0},Ih={5:'"$"#,##0_);\\("$"#,##0\\)',63:'"$"#,##0_);\\("$"#,##0\\)',6:'"$"#,##0_);[Red]\\("$"#,##0\\)',64:'"$"#,##0_);[Red]\\("$"#,##0\\)',7:'"$"#,##0.00_);\\("$"#,##0.00\\)',65:'"$"#,##0.00_);\\("$"#,##0.00\\)',8:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',66:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',41:'_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)',42:'_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)',43:'_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)',44:'_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)'};function Ii(e,n,t){for(var i=e<0?-1:1,a=e*i,r=0,o=1,u=0,s=1,c=0,l=0,g=Math.floor(a);c<n&&(g=Math.floor(a),u=g*o+r,l=g*c+s,!(a-g<5e-8));)a=1/(a-g),r=o,o=u,s=c,c=l;if(l>n&&(c>n?(l=s,u=r):(l=c,u=o)),!t)return[0,i*u,l];var b=Math.floor(i*u/l);return[b,i*u-b*l,l]}function Mh(e){var n=e.toPrecision(16);if(n.indexOf("e")>-1){var t=n.slice(0,n.indexOf("e"));return t=t.indexOf(".")>-1?t.slice(0,t.slice(0,2)=="0."?17:16):t.slice(0,15)+Le("0",t.length-15),t+n.slice(n.indexOf("e"))}var i=n.indexOf(".")>-1?n.slice(0,n.slice(0,2)=="0."?17:16):n.slice(0,15)+Le("0",n.length-15);return Number(i)}function vn(e,n,t){if(e>2958465||e<0)return null;e=Mh(e);var i=e|0,a=Math.floor(86400*(e-i)),r=0,o=[],u={D:i,T:a,u:86400*(e-i)-a,y:0,m:0,d:0,H:0,M:0,S:0,q:0};if(Math.abs(u.u)<1e-6&&(u.u=0),n&&n.date1904&&(i+=1462),u.u>.9999&&(u.u=0,++a==86400&&(u.T=a=0,++i,++u.D)),i===60)o=t?[1317,10,29]:[1900,2,29],r=3;else if(i===0)o=t?[1317,8,29]:[1900,1,0],r=6;else{i>60&&--i;var s=new Date(1900,0,1);s.setDate(s.getDate()+i-1),o=[s.getFullYear(),s.getMonth()+1,s.getDate()],r=s.getDay(),i<60&&(r=(r+6)%7),t&&(r=$h(s,o))}return u.y=o[0],u.m=o[1],u.d=o[2],u.S=a%60,a=Math.floor(a/60),u.M=a%60,a=Math.floor(a/60),u.H=a,u.q=r,u}function hr(e){return e.indexOf(".")==-1?e:e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/,"$1")}function Ph(e){return e.indexOf("E")==-1?e:e.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/,"$1E").replace(/(E[+-])(\d)$/,"$10$2")}function Bh(e){var n=e<0?12:11,t=hr(e.toFixed(12));return t.length<=n||(t=e.toPrecision(10),t.length<=n)?t:e.toExponential(5)}function Vh(e){var n=hr(e.toFixed(11));return n.length>(e<0?12:11)||n==="0"||n==="-0"?e.toPrecision(6):n}function zh(e){if(!isFinite(e))return isNaN(e)?"#NUM!":"#DIV/0!";var n=Math.floor(Math.log(Math.abs(e))*Math.LOG10E),t;return n>=-4&&n<=-1?t=e.toPrecision(10+n):Math.abs(n)<=9?t=Bh(e):n===10?t=e.toFixed(10).substr(0,12):t=Vh(e),hr(Ph(t.toUpperCase()))}function za(e,n){switch(typeof e){case"string":return e;case"boolean":return e?"TRUE":"FALSE";case"number":return(e|0)===e?e.toString(10):zh(e);case"undefined":return"";case"object":if(e==null)return"";if(e instanceof Date)return Qn(14,$t(e,n&&n.date1904),n)}throw new Error("unsupported value in General format: "+e)}function $h(e,n){n[0]-=581;var t=e.getDay();return e<60&&(t=(t+6)%7),t}function jh(e,n,t,i){var a="",r=0,o=0,u=t.y,s,c=0;switch(e){case 98:u=t.y+543;case 121:switch(n.length){case 1:case 2:s=u%100,c=2;break;default:s=u%1e4,c=4;break}break;case 109:switch(n.length){case 1:case 2:s=t.m,c=n.length;break;case 3:return la[t.m-1][1];case 5:return la[t.m-1][0];default:return la[t.m-1][2]}break;case 100:switch(n.length){case 1:case 2:s=t.d,c=n.length;break;case 3:return Zr[t.q][0];default:return Zr[t.q][1]}break;case 104:switch(n.length){case 1:case 2:s=1+(t.H+11)%12,c=n.length;break;default:throw"bad hour format: "+n}break;case 72:switch(n.length){case 1:case 2:s=t.H,c=n.length;break;default:throw"bad hour format: "+n}break;case 77:switch(n.length){case 1:case 2:s=t.M,c=n.length;break;default:throw"bad minute format: "+n}break;case 115:if(n!="s"&&n!="ss"&&n!=".0"&&n!=".00"&&n!=".000")throw"bad second format: "+n;return t.u===0&&(n=="s"||n=="ss")?St(t.S,n.length):(i>=2?o=i===3?1e3:100:o=i===1?10:1,r=Math.round(o*(t.S+t.u)),r>=60*o&&(r=0),n==="s"?r===0?"0":""+r/o:(a=St(r,2+i),n==="ss"?a.substr(0,2):"."+a.substr(2,n.length-1)));case 90:switch(n){case"[h]":case"[hh]":s=t.D*24+t.H;break;case"[m]":case"[mm]":s=(t.D*24+t.H)*60+t.M;break;case"[s]":case"[ss]":s=((t.D*24+t.H)*60+t.M)*60+(i==0?Math.round(t.S+t.u):t.S);break;default:throw"bad abstime format: "+n}c=n.length===3?1:2;break;case 101:s=u,c=1;break}var l=c>0?St(s,c):"";return l}function Zt(e){var n=3;if(e.length<=n)return e;for(var t=e.length%n,i=e.substr(0,t);t!=e.length;t+=n)i+=(i.length>0?",":"")+e.substr(t,n);return i}var _u=/%/g;function Uh(e,n,t){var i=n.replace(_u,""),a=n.length-i.length;return zt(e,i,t*Math.pow(10,2*a))+Le("%",a)}function qh(e,n,t){for(var i=n.length-1;n.charCodeAt(i-1)===44;)--i;return zt(e,n.substr(0,i),t/Math.pow(10,3*(n.length-i)))}function Gu(e,n){var t,i=e.indexOf("E")-e.indexOf(".")-1;if(e.match(/^#+0.0E\+0$/)){if(n==0)return"0.0E+0";if(n<0)return"-"+Gu(e,-n);var a=e.indexOf(".");a===-1&&(a=e.indexOf("E"));var r=Math.floor(Math.log(n)*Math.LOG10E)%a;if(r<0&&(r+=a),t=(n/Math.pow(10,r)).toPrecision(i+1+(a+r)%a),t.indexOf("e")===-1){var o=Math.floor(Math.log(n)*Math.LOG10E);for(t.indexOf(".")===-1?t=t.charAt(0)+"."+t.substr(1)+"E+"+(o-t.length+r):t+="E+"+(o-r);t.substr(0,2)==="0.";)t=t.charAt(0)+t.substr(2,a)+"."+t.substr(2+a),t=t.replace(/^0+([1-9])/,"$1").replace(/^0+\./,"0.");t=t.replace(/\+-/,"-")}t=t.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/,function(u,s,c,l){return s+c+l.substr(0,(a+r)%a)+"."+l.substr(r)+"E"})}else t=n.toExponential(i);return e.match(/E\+00$/)&&t.match(/e[+-]\d$/)&&(t=t.substr(0,t.length-1)+"0"+t.charAt(t.length-1)),e.match(/E\-/)&&t.match(/e\+/)&&(t=t.replace(/e\+/,"e")),t.replace("e","E")}var Ou=/# (\?+)( ?)\/( ?)(\d+)/;function Wh(e,n,t){var i=parseInt(e[4],10),a=Math.round(n*i),r=Math.floor(a/i),o=a-r*i,u=i;return t+(r===0?"":""+r)+" "+(o===0?Le(" ",e[1].length+1+e[4].length):dr(o,e[1].length)+e[2]+"/"+e[3]+St(u,e[4].length))}function Xh(e,n,t){return t+(n===0?"":""+n)+Le(" ",e[1].length+2+e[4].length)}var Fu=/^#*0*\.([0#]+)/,Du=/\)[^)]*[0#]/,Nu=/\(###\) ###\\?-####/;function Ie(e){for(var n="",t,i=0;i!=e.length;++i)switch(t=e.charCodeAt(i)){case 35:break;case 63:n+=" ";break;case 48:n+="0";break;default:n+=String.fromCharCode(t)}return n}function eo(e,n){var t=Math.pow(10,n);return""+Math.round(e*t)/t}function to(e,n){var t=e-Math.floor(e),i=Math.pow(10,n);return n<(""+Math.round(t*i)).length?0:Math.round(t*i)}function Kh(e,n){return n<(""+Math.round((e-Math.floor(e))*Math.pow(10,n))).length?1:0}function Yh(e){return e<2147483647&&e>-2147483648?""+(e>=0?e|0:e-1|0):""+Math.floor(e)}function lt(e,n,t){if(e.charCodeAt(0)===40&&!n.match(Du)){var i=n.replace(/\( */,"").replace(/ \)/,"").replace(/\)/,"");return t>=0?lt("n",i,t):"("+lt("n",i,-t)+")"}if(n.charCodeAt(n.length-1)===44)return qh(e,n,t);if(n.indexOf("%")!==-1)return Uh(e,n,t);if(n.indexOf("E")!==-1)return Gu(n,t);if(n.charCodeAt(0)===36)return"$"+lt(e,n.substr(n.charAt(1)==" "?2:1),t);var a,r,o,u,s=Math.abs(t),c=t<0?"-":"";if(n.match(/^00+$/))return c+kn(s,n.length);if(n.match(/^[#?]+$/))return a=kn(t,0),a==="0"&&(a=""),a.length>n.length?a:Ie(n.substr(0,n.length-a.length))+a;if(r=n.match(Ou))return Wh(r,s,c);if(n.match(/^#+0+$/))return c+kn(s,n.length-n.indexOf("0"));if(r=n.match(Fu))return a=eo(t,r[1].length).replace(/^([^\.]+)$/,"$1."+Ie(r[1])).replace(/\.$/,"."+Ie(r[1])).replace(/\.(\d*)$/,function(E,C){return"."+C+Le("0",Ie(r[1]).length-C.length)}),n.indexOf("0.")!==-1?a:a.replace(/^0\./,".");if(n=n.replace(/^#+([0.])/,"$1"),r=n.match(/^(0*)\.(#*)$/))return c+eo(s,r[2].length).replace(/\.(\d*[1-9])0*$/,".$1").replace(/^(-?\d*)$/,"$1.").replace(/^0\./,r[1].length?"0.":".");if(r=n.match(/^#{1,3},##0(\.?)$/))return c+Zt(kn(s,0));if(r=n.match(/^#,##0\.([#0]*0)$/))return t<0?"-"+lt(e,n,-t):Zt(""+(Math.floor(t)+Kh(t,r[1].length)))+"."+St(to(t,r[1].length),r[1].length);if(r=n.match(/^#,#*,#0/))return lt(e,n.replace(/^#,#*,/,""),t);if(r=n.match(/^([0#]+)(\\?-([0#]+))+$/))return a=_n(lt(e,n.replace(/[\\-]/g,""),t)),o=0,_n(_n(n.replace(/\\/g,"")).replace(/[0#]/g,function(E){return o<a.length?a.charAt(o++):E==="0"?"0":""}));if(n.match(Nu))return a=lt(e,"##########",t),"("+a.substr(0,3)+") "+a.substr(3,3)+"-"+a.substr(6);var l="";if(r=n.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))return o=Math.min(r[4].length,7),u=Ii(s,Math.pow(10,o)-1,!1),a=""+c,l=zt("n",r[1],u[1]),l.charAt(l.length-1)==" "&&(l=l.substr(0,l.length-1)+"0"),a+=l+r[2]+"/"+r[3],l=Hi(u[2],o),l.length<r[4].length&&(l=Ie(r[4].substr(r[4].length-l.length))+l),a+=l,a;if(r=n.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))return o=Math.min(Math.max(r[1].length,r[4].length),7),u=Ii(s,Math.pow(10,o)-1,!0),c+(u[0]||(u[1]?"":"0"))+" "+(u[1]?dr(u[1],o)+r[2]+"/"+r[3]+Hi(u[2],o):Le(" ",2*o+1+r[2].length+r[3].length));if(r=n.match(/^[#0?]+$/))return a=kn(t,0),n.length<=a.length?a:Ie(n.substr(0,n.length-a.length))+a;if(r=n.match(/^([#0?]+)\.([#0]+)$/)){a=""+t.toFixed(Math.min(r[2].length,10)).replace(/([^0])0+$/,"$1"),o=a.indexOf(".");var g=n.indexOf(".")-o,b=n.length-a.length-g;return Ie(n.substr(0,g)+a+n.substr(n.length-b))}if(r=n.match(/^00,000\.([#0]*0)$/))return o=to(t,r[1].length),t<0?"-"+lt(e,n,-t):Zt(Yh(t)).replace(/^\d,\d{3}$/,"0$&").replace(/^\d*$/,function(E){return"00,"+(E.length<3?St(0,3-E.length):"")+E})+"."+St(o,r[1].length);switch(n){case"###,##0.00":return lt(e,"#,##0.00",t);case"###,###":case"##,###":case"#,###":var h=Zt(kn(s,0));return h!=="0"?c+h:"";case"###,###.00":return lt(e,"###,##0.00",t).replace(/^0\./,".");case"#,###.00":return lt(e,"#,##0.00",t).replace(/^0\./,".")}throw new Error("unsupported format |"+n+"|")}function Jh(e,n,t){for(var i=n.length-1;n.charCodeAt(i-1)===44;)--i;return zt(e,n.substr(0,i),t/Math.pow(10,3*(n.length-i)))}function Zh(e,n,t){var i=n.replace(_u,""),a=n.length-i.length;return zt(e,i,t*Math.pow(10,2*a))+Le("%",a)}function Ru(e,n){var t,i=e.indexOf("E")-e.indexOf(".")-1;if(e.match(/^#+0.0E\+0$/)){if(n==0)return"0.0E+0";if(n<0)return"-"+Ru(e,-n);var a=e.indexOf(".");a===-1&&(a=e.indexOf("E"));var r=Math.floor(Math.log(n)*Math.LOG10E)%a;if(r<0&&(r+=a),t=(n/Math.pow(10,r)).toPrecision(i+1+(a+r)%a),!t.match(/[Ee]/)){var o=Math.floor(Math.log(n)*Math.LOG10E);t.indexOf(".")===-1?t=t.charAt(0)+"."+t.substr(1)+"E+"+(o-t.length+r):t+="E+"+(o-r),t=t.replace(/\+-/,"-")}t=t.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/,function(u,s,c,l){return s+c+l.substr(0,(a+r)%a)+"."+l.substr(r)+"E"})}else t=n.toExponential(i);return e.match(/E\+00$/)&&t.match(/e[+-]\d$/)&&(t=t.substr(0,t.length-1)+"0"+t.charAt(t.length-1)),e.match(/E\-/)&&t.match(/e\+/)&&(t=t.replace(/e\+/,"e")),t.replace("e","E")}function Ft(e,n,t){if(e.charCodeAt(0)===40&&!n.match(Du)){var i=n.replace(/\( */,"").replace(/ \)/,"").replace(/\)/,"");return t>=0?Ft("n",i,t):"("+Ft("n",i,-t)+")"}if(n.charCodeAt(n.length-1)===44)return Jh(e,n,t);if(n.indexOf("%")!==-1)return Zh(e,n,t);if(n.indexOf("E")!==-1)return Ru(n,t);if(n.charCodeAt(0)===36)return"$"+Ft(e,n.substr(n.charAt(1)==" "?2:1),t);var a,r,o,u,s=Math.abs(t),c=t<0?"-":"";if(n.match(/^00+$/))return c+St(s,n.length);if(n.match(/^[#?]+$/))return a=""+t,t===0&&(a=""),a.length>n.length?a:Ie(n.substr(0,n.length-a.length))+a;if(r=n.match(Ou))return Xh(r,s,c);if(n.match(/^#+0+$/))return c+St(s,n.length-n.indexOf("0"));if(r=n.match(Fu))return a=(""+t).replace(/^([^\.]+)$/,"$1."+Ie(r[1])).replace(/\.$/,"."+Ie(r[1])),a=a.replace(/\.(\d*)$/,function(E,C){return"."+C+Le("0",Ie(r[1]).length-C.length)}),n.indexOf("0.")!==-1?a:a.replace(/^0\./,".");if(n=n.replace(/^#+([0.])/,"$1"),r=n.match(/^(0*)\.(#*)$/))return c+(""+s).replace(/\.(\d*[1-9])0*$/,".$1").replace(/^(-?\d*)$/,"$1.").replace(/^0\./,r[1].length?"0.":".");if(r=n.match(/^#{1,3},##0(\.?)$/))return c+Zt(""+s);if(r=n.match(/^#,##0\.([#0]*0)$/))return t<0?"-"+Ft(e,n,-t):Zt(""+t)+"."+Le("0",r[1].length);if(r=n.match(/^#,#*,#0/))return Ft(e,n.replace(/^#,#*,/,""),t);if(r=n.match(/^([0#]+)(\\?-([0#]+))+$/))return a=_n(Ft(e,n.replace(/[\\-]/g,""),t)),o=0,_n(_n(n.replace(/\\/g,"")).replace(/[0#]/g,function(E){return o<a.length?a.charAt(o++):E==="0"?"0":""}));if(n.match(Nu))return a=Ft(e,"##########",t),"("+a.substr(0,3)+") "+a.substr(3,3)+"-"+a.substr(6);var l="";if(r=n.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))return o=Math.min(r[4].length,7),u=Ii(s,Math.pow(10,o)-1,!1),a=""+c,l=zt("n",r[1],u[1]),l.charAt(l.length-1)==" "&&(l=l.substr(0,l.length-1)+"0"),a+=l+r[2]+"/"+r[3],l=Hi(u[2],o),l.length<r[4].length&&(l=Ie(r[4].substr(r[4].length-l.length))+l),a+=l,a;if(r=n.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))return o=Math.min(Math.max(r[1].length,r[4].length),7),u=Ii(s,Math.pow(10,o)-1,!0),c+(u[0]||(u[1]?"":"0"))+" "+(u[1]?dr(u[1],o)+r[2]+"/"+r[3]+Hi(u[2],o):Le(" ",2*o+1+r[2].length+r[3].length));if(r=n.match(/^[#0?]+$/))return a=""+t,n.length<=a.length?a:Ie(n.substr(0,n.length-a.length))+a;if(r=n.match(/^([#0]+)\.([#0]+)$/)){a=""+t.toFixed(Math.min(r[2].length,10)).replace(/([^0])0+$/,"$1"),o=a.indexOf(".");var g=n.indexOf(".")-o,b=n.length-a.length-g;return Ie(n.substr(0,g)+a+n.substr(n.length-b))}if(r=n.match(/^00,000\.([#0]*0)$/))return t<0?"-"+Ft(e,n,-t):Zt(""+t).replace(/^\d,\d{3}$/,"0$&").replace(/^\d*$/,function(E){return"00,"+(E.length<3?St(0,3-E.length):"")+E})+"."+St(0,r[1].length);switch(n){case"###,###":case"##,###":case"#,###":var h=Zt(""+s);return h!=="0"?c+h:"";default:if(n.match(/\.[0#?]*$/))return Ft(e,n.slice(0,n.lastIndexOf(".")),t)+Ie(n.slice(n.lastIndexOf(".")))}throw new Error("unsupported format |"+n+"|")}function zt(e,n,t){return(t|0)===t?Ft(e,n,t):lt(e,n,t)}function Qh(e){for(var n=[],t=!1,i=0,a=0;i<e.length;++i)switch(e.charCodeAt(i)){case 34:t=!t;break;case 95:case 42:case 92:++i;break;case 59:n[n.length]=e.substr(a,i-a),a=i+1}if(n[n.length]=e.substr(a),t===!0)throw new Error("Format |"+e+"| unterminated string ");return n}var Lu=/\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;function gr(e){for(var n=0,t="",i="";n<e.length;)switch(t=e.charAt(n)){case"G":Ti(e,n)&&(n+=6),n++;break;case'"':for(;e.charCodeAt(++n)!==34&&n<e.length;);++n;break;case"\\":n+=2;break;case"_":n+=2;break;case"@":++n;break;case"B":case"b":if(e.charAt(n+1)==="1"||e.charAt(n+1)==="2")return!0;case"M":case"D":case"Y":case"H":case"S":case"E":case"m":case"d":case"y":case"h":case"s":case"e":case"g":return!0;case"A":case"a":case"上":if(e.substr(n,3).toUpperCase()==="A/P"||e.substr(n,5).toUpperCase()==="AM/PM"||e.substr(n,5).toUpperCase()==="上午/下午")return!0;++n;break;case"[":for(i=t;e.charAt(n++)!=="]"&&n<e.length;)i+=e.charAt(n);if(i.match(Lu))return!0;break;case".":case"0":case"#":for(;n<e.length&&("0#?.,E+-%".indexOf(t=e.charAt(++n))>-1||t=="\\"&&e.charAt(n+1)=="-"&&"0#".indexOf(e.charAt(n+2))>-1););break;case"?":for(;e.charAt(++n)===t;);break;case"*":++n,(e.charAt(n)==" "||e.charAt(n)=="*")&&++n;break;case"(":case")":++n;break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":for(;n<e.length&&"0123456789".indexOf(e.charAt(++n))>-1;);break;case" ":++n;break;default:++n;break}return!1}function eg(e,n,t,i){for(var a=[],r="",o=0,u="",s="t",c,l,g,b="H";o<e.length;)switch(u=e.charAt(o)){case"G":if(!Ti(e,o))throw new Error("unrecognized character "+u+" in "+e);a[a.length]={t:"G",v:"General"},o+=7;break;case'"':for(r="";(g=e.charCodeAt(++o))!==34&&o<e.length;)r+=String.fromCharCode(g);a[a.length]={t:"t",v:r},++o;break;case"\\":var h=e.charAt(++o),E=h==="("||h===")"?h:"t";a[a.length]={t:E,v:h},++o;break;case"_":a[a.length]={t:"t",v:" "},o+=2;break;case"@":a[a.length]={t:"T",v:n},++o;break;case"B":case"b":if(e.charAt(o+1)==="1"||e.charAt(o+1)==="2"){if(c==null&&(c=vn(n,t,e.charAt(o+1)==="2"),c==null))return"";a[a.length]={t:"X",v:e.substr(o,2)},s=u,o+=2;break}case"M":case"D":case"Y":case"H":case"S":case"E":u=u.toLowerCase();case"m":case"d":case"y":case"h":case"s":case"e":case"g":if(n<0||c==null&&(c=vn(n,t),c==null))return"";for(r=u;++o<e.length&&e.charAt(o).toLowerCase()===u;)r+=u;u==="m"&&s.toLowerCase()==="h"&&(u="M"),u==="h"&&(u=b),a[a.length]={t:u,v:r},s=u;break;case"A":case"a":case"上":var C={t:u,v:u};if(c==null&&(c=vn(n,t)),e.substr(o,3).toUpperCase()==="A/P"?(c!=null&&(C.v=c.H>=12?e.charAt(o+2):u),C.t="T",b="h",o+=3):e.substr(o,5).toUpperCase()==="AM/PM"?(c!=null&&(C.v=c.H>=12?"PM":"AM"),C.t="T",o+=5,b="h"):e.substr(o,5).toUpperCase()==="上午/下午"?(c!=null&&(C.v=c.H>=12?"下午":"上午"),C.t="T",o+=5,b="h"):(C.t="t",++o),c==null&&C.t==="T")return"";a[a.length]=C,s=u;break;case"[":for(r=u;e.charAt(o++)!=="]"&&o<e.length;)r+=e.charAt(o);if(r.slice(-1)!=="]")throw'unterminated "[" block: |'+r+"|";if(r.match(Lu)){if(c==null&&(c=vn(n,t),c==null))return"";a[a.length]={t:"Z",v:r.toLowerCase()},s=r.charAt(1)}else r.indexOf("$")>-1&&(r=(r.match(/\$([^-\[\]]*)/)||[])[1]||"$",gr(e)||(a[a.length]={t:"t",v:r}));break;case".":if(c!=null){for(r=u;++o<e.length&&(u=e.charAt(o))==="0";)r+=u;a[a.length]={t:"s",v:r};break}case"0":case"#":for(r=u;++o<e.length&&"0#?.,E+-%".indexOf(u=e.charAt(o))>-1;)r+=u;a[a.length]={t:"n",v:r};break;case"?":for(r=u;e.charAt(++o)===u;)r+=u;a[a.length]={t:u,v:r},s=u;break;case"*":++o,(e.charAt(o)==" "||e.charAt(o)=="*")&&++o;break;case"(":case")":a[a.length]={t:i===1?"t":u,v:u},++o;break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":for(r=u;o<e.length&&"0123456789".indexOf(e.charAt(++o))>-1;)r+=e.charAt(o);a[a.length]={t:"D",v:r};break;case" ":a[a.length]={t:u,v:u},++o;break;case"$":a[a.length]={t:"t",v:"$"},++o;break;default:if(",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(u)===-1)throw new Error("unrecognized character "+u+" in "+e);a[a.length]={t:"t",v:u},++o;break}var w=0,S=0,D;for(o=a.length-1,s="t";o>=0;--o)switch(a[o].t){case"h":case"H":a[o].t=b,s="h",w<1&&(w=1);break;case"s":(D=a[o].v.match(/\.0+$/))&&(S=Math.max(S,D[0].length-1),w=4),w<3&&(w=3);case"d":case"y":case"e":s=a[o].t;break;case"M":s=a[o].t,w<2&&(w=2);break;case"m":s==="s"&&(a[o].t="M",w<2&&(w=2));break;case"X":break;case"Z":w<1&&a[o].v.match(/[Hh]/)&&(w=1),w<2&&a[o].v.match(/[Mm]/)&&(w=2),w<3&&a[o].v.match(/[Ss]/)&&(w=3)}var N;switch(w){case 0:break;case 1:case 2:case 3:c.u>=.5&&(c.u=0,++c.S),c.S>=60&&(c.S=0,++c.M),c.M>=60&&(c.M=0,++c.H),c.H>=24&&(c.H=0,++c.D,N=vn(c.D),N.u=c.u,N.S=c.S,N.M=c.M,N.H=c.H,c=N);break;case 4:switch(S){case 1:c.u=Math.round(c.u*10)/10;break;case 2:c.u=Math.round(c.u*100)/100;break;case 3:c.u=Math.round(c.u*1e3)/1e3;break}c.u>=1&&(c.u=0,++c.S),c.S>=60&&(c.S=0,++c.M),c.M>=60&&(c.M=0,++c.H),c.H>=24&&(c.H=0,++c.D,N=vn(c.D),N.u=c.u,N.S=c.S,N.M=c.M,N.H=c.H,c=N);break}var V="",L;for(o=0;o<a.length;++o)switch(a[o].t){case"t":case"T":case" ":case"D":break;case"X":a[o].v="",a[o].t=";";break;case"d":case"m":case"y":case"h":case"H":case"M":case"s":case"e":case"b":case"Z":a[o].v=jh(a[o].t.charCodeAt(0),a[o].v,c,S),a[o].t="t";break;case"n":case"?":for(L=o+1;a[L]!=null&&((u=a[L].t)==="?"||u==="D"||(u===" "||u==="t")&&a[L+1]!=null&&(a[L+1].t==="?"||a[L+1].t==="t"&&a[L+1].v==="/")||a[o].t==="("&&(u===" "||u==="n"||u===")")||u==="t"&&(a[L].v==="/"||a[L].v===" "&&a[L+1]!=null&&a[L+1].t=="?"));)a[o].v+=a[L].v,a[L]={v:"",t:";"},++L;V+=a[o].v,o=L-1;break;case"G":a[o].t="t",a[o].v=za(n,t);break}var q="",O,P;if(V.length>0){V.charCodeAt(0)==40?(O=n<0&&V.charCodeAt(0)===45?-n:n,P=zt("n",V,O)):(O=n<0&&i>1?-n:n,P=zt("n",V,O),O<0&&a[0]&&a[0].t=="t"&&(P=P.substr(1),a[0].v="-"+a[0].v)),L=P.length-1;var H=a.length;for(o=0;o<a.length;++o)if(a[o]!=null&&a[o].t!="t"&&a[o].v.indexOf(".")>-1){H=o;break}var j=a.length;if(H===a.length&&P.indexOf("E")===-1){for(o=a.length-1;o>=0;--o)a[o]==null||"n?".indexOf(a[o].t)===-1||(L>=a[o].v.length-1?(L-=a[o].v.length,a[o].v=P.substr(L+1,a[o].v.length)):L<0?a[o].v="":(a[o].v=P.substr(0,L+1),L=-1),a[o].t="t",j=o);L>=0&&j<a.length&&(a[j].v=P.substr(0,L+1)+a[j].v)}else if(H!==a.length&&P.indexOf("E")===-1){for(L=P.indexOf(".")-1,o=H;o>=0;--o)if(!(a[o]==null||"n?".indexOf(a[o].t)===-1)){for(l=a[o].v.indexOf(".")>-1&&o===H?a[o].v.indexOf(".")-1:a[o].v.length-1,q=a[o].v.substr(l+1);l>=0;--l)L>=0&&(a[o].v.charAt(l)==="0"||a[o].v.charAt(l)==="#")&&(q=P.charAt(L--)+q);a[o].v=q,a[o].t="t",j=o}for(L>=0&&j<a.length&&(a[j].v=P.substr(0,L+1)+a[j].v),L=P.indexOf(".")+1,o=H;o<a.length;++o)if(!(a[o]==null||"n?(".indexOf(a[o].t)===-1&&o!==H)){for(l=a[o].v.indexOf(".")>-1&&o===H?a[o].v.indexOf(".")+1:0,q=a[o].v.substr(0,l);l<a[o].v.length;++l)L<P.length&&(q+=P.charAt(L++));a[o].v=q,a[o].t="t",j=o}}}for(o=0;o<a.length;++o)a[o]!=null&&"n?".indexOf(a[o].t)>-1&&(O=i>1&&n<0&&o>0&&a[o-1].v==="-"?-n:n,a[o].v=zt(a[o].t,a[o].v,O),a[o].t="t");var M="";for(o=0;o!==a.length;++o)a[o]!=null&&(M+=a[o].v);return M}var no=/\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;function io(e,n){if(n==null)return!1;var t=parseFloat(n[2]);switch(n[1]){case"=":if(e==t)return!0;break;case">":if(e>t)return!0;break;case"<":if(e<t)return!0;break;case"<>":if(e!=t)return!0;break;case">=":if(e>=t)return!0;break;case"<=":if(e<=t)return!0;break}return!1}function tg(e,n){var t=Qh(e),i=t.length,a=t[i-1].indexOf("@");if(i<4&&a>-1&&--i,t.length>4)throw new Error("cannot find right format for |"+t.join("|")+"|");if(typeof n!="number")return[4,t.length===4||a>-1?t[t.length-1]:"@"];switch(typeof n=="number"&&!isFinite(n)&&(n=0),t.length){case 1:t=a>-1?["General","General","General",t[0]]:[t[0],t[0],t[0],"@"];break;case 2:t=a>-1?[t[0],t[0],t[0],t[1]]:[t[0],t[1],t[0],"@"];break;case 3:t=a>-1?[t[0],t[1],t[0],t[2]]:[t[0],t[1],t[2],"@"];break}var r=n>0?t[0]:n<0?t[1]:t[2];if(t[0].indexOf("[")===-1&&t[1].indexOf("[")===-1)return[i,r];if(t[0].match(/\[[=<>]/)!=null||t[1].match(/\[[=<>]/)!=null){var o=t[0].match(no),u=t[1].match(no);return io(n,o)?[i,t[0]]:io(n,u)?[i,t[1]]:[i,t[o!=null&&u!=null?2:1]]}return[i,r]}function Qn(e,n,t){t==null&&(t={});var i="";switch(typeof e){case"string":e=="m/d/yy"&&t.dateNF?i=t.dateNF:i=e;break;case"number":e==14&&t.dateNF?i=t.dateNF:i=(t.table!=null?t.table:At)[e],i==null&&(i=t.table&&t.table[Qr[e]]||At[Qr[e]]),i==null&&(i=Ih[e]||"General");break}if(Ti(i,0))return za(n,t);n instanceof Date&&(n=$t(n,t.date1904));var a=tg(i,n);if(Ti(a[1]))return za(n,t);if(n===!0)n="TRUE";else if(n===!1)n="FALSE";else{if(n===""||n==null)return"";if(isNaN(n)&&a[1].indexOf("0")>-1)return"#NUM!";if(!isFinite(n)&&a[1].indexOf("0")>-1)return"#DIV/0!"}return eg(a[1],n,t,a[0])}function Hu(e,n){if(typeof n!="number"){n=+n||-1;for(var t=0;t<392;++t){if(At[t]==null){n<0&&(n=t);continue}if(At[t]==e){n=t;break}}n<0&&(n=391)}return At[n]=e,n}function ng(e){for(var n=0;n!=392;++n)e[n]!==void 0&&Hu(e[n],n)}function ig(){At=Th()}var ag={"d.m":"d\\.m"};function rg(e,n){return Hu(ag[e]||e,n)}var ao=function(){var e={};e.version="1.2.0";function n(){for(var O=0,P=new Array(256),H=0;H!=256;++H)O=H,O=O&1?-306674912^O>>>1:O>>>1,O=O&1?-306674912^O>>>1:O>>>1,O=O&1?-306674912^O>>>1:O>>>1,O=O&1?-306674912^O>>>1:O>>>1,O=O&1?-306674912^O>>>1:O>>>1,O=O&1?-306674912^O>>>1:O>>>1,O=O&1?-306674912^O>>>1:O>>>1,O=O&1?-306674912^O>>>1:O>>>1,P[H]=O;return typeof Int32Array<"u"?new Int32Array(P):P}var t=n();function i(O){var P=0,H=0,j=0,M=typeof Int32Array<"u"?new Int32Array(4096):new Array(4096);for(j=0;j!=256;++j)M[j]=O[j];for(j=0;j!=256;++j)for(H=O[j],P=256+j;P<4096;P+=256)H=M[P]=H>>>8^O[H&255];var X=[];for(j=1;j!=16;++j)X[j-1]=typeof Int32Array<"u"&&typeof M.subarray=="function"?M.subarray(j*256,j*256+256):M.slice(j*256,j*256+256);return X}var a=i(t),r=a[0],o=a[1],u=a[2],s=a[3],c=a[4],l=a[5],g=a[6],b=a[7],h=a[8],E=a[9],C=a[10],w=a[11],S=a[12],D=a[13],N=a[14];function V(O,P){for(var H=P^-1,j=0,M=O.length;j<M;)H=H>>>8^t[(H^O.charCodeAt(j++))&255];return~H}function L(O,P){for(var H=P^-1,j=O.length-15,M=0;M<j;)H=N[O[M++]^H&255]^D[O[M++]^H>>8&255]^S[O[M++]^H>>16&255]^w[O[M++]^H>>>24]^C[O[M++]]^E[O[M++]]^h[O[M++]]^b[O[M++]]^g[O[M++]]^l[O[M++]]^c[O[M++]]^s[O[M++]]^u[O[M++]]^o[O[M++]]^r[O[M++]]^t[O[M++]];for(j+=15;M<j;)H=H>>>8^t[(H^O[M++])&255];return~H}function q(O,P){for(var H=P^-1,j=0,M=O.length,X=0,Z=0;j<M;)X=O.charCodeAt(j++),X<128?H=H>>>8^t[(H^X)&255]:X<2048?(H=H>>>8^t[(H^(192|X>>6&31))&255],H=H>>>8^t[(H^(128|X&63))&255]):X>=55296&&X<57344?(X=(X&1023)+64,Z=O.charCodeAt(j++)&1023,H=H>>>8^t[(H^(240|X>>8&7))&255],H=H>>>8^t[(H^(128|X>>2&63))&255],H=H>>>8^t[(H^(128|Z>>6&15|(X&3)<<4))&255],H=H>>>8^t[(H^(128|Z&63))&255]):(H=H>>>8^t[(H^(224|X>>12&15))&255],H=H>>>8^t[(H^(128|X>>6&63))&255],H=H>>>8^t[(H^(128|X&63))&255]);return~H}return e.table=t,e.bstr=V,e.buf=L,e.str=q,e}(),Et=function(){var n={};n.version="1.2.2";function t(d,k){for(var f=d.split("/"),m=k.split("/"),p=0,v=0,_=Math.min(f.length,m.length);p<_;++p){if(v=f[p].length-m[p].length)return v;if(f[p]!=m[p])return f[p]<m[p]?-1:1}return f.length-m.length}function i(d){if(d.charAt(d.length-1)=="/")return d.slice(0,-1).indexOf("/")===-1?d:i(d.slice(0,-1));var k=d.lastIndexOf("/");return k===-1?d:d.slice(0,k+1)}function a(d){if(d.charAt(d.length-1)=="/")return a(d.slice(0,-1));var k=d.lastIndexOf("/");return k===-1?d:d.slice(k+1)}function r(d,k){typeof k=="string"&&(k=new Date(k));var f=k.getHours();f=f<<6|k.getMinutes(),f=f<<5|k.getSeconds()>>>1,d.write_shift(2,f);var m=k.getFullYear()-1980;m=m<<4|k.getMonth()+1,m=m<<5|k.getDate(),d.write_shift(2,m)}function o(d){var k=d.read_shift(2)&65535,f=d.read_shift(2)&65535,m=new Date,p=f&31;f>>>=5;var v=f&15;f>>>=4,m.setMilliseconds(0),m.setFullYear(f+1980),m.setMonth(v-1),m.setDate(p);var _=k&31;k>>>=5;var F=k&63;return k>>>=6,m.setHours(k),m.setMinutes(F),m.setSeconds(_<<1),m}function u(d){Wt(d,0);for(var k={},f=0;d.l<=d.length-4;){var m=d.read_shift(2),p=d.read_shift(2),v=d.l+p,_={};switch(m){case 21589:f=d.read_shift(1),f&1&&(_.mtime=d.read_shift(4)),p>5&&(f&2&&(_.atime=d.read_shift(4)),f&4&&(_.ctime=d.read_shift(4))),_.mtime&&(_.mt=new Date(_.mtime*1e3));break;case 1:{var F=d.read_shift(4),x=d.read_shift(4);_.usz=x*Math.pow(2,32)+F,F=d.read_shift(4),x=d.read_shift(4),_.csz=x*Math.pow(2,32)+F}break}d.l=v,k[m]=_}return k}var s;function c(){return s||(s=og)}function l(d,k){if(d[0]==80&&d[1]==75)return bn(d,k);if((d[0]|32)==109&&(d[1]|32)==105)return yt(d,k);if(d.length<512)throw new Error("CFB file size "+d.length+" < 512");var f=3,m=512,p=0,v=0,_=0,F=0,x=0,G=[],A=d.slice(0,512);Wt(A,0);var I=g(A);switch(f=I[0],f){case 3:m=512;break;case 4:m=4096;break;case 0:if(I[1]==0)return bn(d,k);default:throw new Error("Major Version: Expected 3 or 4 saw "+f)}m!==512&&(A=d.slice(0,m),Wt(A,28));var B=d.slice(0,m);b(A,f);var U=A.read_shift(4,"i");if(f===3&&U!==0)throw new Error("# Directory Sectors: Expected 0 saw "+U);A.l+=4,_=A.read_shift(4,"i"),A.l+=4,A.chk("00100000","Mini Stream Cutoff Size: "),F=A.read_shift(4,"i"),p=A.read_shift(4,"i"),x=A.read_shift(4,"i"),v=A.read_shift(4,"i");for(var T=-1,z=0;z<109&&(T=A.read_shift(4,"i"),!(T<0));++z)G[z]=T;var J=h(d,m);w(x,v,J,m,G);var oe=D(J,_,G,m);_<oe.length&&(oe[_].name="!Directory"),p>0&&F!==Z&&(oe[F].name="!MiniFAT"),oe[G[0]].name="!FAT",oe.fat_addrs=G,oe.ssz=m;var re={},ge=[],cn=[],jt=[];N(_,oe,J,ge,p,re,cn,F),E(cn,jt,ge),ge.shift();var Hn={FileIndex:cn,FullPaths:jt};return k&&k.raw&&(Hn.raw={header:B,sectors:J}),Hn}function g(d){if(d[d.l]==80&&d[d.l+1]==75)return[0,0];d.chk(ie,"Header Signature: "),d.l+=16;var k=d.read_shift(2,"u");return[d.read_shift(2,"u"),k]}function b(d,k){var f=9;switch(d.l+=2,f=d.read_shift(2)){case 9:if(k!=3)throw new Error("Sector Shift: Expected 9 saw "+f);break;case 12:if(k!=4)throw new Error("Sector Shift: Expected 12 saw "+f);break;default:throw new Error("Sector Shift: Expected 9 or 12 saw "+f)}d.chk("0600","Mini Sector Shift: "),d.chk("000000000000","Reserved: ")}function h(d,k){for(var f=Math.ceil(d.length/k)-1,m=[],p=1;p<f;++p)m[p-1]=d.slice(p*k,(p+1)*k);return m[f-1]=d.slice(f*k),m}function E(d,k,f){for(var m=0,p=0,v=0,_=0,F=0,x=f.length,G=[],A=[];m<x;++m)G[m]=A[m]=m,k[m]=f[m];for(;F<A.length;++F)m=A[F],p=d[m].L,v=d[m].R,_=d[m].C,G[m]===m&&(p!==-1&&G[p]!==p&&(G[m]=G[p]),v!==-1&&G[v]!==v&&(G[m]=G[v])),_!==-1&&(G[_]=m),p!==-1&&m!=G[m]&&(G[p]=G[m],A.lastIndexOf(p)<F&&A.push(p)),v!==-1&&m!=G[m]&&(G[v]=G[m],A.lastIndexOf(v)<F&&A.push(v));for(m=1;m<x;++m)G[m]===m&&(v!==-1&&G[v]!==v?G[m]=G[v]:p!==-1&&G[p]!==p&&(G[m]=G[p]));for(m=1;m<x;++m)if(d[m].type!==0){if(F=m,F!=G[F])do F=G[F],k[m]=k[F]+"/"+k[m];while(F!==0&&G[F]!==-1&&F!=G[F]);G[m]=-1}for(k[0]+="/",m=1;m<x;++m)d[m].type!==2&&(k[m]+="/")}function C(d,k,f){for(var m=d.start,p=d.size,v=[],_=m;f&&p>0&&_>=0;)v.push(k.slice(_*X,_*X+X)),p-=X,_=Sn(f,_*4);return v.length===0?Bt(0):yn(v).slice(0,d.size)}function w(d,k,f,m,p){var v=Z;if(d===Z){if(k!==0)throw new Error("DIFAT chain shorter than expected")}else if(d!==-1){var _=f[d],F=(m>>>2)-1;if(!_)return;for(var x=0;x<F&&(v=Sn(_,x*4))!==Z;++x)p.push(v);k>=1&&w(Sn(_,m-4),k-1,f,m,p)}}function S(d,k,f,m,p){var v=[],_=[];p||(p=[]);var F=m-1,x=0,G=0;for(x=k;x>=0;){p[x]=!0,v[v.length]=x,_.push(d[x]);var A=f[Math.floor(x*4/m)];if(G=x*4&F,m<4+G)throw new Error("FAT boundary crossed: "+x+" 4 "+m);if(!d[A])break;x=Sn(d[A],G)}return{nodes:v,data:lo([_])}}function D(d,k,f,m){var p=d.length,v=[],_=[],F=[],x=[],G=m-1,A=0,I=0,B=0,U=0;for(A=0;A<p;++A)if(F=[],B=A+k,B>=p&&(B-=p),!_[B]){x=[];var T=[];for(I=B;I>=0;){T[I]=!0,_[I]=!0,F[F.length]=I,x.push(d[I]);var z=f[Math.floor(I*4/m)];if(U=I*4&G,m<4+U)throw new Error("FAT boundary crossed: "+I+" 4 "+m);if(!d[z]||(I=Sn(d[z],U),T[I]))break}v[B]={nodes:F,data:lo([x])}}return v}function N(d,k,f,m,p,v,_,F){for(var x=0,G=m.length?2:0,A=k[d].data,I=0,B=0,U;I<A.length;I+=128){var T=A.slice(I,I+128);Wt(T,64),B=T.read_shift(2),U=fr(T,0,B-G),m.push(U);var z={name:U,type:T.read_shift(1),color:T.read_shift(1),L:T.read_shift(4,"i"),R:T.read_shift(4,"i"),C:T.read_shift(4,"i"),clsid:T.read_shift(16),state:T.read_shift(4,"i"),start:0,size:0},J=T.read_shift(2)+T.read_shift(2)+T.read_shift(2)+T.read_shift(2);J!==0&&(z.ct=V(T,T.l-8));var oe=T.read_shift(2)+T.read_shift(2)+T.read_shift(2)+T.read_shift(2);oe!==0&&(z.mt=V(T,T.l-8)),z.start=T.read_shift(4,"i"),z.size=T.read_shift(4,"i"),z.size<0&&z.start<0&&(z.size=z.type=0,z.start=Z,z.name=""),z.type===5?(x=z.start,p>0&&x!==Z&&(k[x].name="!StreamData")):z.size>=4096?(z.storage="fat",k[z.start]===void 0&&(k[z.start]=S(f,z.start,k.fat_addrs,k.ssz)),k[z.start].name=z.name,z.content=k[z.start].data.slice(0,z.size)):(z.storage="minifat",z.size<0?z.size=0:x!==Z&&z.start!==Z&&k[x]&&(z.content=C(z,k[x].data,(k[F]||{}).data))),z.content&&Wt(z.content,0),v[U]=z,_.push(z)}}function V(d,k){return new Date((tt(d,k+4)/1e7*Math.pow(2,32)+tt(d,k)/1e7-11644473600)*1e3)}function L(d,k){return c(),l(s.readFileSync(d),k)}function q(d,k){var f=k&&k.type;switch(f||le&&Buffer.isBuffer(d)&&(f="buffer"),f||"base64"){case"file":return L(d,k);case"base64":return l(Kt(Kr(d)),k);case"binary":return l(Kt(d),k)}return l(d,k)}function O(d,k){var f=k||{},m=f.root||"Root Entry";if(d.FullPaths||(d.FullPaths=[]),d.FileIndex||(d.FileIndex=[]),d.FullPaths.length!==d.FileIndex.length)throw new Error("inconsistent CFB structure");d.FullPaths.length===0&&(d.FullPaths[0]=m+"/",d.FileIndex[0]={name:m,type:5}),f.CLSID&&(d.FileIndex[0].clsid=f.CLSID),P(d)}function P(d){var k="Sh33tJ5";if(!Et.find(d,"/"+k)){var f=Bt(4);f[0]=55,f[1]=f[3]=50,f[2]=54,d.FileIndex.push({name:k,type:2,content:f,size:4,L:69,R:69,C:69}),d.FullPaths.push(d.FullPaths[0]+k),H(d)}}function H(d,k){O(d);for(var f=!1,m=!1,p=d.FullPaths.length-1;p>=0;--p){var v=d.FileIndex[p];switch(v.type){case 0:m?f=!0:(d.FileIndex.pop(),d.FullPaths.pop());break;case 1:case 2:case 5:m=!0,isNaN(v.R*v.L*v.C)&&(f=!0),v.R>-1&&v.L>-1&&v.R==v.L&&(f=!0);break;default:f=!0;break}}if(!(!f&&!k)){var _=new Date(1987,1,19),F=0,x=Object.create?Object.create(null):{},G=[];for(p=0;p<d.FullPaths.length;++p)x[d.FullPaths[p]]=!0,d.FileIndex[p].type!==0&&G.push([d.FullPaths[p],d.FileIndex[p]]);for(p=0;p<G.length;++p){var A=i(G[p][0]);for(m=x[A];!m;){for(;i(A)&&!x[i(A)];)A=i(A);G.push([A,{name:a(A).replace("/",""),type:1,clsid:it,ct:_,mt:_,content:null}]),x[A]=!0,A=i(G[p][0]),m=x[A]}}for(G.sort(function(U,T){return t(U[0],T[0])}),d.FullPaths=[],d.FileIndex=[],p=0;p<G.length;++p)d.FullPaths[p]=G[p][0],d.FileIndex[p]=G[p][1];for(p=0;p<G.length;++p){var I=d.FileIndex[p],B=d.FullPaths[p];if(I.name=a(B).replace("/",""),I.L=I.R=I.C=-(I.color=1),I.size=I.content?I.content.length:0,I.start=0,I.clsid=I.clsid||it,p===0)I.C=G.length>1?1:-1,I.size=0,I.type=5;else if(B.slice(-1)=="/"){for(F=p+1;F<G.length&&i(d.FullPaths[F])!=B;++F);for(I.C=F>=G.length?-1:F,F=p+1;F<G.length&&i(d.FullPaths[F])!=i(B);++F);I.R=F>=G.length?-1:F,I.type=1}else i(d.FullPaths[p+1]||"")==i(B)&&(I.R=p+1),I.type=2}}}function j(d,k){var f=k||{};if(f.fileType=="mad")return fe(d,f);switch(H(d),f.fileType){case"zip":return me(d,f)}var m=function(U){for(var T=0,z=0,J=0;J<U.FileIndex.length;++J){var oe=U.FileIndex[J];if(oe.content){var re=oe.content.length;re>0&&(re<4096?T+=re+63>>6:z+=re+511>>9)}}for(var ge=U.FullPaths.length+3>>2,cn=T+7>>3,jt=T+127>>7,Hn=cn+z+ge+jt,ln=Hn+127>>7,qi=ln<=109?0:Math.ceil((ln-109)/127);Hn+ln+qi+127>>7>ln;)qi=++ln<=109?0:Math.ceil((ln-109)/127);var It=[1,qi,ln,jt,ge,z,T,0];return U.FileIndex[0].size=T<<6,It[7]=(U.FileIndex[0].start=It[0]+It[1]+It[2]+It[3]+It[4]+It[5])+(It[6]+7>>3),It}(d),p=Bt(m[7]<<9),v=0,_=0;{for(v=0;v<8;++v)p.write_shift(1,ve[v]);for(v=0;v<8;++v)p.write_shift(2,0);for(p.write_shift(2,62),p.write_shift(2,3),p.write_shift(2,65534),p.write_shift(2,9),p.write_shift(2,6),v=0;v<3;++v)p.write_shift(2,0);for(p.write_shift(4,0),p.write_shift(4,m[2]),p.write_shift(4,m[0]+m[1]+m[2]+m[3]-1),p.write_shift(4,0),p.write_shift(4,4096),p.write_shift(4,m[3]?m[0]+m[1]+m[2]-1:Z),p.write_shift(4,m[3]),p.write_shift(-4,m[1]?m[0]-1:Z),p.write_shift(4,m[1]),v=0;v<109;++v)p.write_shift(-4,v<m[2]?m[1]+v:-1)}if(m[1])for(_=0;_<m[1];++_){for(;v<236+_*127;++v)p.write_shift(-4,v<m[2]?m[1]+v:-1);p.write_shift(-4,_===m[1]-1?Z:_+1)}var F=function(U){for(_+=U;v<_-1;++v)p.write_shift(-4,v+1);U&&(++v,p.write_shift(-4,Z))};for(_=v=0,_+=m[1];v<_;++v)p.write_shift(-4,ue.DIFSECT);for(_+=m[2];v<_;++v)p.write_shift(-4,ue.FATSECT);F(m[3]),F(m[4]);for(var x=0,G=0,A=d.FileIndex[0];x<d.FileIndex.length;++x)A=d.FileIndex[x],A.content&&(G=A.content.length,!(G<4096)&&(A.start=_,F(G+511>>9)));for(F(m[6]+7>>3);p.l&511;)p.write_shift(-4,ue.ENDOFCHAIN);for(_=v=0,x=0;x<d.FileIndex.length;++x)A=d.FileIndex[x],A.content&&(G=A.content.length,!(!G||G>=4096)&&(A.start=_,F(G+63>>6)));for(;p.l&511;)p.write_shift(-4,ue.ENDOFCHAIN);for(v=0;v<m[4]<<2;++v){var I=d.FullPaths[v];if(!I||I.length===0){for(x=0;x<17;++x)p.write_shift(4,0);for(x=0;x<3;++x)p.write_shift(4,-1);for(x=0;x<12;++x)p.write_shift(4,0);continue}A=d.FileIndex[v],v===0&&(A.start=A.size?A.start-1:Z);var B=v===0&&f.root||A.name;if(B.length>31&&(console.error("Name "+B+" will be truncated to "+B.slice(0,31)),B=B.slice(0,31)),G=2*(B.length+1),p.write_shift(64,B,"utf16le"),p.write_shift(2,G),p.write_shift(1,A.type),p.write_shift(1,A.color),p.write_shift(-4,A.L),p.write_shift(-4,A.R),p.write_shift(-4,A.C),A.clsid)p.write_shift(16,A.clsid,"hex");else for(x=0;x<4;++x)p.write_shift(4,0);p.write_shift(4,A.state||0),p.write_shift(4,0),p.write_shift(4,0),p.write_shift(4,0),p.write_shift(4,0),p.write_shift(4,A.start),p.write_shift(4,A.size),p.write_shift(4,0)}for(v=1;v<d.FileIndex.length;++v)if(A=d.FileIndex[v],A.size>=4096)if(p.l=A.start+1<<9,le&&Buffer.isBuffer(A.content))A.content.copy(p,p.l,0,A.size),p.l+=A.size+511&-512;else{for(x=0;x<A.size;++x)p.write_shift(1,A.content[x]);for(;x&511;++x)p.write_shift(1,0)}for(v=1;v<d.FileIndex.length;++v)if(A=d.FileIndex[v],A.size>0&&A.size<4096)if(le&&Buffer.isBuffer(A.content))A.content.copy(p,p.l,0,A.size),p.l+=A.size+63&-64;else{for(x=0;x<A.size;++x)p.write_shift(1,A.content[x]);for(;x&63;++x)p.write_shift(1,0)}if(le)p.l=p.length;else for(;p.l<p.length;)p.write_shift(1,0);return p}function M(d,k){var f=d.FullPaths.map(function(x){return x.toUpperCase()}),m=f.map(function(x){var G=x.split("/");return G[G.length-(x.slice(-1)=="/"?2:1)]}),p=!1;k.charCodeAt(0)===47?(p=!0,k=f[0].slice(0,-1)+k):p=k.indexOf("/")!==-1;var v=k.toUpperCase(),_=p===!0?f.indexOf(v):m.indexOf(v);if(_!==-1)return d.FileIndex[_];var F=!v.match(bi);for(v=v.replace(Wn,""),F&&(v=v.replace(bi,"!")),_=0;_<f.length;++_)if((F?f[_].replace(bi,"!"):f[_]).replace(Wn,"")==v||(F?m[_].replace(bi,"!"):m[_]).replace(Wn,"")==v)return d.FileIndex[_];return null}var X=64,Z=-2,ie="d0cf11e0a1b11ae1",ve=[208,207,17,224,161,177,26,225],it="00000000000000000000000000000000",ue={MAXREGSECT:-6,DIFSECT:-4,FATSECT:-3,ENDOFCHAIN:Z,FREESECT:-1,HEADER_SIGNATURE:ie,HEADER_MINOR_VERSION:"3e00",MAXREGSID:-6,NOSTREAM:-1,HEADER_CLSID:it,EntryTypes:["unknown","storage","stream","lockbytes","property","root"]};function ce(d,k,f){c();var m=j(d,f);s.writeFileSync(k,m)}function se(d){for(var k=new Array(d.length),f=0;f<d.length;++f)k[f]=String.fromCharCode(d[f]);return k.join("")}function mt(d,k){var f=j(d,k);switch(k&&k.type||"buffer"){case"file":return c(),s.writeFileSync(k.filename,f),f;case"binary":return typeof f=="string"?f:se(f);case"base64":return Xr(typeof f=="string"?f:se(f));case"buffer":if(le)return Buffer.isBuffer(f)?f:tn(f);case"array":return typeof f=="string"?Kt(f):f}return f}var Ke;function ae(d){try{var k=d.InflateRaw,f=new k;if(f._processChunk(new Uint8Array([3,0]),f._finishFlushFlag),f.bytesRead)Ke=d;else throw new Error("zlib does not expose bytesRead")}catch(m){console.error("cannot use native zlib: "+(m.message||m))}}function he(d,k){if(!Ke)return un(d,k);var f=Ke.InflateRaw,m=new f,p=m._processChunk(d.slice(d.l),m._finishFlushFlag);return d.l+=m.bytesRead,p}function Me(d){return Ke?Ke.deflateRawSync(d):rn(d)}var Pe=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],pe=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258],bt=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577];function Ye(d){var k=(d<<1|d<<11)&139536|(d<<5|d<<15)&558144;return(k>>16|k>>8|k)&255}for(var ee=typeof Uint8Array<"u",Q=ee?new Uint8Array(256):[],Be=0;Be<256;++Be)Q[Be]=Ye(Be);function Ve(d,k){var f=Q[d&255];return k<=8?f>>>8-k:(f=f<<8|Q[d>>8&255],k<=16?f>>>16-k:(f=f<<8|Q[d>>16&255],f>>>24-k))}function Gt(d,k){var f=k&7,m=k>>>3;return(d[m]|(f<=6?0:d[m+1]<<8))>>>f&3}function He(d,k){var f=k&7,m=k>>>3;return(d[m]|(f<=5?0:d[m+1]<<8))>>>f&7}function at(d,k){var f=k&7,m=k>>>3;return(d[m]|(f<=4?0:d[m+1]<<8))>>>f&15}function rt(d,k){var f=k&7,m=k>>>3;return(d[m]|(f<=3?0:d[m+1]<<8))>>>f&31}function kt(d,k){var f=k&7,m=k>>>3;return(d[m]|(f<=1?0:d[m+1]<<8))>>>f&127}function vt(d,k,f){var m=k&7,p=k>>>3,v=(1<<f)-1,_=d[p]>>>m;return f<8-m||(_|=d[p+1]<<8-m,f<16-m)||(_|=d[p+2]<<16-m,f<24-m)||(_|=d[p+3]<<24-m),_&v}function Lt(d,k,f){var m=k&7,p=k>>>3;return m<=5?d[p]|=(f&7)<<m:(d[p]|=f<<m&255,d[p+1]=(f&7)>>8-m),k+3}function ot(d,k,f){var m=k&7,p=k>>>3;return f=(f&1)<<m,d[p]|=f,k+1}function Je(d,k,f){var m=k&7,p=k>>>3;return f<<=m,d[p]|=f&255,f>>>=8,d[p+1]=f,k+8}function Ht(d,k,f){var m=k&7,p=k>>>3;return f<<=m,d[p]|=f&255,f>>>=8,d[p+1]=f&255,d[p+2]=f>>>8,k+16}function ut(d,k){var f=d.length,m=2*f>k?2*f:k+5,p=0;if(f>=k)return d;if(le){var v=Yr(m);if(d.copy)d.copy(v);else for(;p<d.length;++p)v[p]=d[p];return v}else if(ee){var _=new Uint8Array(m);if(_.set)_.set(d);else for(;p<f;++p)_[p]=d[p];return _}return d.length=m,d}function Ae(d){for(var k=new Array(d),f=0;f<d;++f)k[f]=0;return k}function Ct(d,k,f){var m=1,p=0,v=0,_=0,F=0,x=d.length,G=ee?new Uint16Array(32):Ae(32);for(v=0;v<32;++v)G[v]=0;for(v=x;v<f;++v)d[v]=0;x=d.length;var A=ee?new Uint16Array(x):Ae(x);for(v=0;v<x;++v)G[p=d[v]]++,m<p&&(m=p),A[v]=0;for(G[0]=0,v=1;v<=m;++v)G[v+16]=F=F+G[v-1]<<1;for(v=0;v<x;++v)F=d[v],F!=0&&(A[v]=G[F+16]++);var I=0;for(v=0;v<x;++v)if(I=d[v],I!=0)for(F=Ve(A[v],m)>>m-I,_=(1<<m+4-I)-1;_>=0;--_)k[F|_<<I]=I&15|v<<4;return m}var an=ee?new Uint16Array(512):Ae(512),st=ee?new Uint16Array(32):Ae(32);if(!ee){for(var _e=0;_e<512;++_e)an[_e]=0;for(_e=0;_e<32;++_e)st[_e]=0}(function(){for(var d=[],k=0;k<32;k++)d.push(5);Ct(d,st,32);var f=[];for(k=0;k<=143;k++)f.push(8);for(;k<=255;k++)f.push(9);for(;k<=279;k++)f.push(7);for(;k<=287;k++)f.push(8);Ct(f,an,288)})();var Tt=function(){for(var k=ee?new Uint8Array(32768):[],f=0,m=0;f<bt.length-1;++f)for(;m<bt[f+1];++m)k[m]=f;for(;m<32768;++m)k[m]=29;var p=ee?new Uint8Array(259):[];for(f=0,m=0;f<pe.length-1;++f)for(;m<pe[f+1];++m)p[m]=f;function v(F,x){for(var G=0;G<F.length;){var A=Math.min(65535,F.length-G),I=G+A==F.length;for(x.write_shift(1,+I),x.write_shift(2,A),x.write_shift(2,~A&65535);A-- >0;)x[x.l++]=F[G++]}return x.l}function _(F,x){for(var G=0,A=0,I=ee?new Uint16Array(32768):[];A<F.length;){var B=Math.min(65535,F.length-A);if(B<10){for(G=Lt(x,G,+(A+B==F.length)),G&7&&(G+=8-(G&7)),x.l=G/8|0,x.write_shift(2,B),x.write_shift(2,~B&65535);B-- >0;)x[x.l++]=F[A++];G=x.l*8;continue}G=Lt(x,G,+(A+B==F.length)+2);for(var U=0;B-- >0;){var T=F[A];U=(U<<5^T)&32767;var z=-1,J=0;if((z=I[U])&&(z|=A&-32768,z>A&&(z-=32768),z<A))for(;F[z+J]==F[A+J]&&J<250;)++J;if(J>2){T=p[J],T<=22?G=Je(x,G,Q[T+1]>>1)-1:(Je(x,G,3),G+=5,Je(x,G,Q[T-23]>>5),G+=3);var oe=T<8?0:T-4>>2;oe>0&&(Ht(x,G,J-pe[T]),G+=oe),T=k[A-z],G=Je(x,G,Q[T]>>3),G-=3;var re=T<4?0:T-2>>1;re>0&&(Ht(x,G,A-z-bt[T]),G+=re);for(var ge=0;ge<J;++ge)I[U]=A&32767,U=(U<<5^F[A])&32767,++A;B-=J-1}else T<=143?T=T+48:G=ot(x,G,1),G=Je(x,G,Q[T]),I[U]=A&32767,++A}G=Je(x,G,0)-1}return x.l=(G+7)/8|0,x.l}return function(x,G){return x.length<8?v(x,G):_(x,G)}}();function rn(d){var k=Bt(50+Math.floor(d.length*1.1)),f=Tt(d,k);return k.slice(0,f)}var ze=ee?new Uint16Array(32768):Ae(32768),Te=ee?new Uint16Array(32768):Ae(32768),fn=ee?new Uint16Array(128):Ae(128),pn=1,Ze=1;function mn(d,k){var f=rt(d,k)+257;k+=5;var m=rt(d,k)+1;k+=5;var p=at(d,k)+4;k+=4;for(var v=0,_=ee?new Uint8Array(19):Ae(19),F=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],x=1,G=ee?new Uint8Array(8):Ae(8),A=ee?new Uint8Array(8):Ae(8),I=_.length,B=0;B<p;++B)_[Pe[B]]=v=He(d,k),x<v&&(x=v),G[v]++,k+=3;var U=0;for(G[0]=0,B=1;B<=x;++B)A[B]=U=U+G[B-1]<<1;for(B=0;B<I;++B)(U=_[B])!=0&&(F[B]=A[U]++);var T=0;for(B=0;B<I;++B)if(T=_[B],T!=0){U=Q[F[B]]>>8-T;for(var z=(1<<7-T)-1;z>=0;--z)fn[U|z<<T]=T&7|B<<3}var J=[];for(x=1;J.length<f+m;)switch(U=fn[kt(d,k)],k+=U&7,U>>>=3){case 16:for(v=3+Gt(d,k),k+=2,U=J[J.length-1];v-- >0;)J.push(U);break;case 17:for(v=3+He(d,k),k+=3;v-- >0;)J.push(0);break;case 18:for(v=11+kt(d,k),k+=7;v-- >0;)J.push(0);break;default:J.push(U),x<U&&(x=U);break}var oe=J.slice(0,f),re=J.slice(f);for(B=f;B<286;++B)oe[B]=0;for(B=m;B<30;++B)re[B]=0;return pn=Ct(oe,ze,286),Ze=Ct(re,Te,30),k}function on(d,k){if(d[0]==3&&!(d[1]&3))return[Fn(k),2];for(var f=0,m=0,p=Yr(k||1<<18),v=0,_=p.length>>>0,F=0,x=0;(m&1)==0;){if(m=He(d,f),f+=3,m>>>1)m>>1==1?(F=9,x=5):(f=mn(d,f),F=pn,x=Ze);else{f&7&&(f+=8-(f&7));var G=d[f>>>3]|d[(f>>>3)+1]<<8;if(f+=32,G>0)for(!k&&_<v+G&&(p=ut(p,v+G),_=p.length);G-- >0;)p[v++]=d[f>>>3],f+=8;continue}for(;;){!k&&_<v+32767&&(p=ut(p,v+32767),_=p.length);var A=vt(d,f,F),I=m>>>1==1?an[A]:ze[A];if(f+=I&15,I>>>=4,(I>>>8&255)===0)p[v++]=I;else{if(I==256)break;I-=257;var B=I<8?0:I-4>>2;B>5&&(B=0);var U=v+pe[I];B>0&&(U+=vt(d,f,B),f+=B),A=vt(d,f,x),I=m>>>1==1?st[A]:Te[A],f+=I&15,I>>>=4;var T=I<4?0:I-2>>1,z=bt[I];for(T>0&&(z+=vt(d,f,T),f+=T),!k&&_<U&&(p=ut(p,U+100),_=p.length);v<U;)p[v]=p[v-z],++v}}}return k?[p,f+7>>>3]:[p.slice(0,v),f+7>>>3]}function un(d,k){var f=d.slice(d.l||0),m=on(f,k);return d.l+=m[1],m[0]}function sn(d,k){if(d)typeof console<"u"&&console.error(k);else throw new Error(k)}function bn(d,k){var f=d;Wt(f,0);var m=[],p=[],v={FileIndex:m,FullPaths:p};O(v,{root:k.root});for(var _=f.length-4;(f[_]!=80||f[_+1]!=75||f[_+2]!=5||f[_+3]!=6)&&_>=0;)--_;f.l=_+4,f.l+=4;var F=f.read_shift(2);f.l+=6;var x=f.read_shift(4);for(f.l=x,_=0;_<F;++_){f.l+=20;var G=f.read_shift(4),A=f.read_shift(4),I=f.read_shift(2),B=f.read_shift(2),U=f.read_shift(2);f.l+=8;var T=f.read_shift(4),z=u(f.slice(f.l+I,f.l+I+B));f.l+=I+B+U;var J=f.l;f.l=T+4,z&&z[1]&&((z[1]||{}).usz&&(A=z[1].usz),(z[1]||{}).csz&&(G=z[1].csz)),te(f,G,A,v,z),f.l=J}return v}function te(d,k,f,m,p){d.l+=2;var v=d.read_shift(2),_=d.read_shift(2),F=o(d);if(v&8257)throw new Error("Unsupported ZIP encryption");for(var x=d.read_shift(4),G=d.read_shift(4),A=d.read_shift(4),I=d.read_shift(2),B=d.read_shift(2),U="",T=0;T<I;++T)U+=String.fromCharCode(d[d.l++]);if(B){var z=u(d.slice(d.l,d.l+B));(z[21589]||{}).mt&&(F=z[21589].mt),(z[1]||{}).usz&&(A=z[1].usz),(z[1]||{}).csz&&(G=z[1].csz),p&&((p[21589]||{}).mt&&(F=p[21589].mt),(p[1]||{}).usz&&(A=p[1].usz),(p[1]||{}).csz&&(G=p[1].csz))}d.l+=B;var J=d.slice(d.l,d.l+G);switch(_){case 8:J=he(d,A);break;case 0:d.l+=G;break;default:throw new Error("Unsupported ZIP Compression method "+_)}var oe=!1;v&8&&(x=d.read_shift(4),x==134695760&&(x=d.read_shift(4),oe=!0),G=d.read_shift(4),A=d.read_shift(4)),G!=k&&sn(oe,"Bad compressed size: "+k+" != "+G),A!=f&&sn(oe,"Bad uncompressed size: "+f+" != "+A),Fe(m,U,J,{unsafe:!0,mt:F})}function me(d,k){var f=k||{},m=[],p=[],v=Bt(1),_=f.compression?8:0,F=0,x=0,G=0,A=0,I=0,B=d.FullPaths[0],U=B,T=d.FileIndex[0],z=[],J=0;for(x=1;x<d.FullPaths.length;++x)if(U=d.FullPaths[x].slice(B.length),T=d.FileIndex[x],!(!T.size||!T.content||Array.isArray(T.content)&&T.content.length==0||U=="Sh33tJ5")){var oe=A,re=Bt(U.length);for(G=0;G<U.length;++G)re.write_shift(1,U.charCodeAt(G)&127);re=re.slice(0,re.l),z[I]=typeof T.content=="string"?ao.bstr(T.content,0):ao.buf(T.content,0);var ge=typeof T.content=="string"?Kt(T.content):T.content;_==8&&(ge=Me(ge)),v=Bt(30),v.write_shift(4,67324752),v.write_shift(2,20),v.write_shift(2,F),v.write_shift(2,_),T.mt?r(v,T.mt):v.write_shift(4,0),v.write_shift(-4,z[I]),v.write_shift(4,ge.length),v.write_shift(4,T.content.length),v.write_shift(2,re.length),v.write_shift(2,0),A+=v.length,m.push(v),A+=re.length,m.push(re),A+=ge.length,m.push(ge),v=Bt(46),v.write_shift(4,33639248),v.write_shift(2,0),v.write_shift(2,20),v.write_shift(2,F),v.write_shift(2,_),v.write_shift(4,0),v.write_shift(-4,z[I]),v.write_shift(4,ge.length),v.write_shift(4,T.content.length),v.write_shift(2,re.length),v.write_shift(2,0),v.write_shift(2,0),v.write_shift(2,0),v.write_shift(2,0),v.write_shift(4,0),v.write_shift(4,oe),J+=v.l,p.push(v),J+=re.length,p.push(re),++I}return v=Bt(22),v.write_shift(4,101010256),v.write_shift(2,0),v.write_shift(2,0),v.write_shift(2,I),v.write_shift(2,I),v.write_shift(4,J),v.write_shift(4,A),v.write_shift(2,0),yn([yn(m),yn(p),v])}var be={htm:"text/html",xml:"text/xml",gif:"image/gif",jpg:"image/jpeg",png:"image/png",mso:"application/x-mso",thmx:"application/vnd.ms-officetheme",sh33tj5:"application/octet-stream"};function Ge(d,k){if(d.ctype)return d.ctype;var f=d.name||"",m=f.match(/\.([^\.]+)$/);return m&&be[m[1]]||k&&(m=(f=k).match(/[\.\\]([^\.\\])+$/),m&&be[m[1]])?be[m[1]]:"application/octet-stream"}function ct(d){for(var k=Xr(d),f=[],m=0;m<k.length;m+=76)f.push(k.slice(m,m+76));return f.join(`\r
`)+`\r
`}function Oe(d){var k=d.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g,function(G){var A=G.charCodeAt(0).toString(16).toUpperCase();return"="+(A.length==1?"0"+A:A)});k=k.replace(/ $/mg,"=20").replace(/\t$/mg,"=09"),k.charAt(0)==`
`&&(k="=0D"+k.slice(1)),k=k.replace(/\r(?!\n)/mg,"=0D").replace(/\n\n/mg,`
=0A`).replace(/([^\r\n])\n/mg,"$1=0A");for(var f=[],m=k.split(`\r
`),p=0;p<m.length;++p){var v=m[p];if(v.length==0){f.push("");continue}for(var _=0;_<v.length;){var F=76,x=v.slice(_,_+F);x.charAt(F-1)=="="?F--:x.charAt(F-2)=="="?F-=2:x.charAt(F-3)=="="&&(F-=3),x=v.slice(_,_+F),_+=F,_<v.length&&(x+="="),f.push(x)}}return f.join(`\r
`)}function ke(d){for(var k=[],f=0;f<d.length;++f){for(var m=d[f];f<=d.length&&m.charAt(m.length-1)=="=";)m=m.slice(0,m.length-1)+d[++f];k.push(m)}for(var p=0;p<k.length;++p)k[p]=k[p].replace(/[=][0-9A-Fa-f]{2}/g,function(v){return String.fromCharCode(parseInt(v.slice(1),16))});return Kt(k.join(`\r
`))}function Ee(d,k,f){for(var m="",p="",v="",_,F=0;F<10;++F){var x=k[F];if(!x||x.match(/^\s*$/))break;var G=x.match(/^([^:]*?):\s*([^\s].*)$/);if(G)switch(G[1].toLowerCase()){case"content-location":m=G[2].trim();break;case"content-type":v=G[2].trim();break;case"content-transfer-encoding":p=G[2].trim();break}}switch(++F,p.toLowerCase()){case"base64":_=Kt(Kr(k.slice(F).join("")));break;case"quoted-printable":_=ke(k.slice(F));break;default:throw new Error("Unsupported Content-Transfer-Encoding "+p)}var A=Fe(d,m.slice(f.length),_,{unsafe:!0});v&&(A.ctype=v)}function yt(d,k){if(se(d.slice(0,13)).toLowerCase()!="mime-version:")throw new Error("Unsupported MAD header");var f=k&&k.root||"",m=(le&&Buffer.isBuffer(d)?d.toString("binary"):se(d)).split(`\r
`),p=0,v="";for(p=0;p<m.length;++p)if(v=m[p],!!/^Content-Location:/i.test(v)&&(v=v.slice(v.indexOf("file")),f||(f=v.slice(0,v.lastIndexOf("/")+1)),v.slice(0,f.length)!=f))for(;f.length>0&&(f=f.slice(0,f.length-1),f=f.slice(0,f.lastIndexOf("/")+1),v.slice(0,f.length)!=f););var _=(m[1]||"").match(/boundary="(.*?)"/);if(!_)throw new Error("MAD cannot find boundary");var F="--"+(_[1]||""),x=[],G=[],A={FileIndex:x,FullPaths:G};O(A);var I,B=0;for(p=0;p<m.length;++p){var U=m[p];U!==F&&U!==F+"--"||(B++&&Ee(A,m.slice(I,p),f),I=p)}return A}function fe(d,k){var f=k||{},m=f.boundary||"SheetJS";m="------="+m;for(var p=["MIME-Version: 1.0",'Content-Type: multipart/related; boundary="'+m.slice(2)+'"',"","",""],v=d.FullPaths[0],_=v,F=d.FileIndex[0],x=1;x<d.FullPaths.length;++x)if(_=d.FullPaths[x].slice(v.length),F=d.FileIndex[x],!(!F.size||!F.content||_=="Sh33tJ5")){_=_.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g,function(J){return"_x"+J.charCodeAt(0).toString(16)+"_"}).replace(/[\u0080-\uFFFF]/g,function(J){return"_u"+J.charCodeAt(0).toString(16)+"_"});for(var G=F.content,A=le&&Buffer.isBuffer(G)?G.toString("binary"):se(G),I=0,B=Math.min(1024,A.length),U=0,T=0;T<=B;++T)(U=A.charCodeAt(T))>=32&&U<128&&++I;var z=I>=B*4/5;p.push(m),p.push("Content-Location: "+(f.root||"file:///C:/SheetJS/")+_),p.push("Content-Transfer-Encoding: "+(z?"quoted-printable":"base64")),p.push("Content-Type: "+Ge(F,_)),p.push(""),p.push(z?Oe(A):ct(A))}return p.push(m+`--\r
`),p.join(`\r
`)}function Qe(d){var k={};return O(k,d),k}function Fe(d,k,f,m){var p=m&&m.unsafe;p||O(d);var v=!p&&Et.find(d,k);if(!v){var _=d.FullPaths[0];k.slice(0,_.length)==_?_=k:(_.slice(-1)!="/"&&(_+="/"),_=(_+k).replace("//","/")),v={name:a(k),type:2},d.FileIndex.push(v),d.FullPaths.push(_),p||Et.utils.cfb_gc(d)}return v.content=f,v.size=f?f.length:0,m&&(m.CLSID&&(v.clsid=m.CLSID),m.mt&&(v.mt=m.mt),m.ct&&(v.ct=m.ct)),v}function $e(d,k){O(d);var f=Et.find(d,k);if(f){for(var m=0;m<d.FileIndex.length;++m)if(d.FileIndex[m]==f)return d.FileIndex.splice(m,1),d.FullPaths.splice(m,1),!0}return!1}function Ot(d,k,f){O(d);var m=Et.find(d,k);if(m){for(var p=0;p<d.FileIndex.length;++p)if(d.FileIndex[p]==m)return d.FileIndex[p].name=a(f),d.FullPaths[p]=f,!0}return!1}function et(d){H(d,!0)}return n.find=M,n.read=q,n.parse=l,n.write=mt,n.writeFile=ce,n.utils={cfb_new:Qe,cfb_add:Fe,cfb_del:$e,cfb_mov:Ot,cfb_gc:et,ReadShift:Xn,CheckField:ts,prep_blob:Wt,bconcat:yn,use_zlib:ae,_deflateRaw:rn,_inflateRaw:un,consts:ue},n}(),og;function ro(e){return typeof e=="string"?lr(e):Array.isArray(e)?Nh(e):e}function Tu(e,n,t){if(typeof Deno<"u")return Deno.writeFileSync(e,n);var i=n;if(typeof IE_SaveFile<"u")return IE_SaveFile(i,e);if(typeof Blob<"u"){var a=new Blob([ro(i)],{type:"application/octet-stream"});if(typeof navigator<"u"&&navigator.msSaveBlob)return navigator.msSaveBlob(a,e);if(typeof saveAs<"u")return saveAs(a,e);if(typeof URL<"u"&&typeof document<"u"&&document.createElement&&URL.createObjectURL){var r=URL.createObjectURL(a);if(typeof chrome=="object"&&typeof(chrome.downloads||{}).download=="function")return URL.revokeObjectURL&&typeof setTimeout<"u"&&setTimeout(function(){URL.revokeObjectURL(r)},6e4),chrome.downloads.download({url:r,filename:e,saveAs:!0});var o=document.createElement("a");if(o.download!=null)return o.download=e,o.href=r,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL&&typeof setTimeout<"u"&&setTimeout(function(){URL.revokeObjectURL(r)},6e4),r}else if(typeof URL<"u"&&!URL.createObjectURL&&typeof chrome=="object"){var u="data:application/octet-stream;base64,"+Fh(new Uint8Array(ro(i)));return chrome.downloads.download({url:u,filename:e,saveAs:!0})}}if(typeof $<"u"&&typeof File<"u"&&typeof Folder<"u")try{var s=File(e);return s.open("w"),s.encoding="binary",Array.isArray(n)&&(n=Dh(n)),s.write(n),s.close(),n}catch(c){if(!c.message||c.message.indexOf("onstruct")==-1)throw c}throw new Error("cannot save file "+e)}function nn(e){for(var n=Object.keys(e),t=[],i=0;i<n.length;++i)Object.prototype.hasOwnProperty.call(e,n[i])&&t.push(n[i]);return t}function ug(e){for(var n=[],t=nn(e),i=0;i!==t.length;++i)n[e[t[i]]]=t[i];return n}function sg(e){for(var n=[],t=nn(e),i=0;i!==t.length;++i)n[e[t[i]]]=parseInt(t[i],10);return n}function cg(e){for(var n=[],t=nn(e),i=0;i!==t.length;++i)n[e[t[i]]]==null&&(n[e[t[i]]]=[]),n[e[t[i]]].push(t[i]);return n}var Iu=Date.UTC(1899,11,30,0,0,0),lg=Date.UTC(1899,11,31,0,0,0),dg=Date.UTC(1904,0,1,0,0,0);function $t(e,n){var t=e.getTime(),i=(t-Iu)/(24*60*60*1e3);return n?(i-=1462,i<-1402?i-1:i):i<60?i-1:i}function hg(e){if(e>=60&&e<61)return e;var n=new Date;return n.setTime((e>60?e:e+1)*24*60*60*1e3+Iu),n}var gg=/^(\d+):(\d+)(:\d+)?(\.\d+)?$/,fg=/^(\d+)-(\d+)-(\d+)$/,Mu=/^(\d+)-(\d+)-(\d+)[T ](\d+):(\d+)(:\d+)?(\.\d+)?$/;function $a(e,n){if(e instanceof Date)return e;var t=e.match(gg);if(t)return new Date((n?dg:lg)+((parseInt(t[1],10)*60+parseInt(t[2],10))*60+(t[3]?parseInt(t[3].slice(1),10):0))*1e3+(t[4]?parseInt((t[4]+"000").slice(1,4),10):0));if(t=e.match(fg),t)return new Date(Date.UTC(+t[1],+t[2]-1,+t[3],0,0,0,0));if(t=e.match(Mu),t)return new Date(Date.UTC(+t[1],+t[2]-1,+t[3],+t[4],+t[5],t[6]&&parseInt(t[6].slice(1),10)||0,t[7]&&parseInt((t[7]+"0000").slice(1,4),10)||0));var i=new Date(e);return i}function si(e){if(typeof JSON<"u"&&!Array.isArray(e))return JSON.parse(JSON.stringify(e));if(typeof e!="object"||e==null)return e;if(e instanceof Date)return new Date(e.getTime());var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=si(e[t]));return n}function Le(e,n){for(var t="";t.length<n;)t+=e;return t}function oo(e){var n=Number(e);if(!isNaN(n))return isFinite(n)?n:NaN;if(!/\d/.test(e))return n;var t=1,i=e.replace(/([\d]),([\d])/g,"$1$2").replace(/[$]/g,"").replace(/[%]/g,function(){return t*=100,""});return!isNaN(n=Number(i))||(i=i.replace(/[(]([^()]*)[)]/,function(a,r){return t=-t,r}),!isNaN(n=Number(i)))?n/t:n}var pg=/^(0?\d|1[0-2])(?:|:([0-5]?\d)(?:|(\.\d+)(?:|:([0-5]?\d))|:([0-5]?\d)(|\.\d+)))\s+([ap])m?$/,mg=/^([01]?\d|2[0-3])(?:|:([0-5]?\d)(?:|(\.\d+)(?:|:([0-5]?\d))|:([0-5]?\d)(|\.\d+)))$/,bg=/^(\d+)-(\d+)-(\d+)[T ](\d+):(\d+)(:\d+)(\.\d+)?[Z]?$/,kg=new Date("6/9/69 00:00 UTC").valueOf()==-177984e5;function vg(e){return e[2]?e[3]?e[4]?new Date(Date.UTC(1899,11,31,+e[1]%12+(e[7]=="p"?12:0),+e[2],+e[4],parseFloat(e[3])*1e3)):new Date(Date.UTC(1899,11,31,e[7]=="p"?12:0,+e[1],+e[2],parseFloat(e[3])*1e3)):e[5]?new Date(Date.UTC(1899,11,31,+e[1]%12+(e[7]=="p"?12:0),+e[2],+e[5],e[6]?parseFloat(e[6])*1e3:0)):new Date(Date.UTC(1899,11,31,+e[1]%12+(e[7]=="p"?12:0),+e[2],0,0)):new Date(Date.UTC(1899,11,31,+e[1]%12+(e[7]=="p"?12:0),0,0,0))}function Cg(e){return e[2]?e[3]?e[4]?new Date(Date.UTC(1899,11,31,+e[1],+e[2],+e[4],parseFloat(e[3])*1e3)):new Date(Date.UTC(1899,11,31,0,+e[1],+e[2],parseFloat(e[3])*1e3)):e[5]?new Date(Date.UTC(1899,11,31,+e[1],+e[2],+e[5],e[6]?parseFloat(e[6])*1e3:0)):new Date(Date.UTC(1899,11,31,+e[1],+e[2],0,0)):new Date(Date.UTC(1899,11,31,+e[1],0,0,0))}var yg=["january","february","march","april","may","june","july","august","september","october","november","december"];function Eg(e){if(bg.test(e))return e.indexOf("Z")==-1?Ui(new Date(e)):new Date(e);var n=e.toLowerCase(),t=n.replace(/\s+/g," ").trim(),i=t.match(pg);if(i)return vg(i);if(i=t.match(mg),i)return Cg(i);if(i=t.match(Mu),i)return new Date(Date.UTC(+i[1],+i[2]-1,+i[3],+i[4],+i[5],i[6]&&parseInt(i[6].slice(1),10)||0,i[7]&&parseInt((i[7]+"0000").slice(1,4),10)||0));var a=new Date(kg&&e.indexOf("UTC")==-1?e+" UTC":e),r=new Date(NaN),o=a.getYear();a.getMonth();var u=a.getDate();if(isNaN(u))return r;if(n.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)){if(n=n.replace(/[^a-z]/g,"").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/,""),n.length>3&&yg.indexOf(n)==-1)return r}else if(n.replace(/[ap]m?/,"").match(/[a-z]/))return r;return o<0||o>8099||e.match(/[^-0-9:,\/\\\ ]/)?r:a}function Sg(e){return new Date(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds())}function Ui(e){return new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()))}function Se(e,n,t){if(e.FullPaths){if(Array.isArray(t)&&typeof t[0]=="string"&&(t=t.join("")),typeof t=="string"){var i;return le?i=tn(t):i=Rh(t),Et.utils.cfb_add(e,n,i)}Et.utils.cfb_add(e,n,t)}else e.file(n,t)}function wg(){return Et.utils.cfb_new()}var Xe=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`,xg={"&quot;":'"',"&apos;":"'","&gt;":">","&lt;":"<","&amp;":"&"},Pu=ug(xg),Bu=/[&<>'"]/g,Ag=/[\u0000-\u0008\u000b-\u001f\uFFFE-\uFFFF]/g;function de(e){var n=e+"";return n.replace(Bu,function(t){return Pu[t]}).replace(Ag,function(t){return"_x"+("000"+t.charCodeAt(0).toString(16)).slice(-4)+"_"})}var _g=/[\u0000-\u001f]/g;function da(e){var n=e+"";return n.replace(Bu,function(t){return Pu[t]}).replace(/\n/g,"<br/>").replace(_g,function(t){return"&#x"+("000"+t.charCodeAt(0).toString(16)).slice(-4)+";"})}function ha(e){for(var n="",t=0,i=0,a=0,r=0,o=0,u=0;t<e.length;){if(i=e.charCodeAt(t++),i<128){n+=String.fromCharCode(i);continue}if(a=e.charCodeAt(t++),i>191&&i<224){o=(i&31)<<6,o|=a&63,n+=String.fromCharCode(o);continue}if(r=e.charCodeAt(t++),i<240){n+=String.fromCharCode((i&15)<<12|(a&63)<<6|r&63);continue}o=e.charCodeAt(t++),u=((i&7)<<18|(a&63)<<12|(r&63)<<6|o&63)-65536,n+=String.fromCharCode(55296+(u>>>10&1023)),n+=String.fromCharCode(56320+(u&1023))}return n}function uo(e){var n=Fn(2*e.length),t,i,a=1,r=0,o=0,u;for(i=0;i<e.length;i+=a)a=1,(u=e.charCodeAt(i))<128?t=u:u<224?(t=(u&31)*64+(e.charCodeAt(i+1)&63),a=2):u<240?(t=(u&15)*4096+(e.charCodeAt(i+1)&63)*64+(e.charCodeAt(i+2)&63),a=3):(a=4,t=(u&7)*262144+(e.charCodeAt(i+1)&63)*4096+(e.charCodeAt(i+2)&63)*64+(e.charCodeAt(i+3)&63),t-=65536,o=55296+(t>>>10&1023),t=56320+(t&1023)),o!==0&&(n[r++]=o&255,n[r++]=o>>>8,o=0),n[r++]=t%256,n[r++]=t>>>8;return n.slice(0,r).toString("ucs2")}function so(e){return tn(e,"binary").toString("utf8")}var ki="foo bar bazâð£",Gg=le&&(so(ki)==ha(ki)&&so||uo(ki)==ha(ki)&&uo)||ha,Og=le?function(e){return tn(e,"utf8").toString("binary")}:function(e){for(var n=[],t=0,i=0,a=0;t<e.length;)switch(i=e.charCodeAt(t++),!0){case i<128:n.push(String.fromCharCode(i));break;case i<2048:n.push(String.fromCharCode(192+(i>>6))),n.push(String.fromCharCode(128+(i&63)));break;case(i>=55296&&i<57344):i-=55296,a=e.charCodeAt(t++)-56320+(i<<10),n.push(String.fromCharCode(240+(a>>18&7))),n.push(String.fromCharCode(144+(a>>12&63))),n.push(String.fromCharCode(128+(a>>6&63))),n.push(String.fromCharCode(128+(a&63)));break;default:n.push(String.fromCharCode(224+(i>>12))),n.push(String.fromCharCode(128+(i>>6&63))),n.push(String.fromCharCode(128+(i&63)))}return n.join("")},Fg=function(){var e=[["nbsp"," "],["middot","·"],["quot",'"'],["apos","'"],["gt",">"],["lt","<"],["amp","&"]].map(function(n){return[new RegExp("&"+n[0]+";","ig"),n[1]]});return function(t){for(var i=t.replace(/^[\t\n\r ]+/,"").replace(/(^|[^\t\n\r ])[\t\n\r ]+$/,"$1").replace(/>\s+/g,">").replace(/\b\s+</g,"<").replace(/[\t\n\r ]+/g," ").replace(/<\s*[bB][rR]\s*\/?>/g,`
`).replace(/<[^<>]*>/g,""),a=0;a<e.length;++a)i=i.replace(e[a][0],e[a][1]);return i}}(),Vu=/(^\s|\s$|\n)/;function wt(e,n){return"<"+e+(n.match(Vu)?' xml:space="preserve"':"")+">"+n+"</"+e+">"}function zu(e){return nn(e).map(function(n){return" "+n+'="'+e[n]+'"'}).join("")}function W(e,n,t){return"<"+e+(t!=null?zu(t):"")+(n!=null?(n.match(Vu)?' xml:space="preserve"':"")+">"+n+"</"+e:"/")+">"}function ja(e,n){try{return e.toISOString().replace(/\.\d*/,"")}catch(t){if(n)throw t}return""}function Dg(e,n){switch(typeof e){case"string":var t=W("vt:lpwstr",de(e));return t=t.replace(/&quot;/g,"_x0022_"),t;case"number":return W((e|0)==e?"vt:i4":"vt:r8",de(String(e)));case"boolean":return W("vt:bool",e?"true":"false")}if(e instanceof Date)return W("vt:filetime",ja(e));throw new Error("Unable to serialize "+e)}var xe={CORE_PROPS:"http://schemas.openxmlformats.org/package/2006/metadata/core-properties",CUST_PROPS:"http://schemas.openxmlformats.org/officeDocument/2006/custom-properties",EXT_PROPS:"http://schemas.openxmlformats.org/officeDocument/2006/extended-properties",CT:"http://schemas.openxmlformats.org/package/2006/content-types",RELS:"http://schemas.openxmlformats.org/package/2006/relationships",TCMNT:"http://schemas.microsoft.com/office/spreadsheetml/2018/threadedcomments",dc:"http://purl.org/dc/elements/1.1/",dcterms:"http://purl.org/dc/terms/",dcmitype:"http://purl.org/dc/dcmitype/",r:"http://schemas.openxmlformats.org/officeDocument/2006/relationships",vt:"http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",xsi:"http://www.w3.org/2001/XMLSchema-instance",xsd:"http://www.w3.org/2001/XMLSchema"},Ln=["http://schemas.openxmlformats.org/spreadsheetml/2006/main","http://purl.oclc.org/ooxml/spreadsheetml/main","http://schemas.microsoft.com/office/excel/2006/main","http://schemas.microsoft.com/office/excel/2006/2"],vi={o:"urn:schemas-microsoft-com:office:office",x:"urn:schemas-microsoft-com:office:excel",mv:"http://macVmlSchemaUri",v:"urn:schemas-microsoft-com:vml"};function Ng(e,n){for(var t=1-2*(e[n+7]>>>7),i=((e[n+7]&127)<<4)+(e[n+6]>>>4&15),a=e[n+6]&15,r=5;r>=0;--r)a=a*256+e[n+r];return i==2047?a==0?t*(1/0):NaN:(i==0?i=-1022:(i-=1023,a+=Math.pow(2,52)),t*Math.pow(2,i-52)*a)}function Rg(e,n,t){var i=(n<0||1/n==-1/0?1:0)<<7,a=0,r=0,o=i?-n:n;isFinite(o)?o==0?a=r=0:(a=Math.floor(Math.log(o)/Math.LN2),r=o*Math.pow(2,52-a),a<=-1023&&(!isFinite(r)||r<Math.pow(2,52))?a=-1022:(r-=Math.pow(2,52),a+=1023)):(a=2047,r=isNaN(n)?26985:0);for(var u=0;u<=5;++u,r/=256)e[t+u]=r&255;e[t+6]=(a&15)<<4|r&15,e[t+7]=a>>4|i}var co=function(e){for(var n=[],t=10240,i=0;i<e[0].length;++i)if(e[0][i])for(var a=0,r=e[0][i].length;a<r;a+=t)n.push.apply(n,e[0][i].slice(a,a+t));return n},lo=le?function(e){return e[0].length>0&&Buffer.isBuffer(e[0][0])?Buffer.concat(e[0].map(function(n){return Buffer.isBuffer(n)?n:tn(n)})):co(e)}:co,ho=function(e,n,t){for(var i=[],a=n;a<t;a+=2)i.push(String.fromCharCode(Bn(e,a)));return i.join("").replace(Wn,"")},fr=le?function(e,n,t){return!Buffer.isBuffer(e)||!Li?ho(e,n,t):e.toString("utf16le",n,t).replace(Wn,"")}:ho,go=function(e,n,t){for(var i=[],a=n;a<n+t;++a)i.push(("0"+e[a].toString(16)).slice(-2));return i.join("")},$u=le?function(e,n,t){return Buffer.isBuffer(e)?e.toString("hex",n,n+t):go(e,n,t)}:go,fo=function(e,n,t){for(var i=[],a=n;a<t;a++)i.push(String.fromCharCode(En(e,a)));return i.join("")},ci=le?function(n,t,i){return Buffer.isBuffer(n)?n.toString("utf8",t,i):fo(n,t,i)}:fo,ju=function(e,n){var t=tt(e,n);return t>0?ci(e,n+4,n+4+t-1):""},Uu=ju,qu=function(e,n){var t=tt(e,n);return t>0?ci(e,n+4,n+4+t-1):""},Wu=qu,Xu=function(e,n){var t=2*tt(e,n);return t>0?ci(e,n+4,n+4+t-1):""},Ku=Xu,Yu=function(n,t){var i=tt(n,t);return i>0?fr(n,t+4,t+4+i):""},Ju=Yu,Zu=function(e,n){var t=tt(e,n);return t>0?ci(e,n+4,n+4+t):""},Qu=Zu,es=function(e,n){return Ng(e,n)},Ua=es;le&&(Uu=function(n,t){if(!Buffer.isBuffer(n))return ju(n,t);var i=n.readUInt32LE(t);return i>0?n.toString("utf8",t+4,t+4+i-1):""},Wu=function(n,t){if(!Buffer.isBuffer(n))return qu(n,t);var i=n.readUInt32LE(t);return i>0?n.toString("utf8",t+4,t+4+i-1):""},Ku=function(n,t){if(!Buffer.isBuffer(n)||!Li)return Xu(n,t);var i=2*n.readUInt32LE(t);return n.toString("utf16le",t+4,t+4+i-1)},Ju=function(n,t){if(!Buffer.isBuffer(n)||!Li)return Yu(n,t);var i=n.readUInt32LE(t);return n.toString("utf16le",t+4,t+4+i)},Qu=function(n,t){if(!Buffer.isBuffer(n))return Zu(n,t);var i=n.readUInt32LE(t);return n.toString("utf8",t+4,t+4+i)},Ua=function(n,t){return Buffer.isBuffer(n)?n.readDoubleLE(t):es(n,t)});var En=function(e,n){return e[n]},Bn=function(e,n){return e[n+1]*256+e[n]},Lg=function(e,n){var t=e[n+1]*256+e[n];return t<32768?t:(65535-t+1)*-1},tt=function(e,n){return e[n+3]*(1<<24)+(e[n+2]<<16)+(e[n+1]<<8)+e[n]},Sn=function(e,n){return e[n+3]<<24|e[n+2]<<16|e[n+1]<<8|e[n]},Hg=function(e,n){return e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3]};function Xn(e,n){var t="",i,a,r=[],o,u,s,c;switch(n){case"dbcs":if(c=this.l,le&&Buffer.isBuffer(this)&&Li)t=this.slice(this.l,this.l+2*e).toString("utf16le");else for(s=0;s<e;++s)t+=String.fromCharCode(Bn(this,c)),c+=2;e*=2;break;case"utf8":t=ci(this,this.l,this.l+e);break;case"utf16le":e*=2,t=fr(this,this.l,this.l+e);break;case"wstr":return Xn.call(this,e,"dbcs");case"lpstr-ansi":t=Uu(this,this.l),e=4+tt(this,this.l);break;case"lpstr-cp":t=Wu(this,this.l),e=4+tt(this,this.l);break;case"lpwstr":t=Ku(this,this.l),e=4+2*tt(this,this.l);break;case"lpp4":e=4+tt(this,this.l),t=Ju(this,this.l),e&2&&(e+=2);break;case"8lpp4":e=4+tt(this,this.l),t=Qu(this,this.l),e&3&&(e+=4-(e&3));break;case"cstr":for(e=0,t="";(o=En(this,this.l+e++))!==0;)r.push(mi(o));t=r.join("");break;case"_wstr":for(e=0,t="";(o=Bn(this,this.l+e))!==0;)r.push(mi(o)),e+=2;e+=2,t=r.join("");break;case"dbcs-cont":for(t="",c=this.l,s=0;s<e;++s){if(this.lens&&this.lens.indexOf(c)!==-1)return o=En(this,c),this.l=c+1,u=Xn.call(this,e-s,o?"dbcs-cont":"sbcs-cont"),r.join("")+u;r.push(mi(Bn(this,c))),c+=2}t=r.join(""),e*=2;break;case"cpstr":case"sbcs-cont":for(t="",c=this.l,s=0;s!=e;++s){if(this.lens&&this.lens.indexOf(c)!==-1)return o=En(this,c),this.l=c+1,u=Xn.call(this,e-s,o?"dbcs-cont":"sbcs-cont"),r.join("")+u;r.push(mi(En(this,c))),c+=1}t=r.join("");break;default:switch(e){case 1:return i=En(this,this.l),this.l++,i;case 2:return i=(n==="i"?Lg:Bn)(this,this.l),this.l+=2,i;case 4:case-4:return n==="i"||(this[this.l+3]&128)===0?(i=(e>0?Sn:Hg)(this,this.l),this.l+=4,i):(a=tt(this,this.l),this.l+=4,a);case 8:case-8:if(n==="f")return e==8?a=Ua(this,this.l):a=Ua([this[this.l+7],this[this.l+6],this[this.l+5],this[this.l+4],this[this.l+3],this[this.l+2],this[this.l+1],this[this.l+0]],0),this.l+=8,a;e=8;case 16:t=$u(this,this.l,e);break}}return this.l+=e,t}var Tg=function(e,n,t){e[t]=n&255,e[t+1]=n>>>8&255,e[t+2]=n>>>16&255,e[t+3]=n>>>24&255},Ig=function(e,n,t){e[t]=n&255,e[t+1]=n>>8&255,e[t+2]=n>>16&255,e[t+3]=n>>24&255},Mg=function(e,n,t){e[t]=n&255,e[t+1]=n>>>8&255};function Pg(e,n,t){var i=0,a=0;if(t==="dbcs"){for(a=0;a!=n.length;++a)Mg(this,n.charCodeAt(a),this.l+2*a);i=2*n.length}else if(t==="sbcs"||t=="cpstr"){for(n=n.replace(/[^\x00-\x7F]/g,"_"),a=0;a!=n.length;++a)this[this.l+a]=n.charCodeAt(a)&255;i=n.length}else if(t==="hex"){for(;a<e;++a)this[this.l++]=parseInt(n.slice(2*a,2*a+2),16)||0;return this}else if(t==="utf16le"){var r=Math.min(this.l+e,this.length);for(a=0;a<Math.min(n.length,e);++a){var o=n.charCodeAt(a);this[this.l++]=o&255,this[this.l++]=o>>8}for(;this.l<r;)this[this.l++]=0;return this}else switch(e){case 1:i=1,this[this.l]=n&255;break;case 2:i=2,this[this.l]=n&255,n>>>=8,this[this.l+1]=n&255;break;case 3:i=3,this[this.l]=n&255,n>>>=8,this[this.l+1]=n&255,n>>>=8,this[this.l+2]=n&255;break;case 4:i=4,Tg(this,n,this.l);break;case 8:if(i=8,t==="f"){Rg(this,n,this.l);break}case 16:break;case-4:i=4,Ig(this,n,this.l);break}return this.l+=i,this}function ts(e,n){var t=$u(this,this.l,e.length>>1);if(t!==e)throw new Error(n+"Expected "+e+" saw "+t);this.l+=e.length>>1}function Wt(e,n){e.l=n,e.read_shift=Xn,e.chk=ts,e.write_shift=Pg}function Bt(e){var n=Fn(e);return Wt(n,0),n}function Bg(e){return parseInt(Vg(e),10)-1}function gt(e){return""+(e+1)}function Vg(e){return e.replace(/\$(\d+)$/,"$1")}function zg(e){for(var n=$g(e),t=0,i=0;i!==n.length;++i)t=26*t+n.charCodeAt(i)-64;return t-1}function ft(e){if(e<0)throw new Error("invalid column "+e);var n="";for(++e;e;e=Math.floor((e-1)/26))n=String.fromCharCode((e-1)%26+65)+n;return n}function $g(e){return e.replace(/^\$([A-Z])/,"$1")}function jg(e){return e.replace(/(\$?[A-Z]*)(\$?\d*)/,"$1,$2").split(",")}function Dt(e){for(var n=0,t=0,i=0;i<e.length;++i){var a=e.charCodeAt(i);a>=48&&a<=57?n=10*n+(a-48):a>=65&&a<=90&&(t=26*t+(a-64))}return{c:t-1,r:n-1}}function ei(e){for(var n=e.c+1,t="";n;n=(n-1)/26|0)t=String.fromCharCode((n-1)%26+65)+t;return t+(e.r+1)}function hn(e){var n=e.indexOf(":");return n==-1?{s:Dt(e),e:Dt(e)}:{s:Dt(e.slice(0,n)),e:Dt(e.slice(n+1))}}function pt(e,n){return typeof n>"u"||typeof n=="number"?pt(e.s,e.e):(typeof e!="string"&&(e=ei(e)),typeof n!="string"&&(n=ei(n)),e==n?e:e+":"+n)}function ns(e){var n=hn(e);return"$"+ft(n.s.c)+"$"+gt(n.s.r)+":$"+ft(n.e.c)+"$"+gt(n.e.r)}function is(e,n){if(!e)throw new Error("empty sheet name");return/[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e)?"'"+e.replace(/'/g,"''")+"'":e}function Rt(e){var n={s:{c:0,r:0},e:{c:0,r:0}},t=0,i=0,a=0,r=e.length;for(t=0;i<r&&!((a=e.charCodeAt(i)-64)<1||a>26);++i)t=26*t+a;for(n.s.c=--t,t=0;i<r&&!((a=e.charCodeAt(i)-48)<0||a>9);++i)t=10*t+a;if(n.s.r=--t,i===r||a!=10)return n.e.c=n.s.c,n.e.r=n.s.r,n;for(++i,t=0;i!=r&&!((a=e.charCodeAt(i)-64)<1||a>26);++i)t=26*t+a;for(n.e.c=--t,t=0;i!=r&&!((a=e.charCodeAt(i)-48)<0||a>9);++i)t=10*t+a;return n.e.r=--t,n}function po(e,n){var t=e.t=="d"&&n instanceof Date;if(e.z!=null)try{return e.w=Qn(e.z,t?$t(n):n)}catch{}try{return e.w=Qn((e.XF||{}).numFmtId||(t?14:0),t?$t(n):n)}catch{return""+n}}function li(e,n,t){return e==null||e.t==null||e.t=="z"?"":e.w!==void 0?e.w:(e.t=="d"&&!e.z&&t&&t.dateNF&&(e.z=t.dateNF),e.t=="e"?Qt[e.v]||e.v:n==null?po(e,e.v):po(e,n))}function Ug(e,n){var t=n&&n.sheet?n.sheet:"Sheet1",i={};return i[t]=e,{SheetNames:[t],Sheets:i}}function qg(e){var n={},t=e||{};return t.dense&&(n["!data"]=[]),n}function as(e,n,t){var i=t||{},a=e?e["!data"]!=null:i.dense,r=e||(a?{"!data":[]}:{});a&&!r["!data"]&&(r["!data"]=[]);var o=0,u=0;if(r&&i.origin!=null)if(typeof i.origin=="number")o=i.origin;else{var s=typeof i.origin=="string"?Dt(i.origin):i.origin;o=s.r,u=s.c}var c={s:{c:1e7,r:1e7},e:{c:0,r:0}};if(r["!ref"]){var l=Rt(r["!ref"]);c.s.c=l.s.c,c.s.r=l.s.r,c.e.c=Math.max(c.e.c,l.e.c),c.e.r=Math.max(c.e.r,l.e.r),o==-1&&(c.e.r=o=r["!ref"]?l.e.r+1:0)}else c.s.c=c.e.c=c.s.r=c.e.r=0;for(var g=[],b=!1,h=0;h!=n.length;++h)if(n[h]){if(!Array.isArray(n[h]))throw new Error("aoa_to_sheet expects an array of arrays");var E=o+h;a&&(r["!data"][E]||(r["!data"][E]=[]),g=r["!data"][E]);for(var C=n[h],w=0;w!=C.length;++w)if(!(typeof C[w]>"u")){var S={v:C[w],t:""},D=u+w;if(c.s.r>E&&(c.s.r=E),c.s.c>D&&(c.s.c=D),c.e.r<E&&(c.e.r=E),c.e.c<D&&(c.e.c=D),b=!0,C[w]&&typeof C[w]=="object"&&!Array.isArray(C[w])&&!(C[w]instanceof Date))S=C[w];else if(Array.isArray(S.v)&&(S.f=C[w][1],S.v=S.v[0]),S.v===null)if(S.f)S.t="n";else if(i.nullError)S.t="e",S.v=0;else if(i.sheetStubs)S.t="z";else continue;else typeof S.v=="number"?isFinite(S.v)?S.t="n":isNaN(S.v)?(S.t="e",S.v=15):(S.t="e",S.v=7):typeof S.v=="boolean"?S.t="b":S.v instanceof Date?(S.z=i.dateNF||At[14],i.UTC||(S.v=Ui(S.v)),i.cellDates?(S.t="d",S.w=Qn(S.z,$t(S.v,i.date1904))):(S.t="n",S.v=$t(S.v,i.date1904),S.w=Qn(S.z,S.v))):S.t="s";if(a)g[D]&&g[D].z&&(S.z=g[D].z),g[D]=S;else{var N=ft(D)+(E+1);r[N]&&r[N].z&&(S.z=r[N].z),r[N]=S}}}return b&&c.s.c<104e5&&(r["!ref"]=pt(c)),r}function Wg(e,n){return as(null,e,n)}var Qt={0:"#NULL!",7:"#DIV/0!",15:"#VALUE!",23:"#REF!",29:"#NAME?",36:"#NUM!",42:"#N/A",43:"#GETTING_DATA",255:"#WTF?"},mo={"#NULL!":0,"#DIV/0!":7,"#VALUE!":15,"#REF!":23,"#NAME?":29,"#NUM!":36,"#N/A":42,"#GETTING_DATA":43,"#WTF?":255},Xg={"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml":"workbooks","application/vnd.ms-excel.sheet.macroEnabled.main+xml":"workbooks","application/vnd.ms-excel.sheet.binary.macroEnabled.main":"workbooks","application/vnd.ms-excel.addin.macroEnabled.main+xml":"workbooks","application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml":"workbooks","application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml":"sheets","application/vnd.ms-excel.worksheet":"sheets","application/vnd.ms-excel.binIndexWs":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml":"charts","application/vnd.ms-excel.chartsheet":"charts","application/vnd.ms-excel.macrosheet+xml":"macros","application/vnd.ms-excel.macrosheet":"macros","application/vnd.ms-excel.intlmacrosheet":"TODO","application/vnd.ms-excel.binIndexMs":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml":"dialogs","application/vnd.ms-excel.dialogsheet":"dialogs","application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml":"strs","application/vnd.ms-excel.sharedStrings":"strs","application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml":"styles","application/vnd.ms-excel.styles":"styles","application/vnd.openxmlformats-package.core-properties+xml":"coreprops","application/vnd.openxmlformats-officedocument.custom-properties+xml":"custprops","application/vnd.openxmlformats-officedocument.extended-properties+xml":"extprops","application/vnd.openxmlformats-officedocument.customXmlProperties+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml":"comments","application/vnd.ms-excel.comments":"comments","application/vnd.ms-excel.threadedcomments+xml":"threadedcomments","application/vnd.ms-excel.person+xml":"people","application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml":"metadata","application/vnd.ms-excel.sheetMetadata":"metadata","application/vnd.ms-excel.pivotTable":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.chart+xml":"TODO","application/vnd.ms-office.chartcolorstyle+xml":"TODO","application/vnd.ms-office.chartstyle+xml":"TODO","application/vnd.ms-office.chartex+xml":"TODO","application/vnd.ms-excel.calcChain":"calcchains","application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml":"calcchains","application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings":"TODO","application/vnd.ms-office.activeX":"TODO","application/vnd.ms-office.activeX+xml":"TODO","application/vnd.ms-excel.attachedToolbars":"TODO","application/vnd.ms-excel.connections":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml":"TODO","application/vnd.ms-excel.externalLink":"links","application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml":"links","application/vnd.ms-excel.pivotCacheDefinition":"TODO","application/vnd.ms-excel.pivotCacheRecords":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml":"TODO","application/vnd.ms-excel.queryTable":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml":"TODO","application/vnd.ms-excel.userNames":"TODO","application/vnd.ms-excel.revisionHeaders":"TODO","application/vnd.ms-excel.revisionLog":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml":"TODO","application/vnd.ms-excel.tableSingleCells":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml":"TODO","application/vnd.ms-excel.slicer":"TODO","application/vnd.ms-excel.slicerCache":"TODO","application/vnd.ms-excel.slicer+xml":"TODO","application/vnd.ms-excel.slicerCache+xml":"TODO","application/vnd.ms-excel.wsSortMap":"TODO","application/vnd.ms-excel.table":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml":"TODO","application/vnd.openxmlformats-officedocument.theme+xml":"themes","application/vnd.openxmlformats-officedocument.themeOverride+xml":"TODO","application/vnd.ms-excel.Timeline+xml":"TODO","application/vnd.ms-excel.TimelineCache+xml":"TODO","application/vnd.ms-office.vbaProject":"vba","application/vnd.ms-office.vbaProjectSignature":"TODO","application/vnd.ms-office.volatileDependencies":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml":"TODO","application/vnd.ms-excel.controlproperties+xml":"TODO","application/vnd.openxmlformats-officedocument.model+data":"TODO","application/vnd.ms-excel.Survey+xml":"TODO","application/vnd.openxmlformats-officedocument.drawing+xml":"drawings","application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml":"TODO","application/vnd.openxmlformats-officedocument.vmlDrawing":"TODO","application/vnd.openxmlformats-package.relationships+xml":"rels","application/vnd.openxmlformats-officedocument.oleObject":"TODO","image/png":"TODO",sheet:"js"},Ci={workbooks:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",xlsm:"application/vnd.ms-excel.sheet.macroEnabled.main+xml",xlsb:"application/vnd.ms-excel.sheet.binary.macroEnabled.main",xlam:"application/vnd.ms-excel.addin.macroEnabled.main+xml",xltx:"application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml"},strs:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml",xlsb:"application/vnd.ms-excel.sharedStrings"},comments:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml",xlsb:"application/vnd.ms-excel.comments"},sheets:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml",xlsb:"application/vnd.ms-excel.worksheet"},charts:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml",xlsb:"application/vnd.ms-excel.chartsheet"},dialogs:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml",xlsb:"application/vnd.ms-excel.dialogsheet"},macros:{xlsx:"application/vnd.ms-excel.macrosheet+xml",xlsb:"application/vnd.ms-excel.macrosheet"},metadata:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml",xlsb:"application/vnd.ms-excel.sheetMetadata"},styles:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",xlsb:"application/vnd.ms-excel.styles"}};function Kg(){return{workbooks:[],sheets:[],charts:[],dialogs:[],macros:[],rels:[],strs:[],comments:[],threadedcomments:[],links:[],coreprops:[],extprops:[],custprops:[],themes:[],styles:[],calcchains:[],vba:[],drawings:[],metadata:[],people:[],TODO:[],xmlns:""}}function Yg(e,n,t){var i=cg(Xg),a=[],r;a[a.length]=Xe,a[a.length]=W("Types",null,{xmlns:xe.CT,"xmlns:xsd":xe.xsd,"xmlns:xsi":xe.xsi}),a=a.concat([["xml","application/xml"],["bin","application/vnd.ms-excel.sheet.binary.macroEnabled.main"],["vml","application/vnd.openxmlformats-officedocument.vmlDrawing"],["data","application/vnd.openxmlformats-officedocument.model+data"],["bmp","image/bmp"],["png","image/png"],["gif","image/gif"],["emf","image/x-emf"],["wmf","image/x-wmf"],["jpg","image/jpeg"],["jpeg","image/jpeg"],["tif","image/tiff"],["tiff","image/tiff"],["pdf","application/pdf"],["rels","application/vnd.openxmlformats-package.relationships+xml"]].map(function(c){return W("Default",null,{Extension:c[0],ContentType:c[1]})}));var o=function(c){e[c]&&e[c].length>0&&(r=e[c][0],a[a.length]=W("Override",null,{PartName:(r[0]=="/"?"":"/")+r,ContentType:Ci[c][n.bookType]||Ci[c].xlsx}))},u=function(c){(e[c]||[]).forEach(function(l){a[a.length]=W("Override",null,{PartName:(l[0]=="/"?"":"/")+l,ContentType:Ci[c][n.bookType]||Ci[c].xlsx})})},s=function(c){(e[c]||[]).forEach(function(l){a[a.length]=W("Override",null,{PartName:(l[0]=="/"?"":"/")+l,ContentType:i[c][0]})})};return o("workbooks"),u("sheets"),u("charts"),s("themes"),["strs","styles"].forEach(o),["coreprops","extprops","custprops"].forEach(s),s("vba"),s("comments"),s("threadedcomments"),s("drawings"),u("metadata"),s("people"),a.length>2&&(a[a.length]="</Types>",a[1]=a[1].replace("/>",">")),a.join("")}var Ce={WB:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",HLINK:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",VML:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",XPATH:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath",XMISS:"http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing",CMNT:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments",CORE_PROPS:"http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties",EXT_PROPS:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties",CUST_PROPS:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties",SST:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings",STY:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",THEME:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme",WS:["http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet","http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"],DRAW:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing",XLMETA:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata",TCMNT:"http://schemas.microsoft.com/office/2017/10/relationships/threadedComment",PEOPLE:"http://schemas.microsoft.com/office/2017/10/relationships/person",VBA:"http://schemas.microsoft.com/office/2006/relationships/vbaProject"};function Jg(e){var n=e.lastIndexOf("/");return e.slice(0,n+1)+"_rels/"+e.slice(n+1)+".rels"}function ga(e){var n=[Xe,W("Relationships",null,{xmlns:xe.RELS})];return nn(e["!id"]).forEach(function(t){n[n.length]=W("Relationship",null,e["!id"][t])}),n.length>2&&(n[n.length]="</Relationships>",n[1]=n[1].replace("/>",">")),n.join("")}function Ne(e,n,t,i,a,r){if(a||(a={}),e["!id"]||(e["!id"]={}),e["!idx"]||(e["!idx"]=1),n<0)for(n=e["!idx"];e["!id"]["rId"+n];++n);if(e["!idx"]=n+1,a.Id="rId"+n,a.Type=i,a.Target=t,[Ce.HLINK,Ce.XPATH,Ce.XMISS].indexOf(a.Type)>-1&&(a.TargetMode="External"),e["!id"][a.Id])throw new Error("Cannot rewrite rId "+n);return e["!id"][a.Id]=a,e[("/"+a.Target).replace("//","/")]=a,n}var bo=[["cp:category","Category"],["cp:contentStatus","ContentStatus"],["cp:keywords","Keywords"],["cp:lastModifiedBy","LastAuthor"],["cp:lastPrinted","LastPrinted"],["cp:revision","RevNumber"],["cp:version","Version"],["dc:creator","Author"],["dc:description","Comments"],["dc:identifier","Identifier"],["dc:language","Language"],["dc:subject","Subject"],["dc:title","Title"],["dcterms:created","CreatedDate","date"],["dcterms:modified","ModifiedDate","date"]];function fa(e,n,t,i,a){a[e]!=null||n==null||n===""||(a[e]=n,n=de(n),i[i.length]=t?W(e,n,t):wt(e,n))}function Zg(e,n){var t=n||{},i=[Xe,W("cp:coreProperties",null,{"xmlns:cp":xe.CORE_PROPS,"xmlns:dc":xe.dc,"xmlns:dcterms":xe.dcterms,"xmlns:dcmitype":xe.dcmitype,"xmlns:xsi":xe.xsi})],a={};if(!e&&!t.Props)return i.join("");e&&(e.CreatedDate!=null&&fa("dcterms:created",typeof e.CreatedDate=="string"?e.CreatedDate:ja(e.CreatedDate,t.WTF),{"xsi:type":"dcterms:W3CDTF"},i,a),e.ModifiedDate!=null&&fa("dcterms:modified",typeof e.ModifiedDate=="string"?e.ModifiedDate:ja(e.ModifiedDate,t.WTF),{"xsi:type":"dcterms:W3CDTF"},i,a));for(var r=0;r!=bo.length;++r){var o=bo[r],u=t.Props&&t.Props[o[1]]!=null?t.Props[o[1]]:e?e[o[1]]:null;u===!0?u="1":u===!1?u="0":typeof u=="number"&&(u=String(u)),u!=null&&fa(o[0],u,null,i,a)}return i.length>2&&(i[i.length]="</cp:coreProperties>",i[1]=i[1].replace("/>",">")),i.join("")}var Qg=[["Application","Application","string"],["AppVersion","AppVersion","string"],["Company","Company","string"],["DocSecurity","DocSecurity","string"],["Manager","Manager","string"],["HyperlinksChanged","HyperlinksChanged","bool"],["SharedDoc","SharedDoc","bool"],["LinksUpToDate","LinksUpToDate","bool"],["ScaleCrop","ScaleCrop","bool"],["HeadingPairs","HeadingPairs","raw"],["TitlesOfParts","TitlesOfParts","raw"]];function ef(e){var n=[],t=W;return e||(e={}),e.Application="SheetJS",n[n.length]=Xe,n[n.length]=W("Properties",null,{xmlns:xe.EXT_PROPS,"xmlns:vt":xe.vt}),Qg.forEach(function(i){if(e[i[1]]!==void 0){var a;switch(i[2]){case"string":a=de(String(e[i[1]]));break;case"bool":a=e[i[1]]?"true":"false";break}a!==void 0&&(n[n.length]=t(i[0],a))}}),n[n.length]=t("HeadingPairs",t("vt:vector",t("vt:variant","<vt:lpstr>Worksheets</vt:lpstr>")+t("vt:variant",t("vt:i4",String(e.Worksheets))),{size:2,baseType:"variant"})),n[n.length]=t("TitlesOfParts",t("vt:vector",e.SheetNames.map(function(i){return"<vt:lpstr>"+de(i)+"</vt:lpstr>"}).join(""),{size:e.Worksheets,baseType:"lpstr"})),n.length>2&&(n[n.length]="</Properties>",n[1]=n[1].replace("/>",">")),n.join("")}function tf(e){var n=[Xe,W("Properties",null,{xmlns:xe.CUST_PROPS,"xmlns:vt":xe.vt})];if(!e)return n.join("");var t=1;return nn(e).forEach(function(a){++t,n[n.length]=W("property",Dg(e[a]),{fmtid:"{D5CDD505-2E9C-101B-9397-08002B2CF9AE}",pid:t,name:de(a)})}),n.length>2&&(n[n.length]="</Properties>",n[1]=n[1].replace("/>",">")),n.join("")}var nf=/^\s|\s$|[\t\n\r]/;function af(e,n){if(!n.bookSST)return"";var t=[Xe];t[t.length]=W("sst",null,{xmlns:Ln[0],count:e.Count,uniqueCount:e.Unique});for(var i=0;i!=e.length;++i)if(e[i]!=null){var a=e[i],r="<si>";a.r?r+=a.r:(r+="<t",a.t||(a.t=""),typeof a.t!="string"&&(a.t=String(a.t)),a.t.match(nf)&&(r+=' xml:space="preserve"'),r+=">"+de(a.t)+"</t>"),r+="</si>",t[t.length]=r}return t.length>2&&(t[t.length]="</sst>",t[1]=t[1].replace("/>",">")),t.join("")}function rf(e){for(var n=[],t=e.split(""),i=0;i<t.length;++i)n[i]=t[i].charCodeAt(0);return n}function of(e){var n=0,t,i=rf(e),a=i.length+1,r,o,u,s,c;for(t=Fn(a),t[0]=i.length,r=1;r!=a;++r)t[r]=i[r-1];for(r=a-1;r>=0;--r)o=t[r],u=(n&16384)===0?0:1,s=n<<1&32767,c=u|s,n=c^o;return n^52811}var uf=6,Mi=uf;function sf(e){return Math.floor((e-5)/Mi*100+.5)/100}function cf(e){return Math.round((e*Mi+5)/Mi*256)/256}var lf=96,df=lf;function ko(e){return e*96/df}function hf(e){var n=["<numFmts>"];return[[5,8],[23,26],[41,44],[50,392]].forEach(function(t){for(var i=t[0];i<=t[1];++i)e[i]!=null&&(n[n.length]=W("numFmt",null,{numFmtId:i,formatCode:de(e[i])}))}),n.length===1?"":(n[n.length]="</numFmts>",n[0]=W("numFmts",null,{count:n.length-2}).replace("/>",">"),n.join(""))}function gf(e){var n=[];return n[n.length]=W("cellXfs",null),e.forEach(function(t){n[n.length]=W("xf",null,t)}),n[n.length]="</cellXfs>",n.length===2?"":(n[0]=W("cellXfs",null,{count:n.length-2}).replace("/>",">"),n.join(""))}function ff(e,n){var t=[Xe,W("styleSheet",null,{xmlns:Ln[0],"xmlns:vt":xe.vt})],i;return e.SSF&&(i=hf(e.SSF))!=null&&(t[t.length]=i),t[t.length]='<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>',t[t.length]='<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>',t[t.length]='<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>',t[t.length]='<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>',(i=gf(n.cellXfs))&&(t[t.length]=i),t[t.length]='<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>',t[t.length]='<dxfs count="0"/>',t[t.length]='<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>',t.length>2&&(t[t.length]="</styleSheet>",t[1]=t[1].replace("/>",">")),t.join("")}function pf(e,n){if(n&&n.themeXLSX)return n.themeXLSX;if(e&&typeof e.raw=="string")return e.raw;var t=[Xe];return t[t.length]='<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">',t[t.length]="<a:themeElements>",t[t.length]='<a:clrScheme name="Office">',t[t.length]='<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>',t[t.length]='<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>',t[t.length]='<a:dk2><a:srgbClr val="1F497D"/></a:dk2>',t[t.length]='<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>',t[t.length]='<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>',t[t.length]='<a:accent2><a:srgbClr val="C0504D"/></a:accent2>',t[t.length]='<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>',t[t.length]='<a:accent4><a:srgbClr val="8064A2"/></a:accent4>',t[t.length]='<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>',t[t.length]='<a:accent6><a:srgbClr val="F79646"/></a:accent6>',t[t.length]='<a:hlink><a:srgbClr val="0000FF"/></a:hlink>',t[t.length]='<a:folHlink><a:srgbClr val="800080"/></a:folHlink>',t[t.length]="</a:clrScheme>",t[t.length]='<a:fontScheme name="Office">',t[t.length]="<a:majorFont>",t[t.length]='<a:latin typeface="Cambria"/>',t[t.length]='<a:ea typeface=""/>',t[t.length]='<a:cs typeface=""/>',t[t.length]='<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>',t[t.length]='<a:font script="Hang" typeface="맑은 고딕"/>',t[t.length]='<a:font script="Hans" typeface="宋体"/>',t[t.length]='<a:font script="Hant" typeface="新細明體"/>',t[t.length]='<a:font script="Arab" typeface="Times New Roman"/>',t[t.length]='<a:font script="Hebr" typeface="Times New Roman"/>',t[t.length]='<a:font script="Thai" typeface="Tahoma"/>',t[t.length]='<a:font script="Ethi" typeface="Nyala"/>',t[t.length]='<a:font script="Beng" typeface="Vrinda"/>',t[t.length]='<a:font script="Gujr" typeface="Shruti"/>',t[t.length]='<a:font script="Khmr" typeface="MoolBoran"/>',t[t.length]='<a:font script="Knda" typeface="Tunga"/>',t[t.length]='<a:font script="Guru" typeface="Raavi"/>',t[t.length]='<a:font script="Cans" typeface="Euphemia"/>',t[t.length]='<a:font script="Cher" typeface="Plantagenet Cherokee"/>',t[t.length]='<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>',t[t.length]='<a:font script="Tibt" typeface="Microsoft Himalaya"/>',t[t.length]='<a:font script="Thaa" typeface="MV Boli"/>',t[t.length]='<a:font script="Deva" typeface="Mangal"/>',t[t.length]='<a:font script="Telu" typeface="Gautami"/>',t[t.length]='<a:font script="Taml" typeface="Latha"/>',t[t.length]='<a:font script="Syrc" typeface="Estrangelo Edessa"/>',t[t.length]='<a:font script="Orya" typeface="Kalinga"/>',t[t.length]='<a:font script="Mlym" typeface="Kartika"/>',t[t.length]='<a:font script="Laoo" typeface="DokChampa"/>',t[t.length]='<a:font script="Sinh" typeface="Iskoola Pota"/>',t[t.length]='<a:font script="Mong" typeface="Mongolian Baiti"/>',t[t.length]='<a:font script="Viet" typeface="Times New Roman"/>',t[t.length]='<a:font script="Uigh" typeface="Microsoft Uighur"/>',t[t.length]='<a:font script="Geor" typeface="Sylfaen"/>',t[t.length]="</a:majorFont>",t[t.length]="<a:minorFont>",t[t.length]='<a:latin typeface="Calibri"/>',t[t.length]='<a:ea typeface=""/>',t[t.length]='<a:cs typeface=""/>',t[t.length]='<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>',t[t.length]='<a:font script="Hang" typeface="맑은 고딕"/>',t[t.length]='<a:font script="Hans" typeface="宋体"/>',t[t.length]='<a:font script="Hant" typeface="新細明體"/>',t[t.length]='<a:font script="Arab" typeface="Arial"/>',t[t.length]='<a:font script="Hebr" typeface="Arial"/>',t[t.length]='<a:font script="Thai" typeface="Tahoma"/>',t[t.length]='<a:font script="Ethi" typeface="Nyala"/>',t[t.length]='<a:font script="Beng" typeface="Vrinda"/>',t[t.length]='<a:font script="Gujr" typeface="Shruti"/>',t[t.length]='<a:font script="Khmr" typeface="DaunPenh"/>',t[t.length]='<a:font script="Knda" typeface="Tunga"/>',t[t.length]='<a:font script="Guru" typeface="Raavi"/>',t[t.length]='<a:font script="Cans" typeface="Euphemia"/>',t[t.length]='<a:font script="Cher" typeface="Plantagenet Cherokee"/>',t[t.length]='<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>',t[t.length]='<a:font script="Tibt" typeface="Microsoft Himalaya"/>',t[t.length]='<a:font script="Thaa" typeface="MV Boli"/>',t[t.length]='<a:font script="Deva" typeface="Mangal"/>',t[t.length]='<a:font script="Telu" typeface="Gautami"/>',t[t.length]='<a:font script="Taml" typeface="Latha"/>',t[t.length]='<a:font script="Syrc" typeface="Estrangelo Edessa"/>',t[t.length]='<a:font script="Orya" typeface="Kalinga"/>',t[t.length]='<a:font script="Mlym" typeface="Kartika"/>',t[t.length]='<a:font script="Laoo" typeface="DokChampa"/>',t[t.length]='<a:font script="Sinh" typeface="Iskoola Pota"/>',t[t.length]='<a:font script="Mong" typeface="Mongolian Baiti"/>',t[t.length]='<a:font script="Viet" typeface="Arial"/>',t[t.length]='<a:font script="Uigh" typeface="Microsoft Uighur"/>',t[t.length]='<a:font script="Geor" typeface="Sylfaen"/>',t[t.length]="</a:minorFont>",t[t.length]="</a:fontScheme>",t[t.length]='<a:fmtScheme name="Office">',t[t.length]="<a:fillStyleLst>",t[t.length]='<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>',t[t.length]='<a:gradFill rotWithShape="1">',t[t.length]="<a:gsLst>",t[t.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>',t[t.length]='<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>',t[t.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',t[t.length]="</a:gsLst>",t[t.length]='<a:lin ang="16200000" scaled="1"/>',t[t.length]="</a:gradFill>",t[t.length]='<a:gradFill rotWithShape="1">',t[t.length]="<a:gsLst>",t[t.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>',t[t.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',t[t.length]="</a:gsLst>",t[t.length]='<a:lin ang="16200000" scaled="0"/>',t[t.length]="</a:gradFill>",t[t.length]="</a:fillStyleLst>",t[t.length]="<a:lnStyleLst>",t[t.length]='<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>',t[t.length]='<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>',t[t.length]='<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>',t[t.length]="</a:lnStyleLst>",t[t.length]="<a:effectStyleLst>",t[t.length]="<a:effectStyle>",t[t.length]="<a:effectLst>",t[t.length]='<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>',t[t.length]="</a:effectLst>",t[t.length]="</a:effectStyle>",t[t.length]="<a:effectStyle>",t[t.length]="<a:effectLst>",t[t.length]='<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>',t[t.length]="</a:effectLst>",t[t.length]="</a:effectStyle>",t[t.length]="<a:effectStyle>",t[t.length]="<a:effectLst>",t[t.length]='<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>',t[t.length]="</a:effectLst>",t[t.length]='<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>',t[t.length]='<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>',t[t.length]="</a:effectStyle>",t[t.length]="</a:effectStyleLst>",t[t.length]="<a:bgFillStyleLst>",t[t.length]='<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>',t[t.length]='<a:gradFill rotWithShape="1">',t[t.length]="<a:gsLst>",t[t.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',t[t.length]='<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',t[t.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>',t[t.length]="</a:gsLst>",t[t.length]='<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>',t[t.length]="</a:gradFill>",t[t.length]='<a:gradFill rotWithShape="1">',t[t.length]="<a:gsLst>",t[t.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>',t[t.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>',t[t.length]="</a:gsLst>",t[t.length]='<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>',t[t.length]="</a:gradFill>",t[t.length]="</a:bgFillStyleLst>",t[t.length]="</a:fmtScheme>",t[t.length]="</a:themeElements>",t[t.length]="<a:objectDefaults>",t[t.length]="<a:spDef>",t[t.length]='<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>',t[t.length]="</a:spDef>",t[t.length]="<a:lnDef>",t[t.length]='<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>',t[t.length]="</a:lnDef>",t[t.length]="</a:objectDefaults>",t[t.length]="<a:extraClrSchemeLst/>",t[t.length]="</a:theme>",t.join("")}function mf(){var e=[Xe];return e.push(`<metadata xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:xlrd="http://schemas.microsoft.com/office/spreadsheetml/2017/richdata" xmlns:xda="http://schemas.microsoft.com/office/spreadsheetml/2017/dynamicarray">
  <metadataTypes count="1">
    <metadataType name="XLDAPR" minSupportedVersion="120000" copy="1" pasteAll="1" pasteValues="1" merge="1" splitFirst="1" rowColShift="1" clearFormats="1" clearComments="1" assign="1" coerce="1" cellMeta="1"/>
  </metadataTypes>
  <futureMetadata name="XLDAPR" count="1">
    <bk>
      <extLst>
        <ext uri="{bdbb8cdc-fa1e-496e-a857-3c3f30c029c3}">
          <xda:dynamicArrayProperties fDynamic="1" fCollapsed="0"/>
        </ext>
      </extLst>
    </bk>
  </futureMetadata>
  <cellMetadata count="1">
    <bk>
      <rc t="1" v="0"/>
    </bk>
  </cellMetadata>
</metadata>`),e.join("")}function bf(e,n,t){var i=[21600,21600],a=["m0,0l0",i[1],i[0],i[1],i[0],"0xe"].join(","),r=[W("xml",null,{"xmlns:v":vi.v,"xmlns:o":vi.o,"xmlns:x":vi.x,"xmlns:mv":vi.mv}).replace(/\/>/,">"),W("o:shapelayout",W("o:idmap",null,{"v:ext":"edit",data:e}),{"v:ext":"edit"})],o=65536*e,u=n||[];return u.length>0&&r.push(W("v:shapetype",[W("v:stroke",null,{joinstyle:"miter"}),W("v:path",null,{gradientshapeok:"t","o:connecttype":"rect"})].join(""),{id:"_x0000_t202",coordsize:i.join(","),"o:spt":202,path:a})),u.forEach(function(s){++o,r.push(kf(s,o))}),r.push("</xml>"),r.join("")}function kf(e,n,t){var i=Dt(e[0]),a={color2:"#BEFF82",type:"gradient"};a.type=="gradient"&&(a.angle="-180");var r=a.type=="gradient"?W("o:fill",null,{type:"gradientUnscaled","v:ext":"view"}):null,o=W("v:fill",r,a),u={on:"t",obscured:"t"};return["<v:shape"+zu({id:"_x0000_s"+n,type:"#_x0000_t202",style:"position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10"+(e[1].hidden?";visibility:hidden":""),fillcolor:"#ECFAD4",strokecolor:"#edeaa1"})+">",o,W("v:shadow",null,u),W("v:path",null,{"o:connecttype":"none"}),'<v:textbox><div style="text-align:left"></div></v:textbox>','<x:ClientData ObjectType="Note">',"<x:MoveWithCells/>","<x:SizeWithCells/>",wt("x:Anchor",[i.c+1,0,i.r+1,0,i.c+3,20,i.r+5,20].join(",")),wt("x:AutoFill","False"),wt("x:Row",String(i.r)),wt("x:Column",String(i.c)),e[1].hidden?"":"<x:Visible/>","</x:ClientData>","</v:shape>"].join("")}function vf(e){var n=[Xe,W("comments",null,{xmlns:Ln[0]})],t=[];return n.push("<authors>"),e.forEach(function(i){i[1].forEach(function(a){var r=de(a.a);t.indexOf(r)==-1&&(t.push(r),n.push("<author>"+r+"</author>")),a.T&&a.ID&&t.indexOf("tc="+a.ID)==-1&&(t.push("tc="+a.ID),n.push("<author>tc="+a.ID+"</author>"))})}),t.length==0&&(t.push("SheetJ5"),n.push("<author>SheetJ5</author>")),n.push("</authors>"),n.push("<commentList>"),e.forEach(function(i){var a=0,r=[],o=0;if(i[1][0]&&i[1][0].T&&i[1][0].ID&&(a=t.indexOf("tc="+i[1][0].ID)),i[1].forEach(function(c){c.a&&(a=t.indexOf(de(c.a))),c.T&&++o,r.push(c.t==null?"":de(c.t))}),o===0)i[1].forEach(function(c){n.push('<comment ref="'+i[0]+'" authorId="'+t.indexOf(de(c.a))+'"><text>'),n.push(wt("t",c.t==null?"":de(c.t))),n.push("</text></comment>")});else{i[1][0]&&i[1][0].T&&i[1][0].ID&&(a=t.indexOf("tc="+i[1][0].ID)),n.push('<comment ref="'+i[0]+'" authorId="'+a+'"><text>');for(var u=`Comment:
    `+r[0]+`
`,s=1;s<r.length;++s)u+=`Reply:
    `+r[s]+`
`;n.push(wt("t",de(u))),n.push("</text></comment>")}}),n.push("</commentList>"),n.length>2&&(n[n.length]="</comments>",n[1]=n[1].replace("/>",">")),n.join("")}function Cf(e,n,t){var i=[Xe,W("ThreadedComments",null,{xmlns:xe.TCMNT}).replace(/[\/]>/,">")];return e.forEach(function(a){var r="";(a[1]||[]).forEach(function(o,u){if(!o.T){delete o.ID;return}o.a&&n.indexOf(o.a)==-1&&n.push(o.a);var s={ref:a[0],id:"{54EE7951-7262-4200-6969-"+("000000000000"+t.tcid++).slice(-12)+"}"};u==0?r=s.id:s.parentId=r,o.ID=s.id,o.a&&(s.personId="{54EE7950-7262-4200-6969-"+("000000000000"+n.indexOf(o.a)).slice(-12)+"}"),i.push(W("threadedComment",wt("text",o.t||""),s))})}),i.push("</ThreadedComments>"),i.join("")}function yf(e){var n=[Xe,W("personList",null,{xmlns:xe.TCMNT,"xmlns:x":Ln[0]}).replace(/[\/]>/,">")];return e.forEach(function(t,i){n.push(W("person",null,{displayName:t,id:"{54EE7950-7262-4200-6969-"+("000000000000"+i).slice(-12)+"}",userId:t,providerId:"None"}))}),n.push("</personList>"),n.join("")}var Ef=["xlsb","xlsm","xlam","biff8","xla"],Sf=/(^|[^._A-Z0-9])(\$?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])(\$?)(\d{1,7})(?![_.\(A-Za-z0-9])/g;try{Sf=/(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g}catch{}var Si=typeof Map<"u";function wf(e,n,t){var i=0,a=e.length;if(t){if(Si?t.has(n):Object.prototype.hasOwnProperty.call(t,n)){for(var r=Si?t.get(n):t[n];i<r.length;++i)if(e[r[i]].t===n)return e.Count++,r[i]}}else for(;i<a;++i)if(e[i].t===n)return e.Count++,i;return e[a]={t:n},e.Count++,e.Unique++,t&&(Si?(t.has(n)||t.set(n,[]),t.get(n).push(a)):(Object.prototype.hasOwnProperty.call(t,n)||(t[n]=[]),t[n].push(a))),a}function xf(e,n){var t={min:e+1,max:e+1},i=-1;return n.MDW&&(Mi=n.MDW),n.width!=null?t.customWidth=1:n.wpx!=null?i=sf(n.wpx):n.wch!=null&&(i=n.wch),i>-1?(t.width=cf(i),t.customWidth=1):n.width!=null&&(t.width=n.width),n.hidden&&(t.hidden=!0),n.level!=null&&(t.outlineLevel=t.level=n.level),t}function Af(e,n){if(e){var t=[.7,.7,.75,.75,.3,.3];e.left==null&&(e.left=t[0]),e.right==null&&(e.right=t[1]),e.top==null&&(e.top=t[2]),e.bottom==null&&(e.bottom=t[3]),e.header==null&&(e.header=t[4]),e.footer==null&&(e.footer=t[5])}}function rs(e,n,t){var i=t.revssf[n.z!=null?n.z:"General"],a=60,r=e.length;if(i==null&&t.ssf){for(;a<392;++a)if(t.ssf[a]==null){rg(n.z,a),t.ssf[a]=n.z,t.revssf[n.z]=i=a;break}}for(a=0;a!=r;++a)if(e[a].numFmtId===i)return a;return e[r]={numFmtId:i,fontId:0,fillId:0,borderId:0,xfId:0,applyNumberFormat:1},r}function _f(e,n,t){if(e&&e["!ref"]){var i=Rt(e["!ref"]);if(i.e.c<i.s.c||i.e.r<i.s.r)throw new Error("Bad range ("+t+"): "+e["!ref"])}}function Gf(e){if(e.length===0)return"";for(var n='<mergeCells count="'+e.length+'">',t=0;t!=e.length;++t)n+='<mergeCell ref="'+pt(e[t])+'"/>';return n+"</mergeCells>"}function Of(e,n,t,i,a){var r=!1,o={},u=null;if(i.bookType!=="xlsx"&&n.vbaraw){var s=n.SheetNames[t];try{n.Workbook&&(s=n.Workbook.Sheets[t].CodeName||s)}catch{}r=!0,o.codeName=Og(de(s))}if(e&&e["!outline"]){var c={summaryBelow:1,summaryRight:1};e["!outline"].above&&(c.summaryBelow=0),e["!outline"].left&&(c.summaryRight=0),u=(u||"")+W("outlinePr",null,c)}!r&&!u||(a[a.length]=W("sheetPr",u,o))}var Ff=["objects","scenarios","selectLockedCells","selectUnlockedCells"],Df=["formatColumns","formatRows","formatCells","insertColumns","insertRows","insertHyperlinks","deleteColumns","deleteRows","sort","autoFilter","pivotTables"];function Nf(e){var n={sheet:1};return Ff.forEach(function(t){e[t]!=null&&e[t]&&(n[t]="1")}),Df.forEach(function(t){e[t]!=null&&!e[t]&&(n[t]="0")}),e.password&&(n.password=of(e.password).toString(16).toUpperCase()),W("sheetProtection",null,n)}function Rf(e){return Af(e),W("pageMargins",null,e)}function Lf(e,n){for(var t=["<cols>"],i,a=0;a!=n.length;++a)(i=n[a])&&(t[t.length]=W("col",null,xf(a,i)));return t[t.length]="</cols>",t.join("")}function Hf(e,n,t,i){var a=typeof e.ref=="string"?e.ref:pt(e.ref);t.Workbook||(t.Workbook={Sheets:[]}),t.Workbook.Names||(t.Workbook.Names=[]);var r=t.Workbook.Names,o=hn(a);o.s.r==o.e.r&&(o.e.r=hn(n["!ref"]).e.r,a=pt(o));for(var u=0;u<r.length;++u){var s=r[u];if(s.Name=="_xlnm._FilterDatabase"&&s.Sheet==i){s.Ref=is(t.SheetNames[i])+"!"+ns(a);break}}return u==r.length&&r.push({Name:"_xlnm._FilterDatabase",Sheet:i,Ref:"'"+t.SheetNames[i]+"'!"+a}),W("autoFilter",null,{ref:a})}function Tf(e,n,t,i){var a={workbookViewId:"0"};return(((i||{}).Workbook||{}).Views||[])[0]&&(a.rightToLeft=i.Workbook.Views[0].RTL?"1":"0"),W("sheetViews",W("sheetView",null,a),{})}function If(e,n,t,i,a,r,o){if(e.c&&t["!comments"].push([n,e.c]),(e.v===void 0||e.t==="z"&&!(i||{}).sheetStubs)&&typeof e.f!="string"&&typeof e.z>"u")return"";var u="",s=e.t,c=e.v;if(e.t!=="z")switch(e.t){case"b":u=e.v?"1":"0";break;case"n":isNaN(e.v)?(e.t="e",u=Qt[e.v=36]):isFinite(e.v)?u=""+e.v:(e.t="e",u=Qt[e.v=7]);break;case"e":u=Qt[e.v];break;case"d":if(i&&i.cellDates){var l=$a(e.v,o);u=l.toISOString(),l.getUTCFullYear()<1900&&(u=u.slice(u.indexOf("T")+1).replace("Z",""))}else e=si(e),e.t="n",u=""+(e.v=$t($a(e.v,o),o));typeof e.z>"u"&&(e.z=At[14]);break;default:u=e.v;break}var g=e.t=="z"||e.v==null?"":wt("v",de(u)),b={r:n},h=rs(i.cellXfs,e,i);switch(h!==0&&(b.s=h),e.t){case"n":break;case"d":b.t="d";break;case"b":b.t="b";break;case"e":b.t="e";break;case"z":break;default:if(e.v==null){delete e.t;break}if(e.v.length>32767)throw new Error("Text length must not exceed 32767 characters");if(i&&i.bookSST){g=wt("v",""+wf(i.Strings,e.v,i.revStrings)),b.t="s";break}else b.t="str";break}if(e.t!=s&&(e.t=s,e.v=c),typeof e.f=="string"&&e.f){var E=e.F&&e.F.slice(0,n.length)==n?{t:"array",ref:e.F}:null;g=W("f",de(e.f),E)+(e.v!=null?g:"")}return e.l&&(e.l.display=de(u),t["!links"].push([n,e.l])),e.D&&(b.cm=1),W("c",g,b)}function Mf(e,n,t,i){var a=[],r=[],o=Rt(e["!ref"]),u="",s,c="",l=[],g=0,b=0,h=e["!rows"],E=e["!data"]!=null,C=E?e["!data"]:[],w={r:c},S,D=-1,N=(((i||{}).Workbook||{}).WBProps||{}).date1904;for(b=o.s.c;b<=o.e.c;++b)l[b]=ft(b);for(g=o.s.r;g<=o.e.r;++g){r=[],c=gt(g);var V=E?C[g]:[];for(b=o.s.c;b<=o.e.c;++b){s=l[b]+c;var L=E?V[b]:e[s];L!==void 0&&(u=If(L,s,e,n,t,i,N))!=null&&r.push(u)}(r.length>0||h&&h[g])&&(w={r:c},h&&h[g]&&(S=h[g],S.hidden&&(w.hidden=1),D=-1,S.hpx?D=ko(S.hpx):S.hpt&&(D=S.hpt),D>-1&&(w.ht=D,w.customHeight=1),S.level&&(w.outlineLevel=S.level)),a[a.length]=W("row",r.join(""),w))}if(h)for(;g<h.length;++g)h&&h[g]&&(w={r:g+1},S=h[g],S.hidden&&(w.hidden=1),D=-1,S.hpx?D=ko(S.hpx):S.hpt&&(D=S.hpt),D>-1&&(w.ht=D,w.customHeight=1),S.level&&(w.outlineLevel=S.level),a[a.length]=W("row","",w));return a.join("")}function Pf(e,n,t,i){var a=[Xe,W("worksheet",null,{xmlns:Ln[0],"xmlns:r":xe.r})],r=t.SheetNames[e],o=0,u="",s=t.Sheets[r];s==null&&(s={});var c=s["!ref"]||"A1",l=Rt(c);if(l.e.c>16383||l.e.r>1048575){if(n.WTF)throw new Error("Range "+c+" exceeds format limit A1:XFD1048576");l.e.c=Math.min(l.e.c,16383),l.e.r=Math.min(l.e.c,1048575),c=pt(l)}i||(i={}),s["!comments"]=[];var g=[];Of(s,t,e,n,a),a[a.length]=W("dimension",null,{ref:c}),a[a.length]=Tf(s,n,e,t),n.sheetFormat&&(a[a.length]=W("sheetFormatPr",null,{defaultRowHeight:n.sheetFormat.defaultRowHeight||"16",baseColWidth:n.sheetFormat.baseColWidth||"10",outlineLevelRow:n.sheetFormat.outlineLevelRow||"7"})),s["!cols"]!=null&&s["!cols"].length>0&&(a[a.length]=Lf(s,s["!cols"])),a[o=a.length]="<sheetData/>",s["!links"]=[],s["!ref"]!=null&&(u=Mf(s,n,e,t),u.length>0&&(a[a.length]=u)),a.length>o+1&&(a[a.length]="</sheetData>",a[o]=a[o].replace("/>",">")),s["!protect"]&&(a[a.length]=Nf(s["!protect"])),s["!autofilter"]!=null&&(a[a.length]=Hf(s["!autofilter"],s,t,e)),s["!merges"]!=null&&s["!merges"].length>0&&(a[a.length]=Gf(s["!merges"]));var b=-1,h,E=-1;return s["!links"].length>0&&(a[a.length]="<hyperlinks>",s["!links"].forEach(function(C){C[1].Target&&(h={ref:C[0]},C[1].Target.charAt(0)!="#"&&(E=Ne(i,-1,de(C[1].Target).replace(/#[\s\S]*$/,""),Ce.HLINK),h["r:id"]="rId"+E),(b=C[1].Target.indexOf("#"))>-1&&(h.location=de(C[1].Target.slice(b+1))),C[1].Tooltip&&(h.tooltip=de(C[1].Tooltip)),h.display=C[1].display,a[a.length]=W("hyperlink",null,h))}),a[a.length]="</hyperlinks>"),delete s["!links"],s["!margins"]!=null&&(a[a.length]=Rf(s["!margins"])),(!n||n.ignoreEC||n.ignoreEC==null)&&(a[a.length]=wt("ignoredErrors",W("ignoredError",null,{numberStoredAsText:1,sqref:c}))),g.length>0&&(E=Ne(i,-1,"../drawings/drawing"+(e+1)+".xml",Ce.DRAW),a[a.length]=W("drawing",null,{"r:id":"rId"+E}),s["!drawing"]=g),s["!comments"].length>0&&(E=Ne(i,-1,"../drawings/vmlDrawing"+(e+1)+".vml",Ce.VML),a[a.length]=W("legacyDrawing",null,{"r:id":"rId"+E}),s["!legacy"]=E),a.length>1&&(a[a.length]="</worksheet>",a[1]=a[1].replace("/>",">")),a.join("")}var Bf=[["allowRefreshQuery",!1,"bool"],["autoCompressPictures",!0,"bool"],["backupFile",!1,"bool"],["checkCompatibility",!1,"bool"],["CodeName",""],["date1904",!1,"bool"],["defaultThemeVersion",0,"int"],["filterPrivacy",!1,"bool"],["hidePivotFieldList",!1,"bool"],["promptedSolutions",!1,"bool"],["publishItems",!1,"bool"],["refreshAllConnections",!1,"bool"],["saveExternalLinkValues",!0,"bool"],["showBorderUnselectedTables",!0,"bool"],["showInkAnnotation",!0,"bool"],["showObjects","all"],["showPivotChartFilter",!1,"bool"],["updateLinks","userSet"]],Vf=":][*?/\\".split("");function os(e,n){try{if(e=="")throw new Error("Sheet name cannot be blank");if(e.length>31)throw new Error("Sheet name cannot exceed 31 chars");if(e.charCodeAt(0)==39||e.charCodeAt(e.length-1)==39)throw new Error("Sheet name cannot start or end with apostrophe (')");if(e.toLowerCase()=="history")throw new Error("Sheet name cannot be 'History'");Vf.forEach(function(t){if(e.indexOf(t)!=-1)throw new Error("Sheet name cannot contain : \\ / ? * [ ]")})}catch(t){throw t}return!0}function zf(e,n,t){e.forEach(function(i,a){os(i);for(var r=0;r<a;++r)if(i==e[r])throw new Error("Duplicate Sheet Name: "+i);if(t){var o=n&&n[a]&&n[a].CodeName||i;if(o.charCodeAt(0)==95&&o.length>22)throw new Error("Bad Code Name: Worksheet"+o)}})}function $f(e){if(!e||!e.SheetNames||!e.Sheets)throw new Error("Invalid Workbook");if(!e.SheetNames.length)throw new Error("Workbook is empty");var n=e.Workbook&&e.Workbook.Sheets||[];zf(e.SheetNames,n,!!e.vbaraw);for(var t=0;t<e.SheetNames.length;++t)_f(e.Sheets[e.SheetNames[t]],e.SheetNames[t],t);e.SheetNames.forEach(function(i,a){var r=e.Sheets[i];if(!(!r||!r["!autofilter"])){var o;e.Workbook||(e.Workbook={}),e.Workbook.Names||(e.Workbook.Names=[]),e.Workbook.Names.forEach(function(s){s.Name=="_xlnm._FilterDatabase"&&s.Sheet==a&&(o=s)});var u=is(i)+"!"+ns(r["!autofilter"].ref);o?o.Ref=u:e.Workbook.Names.push({Name:"_xlnm._FilterDatabase",Sheet:a,Ref:u})}})}function jf(e){var n=[Xe];n[n.length]=W("workbook",null,{xmlns:Ln[0],"xmlns:r":xe.r});var t=e.Workbook&&(e.Workbook.Names||[]).length>0,i={codeName:"ThisWorkbook"};e.Workbook&&e.Workbook.WBProps&&(Bf.forEach(function(u){e.Workbook.WBProps[u[0]]!=null&&e.Workbook.WBProps[u[0]]!=u[1]&&(i[u[0]]=e.Workbook.WBProps[u[0]])}),e.Workbook.WBProps.CodeName&&(i.codeName=e.Workbook.WBProps.CodeName,delete i.CodeName)),n[n.length]=W("workbookPr",null,i);var a=e.Workbook&&e.Workbook.Sheets||[],r=0;if(a&&a[0]&&a[0].Hidden){for(n[n.length]="<bookViews>",r=0;r!=e.SheetNames.length&&!(!a[r]||!a[r].Hidden);++r);r==e.SheetNames.length&&(r=0),n[n.length]='<workbookView firstSheet="'+r+'" activeTab="'+r+'"/>',n[n.length]="</bookViews>"}for(n[n.length]="<sheets>",r=0;r!=e.SheetNames.length;++r){var o={name:de(e.SheetNames[r].slice(0,31))};if(o.sheetId=""+(r+1),o["r:id"]="rId"+(r+1),a[r])switch(a[r].Hidden){case 1:o.state="hidden";break;case 2:o.state="veryHidden";break}n[n.length]=W("sheet",null,o)}return n[n.length]="</sheets>",t&&(n[n.length]="<definedNames>",e.Workbook&&e.Workbook.Names&&e.Workbook.Names.forEach(function(u){var s={name:u.Name};u.Comment&&(s.comment=u.Comment),u.Sheet!=null&&(s.localSheetId=""+u.Sheet),u.Hidden&&(s.hidden="1"),u.Ref&&(n[n.length]=W("definedName",de(u.Ref),s))}),n[n.length]="</definedNames>"),n.length>2&&(n[n.length]="</workbook>",n[1]=n[1].replace("/>",">")),n.join("")}function Uf(e,n,t,i){for(var a=e["!merges"]||[],r=[],o={},u=e["!data"]!=null,s=n.s.c;s<=n.e.c;++s){for(var c=0,l=0,g=0;g<a.length;++g)if(!(a[g].s.r>t||a[g].s.c>s)&&!(a[g].e.r<t||a[g].e.c<s)){if(a[g].s.r<t||a[g].s.c<s){c=-1;break}c=a[g].e.r-a[g].s.r+1,l=a[g].e.c-a[g].s.c+1;break}if(!(c<0)){var b=ft(s)+gt(t),h=u?(e["!data"][t]||[])[s]:e[b];h&&h.t=="n"&&h.v!=null&&!isFinite(h.v)&&(isNaN(h.v)?h={t:"e",v:36,w:Qt[36]}:h={t:"e",v:7,w:Qt[7]});var E=h&&h.v!=null&&(h.h||da(h.w||(li(h),h.w)||""))||"";o={},c>1&&(o.rowspan=c),l>1&&(o.colspan=l),i.editable?E='<span contenteditable="true">'+E+"</span>":h&&(o["data-t"]=h&&h.t||"z",h.v!=null&&(o["data-v"]=da(h.v instanceof Date?h.v.toISOString():h.v)),h.z!=null&&(o["data-z"]=h.z),h.l&&(h.l.Target||"#").charAt(0)!="#"&&(E='<a href="'+da(h.l.Target)+'">'+E+"</a>")),o.id=(i.id||"sjs")+"-"+b,r.push(W("td",E,o))}}var C="<tr>";return C+r.join("")+"</tr>"}var qf='<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>',Wf="</body></html>";function Xf(e,n,t){var i=[];return i.join("")+"<table"+(t&&t.id?' id="'+t.id+'"':"")+">"}function Kf(e,n){var t=n||{},i=t.header!=null?t.header:qf,a=t.footer!=null?t.footer:Wf,r=[i],o=hn(e["!ref"]||"A1");if(r.push(Xf(e,o,t)),e["!ref"])for(var u=o.s.r;u<=o.e.r;++u)r.push(Uf(e,o,u,t));return r.push("</table>"+a),r.join("")}function us(e,n,t){var i=n.rows;if(!i)throw"Unsupported origin when "+n.tagName+" is not a TABLE";var a=t||{},r=e["!data"]!=null,o=0,u=0;if(a.origin!=null)if(typeof a.origin=="number")o=a.origin;else{var s=typeof a.origin=="string"?Dt(a.origin):a.origin;o=s.r,u=s.c}var c=Math.min(a.sheetRows||1e7,i.length),l={s:{r:0,c:0},e:{r:o,c:u}};if(e["!ref"]){var g=hn(e["!ref"]);l.s.r=Math.min(l.s.r,g.s.r),l.s.c=Math.min(l.s.c,g.s.c),l.e.r=Math.max(l.e.r,g.e.r),l.e.c=Math.max(l.e.c,g.e.c),o==-1&&(l.e.r=o=g.e.r+1)}var b=[],h=0,E=e["!rows"]||(e["!rows"]=[]),C=0,w=0,S=0,D=0,N=0,V=0;for(e["!cols"]||(e["!cols"]=[]);C<i.length&&w<c;++C){var L=i[C];if(vo(L)){if(a.display)continue;E[w]={hidden:!0}}var q=L.cells;for(S=D=0;S<q.length;++S){var O=q[S];if(!(a.display&&vo(O))){var P=O.hasAttribute("data-v")?O.getAttribute("data-v"):O.hasAttribute("v")?O.getAttribute("v"):Fg(O.innerHTML),H=O.getAttribute("data-z")||O.getAttribute("z");for(h=0;h<b.length;++h){var j=b[h];j.s.c==D+u&&j.s.r<w+o&&w+o<=j.e.r&&(D=j.e.c+1-u,h=-1)}V=+O.getAttribute("colspan")||1,((N=+O.getAttribute("rowspan")||1)>1||V>1)&&b.push({s:{r:w+o,c:D+u},e:{r:w+o+(N||1)-1,c:D+u+(V||1)-1}});var M={t:"s",v:P},X=O.getAttribute("data-t")||O.getAttribute("t")||"";P!=null&&(P.length==0?M.t=X||"z":a.raw||P.trim().length==0||X=="s"||(X=="e"&&Qt[+P]?M={t:"e",v:+P,w:Qt[+P]}:P==="TRUE"?M={t:"b",v:!0}:P==="FALSE"?M={t:"b",v:!1}:isNaN(oo(P))?isNaN(Eg(P).getDate())?P.charCodeAt(0)==35&&mo[P]!=null&&(M={t:"e",v:mo[P],w:P}):(M={t:"d",v:$a(P)},a.UTC&&(M.v=Ui(M.v)),a.cellDates||(M={t:"n",v:$t(M.v)}),M.z=a.dateNF||At[14]):M={t:"n",v:oo(P)})),M.z===void 0&&H!=null&&(M.z=H);var Z="",ie=O.getElementsByTagName("A");if(ie&&ie.length)for(var ve=0;ve<ie.length&&!(ie[ve].hasAttribute("href")&&(Z=ie[ve].getAttribute("href"),Z.charAt(0)!="#"));++ve);Z&&Z.charAt(0)!="#"&&Z.slice(0,11).toLowerCase()!="javascript:"&&(M.l={Target:Z}),r?(e["!data"][w+o]||(e["!data"][w+o]=[]),e["!data"][w+o][D+u]=M):e[ei({c:D+u,r:w+o})]=M,l.e.c<D+u&&(l.e.c=D+u),D+=V}}++w}return b.length&&(e["!merges"]=(e["!merges"]||[]).concat(b)),l.e.r=Math.max(l.e.r,w-1+o),e["!ref"]=pt(l),w>=c&&(e["!fullref"]=pt((l.e.r=i.length-C+w-1+o,l))),e}function ss(e,n){var t=n||{},i={};return t.dense&&(i["!data"]=[]),us(i,e,n)}function Yf(e,n){var t=Ug(ss(e,n),n);return t}function vo(e){var n="",t=Jf(e);return t&&(n=t(e).getPropertyValue("display")),n||(n=e.style&&e.style.display),n==="none"}function Jf(e){return e.ownerDocument.defaultView&&typeof e.ownerDocument.defaultView.getComputedStyle=="function"?e.ownerDocument.defaultView.getComputedStyle:typeof getComputedStyle=="function"?getComputedStyle:null}/*! sheetjs (C) 2013-present SheetJS -- http://sheetjs.com */(function(){try{return typeof Uint8Array>"u"||typeof Uint8Array.prototype.subarray>"u"?"slice":typeof Buffer<"u"?typeof Buffer.prototype.subarray>"u"?"slice":(typeof Buffer.from=="function"?Buffer.from([72,62]):new Buffer([72,62]))instanceof Uint8Array?"subarray":"slice":"subarray"}catch{return"slice"}})();function Zf(e){return function(t){for(var i=0;i!=e.length;++i){var a=e[i];t[a[0]]===void 0&&(t[a[0]]=a[1]),a[2]==="n"&&(t[a[0]]=Number(t[a[0]]))}}}function Qf(e){Zf([["cellDates",!1],["bookSST",!1],["bookType","xlsx"],["compression",!1],["WTF",!1]])(e)}function ep(e,n){e&&!e.SSF&&(e.SSF=si(At)),e&&e.SSF&&(ig(),ng(e.SSF),n.revssf=sg(e.SSF),n.revssf[e.SSF[65535]]=0,n.ssf=e.SSF),n.rels={},n.wbrels={},n.Strings=[],n.Strings.Count=0,n.Strings.Unique=0,Si?n.revStrings=new Map:(n.revStrings={},n.revStrings.foo=[],delete n.revStrings.foo);var t="xml",i=Ef.indexOf(n.bookType)>-1,a=Kg();Qf(n=n||{});var r=wg(),o="",u=0;if(n.cellXfs=[],rs(n.cellXfs,{},{revssf:{General:0}}),e.Props||(e.Props={}),o="docProps/core.xml",Se(r,o,Zg(e.Props,n)),a.coreprops.push(o),Ne(n.rels,2,o,Ce.CORE_PROPS),o="docProps/app.xml",!(e.Props&&e.Props.SheetNames))if(!e.Workbook||!e.Workbook.Sheets)e.Props.SheetNames=e.SheetNames;else{for(var s=[],c=0;c<e.SheetNames.length;++c)(e.Workbook.Sheets[c]||{}).Hidden!=2&&s.push(e.SheetNames[c]);e.Props.SheetNames=s}e.Props.Worksheets=e.Props.SheetNames.length,Se(r,o,ef(e.Props)),a.extprops.push(o),Ne(n.rels,3,o,Ce.EXT_PROPS),e.Custprops!==e.Props&&nn(e.Custprops||{}).length>0&&(o="docProps/custom.xml",Se(r,o,tf(e.Custprops)),a.custprops.push(o),Ne(n.rels,4,o,Ce.CUST_PROPS));var l=["SheetJ5"];for(n.tcid=0,u=1;u<=e.SheetNames.length;++u){var g={"!id":{}},b=e.Sheets[e.SheetNames[u-1]],h=(b||{})["!type"]||"sheet";switch(h){case"chart":default:o="xl/worksheets/sheet"+u+"."+t,Se(r,o,Pf(u-1,n,e,g)),a.sheets.push(o),Ne(n.wbrels,-1,"worksheets/sheet"+u+"."+t,Ce.WS[0])}if(b){var E=b["!comments"],C=!1,w="";if(E&&E.length>0){var S=!1;E.forEach(function(D){D[1].forEach(function(N){N.T==!0&&(S=!0)})}),S&&(w="xl/threadedComments/threadedComment"+u+".xml",Se(r,w,Cf(E,l,n)),a.threadedcomments.push(w),Ne(g,-1,"../threadedComments/threadedComment"+u+".xml",Ce.TCMNT)),w="xl/comments"+u+"."+t,Se(r,w,vf(E)),a.comments.push(w),Ne(g,-1,"../comments"+u+"."+t,Ce.CMNT),C=!0}b["!legacy"]&&C&&Se(r,"xl/drawings/vmlDrawing"+u+".vml",bf(u,b["!comments"])),delete b["!comments"],delete b["!legacy"]}g["!id"].rId1&&Se(r,Jg(o),ga(g))}return n.Strings!=null&&n.Strings.length>0&&(o="xl/sharedStrings."+t,Se(r,o,af(n.Strings,n)),a.strs.push(o),Ne(n.wbrels,-1,"sharedStrings."+t,Ce.SST)),o="xl/workbook."+t,Se(r,o,jf(e)),a.workbooks.push(o),Ne(n.rels,1,o,Ce.WB),o="xl/theme/theme1.xml",Se(r,o,pf(e.Themes,n)),a.themes.push(o),Ne(n.wbrels,-1,"theme/theme1.xml",Ce.THEME),o="xl/styles."+t,Se(r,o,ff(e,n)),a.styles.push(o),Ne(n.wbrels,-1,"styles."+t,Ce.STY),e.vbaraw&&i&&(o="xl/vbaProject.bin",Se(r,o,e.vbaraw),a.vba.push(o),Ne(n.wbrels,-1,"vbaProject.bin",Ce.VBA)),o="xl/metadata."+t,Se(r,o,mf()),a.metadata.push(o),Ne(n.wbrels,-1,"metadata."+t,Ce.XLMETA),l.length>1&&(o="xl/persons/person.xml",Se(r,o,yf(l)),a.people.push(o),Ne(n.wbrels,-1,"persons/person.xml",Ce.PEOPLE)),Se(r,"[Content_Types].xml",Yg(a,n)),Se(r,"_rels/.rels",ga(n.rels)),Se(r,"xl/_rels/workbook."+t+".rels",ga(n.wbrels)),delete n.revssf,delete n.ssf,r}function tp(e,n){switch(n.type){case"base64":case"binary":break;case"buffer":case"array":n.type="";break;case"file":return Tu(n.file,Et.write(e,{type:le?"buffer":""}));case"string":throw new Error("'string' output type invalid for '"+n.bookType+"' files");default:throw new Error("Unrecognized type "+n.type)}return Et.write(e,n)}function np(e,n){var t=si(n||{}),i=ep(e,t);return ip(i,t)}function ip(e,n){var t={},i=le?"nodebuffer":typeof Uint8Array<"u"?"array":"string";if(n.compression&&(t.compression="DEFLATE"),n.password)t.type=i;else switch(n.type){case"base64":t.type="base64";break;case"binary":t.type="string";break;case"string":throw new Error("'string' output type invalid for '"+n.bookType+"' files");case"buffer":case"file":t.type=i;break;default:throw new Error("Unrecognized type "+n.type)}var a=e.FullPaths?Et.write(e,{fileType:"zip",type:{nodebuffer:"buffer",string:"binary"}[t.type]||t.type,compression:!!n.compression}):e.generate(t);if(typeof Deno<"u"&&typeof a=="string"){if(n.type=="binary"||n.type=="base64")return a;a=new Uint8Array(lr(a))}return n.password&&typeof encrypt_agile<"u"?tp(encrypt_agile(a,n.password),n):n.type==="file"?Tu(n.file,a):n.type=="string"?Gg(a):a}function cs(e,n){$f(e);var t=si(n||{});if(t.cellStyles&&(t.cellNF=!0,t.sheetStubs=!0),t.type=="array"){t.type="binary";var i=cs(e,t);return t.type="array",lr(i)}return np(e,t)}function ap(e){if(!e.bookType){var n={xls:"biff8",htm:"html",slk:"sylk",socialcalc:"eth",Sh33tJS:"WTF"},t=e.file.slice(e.file.lastIndexOf(".")).toLowerCase();t.match(/^\.[a-z]+$/)&&(e.bookType=t.slice(1)),e.bookType=n[e.bookType]||e.bookType}}function rp(e,n,t){var i=t||{};return i.type="file",i.file=n,ap(i),cs(e,i)}function op(e,n,t,i,a,r,o){var u=gt(t),s=o.defval,c=o.raw||!Object.prototype.hasOwnProperty.call(o,"raw"),l=!0,g=e["!data"]!=null,b=a===1?[]:{};if(a!==1)if(Object.defineProperty)try{Object.defineProperty(b,"__rowNum__",{value:t,enumerable:!1})}catch{b.__rowNum__=t}else b.__rowNum__=t;if(!g||e["!data"][t])for(var h=n.s.c;h<=n.e.c;++h){var E=g?(e["!data"][t]||[])[h]:e[i[h]+u];if(E==null||E.t===void 0){if(s===void 0)continue;r[h]!=null&&(b[r[h]]=s);continue}var C=E.v;switch(E.t){case"z":if(C==null)break;continue;case"e":C=C==0?null:void 0;break;case"s":case"b":case"n":if(!E.z||!gr(E.z)||(C=hg(C),typeof C=="number"))break;case"d":o&&(o.UTC||o.raw===!1)||(C=Sg(new Date(C)));break;default:throw new Error("unrecognized type "+E.t)}if(r[h]!=null){if(C==null)if(E.t=="e"&&C===null)b[r[h]]=null;else if(s!==void 0)b[r[h]]=s;else if(c&&C===null)b[r[h]]=null;else continue;else b[r[h]]=(E.t==="n"&&typeof o.rawNumbers=="boolean"?o.rawNumbers:c)?C:li(E,C,o);C!=null&&(l=!1)}}return{row:b,isempty:l}}function Co(e,n){if(e==null||e["!ref"]==null)return[];var t={t:"n",v:0},i=0,a=1,r=[],o=0,u="",s={s:{r:0,c:0},e:{r:0,c:0}},c=n||{},l=c.range!=null?c.range:e["!ref"];switch(c.header===1?i=1:c.header==="A"?i=2:Array.isArray(c.header)?i=3:c.header==null&&(i=0),typeof l){case"string":s=Rt(l);break;case"number":s=Rt(e["!ref"]),s.s.r=l;break;default:s=l}i>0&&(a=0);var g=gt(s.s.r),b=[],h=[],E=0,C=0,w=e["!data"]!=null,S=s.s.r,D=0,N={};w&&!e["!data"][S]&&(e["!data"][S]=[]);var V=c.skipHidden&&e["!cols"]||[],L=c.skipHidden&&e["!rows"]||[];for(D=s.s.c;D<=s.e.c;++D)if(!(V[D]||{}).hidden)switch(b[D]=ft(D),t=w?e["!data"][S][D]:e[b[D]+g],i){case 1:r[D]=D-s.s.c;break;case 2:r[D]=b[D];break;case 3:r[D]=c.header[D-s.s.c];break;default:if(t==null&&(t={w:"__EMPTY",t:"s"}),u=o=li(t,null,c),C=N[o]||0,!C)N[o]=1;else{do u=o+"_"+C++;while(N[u]);N[o]=C,N[u]=1}r[D]=u}for(S=s.s.r+a;S<=s.e.r;++S)if(!(L[S]||{}).hidden){var q=op(e,s,S,b,i,r,c);(q.isempty===!1||(i===1?c.blankrows!==!1:c.blankrows))&&(h[E++]=q.row)}return h.length=E,h}var yo=/"/g;function up(e,n,t,i,a,r,o,u,s){for(var c=!0,l=[],g="",b=gt(t),h=e["!data"]!=null,E=h&&e["!data"][t]||[],C=n.s.c;C<=n.e.c;++C)if(i[C]){var w=h?E[C]:e[i[C]+b];if(w==null)g="";else if(w.v!=null){c=!1,g=""+(s.rawNumbers&&w.t=="n"?w.v:li(w,null,s));for(var S=0,D=0;S!==g.length;++S)if((D=g.charCodeAt(S))===a||D===r||D===34||s.forceQuotes){g='"'+g.replace(yo,'""')+'"';break}g=="ID"&&u==0&&l.length==0&&(g='"ID"')}else w.f!=null&&!w.F?(c=!1,g="="+w.f,g.indexOf(",")>=0&&(g='"'+g.replace(yo,'""')+'"')):g="";l.push(g)}if(s.strip)for(;l[l.length-1]==="";)--l.length;return s.blankrows===!1&&c?null:l.join(o)}function ls(e,n){var t=[],i=n??{};if(e==null||e["!ref"]==null)return"";for(var a=Rt(e["!ref"]),r=i.FS!==void 0?i.FS:",",o=r.charCodeAt(0),u=i.RS!==void 0?i.RS:`
`,s=u.charCodeAt(0),c="",l=[],g=i.skipHidden&&e["!cols"]||[],b=i.skipHidden&&e["!rows"]||[],h=a.s.c;h<=a.e.c;++h)(g[h]||{}).hidden||(l[h]=ft(h));for(var E=0,C=a.s.r;C<=a.e.r;++C)(b[C]||{}).hidden||(c=up(e,a,C,l,o,s,r,E,i),c!=null&&(c||i.blankrows!==!1)&&t.push((E++?u:"")+c));return t.join("")}function sp(e,n){n||(n={}),n.FS="	",n.RS=`
`;var t=ls(e,n);return t}function cp(e,n){var t="",i,a="";if(e==null||e["!ref"]==null)return[];var r=Rt(e["!ref"]),o="",u=[],s,c=[],l=e["!data"]!=null;for(s=r.s.c;s<=r.e.c;++s)u[s]=ft(s);for(var g=r.s.r;g<=r.e.r;++g)for(o=gt(g),s=r.s.c;s<=r.e.c;++s)if(t=u[s]+o,i=l?(e["!data"][g]||[])[s]:e[t],a="",i!==void 0){if(i.F!=null){if(t=i.F,!i.f)continue;a=i.f,t.indexOf(":")==-1&&(t=t+":"+t)}if(i.f!=null)a=i.f;else{if(n&&n.values===!1)continue;if(i.t=="z")continue;if(i.t=="n"&&i.v!=null)a=""+i.v;else if(i.t=="b")a=i.v?"TRUE":"FALSE";else if(i.w!==void 0)a="'"+i.w;else{if(i.v===void 0)continue;i.t=="s"?a="'"+i.v:a=""+i.v}}c[c.length]=t+"="+a}return c}function ds(e,n,t){var i=t||{},a=e?e["!data"]!=null:i.dense,r=+!i.skipHeader,o=e||{};!e&&a&&(o["!data"]=[]);var u=0,s=0;if(o&&i.origin!=null)if(typeof i.origin=="number")u=i.origin;else{var c=typeof i.origin=="string"?Dt(i.origin):i.origin;u=c.r,s=c.c}var l={s:{c:0,r:0},e:{c:s,r:u+n.length-1+r}};if(o["!ref"]){var g=Rt(o["!ref"]);l.e.c=Math.max(l.e.c,g.e.c),l.e.r=Math.max(l.e.r,g.e.r),u==-1&&(u=g.e.r+1,l.e.r=u+n.length-1+r)}else u==-1&&(u=0,l.e.r=n.length-1+r);var b=i.header||[],h=0,E=[];n.forEach(function(w,S){a&&!o["!data"][u+S+r]&&(o["!data"][u+S+r]=[]),a&&(E=o["!data"][u+S+r]),nn(w).forEach(function(D){(h=b.indexOf(D))==-1&&(b[h=b.length]=D);var N=w[D],V="z",L="",q=a?"":ft(s+h)+gt(u+S+r),O=a?E[s+h]:o[q];N&&typeof N=="object"&&!(N instanceof Date)?a?E[s+h]=N:o[q]=N:(typeof N=="number"?V="n":typeof N=="boolean"?V="b":typeof N=="string"?V="s":N instanceof Date?(V="d",i.UTC||(N=Ui(N)),i.cellDates||(V="n",N=$t(N)),L=O!=null&&O.z&&gr(O.z)?O.z:i.dateNF||At[14]):N===null&&i.nullError&&(V="e",N=0),O?(O.t=V,O.v=N,delete O.w,delete O.R,L&&(O.z=L)):a?E[s+h]=O={t:V,v:N}:o[q]=O={t:V,v:N},L&&(O.z=L))})}),l.e.c=Math.max(l.e.c,s+b.length-1);var C=gt(u);if(a&&!o["!data"][u]&&(o["!data"][u]=[]),r)for(h=0;h<b.length;++h)a?o["!data"][u][h+s]={t:"s",v:b[h]}:o[ft(h+s)+C]={t:"s",v:b[h]};return o["!ref"]=pt(l),o}function lp(e,n){return ds(null,e,n)}function Pi(e,n,t){if(typeof n=="string"){if(e["!data"]!=null){var i=Dt(n);return e["!data"][i.r]||(e["!data"][i.r]=[]),e["!data"][i.r][i.c]||(e["!data"][i.r][i.c]={t:"z"})}return e[n]||(e[n]={t:"z"})}return typeof n!="number"?Pi(e,ei(n)):Pi(e,ft(t||0)+gt(n))}function dp(e,n){if(typeof n=="number"){if(n>=0&&e.SheetNames.length>n)return n;throw new Error("Cannot find sheet # "+n)}else if(typeof n=="string"){var t=e.SheetNames.indexOf(n);if(t>-1)return t;throw new Error("Cannot find sheet name |"+n+"|")}else throw new Error("Cannot find sheet |"+n+"|")}function hp(e,n){var t={SheetNames:[],Sheets:{}};return e&&hs(t,e,n||"Sheet1"),t}function hs(e,n,t,i){var a=1;if(!t)for(;a<=65535&&e.SheetNames.indexOf(t="Sheet"+a)!=-1;++a,t=void 0);if(!t||e.SheetNames.length>=65535)throw new Error("Too many worksheets");if(i&&e.SheetNames.indexOf(t)>=0&&t.length<32){var r=t.match(/\d+$/);a=r&&+r[0]||0;var o=r&&t.slice(0,r.index)||t;for(++a;a<=65535&&e.SheetNames.indexOf(t=o+a)!=-1;++a);}if(os(t),e.SheetNames.indexOf(t)>=0)throw new Error("Worksheet with name |"+t+"| already exists!");return e.SheetNames.push(t),e.Sheets[t]=n,t}function gp(e,n,t){e.Workbook||(e.Workbook={}),e.Workbook.Sheets||(e.Workbook.Sheets=[]);var i=dp(e,n);switch(e.Workbook.Sheets[i]||(e.Workbook.Sheets[i]={}),t){case 0:case 1:case 2:break;default:throw new Error("Bad sheet visibility setting "+t)}e.Workbook.Sheets[i].Hidden=t}function fp(e,n){return e.z=n,e}function gs(e,n,t){return n?(e.l={Target:n},t&&(e.l.Tooltip=t)):delete e.l,e}function pp(e,n,t){return gs(e,"#"+n,t)}function mp(e,n,t){e.c||(e.c=[]),e.c.push({t:n,a:t||"SheetJS"})}function bp(e,n,t,i){for(var a=typeof n!="string"?n:Rt(n),r=typeof n=="string"?n:pt(n),o=a.s.r;o<=a.e.r;++o)for(var u=a.s.c;u<=a.e.c;++u){var s=Pi(e,o,u);s.t="n",s.F=r,delete s.v,o==a.s.r&&u==a.s.c&&(s.f=t,i&&(s.D=!0))}var c=hn(e["!ref"]);return c.s.r>a.s.r&&(c.s.r=a.s.r),c.s.c>a.s.c&&(c.s.c=a.s.c),c.e.r<a.e.r&&(c.e.r=a.e.r),c.e.c<a.e.c&&(c.e.c=a.e.c),e["!ref"]=pt(c),e}var pa={encode_col:ft,encode_row:gt,encode_cell:ei,encode_range:pt,decode_col:zg,decode_row:Bg,split_cell:jg,decode_cell:Dt,decode_range:hn,format_cell:li,sheet_new:qg,sheet_add_aoa:as,sheet_add_json:ds,sheet_add_dom:us,aoa_to_sheet:Wg,json_to_sheet:lp,table_to_sheet:ss,table_to_book:Yf,sheet_to_csv:ls,sheet_to_txt:sp,sheet_to_json:Co,sheet_to_html:Kf,sheet_to_formulae:cp,sheet_to_row_object_array:Co,sheet_get_cell:Pi,book_new:hp,book_append_sheet:hs,book_set_sheet_visibility:gp,cell_set_number_format:fp,cell_set_hyperlink:gs,cell_set_internal_link:pp,cell_add_comment:mp,sheet_set_array_formula:bp,consts:{SHEET_VISIBLE:0,SHEET_HIDDEN:1,SHEET_VERY_HIDDEN:2}};function Kn(e,n){if(n in e&&e[n]&&typeof e[n]!="object"&&typeof e[n]!="function")return String(e[n])}function kp(e){const n="accessorKey";return e.filter(t=>{var i;return Kn(t,n)&&!((i=t.meta)!=null&&i.skipOnExport)}).map(t=>Kn(t,n))}function fs(e){const n="accessorKey",t="header";return e.filter(i=>{var a;return Kn(i,n)&&!((a=i.meta)!=null&&a.skipOnExport)}).map(i=>Kn(i,t)||Kn(i,n))}function ps({data:e,columnDefinitions:n}){const t=kp(n);return e.map(i=>{const a=i,r=[];return t.forEach(o=>{if(!o){r.push("");return}r.push(a[o])}),r})}function vp({columnDefinitions:e,fileName:n="Table",data:t}){if(Gn()){const i=ps({data:t,columnDefinitions:e}),o=[fs(e),...i].map(g=>g.map(b=>b===void 0?'""':`"${b}"`).join(",")).join(`
`),u=new Uint8Array([239,187,191]),s=new Blob([u,o],{type:"text/csv"}),c=URL.createObjectURL(s),l=Object.assign(document.createElement("a"),{target:"_blank",href:c,download:n});return l.click(),l.remove(),o}return""}function Cp({columnDefinitions:e,fileName:n="Table",data:t}){const i=ps({data:t,columnDefinitions:e}),a=fs(e),r=pa.book_new(),o=pa.aoa_to_sheet([a,...i]);return pa.book_append_sheet(r,o),rp(r,`${n}.xlsx`),o}const pr={table:"table",toaster:"toaster",selected:"selected-state"};var Bi=(e=>(e.Small="small",e.Full="full",e))(Bi||{});const Eo=Object.keys(cr);function In(e,n){return Math.floor(Math.random()*(n-e+1)+e)}const yp=new Intl.NumberFormat("ru-RU",{minimumFractionDigits:2});function mr(e,n){const t=[];for(let i=0;i<e;++i){const a=new Date(Math.floor(Math.random()*1e13)).setFullYear(In(1980,2030),In(1,12),In(1,30));t.push({status:i===3?"Not":Eo[In(0,Eo.length-1)],subRows:n&&n.level>0?mr(n.count,{count:n.count,level:n.level-1}):void 0,tree:n&&n.level>0?`Tree cell ${n.level}.${i}`:`Item ${i}`,col1:i*5,col2:i*5+1,col3:i*5+2,col4:i*5+3,col5:i*5+4,col6:In(1e5,999999.99),date:a})}return t}const Ep=[{label:"tag1xxx",appearance:"red"},{label:"tag2x",appearance:"yellow"},{label:"tag3xxxxx",appearance:"orange"},{label:"tag4xx",appearance:"green"},{label:"tag5xxx",appearance:"blue"},{label:"tag6x",appearance:"pink"}],Ut=e=>`Table column №${e.column.id}`,Mn=e=>`Column №${e}`,Cn=e=>n=>`Cell ${Math.trunc(Number(n[e])/5)+1}.${Number(n[e])%5+1}`;function qa({rowAutoHeight:e,statusSortEnabled:n,showActionsColumn:t,statusColumnViewMode:i}){return y.useMemo(()=>{let a=[{id:"1",accessorKey:"col1",accessorFn:Cn("col1"),header:Ut,columnSettings:{label:Mn("1"),mode:"hidden"},size:140,enableSorting:!0,enableResizing:!0,sortDescFirst:!0,pinned:"left"},{id:"2",accessorKey:"col2",accessorFn:Cn("col2"),header:Ut,columnSettings:{label:Mn("2"),mode:"defaultFalse"},size:200,minSize:150,maxSize:300,pinned:"left",enableSorting:!0,enableResizing:!0},{id:"3",accessorKey:"col3",header:Ut,columnSettings:{label:Mn("3"),mode:"defaultTrue"},accessorFn:e?void 0:Cn("col3"),cell:r=>r.row.index===1&&e?"super-duper puper super-duper puper super-duper puper super-duper puper super-duper puper super-duper puper super-duper puper super-duper puper super-duper puper super-duper puper":Cn("col3")(r.row.original),minSize:110,sortDescFirst:!0,enableResizing:!0},{id:"4",accessorKey:"col4",accessorFn:Cn("col4"),header:Ut,enableSorting:!0,enableResizing:!0},{id:"5",accessorKey:"col5",header:Ut,columnSettings:{label:Mn("5"),mode:"defaultFalse"},accessorFn:Cn("col5"),cell:r=>R.jsx(La,{value:r.getValue()}),enableSorting:!0,enableResizing:!0},{id:"6",accessorKey:"col6",cell:r=>yp.format(r.getValue()),header:Ut,columnSettings:{label:"Price"},size:150,headerAlign:"right",align:"right",enableSorting:!0,enableResizing:!0},{id:"7",accessorKey:"col7",cell:()=>R.jsx(vs,{items:Ep,rowLimit:1}),header:Ut,columnSettings:{label:"Tags"},size:230},{id:"8",accessorKey:"date",header:Ut,columnSettings:{label:Mn("8")},enableSorting:!0,enableResizing:!0,size:146,headerAlign:"right",align:"right",pinned:"right",sortingFn:(r,o)=>r.original.date-o.original.date,accessorFn:r=>new Date(r.date).toLocaleDateString("ru-RU",{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"})}];if(i){const r=i===Bi.Full?{header:"Status",size:110,renderDescription:(o,u)=>u.status==="Not"?"Custom status":o,enableResizing:!0}:{};a=[qe.getStatusColumnDef({accessorKey:"status",mapStatusToAppearance:o=>qe.statusAppearances[o],enableSorting:n,...r}),...a]}if(t){const r=({rowId:o,itemId:u})=>{_o.userAction.success({label:`${o} ${u}`,"data-test-id":pr.toaster})};a.push(qe.getRowActionsColumnDef({pinned:!0,actionsGenerator:o=>[{id:"action-1",content:{option:"action 1"},onClick:()=>r({rowId:o.row.id,itemId:"action-1"}),"data-test-id":"test-custom"},{id:"action-2",content:{option:"action 2"},onClick:()=>r({rowId:o.row.id,itemId:"action-2"})},{id:"action-3",content:{option:"action 3"},onClick:()=>r({rowId:o.row.id,itemId:"action-3"})},{id:"group-1",type:"group",items:[{id:"action-4",content:{option:"action 4"},onClick:()=>r({rowId:o.row.id,itemId:"action-4"})}],divider:!0}]}))}return a},[e,t,i,n])}function Wa({rowsAmount:e,infiniteLoading:n,filteredData:t,setFilteredData:i,dataError:a}){const r=y.useRef(),o=y.useRef(),u=y.useRef(null),[s,c]=y.useState(!0),[l,g]=y.useState(!1),b=e+20;y.useEffect(()=>{if(n&&t.length>b){c(!1),g(!1),clearTimeout(o.current);return}},[b,t.length,n]);const h=y.useCallback(async()=>{a||!t.length||t.length>b||(g(!0),o.current=setTimeout(()=>{i(E=>E.concat(mr(10))),g(!1)},2e3))},[a,t.length,b,i]);return y.useEffect(()=>{if(!n)return;const E=C=>{C[0].isIntersecting&&s&&!l&&h()};return r.current=new IntersectionObserver(E),u.current&&r.current.observe(u.current),()=>{r.current&&r.current.disconnect()}},[h,s,n,l]),{loading:l,scrollRef:u}}try{qa.displayName="useTableColumnDefinitions",qa.__docgenInfo={description:"",displayName:"useTableColumnDefinitions",props:{rowAutoHeight:{defaultValue:null,description:"",name:"rowAutoHeight",required:!1,type:{name:"boolean"}},statusSortEnabled:{defaultValue:null,description:"",name:"statusSortEnabled",required:!0,type:{name:"boolean"}},showActionsColumn:{defaultValue:null,description:"",name:"showActionsColumn",required:!1,type:{name:"boolean"}},statusColumnViewMode:{defaultValue:null,description:"",name:"statusColumnViewMode",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"full"'}]}}}}}catch{}try{Wa.displayName="useInfiniteLoading",Wa.__docgenInfo={description:"",displayName:"useInfiniteLoading",props:{rowsAmount:{defaultValue:null,description:"",name:"rowsAmount",required:!0,type:{name:"number"}},infiniteLoading:{defaultValue:null,description:"",name:"infiniteLoading",required:!1,type:{name:"boolean"}},filteredData:{defaultValue:null,description:"",name:"filteredData",required:!0,type:{name:"StubData[]"}},setFilteredData:{defaultValue:null,description:"",name:"setFilteredData",required:!0,type:{name:"Dispatch<SetStateAction<StubData[]>>"}},dataError:{defaultValue:null,description:"",name:"dataError",required:!1,type:{name:"boolean"}}}}}catch{}const Sp="_wrapper_km5hp_1",So={wrapper:Sp},em={title:"Components/Table",component:qe},ma=["0","2"],wp={defaultValue:{single:"op1",multiple:["op1"]},filters:[{id:"single",type:"single",label:"Single",pinned:!0,options:[{value:"op1",label:"Option 1"},{value:"op2",label:"Option 2"},{value:"op3",label:"Option 3 "}]},{id:"multiple",type:"multiple",label:"Multiple",pinned:!0,options:[{value:"op1",label:"Option 1"},{value:"op2",label:"Option 2"},{value:"op3",label:"Option 3 "}]},{id:"date",type:"date",label:"Date"},{id:"dateRange",type:"date-range",label:"Date Range"}]},xp=({rowsAmount:e,expandRowsLevel:n,expandRowsCount:t,disableSomeRows:i,pinSomeRows:a,statusColumnViewMode:r,showTableTree:o,showActionsColumn:u,rowSelectionMode:s,enableOnRowClick:c,showExport:l,showFilters:g,infiniteLoading:b,rowAutoHeight:h,enableColumnsOrderSortByDrag:E,showColumnsSettings:C,columnFilters:w,initialColumnFiltersOpen:S,...D})=>{const N=y.useMemo(()=>mr(e,{count:t,level:o?n:0}),[e,n,t,o]),[V,L]=y.useState(N);y.useEffect(()=>{L(N)},[N]);const{loading:q,scrollRef:O}=Wa({rowsAmount:e,infiniteLoading:b,filteredData:V,setFilteredData:L,dataError:D.dataError}),P=y.useCallback((ce,se)=>{L(mt=>mt.filter((Ke,ae)=>!(ce!=null&&ce[ae]))),se()},[]),H=qa({rowAutoHeight:h,statusColumnViewMode:r,showActionsColumn:u,statusSortEnabled:D.statusSortEnabled}),j=(ce,se)=>{_o.userAction.success({label:`clicked row ${se.id}`})},M=()=>{L(N)},X=a&&D.keepPinnedRows,Z=y.useMemo(()=>{const ce=se=>Number(se)-(X&&!D.copyPinnedRows?ma.length:0);return se=>`${ce(se)}${X?` + ${ma.length}`:""}`},[D.copyPinnedRows,X]),ie=y.useMemo(()=>{const ce={};return E&&(ce.enableDrag=!0),C&&(ce.enableSettingsMenu=!0),b?{...D,columnsSettings:ce,infiniteLoading:b,pagination:void 0,manualPagination:void 0,suppressPagination:void 0,pageCount:void 0,autoResetPageIndex:void 0}:{...D,columnsSettings:ce,pagination:{options:[5,10,100],optionsRender:Z}}},[D,E,b,Z,C]),ve=y.useMemo(()=>{if(!(!g||!w))return{...w,initialOpen:S}},[w,S,g]),[it,ue]=y.useState({});return y.useEffect(()=>{ue({})},[s]),R.jsxs("div",{className:So.wrapper,children:[R.jsx(qe,{...ie,loading:D.loading||q,rowAutoHeight:h,columnDefinitions:H,data:V,bulkActions:[{label:"Delete",icon:Bs,onClick:P}],className:So.className,expanding:o?{getSubRows:ce=>ce.subRows,expandingColumnDefinition:{showToggle:!!s,accessorKey:"tree",header:"Tree column"}}:void 0,rowSelection:{multiRow:s==="multi",enable:i?ce=>!["Not","Loading"].includes(ce.original.status):!!s||void 0,onChange:ue},onRefresh:M,onRowClick:c?j:void 0,rowPinning:a?{top:ma}:void 0,exportSettings:l?{fileName:"test-export",exportToCSV:vp,exportToXLSX:Cp}:void 0,columnFilters:ve,scrollRef:O}),R.jsx("div",{"data-test-id":pr.selected,style:{opacity:0,height:1},children:JSON.stringify(it)})]})},yi={render:xp,args:{suppressPagination:!1,suppressToolbar:!1,suppressSearch:!1,showFilters:!0,columnFilters:wp,initialColumnFiltersOpen:!0,rowsAmount:35,expandRowsCount:3,expandRowsLevel:3,loading:!1,statusColumnViewMode:Bi.Full,statusSortEnabled:!0,showActionsColumn:!0,showTableTree:!1,data:[],rowSelection:{enable:!0,multiRow:!0},rowSelectionMode:"multi",disableSomeRows:!1,onRowClick:()=>{},enableOnRowClick:!1,enableFuzzySearch:!1,"data-test-id":pr.table,showExport:!1,pinSomeRows:!1,savedState:{id:"snack-ui-table-storybook",resize:!0,filterQueryKey:"filterKey",columnSettings:!0},enableColumnsOrderSortByDrag:!0,showColumnsSettings:!0},argTypes:{expandRowsCount:{name:"[Stories]: Amount of subRows ",control:{type:"range",min:0,max:10,step:1}},expandRowsLevel:{name:"[Stories]: Level of  subRows ",control:{type:"range",min:0,max:5,step:1}},rowsAmount:{name:"[Stories]: Amount of rows within the table",description:"demonstration purposes only, this parameter does not exist in component",control:{type:"range",min:0,max:100,step:1}},disableSomeRows:{name:"[Stories]: Make some rows disabled",control:{type:"boolean"},if:{arg:"rowSelectionMode",truthy:!0}},statusColumnViewMode:{name:"[Stories]: Show Status",options:[void 0,...Object.values(Bi)],control:{type:"select"}},showTableTree:{name:"[Stories]: Show tree column",control:{type:"boolean"}},statusSortEnabled:{name:"[Stories]: enable sort by status column"},showActionsColumn:{name:"[Stories]: Show RowActions",control:{type:"boolean"}},rowSelection:{name:"rowSelection",description:"Disabled for storybook and tests purpose",control:{disable:!0}},rowSelectionMode:{name:"[Stories]: Choose row selection mode",options:[void 0,"multi","single"],control:{type:"select"}},enableOnRowClick:{name:"[Stories]: Enable row click",control:{type:"boolean"}},onRowClick:{control:{disable:!0}},pinSomeRows:{name:"[Stories]: Pin 1st and 3rd row",controls:{type:"boolean"}},showExport:{name:"[Stories]: Show export example",controls:{type:"boolean"}},showFilters:{name:"[Stories]: Show filters example",controls:{type:"boolean"}},columnFilters:{if:{arg:"showFilters",eq:!0}},initialColumnFiltersOpen:{name:"[Stories]: Initial show column filters state value",controls:{type:"boolean"},if:{arg:"showFilters",eq:!0}},pagination:{control:{disable:!0},if:{arg:"infiniteLoading",neq:!0}},manualPagination:{if:{arg:"infiniteLoading",neq:!0}},suppressPagination:{if:{arg:"infiniteLoading",neq:!0}},pageCount:{if:{arg:"infiniteLoading",neq:!0}},autoResetPageIndex:{if:{arg:"infiniteLoading",neq:!0}},savedState:{name:"[Stories]: Save resize state in local storage",controls:{type:"object"}},enableColumnsOrderSortByDrag:{name:"[Stories]: Enable columns order sort by drag",controls:{type:"boolean"}},showColumnsSettings:{name:"[Stories]: Show columns settings",controls:{type:"boolean"}}},parameters:{controls:{expanded:!0},readme:{sidebar:[`Latest version: ${Cr.version}`,Ws,js]},packageName:Cr.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A225842&mode=design"}}};var wo,xo,Ao;yi.parameters={...yi.parameters,docs:{...(wo=yi.parameters)==null?void 0:wo.docs,source:{originalSource:`{
  render: Template,
  args: {
    suppressPagination: false,
    suppressToolbar: false,
    suppressSearch: false,
    showFilters: true,
    columnFilters,
    initialColumnFiltersOpen: true,
    rowsAmount: 35,
    expandRowsCount: 3,
    expandRowsLevel: 3,
    loading: false,
    statusColumnViewMode: StoryStatusColumnViewMode.Full,
    statusSortEnabled: true,
    showActionsColumn: true,
    showTableTree: false,
    data: [],
    rowSelection: {
      enable: true,
      multiRow: true
    },
    rowSelectionMode: 'multi',
    disableSomeRows: false,
    onRowClick: () => {},
    enableOnRowClick: false,
    enableFuzzySearch: false,
    'data-test-id': STORY_TEST_IDS.table,
    showExport: false,
    pinSomeRows: false,
    savedState: {
      id: 'snack-ui-table-storybook',
      resize: true,
      filterQueryKey: 'filterKey',
      columnSettings: true
    },
    enableColumnsOrderSortByDrag: true,
    showColumnsSettings: true
  },
  argTypes: {
    expandRowsCount: {
      name: '[Stories]: Amount of subRows ',
      control: {
        type: 'range',
        min: 0,
        max: 10,
        step: 1
      }
    },
    expandRowsLevel: {
      name: '[Stories]: Level of  subRows ',
      control: {
        type: 'range',
        min: 0,
        max: 5,
        step: 1
      }
    },
    rowsAmount: {
      name: '[Stories]: Amount of rows within the table',
      description: 'demonstration purposes only, this parameter does not exist in component',
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1
      }
    },
    disableSomeRows: {
      name: '[Stories]: Make some rows disabled',
      control: {
        type: 'boolean'
      },
      if: {
        arg: 'rowSelectionMode',
        truthy: true
      }
    },
    statusColumnViewMode: {
      name: '[Stories]: Show Status',
      options: [undefined, ...Object.values(StoryStatusColumnViewMode)],
      control: {
        type: 'select'
      }
    },
    showTableTree: {
      name: '[Stories]: Show tree column',
      control: {
        type: 'boolean'
      }
    },
    statusSortEnabled: {
      name: '[Stories]: enable sort by status column'
    },
    showActionsColumn: {
      name: '[Stories]: Show RowActions',
      control: {
        type: 'boolean'
      }
    },
    rowSelection: {
      name: 'rowSelection',
      description: 'Disabled for storybook and tests purpose',
      control: {
        disable: true
      }
    },
    rowSelectionMode: {
      name: '[Stories]: Choose row selection mode',
      options: [undefined, 'multi', 'single'],
      control: {
        type: 'select'
      }
    },
    enableOnRowClick: {
      name: '[Stories]: Enable row click',
      control: {
        type: 'boolean'
      }
    },
    onRowClick: {
      control: {
        disable: true
      }
    },
    pinSomeRows: {
      name: '[Stories]: Pin 1st and 3rd row',
      controls: {
        type: 'boolean'
      }
    },
    showExport: {
      name: '[Stories]: Show export example',
      controls: {
        type: 'boolean'
      }
    },
    showFilters: {
      name: '[Stories]: Show filters example',
      controls: {
        type: 'boolean'
      }
    },
    columnFilters: {
      if: {
        arg: 'showFilters',
        eq: true
      }
    },
    initialColumnFiltersOpen: {
      name: '[Stories]: Initial show column filters state value',
      controls: {
        type: 'boolean'
      },
      if: {
        arg: 'showFilters',
        eq: true
      }
    },
    pagination: {
      control: {
        disable: true
      },
      if: {
        arg: 'infiniteLoading',
        neq: true
      }
    },
    manualPagination: {
      if: {
        arg: 'infiniteLoading',
        neq: true
      }
    },
    suppressPagination: {
      if: {
        arg: 'infiniteLoading',
        neq: true
      }
    },
    pageCount: {
      if: {
        arg: 'infiniteLoading',
        neq: true
      }
    },
    autoResetPageIndex: {
      if: {
        arg: 'infiniteLoading',
        neq: true
      }
    },
    savedState: {
      name: '[Stories]: Save resize state in local storage',
      controls: {
        type: 'object'
      }
    },
    enableColumnsOrderSortByDrag: {
      name: '[Stories]: Enable columns order sort by drag',
      controls: {
        type: 'boolean'
      }
    },
    showColumnsSettings: {
      name: '[Stories]: Show columns settings',
      controls: {
        type: 'boolean'
      }
    }
  },
  parameters: {
    controls: {
      expanded: true
    },
    readme: {
      sidebar: [\`Latest version: \${componentPackage.version}\`, componentReadme, componentChangelog]
    },
    packageName: componentPackage.name,
    design: {
      name: 'Figma',
      type: 'figma',
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A225842&mode=design'
    }
  }
}`,...(Ao=(xo=yi.parameters)==null?void 0:xo.docs)==null?void 0:Ao.source}}};export{em as default,yi as table};
