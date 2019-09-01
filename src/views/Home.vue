<template>
  <div class="home">
    <LoanCalculationWidget/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LoanCalculationWidget from '@/components/LoanCalculationWidget.vue';

@Component({
  components: {
    LoanCalculationWidget,
  },
})
export default class Home extends Vue {}
</script>
