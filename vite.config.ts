import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default ({ mode }: { mode: 'production' | 'development' }) => {
    console.log('mode', mode)
    return defineConfig({
        base: '/baidu-map/',
        resolve: {
            alias: {
                '@': path.join(__dirname, 'src'),
            },
            extensions: ['.ts', '.tsx', '.js', '.vue', '.json', '.css'],
        },
        plugins: [vue()],
    })
}
