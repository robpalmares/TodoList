const socket = io('http://localhost:3000');

socket.on('connect', data => {
    socket.on('msgFromServer', message => {
        console.log(message);
    });
    socket.emit('msgToServer', {
        data: "Hello from the client!!"
    });
});