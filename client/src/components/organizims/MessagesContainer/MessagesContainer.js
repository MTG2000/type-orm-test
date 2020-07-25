import MessagesWindow from "../MessagesWindow/MessagesWindow.vue";
import MessageInput from "../../molecules/MessageInput/MessageInput.vue";
import ChatHeader from "../../molecules/ChatHeader/ChatHeader.vue";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "messages-container",

  components: {},

  data: () => ({
    //
  }),
  computed: {
    ...mapState("globalState", ["userId", "name"]),
    ...mapState("mainTab", ["selectedRoom"]),
    ...mapGetters({
      messages: "mainTab/messages",
      loadingMessages: "mainTab/loadingMessages",
      roomInfo: "mainTab/roomInfo",
    }),
  },
  methods: {
    ...mapActions({
      addMessage: "mainTab/addMessage",
      deleteRoom: "mainTab/deleteRoom",
      fetchMoreMessages: "mainTab/fetchMoreMessages",
    }),
    handleUpload(files) {
      this.addMessage({
        files,
        person: {
          id: this.userId,
          firstName: this.firstName,
          lastName: this.lastName,
          personalPhoto: this.photoUrl,
        },
      });
    },
    handleMessage(msg) {
      this.addMessage({
        data: msg,
        person: {
          id: this.userId,
          name: this.name,
        },
      });
    },
  },
  render() {
    return (
      <div
        style="flex-grow: 2; height:100vh; position:relative;"
        class="d-flex flex-column justify-end"
      >
        {this.roomInfo && (
          <ChatHeader
            title={this.roomInfo.title}
            image={this.roomInfo.photoUrl}
            on-delete={() => this.deleteRoom(this.selectedRoom)}
          />
        )}
        <MessagesWindow
          loading={this.loadingMessages}
          userId={this.userId}
          messages={this.messages}
          on-fetch-more={() => this.fetchMoreMessages(this.selectedRoom)}
        ></MessagesWindow>
        {this.selectedRoom && !this.loadingMessages && (
          <MessageInput
            on-upload={this.handleUpload}
            on-input={this.handleMessage}
          />
        )}
      </div>
    );
  },
};
