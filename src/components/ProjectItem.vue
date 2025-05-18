<template>
  <tr>
    <td class="border px-4 py-2">{{ project.betreff }}</td>
    <td class="border px-4 py-2">{{ project.straße }}, {{ project.ort }}</td>
    <td class="border px-4 py-2">{{ project.datum }}</td>
    <td class="border px-4 py-2">{{ project.name }}</td>
    <td class="border px-4 py-2">
      <a :href="msFormsUrl" target="_blank" class="bg-primary text-white px-3 py-1 rounded">Open Form</a>
      <span v-if="project.isPlanVorhanden" class="ml-2 text-green-600">Plan</span>
      <span v-if="project.terminNachVereinbarung" class="ml-2 text-yellow-600">By Appointment</span>
    </td>
  </tr>
</template>

<script setup>
import { computed } from 'vue';
import { generateMsFormsUrl } from '../services/msForms';
const props = defineProps({ project: Object });

const msFormsUrl = computed(() => generateMsFormsUrl(props.project));
</script> 