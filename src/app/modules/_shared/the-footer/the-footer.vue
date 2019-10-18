<template>
  <footer class="the-footer">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container">
          <router-link to="/" class="navbar-brand">Vue Boilerplate</router-link>
          <div class="collapse navbar-collapse">
              <ul class="navbar-nav ml-lg-auto">
                  <li class="nav-item">
                      <a class="nav-link nav-link-icon" href="#">
                          <i class="fa fa-facebook"></i>
                          <span class="nav-link-inner--text d-lg-none">Discover</span>
                      </a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link nav-link-icon" href="#">
                          <i class="fa fa-instagram"></i>
                          <span class="nav-link-inner--text d-lg-none">Profile</span>
                      </a>
                  </li>
                  <li class="nav-item dropdown">
                      <a class="nav-link nav-link-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i class="fa fa-github"></i>
                          <span class="nav-link-inner--text d-lg-none">Settings</span>
                      </a>
                  </li>
              </ul>

          </div>
      </div>
  </nav>
  </footer>
</template>

<script src="./the-footer.js"></script>

<style lang="scss" scoped>
  @import './the-footer.scss';
</style>

