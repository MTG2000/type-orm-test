import Axios from "axios";
import Enums from "../helpers/enums";

export default {
  async getRooms({ chatform = 1, personId = null, query = null }) {
    return (await Axios.get(`/api/contacts`, {})).data;
  },

  async roomExist(userId) {
    return (
      await Axios.get(`/api/contacts/exist`, {
        params: {
          userId,
        },
      })
    ).data;
  },

  async addRoom({ title = null, roomMembers = [] }) {
    const res = await Axios.post("/api/contacts/create", {
      userId: roomMembers[0],
    });

    // Fetch The room
    const room = (
      await Axios.get("/api/contacts/room", {
        params: {
          id: res.data.id,
        },
      })
    ).data;
    console.log(room);

    return room;
  },

  async deleteRoom(itemId) {
    return await Axios.delete("/api/contacts/room", {
      data: {
        itemId,
      },
    });
  },
};
