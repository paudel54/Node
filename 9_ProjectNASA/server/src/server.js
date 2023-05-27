// Creating Express server
// const express = require('express');

// const app = express();
// app.listen();
// const PORT = process.env.PORT || 8000;
// console.log(PORT);

// Creating server with node builtIN HTTP module. insted of express package. 
const http = require('http');
const app = require('./app');
const PORT = process.env.PORT || 8000;
const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}...`);
})