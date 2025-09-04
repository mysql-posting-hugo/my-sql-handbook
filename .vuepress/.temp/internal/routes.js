export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/other-pages.html", { loader: () => import(/* webpackChunkName: "other-pages.html" */"C:/Users/wjdgh/Desktop/bloging-tistory/myblog/my-sql-handbook/docs/.vuepress/.temp/pages/other-pages.html.js"), meta: {"title":""} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/wjdgh/Desktop/bloging-tistory/myblog/my-sql-handbook/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/guide/advenced.html", { loader: () => import(/* webpackChunkName: "guide_advenced.html" */"C:/Users/wjdgh/Desktop/bloging-tistory/myblog/my-sql-handbook/docs/.vuepress/.temp/pages/guide/advenced.html.js"), meta: {"title":"Advanced"} }],
  ["/guide/getting-started.html", { loader: () => import(/* webpackChunkName: "guide_getting-started.html" */"C:/Users/wjdgh/Desktop/bloging-tistory/myblog/my-sql-handbook/docs/.vuepress/.temp/pages/guide/getting-started.html.js"), meta: {"title":"Getting Started"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"C:/Users/wjdgh/Desktop/bloging-tistory/myblog/my-sql-handbook/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"Guide Home"} }],
  ["/guide/mysql-tips.html", { loader: () => import(/* webpackChunkName: "guide_mysql-tips.html" */"C:/Users/wjdgh/Desktop/bloging-tistory/myblog/my-sql-handbook/docs/.vuepress/.temp/pages/guide/mysql-tips.html.js"), meta: {"title":"MySQL Tips"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/wjdgh/Desktop/bloging-tistory/myblog/my-sql-handbook/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
