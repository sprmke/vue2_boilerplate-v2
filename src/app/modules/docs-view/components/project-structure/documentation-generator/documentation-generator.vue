<template>
  <div class="documentation-generator">
    <p>This page explains how to easily generate multi-file vue component by using the <strong>node template generator</strong> for this application.</p>
    <hr>
    <section class="mb-2">
      <h4>Features</h4>
      <p>This application uses multi-file vue component for more organized project structure and easy to read code.</p>
      <img style="width: 80%" src="@/assets/docs/project-structure/generator-features.gif" alt="Template Generator Features">
      <ul class="mt-3">
        <li>This will generate a vue template, scss, js, and test file in a single component directory.</li>
        <li>Each file has its code template to easily get started on coding.</li>
      </ul>
    </section>
    <hr>
    <section class="how-to-use mb-5">
      <h4>How to use</h4>
      <p>Follow the step below to generate new component.</p>
      <img style="width: 80%" src="@/assets/docs/project-structure/generator-installation.gif" alt="Template Generator Installation">
      <ul class="mt-3">
        <li>1. &nbsp; Open terminal.</li>
        <li>2. &nbsp; Run command: <code>npm run template component-name</code></li>
        <li>3. &nbsp; This will generate a component directory that contains 4 files on the root directory.</li>
        <li>4. &nbsp; Copy and paste generated directory on the desired module.</li>
      </ul>
    </section>
    <p></p>
  </div>
</template>

<script src="./documentation-generator.js"></script>

<style lang="scss" scoped>
  @import './documentation-generator.scss';
</style>

