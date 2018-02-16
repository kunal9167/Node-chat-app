var socket = io();

socket.on("connect", function() {
  console.log("Connected to server");

  socket.emit("createMessage", {
    from: "Kunal",
    text: "Wassup Bro"
  });
});

socket.on("disconnect", function() {
  console.log("Disconnected from server");
});

socket.on("newMessage", function(data) {
  console.log("newMessagedata", data);
});
