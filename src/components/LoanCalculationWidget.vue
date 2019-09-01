<template>
  <div class="loan-calculation-widget">
    <form>
      <input v-model.number="amount" placeholder="amount">
      <p>Amount is: {{ amount }}</p>
      <input v-model="duration" placeholder="duration">
      <p>Duration is: {{ duration }}</p>
      <button v-on:click.prevent="post">Send it away</button>
    </form>
    <div v-if="submitted">Thank you for adding your request.</div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import store from '../store';
  // import ILoanRequest from '../interfaces/loanRequest';

  @Component
  export default class LoanCalculationWidget extends Vue {

    // My scoped states

    private amount: string = store.state.amount;
    private duration: string = store.state.duration;
    private submitted: boolean = false;


    protected post(): any {
      console.log('post')
      this.submitted = true;
      // this.$http.post('./mocks/response.json', {
      //     // this.amount,
      //     // this.duration,
      //   }).then((data: any): void => {
      //     // console.log(data);
      //     // this.submitted = true,
      //   });
    }
  }
</script>

<style scoped lang="less">
</style>
