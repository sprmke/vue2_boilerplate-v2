<template>
  <section class="home-features section section-lg">
    <div class="container">
      <div class="row justify-content-center text-center mb-md">
        <div class="col-lg-8">
          <h2 class="display-4">Awesome Features</h2>
          <p class="text-muted">Integrated with the most popular and best vue core libraries</p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="row row-grid">
            <div class="col-lg-4">
              <div class="card card-lift--hover shadow border-0 h-100">
                <div class="card-body d-flex flex-column py-5">
                  <div class="d-flex align-items-center">
                    <img src="https://miro.medium.com/max/4000/1*1lbe4wZ6VmT2rT78sx9Qmw.png" class="img-fluid mr-2" width="30px" alt="">
                    <h5 class="text-primary text-uppercase m-0">VUEX</h5>
                  </div>
                  <p class="text-muted m-0"><small>State Management</small></p>
                  <p class="description mt-3 flex-1">A state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application.</p>
                  <div>
                    <a href="https://vuex.vuejs.org/" target="_blank" class="btn btn-primary mt-2">Learn more</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card card-lift--hover shadow border-0 h-100">
                <div class="card-body d-flex flex-column py-5">
                  <div class="d-flex align-items-center">
                    <img src="data:image/png;base64,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" class="img-fluid mr-2" width="30px" alt="">
                    <h5 class="text-success text-uppercase m-0">AXIOS</h5>
                  </div>
                  <p class="text-muted m-0"><small>HTTP Client</small></p>
                  <p class="description mt-3 flex-1">A popular, promise-based HTTP client that sports an easy-to-use API and can be used in both the browser and Node.js.</p>
                  <div>
                    <a href="https://github.com/axios/axios" target="_blank" class="btn btn-success mt-2">Learn more</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card card-lift--hover shadow border-0 h-100">
                <div class="card-body d-flex flex-column py-5">
                  <div class="d-flex align-items-center">
                    <img src="@/assets/home/features/vuelidate.png" class="img-fluid mr-2" width="30px" alt="">
                    <h5 class="text-warning text-uppercase m-0">VUELIDATE</h5>
                  </div>
                  <p class="text-muted m-0"><small>Form Validation</small></p>
                  <p class="description mt-3 flex-1">A simple, lightweight model-based validation for Vue.js. It is a data-model oriented, meaning validation rules are added to a validations object in the component definition.</p>
                  <div>
                    <a href="https://vue-test-utils.vuejs.org" target="_blank" class="btn btn-warning mt-2">Learn more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-4">
        <div class="col-lg-12">
          <div class="row row-grid">
            <div class="col-lg-4 offset-lg-2">
              <div class="card card-lift--hover shadow border-0 h-100">
                <div class="card-body d-flex flex-column py-5">
                  <div class="d-flex align-items-center">
                    <img src="https://miro.medium.com/max/600/1*RQwRLQ0yyCvYmRn_Nst5yg.png" class="img-fluid mr-2" width="30px" alt="">
                    <h5 class="text-info text-uppercase m-0">JEST &amp; TEST UTILS</h5>
                  </div>
                  <p class="text-muted m-0"><small>Unit Testing</small></p>
                  <p class="description mt-3 flex-1">Built with most common test utilities and template to easily get started on writing unit tests.</p>
                  <div>
                    <a href="https://vuex.vuejs.org/" target="_blank" class="btn btn-info mt-2">Learn more</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card card-lift--hover shadow border-0 h-100">
                <div class="card-body d-flex flex-column py-5">
                  <div class="d-flex align-items-center">
                    <img src="https://miro.medium.com/max/300/1*R4c8lHBHuH5qyqOtZb3h-w.png" class="img-fluid mr-2" width="30px" alt="">
                    <h5 class="text-danger text-uppercase m-0">FIREBASE</h5>
                  </div>
                  <p class="text-muted m-0"><small>Database &amp; Authentication</small></p>
                  <p class="description mt-3 flex-1">Built with simple login authentication and database connected to firebase.</p>
                  <div>
                    <a href="https://firebase.google.com/" target="_blank" class="btn btn-danger mt-2">Learn more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script src="./home-features.js"></script>

<style lang="scss" scoped>
  @import './home-features.scss';
</style>

