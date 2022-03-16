<template>
  <div class="register">
    <div class="container">
      <div class="newstyle">
        <div class="row justify-content-center">
          <div class="col-sm-12 col-md-8 col-lg-6">
            <div class="card">
              <div class="card-header">
                <div class="card-title">Register User</div>
              </div>
              <div class="card-body">
                <form class="gap-2 d-flex flex-column">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Username"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Confirm Password"
                    />
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
export default {};
</script>

<style>
.newstyle {
  /* height: 100vh; */
  /* display: flex; */
  /* width: 100%; */
}
</style>
