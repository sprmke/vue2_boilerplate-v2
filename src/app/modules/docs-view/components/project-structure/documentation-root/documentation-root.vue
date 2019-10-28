<template>
  <div class="documentation-root">
    <p>This page explains the application root files functions and how to work on each of them.</p>
    <hr>
    <div class="row">
      <div class="col-md-3">
        <img class="img-fluid" src="@/assets/docs/project-structure/root.png" alt="Root">
      </div>
      <div class="col-md-9">
        <ul>
          <li><strong>node_modules</strong>
            <ul>
              <li>Contains all the node packages of your application which are included on the package.json file.</li>
            </ul>
          </li>
          <li><strong>public</strong>
            <ul>
              <li>Contains the index.html, static assets and other configuration files which are not handled by webpack and will be used on generation of the application upon build.</li>
            </ul>
          </li>
          <li><strong>src</strong>
            <ul>
              <li>Contains the central code and business logic of the application.</li>
            </ul> 
          </li>
          <li><strong>.browserslistrc</strong>
            <ul>
              <li>A configuration file to share target browsers between different front-end tools. <a href="https://www.npmjs.com/package/browserslist" target="_blank">Learn more</a></li>
            </ul> 
          </li>
          <li><strong>environment variables</strong>
            <ul>
              <li>Contains the application environment variables that can be accessible across the application. <a href="https://cli.vuejs.org/guide/mode-and-env.html" target="_blank">Learn more</a></li>
            </ul> 
          </li>
          <li><strong>.eslintrc</strong>
            <ul>
              <li>A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.</li>
            </ul> 
          </li>
          <li><strong>.gitignore</strong>
            <ul>
              <li>Allows you to ignore files, such as editor backup files, build products or local configuration overrides that you never want to commit into a repository.</li>
            </ul> 
          </li>
          <li><strong>babel.config.js</strong>
            <ul>
              <li>A Babel configuration file that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.</li>
            </ul> 
          </li>
          <li><strong>jest.config.js</strong>
            <ul>
              <li>A Jest configuration file which tells how to handle all jest and unit test related files accross the application.</li>
            </ul> 
          </li>
          <li><strong>package.json</strong>
            <ul>
              <li>This holds various metadata relevant to the project. This file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies.</li>
            </ul> 
          </li>
          <li><strong>postcss.config.js</strong>
            <ul>
              <li>A tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.</li>
            </ul> 
          </li>
          <li><strong>vue.config.js</strong>
            <ul>
              <li>An optional config file that will be automatically loaded by @vue/cli-service if it's present in your project root. This contains all of your application vue configurations which you can also modify webpack configs.</li>
            </ul> 
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script src="./documentation-root.js"></script>

<style lang="scss" scoped>
  @import './documentation-root.scss';
</style>

