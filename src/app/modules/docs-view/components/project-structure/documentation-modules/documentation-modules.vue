<template>
  <div class="documentation-modules">
    <p>This page explains how the components are oganized on each module and how to structure and work on each of them.</p>
    <hr>
    <section>
      <p>One of the biggest difference and considered as one of the great advantages of using this boilerplate compared to the default vue starter template is how the components are oganized across the application.
        The application is using Smart (Container) and Dumb (Presentational) Components approach inspired by Angular and React.
      </p>
      <p>Please read the article below before you get started.</p>
      <p><a class="btn btn-warning" href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0" target="_blank">Learn more</a></p>
    </section>
    <hr>
    <section>
      <h4>How does it work?</h4>
      <div class="row">
        <div class="col-3">
          <img style="width: 100%" src="@/assets/docs/project-structure/modules/modules-project-structure.png" alt="Modules - Structure">
        </div>
        <div class="col-8">
          <p class="m-0 mt-3">The main module directory consist of 3 levels:</p>
          <ul>
            <li><strong>Views</strong>
              <ul>
                <li>Works as a page frame/layout.</li>
                <li>It describe how the structure of the page will look like and other modules or components will be rendered inside it depends on the active route.</li>
              </ul>
            </li>
            <li><strong>Modules</strong>
              <ul>
                <li>A module can be composed of 3 different type of directories: <strong>containers</strong>, <strong>components</strong> and <strong>_shared</strong> (module-shared).</li>
                <li>The containers and components directories are mandatory on every module directory.</li>
              </ul>
            </li>
            <li><strong>Components</strong>
              <ul>
                <li>A component is composed of 4 different vue content files (vue, scss, js, test).</li>
                <li>Component naming convention must be small-cases seperated with dash: <code>awesome-sample-component</code></li>
                <li>To easily generate multi-file component, use the <router-link to="/docs/generator">template generator</router-link>.</li>
                <li>A component must be stored on either containers, component or shared directories.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <hr>
    <section class="mb-5">
      <h4 class="mb-3">Rules on Maintaining the Component Structure</h4>
      <div class="row mb-4">
        <div class="col">
          <h6><strong>Working with Views</strong></h6>
          <ul>
            <li class="mb-2">
              <span>When a view has only one module</span>
              <img class="mt-1" style="width: 60%" src="@/assets/docs/project-structure/modules/modules-1.png" alt="Modules - Structure">
            </li>
            <li class="mb-2">
              <span>When a view has multiple modules</span>
              <img class="mt-1" style="width: 60%" src="@/assets/docs/project-structure/modules/modules-2.png" alt="Modules - Structure">
            </li>
          </ul>
        </div>
        <div class="col">
          <h6><strong>Working with Modules</strong></h6>
          <ul>
            <li class="mb-2">
              <span>When a module doesn't have any sub-modules</span>
              <img class="mt-1" style="width: 60%" src="@/assets/docs/project-structure/modules/modules-4.png" alt="Modules - Structure">
            </li>
            <li class="mb-2">
              <span>When a module has sub-modules</span>
              <img class="mt-1" style="width: 60%" src="@/assets/docs/project-structure/modules/modules-3.png" alt="Modules - Structure">
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h6><strong>Naming your component</strong></h6>
          <ul>
            <li>Make sure that every component name is unique across the application.</li>
            <li>
              <span>A recommended practice to do is to prefix your component name by your module or sub-module name.</span>
              <img class="mt-1" style="width: 40%" src="@/assets/docs/project-structure/modules/modules-naming-convention.png" alt="Modules - Naming Convention">
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script src="./documentation-modules.js"></script>

<style lang="scss" scoped>
  @import './documentation-modules.scss';
</style>

