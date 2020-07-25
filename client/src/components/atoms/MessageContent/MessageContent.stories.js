import { storiesOf } from "@storybook/vue";
import MessageContent from "./MessageContent.vue";

storiesOf("Message Content", module)
  .add("Single Image", () => ({
    components: {
      MessageContent,
    },
    methods: {},
    render() {
      return (
        <div class="mx-10" style="background:#ccc; max-width:500px;">
          <MessageContent
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
          ></MessageContent>
        </div>
      );
    },
  }))
  .add("Multiple Image", () => ({
    components: {
      MessageContent,
    },
    methods: {},
    render() {
      return (
        <div class="mx-10" style="background:#ccc; max-width:500px;">
          <MessageContent
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
              ,
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
          ></MessageContent>
        </div>
      );
    },
  }))
  .add("Pdf File", () => ({
    components: {
      MessageContent,
    },
    methods: {},
    render() {
      return (
        <div class="mx-10" style="background:#ccc; max-width:500px;">
          <MessageContent
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
          ></MessageContent>
        </div>
      );
    },
  }))
  .add("Video File", () => ({
    components: {
      MessageContent,
    },
    methods: {},
    render() {
      return (
        <div class="mx-10" style="background:#ccc; max-width:500px;">
          <MessageContent
            messageType={4}
            files={[
              {
                name: "A video",
                extension: ".mp4",
                url:
                  "/ChatsDirectory/a748a065-c81c-436c-8a92-d4003a537446//c4df4eef-a350-4c22-97c4-f716f35b1cba.pdf",
                contentType: "unknown/unknown",
                contentLength: 3028,
                fileType: 0,
                id: "c4df4eef-a350-4c22-97c4-f716f35b1cba",
                isValid: true,
              },
            ]}
          ></MessageContent>
        </div>
      );
    },
  }))
  .add("Audio File", () => ({
    components: {
      MessageContent,
    },
    methods: {},
    render() {
      return (
        <div class="mx-10" style="background:#ccc; max-width:500px;">
          <MessageContent
            messageType={3}
            files={[
              {
                name: "an audio file",
                extension: ".mp3",
                url:
                  "/ChatsDirectory/a748a065-c81c-436c-8a92-d4003a537446//c4df4eef-a350-4c22-97c4-f716f35b1cba.pdf",
                contentType: "unknown/unknown",
                contentLength: 3028,
                fileType: 0,
                id: "c4df4eef-a350-4c22-97c4-f716f35b1cba",
                isValid: true,
              },
            ]}
          ></MessageContent>
        </div>
      );
    },
  }));
