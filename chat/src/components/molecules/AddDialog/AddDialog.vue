<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="add-contact-btn" color="#03a9f4" dark v-bind="attrs" v-on="on">
          <v-icon name="plus" :scale="1.2" />
        </v-btn>
      </template>

      <v-card class="contact-dialog">
        <div v-if="loading" class="loading d-flex justify-center align-center py-10 grey--text">
          <h2>Loading...</h2>
        </div>
        <v-tabs
          v-if="!loading"
          v-model="tab"
          background-color="#03a9f4"
          centered
          dark
          icons-and-text
        >
          <v-tabs-slider></v-tabs-slider>

          <v-tab href="#tab-contact">
            New Contact
            <v-icon name="user-plus" class="align-self-center icon mx-3 emoji-icon" :scale="2" />
          </v-tab>

          <v-tab href="#tab-group">
            New Group
            <v-icon name="users" class="align-self-center icon mx-3 emoji-icon" :scale="2" />
          </v-tab>
        </v-tabs>

        <v-tabs-items v-if="!loading" v-model="tab">
          <v-tab-item :key="1" value="tab-contact">
            <v-card flat>
              <v-container>
                <NewContact @click="openRoom" />
              </v-container>
            </v-card>
          </v-tab-item>
          <v-tab-item :key="2" value="tab-group">
            <v-card flat>
              <v-container>
                <NewGroup @open-group="openGroup" />
              </v-container>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {
  VDialog,
  VBtn,
  VSpacer,
  VCardActions,
  VDivider,
  VCardText,
  VCardTitle,
  VCard,
  VTab,
  VTabs,
  VTabsSlider,
  VTabsItems,
  VContainer,
  VTabItem
} from "vuetify/lib";
import Icon from "vue-awesome/components/Icon";
import Vue from "vue";
import NewContact from "../NewContact/NewContact";
import NewGroup from "../NewGroup/NewGroup";

export default {
  components: {
    VDialog,
    VBtn,
    "v-icon": Icon,
    VCard,
    VTab,
    VTabs,
    VTabsSlider,
    VTabsItems,
    VContainer,
    VTabItem,
    NewContact,
    NewGroup
  },

  props: {
    loading: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  watch: {
    loading: function(isLoading, wasLoading) {
      // watch it

      if (!isLoading && wasLoading) {
        this.dialog = false;
      }
    }
  },
  methods: {
    openRoom({ id }) {
      this.$emit("open-room", id);
      // this.dialog = false;
    },
    openGroup(data) {
      this.$emit("open-group", data);
      // this.dialog = false;
    }
  },

  data() {
    return {
      dialog: false,
      tab: null,
      text: "asd"
    };
  }
};
</script>

<style lang="scss" scoped>
.contact-dialog {
  position: relative;
  .loading {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgb(255, 255, 255);

    z-index: 10;
  }
}

.add-contact-btn {
  border-radius: 50%;
  position: fixed;
  bottom: 38px;
  left: 38px;
  z-index: 100;
  min-width: 40px !important;
  width: 40px;
  height: 40px;
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
