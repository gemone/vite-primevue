<script setup>
// components
import HelloWorld from "../components/HelloWorld.vue";
// assets
import logoImg from "assets/logo.png";
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
