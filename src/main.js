import Vue from "vue";
import App from "./app/app.vue";;
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

// axios
import axios from 'axios'

// filters
import Vue2Filters from 'vue2-filters';
Vue.use(Vue2Filters);

// directives
import Directives from './app/directives/directives';

// bootstrap vue
import BootstrapVue from 'bootstrap-vue'

// styles
import './app/styles/main.scss';

// use
Vue.use(axios);
Vue.use(Filters);
Vue.use(Directives);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
