import{j as p}from"./jsx-runtime-BTJTZTIL.js";import{u as c}from"./index-Cn1GTkdY.js";import{M as g}from"./content-EyuWYRdV.js";import"./index-DUmpqB7p.js";import"./index-ChsGqxH_.js";import"./index-CJ_LmFaV.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-BQ2KraVq.js";import"./Typography-DmSN6cv6.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./index-CBS9c6Gb.js";import"./index-DTH25FFD.js";import"./objectWithoutProperties-3ReGGzEA.js";import"./objectWithoutPropertiesLoose-Dsqj8S3w.js";import"./extends-CF3RwP-h.js";import"./react-markdown-DttXII6_.js";import"./index-Chjiymov.js";import"./TruncateString-BPmgFnBz.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-BNp3usZT.js";import"./PopoverPrivate-CnKgsFAm.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./index-JZGyZbA2.js";import"./Divider-C1X9zrkx.js";const t=`# Snack Uikit [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

Snack Uikit - [библиотека компонентов](https://cloud-ru-tech.github.io/snack-uikit) компании [Cloud.ru](https://cloud.ru/) и сообщества [TeamSnack](https://t.me/+tN0DDzHaDVc3M2Iy), в которой каждый компонент это отдельный npm-пакет, со своей версионностью и зависимостями.

![Cloud](storybook/assets/CloudRuFullLogo.svg)   

# Design

[Figma](https://www.figma.com/files/1101513230643708615/team/1194627249980298820/DS-(FF))

# Browser support

![Chrome](storybook/assets/GoogleChromeLogo.svg)
![Firefox](storybook/assets/FirefoxLogo.svg)
![Chromium](storybook/assets/ChromiumLogo.svg)
![Safari](storybook/assets/SafariBrowserLogo.svg)

# Automation testing

![Chrome](storybook/assets/GoogleChromeLogo.svg)
![Firefox](storybook/assets/FirefoxLogo.svg)

# Installation
\`\`\`text
npm i --save @snack-uikit/button
\`\`\`

# Usage

* Импортировать хук \`useThemeConfig\`
* В хук передать мапу с ключами тем и соответсвующими стилевыми файлами
* Из хука получить класс для темы, который нужно задать обёртке на верхнем уровне приложения.
  * Менять тему можно с помощью функции \`changeTheme\`, возвращаемой из хука. Можно также положить её в контекст и передать вниз по реакт-дереву.

\`\`\`typescript jsx
import { createContext, useEffect } from 'react';
import { useThemeConfig } from '@snack-uikit/utils';
import { ButtonFilled } from '@snack-uikit/button';
import DefaultBrand from '@snack-uikit/figma-tokens/build/css/brand.module.css';

export enum Theme {
  Light = 'Light',
  Dark = 'Dark',
}

const themeMap = {
  [Theme.Light]: DefaultBrand.light,
  [Theme.Dark]: DefaultBrand.dark,
};

type ThemeContextProps = {
  theme: Theme;
  changeTheme(value: Theme): void;
};

const ThemeContext = createContext<ThemeContextProps>({
  theme: Theme.Light,
  changeTheme() {}
});

function App() {
  const { theme, themeClassName, changeTheme } = useThemeConfig<Theme>({themeMap, defaultTheme: Theme.Light});
  
  // также можно повесить класс на body
  // useEffect(() => {
  //   document.body.classList.add(themeClassName);
  //   return () => document.body.classList.remove(themeClassName);
  // }, [theme]);
  
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div className={themeClassName}>
        <ButtonFilled label='OK'/>
      </div>
    </ThemeContext.Provider>
  );
}
\`\`\`

# Team

\`Development Team\` - Трифонов Михаил, Ахременко Григорий, Белов Алексей, Ершов Никита, Козлова Анна, Хлупин Сергей, Белявский Илья

\`Design Team\` - Малокостов Игорь, Алексеев Алексей

# Contribution

[Contribution Guide](CONTRIBUTING.md)
`,d=new RegExp(/!\[Cloud]\((?<imagePath>.+?)\)/);var s,r;const n=(r=(s=d.exec(t))==null?void 0:s.groups)==null?void 0:r.imagePath,_={title:"Documentation/Getting Started",component:g,decorators:[h=>{const o=c(),u=n&&o?t.replace(n,"storybook/assets/CloudRuFullLogoDark.svg"):t;return p.jsx(h,{args:{md:u,darkMode:o}})}]},e={};var m,a,i;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{_ as default,e as gettingStarted};
