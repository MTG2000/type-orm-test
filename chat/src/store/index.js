import Vue from "vue";
import Vuex from "vuex";
import mainTab from "./mainTab";
import globalState from "./global.store";

Vue.use(Vuex);

// Store Layer

export default new Vuex.Store({
  modules: {
    mainTab,
    globalState,
  },
});
