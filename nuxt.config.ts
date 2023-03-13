// https://nuxt.com/docs/api/configuration/nuxt-config
import {defineNuxtConfig} from 'nuxt/config'

export default defineNuxtConfig({
    app: {
        pageTransition: {name: 'page', mode: 'out-in'},
        // Global page headers
        head: {
            title: 'Nuxt 3 Components',
            titleTemplate: '%s | Nuxt 3 Components',
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {hid: 'description', name: 'description', content: ''},
            ],
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Material+Icons&family=Material+Icons+Outlined'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'
                }
            ]
        },
    },

    // Global CSS
    css: [
        // Bootstrap module
        'bootstrap/dist/css/bootstrap.min.css',
        // SCSS file in the project
        '~/assets/scss/main.scss'
    ],

    // Plugins to run before rendering page
    plugins: [
        {src: '~/plugins/bootstrap.client.ts', mode: 'client'},
    ],

    // Auto import components
    components: {
        global: true,
        dirs: ['~/components']
    },

    // Modules
    modules: [
        '@nuxtjs/color-mode'
    ]
})
