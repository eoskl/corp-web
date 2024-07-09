<template>
  <div>
    <p v-for="user in users" :key="user.id">ID: {{ user.id }} 👉 {{ user.name }}</p>
  </div>
</template>

<script>
definePageMeta({
  layout: "products"
});

export default {
  data() {
    return {
      users: []
    };
  },
  async mounted() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      this.users = await response.json();
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }
};
</script>
