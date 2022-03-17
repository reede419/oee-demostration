import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import Vuelidate from "vuelidate";

import { i18n } from "./plugins/i18n";
import numkeyboard from "vue-numkeyboard";

Vue.use(numkeyboard);

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(i18n);

let locale = process.env.VUE_APP_LOCALE;

if (!locale || !locale.length || !i18n.availableLocales.includes(locale)) {
  locale = "en";
}
i18n.locale = locale;

new Vue({
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
