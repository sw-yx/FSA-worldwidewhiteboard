deployed at <https://swyx-whiteboard.herokuapp.com/>

# Epilogue

Web sockets are a very powerful tool that can allow you to accomplish some really cool things in the browser; while you may not use them a lot during the rest of the program, learning about them touches upon a lot of core concepts in web development, such as the various types of internet protocols that are involved. Additionally, learning about web sockets and socket.io is a great opportunity to get more comfortable with event emitters, which are a key tool in Javascript.

# Main Takeaways

- Event emitters are objects in Javascript that have two main methods, .emit and .on.
- An .emit method takes two or more arguments: an event name (as a string) and a payload, which can be one or more arguments that we want to pass along to the event's listeners.
- The .on method takes two arguments: an event name (as a string) and a callback function, which takes whatever payload arguments the .emit method passes along to it.
- The socket.io library abstracts away a lot of the pain of working directly with sockets, allowing us to easily implement real-time interaction in our web apps.
- Socket.io must be integrated into both server-side and client-side code.
- Both the io instance (our socket-handling server) and any instances of sockets are event listeners, with .on and .emit methods.
- To communicate from our server to any connected sockets, we simply need the server to emit an event and for our sockets to listen for that event.
- To communicate from a client to the server, we simply need the client side of the socket to emit and\ event and for our server to listen for that event.
- Socket.io also has methods which give us finer control over which sockets we want to hear certain events; for instance, the socket.io.broadcast method (which broadcasts an event to all other connected sockets except the sender), or the use of rooms or namespaces.