import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default ({ mode }: { mode: 'production' | 'development' }) => {
    console.log('mode', mode)
    return defineConfig({
        build: {
            lib: {
                entry: path.resolve(__dirname, 'packages/main.ts'),
                name: 'baidu-map-vue3',
                fileName: (format) => `lib.${format}.js`
            },
            rollupOptions: {
                external: ['vue'],
                output: {
                    globals: {
                        vue: 'Vue'
                    }
                }
            }
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.vue', '.json', '.css'],
        },
        plugins: [vue()],
    })
}
