import { createApp } from 'vue'
import './style.css'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import * as ElIcon from '@element-plus/icons-vue'



let app=createApp(App)
Object.keys(ElIcon).forEach((key) => {
    app.component(key, ElIcon[key])
})
app.use(router).use(ElementPlus).mount('#app')
