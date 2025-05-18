<template>
  <div class="min-h-screen bg-picton-50">
    <div class="max-w-5xl mx-auto px-4 py-10">
      <button @click="$router.push('/')"
        class="group flex items-center gap-2 bg-white border-2 border-picton-300 rounded-2xl text-picton-700 hover:bg-picton-100 hover:border-picton-500 transition px-6 py-2 font-semibold mb-8">
        <ArrowLeftIcon class="w-6 h-6" />
        <span>Zurück</span>
      </button>
      <h2 class="text-center text-2xl font-bold mb-2">Unser Team</h2>
      <p class="text-center text-gray-500 mb-10">Lernen Sie unser engagiertes Bau-Team kennen – erfahren, zuverlässig und immer für Sie im Einsatz.</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div v-for="m in mitarbeiter" :key="m.name" class="flex flex-col items-center">
          <img :src="m.img" :alt="m.name" class="w-32 h-32 rounded-full object-cover mb-4 shadow" />
          <div class="font-semibold text-gray-900">{{ m.name }}</div>
          <div class="text-sm text-gray-500 mb-2">{{ m.role }}</div>
          <div class="flex gap-3">
            <a v-if="m.x" :href="m.x" target="_blank" class="text-gray-400 hover:text-picton-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L6.75 17.25M6.75 6.75l10.5 10.5" /></svg>
            </a>
            <a v-if="m.linkedin" :href="m.linkedin" target="_blank" class="text-gray-400 hover:text-picton-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowLeftIcon } from '@heroicons/vue/24/solid'
const mitarbeiter = [
  { name: 'Max Müller', role: 'Bauleiter', img: 'https://randomuser.me/api/portraits/men/11.jpg', x: '#', linkedin: '#' },
  { name: 'Svenja Becker', role: 'Vorarbeiterin', img: 'https://randomuser.me/api/portraits/women/65.jpg', x: '#', linkedin: '#' },
  { name: 'Tobias Schmitt', role: 'Polier', img: 'https://randomuser.me/api/portraits/men/23.jpg', x: '#', linkedin: '#' },
  { name: 'Anna Fischer', role: 'Bauzeichnerin', img: 'https://randomuser.me/api/portraits/women/32.jpg', x: '#', linkedin: '#' },
  { name: 'Jonas Weber', role: 'Projektleiter', img: 'https://randomuser.me/api/portraits/men/44.jpg', x: '#', linkedin: '#' },
  { name: 'Lena Hoffmann', role: 'Bauhelferin', img: 'https://randomuser.me/api/portraits/women/50.jpg', x: '#', linkedin: '#' },
]
</script> 