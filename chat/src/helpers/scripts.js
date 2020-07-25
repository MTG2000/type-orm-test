const $ = window.$;

$.connection.hub.url = "http://healthintouch.net/ChatWebAPI/signalr/hubs";

$.connection.hub
  .start({
    jsonp: true,
    transport: ["webSockets"],
  })
  .done((e) => {
    let realtimeHub = $.connection.realtimeService;
    console.log("connected");
    console.log(realtimeHub);
    realtimeHub.client.addChatMessage = (message) => {
      console.log(message);
    };
  })
  .fail((e) => {
    console.log(e);
    console.log("failed");
  });
