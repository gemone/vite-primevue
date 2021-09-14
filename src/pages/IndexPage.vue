<script setup>
// components
import logoImg from 'assets/logo.png';
import HelloWorld from 'components/HelloWorld.vue';
// assets
</script>

<template>
  <div id="index-page">
    <img :src="logoImg" alt="logo" />
    <hello-world />
  </div>
</template>

<style scoped>
#index-page {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
