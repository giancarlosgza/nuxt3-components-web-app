import {defineNuxtPlugin} from "nuxt/app";
// @ts-ignore
import Swal from 'sweetalert2/dist/sweetalert2.min'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Swal)
})
