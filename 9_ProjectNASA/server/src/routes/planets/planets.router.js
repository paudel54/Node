const express = require('express');
// destructure. 
const { getAllPlanets } = require('./planets.controller');
const planetsRouter = express.Router();
// adding callback fn as 2nd argument. 
planetsRouter.get('/planets', getAllPlanets)

module.exports = planetsRouter; 