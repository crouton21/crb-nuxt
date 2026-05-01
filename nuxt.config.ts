// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },

  // Static site generation for Netlify
  nitro: {
    preset: 'netlify-static',
  },

  // Global CSS — tokens injected via additionalData, no @import needed per file
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/styles/main.scss',
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/styles/tokens"; @import "~/assets/styles/mixins";',
          silenceDeprecations: ['import'],
        },
      },
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preload', as: 'font', type: 'font/woff', href: '/fonts/lovely-groovy.woff', crossorigin: 'anonymous' },
      ],
    },
  },
})
