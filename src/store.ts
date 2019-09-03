import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    amount: '',
    duration: '',
    monthlyInstallement: null,
    // errorMessage: null,
  },
  getters: {
    getMonthlyInstallment: (state) => {
      return state.monthlyInstallement;
    },
    // getErrorMessage: (state) => {
    //   return state.errorMessage;
    // }
  },
  mutations: {
    SET_AMOUNT(state, amount) {
      state.amount = amount;
    },
    SET_DURATION(state, duration) {
      state.duration = duration;
    },
    SET_MONTHLYINSTALLMENT(state, monthlyInstallement) {
      state.monthlyInstallement = monthlyInstallement;
    },
    // SET_ERRORMESSAGE(state, errorMessage) {
    //   state.errorMessage = errorMessage;
    // }
  },
  actions: {
    fetch(context) {
      // With great thanks to https://www.mocky.io/. – Made with -love- beer.
      axios.get('http://www.mocky.io/v2/5d6d1b033000002b008fba39').then((response: any) => {
        context.commit('SET_MONTHLYINSTALLMENT', response.data.monthlyInstallment);
       }).catch((error) => {
        // TODO Here could be a logger
        // tslint:disable-next-line:no-console
        console.log(error.message);
        // context.commit('SET_ERRORMESSAGE', error.message);
       });
    },
  },
});
