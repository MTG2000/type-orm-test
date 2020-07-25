import AddDialog from "../../molecules/AddDialog/AddDialog.vue";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "messages-container",

  components: {},

  data: () => ({
    //
  }),
  computed: {
    ...mapState("globalState", ["userId", "firstName", "lastName", "photoUrl"]),
    ...mapState("mainTab", ["selectedRoom", "loadingNewContact"]),
    ...mapGetters({
      messages: "mainTab/messages",
      loadingMessages: "mainTab/loadingMessages",
    }),
  },
  methods: {
    ...mapActions({
      openRoom: "mainTab/openRoom",
      openGroup: "mainTab/openGroup",
    }),
  },
  render() {
    return (
      <AddDialog
        on-open-room={(id) => this.openRoom(id)}
        on-open-group={(data) => this.openGroup(data)}
        loading={this.loadingNewContact}
      />
    );
  },
};
