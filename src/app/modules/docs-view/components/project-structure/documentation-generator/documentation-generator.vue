<template>
  <div class="documentation-generator">
    <p>This page explains how to easily generate multi-file vue component using the <strong>node template generator</strong> for this application.</p>
    <hr>
    <section>
      <h4>Features</h4>
      <p>This application uses multi-file vue component for more organized project structure and easy to read code.</p>
      <ul class="mt-3">
        <li>This will generate a vue template, scss, js, and test files in a single component directory.</li>
        <li>Each file has its code template to easily get started on coding.</li>
        <li><strong>NOTE: <span class="text-danger">Remove unused codes on css, js and test codes after updating your component.</span></strong></li>
      </ul>
      <img style="width: 80%" src="@/assets/docs/project-structure/generator/generator-features.gif" alt="Template Generator - Features">
    </section>
    <hr>
    <section class="steps">
      <h4>How to use</h4>
      <p>Follow the step below to generate new component.</p>
      <ul class="mt-3">
        <li>1. &nbsp; Open terminal.</li>
        <li>2. &nbsp; Run command: <code>npm run template component-name</code></li>
        <li>3. &nbsp; This will generate a component directory that contains 4 files on the root directory.</li>
        <li>4. &nbsp; Copy and paste the generated directory on the desired module.</li>
      </ul>
      <img style="width: 80%" src="@/assets/docs/project-structure/generator/generator-installation.gif" alt="Template Generator - How to use">
    </section>
    <hr>
    <section class="steps mb-5">
      <h4>Customize</h4>
      <p>If you want to update the default template codes the generator is rendering:</p>
      <ul class="mt-3">
        <li>1. &nbsp; Go to src > generator > template directory.</li>
        <li>2. &nbsp; Modify the component file codes that will become the template code upon every generation.</li>
      </ul>
      <img style="width: 40%" src="@/assets/docs/project-structure/generator/generator-customize.png" alt="Template Generator - Customize">
    </section>
  </div>
</template>

<script src="./documentation-generator.js"></script>

<style lang="scss" scoped>
  @import './documentation-generator.scss';
</style>

