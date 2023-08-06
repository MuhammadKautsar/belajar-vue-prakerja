import Vue from 'vue';
import Vuex from 'vuex';
import cat from './cat'; // Import file cat.js

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cat: {
      namespaced: true,
      ...cat,
    }
  },
});
