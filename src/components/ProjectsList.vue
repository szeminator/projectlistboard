<template>
  <section>
    <h1 class="text-3xl font-bold mb-6">Projects</h1>
    <div v-if="loading" class="text-gray-500">Loading projects...</div>
    <div v-else-if="error" class="text-red-500">Error loading projects.</div>
    <div v-else class="bg-white rounded shadow p-4">
      <table v-if="projects.length" class="min-w-full table-auto">
        <thead>
          <tr>
            <th class="px-4 py-2 text-left">Subject</th>
            <th class="px-4 py-2 text-left">Location</th>
            <th class="px-4 py-2 text-left">Date</th>
            <th class="px-4 py-2 text-left">Contact</th>
            <th class="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <ProjectItem v-for="project in projects" :key="project.id" :project="project" />
        </tbody>
      </table>
      <p v-else class="text-gray-500">No projects found.</p>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { useProjectsStore } from '../store/projects';
import ProjectItem from './ProjectItem.vue';

const store = useProjectsStore();
const { projects, loading, error } = store;

onMounted(() => {
  store.fetchProjects();
});
</script> 