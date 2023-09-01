// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "~/assets/css/reset.css",
    "~/assets/css/colors.css",
    "~/assets/css/fonts.css",
    "~/assets/css/main.css",
  ],
  app: {
    baseURL: "/azinshop/", // baseURL: '/<repository>/'
    buildAssetsDir: "assets", // don't use "_" at the begining of the folder name to avoids nojkill conflict
  },
  // modules: ["@nuxtjs/sitemap"],
});
