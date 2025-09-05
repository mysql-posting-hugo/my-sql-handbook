export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/wjdgh/Desktop/bloging-tistory/myblog/my-sql-handbook/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/guide/basic-types/functions.html", { loader: () => import(/* webpackChunkName: "guide_basic-types_functions.html" */"C:/Users/wjdgh/Desktop/bloging-tistory/myblog/my-sql-handbook/docs/.vuepress/.temp/pages/guide/basic-types/functions.html.js"), meta: {"title":"함수"} }],
  ["/guide/basic-types/", { loader: () => import(/* webpackChunkName: "guide_basic-types_index.html" */"C:/Users/wjdgh/Desktop/bloging-tistory/myblog/my-sql-handbook/docs/.vuepress/.temp/pages/guide/basic-types/index.html.js"), meta: {"title":"MySQL 이란?"} }],
  ["/guide/functions/", { loader: () => import(/* webpackChunkName: "guide_functions_index.html" */"C:/Users/wjdgh/Desktop/bloging-tistory/myblog/my-sql-handbook/docs/.vuepress/.temp/pages/guide/functions/index.html.js"), meta: {"title":"소개"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/wjdgh/Desktop/bloging-tistory/myblog/my-sql-handbook/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
