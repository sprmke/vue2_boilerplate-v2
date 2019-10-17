<template>
  <section class="home-technologies section">
    <div class="container">
      <div class="row row-grid justify-content-center">
        <div class="col-lg-8 text-center">
          <div class="text-center">
            <h4 class="display-4 mb-5 mt-5">Pre-built Technologies</h4>
            <div class="row justify-content-center">
              <div class="col-lg-2 col-4">
                <a class="h-100 d-flex align-items-center justify-content-center" href="https://vuejs.org" target="_blank">
                  <img alt="VueJS" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png" width="50px" height="50px">
                </a>
              </div>
              <div class="col-lg-2 col-4">
                <a class="h-100 d-flex align-items-center justify-content-center" href="https://es6.io" target="_blank">
                  <img alt="ES6" src="data:image/png;base64,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" width="50px" height="50px">
                </a>
              </div>
              <div class="col-lg-2 col-4">
                <a class="h-100 d-flex align-items-center justify-content-center" href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank">
                  <img alt="HTML5" src="https://www.completecontrol.co.uk/wp-content/uploads/2017/01/HTML5_Badge_512.png" width="50px" height="50px">
                </a>
              </div>
              <div class="col-lg-2 col-4">
                <a class="h-100 d-flex align-items-center justify-content-center" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
                  <img alt="CSS3" src="https://marioaraque.com/sites/default/files/styles/large/public/field/image/css3.png?itok=2UEAdQyB" width="50px" height="50px">
                </a>
              </div>
              <div class="col-lg-2 col-4">
                <a class="h-100 d-flex align-items-center justify-content-center" href="https://sass-lang.com" target="_blank">
                  <img alt="SASS" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2000px-Sass_Logo_Color.svg.png" width="60px" height="50px">
                </a>
              </div>
              <div class="col-lg-2 col-4">
                <a class="h-100 d-flex align-items-center justify-content-center" href="https://jestjs.io" target="_blank">
                  <img alt="JEST" src="https://res.cloudinary.com/opencollective/image/upload/v1526921427/jest1_vaexks.png" width="50px" height="50px">
                </a>
              </div>
            </div>
            <div class="row justify-content-center mt-5">
              <div class="col-lg-2 col-4">
                <a class="h-100 d-flex align-items-center justify-content-center" href="https://getbootstrap.com" target="_blank">
                  <img alt="Bootstrap" src="https://cdn.freebiesupply.com/logos/large/2x/bootstrap-4-logo-png-transparent.png" width="50px" height="50px">
                </a>
              </div>
              <div class="col-lg-2 col-4">
                <a class="h-100 d-flex align-items-center justify-content-center" href="https://www.creative-tim.com/product/argon-design-system" target="_blank">
                  <img alt="Creative Team - Argon Design System" src="@/assets/home/technologies/argon.png" width="50px" height="50px">
                </a>
              </div>
              <div class="col-lg-2 col-4">
                <a class="h-100 d-flex align-items-center justify-content-center" href="https://nucleoapp.com" target="_blank">
                  <img alt="Nucleo" src="https://nucleoapp.com/assets/img/logo-dark.svg" width="50px" height="50px">
                </a>
              </div>
              <div class="col-lg-2 col-4">
                <a class="h-100 d-flex align-items-center justify-content-center" href="https://fontawesome.com/v4.7.0" target="_blank">
                  <img alt="Font Awesome 4.7" src="@/assets/home/technologies/fontawesome.png" class="rounded" width="50px" height="50px">
                </a>
              </div>
              <div class="col-lg-2 col-4">
                <a class="h-100 d-flex align-items-center justify-content-center" href="https://babeljs.i/" target="_blank">
                  <img alt="Babel" src="@/assets/home/technologies/babel.png" width="50px" height="50px">
                </a>
              </div>
              <div class="col-lg-2 col-4">
                <a class="h-100 d-flex align-items-center justify-content-center" href="https://webpack.js.org" target="_blank">
                  <img alt="Webpack" src="@/assets/home/technologies/webpack.png" width="50px" height="50px">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script src="./home-technologies.js"></script>

<style lang="scss" scoped>
  @import './home-technologies.scss';
</style>

