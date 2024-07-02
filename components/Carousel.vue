<template>
  <a-carousel autoplay>
    <div v-for="(item, index) in items" :key="index" class="carousel-slide">
      <img :src="item.src" :alt="item.alt" class="w-full h-auto" />
      <h3 class="text-white text-center mt-4">{{ item.alt }}</h3>
    </div>
  </a-carousel>
</template>

<script setup>
import { ref } from 'vue'
import image1 from '~/assets/images/iphone-15/cq5dam.web.3000.550.webp'
import image2 from '~/assets/images/samsung/cq5dam.web.3000.550.webp'
import image3 from '~/assets/images/uhome5g/cq5dam.web.3000.550.webp'
import image4 from '~/assets/images/5g-devices/cq5dam.web.3000.550.webp'

const items = ref([
  { src: image1, alt: 'Slide 1' },
  { src: image2, alt: 'Slide 2' },
  { src: image3, alt: 'Slide 3' },
  { src: image4, alt: 'Slide 4' }
])
</script>

<style scoped>
.carousel-slide {
  @apply flex flex-col justify-center items-center h-72 bg-blue-800;
}

.carousel-slide img {
  @apply w-full h-auto; /* Ensure images fit within their container */
}
</style>
