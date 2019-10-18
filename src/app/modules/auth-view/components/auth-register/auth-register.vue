<template>
  <div class="auth-register card bg-secondary shadow border-0">
    <div class="card-body px-lg-5 py-lg-5">
      <div class="text-center text-muted mb-4">
        <p class="font-weight-bold">Register Account</p>
      </div>
      <form @submit.prevent="onRegister">
        <div class="form-group">
          <div class="input-group input-group-alternative mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="ni ni-hat-3"></i></span>
            </div>
            <input v-model="name" class="form-control" name="name" placeholder="Name" type="text">
          </div>
        </div>
        <div class="form-group">
          <div class="input-group input-group-alternative mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="ni ni-email-83"></i></span>
            </div>
            <input v-model="email" class="form-control" name="email" placeholder="Email" type="email">
          </div>
        </div>
        <div class="form-group">
          <div class="input-group input-group-alternative">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
            </div>
            <input v-model="password" class="form-control" name="password" placeholder="Password" type="password">
          </div>
        </div>
        <div class="row my-4">
          <div class="col-12">
            <div class="custom-control custom-control-alternative custom-checkbox">
              <input class="custom-control-input" id="customCheckRegister" type="checkbox">
              <label class="custom-control-label" for="customCheckRegister"><span>I agree with the <a href="#">Privacy Policy</a></span></label>
            </div>
          </div>
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-primary mt-4">Create account</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script src="./auth-register.js"></script>

<style lang="scss" scoped>
  @import './auth-register.scss';
</style>

