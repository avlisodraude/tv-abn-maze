import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [],
    currentSearch: [],
  },
  getters: {
    getMovies(state) {
      return state.movies;
    },
    getCurrentSearch(state) {
      return state.currentSearch;
    },
  },
  mutations: {
    SET_MOVIES(state, movies) {
      state.movies = movies;
    },
    SET_CURRENT_SEARCH(state, results) {
      state.currentSearch = results;
    },
  },
  actions: {},
  modules: {},
});
