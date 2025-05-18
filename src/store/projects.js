import { defineStore } from 'pinia';
import axios from 'axios';

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projects: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchProjects() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get('/api/projects');
        this.projects = response.data;
      } catch (err) {
        this.error = err;
      } finally {
        this.loading = false;
      }
    },
  },
}); 