<template>
  <div class="itemsCenter">
    <div class="container">
      <img width="220" height="220" src="/src/assets/logo.svg" alt="" />
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Welcome to Vue.js App",
      description: "Authentication with Vue.js",
    };
  },
};
</script>

<style scoped>
.itemsCenter {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 80vh;
}
p {
  font-size: 1.6rem;
  color: #7f878f;
}
</style>
