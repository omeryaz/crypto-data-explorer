import { createApp } from 'vue'
import App from './App.vue'
import VueApexCharts from 'vue3-apexcharts'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './assets/main.css'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { BiCurrencyDollar, BiArrowUpShort, BiArrowDownShort } from 'oh-vue-icons/icons'
addIcons(BiCurrencyDollar, BiArrowUpShort, BiArrowDownShort)

createApp(App).use(VueApexCharts).component('v-icon', OhVueIcon).mount('#app')
