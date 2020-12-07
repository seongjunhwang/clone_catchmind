const socket = io("/");



function sendMesseage(message) {
    socket.emit("newMessage", {message});
    console.log(`YOU: ${message}`)
}

function setNickname(nickname) {
    socket.emit("setNickname", {nickname});
}

function handleMessageNoti(data) {
    const {message, nickname} = data;
    console.log(`${nickname}: ${message}`);
}

socket.on("messageNoti", handleMessageNoti);
