import { storiesOf } from "@storybook/vue";
import Message from "./Message.vue";

storiesOf("Message", module)
  .add("Required-1", () => ({
    components: {
      Message,
    },
    methods: {},
    render() {
      return (
        <div class="px-6 py-10">
          <Message
            id="123-456-678"
            date="2020-07-05T11:29:33.647Z"
            side={1}
            data="How are you doing"
          ></Message>
        </div>
      );
    },
  }))
  .add("Required-2", () => ({
    components: {
      Message,
    },
    methods: {},
    render() {
      return (
        <div class="px-6 py-10">
          <Message
            id="123-456-678"
            date="2020-07-05T11:29:33.647Z"
            side={2}
            data="How are you doing"
          ></Message>
        </div>
      );
    },
  }))
  .add("Long", () => ({
    components: {
      Message,
    },
    methods: {},
    render() {
      return (
        <div class="px-6 py-10">
          <Message
            id="123-456-678"
            date="2020-07-05T11:29:33.647Z"
            side={2}
            data="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, veritatis. Id fugiat laboriosam iste voluptatem temporibus, delectus porro placeat architecto rem tempora consequuntur atque laudantium molestiae hic ratione vel, quos blanditiis ut illum? Recusandae obcaecati ea rem quasi eius nobis vero placeat inventore iusto, dolore fugiat. Ad a tempora, amet dicta quos nemo enim sit?"
          ></Message>
        </div>
      );
    },
  }))
  .add("Loading", () => ({
    components: {
      Message,
    },
    methods: {},
    render() {
      return (
        <div class="px-6 py-10">
          <Message
            id="123-456-678"
            date="2020-07-05T11:29:33.647Z"
            side={2}
            loading
            data="This Message is getting uploaded"
          ></Message>
        </div>
      );
    },
  }))
  .add("Loading With Number", () => ({
    components: {
      Message,
    },
    methods: {},
    render() {
      return (
        <div class="px-6 py-10">
          <Message
            id="123-456-678"
            date="2020-07-05T11:29:33.647Z"
            side={2}
            loading={40}
            data="This Message is getting uploaded"
          ></Message>
        </div>
      );
    },
  }))

  .add("With Image", () => ({
    components: {
      Message,
    },
    methods: {},
    render() {
      return (
        <div class="px-6 py-10">
          <Message
            id="123-456-678"
            date="2020-07-05T11:29:33.647Z"
            side={2}
            messageType={2}
            files={[
              {
                name: "Redmi K20 Pro Wallpaper 10 YTECHB.jpg",
                extension: ".jpg",
                url:
                  "/ChatsDirectory/a748a065-c81c-436c-8a92-d4003a537446//c3d58c0d-ac53-4e0d-a5d2-4c39d87f53e3.jpg",
                contentType: "unknown/unknown",
                contentLength: 105999,
                fileType: 0,
                id: "c3d58c0d-ac53-4e0d-a5d2-4c39d87f53e3",
                isValid: true,
              },
            ]}
            data="Check The image up there and tell me if you like it or not"
          ></Message>
        </div>
      );
    },
  }))
  .add("With Pdf File", () => ({
    components: {
      Message,
    },
    methods: {},
    render() {
      return (
        <div class="px-6 py-10">
          <Message
            id="123-456-678"
            date="2020-07-05T11:29:33.647Z"
            side={2}
            messageType={6}
            files={[
              {
                name: "sample 1.pdf",
                extension: ".pdf",
                url:
                  "/ChatsDirectory/a748a065-c81c-436c-8a92-d4003a537446//c4df4eef-a350-4c22-97c4-f716f35b1cba.pdf",
                contentType: "unknown/unknown",
                contentLength: 3028,
                fileType: 0,
                id: "c4df4eef-a350-4c22-97c4-f716f35b1cba",
                isValid: true,
              },
            ]}
            data="Check The File up there and tell me if you like it or not"
          ></Message>
        </div>
      );
    },
  }))
  .add("List Of Messages", () => ({
    components: {
      Message,
    },
    methods: {},
    render() {
      return (
        <div class="px-6 py-10">
          <Message
            id="123-456-678"
            date="2020-07-05T11:29:33.647Z"
            side={1}
            personName="Ahmad Fadi"
            data="Hello There!!!"
          ></Message>
          <Message
            id="123-456-678"
            date="2020-07-05T11:29:33.647Z"
            side={2}
            avatar="https://cdn.vuetifyjs.com/images/john.jpg"
            personName="John Doe"
            data="Hello, How are you doing"
          ></Message>
          <Message
            id="123-456-678"
            date="2020-07-05T11:29:33.647Z"
            side={1}
            personName="Ahmad Fadi"
            data="I am Fine, what about you??"
          ></Message>
          <Message
            id="123-456-678"
            date="2020-07-05T11:29:33.647Z"
            side={1}
            personName="Ahmad Fadi"
            data="Are You studying something right now so I am disturbing your work ?? 😐😐"
          ></Message>
          <Message
            id="123-456-678"
            date="2020-07-05T11:29:33.647Z"
            side={2}
            avatar="https://cdn.vuetifyjs.com/images/john.jpg"
            personName="John Doe"
            data="No No, Not at all !!"
          ></Message>
          <Message
            id="123-456-678"
            date="2020-07-05T11:29:33.647Z"
            side={1}
            personName="Ahmad Fadi"
            data="Good 😄"
          ></Message>
        </div>
      );
    },
  }));
