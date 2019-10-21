<template>
  <div class="documentation-container">
    <header class="navbar navbar-expand navbar-dark flex-row align-items-center justify-content-between ct-navbar">
      <router-link class="navbar-brand mr-0 mr-md-2" to="/docs/overview">
        vue boilerplate docs
      </router-link>
      <ul class="navbar-nav flex-row mr-auto ml-4 d-none d-md-flex">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
      </ul>
      <div class="d-flex">
        <router-link to="/login" class="btn btn-warning btn-icon mb-3 mb-sm-0">
          <span class="btn-inner--icon"><i class="ni ni-spaceship"></i></span>
          <span class="btn-inner--text">Live Demo</span>
        </router-link>
        <a href="https://github.com/sprmke/vue-boilerplate" target="_blank" class="btn btn-neutral btn-icon d-none d-md-block">
          <span class="btn-inner--icon">
            <i class="fa fa-github mr-2"></i>
          </span>
          <span class="nav-link-inner--text">Github</span>
        </a>
      </div>
      <button class="navbar-toggler ct-search-docs-toggle d-block d-md-none ml-auto ml-sm-0" type="button" data-toggle="collapse" data-target="#ct-docs-nav" aria-controls="ct-docs-nav" aria-expanded="false" aria-label="Toggle docs navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </header>
    <div class="container-fluid">
      <div class="row flex-xl-nowrap">
        <!-- sidebar -->
        <documentation-sidebar/>
        <main class="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 ct-content" role="main">
          <div class="ct-page-title">
            <h1 class="ct-title" id="content">{{pageTitle}}</h1>
          </div>
          <!-- dynamic pages -->
          <router-view/>
        </main>
      </div>
    </div>
  </div>
</template>

<script src="./documentation-container.js"></script>

<style lang="scss" scoped>
  @import './documentation-container.scss';
</style>

