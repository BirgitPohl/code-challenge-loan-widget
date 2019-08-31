import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import LoanCalculationWidget from '@/components/LoanCalculationWidget.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(LoanCalculationWidget, {
      propsData: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});
