import { createRouter, createWebHistory } from 'vue-router';
import ProjectsList from '../components/ProjectsList.vue';
import Dashboard from '../components/Dashboard.vue';
import Mitarbeiter from '../components/Mitarbeiter.vue';
import Baustellen from '../components/Baustellen.vue';
import Auftraege from '../components/Auftraege.vue';
import Neu from '../components/Neu.vue';
import Reports from '../components/Reports.vue';
import Einstellungen from '../components/Einstellungen.vue';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/mitarbeiter',
    name: 'Mitarbeiter',
    component: Mitarbeiter,
  },
  {
    path: '/baustellen',
    name: 'Baustellen',
    component: Baustellen,
  },
  {
    path: '/auftraege',
    name: 'Aufträge',
    component: Auftraege,
  },
  {
    path: '/neu',
    name: 'Neu',
    component: Neu,
  },
  {
    path: '/reports',
    name: 'Reports',
    component: Reports,
  },
  {
    path: '/einstellungen',
    name: 'Einstellungen',
    component: Einstellungen,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 