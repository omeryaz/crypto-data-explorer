<script setup lang="ts">
  import { store } from '@/store'
  let rangeArr = ['week', 'month', 'year']
</script>

<template>
  <div class="form-select--container d-flex justify-content-center justify-content-md-start">
    <label v-for="(option, index) in rangeArr" :key="index" class="radio-label">
      <input
        type="radio"
        v-model="store.chartSelectedRange"
        :value="option"
        :id="'option-' + index"
      />
      <span>{{ option }}</span>
    </label>
  </div></template
>

<style scoped>
  .form-select--range {
    margin-bottom: 1rem;
    margin-left: 1rem;
  }

  .form-select--container {
    height: 2rem;
  }

  .radio-label {
    display: inline-block;
    margin-right: 10px;
  }

  input[type='radio'] {
    display: none;
  }

  input[type='radio'] + span {
    display: inline-block;
    padding: 5px 10px;
    color: #8a8a8a;
    cursor: pointer;
    text-transform: capitalize;
  }

  input[type='radio'] + span:hover {
    color: #fff;
  }

  input[type='radio']:checked + span {
    background-color: var(--blue-primary);
    color: #fff;
    border-color: var(--blue-primary);
  }
</style>
