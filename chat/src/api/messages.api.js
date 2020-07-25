import Axios from "axios";

export default {
  async getMessages(
    roomId,
    messageTypes,
    query,
    pageSize = 20,
    pageNumber = 0
  ) {
    return (
      await Axios.get(`/ChatWebAPI/api/messages/${roomId}`, {
        params: {
          ...(messageTypes && { messageTypes }),
          ...(query && { query }),
          pageSize,
          pageNumber,
        },
      })
    ).data;
  },

  async addMessage(
    RoomId,
    Data = "",
    MessageType,
    Files = [],
    onUploadProgress = () => {}
  ) {
    let formData = new FormData();
    formData.append("RoomId", RoomId);
    formData.append("Data", Data);
    formData.append("MessageType", MessageType);
    for (const file of Files) {
      formData.append("File", file);
    }

    const res = await Axios.put("/ChatWebAPI/api/messages/message", formData, {
      onUploadProgress,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    // await new Promise((res, rej) => {
    //   setTimeout(() => {
    //     res();
    //   }, 1000 + Math.random() * 2000);
    // });
  },
};
