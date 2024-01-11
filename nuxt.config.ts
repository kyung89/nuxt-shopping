// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 8000,
  },
  css: ["@/assets/css/reset.css"],
  modules: ["@pinia/nuxt"],
});
