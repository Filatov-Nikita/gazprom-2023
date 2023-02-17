import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { ElForm } from 'element-plus';
import { createPinia } from 'pinia';
import { vMaska } from 'maska';

const pinia = createPinia();
const app = createApp(App);
app.component('ElForm', ElForm);
app.directive('maska', vMaska);
app.use(pinia);
app.mount('#app');
