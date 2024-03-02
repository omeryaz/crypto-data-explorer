<script setup lang="ts">
import ChartSection from './ChartSection/ChartSection.vue'
import { store } from '@/store'
import DataCards from './DataCards/DataCards.vue'
import DataCardsSkeleton from './DataCards/DataCardsSkeleton.vue'

// Chart Date Range
</script>

<template>
  <div class="container">
    <!-- DATA CARDS -->
    <DataCardsSkeleton v-if="store.isLoading"></DataCardsSkeleton>
    <DataCards v-else></DataCards>
    <!--  APEX CHARTS -->
    <ChartSection></ChartSection>
  </div>
</template>

<style scoped></style>
