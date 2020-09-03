import Vue from 'vue'
import router from "./router";
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
import { ValidationProvider,ValidationObserver , extend} from 'vee-validate';

import * as rules from 'vee-validate/dist/rules';

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});


Vue.component('vp', ValidationProvider);
Vue.component('vo', ValidationObserver);

import App from './App.vue'




Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
