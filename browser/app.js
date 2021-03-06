const socket = io(window.location.origin);
const drawdata = (data) => window.whiteboard.draw(data.start, data.end, data.strokeColor)

socket.on("drew", drawdata)

socket.on('connect', () => console.log('I have made a persistent two-way connection to the server!'));

socket.on('firstConnect', state => state.forEach(drawdata))

window.whiteboard.on("draw", (start, end, strokeColor) => socket.emit("drewsomething", {start, end, strokeColor}))
