<template>
  <div class="documentation-overview">
    <p>A project documentation that helps the developers to be familiarized to every features this boilerplate brings and list of coding standards for a cleaner, uniform and more maintable code.</p>
    <hr>
    <!-- Table of contents -->
    <section class=mb-5>
      <h4>Table of contents</h4>
      <p>Please check every modules to be more familiarized to the features, processes and coding practices of this application.</p>
      <ul>
        <li><router-link to="/docs/technologies">Technologies</router-link></li>
        <li><router-link to="">Firebase Auth &amp; Database</router-link></li>
        <li>Project Structure
          <ul>
            <li>
              <router-link to="/docs/root">Root</router-link></li>
            <li>
              <router-link to="/docs/app">App</router-link></li>
            <li>
              <router-link to="/docs/modules">Modules</router-link></li>
            <li>
              <router-link to="/docs/generator">Template Generator</router-link></li>
            <li>
              <router-link to="/docs/styles">Styles</router-link></li>
          </ul> 
        </li>
        <li>Coding Standards
          <ul>
            <li>
              <router-link to="/docs/vue">Vue</router-link></li>
            <li>
              <router-link to="/docs/template">Template</router-link></li>
            <li>
              <router-link to="/docs/css">CSS and Styles</router-link></li>
            <li>
              <router-link to="/docs/javascript">JavaScript</router-link></li>
            <li>
              <router-link to="/docs/unit-testing">Unit Testing</router-link></li>
          </ul> 
        </li>
      </ul>
    </section>
    <hr>
    <!-- Installation -->
    <section class="mb-5">
      <h4>Installation</h4>
      <p>Npm available commands to execute different tasks for this boilerplate application.</p>
      <img style="width: 60%" class="img-fluid" src="@/assets/docs/gettings-started/installation.png" alt="Installation">
    </section>
    <hr>
    <!-- Editor Settings -->
    <section class="mb-5">
      <h4>Editor Settings</h4>
      <p class="m-0">We recommend to use <strong>VS Code</strong> as your code editor for this application.</p>
      <p class="m-0">Before you get started, please <span class="text-danger font-weight-bold">update the global tab size settings to 2 spaces.</span></p>
      <p>This settings will be applicable globally to any files on your applications.</p>
      <ul>
        <li>Show command pallete: <code>⇧⌘P</code> or <code>cmd+shift+p</code></li>
        <li>Search for preferences: <code>Open User settings</code></li>
        <li>Search for settings: <code>Tab Size</code></li>
        <li>Update the tab size value: <code>2</code></li>
      </ul>
    </section>
  </div>
</template>

<script src="./documentation-overview.js"></script>

<style lang="scss" scoped>
  @import './documentation-overview.scss';
</style>

