<template>
  <div class="documentation-styles">
    <p class="m-0">This page explains the different application styles and how to work on each of them.</p>
    <hr>
    <section>
      <h4>Working with styles</h4>
      <p>The application has 2 levels of style scopes: <strong>Global</strong> and <strong>component scoped</strong></p>
      <!-- Global styles -->
      <div class="mt-4">
        <h5>Global Styles</h5>
        <p>The global application styles are seperated into different partial SCSS files which are organized in their respective directory. This approach makes the application styles cleaner, more organized and flexible.</p>
        <div class="row">
          <div class="col-md-4">
            <img class="img-fluid" src="@/assets/docs/project-structure/styles/styles-structure.png" alt="Styles - Structure">
          </div>
          <div class="col-md-8">
            <ul>
              <li><strong>main.scss</strong>
                <ul>
                  <li>This is the root SCSS files which holds all the partial SCSS files located at each module style directory. This file must only contain imports of other partial styles.</li>
                  <img style="width: 60%" class="my-2" src="@/assets/docs/project-structure/styles/styles-main.png" alt="Styles - Main">
                </ul>
              </li>
              <li><strong>base</strong>
                <ul>
                  <li>This directory contains all the base styles of the application.</li>
                  <li>You can add new base style files and add them to __base.scss.</li>
                </ul>
              </li>
              <li><strong>helpers</strong>
                <ul>
                  <li>This contains all the helpers and SASS utility styles.</li>
                  <li><span class="text-warning font-weight-bold">Note:</span> These styles are imported to the component styles and not on the main.scss.</li>
                </ul>
              </li>
              <li><strong>themes</strong>
                <ul>
                  <li>This directory contains any theme or branding related styles.</li>
                </ul>
              </li>
              <li><strong>vendors</strong>
                <ul>
                  <li>This directory contains all vendor or third party styles.</li>
                  <li>Please put the vendor styles in a directory to be more organized.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-3">
          <h5>Component Styles</h5>
          <p class="m-0">All component style must have <strong>scoped</strong> attribute to its scss styles.</p>
          <p>This will make the styles scoped only to its component and will not affect other component or global styles.</p>
          <img style="width: 40%" src="@/assets/docs/project-structure/styles/styles-component.png" alt="Styles - Component">
        </div>
      </div>
    </section>
    <hr>
    <section class="mt-4 mb-5">
      <h4>Layout and Design/Theme</h4>
      <p class="m-0">The core main style of this application is using <a href="https://getbootstrap.com/">Bootstrap4</a> as the default layout style and <a href="https://www.creative-tim.com/product/argon-design-system" target="_blank">Argon Design System</a> as the design theme.</p>
      <p class="m-0">Every element layouts and styles on this application are construct by both of them.</p>
    </section>
  </div>
</template>

<script src="./documentation-styles.js"></script>

<style lang="scss" scoped>
  @import './documentation-styles.scss';
</style>

