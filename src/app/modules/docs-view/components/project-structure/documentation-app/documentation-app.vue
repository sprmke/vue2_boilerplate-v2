<template>
  <div class="documentation-app">
    <p>This page explain the app modules and files function, how to organize and important notes on using and maintaining their content and where you can study more about each module.</p>
    <hr>
    <div class="row mb-5">
      <div class="col-md-3">
        <img class="img-fluid" src="@/assets/docs/project-structure/app.png" alt="App">
      </div>
      <div class="col-md-9">
        <ul>
          <li><strong>app.vue</strong>
            <ul>
              <li>This is the application root vue component. The root container where registered   page components has been rendered depending on the active route.</li>
            </ul>
          </li>
          <li><strong>bus</strong>
            <ul>
              <li>This directory contains the applcation event bus.</li>
              <img style="width: 30%" class="d-flex mb-2 img-fluid" src="@/assets/docs/project-structure/app-bus-2.png" alt="App - Vue Event Bus">
              <img style="width: 60%" class="d-flex img-fluid" src="@/assets/docs/project-structure/app-bus.png" alt="App - Vue Event Bus">
              <li><strong>What?</strong>
                <ul>
                  <li>Vue event bus are used to emit and listen to events.</li>
                </ul>
              </li>
              <li><strong>Function:</strong>
                <ul>
                  <li>It is commonly used to emit events from differ apart components.</li>
                  <li>It is used to store centralized code you want to access on different places in the application.</li>
                </ul>
              </li>
              <li><strong>Important notes:</strong>
                <ul>
                  <li>It is an alternative approach on using Vuex store specially for simple/straight-forward state mangement.</li>
                  <li>Be careful on using when emitting with complex logic or big data across components.</li>
                </ul>
              </li>
              <li><strong>Learn more:</strong>
                <ul>
                  <li><a href="https://medium.com/@andrejsabrickis/https-medium-com-andrejsabrickis-create-simple-eventbus-to-communicate-between-vue-js-components-cdc11cd59860" target="_blank">A simple EventBus to communicate between Vue.js components</a></li>
                  <li><a href="https://stackoverflow.com/questions/48305830/what-is-the-difference-between-event-bus-and-mixins-in-vuejs" target="_blank">Event bus vs mixins</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><strong>configs</strong>
            <ul>
              <li>This directory contains all application config related files.</li>
              <li><strong>Important notes:</strong>
                <ul>
                  <li>Please do organize each config files to different modules/features folder for a maintainable code structure.</li>
                </ul>
              </li>
            </ul>
          </li>
          <li><strong>constants</strong>
            <ul>
              <li>This directory contains the global application constants.</li>
              <img style="width: 30%" class="d-flex mb-2 img-fluid" src="@/assets/docs/project-structure/app-constants-2.png" alt="App - Vue Event Bus">
              <img style="width: 60%" class="d-flex img-fluid" src="@/assets/docs/project-structure/app-constants.png" alt="App - Vue Event Bus">
              <li><strong>Important notes:</strong>
                <ul>
                  <li>Please do organize each constant files to different modules/features folder for a maintainable code structure.</li>
                  <li>Please make sure all constants has this type of format: <code>SAMPLE_CONSTANT</code></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><strong>directives</strong>
            <ul>
              <li>This directory contains the global application custom directives.</li>
              <img style="width: 30%" class="d-flex mb-2 img-fluid" src="@/assets/docs/project-structure/app-directives-2.png" alt="App - Vue Directives">
              <img style="width: 60%" class="d-flex img-fluid" src="@/assets/docs/project-structure/app-directives.png" alt="App - Vue Directives">
              <li><strong>What:</strong>
                <ul>
                  <li>Vue directives are some special token in the markup that tells the library to do something to a DOM element.</li>
                </ul>
              </li>
              <li><strong>Function:</strong>
                <ul>
                  <li>Used to do things on our HTML elements in a certain way based on the function logic specified.</li>
                  <li>Vue Built-in directives: v-if, v-show, v-else, v-for, v-bind , v-model, v-on, etc.</li>
                </ul>
              </li>
              <li><strong>Important Notes:</strong>
                <ul>
                  <li>Please do organize each declared directives seperated by comments.</li>
                </ul>
              </li>
              <li><strong>Learn more:</strong>
                <ul>
                  <li><a href="https://012.vuejs.org/guide/directives.html" target="_blank">Built-in Directives</a></li>
                  <li><a href="https://vuejs.org/v2/guide/custom-directive.html" target="_blank">Custom Directives</a></li>
                </ul>
              </li>
            </ul> 
          </li>
          <li><strong>filters</strong>
            <ul>
              <li>This directory contains the global application custom filters.</li>
              <img style="width: 30%" class="d-flex mb-2 img-fluid" src="@/assets/docs/project-structure/app-filters-2.png" alt="App - Vue Filters">
              <img style="width: 60%" class="d-flex img-fluid" src="@/assets/docs/project-structure/app-filters.png" alt="App - Vue Filters">
              <li><strong>Function:</strong>
                <ul>
                  <li>Vue filters are used to apply common text formatting.</li>
                  <li>Mainly used to tranform string data depends on the function logic specified.
