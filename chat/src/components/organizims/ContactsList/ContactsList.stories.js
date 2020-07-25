import { storiesOf } from "@storybook/vue";
import ContactsList from "./ContactsList.vue";

storiesOf("Contacts List", module)
  .add("Required", () => ({
    components: {
      ContactsList,
    },
    methods: {},
    render() {
      return (
        <div class="mx-10">
          <ContactsList></ContactsList>
        </div>
      );
    },
  }))
  .add("Full", () => ({
    components: {
      ContactsList,
    },
    methods: {},
    render() {
      return (
        <div class="row mx-3">
          <ContactsList
            userId=""
            contacts={[
              {
                chatTypeId: "00000000-0000-0000-0000-000000000000",
                photoUrl: null,
                coverUrl: null,
                title: "Wael alshabani",
                description: null,
                lastMessage: "بست",
                roomType: 0,
                chatForm: 1,
                lastMessageDateTime: "2020-07-05T11:03:50.1935767+00:00",
                contributers: [
                  {
                    firstName: "Wael",
                    lastName: "alshabani",
                    personId: "1df5a74b-4239-4548-9d2f-7c61597ef728",
                    roomMemberLevel: 0,
                    id: "b7550037-cf75-4bdb-b5e9-83fea167c496",
                    isValid: true,
                  },
                  {
                    firstName: "Mohammaf",
                    lastName: "Srieo",
                    personId: "5c5beb8b-5217-4e3a-a204-5bea8bddc3cf",
                    roomMemberLevel: 2,
                    id: "7764eee6-91a1-4a93-bd2c-8bc033308cf3",
                    isValid: true,
                  },
                ],
                id: "f6a62f3d-88dd-4444-9254-6d0163e353a1",
                isValid: true,
              },
              {
                chatTypeId: "00000000-0000-0000-0000-000000000000",
                photoUrl:
                  "/ProfilesDirectory/b33ebac1-0c1a-4fcf-bb77-5269345c436d//d810f6ed-d150-4433-b8e9-7e5c011b9f90.jpg",
                coverUrl: null,
                title: "Fadel Sabbagh",
                description: null,
                lastMessage: "",
                roomType: 0,
                chatForm: 1,
                lastMessageDateTime: "2020-07-05T10:08:45.5288317+00:00",
                contributers: [
                  {
                    firstName: "Fadel",
                    lastName: "Sabbagh",
                    personId: "b33ebac1-0c1a-4fcf-bb77-5269345c436d",
                    roomMemberLevel: 0,
                    id: "927db986-047c-44f3-ba4a-2c792221a2aa",
                    isValid: true,
                  },
                  {
                    firstName: "Mohammaf",
                    lastName: "Srieo",
                    personId: "5c5beb8b-5217-4e3a-a204-5bea8bddc3cf",
                    roomMemberLevel: 2,
                    id: "21ecf51f-aa9a-4597-989c-348c58551fb0",
                    isValid: true,
                  },
                ],
                id: "a748a065-c81c-436c-8a92-d4003a537446",
                isValid: true,
              },
              {
                chatTypeId: "00000000-0000-0000-0000-000000000000",
                photoUrl:
                  "/MobileWebApi/Images/ProfilesPictures//48d110b1-3a21-4ed3-b637-b5f69eff95f7.jpg",
                coverUrl: null,
                title: "Mohammad fadel Sabbagh",
                description: null,
                lastMessage: "Twat",
                roomType: 0,
                chatForm: 1,
                lastMessageDateTime: "2020-06-11T13:23:13.7759818+00:00",
                contributers: [
                  {
                    firstName: "Mohammad fadel",
                    lastName: "Sabbagh",
                    personId: "48d110b1-3a21-4ed3-b637-b5f69eff95f7",
                    roomMemberLevel: 0,
                    id: "9dc2599d-b9b8-4f98-8253-e1e1fa7a17c0",
                    isValid: true,
                  },
                  {
                    firstName: "Mohammaf",
                    lastName: "Srieo",
                    personId: "5c5beb8b-5217-4e3a-a204-5bea8bddc3cf",
                    roomMemberLevel: 2,
                    id: "abd6abe5-a3d6-4302-94de-f7249645fd82",
                    isValid: true,
                  },
                ],
                id: "728ca431-cb0b-4e45-ad38-bcc8aaf5c217",
                isValid: true,
              },
              {
                chatTypeId: "00000000-0000-0000-0000-000000000000",
                photoUrl: "",
                coverUrl: null,
                title: "hhhhh",
                description: null,
                lastMessage: null,
                roomType: 2,
                chatForm: 1,
                lastMessageDateTime: null,
                contributers: [
                  {
                    firstName: "mustafa",
                    lastName: "hasria",
                    personId: "e45afd49-bc32-4df6-b41e-a8647793b68b",
                    roomMemberLevel: 2,
                    id: "44124814-14ce-46fb-b0df-42b905cdfee7",
                    isValid: true,
                  },
                  {
                    firstName: "Mohammaf",
                    lastName: "Srieo",
                    personId: "5c5beb8b-5217-4e3a-a204-5bea8bddc3cf",
                    roomMemberLevel: 0,
                    id: "7944cff6-c11a-4225-9a30-7b251281c947",
                    isValid: true,
                  },
                ],
                id: "67e6bb76-d99f-479e-bba2-b215892c1d38",
                isValid: true,
              },
              {
                chatTypeId: "00000000-0000-0000-0000-000000000000",
                photoUrl: null,
                coverUrl: null,
                title: "مراد نيازي",
                description: null,
                lastMessage: null,
                roomType: 0,
                chatForm: 1,
                lastMessageDateTime: null,
                contributers: [
                  {
                    firstName: "مراد",
                    lastName: "نيازي",
                    personId: "41f05917-7383-4ccb-b683-c0405f5f11e6",
                    roomMemberLevel: 0,
                    id: "f9f84e04-3615-4a9c-9dc9-a71e26d0be36",
                    isValid: true,
                  },
                  {
                    firstName: "Mohammaf",
                    lastName: "Srieo",
                    personId: "5c5beb8b-5217-4e3a-a204-5bea8bddc3cf",
                    roomMemberLevel: 2,
                    id: "ec7ae1c5-0404-4e0a-ac25-e3151d604ca1",
                    isValid: true,
                  },
                ],
                id: "3c84bf69-4fbf-4872-90ab-e421a434eae2",
                isValid: true,
              },
            ]}
          ></ContactsList>
        </div>
      );
    },
  }));
