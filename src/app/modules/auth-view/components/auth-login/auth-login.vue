<template>
  <div class="auth-login card bg-secondary shadow border-0">
    <div class="card-body px-lg-5 py-lg-5">
      <div class="text-center text-muted mb-4">
        <p class="font-weight-bold">Sign In Account</p>
      </div>
      <form @submit.prevent="onSignIn">
        <div class="form-group mb-3">
          <div class="input-group input-group-alternative">
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
        <div class="custom-control custom-control-alternative custom-checkbox">
          <input class="custom-control-input" id="customCheckLogin" type="checkbox">
          <label class="custom-control-label" for="customCheckLogin">
            <span>Remember me</span>
          </label>
        </div>
        <div class="text-center">
          <button type="submit" :class="{'disabled': isSubmitted}" class="btn btn-primary my-4">Sign in</button>
        </div>
         <!-- auth message -->
        <div v-if="authStatus.status !== null" :class="authStatus.status === 'failed' ? 'alert-danger' : 'alert-success'" class="mt-2 d-flex align-items-center alert alert-dismissible fade show" role="alert">
          <span class="alert-inner--icon"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></span>
          <span class="alert-inner--text">{{authStatus.message}}</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script src="./auth-login.js"></script>

<style lang="scss" scoped>
  @import './auth-login.scss';
</style>

