<template>
  <div class="loan-widget">
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class LoanCalculationWidget extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="less">
</style>
