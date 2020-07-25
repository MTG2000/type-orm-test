<script>
import {
  VForm,
  VContainer,
  VRow,
  VCol,
  VChip,
  VTextField,
  VBtn
} from "vuetify/lib";
import debounce from "lodash.debounce";
import NewContact from "../NewContact/NewContact.vue";
import GroupMemberVue from "../../atoms/GroupMember/GroupMember.vue";

export default {
  name: "new-contact-modal",
  props: {},
  data() {
    return {
      groupTitle: "",
      members: [],
      membersIds: new Set()
    };
  },

  methods: {
    toggleMember({ id, name }) {
      if (this.membersIds.has(id)) {
        this.removeMember(id);
      } else {
        this.membersIds.add(id);
        this.members.push({ id, name });
      }
    },
    removeMember(id) {
      this.membersIds.delete(id);
      this.members = this.members.filter(m => m.id !== id);
    },
    createGroup() {
      this.$emit("open-group", {
        title: this.groupTitle,
        members: this.members
      });
    }
  },
  render() {
    return (
      <div class="new-group">
        <VRow justify="center">
          <VCol cols="10" md="8">
            <VTextField
              label="Group Title"
              clearable
              value={this.groupTitle}
              onInput={v => (this.groupTitle = v)}
            ></VTextField>
          </VCol>
          <VCol cols="12">
            {this.members.map(member => (
              <GroupMemberVue
                key={member.id}
                name={member.name}
                on-close={() => this.removeMember(member.id)}
              />
            ))}
          </VCol>
          <NewContact
            onClick={this.toggleMember}
            choosenMembers={this.members}
          />
          <VCol cols={12} class="row justify-end px-9 my-3">
            <VBtn color="primary" onClick={this.createGroup}>
              Create Group
            </VBtn>
          </VCol>
        </VRow>
      </div>
    );
  }
};
</script>

<style lang="scss" scoped>
.new-group {
  overflow-x: hidden;
}

.close-icon {
  cursor: pointer;
}

//ScrollBar
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 20px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>