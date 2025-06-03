import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AltaNotebookView from '../views/AltaNotebookView.vue';
import NotebookView from '../views/NotebookView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/alta-notebook',
      name: 'alta-notebook',
      component: AltaNotebookView,
    },
    {
      path: '/notebook',
      name: 'notebook',
      component: NotebookView,
    }
  ],
})

export default router
