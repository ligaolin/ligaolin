import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    build:{
        lib:{
            entry:"./packages/index.js",
            name:"ligaolin",
            fileName: 'index',
        },
        outDir:"dist/lib",
        rollupOptions:{
            external:["vue"],
            output:{
                globals:{
                    vue:"Vue",
                },
            },
        },
    },
    plugins: [
        vue(),
    ],
})
