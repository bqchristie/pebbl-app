import axios from 'axios';

const state = {
  token: null,
  loading: false,
}

const mutations = {
  SET_TOKEN (state, token) {
    state.token = token;
  },
  LOGIN_PENDING (state) {
    state.loading = true;
  },
  LOGIN_SUCCESS (state) {
    state.loading = false;
  }
}

const actions = {
  login ({ commit }) {
    commit('LOGIN_PENDING');
    return axios.post('http://localhost:3000/api/v1/login').then((response) => {
      localStorage.setItem("token", response.data.token);
      commit('SET_TOKEN', response.data.token);
      commit('LOGIN_SUCCESS');
    });
  },
  logout ({ commit }) {
    return new Promise((resolve) => {
      localStorage.removeItem("token");
      commit('SET_TOKEN', null);
      resolve();
    });
  }
}

const getters = {
  token: state => state.token,
  loading: state => state.loading,
  isLoggedIn: state => localStorage.getItem("token") !== null
}

const loginModule = {
  state,
  mutations,
  actions,
  getters
}

export default loginModule;
