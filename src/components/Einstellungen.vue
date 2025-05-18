<template>
  <div class="min-h-screen bg-picton-50">
    <div class="max-w-3xl mx-auto px-6 py-12">
      <button @click="$router.push('/')"
        class="flex items-center gap-2 bg-white border-2 border-picton-300 rounded-2xl text-picton-700 hover:bg-picton-100 transition px-6 py-2 font-semibold mb-8">
        <ArrowLeftIcon class="w-6 h-6" />
        <span>Zurück</span>
      </button>
      <h1 class="text-3xl font-bold text-picton-700 mb-4">Einstellungen</h1>
      <p class="text-gray-700">Hier können später Firmenprofil, Rollen etc. verwaltet werden.</p>
    </div>
  </div>
</template>
<script setup>
import { ArrowLeftIcon } from '@heroicons/vue/24/solid'
</script> 