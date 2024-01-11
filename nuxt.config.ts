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
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
};
