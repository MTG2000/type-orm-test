import { storiesOf } from "@storybook/vue";
import AddDialog from "./AddDialog.vue";

storiesOf("Add Dialog", module)
  .add("Required", () => ({
    components: {
      AddDialog,
    },
    methods: {},
    render() {
      return <AddDialog></AddDialog>;
    },
  }))
  .add("With Data", () => ({
    components: {
      AddDialog,
    },
    methods: {},
    render() {
      return <AddDialog></AddDialog>;
    },
  }));
