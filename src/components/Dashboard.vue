<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <Header />
    <main class="flex-1 w-full max-w-4xl mx-auto px-4 py-10">
      <div class="bg-blue-600 text-white p-4 rounded mb-4 text-center">Tailwind Test: Sollte blau sein!</div>
      <h2 class="text-2xl font-bold mb-10 text-gray-900 text-center">Navigation</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <router-link to="/mitarbeiter" class="bg-white rounded-2xl shadow-md flex flex-col items-center justify-center h-40 p-6 hover:shadow-lg hover:bg-blue-50 transition group">
          <div class="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-2xl group-hover:bg-blue-200">
            <i class="fas fa-user"></i>
          </div>
          <div class="text-lg font-semibold text-gray-900 mt-4">Mitarbeiter</div>
          <div class="text-xs text-gray-500 mt-1 text-center">Alle aktiven Mitarbeiter verwalten</div>
        </router-link>
        <router-link to="/baustellen" class="bg-white rounded-2xl shadow-md flex flex-col items-center justify-center h-40 p-6 hover:shadow-lg hover:bg-blue-50 transition group">
          <div class="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-2xl group-hover:bg-blue-200">
            <i class="fas fa-building"></i>
          </div>
          <div class="text-lg font-semibold text-gray-900 mt-4">Baustellen</div>
          <div class="text-xs text-gray-500 mt-1 text-center">Aktive und geplante Baustellen</div>
        </router-link>
        <router-link to="/auftraege" class="bg-white rounded-2xl shadow-md flex flex-col items-center justify-center h-40 p-6 hover:shadow-lg hover:bg-blue-50 transition group">
          <div class="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-2xl group-hover:bg-blue-200">
            <i class="fas fa-clipboard"></i>
          </div>
          <div class="text-lg font-semibold text-gray-900 mt-4">Aufträge</div>
          <div class="text-xs text-gray-500 mt-1 text-center">Aufträge pro Baustelle organisieren</div>
        </router-link>
        <router-link to="/neu" class="bg-white rounded-2xl shadow-md flex flex-col items-center justify-center h-40 p-6 hover:shadow-lg hover:bg-blue-50 transition group">
          <div class="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-2xl group-hover:bg-blue-200">
            <i class="fas fa-plus-circle"></i>
          </div>
          <div class="text-lg font-semibold text-gray-900 mt-4">Neuer Eintrag</div>
          <div class="text-xs text-gray-500 mt-1 text-center">Neuen Auftrag oder Baustelle erstellen</div>
        </router-link>
        <router-link to="/reports" class="bg-white rounded-2xl shadow-md flex flex-col items-center justify-center h-40 p-6 hover:shadow-lg hover:bg-blue-50 transition group">
          <div class="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-2xl group-hover:bg-blue-200">
            <i class="fas fa-file-alt"></i>
          </div>
          <div class="text-lg font-semibold text-gray-900 mt-4">Reports</div>
          <div class="text-xs text-gray-500 mt-1 text-center">Projektberichte und Auswertungen</div>
        </router-link>
        <router-link to="/einstellungen" class="bg-white rounded-2xl shadow-md flex flex-col items-center justify-center h-40 p-6 hover:shadow-lg hover:bg-blue-50 transition group">
          <div class="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-2xl group-hover:bg-blue-200">
            <i class="fas fa-cog"></i>
          </div>
          <div class="text-lg font-semibold text-gray-900 mt-4">Einstellungen</div>
          <div class="text-xs text-gray-500 mt-1 text-center">Firmenprofil, Rollen, etc.</div>
        </router-link>
      </div>
    </main>
    <footer class="text-center text-sm text-gray-400 py-4 mt-8">
      Powered by MeineBauFirma – v1.0
    </footer>
  </div>
</template>

<script setup>
import Header from './Header.vue';
</script> 