<template>
  <nuxt-link to="/" class="animate-logo rounded-lg">
    <img src="~/assets/images/umobile-personal.svg" alt="Logo" class="h-8">
  </nuxt-link>
</template>

<script setup>
</script>

<style scoped>
/* Define the animation for the logo */
.animate-logo {
  transition: transform 0.3s;
}

.animate-logo:hover {
  transform: scale(1.1);
}
</style>