Example: Convert timestamp into readable date format.</li>
                </ul>
              </li>
              <li><strong>Important Notes:</strong>
                <ul>
                  <li>Please do organize each declared filters by placing them to appropriate type seperated by comments.</li>
                </ul>
              </li>
              <li><strong>Learn more:</strong>
                <ul>
                  <li><a href="https://vuejs.org/v2/guide/filters.html" target="_blank">Built-in Filters</a></li>
                  <li><a href="https://v1.vuejs.org/guide/custom-filter.html" target="_blank">Custom Filters</a></li>
                </ul>
              </li>
            </ul> 
          </li>
          <li><strong>mixins</strong>
            <ul>
              <li>This directory contains all the application custom mixins.</li>
              <img style="width: 30%" class="d-flex mb-2 img-fluid" src="@/assets/docs/project-structure/app-mixins-2.png" alt="App - Vue Mixins">
              <img style="width: 60%" class="d-flex img-fluid" src="@/assets/docs/project-structure/app-mixins.png" alt="App - Vue Mixins">
              <li><strong>What:</strong>
                <ul>
                  <li>Mixins are a flexible way to distribute reusable functionalities for Vue components.</li>
                </ul>
              </li>
              <li><strong>Function:</strong>
                <ul>
                  <li>Mixins are used to have cleaner code and prevent duplication of codes across our application.</li>
                  <li>When a component uses a mixin, all options in the mixin will be “mixed” into the component’s own options.</li>
                  <li>A mixin object can contain any component options. </li>
                </ul>
              </li>
              <li><strong>Important Notes:</strong>
                <ul>
                  <li>Never use mixins to store data, mixins must only contain codes that are always used on multiple components.</li>
                  <li>You can only declare data to set default value, but keep in mind this will override the component data where you will import your mixins.</li>
                </ul>
              </li>
              <li><strong>Learn more:</strong>
                <ul>
                  <li><a href="https://vuejs.org/v2/guide/mixins.html" target="_blank">Mixins</a></li>
                </ul>
              </li>
            </ul> 
          </li>
          <li><strong>modules</strong>
            <ul>
              <li>This directory contain the application modules and sub modules that contains the application vue components.</li>
              <li>More detailed explanation for this section is on another <router-link to="/docs/modules">module</router-link>.</li>
              <img style="width: 30%" class="img-fluid" src="@/assets/docs/project-structure/app-modules.png" alt="App - Modules">
            </ul> 
          </li>
          <li><strong>routes</strong>
            <ul>
              <li>This directory contains the application router configuration.</li>
              <img style="width: 30%" class="d-flex mb-2 img-fluid mb-2" src="@/assets/docs/project-structure/app-routes-3.png" alt="App - Vue Router">
              <img style="width: 60%" class="d-flex mb-2 img-fluid mb-2" src="@/assets/docs/project-structure/app-routes-2.png" alt="App - Vue Router">
              <img style="width: 60%" class="d-flex img-fluid" src="@/assets/docs/project-structure/app-routes.png" alt="App - Vue Router">
              <li><strong>Important Notes:</strong>
                <ul>
                  <li>Please do organize component imports seperated by module name comment.</li>
                  <li>Make sure every component route has this properties: <em>path, name, component and meta</em>.</li>
                </ul>
              </li>
              <li><strong>Learn more:</strong>
                <ul>
                  <li><a href="https://router.vuejs.org/" target="_blank">Vue router</a></li>
                </ul>
              </li>
            </ul> 
          </li>
          <li><strong>services</strong>
            <ul>
              <li>This directory contains all API related files.</li>
              <img style="width: 30%" class="d-flex mb-2 img-fluid" src="@/assets/docs/project-structure/app-services-2.png" alt="App - Vue Axios">
              <img style="width: 60%" class="d-flex img-fluid" src="@/assets/docs/project-structure/app-services.png" alt="App - Vue Axios">
              <li><strong>Important Notes:</strong>
                <ul>
                  <li>This application is using axios to make HTTP requests.</li>
                  <li>You can create new service instance under 'modules' directory.</li>
                  <li>Endpoints can be seperated to different files by HTTP methods.</li>
                </ul>
              </li>
              <li><strong>Learn more:</strong>
                <ul>
                  <li><a href="https://github.com/axios/axios" target="_blank">Axios</a></li>
                </ul>
              </li>
            </ul> 
          </li>
          <li><strong>static</strong>
            <ul>
              <li>This directory contains all the applcation static JS and JSON files.</li>
              <img style="width: 30%" class="d-flex img-fluid mb-2" src="@/assets/docs/project-structure/app-static-3.png" alt="App - Static">
              <img style="width: 60%" class="d-flex img-fluid mb-2" src="@/assets/docs/project-structure/app-static-1.png" alt="App - Static">
              <img style="width: 60%" class="d-flex img-fluid" src="@/assets/docs/project-structure/app-static-2.png" alt="App - Static">
              <li><strong>Important Notes:</strong>
                <ul>
                  <li>There are two options you can do to get static data:
                    <ul>
                      <li><strong>JS directory</strong> - contains js files where each file is a collection of static methods that can returns different data types.</li>
                      <li><strong>JSON directory</strong> - contains JSON files</li>
                    </ul>
                  </li>
                  <li>Please do organize each static files to different modules/features folder for a maintainable code structure.</li>
                </ul>
              </li>
            </ul> 
          </li>
          <li><strong>stores</strong>
            <ul>
              <li>This directory contains all store/state management related files.</li>
              <img style="width: 30%" class="d-flex img-fluid mb-2" src="@/assets/docs/project-structure/app-store-2.png" alt="App - Vuex Store">
              <img style="width: 60%" class="d-flex img-fluid" src="@/assets/docs/project-structure/app-store.png" alt="App - Vuex Store">
              <li><strong>Important Notes:</strong>
                <ul>
                  <li>This application is using Vuex for state management.</li>
                  <li>Global store.js configuration must only contain code for importing store modules.</li>
                  <li>Vuex code for each file must be placed and sepereated to different module directory inside 'modules' directory for a cleaner and maintainable code structures. </li>
                </ul>
              </li>
              <li><strong>Learn more:</strong>
                <ul>
                  <li><a href="https://vuex.vuejs.org/" target="_blank">Vuex</a></li>
                </ul>
              </li>
            </ul> 
          </li>
          <li><strong>styles</strong>
            <ul>
              <li>This directory contains all global applicatiotn css/scss related styles.</li>
              <li>More detailed explanation for this section is on another <router-link to="/docs/styles">module</router-link>.</li>
              <img style="width: 30%" class="img-fluid" src="@/assets/docs/project-structure/app-styles.png" alt="App - Modules">
            </ul> 
          </li>
          <li><strong>tests</strong>
            <ul>
              <li>This directory contains all test realated files (unit, end-to-end, etc).</li>
              <img style="width: 30%" class="d-flex mb-2 img-fluid" src="@/assets/docs/project-structure/app-tests.png" alt="App - Tests">
              <img style="width: 60%" class="d-flex mb-2 img-fluid" src="@/assets/docs/project-structure/app-tests-2.png" alt="App - Tests">
              <img style="width: 60%" class="d-flex mb-2 img-fluid" src="@/assets/docs/project-structure/app-tests-3.png" alt="App - Tests">
              <li><strong>Important Notes:</strong>
                <ul>
                  <li>This application is using Jest and Vue test utils for unit testing.</li>
                  <li>Global jest config must be set under config directory.</li>
                  <li>Add only 'global mock data' to test-common-mock-data.js.</li>
                  <li>Module or component mock data must be stored on their respected directory.</li>
                  <li>You can add new test utils on test-common-utils.js but make sure to add a comment on your new utility.</li>
                </ul>
              </li>
            </ul> 
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script src="./documentation-app.js"></script>

<style lang="scss" scoped>
  @import './documentation-app.scss';
</style>

