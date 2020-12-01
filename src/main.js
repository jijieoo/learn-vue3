import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// use mock
if (process.env.NODE_ENV === 'development') { import('@/mock/index'); }

createApp(App)
    .use(store)
    .use(router)
    .mount('#app');
