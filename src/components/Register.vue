<template>
    
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      userValidate: "",
    //   passwordValidate: "",
    //   users: JSON.parse(localStorage.getItem("users")) || [],
    };
  },
  methods: {
    loginUser() {
      if (this.username == "") {
        this.userValidate = "Username is required";
      } else {
        this.userValidate = "";
      }
      if (this.password.length < 6) {
        this.passwordValidate = "Password must be at least 6 characters";
        return;
      } else {
        this.passwordValidate = "";
      }
      //   local storage
    //   if user name match with local storage
    
      console.log("local storage", lsUsers);
    },
  },
};
</script>

<style>

</style>
