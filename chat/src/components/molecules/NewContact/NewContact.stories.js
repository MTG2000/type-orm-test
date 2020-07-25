import { storiesOf } from "@storybook/vue";
import NewContact from "./NewContact.vue";

storiesOf("New Contact Modal", module)
  .add("Required", () => ({
    components: {
      NewContact,
    },
    methods: {},
    render() {
      return (
        <div class="mx-10 mt-16" style="padding-top:100px">
          <NewContact></NewContact>
        </div>
      );
    },
  }))
  .add("With Contacts", () => ({
    components: {
      NewContact,
    },
    methods: {},
    render() {
      return (
        <div class="mx-10 mt-16" style="padding-top:100px">
          <NewContact
            contacts={[
              {
                firstName: "Ahmad",
                lastName: "Almurtada",
                email: "drmurtada1966@gmail.com",
                personalPhoto:
                  "/MobileWebApi/Images/ProfilesPictures//b2232f78-da72-4791-89ce-431f8208325f.jpg",
                isExistsInRoom: false,
                id: "b2232f78-da72-4791-89ce-431f8208325f",
                isValid: true,
              },
              {
                firstName: "Ahmad",
                lastName: "Ghazal",
                email: "ghazal929@yahoo.com",
                personalPhoto: null,
                isExistsInRoom: false,
                id: "5f9b3592-b4fb-413f-843d-9fdf16eae67c",
                isValid: true,
              },
              {
                firstName: "Ahmad",
                lastName: "Kaled",
                email: "bubuh@vpstraffic.com",
                personalPhoto:
                  "/MobileWebApi/Images/ProfilesPictures//db5082e1-6701-4787-b017-9be1a7ad5734.jpg",
                isExistsInRoom: false,
                id: "db5082e1-6701-4787-b017-9be1a7ad5734",
                isValid: true,
              },
              {
                firstName: "ahmad",
                lastName: "kudssi",
                email: "abk83sy@gmail.com",
                personalPhoto: null,
                isExistsInRoom: false,
                id: "98ad54e6-f1ed-4094-a7df-c70a8cb61a89",
                isValid: true,
              },
              {
                firstName: "Ahmad",
                lastName: "nahhas",
                email: "ahmad.adnan.nahhas@gmail.com",
                personalPhoto: null,
                isExistsInRoom: false,
                id: "2b5c0b9d-4e3b-41a5-bc0f-2d7badf120bc",
                isValid: true,
              },
              {
                firstName: "Ahmad",
                lastName: "Nahhas",
                email: "ahmedna@healthintouch.net",
                personalPhoto: null,
                isExistsInRoom: false,
                id: "2a498d33-bf6b-4fb2-92df-425982eb09b0",
                isValid: true,
              },
              {
                firstName: "Ahmad",
                lastName: "Sarah Eddin",
                email: "ahmad.sraj.aldeen@gmail.com",
                personalPhoto: null,
                isExistsInRoom: false,
                id: "359bab02-242d-40db-9ce1-0fdd1826ea1a",
                isValid: true,
              },
              {
                firstName: "Ahmad",
                lastName: "Seraj Eddin",
                email: "dr.ahmado0ov@gmail.com",
                personalPhoto: null,
                isExistsInRoom: false,
                id: "f1a2186a-0d30-4eab-8f33-55f6c438d377",
                isValid: true,
              },
              {
                firstName: "gomana",
                lastName: "alahmad",
                email: "amar.007.k.aa@gmail.com",
                personalPhoto: null,
                isExistsInRoom: false,
                id: "656e1c31-f97e-44f7-9a3c-70d47750fd76",
                isValid: true,
              },
              {
                firstName: "gomana",
                lastName: "alahmad",
                email: "farah.97.k.aa@gmail.com",
                personalPhoto: null,
                isExistsInRoom: false,
                id: "734eec14-e8e6-42f4-9b1c-9597365b81c0",
                isValid: true,
              },
            ]}
          />
        </div>
      );
    },
  }));
