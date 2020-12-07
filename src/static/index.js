const socket = io("/");

function sendMesseage(message) {
    socket.emit("newMessage", {message});
}

function handleMessageNoti(data) {
    const {message} = data;
    console.log(`somebody said ${message}`);
}

socket.on("messageNoti", handleMessageNoti);
