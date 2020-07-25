import Axios from "axios";
import Enums from "../helpers/enums";

export default {
  async getRooms({ chatform = 1, personId = null, query = null }) {
    return (
      await Axios.get(`/ChatWebAPI/api/rooms`, {
        params: {
          enablePagination: false,
          ...(chatform && { chatform }),
          ...(personId && { personId }),
          ...(query && { query }),
        },
      })
    ).data;
  },

  async addRoom({
    title = null,
    roomType = Enums.RoomsTypes.Private,
    chatTypeId = Enums.EmptyGuid,
    chatForm = 1,
    roomMembers = [],
  }) {
    const res = await Axios.post("/ChatWebAPI/api/rooms/room", {
      title,
      roomType,
      chatTypeId,
      chatForm,
      roomMembers,
    });

    // Fetch The room

    return (
      await Axios.get("/ChatWebAPI/api/rooms/room", {
        params: {
          id: res.data.entity.id,
        },
      })
    ).data;
  },

  async deleteRoom(itemId) {
    return await Axios.delete("/ChatWebAPI/api/rooms/room", {
      data: {
        itemId,
      },
    });
  },
};
