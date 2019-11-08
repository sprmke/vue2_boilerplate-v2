<template>
  <div class="documentation-modules">
    <p>This page explains how the components are oganized on each module and how to structure and work on each of them.</p>
    <hr>
    <section>
      <p>One of the biggest difference and considered as one the great advantages of using this boilerplate compared to the default vue starter template is how the components are oganized across the application.
        The application is using Smart (Container) and Dumb (Presentational) Components approach inspired by Angular and React.
      </p>
      <p>Please read the article below before you get started.</p>
      <p><a class="btn btn-warning" href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0" target="_blank">Learn more</a></p>
    </section>
    <hr>
    <section class="mb-5">
      <h4>How does it work?</h4>
      <p class="m-0">The main module directory consist of 3 levels:</p>
      <ul>
        <li><strong>Views</strong>
          <ul>
            <li>Works as a page frame/layout.</li>
            <li>It describe how the structure of the page will look like and other modules or components will be rendered inside it depends on the routes.</li>
            <li>It compose of module containers or global shared components.</li>
          </ul>
        </li>
        <li><strong>Modules</strong>
        <ul>
          <li>It compose of container and child components or module-shared components.</li>
          <li>The containers and components directories are mandatory on every module directory.</li>
        </ul>
        </li>
        <li>Components</li>
      </ul>
      <img style="width: 40%" src="@/assets/home/project-structure/modules-structure.png" alt="Modules - Structure">
    </section>
  </div>
</template>

<script src="./documentation-modules.js"></script>

<style lang="scss" scoped>
  @import './documentation-modules.scss';
</style>

