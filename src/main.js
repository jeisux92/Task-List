import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.http.options.root = 'https://tasklist-1a247.firebaseio.com';

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
