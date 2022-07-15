import { createApp } from 'vue'

import './style.css'

import BootstrapVue3 from 'bootstrap-vue-3'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import vSelect from 'vue-select'
import "vue-select/dist/vue-select.css"


import App from './App.vue'
import router from './router'


const app = createApp(App)
app.use(router)
app.use(BootstrapVue3)
app.component('v-select', vSelect)
app.mount('#app')
