var socket = io(window.location.origin);

socket.on('connect', function () {
    console.log('I have made a persistent two-way connection to the server!');
});

window.whiteboard.on("draw", (start, end, strokeColor) => {
    socket.emit("drewsomething", {start, end, strokeColor});
})

socket.on("drew", data => {
    window.whiteboard.draw(data.start, data.end, data.strokeColor);
})


//start, end, strokeColor, shouldBroadcast