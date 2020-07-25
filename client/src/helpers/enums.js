export default {
  RoomsTypes: {
    Private: 0,
    Channel: 1,
    Group: 2,
  },

  EmptyGuid: "00000000-0000-0000-0000-000000000000",

  MessagesTypes: {
    Unknown: 0,
    Text: 1,
    Photo: 2,
    Audio: 3,
    Video: 4,
    Voice: 5,
    Document: 6,
    Location: 7,
    Contact: 8,
    Poll: 9,
  },

  getMessageTypeFromFileType(fileType) {
    if (fileType.indexOf("image") !== -1) return this.MessagesTypes.Photo;
    if (fileType.indexOf("video") !== -1) return this.MessagesTypes.Video;
    if (fileType.indexOf("audio") !== -1) return this.MessagesTypes.Audio;
    if (fileType.indexOf("pdf") !== -1) return this.MessagesTypes.Document;
  },
};
