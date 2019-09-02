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
    <div v-if="errors.length">
      <b>Please correct the following error(s):</b>
        <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
    </div>

  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  // import ILoanRequest from '../interfaces/loanRequest';

  @Component
  export default class LoanCalculationWidget extends Vue {

    // My scoped states
    private amount: string = '';
    private duration: string = ''
    private monthlyInstallment: number | null = null;
    private submitted: boolean = false;
    private errors: Array<String> = [];
    
    // My scoped methods:
    protected post(): any {
      // console.log(this.$store)
      this.$store.commit('SET_AMOUNT', this.amount);
      this.$store.commit('SET_DURATION', this.duration);
      
      if (this.amount.length > 0 && this.duration.length > 0) {

        this.$store.dispatch('fetch');
        this.monthlyInstallment = this.$store.getters('SET_MONTHLYINSTALLMENT')

        this.submitted = true;
      }

      if (this.amount.length <= 0) {
        this.errors.push('Amount is required.');
      }

      if (this.duration.length <= 0) {
        this.errors.push('Duration is required.');
      }
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
