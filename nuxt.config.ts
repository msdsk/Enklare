// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: { strict: true },
  css: ['@thisisdeploy/scaffold-css', '@/assets/main.scss'],
  app: {
    head: {
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
      link: [{
        rel: "prefetch",
        as: "image",
        href: "/stars.svg"
      }],
      title: 'Jokester central'
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@thisisdeploy/scaffold-css/_variables.scss";',
        },
      },
    },
  },
})
