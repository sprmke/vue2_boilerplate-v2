<template>
  <div class="login-view">
    <the-header/>
    <main class="auth-container">
      <section class="section section-shaped section-lg">
        <div class="shape shape-style-1 shape-success">
          <span class="span-150"></span>
          <span class="span-50"></span>
          <span class="span-100"></span>
          <span class="span-100"></span>
          <span class="span-100"></span>
          <span class="span-50"></span>
        </div>
        <div class="container pt-lg-md">
          <div class="row justify-content-center">
            <div class="col-lg-5">
              <!-- login or register -->
              <router-view/>
              <div class="row mt-3">
                <div class="col-6">
                  <a href="#" class="text-white"><small>Forgot password?</small></a>
                </div>
                <div class="col-6 text-right">
                  <router-link :to="this.authPath === '/login' ? '/register' : '/login'" class="text-white">
                    <small>{{ this.authPath === '/login' ? 'Create new account' : 'Login account' }}</small>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script src="./auth-container.js"></script>

<style lang="scss" scoped>
  @import './auth-container.scss';
</style>

