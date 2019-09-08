import { expect } from 'chai';
import Vue from 'vue';
import Vuex from 'vuex';
import { shallowMount } from '@vue/test-utils';
import LoanCalculationWidget from '@/components/LoanCalculationWidget.vue';

// One try to mock a global store
const storeOptions = {
  state: {},
  getters: {},
  mutations: {},
};

Vue.use(Vuex);
const mockStore = new Vuex.Store(storeOptions);

// There is always the possibiltiy to mock things the jest way, but I think Vuex should have documented it
// Have a look at https://github.com/BirgitPohl/code-challenge-blockchain-wallet to see testing and code documentation
describe('LoanCalculationWidget', () => {
  it('trying to mock a vuex store', () => {
    const wrapper = shallowMount(LoanCalculationWidget, mockStore);
    wrapper.setData({ amount: 5000 });
    expect(wrapper.find('.error').exists()).equals(false);
  });
});
