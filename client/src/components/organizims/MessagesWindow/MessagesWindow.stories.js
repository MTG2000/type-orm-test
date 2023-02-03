import { storiesOf } from "@storybook/vue";
import MessagesWindow from "./MessagesWindow.vue";

storiesOf("Messages Window", module)
  .add("Required", () => ({
    components: {
      MessagesWindow,
    },
    methods: {},
    render() {
      return (
        <div class="mx-10">
          <MessagesWindow userId="5c5beb8b-5217-4e3a-a204-5bea8bddc3cf"></MessagesWindow>
        </div>
      );
    },
  }))
  .add("Full", () => ({
    components: {
      MessagesWindow,
    },
    methods: {},
    render() {
      return (
        <div class="mx-10">
          <MessagesWindow
            userId="5c5beb8b-5217-4e3a-a204-5bea8bddc3cf"
            messages={[
              {
                data: "بست",
                isPollStopped: false,
                laditiude: null,
                longitude: null,
                vcf: null,
                messageType: 1,
                creationDate: "2020-07-05T11:03:50.1935767+00:00",
                lastUpdateDate: null,
                chatPersonDto: {
                  firstName: "Wael",
                  lastName: "alshabani",
                  email: "waelalshabani@hotmail.com",
                  personalPhoto: null,
                  isExistsInRoom: true,
                  id: "1df5a74b-4239-4548-9d2f-7c61597ef728",
                  isValid: true,
                },
                isModified: false,
                roomId: "f6a62f3d-88dd-4444-9254-6d0163e353a1",
                groupId: "00000000-0000-0000-0000-000000000000",
                options: [],
                files: [],
                id: "7709410c-eebf-4eee-bd4b-3d0ebccb506c",
                isValid: true,
              },
              {
                data: "قللي نضري شو لازمك",
                isPollStopped: false,
                laditiude: null,
                longitude: null,
                vcf: null,
                messageType: 1,
                creationDate: "2020-06-30T14:21:03.3316484+00:00",
                lastUpdateDate: null,
                chatPersonDto: {
                  firstName: "Mohammad",
                  lastName: "Srieo",
                  email: "mohammad.srieo@gmail.com",
                  personalPhoto:
                    "/ProfilesDirectory/5c5beb8b-5217-4e3a-a204-5bea8bddc3cf//98a90967-c745-4f5e-963e-5cd635514222.jpg",
                  isExistsInRoom: true,
                  id: "5c5beb8b-5217-4e3a-a204-5bea8bddc3cf",
                  isValid: true,
                },
                isModified: false,
                roomId: "f6a62f3d-88dd-4444-9254-6d0163e353a1",
                groupId: "00000000-0000-0000-0000-000000000000",
                options: [],
                files: [],
                id: "f60eb096-f59b-4f48-8c56-e2ec0a637484",
                isValid: true,
              },
              {
                data: "بهالعنتين",
                isPollStopped: false,
                laditiude: null,
                longitude: null,
                vcf: null,
                messageType: 1,
                creationDate: "2020-06-30T14:20:56.9254236+00:00",
                lastUpdateDate: null,
                chatPersonDto: {
                  firstName: "Mohammad",
                  lastName: "Srieo",
                  email: "mohammad.srieo@gmail.com",
                  personalPhoto:
                    "/ProfilesDirectory/5c5beb8b-5217-4e3a-a204-5bea8bddc3cf//98a90967-c745-4f5e-963e-5cd635514222.jpg",
                  isExistsInRoom: true,
                  id: "5c5beb8b-5217-4e3a-a204-5bea8bddc3cf",
                  isValid: true,
                },
                isModified: false,
                roomId: "f6a62f3d-88dd-4444-9254-6d0163e353a1",
                groupId: "00000000-0000-0000-0000-000000000000",
                options: [],
                files: [],
                id: "3bd0440b-debe-4aff-9200-06aa340b18d1",
                isValid: true,
              },
              {
                data: "وتستين",
                isPollStopped: false,
                laditiude: null,
                longitude: null,
                vcf: null,
                messageType: 1,
                creationDate: "2020-06-30T14:20:42.0037834+00:00",
                lastUpdateDate: null,
                chatPersonDto: {
                  firstName: "Mohammad",
                  lastName: "Srieo",
                  email: "mohammad.srieo@gmail.com",
                  personalPhoto:
                    "/ProfilesDirectory/5c5beb8b-5217-4e3a-a204-5bea8bddc3cf//98a90967-c745-4f5e-963e-5cd635514222.jpg",
                  isExistsInRoom: true,
                  id: "5c5beb8b-5217-4e3a-a204-5bea8bddc3cf",
                  isValid: true,
                },
                isModified: false,
                roomId: "f6a62f3d-88dd-4444-9254-6d0163e353a1",
                groupId: "00000000-0000-0000-0000-000000000000",
                options: [],
                files: [],
                id: "770e4087-4bd2-4135-93c9-4fc029b4104f",
                isValid: true,
              },
              {
                data: "وسهلين",
                isPollStopped: false,
                laditiude: null,
                longitude: null,
                vcf: null,
                messageType: 1,
                creationDate: "2020-06-30T14:20:38.5193519+00:00",
                lastUpdateDate: null,
                chatPersonDto: {
                  firstName: "Mohammad",
                  lastName: "Srieo",
                  email: "mohammad.srieo@gmail.com",
                  personalPhoto:
                    "/ProfilesDirectory/5c5beb8b-5217-4e3a-a204-5bea8bddc3cf//98a90967-c745-4f5e-963e-5cd635514222.jpg",
                  isExistsInRoom: true,
                  id: "5c5beb8b-5217-4e3a-a204-5bea8bddc3cf",
                  isValid: true,
                },
                isModified: false,
                roomId: "f6a62f3d-88dd-4444-9254-6d0163e353a1",
                groupId: "00000000-0000-0000-0000-000000000000",
                options: [],
                files: [],
                id: "45a01439-bb8f-45e0-8d03-d4cd9f9a3a25",
                isValid: true,
              },
              {
                data: "اهلين",
                isPollStopped: false,
                laditiude: null,
                longitude: null,
                vcf: null,
                messageType: 1,
                creationDate: "2020-06-30T14:20:37.456845+00:00",
                lastUpdateDate: null,
                chatPersonDto: {
                  firstName: "Mohammad",
                  lastName: "Srieo",
                  email: "mohammad.srieo@gmail.com",
                  personalPhoto:
                    "/ProfilesDirectory/5c5beb8b-5217-4e3a-a204-5bea8bddc3cf//98a90967-c745-4f5e-963e-5cd635514222.jpg",
                  isExistsInRoom: true,
                  id: "5c5beb8b-5217-4e3a-a204-5bea8bddc3cf",
                  isValid: true,
                },
                isModified: false,
                roomId: "f6a62f3d-88dd-4444-9254-6d0163e353a1",
                groupId: "00000000-0000-0000-0000-000000000000",
                options: [],
                files: [],
                id: "8266f23b-a8ac-4473-a7ee-a876b1a9695f",
                isValid: true,
              },
              {
                data: "تست",
                isPollStopped: false,
                laditiude: null,
                longitude: null,
                vcf: null,
                messageType: 1,
                creationDate: "2020-06-30T14:19:39.7229011+00:00",
                lastUpdateDate: null,
                chatPersonDto: {
                  firstName: "Wael",
                  lastName: "alshabani",
                  email: "waelalshabani@hotmail.com",
                  personalPhoto: null,
                  isExistsInRoom: true,
                  id: "1df5a74b-4239-4548-9d2f-7c61597ef728",
                  isValid: true,
                },
                isModified: false,
                roomId: "f6a62f3d-88dd-4444-9254-6d0163e353a1",
                groupId: "00000000-0000-0000-0000-000000000000",
                options: [],
                files: [],
                id: "2b06f1db-dde2-444a-b988-ac3137249625",
                isValid: true,
              },
              {
                data: "خو مجقة",
                isPollStopped: false,
                laditiude: null,
                longitude: null,
                vcf: null,
                messageType: 1,
                creationDate: "2020-06-30T11:25:02.5310303+00:00",
                lastUpdateDate: null,
                chatPersonDto: {
                  firstName: "Wael",
                  lastName: "alshabani",
                  email: "waelalshabani@hotmail.com",
                  personalPhoto: null,
                  isExistsInRoom: true,
                  id: "1df5a74b-4239-4548-9d2f-7c61597ef728",
                  isValid: true,
                },
                isModified: false,
                roomId: "f6a62f3d-88dd-4444-9254-6d0163e353a1",
                groupId: "00000000-0000-0000-0000-000000000000",
                options: [],
                files: [],
                id: "1a4f815a-2612-48a8-8f99-9ba242c50e14",
                isValid: true,
              },
              {
                data: "هات مجقة 😘😘😘",
                isPollStopped: false,
                laditiude: null,
                longitude: null,
                vcf: null,
                messageType: 1,
                creationDate: "2020-06-30T11:23:34.9847576+00:00",
                lastUpdateDate: null,
                chatPersonDto: {
                  firstName: "Mohammad",
                  lastName: "Srieo",
                  email: "mohammad.srieo@gmail.com",
                  personalPhoto:
                    "/ProfilesDirectory/5c5beb8b-5217-4e3a-a204-5bea8bddc3cf//98a90967-c745-4f5e-963e-5cd635514222.jpg",
                  isExistsInRoom: true,
                  id: "5c5beb8b-5217-4e3a-a204-5bea8bddc3cf",
                  isValid: true,
                },
                isModified: false,
                roomId: "f6a62f3d-88dd-4444-9254-6d0163e353a1",
                groupId: "00000000-0000-0000-0000-000000000000",
                options: [],
                files: [],
                id: "bd309461-e1b2-4142-9209-09e28096289b",
                isValid: true,
              },
              {
                data: "اي",
                isPollStopped: false,
                laditiude: null,
                longitude: null,
                vcf: null,
                messageType: 1,
                creationDate: "2020-06-30T11:23:28.9067014+00:00",
                lastUpdateDate: null,
                chatPersonDto: {
                  firstName: "Wael",
                  lastName: "alshabani",
                  email: "waelalshabani@hotmail.com",
                  personalPhoto: null,
                  isExistsInRoom: true,
                  id: "1df5a74b-4239-4548-9d2f-7c61597ef728",
                  isValid: true,
                },
                isModified: false,
                roomId: "f6a62f3d-88dd-4444-9254-6d0163e353a1",
                groupId: "00000000-0000-0000-0000-000000000000",
                options: [],
                files: [],
                id: "6f2b137e-e1e1-42e8-80dc-36d8d9e8a588",
                isValid: true,
              },
              {
                data: "بست",
                isPollStopped: false,
                laditiude: null,
                longitude: null,
                vcf: null,
                messageType: 1,
                creationDate: "2020-07-05T11:03:50.1935767+00:00",
                lastUpdateDate: null,
                chatPersonDto: {
                  firstName: "Wael",
                  lastName: "alshabani",
                  email: "waelalshabani@hotmail.com",
                  personalPhoto: null,
                  isExistsInRoom: true,
                  id: "1df5a74b-4239-4548-9d2f-7c61597ef728",
                  isValid: true,
                },
                isModified: false,
                roomId: "f6a62f3d-88dd-4444-9254-6d0163e353a1",
                groupId: "00000000-0000-0000-0000-000000000000",
                options: [],
                files: [],
                id: "7709410c3-eebf-4eee-bd4b-3d0ebccb506c",
                isValid: true,
              },
              {
                data: "قللي نضري شو لازمك",
                isPollStopped: false,
                laditiude: null,
                longitude: null,
                vcf: null,
                messageType: 1,
                creationDate: "2020-06-30T14:21:03.3316484+00:00",
                lastUpdateDate: null,
                chatPersonDto: {
                  firstName: "Mohammad",
                  lastName: "Srieo",
                  email: "mohammad.srieo@gmail.com",
                  personalPhoto:
                    "/ProfilesDirectory/5c5beb8b-5217-4e3a-a204-5bea8bddc3cf//98a90967-c745-4f5e-963e-5cd635514222.jpg",
                  isExistsInRoom: true,
                  id: "5c5beb8b-5217-4e3a-a204-5bea8bddc3cf",
                  isValid: true,
                },
                isModified: false,
                roomId: "f6a62f3d-88dd-4444-9254-6d0163e353a1",
                groupId: "00000000-0000-0000-0000-000000000000",
                options: [],
                files: [],
                id: "f60eb096-f597b-4f48-8c56-e2ec0a637484",
                isValid: true,
              },
              {
                data: "بهالعنتين",
                isPollStopped: false,
                laditiude: null,
                longitude: null,
                vcf: null,
                messageType: 1,
                creationDate: "2020-06-30T14:20:56.9254236+00:00",
                lastUpdateDate: null,
                chatPersonDto: {
                  firstName: "Mohammad",
                  lastName: "Srieo",
                  email: "mohammad.srieo@gmail.com",
                  personalPhoto:
                    "/ProfilesDirectory/5c5beb8b-5217-4e3a-a204-5bea8bddc3cf//98a90967-c745-4f5e-963e-5cd635514222.jpg",
                  isExistsInRoom: true,
                  id: "5c5beb8b-5217-4e3a-a204-5bea8bddc3cf",
                  isValid: true,
                },
                isModified: false,
                roomId: "f6a62f3d-88dd-4444-9254-6d0163e353a1",
                groupId: "00000000-0000-0000-0000-000000000000",
                options: [],
                files: [],
                id: "3bd0440b-1debe-4aff-9200-06aa340b18d1",
                isValid: true,
              },
              {
                data: "وتستين",
                isPollStopped: false,
                laditiude: null,
                longitude: null,
                vcf: null,
                messageType: 1,
                creationDate: "2020-06-30T14:20:42.0037834+00:00",
                lastUpdateDate: null,
                chatPersonDto: {
                  firstName: "Mohammad",
                  lastName: "Srieo",
                  email: "mohammad.srieo@gmail.com",
                  personalPhoto:
                    "/ProfilesDirectory/5c5beb8b-5217-4e3a-a204-5bea8bddc3cf//98a90967-c745-4f5e-963e-5cd635514222.jpg",
                  isExistsInRoom: true,
                  id: "5c5beb8b-5217-4e3a-a204-5bea8bddc3cf",
                  isValid: true,
                },
                isModified: false,
                roomId: "f6a62f3d-88dd-4444-9254-6d0163e353a1",
                groupId: "00000000-0000-0000-0000-000000000000",
                options: [],
                files: [],
                id: "770e4087-46bd2-4135-93c9-4fc029b4104f",
                isValid: true,
              },
              {
                data: "وسهلين",
                isPollStopped: false,
                laditiude: null,
                longitude: null,
                vcf: null,
                messageType: 1,
                creationDate: "2020-06-30T14:20:38.5193519+00:00",
                lastUpdateDate: null,
                chatPersonDto: {
                  firstName: "Mohammad",
                  lastName: "Srieo",
                  email: "mohammad.srieo@gmail.com",
                  personalPhoto:
                    "/ProfilesDirectory/5c5beb8b-5217-4e3a-a204-5bea8bddc3cf//98a90967-c745-4f5e-963e-5cd635514222.jpg",
                  isExistsInRoom: true,
                  id: "5c5beb8b-5217-4e3a-a204-5bea8bddc3cf",
                  isValid: true,
                },
                isModified: false,
                roomId: "f6a62f3d-88dd-4444-9254-6d0163e353a1",
                groupId: "00000000-0000-0000-0000-000000000000",
                options: [],
                files: [],
                id: "45a014393-bb8f-45e0-8d03-d4cd9f9a3a25",
                isValid: true,
              },
              {
                data: "اهلين",
                isPollStopped: false,
                laditiude: null,
                longitude: null,
                vcf: null,
                messageType: 1,
                creationDate: "2020-06-30T14:20:37.456845+00:00",
                lastUpdateDate: null,
                chatPersonDto: {
                  firstName: "Mohammad",
                  lastName: "Srieo",
                  email: "mohammad.srieo@gmail.com",
                  personalPhoto:
                    "/ProfilesDirectory/5c5beb8b-5217-4e3a-a204-5bea8bddc3cf//98a90967-c745-4f5e-963e-5cd635514222.jpg",
                  isExistsInRoom: true,
                  id: "5c5beb8b-5217-4e3a-a204-5bea8bddc3cf",
                  isValid: true,
                },
                isModified: false,
                roomId: "f6a62f3d-88dd-4444-9254-6d0163e353a1",
                groupId: "00000000-0000-0000-0000-000000000000",
                options: [],
                files: [],
                id: "8266f23b-a8a5c-4473-a7ee-a876b1a9695f",
                isValid: true,
              },
              {
                data: "تست",
                isPollStopped: false,
                laditiude: null,
                longitude: null,
                vcf: null,
                messageType: 1,
                creationDate: "2020-036-30T14:19:39.7229011+00:00",
                lastUpdateDate: null,
                chatPersonDto: {
                  firstName: "Wael",
                  lastName: "alshabani",
                  email: "waelalshabani@hotmail.com",
                  personalPhoto: null,
                  isExistsInRoom: true,
                  id: "1df5a714b-4239-4548-9d2f-7c61597ef728",
                  isValid: true,
                },
                isModified: false,
                roomId: "f6a62f3d-88dd-4444-9254-6d0163e353a1",
                groupId: "00000000-0000-0000-0000-000000000000",
                options: [],
                files: [],
                id: "2b06f14db-dde2-444a-b988-ac3137249625",
                isValid: true,
              },
              {
                data: "خو مجقة",
                isPollStopped: false,
                laditiude: null,
                longitude: null,
                vcf: null,
                messageType: 1,
                creationDate: "2020-06-30T11:25:02.5310303+00:00",
                lastUpdateDate: null,
                chatPersonDto: {
                  firstName: "Wael",
                  lastName: "alshabani",
                  email: "waelalshabani@hotmail.com",
                  personalPhoto: null,
                  isExistsInRoom: true,
                  id: "1df5a74b-4239-4548-9d2f-7c61597ef728",
                  isValid: true,
                },
                isModified: false,
                roomId: "f6a62f3d-88dd-4444-9254-6d0163e353a1",
                groupId: "00000000-0000-0000-0000-000000000000",
                options: [],
                files: [],
                id: "1a4f815a3-2612-48a8-8f99-9ba242c50e14",
                isValid: true,
              },
              {
                data: "هات مجقة 😘😘😘",
                isPollStopped: false,
                laditiude: null,
                longitude: null,
                vcf: null,
                messageType: 1,
                creationDate: "2020-06-30T11:23:34.9847576+00:00",
                lastUpdateDate: null,
                chatPersonDto: {
                  firstName: "Mohammad",
                  lastName: "Srieo",
                  email: "mohammad.srieo@gmail.com",
                  personalPhoto:
                    "/ProfilesDirectory/5c5beb8b-5217-4e3a-a204-5bea8bddc3cf//98a90967-c745-4f5e-963e-5cd635514222.jpg",
                  isExistsInRoom: true,
                  id: "5c5beb8b-5217-4e3a-a204-5bea8bddc3cf",
                  isValid: true,
                },
                isModified: false,
                roomId: "f6a62f3d-88dd-4444-9254-6d0163e353a1",
                groupId: "00000000-0000-0000-0000-000000000000",
                options: [],
                files: [],
                id: "bd3029461-e1b2-4142-9209-09e28096289b",
                isValid: true,
              },
              {
                data: "اي",
                isPollStopped: false,
                laditiude: null,
                longitude: null,
                vcf: null,
                messageType: 1,
                creationDate: "2020-06-30T11:23:28.9067014+00:00",
                lastUpdateDate: null,
                chatPersonDto: {
                  firstName: "Wael",
                  lastName: "alshabani",
                  email: "waelalshabani@hotmail.com",
                  personalPhoto: null,
                  isExistsInRoom: true,
                  id: "1df5a74b-4239-4548-9d2f-7c61597ef728",
                  isValid: true,
                },
                isModified: false,
                roomId: "f6a62f3d-88dd-4444-9254-6d0163e353a1",
                groupId: "00000000-0000-0000-0000-000000000000",
                options: [],
                files: [],
                id: "1137e-e1e1-42e8-80dc-36d8d9e8a588",
                isValid: true,
              },
            ]}
          ></MessagesWindow>
        </div>
      );
    },
  }))
  .add("With Files", () => ({
    components: {
      MessagesWindow,
    },
    methods: {},
    render() {
      return (
        <div class="mx-10">
          <MessagesWindow
            userId="5c5beb8b-5217-4e3a-a204-5bea8bddc3cf"
            messages={[
              {
                data: "",
                isPollStopped: false,
                laditiude: null,
                longitude: null,
                vcf: null,
                messageType: 6,
                creationDate: "2020-07-05T10:08:45.5288317+00:00",
                lastUpdateDate: null,
                chatPersonDto: {
                  firstName: "Mohammaf",
                  lastName: "Srieo",
                  email: "mohammad.srieo@gmail.com",
                  personalPhoto: null,
                  isExistsInRoom: true,
                  id: "5c5beb8b-5217-4e3a-a204-5bea8bddc3cf",
                  isValid: true,
                },
                isModified: false,
                roomId: "a748a065-c81c-436c-8a92-d4003a537446",
                groupId: "00000000-0000-0000-0000-000000000000",
                options: [],
                files: [
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
                ],
                id: "b5b24d1d-3aad-4043-9441-7e37fc847824",
                isValid: true,
              },
              {
                data: "",
                isPollStopped: false,
                laditiude: null,
                longitude: null,
                vcf: null,
                messageType: 2,
                creationDate: "2020-07-05T10:08:35.5757568+00:00",
                lastUpdateDate: null,
                chatPersonDto: {
                  firstName: "Mohammaf",
                  lastName: "Srieo",
                  email: "mohammad.srieo@gmail.com",
                  personalPhoto: null,
                  isExistsInRoom: true,
                  id: "5c5beb8b-5217-4e3a-a204-5bea8bddc3cf",
                  isValid: true,
                },
                isModified: false,
                roomId: "a748a065-c81c-436c-8a92-d4003a537446",
                groupId: "00000000-0000-0000-0000-000000000000",
                options: [],
                files: [
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
                ],
                id: "0cd3e9c8-33dd-421a-b181-767af75013dd",
                isValid: true,
              },
              {
                data: "How are you",
                isPollStopped: false,
                laditiude: null,
                longitude: null,
                vcf: null,
                messageType: 1,
                creationDate: "2020-07-05T10:08:25.4664515+00:00",
                lastUpdateDate: null,
                chatPersonDto: {
                  firstName: "Mohammaf",
                  lastName: "Srieo",
                  email: "mohammad.srieo@gmail.com",
                  personalPhoto: null,
                  isExistsInRoom: true,
                  id: "5c5beb8b-5217-4e3a-a204-5bea8bddc3cf",
                  isValid: true,
                },
                isModified: false,
                roomId: "a748a065-c81c-436c-8a92-d4003a537446",
                groupId: "00000000-0000-0000-0000-000000000000",
                options: [],
                files: [],
                id: "ccff3673-db31-4ecd-abbf-1374a37f321a",
                isValid: true,
              },
              {
                data: "Hi fadel",
                isPollStopped: false,
                laditiude: null,
                longitude: null,
                vcf: null,
                messageType: 1,
                creationDate: "2020-07-05T10:08:22.9820907+00:00",
                lastUpdateDate: null,
                chatPersonDto: {
                  firstName: "Mohammaf",
                  lastName: "Srieo",
                  email: "mohammad.srieo@gmail.com",
                  personalPhoto: null,
                  isExistsInRoom: true,
                  id: "5c5beb8b-5217-4e3a-a204-5bea8bddc3cf",
                  isValid: true,
                },
                isModified: false,
                roomId: "a748a065-c81c-436c-8a92-d4003a537446",
                groupId: "00000000-0000-0000-0000-000000000000",
                options: [],
                files: [],
                id: "1ac150a0-7bd6-4386-8c41-30c924886bfe",
                isValid: true,
              },
            ]}
          ></MessagesWindow>
        </div>
      );
    },
  }))
  .add("Group Room", () => ({
    components: {
      MessagesWindow,
    },
    methods: {},
    render() {
      return (
        <div class="mx-10">
          <MessagesWindow
            userId="5c5beb8b-5217-4e3a-a204-5bea8bddc3cf"
            messages={[
              {
                data: "بست",
                isPollStopped: false,
                laditiude: null,
                longitude: null,
                vcf: null,
                messageType: 1,
                creationDate: "2020-07-05T11:03:50.1935767+00:00",
                lastUpdateDate: null,
                chatPersonDto: {
                  firstName: "Wael",
                  lastName: "alshabani",
                  email: "waelalshabani@hotmail.com",
                  personalPhoto: null,
                  isExistsInRoom: true,
                  id: "1df5a74b-4239-4548-9d2f-7c61597ef728",
                  isValid: true,
                },
                isModified: false,
                roomId: "f6a62f3d-88dd-4444-9254-6d0163e353a1",
                groupId: "00000000-0000-0000-0000-000000000000",
                options: [],
                files: [],
                id: "7709410c-eebf-4eee-bd4b-3d0ebccb506c",
                isValid: true,
              },
              {
                data: "قللي نضري شو لازمك",
                isPollStopped: false,
                laditiude: null,
                longitude: null,
                vcf: null,
                messageType: 1,
                creationDate: "2020-06-30T14:21:03.3316484+00:00",
                lastUpdateDate: null,
                chatPersonDto: {
                  firstName: "Mohammaf",
                  lastName: "Srieo",
                  email: "mohammad.srieo@gmail.com",
                  personalPhoto: null,
                  isExistsInRoom: true,
                  id: "5c5beb8b-5217-4e3a-a204-5bea8bddc3cf",
                  isValid: true,
                },
                isModified: false,
                roomId: "f6a62f3d-88dd-4444-9254-6d0163e353a1",
                groupId: "00000000-0000-0000-0000-000000000000",
                options: [],
                files: [],
                id: "f60eb096-f59b-4f48-8c56-e2ec0a637484",
                isValid: true,
              },
              {
                data: "بهالعنتين",
                isPollStopped: false,
                laditiude: null,
                longitude: null,
                vcf: null,
                messageType: 1,
                creationDate: "2020-06-30T14:20:56.9254236+00:00",
                lastUpdateDate: null,
                chatPersonDto: {
                  firstName: "Fadel",
                  lastName: "Sabbagh",
                  email: "mohammad.srieo@gmail.com",
                  personalPhoto: null,
                  isExistsInRoom: true,
                  id: "12344123123",
                  isValid: true,
                },
                isModified: false,
                roomId: "f6a62f3d-88dd-4444-9254-6d0163e353a1",
                groupId: "00000000-0000-0000-0000-000000000000",
                options: [],
                files: [],
                id: "1d3440b-debe-4aff-9200-06aa340b18d1",
                isValid: true,
              },
              {
                data: "بهالعنتين",
                isPollStopped: false,
                laditiude: null,
                longitude: null,
                vcf: null,
                messageType: 1,
                creationDate: "2020-06-30T14:20:56.9254236+00:00",
                lastUpdateDate: null,
                chatPersonDto: {
                  firstName: "Fadel",
                  lastName: "Sabbagh",
                  email: "mohammad.srieo@gmail.com",
                  personalPhoto: null,
                  isExistsInRoom: true,
                  id: "12344123123",
                  isValid: true,
                },
                isModified: false,
                roomId: "f6a62f3d-88dd-4444-9254-6d0163e353a1",
                groupId: "00000000-0000-0000-0000-000000000000",
                options: [],
                files: [],
                id: "1d0440b-debe-4aff-9200-06aa340b18d1",
                isValid: true,
              },
              {
                data: "بهالعنتين",
                isPollStopped: false,
                laditiude: null,
                longitude: null,
                vcf: null,
                messageType: 1,
                creationDate: "2020-06-30T14:20:56.9254236+00:00",
                lastUpdateDate: null,
                chatPersonDto: {
                  firstName: "Mourad",
                  lastName: "Sabbagh",
                  email: "mohammad.srieo@gmail.com",
                  personalPhoto: null,
                  isExistsInRoom: true,
                  id: "123441231234412",
                  isValid: true,
                },
                isModified: false,
                roomId: "f6a62f3d-88dd-4444-9254-6d0163e353a1",
                groupId: "00000000-0000-0000-0000-000000000000",
                options: [],
                files: [],
                id: "2d0440b-debe-4aff-9200-06aa340b18d1",
                isValid: true,
              },
              {
                data: "وتستين",
                isPollStopped: false,
                laditiude: null,
                longitude: null,
                vcf: null,
                messageType: 1,
                creationDate: "2020-06-30T14:20:42.0037834+00:00",
                lastUpdateDate: null,
                chatPersonDto: {
                  firstName: "Mohammaf",
                  lastName: "Srieo",
                  email: "mohammad.srieo@gmail.com",
                  personalPhoto: null,
                  isExistsInRoom: true,
                  id: "5c5beb8b-5217-4e3a-a204-5bea8bddc3cf",
                  isValid: true,
                },
                isModified: false,
                roomId: "f6a62f3d-88dd-4444-9254-6d0163e353a1",
                groupId: "00000000-0000-0000-0000-000000000000",
                options: [],
                files: [],
                id: "770e4087-4bd2-4135-93c9-4fc029b4104f",
                isValid: true,
              },
              {
                data: "وسهلين",
                isPollStopped: false,
                laditiude: null,
                longitude: null,
                vcf: null,
                messageType: 1,
                creationDate: "2020-06-30T14:20:38.5193519+00:00",
                lastUpdateDate: null,
                chatPersonDto: {
                  firstName: "Mourad",
                  lastName: "Niazi",
                  email: "mohammad.srieo@gmail.com",
                  personalPhoto: null,
                  isExistsInRoom: true,
                  id: "331231231",
                  isValid: true,
                },
                isModified: false,
                roomId: "f6a62f3d-88dd-4444-9254-6d0163e353a1",
                groupId: "00000000-0000-0000-0000-000000000000",
                options: [],
                files: [],
                id: "45a01439-bb8f-45e0-8d03-d4cd9f9a3a25",
                isValid: true,
              },
            ]}
          ></MessagesWindow>
        </div>
      );
    },
  }));