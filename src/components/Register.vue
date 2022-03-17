<template>
  <div class="cusStyle">
    <div class="container">
      <div class="newstyle">
        <div class="row justify-content-center">
          <div class="col-sm-12 col-md-8 col-lg-6">
            <div class="card">
              <div class="card-header">
                <div class="card-title">Register User</div>
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
                  <div class="form-group">
                    <input
                      v-model="confirmPassword"
                      type="password"
                      class="form-control"
                      placeholder="Confirm Password"
                      required
                    />
                    <div class="error" v-if="confirmPasswordValidate">
                      {{ confirmPasswordValidate }}
                    </div>
                  </div>
                  <button class="btn btn-outline-success form-control">
                    Register
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
      confirmPassword: "",
      userValidate: "",
      emailValidate: "",
      passwordValidate: "",
      confirmPasswordValidate: "",
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
      // confirm password validation
      if (this.password !== this.confirmPassword) {
        this.confirmPasswordValidate = "Password does not match";
        return;
      } else {
        this.confirmPasswordValidate = "";
      }
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
