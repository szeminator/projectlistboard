<template>
  <div class="min-h-screen bg-picton-50">
    <div class="max-w-2xl mx-auto px-4 py-10">
      <button @click="$router.push('/')"
        class="group flex items-center gap-2 bg-white border-2 border-picton-300 rounded-2xl text-picton-700 hover:bg-picton-100 hover:border-picton-500 transition px-6 py-2 font-semibold mb-8">
        <ArrowLeftIcon class="w-6 h-6" />
        <span>Zurück</span>
      </button>
      <div class="bg-white rounded-2xl shadow-md p-8">
        <h2 class="text-3xl font-bold text-center mb-2">Neuen Auftrag/Baustelle anlegen</h2>
        <p class="text-center text-gray-500 mb-8">Bitte füllen Sie alle relevanten Felder aus, um einen neuen Eintrag zu erstellen.</p>
        <form class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Betreff</label>
              <input v-model="form.betreff" type="text" class="w-full rounded-lg border-gray-300 focus:ring-primary focus:border-primary" required />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Datum</label>
              <input v-model="form.datum" type="date" class="w-full rounded-lg border-gray-300 focus:ring-primary focus:border-primary" required />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Straße</label>
              <input v-model="form.straße" type="text" class="w-full rounded-lg border-gray-300 focus:ring-primary focus:border-primary" required />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Ort</label>
              <input v-model="form.ort" type="text" class="w-full rounded-lg border-gray-300 focus:ring-primary focus:border-primary" required />
            </div>
            <div class="md:col-span-2">
              <label class="block text-sm font-medium text-gray-700 mb-1">Kontaktperson</label>
              <input v-model="form.name" type="text" class="w-full rounded-lg border-gray-300 focus:ring-primary focus:border-primary" required />
            </div>
          </div>
          <div class="flex flex-col md:flex-row gap-4">
            <label class="inline-flex items-center">
              <input v-model="form.isPlanVorhanden" type="checkbox" class="rounded border-gray-300 text-primary focus:ring-primary" />
              <span class="ml-2 text-sm text-gray-700">Plan vorhanden</span>
            </label>
            <label class="inline-flex items-center">
              <input v-model="form.terminNachVereinbarung" type="checkbox" class="rounded border-gray-300 text-primary focus:ring-primary" />
              <span class="ml-2 text-sm text-gray-700">Termin nach Vereinbarung</span>
            </label>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Nachricht</label>
            <textarea v-model="form.nachricht" rows="4" class="w-full rounded-lg border-gray-300 focus:ring-primary focus:border-primary"></textarea>
          </div>
          <button type="submit" class="w-full bg-picton-600 hover:bg-picton-700 text-white font-semibold py-3 rounded-xl shadow transition">Eintrag anlegen</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ArrowLeftIcon } from '@heroicons/vue/24/solid'
const form = ref({
  betreff: '',
  straße: '',
  ort: '',
  datum: '',
  name: '',
  isPlanVorhanden: false,
  terminNachVereinbarung: false,
  nachricht: '',
})
</script> 