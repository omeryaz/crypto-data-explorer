<script setup lang="ts">
import OpenCloseChart from './subcomponents/OpenCloseChart.vue'
import HighestLowestChart from './subcomponents/HighestLowestChart.vue'
import RangeSelect from './subcomponents/RangeSelect.vue'
</script>

<template>
  <div>
    <RangeSelect></RangeSelect>
    <div class="row flex-md-row flex-column row-gap-3">
      <div class="col chart">
        <OpenCloseChart></OpenCloseChart>
      </div>
      <div class="col chart">
        <HighestLowestChart></HighestLowestChart>
      </div>
    </div>
  </div>
</template>

<style scoped>
.chart {
  transform: scaleY(0.9);
}
</style>
