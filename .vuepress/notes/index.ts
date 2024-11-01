import { defineNotesConfig } from "vuepress-theme-plume";
import defensiveCss from "./defensive-css";
import memorandum from "./memorandum";
import frontEnd from "./front-end";

export default defineNotesConfig({
  dir: "notes",
  link: "/",
  notes: [defensiveCss, memorandum, frontEnd],
});
