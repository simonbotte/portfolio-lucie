// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ["~/assets/style/app.scss"],

    runtimeConfig: {
        STRAPI_TOKEN: process.env.STRAPI_TOKEN,
        STRAPI_URL: process.env.STRAPI_URL,
        public: {
            STRAPI_URL: process.env.STRAPI_URL,
        },
    },

    modules: ["@nuxt/image"]
});