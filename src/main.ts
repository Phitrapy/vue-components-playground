import { createApp } from 'vue';
import './style.scss';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from './views/Home.vue';
import Separators from './views/Separators.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: `/separators`, name: `Separators`, component: Separators },
  ],
});

createApp(App).use(router).mount('#app');
