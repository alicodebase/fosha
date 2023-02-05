import { createApp } from 'vue'
import './assets/css/app.scss'
import Main from './layout/MainLayout.vue'
// import CKEditor from '@ckeditor/ckeditor5-vue';
import CKEditor from '@ckeditor/ckeditor5-vue';

const app = createApp(Main);

app.use(CKEditor)
app.mount('#app')
