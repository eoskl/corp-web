<template>
  <header class="flex justify-between items-center bg-orange-500 text-white p-6">
    <nav class="flex items-center">
      <Logo class="logo mr-4" />
      <ul class="flex gap-4 list-none m-0 p-0">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/services">Personal</NuxtLink></li>
        <li><NuxtLink to="/products">Business</NuxtLink></li>
        <li><NuxtLink to="/about">About Us</NuxtLink></li>
      </ul>
    </nav>
    <div class="flex gap-4">
      <nuxt-link to="/login">
        <a-button type="" shape="round" icon="key">
          Sign In
        </a-button>
      </nuxt-link>
      <nuxt-link to="/registration">
        <a-button type="primary" shape="round" icon="user">
          Sign Up
        </a-button>
      </nuxt-link>
    </div>
  </header>
</template>

<script setup>
import Logo from '@/components/Logo'
</script>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
