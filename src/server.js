import express from 'express';
import http from 'http';
import { Interface } from '../src/models/interface.js';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Event handler for new socket connections
io.on('', (socket) => {
    socket.on('test', () => {
        console.log('User is connected');
    });

    // Event handler for getAll user from users table
    socket.on('getAllUsers', async () => {
        let result = await Interface.getAllUsers();
        socket.emit('returnAllUsers', result);
    });

    // Event handler for getAll user from carComments table
    socket.on('getAllComments', async () => {
        let allComents = await Interface.getAllComments();
        socket.emit('readComments', allComents.rows);
    });

    // Event handler for disconnections
    socket.on('disconnect', () => {
        console.log('User is diconnected');
    })
})

// Start the express server
app.listen(3000, () => {
    console.log('Server is success run on port 3000');
})