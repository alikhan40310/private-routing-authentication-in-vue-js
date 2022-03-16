<script setup>
import { RouterLink, RouterView } from "vue-router";
import Login from "@/components/Login.vue";
// import bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <Navbar />
  <main>
    <RouterView />
  </main>
</template>

<style>
@import "@/assets/base.css";

</style>
