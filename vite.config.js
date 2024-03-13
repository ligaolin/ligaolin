import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    pages: {
        index: {
            // page 的入口
            entry: 'examples/main.js',
            // 模板来源
            template: 'index.html',
            // 输出文件名
            filename: 'index.html'
        }
    },
    build: {
        rollupOptions: {
            // 请确保外部化那些你的库中不需要的依赖
            external: ['vue'],
            output: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    vue: 'Vue',
                },
            },
        },
        lib: {
            entry: './ligaolin/index.js',
            name: 'ligaolin',
        },
    },
})
