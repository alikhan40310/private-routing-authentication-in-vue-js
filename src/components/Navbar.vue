<template>
  <nav class="navbar navbar-expand-lgd navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">Navbar</router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <!-- <span class="navbar-toggler-icon"></span> -->
      </button>

      <div class="coldlapse navbard-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto d-flex flex-row gap-4">
          <li class="nav-item active" v-if="!IsLogin">
            <router-link class="nav-link" to="/Login">Login</router-link>
          </li>
          <li class="nav-item" v-else>
            <a class="nav-link" href="" @click.prevent="logOut">Log out</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      IsLogin: "",
    };
  },
  methods: {
    logOut() {
      // delete item from local storage
      localStorage.removeItem("users");
      this.IsLogin = null;
      this.$router.push("/login");
      window.location.reload();
    },
  },
  mounted() {
    if (localStorage.getItem("users")) {
      let activeUser = localStorage.getItem("users");
      this.IsLogin = JSON.parse(activeUser);
    }
  },
};
</script>

<style></style>
