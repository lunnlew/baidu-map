import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default ({ mode }: { mode: 'production' | 'development' }) => {
    console.log('mode', mode)
    return defineConfig({
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.vue', '.json', '.css'],
        },
        plugins: [vue()],
    })
}
