import { createApp } from 'vue'
import './assets/css/app.scss'
import Main from './layout/MainLayout.vue'
import QuillEditor from './plugins/QuillEditor'

const app = createApp(Main);

app.component('QuillEditor', QuillEditor)

app.mount('#app')
