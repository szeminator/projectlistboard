import { createRouter, createWebHistory } from 'vue-router';
import ProjectsList from '../components/ProjectsList.vue';

const routes = [
  {
    path: '/',
    name: 'Projects',
    component: ProjectsList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 