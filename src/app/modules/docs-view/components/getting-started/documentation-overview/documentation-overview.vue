<template>
  <div class="documentation-overview">
    <p>A project documentation that helps the developers to be familiarized to every features this boilerplate brings and list of coding standards for a cleaner, uniform and more maintable code.</p>
    <hr>
    <h4>Table of contents</h4>
    <p>Please check every modules to be more familiarized to the features, processes and coding practices of this application.</p>
    <ul>
      <li><router-link to="/docs/technologies">Technologies</router-link></li>
      <li><router-link to="">Firebase Auth &amp; Database</router-link></li>
      <li>Project Structure
        <ul>
          <li><router-link to="">Main</router-link></li>
          <li><router-link to="">Modules</router-link></li>
          <li><router-link to="">Styles</router-link></li>
        </ul>
      </li>
      <li>Coding Standards
        <ul>
          <li>
            <router-link to="">Root</router-link></li>
          <li>
            <router-link to="">App</router-link></li>
          <li>
            <router-link to="">Modules</router-link></li>
          <li>
            <router-link to="">Template Generator</router-link></li>
          <li>
            <router-link to="">Styles</router-link></li>
        </ul> 
      </li>
    </ul>
  </div>
</template>

<script src="./documentation-overview.js"></script>

<style lang="scss" scoped>
  @import './documentation-overview.scss';
</style>

