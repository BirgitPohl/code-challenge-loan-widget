<template>
  <div class="home">
    <LoanCalculationWidget msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LoanCalculationWidget from '@/components/LoanCalculationWidget.vue'; // @ is an alias to /src

@Component({
  components: {
    LoanCalculationWidget,
  },
})
export default class Home extends Vue {}
</script>
