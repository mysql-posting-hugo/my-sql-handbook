export const themeData = JSON.parse("{\"logo\":\"/images/mysql.jpg\",\"navbar\":[{\"text\":\"소개\",\"link\":\"/introduction/\"},{\"text\":\"기본 타입\",\"link\":\"/guide/basic-types/\"},{\"text\":\"함수\",\"link\":\"/step/functions/\"}],\"sidebar\":{\"/introduction/\":[{\"text\":\"소개\",\"collapsible\":true,\"children\":[\"\",\"guide\"]}],\"/guide/basic-types/\":[{\"text\":\"기본 타입\",\"collapsible\":true,\"children\":[\"\",\"functions\"]}],\"/step/functions/\":[{\"text\":\"함수\",\"collapsible\":true,\"children\":[\"\",\"arrow\",\"generic\"]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
