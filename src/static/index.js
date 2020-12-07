const socket = io("/");

function sendMesseage(message) {
    socket.emit("newMessage", {message});
}

