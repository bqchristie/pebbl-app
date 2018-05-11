import Vue from 'vue';
import Vuex from 'vuex';
import login from './modules/login';
import board from './modules/board';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login,
    board
  }
});
