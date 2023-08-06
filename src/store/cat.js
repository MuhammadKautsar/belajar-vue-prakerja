import axios from 'axios';

const state = {
  listCats: [],
};

const mutations = {
  SET_CATS(state, cats) {
    state.listCats = cats;
  },
  ADD_CATS(state, cats) {
    state.listCats = state.listCats.concat(cats);
  },
};

const actions = {
  async fetchCats({ commit }) {
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10');
      commit('SET_CATS', response.data);
    } catch (error) {
      console.error('Error fetching cats:', error);
    }
  },
  async fetchMoreCats({ commit }) {
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10');
      commit('ADD_CATS', response.data);
    } catch (error) {
      console.error('Error fetching more cats:', error);
    }
  },
};

export default {
  state,
  mutations,
  actions,
};
