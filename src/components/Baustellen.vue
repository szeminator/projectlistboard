<template>
  <div class="min-h-screen bg-picton-50">
    <div class="max-w-6xl mx-auto px-4 py-10">
      <button @click="$router.push('/')"
        class="group flex items-center gap-2 bg-white border-2 border-picton-300 rounded-2xl text-picton-700 hover:bg-picton-100 hover:border-picton-500 transition px-6 py-2 font-semibold mb-8">
        <ArrowLeftIcon class="w-6 h-6" />
        <span>Zurück</span>
      </button>
      <h1 class="text-3xl font-bold text-picton-700 mb-8">Baustellen</h1>
      <div class="bg-white rounded-2xl shadow-md p-6">
        <div v-if="loading" class="text-gray-500 text-center py-10">Lade Baustellen...</div>
        <div v-else-if="error" class="text-red-500 text-center py-10">Fehler beim Laden der Daten.</div>
        <div v-else>
          <!-- Desktop Table -->
          <table class="min-w-full divide-y divide-gray-200 hidden md:table">
            <thead class="bg-picton-50 md:table-header-group hidden md:table-header-group">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Betreff</th>
                <th class="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Straße</th>
                <th class="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Ort</th>
                <th @click="toggleSort" class="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider cursor-pointer select-none">
                  <span class="flex items-center gap-1">
                    Datum
                    <ArrowUpIcon v-if="sortAsc" class="w-4 h-4 inline text-picton-600" />
                    <ArrowDownIcon v-else class="w-4 h-4 inline text-picton-600" />
                  </span>
                </th>
                <th class="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Kontakt</th>
                <th class="px-4 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">Plan</th>
                <th class="px-4 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">Termin n. V.</th>
                <th class="px-4 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">Priorität</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-100">
              <tr v-for="project in sortedProjects" :key="project.id" :class="[priorityIds.has(project.id) ? 'bg-picton-100' : 'hover:bg-picton-50', 'transition', 'cursor-pointer']" @click="goToDetail(project.id)">
                <td class="px-4 py-3 font-medium text-picton-900">{{ project.betreff }}</td>
                <td class="px-4 py-3 text-picton-800">{{ project.straße }}</td>
                <td class="px-4 py-3 text-picton-800">{{ project.ort }}</td>
                <td class="px-4 py-3 text-picton-800">{{ formatDate(project.datum) }}</td>
                <td class="px-4 py-3 text-picton-800">{{ project.name }}</td>
                <td class="px-4 py-3 text-center">
                  <span v-if="project.isPlanVorhanden" class="inline-block bg-picton-200 text-picton-900 rounded-full px-2 py-0.5 text-xs font-semibold">Ja</span>
                  <span v-else class="inline-block bg-picton-50 text-picton-300 rounded-full px-2 py-0.5 text-xs">Nein</span>
                </td>
                <td class="px-4 py-3 text-center">
                  <span v-if="project.terminNachVereinbarung" class="inline-block bg-picton-100 text-picton-700 rounded-full px-2 py-0.5 text-xs font-semibold">Ja</span>
                  <span v-else class="inline-block bg-picton-50 text-picton-300 rounded-full px-2 py-0.5 text-xs">Nein</span>
                </td>
                <td class="px-4 py-3 text-center">
                  <input type="checkbox" :checked="priorityIds.has(project.id)" @change.stop="togglePriority(project.id)" @click.stop class="accent-red-600 w-5 h-5" />
                </td>
              </tr>
            </tbody>
          </table>
          <!-- Mobile Card View -->
          <div class="block md:hidden space-y-4">
            <div v-for="project in sortedProjects" :key="project.id"
              :class="[priorityIds.has(project.id) ? 'bg-picton-100' : 'bg-white', 'rounded-2xl shadow p-4 flex flex-col gap-2 border border-picton-100']"
              @click="goToDetail(project.id)">
              <div class="flex items-center justify-between">
                <div class="font-bold text-lg text-picton-900">{{ project.betreff }}</div>
                <input type="checkbox" :checked="priorityIds.has(project.id)" @change.stop="togglePriority(project.id)" @click.stop class="accent-red-600 w-5 h-5" />
              </div>
              <div class="text-picton-800 text-sm">{{ project.straße }}, {{ project.ort }}</div>
              <div class="flex flex-wrap gap-2 text-xs text-picton-700">
                <span><span class="font-semibold">Datum:</span> {{ formatDate(project.datum) }}</span>
                <span><span class="font-semibold">Kontakt:</span> {{ project.name }}</span>
              </div>
              <div class="flex gap-2 mt-1">
                <span v-if="project.isPlanVorhanden" class="inline-block bg-picton-200 text-picton-900 rounded-full px-2 py-0.5 text-xs font-semibold">Plan</span>
                <span v-if="project.terminNachVereinbarung" class="inline-block bg-picton-100 text-picton-700 rounded-full px-2 py-0.5 text-xs font-semibold">Termin n. V.</span>
              </div>
            </div>
          </div>
          <div v-if="!projects.length" class="text-gray-500 text-center py-10">Keine Baustellen gefunden.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed, ref } from 'vue'
import { useProjectsStore } from '../store/projects'
import { ArrowLeftIcon, ArrowUpIcon, ArrowDownIcon } from '@heroicons/vue/24/solid'
import { useRouter } from 'vue-router'

const store = useProjectsStore()
const projects = computed(() => store.projects)
const loading = computed(() => store.loading)
const error = computed(() => store.error)

const sortAsc = ref(true)
const priorityIds = ref(new Set())
const router = useRouter()

function toggleSort() {
  sortAsc.value = !sortAsc.value
}

function togglePriority(id) {
  if (priorityIds.value.has(id)) {
    priorityIds.value.delete(id)
  } else {
    priorityIds.value.add(id)
  }
  // Trigger reactivity
  priorityIds.value = new Set(priorityIds.value)
}

const sortedProjects = computed(() => {
  let arr = [...projects.value]
  // Sort by date
  arr.sort((a, b) => {
    const da = new Date(a.datum)
    const db = new Date(b.datum)
    return sortAsc.value ? da - db : db - da
  })
  // Priorities always on top
  const prio = arr.filter(p => priorityIds.value.has(p.id))
  const rest = arr.filter(p => !priorityIds.value.has(p.id))
  return [...prio, ...rest]
})

function formatDate(date) {
  if (!date) return '—'
  const d = new Date(date)
  if (!isNaN(d)) {
    return d.toLocaleDateString()
  }
  return date
}

function goToDetail(id) {
  router.push(`/baustellen/${id}`)
}

onMounted(() => {
  store.fetchProjects()
})
</script> 