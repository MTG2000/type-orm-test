import { configure, addDecorator } from "@storybook/vue";
import Vue from "vue";

// import "../src/helpers/styles";
// Vue Select
// import "vue-select/dist/vue-select.css";

configure(require.context("../src", true, /\.stories\.js$/), module);
// Import Files that should have been imported in main.js
// import "../src/helpers/interceptors";

import vuetify from "../src/plugins/vuetify";
import "../src/helpers/global-vars";
import "../src/helpers/interceptors";
import "../src/plugins/Icons";
import store from "../src/store/index";
import { VApp } from "vuetify/lib";

Vue.prototype.$api = "http://healthintouch.net";

addDecorator(() => ({
  vuetify,
  store,
  render() {
    return (
      <VApp>
        <story />
      </VApp>
    );
  },
}));
