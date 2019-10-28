<template>
  <div class="documentation-sidebar col-12 col-md-3 col-xl-2 ct-sidebar">
    <nav class="collapse ct-links" id="ct-docs-nav">
      <!-- Getting started -->
      <div class="ct-toc-item active">
        <router-link to="" class="ct-toc-link">Getting started</router-link>
        <ul class="nav ct-sidenav">
          <li>
            <router-link to="/docs/overview">Overview</router-link></li>
          <li>
            <router-link to="/docs/technologies">Technologies</router-link></li>
          <li>
            <router-link to="/docs/firebase">Firebase Auth &amp; Database</router-link></li>
        </ul>
      </div>
      <!-- Project Structure -->
      <div class="ct-toc-item active">
        <router-link to="" class="ct-toc-link">Project Structure</router-link>
        <ul class="nav ct-sidenav">
          <li>
            <router-link to="/docs/root">Root</router-link></li>
          <li>
            <router-link to="/docs/app">App</router-link>
          </li>
          <li>
            <router-link to="/docs/modules">Modules</router-link></li>
          <li>
            <router-link to="/docs/generator">Template Generator</router-link></li>
          <li>
            <router-link to="/docs/styles">Styles</router-link></li>
        </ul>
      </div>
      <!-- Code Best Practices -->
      <div class="ct-toc-item active">
        <router-link to="" class="ct-toc-link">Coding Standards</router-link>
        <ul class="nav ct-sidenav">
          <li>
            <router-link to="/docs/vue">Vue</router-link></li>
          <li>
            <router-link to="/docs/template">Template</router-link></li>
          <li>
            <router-link to="/docs/css">CSS and Styles</router-link></li>
          <li>
            <router-link to="/docs/javascript">Javascript</router-link></li>
          <li>
            <router-link to="/docs/unit-testing">Unit Testing</router-link></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script src="./documentation-sidebar.js"></script>

<style lang="scss" scoped>
  @import './documentation-sidebar.scss';
</style>

