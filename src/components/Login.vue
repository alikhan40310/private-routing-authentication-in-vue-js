<template>
  <div class="cusStyle">
    <div class="container">
      <div class="newstyle">
        <div class="row justify-content-center">
          <div class="col-sm-12 col-md-8 col-lg-6">
            <div class="card">
              <div class="card-header">
                <div class="card-title">Login User</div>
              </div>
              <div class="card-body">
                <form
                  class="gap-2 d-flex flex-column"
                  @submit.prevent="registerUser"
                >
                  <div class="form-group">
                    <input
                      v-model="username"
                      type="text"
                      class="form-control"
                      placeholder="Username"
                      required
                    />
                    <div class="error" v-if="userValidate">
                      {{ userValidate }}
                    </div>
                  </div>
                  <div class="form-group">
                    <input
                      v-model="email"
                      type="email"
                      class="form-control"
                      placeholder="Email"
                      required
                    />
                    <div class="error" v-if="emailValidate">
                      {{ emailValidate }}
                    </div>
                  </div>
                  <div class="form-group">
                    <input
                      v-model="password"
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      required
                    />
                    <div class="error" v-if="passwordValidate">
                      {{ passwordValidate }}
                    </div>
                  </div>
                  <button class="btn btn-outline-primary form-control">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      userValidate: "",
      emailValidate: "",
      passwordValidate: "",
      users: [],

      user: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    // validate form
    registerUser() {
      // username validation
      if (this.username.length < 3) {
        this.userValidate = "Username must be at least 3 characters";
        return;
      } else {
        this.userValidate = "";
      }
      // email validation regex
      if (
        !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          this.email
        )
      ) {
        this.emailValidate = "Email is not valid";
        return;
      } else {
        this.emailValidate = "";
      }
      // password validation
      if (this.password.length < 6) {
        this.passwordValidate = "Password must be at least 6 characters";
        return;
      } else {
        this.passwordValidate = "";
      }

      //   storing data to object
      this.user = {
        username: this.username,
        email: this.email,
        password: this.password,
      };

      // push data in array
      this.users.push(this.user);

      localStorage.setItem("users", JSON.stringify(this.users));
      console.log(this.user);
      //   clear form
      this.username = "";
      this.email = "";
      this.password = "";
      //  redirect to login page
      this.$router.push("/dashboard");
      window.location.reload();
    },
  },
};
</script>

<style>
.error {
  color: red;
  font-size: 12px;
}
</style>
