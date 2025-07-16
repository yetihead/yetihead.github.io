import{j as n}from"./jsx-runtime-BTJTZTIL.js";import{c as s}from"./index-DUmpqB7p.js";import{u as h}from"./index-Cn1GTkdY.js";import{B as d}from"./brand.module-Bbx_dckN.js";import{r as l}from"./index-CJ_LmFaV.js";import{B as c}from"./ButtonFilled-DhU1yp3w.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-BQ2KraVq.js";import"./utils-Ct1D1GSP.js";import"./Counter-dO15w468.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./Sun-CLMO8Tpr.js";import"./constants-BAH7I9kc.js";function b(e){return!!e.defaultTheme}function o(e){const[t,a]=l.useState(b(e)?e.defaultTheme:void 0);return{theme:t,themeClassName:t?e.themeMap[t]:void 0,changeTheme:a}}try{o.displayName="useThemeConfig",o.__docgenInfo={description:"Хук для работы с темами",displayName:"useThemeConfig",props:{themeMap:{defaultValue:null,description:"Объект с указанием соответсвия темы и css-класса",name:"themeMap",required:!0,type:{name:"Record<T, string>"}}}}}catch{}const p=`# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 3.10.0 (2025-07-15)


### Features

* **PDS-2594:** add CloseWatcher using in modals and drawers ([7699e55](https://github.com/cloud-ru-tech/snack-uikit/commit/7699e55dc172f6082369b6fb83815c12d28b3f7a))





# 3.9.0 (2025-07-07)


### Features

* **PDS-2556:** add usePopstateSubscription hook ([4668d08](https://github.com/cloud-ru-tech/snack-uikit/commit/4668d08baef399421ea274437bf1e4218be259ff))





## 3.8.2 (2025-05-16)


### Bug Fixes

* **FF-6587:** change queryParams instead of push new ([987d99a](https://github.com/cloud-ru-tech/snack-uikit/commit/987d99a439bfb147d015a73c7416ae76b6e568ea))





## 3.8.1 (2025-03-17)


### Bug Fixes

* **VMWDEV-2271:** fix timerId ([14fa135](https://github.com/cloud-ru-tech/snack-uikit/commit/14fa1351d12b76912b696aeaa6fcc7ce8d62d1b1))





# 3.8.0 (2025-03-04)


### Features

* **PDS-681:** add save filter ([1406c6c](https://github.com/cloud-ru-tech/snack-uikit/commit/1406c6c447f337b5140135f8741b52ed1a0dfbf0))





# 3.7.0 (2025-01-23)


### Features

* **PDS-926:** add useDynamicList hook ([1d95c09](https://github.com/cloud-ru-tech/snack-uikit/commit/1d95c0969ef96e7b891e927543a38b0929edc760))





# 3.6.0 (2024-12-12)


### Features

* **FF-5782:** sass use/forward approach ([3e53869](https://github.com/cloud-ru-tech/snack-uikit/commit/3e53869ace864a7718e434b7f410c15dbd911cd5))
* **PDS-1047:** add useSwipe hook ([94c92a4](https://github.com/cloud-ru-tech/snack-uikit/commit/94c92a4112f599797354a90bbaa62604c73f4553))





# 3.5.0 (2024-10-28)


### Features

* **FF-5502:** add cjs build ([ffada28](https://github.com/cloud-ru-tech/snack-uikit/commit/ffada28bfdc37ea760eb1c8759342e680bdf8dd6))





# 3.4.0 (2024-09-23)


### Bug Fixes

* **PDS-480:** remove direct usage of browser api elements ([1231ff7](https://github.com/cloud-ru-tech/snack-uikit/commit/1231ff7ab7a1b210b579a7b694633ef23bffcf44))
* **PDS-480:** replace useLayoutEffect -> useIsomorphicLayoutEffect for ssr ([21aa9ad](https://github.com/cloud-ru-tech/snack-uikit/commit/21aa9ad9f113e465766339d396924357ccb1d432))


### Features

* **PDS-480:** add isomorphic layoutEffect and isBrowser predicate ([057ce9d](https://github.com/cloud-ru-tech/snack-uikit/commit/057ce9d98564dc33085f031bace53f97c76d22c0))





# 3.3.0 (2024-04-23)


### Features

* **PDS-59:** add useValueControl hook for uncontrollable props ([596017a](https://github.com/cloud-ru-tech/snack-uikit/commit/596017a2fdd990bfb83637f6c4286b35e145e8bc))





# 3.2.0 (2023-12-14)


### Features

* **FF-3729:** add utility type ValueOf ([73259c3](https://github.com/cloud-ru-tech/snack-uikit/commit/73259c3d30f6256388be02df3167f381ce95879e))





# 3.1.0 (2023-12-06)


### Features

* **FF-3646:** add ThemeProvider/useThemeContext ([9a2ae54](https://github.com/cloud-ru-tech/snack-uikit/commit/9a2ae5425b6356bede25c89b3b14e60d9e8e9f75))





# 3.0.0 (2023-12-06)


### Bug Fixes

* **FF-0:** enhance typings for useThemeConfig ([949fefc](https://github.com/cloud-ru-tech/snack-uikit/commit/949fefc19066087769ebd64b03ab41ad0246d0b2))
* **FF-1486:** import theme styles in config provider ([ad73d14](https://github.com/cloud-ru-tech/snack-uikit/commit/ad73d149dbbdaec1c360a4765e9c4e9bb91cbed3))
* **FF-1486:** simplify ts-configs ([3aada76](https://github.com/cloud-ru-tech/snack-uikit/commit/3aada76e6220fa35d4866f830cb934c95d9bc91e))
* **FF-1486:** use real versions ([252b349](https://github.com/cloud-ru-tech/snack-uikit/commit/252b3494f9a4302d8fb5b54ac879ed1ef3e6f68c))
* **FF-2255:** new palette migration ([f3bc490](https://github.com/cloud-ru-tech/snack-uikit/commit/f3bc490bb4ddde4353009b55da2d04f87a7d9de9))
* **FF-2257:** up utils ([5dd5d28](https://github.com/cloud-ru-tech/snack-uikit/commit/5dd5d28cdbe14973dcc36759e7db003249930a4b))


### Features

* **FF-1486:** add token map ([a14a1e1](https://github.com/cloud-ru-tech/snack-uikit/commit/a14a1e1f1ad95e80a4fb664a2a9c5324a33dad48))
* **FF-1486:** build with ts-node (only scss, without linaria) ([298d5d0](https://github.com/cloud-ru-tech/snack-uikit/commit/298d5d0b42788747e9aa34ffef254411a79ed25f))
* **FF-1486:** initial storybook ([a50bc6c](https://github.com/cloud-ru-tech/snack-uikit/commit/a50bc6c84bf47026681c2e5eaf78e15a34747180))
* **FF-1486:** try to build packages with scss ([fae6769](https://github.com/cloud-ru-tech/snack-uikit/commit/fae67699b3a153d09c7e3b7b34580d96a3cfe14b))
* **FF-1486:** use preview package of figma tokens ([c43bbc6](https://github.com/cloud-ru-tech/snack-uikit/commit/c43bbc65d7de9c686bc83950f7a2c74c780bee69))
* **FF-1650:** hot reload in storybook ([935d398](https://github.com/cloud-ru-tech/snack-uikit/commit/935d398c256c96fa2a37bcc68991701edef16b58))
* **FF-1684:** utils package has been introduced ([e3bc345](https://github.com/cloud-ru-tech/snack-uikit/commit/e3bc345c0b32cfc518a17416a00ad880e351f03b))
* **FF-1800:** esbuild & light/dark theme selector ([bf5d288](https://github.com/cloud-ru-tech/snack-uikit/commit/bf5d288c17452a481820e7430db0806658f56e0c))
* **FF-1870:** component props processors has been added ([05fe56d](https://github.com/cloud-ru-tech/snack-uikit/commit/05fe56d43ba10713e3af24c4d6b51c38846625a9))
* **FF-2485:** add useEvent and useDebounce hooks ([978484a](https://github.com/cloud-ru-tech/snack-uikit/commit/978484a5a7a28391d69875df6ecd03570a29a406))
* **FF-875:** add utils for dependencies graph ([53cd7be](https://github.com/cloud-ru-tech/snack-uikit/commit/53cd7be638f01e573cb52b2417a39f4df4f6089b))
* infrastructure improvements ([ae537b5](https://github.com/cloud-ru-tech/snack-uikit/commit/ae537b5e37c0050f800c367da290f4f4e30d22ab))
* **LK-1769:** jest to vitest ([9afff90](https://github.com/cloud-ru-tech/snack-uikit/commit/9afff90db1e60c2255361b396c096c14f923d676))


### BREAKING CHANGES


* **FF-3823:** move to snack-uikit scope ([ac9e30d](https://github.com/cloud-ru-tech/snack-uikit/commit/ac9e30d574d529b2bf4f5184b70c511c981a6032))
* **FF-0000:** insert (extract/exclude)DataProps into (extract/exclude)SupportProps ([7aca240](https://github.com/cloud-ru-tech/snack-uikit/commit/7aca2408d5703e0ff440bfd1cde4c8dac6b25cf1))




## 2.0.1 (2023-11-08)

**Note:** Version bump only for package @snack-uikit/utils





# 2.0.0 (2023-10-31)


### BREAKING CHANGES


* **FF-0000:** insert (extract/exclude)DataProps into (extract/exclude)SupportProps ([7aca240](https://github.com/cloud-ru-tech/snack-uikit/commit/7aca2408d5703e0ff440bfd1cde4c8dac6b25cf1))




# 1.3.0 (2023-10-25)


### Features

* **FF-875:** add utils for dependencies graph ([53cd7be](https://github.com/cloud-ru-tech/snack-uikit/commit/53cd7be638f01e573cb52b2417a39f4df4f6089b))





# 1.2.0 (2023-06-20)


### Features

* **FF-2485:** add useEvent and useDebounce hooks ([978484a](https://github.com/cloud-ru-tech/snack-uikit/commit/978484a5a7a28391d69875df6ecd03570a29a406))





## 1.1.1 (2023-06-14)


### Bug Fixes

* **FF-0:** enhance typings for useThemeConfig ([949fefc](https://github.com/cloud-ru-tech/snack-uikit/commit/949fefc19066087769ebd64b03ab41ad0246d0b2))





# 1.1.0 (2023-05-26)


### Bug Fixes

* **FF-2255:** new palette migration ([f3bc490](https://github.com/cloud-ru-tech/snack-uikit/commit/f3bc490bb4ddde4353009b55da2d04f87a7d9de9))
* **FF-2257:** up utils ([5dd5d28](https://github.com/cloud-ru-tech/snack-uikit/commit/5dd5d28cdbe14973dcc36759e7db003249930a4b))


### Features

* **LK-1769:** jest to vitest ([9afff90](https://github.com/cloud-ru-tech/snack-uikit/commit/9afff90db1e60c2255361b396c096c14f923d676))





## 0.2.2 (2023-04-07)

**Note:** Version bump only for package @snack-uikit/utils





## 0.2.1 (2023-03-14)

**Note:** Version bump only for package @snack-uikit/utils





# 0.2.0 (2023-03-06)


### Features

* **FF-1800:** esbuild & light/dark theme selector ([bf5d288](https://github.com/cloud-ru-tech/snack-uikit/commit/bf5d288c17452a481820e7430db0806658f56e0c))
* **FF-1870:** component props processors has been added ([05fe56d](https://github.com/cloud-ru-tech/snack-uikit/commit/05fe56d43ba10713e3af24c4d6b51c38846625a9))





# 0.1.0 (2023-02-17)


### Bug Fixes

* **FF-1486:** use real versions ([252b349](https://github.com/cloud-ru-tech/snack-uikit/commit/252b3494f9a4302d8fb5b54ac879ed1ef3e6f68c))


### Features

* **FF-1650:** hot reload in storybook ([935d398](https://github.com/cloud-ru-tech/snack-uikit/commit/935d398c256c96fa2a37bcc68991701edef16b58))
* **FF-1684:** utils package has been introduced ([e3bc345](https://github.com/cloud-ru-tech/snack-uikit/commit/e3bc345c0b32cfc518a17416a00ad880e351f03b))
* infrastructure improvements ([ae537b5](https://github.com/cloud-ru-tech/snack-uikit/commit/ae537b5e37c0050f800c367da290f4f4e30d22ab))





## CHANGELOG

### v0.0.0

- Initial version
`,f="@snack-uikit/utils",k="3.10.0",r={name:f,version:k},g=`# Utils

## TODO

- Increase coverage

## Installation

\`npm i @snack-uikit/utils\`

[Changelog](./CHANGELOG.md)


[//]: DOCUMENTATION_SECTION_START
[//]: THIS_SECTION_IS_AUTOGENERATED_PLEASE_DONT_EDIT_IT
## useDebounce
\`React hook\` 

Хук задерживает выполнение функции или обновление значения до тех пор,
пока не пройдет определенный период времени без новых вызовов.
## useDynamicList
\`React hook\` 

Хук позволяет распределять элементы списка на две группы: видимые и невидимые,
в зависимости от ширины контейнера
## useEventHandler
\`React hook\` 

Хук для создания обработчика событий с неизменной функцией.
## useLayoutEffect
\`React hook\` 

Хук используется вместо стандартного useLayoutEffect-а,
нужен для корректной работы SSR
## useSwipeable
Хук для работы с событиями свайпа
### Props
| name | type | default value | description |
|------|------|---------------|-------------|
| enabled | \`boolean\` | true | Включен ли свайп |
| availableDirections | \`SwipeDirections[]\` | - | Направления, в которых будет работать свайп. Укажите это свойство, чтобы предотвратить конфликты и заблокировать свайп в родительских элементах по этим направлениям. |
| onSwipedDown | \`SwipeCallback\` | - | Called after a DOWN swipe |
| onSwipedLeft | \`SwipeCallback\` | - | Called after a LEFT swipe |
| onSwipedRight | \`SwipeCallback\` | - | Called after a RIGHT swipe |
| onSwipedUp | \`SwipeCallback\` | - | Called after a UP swipe |
| onSwipeStart | \`SwipeCallback\` | - | Called at start of a tracked swipe. |
| onSwiped | \`SwipeCallback\` | - | Called after any swipe. |
| onSwiping | \`SwipeCallback\` | - | Called for each move event during a tracked swipe. |
| onTap | \`TapCallback\` | - | Called after a tap. A touch under the min distance, \`delta\`. |
| onTouchStartOrOnMouseDown | \`TapCallback\` | - | Called for \`touchstart\` and \`mousedown\`. |
| onTouchEndOrOnMouseUp | \`TapCallback\` | - | Called for \`touchend\` and \`mouseup\`. |
| delta | \`ConfigurationOptionDelta\` | - | Min distance(px) before a swipe starts. **Default**: \`10\` |
| preventScrollOnSwipe | \`boolean\` | - | Prevents scroll during swipe in most cases. **Default**: \`false\` |
| rotationAngle | \`number\` | - | Set a rotation angle. **Default**: \`0\` |
| trackMouse | \`boolean\` | - | Track mouse input. **Default**: \`false\` |
| trackTouch | \`boolean\` | - | Track touch input. **Default**: \`true\` |
| swipeDuration | \`number\` | - | Allowable duration of a swipe (ms). **Default**: \`Infinity\` |
| touchEventOptions | \`{ passive: boolean; }\` | - | Options for touch event listeners |
## useThemeConfig
Хук для работы с темами
### Props
| name | type | default value | description |
|------|------|---------------|-------------|
| themeMap* | \`Record<T, string>\` | - | Объект с указанием соответсвия темы и css-класса |
## useValueControl
Хук для работы с состоянием.
Нужен для поддержки controlled/uncontrolled поведения, в зависимости от того были ли переданы входные аргументы
### Props
| name | type | default value | description |
|------|------|---------------|-------------|
| value | \`TValue\` | - | Значение состояния |
| defaultValue | \`TValue\` | - | Значение по умолчанию |
| onChange | \`(value: TValue) => void\` | - | Колбек, вызываемый на смену состояния |
## useDataPersist
### Props
| name | type | default value | description |
|------|------|---------------|-------------|
| options | \`FilterStateOptions<TFilter>\` | - |  |
| parser | \`(jsonFilter: string) => TFilter\` | - |  |
| serializer | \`(filter: TFilter) => string\` | - |  |
## useModalOpenState
\`hook\` 

Хук для управления состоянием модалки
## ThemeProvider
Провайдер, предназначенный для работы с темами
### Props
| name | type | default value | description |
|------|------|---------------|-------------|
| defaultTheme* | \`string\` | - | Значение темы по умолчанию |
| themeMap* | \`Record<string, string>\` | - | Объект с указанием соответсвия темы и css-класса |
| children* | \`ReactNode\` | - | Дети, которые будут обёрнуты в провайдер |
## excludeSupportProps
\`helper\` 

Функция для исключения вспомогательных свойств (data-test-id & aria-*)
## extractDataTestProps
\`helper\` 

Функция для отбора свойства data-test-id
## extractSupportProps
\`helper\` 

Функция для отбора вспомогательных свойств (data-test-id & aria-*)
## isBrowser
\`helper\` 

Функция проверки текущей среды выполнения кода,
нужна для корректной работы SSR


[//]: DOCUMENTATION_SECTION_END`,F="_themeWrapper_rgkgc_1",T="_buttonWrapper_rgkgc_7",i={themeWrapper:F,buttonWrapper:T},I={title:"Components/Theme Config"},m={Light:d.light,Dark:d.dark};function C(){const e=h(),t=o({themeMap:m,defaultTheme:e?"Dark":"Light"}),a=o({themeMap:m,defaultTheme:e?"Dark":"Light"});return n.jsxs("div",{className:s(t.themeClassName,i.themeWrapper),children:[n.jsxs("div",{className:i.buttonWrapper,children:[n.jsx(c,{onClick:()=>t.changeTheme("Light"),label:"Light Theme"}),n.jsx(c,{onClick:()=>t.changeTheme("Dark"),label:"Dark Theme"})]}),n.jsx("div",{className:s(a.themeClassName,i.themeWrapper),children:n.jsxs("div",{className:i.buttonWrapper,children:[n.jsx(c,{onClick:()=>a.changeTheme("Light"),label:"Light Theme"}),n.jsx(c,{onClick:()=>a.changeTheme("Dark"),label:"Dark Theme"})]})})]})}const u=C.bind({});u.args={};u.argTypes={};u.parameters={readme:{sidebar:[`Latest version: ${r.version}`,g,p]},packageName:r.name};export{I as default,u as themeConfig};
