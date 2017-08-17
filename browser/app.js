var socket = io(window.location.origin);

socket.on("drew", data => {
    window.whiteboard.draw(data.start, data.end, data.strokeColor);
})

socket.on('connect', function () {
    console.log('I have made a persistent two-way connection to the server!');
});

socket.on('firstConnect', state => {
    state.forEach((data) => {
        window.whiteboard.draw(data.start, data.end, data.strokeColor);
    });
})

window.whiteboard.on("draw", (start, end, strokeColor) => {
    socket.emit("drewsomething", {start, end, strokeColor});
})
