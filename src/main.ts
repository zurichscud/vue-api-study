import { createApp } from 'vue'
import App from './App.vue'
import './assets/reset.css'
import { loadPlugins } from './utils/plugins'
import 'element-plus/dist/index.css'

const app = createApp(App)
loadPlugins(app)
app.mount('#app')
