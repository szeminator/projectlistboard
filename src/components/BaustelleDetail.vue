<template>
  <div class="min-h-screen bg-picton-50">
    <div class="max-w-5xl mx-auto px-4 py-10">
      <button @click="$router.back()"
        class="flex items-center gap-2 bg-white border-2 border-picton-300 rounded-2xl text-picton-700 hover:bg-picton-100 hover:border-picton-500 transition px-6 py-2 font-semibold mb-8">
        <ArrowLeftIcon class="w-6 h-6" />
        <span>Zurück</span>
      </button>
      <div v-if="loading" class="text-picton-400 text-center py-10">Lade Baustelle...</div>
      <div v-else-if="error" class="text-red-500 text-center py-10">Fehler beim Laden der Daten.</div>
      <div v-else-if="!baustelle" class="text-picton-400 text-center py-10">Keine Daten gefunden.</div>
      <div v-else class="bg-white rounded-2xl shadow-md p-8 flex flex-col md:flex-row gap-8">
        <div class="flex-1 flex flex-col gap-4">
          <img :src="mockBilder[0]" alt="Baustellenbild 1" class="rounded-xl object-cover w-full h-64" />
          <img :src="mockBilder[1]" alt="Baustellenbild 2" class="rounded-xl object-cover w-full h-64" />
        </div>
        <div class="flex-1 flex flex-col gap-4">
          <div class="text-xs text-picton-400 font-medium uppercase">Baustellen-Detail</div>
          <h2 class="text-2xl font-bold text-picton-900 mb-2">{{ baustelle.betreff }}</h2>
          <div class="text-picton-800 mb-2">{{ baustelle.straße }}, {{ baustelle.ort }}</div>
          <div class="flex flex-col gap-1 text-sm text-picton-700 mb-4">
            <div><span class="font-semibold">Datum:</span> {{ formatDate(baustelle.datum) }}</div>
            <div><span class="font-semibold">Kontakt:</span> {{ baustelle.name }}</div>
            <div><span class="font-semibold">Plan vorhanden:</span> <span :class="baustelle.isPlanVorhanden ? 'text-green-600' : 'text-picton-300'">{{ baustelle.isPlanVorhanden ? 'Ja' : 'Nein' }}</span></div>
            <div><span class="font-semibold">Termin nach Vereinbarung:</span> <span :class="baustelle.terminNachVereinbarung ? 'text-yellow-600' : 'text-picton-300'">{{ baustelle.terminNachVereinbarung ? 'Ja' : 'Nein' }}</span></div>
            <div v-if="baustelle.nachricht"><span class="font-semibold">Nachricht:</span> {{ baustelle.nachricht }}</div>
          </div>
          <div class="text-xs text-picton-400 mt-4">ID: {{ baustelle.id }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowLeftIcon } from '@heroicons/vue/24/solid'
import axios from 'axios'

const route = useRoute()
const baustelle = ref(null)
const loading = ref(true)
const error = ref(null)

const mockBilder = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
]

function formatDate(date) {
  if (!date) return '—'
  const d = new Date(date)
  if (!isNaN(d)) {
    return d.toLocaleDateString()
  }
  return date
}

onMounted(async () => {
  loading.value = true
  error.value = null
  try {
    const res = await axios.get(`https://middleware.blitzschutz-reichenhauser.com/api/v1/projects/${route.params.id}`)
    baustelle.value = res.data.data
  } catch (e) {
    error.value = e.message || 'Fehler beim Laden.'
  } finally {
    loading.value = false
  }
})
</script> 