import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    amount: '',
    duration: '',
  },
  mutations: {
    SET_AMOUNT(state, amount) {
      state.amount = amount;
    },
    SET_DURATION(state, duration) {
      state.duration = duration;
    },
  },
  actions: {
    // something that goes to the api
    fetchAmount(context) {
      console.log('hi')
      // context.commit('SET_AMOUNT', SomeAmountOfInputField);
      // axios.get('/../mocks/response.json').then((response: any) => {
      //   context.commit('SET_SUBMITTED', response.some.object);
      // });
    },
  },
});
