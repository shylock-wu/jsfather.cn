import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
  link: "/front-end/",
  dir: "前端",
  sidebar: [
    {
      text: "浏览器",
      link: "/front-end/",
      items: ["览器渲染原理"],
    },
  ],
});
