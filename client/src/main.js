import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { VApp } from "vuetify/lib";
import "./plugins/Icons";
import "./helpers/scripts";
import "./helpers/global-vars";
import "./helpers/interceptors.js";

Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  render: (h) =>
    h({
      render: () => (
        <VApp>
          <App />
        </VApp>
      ),
    }),
}).$mount("#app");
