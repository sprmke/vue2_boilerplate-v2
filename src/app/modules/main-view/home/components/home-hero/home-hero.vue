<template>
  <section class="home-hero section section-lg section-shaped pb-50">
    <div class="shape shape-style-1 shape-success">
      <span class="span-150"></span>
      <span class="span-50"></span>
      <span class="span-100"></span>
      <span class="span-150"></span>
      <span class="span-100"></span>
      <span class="span-50"></span>
      <span class="span-150"></span>
      <span class="span-100"></span>
      <span class="span-50"></span>
    </div>
    <div class="container py-lg-md d-flex">
      <div class="col px-0">
        <div class="row">
          <div class="col-lg-8">
            <h1 class="display-3 text-white">Develop Vue apps faster!</h1>
            <p class="lead text-white"><span class="d-block">A boilerplate that lets you get started on developing Vue applications.</span> It includes <strong>vuex</strong> for state management, <strong>axios</strong> for HTTP client request, <strong>vuelidate</strong> for forms and validations, <strong>jest and vue test utils</strong> for unit testing, authentication and route guards, and many more!</p>
            <div class="btn-wrapper">
              <router-link to="/login" class="btn btn-warning btn-icon mb-3 mb-sm-0">
                <span class="btn-inner--icon"><i class="ni ni-spaceship"></i></span>
                <span class="btn-inner--text">Live Demo</span>
              </router-link>
              <router-link to="/docs" class="btn btn-white btn-icon mb-3 mb-sm-0"> 
                <span class="btn-inner--icon"><i class="ni ni-collection"></i></span>
                <span class="btn-inner--text">Documentation</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script src="./home-hero.js"></script>

<style lang="scss" scoped>
  @import './home-hero.scss';
</style>

