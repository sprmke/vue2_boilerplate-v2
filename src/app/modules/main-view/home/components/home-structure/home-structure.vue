<template>
  <section class="home-structure section section-lg bg-gradient-warning">
    <div class="container">
      <div class="row row-grid align-items-center">
        <div class="col-md-6 order-lg-2 ml-lg-auto">
          <div class="position-relative pl-md-5">
            <img src="@/assets/home/project-structure/project-structure.png" class="img-center img-fluid rounded" alt="image">
          </div>
        </div>
        <div class="col-lg-6 order-lg-1">
          <div class="d-flex px-3">
            <div>
              <div class="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                <i class="ni ni-folder-17 text-warning"></i>
              </div>
            </div>
            <div class="pl-4">
              <h4 class="display-4 text-white">Project Structure</h4>
              <p class="text-white">Pre-built with the most common Vue configurations and customized codebase for cleaner and more maintanable project structure for building large and complex   applications.</p>
            </div>
          </div>
          <div class="card shadow shadow-lg--hover mt-5">
            <div class="card-body">
              <div class="d-flex px-3">
                <div>
                  <div class="icon icon-shape bg-gradient-success rounded-circle text-white">
                    <i class="ni ni-single-copy-04"></i>
                  </div>
                </div>
                <div class="pl-4">
                  <h5 class="title text-success">Multi-File Component</h5>
                  <p>Vue component content is seperated into different files (template, scss, js and spec) for a more maintanable and cleaner code.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="card shadow shadow-lg--hover mt-5">
            <div class="card-body">
              <div class="d-flex px-3">
                <div>
                  <div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
                    <i class="ni ni-money-coins"></i>
                  </div>
                </div>
                <div class="pl-4">
                  <h5 class="title text-warning">Smart &amp; Dumb Components</h5>
                  <p>An Angular inspired approach for data communication between different modules and components.</p>
                  <a href="https://alligator.io/react/smart-dumb-components/" target="_blank" class="text-warning">Learn more</a>
                </div>
              </div>
            </div>
          </div>
          <div class="card shadow shadow-lg--hover mt-5">
            <div class="card-body">
              <div class="d-flex px-3">
                <div>
                  <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                    <i class="ni ni-settings"></i>
                  </div>
                </div>
                <div class="pl-4">
                  <h5 class="title text-primary">Configurations &amp; Styles</h5>
                  <p>Well crafted and organized folder structure for different Vue configurations and application styles.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script src="./home-structure.js"></script>

<style lang="scss" scoped>
  @import './home-structure.scss';
</style>

