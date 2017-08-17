var path = require('path');
var express = require('express');
var app = express(); // the app returned by express() is a JavaScript Function. Not something we can pass to our sockets!
var socketio = require('socket.io');

// app.listen() returns an http.Server object
// http://expressjs.com/en/4x/api.html#app.listen
var server = app.listen(process.env.PORT || 1337, () => console.log('The server is listening on port 1337!'));

var io = socketio(server);
var state = {'lobby': []};

io.on('connection', function (socket) {
    console.log('A new client has connected!');
    var room = socket.handshake.headers.referer.split('/').slice(-1)[0] || 'lobby';
    socket.join(room);
    if (!state[room]) state[room] = [];
    io.sockets.in(room).emit("firstConnect", state[room]);

    socket.on('disconnect', socket => console.log(socket + 'has disconnected'));
    socket.on('drewsomething', data => {
        io.sockets.in(room).emit("drew", data);
        state[room].push(data);
    })
});

app.use(express.static(path.join(__dirname, 'browser')));

app.get('/:roomid?', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});