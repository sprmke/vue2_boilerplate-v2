import Vue from 'vue';
import Vuex from 'vuex';

// shared
import user from './modules/_shared/user';

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    // shared
    user
  }
})
