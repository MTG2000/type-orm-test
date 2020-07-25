<script>
import { VForm, VContainer, VRow, VCol, VTextField } from "vuetify/lib";
import debounce from "lodash.debounce";
import RoomCard from "../RoomCard/RoomCard.vue";
import Axios from "axios";

export default {
  name: "new-contact-modal",
  props: {
    maxContactsHeight: {
      type: Number,
      required: false,
      default: 500
    },
    choosenMembers: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  data() {
    return {
      search: "",
      contacts: [],
      CancelToken: null
    };
  },

  methods: {
    searchForUser: debounce(async function() {
      if (this.search.trim().length === 0) return;

      try {
        if (this.CancelToken) this.CancelToken.cancel();

        const CancelToken = Axios.CancelToken;
        const source = CancelToken.source();
        this.CancelToken = source;
        const res = await Axios.get("/api/users/search", {
          cancelToken: source.token,
          params: {
            name: this.search
          }
        });
        this.contacts = res.data;
      } catch (error) {
        if (Axios.isCancel(error)) {
          console.log("Request canceled");
        } else {
          // handle error
        }
      }
    }, 350)
  },
  render() {
    return (
      <VRow justify="center">
        <VCol cols="10" md="8">
          <VTextField
            label="Search for Users"
            clearable
            value={this.search}
            onInput={v => (this.search = v)}
            onKeyup={this.searchForUser}
          ></VTextField>
        </VCol>
        <VCol cols="12" />
        <div class="contacts">
          {this.contacts.map(contact => (
            <RoomCard
              id={contact.id}
              key={contact.id}
              title={contact.name}
              hideOnSmall={false}
              clipTitle={false}
              defaultColor="#FFF"
              showCheck={
                this.choosenMembers.filter(member => member.id === contact.id)
                  .length > 0
              }
              on-click={() =>
                this.$emit("click", {
                  id: contact.id,
                  name: contact.name
                })
              }
            ></RoomCard>
          ))}
        </div>
      </VRow>
    );
  }
};
</script>

<style lang="scss" scoped>
.contacts {
  width: 100%;
  max-width: 350px;
  height: 400px;
  overflow-y: auto;
}
</style>