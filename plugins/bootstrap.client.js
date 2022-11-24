import {defineNuxtPlugin} from "nuxt/app";
import bootstrap from 'bootstrap';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(bootstrap)
})

