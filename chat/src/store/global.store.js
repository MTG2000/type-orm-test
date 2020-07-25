import helperFunctions from "../helpers/functions";

export default {
  namespaced: true,
  state: {
    profileId: "",
    userId: "",
    firstName: "",
    lastName: "",
    photoUrl: "",
    isOwner: false,
  },

  mutations: {
    setUesrId(state) {
      // Setting User Id
      let user = JSON.parse(localStorage.getItem("user") || "{}");

      if (user.entity) {
        state.userId = user.entity.userId;
        state.firstName = user.entity.firstName;
        state.lastName = user.entity.lastName;
        state.photoUrl = user.entity.photoUrl;
      }
    },
  },
  actions: {},
};
