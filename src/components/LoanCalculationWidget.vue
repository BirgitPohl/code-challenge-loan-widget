<template>
  <div class="loan-calculation-widget">
    <p>
      The response value for monthly instyallement currently is based on amount: 10.000 and duration: 5.<br />
      You can enter any value you wish in order to test validations.
    </p>
    <form>
      <input v-model.number="amount" placeholder="amount">
      <p>Amount is: {{ amount }}</p>
      <input v-model.number="duration" placeholder="duration">
      <p>Duration is: {{ duration }}</p>
      <button v-on:click.prevent="post">Send it away</button>
    </form>
    <div v-if="submitted">Thank you for adding your request.</div>
    <div v-if="errors.length">
      <p class="error" v-for="error in errors" v-bind:key="error">{{ error }}</p>
    </div>

    <div v-if="getMonthlyInstallment()">Monthly Installment: {{ getMonthlyInstallment() }}</div>

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
    private submitted: boolean = false;
    private errors: string[] = [];

    // My scoped methods:

    // computed
    protected getMonthlyInstallment() {
      return this.$store.getters.getMonthlyInstallment;
    }

    protected post(): void {
      this.submitted = false;
      this.clearErrors();

      if (this.validate()) {
        this.$store.dispatch('fetch').catch((error) => {
          this.errors.push('Oops, something went wrong.');
        });

        this.submitted = true;
      }
    }

    protected storeMonthlyInstyallement(): number {
      return this.$store.state.monthlyInstyallement;
    }

    protected clearErrors(): void {
      this.errors.splice(0, this.errors.length);
    }

    protected validate(): boolean {
      if (!this.amount && !this.duration) {
          this.errors.push('Duration is required.');
          this.errors.push('Amount is required.');

          return false;
      }

      // TODO If duration is 0 it is false
      if (!this.duration) {
        this.errors.push('Duration is required.');

        return false;
      }

      if (!this.amount) {
        this.errors.push('Amount is required.');

        return false;
      }

      if (typeof this.duration !== 'number' || typeof this.amount !== 'number') {
        this.errors.push('Enter numbers only.');

        return false;
      }

      // Success
      if (this.amount < 5000) {
        this.errors.push('Please, enter an amount of 5.000 or higher.');

        return false;
      }

      if (this.duration < 1) {
        this.errors.push('Duration should be higher than 0.');

        return false;
      }

      // Success
      return true;
    }
}
</script>

<style scoped lang="less">
</style>
