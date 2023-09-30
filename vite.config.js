import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '^/api': {
        target: 'http://127.0.0.1:8080', //目标源，目标服务器，真实请求地址
        changeOrigin: true, //支持跨域
        rewrite: (path) => path.replace(/^\/api/, ""), //重写真实路径,替换/api
      }
    }
  }

})
