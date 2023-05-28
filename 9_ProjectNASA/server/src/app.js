// flow: first comes to express() then goes to check if JSON incoming and only movies to Routes. 
const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const planetsRouter = require('./routes/planets/planets.router');
const app = express();
// can be accessed from any use site. 
app.use(cors({
    origin: 'http://localhost:3000/',
}));

app.use(morgan('combined'));
// middleware built in to parse json form body of request 
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})
app.use(planetsRouter);
module.exports = app;
