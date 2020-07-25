<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="290">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          id="delete-contact-dialog"
          style="display:none;"
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >Open Dialog</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">Confirm Delete</v-card-title>
        <v-card-text>Are You Sure you want to delete this room with All of its content ??</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey darken-1" text @click="dialog = false">Cancel</v-btn>
          <v-btn color="red darken-1" text @click=" confirmDelete">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  methods: {
    confirmDelete() {
      this.dialog = false;
      this.$emit("confirm");
    }
  },

  data() {
    return {
      dialog: false
    };
  }
};
</script>