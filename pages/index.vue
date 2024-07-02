<template>
  <div>
    <Carousel />
    <section class="bg-gray-200">
      <h1 class="text-3xl font-bold underline">
        Welcome to Our Corporate Website
      </h1>
      <p>This is the home page.</p>
    </section>
  </div>
</template>

<script setup>
import Carousel from '~/components/Carousel.vue'
</script>

<style>
section {
  text-align: center;
  padding: 50px;
}
</style>
