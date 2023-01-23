import {defineConfig} from 'vite'

export default defineConfig({
    optimizeDeps: {
        include: ['esm-dep > cjs-dep'],
    },
})
