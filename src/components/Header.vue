<template>
  <header class="flex items-center justify-between h-20 bg-white shadow-md px-6 sticky top-0 w-full z-50 rounded-b-2xl">
    <!-- Logo/Name -->
    <div class="flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" class="h-10 w-10 text-picton-600" fill="currentColor">
        <path d="M8 28L32 10L56 28V54a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V28Z" fill="currentColor"/>
        <rect x="24" y="38" width="16" height="20" rx="2" fill="white"/>
      </svg>
      <span class="text-2xl font-bold text-picton-700">Max Mustermann Baufirma</span>
    </div>
    <!-- Toolname / User -->
    <div class="flex items-center gap-4 text-picton-900">
      <span class="font-medium">BauManager</span>
      <div class="w-8 h-8 rounded-full overflow-hidden border border-picton-200 flex items-center justify-center">
        <img src="/avatar.jpg" class="w-full h-full object-cover" alt="User Avatar" />
      </div>
    </div>
  </header>
</template>

<script setup>
// No script needed for static header
</script> 