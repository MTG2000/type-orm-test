import ContactsList from "../ContactsList/ContactsList.vue";
import TestData from "./testdata";
import { mapActions, mapState } from "vuex";

export default {
  name: "rooms-container",

  components: {},

  computed: {
    ...mapState("globalState", ["userId"]),
    ...mapState("mainTab", ["loadingRooms", "rooms", "selectedRoom"]),
  },
  methods: {
    ...mapActions({
      fetchRooms: "mainTab/fetchRooms",
      fetchMessages: "mainTab/fetchMessages",
    }),
  },

  mounted() {
    this.fetchRooms(this.userId);
  },

  render() {
    return (
      <div>
        <ContactsList
          loading={this.loadingRooms}
          userId={this.userId}
          contacts={this.rooms}
          selectedRoom={this.selectedRoom}
          on-open-room={(id) => this.fetchMessages(id)}
        ></ContactsList>
      </div>
    );
  },
};
