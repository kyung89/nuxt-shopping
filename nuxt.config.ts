// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 8000,
  },
  css: ["@/assets/css/reset.css"],
  modules: ["@pinia/nuxt"],
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "My Nuxt Shopping App",
      meta: [{ name: "description", content: "My amazing site" }],
    },
  },
});
