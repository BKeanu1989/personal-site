import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    // buildModules: [
    //     '@nuxt/postcss8',
    // ],
  
    // primevue: {
    //   theme: 'saga-blue',
    //   ripple: true,
    //   components: ['InputText','Button', 'Toast'],
    // },
  
    // Modules (https://go.nuxtjs.dev/config-modules)
    // modules: [
    //   'primevue/nuxt'
    // ],
    build: {
        postcss: {
            postcssOptions: require('./postcss.config.js')
        },
    },
    css: [
        '@/assets/css/tailwind.css',
        'primevue/resources/themes/saga-blue/theme.css',       //theme
        'primevue/resources/primevue.min.css',                 //core css
        'primeicons/primeicons.css',                          //icons
    ],
})
