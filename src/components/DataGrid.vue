<script setup lang="ts">
import ChartSection from './ChartSection/ChartSection.vue'
import { store } from '@/store'
import DataCardsSkeleton from './DataCards/DataCardsSkeleton.vue'
import DataCardSection from './DataCards/DataCardSection.vue'
</script>

<template>
  <div class="container">
    <!-- DATA CARDS -->
    <DataCardsSkeleton v-if="store.isLoading"></DataCardsSkeleton>
    <DataCardSection v-else></DataCardSection>
    <!--  APEX CHARTS -->
    <ChartSection></ChartSection>
  </div>
</template>
