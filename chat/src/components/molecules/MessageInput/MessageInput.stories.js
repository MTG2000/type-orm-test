import { storiesOf } from "@storybook/vue";
import MessageInput from "./MessageInput.vue";

storiesOf("Message Input", module).add("Required", () => ({
  components: {
    MessageInput,
  },
  methods: {},
  render() {
    return (
      <div class="mx-10 mt-16" style="padding-top:500px">
        <MessageInput></MessageInput>
      </div>
    );
  },
}));
