import * as socketio from "socket.io";
import server from "../server";
import * as cookie from "cookie";
const io = socketio(server);

// middleware
io.use((socket, next) => {
  //this:
  let token = socket.handshake.query.token;

  //or this:
  const cookieRaw = socket.handshake.headers.cookie;
  const { accessToken } = cookie.parse(cookieRaw);
  // Validate Access Token to get User From it

  if (token) {
    socket["user"] = token;
    return next();
  }
  return next(new Error("authentication error"));
});

io.on("connection", (socket) => {
  const user = socket["user"];

  //let the user join a room uniqe to him
  socket.join(user);

  socket.on("send", ({ msg, reciever }) => {
    socket.to(reciever).emit("msg", { user, msg });
  });
});
