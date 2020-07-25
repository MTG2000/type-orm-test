import Api from "../api";
import Enums from "../helpers/enums";
import HelperFuncs from "../helpers/functions";

const socket = window.io();
const MSGS_PAGE_SIZE = 10;

export default {
  namespaced: true,
  state: {
    socket,
    loadingRooms: true,
    loadingMessages: false,

    loadingNewContact: false,

    allMessages: {},
    rooms: [],

    selectedRoom: "",

    msgsToSend: [],
  },

  getters: {
    messages: (state) => {
      //messages to show in "Messages Window"
      return state.allMessages[state.selectedRoom];
    },
    loadingMessages: (state) => {
      if (!state.selectedRoom) return false;
      //messages to show in "Messages Window"
      return !state.allMessages[state.selectedRoom];
    },

    roomInfo: (state) => {
      const currentRoom = state.rooms.filter(
        (room) => room.id === state.selectedRoom
      )[0];
      if (!currentRoom) return null;
      return {
        title: currentRoom.title,
        photoUrl: currentRoom.photoUrl,
      };
    },
  },

  mutations: {
    setRooms(state, payload) {
      state.rooms = payload;
    },

    deleteRoom(state, payload) {
      state.rooms = state.rooms.filter((room) => room.id !== payload);
    },

    setMessages(state, payload) {
      state.rooms = state.rooms.map((room) => {
        if (room.id === payload.id)
          return {
            ...room,
            initialFetch: true,
          };
        return room;
      });
      state.allMessages = {
        ...state.allMessages,
        [payload.id]: payload.data,
      };
    },

    addMessages(state, { roomId, messages }) {
      state.allMessages[roomId] = [
        ...messages,
        ...(state.allMessages[roomId] || []),
      ];

      //update lastMessage Field
      for (let i = 0; i < state.rooms.length; i++) {
        if (state.rooms[i].id === roomId) {
          state.rooms[i].latestMessage = messages[messages.length - 1];
          break;
        }
      }

      // ReOrder Rooms so that the recently updated room comes first
      state.rooms = HelperFuncs.bringToTop(state.rooms, "id", roomId);

      //the message came to an unopened room
      if (state.selectedRoom !== roomId) {
        state.rooms = state.rooms.map((room) => {
          if (room.id === roomId) {
            return {
              ...room,
              newMessages: (room.newMessages || 0) + 1,
            };
          }
          return room;
        });
      }
    },

    sentMessage(state, payload) {
      const { room, id } = payload;

      state.allMessages[room];

      for (let i = 0; i < state.allMessages[room].length; i++) {
        const msg = state.allMessages[room][i];
        if (msg.id === id) {
          state.allMessages[room][i].loading = null;
          return;
        }
      }
    },

    setMessageToSend(state, payload) {
      state.msgsToSend.push(payload);
    },

    setSelectedRoom(state, payload) {
      state.selectedRoom = payload;
      state.rooms = state.rooms.map((room) => {
        if (room.id === state.selectedRoom) {
          return {
            ...room,
            newMessages: null,
          };
        }
        return room;
      });
    },
    setLoadingMessages(state, payload) {
      state.loadingMessages = payload;
    },

    setLoadingMessagesForRoom(state, { roomId, status }) {
      state.rooms = state.rooms.map((room) => {
        if (room.id === roomId) {
          return {
            ...room,
            loadingMessages: status,
          };
        }

        return room;
      });
    },

    setLoadingRooms(state, payload) {
      state.loadingRooms = payload;
    },

    setLoadingNewContact(state, payload) {
      state.loadingNewContact = payload;
    },

    createRoom(state, payload) {
      state.rooms.unshift(payload);
      state.selectedRoom = payload.id;
    },

    setMsgLoadingStatus(state, payload) {
      const { room, id, loading } = payload;

      state.allMessages[room];

      for (let i = 0; i < state.allMessages[room].length; i++) {
        const msg = state.allMessages[room][i];
        if (msg.id === id) {
          state.allMessages[room][i].loading = loading;
          return;
        }
      }
    },

    clearMsgsToSend(state) {
      state.msgsToSend = [];
    },
  },
  actions: {
    async fetchRooms({ commit }, payload) {
      try {
        commit("setLoadingRooms", true);
        const result = await Api.Rooms.getRooms({});

        commit("setRooms", result);
        commit("setLoadingRooms", false);
        return result;
      } catch (error) {
        return null;
      }
    },

    async openRoom({ commit, dispatch }, payload) {
      try {
        commit("setLoadingNewContact", true);

        // Check If Room exists

        const result = await Api.Rooms.roomExist(payload);
        let roomId;

        if (!result.contactExist) {
          //Create a room
          const newRoom = await Api.Rooms.addRoom({ roomMembers: [payload] });

          commit("createRoom", newRoom);
          roomId = newRoom.id;
        } else {
          // Just open the room
          roomId = result[0].id;
        }

        //fetch its messages (if there exist)
        dispatch("fetchMessages", roomId);
      } catch (error) {
        console.log(error);
      }
    },

    async openGroup({ commit, dispatch }, { members, title }) {
      try {
        commit("setLoadingNewContact", true);

        const newRoom = await Api.Rooms.addRoom({
          roomType: Enums.RoomsTypes.Group,
          roomMembers: members.map((m) => m.id),
          title,
        });
        commit("createRoom", newRoom);

        dispatch("fetchMessages", newRoom.id);
      } catch (error) {
        console.log(error);
      }
    },

    async fetchMessages({ commit, state }, payload) {
      commit("setSelectedRoom", payload);

      const initialFetched =
        state.rooms.filter((room) => room.id === payload && room.initialFetch)
          .length > 0;

      //if a certain room messages are already fetched
      if (initialFetched) {
        commit("setLoadingMessages", true);

        commit("setMessages", {
          id: payload,
          data: state.allMessages[payload],
        });
        commit("setLoadingMessages", false);
        return;
      }

      commit("setLoadingNewContact", false);

      //If Messages are not fetched yet then:
      commit("setLoadingMessages", true);

      //Disable the new contact dialog loading
      try {
        const result = await Api.Messages.getMessages(
          payload,
          null,
          null,
          MSGS_PAGE_SIZE
        );
        commit("setMessages", { id: payload, data: result });

        commit("setLoadingMessages", false);
      } catch (error) {
        commit("setLoadingMessages", false);
        return null;
      }
    },

    async receiveMessage({ commit }, { userId, message }) {
      try {
        const isMyMessage = userId === message.user.id;
        const roomId = message.contact.id;

        if (isMyMessage) return;

        commit("addMessages", {
          roomId,
          messages: [message],
        });
      } catch (error) {
        return null;
      }
    },

    async fetchMoreMessages({ commit, state }, payload) {
      if (
        !state.allMessages[payload] ||
        state.allMessages[payload].length % MSGS_PAGE_SIZE !== 0 ||
        state.rooms.filter(
          (room) => room.id === payload && room.loadingMessages
        ).length > 0
      )
        return;

      commit("setSelectedRoom", payload);

      // This is for preventing another request for the same page
      commit("setLoadingMessagesForRoom", { roomId: payload, status: true });

      const oldMsgs = state.allMessages[payload] || [];

      try {
        const result = await Api.Messages.getMessages(
          payload,
          null,
          null,
          MSGS_PAGE_SIZE,
          Math.ceil(oldMsgs.length / MSGS_PAGE_SIZE) + 1
        );

        commit("setMessages", {
          id: payload,
          data: [...state.allMessages[payload], ...result],
        });

        commit("setLoadingMessagesForRoom", { roomId: payload, status: false });
        commit("setLoadingMessages", false);
      } catch (error) {
        commit("setLoadingMessages", false);
        return null;
      }
    },

    async addMessage(
      { commit, state, dispatch },
      { data = "", files = [], person }
    ) {
      try {
        let newMessages = [];

        //First, Check if all files are videos or images
        let messageTypes = new Set();

        for (const file of files) {
          messageTypes.add(Enums.getMessageTypeFromFileType(file.type));
        }

        // We Have Multiple Photos or videos
        if (
          messageTypes.size === 1 &&
          (messageTypes.has(Enums.MessagesTypes.Photo) ||
            messageTypes.has(Enums.MessagesTypes.Video))
        ) {
          newMessages.push({
            id: Date.now().toString(), //it will be unique localy
            data,
            files,
            creationDate: new Date().toISOString(),
            chatPersonDto: person,
            loading: true,
            messageType: messageTypes.has(Enums.MessagesTypes.Photo)
              ? Enums.MessagesTypes.Photo
              : Enums.MessagesTypes.Video,
          });
        } else if (files.length > 0) {
          // We Have Files but the are all images & videos
          for (const file of files) {
            newMessages.push({
              id: (Date.now() + Math.random() * 900).toString(), //it will be unique localy
              data: "",
              files: [file],
              creationDate: new Date().toISOString(),
              chatPersonDto: person,
              loading: true,
              messageType: Enums.getMessageTypeFromFileType(file.type),
            });
          }
        } else {
          // Just Data
          newMessages.push({
            id: Date.now().toString(), //it will be unique localy
            content: data,
            files: [],
            created_at: new Date().toISOString(),
            user: person,
            loading: true,
            messageType: Enums.MessagesTypes.Text,
          });
        }

        //Enhanching the files to allow preview

        for (let i = 0; i < newMessages.length; i++) {
          newMessages[i].files = newMessages[i].files.map((file) => {
            file.url = URL.createObjectURL(file);
            file.preview = true;
            file.title = file.name;
            return file;
          });
        }

        commit("addMessages", {
          roomId: state.selectedRoom,
          messages: newMessages,
        });

        const currentRoom = state.selectedRoom;

        //upload all msgs that CONTAINS files ( Order Doesnot Matter )
        for (const msg of newMessages) {
          if (msg.files.length > 0)
            Api.Messages.addMessage(
              state.selectedRoom,
              msg.data,
              msg.messageType,
              msg.files,
              function(progressEvent) {
                var percentCompleted = Math.round(
                  (progressEvent.loaded * 100) / progressEvent.total
                );
                commit("setMsgLoadingStatus", {
                  room: currentRoom,
                  id: msg.id,
                  loading: (percentCompleted / 20) * 20,
                });
              }
            )
              .then((res) => {
                commit("sentMessage", {
                  room: currentRoom,
                  id: msg.id,
                });
              })
              .catch((err) => {
                console.log(err);
              });
        }

        // Upload all text message ( Order Matters )
        for (const msg of newMessages) {
          if (msg.files.length === 0) {
            commit("setMessageToSend", {
              roomId: state.selectedRoom,
              msg,
            });
            dispatch("sendMessage");
          }
        }
      } catch (error) {
        return null;
      }
    },

    async sendMessage({ commit, state }) {
      //if a requests cycle is already active then there is no need to activate a new onw
      if (state.msgsToSend.length > 1) return;

      let i = 0;
      while (i < state.msgsToSend.length) {
        const d = state.msgsToSend[i];
        const { roomId, msg } = d;
        await new Promise((res, rej) => {
          socket.emit(
            "send",
            {
              room: roomId,
              data: msg.content,
            },
            () => {
              res();
            }
          );
        });

        commit("sentMessage", {
          room: roomId,
          id: msg.id,
        });
        i++;
      }
      commit("clearMsgsToSend");
    },

    async deleteRoom({ commit, state }, payload) {
      await Api.Rooms.deleteRoom(payload);
      commit("setSelectedRoom", null);
      commit("deleteRoom", payload);
    },
  },
};
