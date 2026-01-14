import { createApp } from "vue";
import { createMemoryHistory, createWebHashHistory, createWebHistory, createRouter } from 'vue-router'

import Modals from './pages/Modals.vue'
import Todo from './pages/Todo.vue'

const routes = [
  { path: '/', component: Todo },
  { path: '/modals', component: Modals },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

import App from './app.vue';

createApp(App).use(router).mount('#app');