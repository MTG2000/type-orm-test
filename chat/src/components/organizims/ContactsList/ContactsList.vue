<script>
import { VRow, VCol, VAvatar, VChip, VTextField } from "vuetify/lib";
import dateAndTime from "date-and-time";
import Message from "../../atoms/Message/Message";
import RoomCard from "../../molecules/RoomCard/RoomCard.vue";
import Loading from "../../atoms/Loading";

export default {
  name: "messages-window",
  data() {
    return {
      search: ""
    };
  },
  props: {
    userId: {
      type: String,
      required: true
    },
    contacts: {
      type: Array,
      required: false,
      default: () => []
    },
    loading: {
      trpe: Boolean,
      required: false,
      default: false
    },
    selectedRoom: {
      type: String,
      required: false,
      default: ""
    }
  },
  methods: {
    searchContacts(v) {
      this.search = v;
    },
    openContact(id) {
      this.$emit("open-room", id);
      this.$refs["contacts-list"].classList.remove("active");
    }
  },
  render() {
    return (
      <div
        id="contacts-container"
        ref="contacts-list"
        class="contacts-container pt-4 active"
      >
        <VTextField
          label="Search Your Contacts"
          class="px-3 mx-2 input"
          clearable
          rounded
          outlined
          value={this.search}
          onInput={this.searchContacts}
        />
        {this.loading && <Loading loadingText="Loading Your Contacts..." />}
        {this.contacts
          .filter(
            contact =>
              contact.title
                .toLowerCase()
                .indexOf((this.search || "").toLowerCase()) !== -1
          )
          .map(contact => (
            <RoomCard
              id={contact.id}
              key={contact.id}
              active={contact.id === this.selectedRoom}
              title={contact.title}
              latestMessage={contact.lastMessage}
              numOfNewMessages={0}
              image={contact.photoUrl}
              date={contact.lastMessageDateTime}
              on-click={() => this.openContact(contact.id)}
            ></RoomCard>
          ))}
      </div>
    );
  }
};
</script>


<style lang="scss" scoped>
.contacts-container {
  height: 100vh;
  width: 98vw;
  background: rgb(245, 245, 245);
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 15;
  position: absolute;
  top: 0;
  right: 100%;
  transition: right 0.3s ease-in-out;
  &.active {
    right: 0;
  }

  @media screen and (min-width: 480px) {
    width: 330px;
    position: unset;
  }
}

//ScrollBar
/* width */
::-webkit-scrollbar {
  width: 5pxpx;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(54, 54, 54);
  border-radius: 20px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>