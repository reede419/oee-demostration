import Vue from "vue";
import App from "./App.vue";
import vuetify from './plugins/vuetify';
import Vuelidate from 'vuelidate';

import numkeyboard from 'vue-numkeyboard';

Vue.use(numkeyboard);


Vue.config.productionTip = false;
Vue.use(Vuelidate)

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
