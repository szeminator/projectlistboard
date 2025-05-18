<template>
  <div class="min-h-screen bg-picton-50 flex flex-col">
    <main class="flex-1 w-full max-w-4xl mx-auto px-4 py-10">
      <h2 class="text-2xl font-bold mb-10 text-picton-900 text-center">Navigation</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <router-link to="/mitarbeiter" class="bg-white border-2 border-picton-300 rounded-2xl shadow-md flex flex-col items-center justify-center h-40 p-6 hover:shadow-lg hover:bg-picton-100 transition group">
          <div class="bg-picton-100 rounded-full w-12 h-12 flex items-center justify-center group-hover:bg-picton-200">
            <UserIcon class="w-7 h-7 text-picton-600" />
          </div>
          <div class="text-lg font-semibold text-picton-900 mt-4">Mitarbeiter</div>
          <div class="text-xs text-picton-700 mt-1 text-center">Alle aktiven Mitarbeiter verwalten</div>
        </router-link>
        <router-link to="/baustellen" class="bg-white border-2 border-picton-300 rounded-2xl shadow-md flex flex-col items-center justify-center h-40 p-6 hover:shadow-lg hover:bg-picton-100 transition group">
          <div class="bg-picton-100 rounded-full w-12 h-12 flex items-center justify-center group-hover:bg-picton-200">
            <BuildingOffice2Icon class="w-7 h-7 text-picton-600" />
          </div>
          <div class="text-lg font-semibold text-picton-900 mt-4">Baustellen</div>
          <div class="text-xs text-picton-700 mt-1 text-center">Aktive und geplante Baustellen</div>
        </router-link>
        <router-link to="/auftraege" class="bg-white border-2 border-picton-300 rounded-2xl shadow-md flex flex-col items-center justify-center h-40 p-6 hover:shadow-lg hover:bg-picton-100 transition group">
          <div class="bg-picton-100 rounded-full w-12 h-12 flex items-center justify-center group-hover:bg-picton-200">
            <ClipboardDocumentListIcon class="w-7 h-7 text-picton-600" />
          </div>
          <div class="text-lg font-semibold text-picton-900 mt-4">Aufträge</div>
          <div class="text-xs text-picton-700 mt-1 text-center">Aufträge pro Baustelle organisieren</div>
        </router-link>
        <router-link to="/neu" class="bg-white border-2 border-picton-300 rounded-2xl shadow-md flex flex-col items-center justify-center h-40 p-6 hover:shadow-lg hover:bg-picton-100 transition group">
          <div class="bg-picton-100 rounded-full w-12 h-12 flex items-center justify-center group-hover:bg-picton-200">
            <PlusCircleIcon class="w-7 h-7 text-picton-600" />
          </div>
          <div class="text-lg font-semibold text-picton-900 mt-4">Neuer Eintrag</div>
          <div class="text-xs text-picton-700 mt-1 text-center">Neuen Auftrag oder Baustelle erstellen</div>
        </router-link>
        <router-link to="/reports" class="bg-white border-2 border-picton-300 rounded-2xl shadow-md flex flex-col items-center justify-center h-40 p-6 hover:shadow-lg hover:bg-picton-100 transition group">
          <div class="bg-picton-100 rounded-full w-12 h-12 flex items-center justify-center group-hover:bg-picton-200">
            <DocumentChartBarIcon class="w-7 h-7 text-picton-600" />
          </div>
          <div class="text-lg font-semibold text-picton-900 mt-4">Reports</div>
          <div class="text-xs text-picton-700 mt-1 text-center">Projektberichte und Auswertungen</div>
        </router-link>
        <router-link to="/einstellungen" class="bg-white border-2 border-picton-300 rounded-2xl shadow-md flex flex-col items-center justify-center h-40 p-6 hover:shadow-lg hover:bg-picton-100 transition group">
          <div class="bg-picton-100 rounded-full w-12 h-12 flex items-center justify-center group-hover:bg-picton-200">
            <Cog6ToothIcon class="w-7 h-7 text-picton-600" />
          </div>
          <div class="text-lg font-semibold text-picton-900 mt-4">Einstellungen</div>
          <div class="text-xs text-picton-700 mt-1 text-center">Firmenprofil, Rollen, etc.</div>
        </router-link>
      </div>
    </main>
    <footer class="text-center text-sm text-picton-400 py-4 mt-8">
      Powered by MeineBauFirma – v1.0
    </footer>
  </div>
</template>

<script setup>
import { UserIcon, BuildingOffice2Icon, ClipboardDocumentListIcon, PlusCircleIcon, DocumentChartBarIcon, Cog6ToothIcon } from '@heroicons/vue/24/solid'
</script> 