// Idea of creating a routes is to creaie a navigating point on web  
// extracting a data model form lunch. 
const express = require('express');

const { httpgetAllLunches } = require('./lunches.controller');

const launchesRouter = express.Router();

// creating a endpoint and passing it out to a getAllLunches COntroller. 
launchesRouter.get('/launches', httpgetAllLunches);
// Exporting to make avaialbe onto use . 
module.exports = launchesRouter;
