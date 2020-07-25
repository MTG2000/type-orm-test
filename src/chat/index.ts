import * as socketio from "socket.io";
import server from "../server";
import * as cookie from "cookie";
import * as jwt from "jsonwebtoken";
import contactsRepository from "../repositories/contacts.repository";
import messagesRepository from "../repositories/messages.repository";
const io = socketio(server);

// middleware
io.use((socket, next) => {
  //or this:
  const cookieRaw = socket.handshake.headers.cookie;
  const { authToken } = cookie.parse(cookieRaw);
  if (!authToken) return next(new Error("authentication error"));
  const { id, user: name } = jwt.decode(authToken);

  // Validate Access Token to get User From it

  if (id) {
    socket["user"] = { id, name };
    return next();
  }
  return next(new Error("authentication error"));
});

io.on("connection", async (socket) => {
  const { id, name } = socket["user"];

  socket.on("send", async ({ room, data }, cb) => {
    const msg = await messagesRepository.save({
      content: data,
      contact: room,
      user: id,
    });

    socket.to(room).emit("receive-message", msg);
    cb();
    // socket.to(reciever).emit("msg", { id, msg });
  });

  const contacts = await contactsRepository.allContacts(id);
  contacts.forEach((contact: any) => {
    socket.join(contact.id);
  });
});
