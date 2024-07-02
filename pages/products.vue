<template>
    <div>
      <p v-for="user in users" :key="user.id">ID: {{ user.id }} 👉 {{ user.name }}</p>
    </div>
  </template>
  
  
  <script>
  definePageMeta({
    layout: "products"
  })
  
  export default {
    data () {
      return {
        users: '',
      }
    },
    async mounted() {
      this.users = await $fetch('https://jsonplaceholder.typicode.com/users')
    },
  }
  </script>