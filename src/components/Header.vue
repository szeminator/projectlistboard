<template>
  <header class="flex items-center justify-between h-20 bg-white shadow-md px-6 sticky top-0 w-full z-50 rounded-b-2xl">
    <!-- Logo/Name -->
    <div class="flex items-center gap-2">
      <img src="/src/assets/vue.svg" alt="Company Logo" class="h-10 w-10" />
      <span class="text-2xl font-bold text-blue-600">MeineBauFirma</span>
    </div>
    <!-- Toolname / User -->
    <div class="flex items-center gap-4 text-gray-700">
      <span class="font-medium">BauManager</span>
      <div class="w-8 h-8 rounded-full overflow-hidden border border-gray-300 flex items-center justify-center">
        <img src="/avatar.jpg" class="w-full h-full object-cover" alt="User Avatar" />
      </div>
    </div>
  </header>
</template>

<script setup>
// No script needed for static header
</script> 