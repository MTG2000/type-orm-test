<template>
  <VChip class="ma-2 chip" color="primary" close @click:close="$emit('close')">{{this.name}}</VChip>
</template>

<script>
export default {
  name: "group-member",
  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>