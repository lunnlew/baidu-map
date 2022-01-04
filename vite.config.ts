import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default ({ mode }: { mode: 'production' | 'development' }) => {
    console.log('mode', mode)
    return defineConfig({
        resolve: {
            alias: {
                '@': path.join(__dirname, 'packages'),
                '#': path.join(__dirname, 'examples'),
            },
            extensions: ['.ts', '.tsx', '.js', '.vue', '.json', '.css'],
        },
        plugins: [vue()],
    })
}
