import { defineNoteConfig } from "vuepress-theme-plume";

export default defineNoteConfig({
  link: "/defensive-css/",
  dir: "防御性CSS",
  sidebar: [
    {
      text: "防御性 CSS",
      link: "/defensive-css/",
      items: ["flex-box-wrapping"],
    },
  ],
});
