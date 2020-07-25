import { storiesOf } from "@storybook/vue";
import RoomCard from "./RoomCard.vue";

storiesOf("Room Card", module)
  .add("Required", () => ({
    components: {
      RoomCard,
    },
    methods: {},
    render() {
      return (
        <div class="mx-10">
          <RoomCard
            id="123-456-678"
            title="Ahmad Ghazal"
            latestMessage=" hello sir, I just wanted to tell you about my latest work today "
          ></RoomCard>
        </div>
      );
    },
  }))
  .add("Full", () => ({
    components: {
      RoomCard,
    },
    methods: {},
    render() {
      return (
        <div class="mx-10">
          <RoomCard
            id="123-456-678"
            title="Ahmad Ghazal"
            latestMessage=" hello sir, I just wanted to tell you about my latest work today "
            image="https://cdn.vuetifyjs.com/images/john.jpg"
            numOfNewMessages={25}
            date={new Date().toISOString()}
          ></RoomCard>
        </div>
      );
    },
  }))
  .add("No New Messages", () => ({
    components: {
      RoomCard,
    },
    methods: {},
    render() {
      return (
        <div class="mx-10">
          <RoomCard
            id="123-456-678"
            title="Ahmad Ghazal"
            latestMessage=" hello sir, I just wanted to tell you about my latest work today "
            image="https://cdn.vuetifyjs.com/images/john.jpg"
            date={new Date("8-14-2002").toISOString()}
          ></RoomCard>
        </div>
      );
    },
  }))
  .add("List Of Cards", () => ({
    components: {
      RoomCard,
    },
    methods: {},
    render() {
      return (
        <div class="mx-10">
          <RoomCard
            id="123-456-678"
            title="Mohammed Fadi"
            numOfNewMessages={0}
            date={new Date().toISOString()}
          ></RoomCard>
          <RoomCard
            id="123-456-678"
            title="Ahmad Ghazal"
            latestMessage=" How are your doing I Want to really see you man"
            image="https://cdn.vuetifyjs.com/images/john.jpg"
            numOfNewMessages={5}
            date={new Date().toISOString()}
          ></RoomCard>
          <RoomCard
            id="123-456-678"
            title="John Doe"
            latestMessage=" hello sir, I just wanted to tell you about my latest work today "
            image="https://cdn.vuetifyjs.com/images/john.jpg"
            numOfNewMessages={25}
            date={new Date().toISOString()}
          ></RoomCard>
          <RoomCard
            id="123-456-678"
            title="Black Spirro"
            latestMessage="Long time no see old Friend"
            date={new Date().toISOString()}
          ></RoomCard>
        </div>
      );
    },
  }));
