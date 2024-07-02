// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
  devtools: { enabled: true },
  modules: [
    "@ant-design-vue/nuxt",
    "@nuxt/eslint",
    "nuxt-security",
    "nuxt-gtag",
    "vue3-carousel-nuxt",
    "@nuxtjs/web-vitals",
    "@nuxt/content",
    "@nuxt/image",
    "@nuxtjs/snipcart",
    "@nuxtjs/tailwindcss"
  ],
  snipcart: {
    templatesUrl: '/snipcart-custom.html',
    publicApiKey: "NjFlNzA3NjktZGQwNC00Yjg0LWIwY2QtMjdmNmI0MmI5Y2MyNjM4NTUyNjY2MDgyOTExMzEx"
  },
  plugins: [
    { src: '~/plugins/main-style.js', mode: 'client' },
    { src: '~/plugins/useSnipcart.js', mode: 'client' }
  ],
  css: [
    '~/assets/stylesheets/main/tailwind.css',
  ],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
})