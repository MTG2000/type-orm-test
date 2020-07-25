

<script>
import RoomsContainer from "./components/organizims/RoomsContainer/RoomsContainer";
import MessagesContainer from "./components/organizims/MessagesContainer/MessagesContainer";
import Api from "./api";
import { mapMutations, mapActions, mapState } from "vuex";
import AddContactContainer from "./components/organizims/AddContactContainer/AddContactContainer";

export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
  computed: {
    ...mapState("globalState", ["userId"]),
    ...mapState("mainTab", ["socket"])
  },
  methods: {
    ...mapMutations({
      setUesrId: "globalState/setUesrId"
    }),
    ...mapActions({
      receiveMessage: "mainTab/receiveMessage"
    })
  },
  mounted() {
    this.setUesrId();
    this.socket.on("receive-message", message =>
      this.receiveMessage({
        userId: this.userId,
        message
      })
    );
  },
  render() {
    return (
      <div class="d-flex no-gutters">
        <AddContactContainer />
        <RoomsContainer />
        <MessagesContainer />
      </div>
    );
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Cairo&display=swap");

.v-application {
  font-family: "Cairo", "Roboto", sans-serif;
}
</style>