<template>
  <div id="app" class="flex flex-col min-h-screen">
    <Header class="bg-blue-800 text-white p-4" />
    <main class="flex-1 p-5">
      <NuxtPage />
    </main>
    <Footer class="bg-blue-800 text-white p-4" />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script>

<style>
/* Remove any custom styles here as they are now replaced by Tailwind CSS */
</style>
