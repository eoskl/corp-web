<template>
    <div id="app">
      <Header />
      <main>
        <NuxtPage />
      </main>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'
  </script>
  
  <style>
  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  main {
    flex: 1;
    padding: 20px;
  }
  
  header, footer {
    background-color: #f8f9fa;
    padding: 10px 20px;
  }
  
  header {
    background-color: #4c6188;
    color: #ffffff;
  }
  
  footer {
    background-color: #4c6188;
    color: #ffffff;
  }
  </style>
  