import { defineNavbarConfig } from "vuepress-theme-plume";

export const navbar = defineNavbarConfig([
  { text: "首页", link: "/" },
  { text: "博客", link: "/blog/" },
  {
    text: "归档",
    link: "/blog/archives/",
  },
  { text: "标签", link: "/blog/tags/", icon: "icon-park:tag-one" },
  {
    text: "笔记",
    icon: "noto:books",
    items: [
      {
        text: "备忘录",
        link: "/memorandum/",
        icon: "vscode-icons:file-type-text",
      },
      {
        text: "防御性CSS",
        link: "/defensive-css/",
        activeMatch: "^/defensive-css/",
        icon: "vscode-icons:file-type-css",
      },
      {
        text: "前端",
        link: "/front-end/",
        activeMatch: "^/front-end/",
        icon: "logos:google-developers",
      },
    ],
  },
]);
