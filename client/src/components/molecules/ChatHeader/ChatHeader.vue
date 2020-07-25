
<script>
import HelperFuncs from "../../../helpers/functions";
import { VAvatar } from "vuetify/lib";
import DeleteContactDialogVue from "../DeleteContactDialog/DeleteContactDialog.vue";

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: false
    }
  },
  methods: {
    openContactList() {
      this.contactsList.classList.add("active");
    },
    deleteContact() {
      const delBtn = document.getElementById("delete-contact-dialog");
      delBtn.click();
    }
  },

  mounted() {
    this.contactsList = document.getElementById("contacts-container");
  },
  data() {
    return {
      contactsList: null,
      dialog: false,
      tab: null,
      text: "asd"
    };
  },

  render() {
    return (
      <div class="chat-header grey lighten-3 px-3 py-4 row justify-between align-center">
        <div class="row align-center">
          <v-icon
            name="arrow-left"
            class="icon back-icon  mx-3"
            scale={1.7}
            onClick={this.openContactList}
          />
          <VAvatar
            color={HelperFuncs.stringToHslColor(this.title)}
            class="mx-3"
          >
            {this.image ? (
              <img src={`${this.$api}${this.image}`} alt={this.title} />
            ) : (
              <span class="white--text headline">
                {this.title
                  .trim()
                  .charAt(0)
                  .toUpperCase()}
              </span>
            )}
          </VAvatar>
          <h4>{this.title}</h4>
        </div>
        <div>
          <v-icon
            name="trash-alt"
            class="icon  mx-3 "
            scale={1.3}
            onClick={this.deleteContact}
          />
          <v-icon name="bars" class=" icon mx-3 " scale={1.3} />
          <DeleteContactDialogVue on-confirm={() => this.$emit("delete")} />
        </div>
      </div>
    );
  }
};
</script>

<style lang="scss" scoped>
.chat-header {
  width: 100%;
  position: absolute;
  top: 0;
  left: 12px;
  z-index: 5;

  .icon {
    cursor: pointer;
    color: #999;
    &:hover {
      transform: scale(1.07);
    }
  }

  .back-icon {
    @media screen and (min-width: 480px) {
      display: none;
    }
  }
}
</style>
