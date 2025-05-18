<template>
  <section>
    <h1 class="text-4xl font-extrabold mb-10 text-center text-gray-800 tracking-tight">Projects</h1>
    <div v-if="loading" class="text-gray-500 text-center text-lg py-10">Loading projects...</div>
    <div v-else-if="error" class="text-red-500 text-center text-lg py-10">Error loading projects.</div>
    <div v-else class="space-y-6 max-w-5xl mx-auto">
      <div v-if="projects.length" class="space-y-6">
        <div v-for="(project, idx) in projects" :key="project.id"
          :class="[
            'rounded-2xl shadow-md p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6',
            idx % 2 === 0 ? 'bg-white' : 'bg-green-50',
            'border border-gray-100 hover:shadow-xl transition-shadow duration-200'
          ]">
          <div class="flex-1 min-w-0">
            <div class="flex flex-col md:flex-row md:items-center md:gap-8 gap-2">
              <div class="font-bold text-lg text-primary truncate">{{ project.betreff || '—' }}</div>
              <div class="text-gray-500 text-base truncate"><span class="font-medium text-gray-700">Location:</span> {{ (project.straße || '—') + (project.ort ? ', ' + project.ort : '') }}</div>
              <div class="text-gray-500 text-base"><span class="font-medium text-gray-700">Date:</span> {{ formatDate(project.datum) }}</div>
              <div class="text-gray-500 text-base"><span class="font-medium text-gray-700">Contact:</span> {{ project.name || '—' }}</div>
            </div>
            <div class="mt-3 flex flex-wrap gap-2">
              <span v-if="project.isPlanVorhanden" class="inline-block bg-green-200 text-green-900 text-xs px-3 py-1 rounded-full font-semibold">Plan</span>
              <span v-if="project.terminNachVereinbarung" class="inline-block bg-yellow-200 text-yellow-900 text-xs px-3 py-1 rounded-full font-semibold">By Appointment</span>
            </div>
          </div>
          <div class="flex-shrink-0 flex items-center justify-end">
            <a :href="generateMsFormsUrl(project)" target="_blank"
              class="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-bold px-7 py-3 rounded-xl shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-lg">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              Open Form
            </a>
          </div>
        </div>
      </div>
      <p v-else class="text-gray-500 text-center text-lg py-10">No projects found.</p>
    </div>
  </section>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useProjectsStore } from '../store/projects';
import { generateMsFormsUrl } from '../services/msForms';

const store = useProjectsStore();
const projects = computed(() => store.projects);
const loading = computed(() => store.loading);
const error = computed(() => store.error);

function formatDate(date) {
  if (!date) return '—';
  // Try to format ISO or YYYY-MM-DD
  const d = new Date(date);
  if (!isNaN(d)) {
    return d.toLocaleDateString();
  }
  return date;
}

onMounted(() => {
  store.fetchProjects();
});
</script> 