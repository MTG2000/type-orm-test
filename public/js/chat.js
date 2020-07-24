const username = sessionStorage.getItem("username");
const reciever = sessionStorage.getItem("reciever");

const socket = io({
  query: {
    token: username,
  },
});

function scrollToBottom() {
  const messages = jQuery("#messages");
  const newMessage = messages.children("li:last-child");

  const clientHeight = messages.prop("clientHeight");
  const scrollTop = messages.prop("scrollTop");
  const scrollHeight = messages.prop("scrollHeight");
  const newMessageHeight = newMessage.innerHeight();
  const lastMessageHeight = newMessage.prev().innerHeight();

  if (
    clientHeight + scrollTop + newMessageHeight + lastMessageHeight >=
    scrollHeight
  ) {
    messages.scrollTop(scrollHeight);
  }
}

socket.on("connect", function () {
  socket.emit("open-room", { username, reciever }, function (err) {
    if (err) {
      alert(err);
      window.location.href = "/";
    } else {
      console.log("No error");
    }
  });
});

socket.on("disconnect", function () {
  console.log("Disconnected from the server");
});

socket.on("updateUserList", function (users) {
  const ol = jQuery("<ol></ol>");

  users.forEach(function (user) {
    ol.append(jQuery("<li></li>").text(user));
  });

  jQuery("#users").html(ol);
});

socket.on("msg", (data) => console.log(data));

socket.on("newMessage", function (message) {
  const formattedTime = moment(message.createdAt).format("h:mm a");

  const template = jQuery("#message-template").html();
  const html = Mustache.render(template, {
    text: message.message.text,
    from: message.username,
    createdAt: formattedTime,
  });

  jQuery("#messages").append(html);
  scrollToBottom();
});

jQuery("#message-form").on("submit", function (e) {
  e.preventDefault();

  const messageTextBox = jQuery("[name=message]");
  const rawMsg = messageTextBox.val();

  const msg = rawMsg.slice(rawMsg.indexOf(" ") + 1);
  const reciever = rawMsg.slice(1, rawMsg.indexOf(" "));

  console.log(msg, reciever);

  socket.emit(
    "send",
    {
      msg,
      reciever,
    },
    function () {
      messageTextBox.val("");
    }
  );
});
