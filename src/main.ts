import './assets/base.css'
import ViewerPlugin from 'ab-skeleton'
import 'ab-skeleton/styles.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ViewerPlugin)
app.mount('#app')
