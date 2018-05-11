import axios from 'axios';

const state = {
  projects: [],
}

const mutations = {
  LIST_PROJECTS (state, payload) {
    state.projects = payload;
    console.log(state.projects);
  },
}

const actions = {
  listProjects ({ commit }) {
    return axios.get('http://localhost:3000/api/v1/board').then((response) => {
      commit('LIST_PROJECTS', response.data);
    });
  },
}

const getters = {
  projects: state => state.projects
}

const boardModule = {
  state,
  mutations,
  actions,
  getters
}

export default boardModule;
