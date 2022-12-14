import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import  router  from './routes.js'
import { createPinia } from 'pinia'


const app = createApp(App)

app.use(createPinia())
app.use(router);
app.mount('#app')
