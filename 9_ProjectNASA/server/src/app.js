const express = require('express');
const app = express();
// middleware built in to parse json form body of request 
app.use(express.json());
module.exports = app;