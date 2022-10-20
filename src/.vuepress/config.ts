import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
  // base: "/",
  port: 8083,
  locales: {
    "/": {
      lang: "en-US",
      title: "Docs Demo",
      description: "A docs demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "文档演示",
      description: "vuepress-theme-hope 的文档演示",
    },
  },
  plugins: [
    // kanBanNiang(),
    searchPlugin({
      locales: {
        "/": {
          placeholder: "搜索",
        },
        "/zh/": {
          placeholder: "搜索",
        },
      },
      // 排除首页
      isSearchable: (page) => page.path !== "/",
      // 允许搜索 Frontmatter 中的 `tags`
      getExtraFields: (page) => page.frontmatter.tags ?? [],
    }),
  ],
  theme,

  shouldPrefetch: false,
});
