import helperFunctions from "../helpers/functions";

export default {
  namespaced: true,
  state: {
    userId: "",
    name: "",
  },

  mutations: {
    setUesrId(state) {
      // Setting User userId
      let user = JSON.parse(localStorage.getItem("user") || "{}");

      if (user) {
        state.userId = user.id;
        state.name = user.name;
      }
    },
  },
  actions: {},
};
