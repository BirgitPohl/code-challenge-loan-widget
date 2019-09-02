import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    amount: '',
    duration: '',
    monstlyInstyallement: null,
  },
  mutations: {
    SET_AMOUNT(state, amount) {
      state.amount = amount;
    },
    SET_DURATION(state, duration) {
      state.duration = duration;
    },
    SET_MONTHLYINSTALLMENT(state, monstlyInstyallement) {
      state.monstlyInstyallement = monstlyInstyallement;
    },
  },
  actions: {
    // something that goes to the api
    fetch(context) {
      // With great thanks to https://www.mocky.io/.  – Made with -love- beer.
      axios.get('http://www.mocky.io/v2/5d6d1b033000002b008fba39').then((response: any) => {
        // https://jsonplaceholder.typicode.com/todos/1
        context.commit('SET_MONTHLYINSTALLMENT', response.data.monstlyInstyallement);
       });
    },
  },
});
