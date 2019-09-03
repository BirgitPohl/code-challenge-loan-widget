<template>
  <div class="loan-calculation-widget">
    <form>
      <input v-model="amount" placeholder="amount">
      <p>Amount is: {{ amount }}</p>
      <input v-model="duration" placeholder="duration">
      <p>Duration is: {{ duration }}</p>
      <button v-on:click.prevent="post">Send it away</button>
    </form>
    <div v-if="submitted">Thank you for adding your request.</div>
    <div v-if="errors.length">
      <b v-if="errors.length = 1">Please correct the following error:</b>
      <b v-if="errors.length > 1">Please correct the following errors:</b>
      <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
    </div>

    <div>Monthly Installment: {{ monthlyInstallment }}</div>

  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  // import ILoanRequest from '../interfaces/loanRequest';

  @Component
  export default class LoanCalculationWidget extends Vue {

    // My scoped states
    private amount: number | null = null;
    private duration: number | null = null;
    private monthlyInstallment: number | null = null;
    private submitted: boolean = false;
    private errors: string[] = [];

    // My scoped methods:
    protected post(): any {
      this.submitted = false;
      if (this.validate()) {
        // I don't think that I need it, but if, I'd leave it here.
        // this.$store.commit('SET_AMOUNT', this.amount);
        // this.$store.commit('SET_DURATION', this.duration);
        this.clearErrors();
        this.$store.dispatch('fetch').then(() => {
          this.monthlyInstallment = this.$store.getters.getMonthlyInstallment;
        });

        this.submitted = true;
      }
    }

    protected storeMonthlyInstyallement() {
      return this.$store.state.monthlyInstyallement;
    }

    protected clearErrors() {
      this.errors.splice(0, this.errors.length);
    }

    protected validate(): boolean {
      if (!this.amount || !this.duration) {
        if (!this.duration) {
          this.errors.push('Duration is required.');
        }
        if (!this.amount) {
          this.errors.push('Amount is required.');
        }

        return false;
      }

      if (!this.duration) {
        this.errors.push('Duration is required.');
      }

      if (this.amount > 0 && this.duration > 0) {
        return true;
      }

      return true;
    }
}
</script>

<style scoped lang="less">
</style>
