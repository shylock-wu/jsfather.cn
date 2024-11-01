import { getDirname, path } from "vuepress/utils";
import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import theme from "./.vuepress/theme.js";

const __dirname = getDirname(import.meta.url);
const resolve = (...dirs: string[]) => path.resolve(__dirname, ...dirs);

export default defineUserConfig({
  lang: "zh-CN",
  title: "Shylock blog",
  description: "hhhhhhello world",

  dest: "docs",
  public: resolve("public"),

  bundler: viteBundler(),

  theme,
});
