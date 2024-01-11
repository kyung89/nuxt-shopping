// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  devtools: { enabled: true },
  devServer: {
    port: 8000,
  },
  css: ["@/assets/css/reset.css"],
  modules: ["@pinia/nuxt"],
  target: "static",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "learn-nuxt",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
};
