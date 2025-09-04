module.exports = {
  title: "MySQL Handbook",
  description: "MySQL 공부용 블로그",
  // theme: "default",  ← 제거
  head: [["link", { rel: "stylesheet", href: "/css/site.css" }]],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "guide",
          collapsable: true,
          children: ["", "getting-started", "advenced"],
        },
      ],
    },
    sidebarDepth: 2,
  },
};
