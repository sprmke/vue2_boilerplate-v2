<template>
  <div class="documentation-vue">
    <p>This page contains the list of the best coding practices on working with Vue.</p>
    <hr>
    <section class="my-3">
      <h4>Essential</h4>
      <p>This application follows the best coding practices style guide provided by Vue developers. That is why we are also recommending to use these guidelines to have a uniformity and cleaner codebase for every developers that will work on the application.</p>
      <p class="text-warning font-weight-bold">So please read the vue style guides before you get started.</p>
      <a href="https://vuejs.org/v2/style-guide/" target="_blank" class="btn btn-lg btn-warning">Vue Style Guide</a>
    </section>
    <hr>
    <section class="mt-3 mb-5">
      <h4>Recommended</h4>
      <p>But when you already worked on large vue applications, there are times that you need to break some rules or improve some things to make everything better for the team and for the project. That is why we created some new rules that are based on previous experiences that we think will make working with the application better and make the codebase cleaner and easier to read and understand for every developers.</p>
      <div class="mt-5">
        <h5>Multi-file component</h5>
        <p>For a more oganized and flexible codebase, we seperated vue component contents to different files.</p>
        <img style="width: 50%" src="@/assets/docs/coding-standards/vue-multifile.png" alt="Vue Multi-file component">
        <p class="mt-2">Please use the <router-link to="/docs/generator"><strong>template generator</strong></router-link> to easily create multi-file components. </p>
      </div>
      <div class="mt-5">
        <h5>Vue Options Order</h5>
        <p>The template generator uses this vue options order, it is recommended to follow this order at all cost and removed unused options.</p>
        <img style="width: 28%" src="@/assets/docs/coding-standards/vue-order.png" alt="Vue Options Order">
        <p></p>
      </div>
      <div class="mt-5">
        <h5>Working with Components</h5>
        <p class="m-0">When importing and registering vue components, please use PascalCase.</p>
        <img style="width: 50%" src="@/assets/docs/coding-standards/vue-components-1.png" alt="Vue - Working with components">
        <p class="mt-2 mb-0">And use small cases seperated with dash (-) when using it on the template.</p>
        <img style="width: 35%" src="@/assets/docs/coding-standards/vue-components-2.png" alt="Vue - Working with components">
        <p></p>
      </div>
    </section>
  </div>
</template>

<script src="./documentation-vue.js"></script>

<style lang="scss" scoped>
  @import './documentation-vue.scss';
</style>

