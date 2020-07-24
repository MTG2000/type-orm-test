import * as socketio from "socket.io";
import server from "../server";
import * as cookie from "cookie";
const io = socketio(server);

io.on("connection", (socket) => {
  var cookieRaw = socket.handshake.headers.cookie;
  var cookies = cookie.parse(cookieRaw);
  console.log(cookies);
});
