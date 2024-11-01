import { defineNavbarConfig } from "vuepress-theme-plume";

export const navbar = defineNavbarConfig([
  { text: "首页", link: "/" },
  { text: "博客", link: "/blog/" },
  { text: "标签", link: "/blog/tags/" },
  { text: "归档", link: "/blog/archives/" },
  {
    text: "笔记",
    icon: "icon-park-solid:bookshelf",
    items: [
      { text: "备忘录", link: "/memorandum/" },
      {
        text: "防御性CSS",
        link: "/defensive-css/",
        activeMatch: "^/defensive-css/",
        icon: "streamline:css-three",
      },
      {
        text: "前端",
        link: "/front-end/",
        activeMatch: "^/front-end/",
        icon: "codicon:comment-unresolved",
      },
    ],
  },
]);
