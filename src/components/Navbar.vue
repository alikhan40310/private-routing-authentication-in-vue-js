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
          <li class="nav-item active">
            <router-link class="nav-link" to="/Register">Register</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Login">Login</router-link>
              
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script></script>

<style></style>
